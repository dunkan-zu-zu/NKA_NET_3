/**
 * Created by belonovich on 14.01.2015.
 */


Ext.define("NKA_net_3.view.Order",
    {
        extend: 'Ext.panel.Panel',
        alias: 'widget.order',
        layout: {type: 'vbox'},

        autoScroll: true,
        margin: '50 0 0 50',
        items: [
            {
                xtype: 'panel',
                layout: 'hbox',
                margin: 10,
                items: [{
                    width: 300,
                    margin: 30,
                    xtype: 'textfield',
                    fieldLabel: 'Номер заказа'
                },
                    {
                        width: 300,
                        margin: 30,
                        padding: 20,
                        id: 'orderId',
                        xtype: 'textfield',
                        fieldLabel: 'Идентификатор'
                    }]
            },
            {
                margin: '0 0 0 500',
                xtype: 'checkbox',
                boxLabel: 'Признак предварительности'
            },
            {
                margin: '20 0 0 40',
                xtype: 'textareafield',
                grow: true,
                name: 'message',
                fieldLabel: 'Примечания',
                width: 500,
                anchor: '100%'
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                margin: '20 0 0 30',
                items:[
                    {
                        margin: '10px',
                        xtype: 'label',
                        text: 'Cтатус заказа:'
                    },{
                        xtype: 'combo',
                        id: 'AdminUserRole',
                        value: status != 'undefined' ? "Не определен...":status,
                        labelWidth: 40,
                        width: 230,
                        style: {
                            padding: '5px',
                            marginLeft: '10px'
                        },
                        store: Ext.create('Ext.data.Store', {
                            fields: ['name'],
                            data: [{
                                "name": "Поступил"
                            }, {
                                "name": "Принят"
                            },{
                                "name": "Отказано в приеме"
                            }, {
                                "name": "Выполнен"
                            }, {
                                "name": "Отказанно в выполнении"
                            }, {
                                "name": "Приостановлен"
                            }
                            ]
                        }),
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'name'
                    }
                ]
            }

        ]
    });




