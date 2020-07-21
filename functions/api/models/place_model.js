const database = require("../database");

class PlaceModel {
  constructor() {
    if (this.instance) return this.instance;
    PlaceModel.instance = this;
  }

  get() {
    return database.getList("places");
  }
  getById(id) {
    return database.get("places", id);
  }

  create(place) {
    return database.create("places", place);
  }

  delete(id) {
    return database.delete("places", id);
  }

  update(id, place) {
    return database.set("places", id, place);
  }
}

module.exports = new PlaceModel();
