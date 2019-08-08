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
    const newPost = await Page.create({
      'title':FulllStack,
      'slug': WhatIsASlug,
      'content':'The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphos, similar to an underscore at the beginning of the new group.[2] The Greek paragraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences. The hedera leaf (e.g. ☙) has also been used in the same way.',
      'status': open
    })
    res.send(newPost);

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
