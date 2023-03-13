import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import logger from "../utils/logger.utils";

class AuthController {
  public path = "/api/auth";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private async authorize(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err) {
      next(err);
    }
  }

  private async callback(req: Request, res: Response, next: NextFunction) {}

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.authorize);
    this.router.get(`${this.path}/callback`, this.callback);
  }
}

export default AuthController;
