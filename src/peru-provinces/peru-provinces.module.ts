import { Module } from '@nestjs/common';
import { PeruProvincesService } from './peru-provinces.service';
import { PeruProvincesController } from './peru-provinces.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PeruProvincesController],
  providers: [PeruProvincesService, PrismaService],
})
export class PeruProvincesModule {}
