import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { prismaClient } from "../../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prismaClient.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password invalid.");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid.");
    }

    const token = sign({ username }, "beecf76faf509a2356df6c199d653af5", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return { token };
  }
}

export { AuthenticateDeliverymanUseCase };
