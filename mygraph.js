

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
