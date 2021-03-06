let start = document.getElementById("start");
let player1 = "";
let player2 = "";
let vista1 = document.getElementById("welcome");
let datos = document.getElementById("datos");
let loadingImg = document.getElementById("loading-img");
let vista3 = document.getElementById("cartas-section");
let vista4 = document.getElementById("resultados-section");
let btn1 = document.getElementById("first-btn");
let btn2 = document.getElementById("second-btn");
let btn3 = document.getElementById("third-btn");
let btn4 = document.getElementById("fourth-btn");
let btn5 = document.getElementById("fifth-btn");
let btn6 = document.getElementById("sixth-btn");
let btn7 = document.getElementById("seventh-btn");
let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let circle4 = document.getElementById("circle4");
let circle5 = document.getElementById("circle5");
let circle6 = document.getElementById("circle6");
let circle7 = document.getElementById("circle7");
let cartaActual = document.getElementById("carta-actual");
let closeCards = document.getElementById("close");
let reroll = document.getElementById("volverARepartir");
let results = document.getElementById("verResultados");
//titulos
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");
let title4 = document.getElementById("title4");
let title5 = document.getElementById("title5");
let title6 = document.getElementById("title6");

let mazo = [
  {
    carta1: {
      nombre: "Lana del Rey",
      img: "lanadelrey.png",
      info:
        "Su música destaca por su estilizada calidad cinematográfica, su estilo retro, sus temas de romance trágico, glamour y melancolía.",
    },
    carta2: {
      nombre: "Lorde",
      img: "lorde.png",
      info:
        "Cantautora neozelandesa de indie pop y rock alternativo, de voz baja, oscura, y melancolica.",
    },
    carta3: {
      nombre: "U2",
      img: "u2.png",
      info:
        "Sus letras, a menudo ordenadas con imágenes espirituales, se centran en temas personales y temática de justicia social y paz.",
    },
    carta4: {
      nombre: "Taylor Swift",
      img: "taylorswift.png",
      info:
        "Es conocida por escribir grandes canciones narrativas y composiciones acerca de sus experiencias personales.",
    },
    carta5: {
      nombre: "Kali Uchis",
      img: "kaliuchis.png",
      info:
        "Con tan sólo 25 años nunca ha titubeado a la hora de mezclar estilos como R&B, funk, hip hop, regué, electrónica y hasta reguetón.",
    },
    carta6: {
      nombre: "Rina Sawayama",
      img: "rinasawayama.png",
      info:
        "Cantante de origen británico-japones de pop experimental y melodías complejas",
    },
    carta7: {
      nombre: "Rosalía",
      img: "rosalia.png",
      info:
        "Española que sabido reinventar el flamenco y la poesía clasica en música contemporanea",
    },
    carta8: {
      nombre: "Korn",
      img: "korn.png",
      info:
        "Son considerados los pioneros del género nu metal junto con Deftones.",
    },
    carta9: {
      nombre: "The Pretty Reckless",
      img: "tpr.png",
      info:
        "Es una banda de rock alternativo y post-grunge de Nueva York formada y encabezada por la cantante, modelo y actriz Taylor Momsen.",
    },
    carta10: {
      nombre: "Kim Petras",
      img: "kimpetras.png",
      info:
        "Es una cantante y compositora alemana que ha destacado en los géneros electro-house y dance pop.",
    },
    carta11: {
      nombre: "Bruce Springsteen",
      img: "bruce.png",
      info:
        "Sus canciones reflejan letras con aspectos autobiográficos, o relatos de personajes ficticios o novelescos que se enfrentan a retos o a puntos de inflexión en sus vidas.",
    },
    carta12: {
      nombre: "Fleetwood Mac",
      img: "fleetwood.png",
      info:
        "Es reconocida como una de las bandas más exitosas del mundo con más de 100 millones de copias vendidas, cuyo disco Rumours se posiciona dentro de los top 10 de la lista de los álbumes más vendidos de todos los tiempos.",
    },
    carta13: {
      nombre: "Led Zeppelin",
      img: "ledzeppelin.png",
      info:
        "Fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds.",
    },
    carta14: {
      nombre: "Deep Purple",
      img: "deepurple.png",
      info:
        "Está considerada como una de las pioneras del hard-rock, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath.",
    },
    carta15: {
      nombre: "The Who",
      img: "thewho.png",
      info:
        "Es una banda británica de rock considerada un ícono de la música del siglo XX, formada en 1962 con el nombre de The Detours que posteriormente cambió a The Who tras la incorporación del baterista Keith Moon.",
    },
    carta16: {
      nombre: "Nirvana",
      img: "nirvana.png",
      info:
        "Fue una banda de grunge estadounidense procedente de Aberdeen fundada por el vocalista y guitarrista Kurt Cobain y el bajista Krist Novoselic en 1987.",
    },
    carta17: {
      nombre: "Pearl Jam",
      img: "pearljam.png",
      info:
        "Es un grupo de grunge formado en Seattle, Estados Unidos, en el año 1990, con integrantes de las bandas Mother Love Bone y Temple of the Dog.",
    },
    carta18: {
      nombre: "Fito Páez",
      img: "fitopaez.png",
      info:
        "Es un cantautor, compositor, musico y director de cine argentino, integrante de la llamada trova rosarina,4​ es apodado como El trovador del rock argentino y uno de los más importantes exponentes del rock argentino.",
    },
    carta19: {
      nombre: "Charly García",
      img: "charly.png",
      info:
        "Es un cantautor, compositor, músico y productor argentino de rock, considerado uno de los compositores más importantes de Latinoamérica y de la historia de la música popular en español.",
    },
    carta20: {
      nombre: "Pedro Aznar",
      img: "pedroaznar.png",
      info:
        "Es un cantante, multiinstrumentista, compositor y poeta argentino. Fue integrante de los grupos Madre Atómica, Alas, Serú Girán, Spinetta Jade y Pat Metheny Group y desde 1993 está dedicado por completo a su carrera como solista.",
    },
    carta21: {
      nombre: "Claudia Puyó",
      img: "claudiapuyo.png",
      info:
        "Es una cantante argentina de blues. Es una de las figuras femeninas más reconocidas del rock argentino.",
    },
    carta22: {
      nombre: "Kings of Leon",
      img: "kol.png",
      info:
        "Está formado por tres hermanos, Caleb, Nathan y Jared Followill y su primo Matthew Followill. Cada miembro de la familia es conocido por su segundo nombre en vez del primero.",
    },
    carta23: {
      nombre: "The Strokes",
      img: "strokes.png",
      info:
        "Es una banda de rock originaria de Nueva York Estados Unidos formada en 1998 por el vocalista de la banda Julian Casablancas. Han vendido más de 8 millones de copias en todo el mundo.",
    },
    carta24: {
      nombre: "Arcade Fire",
      img: "arcadefire.png",
      info:
        "Fundada en 2001 por los amigos y compañeros de clase Win Butler y Josh Deu, la banda saltó a la fama en 2004 con el lanzamiento de su aclamado álbum debut Funeral, y ha ganado numerosos premios, incluyendo el Grammy al álbum del año.",
    },
    carta25: {
      nombre: "The Kooks",
      img: "thekooks.png",
      info:
        "Se describen a sí mismos como una banda de «pop», cuya música está influenciada principalmente por un movimiento conocido como la invasión británica de la década de 1960 y por el post-punk revival del nuevo milenio.",
    },
  },
];
//////////////////////////////////////////////////////////
let vista5 = document.getElementById("guardadas");
let guardadasBtn = document.getElementById("guardadasBtn");
guardadasBtn.addEventListener("click", verGuardadas);
start.addEventListener("click", jugar);
reroll.addEventListener("click", volverARepartir);
results.addEventListener("click", verResultados);

