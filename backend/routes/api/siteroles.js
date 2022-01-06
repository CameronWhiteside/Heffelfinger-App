const express = require('express');
const asyncHandler = require('express-async-handler');

const siteRoleValidations = require('../../utils/validations/siteroles')
const db = require('../../db/models');
const { SiteRole } = db

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const allSiteRoles = await SiteRole.findAll()
    res.json(allSiteRoles)
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const foundSiteRole = await SiteRole.findByPk(id)
    return res.json(foundSiteRole)
}))

router.post('/', siteRoleValidations.validateCreate, asyncHandler(async (req, res) => {
    const newSiteRoleData = req.body
    const newSiteRole = await SiteRole.create(newSiteRoleData)
    return res.json({newSiteRole})
}))

router.put('/:id(\\d+)', siteRoleValidations.validateUpdate, asyncHandler(async (req, res) => {
    const id = req.params.id
    const oldSiteRoleData = await SiteRole.findByPk(id)
    let updatedSiteRole = await oldSiteRoleData.update(req.body)
    return res.json(updatedSiteRole)
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const deletedSiteRole = await SiteRole.findByPk(id)
    deletedSiteRole.destroy();
    return res.json(deletedSiteRole)
}))

module.exports = router
