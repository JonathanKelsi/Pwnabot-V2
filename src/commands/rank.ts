import { getUserRank } from '../challenges/challenges.js';

export const rankCommand = async function(params: any[]) {
    return getUserRank(params[0]);
}
