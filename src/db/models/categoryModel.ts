import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

interface ICategoryModel extends Model<InferAttributes<ICategoryModel>, InferCreationAttributes<ICategoryModel>> {
  id: CreationOptional<number>;
  name: string;
}

export const CategoryModel = sequelizeDB.define<ICategoryModel>('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(15), allowNull: false, unique: true },
});
