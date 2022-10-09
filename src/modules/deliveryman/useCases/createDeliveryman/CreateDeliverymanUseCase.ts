import { hash } from "bcrypt";
import { prismaClient } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {
    const deliveryManAlreadyExists = await prismaClient.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (deliveryManAlreadyExists) {
      throw new Error("Deliveryman already exists.");
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prismaClient.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
