function l() {
    var stepLog = [];
    var fromLog = [];
    var crossroads = 0;
    var northC = 'north';
    var southC = 'south';
    var eastC = 'east';
    var westC = 'west';
    var go = true;
    var i = 0;
    var tmp;

    console.log(map());
    while (go) {
        i++;
        if (i > 150) break;
        if (isFree(northC) && northC != fromLog[(fromLog.length) - 1]) {
            north();
            console.log(map());
            stepLog.push(northC);
            fromLog.push(southC);

            if (isFree(eastC) || isFree(westC)) {
                crossroads = stepLog.length - 1;
                //crossroads = isFree(eastC) ? eastC : west;
            }

            continue;
        } else if (isFree(southC) && southC != fromLog[(fromLog.length) - 1]) {
            south();
            console.log(map());
            stepLog.push(southC);
            fromLog.push(northC);

            if (isFree(eastC) || isFree(westC)) {
                crossroads = stepLog.length - 1;
                //crossroads = isFree(eastC) ? eastC : westC;   // ?   westC : eastC
            }

            continue;
        } else if (isFree(eastC) && eastC != fromLog[(fromLog.length) - 1]) {
            east();
            console.log(map());
            stepLog.push(eastC);
            fromLog.push(westC);

            if (isFree(northC) || isFree(southC)) {
                crossroads = stepLog.length - 1;
                //crossroads = isFree(northC) ? northC : southC;
            }

            continue;
        } else if (isFree(westC) && westC != fromLog[(fromLog.length) - 1]) {
            west();
            console.log(map());
            stepLog.push(westC);
            fromLog.push(eastC);

            if (isFree(northC) || isFree(southC)) {
                crossroads = stepLog.length - 1;
                //crossroads = isFree(northC) ? northC : southC;  // ?  southC : northC
            }

            continue;
        } else {
            back(stepLog, crossroads);

            fromLog.push(stepLog[crossroads]);
            //tmp = fromLog.pop();
            //fromLog[(fromLog.length) - 1] = '';
            continue;
        }
    }
}

function back(stepLog, crossroads) {
    var cmd, i, tmp;
    var backStepLogCount = (stepLog.length - 1) - crossroads;
    var stepLogMaxIndx = (stepLog.length - 1);
    for (i = 0; i < backStepLogCount; i++ ) {
        cmd = stepLog[stepLogMaxIndx - i];
        switch (cmd) {
            case 'north':
                south();
                tmp = stepLog.pop();
                break;
            case 'south':
                north();
                tmp = stepLog.pop();
                break;
            case 'east':
                west();
                tmp = stepLog.pop();
                break;
            case 'west':
                east();
                tmp = stepLog.pop();
                break
        }
        console.log(map());
    }
}

//#########
//# #     #
//# ## ## #
//# #  ## #
//# # ### #
//# # #   #
//#   # #@#
//### # ###
//#   #  *#
//#########
