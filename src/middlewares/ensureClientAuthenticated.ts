import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

const ensureClientAuthenticated = async (
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
      "4f5380730795ba59577f88dc4323fc56"
    ) as IPayload;

    req.client_id = sub;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token!" });
  }
};

export { ensureClientAuthenticated };
