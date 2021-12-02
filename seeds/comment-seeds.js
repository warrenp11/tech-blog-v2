const sequelize = require("../config/connection");
const { Comment, Post, User } = require("../models");

commentData = [
    {
        comment_text: "strawberries",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "blueberries",
        user_id: 2,
        post_id: 2,
    },
    {
        comment_text: "blackberries",
        user_id: 3,
        post_id: 3,
    },
    {
        comment_text: "raspberries",
        user_id: 4,
        post_id: 4,
    },
    {
        comment_text: "goji berries",
        user_id: 5,
        post_id: 5,
    },
];

const seedComments = () => Comment.bulkCreate(commentData, { individualHooks: true });
  
module.exports = seedComments;