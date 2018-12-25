import { TestBed } from '@angular/core/testing';

import { WeatherForecastsService } from './weather-forecasts.service';

describe('WeatherForecastsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherForecastsService = TestBed.get(WeatherForecastsService);
    expect(service).toBeTruthy();
  });
});
