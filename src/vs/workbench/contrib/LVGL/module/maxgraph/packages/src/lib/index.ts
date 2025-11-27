export * from "./uiHelpers.svelte";
export * from "./accordion";
export * from "./alert";
export * from "./avatar";
export * from "./badge";
export * from "./banner";
export * from "./bottom-navigation";
export * from "./breadcrumb";
export * from "./button-group";
export * from "./buttons";
export * from "./cards";
export * from "./chart";
export * from "./darkmode";
export * from "./device-mockups";
export * from "./dropdown";
export * from "./drawer";
export * from "./footer";
export * from "./gallery";
export * from "./indicator";
export * from "./kbd";
export * from "./list-group";
export * from "./mega-menu";
export * from "./modal";
export * from "./modalp";
export * from "./nav";
export * from "./pagination";
export * from "./popover";
export * from "./progress";
export * from "./rating";
export * from "./sidebar";
export * from "./skeleton";
export * from "./spinner";
export * from "./tabs";
export * from "./table";
export * from "./timeline";
export * from "./toast";
export * from "./toolbar";
export * from "./tooltip";
export * from "./utils";
export * from "./video";

// forms
export * from "./forms/button-toggle";
export * from "./forms/checkbox";
export * from "./forms/dropzone";
export * from "./forms/fileupload";
export * from "./forms/floating-label";
export * from "./forms/helper";
export * from "./forms/input-field";
export * from "./forms/input-addon";
export * from "./forms/label";
export * from "./forms/phoneinput";
export * from "./forms/select";
export * from "./forms/radio";
export * from "./forms/range";
export * from "./forms/search";
export * from "./forms/tags";
export * from "./forms/textarea";
export * from "./forms/timepicker";
export * from "./forms/toggle";

// typography
export * from "./typography/anchor";
export * from "./typography/blockquote";
export * from "./typography/descriptionlist";
export * from "./typography/heading";
export * from "./typography/hr";
export * from "./typography/img";
export * from "./typography/layout";
export * from "./typography/list";
export * from "./typography/mark";
export * from "./typography/paragraph";
export * from "./typography/secondary";
export * from "./typography/span";
export * from "./video";
export * from "./utils";
export * from "./types";

export { default as ThemeProvider } from "./theme/ThemeProvider.svelte";
export { getTheme } from "./theme/themeUtils";

// dockview
import DockView from "./DockView.svelte";
import PaneView from "./PaneView.svelte";
import SplitView from "./SplitView.svelte";
import GridView from "./GridView.svelte";
import type { IDockviewHeaderActionsProps, IDockviewPanelHeaderProps, IDockviewPanelProps, IWatermarkPanelProps, } from "dockview-core";
import type { IPaneviewPanelProps, ISplitviewPanelProps, IGridviewPanelProps } from "dockview";
import type {
  ViewKey,
  ComponentsConstraint,
  SnippetsConstraint,
  ModifiedProps,
  AdditionalAddPanelOptions,
  PanePanelHeaderConstraint,
  ExtractComponentsFromRenderables,
  ExtractSnippetsFromRenderables,
  AddedPanelByView,
  Theme
} from "./utils/index.js";
import { signal, themes } from "./utils/index.js";
import { Orientation } from "dockview-core";

export { DockView, PaneView, SplitView, GridView, Orientation, signal, themes };

export type { AddedPanelByView, ViewKey, Theme as DockViewTheme };

export type PanelProps<T extends ViewKey, Options extends Record<string, any>> = {
  grid: IGridviewPanelProps<Options>;
  dock: IDockviewPanelProps<Options>;
  pane: IPaneviewPanelProps<Options>;
  split: ISplitviewPanelProps<Options>;
}[T];

export type AuxiliaryDockPanelProps = {
  watermark: IWatermarkPanelProps;
  tab: IDockviewPanelHeaderProps;
  headerAction: IDockviewHeaderActionsProps;
}

export type ViewProps<
  ViewType extends ViewKey,
  Renderables extends Record<string, ComponentsConstraint<ViewType>[string] | SnippetsConstraint<ViewType>[string]>,
  Additional extends AdditionalAddPanelOptions<ViewType> = never
> = ModifiedProps<
  ViewType,
  keyof ExtractComponentsFromRenderables<ViewType, Renderables> extends never
  /**/ ? ComponentsConstraint<ViewType> & Record<never, never>
  /**/ : ExtractComponentsFromRenderables<ViewType, Renderables>,
  keyof ExtractSnippetsFromRenderables<ViewType, Renderables> extends never
  /**/ ? SnippetsConstraint<ViewType> & Record<never, never>
  /**/ : ExtractSnippetsFromRenderables<ViewType, Renderables>,
  Additional
>

export type WithViewOnReady<
  ViewType extends ViewKey,
  Renderables extends Record<string, ComponentsConstraint<ViewType>[string] | SnippetsConstraint<ViewType>[string]>,
  Additional extends AdditionalAddPanelOptions<ViewType> = ViewType extends "pane" ? { headers: PanePanelHeaderConstraint } : never
> = Pick<ViewProps<ViewType, Renderables, Additional>, "onReady">;

export type ViewAPI<
  ViewType extends ViewKey,
  Renderables extends Record<string, ComponentsConstraint<ViewType>[string] | SnippetsConstraint<ViewType>[string]>,
  Additional extends AdditionalAddPanelOptions<ViewType> = ViewType extends "pane" ? { headers: PanePanelHeaderConstraint } : never
> =
  "api" extends keyof Parameters<Required<ViewProps<ViewType, Renderables, Additional>>["onReady"]>[0]
  /**/ ? Parameters<Required<ViewProps<ViewType, Renderables, Additional>>["onReady"]>[0]["api"]
  /**/ : never;