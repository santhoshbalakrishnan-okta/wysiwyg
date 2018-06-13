import { Injectable } from '@angular/core';
import Handlebars from 'handlebars/dist/handlebars';

@Injectable({
  providedIn: 'root',
})
export default class WidgetService {

  constructor() { }

  downloadPage(): void {
  	function init(orgName, yourOktaDomain) {
		  var orgUrl  = 'https://' + yourOktaDomain;
		  
		  var cssTranslation = {
		    global: {
		      backgroundColor: "red",
		      color: "pink",
		    },
		    signInLabel: {
		      backgroundColor: "yellow",
		      color: "purple",
		      fontSize: "20px",
		      font: "bold",
		    },
		    username: {
		      backgroundColor: "yellow",
		      color: "purple",
		      fontSize: "20px",
		      font: "bold",
		    },
		    password: {
		      backgroundColor: "green",
		      color: "orange",
		      fontSize: "5px",
		      font: "600"
		    },
		    signInButton: {
		      backgroundColor: "green",
		      color: "orange",
		      fontSize: "5px",
		      font: "600"
		    } 
		  };
		 
		  var configTranslation: any = {
		    baseUrl: orgUrl,
		    language: 'en',
		    i18n: {
		      "primaryauth.title": 'Sign in to ' + orgName,
		      "primaryauth.username.placeholder": 'Your ' + orgName + ' Username'
		    },
		    helpLinks: {
		      help: orgUrl + '/help/login',
		      forgotPassword: orgUrl + '/forgot-password',
		      custom: []
		    }
		  };
		  
		  function getCss() {
		      var template = Handlebars.compile('\
		       {{#if global.backgroundColor}} \
		        #okta-sign-in.auth-container.main-container { background: {{global.backgroundColor}}; }\n \
		       {{/if}} \
		       {{#if global.color}} \
		        #okta-sign-in { color: {{global.color}}; }\n \
		       {{/if}} \
		       \
		       {{#if signInLabel.backgroundColor}} \
		        #okta-sign-in.auth-container .o-form-head { background: {{signInLabel.backgroundColor}}; }\n \
		       {{/if}} \
		       {{#if signInLabel.color}} \
		        #okta-sign-in.auth-container .o-form-head { color: {{signInLabel.color}}; }\n \
		       {{/if}} \
		       {{#if signInLabel.fontSize}} \
		        #okta-sign-in.auth-container .o-form-head { font-size: {{signInLabel.fontSize}}; }\n \
		       {{/if}} \
		       {{#if signInLabel.font}} \
		        #okta-sign-in.auth-container .o-form-head { font: {{signInLabel.font}}; }\n \
		       {{/if}} \
		       \
		       {{#if username.backgroundColor}} \
		        #okta-sign-in .o-form .o-form-input #okta-signin-username { background: {{username.backgroundColor}}; }\n \
		       {{/if}} \
		       {{#if username.color}} \
		        #okta-sign-in .o-form .o-form-input #okta-signin-username { color: {{username.color}}; }\n \
		       {{/if}} \
		       {{#if username.fontSize}} \
		        #okta-sign-in .o-form .o-form-input #okta-signin-username { font-size: {{username.fontSize}}; }\n \
		       {{/if}} \
		       {{#if username.font}} \
		        #okta-sign-in .o-form .o-form-input #okta-signin-username { font: {{username.font}}; }\n \
		       {{/if}} \
		       \
		       {{#if password.backgroundColor}} \
		        #okta-sign-in .o-form .o-form-input #okta-signin-password { background: {{password.backgroundColor}}; }\n \
		       {{/if}} \
		       {{#if password.color}} \
		        #okta-sign-in .o-form .o-form-input #okta-signin-password { color: {{password.color}}; }\n \
		       {{/if}} \
		       {{#if password.fontSize}} \
		        #okta-sign-in .o-form .o-form-input #okta-signin-password { font-size: {{password.fontSize}}; }\n \
		       {{/if}} \
		       {{#if password.font}} \
		        #okta-sign-in .o-form .o-form-input #okta-signin-password { font: {{password.font}}; }\n \
		       {{/if}} \
		       \
		       {{#if signInButton.backgroundColor}} \
		        #okta-sign-in.auth-container #okta-signin-submit { background: {{signInButton.backgroundColor}}; }\n \
		       {{/if}} \
		       {{#if signInButton.color}} \
		        #okta-sign-in.auth-container #okta-signin-submit { color: {{signInButton.color}}; }\n \
		       {{/if}} \
		       {{#if signInButton.fontSize}} \
		        #okta-sign-in.auth-container #okta-signin-submit { font-size: {{signInButton.fontSize}}; }\n \
		       {{/if}} \
		       {{#if signInButton.font}} \
		        #okta-sign-in.auth-container #okta-signin-submit { font: {{signInButton.font}}; }\n \
		       {{/if}} \
		      ');
		    return template(cssTranslation);
		  }
		  
		  function getConfig() {
		    var config = Object.assign({}, configTranslation);
		    delete config.i18n;
		    config.i18n = {};
		    config.i18n[config.language] = configTranslation.i18n;
		    return JSON.stringify(config, null, 2);
		  }
		  
		  return {
		    getCss: getCss,
		    getConfig: getConfig,
		    cssTranslation: cssTranslation,
		    configTranslation: configTranslation
		  };
		}

		var widgetUtil = init('Kaala', 'bsanth.oktapreview.com');
		var customCss = widgetUtil.getCss();
		var widgetConfig:any = widgetUtil.getConfig();


		var indexFile = `
		  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" "http://www.w3.org/TR/html4/strict.dtd">
		<html>
		<head>
		    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

		    <title>Sign in</title>
		    
		    <script type="text/javascript" src="https://op1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/js/okta-sign-in.min.js"></script>
		    
		    <link rel="stylesheet" type="text/css" href="https://op1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/css/okta-sign-in.min.css">
		    <link
		  href="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/css/okta-theme.css"
		  type="text/css"
		  rel="stylesheet"/>
		    <style>
		      ${customCss}
		    </style>
		</head>
		<body>
		    <div id="okta-login-container"></div>
		    <script type="text/javascript">
			  var orgUrl = ${widgetConfig.baseUrl};
		        
				// config
		        var config = ${widgetConfig};

		        // render widget
		        var oktaSignIn = new OktaSignIn(config);
		        oktaSignIn.renderEl({ el: '#okta-login-container' },
		            function(res) {
		            	// success fn
		                res.session.setCookieAndRedirect(orgUrl);
		            },
		            function(error) {
				        // failure fn
		                console.log(error.message, error);
		            }
		        );
		    </script>
		</body>
		</html>
		`;
		    

		function download(filename, text) {
		    var pom = document.createElement('a');
		    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		    pom.setAttribute('download', filename);

		    if (document.createEvent) {
		        var event = document.createEvent('MouseEvents');
		        event.initEvent('click', true, true);
		        pom.dispatchEvent(event);
		    }
		    else {
		        pom.click();
		    }
		}

		download('loginPage.html', indexFile);
	}
}