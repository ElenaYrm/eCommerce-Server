import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { sequelizeDB } from '../index';

interface IUserModel extends Model<InferAttributes<IUserModel>, InferCreationAttributes<IUserModel>> {
  id: CreationOptional<number>;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  birth_date: Date;
}

export const UserModel = sequelizeDB.define<IUserModel>('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING(30), unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  first_name: { type: DataTypes.STRING(30), allowNull: false },
  last_name: { type: DataTypes.STRING(30), allowNull: false },
  birth_date: { type: DataTypes.DATE, allowNull: false },
});
