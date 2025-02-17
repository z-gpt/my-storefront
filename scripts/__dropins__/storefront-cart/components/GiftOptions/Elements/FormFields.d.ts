import { FunctionComponent } from 'preact';
import { GiftOptionsViewProps, GiftFormDataType } from '../../../types';
import { CartModel } from '../../../data/models';
import { StateUpdater, Dispatch } from 'preact/hooks';

interface FormFieldsProps {
    view: GiftOptionsViewProps;
    item: CartModel['items'][0];
    giftOptions: GiftFormDataType;
    disabled: boolean;
    errorMessage: Record<string, string>;
    onInputChange: (value: Event) => void;
    onBlur: (event: Event) => void;
    setIsVisible: Dispatch<StateUpdater<Record<string, boolean>>>;
}
export declare const FormFields: FunctionComponent<FormFieldsProps>;
export {};
//# sourceMappingURL=FormFields.d.ts.map