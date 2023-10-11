import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

interface IImageModel extends Model<InferAttributes<IImageModel>, InferCreationAttributes<IImageModel>> {
  id: CreationOptional<number>;
  src: string;
}

export const ImageModel = sequelizeDB.define<IImageModel>('product_image', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  src: { type: DataTypes.STRING, allowNull: false, unique: true },
});
