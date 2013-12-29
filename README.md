i18nBundleTouchConcept
======================

Integrating Ext.i18n.Bundle from @elmasse in a sencha-touch demo project. Issues compiling with Sencha Cmd 4.x

It works perfect in development but fail when you try to compile:
sencha app build production

You get this messages:

[ERR] C2008: Requirement had no matching files (Ext.i18n.Bundle) -- /Users/alberto/Documents/i18nBundleTouchConcept/i18nDemo/app.js:17:12
[ERR]
[ERR] BUILD FAILED
[ERR] com.sencha.exceptions.ExBuild: Failed to find any files for /Users/alberto/Documents/i18nBundleTouchConcept/i18nDemo/app.js::ExtRequire::Ext.i18n.Bundle
[ERR]
[ERR] Total time: 3 seconds
[ERR] The following error occurred while executing this line:
/Users/alberto/Documents/i18nBundleTouchConcept/i18nDemo/.sencha/app/build-impl.xml:367: The following error occurred while executing this line:
/Users/alberto/Documents/i18nBundleTouchConcept/i18nDemo/.sencha/app/js-impl.xml:11: com.sencha.exceptions.ExBuild: Failed to find any files for /Users/alberto/Documents/i18nBundleTouchConcept/i18nDemo/app.js::ExtRequire::Ext.i18n.Bundle