const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('../config/database');
const Sponsor = require('../models/Sponsor');


// GET une liste de tous les sponsors
router.get('/',(req, res) => 
    Sponsor.findAll()    
    .then(Sponsor => {
        const ags = {
            context: Sponsor.map(data =>{
                return{
                    nom: data.nom,
                    adresse: data.adresse,
                    rue: data.rue,
                    numéro: data.numéro,
                    codepostal: data.codepostal,
                    ville: data.ville,
                }
            })
        }
        res.json( ags.context);
    })
    .catch(err => res.status(500).json({message: err})) 
);

// Renvoie les infos d'un sponsor identifié par son id
router.get('/id=:id',(req,res)=>{
    id = req.params.id;

    Sponsor.findByPk(id)
        .then( data => {
            const ag = {
                context: {                    
                    nom: data.nom,
                    adresse: data.adresse,
                    rue: data.rue,
                    numéro: data.numéro,
                    codepostal: data.codepostal,
                    ville: data.ville,
                }
            }
            res.json(ag.context)
        })
        .catch(err => res.status(500).json({message: err}));
   
});

// Supprime un sponsor
router.delete('/id=:id',(req,res)=>{
    id = req.params.id;

    Sponsor.destroy({
            where: {id: id}
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
    
    let {nom, adresse, rue, numéro, codepostal, ville} = req.body;
    console.log(req.body);
    let errors = [];

    // validate fields
    if(!nom){errors.push({text: "pas de nom"})};
    if(!adresse){errors.push({text: "pas d'adresse"})};
    if(!rue){errors.push({text: "pas de rue"})};
    if(!numéro){errors.push({text: "pas de numéro"})};
    if(!codepostal){errors.push({text: "pas de code postal"})};
    if(!ville){errors.push({text: "pas de ville"})};

    //check for errors
    if(errors.length != 0){
        res.render('add',{
            errors,
            nom,
            adresse,
            rue,
            numéro,
            codepostal,
            ville,
        })
    } else{
        //insert into table
        Sponsor.create({
            nom,
            adresse,
            rue,
            numéro,
            codepostal,
            ville,
        })


            // .then(sponsors => res.redirect('/sponsors')) 
            
            .then(dest =>{
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({message: "Sponsor added"}));
            })
            .catch(err => res.status(500).json({message: err})) 
        }   
    }
    
    
);

module.exports = router;