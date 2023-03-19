import { Pages } from 'src/app/types/pages.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-panel',
    templateUrl: './menu-panel.component.html',
    styleUrls: ['./menu-panel.component.scss'],
})
export class PanelComponent {
    @Input() panelContent: Pages | undefined;
}
