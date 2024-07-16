import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PizzaService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const pizzas = await this.prisma.pizza.findMany()
    console.log('get all pizzas')
    return pizzas
  }

  findOne(id: number) {
    return `This action returns a #${id} pizza`
  }
}
