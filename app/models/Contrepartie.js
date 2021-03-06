const Sequelize = require('sequelize');
const db = require('../config/database');

const Contrepartie = db.define('contreparties',{

    contrepartie_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
    },
    etat_avancement: {
        type: Sequelize.STRING
    },
    statut: {
        type: Sequelize.BOOLEAN
    },

})
module.exports = Contrepartie;