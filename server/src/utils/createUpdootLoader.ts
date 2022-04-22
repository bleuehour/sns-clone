import Dataloader from "dataloader";
import { UpDoot } from "../entities/UpDoot";

export const createUpdootLoader = () =>
  new Dataloader<{ postId: number; userId: number }, UpDoot | null>(
    async (keys) => {
      const updoots = await UpDoot.findByIds(keys as any);
      const updootIdsToUpdoot: Record<string, UpDoot> = {};
      updoots.forEach((updoot) => {
        updootIdsToUpdoot[`${updoot.userId}|${updoot.postId}`] = updoot;
      });

      return keys.map(
        (key) => updootIdsToUpdoot[`${key.userId}|${key.postId}`]
      );
    }
  );
