const ParameterBase = require('../parameter_base.js');

const TYPE_NAME = 'boolean';
const EXPORT_NAME = 'Boolean';

/**
 * Simple parameter object that may contain a whole number.
 */
class BooleanParameter extends ParameterBase {
    constructor(name, defaultValue) {
        super(TYPE_NAME, name, defaultValue);
    }

    extractValue(desc) {
        if (typeof desc !== 'boolean') {
            throw new Error('BooleanParameter.extractValue - Parameter definition was not of boolean type.');
        }

        return desc;
    }
}

module.exports = {
    EXPORT: EXPORT_NAME,
    TYPE_NAME: TYPE_NAME,
    ctor: BooleanParameter
};
