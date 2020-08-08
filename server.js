import http from 'http';
import app from './app.js';
// import { hostname as _hostname } from 'os';

const port = process.env.PORT || 3000;
const hostname = process.env.BASE_URL || 'http://localhost';

const server = http.createServer(app);

server.listen((port), () => {
    console.log(`app listening on port ${port}`);
    console.log(`${hostname}:${port}`)
});