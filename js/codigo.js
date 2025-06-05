const image = document.querySelector('.image')

//Altura Máxima del scroll.
let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener('resize', () => {
    //Altura Máxima del scroll.
    maxScroll = document.documentElement.scrollHeight - window.innerHeight;
});

window.addEventListener('scroll' ,() => {
    const MAX_FRAMES = 36;
    // Posición actual del scroll.
    const scrollPosition = window.scrollY;

    // Calcular el porcentaje del scroll.
    const scrollFraction = scrollPosition / maxScroll;

    // Que frame le toca?
    const frame = Math.ceil(scrollFraction * MAX_FRAMES) || 1;

    // console.log(frame);
    // Creamos el id del nombre del archivo.
    const id = frame.toString().padStart(3, '0');

    image.src = `../frames/ezgif-frame-${id}.jpg`;
});