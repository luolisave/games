var playerModel = {
    num : undefined,
    socketId: undefined,
    pad: {
        x: 0,
        y: 0
    }
};

var players = [];

exports.createPlayer = function () {
    let player = Object.assign({}, playerModel);
    players.push(player);
    return player;
};

exports.getPlayers = () => {
    return players;
}