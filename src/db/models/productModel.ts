import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';
import { Size } from '../../types/enums';

interface IProductModel extends Model<InferAttributes<IProductModel>, InferCreationAttributes<IProductModel>> {
  id: CreationOptional<number>;
  title: string;
  description: string;
  dimensions: string;
  medium: string;
  year: number;
  size: Size;
  price: string;
}

export const ProductModel = sequelizeDB.define<IProductModel>('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(100), allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  dimensions: { type: DataTypes.STRING(20), allowNull: false },
  medium: { type: DataTypes.STRING(50), allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  size: { type: DataTypes.STRING(6), allowNull: false },
  price: { type: DataTypes.DECIMAL(18, 4), allowNull: false },
});
