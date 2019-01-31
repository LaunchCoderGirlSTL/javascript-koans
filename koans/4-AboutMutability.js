describe("4. About Mutability", () => {

  it("should expect object properties to be public and mutable", () => {
    let aPerson = { firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("should understand that constructed properties are public and mutable", () => {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    let aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("should expect prototype properties to be public and mutable", () => {
    function Person(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function() {
      return this.firstname + " " + this.lastname;
    };

    let aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

    aPerson.getFullName = function() {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });

  it("should know that variables inside a constructor and constructor args are private", () => {
    function Person(firstname, lastname){
      let fullName = firstname + " " + lastname;

      this.getFirstName = () => { return firstname; };
      this.getLastName = () => { return lastname; };
      this.getFullName = () => { return fullName; };
    }
    let aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toBe(FILL_ME_IN);
    expect(aPerson.getLastName()).toBe(FILL_ME_IN);
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

    aPerson.getFullName = () => {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });
});
