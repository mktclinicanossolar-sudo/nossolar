Coloque seu arquivo de fonte .ttf aqui nesta pasta (/public/fonts/).

Exemplo de nome de arquivo:
minha-fonte.ttf

No arquivo /src/index.css, você poderá ativar a fonte usando:

@font-face {
  font-family: 'MinhaFonteCustom';
  src: url('/fonts/minha-fonte.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
