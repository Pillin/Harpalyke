const findOneOrCreate = model => async condition => {
  const data = await model.findOne(condition).exec();
  if (data) {
    return data;
  }
  const created = await model.create(condition);
  return created;
};

module.exports = {
  findOneOrCreate
};
