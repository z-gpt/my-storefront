import { QueryType, ResponseData, OrderProps, OrderItemProps } from '../../types';
import { OrderItemModel, TransformedData } from '../models';

export declare const transformConfigurableOptions: (item: OrderItemProps) => Record<string, string> | undefined;
export declare const transformBundleOptions: (data: any) => {
    [key: string]: any;
} | null;
export declare const transformLinks: (links: {
    title: string;
}[]) => {
    count: number;
    result: string;
} | null;
export declare const transformOrderItems: (items: OrderItemProps[]) => OrderItemModel[];
export declare const transformOrderData: (orderData: OrderProps, returnRef?: string) => {
    billingAddress: {
        city: any;
        company: any;
        countryCode: any;
        fax: any;
        firstName: any;
        lastName: any;
        middleName: any;
        postCode: any;
        prefix: any;
        region: any;
        regionId: any;
        street: any;
        suffix: any;
        telephone: any;
        vatId: any;
    };
    shippingAddress: {
        city: any;
        company: any;
        countryCode: any;
        fax: any;
        firstName: any;
        lastName: any;
        middleName: any;
        postCode: any;
        prefix: any;
        region: any;
        regionId: any;
        street: any;
        suffix: any;
        telephone: any;
        vatId: any;
    };
    shipments: {
        items: {
            id: string;
            productName: string;
            productSku: string;
            quantityShipped: number;
            orderItem: OrderItemModel;
        }[];
        id: string;
        number: string;
        tracking: {
            carrier: string;
            number: string;
            title: string;
        }[];
        comments: {
            message: string;
            timestamp: string;
        }[];
    }[];
    items: OrderItemModel[];
    returns: import('../models').OrdersReturnPropsModel[];
    itemsEligibleForReturn: OrderItemModel[];
    totalQuantity: number;
    shippingMethod: string;
    shipping: {
        amount: any;
        currency: any;
        code: string;
    };
    payments: {
        code: string;
        name: string;
    }[];
    grandTotal: any;
    totalGiftcard: any;
    subtotalExclTax: any;
    subtotalInclTax: any;
    taxes: any;
    totalTax: any;
    totalShipping: any;
    discounts: any;
    token: string;
    email: string;
    status: string;
    number: string;
    id: string;
    carrier: string;
    coupons: {
        code: string;
    }[];
    orderDate: string;
    isVirtual: boolean;
    availableActions: import('../../types').AvailableActionsProps[];
    orderStatusChangeDate: string;
};
export declare const transformOrderDetails: <T extends "orderData">(queryType: QueryType, response: ResponseData<T>, returnRef?: string) => TransformedData<T>;
//# sourceMappingURL=transform-order-details.d.ts.map