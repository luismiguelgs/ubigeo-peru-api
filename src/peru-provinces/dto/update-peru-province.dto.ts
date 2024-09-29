import { PartialType } from '@nestjs/mapped-types';
import { CreatePeruProvinceDto } from './create-peru-province.dto';

export class UpdatePeruProvinceDto extends PartialType(CreatePeruProvinceDto) {}
