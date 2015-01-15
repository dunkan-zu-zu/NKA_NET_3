/**
 * Created by Alexander on 17.6.14.
 */
Ext.define('NKA_net_3.view.OrderTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ordertab',
    style: {
        paddingTop: '25px',
        paddingLeft: '10px',
        paddingRight: '50px'
    },

    items: [{
        margin: '50 0 0 50',
        xtype: 'button',
        text: 'добавить заказ',
        handler: 'addOrder'
    },
        {
            margin: '5 0 0 50',
            width: "85%",
            xtype: 'grid',
            store: Ext.create('Ext.data.Store', {
                model: 'NKA_net_3.model.Orders',
                data: [{
                    'number': 1,
                    'data': '13.10.11',
                    'status': 'в работе',
                    'zaya': 'Василь Петрович Падла',
                    'addr': 'Задрыпенск, ул. подколодная',
                    'object': 'Нора',
                    'action': 'послать',
                    'doc': 'паспорт'
                },
                    {
                        'number': 3,
                        'data': '10.10.11',
                        'status': 'в работе',
                        'zaya': 'Василь Петрович Падла',
                        'addr': 'Задрыпенск, ул. подколодная',
                        'object': 'Нора',
                        'action': 'послать',
                        'doc': 'паспорт'
                    },
                    {
                        'number': 4,
                        'data': '9.10.11',
                        'status': 'в работе',
                        'zaya': 'Василь Петрович Падла',
                        'addr': 'Задрыпенск, ул. подколодная',
                        'object': 'Нора',
                        'action': 'послать',
                        'doc': 'паспорт'
                    },
                    {
                        'number': 7,
                        'data': '13.10.10',
                        'status': 'в работе',
                        'zaya': 'Василь Петрович Падла',
                        'addr': 'Задрыпенск, ул. подколодная',
                        'object': 'Нора',
                        'action': 'послать',
                        'doc': 'паспорт'
                    }]
            }),
            title: 'Заказы',
            columns: [
                {
                    text: '№:',
                    dataIndex: 'number'
                },
                {
                    text: 'дата',
                    dataIndex: 'data'
                },
                {
                    text: 'статус',
                    width: 100,
                    dataIndex: 'status'
                },
                {
                    text: 'заявитель',
                    flex: 1,
                    dataIndex: 'zaya'
                },
                {
                    text: 'адрес',
                    flex: 1,
                    dataIndex: 'addr'
                },
                {
                    text: 'объект',
                    flex: 1,
                    dataIndex: 'object'
                },
                {
                    text: 'действия',
                    flex: 1,
                    dataIndex: 'action'
                }
                ,
                {
                    text: 'документы',
                    flex: 1,
                    dataIndex: 'doc'
                }
            ]
        }]


});