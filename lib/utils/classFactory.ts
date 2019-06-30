export const rootClass = (prefix: string) => (name?: string): string => [prefix, name].filter(Boolean).join("-");
