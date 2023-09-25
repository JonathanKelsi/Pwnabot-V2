import { getChallengesCategorized } from '../challenges/challenges.js';
import { formatCategorizedChallenges } from '../format/format.js';

export async function lsCommand(params: any[]) {
    const userId = params[0];
    const challengesCategorized = await getChallengesCategorized(userId);
    return formatCategorizedChallenges(challengesCategorized);
}
