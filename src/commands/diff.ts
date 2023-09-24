import { getChallengesCategorized } from '../challenges/challenges.js';
import { categories } from '../challenges/categories.js';
import { formatCategorizedChallenges } from '../format/format.js';

export async function diffCommand(params: any[]) {
    const userId = params[0];
    const challengesCategorized = await getChallengesCategorized(userId);
    const res: {[key: string]: string[]} = {};

    for (const catName in categories) {
        const catDiff = [];

        for (const challenge in categories[catName]) {
            if (!challengesCategorized[catName].includes(challenge)) {
                catDiff.push(challenge);
            }
        }

        if (catDiff.length > 0) {
            res[catName] = catDiff;
        }
    }

    return formatCategorizedChallenges(res);
}
