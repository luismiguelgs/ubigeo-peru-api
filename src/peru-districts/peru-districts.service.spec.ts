import { Test, TestingModule } from '@nestjs/testing';
import { PeruDistrictsService } from './peru-districts.service';

describe('PeruDistrictsService', () => {
  let service: PeruDistrictsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeruDistrictsService],
    }).compile();

    service = module.get<PeruDistrictsService>(PeruDistrictsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
