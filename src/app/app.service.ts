import { Injectable } from '@angular/core';
import Handlebars from 'handlebars/dist/handlebars';

@Injectable({
  providedIn: 'root',
})
export default class WidgetService {

  constructor() { }

  getCss(cssTrans): void {
  	var cssTranslation = {
	    authContainer: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "green",
	      color: null,
	      "font-size": null,
	      font: null,
	    },
	    authContent: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "purple",
	      color: null,
	      fontSize: null,
	      font: null,
	    },
	    authContentInner: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "yellow",
	      color: null,
	      fontSize: null,
	      font: null,
	    },
	    primaryAuth: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "pink",
	      color: null,
	      fontSize: null,
	      font: null,
	    },
	    primaryAuthForm: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "blue",
	      color: null,
	      fontSize: null,
	      font: null,
	    },
	    oFormContent: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "lightblue",
	      color: null,
	      fontSize: null,
	      font: null,
	    },
	    oFormFieldsetContainer: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "crimson",
	      color: null,
	      fontSize: null,
	      font: null,
	    },
	    signInLabel: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "yellow",
	      color: "purple",
	      fontSize: "20px",
	      font: "bold",
	    },
	    username: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "yellow",
	      color: "purple",
	      fontSize: "20px",
	      font: "bold",
	    },
	    password: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "green",
	      color: "orange",
	      fontSize: "5px",
	      font: "600"
	    },
	    signInButton: {
	      display: null,
	      height: null,
	      width: null,
	      margin: null,
	      border: null,
	      background: "green",
	      color: "orange",
	      fontSize: "5px",
	      font: "600"
	    }
	  };

		var template = Handlebars.compile('\
       {{#each authContainer}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container[data-se=auth-container] { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       {{#each authContent}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .auth-content { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       {{#each authContentInner}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .auth-content-inner { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       {{#each primaryAuth}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .primary-auth { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       {{#each primaryAuthForm}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .primary-auth-form { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       {{#each oFormContent}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .o-form-content { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       {{#each oFormFieldsetContainer}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .o-form-fieldset-container { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       \
       {{#if signInLabel.display}} \
        #okta-sign-in.auth-container .o-form-head { display: {{signInLabel.display}}; }\n \
       {{/if}} \
       {{#if signInLabel.height}} \
        #okta-sign-in.auth-container .o-form-head { height: {{signInLabel.height}}; }\n \
       {{/if}} \
       {{#if signInLabel.width}} \
        #okta-sign-in.auth-container .o-form-head { width: {{signInLabel.width}}; }\n \
       {{/if}} \
       {{#if signInLabel.width}} \
        #okta-sign-in.auth-container .o-form-head { width: {{signInLabel.width}}; }\n \
       {{/if}} \
       {{#if signInLabel.width}} \
        #okta-sign-in.auth-container .o-form-head { width: {{signInLabel.width}}; }\n \
       {{/if}} \
       {{#if signInLabel.background}} \
        #okta-sign-in.auth-container .o-form-head { background: {{signInLabel.background}}; }\n \
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
       {{#if username.display}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-username { display: {{username.display}}; }\n \
       {{/if}} \
       {{#if username.height}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-username { height: {{username.height}}; }\n \
       {{/if}} \
       {{#if username.width}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-username { width: {{username.width}}; }\n \
       {{/if}} \
       {{#if username.width}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-username { width: {{username.width}}; }\n \
       {{/if}} \
       {{#if username.width}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-username { width: {{username.width}}; }\n \
       {{/if}} \
       {{#if username.background}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-username { background: {{username.background}}; }\n \
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
       {{#if password.display}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-password { display: {{password.display}}; }\n \
       {{/if}} \
       {{#if password.height}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-password { height: {{height.display}}; }\n \
       {{/if}} \
       {{#if password.width}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-password { width: {{password.width}}; }\n \
       {{/if}} \
       {{#if password.background}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-password { background: {{password.background}}; }\n \
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
       {{#if signInButton.display}} \
        #okta-sign-in.auth-container #okta-signin-submit { display: {{signInButton.display}}; }\n \
       {{/if}} \
       {{#if signInButton.height}} \
        #okta-sign-in.auth-container #okta-signin-submit { height: {{signInButton.height}}; }\n \
       {{/if}} \
       {{#if signInButton.width}} \
        #okta-sign-in.auth-container #okta-signin-submit { width: {{signInButton.width}}; }\n \
       {{/if}} \
       {{#if signInButton.background}} \
        #okta-sign-in.auth-container #okta-signin-submit { background: {{signInButton.background}}; }\n \
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
    return template(cssTrans || cssTranslation);
  }

  downloadPage(): void {
  	var customCss = this.getCss(null);
  	function init(orgName, yourOktaDomain) {
		  var orgUrl  = 'https://' + yourOktaDomain;
		 
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
		  
		  function getConfig() {
		    var config = Object.assign({}, configTranslation);
		    delete config.i18n;
		    config.i18n = {};
		    config.i18n[config.language] = configTranslation.i18n;
		    return JSON.stringify(config, null, 2);
		  }
		  
		  return {
		    getConfig: getConfig,
		    configTranslation: configTranslation
		  };
		}

		var widgetUtil = init('Kaala', 'bsanth.oktapreview.com');
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