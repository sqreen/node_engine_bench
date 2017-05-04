'use strict';
const setNames = [10, 100, 1000, 10000, 100000];

const data = {};
setNames.forEach((setName) => {

    data[setName] = require(`./result/result_${setName}.json`);
});

const tests = Object.keys(data['10']);
const versions = Object.keys(data['10'][tests[0]]);

const homepage = `<html>
    <head>
        <title></title>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        
    </head>
    <body>
        <form onchange="draw()" hidden>
            <h1>change sets</h1>
            ${setNames.map((set) => `<label><input type="checkbox" checked id="${set}">${set}</label>`).join('\n')}
                        
        </form>
        <form onchange="draw()">
            <h1>change experiments</h1>
             ${tests.map((test) => `<label><input type="checkbox" id="${test}">${test}</label>`).join('\n')}
        </form>
        <form onchange="draw()">
            <h1>change versions</h1>
             ${versions.map((version) => `<label><input type="checkbox" checked id="${version}">${version}</label>`).join('\n')}
        </form>
        ${setNames.map((set) => `<div id="chart_${set}" style="width: 2300px; height: 500px;"></div>`).join('\n')}
    
    
    <script type="text/javascript">
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(draw);
            var data = ${JSON.stringify(data)};
            var toDraw = {
                sets: { ${setNames.map((set) => `'${set}': true`).join(',\n')} },
                tests: { ${tests.map((test) => `'${test}': false`).join(',\n')} },
                versions: { ${versions.map((ver) => `'${ver}': true`).join(',\n')} }
            };
        function updateDraw() {

            Object.keys(toDraw)
                .forEach((type) => {

                    Object.keys(toDraw[type])
                        .forEach((id) => {

                            toDraw[type][id] = document.getElementById(id).checked;
                        });
                });
        }
        function draw() {
            updateDraw();
            var setList = Object.keys(toDraw.sets).filter((set) => toDraw.sets[set]);
            var versionList = Object.keys(toDraw.versions).filter((vers) => toDraw.versions[vers]);
            var testList = Object.keys(toDraw.tests).filter((test) => toDraw.tests[test]);

            setList.forEach((set) => {

                var current_data = data[set];
                var chart_data = [['test'].concat(versionList)];
                testList.forEach((test) => {

                    var line = [test];
                    var expe = current_data[test];
                    versionList.forEach((vers) => {

                        if (typeof expe[vers] === 'string') {
                            line.push(0);
                        }
                        else {
                            line.push(expe[vers]);
                        }
                    });
                    chart_data.push(line);
                });
                var g_data = google.visualization.arrayToDataTable(chart_data);
                var options = {
                    title : 'number of run: ' + set,
                    vAxis: {title: 'time'},
                    hAxis: {title: 'test'},
                    seriesType: 'bars'
                };
                var chart = new google.visualization.ComboChart(document.getElementById('chart_' + set));
                chart.draw(g_data, options);
            });
        }
        </script>
    </body>
</html>`;

console.log(homepage);