import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiSwitchModule.forRoot({
      size: 'small',
      color: '#27C78B',
      switchColor: '#282A35',
      defaultBgColor: '#E02D67',
      defaultBoColor: 'transparent'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
