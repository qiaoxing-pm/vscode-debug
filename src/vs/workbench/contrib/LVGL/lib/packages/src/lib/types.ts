import type { TransitionConfig, FadeParams, BlurParams, FlyParams, SlideParams, ScaleParams } from "svelte/transition";
import type { ClassValue, HTMLAnchorAttributes, HTMLAttributes, HTMLBlockquoteAttributes, HTMLButtonAttributes, HTMLDialogAttributes, HTMLImgAttributes, HTMLInputAttributes, HTMLLabelAttributes, HTMLLiAttributes, HTMLOlAttributes, HTMLSelectAttributes, HTMLSourceAttributes, HTMLTableAttributes, HTMLTdAttributes, HTMLTextareaAttributes, HTMLThAttributes, HTMLTrackAttributes, HTMLVideoAttributes, SVGAttributes, FullAutoFill } from "svelte/elements";
import type { Snippet, Component } from "svelte";
import type { CloseButtonVariants } from "$lib/utils/theme";
import type { ButtonVariants, GradientButtonVariantes, gradientButton } from "$lib/buttons/theme";
import type { ButtonGroupVariants } from "./button-group/theme";
// forms component variants
import type { CheckboxButtonVariants, CheckboxVariants } from "$lib/forms/checkbox/theme";
import type { FileuploadViariants } from "$lib/forms/fileupload/theme";
import type { FloatingLabelInputVaratiants } from "$lib/forms/floating-label/theme";
import type { HelperVariants } from "$lib/forms/helper/theme";
import type { InputVariants } from "$lib/forms/input-field/theme";
import type { LabelVariants } from "$lib/forms/label/theme";
import type { RadioVariants } from "$lib/forms/radio/theme";

import type { RangeVariants } from "$lib/forms/range/theme";
import type { SearchVariants } from "$lib/forms/search/theme";
import type { MultiSelectVariants, SelectVariants } from "$lib/forms/select/theme";
import type { TextareaVariants } from "$lib/forms/textarea/theme";
import type { ToggleVariants } from "$lib/forms/toggle/theme";
import type { PhoneInputVariants } from "$lib/forms/phoneinput/theme";
import type { VariantProps } from "tailwind-variants";

// extend
import type { ButtonToggleVariants } from "$lib/forms/button-toggle/theme";
import type { TagsVariants } from "$lib/forms/tags/theme";
// primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
export type ColorName = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

export declare const xs = "xs";
export declare const sm = "sm";
export declare const md = "md";
export declare const lg = "lg";
export declare const xl = "xl";

export type CloseButtonColorType = "dark" | "default" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "primary" | "none";

export type IndicatorPlacementType = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right" | undefined;

export interface drawerTransitionParamTypes {
  amount?: number;
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  opacity?: number;
  x?: number;
  y?: number;
}

export type FormSizeType = "sm" | "md" | "lg";

// export type drawerTransitionTypes = 'fade' | 'fly' | 'slide' | 'blur' | 'in:fly' | 'out:fly' | 'in:slide' | 'out:slide' | 'in:fade' | 'out:fade' | 'in:blur' | 'out:blur' | undefined;

// export type PsizeType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

// export type PweightType = 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

// export type BlockQuoteType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

// export type FormColorType = 'blue' | 'red' | 'green' | 'purple' | 'teal' | 'yellow' | 'orange' | 'primary' | 'secondary';

// export type ButtonColorType = 'alternative' | 'blue' | 'dark' | 'green' | 'light' | 'primary' | 'purple' | 'red' | 'yellow' | 'none';

// export type SidebarType = {
//   activeClass: string | undefined | null;
//   nonActiveClass: string | undefined | null;
// };

// export interface ButtonClassesTypes {
//   default?: string;
//   border?: string;
//   application?: string;
//   pagination?: string;
//   group?: string;
//   card?: string;
//   meeting?: string;
//   video?: string;
//   custom?: string;
// }

export type navbarType = {
  navStatus: boolean | undefined;
  breakPoint: "md" | "lg" | "xl" | "xxl";
  activeClass: string | undefined | null;
  nonActiveClass: string | undefined | null;
  closeNav: () => void;
};

export type ColorVariant = "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "primary" | "none";

