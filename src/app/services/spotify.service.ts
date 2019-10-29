import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases = () => {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBRTGKbkK4UMTmqig-c-juDnd_cAPwuD34FVRYZyij8pyrq4oZvxJ2eWaMO4TLDH_Dgx0jhY2CGMXWF3oA'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      });
  }
}
