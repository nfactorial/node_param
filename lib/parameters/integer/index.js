const ParameterBase = require('../parameter_base.js');

const TYPE_NAME = 'integer';
const EXPORT_NAME = 'Integer';

/**
 * Simple parameter object that may contain a whole number.
 */
class IntegerParameter extends ParameterBase {
    constructor(name, defaultValue) {
        super(TYPE_NAME, name, defaultValue);
    }

    extractValue(desc) {
        if (typeof desc !== 'number') {
            throw new Error('IntegerParameter.extractValue - Parameter definition was not of numeric type.');
        }

        return desc;
    }
}

module.exports = {
    EXPORT: EXPORT_NAME,
    TYPE_NAME: TYPE_NAME,
    ctor: IntegerParameter
};
