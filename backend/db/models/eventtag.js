'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventTag = sequelize.define('EventTag', {
    eventId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Events'}
    },
    tagId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Tags'}
    },
  }, {});
  EventTag.associate = function(models) {
    // associations can be defined here
  };
  return EventTag;
};
