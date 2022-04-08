import db from '../service/connect';

class EleveMdls {
    getList = () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM eleve", function(err, resultats){
                if(err) reject(new Error("Erreur ressource list élèves"));
                resolve(resultats);
            })
        })
    }
    
    get = (id: number) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM eleve WHERE id = ?", [id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get élève"));
              resolve(resultat);
            })
        })
    }

    create = (appeltion: string, niveau: string) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO eleve(appelation, niveau) VALUES(?,?)", [appeltion, niveau] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource create élève"));
              resolve(resultat);
            })
        })
    }

    update = (id: number, appelation: string, niveau: string) => {
        return new Promise((resolve, reject) => {
            db.query("UPDATE eleve SET appelation = ?, niveau = ? WHERE id = ?", [appelation, niveau, id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource create élève"));
              resolve(resultat);
            })
        })
    }
}


export default new EleveMdls;