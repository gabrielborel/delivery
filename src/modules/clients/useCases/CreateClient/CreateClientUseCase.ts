import { hash } from "bcrypt";
import { prismaClient } from "../../../../database/prismaClient";

interface ICreateClient {
  username: string;
  password: string;
}

class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    const clientAlreadyExists = await prismaClient.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (clientAlreadyExists) {
      throw new Error("Client already exists.");
    }

    const hashPassword = await hash(password, 10);

    const client = await prismaClient.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}

export { CreateClientUseCase };
