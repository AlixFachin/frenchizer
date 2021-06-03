const { expect } = require('chai');
const { toFrench } = require('../frenchizer.js');

describe("frenchizer", function() {
  it("Should reject non-string inputs", () => {
    const invalidFrenchBehaviour = toFrench.bind(null, 6);
    const validFrenchBehaviour = toFrench.bind(null, "hello");
    
    expect(invalidFrenchBehaviour).to.throw();
    expect(validFrenchBehaviour).to.not.throw();
  });

  it("Should return a string", () => {
    expect(toFrench("hello")).to.be.an("string");
  });

  it("Should return frenchized expressions", () => {
    expect(toFrench("Those three kitten are very cute!")).to.equal("Uh zose sRee kitten aRe veRy cute sacrebleu!") ;
  });

})