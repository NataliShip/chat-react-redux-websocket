const WebSocket = require('ws');

// create server on port 8989
const wss = new WebSocket.Server({
  port: 8989
});

const users = [];

// send data to clients
const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    // send for everyone except author
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

// callbacks for server
wss.on('connection', ws => {
  let index;
  console.log('new user connected');
  ws.on('message', message => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length;
        users.push({ name: data.name, id: index + 1});
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break
      }
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    console.log('user disconnect');
    users.splice(index, 1);
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
})