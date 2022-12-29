# Métodos JavaScript

## Alert()

❗ Antes de explicar o que é o método alert(), vamos falar rapidamente sobre o que é o Browser Object Model (BOM). 
Ao abrir uma página HTML, o navegador cria um conjunto de objetos que são organizados hierarquicamente. No topo 
dessa hierarquia está o objeto window, que controla toda a página e permite acessar os objetos filhos, além de 
propriedades e métodos associados a eles.

Os objetos relacionados ao BOM estão associados a recursos para a manipulação do navegador, como os objetos screen, 
location, history e outros, que são controlados pelo objeto window. O método alert(), portanto, faz parte desse 
conjunto e é usado para permitir a interação com a pessoa usuária da página.

O método alert() exibe uma mensagem no navegador por meio de uma caixa de diálogo, que nada mais é que uma pequena 
janela popup. Além do texto, também é exibido um botão de confirmação para indicar que a pessoa realmente leu a 
mensagem. Portanto, a janela só será fechada após o clique no botão de confirmação.

Por ter a característica de bloquear a navegação da pessoa usuária enquanto o botão confirmar não for clicado, esse 
recurso deve ser usado com moderação. Além disso, existem navegadores que oferecem a função de bloquear o uso dessa 
funcionalidade.

## Filter() 

🔻 O método filter() é um recurso que permite fazer a filtragem de elementos com apenas poucas linhas de comandos. 
Na prática, ele faz a leitura dos elementos da array em busca de um valor de referência passado por meio de uma 
função callback. Ao fazer o teste em cada elemento, o método retorna um ou mais conteúdos que atendam à especificação
indicada na função callback e armazena o resultado em uma nova variável do tipo array.

#### FONTE: 
https://blog.betrybe.com
