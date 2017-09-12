const chai = require('chai');
const expect = chai.expect;

const NodeParam = require('../../../index.js');
const Integer = require('../../../lib/parameters/integer');

/**
 * Verify the library correctly exposes the integer parameter type.
 */
describe('integer parameter', () => {
    const TEST_NAME = 'testing';

    it('Should be creatable via the provided API', () => {
        const parameter = NodeParam.create(Integer.TYPE_NAME, TEST_NAME);

        expect(parameter).to.exist;
        expect(parameter.name).to.equal(TEST_NAME);
        expect(parameter.defaultValue).to.equal(0);
    });

    it('Should correctly store default values.', () => {
        const DEFAULT_TEST_VALUE = 1024;
        const parameter = NodeParam.create(Integer.TYPE_NAME, TEST_NAME, DEFAULT_TEST_VALUE);

        expect(parameter).to.exist;
        expect(parameter.defaultValue).to.equal(DEFAULT_TEST_VALUE);
    });

    it('Should throw an exception if the default value is not an integer.', () => {
        expect(function() {
            NodeParam.create(Integer.TYPE_NAME, TEST_NAME, 'string value');
        }).to.throw(Error);
        expect(function() {
            NodeParam.create(Integer.TYPE_NAME, TEST_NAME, 0.673);
        }).to.throw(Error);
        expect(function() {
            NodeParam.create(Integer.TYPE_NAME, TEST_NAME, 82634.730);
        }).to.throw(Error);
        expect(function() {
            NodeParam.create(Integer.TYPE_NAME, TEST_NAME, false);
        }).to.throw(Error);
        expect(function() {
            NodeParam.create(Integer.TYPE_NAME, TEST_NAME, true);
        }).to.throw(Error);
    });
});
