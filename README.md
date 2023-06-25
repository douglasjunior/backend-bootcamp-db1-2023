# Trabalho final da disciplina de Backend

- Professor: Douglas Nassif Roma Junior
- LinkedIn: https://www.linkedin.com/in/douglasjunior/

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
> ```

### Login de usuários 

> POST /usuarios/login
>
> Body:
> ```json
> {
>   "email": "fulano@email.com",
>   "senha": "12345678"
> }
> ```

## Rotas autenticadas

Todas as rotas autenticadas exigem que o `token jwt` seja passado no cabeçalho (header) chamado `Authorization`.

### Cadastrar tarefas

> POST /tarefas
>
> Headers:
> ```properties
> Authorization: Bearer s8a7df687sadf687sadf67s98f98sdf...
> ```
>
> Body:
> ```json
> {
>     "titulo": "Aprender Node",
>     "concluida": false
> }
> ```

### Consultar tarefas

> GET /tarefas
>
> Headers:
> ```properties
> Authorization: Bearer s8a7df687sadf687sadf67s98f98sdf...
> ```

### Obter tarefa por ID

> GET /tarefas/1
>
> Headers:
> ```properties
> Authorization: Bearer s8a7df687sadf687sadf67s98f98sdf...
> ```

### Marcar tarefa como concluída

> PUT /tarefas/1/concluida
>
> Headers:
> ```properties
> Authorization: Bearer s8a7df687sadf687sadf67s98f98sdf...
> ```

### Marcar tarefa como pendente

> PUT /tarefas/1/pendente
>
> Headers:
> ```properties
> Authorization: Bearer s8a7df687sadf687sadf67s98f98sdf...
> ```

### Atualização parcial da tarefa

> PATCH /tarefas/1
>
> Headers:
> ```properties
> Authorization: Bearer s8a7df687sadf687sadf67s98f98sdf...
> ```
>
> Body:
> ```json
> {
>     "titulo": "Aprender Node",
>     "concluida": false
> }
> ```
