includeFile('./util/texto.js'); // Utilidades redimensionado de texto

var video_fondo_presentador = document.getElementById('video_fondo_presentador');
var texto_presentador = document.getElementById('texto_presentador');
var texto_presentador2 = document.getElementById('texto_presentador2');

var boton2 = document.getElementById('btn_out');

boton2.disabled = true;


gsap.ticker.fps(60);
let tl = gsap.timeline({ paused: false, useFrames: true });
let t2 = gsap.timeline({ paused: false, useFrames: true });

/* ###### RÓTULO PRESENTARDOR RESET ###### */
function rotulo_concursante_reset(delay = 0) {
    setTimeout(() => {
        location.reload();
    }, delay);
}

/* ###### RÓTULO PRESENTARDOR IN ###### */
function rotulo_concursante_in(name, name2, delay = 0) {
    
    texto_presentador.innerHTML = name;
    texto_presentador2.innerHTML = name2;
    setTimeout(() => {
        
        resize('texto_presentador', 300, 50, 'wrap_texto1');
        resize('texto_presentador2', 300, 50, 'wrap_texto2');
        var valor = parseInt(texto_presentador.style.fontSize.valueOf().replace('px',''));
        var valor2 = parseInt(texto_presentador2.style.fontSize.valueOf().replace('px',''));

        // alert(valor);
        // alert(valor2);

        if(valor < valor2){
            resize('texto_presentador2', 300, valor, 'wrap_texto1');
            // alert("estoy en el 1er if (valor < valor2): " + valor);
        }

        if(valor2 < valor){
            resize('texto_presentador', 300, valor2, 'wrap_texto1');
            // alert ("estoy en el 2do if (valor2 < valor): " + valor2);
        }
        
    }, 100);

    

    setTimeout(() => {
        video_fondo_presentador.play();
        let entered = false;
        video_fondo_presentador.ontimeupdate = () => {
            if (video_fondo_presentador.currentTime > 0.7 && !entered) {
                entered = true; // Para controlar que no entre varias veces en este if
                // Start animation
                startAnimation();
            }
            if (video_fondo_presentador.currentTime > 2.27) {
                video_fondo_presentador.pause();
            }
            //console.log(video_fondo_presentador.currentTime);
        };
    }, delay);
    boton2.disabled = false;
}

/* ###### RÓTULO PRESENTARDOR OUT ###### */
function rotulo_concursante_out(delay = 0) {
    setTimeout(() => {
        video_fondo_presentador.ontimeupdate = null; // Para quitar el listener 'ontimeupdate' anterior
        let entered = false;
        startAnimation();
        video_fondo_presentador.ontimeupdate = () => {
            if (video_fondo_presentador.currentTime > 3.2 && !entered) {
                entered = true; // Para controlar que no entre varias veces en este if
                // End animation
                reverseAnimation();
            }
        };
        video_fondo_presentador.play();
    }, delay);
}

/* ###### ANIMATION ###### */

function startAnimation() {
    let splitedText = new SplitText(texto_presentador, { type: 'chars', charsClass: "letra_split" });
    tl.to(texto_presentador, { duration: 0, visibility: 'visible' });
    tl.to('.letra_split', { duration: 0, force3D: false, rotation: 0.2, ease: "none" });
    tl.from('.letra_split', { duration: 0.7, visibility: 'visible', opacity: 0, scale: 0, rotationY: 180, force3D: false, rotation: 0.3, stagger: { from: "start", amount: 0.6 }, ease: "none" });

    let splitedText2 = new SplitText(texto_presentador2, { type: 'chars', charsClass: "letra_split2" });
    t2.to(texto_presentador2, { duration: 0, visibility: 'visible' });
    t2.to('.letra_split2', { duration: 0, force3D: false, rotation: 0.2, ease: "none" });
    t2.from('.letra_split2', { duration: 0.7, visibility: 'visible', opacity: 0, scale: 0, rotationY: 180, force3D: false, rotation: 0.3, stagger: { from: "start", amount: 0.6 }, ease: "none" });
}


function reverseAnimation() {
    tl.reverse().then(setTimeout(() => {
        rotulo_concursante_reset();
    }, 2000)); //Segundos antes de volver a llamar al reset después del out
    t2.reverse().then(setTimeout(() => {
        rotulo_concursante_reset();
    }, 2000)); //Segundos antes de volver a llamar al reset después del out
}

function includeFile(file) { //Para incluir el JS de util
    let script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}
