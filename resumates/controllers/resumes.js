const Resume = require('../models/resume');

module.exports = {
    create,
    show,
    update,
    delete: deleteOneResume,
}

async function create(req, res) {
  try {
    await Resume.create({
        jobTitle: req.body.jobTitle,
        experience: req.body.experience,
    })
    res.status(200).json('Upload Resume Form added to DB!')
 } catch(err) {
    res.json(err);
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