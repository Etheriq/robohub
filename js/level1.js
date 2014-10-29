function l() {
    var stepLog = [];
    var fromLog = [];
    var top = 'north';
    var down = 'south';
    var right = 'east';
    var left = 'west';
    var go = true;
    var i = 0;
    var tmp;

    console.log(map());
    while (go) {
        i++;
        if (i > 150) break;
        if (isFree(top) && top != fromLog[(fromLog.length) - 1]) {
            north();
            console.log(map());
            stepLog.push(top);
            fromLog.push(down);
            continue;
        } else if (isFree(down) && down != fromLog[(fromLog.length) - 1]) {
            south();
            console.log(map());
            stepLog.push(down);
            fromLog.push(top);
            continue;
        } else if (isFree(right) && right != fromLog[(fromLog.length) - 1]) {
            east();
            console.log(map());
            stepLog.push(right);
            fromLog.push(left);
            continue;
        } else if (isFree(left) && left != fromLog[(fromLog.length) - 1]) {
            west();
            console.log(map());
            stepLog.push(left);
            fromLog.push(right);
            continue;
        } else {
            //tmp = fromLog.pop();
            fromLog[(fromLog.length) - 1] = '';
            continue;
        }
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
