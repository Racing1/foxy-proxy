import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { NetDiffChartComponent } from './net-diff-chart/net-diff-chart.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RoundStatsComponent } from './round-stats/round-stats.component';
import { ProxyComponent } from './proxy/proxy.component';
import { UpstreamComponent } from './upstream/upstream.component';
import { UpstreamInfoComponent } from './upstream-info/upstream-info.component';
import { ProxyInfoComponent } from './proxy-info/proxy-info.component';
import { BlocksWonListComponent } from './blocks-won-list/blocks-won-list.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { NewVersionSnackbarComponent } from './new-version-snackbar/new-version-snackbar.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NetDiffChartComponent,
    RoundStatsComponent,
    ProxyComponent,
    UpstreamComponent,
    UpstreamInfoComponent,
    ProxyInfoComponent,
    BlocksWonListComponent,
    LoginComponent,
    MenuComponent,
    NewVersionSnackbarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    FormsModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewVersionSnackbarComponent
  ]
})
export class AppModule { }
