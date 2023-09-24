export const helpCommand = async function(params: any[]) {
    const helpString = `
    **Commands**
    > \`!ls [userId]\` - List challenges complete by user
    > \`!diff [userId]\` - List challenges not completed by user Id
    > \`!rank [username]\` - Get user rank by username
    > \`!help\` - Show this message
    `;
    return helpString;
}
