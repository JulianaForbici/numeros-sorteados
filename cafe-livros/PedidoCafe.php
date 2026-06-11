<?php

class PedidoCafe
{
    private array $cafes;
    private array $graos;

    public function __construct(array $cafes, array $graos)
    {
        $this->cafes = $cafes;
        $this->graos = $graos;

        if (!isset($_SESSION['pedido_cafe'])) {
            $_SESSION['pedido_cafe'] = [];
        }
    }

    public function adicionar(string $cafeId, string $graoId, int $quantidade): void
    {
        if (!isset($this->cafes[$cafeId])) {
            throw new InvalidArgumentException('Selecione um café válido.');
        }

        if (!isset($this->graos[$graoId])) {
            throw new InvalidArgumentException('Selecione um grão válido.');
        }

        if ($quantidade <= 0) {
            throw new InvalidArgumentException('Informe uma quantidade válida.');
        }

        $_SESSION['pedido_cafe'][] = [
            'cafeId' => $cafeId,
            'graoId' => $graoId,
            'quantidade' => $quantidade,
        ];
    }

    public function listar(): array
    {
        $itens = [];

        foreach ($_SESSION['pedido_cafe'] as $item) {
            $cafe = $this->cafes[$item['cafeId']];
            $grao = $this->graos[$item['graoId']];
            $precoUnitario = $cafe['preco'] + $grao['adicional'];
            $subtotal = $precoUnitario * $item['quantidade'];

            $itens[] = [
                'cafe' => $cafe['nome'],
                'grao' => $grao['nome'],
                'quantidade' => $item['quantidade'],
                'precoUnitario' => $precoUnitario,
                'subtotal' => $subtotal,
            ];
        }

        return $itens;
    }

    public function limpar(): void
    {
        $_SESSION['pedido_cafe'] = [];
    }

    public function total(): float
    {
        $total = 0;

        foreach ($this->listar() as $item) {
            $total += $item['subtotal'];
        }

        return $total;
    }
}