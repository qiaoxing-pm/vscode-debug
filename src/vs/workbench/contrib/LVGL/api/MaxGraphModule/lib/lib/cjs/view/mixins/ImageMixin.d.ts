import type { AbstractGraph } from '../AbstractGraph.js';
type PartialImage = Pick<AbstractGraph, 'imageBundles' | 'addImageBundle' | 'removeImageBundle' | 'getImageFromBundles'>;
type PartialType = PartialImage;
export declare const ImageMixin: PartialType;
export {};
