// 時系列のデータを保持できるグラフのクラス
function TimeSeriesGraph(len, elemID) {
    this.list = []; // 二列の二次元配列[time][value]
    this.graphElem = false; // グラフを描画するDOM要素(div)

    for (i=0; i<len; i++) {
        this.list[i] = {time : i, value : 0};
    }
    this.graphElem = document.getElementById(elemID);
}
TimeSeriesGraph.prototype =
{
    addValue : function(t, val) {
        this.list.shift();
        this.list.push({time:t, value: val});
    },
    drawGraph : function() {
        console.log();
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: this.graphElem,
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: this.list,
            // The name of the data record attribute that contains x-values.
            xkey: 'time',
                // A list of names of data record attributes that contain y-values.
            ykeys: ['value'],
                // Labels for the ykeys -- will be displayed when you hover over the
                // chart.
            labels: ['Value'],
            lineWidth: 2,
            smooth: false,
            hideHover: true,
            pointSize:3
        });
    },
    redrawGraph : function() {
        this.graphElem.innerHTML = "";
        this.drawGraph();
    }
}

var GRAPH_LEN = 100;
var lists = {alpha: [], beta: [], gamma: []};


/*
// listsを初期化
for (i=0; i<GRAPH_LEN; i++) {
    lists['alpha'][i] = {time:i, value:0};
    lists['beta'][i] = {time:i, value:0};
    lists['gamma'][i] = {time:i, value:0};
}


// ex) addValue('alpha', {time:3432, value:2});
function addValue(type, dataset) {
    lists[type].shift();
    lists[type].push(dataset);
}

// ex) drawGraph('graph1', lists['alpha']);
function drawGraph(elemID, list) {
    console.log(list);
    new Morris.Line({
        // ID of the element in which to draw the chart.
        element: elemID,
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: list,
        // The name of the data record attribute that contains x-values.
        xkey: 'time',
            // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
        labels: ['Value'],
        lineWidth: 2,
        smooth: false,
        hideHover: true,
        pointSize:3
    });
}
*/
