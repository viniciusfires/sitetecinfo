var banners =
 ["os melhores do brasil","qualidade e preço baixo!"];
 var bannerAtual = 0;

 function trocaBanner() {
     bannerAtual = (bannerAtual + 1)%2;
     document.querySelector('h2#mesagem').textContent=
     banners[bannerAtual];   
 }

 setInterval(trocaBanner,2000);