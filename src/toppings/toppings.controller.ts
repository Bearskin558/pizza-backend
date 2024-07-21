import { Controller, Get, Param } from '@nestjs/common'
import { ToppingsService } from './toppings.service'

@Controller('toppings')
export class ToppingController {
  constructor(private readonly toppingsService: ToppingsService) {}

  @Get()
  findAll() {
    return this.toppingsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toppingsService.findOne(+id)
  }
}
