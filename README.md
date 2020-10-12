# Escalator
Um auxiliador para o estudo e entendimento de escalas musicais.

Este repositório contém o front e o back-end da aplicação, dispostos nas pastas __./client__ e __./api__, respectivamente.

O back-end está atualmente deployado no Heroku, disponível [nesta url](https://escalator-api.herokuapp.com/).

O Escalator utiliza o [ToneJS](https://tonejs.github.io/) para reproduzir as notas e escalas musicais.

## Funcionamento
Escalas musicais são formadas com base em regras, que ditam quantos tons e semitons uma nota deve ter de "distância" umas das outras. E uma vez que essas regras não mudam, o único parâmetro necessário é uma nota de referência. O Escalator abstrai esta geração no backend, e as regras são escritas da seguinte forma:

___0 2 4 5 7 9 11 0___

O numeral 0 representa a nota referência, e a cada incremento de 1, temos a __nota de referência + um semi tom__.

Ex: No exemplo dado, sendo a nota referência o C (Dó), o 2 simboliza o D (Ré), o 3 simboliza o E (Mi) e assim por diante, representando ao final, a escala maior natural de Dó.

## Deploy
#### Front-end
O front-end da aplicação está disposto no Github Pages, e o código refenciado para deploy está disposto na [branch gh-pages](https://github.com/HigorC/escalator/tree/gh-pages). Para realizar o deploy:

```bash
cd client
npm run deploy
```

Isto faz um build através do vue-cli, e um push desses arquivos gerados na branch gh-pages. O Github reflete em produção exatamente o que está nesta branch.

#### Back-end
O back-end da aplicação está disposto no Heroku, e o código refenciado para deploy está disposto na [branch api](https://github.com/HigorC/escalator/tree/api). Para realizar o deploy:

```bash
cd api
npm run deploy
```

Isto copia os arquivos da pasta /api para a branch api, referenciada no Heroku como default.