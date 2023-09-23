import challenges from '../challenges/challenges.js';

const formatCategory = (categoryName, challenges) => {
    let res = `### ${categoryName}\n`;

    for (const challenge of challenges) {
        res += `* ${challenge}\n`;
    }

    return res;
}

const formatCategorisedChallenges = (categorisedChallenges) => {
    let res = "", points = 0;

    for (const cat of Object.keys(categorisedChallenges)) {
        res += formatCategory(cat, categorisedChallenges[cat]);
        points += challenges.getPointsTotal(categorisedChallenges[cat]);
    }

    res += `\nTotal points: ${points}`;
    return res;
}

export default formatCategorisedChallenges;