// export type BottomNavVariantType = 'default' | 'border' | 'application' | 'pagination' | 'group' | 'card' | 'meeting' | 'video';

export type DeviceVariantType = "default" | "ios" | "android" | "tablet" | "laptop" | "desktop" | "smartwatch";

// export type ProgressBarColorType = 'primary' | 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo';

// export type SpinnerColorType = 'primary' | 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'pink' | 'purple' | 'white' | 'custom';

// export type ToastPositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';

// export type SpaceType = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | undefined;

// export type ToolbarButtonType = 'dark' | 'default' | 'gray' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue';

export declare type SizeType = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;
export type TransitionTypes = "fade" | "fly" | "slide" | "blur" | "in:fly" | "out:fly" | "in:slide" | "out:slide" | "in:fade" | "out:fade" | "in:blur" | "out:blur";

export type AnchorButtonAttributes = ({ href: string } & HTMLAnchorAttributes) | ({ href?: undefined } & HTMLButtonAttributes);

export type AnchorDivAttributes = ({ href: string } & HTMLAnchorAttributes) | ({ href?: undefined } & HTMLAttributes<HTMLDivElement>);

export type AnchorButtonDivAttributes = ({ href: string } & HTMLAnchorAttributes) | ({ href?: undefined; onclick: Function } & HTMLButtonAttributes) | ({ href?: undefined; onclick?: undefined } & HTMLAttributes<HTMLDivElement>);
// buttongroup
export interface ButtonGroupProps extends ButtonGroupVariants, HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  disabled?: boolean;
}
// button
export type GradientButtonColor = NonNullable<VariantProps<typeof gradientButton>["color"]>;

export type HTMLButtonOrAnchorAttributes = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, "color">;

export type ButtonProps = ButtonVariants &
  AnchorButtonAttributes & {
    tag?: string;
    disabled?: boolean;
    outline?: boolean;
    shadow?: boolean;
    loading?: boolean;
  };

export interface GradientButtonProps extends GradientButtonVariantes, HTMLButtonOrAnchorAttributes {
  tag?: string;
  disabled?: boolean;
  href?: string;
  btnClass?: ClassValue;
}

// button-toggle
export type ButtonToggleGroupProps = HTMLAttributes<HTMLDivElement> & {
  multiSelect?: boolean;
  name?: string;
  value?: string | null | string[];
  color?: ButtonToggleVariants["color"];
  size?: ButtonToggleVariants["size"];
  roundedSize?: ButtonToggleVariants["roundedSize"];
  onSelect?: (val: any) => void;
  children: Snippet;
  ctxIconClass?: ClassValue;
  ctxBtnClass?: ClassValue;
};

export type ButtonToggleProps = ButtonToggleVariants &
  HTMLButtonAttributes & {
    value: string;
    selected?: boolean;
    children: Snippet;
    iconSlot?: Snippet;
    color?: ButtonToggleVariants["color"];
    iconClass?: ClassValue;
    contentClass?: ClassValue;
    txtClass?: ClassValue;
  };

export interface ButtonToggleContext {
  toggleSelected: (toggleValue: string) => void;
  isSelected: (toggleValue: string) => boolean;
}
// forms
// checkbox
export interface CheckboxItem {
  value: string | number;
  label?: string;
  checked?: boolean | null;
  [key: string]: any;
}

export interface CheckboxProps extends CheckboxVariants, Omit<HTMLInputAttributes, "children" | "color"> {
  children?: Snippet<[{ value?: string | number; checked: boolean } | CheckboxItem]>;
  custom?: boolean;
  inline?: boolean;
  tinted?: boolean;
  rounded?: boolean;
  choices?: CheckboxItem[];
  divClass?: ClassValue;
  labelProps?: Omit<LabelProps, "children">;
}

// checkbox-button
export interface CheckboxButtonProps extends CheckboxButtonVariants, Omit<HTMLInputAttributes, "size" | "checked"> {
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  shadow?: boolean;
}

// dropzone
export interface DropzoneProps extends HTMLInputAttributes {
  children: Snippet;
  files?: FileList | null;
  onDrop?: HTMLLabelAttributes["ondrop"];
  onDragOver?: HTMLLabelAttributes["ondragover"];
  onChange?: HTMLInputAttributes["onchange"];
}

