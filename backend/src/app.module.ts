import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { BalancesModule } from './balances/balances.module';
import { RequestsModule } from './requests/requests.module';
import { SyncModule } from './sync/sync.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    EmployeesModule,
    BalancesModule,
    RequestsModule,
    SyncModule,
  ],
})
export class AppModule {}