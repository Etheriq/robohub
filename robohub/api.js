robohub && (robohub.api = {
    help: function () {
        if(robohub.api.help) {
            var i, helpString = '';
            for (i in robohub.api.helpText) {
                helpString += i + ' - ' + robohub.api.helpText[i] + '\n';
            }
            return helpString.slice(0, -1);
        }
    },
    helpText: {
        map: 'show map',
        legend: 'legend for map',
        north: 'move forward',
        east: 'move right',
        south: 'move back',
        west: 'move left',
        isFree: 'say what direction you want check',
        hint: 'hint',
        restart: 'restart'
    },
    map: function () {
        return robohub.game.stageToString();
    },
    hint: function () {
        return robohub.game.hint;
    },
    legend: function () {
        return config.strings.legendText;
    },
    restart: function () {
        return robohub.game.initLevel(robohub.game.currLevel);
    },
    top: function () {
        return robohub.game.robot.top();
    },
    right: function () {
        return robohub.game.robot.right();
    },
    bottom: function () {
        return robohub.game.robot.bottom();
    },
    left: function () {
        return robohub.game.robot.left();
    },
    isFree: function (direction) {
        var coordinates = robohub.game.getCoordinatesByDirections(direction);
        return robohub.game.isMoveble(robohub.game.stage[coordinates.y][coordinates.x]);
    }
});
robohub.api.north = robohub.api.top;
robohub.api.south = robohub.api.bottom;
robohub.api.east = robohub.api.right;
robohub.api.west = robohub.api.left;