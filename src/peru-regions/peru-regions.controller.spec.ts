import { Test, TestingModule } from '@nestjs/testing';
import { PeruRegionsController } from './peru-regions.controller';
import { PeruRegionsService } from './peru-regions.service';

describe('PeruRegionsController', () => {
  let controller: PeruRegionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeruRegionsController],
      providers: [PeruRegionsService],
    }).compile();

    controller = module.get<PeruRegionsController>(PeruRegionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
