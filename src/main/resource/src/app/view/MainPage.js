/**
 * Created by belonovich on 13.01.2015.
 */
Ext.define("NKA_net_3.view.MainPage",
    {
        extend: 'Ext.panel.Panel',
        alias: 'widget.mainpage',
        layout: {type: 'vbox'},

        autoScroll: true,

        items: [
            {
                xtype: 'button',
                margin: '50 0 0 200',
                align: 'center',
                itemId: 'btn0',
                height: 74,
                width: 500,
                text: 'заказы',
                enableToggle: true,
                handler: 'loadOrders'
            },
            {
                xtype: 'button',
                margin: '50 0 0 200',
                align: 'center',
                itemId: 'btn1',
                height: 74,
                width: 500,
                text: 'просмотр объектов',
                enableToggle: true,
                handler: 'onBtnClick'
            },
            {
                xtype: 'button',
                margin: '50 0 0 200',
                align: 'center',
                itemId: 'btn2',
                height: 74,
                width: 500,
                text: 'поиск и выдача информации',
                enableToggle: true,
                handler: function () {
                    alert("событие");
                }
            },
            {
                xtype: 'button',
                margin: '50 0 0 200',
                styleHtmlCls: 'size: 20px;',
                align: 'center',
                itemId: 'btn3',
                height: 74,
                width: 500,
                text: 'карта',
                enableToggle: true,
                handler: function () {
                    alert("событие");
                }
            },
            {
                xtype: 'button',
                margin: '50 0 0 200',
                align: 'center',
                itemId: 'btn4',
                height: 74,
                width: 500,
                text: 'реестр характеристик',
                enableToggle: true,
                handler: function () {
                    alert("событие");
                }
            },
            {
                xtype: 'button',
                margin: '50 0 0 200',
                align: 'center',
                itemId: 'btn5',
                height: 74,
                width: 500,
                text: 'цифровой архив',
                enableToggle: true,
                handler: function () {
                    alert("событие");
                }
            }

        ]
    });




