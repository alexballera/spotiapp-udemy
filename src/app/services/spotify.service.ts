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
      Authorization: 'Bearer BQDl0odFFq_-dPdqelsLby9AwAQqw0zk08ub6lAoyak_wYL6Dr2ZJDxOVS9uydVxjv1DGuFkkhVKesHUjwA'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
