import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../../../../libs/shared/src/entities/user.entity';
// import { Wallet } from 'apps/wallet/src/entities/wallet.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URI,
  entities: [UserEntity],
  migrations: ['dist/apps/auth/db/migrations/*.js']

  //try local
  // host: process.env.DATABASE_HOST,
  // port: Number(process.env.DATABASE_PORT),
  // username: process.env.DATABASE_USER,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE_NAME,
  // url: process.env.DB_URI,
};


export const dataSource = new DataSource(dataSourceOptions)
