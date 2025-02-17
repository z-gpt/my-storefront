import { CartModel } from '../data/models';
import { GiftWrappingConfigProps } from '../types';

export declare const DEFAULT_FORM_STATE: {
    recipientName: string;
    senderName: string;
    message: string;
};
export declare const DEFAULT_CHECKBOXES_STATE: {
    giftReceiptIncluded: boolean;
    printedCardIncluded: boolean;
    isGiftWrappingSelected: boolean;
};
export declare const shouldShowGiftMessage: (item: CartModel['items'][0], isProductView: boolean) => boolean | null | undefined;
export declare const getSelectedGiftWrapping: (giftWrappingOptions: GiftWrappingConfigProps[] | [
]) => GiftWrappingConfigProps;
//# sourceMappingURL=giftOptionsHelper.d.ts.map