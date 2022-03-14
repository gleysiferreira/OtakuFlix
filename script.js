var animes = "Animes";
document.write("<h2>" + animes + "</h2>");

var listaAnimes = [
  "https://media.fstatic.com/ZdB0MC8XDgyuVNZ3dkPMs_Vd0ug=/290x478/smart/media/movies/covers/2022/01/cats_SgaJ4aG.jpg",
  "https://akibamarket.com/wp-content/uploads/2020/06/one-piece-2-horizontal-copia.jpg",
  "https://m.media-amazon.com/images/I/71CirqcvjKL._AC_SY679_.jpg",
  "https://s2.gaming-cdn.com/images/products/5809/orig/jogo-steam-one-punch-man-a-hero-nobody-knows-cover.jpg",
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xSctyYHNUQJqniZ06VOzi1rPlPp.jpg",
  "https://m.media-amazon.com/images/I/914-pZTMQRL._AC_SY679_.jpg",
  "https://pm1.narvii.com/6276/c39eead40195b9b3d7e2b7cbed4c6fce65815a88_hq.jpg",
  "https://i.pinimg.com/736x/7a/09/64/7a096487a3c52c3010b95a00ea56dd1a.jpg",
  "https://subanimes.biz/wp-content/uploads/2020/07/animes-one-hd-Boku-no-Hero-Academia.jpg",
  "https://kbimages1-a.akamaihd.net/33dd6129-976f-4865-b0f3-6c893ebda257/1200/1200/False/dr-stone-vol-14.jpg",
  "https://br.web.img3.acsta.net/pictures/16/03/01/16/59/300795.jpg",
  "https://cosmonerd.com.br//uploads/2020/12/cosmonerd-black-clover-spade-1.jpg",
  "https://media.fstatic.com/leySctOL77KGWgC5nM7YKF3mTpg=/290x478/smart/media/movies/covers/2020/08/sdcfv.jpg",
  "https://media.fstatic.com/93oJng5hF_ZSJkwMznZZZbZJTYA=/290x478/smart/media/movies/covers/2019/11/jyFHtqYeVvc2A9nLhFGvM49xGPg.jpg"
];

for (var i = 0; i < listaAnimes.length; i++) {
  document.write("<img src=" + listaAnimes[i] + ">");
}

var filmes = "Filmes";
document.write("<h2>" + filmes + "</h2>");

var listaFilmes = [
  "https://images-na.ssl-images-amazon.com/images/I/91Z1PV6nvGL.jpg",
  "https://www.newpop.com.br/wp-content/uploads/2020/03/NewPOP_Koe02.jpg",
  "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2020/12/o-tempo-com-voce-capa-p.jpg",
  "http://pm1.narvii.com/6561/c2bf21b310aad13ac519e3af6eda58d15b7579f8_00.jpg",
  "https://br.web.img2.acsta.net/pictures/18/02/27/18/46/5564152.jpg",
  "https://br.web.img3.acsta.net/c_310_420/pictures/15/11/10/21/08/171263.jpg",
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22044-cartaz.jpg"
  
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
