import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  public items = [
    { title: this.translate('header_home'), route: '/home', active: false },
    { title: '3x3', route: '/3x3', active: false },
    { title: '4x4', route: '/4x4', active: false },
    { title: 'Megamix', route: '/megamix', active: false },
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
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

  public  translate(key: string) {
    return this.translateService.instant(key)
  }
}
