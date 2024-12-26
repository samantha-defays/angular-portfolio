import { Component } from '@angular/core';
import { TypeWriterComponent } from '../shared/type-writer/type-writer.component';

@Component({
  standalone: true,
  selector: 'app-competences',
  imports: [TypeWriterComponent],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent {

}