function jugar() {
  if (
    document.getElementById("player1").value.trim() == "" &&
    document.getElementById("player2").value.trim() == ""
  ) {
    document.getElementById("player1").classList.add("inputVacio");
    document.getElementById("player2").classList.add("inputVacio");
    return;
  } else if (document.getElementById("player1").value.trim() == "") {
    document.getElementById("player1").classList.add("inputVacio");
    return;
  } else if (document.getElementById("player2").value.trim() == "") {
    document.getElementById("player2").classList.add("inputVacio");
    return;
  }

  getNames();
  sortearCartas();
  datos.classList.add("datos-out");

  setTimeout("transicion1a2()", 600);
}

function verGuardadas() {
  datos.classList.add("datos-out");

  setTimeout("transicion1a5()", 450);
}

function transicion1a5() {
  vista5.classList.remove("off");
  datos.classList.add("off");
  setTimeout("prueba()", 100);
  // vista5.classList.remove("datos-out");
}

function prueba() {
  vista5.classList.remove("datos-out");
}

function volverARepartir() {
  sortearCartas();
  // repartirCartas(1, 2, 3, 4, 5, 6); prueba de parametros
  datos.classList.add("datos-out");
  cartaActual.classList.remove("seventh-card");
  cartaActual.classList.add("first-card");
  circle1.classList.replace("far", "fas");
  circle7.classList.replace("fas", "far");
}
function verResultados() {
  vista3.classList.replace("cartas-in", "cartas-out");
  setTimeout("vista3a4()", 600);
}
function vista3a4() {
  vista4.classList.add("resultados-in");
}
/* OBTENER NOMBRES */
function getNames() {
  document.getElementById("player1").classList.remove("inputVacio");
  document.getElementById("player2").classList.remove("inputVacio");
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";
  //   alert(player1 + player2);
}

