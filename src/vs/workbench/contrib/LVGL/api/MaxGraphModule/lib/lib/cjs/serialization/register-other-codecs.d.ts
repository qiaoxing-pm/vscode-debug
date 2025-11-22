/**
 * Register core codecs i.e. codecs that don't relate to editor. This includes model codecs that can be registered individually with {@link registerModelCodecs}.
 *
 * @param force if `true` register the codecs even if they were already registered. If false, only register them
 *              if they have never been registered before.
 * @since 0.6.0
 * @category Configuration
 * @category Serialization with Codecs
 */
export declare const registerCoreCodecs: (force?: boolean) => void;
/**
 * Register only editor codecs.
 * @param force if `true` register the codecs even if they were already registered. If false, only register them
 *              if they have never been registered before.
 * @since 0.6.0
 * @category Configuration
 * @category Serialization with Codecs
 */
export declare const registerEditorCodecs: (force?: boolean) => void;
/**
 * Register all codecs i.e. core codecs (as done by {@link registerCoreCodecs}) and editor codecs (as done by {@link registerEditorCodecs}).
 *
 * @param force if `true` register the codecs even if they were already registered. If false, only register them
 *              if they have never been registered before.
 * @since 0.6.0
 * @category Configuration
 * @category Serialization with Codecs
 */
export declare const registerAllCodecs: (force?: boolean) => void;
/**
 * Unregister all codecs from {@link CodecRegistry}.
 *
 * @since 0.18.0
 * @category Configuration
 * @category Serialization with Codecs
 */
export declare const unregisterAllCodecs: () => void;
