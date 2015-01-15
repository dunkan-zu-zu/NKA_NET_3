/**
 * Created by belonovich on 13.01.2015.
 */
Ext.define("NKA_net_3.view.MyHeader", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.myheader',
    items: [

        {
            title: 'NKA Net 3',

            tbar: [ {
                text: 'Главная',
                handler: 'testHandler'
            },
                ' ',

                '->',
                {
                    text: 'мои настройки',
                    handler: 'testHandler'
                },
                '-',
                {
                    text: 'выход',
                    handler: 'testHandler'
                }
            ],

            width: '100%'

        }
    ]
});
