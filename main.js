var canvas;
var alpha, beta, gamma;

window.onload = function() {
    init_res = init();
    if (!init_res) {
        // TODO:canvasが使えないよってメッセージを出したい
    }
    draw();
};

function init() {
    // canvasを用意
    canvas = document.getElementById("canvas1");
    if ( ! canvas || ! canvas.getContext ) {
        return false;
    }

    // ジャイロセンサ表示部を用意
    alpha = document.getElementById("alpha");
    beta = document.getElementById("beta");
    gamma = document.getElementById("gamma");

    beginSensing();

    return true;
}
function draw() {
    var ctx = canvas.getContext('2d');

    // 四角形を描く
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(120, 20);
    ctx.stroke();
}

function beginSensing() {
    window.addEventListener("deviceorientation", function(event){
        alpha.textContent = event.alpha;
        beta.textContent = event.beta;
        gamma.textContent = event.gamma;
    }, false);
    console.log("began Sensing.");
}
