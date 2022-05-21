const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('../config/database');
const Contrepartie = require('../models/Contrepartie');


// GET une liste de tous les accords
router.get('/',(req, res) => 
    Contrepartie.findAll()    
    .then(contreparties => {
        const ags = {
            context: contreparties.map(data =>{
                return{
                    etat_avancement: data.etat_avancement,
                    statut: data.statut,
                }
            })
        }
        res.json( ags.context);
    })
    .catch(err => res.status(500).json({message: err})) 
);

// Renvoie les infos d'une contrepartie identifié par son id
router.get('/id=:contrepartie_id',(req,res)=>{
    contrepartie_id = req.params.contrepartie_id;

    Contrepartie.findByPk(contrepartie_id)
        .then( data => {
            const ag = {
                context: {                    
                    etat_avancement: data.etat_avancement,
                    statut: data.statut,
                }
            }
            res.json(ag.context)
        })
        .catch(err => res.status(500).json({message: err}));
   
});

// Supprime un accord
router.delete('/id=:contrepartie_id',(req,res)=>{
    contrepartie_id = req.params.contrepartie_id;

    Contrepartie.destroy({
            where: {id: contrepartie_id}
        }).then( data =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "contrepartie deleted"}));
        }).catch(err => {
            res.status(500).json({message: err.message})
        })
    .catch(err => {
        res.status(500).json({message: err.message})
    })  

});



// valide (mofifie) une contrepartie
router.put('/id=:contrepartie_id',(req,res)=>{
    contrepartie_id = req.params.contrepartie_id;
    try {
        var obj = JSON.parse(req.body.data).value;
    }catch {
        var obj = req.body;
    }
    console.log(obj)
    
    let {statut} = obj;
    console.log(req.body);


    // update dans la table
    Contrepartie.update({
        statut,
        },
        {where: {id: contrepartie_id}}
    )
        .then(contrepart =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "contrepartie modified"}));
        })
        .catch(err => res.status(500).json({message: err})) 
    }   

   
);


module.exports = router;