const express = require('express');
const router = express.Router();
const { Page }  = require('../models/index')
const addPage = require('../views/addPage')

router.get('/',async (req,res,next) => {
  try {
    const wikiList = await Page.findAll();
    res.send(wikiList);

  } catch (error) {
    next(error);
  }
})

router.post('/',async (req,res,next) => {
  try {
    const title = req.body.title;
    const slug = req.body.slug
    const newPost = await Page.create()
    res.json(req.body);

  } catch (error) {
    next(error);
  }
})

router.get('/add',async (req,res,next) => {
  try {

    res.send(addPage());

  } catch (error) {
    next(error);
  }
})

module.exports = router;
