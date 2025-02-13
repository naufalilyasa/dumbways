"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Users", [
      {
        name: "Naufal",
        email: "naufal@example.com",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ilyasa",
        email: "ilyasa@example.com",
        password: "1111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Achmad",
        email: "achmad@example.com",
        password: "asdf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