/* DESAPARECER CARD DE INFO */
function transicion1a2() {
  vista1.classList.add("flex-center", "background-up");
  datos.classList.add("off");
  loadingImg.classList.add("on", "girar");
  loadingImg.classList.remove("off");
  setTimeout("loadingOut()", 3000);
  setTimeout("transicion2a3()", 3000);
  vista3.classList.remove("off");
}
function loadingOut() {
  loadingImg.classList.add("off");
  loadingImg.classList.remove("on", "girar");
}
function transicion2a3() {
  vista3.classList.add("cartas-in");
}

/*--------CAMBIO DE CARDS-------*/

btn1.addEventListener("click", irAUno);
function irAUno() {
  cartaActual.classList.remove(
    "seventh-card",
    "sixth-card",
    "fifth-card",
    "fourth-card",
    "third-card",
    "second-card"
  );
  circle1.classList.replace("far", "fas");
  circle2.classList.replace("fas", "far");
  circle3.classList.replace("fas", "far");
  circle4.classList.replace("fas", "far");
  circle5.classList.replace("fas", "far");
  circle6.classList.replace("fas", "far");
  circle7.classList.replace("fas", "far");
  cartaActual.classList.add("first-card");
}
btn2.addEventListener("click", function () {
  cartaActual.classList.remove(
    "seventh-card",
    "sixth-card",
    "fifth-card",
    "fourth-card",
    "third-card",
    "first-card"
  );
  cartaActual.classList.add("second-card");
  circle2.classList.replace("far", "fas");
  circle1.classList.replace("fas", "far");
  circle3.classList.replace("fas", "far");
  circle4.classList.replace("fas", "far");
  circle5.classList.replace("fas", "far");
  circle6.classList.replace("fas", "far");
  circle7.classList.replace("fas", "far");
});
btn3.addEventListener("click", function () {
  cartaActual.classList.remove(
    "seventh-card",
    "sixth-card",
    "fifth-card",
    "fourth-card",
    "first-card",
    "second-card"
  );
  cartaActual.classList.add("third-card");
  circle3.classList.replace("far", "fas");
  circle1.classList.replace("fas", "far");
  circle2.classList.replace("fas", "far");
  circle4.classList.replace("fas", "far");
  circle5.classList.replace("fas", "far");
  circle6.classList.replace("fas", "far");
  circle7.classList.replace("fas", "far");
});
btn4.addEventListener("click", function () {
  cartaActual.classList.remove(
    "seventh-card",
    "sixth-card",
    "fifth-card",
    "first-card",
    "third-card",
    "second-card"
  );
  cartaActual.classList.add("fourth-card");
  circle4.classList.replace("far", "fas");
  circle1.classList.replace("fas", "far");
  circle2.classList.replace("fas", "far");
  circle3.classList.replace("fas", "far");
  circle5.classList.replace("fas", "far");
  circle6.classList.replace("fas", "far");
  circle7.classList.replace("fas", "far");
});
btn5.addEventListener("click", function () {
  cartaActual.classList.remove(
    "seventh-card",
    "sixth-card",
    "first-card",
    "fourth-card",
    "third-card",
    "second-card"
  );
  cartaActual.classList.add("fifth-card");
  circle5.classList.replace("far", "fas");
  circle1.classList.replace("fas", "far");
  circle2.classList.replace("fas", "far");
  circle3.classList.replace("fas", "far");
  circle4.classList.replace("fas", "far");
  circle6.classList.replace("fas", "far");
  circle7.classList.replace("fas", "far");
});
btn6.addEventListener("click", function () {
  cartaActual.classList.remove(
    "seventh-card",
    "first-card",
    "fifth-card",
    "fourth-card",
    "third-card",
    "second-card"
  );
  cartaActual.classList.add("sixth-card");
  circle6.classList.replace("far", "fas");
  circle1.classList.replace("fas", "far");
  circle2.classList.replace("fas", "far");
  circle3.classList.replace("fas", "far");
  circle4.classList.replace("fas", "far");
  circle5.classList.replace("fas", "far");
  circle7.classList.replace("fas", "far");
});
btn7.addEventListener("click", function () {
  cartaActual.classList.remove(
    "sixth-card",
    "first-card",
    "fifth-card",
    "fourth-card",
    "third-card",
    "second-card"
  );
  cartaActual.classList.add("seventh-card");
  circle7.classList.replace("far", "fas");
  circle6.classList.replace("fas", "far");
  circle1.classList.replace("fas", "far");
  circle2.classList.replace("fas", "far");
  circle3.classList.replace("fas", "far");
  circle4.classList.replace("fas", "far");
  circle5.classList.replace("fas", "far");
});
/*-------CERRAR CARTAS Y VOLVER A INICIO-----*/
closeCards.addEventListener("click", cerrarCards);
function cerrarCards() {
  irAUno();
  vista3.classList.replace("cartas-in", "datos-out");
  vista1.classList.replace("flex-center", "on");
  // vista3.classList.remove("on");
  // vista3.classList.add("off");
  datos.classList.remove("off");
  setTimeout("reaparecerVista1()", 200);
}
function reaparecerVista1() {
  datos.classList.remove("datos-out");
}
//////////////////////////////////////CARTAS///////////////////////////////
let random1 = 0;
let random2 = 0;
let random3 = 0;
let random4 = 0;
let random5 = 0;
let random6 = 0;

