<h1 align="center">
      <a href="#" alt=""> Projeto MACS - front-end </a>
</h1>

<h3 align="center">
    Trata-se de projeto de desenvolvimento de solução digital para a transformação do trabalho dos Agentes Comunitários de Saúde (ACS).
</h3>


Tabela de conteúdos
=================
<!--ts-->
   * [pmacs-gestao-frontend](https://github.com/PMACS-ORG/pmacs-gestao-frontend/blob/main/README.md#pmacs-gestao-frontend)
   * [Instalação](https://github.com/PMACS-ORG/pmacs-gestao-frontend/blob/main/README.md#instala%C3%A7%C3%A3o)
<!--te-->

## pmacs-gestao-frontend

A metodologia de planejamento, desenvolvimento, monitoramento e avaliação a ser utilizada consiste nos manuais de saúde digital da 
OMS lançados em 2015 e 2016: MAPS Toolkit (1) e Monitoring and Evaluating Digital Health Interventions – MEDHI (2).

O projeto predecessor direto foi financiado por edital da VPPCB nos anos de 2016 e 2017, e consistiu no desenvolvimento da solução 
até a fase de protótipo e teste piloto inicial em parceria com a SES - Bahia e SMS - Camaçari.

O primeiro projeto teve como objetivo desenvolver solução tecnológica flexível e centrada na rotina de trabalho dos Agentes Comunitários
de Saúde (ACS) com incorporação de tecnologias móveis e a sua aplicação para potencializar a análise e o uso dos dados manejados pelos 
profissionais da Saúde da Família para planejar, direcionar e apoiar intervenções de saúde ajustas as realidades das microáreas, e assim 
com abordagens experimentais e processos valiativos orientado por dados, produzir evidências que corroborem com as ações de promoção, 
monitoramento, vigilância e prevenção à saúde.


Este projeto tem como objetivos:
Realizar o planejamento de scaling-up utilizando o protocolo MAPS.
1. Levar o produto as duas fases seguintes do processo de maturidade previsto no protocolo MEDHI, quais sejam, demonstração e scale-up.
2. Desenvolver plataforma de inovação aberta para uso e análise de dados de soluções e saúde digital para ACS, agregando outras iniciativas 
de base local e interoperando em escala nacional com os sistemas de disseminação de informações da Atenção Básica do Ministério da Saúde.
3. O projeto será desenvolvido por meio de dois laboratórios da Fiocruz que tem o expertise necessário para o scaling up da solução: o CIDACS
da Fiocruz Bahia, SE/UNASUS, localizada na Fiocruz Brasília, sob supervisão da VPEIC.


## Instalação

Este projeto foi desenvolvido usando a biblioteca Reactjs versão 16.8.6 com nodejs versão 12.13.0.

Para executar o projeto é necessário possui o nodejs com npm instalado na máquina, além do git para o controle de versão.

Para instalar e executar o projeto em modo de desenvolvimento:

1. Clone o projeto do repositório
`git clone <URI do repositório>`

2. Na pasta do projeto, instale as dependêcias
`npm install`

3. Execute o projeto
`npm start`

Para instalar e executar o projeto em modo de produção:

1. Na pasta do projeto, instale as dependêcias
`npm install`

2. Prepare o build do projeto para produção
`npm run build`

3. Execute o build
`node ./server.js`

Para executar o projeto por meio de uma imagem docker:

`docker build -t pmacshub/pmacs-front-v2 .`



