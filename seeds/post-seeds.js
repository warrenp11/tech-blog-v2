const sequelize = require("../config/connection");
const { Post, User } = require("../models");

postData = [
    {
        title: "Proposing 5 blockbuster Black Friday trades",
        user_id: 1,
        content: 'When does a joke become a “dad joke?” When it becomes apparent.'
    },
    {
        title: "Ranking the likeliest suitors for Correa",
        user_id: 2,
        content: "Did you hear about the racing snail who got rid of his shell? He thought it would make him faster, but it just made him sluggish."
    },
    {
        title: "GMs like to cash in on Black Friday deals, too",
        user_id: 3,
        content: "The journey of a thousand miles begins with one step"
    },
    {
        title: "Each team's most intriguing Rule 5 prospect",
        user_id: 4,
        content: "Life is what happens when you’re busy making other plans."
    },
    {
        title: "At least 5 clubs eyeing Stroman",
        user_id: 5,
        content: "Whether you think you can or you think you can’t, you’re right."
    },
    {
        title: "Schwarber takes another shot at free agency",
        user_id: 6,
        content: "You miss 100 percent of the shots you never take."
    },
    {
        title: "Kelper helps tout baseball in Germany",
        user_id: 7,
        content: "If you’re going through hell, keep going."
    },
    {
        title: "What Franco's extension could mean for Rays",
        user_id: 8,
        content: "Strive not be a success, but rather to be of value"
    },
    {
        title: "The lowdown on FA OF Nick Castellanos",
        user_id: 9,
        content: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."
    },
    {
        title: "Free agent decisions that shook up MLB",
        user_id: 10,
        content: "ife is like a box of chocolates. You never know what you’re going to get."
    },
];

const seedPosts = () => Post.bulkCreate(postData, { individualHooks: true });
  
module.exports = seedPosts;