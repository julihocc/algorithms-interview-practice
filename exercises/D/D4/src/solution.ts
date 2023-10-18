export function find_kth_largest(nums: number[], k: number): number|null {
  const slots:number[] = new Array<number>(k).fill(-Infinity);
    for (const num of nums) {
      if (!slots.includes(num)) {
        console.log(num, slots)
        if (num > slots[0]) {
          slots[0] = num;
          slots.sort((a, b) => a - b);
        }
      }
    }
    if (slots[0] === -Infinity) {
      return null;
    }
    return slots[0];
}
