import winston from "winston";

const logLevel =
  process.env.LOG_LEVEL ?? process.env.NODE_ENV === "developemnt"
    ? "verbose"
    : "info";

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export default logger;
// export default console;
