import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeruProvincesService } from './peru-provinces.service';
import { CreatePeruProvinceDto } from './dto/create-peru-province.dto';
import { UpdatePeruProvinceDto } from './dto/update-peru-province.dto';

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
