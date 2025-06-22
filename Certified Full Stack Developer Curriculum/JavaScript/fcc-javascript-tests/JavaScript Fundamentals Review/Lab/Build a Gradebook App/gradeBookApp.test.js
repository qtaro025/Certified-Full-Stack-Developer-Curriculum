const {
  getAverage,
  getGrade,
  hasPassingGrade,
  studentMsg,
} = require("./gradeBookApp");

describe("Gradebook App", () => {
  describe("getAverage", () => {
    test("calculates correct average for sample input", () => {
      expect(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])).toEqual(
        71.7
      );
      expect(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])).toEqual(
        85.4
      );
      expect(
        getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100])
      ).toEqual(92.4);
    });
  });

  describe("getGrade", () => {
    test("returns correct letter grade", () => {
      expect(getGrade(100)).toBe("A+");
      expect(getGrade(95)).toBe("A");
      expect(getGrade(82)).toBe("B");
      expect(getGrade(73)).toBe("C");
      expect(getGrade(65)).toBe("D");
      expect(getGrade(50)).toBe("F");
    });
  });

  describe("hasPassingGrade", () => {
    test("returns true for passing grades", () => {
      expect(hasPassingGrade(60)).toBe(true);
      expect(hasPassingGrade(70)).toBe(true);
      expect(hasPassingGrade(100)).toBe(true);
    });

    test("returns false for failing grades", () => {
      expect(hasPassingGrade(59)).toBe(false);
      expect(hasPassingGrade(0)).toBe(false);
    });
  });

  describe("studentMsg", () => {
    test("returns correct message for a passing student", () => {
      const arr = [56, 23, 89, 42, 75, 11, 68, 34, 91, 19];
      const score = 100;
      expect(studentMsg(arr, score)).toBe(
        "Class average: 50.8. Your grade: A+. You passed the course."
      );
    });

    test("returns correct message for a failing student", () => {
      const arr = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
      const score = 37;
      expect(studentMsg(arr, score)).toBe(
        "Class average: 71.7. Your grade: F. You failed the course."
      );
    });
  });
});
