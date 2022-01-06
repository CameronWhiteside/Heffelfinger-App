'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  Tag.associate = function (models) {

    const tagsEventsMapping = {through: 'EventTags', otherKey: 'eventId', foreignKey: 'tagId'}
    Tag.belongsToMany(models.Event, tagsEventsMapping)

  };
  return Tag;
};
