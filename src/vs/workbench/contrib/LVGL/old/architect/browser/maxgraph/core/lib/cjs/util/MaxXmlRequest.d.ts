/**
 * This class provides a cross-browser abstraction for Ajax requests. It is an XML HTTP request wrapper.
 *
 * See also {@link get}, {@link getAll}, {@link post} and {@link load}.
 *
 * ### Encoding
 *
 * For encoding parameter values, the built-in encodeURIComponent JavaScript
 * method must be used. For automatic encoding of post data in {@link Editor} the
 * {@link Editor.escapePostData} switch can be set to true (default). The encoding
 * will be carried out using the conte type of the page. That is, the page
 * containing the editor should contain a meta tag in the header, e.g.
 * ```html
 * <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 * ```
 *
 * @example
 * ```js
 * const onload = function(req) {
 *   window.alert(req.getDocumentElement());
 * }
 *
 * const onerror = function(req) {
 *   window.alert('Error');
 * }
 * new MaxXmlRequest(url, 'key=value').send(onload, onerror);
 * ```
 *
 * ### Sending requests
 *
 * Sends an asynchronous POST request to the specified URL.
 *
 * @example
 * ```js
 * const req = new MaxXmlRequest(url, 'key=value', 'POST', false);
 * req.send();
 * window.alert(req.getDocumentElement());
 * ```
 *
 * Sends a synchronous POST request to the specified URL.
 *
 * @example
 * ```js
 * const encoder = new Codec();
 * const result = encoder.encode(graph.getDataModel());
 * const xml = encodeURIComponent(xmlUtils.getXml(result));
 * new MaxXmlRequest(url, `xml=${xml}`).send();
 * ```
 *
 * Sends an encoded graph model to the specified URL using xml as the
 * parameter name. The parameter can then be retrieved in C# as follows:
 *
 * ```csharp
 * string xml = HttpUtility.UrlDecode(context.Request.Params["xml"]);
 * ```
 *
 * Or in Java as follows:
 *
 * ```java
 * String xml = URLDecoder.decode(request.getParameter("xml"), "UTF-8").replace("\n", "&#xa;");
 * ```
 *
 * Note that the linefeed should only be replaced if the XML is processed in Java, for example when creating an image.
 */
export default class MaxXmlRequest {
    constructor(url: string, params?: string | null, method?: 'GET' | 'POST', async?: boolean, username?: string | null, password?: string | null);
    /**
     * Holds the target URL of the request.
     */
    url: string;
    /**
     * Holds the form encoded data for the POST request.
     */
    params: string | null;
    /**
     * Specifies the request method. Possible values are POST and GET. Default
     * is POST.
     */
    method: 'GET' | 'POST';
    /**
     * Boolean indicating if the request is asynchronous.
     */
    async: boolean;
    /**
     * Boolean indicating if the request is binary. This option is ignored in IE.
     * In all other browsers the requested mime type is set to
     * text/plain; charset=x-user-defined. Default is false.
     *
     * @default false
     */
    binary: boolean;
    /**
     * Specifies if withCredentials should be used in HTML5-compliant browsers. Default is false.
     *
     * @default false
     */
    withCredentials: boolean;
    /**
     * Specifies the username to be used for authentication.
     */
    username: string | null;
    /**
     * Specifies the password to be used for authentication.
     */
    password: string | null;
    /**
     * Holds the inner, browser-specific request object.
     */
    request: any;
    /**
     * Specifies if request values should be decoded as URIs before setting the
     * textarea value in {@link simulate}. Defaults to false for backwards compatibility,
     * to avoid another decode on the server this should be set to true.
     */
    decodeSimulateValues: boolean;
    /**
     * Returns {@link binary}.
     */
    isBinary(): boolean;
    /**
     * Sets {@link binary}.
     *
     * @param value
     */
    setBinary(value: boolean): void;
    /**
     * Returns the response as a string.
     */
    getText(): string;
    /**
     * Returns true if the response is ready.
     */
    isReady(): boolean;
    /**
     * Returns the document element of the response XML document.
     */
    getDocumentElement(): HTMLElement | null;
    /**
     * Returns the response as an XML document. Use {@link getDocumentElement} to get
     * the document element of the XML document.
     */
    getXml(): XMLDocument;
    /**
     * Returns the status as a number, e.g. 404 for "Not found" or 200 for "OK".
     * Note: The NS_ERROR_NOT_AVAILABLE for invalid responses cannot be caught.
     */
    getStatus(): number;
    /**
     * Creates and returns the inner {@link request} object.
     */
    create(): any;
    /**
     * Send the {@link request} to the target URL using the specified functions to process the response asynchronously.
     *
     * Note: Due to technical limitations, `onerror` is currently ignored.
     *
     * @param onload Function to be invoked if a successful response was received.
     * @param onerror Function to be called on any error. Unused in this implementation, intended for overridden function.
     * @param timeout Optional timeout in ms before calling ontimeout.
     * @param ontimeout Optional function to execute on timeout.
     */
    send(onload?: Function | null, onerror?: Function | null, timeout?: number | null, ontimeout?: Function | null): void;
    /**
     * Sets the headers for the given request and parameters. This sets the
     * content-type to application/x-www-form-urlencoded if any params exist.
     *
     * @example
     * ```JavaScript
     * request.setRequestHeaders = function(request, params)
     * {
     *   if (params != null)
     *   {
     *     request.setRequestHeader('Content-Type',
     *             'multipart/form-data');
     *     request.setRequestHeader('Content-Length',
     *             params.length);
     *   }
     * };
     * ```
     *
     * Use the code above before calling {@link send} if you require a
     * multipart/form-data request.
     *
     * @param request
     * @param params
     */
    setRequestHeaders(request: any, params: any): void;
    /**
     * Creates and posts a request to the given target URL using a dynamically
     * created form inside the given document.
     *
     * @param doc Document that contains the form element.
     * @param target Target to send the form result to.
     */
    simulate(doc: any, target?: string | null): void;
}
