import { Component } from '@angular/core';
import { TypeWriterComponent } from '../shared/type-writer/type-writer.component';

@Component({
    selector: 'app-experiences',
    imports: [TypeWriterComponent],
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  // Les liens qui sont odd en CSS ne marchent plus, correction ici pour corriger le problème et faire fonctionner le lien 
  public onClickGoToLink(url: string): void {
    window.open(url, "_blank");
  }

}
