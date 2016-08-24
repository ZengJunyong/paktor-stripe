"use strict";
var router_1 = require('@angular/router');
var per10_component_1 = require('./per10.component');
var full_component_1 = require('./full.component');
var sdn_component_1 = require('./sdn.component');
var pay_component_1 = require('./pay.component');
var routes = [
    {
        path: '',
        redirectTo: '/full',
        pathMatch: 'full'
    },
    {
        path: 'full',
        component: full_component_1.FullComponent
    },
    {
        path: 'per10',
        component: per10_component_1.Per10Component
    },
    {
        path: 'sdn',
        component: sdn_component_1.SDNComponent
    },
    {
        path: 'pay',
        component: pay_component_1.PayComponent
    }
];
var appRoutes = routes.slice();
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map