import { Pages } from '../../../types/pages.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class PanelComponent implements OnInit{
  @Input() panelContent: Pages | undefined;

  ngOnInit(): void {
  }
}
