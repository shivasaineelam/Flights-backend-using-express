const logger = require("../config/logger-config");

class crudRepository {
  constructor(model) {
    this.model = model;
  }
  async createairplane(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      logger.error("something went wrong");
      throw error;
    }
  }
  async destroy(data) {
    try {
      const response = await this.model.destroy({ where: { id: data } });
      return response;
    } catch (error) {
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getall() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async update(data, id) {
    try {
      const response = await this.model.update(data, { where: { id: id } });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = crudRepository;
