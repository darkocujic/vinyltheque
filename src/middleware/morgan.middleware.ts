import morgan from "morgan";
import logger from "../utils/logger.utils";

const stream = {
  write: (message: any) => logger.info(message),
};

const morganMiddleware = morgan(
  ":remote-addr :req[x-forwarded-for] :method :url :status :res[content-length] - :response-time ms",
  { stream }
);

export default morganMiddleware;
