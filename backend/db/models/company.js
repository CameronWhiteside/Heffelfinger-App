'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    headline: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(1500),
    },
    twitterUrl: {
      type: DataTypes.STRING,
    },
    facebookUrl: {
      type: DataTypes.STRING,
    },
    instagramUrl: {
      type: DataTypes.STRING,
    },
    linkedinUrl: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  }, {});
  Company.associate = function (models) {

    const companyCompanyRoleMapping = { through: 'Employees', otherKey: 'companyRoleId', foreignKey: 'companyId' }
    const companyUserMapping = { through: 'Employees', otherKey: 'userId', foreignKey: 'companyId' }

    Company.belongsToMany(models.CompanyRole, companyCompanyRoleMapping)
    Company.belongsToMany(models.User, companyUserMapping)
    Company.hasMany(models.Event, { foreignKey: 'hostId', onDelete: 'cascade', hooks: true })
    Company.hasMany(models.ExternalLink, { foreignKey: 'companyId', onDelete: 'cascade', hooks: true })

  };
  return Company;
};
