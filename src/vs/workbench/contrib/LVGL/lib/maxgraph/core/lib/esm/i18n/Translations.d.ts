import { I18nProvider } from '../types.js';
/**
 * Implements internationalization. You can provide any number of
 * resource files on the server using the following format for the
 * filename: name[-en].properties. The en stands for any lowercase
 * 2-character language shortcut (eg. de for german, fr for french).
 *
 * If the optional language extension is omitted, then the file is used as a
 * default resource which is loaded in all cases. If a properties file for a
 * specific language exists, then it is used to override the settings in the
 * default resource. All entries in the file are of the form key=value. The
 * values may then be accessed in code via {@link get}. Lines without
 * equal signs in the properties files are ignored.
 *
 * Resource files may either be added programmatically using
 * {@link add} or via a resource tag in the UI section of the
 * editor configuration file, eg:
 *
 * ```xml
 * <Editor>
 *   <ui>
 *     <resource basename="examples/resources/mxWorkflow"/>
 * ```
 *
 * The above element will load examples/resources/mxWorkflow.properties as well
 * as the language specific file for the current language, if it exists.
 *
 * Values may contain placeholders of the form {1}...{n} where each placeholder
 * is replaced with the value of the corresponding array element in the params
 * argument passed to {@link get}. The placeholder {1} maps to the first
 * element in the array (at index 0).
 *
 * See {@link Client.language} for more information on specifying the default
 * language or disabling all loading of resources.
 *
 * Lines that start with a # sign will be ignored.
 *
 * ## Special characters
 *
 * To use unicode characters, use the standard notation (eg. \u8fd1) or %u as a
 * prefix (eg. %u20AC will display a Euro sign). For normal hex encoded strings,
 * use % as a prefix, eg. %F6 will display a "o umlaut" (&ouml;).
 *
 * See {@link resourcesEncoded} to disable this. If you disable this, make sure that
 * your files are UTF-8 encoded.
 *
 * ## Loading default resources
 *
 * Call {@link loadResources} to load the default resources file for both {@link AbstractGraph} and {@link Editor}.
 *
 * @category I18n
 */
export default class Translations {
    static resources: {
        [key: string]: string;
    };
    /**
     * Specifies the extension used for language files.
     * @default '.txt'
     */
    static extension: string;
    /**
     * Specifies whether values in resource files are encoded with `\u` or percentage.
     * @default false
     */
    static resourcesEncoded: boolean;
    /**
     * Specifies if the default file for a given basename should be loaded.
     * @default true
     */
    static loadDefaultBundle: boolean;
    /**
     * Specifies if the specific language file for a given basename should be loaded.
     * @default true
     */
    static loadSpecialBundle: boolean;
    /**
     * Hook for subclassers to disable support for a given language.
     * This implementation returns `true` if `lan` is in {@link TranslationsConfig.languages}.
     *
     * @param lan The current language.
     */
    static isLanguageSupported: (lan: string) => boolean;
    /**
     * Hook for subclassers to return the URL for the special bundle. This
     * implementation returns basename + <extension> or null if
     * <loadDefaultBundle> is false.
     *
     * @param basename The basename for which the file should be loaded.
     * @param lan The current language.
     */
    static getDefaultBundle: (basename: string, lan: string) => string | null;
    /**
     * Hook for subclassers to return the URL for the special bundle. This
     * implementation returns `basename + '_' + lan + <extension>` or `null` if
     * {@link loadSpecialBundle} is `false` or `lan` equals {@link TranslationsConfig.getDefaultLanguage}.
     *
     * If {@link TranslationsConfig.getLanguages} is not `null` and {@link TranslationsConfig.getLanguage} contains
     * a dash, then this method checks if {@link isLanguageSupported} returns `true`
     * for the full language (including the dash). If that returns false the
     * first part of the language (up to the dash) will be tried as an extension.
     *
     * @param basename The basename for which the file should be loaded.
     * @param lan The language for which the file should be loaded.
     */
    static getSpecialBundle: (basename: string, lan: string) => string | null;
    /**
     * Adds the default and current language properties file for the specified
     * basename. Existing keys are overridden as new files are added. If no
     * callback is used then the request is synchronous.
     *
     * Example:
     *
     * At application startup, additional resources may be
     * added using the following code:
     *
     * ```javascript
     * Translations.add('resources/editor');
     * ```
     *
     * @param basename The basename for which the file should be loaded.
     * @param lan The language for which the file should be loaded.
     * @param callback Optional callback for asynchronous loading.
     */
    static add: (basename?: string | null, lan?: string | null, callback?: Function | null) => void;
    /**
     * Parses the key, value pairs in the specified
     * text and stores them as local resources.
     */
    static parse: (text: string) => void;
    /**
     * Returns the value for the specified resource key.
     *
     * Example:
     * To read the value for 'welcomeMessage', use the following:
     * ```javascript
     * let result = Translations.get('welcomeMessage') || '';
     * ```
     *
     * This would require an entry of the following form in
     * one of the English language resource files:
     * ```javascript
     * welcomeMessage=Welcome to mxGraph!
     * ```
     *
     * The part behind the || is the string value to be used if the given
     * resource is not available.
     *
     * @param key String that represents the key of the resource to be returned.
     * @param params Array of the values for the placeholders of the form {1}...{n}
     * to be replaced with in the resulting string.
     * @param defaultValue Optional string that specifies the default return value.
     */
    static get: (key?: string | null, params?: any[] | null, defaultValue?: string | null) => string | null;
    /**
     * Replaces the given placeholders with the given parameters.
     *
     * @param value String that contains the placeholders.
     * @param params Array of the values for the placeholders of the form {1}...{n}
     * to be replaced with in the resulting string.
     */
    static replacePlaceholders: (value: string, params: string[]) => string;
    /**
     * Loads all required resources asynchronously. Use this to load the graph and editor resources.
     *
     * @param callback Callback function for asynchronous loading.
     */
    static loadResources: (callback: Function) => void;
}
/**
 * A {@link I18nProvider} that uses {@link Translations} to manage translations.
 *
 * The configuration is done using {@link TranslationsConfig}.
 *
 * @experimental subject to change or removal. The I18n system may be modified in the future without prior notice.
 * @category I18n
 * @since 0.17.0
 */
export declare class TranslationsAsI18n implements I18nProvider {
    isEnabled(): boolean;
    get(key?: string | null, params?: any[] | null, defaultValue?: string | null): string | null;
    addResource(basename?: string | null, language?: string | null, callback?: Function | null): void;
}
