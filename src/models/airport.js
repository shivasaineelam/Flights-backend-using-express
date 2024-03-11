"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cities, {
        foreignKey: "cityId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  airport.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      code: { type: DataTypes.STRING, allowNull: false, unique: false },
      address: { type: DataTypes.STRING, allowNull: false },
      cityId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "airport",
    }
  );
  return airport;
};
