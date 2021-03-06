Ext.define('i18nBundleTouchConcept.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                itemId: 'loginField',
                cls: 'loginField',
                style:{'margin-top':'80pt'},
                defaults: {
                    style:{
                        'font-size':'12pt',
                        'border-color':'#051663'
                    }
                },
                items: [
                    {
                        xtype: 'textfield',
                        name : 'usuario',
                        cls:'emailLogin',
                        style:{
                            'color':'#000000'
                        },
                        itemId:'emailField',
                        value:'',
                        clearIcon: true,
                        autoCapitalize:false,
                        autoCorrect:'off',
                        // placeHolder: Ext.i18n.appBundle.getMsg('pp.c.login')
                        placeHolder: {type: 'bundle', key: 'pp.c.login'}
                    },
                    {
                        xtype: 'passwordfield',
                        name : 'password',
                        itemId:'passwordField',
                        cls:'passwordlLogin',
                        value:'',
                        clearIcon:true,
                        // placeHolder: Ext.i18n.appBundle.getMsg('pp.c.password')
                        placeHolder: {type: 'bundle', key: 'pp.c.password'}
                    }
                ]
            },
            {
                xtype:'fieldset',
                layout:{
                    type:'vbox'
                },
                defaults: {
                    cls:'botonIndependiente2bis'
                },
                items:[
                    {
                        xtype: 'button',
                        itemId:'loginButton',
                        // text: Ext.i18n.appBundle.getMsg('pp.b.entrar'),
                        text: {type: 'bundle', key: 'pp.b.entrar'},
                        ui: 'submit'
                    },
                    {
                        xtype: 'button',
                        itemId: 'registroBtn',
                        // text: Ext.i18n.appBundle.getMsg('pp.b.registro'),
                        text: {type: 'bundle', key: 'pp.b.registro'},
                        ui: 'submit'
                    },
                    {
                        xtype: 'button',
                        // text: Ext.i18n.appBundle.getMsg('pp.b.descripcion'),
                        text: {type: 'bundle', key: 'pp.b.descripcion'},
                        itemId: 'queEsWeplaiBtn',
                        ui: 'action'
                    },
                    {
                        xtype: 'button',
                        // text: Ext.i18n.appBundle.getMsg('pp.b.tutorial'),
                        text: {type: 'bundle', key: 'pp.b.tutorial'},
                        itemId: 'tutorialBtn',
                        ui: 'action'
                    },
                    {
                        xtype:'button',
                        itemId:'legalButton',
                        // text:Ext.i18n.appBundle.getMsg('pp.b.legal'),
                        text: 'Trying html text with Ext.i18n : ' + {type: 'bundle', key: 'pp.b.legal'},
                        ui:'action'
                    },
                    {
                        xtype:'button',
                        itemId:'contactaButton',
                        // text: Ext.i18n.appBundle.getMsg('pp.b.contacto'),
                        text: {type: 'bundle', key: 'pp.b.contacto'},
                        ui:'action'
                    },
                    {
                        xtype:'button',
                        itemId:'recuperaPassBtn',
                        // text: Ext.i18n.appBundle.getMsg('pp.b.recuperar'),
                        text: {type: 'bundle', key: 'pp.b.recuperar'},
                        ui:'action'
                    }
                ]
            }
        ]
    }


});
