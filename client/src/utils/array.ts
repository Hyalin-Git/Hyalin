export const isNotEmpty = (arr: unknown[]) => {
  return Array.isArray(arr) && arr.length > 0;
};
