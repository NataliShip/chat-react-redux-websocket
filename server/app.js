const WebSocket = require('ws'); // use library web sockets

// create server on port 8989
const wss = new WebSocket.Server({ port: 8989 });

const users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

// callback for server
wss.on('connection', ws => {
  let index;
  console.log('connect');
  ws.on('message', message => {

  })
})