const crudRepository = require("./crudrepository");
const { airplane } = require("./../models");
class ariplaneRepository extends crudRepository {
  constructor() {
    super(airplane);
  }
}
module.exports = ariplaneRepository;
