const express = require('express');
const asyncHandler = require('express-async-handler');

// const companyValidations = require('../../utils/validations/companies')
const db = require('../../db/models');
const { Employee } = db

const router = express.Router();

// router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
//     const id = req.params.id
//     const foundCompany = await Company.findByPk(id, {
//         include: [
//             Event, {
//                 model: User,
//                 include: {
//                     model: CompanyRole
//                 }
//             }
//         ]
//     })
//     return res.json(foundCompany)
// }))


// router.get('/', asyncHandler(async (req, res) => {
//     const allCompanies = await Company.findAll({
//         include: [
//             Event, {
//                 model: User,
//                 include: {
//                     model: CompanyRole
//                 }
//             }
//         ]
//     })
//     return res.json(allCompanies)
// }))


router.post('/', asyncHandler(async (req, res) => {
    console.log('we made it!')
    const { companyId, userId, companyRoleId } = req.body
    const newEmployee = await Employee.create({companyId, userId, companyRoleId})
    return res.json({newEmployee})
}))

// router.put('/:id(\\d+)', companyValidations.validateUpdate, asyncHandler(async (req, res) => {
//     const id = req.params.id
//     const oldCompanyData = await Company.findByPk(id)
//     let updatedCompany = await oldCompanyData.update(req.body)
//     return res.json(updatedCompany)
// }))

// router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
//     const id = req.params.id
//     const deletedCompany = await Company.findByPk(id)
//     deletedCompany.destroy();
//     return res.json(deletedCompany)
// }))





module.exports = router
