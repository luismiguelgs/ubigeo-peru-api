import { Controller, Get, Param, } from '@nestjs/common';
import { PeruRegionsService } from './peru-regions.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('regions')
@Controller('peru-regions')
export class PeruRegionsController {
    constructor(private readonly peruRegionsService: PeruRegionsService) {}

    @Get()
    findAll() {
        return this.peruRegionsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.peruRegionsService.findOne(+id);
    }
    @Get(':id/provinces')
    findProvinces(@Param('id') regionId : number){
        return this.peruRegionsService.findProvinces(+regionId)
    }
}
