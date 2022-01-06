'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    startDateTime: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    endDateTime: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    meetingLink: {
      allowNull: false,
      type: DataTypes.STRING
    },
    hostId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Companies'}
    },
  }, {});
  Event.associate = function(models) {

    const eventTagsMapping = {through: 'EventTags', otherKey: 'tagId', foreignKey: 'eventId'}
    Event.belongsToMany(models.Tag, eventTagsMapping)

    Event.hasMany(models.Ticket, { foreignKey: 'eventId', onDelete: 'CASCADE', hooks: true })

    Event.belongsTo(models.Company, {foreignKey: 'hostId'})

  };
  return Event;
};
