# projeto_banco_de_sangue
 
--------------------------------------------------------------------------------------------------------------------------------------
O que foi usado para desenvolver o projeto:
--------------------------------------------------------------------------------------------------------------------------------------
1 - Banco de Dados PostgreSQL versão 13.
  - Foram criadas 5 tabelas contendo os dados enviados no arquivo dados.json (contato, dados_clinicos, endereco, pessoa, tipo_contato)
  - O banco foi usado em ambiente localhost, porta padrão, com usuário postgre e senha 029696

2 - Uma API foi criada no Swagger (https://app.swaggerhub.com/apis/carlomagnorocha/api_banco_de_sangue/1.0.0) contendo os endpoints que tratam as questões definidas no           documento de requisitos.
  - A API foi gerada com stub spring-boot
  - Obs. A versão do java usada foi 1.8

3 - Um front-end foi criado usando React
  - O front consulta a API, que por sua vez, consulta a base de dados

4 - Um projeto java simples foi criado apenas para carregar as tabelas do banco de dados a partir da leitura do arquivo dados.json
  - o carregador alimenta as tabelas, com exceção da tabela tipo_contato que é uma tabela de domínio (ela pode ser carregada usando o arquivo de script contido na pasta             scripts_postgresql)

--------------------------------------------------------------------------------------------------------------------------------------
Como fazer o projeto funcionar:
--------------------------------------------------------------------------------------------------------------------------------------
1 - Peimeiro, crie as tabelas no banco de dados postgresql
  - A pasta scripts_postgresql contem todos os arquivos de criação de cada tabela do sistema

2 - Carregue os dados do arquivo dados.json para as tabelas
  - Para tanto, é possível usar os arquivos de import contidos na pasta scripts_postgresql. Há um arquivo para cada tabela
  - É possível também carregar as tabelas executando o java carrega_banco_de_sangue (por maio da classe Carregador.java, que possui um método main)
    - Obs. A tabela tipo_contato não é carregada pelo Carregador, portanto, esta deve ser carregada apenas pelo arquivo de import

3 - Execute a API banco_de_sangue_api
  - Esse é um projeto spring-boot que pode ser inicializado com o comando: "java -jar <nome do jar gerado na pasta target>"
  - Obs. Os dados para conexão ao banco estão na classe ConnectionPostgreSql.java. Tenha certeza de entrar com os dados (host, port, user, pass, dataBase e schema) corretos       para sua instalação do postgresql
 
4 - Execute o front banco_de_sangue_front
  - Para executar o front é necessário ter o nodeJs e o npm instalados (foram usados o nodejs v11.9.0 e npm 6.5.0)
  - Com isso execute o comando: "npm install" na pasta do projet
  - Depois disso execute o comando: "npm start"
  - Se tudo correr bem, Uma aba do navegador se abrirá com a página inicial do projeto.
 
5 - Navegue clicando nos botões. 
  - Cada botão executa um processo que responde às perguntas definidas no documento de requisitos
 
 
