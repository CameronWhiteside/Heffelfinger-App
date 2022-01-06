const express = require('express');
const asyncHandler = require('express-async-handler');

const companyRoleValidations = require('../../utils/validations/companyroles')
const db = require('../../db/models');
const { CompanyRole } = db

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const allCompanyRoles = await CompanyRole.findAll()
    res.json(allCompanyRoles)
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const foundCompanyRole = await CompanyRole.findByPk(id)
    return res.json(foundCompanyRole)
}))

router.post('/', companyRoleValidations.validateCreate, asyncHandler(async (req, res) => {
    const newCompanyRoleData = req.body
    const newCompanyRole = await CompanyRole.create(newCompanyRoleData)
    return res.json({newCompanyRole})
}))

router.put('/:id(\\d+)', companyRoleValidations.validateUpdate, asyncHandler(async (req, res) => {
    const id = req.params.id
    const oldCompanyRoleData = await CompanyRole.findByPk(id)
    let updatedCompanyRole = await oldCompanyRoleData.update(req.body)
    return res.json(updatedCompanyRole)
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const deletedCompanyRole = await CompanyRole.findByPk(id)
    deletedCompanyRole.destroy();
    return res.json(deletedCompanyRole)
}))

module.exports = router
