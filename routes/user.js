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

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create()
    res.send(newUser);

  } catch (error) {
    next(error);
  }
});

router.put('/:id', async( req, res, next) => {
  try {
    const id = req.params.id;
    const updateUser = await User.update({name, email}, {
        where: {id: id}
    })
  }catch (error) {
    next(error);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteUser = await User.destroy({where: { id: id }})
  } catch (error) {
    next(error);
  }
})






module.exports = router;
