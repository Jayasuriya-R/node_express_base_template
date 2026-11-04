'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airplanes', [
  {
    modelNumber: 'AIRBUS-A320',
    capacity: 180,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    modelNumber: 'BOEING-737',
    capacity: 189,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    modelNumber: 'AIRBUS-A350',
    capacity: 300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    modelNumber: 'BOEING-777',
    capacity: 396,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    modelNumber: 'BOEING-787',
    capacity: 290,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
