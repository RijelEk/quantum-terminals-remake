import MeResolver from "./User/Me";
import FilesResolver from "./Files/Files";
import LoginResolver from "./User/Login";
import UploadFileResolver from "./Files/UploadFile";
import RegisterResolver from "./User/Register";
import ConfirmUserResolver from "./User/ConfirmUser";

export const resolvers = {
  Query: {
    ...FilesResolver,
    ...MeResolver,
  },
  Mutation: {
    ...UploadFileResolver,
    ...LoginResolver,
    ...RegisterResolver,
    ...ConfirmUserResolver,
  },
};
