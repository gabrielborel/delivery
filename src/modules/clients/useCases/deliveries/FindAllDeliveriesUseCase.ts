import { prismaClient } from "../../../../database/prismaClient";

class FindAllDeliveriesUseCase {
  async execute(client_id: string) {
    const deliveries = await prismaClient.clients.findMany({
      where: {
        id: client_id,
      },
      include: {
        deliveries: true,
      },
    });

    return deliveries;
  }
}

export { FindAllDeliveriesUseCase };
