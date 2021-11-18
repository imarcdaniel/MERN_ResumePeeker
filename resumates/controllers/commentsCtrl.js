const Comment = require('../models/comment');
const User = require("../models/user");

module.exports = {
    createComment,
    indexComment,
    
}

async function createComment(req, res) {
  console.log("user", req.user)
  console.log("user id", req.user._id)
  console.log("name", req.user.name)
  try {
    // const user = await User.findById(req.user.id).select("-password");

    await Comment.create({
      text: req.body.text,
      // name: user.name,
      user: req.user._id,
      name: req.user.name,
    })

    // const comment = await newComment.save();

    res.status(200).json('Upload comment to DB!')
 } catch(err) {
    res.json(err);
 }
}

async function indexComment(req, res) {
  try {
    let comments = await Comment.find()
    res.status(200).json(comments)      
  } catch(err) {
    res.status(400).json(err);
  }
}

