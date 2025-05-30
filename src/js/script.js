// Array de imagens
let imagens = [
  'src/assets/imagem1.jpg',
  'src/assets/imagem2.jpg',
  'src/assets/imagem3.jpg'
];

// Variáveis
let i = 0;
let tempo = 2000; // 2 segundos

// Função de slideshow
function slideshow() {
  document.getElementById('image').src = imagens[i];
  i = (i + 1) % imagens.length; // Reinicia quando chega ao fim
  setTimeout(slideshow, tempo);
}

// Inicia o slideshow
window.onload = slideshow;
