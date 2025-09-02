# MyGastronomy

MyGastronomy é uma aplicação web completa projetada para gerenciar e explorar o mundo da gastronomia. Ele oferece uma plataforma robusta para usuários e administradores, com um backend poderoso e interfaces de usuário intuitivas para o cliente e para o administrador.



## Recursos

### Backend

O backend é construído com Node.js e Express, fornecendo uma API RESTful para gerenciar dados de gastronomia. Ele se conecta a um banco de dados MongoDB para armazenamento de dados.

- **Tecnologias**: Node.js, Express, MongoDB, Mongoose (para interação com o banco de dados).
- **Funcionalidades**: Gerenciamento de usuários, autenticação (JWT), gerenciamento de receitas, gerenciamento de categorias, upload de imagens.

### Frontend (Cliente)

O frontend do cliente é desenvolvido com React e Vite, oferecendo uma interface de usuário moderna e responsiva para os usuários finais explorarem receitas, criarem perfis e interagirem com a plataforma.

- **Tecnologias**: React, Vite, React Router DOM, Material-UI (MUI) para componentes de UI.
- **Funcionalidades**: Navegação de receitas, pesquisa, visualização de detalhes da receita, criação de perfil de usuário, autenticação de usuário.

### Frontend (Admin)

O frontend do administrador é uma aplicação React separada, também construída com Vite, projetada para gerenciar o conteúdo da plataforma, usuários e outras configurações administrativas.

- **Tecnologias**: React, Vite, Material-UI (MUI).
- **Funcionalidades**: Gerenciamento de usuários, gerenciamento de receitas, gerenciamento de categorias, moderação de conteúdo.




## Instalação

Siga os passos abaixo para configurar e executar o projeto MyGastronomy em sua máquina local.

### Pré-requisitos

Certifique-se de ter o seguinte software instalado em seu sistema:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- MongoDB (servidor de banco de dados)

### Configuração do Backend

1. Navegue até o diretório `backend`:

   ```bash
   cd backend
   ```

2. Instale as dependências do backend:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do diretório `backend` e adicione as seguintes variáveis de ambiente:

   ```
  MONGO_CS='connection string do MongoDB'
  MONGO_DB_NAME='Db Name'
   ```

4. Inicie o servidor backend:

   ```bash
   npm run dev
   ```

   O servidor backend será executado em `http://localhost:5000` (ou na porta configurada).

### Configuração do Frontend (Cliente)

1. Navegue até o diretório `frontend`:

   ```bash
   cd frontend
   ```

2. Instale as dependências do frontend:

   ```bash
   npm install
   ```

3. Inicie o aplicativo cliente:

   ```bash
   npm   run dev
   ```

   O aplicativo cliente será executado em `http://localhost:5173` (ou na porta configurada).

### Configuração do Frontend (Admin)

1. Navegue até o diretório `frontendadmin`:

   ```bash
   cd frontendadmin
   ```

2. Instale as dependências do frontend admin:

   ```bash
   npm install
   ```

3. Inicie o aplicativo admin:

   ```bash
   npm run dev
   ```

   O aplicativo admin será executado em `http://localhost:5174` (ou na porta configurada).


## Uso

### Backend

O backend fornece uma API RESTful para gerenciar dados de gastronomia. Você pode interagir com ele usando ferramentas como Postman ou cURL, ou através dos aplicativos frontend.

### Frontend (Cliente)

O aplicativo cliente permite que os usuários:

- Naveguem por uma ampla variedade de receitas.
- Pesquisem receitas por nome, ingredientes ou categoria.
- Visualizem detalhes completos de cada receita, incluindo ingredientes, instruções e informações nutricionais.
- Criem e gerenciem seus próprios perfis de usuário.
- Autentiquem-se para acessar recursos personalizados.

### Frontend (Admin)

O aplicativo de administração permite que os administradores:

- Gerenciem usuários e suas permissões.
- Adicionem, editem e excluam receitas.
- Gerenciem categorias de receitas.
- Moderem o conteúdo gerado pelo usuário.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
