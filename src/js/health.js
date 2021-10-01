export default function getColorIndicator(userData) {
 const { health } = userData;
 if (health > 50) {
  return 'Healthy';
 } else if (health <= 50 && health > 15) {
  return 'Wounded';
 } else if (health < 15 && health > 0) {
  return 'Critical';
 } else {
  return 'You died!';
 }
};
