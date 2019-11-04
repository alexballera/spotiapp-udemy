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
      Authorization: 'Bearer BQAuhvJXyMn7waPhi_bktuNH7AaxboN4PDAfbJ1-nnX3n9tW-t3yDe6-E4J-JwC4TuJaukiAka_f-SfeSLI'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista = (termino: string) => {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAUd34BRKd--YMg0iLcxmrYXFXaxay_axxFM6wHntfxlnZvF96BCzy_Ewb7IXAvZ00WrAlQGE3PxfwHQrc'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers});
  }
}
