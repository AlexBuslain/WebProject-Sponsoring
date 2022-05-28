const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('../config/database');
const Link = require('../models/Link');
const { route } = require('./accords');


// Obtenir une liste de tous les liens
router.get('/',(req, res) => {
    Link.findAll()    
    .then(links => {
        const linkies = {
            context: links.map(data =>{
                return{
                    // id: data.id,
                    link_id: data.link_id,
                    accord_id: data.accord_id,
                    contrepartie_id: data.contrepartie_id
                }
            })
        }
        res.json({links: linkies.context});

    })
    .catch(err => res.status(500).json({message: err})) 
    
});



// Ajouter un nouveau lien
router.post('/',(req, res) => {

    let {accord_id, contrepartie_id} = req.body;
    let errors = [];

    // validate fields
    if(!accord_id){errors.push({text: "no accord id"})};
    if(!contrepartie_id){errors.push({text: "no contrepartie id"})};

    //check for errors
    if(errors.length != 0){
        res.json({
            errors,
            accord_id, 
            contrepartie_id
        })
    } else{
        //insert into table
        Link.create({
            accord_id, 
            contrepartie_id
        })
            // .then(linkes => res.redirect('/links'))
            .then(res.json({message: "link added"})) 
            .catch(err => console.log(err))
        }   
    }
    
    
);

// Return a link with the id
router.get('/:link_id',(req,res)=>{
    link_id = req.params.link_id;
    // console.log(agenId)

    Link.findByPk(link_id)
        .then( data => {
            const linkie = {
                context: {                    
                    // id: data.id,
                    accord_id: data.accord_id,
                    contrepartie_id: data.contrepartie_id
                }
            }
            res.json(linkie.context)
        })
        .catch(err => res.status(500).json({message: err}));
   
});

// delete link
router.delete('/:link_id',(req,res)=>{
    link_id = req.params.link_id;
    Link.destroy({
        where: {link_id: link_id}
    }).then( data =>{
        res.json({message: "link deleted"});
    }).catch(err => {
        res.status(500).json({message: err.message})
    })

});


module.exports = router;