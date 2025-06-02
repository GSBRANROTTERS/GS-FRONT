// Array de imagens
let imagens = [
  'src/assets/graficodecustos.jpg',
  'src/assets/alagamento.jpg',
  'src/assets/graficomortes.jpg'
];

// Variáveis
let i = 0;
let tempo = 3000; // 4 segundos

// Função de slideshow
function slideshow() {
  document.getElementById('image').src = imagens[i];
  i = (i + 1) % imagens.length; // Reinicia quando chega ao fim
  setTimeout(slideshow, tempo);
}

// Inicia o slideshow
window.onload = slideshow;
