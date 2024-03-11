const crudRepository = require("./crudrepository");
const { airport } = require("./../models");
class airportRepository extends crudRepository {
  constructor() {
    super(airport);
  }
}
module.exports = airportRepository;
