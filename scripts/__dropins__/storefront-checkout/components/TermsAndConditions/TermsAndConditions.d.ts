import { FunctionComponent, VNode } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface TermsAndConditionsProps extends HTMLAttributes<HTMLFormElement> {
    isInitialized?: boolean;
    agreements?: VNode;
    error?: string;
}
export declare const TermsAndConditions: FunctionComponent<TermsAndConditionsProps>;
//# sourceMappingURL=TermsAndConditions.d.ts.map