import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';
import WidgetService from './app.service';
import TemplateService from './templates';
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
  templateName: string;
  fontColor: any = 'default';
  bgColor: any = 'default';
  hideUrlModal: boolean = false;
  hideChooseTemplateModal: boolean = true;
  config  = {};
  orgUrl = 'https://atko.oktapreview.com';

  features = {};
  i18n = {
    username: 'Username',
    signInLabel : 'Sign In'
  };

  cssConfig = {
    component : null,
    text: null,
    fontSize : null,
    height : null,
    width : null,
    color : null,
    background : null,
    border : null,
    borderColor : null,
    margin : null,
    display : null
  };
  currentHovered: any;
  currentSelected: any;
  control: any;
  selectableElements: any = [];
  selectableElementsSelectors: any = {};
  selectMode: boolean = false;

  constructor(private widgetService: WidgetService, private templateService:TemplateService) {
  }

  ngOnInit() {
    this.changeComponent('username');
    this.createAndRenderNewWideget();
  }

  createAndRenderNewWideget() {
    if (this.widget) {
      this.widget.remove();
    }
    this.widget = new OktaSignIn({
      baseUrl: this.orgUrl,
      features: this.features,
      i18n: {
        en: {
          'primaryauth.title': this.i18n.signInLabel,
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

  updateConfigAndRenderWidgetAgain(feature, value) {
    if (feature) {
      this.features[feature] = value;  
    }
    this.createAndRenderNewWideget();
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
      '#okta-sign-in.auth-container.main-container[data-se=auth-container]': 'authContainer',
      '#okta-sign-in.auth-container.main-container .auth-header': 'authHeader',
      '#okta-sign-in.auth-container.main-container .auth-content': 'authContent',
      '#okta-sign-in.auth-container.main-container .auth-content-inner': 'authContentInner',
      '#okta-sign-in.auth-container.main-container .primary-auth': 'primaryAuth',
      '#okta-sign-in.auth-container.main-container .primary-auth-form': 'primaryAuthForm',
      '#okta-sign-in.auth-container.main-container .o-form-content': 'oFormContent',
      '#okta-sign-in.auth-container.main-container .o-form-fieldset-container': 'oFormFieldsetContainer',
      '#okta-sign-in.auth-container.main-container .o-form-button-bar': 'oFormButtonBar',
      '#okta-sign-in.auth-container.main-container .auth-footer': 'authFooter',
      '#okta-sign-in.auth-container .o-form-head': 'signInLabel',
      '#okta-sign-in .o-form .o-form-input #okta-signin-password': 'password',
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
    this.widgetService.downloadPage(this.features, this.config, this.i18n, this.orgUrl);
  }

  showChooseTemplateModal() {
    this.hideUrlModal = true;
    this.hideChooseTemplateModal = false;
  }

  startEditing(templateName) {
    this.templateName = templateName;
    this.config = this.templateService.getTemplate(this.templateName);
    this.features = this.templateService.getFeatures(this.templateName);
    this.hideUrlModal = true;
    this.hideChooseTemplateModal = true;
    this.updateConfigAndRenderWidgetAgain(null, null);
    this.getStyles();
  }

  getStyles() {
    this.changeComponent(null);
    $('#widget-styles').remove();
    var css = this.widgetService.getCss(this.config);
    $('body').append(`<style id="widget-styles">${css}</style>`);
  }

  changeComponent(component) {
    this.config[this.cssConfig.component] = {
      "font-size": this.cssConfig.fontSize,
      display: this.cssConfig.display,
      height: this.cssConfig.height,
      width: this.cssConfig.width,
      margin: this.cssConfig.margin,
      "border-width": this.cssConfig.border,
      background: this.cssConfig.background,
      color: this.cssConfig.color,
      "border-color": this.cssConfig.borderColor
    };

    if (component) {
      var componentConfig = this.config[component];

      if (this.config[component]) {
        this.cssConfig.component = component;
        this.cssConfig.fontSize = componentConfig["font-size"];
        this.cssConfig.height = componentConfig.height;
        this.cssConfig.width = componentConfig.width;
        this.cssConfig.color = componentConfig.color;
        this.cssConfig.background = componentConfig.background;
        this.cssConfig.border = componentConfig["border-width"];
        this.cssConfig.borderColor = componentConfig["border-color"];
      } else {
        this.cssConfig.component = component;
        this.cssConfig.fontSize = null;
        this.cssConfig.height = null;
        this.cssConfig.width = null;
        this.cssConfig.color = null;
        this.cssConfig.background = null;
        this.cssConfig.border = null;
        this.cssConfig.borderColor = null;
      }
    }
  }
}
