import { TaxTypes, UseOrderProductListProps } from '../../types';

export declare const useOrderProductList: ({ orderData, }: UseOrderProductListProps) => {
    loading: boolean;
    taxConfig: TaxTypes;
    order: {
        placeholderImage: string;
        returnNumber?: string | undefined;
        id?: string | undefined;
        orderStatusChangeDate?: string | undefined;
        number?: string | undefined;
        email?: string | undefined;
        token?: string | undefined;
        status?: string | undefined;
        isVirtual?: boolean | undefined;
        totalQuantity?: number | undefined;
        shippingMethod?: string | undefined;
        carrier?: string | undefined;
        orderDate?: string | undefined;
        returns?: import('../../data/models').OrdersReturnPropsModel[] | undefined;
        discounts?: {
            amount: import('../../types').MoneyProps;
            label: string;
        }[] | undefined;
        coupons?: {
            code: string;
        }[] | undefined;
        payments?: {
            code: string;
            name: string;
        }[] | undefined;
        shipping?: {
            code: string;
            amount: number;
            currency: string;
        } | undefined;
        shipments?: import('../../data/models').ShipmentsModel[] | undefined;
        items?: import('../../data/models').OrderItemModel[] | undefined;
        totalGiftcard?: import('../../types').MoneyProps | undefined;
        grandTotal?: import('../../types').MoneyProps | undefined;
        totalShipping?: import('../../types').MoneyProps | undefined;
        subtotal?: import('../../types').MoneyProps | undefined;
        totalTax?: import('../../types').MoneyProps | undefined;
        shippingAddress?: import('../../data/models').OrderAddressModel | undefined;
        billingAddress?: import('../../data/models').OrderAddressModel | undefined;
        availableActions?: import('../../types').AvailableActionsProps[] | undefined;
        taxes?: {
            amount: import('../../types').MoneyProps;
            rate: number;
            title: string;
        }[] | undefined;
    };
};
//# sourceMappingURL=useOrderProductList.d.ts.map