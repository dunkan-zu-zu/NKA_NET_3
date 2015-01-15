Ext.application({
    name: 'NKA_net_3',
    autoCreateViewport: 'Start',

    models:['Orders'],
    stores: ['TableOrders'],
    views:[ 'Start', 'MyHeader', 'Footer', 'MainPage', 'OrderTab', 'MyPicker'],

    launch: function(){

    }
});