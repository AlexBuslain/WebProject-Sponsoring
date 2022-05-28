const Sequelize = require('sequelize');
const db = require('../config/database');

const Link = db.define('links',{

    link_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
   accord_id: {
        type: Sequelize.INTEGER,
    },
    contrepartie_id: {
        type: Sequelize.INTEGER,
    }

})
module.exports = Link;