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
var Per10Component = (function (_super) {
    __extends(Per10Component, _super);
    function Per10Component(router) {
        _super.call(this, router);
        this.payments = [
            { amount: 695, itemName: 'GaiGai 1-dates package - 10% OFF' },
            { amount: 1785, itemName: 'GaiGai 3-dates package - 10% OFF' },
            { amount: 1965, itemName: 'GaiGai 5-dates package - 10% OFF' },
            { amount: 2505, itemName: 'GaiGai 10-dates package - 10% OFF' }
        ];
        this.plans = {
            '3': [
                { amount: 595, itemName: '3 dates package - 10% discount - 3 months', count: 3, id: 'per10-3-3' },
                { amount: 655, itemName: '5 dates package - 10% discount - 3 months', count: 3, id: 'per10-5-3' },
                { amount: 835, itemName: '10 dates package - 10% discount - 3 months', count: 3, id: 'per10-10-3' }
            ],
            '6': [
                { amount: 297.5, itemName: '3 dates package - 10% discount - 6 months', count: 6, id: 'per10-3-6' },
                { amount: 327.5, itemName: '5 dates package - 10% discount - 6 months', count: 6, id: 'per10-5-6' },
                { amount: 417.5, itemName: '10 dates package - 10% discount - 6 months', count: 6, id: 'per10-10-6' }
            ]
        };
    }
    Per10Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'price.table.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Per10Component);
    return Per10Component;
}(stripe_table_component_1.StripeTableComponent));
exports.Per10Component = Per10Component;
//# sourceMappingURL=per10.component.js.map