import { Request, Response } from "express";
import { FindAllAvailableDeliveriesUseCase } from "./FindAllAvailableDeliveriesController";

class FindAllAvailableDeliveriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findAllAvailableDeliveriesUseCase =
      new FindAllAvailableDeliveriesUseCase();

    const result = await findAllAvailableDeliveriesUseCase.execute();

    return res.status(201).json(result);
  }
}

export { FindAllAvailableDeliveriesController };
