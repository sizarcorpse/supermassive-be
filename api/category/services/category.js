"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(params, populate) {
    const item = await strapi.query("category").findOne(params, [
      {
        path: "posts",
        populate: { path: "categories uploader" },
      },
    ]);

    return item;
  },
};
