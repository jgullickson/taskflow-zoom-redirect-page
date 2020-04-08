let code = window.location.search;

require('electron').remote.getGlobal('oauthStore').auth_code = code;