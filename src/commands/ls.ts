import { getChallengesCategorised } from '../challenges/challenges.js';
import { formatCategorisedChallenges } from '../format/format.js';

export const lsCommand = async function(params: any[]) {
    const userId = params[0];
    const challengesCatagorised = await getChallengesCategorised(userId);
    return formatCategorisedChallenges(challengesCatagorised);
}
