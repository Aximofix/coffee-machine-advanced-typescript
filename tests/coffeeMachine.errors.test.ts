import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";

describe('CoffeeMachine errors', () => {
    it("Catch too much sugar error", () => {
        //Machine
        const machine = new CoffeeMachine();
        //Drink's variables
        const nameOfDrink = "Coffee";
        const basePrice = 2;
        const drinkHasMilk = true;
        const amountOfSugar = 80;
        const sizeOfDrink = "small";
        //Drink
        const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
        //Machine serving variables
        const moneyInserted = 2.5;
        const hasLoyaltyCard = false;
        const currentHour = 10;


        
        const wrapper = () => machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
        


        expect(wrapper).toThrow("Too much sugar");
    })

    it("Catch not enough money error", () => {
        //Machine
        const machine = new CoffeeMachine();
        //Drink's variables
        const nameOfDrink = "Coffee";
        const basePrice = 2;
        const drinkHasMilk = true;
        const amountOfSugar = 0;
        const sizeOfDrink = "small";
        //Drink
        const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
        //Machine serving variables
        const moneyInserted = 0;
        const hasLoyaltyCard = false;
        const currentHour = 10;


        
        const wrapper = () => machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
        
        

        expect(wrapper).toThrow("Not enough money");
    })

    it("Catch invalid price error", () => {
        //Machine
        const machine = new CoffeeMachine();
        //Drink's variables
        const nameOfDrink = "Coffee";
        const basePrice = -5;
        const drinkHasMilk = true;
        const amountOfSugar = 0;
        const sizeOfDrink = "small";
        //Drink
        const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
        //Machine serving variables
        const moneyInserted = 0;
        const hasLoyaltyCard = false;
        const currentHour = 10;


        
        const wrapper = () => machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
        
        

        expect(wrapper).toThrow("Invalid price");
    })
});
