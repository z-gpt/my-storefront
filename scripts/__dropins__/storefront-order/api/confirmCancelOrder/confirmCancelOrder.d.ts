/********************************************************************
 *
 *  Copyright 2024 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 *******************************************************************/
export declare const confirmCancelOrder: (orderId: string, confirmationKey: string) => Promise<{
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
            orderItem: import('../../data/models').OrderItemModel;
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
    items: import('../../data/models').OrderItemModel[];
    returns: import('../../data/models').OrdersReturnPropsModel[];
    itemsEligibleForReturn: import('../../data/models').OrderItemModel[];
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
    availableActions: import('../../types/index').AvailableActionsProps[];
    orderStatusChangeDate: string;
} | null>;
//# sourceMappingURL=confirmCancelOrder.d.ts.map