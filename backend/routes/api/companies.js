const express = require('express');
const asyncHandler = require('express-async-handler');

const companyValidations = require('../../utils/validations/companies')
const db = require('../../db/models');
const { Company, Event, User, CompanyRole } = db

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const allCompanies = await Company.findAll()
    return res.json(allCompanies)
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const foundCompany = await Company.findByPk(id, {
        include: [
            Event, {
                model: User,
                include: {
                    model: CompanyRole
                }
            }
        ]
    })
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



router.get('/:companyId(\\d+)/users/:users(\\d+)/companyroles',
    //check for user's specific role at a company
)


router.post('/:companyId(\\d+)/users/:users(\\d+)/companyroles/:companyrolesId(\\+)',
    //create new company role for a user
)

router.delete('/:companyId(\\d+)/users/:users(\\d+)/companyroles',
    //remove a user from all company roles
)


router.post('/:companyId(\\d+)/users/:users(\\d+)/companyroles/:companyrolesId(\\+)',
    //delete a single company role from a user
)



module.exports = router
