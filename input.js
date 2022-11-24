
let connection;
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {

  if (key === 'q') {
    connection.write('Say: Hellloooo');
  }
  if (key === 'e') {
    connection.write('Say: Goodbyeeeee');
  }

  if (key === 'w') {
    console.log('Move: up');
    connection.write('Move: up');
  }

  if (key === 's') {
    console.log('Move: down');
    connection.write('Move: down');
  }

  if (key === 'a') {
    connection.write('Move: left');
    console.log('Move: left');
  }

  if (key === 'd') {
    console.log('Move: right');
    connection.write('Move: right');
  }

  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };