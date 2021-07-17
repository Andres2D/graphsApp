import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor(private _http: HttpClient) { }

  GetUserDataMedia(){
    return this._http.get('http://localhost:3000/grafica');
  }

  GetUserDataMediaV2(){
    return this.GetUserDataMedia()
      .pipe(
        delay(1500),
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          return {labels, values};
        })
      )
  }
}
