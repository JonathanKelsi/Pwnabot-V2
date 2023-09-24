import { getUserRank } from '../challenges/challenges.js';

export async function rankCommand(params: any[]) {
    return getUserRank(params[0]);
}
