import { getChallengesCategorised } from '../challenges/challenges.js';
import { categories } from '../challenges/categories.js';
import { formatCategorisedChallenges } from '../format/format.js';

export async function diffCommand(params: any[]) {
    const userId = params[0];
    const challengesCatagorised = await getChallengesCategorised(userId);
    const res: {[key: string]: string[]} = {};

    for (const cat of categories) {
        const catDiff = [];

        for (const challenge in cat) {
            if (!challengesCatagorised[cat._name].includes(challenge) && challenge !== '_name') {
                catDiff.push(challenge);
            }
        }

        if (catDiff.length > 0) {
            res[cat._name] = catDiff;
        }
    }

    return formatCategorisedChallenges(res);
}
