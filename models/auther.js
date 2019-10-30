const mongoose = require('mongoose');
const { Schema } = mongoose;

const autherSchema = new Schema({
  autherName: String,
  email: String,
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'aritcle',
    },
  ],
});

const Auther = mongoose.model('auther', autherSchema); 

module.exports = {
  Auther
};