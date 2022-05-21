const Sequelize = require('sequelize');
const db = require('../config/database');

const Athlete = db.define('athletes',{

    athlete_id: {
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


})
module.exports = Athlete;