// fileupload
export interface FileuploadProps extends FileuploadViariants, Omit<HTMLInputAttributes, "size"> {
  files?: FileList | null;
  size?: FileuploadViariants["size"];
  color?: InputProps<never>["color"];
  elementRef?: HTMLInputElement;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableOnClick?: () => void;
  clearableClass?: ClassValue;
  wrapperClass?: ClassValue;
}

// floatinglabel-input
export interface FloatingLabelInputProps extends FloatingLabelInputVaratiants, Omit<HTMLInputAttributes, "size"> {
  children: Snippet;
  id?: string;
  value?: string | number | readonly string[];
  elementRef?: HTMLInputElement;
  "aria-describedby"?: string;
  variant?: FloatingLabelInputVaratiants["variant"];
  size?: FloatingLabelInputVaratiants["size"];
  color?: FloatingLabelInputVaratiants["color"];
  inputClass?: ClassValue;
  labelClass?: ClassValue;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  data?: string[];
  maxSuggestions?: number;
  onSelect?: (item: string) => void;
  comboClass?: ClassValue;
}

// helper
export interface HelperProps extends HelperVariants, Omit<HTMLAttributes<HTMLParagraphElement>, "color"> {}

// input
export type InputValue = string | number | string[] | undefined;

export interface InputProps<T extends InputValue = string> extends InputVariants, Omit<HTMLInputAttributes, "size" | "children" | "value"> {
  children?: Snippet<[{ class: string } & Omit<InputProps<T>, "children" | "left" | "right" | "size">]>;
  left?: Snippet;
  right?: Snippet;
  size?: InputVariants["size"];
  value?: T;
  elementRef?: HTMLInputElement;
  color?: InputVariants["color"];
  leftClass?: ClassValue;
  rightClass?: ClassValue;
  divClass?: ClassValue;
  wrapperClass?: ClassValue;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  data?: string[];
  maxSuggestions?: number;
  onSelect?: (item: string) => void;
  comboClass?: ClassValue;
  comboItemClass?: ClassValue;
  oninput?: (event: Event) => void;
  onfocus?: (event: FocusEvent) => void;
  onblur?: (event: FocusEvent) => void;
  onkeydown?: (event: KeyboardEvent) => void;
  /** @deprecated Use `oninput` instead. Will be removed in next minor version. */
  onInput?: (event: Event) => void;
  /** @deprecated Use `onfocus` instead. Will be removed in next minor version. */
  onFocus?: (event: FocusEvent) => void;
  /** @deprecated Use `onblur` instead. Will be removed in next minor version. */
  onBlur?: (event: FocusEvent) => void;
  /** @deprecated Use `onkeydown` instead. Will be removed in next minor version. */
  onKeydown?: (event: KeyboardEvent) => void;
}

// input-addon
export interface InputAddonProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  size?: ButtonGroupProps["size"];
}

// phoneInput
export interface PhoneInputProps<T extends InputValue = number> extends PhoneInputVariants, Omit<HTMLInputAttributes, "size" | "children" | "value"> {
  phoneType?: "default" | "floating" | "countryCode" | "copy" | "advanced";
  children?: Snippet;
  floatingLabel?: string;
  labelFor?: string;
  phoneIcon?: boolean;
}

// label
export interface LabelProps extends HTMLLabelAttributes {
  children: Snippet;
  color?: LabelVariants["color"];
  show?: boolean;
}

// radio
export interface RadioProps<T> extends RadioVariants, Omit<HTMLInputAttributes, "color"> {
  group?: T;
  value?: T;
  inputClass?: ClassValue;
  labelClass?: ClassValue;
}

// raido-button
export interface RadioButtonProps<T> extends Omit<HTMLInputAttributes, "size"> {
  group?: T;
  value?: T;
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  shadow?: boolean;
  checkedClass?: ClassValue;
}

// range
export interface RangeProps extends RangeVariants, Omit<HTMLInputAttributes, "size" | "color"> {
  value?: number | string;
  inputClass?: ClassValue;
}

// search
export interface SearchProps extends SearchVariants, Omit<HTMLInputAttributes, "size"> {
  children?: Snippet;
  value?: string;
  elementRef?: HTMLInputElement;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  inputClass?: ClassValue;
}

