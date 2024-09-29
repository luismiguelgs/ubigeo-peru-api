import { Controller, Get, Param, } from '@nestjs/common';
import { PeruDistrictsService } from './peru-districts.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('districts')
@Controller('peru-districts')
export class PeruDistrictsController {
  constructor(private readonly peruDistrictsService: PeruDistrictsService) {}

  @Get()
  findAll() {
    return this.peruDistrictsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peruDistrictsService.findOne(+id);
  }

}
