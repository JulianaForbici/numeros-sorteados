# 🎲 Números Sorteados

Projeto simples desenvolvido em **PHP** para praticar **lógica de programação** e testar a execução de uma aplicação em container utilizando **Podman**.

O objetivo deste repositório é servir como ambiente de estudo para entender conceitos básicos de PHP, criação de imagem com `Dockerfile` e execução de containers com Podman.

## 🚀 Tecnologias utilizadas

* PHP 8.3
* Apache
* Podman
* Dockerfile

## 📁 Estrutura do projeto

```text
numeros-sorteados/
├── Dockerfile
├── index.php
└── README.md
```

## 🐘 Dockerfile

O projeto utiliza a imagem oficial do PHP com Apache:

```Dockerfile
FROM php:8.3-apache

WORKDIR /var/www/html

RUN a2enmod rewrite

COPY . /var/www/html

EXPOSE 80
```

## ▶️ Como executar com Podman

Clone o repositório:

```bash
git clone https://github.com/JulianaForbici/numeros-sorteados.git
```

Acesse a pasta do projeto:

```bash
cd numeros-sorteados
```

Crie a imagem:

```bash
podman build -t numeros .
```

Execute o container:

```bash
podman run --replace -d --name numeros -p 8080:80 numeros
```

Acesse no navegador:

```text
http://localhost:8080
```

## 🛠️ Comandos úteis

Listar containers em execução:

```bash
podman ps
```

Parar o container:

```bash
podman stop numeros
```

Listar imagens locais:

```bash
podman images
```

Remover o container:

```bash
podman rm numeros
```

Remover a imagem:

```bash
podman rmi numeros
```

## 📚 Objetivo de aprendizado

Este projeto foi criado para praticar:

* Lógica de programação com PHP
* Manipulação de variáveis
* Condicionais
* Laços de repetição
* Arrays
* Exibição de informações na tela
* Criação de imagem com Dockerfile
* Execução de aplicação PHP com Podman

## 📌 Status do projeto

Projeto desenvolvido para fins de estudo.
