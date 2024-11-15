import { Component, Input } from '@angular/core';
import { Service } from 'src/app/shared/models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {
  @Input() services: Service[] = [];

  constructor() { }
}
