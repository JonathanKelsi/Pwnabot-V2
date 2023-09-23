import getChallengesCategorised from '../challenges/challenges.js';
import formatCategorisedChallenges from '../format/format.js';

const lsCommand = async function(params) {
    const userId = params[0];
    const challengesCatagorised = await getChallengesCategorised(userId);
    return formatCategorisedChallenges(challengesCatagorised);
}

export default lsCommand;