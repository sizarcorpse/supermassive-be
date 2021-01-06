"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(params, populate) {
    const ap = await strapi.query("category").find(params, [
      {
        path: "posts",
        populate: { path: "categories uploader" },
      },
    ]);
    return ap.map((a) => {
      return a.posts;
    });
  },
  async findOne(params, populate) {
    const ap = await strapi.query("category").findOne(params, [
      {
        path: "posts",
        populate: { path: "categories uploader" },
      },
    ]);
    return ap.map((a) => {
      return a.posts;
    });
  },
};
