import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PeruProvincesService 
{
	constructor(private prisma:PrismaService){}

	async findAll() {
		return await this.prisma.peruProvince.findMany()
	}

	async findOne(id: number) {
		const item =  await this.prisma.peruProvince.findUnique({
			where:{
				id:id
			}
		})

		if(!item){
			throw new NotFoundException(`Province with id ${id} not found`)
		}
		return item
	}
	async findDistricts(provinceId:number){
		const items = await this.prisma.peruProvince.findUnique({
			where:{
				id: provinceId,
			},
			include:{
				districts: true
			}
		})
		if(!items){
			throw new NotFoundException(`Province with id ${provinceId} not found provinces`)
		}
		return items
	}
}
