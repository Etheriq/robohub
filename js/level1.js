function lev1() {
    var i = 0;
    while (isFree('north')) {
        i++;
            north();
        if (i > 20) break;
    }
    console.log(i + ' steps');

}

function lev2() {
    var i = 0;
    while (isFree('east')) {
        i++;
        east();
        if (i > 20) break;
    }
    console.log(i + ' steps');
}

function lev3() {
    var i = 0, go = true;

//  ##########
//  #@########
//  #  #######
//  ##  ######
//  ###  #####
//  ####  ####
//  #####  ###
//  ######  ##
//  ####### *#
//  ##########

    while (goBottom() || goRight()) {
        console.log(map());
        i++;
        if (i > 100) break;
    }
    //
    //
    //
    //while (go) {
    //    if (goBottom() || goRight() || goTop() || goLeft()) {
    //        go = true;
    //    } else {
    //        go = false;
    //    }
    //
    //    console.log(map());
    //    //go = false;
    //    i++;
    //    if (i > 100) break;
    //}
    console.log(i + ' steps');
}

//  north
function goTop() {
    var i = 0;
    while (isFree('north')) {
        north();
        i++;
        if (i > 20) break;
    }

    return !!i;
}

//  south
function goBottom() {
    var i = 0;
    while (isFree('south')) {
        south();
        i++;
        if (i > 20) break;
    }

    return !!i;
}

//  west
function goLeft () {
    var  i = 0;
    while (isFree('west')) {
        west();
        i++;
        if (i > 20) break;
    }

    return !!i;
}

//  east
function goRight() {
    var  i = 0;
    while (isFree('east')) {
        east();
        i++;
        if (i > 20) break;
    }

    return !!i;
}









