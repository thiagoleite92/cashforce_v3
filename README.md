# CASH FORCE 

## Utilizando a versão do node v14.17.5

# PARA RODAR O PROJETO EM SUA MÁQUINA CLONE O REPOSITÓRIO E SIGA ESSE PASSO-A-PASSO

# Backend - Na pasta raiz do backend -> /cashforce_v3-main/backend
  Faça a instalação dos pacotes utilizando o comando npm install ou npm i.  
  Após isso configure o arquivo cashforce/backend/config/config.json com suas informações e o nome do banco de dados.  
  {
  "development": {  
    "username": "username_sql", < nome do seu usuário ou usuário root  
    "password": "password_sql", < password da conta utilizada  
    "database": "cashforce_v3", < se esse banco de dados já existir, utilize outro nome.  
    "host": "127.0.0.1",  
    "dialect": "mysql",  
    "define": {  
      "timestamps": true  
    }  
  }  
  }    
  
  Depois do arquivo config.json devidamente configurado, precisamos fazer a configuração do banco de dados proprimante dito.  
  
  ## Siga esses comandos para fazer a configuração do banco de dados utilzando o Sequelize  
  npx sequelize db:create > criar o banco de dados propriamente dito  
  npx sequelize db:migrate > criar as tabelas no banco de dados que acabamos de criar  
  npx sequelize db:seed:all > inserção de dados fictícios nas tabelas  
  
  Se tudo ocorreu como esperado, digite no terminal *npm run dev* para deixar o servidor online  
 
# Frontend -Na pasta raiz do frontend -> /cashforce_v3-main/frontend
  Faça a instalação dos pacotes utilizando o comando npm install ou npm i.  
  
  Ainda no caminho cashforce/frontend, digite no seu terminal npm start.  
  
  Se não abrir uma aba em seu navegador com o endereço localhost:3000, faça isso manualmente ou seguindo a instrução que irá aparecer no terminal.  

### Tudo vai funcionar normal.
