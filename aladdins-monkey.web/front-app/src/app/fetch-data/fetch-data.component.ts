import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IWeatherForecast } from '../models/IWeatherForecast';
import { WeatherForecastsService } from '../services/weather-forecasts.service';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

    /** Base subscription */
    private baseObservable: Subscription;

    /** List of forecasts */
    public forecasts: IWeatherForecast[];

    constructor(weatherForecastsService: WeatherForecastsService) {
        if (weatherForecastsService.forecasts && weatherForecastsService.forecasts.length === 0) {
            this.baseObservable = weatherForecastsService.GetWeatherForecasts().subscribe(
                (result) => {
                    this.forecasts = result;
                }
                , (error) => {
                    console.error(error);
                }
                , () => {
                    console.log('Complete');
                    this.baseObservable.unsubscribe();
                });
        } else {
            this.forecasts = weatherForecastsService.forecasts;
        }
    }
}
