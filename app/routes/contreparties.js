const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('../config/database');
const Contrepartie = require('../models/Contrepartie');


// GET une liste de toutes les contreparties
router.get('/',(req, res) => 
    Contrepartie.findAll()    
    .then(contreparties => {
        const ags = {
            context: contreparties.map(data =>{
                return{
                    contrepartie_id: data.contrepartie_id,
                    description: data.description,
                    etat_avancement: data.etat_avancement,
                    statut: data.statut,
                }
            })
        }
        res.json(ags.context);
    })
    .catch(err => res.status(500).json({message: err})) 
);


// Créer une nouvelle contrepartie
router.post('/',(req, res) => {
    let {description,etat_avancement,statut} = req.body;
    let errors = [];

    // Validation des champs
    if(!description){errors.push({text: "pas de description"})};
    if(!etat_avancement){errors.push({text: "pas d'état d'avancement"})};
    if(!statut){errors.push({text: "pas de statut"})};
    //check for errors
    if(errors.length != 0){
        res.send(JSON.stringify(errors))
    } else {
        //insert into table
        Contrepartie.create({
            errors,
            description,
            etat_avancement,
            statut
        })
            .then(Contrepartie =>{
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({message: "Contrepartie added"}));
            })
            .catch(err => res.status(500).json({message: err}))
        }   
}  
);


// Renvoie les infos d'une contrepartie identifié par son id
router.get('/:contrepartie_id',(req,res)=>{
    contrepartie_id = req.params.contrepartie_id;

    Contrepartie.findByPk(contrepartie_id)
        .then( data => {
            const ag = {
                context: {    
                    description: data.description,                
                    etat_avancement: data.etat_avancement,
                    statut: data.statut,
                }
            }
            res.json(ag.context)
        })
        .catch(err => res.status(500).json({message: err}));
   
});

// Supprime une contrepartie
router.delete('/:contrepartie_id',(req,res)=>{
    contrepartie_id = req.params.contrepartie_id;
    Contrepartie.findByPk(contrepartie_id)
    .then(
        Contrepartie.destroy({
                where: {contrepartie_id: contrepartie_id}
            }).then( data =>{
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({message: "Contrepartie deleted"}));
            }).catch(err => {
                res.status(500).json({message: err.message})
            })
    ).catch(err => {
        res.status(500).json({message: err.message})
    })  

});



// valide (mofifie) une contrepartie
router.put('/:contrepartie_id',(req,res)=>{
    contrepartie_id = req.params.contrepartie_id;
    try {
        var obj = JSON.parse(req.body.data).value;
    }catch {
        var obj = req.body;
    }
    console.log(obj)
    
    let {etat_avancement, statut} = obj;
    console.log(req.body);


    // update dans la table
    Contrepartie.update({
        etat_avancement,
        statut,
        },
        {where: {contrepartie_id: contrepartie_id}}
    )
        .then(contrepart =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "contrepartie modified"}));
        })
        .catch(err => res.status(500).json({message: err})) 
    }   

   
);


module.exports = router;