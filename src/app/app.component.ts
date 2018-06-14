import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';
import WidgetService from './app.service';
import { CssConfig }    from './css-config';
import $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'app';
  widget: OktaSignIn;
  fontColor: any = 'default';
  bgColor: any = 'default';
  hideUrlModal: boolean = false;
  hideChooseTemplateModal: boolean = true;
  config = {};

  features = {};
  i18n = {
    username: 'Username'
  };

  model = new CssConfig("username", null, null, null, null, null, null, null, null, null);
  currentHovered: any;
  currentSelected: any;
  control: any;
  selectableElements: any = [];
  selectableElementsSelectors: any = {};
  selectMode: boolean = false;

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

  updateConfigAndRenderWidgetAgain(feature, value) {
    if (feature) {
      this.features[feature] = value;  
    }
    
    //$('#okta-login-container').empty();
    this.widget.remove();
    this.widget = new OktaSignIn({
      baseUrl: 'https://atko.oktapreview.com',
      clientId: '{clientId}',
      redirectUri: 'http://localhost:4200',
      authParams: {
        issuer: 'default'
      },
      features: this.features,
      i18n: {
        en: {
          'primaryauth.username.placeholder': this.i18n.username
        }
      }
    });


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

  initSelectableElements() {
    this.selectMode = !this.selectMode;
    if(!this.selectMode) {
      if (this.currentHovered) {
        $(this.currentHovered).removeClass('dashed');
      }
      if (this.currentSelected) {
        $(this.currentSelected).removeClass('bordered');
      }
      return;
    }
    this.selectableElementsSelectors = {
      '#okta-sign-in.auth-container.main-container[data-se=auth-container]': '',
      '#okta-sign-in.auth-container.main-container .auth-header': '',
      '#okta-sign-in.auth-container.main-container .auth-content': '',
      '#okta-sign-in.auth-container.main-container .auth-content-inner': '',
      '#okta-sign-in.auth-container.main-container .primary-auth': '',
      '#okta-sign-in.auth-container.main-container .primary-auth-form': '',
      '#okta-sign-in.auth-container.main-container .o-form-content': '',
      '#okta-sign-in.auth-container.main-container .o-form-fieldset-container': '',
      '#okta-sign-in.auth-container.main-container .o-form-button-bar': '',
      '#okta-sign-in.auth-container.main-container .auth-footer': '',
      '#okta-sign-in.auth-container .o-form-head': 'signInLabel',
      '#okta-sign-in .o-form .o-form-input #okta-signin-password': '',
      '#okta-sign-in .o-form .o-form-input #okta-signin-username': 'username',
      '#okta-sign-in.auth-container .button-primary': 'signInButton',
    };
    this.selectableElements = [];

    for(var key in this.selectableElementsSelectors){
      this.selectableElements.push($(key)[0]);
    }
  }

  hoverElements(event) {
    if(!this.selectMode) {
      return;
    }

    if (this.currentHovered) {
      $(this.currentHovered).removeClass('dashed');
    }

    this.currentHovered = event.target;
    
    if (this.selectableElements.indexOf($(this.currentHovered)[0]) >= 0) {
      this.control = false;
    } else {
      this.control = true;
    }

    if (!this.control) {
      $(this.currentHovered).addClass('dashed');
    }

    event.stopPropagation();
  }

  clickElements(event) {
    if(!this.selectMode) {
      return;
    }

    if (this.currentSelected) {
      $(this.currentSelected).removeClass('bordered');
    }

    this.currentSelected = event.target;

    let i = this.selectableElements.indexOf($(this.currentSelected)[0]);
    if (i >= 0) {
      this.control = false;
    } else {
      this.control = true;
    }

    if (!this.control) {
      $(this.currentSelected).addClass('bordered');
      let keys = Object.keys(this.selectableElementsSelectors);
      this.changeComponent(this.selectableElementsSelectors[keys[i]]);
    }

    event.stopPropagation();
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
