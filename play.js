const { connect } = require('./client');
const conn = connect();

const handleUserInput = function(key) {
  console.log(key);

  if (key === 'w') {
    conn.write('Move: up');
  }

  if (key === 's') {
    conn.write('Move: down');
  }

  if (key === 'a') {
    conn.write('Move: left');
  }

  if (key === 'd') {
    conn.write('Move: right');
  }

  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();