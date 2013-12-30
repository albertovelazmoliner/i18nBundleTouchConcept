i18nBundleTouchConcept
======================

CHANGES:

# Adding 3rd Party Libs to CMD:

1 - sencha.cfg file

on `.sencha/app/sencha.cfg`:

You have to add the classpath for the folder where your 3rd party lib is located:

`app.classpath=${app.dir}/app.js,${app.dir}/app,${app.dir}/js_i18n`

I have added a reference to js_i18n folder.

2 - Development:

Do not add the js file in app.json:

````
    "js": [
        {
            "path": "touch/sencha-touch.js",
            "x-bootstrap": true
        },
        // {
        //     "path" : "js_i18n/Bundle.js"
        // },
        {
            "path": "bootstrap.js",
            "x-bootstrap": true
        },
        {
            "path": "app.js",
            "bundle": true,  /* Indicates that all class dependencies are concatenated into this file when build */
            "update": "delta"
        }
    ],
````

Instead, once you added your folder to app.classpath you have to run:

`sencha app refresh`

This recreates the boostrap.js file, which contains and defines all workspaces needed in the app.

Also you don't need this anymore in your app.js

Ext.Loader.setPath({
     'Ext.i18n': 'js_i18n'
});

This is done by cmd and added to boostrap file.

3 - Issues with Ext.i18n.Bundle

I have modified part of the code: in app.js and the view.

In development mode there is no problem since the files are loaded in order and then once the Bundle is loaded the app kicks the process to load the store. In a prod build is different since all files are packed into the same definition and that makes the app to behave a bit different.

So, to summarize, I have changed launch method to create the main view only after the Bundle is ready.


On the other hand, the view was referencing the bundle instance at definition time - this is kind of problematic because of the issue of having everything in the same file. Basically, if we want to use the bundle reference it is better to do it on execution time, this is for instance, when calling a constructor or initialization method.




