export default function deepDiff(base: any, target: any): any {
  const result: any = {};

  for (const key in target) {
    const baseVal = base[key];
    const targetVal = target[key];

    if (baseVal instanceof Function || targetVal instanceof Function) {
      continue;
    }
    // 两边都是对象，递归比较
    if (
      typeof baseVal === "object" &&
      baseVal !== null &&
      typeof targetVal === "object" &&
      targetVal !== null &&
      !Array.isArray(baseVal) &&
      !Array.isArray(targetVal)
    ) {
      const nested = deepDiff(baseVal, targetVal);
      if (Object.keys(nested).length > 0) {
        result[key] = nested;
      }
    } else if (targetVal !== baseVal) {
      result[key] = targetVal;
    }
  }

  return result;
}