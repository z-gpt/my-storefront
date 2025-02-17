import { FunctionComponent } from 'preact';
import { Dispatch, StateUpdater } from 'preact/hooks';
import { GiftWrappingConfigProps, GiftOptionsViewProps } from '../../../types';

interface GiftOptionModalProps {
    giftWrappingConfig: GiftWrappingConfigProps[];
    showModal: boolean;
    productName: string;
    view: GiftOptionsViewProps;
    setShowModal: Dispatch<StateUpdater<boolean>>;
    updateGiftOptions: (name: string, value?: string | boolean | number, extraGiftOptions?: Record<string, string | boolean | number>) => void;
}
export declare const GiftOptionModal: FunctionComponent<GiftOptionModalProps>;
export {};
//# sourceMappingURL=GiftOptionModal.d.ts.map