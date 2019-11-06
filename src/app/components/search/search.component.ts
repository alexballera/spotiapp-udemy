import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  loading: boolean;

  errorMessage: string;

  constructor(private spotify: SpotifyService) {}
  buscar = (termino: string) => {
    this.loading = true;
    this.spotify.getArtista(termino)
    .subscribe(
      (data: any) => {
        this.artistas = data;
        this.loading = false;
        console.log(data);
      },
      (error: any) => this.errorMessage = error.error.error.message
    );
  }
}
