/*jshint esversion: 6 */
/*jshint node: true */

class Game_server {

  constructor(server) {
    this.server = require('socket.io')(server);
    this.server.on('connection', socket => {
      console.log('client connection');
      socket.on('Hello', data => { console.log('get ping'); this.ping (socket, data); });
    });
  }

  ping(s, data) {
    console.log(`socket emited "${data}"`);
    this.server.emit('World', 'World');
  }

}

module.exports = (server) => {
  return new Game_server(server);
};
