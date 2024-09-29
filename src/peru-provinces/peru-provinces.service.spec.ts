import { Test, TestingModule } from '@nestjs/testing';
import { PeruProvincesService } from './peru-provinces.service';

describe('PeruProvincesService', () => {
  let service: PeruProvincesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeruProvincesService],
    }).compile();

    service = module.get<PeruProvincesService>(PeruProvincesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
