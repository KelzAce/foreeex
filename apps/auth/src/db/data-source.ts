import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../../../../libs/shared/src/entities/user.entity';
// import { Wallet } from 'apps/wallet/src/entities/wallet.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URI,
  entities: [UserEntity],
  migrations: ['dist/apps/auth/db/migrations/*.js'],
};


export const dataSource = new DataSource(dataSourceOptions)
