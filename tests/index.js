const chai = require('chai');
const expect = chai.expect;

const NodeParam = require('../index.js');

const DEFAULT_PARAMETER_COUNT = 4;  // Number of default parameters the module supplies

/**
 * Verify the StateTree class behaves as expected.
 */
describe('NodeParam', () => {
    it('Should begin life with all default parameters registered.', () => {
        expect(NodeParam.getParameterCount()).to.be.equal(DEFAULT_PARAMETER_COUNT);

        expect(NodeParam.Types.Boolean).to.exist;
        expect(NodeParam.Types.Integer).to.exist;
        expect(NodeParam.Types.Scalar).to.exist;
        expect(NodeParam.Types.String).to.exist;
    });

    it('Should allow parameters to be created.', () => {
        //
    });

    it('Should allow new parameter types to be registered.', () => {
        //
    });

    it('Should allow parameter types to be unregistered.', () => {
        //
    });

    it('Should allow all parameters to be removed.', () => {
        //
    });
});
