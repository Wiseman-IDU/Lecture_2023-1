const a = false;
if (a) {
    const m1 = await import('./func.mjs');
}
console.log('성공');