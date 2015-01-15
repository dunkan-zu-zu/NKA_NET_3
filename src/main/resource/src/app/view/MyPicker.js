/**
 * Created by belonovich on 13.01.2015.
 */
Ext.define('NKA_net_3.view.MyPicker', {
    extend: 'Ext.form.field.Picker',
    alias: 'widget.mypicker',
    requires: ['Ext.form.field.Date', 'Ext.picker.Time', 'Ext.view.BoundListKeyNav', 'Ext.Date'],
    alternateClassName: ['MyPicker'],

    triggerCls: Ext.baseCSSPrefix + 'form-time-trigger',

    createPicker: function () {
        var me = this,
            picker = new Ext.panel.Panel({
                pickerField: me,
                floating: true,
                hidden: true,
                ownerCt: this.ownerCt,
                renderTo: document.body,
                height: '20px',
                date: [
                    {
                        xtype: 'label',
                        text: 'Product'
                    },
                    {
                        xtype: 'label',
                        text: 'Tagline'
                    }
                ]
            });

        return picker;
    }
});