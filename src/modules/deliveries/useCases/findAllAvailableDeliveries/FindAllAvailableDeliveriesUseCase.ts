import { prismaClient } from "../../../../database/prismaClient";

class FindAllAvailableDeliveriesUseCase {
  async execute() {
    const deliveries = await prismaClient.deliveries.findMany({
      where: {
        end_at: null,
      },
    });

    return deliveries;
  }
}

export { FindAllAvailableDeliveriesUseCase };
