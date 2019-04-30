/**
 * Categories.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    updatedAt: false,
    name: { type: 'string', required: true },
    path: { type: 'string', required: true },
    imageUrl: { type: 'string', required: true }
  }
};
