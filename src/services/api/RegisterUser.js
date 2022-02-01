import { createUser } from "../query/user";

export default class RegisterUser {
  constructor(validatedArgs) {
    this.data = validatedArgs;
  }

  async call() {
    const user = await createUser(this.data);

    return user;
  }
}
