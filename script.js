// ==================================
// ENTRAR NO SITE
// ==================================

const entrar = document.getElementById("entrar");

entrar.addEventListener("click", ()=>{

    window.scrollTo({
        top:window.innerHeight,
        behavior:"smooth"
    });

});


// ==================================
// TEXTO DA CARTA (DIGITAÇÃO)
// ==================================

const texto = `
Meu amor...

Eu queria criar algo especial para mostrar
o quanto você significa para mim.

Cada sorriso seu deixa meu dia melhor.
Cada momento ao seu lado vira uma lembrança
que eu quero guardar para sempre.

Obrigado por fazer parte da minha vida.

Espero viver muitos momentos incríveis
ao seu lado. ❤️
`;

let posicao = 0;

const carta = document.getElementById("textoCarta");


function escreverCarta(){

    if(posicao < texto.length){

        carta.innerHTML += texto.charAt(posicao);

        posicao++;

        setTimeout(escreverCarta,50);

    }

}


window.addEventListener("scroll",()=>{

    let altura =
    carta.getBoundingClientRect().top;

    if(altura < window.innerHeight){

        if(posicao===0){

            escreverCarta();

        }

    }

});



// ==================================
// CONTADOR
// ALTERE A DATA AQUI
// ==================================

const inicio =
new Date("2024-11-25 00:00:00");


function contador(){


    const agora =
    new Date();


    const diferenca =
    agora - inicio;


    const dias =
    Math.floor(
    diferenca /
    (1000*60*60*24)
    );


    const horas =
    Math.floor(
    diferenca /
    (1000*60*60)
    ) % 24;


    const minutos =
    Math.floor(
    diferenca /
    (1000*60)
    ) % 60;


    const segundos =
    Math.floor(
    diferenca /
    1000
    ) % 60;


    document.getElementById("tempo")
    .innerHTML =

    `
    ❤️ ${dias} dias ❤️ <br>
    ${horas} horas,
    ${minutos} minutos,
    ${segundos} segundos
    `;


}


setInterval(contador,1000);

contador();



// ==================================
// MÚSICA
// ==================================

const musica =
document.getElementById("audio");

const play =
document.getElementById("play");


play.addEventListener("click",()=>{


    if(musica.paused){

        musica.play();

        play.innerHTML="⏸ Pausar Música";

    }

    else{

        musica.pause();

        play.innerHTML="▶ Tocar Música";

    }


});




// ==================================
// BOTÃO NÃO FOGE 😂
// ==================================

const nao =
document.getElementById("nao");


nao.addEventListener("mouseover",()=>{


    nao.style.position="fixed";


    nao.style.left =
    Math.random()*80+"%";


    nao.style.top =
    Math.random()*80+"%";


});




// ==================================
// BOTÃO SIM
// ==================================

const sim =
document.getElementById("sim");


const final =
document.getElementById("mensagemFinal");


sim.addEventListener("click",()=>{


    final.style.display="flex";


    criarConfetes();


});




// ==================================
// CORAÇÕES CAINDO
// ==================================


function criarCoracao(){


    const coracao =
    document.createElement("div");


    coracao.className="coracao";


    coracao.innerHTML="❤️";


    coracao.style.left =
    Math.random()*100+"vw";


    coracao.style.animationDuration =
    (Math.random()*3+3)+"s";


    document.body.appendChild(coracao);



    setTimeout(()=>{

        coracao.remove();

    },6000);


}


setInterval(criarCoracao,400);




// ==================================
// CONFETES
// ==================================


function criarConfetes(){


for(let i=0;i<150;i++){


    const confete =
    document.createElement("div");


    confete.innerHTML="✨";


    confete.style.position="fixed";


    confete.style.left =
    Math.random()*100+"vw";


    confete.style.top="-20px";


    confete.style.fontSize =
    Math.random()*20+10+"px";


    confete.style.zIndex="9999";


    document.body.appendChild(confete);



    confete.animate([

        {
        transform:"translateY(0)",
        opacity:1
        },

        {
        transform:
        `translateY(${window.innerHeight+200}px)
        rotate(720deg)`,

        opacity:0
        }

    ],{


        duration:
        Math.random()*3000+2000


    });



    setTimeout(()=>{

        confete.remove();

    },5000);


}


}