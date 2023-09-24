# Pwnabot V2

This repository provides the source code for the Pwnabot, a discord bot that provides pwnable.kr-related services, this time using TypeScript.

## Getting Started

### Installation

Clone the repository: 
```bash
git clone https://github.com/JonathanKelsi/Pwnabot-V2
```
Download the necessary dependencies:
```bash
npm i
```
### Running The Bot

To run the bot, run
```bash
npm start
```
## Services

As stated above, the bot provides some quality of life services for the pwnable.kr community. These services are currently only user-info related.

### list user

Using  ```!ls [userId]``` will list all the challenges that a user has completed, and the total number of points they have.

### diff user

Using ```!diff [userId]``` will list all the challenges that a user has yet to complete, and the total number of points they have yet to earn. Essentially, this is the complement of ```!ls```.

### rank

Using ```!rank [username]``` will return the rank of the user with the given username.

### help

simply using ```!help``` will return a list of all the commands that the bot supports.

## Authors
[Jonathan Kelsi](https://github.com/JonathanKelsi)  
