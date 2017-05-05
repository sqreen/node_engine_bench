'use strict';
google.charts.load('current', {'packages':['corechart']});

if (window.location.search) {
    try {
        var usable = decodeURI(window.location.search);
        var todo = JSON.parse(usable.slice(usable.indexOf('{'), usable.lastIndexOf('}') + 1));
        if (todo.tests) {
            Object.keys(state.tests).forEach(function (test) {

                document.getElementById('check_test_' + test).checked = todo.tests.indexOf(test) > -1;
            });
        }
        if (todo.versions) {

            Object.keys(state.versions).forEach(function (version) {

                document.getElementById('check_version_' + version).checked = todo.versions.indexOf(version) > -1;
            });
        }
    }
    catch (_) {}
}
google.charts.setOnLoadCallback(update);

function updateURL(item) {

    history.replaceState(null,null, window.location.origin + window.location.pathname + '?q=' + JSON.stringify(item));
}

function updateState() {

    var item = { tests: [], versions: [] };
    Object.keys(state.tests).forEach(function (test) {

        state.tests[test] = document.getElementById('check_test_' + test).checked;
        if (state.tests[test]) {
            item.tests.push(test);
        }
    });

    Object.keys(state.versions).forEach(function (version) {

        state.versions[version] = document.getElementById('check_version_' + version).checked;
        if (state.versions[version]) {
            item.versions.push(version);
        }
    });
    updateURL(item);
}

function update() {

    updateState();

    const tests = Object.keys(state.tests).filter((name) => state.tests[name]);
    const versions = Object.keys(state.versions).filter((name) => state.versions[name]);

    setNames.forEach(function(set) {

        var chart = new google.visualization.ComboChart(document.getElementById('chart_' + set));
        var options = {
            title : 'number of run: ' + set,
            vAxis: {title: 'time'},
            hAxis: {title: 'test'},
            seriesType: 'bars'
        };

        var rawData = [];
        rawData.push(['test'].concat(versions));

        tests.forEach(function(test) {

            var line = [test];
            versions.forEach(function(version) {

                var value = data[set][test][version];
                line.push(typeof value === 'string' ? 0 : value);
            });
            rawData.push(line);
        });
        chart.draw(google.visualization.arrayToDataTable(rawData), options);
    });
}
