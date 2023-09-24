import { getChallengesCategorised } from '../challenges/challenges.js';
import { formatCategorisedChallenges } from '../format/format.js';

export async function lsCommand(params: any[]) {
    const userId = params[0];
    const challengesCatagorised = await getChallengesCategorised(userId);
    return formatCategorisedChallenges(challengesCatagorised);
}
