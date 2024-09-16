# Pet API | Because We Love Our Pets
<img src="pet-api-repo-banner.png" alt="Banner do repositório">

## Visão Geral

A **Pet API** é uma API RESTful desenvolvida com Node.js, Express e MongoDB para gerenciar informações sobre pets e seus donos. A API oferece endpoints para criar, ler, atualizar e excluir pets e donos de pets. Este projeto é para fins educativos e segue princípios de Clean Code e melhores práticas de desenvolvimento.

## Funcionalidades

- Gerenciamento de Pets
  - Criação de novos pets
  - Consulta de todos os pets
  - Atualização de informações de pets
  - Exclusão de pets
- Gerenciamento de Donos de Pets
  - Criação de novos donos de pets
  - Consulta de todos os donos de pets
  - Atualização de informações de donos de pets
  - Exclusão de donos de pets

## Tecnologias Utilizadas

- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: Biblioteca de modelagem de dados para MongoDB.
- **Express**: Framework para construção de APIs em Node.js.
- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Eslint**: Ferramenta para análise estática de código.

##  Estrutura do Projeto

```bash
/controllers
  pet.controller.js
  petOwner.controller.js
/middlewares
  /validations
    index.js
    validateAge.js
    validateEmail.js
    validatePetId.js
    validatePetName.js
    validatePetOwnerId.js
    validatePetOwnerName.js
    validatePhoneNumber.js
    validateSpecies.js
/models
  Pet.js
  PetOwner.js
/routes
  pet.routes.js
  petOwner.routes.js
/src
  app.js
  server.js
/.env-example
/.eslintignore
/.eslintrc.json
/.gitignore
/package.json
/README.md
```

## Configuração

1. **Clone o repositório:**

```bash
git clone https://github.com/usuario/pet-api.git
```

2. **Instale as dependências:**

```bash
cd pet-api
npm install
```

3. **Configure o ambiente:**

Renomeie o arquivo `.env-example` para `.env` e ajuste as variáveis conforme sua configuração do MongoDB:

```makefile
DB_USER=seuUsuario
DB_PASSWORD=suaSenha
PORT=3001
```

4. **Inicie o servidor:**

```bash
npm start
```

O servidor estará disponível na porta definida no arquivo `.env`, ou na porta 3001 por padrão.

## Endpoints da API

### Pets
- **POST /pet**
  - Cria um novo pet.
  - Requisitos: nome, espécie, idade (opcional).

- **GET /pet**
  - Obtém todos os pets.

- **PUT /pet/**
  - Atualiza um pet existente pelo ID.
  - Requisitos: nome, espécie, idade (opcional).

- **GET /pet/**
  - Obtém um pet pelo ID.

- **DELETE /pet**
  - Remove todos os pets.

- **DELETE /pet/**
  - Remove um pet pelo ID.

### Donos de Pets

- **POST /petOwner**
  - Cria um novo dono de pet.
  - Requisitos: nome, email, número de telefone.

- **GET /petOwner**
  - Obtém todos os donos de pets.

- **PUT /petOwner/**
  - Atualiza um dono de pet existente pelo ID.
  - Requisitos: nome, email, número de telefone.

- **GET /petOwner/**
  - Obtém um dono de pet pelo ID.

- **DELETE /petOwner/**
  - Remove um dono de pet pelo ID.

## Validações

A API inclui validações para garantir que os dados enviados estejam corretos e consistentes. As validações são realizadas nos seguintes campos:

- Pet
  - Nome (não vazio e sem caracteres especiais)
  - Espécie (não vazio e sem caracteres especiais)
  - Idade (número positivo, se fornecido)
- Dono de Pet
  - Nome (não vazio e sem caracteres especiais)
  - Email (formato válido)
  - Número de telefone (formato válido)

## Testes

Para adicionar testes ao projeto, você pode usar frameworks de teste como Jest. No entanto, atualmente, o projeto não inclui testes automatizados.

## Checklist

- [x] Criar um arquivo dedicado para rotas (router.js)
- [x] Revisar todo o código
- [ ] Dockerizar
- [x] Adicionar novas funcionalidades
- [x] Incluir mais detalhes na model Pet
- [x] Criar uma nova model (PetOwner)
- [x] Escrever novos métodos para PetOwner (getById, updateById,deleteById)
- [x] Elaborar o README
- [ ] Fazer um checklist de cada passo que precisa ser feito
- [ ] Fazer a relação de dados entre Pet e PetOwner
- [x] Criar middlewares de validação
- [x] Testar todas as rotas

## Documentação

- **MongoDB**: [Documentação](https://www.mongodb.com/pt-br/docs/)
- **Mongoose**: [Documentação](https://mongoosejs.com/docs/)
- **Express**: [Documentação](https://expressjs.com/pt-br/)

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença ISC.