const Sequelize = require('sequelize');
const db = require('../config/database');

const Sponsor = db.define('sponsors',{

    sponsor_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: Sequelize.STRING
    },
    adresse: {
        type: Sequelize.STRING
    },

})
module.exports = Sponsor;