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
      Authorization: 'Bearer BQDQMYBIcFk6WYvFdwLQ4IE-3V0BJXcy13R97PASZQ32X1xamH-BR_t2gV4lVPz8QQLh1PGHARgacnJEZJ8'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases = () => {
    return this.getQuery('browse/new-releases?limit=20')
        .pipe(map((data: any) => data.albums.items
    ));
  }

  getArtistas = (termino: string) => {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
        .pipe(map((data: any) => data.artists.items
   ));
  }

  getArtista = (id: string) => {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks = (id: string) => {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
        .pipe(map((data: any) => data.tracks
   ));
  }


}
