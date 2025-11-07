import type { I18nProvider, Logger } from '../types.js';
/**
 * Global configuration for maxGraph.
 *
 * @experimental subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.11.0
 * @category Configuration
 */
export declare const GlobalConfig: {
    /**
     * Configure the {@link I18nProvider} to use for all translated messages.
     *
     * Available implementations provided by maxGraph are:
     * * {@link NoOpI18n} - Default implementation that does nothing.
     * * {@link TranslationsAsI18n} - Uses {@link Translations} to manage translations.
     *
     * To change the i18n provider, set this property to an instance of the desired provider:
     * ```js
     * // To use the i18n system provided by maxGraph
     * GlobalConfig.i18n = new TranslationsAsI18n();
     * ```
     *
     * @default {@link NoOpI18n}
     * @since 0.17.0
     */
    i18n: I18nProvider;
    /**
     * Configure the logger to use for all log messages.
     *
     * Available implementations provided by maxGraph are:
     * * {@link ConsoleLogger} - Directs logs to the browser console.
     * * {@link NoOpLogger} - Default implementation that does nothing.
     * * {@link MaxLogAsLogger} - Directs logs to {@link MaxLog}.
     *
     * To change the logger, set this property to an instance of the desired logger:
     * ```js
     * // To direct logs to the browser console
     * GlobalConfig.logger = new ConsoleLogger();
     * // To direct logs to MaxLog
     * GlobalConfig.logger = new MaxLogAsLogger();
     * ```
     *
     * @default {@link NoOpLogger}
     */
    logger: Logger;
};
/**
 * Configure style defaults for maxGraph.
 *
 * @experimental subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
export declare const StyleDefaultsConfig: {
    /**
     * Defines the color to be used to draw shadows in shapes and windows.
     * @default {@link SHADOWCOLOR}
     */
    shadowColor: string;
    /**
     * Specifies the x-offset of the shadow.
     * @default {@link SHADOW_OFFSET_X}
     */
    shadowOffsetX: number;
    /**
     * Specifies the y-offset of the shadow.
     * @default {@link SHADOW_OFFSET_Y}
     */
    shadowOffsetY: number;
    /**
     * Defines the opacity for shadow. Possible values are between 1 (opaque) and 0 (transparent).
     * @default {@link SHADOW_OPACITY}
     */
    shadowOpacity: number;
};
/**
 * Resets {@link StyleDefaultsConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
export declare const resetStyleDefaultsConfig: () => void;
