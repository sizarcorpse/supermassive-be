"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");
module.exports = {
  async reaction(ctx) {
    let entities;

    entities = await strapi.services.post.reactionInc(ctx.params);

    return entities;
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.post.findOne({ id });
    await strapi.services.post.viewInc({ id });
    return sanitizeEntity(entity, { model: strapi.models.post });
  },
};
