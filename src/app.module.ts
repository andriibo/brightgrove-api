import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConnectionOptions } from './common/database/config/db.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dbConnectionOptions, autoLoadEntities: true }),
    UsersModule,
  ],
})
export class AppModule {}
