var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

const splitFriends = friends.split(',');

const sortFriends = splitFriends.sort();

const revFriends = sortFriends.reverse();

console.log(revFriends);