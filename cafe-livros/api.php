<?php

session_start();

require_once __DIR__ . '/PedidoCafe.php';

header('Content-Type: application/json; charset=utf-8');

$cafes = [
    'espresso' => ['nome' => 'Espresso', 'preco' => 8.00],
    'coado' => ['nome' => 'Café Coado', 'preco' => 10.00],
    'cappuccino' => ['nome' => 'Cappuccino', 'preco' => 14.00],
    'latte' => ['nome' => 'Caffè Latte', 'preco' => 15.00],
];

$graos = [
    'orfeu-classico' => ['nome' => 'Orfeu Clássico', 'adicional' => 2.00],
    'orfeu-intenso' => ['nome' => 'Orfeu Intenso', 'adicional' => 3.50],
    'orfeu-organico' => ['nome' => 'Orfeu Orgânico', 'adicional' => 4.00],
    'orfeu-bourbon' => ['nome' => 'Orfeu Bourbon Amarelo', 'adicional' => 5.00],
];

$pedido = new PedidoCafe($cafes, $graos);

function responder(PedidoCafe $pedido, array $cafes, array $graos, ?string $erro = null): void
{
    echo json_encode([
        'erro' => $erro,
        'cafes' => $cafes,
        'graos' => $graos,
        'itens' => $pedido->listar(),
        'total' => $pedido->total(),
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $acao = $_POST['acao'] ?? '';

    try {
        if ($acao === 'adicionar') {
            $pedido->adicionar(
                $_POST['cafe'] ?? '',
                $_POST['grao'] ?? '',
                (int) ($_POST['quantidade'] ?? 0)
            );
        }

        if ($acao === 'limpar') {
            $pedido->limpar();
        }

        responder($pedido, $cafes, $graos);
    } catch (InvalidArgumentException $e) {
        responder($pedido, $cafes, $graos, $e->getMessage());
    }
}

responder($pedido, $cafes, $graos);