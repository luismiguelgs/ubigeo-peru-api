import { Module } from '@nestjs/common';
import { PeruRegionsModule } from './peru-regions/peru-regions.module';
import { PeruProvincesModule } from './peru-provinces/peru-provinces.module';
import { PeruDistrictsModule } from './peru-districts/peru-districts.module';


@Module({
  imports: [
    PeruRegionsModule,
    PeruProvincesModule,
    PeruDistrictsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
