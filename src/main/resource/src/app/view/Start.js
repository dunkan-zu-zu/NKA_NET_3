Ext.define('NKA_net_3.view.Start', {
    extend: 'Ext.container.Container',
    requires: [
        'NKA_net_3.view.StartModel',
        'NKA_net_3.view.StartController'
    ],
    viewModel: {type: 'start'},
    controller: 'start',
    alias: 'widget.start',
    title: NKA_net_3.locale.LOGIN,
    layout: {
        type: 'border'
    },

    items: [
        {
            region: 'center',
            xtype: 'panel',
            autoScroll: true,
            items: [{
                xtype: 'panel',
                id: 'headerpage',
                height: 860,
                items: [{
                    xtype: 'myheader'
                },{
                    id: 'MainPageContainer',
                    xtype: 'mainpage'
                }]

            }
                ,{
                    xtype: 'footer'
                }]
        },

    ]

});