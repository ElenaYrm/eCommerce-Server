import { DataTypes } from 'sequelize';
import { sequelizeDB } from '../index';
import { IModelWithOnlyId } from '../../types/interfaces';

export const ProductColorModel = sequelizeDB.define<IModelWithOnlyId>('product_color', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
