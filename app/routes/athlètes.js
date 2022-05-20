const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('../config/database');
const Athlète = require('../models/Athlete');


// GET une liste de tous les athlètes
router.get('/',(req, res) => 
    Athlète.findAll()    
    .then(Athlète => {
        const ags = {
            context: Athlète.map(data =>{
                return{
                    nom: data.nom,
                    prenom: data.prenom,
                    discipline: data.discipline,
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

// Renvoie les infos d'un athlète identifié par son id
router.get('/id=:id',(req,res)=>{
    id = req.params.id;

    Athlète.findByPk(id)
        .then( data => {
            const ag = {
                context: {                    
                    nom: data.nom,
                    prenom: data.prenom,
                    discipline: data.discipline,
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

// Supprime un athlète
router.delete('/id=:id',(req,res)=>{
    id = req.params.id;

    Athlète.destroy({
            where: {id: id}
        }).then( data =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "Athlète deleted"}));
        }).catch(err => {
            res.status(500).json({message: err.message})
        })
    .catch(err => {
        res.status(500).json({message: err.message})
    })  

});


// Créer un nouvel athlète
router.post('/add',(req, res) => {
    
    let {nom, prenom, discipline, adresse, rue, numéro, codepostal, ville} = req.body;
    console.log(req.body);
    let errors = [];

    // validate fields
    if(!nom){errors.push({text: "pas de nom"})};
    if(!prenom){errors.push({text: "pas de prenom"})};
    if(!discipline){errors.push({text: "pas de discipline"})};
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
            prenom,
            discipline,
            adresse,
            rue,
            numéro,
            codepostal,
            ville,
        })
    } else{
        //insert into table
        Athlète.create({
            nom,
            prenom,
            discipline,
            adresse,
            rue,
            numéro,
            codepostal,
            ville,
        })


            // .then(athlètes => res.redirect('/athlètes')) 
            
            .then(dest =>{
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({message: "Athlète added"}));
            })
            .catch(err => res.status(500).json({message: err})) 
        }   
    }
    
    
);

module.exports = router;