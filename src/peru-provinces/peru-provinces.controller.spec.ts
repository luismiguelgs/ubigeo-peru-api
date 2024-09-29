import { Test, TestingModule } from '@nestjs/testing';
import { PeruProvincesController } from './peru-provinces.controller';
import { PeruProvincesService } from './peru-provinces.service';

describe('PeruProvincesController', () => {
  let controller: PeruProvincesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeruProvincesController],
      providers: [PeruProvincesService],
    }).compile();

    controller = module.get<PeruProvincesController>(PeruProvincesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
