import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import discogsService from "../services/discogs.service";
import logger from "../utils/logger.utils";
import { DiscogsPagination } from "../interfaces/discogs.interface";

class CollectionController {
  public path = "/api/collection";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private async getAllRecords(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, perPage }: DiscogsPagination = req.query;

      const releases = await discogsService
        .user()
        .collection()
        .getReleases("drCh", 0, { page, per_page: perPage });

      const records = releases.releases.map((release) => ({
        id: release.id,
        img: release.basic_information.cover_image,
        artist: {
          artist: release.basic_information.artists.map((a) => a.name),
        },
        album: release.basic_information.title,
        tags: `${release.basic_information.genres.join(
          ", "
        )}, ${release.basic_information.styles.join(", ")}`,
      }));

      const count = releases.pagination.items;

      res.status(200).json({ records, count });
    } catch (err: any) {
      next(err);
    }
  }

  private async getRecordById(req: Request, res: Response, next: NextFunction) {
    try {
      const id: number = Number(req.params.id);
      if (!id) throw new Error(`Define what record to search for`);

      const release = await discogsService.database().getRelease(id);
      res.status(200).json();
    } catch (err) {
      next(err);
    }
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.getAllRecords);
    this.router.get(`${this.path}/:id`, this.getRecordById);
  }
}

export default CollectionController;
