import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePeruDistrictDto } from './dto/create-peru-district.dto';
import { UpdatePeruDistrictDto } from './dto/update-peru-district.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PeruDistrictsService 
{
	constructor(private prisma:PrismaService){}
    
	async findAll() {
		return await this.prisma.peruDistrict.findMany();
	}

	async findOne(id: number) {
		const item =  await this.prisma.peruDistrict.findUnique({
			where:{
				id:id
			}
		})

		if(!item){
			throw new NotFoundException(`District with id ${id} not found`)
		}
		return item
	}

}
