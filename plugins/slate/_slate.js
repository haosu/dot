/*
// This is useful for testing in console
const slate = {
    configAll: function() {},
    operation: function() {},
    bind: function() {},
    screen: function() {
        return {
            rect: function() {
                return {
                    width: 2000,
                    height: 1000
                }
            }
        };
    }
};
*/
slate.configAll({
  defaultToCurrentScreen: true,
  nudgePercentOf: 'screenSize',
  resizePercentOf: 'screenSize',
  secondsBeforeRepeat: 0.4,
  secondsBetweenRepeat: 0.1
});

/**
 *
 * @param {number} segments The number of segments to split the screen into
 * @param {number} width How many segments wide the window should be
 * @param {number} position Number of segments away from origin the window will be positioned at
 */
function makeHorizontalSplit(segments, width, position) {
    return slate.operation('move', {
        x: `screenSizeX / ${segments} * ${position}`,
        y: 'windowTopLeftY',
        width: `screenSizeX / ${segments} * ${width}`,
        height: 'windowSizeY'
    });
}

function makeVerticalSplit(segments, height, position) {
    return slate.operation('move', {
        x: 'windowTopLeftX',
        y: `screenSizeY / ${segments} * ${position}`,
        width: 'windowSizeX',
        height: `screenSizeY / ${segments} * ${height}`
    });
}

const horizontalSplits = {
    full: makeHorizontalSplit(1, 1, 0),
    leftHalf: makeHorizontalSplit(2, 1, 0),
    rightHalf: makeHorizontalSplit(2, 1, 1),
    middleHalf: makeHorizontalSplit(4, 2, 1),
    leftThird: makeHorizontalSplit(3, 1, 0),
    middleThird: makeHorizontalSplit(3, 1, 1),
    rightThird: makeHorizontalSplit(3, 1, 2),
    leftTwoThirds: makeHorizontalSplit(3, 2, 0),
    rightTwoThirds: makeHorizontalSplit(3, 2, 1)
}

const verticalSplits = {
    topHalf: makeVerticalSplit(2, 1, 0),
    bottomHalf: makeVerticalSplit(2, 1, 1),
    full: makeVerticalSplit(1, 1, 0)
}

slate.bindAll({
    'j:cmd;ctrl': verticalSplits.bottomHalf,
    'k:cmd;ctrl': verticalSplits.topHalf,
    'h:cmd;ctrl': horizontalSplits.leftHalf,
    'l:cmd;ctrl': horizontalSplits.rightHalf
});