import { Request, Response } from "express";
import { UpdateDeliveryManUseCase } from "./UpdateDeliverymanUseCase";

class UpdateDeliverymanController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { deliveryman_id } = req;
    const { id: delivery_id } = req.params;

    const updateDeliveryUseCase = new UpdateDeliveryManUseCase();

    const result = await updateDeliveryUseCase.execute({
      deliveryman_id,
      delivery_id,
    });

    return res.status(201).json(result);
  }
}

export { UpdateDeliverymanController };
