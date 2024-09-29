import { PartialType } from '@nestjs/mapped-types';
import { CreatePeruRegionDto } from './create-peru-region.dto';

export class UpdatePeruRegionDto extends PartialType(CreatePeruRegionDto) {}
