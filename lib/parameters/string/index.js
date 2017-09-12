const ParameterBase = require('../parameter_base.js');

const TYPE_NAME = 'string';
const EXPORT_NAME = 'String';
const DEFAULT_VALUE = '';

/**
 * Simple parameter object that may contain a string value.
 */
class StringParameter extends ParameterBase {
    constructor(name, defaultValue) {
        super(TYPE_NAME, name, typeof defaultValue === 'undefined' ? DEFAULT_VALUE : defaultValue);

        if (typeof this.defaultValue !== 'string') {
            throw new Error('StringParameter.ctor - Default value was not of string type.')
        }
    }

    extractValue(desc) {
        if (typeof desc !== 'string') {
            throw new Error('StringParameter.extractValue - Parameter definition was not of string type.');
        }

        return desc;
    }
}

module.exports = {
    EXPORT: EXPORT_NAME,
    TYPE_NAME: TYPE_NAME,
    ctor: StringParameter
};
