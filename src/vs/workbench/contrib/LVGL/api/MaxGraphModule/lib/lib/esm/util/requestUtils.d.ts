import MaxXmlRequest from './MaxXmlRequest.js';
/**
 * Loads the specified URL *synchronously* and returns the {@link MaxXmlRequest}.
 * Throws an exception if the file cannot be loaded.
 * See {@link get} for  an asynchronous implementation.
 *
 * Example:
 *
 * ```javascript
 * try {
 *   const req = load(filename);
 *   cont root = req.getDocumentElement();
 *   // Process XML DOM...
 * } catch (e) {
 *   console.error(`Cannot load $filename`, e);
 * }
 * ```
 *
 * @param url URL to get the data from.
 */
export declare const load: (url: string) => MaxXmlRequest;
/**
 * Loads the specified URL *asynchronously* and invokes the given functions depending on the request status.
 * Returns the {@link MaxXmlRequest} in use.
 * Both functions take the {@link MaxXmlRequest} as the only parameter.
 * See {@link load} for a synchronous implementation.
 *
 * Example:
 *
 * ```javascript
 * get(url, (req) => {
 *    const node = req.getDocumentElement();
 *    // Process XML DOM...
 * });
 * ```
 *
 * So for example, to load a diagram into an existing graph model, the following code is used.
 *
 * ```javascript
 * get(url, (req) => {
 *   const node = req.getDocumentElement();
 *   const dec = new Codec(node.ownerDocument);
 *   dec.decode(node, graph.getDataModel());
 * });
 * ```
 *
 * @param url URL to get the data from.
 * @param onload Optional function to execute for a successful response.
 * @param onerror Optional function to execute on error.
 * @param binary Optional boolean parameter that specifies if the request is binary.
 * @param timeout Optional timeout in ms before calling ontimeout.
 * @param ontimeout Optional function to execute on timeout.
 * @param headers Optional with headers, eg. {'Authorization': 'token xyz'}
 */
export declare const get: (url: string, onload?: Function | null, onerror?: Function | null, binary?: boolean, timeout?: number | null, ontimeout?: Function | null, headers?: {
    [key: string]: string;
} | null) => MaxXmlRequest;
/**
 * Loads the URLs in the given array *asynchronously* and invokes the given function
 * if all requests returned with a valid 2xx status. The error handler is invoked
 * once on the first error or invalid response.
 *
 * @param urls Array of URLs to be loaded.
 * @param onload Callback with array of {@link MaxXmlRequest}s.
 * @param onerror Optional function to execute on error.
 */
export declare const getAll: (urls: string[], onload: (requests: MaxXmlRequest[]) => void, onerror: () => void) => void;
/**
 * Posts the specified params to the given URL *asynchronously* and invokes the given functions depending on the request status.
 * Returns the {@link MaxXmlRequest} in use.
 * Both functions take the {@link MaxXmlRequest} as the only parameter.
 * Make sure to use encodeURIComponent for the parameter values.
 *
 * Example:
 *
 * ```javascript
 * post(url, 'key=value', (req) => {
 *   alert('Ready: ' + req.isReady() + ' Status: ' + req.getStatus());
 *  // Process req.getDocumentElement() using DOM API if OK...
 * });
 * ```
 *
 * @param url URL to get the data from.
 * @param params Parameters for the post request.
 * @param onload Optional function to execute for a successful response.
 * @param onerror Optional function to execute on error.
 */
export declare const post: (url: string, params: string | null | undefined, onload: Function, onerror?: Function | null) => void;
/**
 * Submits the given parameters to the specified URL using {@link MaxXmlRequest.simulate} and returns the {@link MaxXmlRequest}.
 * Make sure to use encodeURIComponent for the parameter values.
 *
 * @param url URL to get the data from.
 * @param params Parameters for the form.
 * @param doc Document to create the form in.
 * @param target Target to send the form result to.
 */
export declare const submit: (url: string, params: string, doc: XMLDocument, target: string) => void;
