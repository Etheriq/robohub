robohub && (robohub.game = {
    stage: null,
    currLevel: 0,
    hint: 0,
    robot: {
        top: function () {
            return this.move(this.x, this.y-1);
        },
        right: function () {
            return this.move(this.x+1, this.y);
        },
        bottom: function () {
            return this.move(this.x, this.y+1);
        },
        left: function () {
            return this.move(this.x-1, this.y);
        },
        move: function (x, y) {
            if(robohub.game.isFinish(robohub.game.stage[y][x])) {
                kernel.echo(config.strings.win);
                if (robohub.game.initLevel(robohub.game.currLevel+1)) {
                    return 'next';
                }
                return 'end';
            }
            if(robohub.game.isMoveble(robohub.game.stage[y][x])) {
                this.x = x;
                this.y = y;
                return true;
            } else {
                kernel.echo(config.strings.wallCollapse);
                return false;
            }
        },
        x: 0,
        y: 0
    },
    start: function () {
        this.initLevel(1);
    },
    initLevel: function (number) {
        this.currLevel = number;
        if (robohub.levels[number]) {
            this.stage = robohub.levels[number].map;
            this.hint = robohub.levels[number].hint;
            this.robot.x = robohub.levels[number].startPosition[1];
            this.robot.y = robohub.levels[number].startPosition[0];
            return true;
        } else {
            kernel.echo(config.strings.end);
            return false;
        }
    },
    stageToString: function () {
        var result = '\n', i, j;
        for (i in this.stage) {
            for (j in this.stage[i]) {
                if(this.robot.x == j && this.robot.y == i) {
                    result += '@';
                } else {
                    result += this.stage[i][j];
                }
            }
            result += '\n'
        }
        return result;
    },
    isMoveble: function (tile) {
        return tile != '#';
    },
    isFinish: function (tile) {
        return tile == '*';
    },
    getCoordinatesByDirections: function (directions) {
        if (directions == 'north') {
            return {x: this.robot.x, y: this.robot.y-1};
        }
        if (directions == 'east') {
            return {x: this.robot.x+1, y: this.robot.y};
        }
        if (directions == 'south') {
            return {x: this.robot.x, y: this.robot.y+1};
        }
        if (directions == 'west') {
            return {x: this.robot.x-1, y: this.robot.y};
        }
    }
});
