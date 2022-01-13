'use strict';
module.exports = (sequelize, DataTypes) => {
  const ExternalLink = sequelize.define('ExternalLink', {
      isPrimary: {
        type: DataTypes.BOOLEAN,
      },
      primaryLabel: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING(500),
      },
      eventId: {
        type: DataTypes.INTEGER,
        references: {model: 'Users'}
      },
      companyId: {
        type: DataTypes.INTEGER,
        references: {model: 'Companies'}
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {model: 'Events'}
      },
  }, {});
  ExternalLink.associate = function (models) {

    ExternalLink.belongsTo(models.User, {foreignKey: 'userId'})
      ExternalLink.belongsTo(models.Event, { foreignKey: 'eventId' })
      ExternalLink.belongsTo(models.Company, { foreignKey: 'eventId', onDelete: 'CASCADE', hooks: true })


  };
  return ExternalLink;
};