function sortearCartas() {
  random1 = Math.floor(Math.random() * (25 - 1) + 1);
  random2 = Math.floor(Math.random() * (25 - 1) + 1);
  random3 = Math.floor(Math.random() * (25 - 1) + 1);
  random4 = Math.floor(Math.random() * (25 - 1) + 1);
  random5 = Math.floor(Math.random() * (25 - 1) + 1);
  random6 = Math.floor(Math.random() * (25 - 1) + 1);
  repartirCartas(
    player1,
    player2,
    random1,
    random2,
    random3,
    random4,
    random5,
    random6
  );
}

let cardImg1 = document.getElementById("card-img1");
let cardTitle1 = document.getElementById("card-title1");
let cardInfo1 = document.getElementById("card-info1");
let cardImg2 = document.getElementById("card-img2");
let cardTitle2 = document.getElementById("card-title2");
let cardInfo2 = document.getElementById("card-info2");
let cardImg3 = document.getElementById("card-img3");
let cardTitle3 = document.getElementById("card-title3");
let cardInfo3 = document.getElementById("card-info3");
let cardImg4 = document.getElementById("card-img4");
let cardTitle4 = document.getElementById("card-title4");
let cardInfo4 = document.getElementById("card-info4");
let cardImg5 = document.getElementById("card-img5");
let cardTitle5 = document.getElementById("card-title5");
let cardInfo5 = document.getElementById("card-info5");
let cardImg6 = document.getElementById("card-img6");
let cardTitle6 = document.getElementById("card-title6");
let cardInfo6 = document.getElementById("card-info6");

let resultimg1 = document.getElementById("result-circle1");
let resultimg2 = document.getElementById("result-circle2");
let resultimg3 = document.getElementById("result-circle3");
let resultimg4 = document.getElementById("result-circle4");
let resultimg5 = document.getElementById("result-circle5");
let resultimg6 = document.getElementById("result-circle6");
let jugadorfinal1 = document.getElementById("jugadorfinal1");
let jugadorfinal2 = document.getElementById("jugadorfinal2");

