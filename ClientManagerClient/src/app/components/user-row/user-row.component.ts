import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent {

  @Input() text: any;
  @Input() model: any;
  @Input() prop: any;
  @Input() isUpdated: boolean;

}
