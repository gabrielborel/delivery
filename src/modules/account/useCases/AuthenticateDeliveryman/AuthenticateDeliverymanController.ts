import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "../AuthenticateClient/AuthenticateClientUseCase";

class AuthenticateDeliverymanController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;
    const authenticateDeliverymanUseCase = new AuthenticateClientUseCase();

    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return res.status(200).json(result);
  }
}

export { AuthenticateDeliverymanController };
