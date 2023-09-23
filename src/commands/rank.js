import challenges from '../challenges/challenges.js';

const rankCommand = async function(params) {
    let rank = challenges.getUserRank(params[0]);
    console.log(rank);
    return rank;
}

export default rankCommand;