import { getPointsTotal } from '../challenges/challenges.js';

export function formatCategory(categoryName: string, challenges: string[]) {
    let res = `### ${categoryName}\n`;

    for (const challenge of challenges) {
        res += `* ${challenge}\n`;
    }

    return res;
}

export function formatCategorizedChallenges(categorizedChallenges: {[key: string]: string[]}) {
    let res = "", points = 0;

    for (const catName in categorizedChallenges) {
        res += formatCategory(catName, categorizedChallenges[catName]);
        points += getPointsTotal(categorizedChallenges[catName]);
    }

    res += `\nTotal points: ${points}`;
    return res;
}
