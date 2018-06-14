import { Component, OnInit } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';
import WidgetService from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  widget: OktaSignIn;
  fontColor: any = 'default';
  bgColor: any = 'default';
  hideUrlModal: boolean = false;
  hideChooseTemplateModal: boolean = true;

  constructor(private widgetService: WidgetService) {
    this.widget = new OktaSignIn({
      baseUrl: 'https://atko.oktapreview.com',
      clientId: '{clientId}',
      redirectUri: 'http://localhost:4200',
      authParams: {
        issuer: 'default'
      }
    });
  }

  ngOnInit() {
    var orgUrl = "https://bsanth.oktapreview.com";
        
		// config
        var config = {
        	baseUrl: orgUrl
        };

				// render widget
        this.widget.renderEl({ el: '#okta-login-container' },
            function(res) {
            },
            function(error) {
		          // failure fn
              console.log(error.message, error);
            }
        );
  }

  downloadCode() {
    this.widgetService.downloadPage();
  }

  showChooseTemplateModal() {
    this.hideUrlModal = true;
    this.hideChooseTemplateModal = false;
  }

  startEditing() {
    this.hideUrlModal = true;
    this.hideChooseTemplateModal = true;
  }
}
