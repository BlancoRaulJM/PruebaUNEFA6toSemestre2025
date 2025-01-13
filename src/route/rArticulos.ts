import { Router } from "express";
import { body, param } from "express-validator"; 
import { Articulos } from "../controller/cArticulos";
import {ErrorEntradaDatos} from "../middleware/middleware"

const routerArticulos = Router();

routerArticulos.post('/' 
    ,body('ALUMNO')
        .notEmpty().withMessage('Es requerido ingresar el ID del Alumno')
    ,body('ARTCATEGO')
        .notEmpty().withMessage('Es requerido ingresar la Categoria del Articulo')
    ,Articulos.VerificarExisteArticulos
    ,ErrorEntradaDatos
    ,Articulos.BuscarArticulos);

export default routerArticulos;