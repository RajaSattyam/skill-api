const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const SkillService = require("./app/service/skillService");


app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
    "mongodb://localhost:27017/skill"
  );
mongoose.Promise = global.Promise;
app.get('/',(req,res) =>{
    res.status(200).send('api running');
});
app.get('/api/skills', SkillService.listSkills);
app.post('/api/skills', SkillService.addSkill);
app.patch('/api/skills/:id/approve', SkillService.updateStatus);
app.patch('/api/skills/:id/update', SkillService.editSkill);
app.listen('3000', () => console.log('server running on port 3000'));