import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit() {}
  onAddItem() {
    console.log('additem');
    this.router.navigate(['/add-item']);
  }
  onDeleteItem() {
    console.log('deleteItem');
    this.router.navigate(['/delete-item']);
  }
}
