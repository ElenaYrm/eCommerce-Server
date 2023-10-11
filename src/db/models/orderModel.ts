import { DataTypes } from 'sequelize';
import { sequelizeDB } from '../index';
import { IModelWithOnlyId } from '../../types/interfaces';

export const OrderModel = sequelizeDB.define<IModelWithOnlyId>('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
