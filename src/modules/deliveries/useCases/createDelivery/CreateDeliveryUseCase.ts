import { prismaClient } from "../../../../database/prismaClient";

interface ICreateDelivery {
  item_name: string;
  client_id: string;
}

class CreateDeliveryUseCase {
  async execute({ client_id, item_name }: ICreateDelivery) {
    const delivery = await prismaClient.deliveries.create({
      data: {
        item_name,
        client_id,
      },
    });

    return delivery;
  }
}

export { CreateDeliveryUseCase };
