const Resume = require('../models/resume');

module.exports = {
    create,
    index,
    show,
    update,
    delete: deleteOneResume,
    showMine
}

async function create(req, res) {
    console.log("create function hit")
    console.log("log the body", req.body)
    console.log("the user is", req.user)
     console.log("the filname is", req.files.file.name)
  try {
    await Resume.create({
      user: req.user._id,
      title: req.body.title,
      level: req.body.level,
      image:"https://resumatesbucket.s3.amazonaws.com/"+req.files.file.name,
        
    });
    res.status(200).json('Upload Resume Form to DB!')
 } catch(err) {
    res.json(err);
 }
}

async function index(req, res) {
  try {
    let resumes = await Resume.find()
    res.status(200).json(resumes)      
  } catch(err) {
    res.status(400).json(err);
  }
}

async function showMine(req, res) {
console.log("hey user", req.user)
  try {
    let resumes = await Resume.find()
    res.status(200).json(resumes)      
  } catch(err) {
    res.status(400).json(err);
  }
}

async function show (req, res) {
    let resume = await Resume.find({'resumes._id': req.params.id});
    return res.json(resume);
}

async function update (req, res) {
    let resume = await Resume.findOne({'resumes._id': req.params.id});
    for (let key in req.body) {
        resume[key] = req.body[key];
    };
    try{
        await resume.save();
    } catch (err) {
        console.log(err);
    }
    return res.json(resume);
}

async function deleteOneResume (req, res) {
  try {
    let removeResume = await Resume.findByIdAndRemove(req.params.id)
    res.status(200).json(removeResume)      
  } catch(err) {
    res.status(400).json(err);
  }
}