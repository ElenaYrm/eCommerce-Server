import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export interface IModelWithOnlyId
  extends Model<InferAttributes<IModelWithOnlyId>, InferCreationAttributes<IModelWithOnlyId>> {
  id: CreationOptional<number>;
}
