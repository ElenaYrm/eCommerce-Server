import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';
import { DiscountType } from '../../types/enums';

interface IDiscountModel extends Model<InferAttributes<IDiscountModel>, InferCreationAttributes<IDiscountModel>> {
  id: CreationOptional<number>;
  type: DiscountType;
  name: string;
  value: string;
}

export const DiscountModel = sequelizeDB.define<IDiscountModel>('discount', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING(10), allowNull: false },
  name: { type: DataTypes.STRING(30), allowNull: false, unique: true },
  value: { type: DataTypes.DECIMAL(10, 4), allowNull: false },
});
