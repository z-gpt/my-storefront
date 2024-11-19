import { OrderDataModel } from '../data/models';

declare const returnStatus: {
    readonly PENDING: "pending";
    readonly AUTHORIZED: "authorized";
    readonly PARTIALLY_AUTHORIZED: "partiallyAuthorized";
    readonly RECEIVED: "received";
    readonly PARTIALLY_RECEIVED: "partiallyReceived";
    readonly APPROVED: "approved";
    readonly PARTIALLY_APPROVED: "partiallyApproved";
    readonly REJECTED: "rejected";
    readonly PARTIALLY_REJECTED: "partiallyRejected";
    readonly DENIED: "denied";
    readonly PROCESSED_AND_CLOSED: "processedAndClosed";
    readonly CLOSED: "closed";
};
type ReturnStatusKey = keyof typeof returnStatus;
type ReturnStatusValue = (typeof returnStatus)[ReturnStatusKey];
type KeyValueObject = {
    [key: string]: any;
};
type returnAttributesType = Array<{
    attributeCode: string;
    value: string;
}>;
type normalizeAttributesTypes = {
    selectedCustomAttributes: returnAttributesType;
    enteredCustomAttributes: returnAttributesType;
};
export declare const cleanObjectKeys: (obj: KeyValueObject) => KeyValueObject;
export declare const modifyFieldsConfig: (fieldsConfig: any, index: number) => any;
export declare const replicateEntries: (objects: any[], n: number) => any[];
export declare const normalizeAttributes: (obj: Record<string, string>) => normalizeAttributesTypes;
export declare const formatReturnStatus: (str: string) => ReturnStatusValue | '';
export declare const extractFilteredItems: (order: OrderDataModel) => {
    returnedList: {
        totalQuantity: number;
        currentReturnOrderQuantity?: number | undefined;
        eligibleForReturn: boolean;
        productSku?: string | undefined;
        type?: string | undefined;
        discounted?: boolean | undefined;
        id: string;
        productName?: string | undefined;
        productUrlKey?: string | undefined;
        regularPrice?: import('../types').MoneyProps | undefined;
        price?: import('../types').MoneyProps | undefined;
        product?: import('../data/models').OrderItemProductModel | undefined;
        selectedOptions?: {
            label: string;
            value: any;
        }[] | undefined;
        thumbnail?: {
            label: string;
            url: string;
        } | undefined;
        downloadableLinks: {
            count: number;
            result: string;
        } | null;
        itemPrices: {
            priceIncludingTax: import('../types').MoneyProps;
            originalPrice: import('../types').MoneyProps;
            originalPriceIncludingTax: import('../types').MoneyProps;
            price: import('../types').MoneyProps;
            discounts: [{
                label: string;
                amount: {
                    value: number;
                };
            }];
        };
        bundleOptions: Record<string, string> | null;
        totalInclTax: import('../types').MoneyProps;
        priceInclTax: import('../types').MoneyProps;
        total: import('../types').MoneyProps;
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
        returnableQuantity?: number | undefined;
        quantityReturnRequested: number;
    }[];
    modifyOrder: (import('../data/models').OrderItemModel | null)[];
};
export declare const processFormElement: (formsRef: any) => any[];
export {};
//# sourceMappingURL=returnOrdersHelper.d.ts.map