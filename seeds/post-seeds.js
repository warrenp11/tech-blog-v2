const sequelize = require("../config/connection");
const { Post, User } = require("../models");

postData = [
    {
        title: "Proposing 5 blockbuster Black Friday trades",
        user_id: 1,
    },
    {
        title: "Ranking the likeliest suitors for Correa",
        user_id: 2,
    },
    {
        title: "GMs like to cash in on Black Friday deals, too",
        user_id: 3,
    },
    {
        title: "Each team's most intriguing Rule 5 prospect",
        user_id: 4,
    },
    {
        title: "At least 5 clubs eyeing Stroman",
        user_id: 5,
    },
    {
        title: "Schwarber takes another shot at free agency",
        user_id: 6,
    },
    {
        title: "Kelper helps tout baseball in Germany",
        user_id: 7,
    },
    {
        title: "What Franco's extension could mean for Rays",
        user_id: 8,
    },
    {
        title: "The lowdown on FA OF Nick Castellanos",
        user_id: 9,
    },
    {
        title: "Free agent decisions that shook up MLB",
        user_id: 10,
    },
];

const seedPosts = () => Post.bulkCreate(postData, { individualHooks: true });
  
module.exports = seedPosts;