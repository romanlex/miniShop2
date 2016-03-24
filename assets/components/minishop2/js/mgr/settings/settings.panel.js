miniShop2.panel.Settings = function (config) {
    config = config || {};
    Ext.apply(config, {
        cls: 'container',
        items: [{
            html: '<h2>' + _('minishop2') + ' :: ' + _('ms2_settings') + '</h2>',
            cls: 'modx-page-header',
        }, {
            xtype: 'modx-tabs',
            items: [{
                title: _('ms2_deliveries'),
                deferredRender: true,
                items: [{
                    html: _('ms2_deliveries_intro'),
                    bodyCssClass: 'panel-desc',
                }, {
                    xtype: 'minishop2-grid-delivery',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('ms2_payments'),
                deferredRender: true,
                items: [{
                    html: _('ms2_payments_intro'),
                    bodyCssClass: 'panel-desc',
                }, {
                    xtype: 'minishop2-grid-payment',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('ms2_statuses'),
                deferredRender: true,
                items: [{
                    html: _('ms2_statuses_intro'),
                    bodyCssClass: 'panel-desc',
                }, {
                    xtype: 'minishop2-grid-status',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('ms2_vendors'),
                deferredRender: true,
                items: [{
                    html: _('ms2_vendors_intro'),
                    bodyCssClass: 'panel-desc',
                }, {
                    xtype: 'minishop2-grid-vendor',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('ms2_links'),
                deferredRender: true,
                items: [{
                    html: _('ms2_links_intro'),
                    bodyCssClass: 'panel-desc',
                }, {
                    xtype: 'minishop2-grid-link',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('ms2_options'),
                deferredRender: true,
                items: [{
                    html: _('ms2_options_intro'),
                    bodyCssClass: 'panel-desc',
                }, {
                    layout: 'column',
                    cls: 'main-wrapper',
                    items: [{
                        xtype: 'minishop2-tree-option-categories',
                        id: 'minishop2-tree-categories-panel',
                        optionGrid: 'minishop2-grid-option',
                        columnWidth: .2
                    }, {
                        xtype: 'minishop2-grid-option',
                        columnWidth: .8
                    }]
                }]
            }]
        }]
    });
    miniShop2.panel.Settings.superclass.constructor.call(this, config);
};
Ext.extend(miniShop2.panel.Settings, MODx.Panel);
Ext.reg('minishop2-panel-settings', miniShop2.panel.Settings);