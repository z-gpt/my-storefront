import { OrderDataModel, OrderItemModel } from '../data/models';

export declare const returnStatusList: string[];
export declare const deprecatedAdjustments: (order: OrderDataModel) => {
    returnableQuantity: number;
    currentReturnOrderQuantity?: number | undefined;
    eligibleForReturn: boolean;
    productSku?: string | undefined;
    type?: string | undefined;
    discounted?: boolean | undefined;
    id: string;
    productName?: string | undefined;
    productUrlKey?: string | undefined;
    regularPrice?: import('../types/index').MoneyProps | undefined;
    price?: import('../types/index').MoneyProps | undefined;
    product?: import('../data/models').OrderItemProductModel | undefined;
    selectedOptions?: {
        label: string;
        value: any;
    }[] | undefined;
    totalQuantity?: number | undefined;
    thumbnail?: {
        label: string;
        url: string;
    } | undefined;
    downloadableLinks: {
        count: number;
        result: string;
    } | null;
    itemPrices: {
        priceIncludingTax: import('../types/index').MoneyProps;
        originalPrice: import('../types/index').MoneyProps;
        originalPriceIncludingTax: import('../types/index').MoneyProps;
        price: import('../types/index').MoneyProps;
        discounts: [{
            label: string;
            amount: {
                value: number;
            };
        }];
    };
    bundleOptions: Record<string, string> | null;
    totalInclTax: import('../types/index').MoneyProps;
    priceInclTax: import('../types/index').MoneyProps;
    total: import('../types/index').MoneyProps;
    configurableOptions: Record<string, string | number | boolean> | undefined;
    giftCard?: {
        senderName: string;
        senderEmail: string;
        recipientEmail: string;
        recipientName: string;
        message: string;
    } | undefined;
    quantityCanceled: number;
    quantityInvoiced: number;
    quantityOrdered: number;
    quantityRefunded: number;
    quantityReturned: number;
    quantityShipped: number;
    requestQuantity: number;
}[];
export declare const extractFilteredItems: (order: any) => {
    returnedList: any[];
    modifyOrder: OrderItemModel[];
};
//# sourceMappingURL=deprecatedAdjustments.d.ts.map