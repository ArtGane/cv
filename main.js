let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let interval;

function run() {
    update();
    ctx.clearRect(0, 0, canvas.idth, canvas.height);
    draw(ctx);
}

function init() {
    load();
    interval = setInterval(run, 1000/60);
}

init();

