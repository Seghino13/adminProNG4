import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgessComponent,
        Graficas1Component,
    ],

    exports:[
    PagesComponent,
    DashboardComponent,
    ProgessComponent,
    Graficas1Component
    ],

    imports:[
        SharedModule,
        PAGES_ROUTES
    ]

})

export class PagesModules {}