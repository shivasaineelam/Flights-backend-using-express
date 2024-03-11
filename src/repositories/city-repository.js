const crudRepository = require("./crudrepository");
const { cities } = require("./../models");
class cityRepository extends crudRepository {
  constructor() {
    super(cities);
  }
}
module.exports = cityRepository;
