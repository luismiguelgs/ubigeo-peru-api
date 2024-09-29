import { Test, TestingModule } from '@nestjs/testing';
import { PeruDistrictsController } from './peru-districts.controller';
import { PeruDistrictsService } from './peru-districts.service';

describe('PeruDistrictsController', () => {
  let controller: PeruDistrictsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeruDistrictsController],
      providers: [PeruDistrictsService],
    }).compile();

    controller = module.get<PeruDistrictsController>(PeruDistrictsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
