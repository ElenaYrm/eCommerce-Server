import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelizeDB } from '../index';

interface IArtistModel extends Model<InferAttributes<IArtistModel>, InferCreationAttributes<IArtistModel>> {
  id: CreationOptional<number>;
  name: string;
}

export const ArtistModel = sequelizeDB.define<IArtistModel>('artist', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(50), allowNull: false, unique: true },
});
