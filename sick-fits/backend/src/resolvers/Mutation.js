const Mutations = {
  async createItem(parent, args, context, info) {
    // TODO: Check to see if they are logged in

    const item = await context.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  }
};

module.exports = Mutations;
