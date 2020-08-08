'use strict';
module.exports = (sequelize, DataTypes) => {
  const record = sequelize.define('record', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    artistId: DataTypes.INTEGER,
    album: DataTypes.STRING,
    img: DataTypes.STRING,
    year: DataTypes.INTEGER,
    tags: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true,
    timestamps: true
  });
  record.associate = function(models) {
    record.belongsTo(models.artist, {
      foreignKey: 'artistId',
      targetKey: 'id'
    })
  };
  return record;
};