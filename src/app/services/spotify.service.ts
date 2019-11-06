import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Done');
  }

  getQuery = (query: string) => {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCXMtD-kEtv5Z4U6w_5OBywgf9Yomo8UXX5885Fyj7pksBlX6Q3FwAul-_MOqkbV0vB6zawxAWfi-0dRj4'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases = () => {
    return this.getQuery('browse/new-releases?limit=20')
        .pipe(map((data: any) => data.albums.items
    ));
  }

  getArtista = (termino: string) => {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
        .pipe(map((data: any) => data.artists.items
   ));
  }
}
