import challenges from '../challenges/challenges.js';
import categories from '../challenges/categories.js';
import formatCategorisedChallenges from '../format/format.js';

const diffCommand = async function(params) {
    const userId = params[0];
    const challengesCatagorised = await challenges.getChallengesCategorised(userId);
    const res = {};

    for (const cat of categories) {
        const catChallenges = Object.keys(cat);
        const catDiff = [];

        for (const challenge of catChallenges) {
            if (!challengesCatagorised[cat._name].includes(challenge) && challenge !== '_name') {
                console.log(challenge);
                catDiff.push(challenge);
            }
        }

        if (catDiff.length > 0) {
            res[cat._name] = catDiff;
        }
    }

    console.log(res);
    return formatCategorisedChallenges(res);
}

export default diffCommand;