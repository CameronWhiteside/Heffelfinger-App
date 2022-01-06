const { Company } = require("./models");

export const getAll = async model => {
    return await model.findAll()
}

export const getOne = async (model, id) => {
    return await model.findbyPk(id)
}
