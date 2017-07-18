const ParameterBase = require('../parameter_base.js');

const TYPE_NAME = 'scalar';
const EXPORT_NAME = 'Scalar';

/**
 * Simple parameter object that may contain a floating point numeric value.
 */
class ScalarParameter extends ParameterBase {
    constructor(name, defaultValue) {
        super(TYPE_NAME, name, defaultValue);

        if (typeof defaultValue !== 'number') {
            throw new Error('ScalarParameter.ctor - Default value was not of numeric type.')
        }
    }

    extractValue(desc) {
        if (typeof desc !== 'number') {
            throw new Error('ScalarParameter.extractValue - Parameter definition was not of numeric type.');
        }

        return desc;
    }
}

module.exports = {
    EXPORT: EXPORT_NAME,
    TYPE_NAME: TYPE_NAME,
    ctor: ScalarParameter
};
