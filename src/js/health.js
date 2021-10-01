export default function getColorIndicator(userData) {
  const { health } = userData;
  if (health > 50) {
    return 'Healthy';
  } if (health <= 50 && health > 15) {
    return 'Wounded';
  } if (health < 15 && health > 0) {
    return 'Critical';
  }
  return 'You died!';
}
