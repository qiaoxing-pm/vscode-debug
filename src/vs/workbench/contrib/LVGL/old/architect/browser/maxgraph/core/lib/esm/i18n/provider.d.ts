import { I18nProvider } from '../types.js';
/**
 * A {@link I18nProvider} that does nothing.
 *
 * @experimental subject to change or removal. The I18n system may be modified in the future without prior notice.
 * @since 0.17.0
 * @category I18n
 */
export declare class NoOpI18n implements I18nProvider {
    isEnabled(): boolean;
    get(): null;
    addResource(): void;
}
