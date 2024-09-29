import { Module } from '@nestjs/common';
import { PeruRegionsService } from './peru-regions.service';
import { PeruRegionsController } from './peru-regions.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PeruRegionsController],
  providers: [PeruRegionsService, PrismaService],
})
export class PeruRegionsModule {}
