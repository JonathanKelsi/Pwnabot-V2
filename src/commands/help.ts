export async function helpCommand(params: any[]) {
    const helpString = `
    **Commands**
    > \`!ls [userId]\` - List challenges completed by user
    > \`!diff [userId]\` - List challenges not completed by user
    > \`!rank [username]\` - Get user rank by username
    > \`!help\` - Show this message
    `;
    return helpString;
}
