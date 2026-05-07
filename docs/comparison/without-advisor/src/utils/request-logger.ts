import { Request, Response, NextFunction } from "express";

export function requestLogger(req: Request, _res: Response, next: NextFunction): void {
  const start = Date.now();
  const { method, originalUrl } = req;

  _res.on("finish", () => {
    const duration = Date.now() - start;
    const { statusCode } = _res;
    const level = statusCode >= 500 ? "error" : statusCode >= 400 ? "warn" : "info";
    const log = `${level.toUpperCase()} ${method} ${originalUrl} ${statusCode} ${duration}ms`;
    if (level === "error") {
      console.error(log);
    } else if (level === "warn") {
      console.warn(log);
    } else {
      console.log(log);
    }
  });

  next();
}
