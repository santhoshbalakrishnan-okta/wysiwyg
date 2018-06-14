import { Injectable } from '@angular/core';
import Handlebars from 'handlebars/dist/handlebars';

@Injectable({
  providedIn: 'root',
})
export default class WidgetService {

	template = Handlebars.compile('\
       {{#each authContainer}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container[data-se=auth-container] { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       {{#if authContainer.border}} \
          #okta-sign-in.auth-container.main-container[data-se=auth-container] { border-style: solid !important;}\n \
       {{/if}} \
       {{#each authHeader}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .auth-header { {{@key}}: {{this}} !important; }\n \
         {{/if}} \
       {{/each}} \
       {{#if authHeader.border}} \
          #okta-sign-in.auth-container.main-container .auth-header { border-style: solid !important;}\n \
       {{/if}} \
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
       {{#each oFormButtonBar}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .o-form-button-bar { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       {{#each authFooter}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .auth-footer { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
       {{#each registrationContainer}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .registration-container { {{@key}}: {{this}}; }\n \
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
       {{#if signInLabel.margin}} \
        #okta-sign-in.auth-container .o-form-head { margin: {{signInLabel.margin}}; }\n \
       {{/if}} \
       {{#if signInLabel.padding}} \
        #okta-sign-in.auth-container .o-form-head { padding: {{signInLabel.padding}}; }\n \
       {{/if}} \
       {{#if signInLabel.border}} \
        #okta-sign-in.auth-container .o-form-head { border: {{signInLabel.border}}; }\n \
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
       {{#if username.margin}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-username { margin: {{username.margin}}; }\n \
       {{/if}} \
       {{#if username.padding}} \
        #okta-sign-in .o-form .o-form-input #okta-signin-username { padding: {{username.padding}}; }\n \
       {{/if}} \
       {{#if username.border}} \
        #okta-sign-in.auth-container .o-form-input-name-username { border: {{username.border}} !important; border-style: solid !important; }\n \
       {{/if}} \
       {{#if username.border-color}} \
       	#okta-sign-in.auth-container .o-form-input-name-username { border-color: {{username.border-color}} !important;}\n \
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
        #okta-sign-in .o-form .o-form-input .o-form-input-name-password { display: {{password.display}}; }\n \
       {{/if}} \
       {{#if password.height}} \
        #okta-sign-in .o-form .o-form-input .o-form-input-name-password { height: {{height.display}}; }\n \
       {{/if}} \
       {{#if password.width}} \
        #okta-sign-in .o-form .o-form-input .o-form-input-name-password { width: {{password.width}}; }\n \
       {{/if}} \
       {{#if password.margin}} \
        #okta-sign-in .o-form .o-form-input .o-form-input-name-password { margin: {{password.margin}}; }\n \
       {{/if}} \
       {{#if password.padding}} \
        #okta-sign-in .o-form .o-form-input .o-form-input-name-password { padding: {{password.padding}}; }\n \
       {{/if}} \
       {{#if password.border}} \
        #okta-sign-in .o-form-input-name-password { border: {{password.border}} !important; border-style: solid !important;}\n \
       {{/if}} \
       {{#if password.border-color}} \
       	#okta-sign-in .o-form-input-name-password { border-color: {{password.border-color}} !important;}\n \
       {{/if}} \
       {{#if password.background}} \
        #okta-sign-in .o-form .o-form-input .o-form-input-name-password { background: {{password.background}}; }\n \
       {{/if}} \
       {{#if password.color}} \
        #okta-sign-in .o-form .o-form-input .o-form-input-name-password { color: {{password.color}} !important; }\n \
       {{/if}} \
       {{#if password.fontSize}} \
        #okta-sign-in .o-form .o-form-input .o-form-input-name-password { font-size: {{password.fontSize}}; }\n \
       {{/if}} \
       {{#if password.font}} \
        #okta-sign-in .o-form .o-form-input .o-form-input-name-password { font: {{password.font}}; }\n \
       {{/if}} \
       \
       {{#if signInButton.display}} \
        #okta-sign-in.auth-container .button-primary { display: {{signInButton.display}}; }\n \
       {{/if}} \
       {{#if signInButton.height}} \
        #okta-sign-in.auth-container .button-primary { height: {{signInButton.height}}; }\n \
       {{/if}} \
       {{#if signInButton.width}} \
        #okta-sign-in.auth-container .button-primary { width: {{signInButton.width}}; }\n \
       {{/if}} \
       {{#if signInButton.margin}} \
        #okta-sign-in.auth-container .button-primary { margin: {{signInButton.margin}}; }\n \
       {{/if}} \
       {{#if signInButton.padding}} \
        #okta-sign-in.auth-container .button-primary { padding: {{signInButton.padding}}; }\n \
       {{/if}} \
       {{#if signInButton.border}} \
        #okta-sign-in.auth-container .button-primary { border-width: {{signInButton.border}} !important; border-style: solid !important;}\n \
       {{/if}} \
       {{#if signInButton.border-color}} \
        #okta-sign-in.auth-container .button-primary { border-color: {{signInButton.border-color}} !important;}\n \
       {{/if}} \
       {{#if signInButton.background}} \
        #okta-sign-in.auth-container .button-primary { background: {{signInButton.background}}; }\n \
       {{/if}} \
       {{#if signInButton.color}} \
        #okta-sign-in.auth-container .button-primary { color: {{signInButton.color}}; }\n \
       {{/if}} \
       {{#if signInButton.fontSize}} \
        #okta-sign-in.auth-container .button-primary { font-size: {{signInButton.fontSize}}; }\n \
       {{/if}} \
       {{#if signInButton.font}} \
        #okta-sign-in.auth-container .button-primary { font: {{signInButton.font}}; }\n \
       {{/if}} \
       {{#each oFormFieldset}} \
         {{#if this}} \
           #okta-sign-in.auth-container.main-container .o-form-fieldset { {{@key}}: {{this}}; }\n \
         {{/if}} \
       {{/each}} \
      ');

  constructor() { }

  getCss(cssTranslation): string {
    return this.template(cssTranslation);
	}
	
  downloadPage(features, cssConfig, i18n, orgUrl): void {
  	var customCss:string = this.getCss(cssConfig).trim();
		  
    var config = {
    	baseUrl: orgUrl,
    	i18n: {
    		en : {
    			'primaryauth.title': i18n.signInLabel,
          'primaryauth.username.placeholder': i18n.username
        }
    	},
    	features: features
    };
    var widgetConfig = JSON.stringify(config, null, 2);


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
				<div class="login-bg-image" style="background-image: {{bgImageUrl}}"></div>
		    <div id="okta-login-container"></div>
		    <script type="text/javascript">
			  var orgUrl = "${orgUrl}";
		        
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