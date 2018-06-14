import { Component, OnInit } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';
import WidgetService from './app.service';
import { CssConfig }    from './css-config';
import $ from 'jquery';

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
  config = {};

  model = new CssConfig("authContainer", null, null, null, null, null, null, null, null, null);

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
    this.getStyles();
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

  getStyles() {
    this.changeComponent(null);
    $('#widget-styles').remove();
    var css = this.widgetService.getCss(this.config);
    $('body').append(`<style id="widget-styles">${css}</style>`);
  }

  changeComponent(component) {
    this.config[this.model.component] = {
      "font-size": this.model.fontSize,
      display: this.model.display,
      height: this.model.height,
      width: this.model.width,
      margin: this.model.margin,
      border: this.model.border,
      background: this.model.background,
      color: this.model.color
    };

    if (component) {
      var componentConfig = this.config[componentConfig];
      if (this.config[component]) {
        this.model.component = component;
        this.model.fontSize = componentConfig["font-size"];
        this.model.height = componentConfig.height;
        this.model.width = componentConfig.width;
        this.model.color = componentConfig.color;
        this.model.background = componentConfig.background;
      } else {
        this.model.component = component;
        this.model.fontSize = null;
        this.model.height = null;
        this.model.width = null;
        this.model.color = null;
        this.model.background = null;
      }
    }
  }
}
