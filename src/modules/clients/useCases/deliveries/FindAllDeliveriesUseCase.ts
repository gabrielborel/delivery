import { prismaClient } from "../../../../database/prismaClient";

class FindAllDeliveriesUseCase {
  async execute(client_id: string) {
    const deliveries = await prismaClient.clients.findMany({
      where: {
        id: client_id,
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

export { FindAllDeliveriesUseCase };
