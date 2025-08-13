import { DataSource, DataSourceOptions } from 'typeorm';
import { dbConnectionOptions } from 'src/common/database/config/db.config';

const dataSourceOptions = {
  ...dbConnectionOptions,
  entities: [process.cwd() + '/dist/**/*.entity.js'],
  migrations: [process.cwd() + '/dist/common/database/migrations/*.js'],
  synchronize: false,
} as DataSourceOptions;

export const connectionSource = new DataSource(dataSourceOptions);
