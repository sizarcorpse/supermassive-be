"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async reactionInc(params, data, { files } = {}) {
    const entry = await strapi
      .query("post")
      .update(
        { _id: params.id },
        { $inc: { [params.reaction]: +1, reactions: +1 } }
      );

    return `Post ${params.reaction}`;
  },
};
