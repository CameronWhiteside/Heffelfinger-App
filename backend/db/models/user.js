'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    location: {
      type: DataTypes.STRING(256),
    },
    biography: {
      type: DataTypes.STRING(1500),
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function (models) {

    const userRolesMapping = {through: 'UserRoles', otherKey: 'roleId', foreignKey: 'userId'}
    const userCompanyRolesMapping = { through: 'Employees', otherKey: 'companyRoleId', foreignKey: 'userId' }
    const userCompaniesMapping = {through: 'Employees', otherKey: 'companyId', foreignKey: 'userId'}

    User.belongsToMany(models.SiteRole, userRolesMapping)
    User.belongsToMany(models.CompanyRole, userCompanyRolesMapping)
    User.belongsToMany(models.Company, userCompaniesMapping)

    User.hasMany(models.Ticket, {foreignKey: 'userId', onDelete: 'CASCADE', hooks:true})
    User.hasMany(models.ExternalLink, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true })

  };

  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, firstName, lastName, email } = this; // context will be the User instance
    return { id, firstName, lastName, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };


  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };


  User.login = async function ({ email, password }) {
    console.log(`made it to the user model here`)
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          email
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };


  User.signup = async function ({ firstName, lastName, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};
