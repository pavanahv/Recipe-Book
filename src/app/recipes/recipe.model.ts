export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desctiption: string, imagePath: string){
        this.name = name;
        this.description = desctiption;
        this.imagePath = imagePath;
    }
}