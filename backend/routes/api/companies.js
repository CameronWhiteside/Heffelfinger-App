const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const companyValidations = require('../../utils/validations/companies')
const db = require('../../db/models');
const { Company } = db

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const allCompanies = await Company.findAll()
    res.json(allCompanies)
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const foundCompany = await Company.findByPk(id)
    return res.json(foundCompany)
}))

router.post('/', companyValidations.validateCreate, asyncHandler(async (req, res) => {
    const newCompanyData = req.body
    const newCompany = await Company.create(newCompanyData)
    return res.json({newCompany})
}))

router.put('/:id(\\d+)', companyValidations.validateUpdate, asyncHandler(async (req, res) => {
    const id = req.params.id
    const oldCompanyData = await Company.findByPk(id)
    let updatedCompany = await oldCompanyData.update(req.body)
    return res.json(updatedCompany)
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const deletedCompany = await Company.findByPk(id)
    deletedCompany.destroy();
    return res.json(deletedCompany)
}))

module.exports = router
