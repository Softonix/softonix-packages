import { isArray, isObject } from 'radash'

export type TExtendOverrideOption<T> = T extends readonly (infer U)[]
  ? U[] | { override?: U[] }
  : T extends (infer U)[]
    ? U[] | { override?: U[] }
    : T

export type TMappedOptions<T> = {
  [K in keyof T]?: TExtendOverrideOption<T[K]>
}

export function resolveExtendOverride<T extends Record<string, any>> (
  defaults: T,
  options?: TMappedOptions<T>
): T {
  return Object
    .entries(options ?? {})
    .reduce<T>((acc, [key, value]) => {
      const optionKey = key as keyof T
      const defaultValue = defaults[optionKey]

      if (isArray(defaultValue)) {
        if (isArray(value)) {
          // Extend by default when array is provided
          acc[optionKey] = [...defaultValue, ...value] as any
        } else if (value && isObject(value)) {
          // Override when object with override property is provided
          const arrayValue = value as { override?: any[] }
          if (arrayValue.override) {
            acc[optionKey] = arrayValue.override as any
          }
        }
      } else if (value !== undefined) {
        acc[optionKey] = value as any
      }

      return acc
    }, { ...defaults })
}
