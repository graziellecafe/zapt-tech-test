<h1> 📍 Zapt Tech: Desafio Técnico </h1>
<h2> 🔍   Instalação </h2>
Para a visualização do projeto, o primeiro passo é clonar o projeto a partir do link

```
https://github.com/graziellecafe/zapt-tech-test.git
```

Depois abra o projeto e vá até os diretórios de backend e frontend como mostrado abaixo

```js
cd backend
npm install
node server.js
```

Deve aparecer no terminal <b>"Servidor rodando na porta 3001.</b>

```js
cd frontend
npm install
npm start
```

Deve abrir o <b>http://localhost:3000/</b>, renderizando do lado esquerdo o mapa fornecido da <b> Zapt Tech</b> e do lado direito a renderização da <b>lista de lojas</b>.

No mapa do lado esquerdo temos a opção de visualizar o Mapa além das opções na parte inferior, como Início, Lista, Notícias e Mais.

![Texto Alternativo](./frontend/src/images/tela-zapt-tech.png)

<h2> 📝   Resolução dos Casos </h2>
<h3> 👩🏻‍💻 Caso 1 </h3>
<b>Apresentar Mapa</b>: Para isso, integrar via iFrame com o Mapa da Zapt Tech. As instruções de integração estão aqui:

```js
http://docs.zapt.tech/#ZaptMapsSDK
```

Dados para integração:

```js
- PLACE_ID: -ltvysf4acgzdxdhf81y
- API_KEY: 26ee8805-55f8-484a-a229-59d813131484
```

Para a resolução do Caso 1, foi codificado o componente <b>MapContainer.js</b> que integra via iframe o link disponibilizado na documentação o mapa de exemplo para resolução do desafio técnico pela Zapt Tech. Foi adicionado algumas opções para ser mostrado junto ao mapa como <b>Início, Mapa, Lista, News e Mais</b> e a o<b>pção de busca e seleção</b> entre os tipos de fornecedores: <b> Alimentação, Lojas e Serviços</b>.

```js
import React from "react";
import "../App.css";

export const MapContainer = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://app.zapt.tech/#/map?placeId=-ltvysf4acgzdxdhf81y&search=true"
        title="Zapt Tech Map"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}></iframe>
    </div>
  );
};
```

O App.css é responsável pelo CSS de todo o código, de forma a utilizar <b>as cores e fundos usados na marca da Zapt Tech</b> em seu site afim de passar uma <b>identificação para o usuário</b>.
