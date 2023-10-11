import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';
import { DiscountType } from '../../types/enums';

interface IPromoModel extends Model<InferAttributes<IPromoModel>, InferCreationAttributes<IPromoModel>> {
  id: CreationOptional<number>;
  type: DiscountType;
  value: string;
  code: string;
}

export const PromoModel = sequelizeDB.define<IPromoModel>('promo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: { type: DataTypes.STRING(10), allowNull: false },
  value: { type: DataTypes.DECIMAL(10, 4), allowNull: false },
  code: { type: DataTypes.STRING(30), allowNull: false, unique: true },
});
