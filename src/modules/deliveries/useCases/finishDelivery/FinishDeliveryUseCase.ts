import { prismaClient } from "../../../../database/prismaClient";

interface IFinishDelivery {
  deliveryman_id: string;
  delivery_id: string;
}

class FinishDeliveryUseCase {
  async execute({ deliveryman_id, delivery_id }: IFinishDelivery) {
    const delivery = await prismaClient.deliveries.updateMany({
      where: {
        id: delivery_id,
        deliveryman_id,
      },
      data: {
        end_at: new Date(),
      },
    });

    return delivery;
  }
}

export { FinishDeliveryUseCase };
