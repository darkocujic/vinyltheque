import http from "http";
import https from "https";
import axios, { AxiosInstance } from "axios";

const httpAgent = new http.Agent({
  keepAlive: true,
});

const httpsAgent = new https.Agent({
  keepAlive: true,
});

const client: AxiosInstance = axios.create({
  // httpAgent,
  // httpsAgent,
});

export default client;
