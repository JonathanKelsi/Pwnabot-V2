import { categories } from "./categories";

export async function getChallenges(userId: string) {
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

export async function getUserRank(username: string) {
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

    // Warning: unsafe code, non-null assertion (!) used
    return data.match(/(?<=rank:)\d+/g)!.pop();
}

export async function getChallengesCategorized(userId: string) {
    const challenges = await getChallenges(userId);
    const res: {[key: string]: string[]} = {};

    for (const catName in categories) {
        res[catName] = [];
    }

    for (const challenge of challenges) {
        for (const catName in categories) {
            if (challenge in categories[catName]) {
                res[catName].push(challenge);
            }
        }
    }

    return res;
}

export function getPointsTotal(challenges: string[]) {
    let res = 0;

    for (const challenge of challenges) {
        for (const catName in categories) {
            if (challenge in categories[catName]) {
                res += categories[catName][challenge] as number;
            }
        }
    }

    return res;
}
