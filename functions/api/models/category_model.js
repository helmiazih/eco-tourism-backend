const database = require("../database");

class CategoryModel {
  constructor() {
    if (this.instance) return this.instance;
    CategoryModel.instance = this;
  }

  get() {
    return database.getList("categories");
  }
  getById(id) {
    return database.get("categories", id);
  }

  create(category) {
    return database.create("categories", category);
  }

  delete(id) {
    return database.delete("categories", id);
  }

  update(id, category) {
    return database.set("categories", id, category);
  }
}

module.exports = new CategoryModel();
