import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  public items = [
    { title: '', route: '/home', active: true },
    { title: '3x3', route: '/3x3', active: false },
    { title: '4x4', route: '/4x4', active: false },
    { title: 'Megamix', route: '/megamix', active: false },
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.items[0].title = this.translate('header_home');
      this.items.forEach(item => {
        if (item.active === true && item.title !== this.items[0].title) {
          this.items[0].active = false;
        }
      });
    }, 100);

    this.translateService.onLangChange.subscribe(() => {
      this.items[0].title = this.translate('header_home');
    });
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
