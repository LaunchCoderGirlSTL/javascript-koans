describe("1. About Arrays", () => {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", () => {
    const emptyArray = [];
    expect(emptyArray.length).toBe(FILL_ME_IN);

    const multiTypeArray = [0, 1, "two", () => { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(FILL_ME_IN);
    expect(multiTypeArray[2]).toBe(FILL_ME_IN);
    expect(multiTypeArray[3]()).toBe(FILL_ME_IN);
    expect(multiTypeArray[4].value1).toBe(FILL_ME_IN);
    expect(multiTypeArray[4]["value2"]).toBe(FILL_ME_IN);
    expect(multiTypeArray[5][0]).toBe(FILL_ME_IN);
  });

  it("should understand array literals", () => {
    let array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, FILL_ME_IN]);

    array.push(3);
    expect(array).toEqual(FILL_ME_IN);
  });

  it("should understand array length", () => {
    const fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(FILL_ME_IN);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(FILL_ME_IN);

    const tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);
    expect(tenEmptyElementArray).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);
    expect(tenEmptyElementArray).toEqual(FILL_ME_IN);
  });

  it("should slice arrays", () => {
    const array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(FILL_ME_IN);
    expect(array.slice(0, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 2)).toEqual(FILL_ME_IN);
    expect(array.slice(2, 20)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 0)).toEqual(FILL_ME_IN);
    expect(array.slice(3, 100)).toEqual(FILL_ME_IN);
    expect(array.slice(5, 1)).toEqual(FILL_ME_IN);
  });

  // For more information: https://www.youtube.com/watch?v=YnfwDQ5XYF4
  it("should know array references", () => {
    let array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe(FILL_ME_IN);

    let assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe(FILL_ME_IN);

    let copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe(FILL_ME_IN);
  });

  it("should push and pop", () => {
    let array = [1, 2];
    array.push(3);

    expect(array).toEqual(FILL_ME_IN);

    const poppedValue = array.pop();
    expect(poppedValue).toBe(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
  });

  it("should know about shifting arrays", () => {
    let array = [1, 2];

    array.unshift(3);
    expect(array).toEqual(FILL_ME_IN);

    const shiftedValue = array.shift();
    expect(shiftedValue).toEqual(FILL_ME_IN);
    expect(array).toEqual(FILL_ME_IN);
  });

  it("should write a function that returns an array of the first two elements of that array", () => {
    // be sure the function does not modify the original array
    const firstTwoElements = array => {
      return FILL_ME_IN;
    };
    const firstArray = [1,2,3];
    const secondArray = [7,6,5];

    expect(firstTwoElements(firstArray)).toEqual([1,2]);
    expect(firstArray).toEqual([1,2,3]);
    expect(firstTwoElements(secondArray)).toEqual([7,6]);
    expect(secondArray).toEqual([7,6,5]);
  });


  it("should write a function that returns the 3rd element in an array (or null)", () => {
    const thirdElement = array => {
      return FILL_ME_IN;
    };

    expect(thirdElement([1,2,3])).toEqual(3);
    expect(thirdElement([7,6])).toEqual(null);
  });

  it("should write a function that creates a new array of a certain length", () => {
    //makeArray should return an array;
    //The length of that array is determined by the second parameter;
    //The elements of that array should be the first parameter
    //This could be done using a for loop or the fill array function
    const makeArray = (element, length) => {
      let arrayToReturn = []
      // do stuff
      return arrayToReturn;
    };

    expect(makeArray("hello", 4)).toEqual(["hello", "hello", "hello", "hello"]);
    expect(makeArray(3,3)).toEqual([3,3,3]);
  });
});
