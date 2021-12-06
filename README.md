# CASH FORCE 

## Utilizando a versão do node v14.17.5

# PARA RODAR O PROJETO EM SUA MÁQUINA CLONE O REPOSITÓRIO E SIGA ESSE PASSO-A-PASSO
Clone o projeto para sua máquina: git clone git@github.com:thiagoleite92/cashforce_v3.git

# Backend - Vá para a pasta raiz do backend -> /cashforce/backend
  Faça a instalação dos pacotes utilizando o comando npm install ou npm i
  Após isso configure o arquivo cashforce/backend/config/config.json com suas informações e o nome do banco de dados
  {
  "development": {
    "username": "username_sql", < nome do seu usuário ou usuário root
    "password": "password_sql", < password da conta utilizada
    "database": "cashforce_v3",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "timestamps": true
    }
  }
  }
  
  ainda no caminho cashforce/backend, digite no terminal npm run dev para deixar o servidor online
 
# Frontend - Vá para a pasta raiz do frontend -> /cashforce/frontend
  Faça a instalão dos pacotes utilizando o comando npm install ou npm i
  
  ainda no caminho cashforce/frontend, digite no seu terminal npm start

### Tudo vai funcionar normal
