import { RecipeModel } from "./recipe-model";

// clone and shuffle an array
const shuffleArray = <T>(array: T[]) => {
    const arrayCopy = [...array];

    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    return arrayCopy;
};

export class RecipeRepository {
    private recipes: RecipeModel[] = [
        {
            id: "1ccd3d44-fdd6-4ad9-9242-cc9716415384",
            name: "Slow cooker meatballs in tomato sauce",
            prepTime: 30,
            cookTime: 120,
            tags: [ "slow cooker", "meat", "pasta" ]
        },
        {
            id: "3b694883-e2d9-4f53-bc79-2e33df16e704",
            name: "Blackberry cheesecake",
            prepTime: 60,
            cookTime: 60,
            tags: [ "dessert" ]
        },
        {
            id: "08d29f70-c0e5-4dcd-9974-ee586a9a26d5",
            name: "Roasted sausage and potato supper",
            prepTime: 30,
            cookTime: 60,
            tags: [ "hearty" ]
        },
        {
            id: "4efef321-aa59-46b6-b260-afbbe12a00e7",
            name: "Southern style pork and beans",
            prepTime: 30,
            cookTime: 60,
            tags: [ "protein", "simple" ]
        },
        {
            id: "e8549d87-68fc-4852-91b4-51a1b93b3544",
            name: "Chocolate éclairs",
            prepTime: 60,
            cookTime: 60,
            tags: [ "chocolate", "dessert" ]
        }
    ];

    public getThreeRandomRecipes() {
        const shuffled = shuffleArray(this.recipes);

        return [
            shuffled.pop(),
            shuffled.pop(),
            shuffled.pop()
        ];
    }

    public getById(id: string) {
        throw Error("Not implemented");
    }
}
