import { Component } from '@angular/core';
import { IWeatherForecast } from '../models/IWeatherForecast';
import { WeatherForecastsService } from '../services/weather-forecasts.service';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

    /** List of forecasts */
    public forecasts: IWeatherForecast[];

    constructor(weatherForecastsService: WeatherForecastsService) {
        if (weatherForecastsService.forecasts && weatherForecastsService.forecasts.length > 0) {
            this.forecasts = weatherForecastsService.forecasts;
        } else {
            weatherForecastsService.GetWeatherForecasts().then(
                (result) => {
                    this.forecasts = result;
                }
                , (error) => {
                    console.error(error);
                });
        }
    }
}
