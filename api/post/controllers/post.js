"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async reaction(ctx) {
    let entities;

    entities = await strapi.services.post.reactionInc(ctx.params);

    return entities;
  },
};
