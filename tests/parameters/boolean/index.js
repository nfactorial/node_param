const chai = require('chai');
const expect = chai.expect;

const NodeParam = require('../../../index.js');
const Boolean = require('../../../lib/parameters/boolean');

/**
 * Verify the library correctly exposes the scalar parameter type.
 */
describe('boolean parameter', () => {
    const TEST_NAME = 'testing';

    it('Should be creatable via the provided API', () => {
        const parameter = NodeParam.create(Boolean.TYPE_NAME, TEST_NAME);

        expect(parameter).to.exist;
        expect(parameter.name).to.equal(TEST_NAME);
        expect(parameter.defaultValue).to.equal(false);
    });

    it('Should correctly store default values.', () => {
        const DEFAULT_TEST_VALUE = true;
        const parameter = NodeParam.create(Boolean.TYPE_NAME, TEST_NAME, DEFAULT_TEST_VALUE);

        expect(parameter).to.exist;
        expect(parameter.defaultValue).to.equal(DEFAULT_TEST_VALUE);
    });

    it('Should throw an exception if the default value is not boolean.', () => {
        expect(function() {
            NodeParam.create(Boolean.TYPE_NAME, TEST_NAME, 'string value');
        }).to.throw(Error);
        expect(function() {
            NodeParam.create(Boolean.TYPE_NAME, TEST_NAME, 3626);
        }).to.throw(Error);
        expect(function() {
            NodeParam.create(Boolean.TYPE_NAME, TEST_NAME, 272.0267);
        }).to.throw(Error);
        expect(function() {
            NodeParam.create(Boolean.TYPE_NAME, TEST_NAME, 0);
        }).to.throw(Error);
        expect(function() {
            NodeParam.create(Boolean.TYPE_NAME, TEST_NAME, 1);
        }).to.throw(Error);
    });
});
