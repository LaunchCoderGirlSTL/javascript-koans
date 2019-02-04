describe("3. About Objects", () => {

  describe("Properties", () => {
    let megalomaniac;

    beforeEach(() => {
      megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", () => {
      expect(megalomaniac.mastermind).toBe(FILL_ME_IN);
    });

    it("should confirm that properties are case sensitive", () => {
      expect(megalomaniac.henchwoman).toBe(FILL_ME_IN);
      expect(megalomaniac.henchWoman).toBe(FILL_ME_IN);
    });
  });


  it("should know properties that are functions act like methods", () => {
    const megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    const battleCry = megalomaniac.battleCry(4);
    expect(FILL_ME_IN).toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", () => {
    const currentDate = new Date();
    const currentYear = (currentDate.getFullYear());
    const megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function() {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(FILL_ME_IN);
    expect(megalomaniac.calculateAge()).toBe(FILL_ME_IN);
  });

  it("should know that properties can be added and deleted", () => {
    const megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect(megalomaniac["secretary"]).toBe(FILL_ME_IN);

    megalomaniac.secretary = "Agent Smith";
    expect(megalomaniac["secretary"]).toBe(FILL_ME_IN);

    delete megalomaniac.henchman;
    expect(megalomaniac["henchman"]).toBe(FILL_ME_IN);
  });


  it("should use prototype to add to all objects", () => {
    function Circle(radius){
      this.radius = radius;
    }

    const simpleCircle = new Circle(10);
    let colouredCircle = new Circle(5);
    colouredCircle.colour = "red";

    expect(simpleCircle.colour).toBe(FILL_ME_IN);
    expect(colouredCircle.colour).toBe(FILL_ME_IN);

    Circle.prototype.describe = function() {
      return "This circle has a radius of: " + this.radius;
    };

    expect(simpleCircle.describe()).toBe(FILL_ME_IN);
    expect(colouredCircle.describe()).toBe(FILL_ME_IN);
  });

  it("should create your own simple object", () => {
    const myNewObject = FILL_ME_IN;

    expect(myNewObject.prop1).toEqual("a property!");
    expect(myNewObject.prop2).toEqual([4,3,2]);
    expect(myNewObject.prop3()).toEqual("a property that is a method!");
  });
});
