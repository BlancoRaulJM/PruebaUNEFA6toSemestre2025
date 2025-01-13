import type { NextFunction, Request, Response } from "express";
import UNEFA00101 from "../model/mArticulos"

export class Articulos{
    static  BuscarArticulos = async (req: Request, res: Response) => {
        try {
            const {ALUMNO,ARTCATEGO} = req.body
            const Articulos = await UNEFA00101.findAll({
                where: {
                    ALUMNO: ALUMNO,
                    ARTCATEGO: ARTCATEGO
                }
            });
    
            if (Articulos.length === 0) {
                res.status(202).json({Resul: false, data: [], error: 'Lista de Articulos vacía' }); 
                return;
            }
            res.json({Resul: true, data: Articulos, error: '' }); 
        } catch (error) {
            res.status(500).json({ Resul: false, data: [] , error: 'Error al buscar los Articulos' });
        }
    };
    static VerificarExisteArticulos = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {ALUMNO,ARTCATEGO} = req.body
            const Articulo = await UNEFA00101.findOne({ where: { ALUMNO: ALUMNO, ARTCATEGO: ARTCATEGO } });
            if(Articulo === null) 
            {
                res.status(202).json({Resul: false, error: `No existen Articulos para la Categoria: ${ARTCATEGO}` }); 
                return;
            }
             next();   
        } catch (error) {
            res.status(500).json({Resul: false, error: 'Error al Buscar los Articulos' });
        }
    };

}