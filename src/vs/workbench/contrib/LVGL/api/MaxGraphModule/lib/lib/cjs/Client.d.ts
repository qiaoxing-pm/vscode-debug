/**
 * @category Configuration
 */
declare class Client {
    /**
     * Base path for all URLs in the core without trailing slash.
     *
     * When using a relative path, the path is relative to the URL of the page that contains the assignment. Trailing slashes are automatically removed.
     * @default '.'
     */
    static basePath: string;
    static setBasePath: (value: string) => void;
    /**
     * Base path for all images URLs in the core without trailing slash.
     *
     * When using a relative path, the path is relative to the URL of the page that
     * contains the assignment. Trailing slashes are automatically removed.
     * @default '.'
     */
    static imageBasePath: string;
    static setImageBasePath: (value: string) => void;
    /**
     * True if the current browser is Microsoft Edge.
     */
    static IS_EDGE: boolean;
    /**
     * True if the current browser is Netscape (including Firefox).
     */
    static IS_NS: boolean;
    /**
     * True if the current browser is Safari.
     */
    static IS_SF: boolean;
    /**
     * Returns true if the user agent contains Android.
     */
    static IS_ANDROID: boolean;
    /**
     * Returns true if the user agent is an iPad, iPhone or iPod.
     */
    static IS_IOS: boolean;
    /**
     * True if the current browser is Google Chrome.
     */
    static IS_GC: boolean;
    /**
     * True if the this is running inside a Chrome App.
     */
    static IS_CHROMEAPP: boolean;
    /**
     * True if the current browser is Firefox.
     */
    static IS_FF: boolean;
    /**
     * True if -moz-transform is available as a CSS style. This is the case
     * for all Firefox-based browsers newer than or equal 3, such as Camino,
     * Iceweasel, Seamonkey and Iceape.
     */
    static IS_MT: boolean;
    /**
     * True if the browser supports SVG.
     */
    static IS_SVG: boolean;
    /**
     * True if foreignObject support is not available. This is the case for
     * Opera, older SVG-based browsers and all versions of IE.
     */
    static NO_FO: boolean;
    /**
     * True if the client is a Windows.
     */
    static IS_WIN: boolean;
    /**
     * True if the client is a Mac.
     */
    static IS_MAC: boolean;
    /**
     * True if the client is a Chrome OS.
     */
    static IS_CHROMEOS: boolean;
    /**
     * True if this device supports touchstart/-move/-end events (Apple iOS,
     * Android, Chromebook and Chrome Browser on touch-enabled devices).
     */
    static IS_TOUCH: boolean;
    /**
     * True if this device supports Microsoft pointer events (always false on Macs).
     */
    static IS_POINTER: boolean;
    /**
     * True if the documents location does not start with http:// or https://.
     */
    static IS_LOCAL: boolean;
}
export default Client;
