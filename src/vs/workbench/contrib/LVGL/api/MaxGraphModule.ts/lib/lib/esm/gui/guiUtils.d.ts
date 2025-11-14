import MaxWindow from './MaxWindow.js';
/**
 * Shows the specified text content in a new {@link MaxWindow} or a new browser window if `isInternalWindow` is `false`.
 *
 * @param content String that specifies the text to be displayed.
 * @param isInternalWindow Optional boolean indicating if an {@link MaxWindow} should be used instead of a new browser window. Default is `false`.
 */
export declare const popup: (content: string, isInternalWindow?: boolean) => void;
/**
 * Displays the given error message in a new <MaxWindow> of the given width.
 * If close is true then an additional close button is added to the window.
 * The optional icon specifies the icon to be used for the window. Default is {@link GuiConfig.errorImage}.
 *
 * @param message String specifying the message to be displayed.
 * @param width Integer specifying the width of the window.
 * @param close Optional boolean indicating whether to add a close button.
 * @param icon Optional icon for the window decoration.
 */
export declare const error: (message: string, width: number, close: boolean, icon?: string | null) => MaxWindow;
/**
 * A global configuration for maxGraph GUI.
 */
export declare const GuiConfig: {
    errorResource: string;
    /**
     * Specifies the resource key for the label of the close button. If the
     * resource for this key does not exist then the value is used as
     * the label. Default is 'close'.
     */
    closeResource: string;
    /**
     * Defines the image used for error dialogs.
     */
    errorImage: string;
};
