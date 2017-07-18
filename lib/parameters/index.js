const ParameterBase = require('./parameter_base.js');

/**
 * List of flies containing the default parameters to be registered.
 * @type {[String]} Paths to each default parameter implementation that should be registered.
 */
const DEFAULT_TYPE_LIST = [
    './boolean',
    './integer',
    './scalar',
    './string'
];

module.exports = {
    registerDefaultParams: function(nodeParam) {
        for (const item of DEFAULT_TYPE_LIST) {
            const param = require(item);

            nodeParam.register(param.EXPORT, param.TYPE_NAME, param.ctor);
        }
    },

    ParameterBase: ParameterBase
};
