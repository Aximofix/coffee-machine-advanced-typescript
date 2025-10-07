import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";

describe('CoffeeMachine basic', () => {
  it('serves small coffee with exact money', () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2;
    const hasLoyaltyCard = false;
    const currentHour = 10;



    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small)");
  });

  it('serves tea and returns change', () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Tea";
    const basePrice = 1.5;
    const drinkHasMilk = false;
    const amountOfSugar = 0;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2;
    const hasLoyaltyCard = false;
    const currentHour = 10;



    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Tea (small) with change 0.50");
  });

  it('applies milk surcharge', () => {
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
    const moneyInserted = 2.5;
    const hasLoyaltyCard = false;
    const currentHour = 10;



    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small) with change 0.30");
  });

  it('applies sugar surcharge above 2 cubes', () => {
    //Machine
    const machine = new CoffeeMachine();
    //Drink's variables
    const nameOfDrink = "Coffee";
    const basePrice = 2;
    const drinkHasMilk = true;
    const amountOfSugar = 4;
    const sizeOfDrink = "small";
    //Drink
    const drink = new Drink(nameOfDrink, basePrice, drinkHasMilk, amountOfSugar, sizeOfDrink);
    //Machine serving variables
    const moneyInserted = 2.5;
    const hasLoyaltyCard = false;
    const currentHour = 10;



    const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);



    expect(result).toBe("Serving Coffee (small) with change 0.10");
  });
});
