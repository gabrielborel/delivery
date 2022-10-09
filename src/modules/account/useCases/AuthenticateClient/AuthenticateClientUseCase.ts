import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prismaClient.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or password invalid.");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid.");
    }

    const token = sign({ username }, "4f5380730795ba59577f88dc4323fc56", {
      subject: client.id,
      expiresIn: "1d",
    });

    return { token };
  }
}

export { AuthenticateClientUseCase };
