"use strict";
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
var stripe_service_1 = require('./stripe.service');
var PayComponent = (function () {
    function PayComponent(route, stripeService) {
        this.route = route;
        this.stripeService = stripeService;
        this.card = { cardNumber: '4242424242424242', expMM: 12, expYY: 2017, CVC: '123' };
    }
    PayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (data) {
            _this.plan = data;
        });
    };
    PayComponent.prototype.submit = function () {
        var _this = this;
        var obj = this.card; // any better method to join 2 objects in ng2?
        obj.itemName = this.plan.itemName;
        obj.amount = this.plan.amount;
        obj.count = this.plan.count;
        this.stripeService.pay(obj).subscribe(function (result) { return _this.success = result.success; });
    };
    PayComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'pay.component.html',
            providers: [stripe_service_1.StripeService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, stripe_service_1.StripeService])
    ], PayComponent);
    return PayComponent;
}());
exports.PayComponent = PayComponent;
//# sourceMappingURL=pay.component.js.map