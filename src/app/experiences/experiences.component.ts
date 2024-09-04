import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  // Les liens qui sont odd en CSS ne marchent plus, correction ici pour corriger le problème et faire fonctionner le lien 
  public onClickGoToLink(url: string): void {
    window.open(url, "_blank");
  }

}
