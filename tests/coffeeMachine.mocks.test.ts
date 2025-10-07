import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";
import * as notifications from "../src/utils/notifications";


describe('CoffeeMachine notifications (mocks)', () => {

    beforeEach(() => {
        jest.resetAllMocks()
    })


    it('Notifies user about serving drink', () => {
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
        
        
        
        const notifyUserSpy = jest.spyOn(notifications, "notifyUser").mockImplementation(jest.fn());
        const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    
    
    
        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledWith("Serving Coffee (small)");
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
    })

    it('Notifies user about serving other drink', () => {
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
        
        
        
        const notifyUserSpy = jest.spyOn(notifications, "notifyUser").mockImplementation(jest.fn());
        const result = machine.serve(drink, moneyInserted, hasLoyaltyCard, currentHour);
    
    
    
        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledWith("Serving Tea (small) with change 0.50");
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
    })
});
