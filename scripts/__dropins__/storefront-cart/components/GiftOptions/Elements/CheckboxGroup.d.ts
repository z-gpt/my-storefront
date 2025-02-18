import { FunctionComponent } from 'preact';
import { GiftOptionsViewProps, GiftWrappingConfigProps, GiftFormDataType } from '../../../types';
import { CartModel, Item } from '../../../data/models';
import { StateUpdater, Dispatch } from 'preact/hooks';

interface CheckboxGroupProps {
    className: string;
    view: GiftOptionsViewProps;
    item: Item;
    giftOptions: GiftFormDataType;
    disabled: boolean;
    onInputChange: (event: Event) => void;
    cartData: CartModel | null;
    giftWrappingConfig: GiftWrappingConfigProps[] | [];
    setShowModal: Dispatch<StateUpdater<boolean>>;
}
export declare const CheckboxGroup: FunctionComponent<CheckboxGroupProps>;
export {};
//# sourceMappingURL=CheckboxGroup.d.ts.map