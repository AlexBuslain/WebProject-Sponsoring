const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('../config/database');
const Sponsor = require('../models/Sponsor');


// GET une liste de tous les sponsors
router.get('/',(req, res) => 
    Sponsor.findAll()    
    .then(sponsors => {
        const ags = {
            context: sponsors.map(data =>{
                return{
                    sponsor_id: data.sponsor_id,
                    nom: data.nom,
                    adresse: data.adresse,
                }
            })
        }
        res.json( ags.context);
    })
    .catch(err => res.status(500).json({message: err})) 
);

// Renvoie les infos d'un sponsor identifié par son id
router.get('/id=:sponsor_id',(req,res)=>{
    sponsor_id = req.params.sponsor_id;

    Sponsor.findByPk(sponsor_id)
        .then( data => {
            const ag = {
                context: {                    
                    nom: data.nom,
                    adresse: data.adresse,
                }
            }
            res.json(ag.context)
        })
        .catch(err => res.status(500).json({message: err}));
   
});

// Supprime un sponsor
router.delete('/id=:sponsor_id',(req,res)=>{
    sponsor_id = req.params.sponsor_id;

    Sponsor.destroy({
            where: {id: sponsor_id}
        }).then( data =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "Sponsor deleted"}));
        }).catch(err => {
            res.status(500).json({message: err.message})
        })
    .catch(err => {
        res.status(500).json({message: err.message})
    })  

});


// Créer un nouveau sponsor
router.post('/add',(req, res) => {
    
    let {nom, adresse} = req.body;
    console.log(req.body);
    let errors = [];

    // validate fields
    if(!nom){errors.push({text: "pas de nom"})};
    if(!adresse){errors.push({text: "pas d'adresse"})};

    //check for errors
    if(errors.length != 0){
        res.render('add',{
            errors,
            nom,
            adresse,
        })
    } else{
        //insert into table
        Sponsor.create({
            nom,
            adresse,
        })

            // .then(sponsors => res.redirect('/sponsors')) 
            
            .then(sponso =>{
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({message: "Sponsor added"}));
            })
            .catch(err => res.status(500).json({message: err})) 
        }   
    }
    
    
);

module.exports = router;