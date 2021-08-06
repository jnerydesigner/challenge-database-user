<p align="center">
   <img src="https://github.com/jnerydesigner/challenge-database-user/blob/main/src/assets/code.jpeg" alt="Banner Github Jander Nery" style="display:block;float:none;margin-left:auto;margin-right:auto;width:60%" />
</p>
<h1 align="center">Gen_products_api</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/jnerdesigner/gen_products_api?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/jnerdesigner/gen_products_api?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jnerdesigner/gen_products_api?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/jnerdesigner/gen_products_api?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/gen_products_api?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/gen_products_api?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/gen_products_api?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Gen_products_api 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0;
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/jnerdesigner" target="_blank">Author</a>
</p>

<br>

## :dart: About

Projeto de criação de uma API feita com o NodeJs de Produtos e Categorias.

## The Project

Desenvolver uma API RESTfull utilizando nodejs e banco de dados relaciona. Cada produto deve pertencer a uma categoria pré registrada no sistema.

## :sparkles: Features

### Funcionalidades

- Usuários
  - [x] (store) Cadastrar Usuário
  - [x] (login) Login de usuário retornando um bearer token para utilizar nas chamadas abaixo
- Categorias
  - [x] (store) Cadastrar categoria
  - [x] (update) Atualizar categoria
  - [x] (delete) Remover categoria
  - [x] (show) Exibir Categoria
  - [x] (index) Listar categorias
- Produtos
  - [x] (store) Cadastrar produto
  - [x] (update) Atualizar produto
  - [x] (delete) Remover produto
  - [x] (show) Exibir produto
  - [x] (index) Listar produtos
    - [x] Filtrar por categorias

### Exemplo de Produto

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4e0dd1ac-c476-466e-937d-63f3c620dc9a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4e0dd1ac-c476-466e-937d-63f3c620dc9a/Untitled.png)

### Retorno Alcançado

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e859a35d-225d-46df-b8de-229b78cfd9ca/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e859a35d-225d-46df-b8de-229b78cfd9ca/Untitled.png)

### Regras de negócio

- [x] A data de fabricação nunca deve ser maior que a data de validade;
- [x] O Preço do produto deverá ser registrado com 2 casas decimais;
- [x] A listagem deve ter a possibilidade de ordenação dos campos e com uma paginação
      de 10 produtos por página.

### Diferenciais

- [ ] Utilizar testes unitários e de integração;
- [x] Documentação dos endpoints da API - Por partes;
- [ ] Front-end é opcional.

## :rocket: Technologies

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/jnerydesigner/gen_products_api

# Access
$ cd gen_products_api

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:3000>
```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">{{YOUR_NAME}}</a>

&#xa0;

<a href="#top">Back to top</a>
