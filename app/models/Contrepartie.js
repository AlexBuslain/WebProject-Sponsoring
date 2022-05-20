const Sequelize = require('sequelize');
const db = require('../config/database');

const Contrepartie = db.define('contrepartie',{

    contrepartie_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    etat_avancement: {
        type: Sequelize.STRING
    },
    statut: {
        type: Sequelize.BOOLEAN
    },

})
module.exports = Contrepartie;