import 'hammerjs';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MangolComponent } from './mangol.component';
import { ControllersModule } from './modules/controllers/controllers.module';
import { MapModule } from './modules/map/map.module';
import { TabsModule } from './modules/tabs/tabs.module';
import { NgxsModule } from '@ngxs/store';
import { mangolStates } from './mangol.state';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    TabsModule,
    BrowserAnimationsModule,
    MapModule,
    ControllersModule,
    NgxsModule.forRoot(mangolStates)
    // NgxsLoggerPluginModule.forRoot()
  ],
  declarations: [MangolComponent],
  exports: [MangolComponent]
})
export class MangolModule {}
