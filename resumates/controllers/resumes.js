const Resume = require('../models/resume');

module.exports = {
    create,
    index,
    show,
    update,
    delete: deleteOneResume,
}

async function create(req, res) {
  try {
    await Resume.create({
        title: req.body.title,
        level: req.body.level,
    })
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
    let resume = await Resume.findOne({'resumes._id': req.params.id});
    resume.id(req.params.id).remove();
    resume.save(function(err){
        return res.json(resume);
    })
}