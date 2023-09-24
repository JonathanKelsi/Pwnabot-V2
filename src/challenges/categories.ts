// Note: removing the _name key will greatly simplify
//       types and handling code in challenges.ts

export const toddlersBottle: {[key: string]: number} = {
    "fd": 1,
    "collision": 3,
    "bof": 5,
    "flag": 7,
    "passcode": 10,
    "random": 1,
    "input": 4,
    "leg": 2,
    "mistake": 1,
    "shellshock": 1,
    "coin1": 6,
    "blackjack": 1,
    "lotto": 2,
    "cmd1": 1,
    "cmd2": 9,
    "uaf": 8,
    "memcpy": 10,
    "asm": 6,
    "unlink": 10,
    "blukat": 3,
    "horcruxes": 7,
}

export const rookiss : {[key: string]: number} = {
    "brain fuck": 150,
    "md5 calculator": 200,
    "simple login": 50,
    "otp": 100,
    "ascii_easy": 33,
    "tiny_easy": 30,
    "fsb": 20,
    "dragon": 75,
    "fix": 35,
    "syscall": 200,
    "crypto1": 120,
    "echo1": 25,
    "echo2": 50,
    "rsa calculator": 200,
    "note": 200,
    "alloca": 80,
    "loveletter": 50,
}

export const grotesque: {[key: string]: number} = {
    "rootkit": 400,
    "dos4fun": 444,
    "ascii": 333,
    "aeg": 550,
    "coin2": 111,
    "maze": 150,
    "wtf": 100,
    "sudoku": 111,
    "starcraft": 300,
    "cmd3" : 150,
    "elf": 100,
    "lfh": 300,
    "lokihardt": 300,
    "asg": 400,
    "hunter": 200,
    "mipstake": 200,
}

export const hackersSecret : {[key: string]: number} = {
    "unexploitable": 500,
    "tiny": 600,
    "softmmu": 666,
    "towelroot": 700,
    "nuclear": 222,
    "malware": 500,
    "exploitable": 99,
    "tiny_hard": 99,
    "kcrc": 500,
    "exynos": 250,
    "combabo calculator": 500,
    "pwnsandbox": 600,
    "crcgen": 200,
}

export const categories: {[key: string]: {[key: string]: number}} = {
    "Toddler's Bottle": toddlersBottle,
    "Rookiss": rookiss,
    "Grotesque": grotesque,
    "Hacker's Secret": hackersSecret
}

export const categoriesA: {[key: string]: number | string}[] = [
    toddlersBottle,
    rookiss,
    grotesque,
    hackersSecret
]
