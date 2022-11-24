const net = require("net");

const connect = function() {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server 🤗');
    conn.write('Name: Kim');
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  return conn;
};

module.exports = {
  connect,
};