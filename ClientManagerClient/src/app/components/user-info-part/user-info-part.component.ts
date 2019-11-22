import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-part',
  templateUrl: './user-info-part.component.html',
  styleUrls: ['./user-info-part.component.css']
})
export class UserInfoPartComponent {
  @Input()title:string;
  @Input()value:string;
}
