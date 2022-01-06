const express = require('express');
const asyncHandler = require('express-async-handler');

const tagValidations = require('../../utils/validations/tags.js')
const db = require('../../db/models');
const { Tag } = db

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const allTags = await Tag.findAll()
    res.json(allTags)
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const foundTag = await Tag.findByPk(id)
    return res.json(foundTag)
}))

router.post('/', tagValidations.validateCreate, asyncHandler(async (req, res) => {
    const newTagData = req.body
    const newTag = await Tag.create(newTagData)
    return res.json(newTag)
}))

router.put('/:id(\\d+)', tagValidations.validateUpdate, asyncHandler(async (req, res) => {
    const id = req.params.id
    const oldTagData = await Tag.findByPk(id)
    let updatedTag = await oldTagData.update(req.body)
    return res.json(updatedTag)
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const deletedTag = await Tag.findByPk(id)
    deletedTag.destroy();
    return res.json(deletedTag)
}))

module.exports = router
