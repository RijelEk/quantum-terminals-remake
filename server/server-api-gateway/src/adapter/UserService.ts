import axios from "axios";

const USERS_SERVICE_URI = "http://server-user-service:7000";

type UserType = {
  email: string;
  password: string;
  confirm_password: string;
  username: string;
};

export default class UsersService {
  static async createUser({
    email,
    password,
    confirm_password,
    username,
  }: UserType) {
    const link = `${USERS_SERVICE_URI}/v1/user`;

    const body = await axios
      .post(link, {
        email,
        password,
        confirm_password,
        username,
      })
      .then((result) => result.data);

    return body;
  }
}
