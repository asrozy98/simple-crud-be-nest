import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CustomerRepository } from './customer-repository/customer-repository';
import { CustomerController } from './customer/customer.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CustomerController],
  providers: [CustomerRepository],
})
export class CustomerModule { }
