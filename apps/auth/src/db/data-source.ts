import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  url: process.env.DB_URI,


  // url: process.env.POSTGRES_URI,
  entities: [UserEntity],
  migrations: ['dist/apps/auth/db/migrations/*.js']
};


export const dataSource = new DataSource(dataSourceOptions)


// export const databaseOptions: DataSourceOptions = {
//   type: 'postgres',
//   host: isTest ? process.env.DATABASE_HOST_TEST : process.env.DATABASE_HOST,
//   port: isTest
//     ? Number(process.env.DATABASE_PORT_TEST)
//     : Number(process.env.DATABASE_PORT),
//   username: isTest
//     ? process.env.DATABASE_USERNAME_TEST
//     : process.env.DATABASE_USERNAME,
//   password: isTest
//     ? process.env.DATABASE_PASSWORD_TEST
//     : process.env.DATABASE_PASSWORD,