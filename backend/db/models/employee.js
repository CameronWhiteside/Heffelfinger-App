'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    companyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Companies'}
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    },
    companyRoleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'CompanyRoles'}

    },
  }, {});

  Employee.associate = function(models) {
  };
  
  return Employee;
};
