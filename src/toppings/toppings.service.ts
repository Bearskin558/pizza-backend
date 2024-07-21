import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ToppingsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const toppings = await this.prisma.toppings.findMany()
    console.log('get all toppings')
    return toppings
  }

  findOne(id: number) {
    return `This action returns a #${id} topping`
  }
}
