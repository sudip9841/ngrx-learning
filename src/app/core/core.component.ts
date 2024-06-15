import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  menuItems: any[] = [
    {id:'home',title:'Home',route:'/core/home'},
    { id: 'dashboard', title: 'Dashboard', route: '/core/dashboard' },
    { id: 'user', title: 'User', route: '/core/user' }
  ];
  constructor(private sanitizer:DomSanitizer) { }
}
