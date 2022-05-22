const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('../config/database');
const Accord = require('../models/Accord');

// GET une liste de tous les accords
router.get('/',(req, res) => 
    Accord.findAll()    
    .then(accords => {
        const ags = {
            context: accords.map(data =>{
                return{
                    sponsor: data.sponsor,
                    athlete: data.athlete,
                    date_signature: data.date_signature,
                    date_fin: data.date_fin
                }
            })
        }
        res.json( ags.context);
    })
    .catch(err => res.status(500).json({message: err})) 
);

// Renvoie un accord identifié par son id
router.get('/:accord_id',(req,res)=>{
    accord_id = req.params.accord_id;

    Accord.findByPk(accord_id)
        .then( data => {
            const ag = {
                context: {                    
                    sponsor: data.sponsor,
                    athlete: data.athlete,
                    date_signature: data.date_signature,
                    date_fin: data.date_fin
                }
            }
            res.json(ag.context)
        })
        .catch(err => res.status(500).json({message: err}));
   
});

// Supprime un accord
router.delete('/:accord_id',(req,res)=>{
    accord_id = req.params.accord_id;
    Accord.findByPk(accord_id)
    .then(
        Accord.destroy({
                where: {accord_id: accord_id}
            }).then( data =>{
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({message: "Accord deleted"}));
            }).catch(err => {
                res.status(500).json({message: err.message})
            })
    ).catch(err => {
        res.status(500).json({message: err.message})
    })  

});



// Modifie un accord
router.put('/:accord_id',(req,res)=>{
    accord_id = req.params.accord_id;
    try {
        var obj = JSON.parse(req.body.data).value;
    }catch {
        var obj = req.body;
    }
    console.log(obj)
    
    let {accord_id,sponsor,athlete,date_signature,date_fin} = obj;
    console.log(req.body);


    // update dans la table
    Accord.update({
        accord_id,
        sponsor,
        athlete,
        date_signature,
        date_fin,
        },
        {where: {accord_id: accord_id}}
    )
        .then(Accord =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "Accord modified"}));
        })
        .catch(err => res.status(500).json({message: err})) 
    }   

   
);

// Crée un nouvel accord
router.post('/',(req, res) => {
    let {sponsor,athlete,date_signature,date_fin} = req.body;
    let errors = [];
    // Validation des champs
    if(!sponsor){errors.push({text: "no sponsor"})};
    if(!athlete){errors.push({text: "no athlete"})};
    if(!date_signature){errors.push({text: "no date_signature"})};
    if(!date_fin){errors.push({text: "no date_fin"})};
    //check for errors
    if(errors.length != 0){
        res.send(JSON.stringify(errors))
    } else {
        //insert into table
        Accord.create({
            errors,
            sponsor,
            athlete,
            date_signature,
            date_fin
        })
            .then(Accord =>{
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({message: "Accord added"}));
            })
            .catch(err => res.status(500).json({message: err}))
        }   
    }  
);



module.exports = router;