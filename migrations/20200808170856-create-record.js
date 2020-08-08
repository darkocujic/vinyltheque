'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('records', {
    id: {
      type: 'int',
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    artist_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'artist_id_fk',
        table: 'artists',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },
    album: {
      type: 'string',
      notNull: true
    },
    img: {
      type: 'string',
      notNull: true
    },
    year: {
      type: 'int',
      notNull: true
    },
    tags: {
      type: 'string',
      notNull: true
    },
    created_at: {
      type: 'datetime',
      defaultValue: new String('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: 'datetime',
      defaultValue: new String('CURRENT_TIMESTAMP')
    }
  });
};

exports.down = function(db) {
  return db.dropTable('records');
};

exports._meta = {
  "version": 1
};
