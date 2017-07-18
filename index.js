/**
 * This callback is used to create a particular type of parameter that has been registered with the module.
 * @callback ParameterCreationFunc
 * @param {Object} desc - Description of the parameter instance to be created.
 * @returns {Object} Parameter object that was created using the supplied description.
 */

const defaultParams = require('./lib/parameters');

const API = module.exports = {};

const typeMap = new Map();

API.Types = {};

/**
 * Removes all currently registered parameters from the module.
 */
API.clear = function() {
    for (const item of typeMap.values()) {
        API.unregister(item.typeName);
    }
};

/**
 * Retrieves the number of registered parameters within the module.
 * @returns {number} The number of registered parameter types.
 */
API.getParameterCount = function() {
    return typeMap.size;
};

/**
 *
 * @param {String} exportName - The name of the parameter type as it is exported from the module.
 * @param {String} typeName - Name of the parameter type being registered.
 * @param {ParameterCreationFunc} cb - Callback to be invoked when an instance of the parameter type is to be created.
 */
API.register = function(exportName, typeName, cb) {
    if (!exportName) {
        throw new Error('node_param.register - No export name was specified during registration.');
    }

    if (!typeName) {
        throw new Error('node_param.register - No type name was specified during registration.');
    }

    if (!cb) {
        throw new Error('node_param.register - No callback was provided during parameter type registration.');
    }

    if (typeof API.Types[exportName] !== 'undefined') {
        throw new Error('node_param.register - Parameter export type is already in use.');
    }

    if (typeMap.has(typeName)) {
        throw new Error('node_param.register - Parameter type has already been registered.');
    }

    API.Types[exportName] = typeName;

    typeMap.set(typeName, {
        exported: exportName,
        typeName: typeName,
        cb: cb
    });
};

/**
 * Removes a previously registered parameter declaration from the module.
 * @param typeName
 */
API.unregister = function(typeName) {
    const typeEntry = typeMap.get(typeName);
    if (!typeEntry) {
        throw new Error('node_param.unregister - Could not find specified type \'' + typeName + '\' for removal.');
    }

    delete API.Types[typeEntry.EXPORT];
    typeMap.delete(typeName);
};

/**
 *
 * @param {String} typeName - The type of parameter that is to be created.
 * @param {Object} desc - Description of the parameter instance to be created.
 * @returns {Object} Parameter object that was created using the supplied description.
 */
API.create = function(typeName, desc) {
    if (!typeName) {
        throw new Error('node_param.create - No type name was specified for creation.');
    }

    const cb = typeMap.get(typeName);
    if (!cb) {
        throw new Error('node_param.create - Unknown parameter type \'' + typeName + '\' requested for creation.');
    }

    return cb(desc);
};

/**
 * Export ParameterBase class to external modules.
 */
API.ParameterBase = defaultParams.ParameterBase;

// Finally ensure all default parameter types have been registered.
defaultParams.registerDefaultParams(API);

module.exports = API;
