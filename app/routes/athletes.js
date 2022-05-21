const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//const db = require('../config/database');
const Athlete = require('../models/Athlete');


// GET une liste de tous les Athletes
router.get('/',(req, res) => 
    Athlete.findAll()    
    .then(athletes => {
        const ags = {
            context: athletes.map(data =>{
                return{
                    athlete_id: data.athlete_id,
                    nom: data.nom,
                    prenom: data.prenom,
                    discipline: data.discipline,
                    adresse: data.adresse,
                }
            })
        }
        res.json( ags.context);
    })
    .catch(err => res.status(500).json({message: err})) 
);

// Renvoie les infos d'un Athlete identifié par son id
router.get('/:athlete_id',(req,res)=>{
    athlete_id = req.params.athlete_id;

    Athlete.findByPk(athlete_id)
        .then( data => {
            const ag = {
                context: {       
                    athlete_id: data.athlete_id,             
                    nom: data.nom,
                    prenom: data.prenom,
                    discipline: data.discipline,
                    adresse: data.adresse,
                }
            }
            res.json(ag.context)
        })
        .catch(err => res.status(500).json({message: err}));
   
});

// Supprime un Athlete
router.delete('/:athlete_id',(req,res)=>{
    athlete_id = req.params.athlete_id;
    Athlete.findByPk(athlete_id)
    .then(
        Athlete.destroy({
            where: {id: athlete_id}
        }).then( data =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "Athlete deleted"}));
        }).catch(err => {
                res.status(500).json({message: err.message})
        })
    ).catch(err => {
        res.status(500).json({message: err.message})
    })  

});


// Créer un nouvel Athlete
router.post('/',(req, res) => {
    
    let {nom, prenom, discipline, adresse} = req.body;
    console.log(req.body);
    let errors = [];

    // validate fields
    if(!nom){errors.push({text: "pas de nom"})};
    if(!prenom){errors.push({text: "pas de prenom"})};
    if(!discipline){errors.push({text: "pas de discipline"})};
    if(!adresse){errors.push({text: "pas d'adresse"})};

    //check for errors
    if(errors.length != 0){
        res.render('add',{
            errors,
            nom,
            prenom,
            discipline,
            adresse,
        })
    } else{
        //insert into table
        Athlete.create({
            nom,
            prenom,
            discipline,
            adresse,
        })


            // .then(Athletes => res.redirect('/Athletes')) 
            
            .then(dest =>{
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({message: "Athlete added"}));
            })
            .catch(err => res.status(500).json({message: err})) 
        }   
    }
    
    
);



// Modifie un athlète
router.put('/:athlete_id',(req,res)=>{
    athlete_id = req.params.athlete_id;
    try {
        var obj = JSON.parse(req.body.data).value;
    }catch {
        var obj = req.body;
    }
    console.log(obj)
    
    let {nom, prenom, discipline, adresse} = obj;
    console.log(req.body);


    // update dans la table
    Athlete.update({
        nom,
        prenom,
        discipline,
        adresse,
        },
        {where: {id: athlete_id}}
    )
        .then(athlete =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "Athlete modified"}));
        })
        .catch(err => res.status(500).json({message: err})) 
    }   

   
);

module.exports = router;