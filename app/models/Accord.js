const Sequelize = require('sequelize');
const db = require('../config/database');

const Accord = db.define('accord',{

    accord_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sponsor: {
        type: Sequelize.STRING
    },
    athlète: {
        type: Sequelize.STRING
    },
    date_signature: {
        type: Sequelize.DATE
    },
    date_fin: {
        type: Sequelize.DATE
    },

})
module.exports = Accord;