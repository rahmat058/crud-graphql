const mongoose  = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  auther: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'aether',
  },
});

const Article = mongoose.model('article', articleSchema);

module.exports = {
    Article
};