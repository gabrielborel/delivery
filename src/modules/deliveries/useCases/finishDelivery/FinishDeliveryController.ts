import { Request, Response } from "express";
import { FinishDeliveryUseCase } from "./FinishDeliveryUseCase";

class FinishDeliveryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { deliveryman_id } = req;
    const { id: delivery_id } = req.params;

    const finishDeliveryUseCase = new FinishDeliveryUseCase();
    const result = await finishDeliveryUseCase.execute({
      deliveryman_id,
      delivery_id,
    });

    return res.status(201).json(result);
  }
}

export { FinishDeliveryController };
