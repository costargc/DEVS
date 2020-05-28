# Intruções

* Unzip o arquivo base que foi enviado (ou copie or aquivos para uma pasta).
* Use o terminal para criar uma pasta chamada `css`.
* Use o terminal para criar uma arquivo chamado `style.css` dentro da pasta `css`.
* Crie uma referência ao arquivo `style.css` no arquivo html `html-bio-css.html`. Utilize a seguinte sintax `<link rel="stylesheet" type="text/css" href="css/style.css">` dentro da tag `<head>`.
* Crie um estilo similar ao criado no exemplo.
  * Crie uma classe `class` chamada `"container"` na tag de `div`. Examplo: `<div class="container">`.
  * Adicione um `id` chamado `"main-bio"` para o primeiro tag `section`.
  * Adicione um `id` chamado `"contato-info"` para o segundo tag `section`.
  * Adicione um `id` chamado `"bio-imagem"` para a imagem da sua bio.

* Detalhes do estilo:
  * `body`
    * Cor do background-color é `#efeee7`.
    * A fonte usada é a `Georgia,"Times New Roman",Times,serif;`.
    * A cor da fonte é `#333333`.
    * Lembre de zerar as margens e os paddings da página para que a página grude no topo:
      ```css
      body {
        margin: 0;
        padding: 0;
      }
      ```

  * `header`
    * A cor do background-color é `#333333`.
  
  * `h1`
    * A cor da fonte é `#eee`.
    * O tamanho da fonte é `28px`.
    * Olhe o exemplo em sala de aula e estime quanto que deveria ser o padding e/ou margens e posicionamento do texto.

  * `h2`
    * o tamanho da fonte é `24px`
    
  * o tamanho do container deve ser de 1024 pixels, e centralizado. Você pode fazer isto adicionando `margin: 0 auto;`.
  * Crie `#main-bio`, `#contato-info`, `#bio-imagem` e adicione a eles `float: left`.
  * No elemento `#bio-image` crie ele com `width` de 200 pixels.
  * Inclua uma propriedade `alt` nas imagems e adicione um texto explicando o que é a imagem.
  * `#main-bio` deve ter `width` de `70%`.
    * Adicione margens a imagem para que tenha uma distância entre a imagem e o texto da bio.
  * `#contato-info` deve ter `width` de `30%`.
  * Ajuste a altura da linha (`line-height`) para que ela tenha 1.5 vezes o tamanho da fonte.
  * A cor do link deve ser `#d21034`.

* Se você não lembra ou não sabe fazer algum comando CSS olhe este link: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference>

* Bonus:

  * Stage, commit, e push estes arquivos no Github.
