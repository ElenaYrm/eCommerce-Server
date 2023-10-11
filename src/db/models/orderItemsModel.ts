import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

interface IOrderItemsModel extends Model<InferAttributes<IOrderItemsModel>, InferCreationAttributes<IOrderItemsModel>> {
  id: CreationOptional<number>;
  amount: number;
}

export const OrderItemsModel = sequelizeDB.define<IOrderItemsModel>('order_items', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  amount: { type: DataTypes.INTEGER, defaultValue: 1, allowNull: false },
});
