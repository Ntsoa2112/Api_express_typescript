import eleveMdls from '../models/eleve';
import {Request, Response} from "express";

class EleveCtrl {
    list = async (req: Request, res: Response) => {
        try {
            let listEleve = await eleveMdls.getList();
            res.send(listEleve);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    get = async(req: Request, res: Response) => {
        let id : number = parseInt(req.params.id);
        try {
            let eleve = await eleveMdls.get(id);
            res.send(eleve);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    create = async(req: Request, res: Response) => {
        let appelation: string = req.body.appelation, niveau : string = req.body.niveau;
        try {
            let create_eleve: any = await eleveMdls.create(appelation, niveau);
            if(create_eleve.affectedRows == 1) return res.send("Insertion réussie")
            res.status(500).send("Insertion échec");
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    update = async(req: Request, res: Response) => {
        let appelation :string = req.body.appelation, niveau :string = req.body.niveau, id : number= parseInt(req.body.id);
        try {
            let update_eleve: any = await eleveMdls.update(id, appelation, niveau);
            if(update_eleve.affectedRows == 1) return res.send("Modification réussie")
            res.status(500).send("Modification échec");
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }
}

export default new EleveCtrl;