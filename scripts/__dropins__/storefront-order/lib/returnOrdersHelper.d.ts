import { OrderDataModel, OrderItemModel } from '../data/models';

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
export declare const cleanObjectKeys: (obj: KeyValueObject) => KeyValueObject;
export declare const modifyFieldsConfig: (fieldsConfig: any, index: number) => any;
export declare const replicateEntries: (objects: any[], n: number) => any[];
export declare const normalizeAttributes: (obj: Record<string, string>) => {
    selectedCustomAttributes: Array<{
        attributeCode: string;
        value: string;
    }>;
    enteredCustomAttributes: Array<{
        attributeCode: string;
        value: string;
    }>;
};
export declare const formatReturnStatus: (str: string) => ReturnStatusValue | '';
export declare const extractFilteredItems: (order: OrderDataModel) => {
    returnedList: OrderItemModel[];
    modifyOrder: (OrderItemModel | null)[];
};
export {};
//# sourceMappingURL=returnOrdersHelper.d.ts.map