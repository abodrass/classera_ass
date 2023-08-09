google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['month', 'number of tickets'],
        ['jan',  1000],
        ['feb',  1170],
        ['mar',  660],
        ['apr',  1030],
        ['may', 1000],
        ['jun',2000],
        ['jul',600]
    ]);

    var options = {
        title: 'Tickets Overview',
        hAxis: {
            gridlines: {
                color: 'transparent'
            }
            },
        vAxis: {
            gridlines: {
            color: 'transparent'
            }
        },
        legend: { position: 'top' },
        backgroundColor:'white',
        animation:{
            duration: 4000,
            easing: 'out',
            "startup": true
        },
        curveType: 'function',
        width:860,
        height:430,
        seriesType: 'line', // Use 'line' as the primary series type
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    
    
    chart.draw(data, options);


    var data1 = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options1 = {
        width:'5fr',
        height:'5fr',
        pieHole: 0.8,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data1, options1);

}