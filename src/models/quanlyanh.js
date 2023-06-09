"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class quanlyanh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      quanlyanh.hasOne(models.khachchothue, { foreignKey: 'MaAnhKhach' });
      quanlyanh.hasOne(models.khachthue, { foreignKey: 'MaAnhKhach' });
      quanlyanh.hasOne(models.khachmua, { foreignKey: 'MaAnhKhach' });
      quanlyanh.hasOne(models.khachban, { foreignKey: 'MaAnhKhach' });
      quanlyanh.hasMany(models.folderanh, {foreignKey: 'MaAnhKhach'});
    }
  }
  quanlyanh.init(
    {
      MaAnhKhach: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true

      },
    },
    {
      sequelize,
      modelName: "quanlyanh",
      timestamps: false,
      tableName: "quanlyanh",
    }
  );
  return quanlyanh;
};

