import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

class FindAllDeliveriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { client_id } = req;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

    const result = await findAllDeliveriesUseCase.execute(client_id);

    return res.status(200).json(result);
  }
}

export { FindAllDeliveriesController };
