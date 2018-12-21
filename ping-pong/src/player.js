var playerModel = {
    num : undefined,
    socketId: undefined,
    pad: {
        x: 0,
        y: 0
    }
};

exports.createPlayer = function () {
    return { ...playerModel };

};