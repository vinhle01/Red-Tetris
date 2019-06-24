class Game {
  constructor() {
    this._rooms = [];
    this._players = [];
  }

  get rooms() {
    return this._rooms;
  }

  addRoom(room) {
    this._rooms.push(room);
    return room;
  }

  removeRoom(roomName) {
    this._rooms = this._rooms.filter(room => room.name !== roomName);
  }

  addPlayer(player) {
    this._players.push(player);
    return player;
  }

  removePlayer(playerId) {
    this._players = this._players.filter(player => player.id !== playerId);
  }

  findRoom(roomName) {
    return this._rooms.find(room => room.name === roomName);
  }

  findPlayer(playerId) {
    return this._players.find(player => player.id === playerId);
  }

  getRoomsName() {
    return this._rooms.map(room => room.name);
  }
}

const instance = new Game();

export default instance;
