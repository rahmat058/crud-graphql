const { Auther } = require('../models/auther');
const { Article } = require('../models/article');

const resolvers = {
    Query: {
        getAuthers: async () => await Auther.find({}).exec(),
        getArticles: async () => await Article.find({}).exec()
    },
    Mutation: {
        addAuther: async (_, args) => {
            try {
                let response = await Auther.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        },
        addArticle: async (_, args) => {
            try {
                let response = await Article.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        },
        deleteArticle: async (parent, args) => {
            const { id } = args
            let deletedArticle = await Article.findByIdAndRemove(id);
            return deletedArticle;
        },
        updateArticle: async (parent, args) => {
            const { id, content, title } = args
            let updatedArticle = await Article.findByIdAndUpdate(id, {content, title});
            return updatedArticle;
        }
    },
    Article: {
        author: async (parent, args) => {
            const { auther, _id } = parent;
            let getAuther  = await Auther.findById(auther);
            getAuther.articles.push(_id);
            return await getAuther.save();
        },
      },
      Auther: {
          articles: async (parent, args) => {
              console.log(parent);
            const { articles} = parent;
            return await Article.find({'_id': { $in: articles}});
        },
      }
};

module.exports = resolvers;