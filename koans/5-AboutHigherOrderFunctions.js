describe("5. About Higher Order Functions", () => {

  it("should use filter to return array items that meet a criteria", () => {
    const numbers = [1,2,3];
    const odd = numbers.filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it("should use 'map' to transform each element", () => {
    const numbers = [1, 2, 3];
    const numbersPlus1 = numbers.map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'forEach' for simple iteration", () => {
    const numbers = [1,2,3];
    let msg = "";
    const isEven = function (item) {
      msg += (item % 2) === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'all' to test whether all items pass condition", () => {
    const onlyEven = [2,4,6];
    const mixedBag = [2,4,5,6];

    const isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.every(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.every(isEven)).toBe(FILL_ME_IN);
  });

  it("should use 'any' to test if any items passes condition" , () => {
    const onlyEven = [2,4,6];
    const mixedBag = [2,4,5,6];

    const isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.some(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.some(isEven)).toBe(FILL_ME_IN);
  });

  it("should write a function to filter out objects that match a criteria", () => {
    // return a filer people over 40
    const people = [{name: "bob", age: 41}, {name: "jane", age: 22},{name: "janet", age: 47},{name: "louis", age: 35}];
    const peopleOverFourty = people.filter(function (x) {
      return FILL_ME_IN;
    });

    expect(peopleOverFourty).toEqual([{name: "bob", age: 41}, {name: "janet", age: 47}]);
  });

  it("should write a function to transform elements in an array into a new array", () => {
    // return a list of everyone's age
    const people = [{name: "bob", age: 41}, {name: "jane", age: 22},{name: "janet", age: 47},{name: "louis", age: 35}];
    const names = people.map(function(x) {
      return FILL_ME_IN;
    });

    expect(names).toEqual([41, 22, 47, 35]);
  });

  it("should write a function that finds the difference between two arrays", () => {
    // implement a difference function for lists, which subtracts one list from another.
    // It should remove all values from list a, which are present in list b.
    // arrayDiff([1,2],[1]) == [2]
    // arrayDiff([1,2,2,2,3],[2]) == [1,3]

    const arrayDiff = function(array1, array2) {
      return array1.filter(() =>{
        return FILL_ME_IN;
      });
    };

    expect(arrayDiff([1,2,3], [1,2])).toEqual([3]);
    expect(arrayDiff([1,2,2,2,3], [2])).toEqual([1,3]);
  });

  it("should write a function to capitalize every word in a string", () =>{
    // Hint:
    // First split the string into a list of words
    // Map over each word
    // turn the array back into a string

    const jadenCase = function(string){
      return FILL_ME_IN;
    };

    expect(jadenCase("How can mirrors be real if our eyes aren't real")).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real");
  });

  it("can write your own filter function using a for loop", () => {
    const myFilter = function(arr, func){
      let arrayToReturn = []
      for(let i =0; i < arr.length; i++) {
        // FILL_ME_IN
      }
      return arrayToReturn;
    };

    expect(myFilter([1,2,3], (i) => i > 2)).toEqual([3]);
    expect(myFilter([1,2,3,4], (i) => i > 3)).toEqual([4]);
  });

  it("can write your own map function using forEach", () => {
    const myMap = function(arr, func){
      let arrayToReturn = []
      arr.forEach(function(arrayItem) {
        //FILL_ME_IN
      });
      return arrayToReturn
    };

    expect(myMap([1,2,3], (i) => i + 2)).toEqual([3,4,5]);
  });
});

