export default function getPlayerRating(listOfPlayers) {
 listOfPlayers.sort((user, user2) => user.health > user2.health ? -1 : 1);
 return listOfPlayers;
};