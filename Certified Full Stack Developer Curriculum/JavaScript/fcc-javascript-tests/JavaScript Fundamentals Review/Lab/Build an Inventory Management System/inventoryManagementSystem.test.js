const {
  findProductIndex,
  setInventory,
  addProduct,
  removeProduct,
} = require("./inventoryManagementSystem");

describe("Inventory Management Program", () => {
  let consoleSpy;

  beforeEach(() => {
    setInventory([]);
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("findProductIndex", () => {
    test("returns the product index when product name is all lowercase letters", () => {
      setInventory([{ name: "flour", quantity: 5 }]);
      expect(findProductIndex("flour")).toBe(0);
    });

    test("returns the product index when product name is mixed-case letters", () => {
      setInventory([{ name: "FloUr", quantity: 5 }]);
      expect(findProductIndex("flour")).toBe(0);
    });
  });

  describe("addProduct", () => {
    test("adds a new product and logs the correct message", () => {
      addProduct({ name: "FLOUR", quantity: 5 });
      expect(findProductIndex("flour")).toBe(0);
      expect(consoleSpy).toHaveBeenCalledWith("flour added to inventory");
    });

    test("updates an existing product's quantity and logs the correct message", () => {
      addProduct({ name: "flour", quantity: 2 });
      addProduct({ name: "FLOUR", quantity: 3 });
      expect(consoleSpy).toHaveBeenLastCalledWith("flour quantity updated");
    });
  });

  describe("removeProduct", () => {
    test("logs the correct message when item name is not in inventory", () => {
      setInventory([{ name: "flour", quantity: 2 }]);
      removeProduct("chicken", 10);
      expect(consoleSpy).toHaveBeenLastCalledWith("chicken not found");
    });

    test("subtracts quantity and logs remaining when quantity < current", () => {
      setInventory([
        { name: "flour", quantity: 20 },
        { name: "rice", quantity: 5 },
      ]);
      removeProduct("FLOUR", 5);
      expect(consoleSpy).toHaveBeenLastCalledWith("Remaining flour pieces: 15");
    });

    test("emoves item when quantity is exactly reduced to 0", () => {
      setInventory([
        { name: "flour", quantity: 5 },
        { name: "rice", quantity: 5 },
      ]);
      removeProduct("FLOUR", 5);
      expect(consoleSpy).toHaveBeenLastCalledWith("Remaining flour pieces: 0");
      expect(findProductIndex("flour")).toBe(-1);
    });

    test("logs not enough message when trying to remove more than available", () => {
      setInventory([
        { name: "flour", quantity: 5 },
        { name: "rice", quantity: 5 },
      ]);
      removeProduct("FLOUR", 10);
      expect(consoleSpy).toHaveBeenLastCalledWith(
        "Not enough flour available, remaining pieces: 5"
      );
      expect(findProductIndex("flour")).toBe(0); // item is still present
    });
  });
});
