"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCancel = void 0;
const cancelOrder_1 = require("@/order/api/cancelOrder");
const useGetStoreConfig_1 = require("@/order/hooks/api/useGetStoreConfig");
const OrderCancelReasonsForm_1 = require("@/order/components/OrderCancelReasonsForm");
const OrderCancel = ({ orderId }) => {
    const storeConfig = (0, useGetStoreConfig_1.useGetStoreConfig)();
    const orderCancellationReasons = storeConfig?.orderCancellationReasons ?? [];
    const transformCancelReasons = (reasons) => {
        return reasons.map((reason, index) => {
            return {
                text: reason?.description,
                value: index.toString(),
            };
        });
    };
    return (<>
      <OrderCancelReasonsForm_1.OrderCancelReasonsForm orderId={orderId} cancelOrder={cancelOrder_1.cancelOrder} cancelReasons={transformCancelReasons(orderCancellationReasons)}/>
    </>);
};
exports.OrderCancel = OrderCancel;
