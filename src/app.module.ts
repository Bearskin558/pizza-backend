import { Module } from '@nestjs/common'
import { PizzaModule } from './pizza/pizza.module'
import { ToppingsModule } from './toppings/toppings.module'

@Module({
  imports: [PizzaModule, ToppingsModule],
})
export class AppModule {}
