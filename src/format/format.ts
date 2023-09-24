import { getPointsTotal } from '../challenges/challenges.js';

export const formatCategory = (categoryName: string, challenges: string[]) => {
    let res = `### ${categoryName}\n`;

    for (const challenge of challenges) {
        res += `* ${challenge}\n`;
    }

    return res;
}

export const formatCategorisedChallenges = (categorisedChallenges: {[key: string]: string[]}) => {
    let res = "", points = 0;

    for (const cat in categorisedChallenges) {
        res += formatCategory(cat, categorisedChallenges[cat]);
        points += getPointsTotal(categorisedChallenges[cat]);
    }

    res += `\nTotal points: ${points}`;
    return res;
}
