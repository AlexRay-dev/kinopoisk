export const toggleIdInArray = (array: number[], id: number) => {
  if (array.includes(id)) {
    return array.filter(item => item !== id);
  }
  return [...array, id];
};