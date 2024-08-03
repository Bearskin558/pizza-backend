import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const pizzas = await this.prisma.ingredient.findMany()
    console.log('get all ingredients')
    return pizzas
  }

  async findOne(id: string) {
    console.log(id)
    return await this.prisma.ingredient.findMany({
      select: {
        id: true,
        name: true,
        price: true,
      },
    })
  }
}
