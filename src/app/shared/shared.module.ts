import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcumsComponent } from './breadcums/breadcums.component';
import { NofoundpageComponent } from "./nofoundpage/nofoundpage.component";

@NgModule({

    declarations:[
        HeaderComponent,
        SidebarComponent,
        BreadcumsComponent,
        NofoundpageComponent,
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        BreadcumsComponent,
        NofoundpageComponent
    ]
})

export class SharedModule{};