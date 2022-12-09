import * as fs from "fs";
import {CSVReader} from "./CSVReader";

const reader = new CSVReader("football.csv")
reader.read()

// 使用Enum
enum MatchResult {
    HomeWin ='H',
    AwayWin = "A",
    Draw = "D"
}

let manUnitedWins:number = 0;

for(let match of reader.data ){
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin){
        manUnitedWins++
    }else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin){
        manUnitedWins++
    }
}

console.log(`manUnitedWins : ${manUnitedWins} times`)
