import challenges from '../challenges/challenges.js';

const rankCommand = async function(params) {
    return challenges.getUserRank(params[0]);
}

export default rankCommand;