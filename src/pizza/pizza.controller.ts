import { Controller, Get, Param } from '@nestjs/common'
import { PizzaService } from './pizza.service'

@Controller('pizzas')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  findAll() {
    return this.pizzaService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzaService.findOne(+id)
  }
}
