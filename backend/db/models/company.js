'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tagline: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    logo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  Company.associate = function (models) {

    const companyCompanyRoleMapping = { through: 'Employees', otherKey: 'companyRoleId', foreignKey: 'companyId' }
    const companyUserMapping = { through: 'Employees', otherKey: 'userId', foreignKey: 'companyId' }

    Company.belongsToMany(models.CompanyRole, companyCompanyRoleMapping)
    Company.belongsToMany(models.User, companyUserMapping)
    Company.hasMany(models.Event, {foreignKey: 'hostId', onDelete: 'CASCADE', hooks:true})

  };
  return Company;
};
