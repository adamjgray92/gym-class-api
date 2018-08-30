import mongoose from 'mongoose';
import { Router } from 'express';

import GymClass from '../model/GymClass';

export default({ config, db }) => {
  let api = Router();

  // 'v1/classes/'
  api.post('/', (req, res) => {
    let newClass = new GymClass();
    newClass.name = req.body.name;
    newClass.startDate = req.body.startDate;
    newClass.endDate = req.body.endDate;
    newClass.location = req.body.location;
    newClass.instructor = req.body.instructor;

    newClass.save(err => {
      if (err) { res.send(err) }
      res.json({ message: "Class Successfully Saved" });
    });
  });

  // 'v1/classes'
  api.get('/', (req, res) => {
    GymClass.find({}, (err, classes) => {
      if(err){
        res.send(err);
      }
      res.json(classes);
    });
  });

  // 'v1/classes/:id
  api.get('/:id', (req, res) => {
    GymClass.findById(req.params.id, (err, gymClass) => {
      if(err){
        res.send(err);
      }
      res.json(gymClass);
    });
  });

  // 'v1/classes/:id
  api.put('/:id', (req, res) => {
    GymClass.findById(req.params.id, (err, gymClass) => {
      if(err){
        res.send(err);
      }
      gymClass.name = req.body.name;
      gymClass.startDate = req.body.startDate;
      gymClass.endDate = req.body.endDate;
      gymClass.location = req.body.location;
      gymClass.instructor = req.body.instructor;
      gymClass.save(err => {
        if(err){
          res.send(err);
        }
        res.json({ message: "Class Successfully Updated." });
      });
    });
  });

  // 'v1/classes/:id'
  api.delete('/:id', (req, res) => {
    GymClass.remove({
      _id: req.params.id
    }, (err, gymClass) => {
      if(err){
        res.send(err);
      }
      res.json({ message: "Class Successfully Removed." });
    });
  });

  return api;
}