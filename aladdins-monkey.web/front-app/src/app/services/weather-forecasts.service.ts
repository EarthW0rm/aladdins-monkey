import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IWeatherForecast } from '../models/IWeatherForecast';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WeatherForecastsService {

    /** List of forecasts from api */
    public forecasts: IWeatherForecast[];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, @Inject('FORECASTS') result: IWeatherForecast[]) {
        this.forecasts = [];
        if (result && result.length > 0) {
            this.forecasts = result;
        }
    }

    /** Get observable from api */
    public GetWeatherForecasts(): Promise<IWeatherForecast[]> {

        return this.http.get<IWeatherForecast[]>(this.baseUrl + 'api/SampleData/WeatherForecasts', {
            headers: new HttpHeaders({'Content-Type': 'application/json' })
        }).pipe(
            map((item) => {
                this.forecasts = item;
                return item;
            })
        ).toPromise();
    }
}
