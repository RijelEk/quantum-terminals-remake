import { Request } from "express";

import UsersService from "../../adapter/UserService";
import { sendEmail } from "../../utils/sendEmail";
import { createConfirmationUrl } from "../../utils/createConfirmationUrl";

export default {
  register: async (
    _: void,
    {
      email,
      password,
      confirm_password,
      username,
    }: {
      email: string;
      password: string;
      confirm_password: string;
      username: string;
    },
    { req }: { req: Request }
  ) => {
    const resp: any = await UsersService.createUser({
      email,
      password,
      confirm_password,
      username,
    });

    if (resp.error) {
      return {
        user: null,
        error: resp.error,
      };
    } else {
      await sendEmail(
        username,
        email,
        await createConfirmationUrl(resp.user.id)
      );
      return {
        user: resp.user,
        error: null,
      };
    }
  },
};
