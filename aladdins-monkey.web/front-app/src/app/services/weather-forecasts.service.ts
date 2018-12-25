import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IWeatherForecast } from '../models/IWeatherForecast';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WeatherForecastsService {

    /** List of forecasts from api */
    public forecasts: IWeatherForecast[];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.forecasts = [];
    }

    /** Get observable from api */
    public GetWeatherForecasts(): Observable<IWeatherForecast[]> {

        return this.http.get<IWeatherForecast[]>(this.baseUrl + 'api/SampleData/WeatherForecasts', {
            headers: new HttpHeaders({'Content-Type': 'application/json' })
        }).pipe(
            map((item) => {
                this.forecasts = item;
                return item;
            })
        );
    }
}
