import categories from "./categories.js";

const getChallenges = async function(userId) {
    const res = await fetch(`https://pwnable.kr/rankproc.php?id=${userId}`, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });

    const data = await res.text();
    return data.trim().split(',').slice(0, -1);
}

const getUserRank = async function(username) {
    const res = await fetch("https://pwnable.kr/lib.php?cmd=finduser", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
    },
    "referrer": "https://pwnable.kr/rank.php",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `user=${username}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    });

    const data = await res.text();

    if (data.includes("not found")) {
        return "User not found";
    }

    if (data.includes("sql injection")) {
        return "Lainad, stop...";
    }

    return data.match(/(?<=rank:)\d+/g).pop();
}

const getChallengesCategorised = async function(userId) {
    const challenges = await getChallenges(userId);
    const res = {};

    for (let i = 0; i < categories.length; i++) {
        res[categories[i]._name] = [];
    }

    for (const challenge of challenges) {
        for (const cat of categories) {
            if (Object.keys(cat).includes(challenge)) {
                res[cat["_name"]].push(challenge);
            }
        }
    }

    return res;
}

const getPointsTotal = function(challenges) {
    let res = 0;

    for (const challenge of challenges) {
        for (const cat of categories) {
            if (Object.keys(cat).includes(challenge)) {
                res += cat[challenge];
            }
        }
    }

    return res;
}

export default { getChallengesCategorised, getUserRank, getPointsTotal };