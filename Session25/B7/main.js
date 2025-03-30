function capitalizeFirstLetter(str) {
  const trimmedStr = str.trim();
  const words = trimmedStr.split(" ");
  const capitalizedWords = words.map(word => {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return '';
  });
  return capitalizedWords.join(" ");
}

console.log(capitalizeFirstLetter(" hello WORLD "));
console.log(capitalizeFirstLetter(" rIKKei acaDEMY "));