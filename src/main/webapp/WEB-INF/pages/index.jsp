<%--
  Created by IntelliJ IDEA.
  User: belonovich
  Date: 13.01.2015
  Time: 4:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
  <title> NKA net 3</title>
  <meta charset="UTF-8">

  <link rel="stylesheet" href="https://extjs.cachefly.net/ext/beta/ext-5.0.0.736/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css"/>
  <script src="https://extjs.cachefly.net/ext/beta/ext-5.0.0.736/build/ext-all.js"></script>
  <script src="https://extjs.cachefly.net/ext/beta/ext-5.0.0.736/packages/ext-theme-crisp/build/ext-theme-crisp.js"></script>

  <!--build:css all.css-->
  <link rel="stylesheet" href="css/all.css"/>
  <!--endbuild-->
  <script>
    //Load user locale
    (function(window, Ext){
      var locale = window.navigator.language,
              defaultLang = 'en',
              languages = ['locale/' + defaultLang + '.js'],
              dashIndex = locale.indexOf('-');

      if (~dashIndex){
        locale = locale.slice(0, dashIndex);
      }

      if (defaultLang != locale){
        languages.push('locale/' + locale + '.js');
      }

      //
      Ext.Loader.loadScriptsSync(languages);
      //
    })(window, Ext);
  </script>
  <script src="app.js"></script>
</head>
<body>

</body>
</html>