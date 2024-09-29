import { Test, TestingModule } from '@nestjs/testing';
import { PeruRegionsService } from './peru-regions.service';

describe('PeruRegionsService', () => {
  let service: PeruRegionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeruRegionsService],
    }).compile();

    service = module.get<PeruRegionsService>(PeruRegionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
