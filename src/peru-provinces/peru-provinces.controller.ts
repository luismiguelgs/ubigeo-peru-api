import { Controller, Get, Param } from '@nestjs/common';
import { PeruProvincesService } from './peru-provinces.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('provinces')
@Controller('peru-provinces')
export class PeruProvincesController {
  constructor(private readonly peruProvincesService: PeruProvincesService) {}

  @Get()
  findAll() {
    return this.peruProvincesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peruProvincesService.findOne(+id);
  }

  @Get(':id/districts')
  findProvinces(@Param('id') provinceId : number){
      return this.peruProvincesService.findDistricts(+provinceId)
  }

}