// select
export type SelectOptionType<T> = {
  name: string | number;
  value: T;
  disabled?: boolean;
  [key: string]: any;
};

export interface SelectProps<T> extends SelectVariants, Omit<HTMLSelectAttributes, "size" | "disabled"> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  elementRef?: HTMLSelectElement;
  placeholder?: string;
  selectClass?: ClassValue;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  // remove this in next major version
  clearableOnClick?: () => void;
  onClear?: () => void;
  disabled?: boolean;
}

export interface MultiSelectProps<T> extends MultiSelectVariants, Omit<HTMLAttributes<HTMLDivElement>, "size" | "children" | "onchange" | "onblur"> {
  children?: Snippet<[{ item: SelectOptionType<T>; clear: () => void }]>;
  items: SelectOptionType<T>[];
  value: T[];
  dropdownClass?: ClassValue;
  placeholder?: string;
  disabled?: boolean | undefined;
  size?: "sm" | "md" | "lg";
  // Select-specific attributes for the hidden select element
  name?: string | undefined | null;
  form?: string | undefined | null;
  required?: boolean | undefined | null;
  autocomplete?: FullAutoFill | undefined | null;
  onchange?: (event: Event) => void;
  onblur?: (event: FocusEvent) => void;
}

// Tags
export interface TagsProps extends TagsVariants, HTMLAttributes<HTMLDivElement> {
  value: string[];
  itemClass?: ClassValue;
  placeholder?: string;
  spanClass?: ClassValue;
  closeClass?: ClassValue;
  inputClass?: ClassValue;
  closeBtnSize?: CloseButtonVariants["size"];
  unique?: boolean;
  availableTags?: string[];
  maxSuggestions?: number;
  showHelper?: boolean;
  showAvailableTags?: boolean;
  allowNewTags?: boolean;
  inputProps?: HTMLInputAttributes;
  disabled?: boolean;
}

// Timepicker
export type TimePickerType = "default" | "dropdown" | "select" | "range" | "timerange-dropdown" | "timerange-toggle" | "inline-buttons";
export type ColumnCount = 1 | 2 | 3 | 4;
export type TimePickerOption = {
  name: string;
  value: string;
};

export interface TimepickerProps {
  id?: string;
  endId?: string;
  value?: string;
  endValue?: string;
  min?: string;
  max?: string;
  required?: boolean;
  disabled?: boolean;
  inputColor?: InputProps["color"];
  buttonColor?: ButtonProps["color"];
  Icon?: Component;
  iconClass?: string;
  type?: TimePickerType;
  optionLabel?: string;
  options?: TimePickerOption[];
  size?: ButtonGroupVariants["size"]; // Use the specific ButtonGroupSizeType
  divClass?: ClassValue;
  inputClass?: ClassValue;
  selectClass?: ClassValue;
  timerangeLabel?: string;
  timerangeButtonLabel?: string;
  timeIntervals?: string[];
  columns?: ColumnCount;
  // Callback props instead of events
  onselect?: (data: { time: string; endTime: string; [key: string]: string }) => void;
}

// textarea
export interface TextareaProps extends TextareaVariants, HTMLTextareaAttributes {
  header?: Snippet;
  footer?: Snippet;
  addon?: Snippet;
  value?: string;
  elementRef?: HTMLTextAreaElement;
  wrapped?: boolean;
  divClass?: ClassValue;
  innerClass?: ClassValue;
  headerClass?: ClassValue;
  footerClass?: ClassValue;
  addonClass?: ClassValue;
  // cols?: number;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  textareaClass?: ClassValue;
}

// toggle
export interface ToggleProps extends Omit<ToggleVariants, "off_state_label">, Omit<HTMLInputAttributes, "size" | "color"> {
  offLabel?: Snippet;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  spanClass?: ClassValue;
  inputClass?: ClassValue;
}

// end of forms
export interface TransitionParamTypes {
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  css?: (t: number, u: number) => string | undefined | null;
  tick?: (t: number, u: number) => void;
}

export type ParamsType = FadeParams | BlurParams | FlyParams | SlideParams | ScaleParams;

export type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;

export type ModalPlacementType = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
  [propName: string]: any;
}
