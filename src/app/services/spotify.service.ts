import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Dervice Done');
  }

  getQuery = (query: string) => {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCPopMYHJapbPO4cgiZ-DhO7WQ_gETbUxJ8xwv1gT16O8vNAsB7-RJa50wy9DLKuwwvTrVsx7OhL8YSJNI'
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
