'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    artist: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true,
    timestamps: true
  });
  artist.associate = function(models) {
    artist.hasMany(models.record, {
      foreignKey: 'artistId'
    })
  };
  return artist;
};