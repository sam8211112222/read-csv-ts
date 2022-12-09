import fs from "fs";

export class CSVReader {
    data: string[][] = [];
    constructor(public fileName:string) {}
    read():void{
        this.data = fs.readFileSync(this.fileName,{
            encoding:'utf-8'
        })
            .split('\n')
            .map((row:string):string[] => row.split(','))
    }
}
