# projeto_transferencias_financeiras
 
--------------------------------------------------------------------------------------------------------------------------------------
O que foi usado para desenvolver o projeto:
--------------------------------------------------------------------------------------------------------------------------------------
1 - Um microsserviço foi criado usando spring-boot (api_financial_transfers)
  - Obs. A versão do java usada foi 16.0.1

2 - Um front-end foi criado usando React (front_financial_transfers)
  - O front consulta o MS que, por sua vez, realiza os cálculos e responde para o front

--------------------------------------------------------------------------------------------------------------------------------------
Como fazer o projeto funcionar:
--------------------------------------------------------------------------------------------------------------------------------------
3 - Execute o MS (projeto api_financial_transfers)
  - Esse é um projeto spring-boot que pode ser inicializado com o comando: 
  ```sh
  mvn clean package
  java -jar <nome do jar gerado na pasta target>
  ```
 
4 - Execute o front-end (projeto front_financial_transfers)
  - Para executar o front é necessário ter o nodeJs e o npm instalados (foram usados o nodejs v11.9.0 e npm 6.5.0)
  - Com isso execute o comando: "npm install" na pasta do projeto e depois disso execute o comando: "npm start"
  ```sh
  npm install
  npm start
  ```
  - Se tudo correr bem, Uma aba do navegador se abrirá com a página inicial do projeto.
 
 
 
