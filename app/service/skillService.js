const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Skill = require("../model/skill");

module.exports.addSkill = function(req,res){
    const skill = new Skill({
        _id:new mongoose.Types.ObjectId(),
        skillName:req.body.name,
        status: req.body.status
    });
    skill.save().then(result => {
        console.log(result);
        res.status(201).json({message:"skill added successfully"})
    }).catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
}

module.exports.editSkill = function(req,res){
    let id = req.params.id;
    Skill.update({_id:id},{ $set: {skillName:req.body.name}}).exec().then(result => {
        res.status(200).json({message:"Skill updated successfully"});
    }).catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
}

module.exports.listSkills = function(req, res){
    Skill.find()
    .select("skillName status _id") 
    .exec()
    .then(docs => {
        if(docs.length > 0){
            res.status(200).json({
                skills : docs
            });
        } else {
            res.send(404).json({
                message:'No entries found'
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
}

module.exports.updateStatus = function(req, res){
    let id = req.params.id;
    Skill.update({_id:id},{ $set: {status:req.body.status}}).exec().then(result => {
        res.status(200).json({message:"Status updated successfully"});
    }).catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
}