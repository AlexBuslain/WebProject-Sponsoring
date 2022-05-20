const Sequelize = require('sequelize');
const db = require('../config/database');

const Athlete = db.define('athlète',{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: Sequelize.STRING
    },
    prenom: {
        type: Sequelize.STRING
    },
    discipline: {
        type: Sequelize.STRING
    },
    adresse: {
        type: Sequelize.STRING
    },
    rue: {
        type: Sequelize.STRING
    },
    numéro: {
        type: Sequelize.INTEGER
    },
    codepostal: {
        type: Sequelize.INTEGER
    },
    ville: {
        type: Sequelize.STRING
    },


})
module.exports = Athlete;