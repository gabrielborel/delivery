import { prismaClient } from "../../../../database/prismaClient";

class FindAllDeliverymanDeliveriesUseCase {
  async execute(deliveryman_id: string) {
    const deliveries = await prismaClient.deliveryman.findMany({
      where: {
        id: deliveryman_id,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}

export { FindAllDeliverymanDeliveriesUseCase };
