# Pwnabot V2

This repository provides the source code for the Pwnabot, a discord bot that provides pwnable.kr-related services, this time using JavaScript.

## Getting Started

### Installation

Clone the repository: 
```bash
git 
```
Download the necessary dependencies:
```bash
npm i
```
### Running The Bot

To run the bot, run
```bash
node index.js
```
## Services

As stated above, the bot provides some quality of life services for the pwnable.kr community. These services are currently only user-info related.

### list user

Using  ```!ls [id]``` will list all the challenges that a user has completed, and the total number of points they have.

### diff user

Using ```!diff [id]``` will list all the challenges that a user has yet to complete, and the total number of points they have yet to earn. Essentially, this is the complement of ```!ls```.

## Authors
[Jonathan Kelsi](https://github.com/JonathanKelsi)  
