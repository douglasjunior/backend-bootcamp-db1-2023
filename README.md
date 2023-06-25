# Trabalho final da disciplina de Backend

## Para rodar o projeto

1. Baixe o projeto
1. Instale as dependências
    ```
    npm install
    ```
1. Configure as variáveis de ambiente no arquivo `env.dev`
    > Você precisa estar com o `MySQL` rodando e com um banco de dados já criado.
    > 
    > As tabelas serão criadas automaticamente pelo `Sequelize`.
1. Rode o projeto
    ```
    npm run dev
    ```

## Rotas públicas

### Cadastro de usuários 

> POST /usuarios
>
> Body:
> ```json
> {
>   "nome": "Fulano da Silva",
>   "email": "fulano@email.com",
>   "senha": "12345678"
> }
>

### Login de usuários 

> POST /usuarios/login
>
> Body:
> ```json
> {
>   "email": "fulano@email.com",
>   "senha": "12345678"
> }
>

## Rotas autenticadas

Todas as rotas autenticadas exigem que o `token jwt` seja passado no cabeçalho (header) chamado `Authorization`.

EM BREVE ...

-----

Professor: Douglas Nassif Roma Junior
LinkedIn: https://www.linkedin.com/in/douglasjunior/
