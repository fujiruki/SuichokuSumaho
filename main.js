var canvas;
var alpha, beta, gamma;

var GRAPH_LEN = 100;
var jyro = [];



window.onload = function() {
    init_res = init();
    if (!init_res) {
        // TODO:canvasが使えないよってメッセージを出したい
    }
    draw();
};
function init() { // canvasを用意
    canvas = document.getElementById("canvas1");
    if ( ! canvas || ! canvas.getContext ) {
        return false;
    }

    // データ格納、表示クラスのインスタンスを生成
    jyro['alpha'] = new TimeSeriesGraph(GRAPH_LEN, 'graph1');
    jyro['beta']  = new TimeSeriesGraph(GRAPH_LEN, 'graph1');
    jyro['gamma'] = new TimeSeriesGraph(GRAPH_LEN, 'graph1');

    // ジャイロセンサ表示部を用意
    alpha = document.getElementById("alpha");
    beta = document.getElementById("beta");
    gamma = document.getElementById("gamma");

    beginSensing();

    // 一定周期でグラフを更新する
    setInterval("draw()", 800);

    return true;
}
function draw() {
    console.log("draw()");
    var ctx = canvas.getContext('2d');

    // 四角形を描く
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(120, 20);
    ctx.stroke();

    document.getElementById('graph1').innerHTML = '';
    
    jyro['beta'].redrawGraph();
}

function beginSensing() {
    window.addEventListener("deviceorientation", function(event){
        alpha.textContent = event.alpha;
        beta.textContent = event.beta;
        gamma.textContent = event.gamma;

        // グラフ表示用に保存
        var msec = (new Date).getTime();    // 現在時刻のミリ秒表現
        jyro['beta'].addValue(msec, event.beta);
    }, false);
    console.log("began Sensing.");
}

