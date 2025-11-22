/**
 * @private
 */
export type UserObject = {
    nodeType?: number;
    getAttribute?: (name: string) => string | null;
    hasAttribute?: (name: string) => boolean;
    setAttribute?: (name: string, value: string) => void;
    clone?: () => UserObject;
    cloneNode?: (deep: boolean) => UserObject;
};
