const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linkSchema = new Schema({
    username : { type: String, require: true },
    title : { type: String, require: true },
    url : { type: String, require: true },
},{
    timestamps: true,
});

const Link = mongoose.model('Link',linkSchema);

module.exports = Link;