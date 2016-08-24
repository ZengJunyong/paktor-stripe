"use strict";
var StripeTableComponent = (function () {
    function StripeTableComponent(router) {
        this.router = router;
    }
    StripeTableComponent.prototype.choosePayment = function (payment) {
        this.router.navigate(['/pay', payment]);
    };
    return StripeTableComponent;
}());
exports.StripeTableComponent = StripeTableComponent;
//# sourceMappingURL=stripe.table.component.js.map