import { PartialType } from '@nestjs/mapped-types';
import { CreatePeruDistrictDto } from './create-peru-district.dto';

export class UpdatePeruDistrictDto extends PartialType(CreatePeruDistrictDto) {}
