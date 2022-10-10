import { Request, Response } from "express";
import { FindAllDeliverymanDeliveriesUseCase } from "./FindAllDeliverymanDeliveriesUseCase";

class FindAllDeliverymanDeliveriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { deliveryman_id } = req;

    const findAllDeliverymanDeliveriesUseCase =
      new FindAllDeliverymanDeliveriesUseCase();

    const result = await findAllDeliverymanDeliveriesUseCase.execute(
      deliveryman_id
    );

    return res.status(200).json(result);
  }
}

export { FindAllDeliverymanDeliveriesController };
