import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  standalone: true,
  selector: 'app-profil',
  imports: [BannerComponent],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {

}
