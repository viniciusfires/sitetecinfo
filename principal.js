var banners =
   [" Os melhores do brasil!","Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.quereyselector('h2#mensagem').textContent =
    banners[bannerAtual;
    ]
}

set Interval(trocaBanner, 2000);