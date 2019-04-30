/**
 * Dishes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    updatedAt: false,
    name: { type: 'string', required: true, unique: true },
    price: { type: 'number', required: true },
    photoUrl: { type: 'string', required: true },
    category: {
      type: 'string',
      required: true,
      isIn: ['rice', 'swallow', 'drink', 'soup', 'stew', 'snack']
    }
  }
};
