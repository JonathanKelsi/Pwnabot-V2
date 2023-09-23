const formatCategory = (categoryName, challenges) => {
    let res = `### ${categoryName}\n`;

    for (const challenge of challenges) {
        res += `* ${challenge}\n`;
    }

    return res;
}

const formatCategorisedChallenges = (categorisedChallenges) => {
    let res = "";

    for (const cat of Object.keys(categorisedChallenges)) {
        res += formatCategory(cat, categorisedChallenges[cat]);
    }

    return res;
}

export default formatCategorisedChallenges