function repartirCartas(j1, j2, c1, c2, c3, c4, c5, c6) {
  console.log(c1, c2, c3, c4, c5, c6);
  let sumap1 = c1 + c2 + c3;
  let sumap2 = c4 + c5 + c6;
  let match = document.getElementById("match-answer");
  if (sumap1 - sumap2 > -5 && sumap1 - sumap2 < 5 && sumap2 != sumap1) {
    console.log(" hay match");
    match.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Green_tick.svg/1200px-Green_tick.svg.png";
  } else if (sumap1 == sumap2) {
    console.log("HAY SUPER MATCH");
    match.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coraz%C3%B3n.svg/1121px-Coraz%C3%B3n.svg.png";
  } else {
    console.log("no hay match");
    match.src =
      "https://images.emojiterra.com/google/android-10/512px/274c.png";
  }

  title1.innerHTML = `Carta 1 de 3 de ${j1}`;
  title2.innerHTML = `Carta 2 de 3 de ${j1}`;
  title3.innerHTML = `Carta 3 de 3 de ${j1}`;
  title4.innerHTML = `Carta 1 de 3 de ${j2}`;
  title5.innerHTML = `Carta 2 de 3 de ${j2}`;
  title6.innerHTML = `Carta 3 de 3 de ${j2}`;
  jugadorfinal1.innerHTML = `Mano de ${j1}`;
  jugadorfinal2.innerHTML = `Mano de ${j2}`;
  cardImg1.innerHTML = `<img src=./images/${
    mazo[0][`carta${c1}`]["img"]
  } class='img-de-carta'>`;
  cardTitle1.innerHTML = mazo[0][`carta${c1}`]["nombre"];
  cardInfo1.innerHTML = mazo[0][`carta${c1}`]["info"];

  cardImg2.innerHTML = `<img src=./images/${
    mazo[0][`carta${c2}`]["img"]
  } class='img-de-carta'>`;
  cardTitle2.innerHTML = mazo[0][`carta${c2}`]["nombre"];
  cardInfo2.innerHTML = mazo[0][`carta${c2}`]["info"];

  cardImg3.innerHTML = `<img src=./images/${
    mazo[0][`carta${c3}`]["img"]
  } class='img-de-carta'>`;
  cardTitle3.innerHTML = mazo[0][`carta${c3}`]["nombre"];
  cardInfo3.innerHTML = mazo[0][`carta${c3}`]["info"];

  cardImg4.innerHTML = `<img src=./images/${
    mazo[0][`carta${c4}`]["img"]
  } class='img-de-carta'>`;
  cardTitle4.innerHTML = mazo[0][`carta${c4}`]["nombre"];
  cardInfo4.innerHTML = mazo[0][`carta${c4}`]["info"];

  cardImg5.innerHTML = `<img src=./images/${
    mazo[0][`carta${c5}`]["img"]
  } class='img-de-carta'>`;
  cardTitle5.innerHTML = mazo[0][`carta${c5}`]["nombre"];
  cardInfo5.innerHTML = mazo[0][`carta${c5}`]["info"];

  cardImg6.innerHTML = `<img src=./images/${
    mazo[0][`carta${c6}`]["img"]
  } class='img-de-carta'>`;
  cardTitle6.innerHTML = mazo[0][`carta${c6}`]["nombre"];
  cardInfo6.innerHTML = mazo[0][`carta${c6}`]["info"];

  resultimg1.innerHTML = `<img src=./iconos/${
    mazo[0][`carta${c1}`]["img"]
  } class='img-icon'>`;
  resultimg2.innerHTML = `<img src=./iconos/${
    mazo[0][`carta${c2}`]["img"]
  } class='img-icon'>`;
  resultimg3.innerHTML = `<img src=./iconos/${
    mazo[0][`carta${c3}`]["img"]
  } class='img-icon'>`;
  resultimg4.innerHTML = `<img src=./iconos/${
    mazo[0][`carta${c4}`]["img"]
  } class='img-icon'>`;
  resultimg5.innerHTML = `<img src=./iconos/${
    mazo[0][`carta${c5}`]["img"]
  } class='img-icon'>`;
  resultimg6.innerHTML = `<img src=./iconos/${
    mazo[0][`carta${c6}`]["img"]
  } class='img-icon'>`;
}
////////////////TERMINAR EL JUEGO//////////////////////
let terminarBtn = document.getElementById("terminar");
let salirBtn = document.getElementById("salir");
salirBtn.addEventListener("click", terminarJuego);
terminarBtn.addEventListener("click", terminarJuego);
function terminarJuego() {
  irAUno();
  vista4.classList.replace("resultados-in", "datos-out");
  vista1.classList.replace("flex-center", "on");
  // vista3.classList.remove("on");
  // vista3.classList.add("off");
  datos.classList.remove("off");
  setTimeout("reaparecerVista1()", 200);
}
//////////////////GUARDAR PARTIDA///////////////////
let partida1;
let partida2;
let partida3;
let partida4;
let guardarBtn = document.getElementById("guardar");
guardarBtn.addEventListener("click", guardarPartida);
let lista = document.getElementById("lista-guardadas");
function guardarPartida() {
  guardadasBtn.classList.remove("off");
  irAUno();
  vista4.classList.replace("resultados-in", "datos-out");
  vista1.classList.replace("flex-center", "on");
  datos.classList.remove("off");
  setTimeout("reaparecerVista1()", 200);
  if (partida1 == null) {
    partida1 = [
      player1,
      player2,
      random1,
      random2,
      random3,
      random4,
      random5,
      random6,
    ];
    lista.innerHTML += `<li p1="${player1}"p2="${player2}"c1="${random1}"c2="${random2}"c3="${random3}"c4="${random4}"c5="${random5}"c6="${random6}">Partida entre ${player1} y ${player2}</li`;
  } else if (partida2 == null) {
    partida2 = [
      player1,
      player2,
      random1,
      random2,
      random3,
      random4,
      random5,
      random6,
    ];
    lista.innerHTML += `<li p1="${player1}"p2="${player2}"c1="${random1}"c2="${random2}"c3="${random3}"c4="${random4}"c5="${random5}"c6="${random6}">Partida entre ${player1} y ${player2}</li`;
  } else if (partida3 == null) {
    partida3 = [
      player1,
      player2,
      random1,
      random2,
      random3,
      random4,
      random5,
      random6,
    ];
    lista.innerHTML += `<li p1="${player1}"p2="${player2}"c1="${random1}"c2="${random2}"c3="${random3}"c4="${random4}"c5="${random5}"c6="${random6}">Partida entre ${player1} y ${player2}</li`;
  } else {
    partida4 = [
      player1,
      player2,
      random1,
      random2,
      random3,
      random4,
      random5,
      random6,
    ];
    lista.innerHTML += `<li p1="${player1}"p2="${player2}"c1="${random1}"c2="${random2}"c3="${random3}"c4="${random4}"c5="${random5}"c6="${random6}">Partida entre ${player1} y ${player2}</li`;
  }
}
///////////LEVANTAR PARTIDAS GUARDADAS////////////
lista.addEventListener("click", function (e) {
  player1 = e.target.getAttribute("p1");
  player2 = e.target.getAttribute("p2");
  random1 = e.target.getAttribute("c1");
  random2 = e.target.getAttribute("c2");
  random3 = e.target.getAttribute("c3");
  random4 = e.target.getAttribute("c4");
  random5 = e.target.getAttribute("c5");
  random6 = e.target.getAttribute("c6");
  transicion1a2();
  vista5.classList.add("datos-out", "off");
  repartirCartas(
    player1,
    player2,
    random1,
    random2,
    random3,
    random4,
    random5,
    random6
  );
});
//////////////////CERRAR GUARDADAS////////////////
let closeGuardadasBtn = document.getElementById("close-guardada");
closeGuardadasBtn.addEventListener("click", cerrarGuardadas);
function cerrarGuardadas() {
  setTimeout("datosOn()", 599);

  vista5.classList.add("datos-out");
  setTimeout("desaparecerGuardadas()", 600);
}
function desaparecerGuardadas() {
  vista5.classList.add("off");
  // vista1.classList.replace("flex-center", "on");
}
function datosOn() {
  datos.classList.remove("off");
  setTimeout("reaparecerVista1()", 20);
}
