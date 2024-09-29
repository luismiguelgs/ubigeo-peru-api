import { Module } from '@nestjs/common';
import { PeruDistrictsService } from './peru-districts.service';
import { PeruDistrictsController } from './peru-districts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PeruDistrictsController],
  providers: [PeruDistrictsService, PrismaService],
})
export class PeruDistrictsModule {}
