export default function calculateHealth(heroes) {
  let result = [];
  result = heroes.sort((a, b) => (a.health > b.health ? -1 : 1));
  return result;
}
