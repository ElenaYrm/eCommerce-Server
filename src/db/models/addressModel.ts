import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

interface IAddressModel extends Model<InferAttributes<IAddressModel>, InferCreationAttributes<IAddressModel>> {
  id: CreationOptional<number>;
  country: string;
  city: string;
  street: string;
  postal_code: string;
  is_shipping: boolean;
  is_default_shipping: boolean;
  is_billing: boolean;
  is_default_billing: boolean;
}

export const AddressModel = sequelizeDB.define<IAddressModel>('address', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  country: { type: DataTypes.STRING(20), allowNull: false },
  city: { type: DataTypes.STRING(20), allowNull: false },
  street: { type: DataTypes.STRING(20), allowNull: false },
  postal_code: { type: DataTypes.STRING(10), allowNull: false },
  is_shipping: { type: DataTypes.BOOLEAN },
  is_default_shipping: { type: DataTypes.BOOLEAN },
  is_billing: { type: DataTypes.BOOLEAN },
  is_default_billing: { type: DataTypes.BOOLEAN },
});
