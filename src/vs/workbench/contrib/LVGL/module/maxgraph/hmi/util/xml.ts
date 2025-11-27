export function objFromKV() {

}

export function arrToStr(arr1: any[], arr2: any[], length: number): string {
  let valueStr = "";
  let hasDiff = false;
  length = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    if (i > arr1.length - 1 || i > arr2.length - 1) {
      continue;
    }
    if (arr1[i] !== arr2[i]) {
      valueStr += `${arr1[i]}`;
      hasDiff = true;
    }
    if (i != length - 1) {
      valueStr += ",";
    }
  }
  if (arr1.length > length) {
    hasDiff = true;
    for (let i = length; i < arr1.length; i++) {
      valueStr += `,${arr1[i]}`;
    }
  }
  return hasDiff ? valueStr : "";
}

export function fromXML(node: Element, obj: any): void {
  const attrs = node.attributes;
  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i];
    if (attr && attr.name in obj) {
      const v = (obj as any)[attr.name];
      if (typeof v === "number") {
        (obj as any)[attr.name] = Number(attr.value);
      } else if (typeof v === "boolean") {
        (obj as any)[attr.name] = attr.value === "true";
      } else if (typeof v === "string") {
        (obj as any)[attr.name] = attr.value;
      }
    }
  }
}

export function toXML(doc: Document, ele: Element, obj: any): void {
  for (const key in obj) {
    const value = obj[key];
    if (value instanceof Array) {
      continue;
    }
    if (value instanceof Object) {
      const childEle = doc.createElement(key);
      toXML(doc, childEle, value);
      ele.appendChild(childEle);
    } else if (typeof value !== "function") {
      ele.setAttribute(key, String(value))
    };
  }
}
