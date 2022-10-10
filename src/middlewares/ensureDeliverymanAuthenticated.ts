import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

const ensureDeliverymanAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token is missing" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "beecf76faf509a2356df6c199d653af5"
    ) as IPayload;

    req.deliveryman_id = sub;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token!" });
  }
};

export { ensureDeliverymanAuthenticated };
