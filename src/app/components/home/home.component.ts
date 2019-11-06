import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  loading: boolean;

  errorMessage: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;

    this.spotify.getNewReleases()
    .subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (error: any) => this.errorMessage = error.error.error.message
    );
  }

  ngOnInit() {
  }

}
