import path from "path";
import { createWriteStream } from "fs";
import {Upload} from "../../types/Upload"

export default {
    uploadFile: async (_:void, { file }:{file:Upload}):Promise<boolean> => {

      const { createReadStream, filename } = await file;
      const files:any[] = [];

      await new Promise(res =>
        createReadStream()
          .pipe(createWriteStream(path.join(__dirname, "../uploads/images", filename)))
          .on("close", res)
      );

      files.push(filename);

      return true;
    }
}