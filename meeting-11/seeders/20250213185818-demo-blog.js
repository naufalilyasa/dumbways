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
    return queryInterface.bulkInsert("Blogs", [
      {
        authorId: 4,
        title: "Title 1",
        image: "/img/coding.jpg",
        content: "Lorem ipsum content 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 5,
        title: "Belajar PostgreSQL",
        image: "/img/blog-img.png",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi tempora id magni reiciendis odit perferendis beatae temporibus quaerat libero velit cupiditate ipsum, ipsa error consequuntur illum pariatur dignissimos, nihil esse numquam dolores eum. Suscipit assumenda, ducimus possimus facere unde, earum dolorum provident quidem enim, consequuntur velit. Reiciendis, obcaecati consequuntur! Maxime!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 6,
        title: "Belajar di Kelas",
        image: "/img/class.webp",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
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
    return queryInterface.bulkDelete("Blogs", null, {});
  },
};
