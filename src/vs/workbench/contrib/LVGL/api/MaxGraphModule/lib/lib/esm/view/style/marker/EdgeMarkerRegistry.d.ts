import type { EdgeMarkerRegistryInterface } from '../../../types.js';
/**
 * A registry that stores the {@link MarkerFactoryFunction}s and their configuration to let generate {@link MarkerFunction}.
 *
 * The name used to register the marker is the marker type. It is then used to create the marker with {@link createMarker}.
 *
 * @category Configuration
 * @category Style
 * @since 0.20.0
 */
export declare const EdgeMarkerRegistry: EdgeMarkerRegistryInterface;
