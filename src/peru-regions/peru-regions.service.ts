import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PeruRegionsService 
{
    constructor(private prisma:PrismaService){}

    findAll() {
        return this.prisma.peruRegion.findMany();
    }

    async findOne(id: number) {
        const item =  await this.prisma.peruRegion.findUnique({
			where:{
				id:id
			}
		})

		if(!item){
			throw new NotFoundException(`Region with id ${id} not found`)
		}
		return item
    }

	async findProvinces(regionId:number){
		const items = await this.prisma.peruRegion.findUnique({
			where:{
				id: regionId,
			},
			include:{
				provinces: true
			}
		})
		if(!items){
			throw new NotFoundException(`Region with id ${regionId} not found provinces`)
		}
		return items
	}
}
