import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { CustomerDto } from 'src/interfaces/customer';
import { CustomerRepository } from '../customer-repository/customer-repository';


@Controller('api')
export class CustomerController {
    constructor(private customerRepository: CustomerRepository) { }

    @Get('customers')
    async getAll(): Promise<Customer[]> {
        return this.customerRepository.getAll();
    }

    @Post('customer')
    async create(@Body() customerDto: CustomerDto): Promise<Customer> {
        return this.customerRepository.create(customerDto);
    }

    @Get('customer/:no')
    async getByNo(@Param('no') no: string): Promise<Customer> {
        return this.customerRepository.getByNo(Number(no));
    }

    @Put('customer/:no')
    async update(@Param('no') no: string, @Body() customerDto: CustomerDto): Promise<Customer> {
        return this.customerRepository.update(Number(no), customerDto);
    }

    @Delete('customer/:no')
    async delete(@Param('no') no: string): Promise<Customer> {
        return this.customerRepository.delete(Number(no));
    }
}
