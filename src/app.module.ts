import { Module } from '@nestjs/common'
import { PizzaModule } from './pizza/pizza.module'
import { IngredientsModule } from './ingredients/ingredients.module'

@Module({
  imports: [PizzaModule, IngredientsModule],
})
export class AppModule {}
