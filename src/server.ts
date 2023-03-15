import "dotenv/config";
import App from "./App";
import CollectionController from "./controllers/collection.controller";

const app = new App([new CollectionController()]);

export const server = app.listen();
