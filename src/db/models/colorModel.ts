import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

interface IColorModel extends Model<InferAttributes<IColorModel>, InferCreationAttributes<IColorModel>> {
  id: CreationOptional<number>;
  name: string;
  color: string;
}

export const ColorModel = sequelizeDB.define<IColorModel>('color', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(20), allowNull: false, unique: true },
  color: { type: DataTypes.INTEGER, allowNull: false, unique: true },
});
