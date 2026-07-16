const canvas = document.getElementById('canvas');

let dino = new Dino(canvas, {
    maxWidth: 720
});

// Let init handle loading the image AND automatically starting the loop when safe!
dino.init(); 
