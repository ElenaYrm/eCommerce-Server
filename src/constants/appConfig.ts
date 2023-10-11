import 'dotenv/config';

interface IAppConfig {
  port: string;
  db: {
    name: string;
    user: string;
    password: string;
    host: string;
    port: string;
  };
}

export const appConfig: IAppConfig = {
  port: process.env.PORT!,
  db: {
    name: process.env.DB_NAME!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    host: process.env.DB_HOST!,
    port: process.env.DB_PORT!,
  },
};
