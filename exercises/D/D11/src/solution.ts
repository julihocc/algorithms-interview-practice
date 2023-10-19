/**
 * Find the smallest substirng in S that contains all the characters in the string T. T is a string of unique characters.
 *
 * We use Minimum Window Substring Algorithm to solve this problem.
 */
function initializeDict(t: string): { [key: string]: number } {
  let dictT: { [key: string]: number } = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  return dictT;
}

function shouldExpand(r: number, sLength: number, formed: number, required: number): boolean {
  return r < sLength && formed !== required;
}

function shouldContract(l: number, r: number, formed: number, required: number): boolean {
  return l <= r && formed === required;
}

function updateWindowCounts(windowCounts: { [key: string]: number }, char: string, operation: "increment" | "decrement"): void {
  if (operation === "increment") {
    windowCounts[char] = (windowCounts[char] || 0) + 1;
  } else {
    windowCounts[char] = (windowCounts[char] || 0) - 1;
  }
}

export function minWindow(s: string, t: string): string {
  if (!s || !t) {
    return "";
  }

  const dictT = initializeDict(t);
  const required: number = Object.keys(dictT).length;

  let [l, r, formed] = [0, 0, 0];
  let windowCounts: { [key: string]: number } = {};
  let ans: [number, number, number] = [Infinity, 0, 0];

  while (shouldExpand(r, s.length, formed, required)) {
    const char = s[r];
    updateWindowCounts(windowCounts, char, "increment");

    if (dictT[char] && windowCounts[char] === dictT[char]) {
      formed++;
    }

    while (shouldContract(l, r, formed, required)) {
      const char = s[l];

      if (r - l + 1 < ans[0]) {
        ans = [r - l + 1, l, r];
      }

      updateWindowCounts(windowCounts, char, "decrement");

      if (dictT[char] && windowCounts[char] < dictT[char]) {
        formed--;
      }

      l++;
    }

    r++;
  }

  return ans[0] === Infinity ? "" : s.slice(ans[1], ans[2] + 1);
}
