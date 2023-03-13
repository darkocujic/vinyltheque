import express from "express";
import helmet from "helmet";
import { Controller } from "./interfaces/controller.interface";
import errorMiddleware from "./middleware/error.middleware";
import morganMiddleware from "./middleware/morgan.middleware";
import logger from "./utils/logger.utils";

class App {
  public app: express.Application;
  private readonly port: number;
  private readonly env: string;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.port = Number(process.env.PORT) ?? 3000;
    this.env = process.env.NODE_ENV ?? "development";

    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.initializeErrorRoute();
  }

  private initializeMiddleware() {
    this.app.use(express.json());
    this.app.use(morganMiddleware);
    // this.app.use(helmet());
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private initializeErrorRoute() {
    this.app.use(errorMiddleware);
  }

  public listen() {
    return this.app.listen(this.port, () => {
      logger.info(`Vinyltheque listening on ${this.port}`);
    });
  }
}

export default App;
