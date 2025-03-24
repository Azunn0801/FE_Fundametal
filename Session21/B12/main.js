let n = 7;

console.log("Hình a:");
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}

console.log("\nHình b:");
for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}

console.log("\nHình c:");
for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
}

console.log("\nHình d:");
for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}
