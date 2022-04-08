//Ecoute les requettes http
import http from 'http'
//Création application express
import app from './app'

app.set('port', process.env.APP_PORT);

//la fonction errorHandler  recherche les différentes erreurs et les gère de manière appropriée. 
//Elle est ensuite enregistrée dans le serveur
const errorHandler = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + process.env.APP_PORT;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

//Création serveur: createServer prend en argument l'application express qui reçoit le req et envoie le res
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + process.env.APP_PORT;
  console.log('Listening on ' + bind);
});

server.listen(process.env.APP_PORT);