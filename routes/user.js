const express = require('express');
const router = express.Router();
const { User, Page } = require('../models/index');
const userPages = require('../views/userPages')
const userList = require('../views/userList')


router.get('/', async (req,res,next) =>{
  const allUsers = await User.findAll();
  console.log(allUsers)
  res.send(userList(allUsers));
})

router.get('/:id', async (req,res,next) =>{
  const id = req.params.id;
  const oneUser = await User.findByPk(id);
  const allPages = await Page.findAll()
  console.log(oneUser)
  res.send(userPages(oneUser,allPages));
})



module.exports = router;
