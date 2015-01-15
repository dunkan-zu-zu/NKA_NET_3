Ext.define('NKA_net_3.view.StartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.start',
    init:function() {
    },
    onCancelBtnClick: function(){
    },
    loadOrders: function(){
        Ext.get('MainPageContainer').update('')
        Ext.create('NKA_net_3.view.OrderTab',{}).render( 'MainPageContainer');
    },
    onBtnClick: function(){


    },
    testHandler: function(){
        Ext.get('MainPageContainer').update('');
        Ext.create('NKA_net_3.view.MainPage',{}).render( 'MainPageContainer');
},
    addOrder: function(){
        Ext.get('MainPageContainer').update('');
        Ext.create('NKA_net_3.view.Order',{}).render( 'MainPageContainer');
    }
});