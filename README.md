# CréditoParaTodxs - Crédito Pessoal Simplificado

## Requisitos

Baixe e instale os seguintes requisitos antes de iniciar o projeto

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://docs.mongodb.com/manual/installation/#mongodb-installation-tutorials)

## Instalação do sistema

Clone o repositório

```bash
git clone https://github.com/jaisonklemer/projeto-serasa-credito
```

Instale as dependências com o comando:

```bash
npm i
```

## Rodando o sistema

Crie um arquivo `.env` no diretório raiz.

Edite este arquivo com a URL de conexão com o MongoDB,

Por exemplo:

```bash
DB_CONNECTION=mongodb://localhost:27017/credito
```

Popule o Banco de Dados com dados iniciais com o comando:

```bash
npm run seed
```

Para executar o sistema, execute o comando:

```bash
npm run start
```

O servidor será iniciado em `localhost:5000`

#

## Instruções de Uso
