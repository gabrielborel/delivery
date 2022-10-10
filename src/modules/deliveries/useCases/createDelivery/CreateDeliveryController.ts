import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

class CreateDeliveryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { client_id } = req;
    const { item_name } = req.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const result = await createDeliveryUseCase.execute({
      client_id,
      item_name,
    });

    return res.status(201).json(result);
  }
}

export { CreateDeliveryController };
