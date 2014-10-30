function go() {
    var stepLog = [];
    var fromLog = [];
    var crossroad = 0;
    var northC = 'north';
    var southC = 'south';
    var eastC = 'east';
    var westC = 'west';
    var go = true;
    var i = 0;

    console.log(map());
    while (go) {
        i++;
        if (i > 105) break;
        if (isFree(northC) && northC != fromLog[(fromLog.length) - 1]) {
            north();
            updateLog(northC);

            if (isFree(eastC) || isFree(westC)) {
                crossroad = stepLog.length - 1;
            }

            continue;
        } else if (isFree(southC) && southC != fromLog[(fromLog.length) - 1]) {
            south();
            updateLog(southC);

            if (isFree(eastC) || isFree(westC)) {
                crossroad = stepLog.length - 1;
            }

            continue;
        } else if (isFree(eastC) && eastC != fromLog[(fromLog.length) - 1]) {
            east();
            updateLog(eastC);

            if (isFree(northC) || isFree(southC)) {
                crossroad = stepLog.length - 1;
            }

            continue;
        } else if (isFree(westC) && westC != fromLog[(fromLog.length) - 1]) {
            west();
            updateLog(westC);

            if (isFree(northC) || isFree(southC)) {
                crossroad = stepLog.length - 1;
            }

            continue;
        } else {
            back(stepLog, crossroad);

            goToNewRoad(stepLog, crossroad);

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
            if (isFree('south') && 'south' != stepLog[newRoad]) {
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
