import { StateUpdater, Dispatch } from 'preact/hooks';
import { FunctionComponent } from 'preact';
import { GiftWrappingConfigProps, GiftOptionsViewProps, GiftFormDataType } from '../../types';
import { CartModel, Item } from '../../data/models';

export interface GiftOptionsProps {
    readOnlyFormOrderView: 'primary' | 'secondary';
    loading: boolean;
    isGiftOptionsApplied: boolean;
    updateLoading: boolean;
    showModal: boolean;
    isEditable: boolean;
    view: GiftOptionsViewProps;
    giftOptions: GiftFormDataType;
    item: Item;
    updateGiftOptions: (name: string, value?: string | boolean | number, extraGiftOptions?: Record<string, string | boolean | number>) => void;
    setShowModal: Dispatch<StateUpdater<boolean>>;
    giftWrappingConfig: GiftWrappingConfigProps[] | [];
    handleFormMouseLeave: () => void;
    fieldsDisabled: boolean;
    onInputChange: (event: Event) => void;
    onBlur: (event: Event) => void;
    cartData: CartModel | null;
    errorsField: Record<string, string>;
}
export declare const GiftOptions: FunctionComponent<GiftOptionsProps>;
//# sourceMappingURL=GiftOptions.d.ts.map