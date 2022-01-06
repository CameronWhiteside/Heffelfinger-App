'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyRole = sequelize.define('CompanyRole', {
    role: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true
    },
  }, {});
  
  CompanyRole.associate = function(models) {

    const companyRolesCompanyMapping = { through: 'Employees', otherKey: 'companyId', foreignKey: 'companyRoleId' }
    const companyRolesUserMapping = { through: 'Employees', otherKey: 'userId', foreignKey: 'companyRoleId' }

    CompanyRole.belongsToMany(models.Company, companyRolesCompanyMapping)
    CompanyRole.belongsToMany(models.User,companyRolesUserMapping)

  };
  return CompanyRole;
};
