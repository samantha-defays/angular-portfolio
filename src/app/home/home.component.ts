import { Component  } from '@angular/core';
import { TypeWriterComponent } from '../shared/type-writer/type-writer.component';

@Component({
    selector: 'app-home',
    imports: [TypeWriterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
