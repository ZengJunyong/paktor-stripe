"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var stripe_table_component_1 = require('./stripe.table.component');
var FullComponent = (function (_super) {
    __extends(FullComponent, _super);
    function FullComponent(router) {
        _super.call(this, router);
        this.payments = [
            { amount: 1, itemName: 'GaiGai 1-dates package - No Installment' },
            { amount: 1980, itemName: 'GaiGai 3-dates package - No Installment' },
            { amount: 2190, itemName: 'GaiGai 5-dates package - No Installment' },
            { amount: 2790, itemName: 'GaiGai 10-dates package - No Installment' }
        ];
        this.plans = {
            '3': [
                { amount: 1, itemName: '3 dates package - 3 months', count: 3, id: 'live' },
                { amount: 730, itemName: '5 dates package - 3 months', count: 3, id: 'full-5-3' },
                { amount: 930, itemName: '10 dates package - 3 months', count: 3, id: 'full-10-3' }
            ],
            '6': [
                { amount: 330, itemName: '3 dates package - 6 months', count: 6, id: 'full-3-6' },
                { amount: 365, itemName: '5 dates package - 6 months', count: 6, id: 'full-5-6' },
                { amount: 465, itemName: '10 dates package - 6 months', count: 6, id: 'full-10-6' }
            ]
        };
    }
    FullComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'price.table.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FullComponent);
    return FullComponent;
}(stripe_table_component_1.StripeTableComponent));
exports.FullComponent = FullComponent;
//# sourceMappingURL=full.component.js.map