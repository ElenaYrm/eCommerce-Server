import { DataTypes } from 'sequelize';
import { sequelizeDB } from '../index';
import { IModelWithOnlyId } from '../../types/interfaces';

export const OrderPromoModel = sequelizeDB.define<IModelWithOnlyId>('order_promo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
