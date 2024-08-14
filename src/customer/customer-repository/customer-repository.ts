import { Injectable } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { CustomerDto } from 'src/interfaces/customer';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class CustomerRepository {
    constructor(private prismaService: PrismaService) { }

    async getAll(): Promise<Customer[]> {
        return this.prismaService.customer.findMany()
    }

    async create(customerDto: CustomerDto): Promise<Customer> {
        return this.prismaService.customer.create({
            data: {
                nama: customerDto.nama,
                alamat: customerDto.alamat,
                kota: customerDto.kota
            },
        }
        )
    }

    async getByNo(no: number): Promise<Customer> {
        return this.prismaService.customer.findFirst({
            where: {
                no
            }
        })
    }

    async update(no: number, customerDto: CustomerDto): Promise<Customer> {
        return this.prismaService.customer.update({
            where: {
                no
            },
            data: {
                nama: customerDto.nama,
                alamat: customerDto.alamat,
                kota: customerDto.kota
            },
        })
    }

    async delete(no: number): Promise<any> {
        return this.prismaService.customer.delete({
            where: {
                no
            }
        })
    }
}
