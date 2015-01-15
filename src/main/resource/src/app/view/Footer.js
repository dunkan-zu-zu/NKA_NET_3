/**
 * Created by belonovich on 13.01.2015.
 */


Ext.define("NKA_net_3.view.Footer",
    {
        extend: 'Ext.panel.Panel',
        alias: 'widget.footer',
        bbar: ['NKA NET v3/ All right reserved. Created by NKANETDevTeam. Тех поддержка -  support.nca.by',
            '->',
            {
                text: 'вверх',
                handler: function () {
                    window.scrollTo(0, 0);
                }
            }]

    });

