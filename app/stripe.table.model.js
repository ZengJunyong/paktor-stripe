"use strict";
var StripeTableModel = (function () {
    function StripeTableModel(router) {
        this.router = router;
    }
    StripeTableModel.prototype.choosePayment = function (payment) {
        this.router.navigate(['/pay', payment]);
    };
    return StripeTableModel;
}());
exports.StripeTableModel = StripeTableModel;
//# sourceMappingURL=stripe.table.model.js.map