const { Socket } = require('net');
const { execSync } = require('child_process');

const pause = () => (
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 5000);
  })
);

const checkForPostgres = () => (
  new Promise((resolve, reject) => {
    const socket = new Socket();

    const onError = () => {
      socket.destroy();
      reject();
    };
  
    socket.setTimeout(1000);
    socket.on('error', onError);
    socket.on('timeout', onError);
  
    socket.connect(5432, 'postgres', () => {
      socket.destroy();
      resolve();
    });
  })
);

const waitForPostgres = async () => {
  const attempts = 10;

  for(let i = 0; i < attempts; i++) {
    await pause();

    try {
      await checkForPostgres();
      return;
    } catch(e) {
      
    }
  }

  throw new Error('Timed out waiting for postgres. Is the postgres docker image running?');
};

waitForPostgres().then(() => {
  execSync('npm run migrate:dev', { stdio: 'inherit' });
  execSync('npm run seed:dev', { stdio: 'inherit' });
  execSync('npm run start:dev', { stdio: 'inherit' });
});
