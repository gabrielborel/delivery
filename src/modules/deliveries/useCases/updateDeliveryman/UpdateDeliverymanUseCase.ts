import { prismaClient } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  deliveryman_id: string;
  delivery_id: string;
}

class UpdateDeliveryManUseCase {
  async execute({ deliveryman_id, delivery_id }: IUpdateDeliveryman) {
    const delivery = await prismaClient.deliveries.update({
      where: {
        id: delivery_id,
      },
      data: {
        deliveryman_id,
      },
    });

    return delivery;
  }
}

export { UpdateDeliveryManUseCase };
