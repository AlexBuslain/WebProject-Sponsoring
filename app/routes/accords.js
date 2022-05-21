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
router.get('/id=:accord_id',(req,res)=>{
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
router.delete('/id=:accord_id',(req,res)=>{
    accord_id = req.params.accord_id;

    Accord.destroy({
            where: {id: accord_id}
        }).then( data =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "accord deleted"}));
        }).catch(err => {
            res.status(500).json({message: err.message})
        })
    .catch(err => {
        res.status(500).json({message: err.message})
    })  

});



// Modifie un accord
router.put('/id=:accord_id',(req,res)=>{
    accord_id = req.params.accord_id;
    try {
        var obj = JSON.parse(req.body.data).value;
    }catch {
        var obj = req.body;
    }
    console.log(obj)
    
    let {name, description, country} = obj;
    console.log(req.body);


    // update dans la table
    Accord.update({
        sponsor,
        athlete,
        date_signature,
        date_fin,
        },
        {where: {id: accord_id}}
    )
        .then(dest =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "accord modified"}));
        })
        .catch(err => res.status(500).json({message: err})) 
    }   

   
);


// Créer un nouvel accord
router.post('/add',(req, res) => {
    
    let {sponsor,athlete,date_signature,date_fin} = req.body;
    let errors = [];

    // Validation des champs
    if(!sponsor){errors.push({text: "no sponsor"})};
    if(!athlete){errors.push({text: "no athlete"})};
    if(!date_signature){errors.push({text: "no date_signature"})};
    if(!date_fin){errors.push({text: "no date_fin"})};

    //check les erreurs
    if(errors.length != 0){
        res.render('add',{
            errors,
            sponsor,
            athlete,
            date_signature,
            date_fin
        })
    } else{
        //insert dans la table
        Accord.create({
            sponsor,
            athlete,
            date_signature,
            date_fin
        })
            // .then(accords => res.redirect('/accords')) 
            .then(res.json({response: "accord added"}))
            .catch(err => res.status(500).json({message: err})) 
        }   
    }
    
);

// Cherche un accord
router.get('/search',(req, res) =>{
    let {term} = req.query;
    term = term.toLowerCase();

    Accord.findAll({
        where: {
            [Op.or]: {
                sponsor: db.where(db.fn('LOWER',db.col('sponsor')),'LIKE','%'+term+'%'),
                athlete: db.where(db.fn('LOWER',db.col('athlete')),'LIKE','%'+term+'%'),
                date_signature: db.where(db.fn('LOWER',db.col('date_signature')),'LIKE','%'+term+'%'),
            }
        }
    })
    .then(accord => {
        const dests = {
            context: accord.map(data =>{
                return{
                    sponsor: data.sponsor,
                    athlete: data.athlete,
                    date_signature: data.date_signature,
                }
            })
        }
        res.json(dests.context)
    })
    .catch(err => res.status(500).json({message: err})) 
})


module.exports = router;