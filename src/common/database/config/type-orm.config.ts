import { DataSource, DataSourceOptions } from 'typeorm';
import { dbConnectionOptions } from 'src/common/database/config/db.config';

const dataSourceOptions = {
  ...dbConnectionOptions,
  entities: [process.cwd() + '/src/**/*.entity.ts'],
  migrations: [process.cwd() + '/src/common/database/migrations/*.ts'],
  synchronize: false,
} as DataSourceOptions;

export const connectionSource = new DataSource(dataSourceOptions);
