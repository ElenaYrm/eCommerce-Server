import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

interface ISubcategoryModel
  extends Model<InferAttributes<ISubcategoryModel>, InferCreationAttributes<ISubcategoryModel>> {
  id: CreationOptional<number>;
  name: string;
}

export const SubcategoryModel = sequelizeDB.define<ISubcategoryModel>('subcategory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(15), allowNull: false, unique: true },
});
