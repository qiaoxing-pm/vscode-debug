import type { Registry } from '../types.js';
/**
 * Base implementation for all registries storing "style" configuration.
 * @private
 * @since 0.20.0
 */
export declare class BaseRegistry<V> implements Registry<V> {
    protected readonly values: Map<string, V>;
    add(name: string, value: V): void;
    get(name: string | null | undefined): V | null;
    getName(value: V | null): string | null;
    clear(): void;
}
