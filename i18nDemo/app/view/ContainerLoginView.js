Ext.define('i18nBundleTouchConcept.view.ContainerLoginView', {
	extend: 'Ext.Container',
	xtype: 'containerLogin',
	requires: [
		'i18nBundleTouchConcept.view.Login',
		'Ext.Toolbar'
	],
	config:{
		layout: 'card',
		items:[
			{
				xtype:'login',
				itemId:'login'
			}
		]
	}
})