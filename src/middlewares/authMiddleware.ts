import { Request, Response, NextFunction } from "express"
import { HTTP_STATUS } from "../configs/httpStatusCodes"
import jwt from "jsonwebtoken"

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "your_access_secret_key"

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
  };
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response , next: NextFunction) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader?.startsWith("Bearer ")) {
       return res.status(HTTP_STATUS.UNAUTHORIZED).json({message: "Token not found"})
    }

    const token = authHeader.split(" ")[1]

     try {
    const decoded = jwt.verify(token, JWT_ACCESS_SECRET) as { userId: number };
     req.user = { id: decoded.userId };
       next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
}