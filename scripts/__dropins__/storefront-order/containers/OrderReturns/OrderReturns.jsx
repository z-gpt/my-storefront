"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReturns = void 0;
const components_1 = require("@/order/components");
const useOrderReturns_1 = require("@/order/hooks/containers/useOrderReturns");
const lib_1 = require("@adobe/elsie/lib");
const i18n_1 = require("@adobe/elsie/i18n");
const hooks_1 = require("@/order/hooks");
const OrderReturns = ({ slots, className, orderData, withHeader, withThumbnails, routeReturnDetails, routeTracking, }) => {
    const { loading, returnOrderList } = (0, useOrderReturns_1.useOrderReturns)({ orderData });
    const isMobile = (0, hooks_1.useIsMobile)();
    const minifiedViewKey = 'fullSizeView';
    const translations = (0, i18n_1.useText)({
        minifiedViewTitle: `Order.Returns.${minifiedViewKey}.returnsList.minifiedViewTitle`,
        ariaLabelLink: `Order.Returns.${minifiedViewKey}.returnsList.ariaLabelLink`,
        emptyOrdersListMessage: `Order.Returns.${minifiedViewKey}.returnsList.emptyOrdersListMessage`,
        orderNumber: `Order.Returns.${minifiedViewKey}.returnsList.orderNumber`,
        carrier: `Order.Returns.${minifiedViewKey}.returnsList.carrier`,
        itemsText: `Order.Returns.${minifiedViewKey}.returnsList.itemsText`,
    });
    if (loading || !returnOrderList.length) {
        return (<div data-testid="orderReturnsLoader">
        <components_1.CardLoader withCard={false}/>
      </div>);
    }
    return (<div className={(0, lib_1.classes)(['order-order-returns', className])}>
      <components_1.ReturnsListContent pageInfo={{
            pageSize: 1,
            totalPages: 1,
            currentPage: 1,
        }} slots={slots} isMobile={isMobile} isOrderReturns={true} returnOrderList={returnOrderList} translations={translations} withHeader={withHeader} withThumbnails={withThumbnails} minifiedView={false} routeReturnDetails={routeReturnDetails} routeTracking={routeTracking}/>
    </div>);
};
exports.OrderReturns = OrderReturns;
