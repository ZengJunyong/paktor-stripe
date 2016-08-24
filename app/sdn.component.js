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
var SDNComponent = (function (_super) {
    __extends(SDNComponent, _super);
    function SDNComponent(router) {
        _super.call(this, router);
        this.payments = [
            { amount: 330, itemName: 'GaiGai 1-dates package' },
            { amount: 1485, itemName: 'GaiGai 3-dates package' },
            { amount: 1665, itemName: 'GaiGai 5-dates package' },
            { amount: 2205, itemName: 'GaiGai 10-dates package' }
        ];
        this.plans = {
            '3': [
                { amount: 495, itemName: '3 dates package - 10% discount - 3 months (SDN Promo)', count: 3 },
                { amount: 555, itemName: '5 dates package - 10% discount - 3 months (SDN Promo)', count: 3 },
                { amount: 735, itemName: '10 dates package - 10% discount - 3 months (SDN Promo)', count: 3 }
            ],
            '6': [
                { amount: 247.5, itemName: '3 dates package - 10% discount - 6 months (SDN Promo)', count: 6 },
                { amount: 277.5, itemName: '5 dates package - 10% discount - 6 months (SDN Promo)', count: 6 },
                { amount: 367.5, itemName: '10 dates package - 10% discount - 6 months (SDN Promo)', count: 6 }
            ]
        };
    }
    SDNComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'price.table.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SDNComponent);
    return SDNComponent;
}(stripe_table_component_1.StripeTableComponent));
exports.SDNComponent = SDNComponent;
//# sourceMappingURL=sdn.component.js.map