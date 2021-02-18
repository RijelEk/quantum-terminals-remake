import useGenerateLevelMemo, {generateNext, isStartOfTheRow, isEndOfTheRow}  from "@/utils/terminal_1/useGenerateLevelMemo";


// describe("Test level generator", () => {
  

// });


// describe("Test next tile", () => {
  
  
// });

describe("Test tile position", () => {
  
  it("Start", () => {
    expect(isStartOfTheRow(5)).toBeFalsy();
    expect(isStartOfTheRow(1)).toBeTruthy();
    expect(isStartOfTheRow(3)).toBeFalsy();
  })


  it("End", () => {

    let truth = [5, 10, 15, 20, 25, 30];

    expect(isEndOfTheRow(1)).toBeFalsy();
    expect(isEndOfTheRow(3)).toBeFalsy();
    expect(isEndOfTheRow(5)).toBeTruthy();

    for (let i = 0; i < truth.length; i++){
      expect(isEndOfTheRow(i)).toBeTruthy();
    }
  
  })


});