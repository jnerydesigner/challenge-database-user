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

![https://github.com/jnerydesigner/challenge-database-user/blob/main/src/assets/tela_cadastro_empresa.png](https://github.com/jnerydesigner/challenge-database-user/blob/main/src/assets/tela_cadastro_empresa.png)

### Retorno Alcançado

![https://github.com/jnerydesigner/challenge-database-user/blob/main/src/assets/tela_cadastro_minha.png](https://github.com/jnerydesigner/challenge-database-user/blob/main/src/assets/tela_cadastro_minha.png)

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

# Run the docker to install the Postgres database
docker-compose up

or

docker-compose up -d #run in detach mode

# Run the typeorm to install as migrations
yarn typeorm migration:run

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:4444>
# or
#change teh port in file .env
```

## :checkered_flag: Documentation

- Nota: Tentei fazer toda a documentação dos endpoints, mas não deu tempo, mas algumas foram criadas usando o Swagger

- Só vai rodar se não mudar a porta
  <a href="http://localhost:4444/api-docs" target="_blank">Documentação</a>

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/jnerydesigner" target="_blank">Jander Nery</a>

&#xa0;

<a href="#top">Back to top</a>
