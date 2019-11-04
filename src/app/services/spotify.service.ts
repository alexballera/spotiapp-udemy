import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases = () => {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDkUY30SAE0y0YngDwxukqDr-pnAv1y_ShQlf8F0u11Ah22SF9KDEmYG9QSptn4HoogcCON7J03GrJ6HLw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .pipe(map((data: any) => data.albums.items
    ));
  }

  getArtista = (termino: string) => {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDkUY30SAE0y0YngDwxukqDr-pnAv1y_ShQlf8F0u11Ah22SF9KDEmYG9QSptn4HoogcCON7J03GrJ6HLw'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
    .pipe(map((data: any) => data.artists.items
   ));
  }
}
