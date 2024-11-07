"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrderReturns = void 0;
const api_1 = require("@/order/api");
const event_bus_1 = require("@adobe/event-bus");
const hooks_1 = require("preact/hooks");
const useOrderReturns = ({ orderData }) => {
    const [loading, setLoading] = (0, hooks_1.useState)(true);
    const [order, setOrder] = (0, hooks_1.useState)(orderData);
    const [returnOrderList, setReturnOrderList] = (0, hooks_1.useState)([]);
    const handleGetOrderReturns = (0, hooks_1.useCallback)(async (order) => {
        if (!order)
            return [];
        return order.token
            ? await (0, api_1.getOrdersReturns)(false, order?.token)
            : await (0, api_1.getOrdersReturns)(true, order?.number);
    }, []);
    (0, hooks_1.useEffect)(() => {
        const event = event_bus_1.events.on('order/data', (order) => {
            setOrder(order);
            handleGetOrderReturns(order).then((response) => {
                if (response.length) {
                    setReturnOrderList(response);
                }
            });
        }, { eager: true });
        setLoading(false);
        return () => {
            event?.off();
        };
    }, [handleGetOrderReturns]);
    return { loading, order, returnOrderList };
};
exports.useOrderReturns = useOrderReturns;
