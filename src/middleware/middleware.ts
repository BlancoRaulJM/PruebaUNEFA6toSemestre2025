import {Request,Response,NextFunction} from "express";
import { validationResult } from "express-validator";

export const ErrorEntradaDatos = (req: Request, res: Response, next: NextFunction) => {
    let Errores = validationResult(req);
    if (!Errores.isEmpty()){
        const errorArray = Errores.array();
        res.status(202).json({Resul: false, error: errorArray[0].msg});
        return;
    }
    next();
};