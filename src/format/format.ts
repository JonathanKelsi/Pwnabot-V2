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

    for (const cat in categorizedChallenges) {
        res += formatCategory(cat, categorizedChallenges[cat]);
        points += getPointsTotal(categorizedChallenges[cat]);
    }

    res += `\nTotal points: ${points}`;
    return res;
}
