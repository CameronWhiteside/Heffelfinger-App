'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteRole = sequelize.define('SiteRole', {
    role: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true
    },
  }, {});
  SiteRole.associate = function (models) {

    const userRolesMapping = { through: 'UserRoles', otherKey: 'userId', foreignKey: 'roleId' }
    SiteRole.belongsToMany(models.User, userRolesMapping)

  };
  return SiteRole;
};
