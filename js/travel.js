function go() {
    var stepLog = [];
    var fromLog = [];
    var crossroad = 0;
    var northC = 'north';
    var southC = 'south';
    var eastC = 'east';
    var westC = 'west';
    var i = 0;
    var chk = '';

    console.log(map());
    while (chk != 'next' && chk != 'end') {
        i++;
        if (i > 80) break;

        if (isFree(southC) && southC != fromLog[(fromLog.length) - 1]) {
            chk = south();
            updateLog(southC);

            if (isFree(eastC) || isFree(westC)) {
                crossroad = stepLog.length - 1;
            }
            continue;
        } else if (isFree(northC) && northC != fromLog[(fromLog.length) - 1]) {
            chk = north();
            updateLog(northC);

            if (isFree(eastC) || isFree(westC)) {
                crossroad = stepLog.length - 1;
            }

            continue;
        } else if (isFree(westC) && westC != fromLog[(fromLog.length) - 1]) {
            chk = west();
            updateLog(westC);

            if (isFree(northC) || isFree(southC)) {
                crossroad = stepLog.length - 1;
            }

            continue;
        } else if (isFree(eastC) && eastC != fromLog[(fromLog.length) - 1]) {
            chk = east();
            updateLog(eastC);

            if (isFree(northC) || isFree(southC)) {
                crossroad = stepLog.length - 1;
            }

            continue;
        } else {
            back(stepLog, crossroad);

            goToNewRoad();

            continue;
        }
    }

    function updateLog(way) {
        switch (way) {
            case northC:
                console.log(map());
                stepLog.push(northC);
                fromLog.push(southC);
                break;
            case eastC:
                console.log(map());
                stepLog.push(eastC);
                fromLog.push(westC);
                break;
            case southC:
                console.log(map());
                stepLog.push(southC);
                fromLog.push(northC);
                break;
            case westC:
                console.log(map());
                stepLog.push(westC);
                fromLog.push(eastC);
                break;
        }
    }

    function goToNewRoad() {
        var newRoad = (stepLog.length - 1) - crossroad;

        if (stepLog[newRoad] == southC || stepLog[newRoad] == northC) {
            if (isFree(eastC) && eastC != stepLog[newRoad]) {
                east();
                console.log(map());
                stepLog.push(eastC);
                fromLog.push(westC);
            } else if (isFree(westC) && westC != stepLog[newRoad]) {
                west();
                console.log(map());
                stepLog.push(westC);
                fromLog.push(eastC);
            }
        } else if (stepLog[newRoad] == eastC || stepLog[newRoad] == westC) {
            if (isFree(southC) && southC != stepLog[newRoad]) {
                south();
                console.log(map());
                stepLog.push(southC);
                fromLog.push(northC);
            } else if (isFree(northC) && northC != stepLog[newRoad]) {
                north();
                console.log(map());
                stepLog.push(northC);
                fromLog.push(southC);
            }
        }
    }
}

function back(stepLog, crossroad) {
    var cmd, i, tmp;
    var backStepLogCount = (stepLog.length - 1) - crossroad;
    var stepLogMaxIndx = (stepLog.length - 1);
    for (i = 0; i < backStepLogCount; i++ ) {
        cmd = stepLog[stepLogMaxIndx - i];
        switch (cmd) {
            case 'north':
                south();
                break;
            case 'south':
                north();
                break;
            case 'east':
                west();
                break;
            case 'west':
                east();
                break;
        }
        console.log(map());
    }
}
