import { Sequelize } from 'sequelize';
import { appConfig } from '../constants';

export const sequelizeDB = new Sequelize(appConfig.db.name, appConfig.db.user, appConfig.db.password, {
  dialect: 'postgres',
  host: appConfig.db.host,
  port: Number(appConfig.db.port),
});
