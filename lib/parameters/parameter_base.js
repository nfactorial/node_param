/**
 * Base class for all parameter types that may be declared by an object.
 */
class ParameterBase {
    constructor(typeName, name, defaultValue) {
        if (!typeName) {
            throw new Error('ParameterBase.ctor - No type name was supplied during creation.');
        }

        if (!name) {
            throw new Error('ParameterBase.ctor - No name was provided for parameter.');
        }

        this.type = typeName;
        this.name = name;
        this.defaultValue = defaultValue;
    }

    /**
     * Retrueves the default value for the parameter. This method should be overridden by derived types.
     * @returns {null}
     */
    getDefaultValue() {
        return null;
    }

    /**
     * Extracts the parameter value from the supplied JSON definition. This method should be overridden by derived types.
     * @param {Object} desc - Description of the parameter value to be extracted.
     */
    extractValue(desc) {

    }
}

module.exports = ParameterBase;
