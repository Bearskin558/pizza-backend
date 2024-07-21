import { Module } from '@nestjs/common'
import { ToppingsService } from './toppings.service'
import { ToppingController } from './toppings.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [ToppingController],
  providers: [ToppingsService, PrismaService],
})
export class ToppingsModule {}
