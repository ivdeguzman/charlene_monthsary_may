import { writable } from "svelte/store";

// 0 - Home
// 1 - Switzerland
// 2 - Japan
// 3 - Philippines
// 4 - Slideshow

// 11 - Switzerland Alphs
// 12 - Switzerland Tulips
// 21 - Japan Fuji
// 22 - Japan Akiba
// 31 - Philippines Intra
// 32 - Philippines Baguio
export const pageIndex = writable(0);
