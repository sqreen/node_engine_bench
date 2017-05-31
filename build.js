'use strict';
const Fs = require('fs');
const setNames = [10, 100, 1000, 10000, 100000];

const data = {};
setNames.forEach((setName) => {

    data[setName] = require(`./result/result_${setName}.json`);
});

const tests = Object.keys(data['10']);
const versions = Object.keys(data['10'][tests[0]]);
const state = { tests: {}, versions: {} };
const page = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Node.js performances</title>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
    <script src="https://code.getmdl.io/1.3.0/material.js"></script>
    <script>
        var data = ${JSON.stringify(data)};
        var setNames = ${JSON.stringify(setNames)};
    </script>
</head>
<body>
<div class="mdl-grid" style="padding: 0">
    <div class="mdl-cell mdl-cell--2-col" style="background-color: #F3F3F3; margin: 0; padding-left: 10px">
        <h4>Select tests</h4>
        <ul class="demo-list-item mdl-list" id="test_select">
            ${tests.map((test, index) => {
                
                state.tests[test] = index === 0;                
                const name = test.split('/').pop();                
                return `<li class="mdl-list__item">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check_test_${test}">
                    <input type="checkbox" id="check_test_${test}" class="mdl-checkbox__input check_test" ${index === 0 ? 'checked' : ''} onchange="update()">
                    <span class="mdl-checkbox__label">${name}</span>
                </label>
                <a href="https://github.com/sqreen/node_engine_bench/blob/master/tests/${name}" target="_blank" style="color: #BDBDBD;">
                    <i class="material-icons" id="open_${name}">open_in_new</i>
                    <div class="mdl-tooltip" for="open_${name}">See source</div>
                </a>
            </li>`;
            }).join('\n')}
        </ul>
    </div>
    <div class="mdl-cell mdl-cell--8-col" id="main">
        ${setNames.map((setName) => {
            
            return `<div id="chart_${setName}" style="width: 100%; height: 500px;"></div>`
        }).join('\n')}
    </div>
    <div class="mdl-cell mdl-cell--2-col" style="background-color: #F3F3F3; margin: 0; padding-left: 10px">
        <h4>Select Node.js versions</h4>
        <ul class="demo-list-item mdl-list">
            ${versions.map((version) => {

            state.versions[version] = true;
            return `<li class="mdl-list__item">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="check_version_${version}">
                    <input type="checkbox" id="check_version_${version}" class="mdl-checkbox__input check_version" checked onchange="update()">
                    <span class="mdl-checkbox__label">${version}</span>
                </label>
            </li>`
            }).join('\n')}
            
        </ul>
    </div>
</div>
<script>var state = ${JSON.stringify(state)}</script>
<script src="index.js"></script>
</body>
</html>`;

Fs.writeFileSync('./docs/index.html', page);