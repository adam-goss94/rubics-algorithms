import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  items = [
    { title: '3x3', route: '/3x3', active: false },
    { title: '4x4', route: '/4x4', active: false },
    { title: 'Megamix', route: '/megamix', active: false },
  ];

  constructor() {}

  ngOnInit() {
    const selectedItem = localStorage.getItem('selectedItem');
    this.items.forEach(item => {
      if (item.title === selectedItem) {
        item.active = true;
      }
    });
  }

  onNavItemClick(item: { active: boolean; title: string; }) {
    this.items.forEach(i => i.active = false);
    item.active = true;
    localStorage.setItem('selectedItem', item.title);
  }
}
