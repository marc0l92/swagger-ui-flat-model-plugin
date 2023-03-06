// Project: https://github.com/marc0l92/swagger-ui-flat-model-plugin
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component2(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component2.prototype.isReactComponent = {};
        Component2.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component2.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component2.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component2.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component2.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray2(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return getComponentNameFromType(init2(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty2 = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty2.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty2.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray2(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray2(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare3) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare3 === void 0 ? null : compare3
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init2) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init2);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component3) {
          var prototype = Component3.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init2 = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty2);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray2(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray2(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component2;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from2;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from2 = Object(arguments[s]);
        for (var key in from2) {
          if (hasOwnProperty2.call(from2, key)) {
            to[key] = from2[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from2);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from2, symbols[i])) {
              to[symbols[i]] = from2[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is2(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is2(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/immutable/dist/immutable.js
var require_immutable = __commonJS({
  "node_modules/immutable/dist/immutable.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.Immutable = factory();
    })(exports, function() {
      "use strict";
      var SLICE$0 = Array.prototype.slice;
      function createClass(ctor, superClass) {
        if (superClass) {
          ctor.prototype = Object.create(superClass.prototype);
        }
        ctor.prototype.constructor = ctor;
      }
      function Iterable(value) {
        return isIterable(value) ? value : Seq(value);
      }
      createClass(KeyedIterable, Iterable);
      function KeyedIterable(value) {
        return isKeyed(value) ? value : KeyedSeq(value);
      }
      createClass(IndexedIterable, Iterable);
      function IndexedIterable(value) {
        return isIndexed(value) ? value : IndexedSeq(value);
      }
      createClass(SetIterable, Iterable);
      function SetIterable(value) {
        return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
      }
      function isIterable(maybeIterable) {
        return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
      }
      function isKeyed(maybeKeyed) {
        return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
      }
      function isIndexed(maybeIndexed) {
        return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
      }
      function isAssociative(maybeAssociative) {
        return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
      }
      function isOrdered(maybeOrdered) {
        return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
      }
      Iterable.isIterable = isIterable;
      Iterable.isKeyed = isKeyed;
      Iterable.isIndexed = isIndexed;
      Iterable.isAssociative = isAssociative;
      Iterable.isOrdered = isOrdered;
      Iterable.Keyed = KeyedIterable;
      Iterable.Indexed = IndexedIterable;
      Iterable.Set = SetIterable;
      var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
      var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
      var IS_INDEXED_SENTINEL = "@@__IMMUTABLE_INDEXED__@@";
      var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
      var DELETE = "delete";
      var SHIFT = 5;
      var SIZE = 1 << SHIFT;
      var MASK = SIZE - 1;
      var NOT_SET2 = {};
      var CHANGE_LENGTH = { value: false };
      var DID_ALTER = { value: false };
      function MakeRef(ref) {
        ref.value = false;
        return ref;
      }
      function SetRef(ref) {
        ref && (ref.value = true);
      }
      function OwnerID() {
      }
      function arrCopy(arr, offset) {
        offset = offset || 0;
        var len = Math.max(0, arr.length - offset);
        var newArr = new Array(len);
        for (var ii = 0; ii < len; ii++) {
          newArr[ii] = arr[ii + offset];
        }
        return newArr;
      }
      function ensureSize(iter) {
        if (iter.size === void 0) {
          iter.size = iter.__iterate(returnTrue);
        }
        return iter.size;
      }
      function wrapIndex(iter, index) {
        if (typeof index !== "number") {
          var uint32Index = index >>> 0;
          if ("" + uint32Index !== index || uint32Index === 4294967295) {
            return NaN;
          }
          index = uint32Index;
        }
        return index < 0 ? ensureSize(iter) + index : index;
      }
      function returnTrue() {
        return true;
      }
      function wholeSlice(begin, end, size) {
        return (begin === 0 || size !== void 0 && begin <= -size) && (end === void 0 || size !== void 0 && end >= size);
      }
      function resolveBegin(begin, size) {
        return resolveIndex(begin, size, 0);
      }
      function resolveEnd(end, size) {
        return resolveIndex(end, size, size);
      }
      function resolveIndex(index, size, defaultIndex) {
        return index === void 0 ? defaultIndex : index < 0 ? Math.max(0, size + index) : size === void 0 ? index : Math.min(size, index);
      }
      var ITERATE_KEYS = 0;
      var ITERATE_VALUES = 1;
      var ITERATE_ENTRIES = 2;
      var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
      function Iterator(next) {
        this.next = next;
      }
      Iterator.prototype.toString = function() {
        return "[Iterator]";
      };
      Iterator.KEYS = ITERATE_KEYS;
      Iterator.VALUES = ITERATE_VALUES;
      Iterator.ENTRIES = ITERATE_ENTRIES;
      Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
        return this.toString();
      };
      Iterator.prototype[ITERATOR_SYMBOL] = function() {
        return this;
      };
      function iteratorValue(type, k, v, iteratorResult) {
        var value = type === 0 ? k : type === 1 ? v : [k, v];
        iteratorResult ? iteratorResult.value = value : iteratorResult = {
          value,
          done: false
        };
        return iteratorResult;
      }
      function iteratorDone() {
        return { value: void 0, done: true };
      }
      function hasIterator(maybeIterable) {
        return !!getIteratorFn(maybeIterable);
      }
      function isIterator(maybeIterator) {
        return maybeIterator && typeof maybeIterator.next === "function";
      }
      function getIterator(iterable) {
        var iteratorFn = getIteratorFn(iterable);
        return iteratorFn && iteratorFn.call(iterable);
      }
      function getIteratorFn(iterable) {
        var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      function isArrayLike(value) {
        return value && typeof value.length === "number";
      }
      createClass(Seq, Iterable);
      function Seq(value) {
        return value === null || value === void 0 ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
      }
      Seq.of = function() {
        return Seq(arguments);
      };
      Seq.prototype.toSeq = function() {
        return this;
      };
      Seq.prototype.toString = function() {
        return this.__toString("Seq {", "}");
      };
      Seq.prototype.cacheResult = function() {
        if (!this._cache && this.__iterateUncached) {
          this._cache = this.entrySeq().toArray();
          this.size = this._cache.length;
        }
        return this;
      };
      Seq.prototype.__iterate = function(fn, reverse) {
        return seqIterate(this, fn, reverse, true);
      };
      Seq.prototype.__iterator = function(type, reverse) {
        return seqIterator(this, type, reverse, true);
      };
      createClass(KeyedSeq, Seq);
      function KeyedSeq(value) {
        return value === null || value === void 0 ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
      }
      KeyedSeq.prototype.toKeyedSeq = function() {
        return this;
      };
      createClass(IndexedSeq, Seq);
      function IndexedSeq(value) {
        return value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
      }
      IndexedSeq.of = function() {
        return IndexedSeq(arguments);
      };
      IndexedSeq.prototype.toIndexedSeq = function() {
        return this;
      };
      IndexedSeq.prototype.toString = function() {
        return this.__toString("Seq [", "]");
      };
      IndexedSeq.prototype.__iterate = function(fn, reverse) {
        return seqIterate(this, fn, reverse, false);
      };
      IndexedSeq.prototype.__iterator = function(type, reverse) {
        return seqIterator(this, type, reverse, false);
      };
      createClass(SetSeq, Seq);
      function SetSeq(value) {
        return (value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value).toSetSeq();
      }
      SetSeq.of = function() {
        return SetSeq(arguments);
      };
      SetSeq.prototype.toSetSeq = function() {
        return this;
      };
      Seq.isSeq = isSeq;
      Seq.Keyed = KeyedSeq;
      Seq.Set = SetSeq;
      Seq.Indexed = IndexedSeq;
      var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
      Seq.prototype[IS_SEQ_SENTINEL] = true;
      createClass(ArraySeq, IndexedSeq);
      function ArraySeq(array) {
        this._array = array;
        this.size = array.length;
      }
      ArraySeq.prototype.get = function(index, notSetValue) {
        return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
      };
      ArraySeq.prototype.__iterate = function(fn, reverse) {
        var array = this._array;
        var maxIndex = array.length - 1;
        for (var ii = 0; ii <= maxIndex; ii++) {
          if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
            return ii + 1;
          }
        }
        return ii;
      };
      ArraySeq.prototype.__iterator = function(type, reverse) {
        var array = this._array;
        var maxIndex = array.length - 1;
        var ii = 0;
        return new Iterator(
          function() {
            return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++]);
          }
        );
      };
      createClass(ObjectSeq, KeyedSeq);
      function ObjectSeq(object) {
        var keys = Object.keys(object);
        this._object = object;
        this._keys = keys;
        this.size = keys.length;
      }
      ObjectSeq.prototype.get = function(key, notSetValue) {
        if (notSetValue !== void 0 && !this.has(key)) {
          return notSetValue;
        }
        return this._object[key];
      };
      ObjectSeq.prototype.has = function(key) {
        return this._object.hasOwnProperty(key);
      };
      ObjectSeq.prototype.__iterate = function(fn, reverse) {
        var object = this._object;
        var keys = this._keys;
        var maxIndex = keys.length - 1;
        for (var ii = 0; ii <= maxIndex; ii++) {
          var key = keys[reverse ? maxIndex - ii : ii];
          if (fn(object[key], key, this) === false) {
            return ii + 1;
          }
        }
        return ii;
      };
      ObjectSeq.prototype.__iterator = function(type, reverse) {
        var object = this._object;
        var keys = this._keys;
        var maxIndex = keys.length - 1;
        var ii = 0;
        return new Iterator(function() {
          var key = keys[reverse ? maxIndex - ii : ii];
          return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
        });
      };
      ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
      createClass(IterableSeq, IndexedSeq);
      function IterableSeq(iterable) {
        this._iterable = iterable;
        this.size = iterable.length || iterable.size;
      }
      IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var iterable = this._iterable;
        var iterator = getIterator(iterable);
        var iterations = 0;
        if (isIterator(iterator)) {
          var step;
          while (!(step = iterator.next()).done) {
            if (fn(step.value, iterations++, this) === false) {
              break;
            }
          }
        }
        return iterations;
      };
      IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterable = this._iterable;
        var iterator = getIterator(iterable);
        if (!isIterator(iterator)) {
          return new Iterator(iteratorDone);
        }
        var iterations = 0;
        return new Iterator(function() {
          var step = iterator.next();
          return step.done ? step : iteratorValue(type, iterations++, step.value);
        });
      };
      createClass(IteratorSeq, IndexedSeq);
      function IteratorSeq(iterator) {
        this._iterator = iterator;
        this._iteratorCache = [];
      }
      IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var iterator = this._iterator;
        var cache = this._iteratorCache;
        var iterations = 0;
        while (iterations < cache.length) {
          if (fn(cache[iterations], iterations++, this) === false) {
            return iterations;
          }
        }
        var step;
        while (!(step = iterator.next()).done) {
          var val = step.value;
          cache[iterations] = val;
          if (fn(val, iterations++, this) === false) {
            break;
          }
        }
        return iterations;
      };
      IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = this._iterator;
        var cache = this._iteratorCache;
        var iterations = 0;
        return new Iterator(function() {
          if (iterations >= cache.length) {
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            cache[iterations] = step.value;
          }
          return iteratorValue(type, iterations, cache[iterations++]);
        });
      };
      function isSeq(maybeSeq) {
        return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
      }
      var EMPTY_SEQ;
      function emptySequence() {
        return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
      }
      function keyedSeqFromValue(value) {
        var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : typeof value === "object" ? new ObjectSeq(value) : void 0;
        if (!seq) {
          throw new TypeError(
            "Expected Array or iterable object of [k, v] entries, or keyed object: " + value
          );
        }
        return seq;
      }
      function indexedSeqFromValue(value) {
        var seq = maybeIndexedSeqFromValue(value);
        if (!seq) {
          throw new TypeError(
            "Expected Array or iterable object of values: " + value
          );
        }
        return seq;
      }
      function seqFromValue(value) {
        var seq = maybeIndexedSeqFromValue(value) || typeof value === "object" && new ObjectSeq(value);
        if (!seq) {
          throw new TypeError(
            "Expected Array or iterable object of values, or keyed object: " + value
          );
        }
        return seq;
      }
      function maybeIndexedSeqFromValue(value) {
        return isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : void 0;
      }
      function seqIterate(seq, fn, reverse, useKeys) {
        var cache = seq._cache;
        if (cache) {
          var maxIndex = cache.length - 1;
          for (var ii = 0; ii <= maxIndex; ii++) {
            var entry = cache[reverse ? maxIndex - ii : ii];
            if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
              return ii + 1;
            }
          }
          return ii;
        }
        return seq.__iterateUncached(fn, reverse);
      }
      function seqIterator(seq, type, reverse, useKeys) {
        var cache = seq._cache;
        if (cache) {
          var maxIndex = cache.length - 1;
          var ii = 0;
          return new Iterator(function() {
            var entry = cache[reverse ? maxIndex - ii : ii];
            return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
          });
        }
        return seq.__iteratorUncached(type, reverse);
      }
      function fromJS(json, converter) {
        return converter ? fromJSWith(converter, json, "", { "": json }) : fromJSDefault(json);
      }
      function fromJSWith(converter, json, key, parentJSON) {
        if (Array.isArray(json)) {
          return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k) {
            return fromJSWith(converter, v, k, json);
          }));
        }
        if (isPlainObj(json)) {
          return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k) {
            return fromJSWith(converter, v, k, json);
          }));
        }
        return json;
      }
      function fromJSDefault(json) {
        if (Array.isArray(json)) {
          return IndexedSeq(json).map(fromJSDefault).toList();
        }
        if (isPlainObj(json)) {
          return KeyedSeq(json).map(fromJSDefault).toMap();
        }
        return json;
      }
      function isPlainObj(value) {
        return value && (value.constructor === Object || value.constructor === void 0);
      }
      function is2(valueA, valueB) {
        if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
          return true;
        }
        if (!valueA || !valueB) {
          return false;
        }
        if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
          valueA = valueA.valueOf();
          valueB = valueB.valueOf();
          if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
            return true;
          }
          if (!valueA || !valueB) {
            return false;
          }
        }
        if (typeof valueA.equals === "function" && typeof valueB.equals === "function" && valueA.equals(valueB)) {
          return true;
        }
        return false;
      }
      function deepEqual(a, b) {
        if (a === b) {
          return true;
        }
        if (!isIterable(b) || a.size !== void 0 && b.size !== void 0 && a.size !== b.size || a.__hash !== void 0 && b.__hash !== void 0 && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
          return false;
        }
        if (a.size === 0 && b.size === 0) {
          return true;
        }
        var notAssociative = !isAssociative(a);
        if (isOrdered(a)) {
          var entries = a.entries();
          return b.every(function(v, k) {
            var entry = entries.next().value;
            return entry && is2(entry[1], v) && (notAssociative || is2(entry[0], k));
          }) && entries.next().done;
        }
        var flipped = false;
        if (a.size === void 0) {
          if (b.size === void 0) {
            if (typeof a.cacheResult === "function") {
              a.cacheResult();
            }
          } else {
            flipped = true;
            var _ = a;
            a = b;
            b = _;
          }
        }
        var allEqual = true;
        var bSize = b.__iterate(function(v, k) {
          if (notAssociative ? !a.has(v) : flipped ? !is2(v, a.get(k, NOT_SET2)) : !is2(a.get(k, NOT_SET2), v)) {
            allEqual = false;
            return false;
          }
        });
        return allEqual && a.size === bSize;
      }
      createClass(Repeat, IndexedSeq);
      function Repeat(value, times) {
        if (!(this instanceof Repeat)) {
          return new Repeat(value, times);
        }
        this._value = value;
        this.size = times === void 0 ? Infinity : Math.max(0, times);
        if (this.size === 0) {
          if (EMPTY_REPEAT) {
            return EMPTY_REPEAT;
          }
          EMPTY_REPEAT = this;
        }
      }
      Repeat.prototype.toString = function() {
        if (this.size === 0) {
          return "Repeat []";
        }
        return "Repeat [ " + this._value + " " + this.size + " times ]";
      };
      Repeat.prototype.get = function(index, notSetValue) {
        return this.has(index) ? this._value : notSetValue;
      };
      Repeat.prototype.includes = function(searchValue) {
        return is2(this._value, searchValue);
      };
      Repeat.prototype.slice = function(begin, end) {
        var size = this.size;
        return wholeSlice(begin, end, size) ? this : new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
      };
      Repeat.prototype.reverse = function() {
        return this;
      };
      Repeat.prototype.indexOf = function(searchValue) {
        if (is2(this._value, searchValue)) {
          return 0;
        }
        return -1;
      };
      Repeat.prototype.lastIndexOf = function(searchValue) {
        if (is2(this._value, searchValue)) {
          return this.size;
        }
        return -1;
      };
      Repeat.prototype.__iterate = function(fn, reverse) {
        for (var ii = 0; ii < this.size; ii++) {
          if (fn(this._value, ii, this) === false) {
            return ii + 1;
          }
        }
        return ii;
      };
      Repeat.prototype.__iterator = function(type, reverse) {
        var this$0 = this;
        var ii = 0;
        return new Iterator(
          function() {
            return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone();
          }
        );
      };
      Repeat.prototype.equals = function(other) {
        return other instanceof Repeat ? is2(this._value, other._value) : deepEqual(other);
      };
      var EMPTY_REPEAT;
      function invariant2(condition, error) {
        if (!condition)
          throw new Error(error);
      }
      createClass(Range, IndexedSeq);
      function Range(start, end, step) {
        if (!(this instanceof Range)) {
          return new Range(start, end, step);
        }
        invariant2(step !== 0, "Cannot step a Range by 0");
        start = start || 0;
        if (end === void 0) {
          end = Infinity;
        }
        step = step === void 0 ? 1 : Math.abs(step);
        if (end < start) {
          step = -step;
        }
        this._start = start;
        this._end = end;
        this._step = step;
        this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
        if (this.size === 0) {
          if (EMPTY_RANGE) {
            return EMPTY_RANGE;
          }
          EMPTY_RANGE = this;
        }
      }
      Range.prototype.toString = function() {
        if (this.size === 0) {
          return "Range []";
        }
        return "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
      };
      Range.prototype.get = function(index, notSetValue) {
        return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
      };
      Range.prototype.includes = function(searchValue) {
        var possibleIndex = (searchValue - this._start) / this._step;
        return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
      };
      Range.prototype.slice = function(begin, end) {
        if (wholeSlice(begin, end, this.size)) {
          return this;
        }
        begin = resolveBegin(begin, this.size);
        end = resolveEnd(end, this.size);
        if (end <= begin) {
          return new Range(0, 0);
        }
        return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
      };
      Range.prototype.indexOf = function(searchValue) {
        var offsetValue = searchValue - this._start;
        if (offsetValue % this._step === 0) {
          var index = offsetValue / this._step;
          if (index >= 0 && index < this.size) {
            return index;
          }
        }
        return -1;
      };
      Range.prototype.lastIndexOf = function(searchValue) {
        return this.indexOf(searchValue);
      };
      Range.prototype.__iterate = function(fn, reverse) {
        var maxIndex = this.size - 1;
        var step = this._step;
        var value = reverse ? this._start + maxIndex * step : this._start;
        for (var ii = 0; ii <= maxIndex; ii++) {
          if (fn(value, ii, this) === false) {
            return ii + 1;
          }
          value += reverse ? -step : step;
        }
        return ii;
      };
      Range.prototype.__iterator = function(type, reverse) {
        var maxIndex = this.size - 1;
        var step = this._step;
        var value = reverse ? this._start + maxIndex * step : this._start;
        var ii = 0;
        return new Iterator(function() {
          var v = value;
          value += reverse ? -step : step;
          return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
        });
      };
      Range.prototype.equals = function(other) {
        return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
      };
      var EMPTY_RANGE;
      createClass(Collection, Iterable);
      function Collection() {
        throw TypeError("Abstract");
      }
      createClass(KeyedCollection, Collection);
      function KeyedCollection() {
      }
      createClass(IndexedCollection, Collection);
      function IndexedCollection() {
      }
      createClass(SetCollection, Collection);
      function SetCollection() {
      }
      Collection.Keyed = KeyedCollection;
      Collection.Indexed = IndexedCollection;
      Collection.Set = SetCollection;
      var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul2(a, b) {
        a = a | 0;
        b = b | 0;
        var c = a & 65535;
        var d = b & 65535;
        return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
      };
      function smi(i32) {
        return i32 >>> 1 & 1073741824 | i32 & 3221225471;
      }
      function hash(o) {
        if (o === false || o === null || o === void 0) {
          return 0;
        }
        if (typeof o.valueOf === "function") {
          o = o.valueOf();
          if (o === false || o === null || o === void 0) {
            return 0;
          }
        }
        if (o === true) {
          return 1;
        }
        var type = typeof o;
        if (type === "number") {
          if (o !== o || o === Infinity) {
            return 0;
          }
          var h = o | 0;
          if (h !== o) {
            h ^= o * 4294967295;
          }
          while (o > 4294967295) {
            o /= 4294967295;
            h ^= o;
          }
          return smi(h);
        }
        if (type === "string") {
          return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
        }
        if (typeof o.hashCode === "function") {
          return o.hashCode();
        }
        if (type === "object") {
          return hashJSObj(o);
        }
        if (typeof o.toString === "function") {
          return hashString(o.toString());
        }
        throw new Error("Value type " + type + " cannot be hashed.");
      }
      function cachedHashString(string) {
        var hash2 = stringHashCache[string];
        if (hash2 === void 0) {
          hash2 = hashString(string);
          if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
            STRING_HASH_CACHE_SIZE = 0;
            stringHashCache = {};
          }
          STRING_HASH_CACHE_SIZE++;
          stringHashCache[string] = hash2;
        }
        return hash2;
      }
      function hashString(string) {
        var hash2 = 0;
        for (var ii = 0; ii < string.length; ii++) {
          hash2 = 31 * hash2 + string.charCodeAt(ii) | 0;
        }
        return smi(hash2);
      }
      function hashJSObj(obj) {
        var hash2;
        if (usingWeakMap) {
          hash2 = weakMap.get(obj);
          if (hash2 !== void 0) {
            return hash2;
          }
        }
        hash2 = obj[UID_HASH_KEY];
        if (hash2 !== void 0) {
          return hash2;
        }
        if (!canDefineProperty) {
          hash2 = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
          if (hash2 !== void 0) {
            return hash2;
          }
          hash2 = getIENodeHash(obj);
          if (hash2 !== void 0) {
            return hash2;
          }
        }
        hash2 = ++objHashUID;
        if (objHashUID & 1073741824) {
          objHashUID = 0;
        }
        if (usingWeakMap) {
          weakMap.set(obj, hash2);
        } else if (isExtensible !== void 0 && isExtensible(obj) === false) {
          throw new Error("Non-extensible objects are not allowed as keys.");
        } else if (canDefineProperty) {
          Object.defineProperty(obj, UID_HASH_KEY, {
            "enumerable": false,
            "configurable": false,
            "writable": false,
            "value": hash2
          });
        } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
          obj.propertyIsEnumerable = function() {
            return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
          };
          obj.propertyIsEnumerable[UID_HASH_KEY] = hash2;
        } else if (obj.nodeType !== void 0) {
          obj[UID_HASH_KEY] = hash2;
        } else {
          throw new Error("Unable to set a non-enumerable property on object.");
        }
        return hash2;
      }
      var isExtensible = Object.isExtensible;
      var canDefineProperty = function() {
        try {
          Object.defineProperty({}, "@", {});
          return true;
        } catch (e) {
          return false;
        }
      }();
      function getIENodeHash(node) {
        if (node && node.nodeType > 0) {
          switch (node.nodeType) {
            case 1:
              return node.uniqueID;
            case 9:
              return node.documentElement && node.documentElement.uniqueID;
          }
        }
      }
      var usingWeakMap = typeof WeakMap === "function";
      var weakMap;
      if (usingWeakMap) {
        weakMap = /* @__PURE__ */ new WeakMap();
      }
      var objHashUID = 0;
      var UID_HASH_KEY = "__immutablehash__";
      if (typeof Symbol === "function") {
        UID_HASH_KEY = Symbol(UID_HASH_KEY);
      }
      var STRING_HASH_CACHE_MIN_STRLEN = 16;
      var STRING_HASH_CACHE_MAX_SIZE = 255;
      var STRING_HASH_CACHE_SIZE = 0;
      var stringHashCache = {};
      function assertNotInfinite(size) {
        invariant2(
          size !== Infinity,
          "Cannot perform this action with an infinite size."
        );
      }
      createClass(Map2, KeyedCollection);
      function Map2(value) {
        return value === null || value === void 0 ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k) {
            return map.set(k, v);
          });
        });
      }
      Map2.of = function() {
        var keyValues = SLICE$0.call(arguments, 0);
        return emptyMap().withMutations(function(map) {
          for (var i = 0; i < keyValues.length; i += 2) {
            if (i + 1 >= keyValues.length) {
              throw new Error("Missing value for key: " + keyValues[i]);
            }
            map.set(keyValues[i], keyValues[i + 1]);
          }
        });
      };
      Map2.prototype.toString = function() {
        return this.__toString("Map {", "}");
      };
      Map2.prototype.get = function(k, notSetValue) {
        return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
      };
      Map2.prototype.set = function(k, v) {
        return updateMap(this, k, v);
      };
      Map2.prototype.setIn = function(keyPath, v) {
        return this.updateIn(keyPath, NOT_SET2, function() {
          return v;
        });
      };
      Map2.prototype.remove = function(k) {
        return updateMap(this, k, NOT_SET2);
      };
      Map2.prototype.deleteIn = function(keyPath) {
        return this.updateIn(keyPath, function() {
          return NOT_SET2;
        });
      };
      Map2.prototype.update = function(k, notSetValue, updater) {
        return arguments.length === 1 ? k(this) : this.updateIn([k], notSetValue, updater);
      };
      Map2.prototype.updateIn = function(keyPath, notSetValue, updater) {
        if (!updater) {
          updater = notSetValue;
          notSetValue = void 0;
        }
        var updatedValue = updateInDeepMap(
          this,
          forceIterator(keyPath),
          notSetValue,
          updater
        );
        return updatedValue === NOT_SET2 ? void 0 : updatedValue;
      };
      Map2.prototype.clear = function() {
        if (this.size === 0) {
          return this;
        }
        if (this.__ownerID) {
          this.size = 0;
          this._root = null;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return emptyMap();
      };
      Map2.prototype.merge = function() {
        return mergeIntoMapWith(this, void 0, arguments);
      };
      Map2.prototype.mergeWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return mergeIntoMapWith(this, merger, iters);
      };
      Map2.prototype.mergeIn = function(keyPath) {
        var iters = SLICE$0.call(arguments, 1);
        return this.updateIn(
          keyPath,
          emptyMap(),
          function(m) {
            return typeof m.merge === "function" ? m.merge.apply(m, iters) : iters[iters.length - 1];
          }
        );
      };
      Map2.prototype.mergeDeep = function() {
        return mergeIntoMapWith(this, deepMerger, arguments);
      };
      Map2.prototype.mergeDeepWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return mergeIntoMapWith(this, deepMergerWith(merger), iters);
      };
      Map2.prototype.mergeDeepIn = function(keyPath) {
        var iters = SLICE$0.call(arguments, 1);
        return this.updateIn(
          keyPath,
          emptyMap(),
          function(m) {
            return typeof m.mergeDeep === "function" ? m.mergeDeep.apply(m, iters) : iters[iters.length - 1];
          }
        );
      };
      Map2.prototype.sort = function(comparator) {
        return OrderedMap(sortFactory(this, comparator));
      };
      Map2.prototype.sortBy = function(mapper, comparator) {
        return OrderedMap(sortFactory(this, comparator, mapper));
      };
      Map2.prototype.withMutations = function(fn) {
        var mutable = this.asMutable();
        fn(mutable);
        return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
      };
      Map2.prototype.asMutable = function() {
        return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
      };
      Map2.prototype.asImmutable = function() {
        return this.__ensureOwner();
      };
      Map2.prototype.wasAltered = function() {
        return this.__altered;
      };
      Map2.prototype.__iterator = function(type, reverse) {
        return new MapIterator(this, type, reverse);
      };
      Map2.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        var iterations = 0;
        this._root && this._root.iterate(function(entry) {
          iterations++;
          return fn(entry[1], entry[0], this$0);
        }, reverse);
        return iterations;
      };
      Map2.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        if (!ownerID) {
          this.__ownerID = ownerID;
          this.__altered = false;
          return this;
        }
        return makeMap(this.size, this._root, ownerID, this.__hash);
      };
      function isMap(maybeMap) {
        return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
      }
      Map2.isMap = isMap;
      var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
      var MapPrototype = Map2.prototype;
      MapPrototype[IS_MAP_SENTINEL] = true;
      MapPrototype[DELETE] = MapPrototype.remove;
      MapPrototype.removeIn = MapPrototype.deleteIn;
      function ArrayMapNode(ownerID, entries) {
        this.ownerID = ownerID;
        this.entries = entries;
      }
      ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        var entries = this.entries;
        for (var ii = 0, len = entries.length; ii < len; ii++) {
          if (is2(key, entries[ii][0])) {
            return entries[ii][1];
          }
        }
        return notSetValue;
      };
      ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        var removed = value === NOT_SET2;
        var entries = this.entries;
        var idx = 0;
        for (var len = entries.length; idx < len; idx++) {
          if (is2(key, entries[idx][0])) {
            break;
          }
        }
        var exists = idx < len;
        if (exists ? entries[idx][1] === value : removed) {
          return this;
        }
        SetRef(didAlter);
        (removed || !exists) && SetRef(didChangeSize);
        if (removed && entries.length === 1) {
          return;
        }
        if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
          return createNodes(ownerID, entries, key, value);
        }
        var isEditable = ownerID && ownerID === this.ownerID;
        var newEntries = isEditable ? entries : arrCopy(entries);
        if (exists) {
          if (removed) {
            idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
          } else {
            newEntries[idx] = [key, value];
          }
        } else {
          newEntries.push([key, value]);
        }
        if (isEditable) {
          this.entries = newEntries;
          return this;
        }
        return new ArrayMapNode(ownerID, newEntries);
      };
      function BitmapIndexedNode(ownerID, bitmap, nodes) {
        this.ownerID = ownerID;
        this.bitmap = bitmap;
        this.nodes = nodes;
      }
      BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
        var bitmap = this.bitmap;
        return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
      };
      BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
        var bit = 1 << keyHashFrag;
        var bitmap = this.bitmap;
        var exists = (bitmap & bit) !== 0;
        if (!exists && value === NOT_SET2) {
          return this;
        }
        var idx = popCount(bitmap & bit - 1);
        var nodes = this.nodes;
        var node = exists ? nodes[idx] : void 0;
        var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
        if (newNode === node) {
          return this;
        }
        if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
          return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
        }
        if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
          return nodes[idx ^ 1];
        }
        if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
          return newNode;
        }
        var isEditable = ownerID && ownerID === this.ownerID;
        var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
        var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
        if (isEditable) {
          this.bitmap = newBitmap;
          this.nodes = newNodes;
          return this;
        }
        return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
      };
      function HashArrayMapNode(ownerID, count, nodes) {
        this.ownerID = ownerID;
        this.count = count;
        this.nodes = nodes;
      }
      HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
        var node = this.nodes[idx];
        return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
      };
      HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
        var removed = value === NOT_SET2;
        var nodes = this.nodes;
        var node = nodes[idx];
        if (removed && !node) {
          return this;
        }
        var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
        if (newNode === node) {
          return this;
        }
        var newCount = this.count;
        if (!node) {
          newCount++;
        } else if (!newNode) {
          newCount--;
          if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
            return packNodes(ownerID, nodes, newCount, idx);
          }
        }
        var isEditable = ownerID && ownerID === this.ownerID;
        var newNodes = setIn(nodes, idx, newNode, isEditable);
        if (isEditable) {
          this.count = newCount;
          this.nodes = newNodes;
          return this;
        }
        return new HashArrayMapNode(ownerID, newCount, newNodes);
      };
      function HashCollisionNode(ownerID, keyHash, entries) {
        this.ownerID = ownerID;
        this.keyHash = keyHash;
        this.entries = entries;
      }
      HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        var entries = this.entries;
        for (var ii = 0, len = entries.length; ii < len; ii++) {
          if (is2(key, entries[ii][0])) {
            return entries[ii][1];
          }
        }
        return notSetValue;
      };
      HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var removed = value === NOT_SET2;
        if (keyHash !== this.keyHash) {
          if (removed) {
            return this;
          }
          SetRef(didAlter);
          SetRef(didChangeSize);
          return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
        }
        var entries = this.entries;
        var idx = 0;
        for (var len = entries.length; idx < len; idx++) {
          if (is2(key, entries[idx][0])) {
            break;
          }
        }
        var exists = idx < len;
        if (exists ? entries[idx][1] === value : removed) {
          return this;
        }
        SetRef(didAlter);
        (removed || !exists) && SetRef(didChangeSize);
        if (removed && len === 2) {
          return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
        }
        var isEditable = ownerID && ownerID === this.ownerID;
        var newEntries = isEditable ? entries : arrCopy(entries);
        if (exists) {
          if (removed) {
            idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
          } else {
            newEntries[idx] = [key, value];
          }
        } else {
          newEntries.push([key, value]);
        }
        if (isEditable) {
          this.entries = newEntries;
          return this;
        }
        return new HashCollisionNode(ownerID, this.keyHash, newEntries);
      };
      function ValueNode(ownerID, keyHash, entry) {
        this.ownerID = ownerID;
        this.keyHash = keyHash;
        this.entry = entry;
      }
      ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        return is2(key, this.entry[0]) ? this.entry[1] : notSetValue;
      };
      ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        var removed = value === NOT_SET2;
        var keyMatch = is2(key, this.entry[0]);
        if (keyMatch ? value === this.entry[1] : removed) {
          return this;
        }
        SetRef(didAlter);
        if (removed) {
          SetRef(didChangeSize);
          return;
        }
        if (keyMatch) {
          if (ownerID && ownerID === this.ownerID) {
            this.entry[1] = value;
            return this;
          }
          return new ValueNode(ownerID, this.keyHash, [key, value]);
        }
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
      };
      ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse) {
        var entries = this.entries;
        for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
          if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
            return false;
          }
        }
      };
      BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse) {
        var nodes = this.nodes;
        for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
          var node = nodes[reverse ? maxIndex - ii : ii];
          if (node && node.iterate(fn, reverse) === false) {
            return false;
          }
        }
      };
      ValueNode.prototype.iterate = function(fn, reverse) {
        return fn(this.entry);
      };
      createClass(MapIterator, Iterator);
      function MapIterator(map, type, reverse) {
        this._type = type;
        this._reverse = reverse;
        this._stack = map._root && mapIteratorFrame(map._root);
      }
      MapIterator.prototype.next = function() {
        var type = this._type;
        var stack = this._stack;
        while (stack) {
          var node = stack.node;
          var index = stack.index++;
          var maxIndex;
          if (node.entry) {
            if (index === 0) {
              return mapIteratorValue(type, node.entry);
            }
          } else if (node.entries) {
            maxIndex = node.entries.length - 1;
            if (index <= maxIndex) {
              return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
            }
          } else {
            maxIndex = node.nodes.length - 1;
            if (index <= maxIndex) {
              var subNode = node.nodes[this._reverse ? maxIndex - index : index];
              if (subNode) {
                if (subNode.entry) {
                  return mapIteratorValue(type, subNode.entry);
                }
                stack = this._stack = mapIteratorFrame(subNode, stack);
              }
              continue;
            }
          }
          stack = this._stack = this._stack.__prev;
        }
        return iteratorDone();
      };
      function mapIteratorValue(type, entry) {
        return iteratorValue(type, entry[0], entry[1]);
      }
      function mapIteratorFrame(node, prev) {
        return {
          node,
          index: 0,
          __prev: prev
        };
      }
      function makeMap(size, root, ownerID, hash2) {
        var map = Object.create(MapPrototype);
        map.size = size;
        map._root = root;
        map.__ownerID = ownerID;
        map.__hash = hash2;
        map.__altered = false;
        return map;
      }
      var EMPTY_MAP;
      function emptyMap() {
        return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
      }
      function updateMap(map, k, v) {
        var newRoot;
        var newSize;
        if (!map._root) {
          if (v === NOT_SET2) {
            return map;
          }
          newSize = 1;
          newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
        } else {
          var didChangeSize = MakeRef(CHANGE_LENGTH);
          var didAlter = MakeRef(DID_ALTER);
          newRoot = updateNode(map._root, map.__ownerID, 0, void 0, k, v, didChangeSize, didAlter);
          if (!didAlter.value) {
            return map;
          }
          newSize = map.size + (didChangeSize.value ? v === NOT_SET2 ? -1 : 1 : 0);
        }
        if (map.__ownerID) {
          map.size = newSize;
          map._root = newRoot;
          map.__hash = void 0;
          map.__altered = true;
          return map;
        }
        return newRoot ? makeMap(newSize, newRoot) : emptyMap();
      }
      function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        if (!node) {
          if (value === NOT_SET2) {
            return node;
          }
          SetRef(didAlter);
          SetRef(didChangeSize);
          return new ValueNode(ownerID, keyHash, [key, value]);
        }
        return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
      }
      function isLeafNode(node) {
        return node.constructor === ValueNode || node.constructor === HashCollisionNode;
      }
      function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
        if (node.keyHash === keyHash) {
          return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
        }
        var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
        var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
        var newNode;
        var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
        return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
      }
      function createNodes(ownerID, entries, key, value) {
        if (!ownerID) {
          ownerID = new OwnerID();
        }
        var node = new ValueNode(ownerID, hash(key), [key, value]);
        for (var ii = 0; ii < entries.length; ii++) {
          var entry = entries[ii];
          node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
        }
        return node;
      }
      function packNodes(ownerID, nodes, count, excluding) {
        var bitmap = 0;
        var packedII = 0;
        var packedNodes = new Array(count);
        for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
          var node = nodes[ii];
          if (node !== void 0 && ii !== excluding) {
            bitmap |= bit;
            packedNodes[packedII++] = node;
          }
        }
        return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
      }
      function expandNodes(ownerID, nodes, bitmap, including, node) {
        var count = 0;
        var expandedNodes = new Array(SIZE);
        for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
          expandedNodes[ii] = bitmap & 1 ? nodes[count++] : void 0;
        }
        expandedNodes[including] = node;
        return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
      }
      function mergeIntoMapWith(map, merger, iterables) {
        var iters = [];
        for (var ii = 0; ii < iterables.length; ii++) {
          var value = iterables[ii];
          var iter = KeyedIterable(value);
          if (!isIterable(value)) {
            iter = iter.map(function(v) {
              return fromJS(v);
            });
          }
          iters.push(iter);
        }
        return mergeIntoCollectionWith(map, merger, iters);
      }
      function deepMerger(existing, value, key) {
        return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is2(existing, value) ? existing : value;
      }
      function deepMergerWith(merger) {
        return function(existing, value, key) {
          if (existing && existing.mergeDeepWith && isIterable(value)) {
            return existing.mergeDeepWith(merger, value);
          }
          var nextValue = merger(existing, value, key);
          return is2(existing, nextValue) ? existing : nextValue;
        };
      }
      function mergeIntoCollectionWith(collection, merger, iters) {
        iters = iters.filter(function(x) {
          return x.size !== 0;
        });
        if (iters.length === 0) {
          return collection;
        }
        if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
          return collection.constructor(iters[0]);
        }
        return collection.withMutations(function(collection2) {
          var mergeIntoMap = merger ? function(value, key) {
            collection2.update(
              key,
              NOT_SET2,
              function(existing) {
                return existing === NOT_SET2 ? value : merger(existing, value, key);
              }
            );
          } : function(value, key) {
            collection2.set(key, value);
          };
          for (var ii = 0; ii < iters.length; ii++) {
            iters[ii].forEach(mergeIntoMap);
          }
        });
      }
      function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
        var isNotSet = existing === NOT_SET2;
        var step = keyPathIter.next();
        if (step.done) {
          var existingValue = isNotSet ? notSetValue : existing;
          var newValue = updater(existingValue);
          return newValue === existingValue ? existing : newValue;
        }
        invariant2(
          isNotSet || existing && existing.set,
          "invalid keyPath"
        );
        var key = step.value;
        var nextExisting = isNotSet ? NOT_SET2 : existing.get(key, NOT_SET2);
        var nextUpdated = updateInDeepMap(
          nextExisting,
          keyPathIter,
          notSetValue,
          updater
        );
        return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET2 ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
      }
      function popCount(x) {
        x = x - (x >> 1 & 1431655765);
        x = (x & 858993459) + (x >> 2 & 858993459);
        x = x + (x >> 4) & 252645135;
        x = x + (x >> 8);
        x = x + (x >> 16);
        return x & 127;
      }
      function setIn(array, idx, val, canEdit) {
        var newArray = canEdit ? array : arrCopy(array);
        newArray[idx] = val;
        return newArray;
      }
      function spliceIn(array, idx, val, canEdit) {
        var newLen = array.length + 1;
        if (canEdit && idx + 1 === newLen) {
          array[idx] = val;
          return array;
        }
        var newArray = new Array(newLen);
        var after = 0;
        for (var ii = 0; ii < newLen; ii++) {
          if (ii === idx) {
            newArray[ii] = val;
            after = -1;
          } else {
            newArray[ii] = array[ii + after];
          }
        }
        return newArray;
      }
      function spliceOut(array, idx, canEdit) {
        var newLen = array.length - 1;
        if (canEdit && idx === newLen) {
          array.pop();
          return array;
        }
        var newArray = new Array(newLen);
        var after = 0;
        for (var ii = 0; ii < newLen; ii++) {
          if (ii === idx) {
            after = 1;
          }
          newArray[ii] = array[ii + after];
        }
        return newArray;
      }
      var MAX_ARRAY_MAP_SIZE = SIZE / 4;
      var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
      var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
      createClass(List2, IndexedCollection);
      function List2(value) {
        var empty = emptyList();
        if (value === null || value === void 0) {
          return empty;
        }
        if (isList(value)) {
          return value;
        }
        var iter = IndexedIterable(value);
        var size = iter.size;
        if (size === 0) {
          return empty;
        }
        assertNotInfinite(size);
        if (size > 0 && size < SIZE) {
          return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
        }
        return empty.withMutations(function(list) {
          list.setSize(size);
          iter.forEach(function(v, i) {
            return list.set(i, v);
          });
        });
      }
      List2.of = function() {
        return this(arguments);
      };
      List2.prototype.toString = function() {
        return this.__toString("List [", "]");
      };
      List2.prototype.get = function(index, notSetValue) {
        index = wrapIndex(this, index);
        if (index >= 0 && index < this.size) {
          index += this._origin;
          var node = listNodeFor(this, index);
          return node && node.array[index & MASK];
        }
        return notSetValue;
      };
      List2.prototype.set = function(index, value) {
        return updateList(this, index, value);
      };
      List2.prototype.remove = function(index) {
        return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
      };
      List2.prototype.insert = function(index, value) {
        return this.splice(index, 0, value);
      };
      List2.prototype.clear = function() {
        if (this.size === 0) {
          return this;
        }
        if (this.__ownerID) {
          this.size = this._origin = this._capacity = 0;
          this._level = SHIFT;
          this._root = this._tail = null;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return emptyList();
      };
      List2.prototype.push = function() {
        var values = arguments;
        var oldSize = this.size;
        return this.withMutations(function(list) {
          setListBounds(list, 0, oldSize + values.length);
          for (var ii = 0; ii < values.length; ii++) {
            list.set(oldSize + ii, values[ii]);
          }
        });
      };
      List2.prototype.pop = function() {
        return setListBounds(this, 0, -1);
      };
      List2.prototype.unshift = function() {
        var values = arguments;
        return this.withMutations(function(list) {
          setListBounds(list, -values.length);
          for (var ii = 0; ii < values.length; ii++) {
            list.set(ii, values[ii]);
          }
        });
      };
      List2.prototype.shift = function() {
        return setListBounds(this, 1);
      };
      List2.prototype.merge = function() {
        return mergeIntoListWith(this, void 0, arguments);
      };
      List2.prototype.mergeWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return mergeIntoListWith(this, merger, iters);
      };
      List2.prototype.mergeDeep = function() {
        return mergeIntoListWith(this, deepMerger, arguments);
      };
      List2.prototype.mergeDeepWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return mergeIntoListWith(this, deepMergerWith(merger), iters);
      };
      List2.prototype.setSize = function(size) {
        return setListBounds(this, 0, size);
      };
      List2.prototype.slice = function(begin, end) {
        var size = this.size;
        if (wholeSlice(begin, end, size)) {
          return this;
        }
        return setListBounds(
          this,
          resolveBegin(begin, size),
          resolveEnd(end, size)
        );
      };
      List2.prototype.__iterator = function(type, reverse) {
        var index = 0;
        var values = iterateList(this, reverse);
        return new Iterator(function() {
          var value = values();
          return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
        });
      };
      List2.prototype.__iterate = function(fn, reverse) {
        var index = 0;
        var values = iterateList(this, reverse);
        var value;
        while ((value = values()) !== DONE) {
          if (fn(value, index++, this) === false) {
            break;
          }
        }
        return index;
      };
      List2.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        if (!ownerID) {
          this.__ownerID = ownerID;
          return this;
        }
        return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
      };
      function isList(maybeList) {
        return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
      }
      List2.isList = isList;
      var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
      var ListPrototype = List2.prototype;
      ListPrototype[IS_LIST_SENTINEL] = true;
      ListPrototype[DELETE] = ListPrototype.remove;
      ListPrototype.setIn = MapPrototype.setIn;
      ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn;
      ListPrototype.update = MapPrototype.update;
      ListPrototype.updateIn = MapPrototype.updateIn;
      ListPrototype.mergeIn = MapPrototype.mergeIn;
      ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
      ListPrototype.withMutations = MapPrototype.withMutations;
      ListPrototype.asMutable = MapPrototype.asMutable;
      ListPrototype.asImmutable = MapPrototype.asImmutable;
      ListPrototype.wasAltered = MapPrototype.wasAltered;
      function VNode(array, ownerID) {
        this.array = array;
        this.ownerID = ownerID;
      }
      VNode.prototype.removeBefore = function(ownerID, level, index) {
        if (index === level ? 1 << level : this.array.length === 0) {
          return this;
        }
        var originIndex = index >>> level & MASK;
        if (originIndex >= this.array.length) {
          return new VNode([], ownerID);
        }
        var removingFirst = originIndex === 0;
        var newChild;
        if (level > 0) {
          var oldChild = this.array[originIndex];
          newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
          if (newChild === oldChild && removingFirst) {
            return this;
          }
        }
        if (removingFirst && !newChild) {
          return this;
        }
        var editable = editableVNode(this, ownerID);
        if (!removingFirst) {
          for (var ii = 0; ii < originIndex; ii++) {
            editable.array[ii] = void 0;
          }
        }
        if (newChild) {
          editable.array[originIndex] = newChild;
        }
        return editable;
      };
      VNode.prototype.removeAfter = function(ownerID, level, index) {
        if (index === (level ? 1 << level : 0) || this.array.length === 0) {
          return this;
        }
        var sizeIndex = index - 1 >>> level & MASK;
        if (sizeIndex >= this.array.length) {
          return this;
        }
        var newChild;
        if (level > 0) {
          var oldChild = this.array[sizeIndex];
          newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
          if (newChild === oldChild && sizeIndex === this.array.length - 1) {
            return this;
          }
        }
        var editable = editableVNode(this, ownerID);
        editable.array.splice(sizeIndex + 1);
        if (newChild) {
          editable.array[sizeIndex] = newChild;
        }
        return editable;
      };
      var DONE = {};
      function iterateList(list, reverse) {
        var left = list._origin;
        var right = list._capacity;
        var tailPos = getTailOffset(right);
        var tail = list._tail;
        return iterateNodeOrLeaf(list._root, list._level, 0);
        function iterateNodeOrLeaf(node, level, offset) {
          return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
        }
        function iterateLeaf(node, offset) {
          var array = offset === tailPos ? tail && tail.array : node && node.array;
          var from2 = offset > left ? 0 : left - offset;
          var to = right - offset;
          if (to > SIZE) {
            to = SIZE;
          }
          return function() {
            if (from2 === to) {
              return DONE;
            }
            var idx = reverse ? --to : from2++;
            return array && array[idx];
          };
        }
        function iterateNode(node, level, offset) {
          var values;
          var array = node && node.array;
          var from2 = offset > left ? 0 : left - offset >> level;
          var to = (right - offset >> level) + 1;
          if (to > SIZE) {
            to = SIZE;
          }
          return function() {
            do {
              if (values) {
                var value = values();
                if (value !== DONE) {
                  return value;
                }
                values = null;
              }
              if (from2 === to) {
                return DONE;
              }
              var idx = reverse ? --to : from2++;
              values = iterateNodeOrLeaf(
                array && array[idx],
                level - SHIFT,
                offset + (idx << level)
              );
            } while (true);
          };
        }
      }
      function makeList(origin, capacity, level, root, tail, ownerID, hash2) {
        var list = Object.create(ListPrototype);
        list.size = capacity - origin;
        list._origin = origin;
        list._capacity = capacity;
        list._level = level;
        list._root = root;
        list._tail = tail;
        list.__ownerID = ownerID;
        list.__hash = hash2;
        list.__altered = false;
        return list;
      }
      var EMPTY_LIST;
      function emptyList() {
        return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
      }
      function updateList(list, index, value) {
        index = wrapIndex(list, index);
        if (index !== index) {
          return list;
        }
        if (index >= list.size || index < 0) {
          return list.withMutations(function(list2) {
            index < 0 ? setListBounds(list2, index).set(0, value) : setListBounds(list2, 0, index + 1).set(index, value);
          });
        }
        index += list._origin;
        var newTail = list._tail;
        var newRoot = list._root;
        var didAlter = MakeRef(DID_ALTER);
        if (index >= getTailOffset(list._capacity)) {
          newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
        } else {
          newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
        }
        if (!didAlter.value) {
          return list;
        }
        if (list.__ownerID) {
          list._root = newRoot;
          list._tail = newTail;
          list.__hash = void 0;
          list.__altered = true;
          return list;
        }
        return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
      }
      function updateVNode(node, ownerID, level, index, value, didAlter) {
        var idx = index >>> level & MASK;
        var nodeHas = node && idx < node.array.length;
        if (!nodeHas && value === void 0) {
          return node;
        }
        var newNode;
        if (level > 0) {
          var lowerNode = node && node.array[idx];
          var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
          if (newLowerNode === lowerNode) {
            return node;
          }
          newNode = editableVNode(node, ownerID);
          newNode.array[idx] = newLowerNode;
          return newNode;
        }
        if (nodeHas && node.array[idx] === value) {
          return node;
        }
        SetRef(didAlter);
        newNode = editableVNode(node, ownerID);
        if (value === void 0 && idx === newNode.array.length - 1) {
          newNode.array.pop();
        } else {
          newNode.array[idx] = value;
        }
        return newNode;
      }
      function editableVNode(node, ownerID) {
        if (ownerID && node && ownerID === node.ownerID) {
          return node;
        }
        return new VNode(node ? node.array.slice() : [], ownerID);
      }
      function listNodeFor(list, rawIndex) {
        if (rawIndex >= getTailOffset(list._capacity)) {
          return list._tail;
        }
        if (rawIndex < 1 << list._level + SHIFT) {
          var node = list._root;
          var level = list._level;
          while (node && level > 0) {
            node = node.array[rawIndex >>> level & MASK];
            level -= SHIFT;
          }
          return node;
        }
      }
      function setListBounds(list, begin, end) {
        if (begin !== void 0) {
          begin = begin | 0;
        }
        if (end !== void 0) {
          end = end | 0;
        }
        var owner = list.__ownerID || new OwnerID();
        var oldOrigin = list._origin;
        var oldCapacity = list._capacity;
        var newOrigin = oldOrigin + begin;
        var newCapacity = end === void 0 ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
        if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
          return list;
        }
        if (newOrigin >= newCapacity) {
          return list.clear();
        }
        var newLevel = list._level;
        var newRoot = list._root;
        var offsetShift = 0;
        while (newOrigin + offsetShift < 0) {
          newRoot = new VNode(newRoot && newRoot.array.length ? [void 0, newRoot] : [], owner);
          newLevel += SHIFT;
          offsetShift += 1 << newLevel;
        }
        if (offsetShift) {
          newOrigin += offsetShift;
          oldOrigin += offsetShift;
          newCapacity += offsetShift;
          oldCapacity += offsetShift;
        }
        var oldTailOffset = getTailOffset(oldCapacity);
        var newTailOffset = getTailOffset(newCapacity);
        while (newTailOffset >= 1 << newLevel + SHIFT) {
          newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
          newLevel += SHIFT;
        }
        var oldTail = list._tail;
        var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
        if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
          newRoot = editableVNode(newRoot, owner);
          var node = newRoot;
          for (var level = newLevel; level > SHIFT; level -= SHIFT) {
            var idx = oldTailOffset >>> level & MASK;
            node = node.array[idx] = editableVNode(node.array[idx], owner);
          }
          node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
        }
        if (newCapacity < oldCapacity) {
          newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
        }
        if (newOrigin >= newTailOffset) {
          newOrigin -= newTailOffset;
          newCapacity -= newTailOffset;
          newLevel = SHIFT;
          newRoot = null;
          newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
        } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
          offsetShift = 0;
          while (newRoot) {
            var beginIndex = newOrigin >>> newLevel & MASK;
            if (beginIndex !== newTailOffset >>> newLevel & MASK) {
              break;
            }
            if (beginIndex) {
              offsetShift += (1 << newLevel) * beginIndex;
            }
            newLevel -= SHIFT;
            newRoot = newRoot.array[beginIndex];
          }
          if (newRoot && newOrigin > oldOrigin) {
            newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
          }
          if (newRoot && newTailOffset < oldTailOffset) {
            newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
          }
          if (offsetShift) {
            newOrigin -= offsetShift;
            newCapacity -= offsetShift;
          }
        }
        if (list.__ownerID) {
          list.size = newCapacity - newOrigin;
          list._origin = newOrigin;
          list._capacity = newCapacity;
          list._level = newLevel;
          list._root = newRoot;
          list._tail = newTail;
          list.__hash = void 0;
          list.__altered = true;
          return list;
        }
        return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
      }
      function mergeIntoListWith(list, merger, iterables) {
        var iters = [];
        var maxSize = 0;
        for (var ii = 0; ii < iterables.length; ii++) {
          var value = iterables[ii];
          var iter = IndexedIterable(value);
          if (iter.size > maxSize) {
            maxSize = iter.size;
          }
          if (!isIterable(value)) {
            iter = iter.map(function(v) {
              return fromJS(v);
            });
          }
          iters.push(iter);
        }
        if (maxSize > list.size) {
          list = list.setSize(maxSize);
        }
        return mergeIntoCollectionWith(list, merger, iters);
      }
      function getTailOffset(size) {
        return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
      }
      createClass(OrderedMap, Map2);
      function OrderedMap(value) {
        return value === null || value === void 0 ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k) {
            return map.set(k, v);
          });
        });
      }
      OrderedMap.of = function() {
        return this(arguments);
      };
      OrderedMap.prototype.toString = function() {
        return this.__toString("OrderedMap {", "}");
      };
      OrderedMap.prototype.get = function(k, notSetValue) {
        var index = this._map.get(k);
        return index !== void 0 ? this._list.get(index)[1] : notSetValue;
      };
      OrderedMap.prototype.clear = function() {
        if (this.size === 0) {
          return this;
        }
        if (this.__ownerID) {
          this.size = 0;
          this._map.clear();
          this._list.clear();
          return this;
        }
        return emptyOrderedMap();
      };
      OrderedMap.prototype.set = function(k, v) {
        return updateOrderedMap(this, k, v);
      };
      OrderedMap.prototype.remove = function(k) {
        return updateOrderedMap(this, k, NOT_SET2);
      };
      OrderedMap.prototype.wasAltered = function() {
        return this._map.wasAltered() || this._list.wasAltered();
      };
      OrderedMap.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return this._list.__iterate(
          function(entry) {
            return entry && fn(entry[1], entry[0], this$0);
          },
          reverse
        );
      };
      OrderedMap.prototype.__iterator = function(type, reverse) {
        return this._list.fromEntrySeq().__iterator(type, reverse);
      };
      OrderedMap.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        var newMap = this._map.__ensureOwner(ownerID);
        var newList = this._list.__ensureOwner(ownerID);
        if (!ownerID) {
          this.__ownerID = ownerID;
          this._map = newMap;
          this._list = newList;
          return this;
        }
        return makeOrderedMap(newMap, newList, ownerID, this.__hash);
      };
      function isOrderedMap(maybeOrderedMap) {
        return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
      }
      OrderedMap.isOrderedMap = isOrderedMap;
      OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
      OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
      function makeOrderedMap(map, list, ownerID, hash2) {
        var omap = Object.create(OrderedMap.prototype);
        omap.size = map ? map.size : 0;
        omap._map = map;
        omap._list = list;
        omap.__ownerID = ownerID;
        omap.__hash = hash2;
        return omap;
      }
      var EMPTY_ORDERED_MAP;
      function emptyOrderedMap() {
        return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
      }
      function updateOrderedMap(omap, k, v) {
        var map = omap._map;
        var list = omap._list;
        var i = map.get(k);
        var has = i !== void 0;
        var newMap;
        var newList;
        if (v === NOT_SET2) {
          if (!has) {
            return omap;
          }
          if (list.size >= SIZE && list.size >= map.size * 2) {
            newList = list.filter(function(entry, idx) {
              return entry !== void 0 && i !== idx;
            });
            newMap = newList.toKeyedSeq().map(function(entry) {
              return entry[0];
            }).flip().toMap();
            if (omap.__ownerID) {
              newMap.__ownerID = newList.__ownerID = omap.__ownerID;
            }
          } else {
            newMap = map.remove(k);
            newList = i === list.size - 1 ? list.pop() : list.set(i, void 0);
          }
        } else {
          if (has) {
            if (v === list.get(i)[1]) {
              return omap;
            }
            newMap = map;
            newList = list.set(i, [k, v]);
          } else {
            newMap = map.set(k, list.size);
            newList = list.set(list.size, [k, v]);
          }
        }
        if (omap.__ownerID) {
          omap.size = newMap.size;
          omap._map = newMap;
          omap._list = newList;
          omap.__hash = void 0;
          return omap;
        }
        return makeOrderedMap(newMap, newList);
      }
      createClass(ToKeyedSequence, KeyedSeq);
      function ToKeyedSequence(indexed, useKeys) {
        this._iter = indexed;
        this._useKeys = useKeys;
        this.size = indexed.size;
      }
      ToKeyedSequence.prototype.get = function(key, notSetValue) {
        return this._iter.get(key, notSetValue);
      };
      ToKeyedSequence.prototype.has = function(key) {
        return this._iter.has(key);
      };
      ToKeyedSequence.prototype.valueSeq = function() {
        return this._iter.valueSeq();
      };
      ToKeyedSequence.prototype.reverse = function() {
        var this$0 = this;
        var reversedSequence = reverseFactory(this, true);
        if (!this._useKeys) {
          reversedSequence.valueSeq = function() {
            return this$0._iter.toSeq().reverse();
          };
        }
        return reversedSequence;
      };
      ToKeyedSequence.prototype.map = function(mapper, context) {
        var this$0 = this;
        var mappedSequence = mapFactory(this, mapper, context);
        if (!this._useKeys) {
          mappedSequence.valueSeq = function() {
            return this$0._iter.toSeq().map(mapper, context);
          };
        }
        return mappedSequence;
      };
      ToKeyedSequence.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        var ii;
        return this._iter.__iterate(
          this._useKeys ? function(v, k) {
            return fn(v, k, this$0);
          } : (ii = reverse ? resolveSize(this) : 0, function(v) {
            return fn(v, reverse ? --ii : ii++, this$0);
          }),
          reverse
        );
      };
      ToKeyedSequence.prototype.__iterator = function(type, reverse) {
        if (this._useKeys) {
          return this._iter.__iterator(type, reverse);
        }
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        var ii = reverse ? resolveSize(this) : 0;
        return new Iterator(function() {
          var step = iterator.next();
          return step.done ? step : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
        });
      };
      ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
      createClass(ToIndexedSequence, IndexedSeq);
      function ToIndexedSequence(iter) {
        this._iter = iter;
        this.size = iter.size;
      }
      ToIndexedSequence.prototype.includes = function(value) {
        return this._iter.includes(value);
      };
      ToIndexedSequence.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        var iterations = 0;
        return this._iter.__iterate(function(v) {
          return fn(v, iterations++, this$0);
        }, reverse);
      };
      ToIndexedSequence.prototype.__iterator = function(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        var iterations = 0;
        return new Iterator(function() {
          var step = iterator.next();
          return step.done ? step : iteratorValue(type, iterations++, step.value, step);
        });
      };
      createClass(ToSetSequence, SetSeq);
      function ToSetSequence(iter) {
        this._iter = iter;
        this.size = iter.size;
      }
      ToSetSequence.prototype.has = function(key) {
        return this._iter.includes(key);
      };
      ToSetSequence.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return this._iter.__iterate(function(v) {
          return fn(v, v, this$0);
        }, reverse);
      };
      ToSetSequence.prototype.__iterator = function(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        return new Iterator(function() {
          var step = iterator.next();
          return step.done ? step : iteratorValue(type, step.value, step.value, step);
        });
      };
      createClass(FromEntriesSequence, KeyedSeq);
      function FromEntriesSequence(entries) {
        this._iter = entries;
        this.size = entries.size;
      }
      FromEntriesSequence.prototype.entrySeq = function() {
        return this._iter.toSeq();
      };
      FromEntriesSequence.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return this._iter.__iterate(function(entry) {
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return fn(
              indexedIterable ? entry.get(1) : entry[1],
              indexedIterable ? entry.get(0) : entry[0],
              this$0
            );
          }
        }, reverse);
      };
      FromEntriesSequence.prototype.__iterator = function(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        return new Iterator(function() {
          while (true) {
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            var entry = step.value;
            if (entry) {
              validateEntry(entry);
              var indexedIterable = isIterable(entry);
              return iteratorValue(
                type,
                indexedIterable ? entry.get(0) : entry[0],
                indexedIterable ? entry.get(1) : entry[1],
                step
              );
            }
          }
        });
      };
      ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
      function flipFactory(iterable) {
        var flipSequence = makeSequence(iterable);
        flipSequence._iter = iterable;
        flipSequence.size = iterable.size;
        flipSequence.flip = function() {
          return iterable;
        };
        flipSequence.reverse = function() {
          var reversedSequence = iterable.reverse.apply(this);
          reversedSequence.flip = function() {
            return iterable.reverse();
          };
          return reversedSequence;
        };
        flipSequence.has = function(key) {
          return iterable.includes(key);
        };
        flipSequence.includes = function(key) {
          return iterable.has(key);
        };
        flipSequence.cacheResult = cacheResultThrough;
        flipSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          return iterable.__iterate(function(v, k) {
            return fn(k, v, this$0) !== false;
          }, reverse);
        };
        flipSequence.__iteratorUncached = function(type, reverse) {
          if (type === ITERATE_ENTRIES) {
            var iterator = iterable.__iterator(type, reverse);
            return new Iterator(function() {
              var step = iterator.next();
              if (!step.done) {
                var k = step.value[0];
                step.value[0] = step.value[1];
                step.value[1] = k;
              }
              return step;
            });
          }
          return iterable.__iterator(
            type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
            reverse
          );
        };
        return flipSequence;
      }
      function mapFactory(iterable, mapper, context) {
        var mappedSequence = makeSequence(iterable);
        mappedSequence.size = iterable.size;
        mappedSequence.has = function(key) {
          return iterable.has(key);
        };
        mappedSequence.get = function(key, notSetValue) {
          var v = iterable.get(key, NOT_SET2);
          return v === NOT_SET2 ? notSetValue : mapper.call(context, v, key, iterable);
        };
        mappedSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          return iterable.__iterate(
            function(v, k, c) {
              return fn(mapper.call(context, v, k, c), k, this$0) !== false;
            },
            reverse
          );
        };
        mappedSequence.__iteratorUncached = function(type, reverse) {
          var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
          return new Iterator(function() {
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            var entry = step.value;
            var key = entry[0];
            return iteratorValue(
              type,
              key,
              mapper.call(context, entry[1], key, iterable),
              step
            );
          });
        };
        return mappedSequence;
      }
      function reverseFactory(iterable, useKeys) {
        var reversedSequence = makeSequence(iterable);
        reversedSequence._iter = iterable;
        reversedSequence.size = iterable.size;
        reversedSequence.reverse = function() {
          return iterable;
        };
        if (iterable.flip) {
          reversedSequence.flip = function() {
            var flipSequence = flipFactory(iterable);
            flipSequence.reverse = function() {
              return iterable.flip();
            };
            return flipSequence;
          };
        }
        reversedSequence.get = function(key, notSetValue) {
          return iterable.get(useKeys ? key : -1 - key, notSetValue);
        };
        reversedSequence.has = function(key) {
          return iterable.has(useKeys ? key : -1 - key);
        };
        reversedSequence.includes = function(value) {
          return iterable.includes(value);
        };
        reversedSequence.cacheResult = cacheResultThrough;
        reversedSequence.__iterate = function(fn, reverse) {
          var this$0 = this;
          return iterable.__iterate(function(v, k) {
            return fn(v, k, this$0);
          }, !reverse);
        };
        reversedSequence.__iterator = function(type, reverse) {
          return iterable.__iterator(type, !reverse);
        };
        return reversedSequence;
      }
      function filterFactory(iterable, predicate, context, useKeys) {
        var filterSequence = makeSequence(iterable);
        if (useKeys) {
          filterSequence.has = function(key) {
            var v = iterable.get(key, NOT_SET2);
            return v !== NOT_SET2 && !!predicate.call(context, v, key, iterable);
          };
          filterSequence.get = function(key, notSetValue) {
            var v = iterable.get(key, NOT_SET2);
            return v !== NOT_SET2 && predicate.call(context, v, key, iterable) ? v : notSetValue;
          };
        }
        filterSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          var iterations = 0;
          iterable.__iterate(function(v, k, c) {
            if (predicate.call(context, v, k, c)) {
              iterations++;
              return fn(v, useKeys ? k : iterations - 1, this$0);
            }
          }, reverse);
          return iterations;
        };
        filterSequence.__iteratorUncached = function(type, reverse) {
          var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
          var iterations = 0;
          return new Iterator(function() {
            while (true) {
              var step = iterator.next();
              if (step.done) {
                return step;
              }
              var entry = step.value;
              var key = entry[0];
              var value = entry[1];
              if (predicate.call(context, value, key, iterable)) {
                return iteratorValue(type, useKeys ? key : iterations++, value, step);
              }
            }
          });
        };
        return filterSequence;
      }
      function countByFactory(iterable, grouper, context) {
        var groups = Map2().asMutable();
        iterable.__iterate(function(v, k) {
          groups.update(
            grouper.call(context, v, k, iterable),
            0,
            function(a) {
              return a + 1;
            }
          );
        });
        return groups.asImmutable();
      }
      function groupByFactory(iterable, grouper, context) {
        var isKeyedIter = isKeyed(iterable);
        var groups = (isOrdered(iterable) ? OrderedMap() : Map2()).asMutable();
        iterable.__iterate(function(v, k) {
          groups.update(
            grouper.call(context, v, k, iterable),
            function(a) {
              return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
            }
          );
        });
        var coerce = iterableClass(iterable);
        return groups.map(function(arr) {
          return reify(iterable, coerce(arr));
        });
      }
      function sliceFactory(iterable, begin, end, useKeys) {
        var originalSize = iterable.size;
        if (begin !== void 0) {
          begin = begin | 0;
        }
        if (end !== void 0) {
          if (end === Infinity) {
            end = originalSize;
          } else {
            end = end | 0;
          }
        }
        if (wholeSlice(begin, end, originalSize)) {
          return iterable;
        }
        var resolvedBegin = resolveBegin(begin, originalSize);
        var resolvedEnd = resolveEnd(end, originalSize);
        if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
          return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
        }
        var resolvedSize = resolvedEnd - resolvedBegin;
        var sliceSize;
        if (resolvedSize === resolvedSize) {
          sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
        }
        var sliceSeq = makeSequence(iterable);
        sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || void 0;
        if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
          sliceSeq.get = function(index, notSetValue) {
            index = wrapIndex(this, index);
            return index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
          };
        }
        sliceSeq.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          if (sliceSize === 0) {
            return 0;
          }
          if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
          }
          var skipped = 0;
          var isSkipping = true;
          var iterations = 0;
          iterable.__iterate(function(v, k) {
            if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
              iterations++;
              return fn(v, useKeys ? k : iterations - 1, this$0) !== false && iterations !== sliceSize;
            }
          });
          return iterations;
        };
        sliceSeq.__iteratorUncached = function(type, reverse) {
          if (sliceSize !== 0 && reverse) {
            return this.cacheResult().__iterator(type, reverse);
          }
          var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
          var skipped = 0;
          var iterations = 0;
          return new Iterator(function() {
            while (skipped++ < resolvedBegin) {
              iterator.next();
            }
            if (++iterations > sliceSize) {
              return iteratorDone();
            }
            var step = iterator.next();
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations - 1, void 0, step);
            } else {
              return iteratorValue(type, iterations - 1, step.value[1], step);
            }
          });
        };
        return sliceSeq;
      }
      function takeWhileFactory(iterable, predicate, context) {
        var takeSequence = makeSequence(iterable);
        takeSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
          }
          var iterations = 0;
          iterable.__iterate(
            function(v, k, c) {
              return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0);
            }
          );
          return iterations;
        };
        takeSequence.__iteratorUncached = function(type, reverse) {
          var this$0 = this;
          if (reverse) {
            return this.cacheResult().__iterator(type, reverse);
          }
          var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
          var iterating = true;
          return new Iterator(function() {
            if (!iterating) {
              return iteratorDone();
            }
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            var entry = step.value;
            var k = entry[0];
            var v = entry[1];
            if (!predicate.call(context, v, k, this$0)) {
              iterating = false;
              return iteratorDone();
            }
            return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
          });
        };
        return takeSequence;
      }
      function skipWhileFactory(iterable, predicate, context, useKeys) {
        var skipSequence = makeSequence(iterable);
        skipSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
          }
          var isSkipping = true;
          var iterations = 0;
          iterable.__iterate(function(v, k, c) {
            if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
              iterations++;
              return fn(v, useKeys ? k : iterations - 1, this$0);
            }
          });
          return iterations;
        };
        skipSequence.__iteratorUncached = function(type, reverse) {
          var this$0 = this;
          if (reverse) {
            return this.cacheResult().__iterator(type, reverse);
          }
          var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
          var skipping = true;
          var iterations = 0;
          return new Iterator(function() {
            var step, k, v;
            do {
              step = iterator.next();
              if (step.done) {
                if (useKeys || type === ITERATE_VALUES) {
                  return step;
                } else if (type === ITERATE_KEYS) {
                  return iteratorValue(type, iterations++, void 0, step);
                } else {
                  return iteratorValue(type, iterations++, step.value[1], step);
                }
              }
              var entry = step.value;
              k = entry[0];
              v = entry[1];
              skipping && (skipping = predicate.call(context, v, k, this$0));
            } while (skipping);
            return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
          });
        };
        return skipSequence;
      }
      function concatFactory(iterable, values) {
        var isKeyedIterable = isKeyed(iterable);
        var iters = [iterable].concat(values).map(function(v) {
          if (!isIterable(v)) {
            v = isKeyedIterable ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
          } else if (isKeyedIterable) {
            v = KeyedIterable(v);
          }
          return v;
        }).filter(function(v) {
          return v.size !== 0;
        });
        if (iters.length === 0) {
          return iterable;
        }
        if (iters.length === 1) {
          var singleton = iters[0];
          if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) {
            return singleton;
          }
        }
        var concatSeq = new ArraySeq(iters);
        if (isKeyedIterable) {
          concatSeq = concatSeq.toKeyedSeq();
        } else if (!isIndexed(iterable)) {
          concatSeq = concatSeq.toSetSeq();
        }
        concatSeq = concatSeq.flatten(true);
        concatSeq.size = iters.reduce(
          function(sum, seq) {
            if (sum !== void 0) {
              var size = seq.size;
              if (size !== void 0) {
                return sum + size;
              }
            }
          },
          0
        );
        return concatSeq;
      }
      function flattenFactory(iterable, depth, useKeys) {
        var flatSequence = makeSequence(iterable);
        flatSequence.__iterateUncached = function(fn, reverse) {
          var iterations = 0;
          var stopped = false;
          function flatDeep(iter, currentDepth) {
            var this$0 = this;
            iter.__iterate(function(v, k) {
              if ((!depth || currentDepth < depth) && isIterable(v)) {
                flatDeep(v, currentDepth + 1);
              } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
                stopped = true;
              }
              return !stopped;
            }, reverse);
          }
          flatDeep(iterable, 0);
          return iterations;
        };
        flatSequence.__iteratorUncached = function(type, reverse) {
          var iterator = iterable.__iterator(type, reverse);
          var stack = [];
          var iterations = 0;
          return new Iterator(function() {
            while (iterator) {
              var step = iterator.next();
              if (step.done !== false) {
                iterator = stack.pop();
                continue;
              }
              var v = step.value;
              if (type === ITERATE_ENTRIES) {
                v = v[1];
              }
              if ((!depth || stack.length < depth) && isIterable(v)) {
                stack.push(iterator);
                iterator = v.__iterator(type, reverse);
              } else {
                return useKeys ? step : iteratorValue(type, iterations++, v, step);
              }
            }
            return iteratorDone();
          });
        };
        return flatSequence;
      }
      function flatMapFactory(iterable, mapper, context) {
        var coerce = iterableClass(iterable);
        return iterable.toSeq().map(
          function(v, k) {
            return coerce(mapper.call(context, v, k, iterable));
          }
        ).flatten(true);
      }
      function interposeFactory(iterable, separator) {
        var interposedSequence = makeSequence(iterable);
        interposedSequence.size = iterable.size && iterable.size * 2 - 1;
        interposedSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          var iterations = 0;
          iterable.__iterate(
            function(v, k) {
              return (!iterations || fn(separator, iterations++, this$0) !== false) && fn(v, iterations++, this$0) !== false;
            },
            reverse
          );
          return iterations;
        };
        interposedSequence.__iteratorUncached = function(type, reverse) {
          var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
          var iterations = 0;
          var step;
          return new Iterator(function() {
            if (!step || iterations % 2) {
              step = iterator.next();
              if (step.done) {
                return step;
              }
            }
            return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
          });
        };
        return interposedSequence;
      }
      function sortFactory(iterable, comparator, mapper) {
        if (!comparator) {
          comparator = defaultComparator;
        }
        var isKeyedIterable = isKeyed(iterable);
        var index = 0;
        var entries = iterable.toSeq().map(
          function(v, k) {
            return [k, v, index++, mapper ? mapper(v, k, iterable) : v];
          }
        ).toArray();
        entries.sort(function(a, b) {
          return comparator(a[3], b[3]) || a[2] - b[2];
        }).forEach(
          isKeyedIterable ? function(v, i) {
            entries[i].length = 2;
          } : function(v, i) {
            entries[i] = v[1];
          }
        );
        return isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
      }
      function maxFactory(iterable, comparator, mapper) {
        if (!comparator) {
          comparator = defaultComparator;
        }
        if (mapper) {
          var entry = iterable.toSeq().map(function(v, k) {
            return [v, mapper(v, k, iterable)];
          }).reduce(function(a, b) {
            return maxCompare(comparator, a[1], b[1]) ? b : a;
          });
          return entry && entry[0];
        } else {
          return iterable.reduce(function(a, b) {
            return maxCompare(comparator, a, b) ? b : a;
          });
        }
      }
      function maxCompare(comparator, a, b) {
        var comp = comparator(b, a);
        return comp === 0 && b !== a && (b === void 0 || b === null || b !== b) || comp > 0;
      }
      function zipWithFactory(keyIter, zipper, iters) {
        var zipSequence = makeSequence(keyIter);
        zipSequence.size = new ArraySeq(iters).map(function(i) {
          return i.size;
        }).min();
        zipSequence.__iterate = function(fn, reverse) {
          var iterator = this.__iterator(ITERATE_VALUES, reverse);
          var step;
          var iterations = 0;
          while (!(step = iterator.next()).done) {
            if (fn(step.value, iterations++, this) === false) {
              break;
            }
          }
          return iterations;
        };
        zipSequence.__iteratorUncached = function(type, reverse) {
          var iterators = iters.map(
            function(i) {
              return i = Iterable(i), getIterator(reverse ? i.reverse() : i);
            }
          );
          var iterations = 0;
          var isDone = false;
          return new Iterator(function() {
            var steps;
            if (!isDone) {
              steps = iterators.map(function(i) {
                return i.next();
              });
              isDone = steps.some(function(s) {
                return s.done;
              });
            }
            if (isDone) {
              return iteratorDone();
            }
            return iteratorValue(
              type,
              iterations++,
              zipper.apply(null, steps.map(function(s) {
                return s.value;
              }))
            );
          });
        };
        return zipSequence;
      }
      function reify(iter, seq) {
        return isSeq(iter) ? seq : iter.constructor(seq);
      }
      function validateEntry(entry) {
        if (entry !== Object(entry)) {
          throw new TypeError("Expected [K, V] tuple: " + entry);
        }
      }
      function resolveSize(iter) {
        assertNotInfinite(iter.size);
        return ensureSize(iter);
      }
      function iterableClass(iterable) {
        return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
      }
      function makeSequence(iterable) {
        return Object.create(
          (isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype
        );
      }
      function cacheResultThrough() {
        if (this._iter.cacheResult) {
          this._iter.cacheResult();
          this.size = this._iter.size;
          return this;
        } else {
          return Seq.prototype.cacheResult.call(this);
        }
      }
      function defaultComparator(a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
      }
      function forceIterator(keyPath) {
        var iter = getIterator(keyPath);
        if (!iter) {
          if (!isArrayLike(keyPath)) {
            throw new TypeError("Expected iterable or array-like: " + keyPath);
          }
          iter = getIterator(Iterable(keyPath));
        }
        return iter;
      }
      createClass(Record, KeyedCollection);
      function Record(defaultValues, name) {
        var hasInitialized;
        var RecordType = function Record2(values) {
          if (values instanceof RecordType) {
            return values;
          }
          if (!(this instanceof RecordType)) {
            return new RecordType(values);
          }
          if (!hasInitialized) {
            hasInitialized = true;
            var keys = Object.keys(defaultValues);
            setProps(RecordTypePrototype, keys);
            RecordTypePrototype.size = keys.length;
            RecordTypePrototype._name = name;
            RecordTypePrototype._keys = keys;
            RecordTypePrototype._defaultValues = defaultValues;
          }
          this._map = Map2(values);
        };
        var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
        RecordTypePrototype.constructor = RecordType;
        return RecordType;
      }
      Record.prototype.toString = function() {
        return this.__toString(recordName(this) + " {", "}");
      };
      Record.prototype.has = function(k) {
        return this._defaultValues.hasOwnProperty(k);
      };
      Record.prototype.get = function(k, notSetValue) {
        if (!this.has(k)) {
          return notSetValue;
        }
        var defaultVal = this._defaultValues[k];
        return this._map ? this._map.get(k, defaultVal) : defaultVal;
      };
      Record.prototype.clear = function() {
        if (this.__ownerID) {
          this._map && this._map.clear();
          return this;
        }
        var RecordType = this.constructor;
        return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
      };
      Record.prototype.set = function(k, v) {
        if (!this.has(k)) {
          throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
        }
        if (this._map && !this._map.has(k)) {
          var defaultVal = this._defaultValues[k];
          if (v === defaultVal) {
            return this;
          }
        }
        var newMap = this._map && this._map.set(k, v);
        if (this.__ownerID || newMap === this._map) {
          return this;
        }
        return makeRecord(this, newMap);
      };
      Record.prototype.remove = function(k) {
        if (!this.has(k)) {
          return this;
        }
        var newMap = this._map && this._map.remove(k);
        if (this.__ownerID || newMap === this._map) {
          return this;
        }
        return makeRecord(this, newMap);
      };
      Record.prototype.wasAltered = function() {
        return this._map.wasAltered();
      };
      Record.prototype.__iterator = function(type, reverse) {
        var this$0 = this;
        return KeyedIterable(this._defaultValues).map(function(_, k) {
          return this$0.get(k);
        }).__iterator(type, reverse);
      };
      Record.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return KeyedIterable(this._defaultValues).map(function(_, k) {
          return this$0.get(k);
        }).__iterate(fn, reverse);
      };
      Record.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        var newMap = this._map && this._map.__ensureOwner(ownerID);
        if (!ownerID) {
          this.__ownerID = ownerID;
          this._map = newMap;
          return this;
        }
        return makeRecord(this, newMap, ownerID);
      };
      var RecordPrototype = Record.prototype;
      RecordPrototype[DELETE] = RecordPrototype.remove;
      RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn;
      RecordPrototype.merge = MapPrototype.merge;
      RecordPrototype.mergeWith = MapPrototype.mergeWith;
      RecordPrototype.mergeIn = MapPrototype.mergeIn;
      RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
      RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
      RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
      RecordPrototype.setIn = MapPrototype.setIn;
      RecordPrototype.update = MapPrototype.update;
      RecordPrototype.updateIn = MapPrototype.updateIn;
      RecordPrototype.withMutations = MapPrototype.withMutations;
      RecordPrototype.asMutable = MapPrototype.asMutable;
      RecordPrototype.asImmutable = MapPrototype.asImmutable;
      function makeRecord(likeRecord, map, ownerID) {
        var record = Object.create(Object.getPrototypeOf(likeRecord));
        record._map = map;
        record.__ownerID = ownerID;
        return record;
      }
      function recordName(record) {
        return record._name || record.constructor.name || "Record";
      }
      function setProps(prototype, names) {
        try {
          names.forEach(setProp.bind(void 0, prototype));
        } catch (error) {
        }
      }
      function setProp(prototype, name) {
        Object.defineProperty(prototype, name, {
          get: function() {
            return this.get(name);
          },
          set: function(value) {
            invariant2(this.__ownerID, "Cannot set on an immutable record.");
            this.set(name, value);
          }
        });
      }
      createClass(Set2, SetCollection);
      function Set2(value) {
        return value === null || value === void 0 ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v) {
            return set.add(v);
          });
        });
      }
      Set2.of = function() {
        return this(arguments);
      };
      Set2.fromKeys = function(value) {
        return this(KeyedIterable(value).keySeq());
      };
      Set2.prototype.toString = function() {
        return this.__toString("Set {", "}");
      };
      Set2.prototype.has = function(value) {
        return this._map.has(value);
      };
      Set2.prototype.add = function(value) {
        return updateSet(this, this._map.set(value, true));
      };
      Set2.prototype.remove = function(value) {
        return updateSet(this, this._map.remove(value));
      };
      Set2.prototype.clear = function() {
        return updateSet(this, this._map.clear());
      };
      Set2.prototype.union = function() {
        var iters = SLICE$0.call(arguments, 0);
        iters = iters.filter(function(x) {
          return x.size !== 0;
        });
        if (iters.length === 0) {
          return this;
        }
        if (this.size === 0 && !this.__ownerID && iters.length === 1) {
          return this.constructor(iters[0]);
        }
        return this.withMutations(function(set) {
          for (var ii = 0; ii < iters.length; ii++) {
            SetIterable(iters[ii]).forEach(function(value) {
              return set.add(value);
            });
          }
        });
      };
      Set2.prototype.intersect = function() {
        var iters = SLICE$0.call(arguments, 0);
        if (iters.length === 0) {
          return this;
        }
        iters = iters.map(function(iter) {
          return SetIterable(iter);
        });
        var originalSet = this;
        return this.withMutations(function(set) {
          originalSet.forEach(function(value) {
            if (!iters.every(function(iter) {
              return iter.includes(value);
            })) {
              set.remove(value);
            }
          });
        });
      };
      Set2.prototype.subtract = function() {
        var iters = SLICE$0.call(arguments, 0);
        if (iters.length === 0) {
          return this;
        }
        iters = iters.map(function(iter) {
          return SetIterable(iter);
        });
        var originalSet = this;
        return this.withMutations(function(set) {
          originalSet.forEach(function(value) {
            if (iters.some(function(iter) {
              return iter.includes(value);
            })) {
              set.remove(value);
            }
          });
        });
      };
      Set2.prototype.merge = function() {
        return this.union.apply(this, arguments);
      };
      Set2.prototype.mergeWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return this.union.apply(this, iters);
      };
      Set2.prototype.sort = function(comparator) {
        return OrderedSet(sortFactory(this, comparator));
      };
      Set2.prototype.sortBy = function(mapper, comparator) {
        return OrderedSet(sortFactory(this, comparator, mapper));
      };
      Set2.prototype.wasAltered = function() {
        return this._map.wasAltered();
      };
      Set2.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return this._map.__iterate(function(_, k) {
          return fn(k, k, this$0);
        }, reverse);
      };
      Set2.prototype.__iterator = function(type, reverse) {
        return this._map.map(function(_, k) {
          return k;
        }).__iterator(type, reverse);
      };
      Set2.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        var newMap = this._map.__ensureOwner(ownerID);
        if (!ownerID) {
          this.__ownerID = ownerID;
          this._map = newMap;
          return this;
        }
        return this.__make(newMap, ownerID);
      };
      function isSet(maybeSet) {
        return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
      }
      Set2.isSet = isSet;
      var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
      var SetPrototype = Set2.prototype;
      SetPrototype[IS_SET_SENTINEL] = true;
      SetPrototype[DELETE] = SetPrototype.remove;
      SetPrototype.mergeDeep = SetPrototype.merge;
      SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
      SetPrototype.withMutations = MapPrototype.withMutations;
      SetPrototype.asMutable = MapPrototype.asMutable;
      SetPrototype.asImmutable = MapPrototype.asImmutable;
      SetPrototype.__empty = emptySet;
      SetPrototype.__make = makeSet;
      function updateSet(set, newMap) {
        if (set.__ownerID) {
          set.size = newMap.size;
          set._map = newMap;
          return set;
        }
        return newMap === set._map ? set : newMap.size === 0 ? set.__empty() : set.__make(newMap);
      }
      function makeSet(map, ownerID) {
        var set = Object.create(SetPrototype);
        set.size = map ? map.size : 0;
        set._map = map;
        set.__ownerID = ownerID;
        return set;
      }
      var EMPTY_SET;
      function emptySet() {
        return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
      }
      createClass(OrderedSet, Set2);
      function OrderedSet(value) {
        return value === null || value === void 0 ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v) {
            return set.add(v);
          });
        });
      }
      OrderedSet.of = function() {
        return this(arguments);
      };
      OrderedSet.fromKeys = function(value) {
        return this(KeyedIterable(value).keySeq());
      };
      OrderedSet.prototype.toString = function() {
        return this.__toString("OrderedSet {", "}");
      };
      function isOrderedSet(maybeOrderedSet) {
        return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
      }
      OrderedSet.isOrderedSet = isOrderedSet;
      var OrderedSetPrototype = OrderedSet.prototype;
      OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
      OrderedSetPrototype.__empty = emptyOrderedSet;
      OrderedSetPrototype.__make = makeOrderedSet;
      function makeOrderedSet(map, ownerID) {
        var set = Object.create(OrderedSetPrototype);
        set.size = map ? map.size : 0;
        set._map = map;
        set.__ownerID = ownerID;
        return set;
      }
      var EMPTY_ORDERED_SET;
      function emptyOrderedSet() {
        return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
      }
      createClass(Stack, IndexedCollection);
      function Stack(value) {
        return value === null || value === void 0 ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
      }
      Stack.of = function() {
        return this(arguments);
      };
      Stack.prototype.toString = function() {
        return this.__toString("Stack [", "]");
      };
      Stack.prototype.get = function(index, notSetValue) {
        var head = this._head;
        index = wrapIndex(this, index);
        while (head && index--) {
          head = head.next;
        }
        return head ? head.value : notSetValue;
      };
      Stack.prototype.peek = function() {
        return this._head && this._head.value;
      };
      Stack.prototype.push = function() {
        if (arguments.length === 0) {
          return this;
        }
        var newSize = this.size + arguments.length;
        var head = this._head;
        for (var ii = arguments.length - 1; ii >= 0; ii--) {
          head = {
            value: arguments[ii],
            next: head
          };
        }
        if (this.__ownerID) {
          this.size = newSize;
          this._head = head;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return makeStack(newSize, head);
      };
      Stack.prototype.pushAll = function(iter) {
        iter = IndexedIterable(iter);
        if (iter.size === 0) {
          return this;
        }
        assertNotInfinite(iter.size);
        var newSize = this.size;
        var head = this._head;
        iter.reverse().forEach(function(value) {
          newSize++;
          head = {
            value,
            next: head
          };
        });
        if (this.__ownerID) {
          this.size = newSize;
          this._head = head;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return makeStack(newSize, head);
      };
      Stack.prototype.pop = function() {
        return this.slice(1);
      };
      Stack.prototype.unshift = function() {
        return this.push.apply(this, arguments);
      };
      Stack.prototype.unshiftAll = function(iter) {
        return this.pushAll(iter);
      };
      Stack.prototype.shift = function() {
        return this.pop.apply(this, arguments);
      };
      Stack.prototype.clear = function() {
        if (this.size === 0) {
          return this;
        }
        if (this.__ownerID) {
          this.size = 0;
          this._head = void 0;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return emptyStack();
      };
      Stack.prototype.slice = function(begin, end) {
        if (wholeSlice(begin, end, this.size)) {
          return this;
        }
        var resolvedBegin = resolveBegin(begin, this.size);
        var resolvedEnd = resolveEnd(end, this.size);
        if (resolvedEnd !== this.size) {
          return IndexedCollection.prototype.slice.call(this, begin, end);
        }
        var newSize = this.size - resolvedBegin;
        var head = this._head;
        while (resolvedBegin--) {
          head = head.next;
        }
        if (this.__ownerID) {
          this.size = newSize;
          this._head = head;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return makeStack(newSize, head);
      };
      Stack.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        if (!ownerID) {
          this.__ownerID = ownerID;
          this.__altered = false;
          return this;
        }
        return makeStack(this.size, this._head, ownerID, this.__hash);
      };
      Stack.prototype.__iterate = function(fn, reverse) {
        if (reverse) {
          return this.reverse().__iterate(fn);
        }
        var iterations = 0;
        var node = this._head;
        while (node) {
          if (fn(node.value, iterations++, this) === false) {
            break;
          }
          node = node.next;
        }
        return iterations;
      };
      Stack.prototype.__iterator = function(type, reverse) {
        if (reverse) {
          return this.reverse().__iterator(type);
        }
        var iterations = 0;
        var node = this._head;
        return new Iterator(function() {
          if (node) {
            var value = node.value;
            node = node.next;
            return iteratorValue(type, iterations++, value);
          }
          return iteratorDone();
        });
      };
      function isStack(maybeStack) {
        return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
      }
      Stack.isStack = isStack;
      var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
      var StackPrototype = Stack.prototype;
      StackPrototype[IS_STACK_SENTINEL] = true;
      StackPrototype.withMutations = MapPrototype.withMutations;
      StackPrototype.asMutable = MapPrototype.asMutable;
      StackPrototype.asImmutable = MapPrototype.asImmutable;
      StackPrototype.wasAltered = MapPrototype.wasAltered;
      function makeStack(size, head, ownerID, hash2) {
        var map = Object.create(StackPrototype);
        map.size = size;
        map._head = head;
        map.__ownerID = ownerID;
        map.__hash = hash2;
        map.__altered = false;
        return map;
      }
      var EMPTY_STACK;
      function emptyStack() {
        return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
      }
      function mixin(ctor, methods) {
        var keyCopier = function(key) {
          ctor.prototype[key] = methods[key];
        };
        Object.keys(methods).forEach(keyCopier);
        Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
        return ctor;
      }
      Iterable.Iterator = Iterator;
      mixin(Iterable, {
        // ### Conversion to other types
        toArray: function() {
          assertNotInfinite(this.size);
          var array = new Array(this.size || 0);
          this.valueSeq().__iterate(function(v, i) {
            array[i] = v;
          });
          return array;
        },
        toIndexedSeq: function() {
          return new ToIndexedSequence(this);
        },
        toJS: function() {
          return this.toSeq().map(
            function(value) {
              return value && typeof value.toJS === "function" ? value.toJS() : value;
            }
          ).__toJS();
        },
        toJSON: function() {
          return this.toSeq().map(
            function(value) {
              return value && typeof value.toJSON === "function" ? value.toJSON() : value;
            }
          ).__toJS();
        },
        toKeyedSeq: function() {
          return new ToKeyedSequence(this, true);
        },
        toMap: function() {
          return Map2(this.toKeyedSeq());
        },
        toObject: function() {
          assertNotInfinite(this.size);
          var object = {};
          this.__iterate(function(v, k) {
            object[k] = v;
          });
          return object;
        },
        toOrderedMap: function() {
          return OrderedMap(this.toKeyedSeq());
        },
        toOrderedSet: function() {
          return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
        },
        toSet: function() {
          return Set2(isKeyed(this) ? this.valueSeq() : this);
        },
        toSetSeq: function() {
          return new ToSetSequence(this);
        },
        toSeq: function() {
          return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
        },
        toStack: function() {
          return Stack(isKeyed(this) ? this.valueSeq() : this);
        },
        toList: function() {
          return List2(isKeyed(this) ? this.valueSeq() : this);
        },
        // ### Common JavaScript methods and properties
        toString: function() {
          return "[Iterable]";
        },
        __toString: function(head, tail) {
          if (this.size === 0) {
            return head + tail;
          }
          return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
        },
        // ### ES6 Collection methods (ES6 Array and Map)
        concat: function() {
          var values = SLICE$0.call(arguments, 0);
          return reify(this, concatFactory(this, values));
        },
        includes: function(searchValue) {
          return this.some(function(value) {
            return is2(value, searchValue);
          });
        },
        entries: function() {
          return this.__iterator(ITERATE_ENTRIES);
        },
        every: function(predicate, context) {
          assertNotInfinite(this.size);
          var returnValue = true;
          this.__iterate(function(v, k, c) {
            if (!predicate.call(context, v, k, c)) {
              returnValue = false;
              return false;
            }
          });
          return returnValue;
        },
        filter: function(predicate, context) {
          return reify(this, filterFactory(this, predicate, context, true));
        },
        find: function(predicate, context, notSetValue) {
          var entry = this.findEntry(predicate, context);
          return entry ? entry[1] : notSetValue;
        },
        forEach: function(sideEffect, context) {
          assertNotInfinite(this.size);
          return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
        },
        join: function(separator) {
          assertNotInfinite(this.size);
          separator = separator !== void 0 ? "" + separator : ",";
          var joined = "";
          var isFirst = true;
          this.__iterate(function(v) {
            isFirst ? isFirst = false : joined += separator;
            joined += v !== null && v !== void 0 ? v.toString() : "";
          });
          return joined;
        },
        keys: function() {
          return this.__iterator(ITERATE_KEYS);
        },
        map: function(mapper, context) {
          return reify(this, mapFactory(this, mapper, context));
        },
        reduce: function(reducer, initialReduction, context) {
          assertNotInfinite(this.size);
          var reduction;
          var useFirst;
          if (arguments.length < 2) {
            useFirst = true;
          } else {
            reduction = initialReduction;
          }
          this.__iterate(function(v, k, c) {
            if (useFirst) {
              useFirst = false;
              reduction = v;
            } else {
              reduction = reducer.call(context, reduction, v, k, c);
            }
          });
          return reduction;
        },
        reduceRight: function(reducer, initialReduction, context) {
          var reversed = this.toKeyedSeq().reverse();
          return reversed.reduce.apply(reversed, arguments);
        },
        reverse: function() {
          return reify(this, reverseFactory(this, true));
        },
        slice: function(begin, end) {
          return reify(this, sliceFactory(this, begin, end, true));
        },
        some: function(predicate, context) {
          return !this.every(not(predicate), context);
        },
        sort: function(comparator) {
          return reify(this, sortFactory(this, comparator));
        },
        values: function() {
          return this.__iterator(ITERATE_VALUES);
        },
        // ### More sequential methods
        butLast: function() {
          return this.slice(0, -1);
        },
        isEmpty: function() {
          return this.size !== void 0 ? this.size === 0 : !this.some(function() {
            return true;
          });
        },
        count: function(predicate, context) {
          return ensureSize(
            predicate ? this.toSeq().filter(predicate, context) : this
          );
        },
        countBy: function(grouper, context) {
          return countByFactory(this, grouper, context);
        },
        equals: function(other) {
          return deepEqual(this, other);
        },
        entrySeq: function() {
          var iterable = this;
          if (iterable._cache) {
            return new ArraySeq(iterable._cache);
          }
          var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
          entriesSequence.fromEntrySeq = function() {
            return iterable.toSeq();
          };
          return entriesSequence;
        },
        filterNot: function(predicate, context) {
          return this.filter(not(predicate), context);
        },
        findEntry: function(predicate, context, notSetValue) {
          var found = notSetValue;
          this.__iterate(function(v, k, c) {
            if (predicate.call(context, v, k, c)) {
              found = [k, v];
              return false;
            }
          });
          return found;
        },
        findKey: function(predicate, context) {
          var entry = this.findEntry(predicate, context);
          return entry && entry[0];
        },
        findLast: function(predicate, context, notSetValue) {
          return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
        },
        findLastEntry: function(predicate, context, notSetValue) {
          return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
        },
        findLastKey: function(predicate, context) {
          return this.toKeyedSeq().reverse().findKey(predicate, context);
        },
        first: function() {
          return this.find(returnTrue);
        },
        flatMap: function(mapper, context) {
          return reify(this, flatMapFactory(this, mapper, context));
        },
        flatten: function(depth) {
          return reify(this, flattenFactory(this, depth, true));
        },
        fromEntrySeq: function() {
          return new FromEntriesSequence(this);
        },
        get: function(searchKey, notSetValue) {
          return this.find(function(_, key) {
            return is2(key, searchKey);
          }, void 0, notSetValue);
        },
        getIn: function(searchKeyPath, notSetValue) {
          var nested = this;
          var iter = forceIterator(searchKeyPath);
          var step;
          while (!(step = iter.next()).done) {
            var key = step.value;
            nested = nested && nested.get ? nested.get(key, NOT_SET2) : NOT_SET2;
            if (nested === NOT_SET2) {
              return notSetValue;
            }
          }
          return nested;
        },
        groupBy: function(grouper, context) {
          return groupByFactory(this, grouper, context);
        },
        has: function(searchKey) {
          return this.get(searchKey, NOT_SET2) !== NOT_SET2;
        },
        hasIn: function(searchKeyPath) {
          return this.getIn(searchKeyPath, NOT_SET2) !== NOT_SET2;
        },
        isSubset: function(iter) {
          iter = typeof iter.includes === "function" ? iter : Iterable(iter);
          return this.every(function(value) {
            return iter.includes(value);
          });
        },
        isSuperset: function(iter) {
          iter = typeof iter.isSubset === "function" ? iter : Iterable(iter);
          return iter.isSubset(this);
        },
        keyOf: function(searchValue) {
          return this.findKey(function(value) {
            return is2(value, searchValue);
          });
        },
        keySeq: function() {
          return this.toSeq().map(keyMapper).toIndexedSeq();
        },
        last: function() {
          return this.toSeq().reverse().first();
        },
        lastKeyOf: function(searchValue) {
          return this.toKeyedSeq().reverse().keyOf(searchValue);
        },
        max: function(comparator) {
          return maxFactory(this, comparator);
        },
        maxBy: function(mapper, comparator) {
          return maxFactory(this, comparator, mapper);
        },
        min: function(comparator) {
          return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
        },
        minBy: function(mapper, comparator) {
          return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
        },
        rest: function() {
          return this.slice(1);
        },
        skip: function(amount) {
          return this.slice(Math.max(0, amount));
        },
        skipLast: function(amount) {
          return reify(this, this.toSeq().reverse().skip(amount).reverse());
        },
        skipWhile: function(predicate, context) {
          return reify(this, skipWhileFactory(this, predicate, context, true));
        },
        skipUntil: function(predicate, context) {
          return this.skipWhile(not(predicate), context);
        },
        sortBy: function(mapper, comparator) {
          return reify(this, sortFactory(this, comparator, mapper));
        },
        take: function(amount) {
          return this.slice(0, Math.max(0, amount));
        },
        takeLast: function(amount) {
          return reify(this, this.toSeq().reverse().take(amount).reverse());
        },
        takeWhile: function(predicate, context) {
          return reify(this, takeWhileFactory(this, predicate, context));
        },
        takeUntil: function(predicate, context) {
          return this.takeWhile(not(predicate), context);
        },
        valueSeq: function() {
          return this.toIndexedSeq();
        },
        // ### Hashable Object
        hashCode: function() {
          return this.__hash || (this.__hash = hashIterable(this));
        }
        // ### Internal
        // abstract __iterate(fn, reverse)
        // abstract __iterator(type, reverse)
      });
      var IterablePrototype = Iterable.prototype;
      IterablePrototype[IS_ITERABLE_SENTINEL] = true;
      IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
      IterablePrototype.__toJS = IterablePrototype.toArray;
      IterablePrototype.__toStringMapper = quoteString;
      IterablePrototype.inspect = IterablePrototype.toSource = function() {
        return this.toString();
      };
      IterablePrototype.chain = IterablePrototype.flatMap;
      IterablePrototype.contains = IterablePrototype.includes;
      mixin(KeyedIterable, {
        // ### More sequential methods
        flip: function() {
          return reify(this, flipFactory(this));
        },
        mapEntries: function(mapper, context) {
          var this$0 = this;
          var iterations = 0;
          return reify(
            this,
            this.toSeq().map(
              function(v, k) {
                return mapper.call(context, [k, v], iterations++, this$0);
              }
            ).fromEntrySeq()
          );
        },
        mapKeys: function(mapper, context) {
          var this$0 = this;
          return reify(
            this,
            this.toSeq().flip().map(
              function(k, v) {
                return mapper.call(context, k, v, this$0);
              }
            ).flip()
          );
        }
      });
      var KeyedIterablePrototype = KeyedIterable.prototype;
      KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
      KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
      KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
      KeyedIterablePrototype.__toStringMapper = function(v, k) {
        return JSON.stringify(k) + ": " + quoteString(v);
      };
      mixin(IndexedIterable, {
        // ### Conversion to other types
        toKeyedSeq: function() {
          return new ToKeyedSequence(this, false);
        },
        // ### ES6 Collection methods (ES6 Array and Map)
        filter: function(predicate, context) {
          return reify(this, filterFactory(this, predicate, context, false));
        },
        findIndex: function(predicate, context) {
          var entry = this.findEntry(predicate, context);
          return entry ? entry[0] : -1;
        },
        indexOf: function(searchValue) {
          var key = this.keyOf(searchValue);
          return key === void 0 ? -1 : key;
        },
        lastIndexOf: function(searchValue) {
          var key = this.lastKeyOf(searchValue);
          return key === void 0 ? -1 : key;
        },
        reverse: function() {
          return reify(this, reverseFactory(this, false));
        },
        slice: function(begin, end) {
          return reify(this, sliceFactory(this, begin, end, false));
        },
        splice: function(index, removeNum) {
          var numArgs = arguments.length;
          removeNum = Math.max(removeNum | 0, 0);
          if (numArgs === 0 || numArgs === 2 && !removeNum) {
            return this;
          }
          index = resolveBegin(index, index < 0 ? this.count() : this.size);
          var spliced = this.slice(0, index);
          return reify(
            this,
            numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
          );
        },
        // ### More collection methods
        findLastIndex: function(predicate, context) {
          var entry = this.findLastEntry(predicate, context);
          return entry ? entry[0] : -1;
        },
        first: function() {
          return this.get(0);
        },
        flatten: function(depth) {
          return reify(this, flattenFactory(this, depth, false));
        },
        get: function(index, notSetValue) {
          index = wrapIndex(this, index);
          return index < 0 || (this.size === Infinity || this.size !== void 0 && index > this.size) ? notSetValue : this.find(function(_, key) {
            return key === index;
          }, void 0, notSetValue);
        },
        has: function(index) {
          index = wrapIndex(this, index);
          return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
        },
        interpose: function(separator) {
          return reify(this, interposeFactory(this, separator));
        },
        interleave: function() {
          var iterables = [this].concat(arrCopy(arguments));
          var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
          var interleaved = zipped.flatten(true);
          if (zipped.size) {
            interleaved.size = zipped.size * iterables.length;
          }
          return reify(this, interleaved);
        },
        keySeq: function() {
          return Range(0, this.size);
        },
        last: function() {
          return this.get(-1);
        },
        skipWhile: function(predicate, context) {
          return reify(this, skipWhileFactory(this, predicate, context, false));
        },
        zip: function() {
          var iterables = [this].concat(arrCopy(arguments));
          return reify(this, zipWithFactory(this, defaultZipper, iterables));
        },
        zipWith: function(zipper) {
          var iterables = arrCopy(arguments);
          iterables[0] = this;
          return reify(this, zipWithFactory(this, zipper, iterables));
        }
      });
      IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
      IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
      mixin(SetIterable, {
        // ### ES6 Collection methods (ES6 Array and Map)
        get: function(value, notSetValue) {
          return this.has(value) ? value : notSetValue;
        },
        includes: function(value) {
          return this.has(value);
        },
        // ### More sequential methods
        keySeq: function() {
          return this.valueSeq();
        }
      });
      SetIterable.prototype.has = IterablePrototype.includes;
      SetIterable.prototype.contains = SetIterable.prototype.includes;
      mixin(KeyedSeq, KeyedIterable.prototype);
      mixin(IndexedSeq, IndexedIterable.prototype);
      mixin(SetSeq, SetIterable.prototype);
      mixin(KeyedCollection, KeyedIterable.prototype);
      mixin(IndexedCollection, IndexedIterable.prototype);
      mixin(SetCollection, SetIterable.prototype);
      function keyMapper(v, k) {
        return k;
      }
      function entryMapper(v, k) {
        return [k, v];
      }
      function not(predicate) {
        return function() {
          return !predicate.apply(this, arguments);
        };
      }
      function neg(predicate) {
        return function() {
          return -predicate.apply(this, arguments);
        };
      }
      function quoteString(value) {
        return typeof value === "string" ? JSON.stringify(value) : String(value);
      }
      function defaultZipper() {
        return arrCopy(arguments);
      }
      function defaultNegComparator(a, b) {
        return a < b ? 1 : a > b ? -1 : 0;
      }
      function hashIterable(iterable) {
        if (iterable.size === Infinity) {
          return 0;
        }
        var ordered = isOrdered(iterable);
        var keyed = isKeyed(iterable);
        var h = ordered ? 1 : 0;
        var size = iterable.__iterate(
          keyed ? ordered ? function(v, k) {
            h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
          } : function(v, k) {
            h = h + hashMerge(hash(v), hash(k)) | 0;
          } : ordered ? function(v) {
            h = 31 * h + hash(v) | 0;
          } : function(v) {
            h = h + hash(v) | 0;
          }
        );
        return murmurHashOfSize(size, h);
      }
      function murmurHashOfSize(size, h) {
        h = imul(h, 3432918353);
        h = imul(h << 15 | h >>> -15, 461845907);
        h = imul(h << 13 | h >>> -13, 5);
        h = (h + 3864292196 | 0) ^ size;
        h = imul(h ^ h >>> 16, 2246822507);
        h = imul(h ^ h >>> 13, 3266489909);
        h = smi(h ^ h >>> 16);
        return h;
      }
      function hashMerge(a, b) {
        return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
      }
      var Immutable = {
        Iterable,
        Seq,
        Collection,
        Map: Map2,
        OrderedMap,
        List: List2,
        Stack,
        Set: Set2,
        OrderedSet,
        Record,
        Range,
        Repeat,
        is: is2,
        fromJS
      };
      return Immutable;
    });
  }
});

// node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js
var require_ImmutablePropTypes = __commonJS({
  "node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js"(exports, module) {
    "use strict";
    var Immutable = require_immutable();
    var ANONYMOUS = "<<anonymous>>";
    var ImmutablePropTypes;
    if (true) {
      ImmutablePropTypes = {
        listOf: createListOfTypeChecker,
        mapOf: createMapOfTypeChecker,
        orderedMapOf: createOrderedMapOfTypeChecker,
        setOf: createSetOfTypeChecker,
        orderedSetOf: createOrderedSetOfTypeChecker,
        stackOf: createStackOfTypeChecker,
        iterableOf: createIterableOfTypeChecker,
        recordOf: createRecordOfTypeChecker,
        shape: createShapeChecker,
        contains: createShapeChecker,
        mapContains: createMapContainsChecker,
        orderedMapContains: createOrderedMapContainsChecker,
        // Primitive Types
        list: createImmutableTypeChecker("List", Immutable.List.isList),
        map: createImmutableTypeChecker("Map", Immutable.Map.isMap),
        orderedMap: createImmutableTypeChecker("OrderedMap", Immutable.OrderedMap.isOrderedMap),
        set: createImmutableTypeChecker("Set", Immutable.Set.isSet),
        orderedSet: createImmutableTypeChecker("OrderedSet", Immutable.OrderedSet.isOrderedSet),
        stack: createImmutableTypeChecker("Stack", Immutable.Stack.isStack),
        seq: createImmutableTypeChecker("Seq", Immutable.Seq.isSeq),
        record: createImmutableTypeChecker("Record", function(isRecord) {
          return isRecord instanceof Immutable.Record;
        }),
        iterable: createImmutableTypeChecker("Iterable", Immutable.Iterable.isIterable)
      };
    } else {
      productionTypeChecker = function productionTypeChecker2() {
        invariant(false, "ImmutablePropTypes type checking code is stripped in production.");
      };
      productionTypeChecker.isRequired = productionTypeChecker;
      getProductionTypeChecker = function getProductionTypeChecker2() {
        return productionTypeChecker;
      };
      ImmutablePropTypes = {
        listOf: getProductionTypeChecker,
        mapOf: getProductionTypeChecker,
        orderedMapOf: getProductionTypeChecker,
        setOf: getProductionTypeChecker,
        orderedSetOf: getProductionTypeChecker,
        stackOf: getProductionTypeChecker,
        iterableOf: getProductionTypeChecker,
        recordOf: getProductionTypeChecker,
        shape: getProductionTypeChecker,
        contains: getProductionTypeChecker,
        mapContains: getProductionTypeChecker,
        orderedMapContains: getProductionTypeChecker,
        // Primitive Types
        list: productionTypeChecker,
        map: productionTypeChecker,
        orderedMap: productionTypeChecker,
        set: productionTypeChecker,
        orderedSet: productionTypeChecker,
        stack: productionTypeChecker,
        seq: productionTypeChecker,
        record: productionTypeChecker,
        iterable: productionTypeChecker
      };
    }
    var productionTypeChecker;
    var getProductionTypeChecker;
    ImmutablePropTypes.iterable.indexed = createIterableSubclassTypeChecker("Indexed", Immutable.Iterable.isIndexed);
    ImmutablePropTypes.iterable.keyed = createIterableSubclassTypeChecker("Keyed", Immutable.Iterable.isKeyed);
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        return "object";
      }
      if (propValue instanceof Immutable.Iterable) {
        return "Immutable." + propValue.toSource().split(" ")[0];
      }
      return propType;
    }
    function createChainableTypeChecker(validate) {
      function checkType(isRequired, props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
          rest[_key - 6] = arguments[_key];
        }
        propFullName = propFullName || propName;
        componentName = componentName || ANONYMOUS;
        if (props[propName] == null) {
          var locationName = location;
          if (isRequired) {
            return new Error("Required " + locationName + " `" + propFullName + "` was not specified in " + ("`" + componentName + "`."));
          }
        } else {
          return validate.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createImmutableTypeChecker(immutableClassName, immutableClassTypeValidator) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!immutableClassTypeValidator(propValue)) {
          var propType = getPropType(propValue);
          return new Error("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `" + immutableClassName + "`."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createIterableSubclassTypeChecker(subclassName, validator) {
      return createImmutableTypeChecker("Iterable." + subclassName, function(propValue) {
        return Immutable.Iterable.isIterable(propValue) && validator(propValue);
      });
    }
    function createIterableTypeChecker(typeChecker, immutableClassName, immutableClassTypeValidator) {
      function validate(props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
          rest[_key - 5] = arguments[_key];
        }
        var propValue = props[propName];
        if (!immutableClassTypeValidator(propValue)) {
          var locationName = location;
          var propType = getPropType(propValue);
          return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
        }
        if (typeof typeChecker !== "function") {
          return new Error("Invalid typeChecker supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
        }
        var propValues = propValue.valueSeq().toArray();
        for (var i = 0, len = propValues.length; i < len; i++) {
          var error = typeChecker.apply(void 0, [propValues, i, componentName, location, "" + propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return createChainableTypeChecker(validate);
    }
    function createKeysTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
          rest[_key - 5] = arguments[_key];
        }
        var propValue = props[propName];
        if (typeof typeChecker !== "function") {
          return new Error("Invalid keysTypeChecker (optional second argument) supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
        }
        var keys = propValue.keySeq().toArray();
        for (var i = 0, len = keys.length; i < len; i++) {
          var error = typeChecker.apply(void 0, [keys, i, componentName, location, "" + propFullName + " -> key(" + keys[i] + ")"].concat(rest));
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return createChainableTypeChecker(validate);
    }
    function createListOfTypeChecker(typeChecker) {
      return createIterableTypeChecker(typeChecker, "List", Immutable.List.isList);
    }
    function createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, immutableClassName, immutableClassTypeValidator) {
      function validate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return createIterableTypeChecker(valuesTypeChecker, immutableClassName, immutableClassTypeValidator).apply(void 0, args) || keysTypeChecker && createKeysTypeChecker(keysTypeChecker).apply(void 0, args);
      }
      return createChainableTypeChecker(validate);
    }
    function createMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
      return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "Map", Immutable.Map.isMap);
    }
    function createOrderedMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
      return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
    }
    function createSetOfTypeChecker(typeChecker) {
      return createIterableTypeChecker(typeChecker, "Set", Immutable.Set.isSet);
    }
    function createOrderedSetOfTypeChecker(typeChecker) {
      return createIterableTypeChecker(typeChecker, "OrderedSet", Immutable.OrderedSet.isOrderedSet);
    }
    function createStackOfTypeChecker(typeChecker) {
      return createIterableTypeChecker(typeChecker, "Stack", Immutable.Stack.isStack);
    }
    function createIterableOfTypeChecker(typeChecker) {
      return createIterableTypeChecker(typeChecker, "Iterable", Immutable.Iterable.isIterable);
    }
    function createRecordOfTypeChecker(recordKeys) {
      function validate(props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
          rest[_key - 5] = arguments[_key];
        }
        var propValue = props[propName];
        if (!(propValue instanceof Immutable.Record)) {
          var propType = getPropType(propValue);
          var locationName = location;
          return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js Record."));
        }
        for (var key in recordKeys) {
          var checker = recordKeys[key];
          if (!checker) {
            continue;
          }
          var mutablePropValue = propValue.toObject();
          var error = checker.apply(void 0, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
          if (error) {
            return error;
          }
        }
      }
      return createChainableTypeChecker(validate);
    }
    function createShapeTypeChecker(shapeTypes) {
      var immutableClassName = arguments[1] === void 0 ? "Iterable" : arguments[1];
      var immutableClassTypeValidator = arguments[2] === void 0 ? Immutable.Iterable.isIterable : arguments[2];
      function validate(props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
          rest[_key - 5] = arguments[_key];
        }
        var propValue = props[propName];
        if (!immutableClassTypeValidator(propValue)) {
          var propType = getPropType(propValue);
          var locationName = location;
          return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
        }
        var mutablePropValue = propValue.toObject();
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker.apply(void 0, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
          if (error) {
            return error;
          }
        }
      }
      return createChainableTypeChecker(validate);
    }
    function createShapeChecker(shapeTypes) {
      return createShapeTypeChecker(shapeTypes);
    }
    function createMapContainsChecker(shapeTypes) {
      return createShapeTypeChecker(shapeTypes, "Map", Immutable.Map.isMap);
    }
    function createOrderedMapContainsChecker(shapeTypes) {
      return createShapeTypeChecker(shapeTypes, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
    }
    module.exports = ImmutablePropTypes;
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node-modules-polyfills:buffer
var buffer_exports = {};
__export(buffer_exports, {
  Buffer: () => Buffer2,
  INSPECT_MAX_BYTES: () => INSPECT_MAX_BYTES,
  SlowBuffer: () => SlowBuffer,
  isBuffer: () => isBuffer,
  kMaxLength: () => _kMaxLength
});
function init() {
  inited = true;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
  arr = new Arr(len * 3 / 4 - placeHolders);
  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 255;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 255;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 255;
    arr[L++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var output = "";
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 63];
    output += "==";
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 63];
    output += lookup[tmp << 2 & 63];
    output += "=";
  }
  parts.push(output);
  return parts.join("");
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer[offset + i - d] |= s * 128;
}
function kMaxLength() {
  return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError("Invalid typed array length");
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = new Uint8Array(length);
    that.__proto__ = Buffer2.prototype;
  } else {
    if (that === null) {
      that = new Buffer2(length);
    }
    that.length = length;
  }
  return that;
}
function Buffer2(arg, encodingOrOffset, length) {
  if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
    return new Buffer2(arg, encodingOrOffset, length);
  }
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
function from(that, value, encodingOrOffset, length) {
  if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }
  if (typeof value === "string") {
    return fromString(that, value, encodingOrOffset);
  }
  return fromObject(that, value);
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}
function alloc(that, size, fill2, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill2 !== void 0) {
    return typeof encoding === "string" ? createBuffer(that, size).fill(fill2, encoding) : createBuffer(that, size).fill(fill2);
  }
  return createBuffer(that, size);
}
function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer2.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}
function fromString(that, string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer2.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }
  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);
  if (actual !== length) {
    that = that.slice(0, actual);
  }
  return that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength;
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError("'offset' is out of bounds");
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError("'length' is out of bounds");
  }
  if (byteOffset === void 0 && length === void 0) {
    array = new Uint8Array(array);
  } else if (length === void 0) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }
  if (Buffer2.TYPED_ARRAY_SUPPORT) {
    that = array;
    that.__proto__ = Buffer2.prototype;
  } else {
    that = fromArrayLike(that, array);
  }
  return that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);
    if (that.length === 0) {
      return that;
    }
    obj.copy(that, 0, 0, len);
    return that;
  }
  if (obj) {
    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
      if (typeof obj.length !== "number" || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }
    if (obj.type === "Buffer" && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function checked(length) {
  if (length >= kMaxLength()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
  }
  return length | 0;
}
function SlowBuffer(length) {
  if (+length != length) {
    length = 0;
  }
  return Buffer2.alloc(+length);
}
function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}
function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    string = "" + string;
  }
  var len = string.length;
  if (len === 0)
    return 0;
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase)
          return utf8ToBytes(string).length;
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
function slowToString(encoding, start, end) {
  var loweredCase = false;
  if (start === void 0 || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === void 0 || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding)
    encoding = "utf8";
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0)
    return -1;
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0)
    byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir)
      return -1;
    else
      byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir)
      byteOffset = 0;
    else
      return -1;
  }
  if (typeof val === "string") {
    val = Buffer2.from(val, encoding);
  }
  if (internalIsBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== void 0) {
    encoding = String(encoding).toLowerCase();
    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read2(buf, i2) {
    if (indexSize === 1) {
      return buf[i2];
    } else {
      return buf.readUInt16BE(i2 * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1)
          foundIndex = i;
        if (i - foundIndex + 1 === valLength)
          return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1)
          i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength)
      byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read2(arr, i + j) !== read2(val, j)) {
          found = false;
          break;
        }
      }
      if (found)
        return i;
    }
  }
  return -1;
}
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string.length;
  if (strLen % 2 !== 0)
    throw new TypeError("Invalid hex string");
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed))
      return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  var res = "";
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0)
    start = 0;
  if (!end || end < 0 || end > len)
    end = len;
  var out = "";
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = "";
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError("offset is not uint");
  if (offset + ext > length)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
}
function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 65535 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}
function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0)
    value = 4294967295 + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
  }
}
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
  if (offset < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
function base64clean(str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, "");
  if (str.length < 2)
    return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function stringtrim(str) {
  if (str.trim)
    return str.trim();
  return str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
  if (n < 16)
    return "0" + n.toString(16);
  return n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(
        codePoint >> 6 | 192,
        codePoint & 63 | 128
      );
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(
        codePoint >> 12 | 224,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128
      );
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(
        codePoint >> 18 | 240,
        codePoint >> 12 & 63 | 128,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128
      );
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0)
      break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length)
      break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isnan(val) {
  return val !== val;
}
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
}
var lookup, revLookup, Arr, inited, toString, isArray, INSPECT_MAX_BYTES, _kMaxLength, MAX_ARGUMENTS_LENGTH, INVALID_BASE64_RE;
var init_buffer = __esm({
  "node-modules-polyfills:buffer"() {
    lookup = [];
    revLookup = [];
    Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    inited = false;
    toString = {}.toString;
    isArray = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
    INSPECT_MAX_BYTES = 50;
    Buffer2.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : true;
    _kMaxLength = kMaxLength();
    Buffer2.poolSize = 8192;
    Buffer2._augment = function(arr) {
      arr.__proto__ = Buffer2.prototype;
      return arr;
    };
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
      Buffer2.prototype.__proto__ = Uint8Array.prototype;
      Buffer2.__proto__ = Uint8Array;
    }
    Buffer2.alloc = function(size, fill2, encoding) {
      return alloc(null, size, fill2, encoding);
    };
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.isBuffer = isBuffer;
    Buffer2.compare = function compare(a, b) {
      if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
        throw new TypeError("Arguments must be Buffers");
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };
    Buffer2.byteLength = byteLength;
    Buffer2.prototype._isBuffer = true;
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString2() {
      var length = this.length | 0;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.equals = function equals(b) {
      if (!internalIsBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      var str = "";
      var max = INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
        if (this.length > max)
          str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target)) {
        throw new TypeError("Argument must be a Buffer");
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    Buffer2.prototype.write = function write2(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    MAX_ARGUMENTS_LENGTH = 4096;
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer2.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer2(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }
      return newBuf;
    };
    Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return read(this, offset, false, 52, 8);
    };
    Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength2 = byteLength2 | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (!Buffer2.TYPED_ARRAY_SUPPORT)
        value = Math.floor(value);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      if (Buffer2.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4;
    };
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      var i;
      if (this === target && start < targetStart && targetStart < end) {
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  }
});

// node-modules-polyfills-commonjs:buffer
var require_buffer = __commonJS({
  "node-modules-polyfills-commonjs:buffer"(exports, module) {
    var polyfill = (init_buffer(), __toCommonJS(buffer_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = require_buffer();
    var Buffer3 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer3.from && Buffer3.alloc && Buffer3.allocUnsafe && Buffer3.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer3(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer3.prototype);
    copyProps(Buffer3, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer3(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill2, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer3(size);
      if (fill2 !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill2, encoding);
        } else {
          buf.fill(fill2);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer3(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/randombytes/browser.js
var require_browser = __commonJS({
  "node_modules/randombytes/browser.js"(exports, module) {
    "use strict";
    var MAX_BYTES = 65536;
    var MAX_UINT32 = 4294967295;
    function oldBrowser() {
      throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
    }
    var Buffer3 = require_safe_buffer().Buffer;
    var crypto = globalThis.crypto || globalThis.msCrypto;
    if (crypto && crypto.getRandomValues) {
      module.exports = randomBytes2;
    } else {
      module.exports = oldBrowser;
    }
    function randomBytes2(size, cb) {
      if (size > MAX_UINT32)
        throw new RangeError("requested too many random bytes");
      var bytes = Buffer3.allocUnsafe(size);
      if (size > 0) {
        if (size > MAX_BYTES) {
          for (var generated = 0; generated < size; generated += MAX_BYTES) {
            crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
          }
        } else {
          crypto.getRandomValues(bytes);
        }
      }
      if (typeof cb === "function") {
        return process.nextTick(function() {
          cb(null, bytes);
        });
      }
      return bytes;
    }
  }
});

// node_modules/@braintree/sanitize-url/dist/index.js
var require_dist = __commonJS({
  "node_modules/@braintree/sanitize-url/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sanitizeUrl = void 0;
    var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
    var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
    var htmlCtrlEntityRegex = /&(newline|tab);/gi;
    var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
    var urlSchemeRegex = /^.+(:|&colon;)/gim;
    var relativeFirstCharacters = [".", "/"];
    function isRelativeUrlWithoutProtocol(url) {
      return relativeFirstCharacters.indexOf(url[0]) > -1;
    }
    function decodeHtmlCharacters(str) {
      return str.replace(htmlEntitiesRegex, function(match, dec) {
        return String.fromCharCode(dec);
      });
    }
    function sanitizeUrl2(url) {
      var sanitizedUrl = decodeHtmlCharacters(url || "").replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
      if (!sanitizedUrl) {
        return "about:blank";
      }
      if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
        return sanitizedUrl;
      }
      var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
      if (!urlSchemeParseResults) {
        return sanitizedUrl;
      }
      var urlScheme = urlSchemeParseResults[0];
      if (invalidProtocolRegex.test(urlScheme)) {
        return "about:blank";
      }
      return sanitizedUrl;
    }
    exports.sanitizeUrl = sanitizeUrl2;
  }
});

// src/model-example.jsx
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_react_immutable_proptypes = __toESM(require_ImmutablePropTypes());
var import_classnames = __toESM(require_classnames());
var import_randombytes = __toESM(require_browser());
var ModelExample = class extends import_react.default.Component {
  constructor(props, context) {
    super(props, context);
    __publicField(this, "activeTab", (e) => {
      let { target: { dataset: { name } } } = e;
      this.setState({
        activeTab: name
      });
    });
    let { getConfigs, isExecute } = this.props;
    let { defaultModelRendering } = getConfigs();
    let activeTab = defaultModelRendering;
    if (defaultModelRendering !== "example" && defaultModelRendering !== "model") {
      activeTab = "example";
    }
    if (isExecute) {
      activeTab = "example";
    }
    this.state = {
      activeTab
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isExecute && !this.props.isExecute && this.props.example) {
      this.setState({ activeTab: "example" });
    }
  }
  render() {
    let { getComponent, specSelectors, schema, example, isExecute, getConfigs, specPath, includeReadOnly, includeWriteOnly } = this.props;
    let { defaultModelExpandDepth } = getConfigs();
    const ModelWrapper = getComponent("ModelWrapper");
    const ModelFlatWrapper2 = getComponent("ModelFlatWrapper");
    const HighlightCode = getComponent("highlightCode");
    const exampleTabId = (0, import_randombytes.default)(5).toString("base64");
    const examplePanelId = (0, import_randombytes.default)(5).toString("base64");
    const modelTabId = (0, import_randombytes.default)(5).toString("base64");
    const modelPanelId = (0, import_randombytes.default)(5).toString("base64");
    const modelFlatTabId = (0, import_randombytes.default)(5).toString("base64");
    const modelFlatPanelId = (0, import_randombytes.default)(5).toString("base64");
    let isOAS3 = specSelectors.isOAS3();
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "model-example" }, /* @__PURE__ */ import_react.default.createElement("ul", { className: "tab", role: "tablist" }, /* @__PURE__ */ import_react.default.createElement("li", { className: (0, import_classnames.default)("tabitem", { active: this.state.activeTab === "example" }), role: "presentation" }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        "aria-controls": examplePanelId,
        "aria-selected": this.state.activeTab === "example",
        className: "tablinks",
        "data-name": "example",
        id: exampleTabId,
        onClick: this.activeTab,
        role: "tab"
      },
      isExecute ? "Edit Value" : "Example Value"
    )), schema && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("li", { className: (0, import_classnames.default)("tabitem", { active: this.state.activeTab === "model" }), role: "presentation" }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        "aria-controls": modelPanelId,
        "aria-selected": this.state.activeTab === "model",
        className: (0, import_classnames.default)("tablinks", { inactive: isExecute }),
        "data-name": "model",
        id: modelTabId,
        onClick: this.activeTab,
        role: "tab"
      },
      isOAS3 ? "Schema" : "Model"
    )), /* @__PURE__ */ import_react.default.createElement("li", { className: (0, import_classnames.default)("tabitem", { active: this.state.activeTab === "modelFlat" }), role: "presentation" }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        "aria-controls": modelFlatPanelId,
        "aria-selected": this.state.activeTab === "modelFlat",
        className: (0, import_classnames.default)("tablinks", { inactive: isExecute }),
        "data-name": "modelFlat",
        id: modelFlatTabId,
        onClick: this.activeTab,
        role: "tab"
      },
      isOAS3 ? "Schema Flat" : "Model Flat"
    )))), this.state.activeTab === "example" && /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        "aria-hidden": this.state.activeTab !== "example",
        "aria-labelledby": exampleTabId,
        "data-name": "examplePanel",
        id: examplePanelId,
        role: "tabpanel",
        tabIndex: "0"
      },
      example ? example : /* @__PURE__ */ import_react.default.createElement(HighlightCode, { value: "(no example available)", getConfigs })
    ), this.state.activeTab === "model" && /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        "aria-hidden": this.state.activeTab === "example",
        "aria-labelledby": modelTabId,
        "data-name": "modelPanel",
        id: modelPanelId,
        role: "tabpanel",
        tabIndex: "0"
      },
      /* @__PURE__ */ import_react.default.createElement(
        ModelWrapper,
        {
          schema,
          getComponent,
          getConfigs,
          specSelectors,
          expandDepth: defaultModelExpandDepth,
          specPath,
          includeReadOnly,
          includeWriteOnly
        }
      )
    ), this.state.activeTab === "modelFlat" && /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        "aria-hidden": this.state.activeTab === "example",
        "aria-labelledby": modelFlatTabId,
        "data-name": "modelFlatPanel",
        id: modelFlatPanelId,
        role: "tabpanel",
        tabIndex: "0"
      },
      /* @__PURE__ */ import_react.default.createElement(
        ModelFlatWrapper2,
        {
          namespace: modelFlatPanelId,
          schema,
          getComponent,
          getConfigs,
          specSelectors,
          includeReadOnly,
          includeWriteOnly
        }
      )
    ));
  }
};
__publicField(ModelExample, "propTypes", {
  getComponent: import_prop_types.default.func.isRequired,
  specSelectors: import_prop_types.default.object.isRequired,
  schema: import_prop_types.default.object.isRequired,
  example: import_prop_types.default.any.isRequired,
  isExecute: import_prop_types.default.bool,
  getConfigs: import_prop_types.default.func.isRequired,
  specPath: import_react_immutable_proptypes.default.list.isRequired,
  includeReadOnly: import_prop_types.default.bool,
  includeWriteOnly: import_prop_types.default.bool
});

// src/model-flat-wrapper.jsx
var import_react3 = __toESM(require_react());

// node_modules/react-immutable-pure-component/lib/react-immutable-pure-component.es.js
var import_react2 = __toESM(require_react());
var import_immutable = __toESM(require_immutable());
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
var NOT_SET = {};
function isMapLike(collection) {
  return collection !== null && _typeof(collection) === "object" && typeof collection.get === "function" && typeof collection.has === "function";
}
function isInvalid(collection) {
  return collection === null || collection === void 0;
}
function get(collection, key, notSetValue) {
  if (isInvalid(collection)) {
    return notSetValue;
  }
  if (isMapLike(collection)) {
    return collection.has(key) ? collection.get(key) : notSetValue;
  }
  return hasOwnProperty.call(collection, key) ? collection[key] : notSetValue;
}
function getIn(collection, keyPath, notSetValue) {
  var i = 0;
  while (i !== keyPath.length) {
    collection = get(collection, keyPath[i++], NOT_SET);
    if (collection === NOT_SET) {
      return notSetValue;
    }
  }
  return collection;
}
function check(config) {
  var prev = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var next = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var checkItem = createChecker(prev, next);
  var checklist = config || Object.keys(_objectSpread2({}, next, {}, prev));
  return checklist.every(checkItem);
}
function createChecker(prev, next) {
  return function(name) {
    if (typeof name === "string") {
      return (0, import_immutable.is)(next[name], prev[name]);
    } else if (Array.isArray(name)) {
      return (0, import_immutable.is)(getIn(next, name), getIn(prev, name));
    }
    throw new TypeError("Invalid key: expected Array or string: " + name);
  };
}
var ImmutablePureComponent = /* @__PURE__ */ function(_React$Component) {
  _inherits(ImmutablePureComponent2, _React$Component);
  function ImmutablePureComponent2() {
    _classCallCheck(this, ImmutablePureComponent2);
    return _possibleConstructorReturn(this, _getPrototypeOf(ImmutablePureComponent2).apply(this, arguments));
  }
  _createClass(ImmutablePureComponent2, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var nextState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return !check(this.updateOnProps, this.props, nextProps, "updateOnProps") || !check(this.updateOnStates, this.state, nextState, "updateOnStates");
    }
  }]);
  return ImmutablePureComponent2;
}(import_react2.default.Component);
var react_immutable_pure_component_es_default = ImmutablePureComponent;

// src/model-flat-wrapper.jsx
var import_react_immutable_proptypes2 = __toESM(require_ImmutablePropTypes());
var import_prop_types2 = __toESM(require_prop_types());

// src/utils.js
var import_sanitize_url = __toESM(require_dist());
function sanitizeUrl(url) {
  if (typeof url !== "string" || url === "") {
    return "";
  }
  return (0, import_sanitize_url.sanitizeUrl)(url);
}
var getExtensions = (defObj) => defObj.filter((v, k) => /^x-/.test(k));
var getRefName = (ref) => {
  if (ref) {
    if (ref.indexOf("#/definitions/") !== -1) {
      return ref.replace(/^.*#\/definitions\//, "");
    }
    if (ref.indexOf("#/components/schemas/") !== -1) {
      return ref.replace(/^.*#\/components\/schemas\//, "");
    }
  }
  return "";
};
var getModelName = (schema) => {
  let name = "";
  if (schema.get("$$ref")) {
    name = getRefName(schema.get("$$ref"));
  }
  if (schema.get("title")) {
    name = schema.get("title");
  }
  return name;
};

// src/model-flat-wrapper.jsx
var ModelFlatWrapper = class extends react_immutable_pure_component_es_default {
  constructor() {
    super(...arguments);
    // TODO: allOf, anyOf, not, $ref
    __publicField(this, "getAllModels", (name, schema, options, models = {}) => {
      if (schema) {
        name = getModelName(schema) || name;
        const type = schema.get("type") || "object";
        if (type === "object") {
          models[name] = schema;
          const properties = schema.get("properties");
          const additionalProperties = schema.get("additionalProperties");
          if (properties) {
            properties.filter((value) => {
              return (!value.get("readOnly") || options.includeReadOnly) && (!value.get("writeOnly") || options.includeWriteOnly);
            }).mapKeys((propertyName, propertyValue) => {
              this.getAllModels(propertyName, propertyValue, options, models);
            });
          }
          if (additionalProperties) {
            this.getAllModels("<*>", additionalProperties, options, models);
          }
        } else if (type === "array" && schema.get("items")) {
          this.getAllModels(name, schema.get("items"), options, models);
        }
      }
      return models;
    });
  }
  // TODO: support primitive type at root or array at root
  render() {
    let { namespace, schema, getComponent, getConfigs, specSelectors, includeReadOnly, includeWriteOnly } = this.props;
    const ModelFlat2 = getComponent("ModelFlat");
    const models = this.getAllModels(null, schema, { includeReadOnly, includeWriteOnly });
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "model-box schema-flat" }, Object.entries(models).map(([key, value]) => {
      return /* @__PURE__ */ import_react3.default.createElement(
        ModelFlat2,
        {
          namespace,
          key,
          name: key,
          schema: value,
          getComponent,
          getConfigs,
          specSelectors,
          includeReadOnly,
          includeWriteOnly
        }
      );
    }));
  }
};
__publicField(ModelFlatWrapper, "propTypes", {
  namespace: import_prop_types2.default.string.isRequired,
  schema: import_react_immutable_proptypes2.default.map.isRequired,
  getComponent: import_prop_types2.default.func.isRequired,
  getConfigs: import_prop_types2.default.func.isRequired,
  specSelectors: import_prop_types2.default.object.isRequired,
  includeReadOnly: import_prop_types2.default.bool,
  includeWriteOnly: import_prop_types2.default.bool
});

// src/model-flat.jsx
var import_react4 = __toESM(require_react());
var import_react_immutable_proptypes3 = __toESM(require_ImmutablePropTypes());
var import_prop_types3 = __toESM(require_prop_types());
var import_immutable2 = __toESM(require_immutable());
var braceOpen = "{";
var braceClose = "}";
var ModelFlat = class extends react_immutable_pure_component_es_default {
  render() {
    let { namespace, getComponent, getConfigs, specSelectors, schema, name, includeReadOnly, includeWriteOnly } = this.props;
    const { showExtensions } = getConfigs();
    const { isOAS3 } = specSelectors;
    const ModelFlatProperty2 = getComponent("ModelFlatProperty");
    const Markdown = getComponent("Markdown", true);
    const ModelCollapse = getComponent("ModelCollapse");
    const Link = getComponent("Link");
    const Property = getComponent("Property");
    const description = schema.get("description");
    const properties = schema.get("properties");
    const additionalProperties = schema.get("additionalProperties");
    const title = schema.get("title") || name;
    const requiredProperties = schema.get("required");
    const infoProperties = schema.filter((v, key) => ["maxProperties", "minProperties", "nullable", "example"].indexOf(key) !== -1);
    const deprecated = schema.get("deprecated");
    const externalDocsUrl = schema.getIn(["externalDocs", "url"]);
    const externalDocsDescription = schema.getIn(["externalDocs", "description"]);
    const collapsedContent = /* @__PURE__ */ import_react4.default.createElement("span", null, /* @__PURE__ */ import_react4.default.createElement("span", null, braceOpen), "...", /* @__PURE__ */ import_react4.default.createElement("span", null, braceClose));
    const titleEl = title && /* @__PURE__ */ import_react4.default.createElement("span", { className: "model-title", id: namespace + "__" + title }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "model-title__text" }, title));
    return /* @__PURE__ */ import_react4.default.createElement("div", { className: "model" }, /* @__PURE__ */ import_react4.default.createElement(
      ModelCollapse,
      {
        modelName: name,
        title: titleEl,
        expanded: true,
        collapsedContent
      },
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "brace-open object" }, braceOpen),
      /* @__PURE__ */ import_react4.default.createElement("div", { className: "inner-object" }, /* @__PURE__ */ import_react4.default.createElement("table", { className: "model table is-hoverable" }, /* @__PURE__ */ import_react4.default.createElement(
        "tbody",
        null,
        !description ? null : /* @__PURE__ */ import_react4.default.createElement("tr", { className: "description" }, /* @__PURE__ */ import_react4.default.createElement("td", null, "description:"), /* @__PURE__ */ import_react4.default.createElement("td", null, /* @__PURE__ */ import_react4.default.createElement(Markdown, { source: description }))),
        externalDocsUrl && /* @__PURE__ */ import_react4.default.createElement("tr", { className: "external-docs" }, /* @__PURE__ */ import_react4.default.createElement("td", null, "externalDocs:"), /* @__PURE__ */ import_react4.default.createElement("td", null, /* @__PURE__ */ import_react4.default.createElement(Link, { target: "_blank", href: sanitizeUrl(externalDocsUrl) }, externalDocsDescription || externalDocsUrl))),
        !deprecated ? null : /* @__PURE__ */ import_react4.default.createElement("tr", { className: "property" }, /* @__PURE__ */ import_react4.default.createElement("td", null, "deprecated:"), /* @__PURE__ */ import_react4.default.createElement("td", null, "true")),
        !(properties && properties.size) ? null : properties.filter(
          (value) => {
            return (!value.get("readOnly") || includeReadOnly) && (!value.get("writeOnly") || includeWriteOnly);
          }
        ).map((value, key) => {
          const isRequired = import_immutable2.List.isList(requiredProperties) && requiredProperties.contains(key);
          const isDeprecated = isOAS3() && schema.get("deprecated");
          const classNames = ["property-row"];
          if (isDeprecated) {
            classNames.push("deprecated");
          }
          if (isRequired) {
            classNames.push("required");
          }
          return /* @__PURE__ */ import_react4.default.createElement("tr", { key, className: classNames.join(" ") }, /* @__PURE__ */ import_react4.default.createElement("td", null, key, isRequired && /* @__PURE__ */ import_react4.default.createElement("span", { className: "star" }, "*")), /* @__PURE__ */ import_react4.default.createElement("td", null, /* @__PURE__ */ import_react4.default.createElement(
            ModelFlatProperty2,
            {
              namespace,
              key,
              getComponent,
              getConfigs,
              schema: value,
              name: key
            }
          )));
        }).toArray(),
        // empty row before extensions...
        !showExtensions ? null : /* @__PURE__ */ import_react4.default.createElement("tr", null, /* @__PURE__ */ import_react4.default.createElement("td", null, "\xA0")),
        !showExtensions ? null : schema.entrySeq().map(
          ([key, value]) => {
            if (key.slice(0, 2) !== "x-") {
              return;
            }
            const normalizedValue = !value ? null : value.toJS ? value.toJS() : value;
            return /* @__PURE__ */ import_react4.default.createElement("tr", { key, className: "extension" }, /* @__PURE__ */ import_react4.default.createElement("td", null, key), /* @__PURE__ */ import_react4.default.createElement("td", null, JSON.stringify(normalizedValue)));
          }
        ).toArray(),
        !(additionalProperties && additionalProperties.size) ? null : /* @__PURE__ */ import_react4.default.createElement("tr", null, /* @__PURE__ */ import_react4.default.createElement("td", null, "< * >:"), /* @__PURE__ */ import_react4.default.createElement("td", null, /* @__PURE__ */ import_react4.default.createElement(
          ModelFlatProperty2,
          {
            namespace,
            getComponent,
            getConfigs,
            schema: additionalProperties,
            name: "< * >"
          }
        )))
      ))),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "brace-close" }, braceClose),
      infoProperties.map((value, key) => {
        return /* @__PURE__ */ import_react4.default.createElement(Property, { key: `${key}-${value}`, propKey: key, propVal: value, propClass: "property" });
      }).toArray()
    ));
  }
};
__publicField(ModelFlat, "propTypes", {
  namespace: import_prop_types3.default.string.isRequired,
  schema: import_react_immutable_proptypes3.default.map.isRequired,
  getComponent: import_prop_types3.default.func.isRequired,
  getConfigs: import_prop_types3.default.func.isRequired,
  specSelectors: import_prop_types3.default.object.isRequired,
  name: import_prop_types3.default.string,
  includeReadOnly: import_prop_types3.default.bool,
  includeWriteOnly: import_prop_types3.default.bool
});

// src/model-flat-property.jsx
var import_react5 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var propClass = "property primitive";
var ModelFlatProperty = class extends import_react5.Component {
  getFilteredProperties(schema) {
    const extensions = getExtensions(schema);
    return schema.filter((_, key) => ["example", "enum", "type", "description", "$$ref", "externalDocs", "items", "properties", "additionalProperties", "xml"].indexOf(key) === -1).filterNot((_, key) => extensions.has(key));
  }
  renderProperties(schema) {
    const properties = this.getFilteredProperties(schema);
    if (properties.size) {
      return /* @__PURE__ */ import_react5.default.createElement("span", { className: "properties-list" }, "(", properties.entrySeq().map(
        ([key, v]) => /* @__PURE__ */ import_react5.default.createElement("span", { key: `${key}-${v}`, className: propClass }, key, ": ", v)
      ), ")");
    }
    return "";
  }
  renderTypeAndProperties(schema, namespace) {
    const type = schema.get("type");
    if (type === "object") {
      const name = getModelName(schema);
      return /* @__PURE__ */ import_react5.default.createElement("span", { className: "prop-type" }, /* @__PURE__ */ import_react5.default.createElement("a", { href: "#" + namespace + "__" + name }, name));
    } else if (type === "array" && schema.get("items")) {
      return /* @__PURE__ */ import_react5.default.createElement("span", { className: "prop-type" }, "Array[", this.renderTypeAndProperties(schema.get("items"), namespace), this.renderProperties(schema.get("items")), "]");
    } else {
      return /* @__PURE__ */ import_react5.default.createElement("span", { className: "prop-type" }, type || "object");
    }
  }
  render() {
    const { namespace, getComponent, getConfigs, schema, name } = this.props;
    const { showExtensions } = getConfigs();
    if (!schema || !schema.get) {
      return /* @__PURE__ */ import_react5.default.createElement("div", null);
    }
    const xml = schema.get("xml");
    const enumArray = schema.get("enum");
    const description = schema.get("description");
    const example = schema.get("example");
    const extensions = getExtensions(schema);
    const properties = this.getFilteredProperties(schema);
    const externalDocsUrl = schema.getIn(["externalDocs", "url"]);
    const externalDocsDescription = schema.getIn(["externalDocs", "description"]);
    const Markdown = getComponent("Markdown", true);
    const Property = getComponent("Property");
    const Link = getComponent("Link");
    return /* @__PURE__ */ import_react5.default.createElement("span", { className: "model" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "prop" }, this.renderTypeAndProperties(schema, namespace), !(properties && properties.size) ? null : /* @__PURE__ */ import_react5.default.createElement("span", { className: "properties-list" }, "(", properties.entrySeq().map(
      ([key, v]) => /* @__PURE__ */ import_react5.default.createElement("span", { key: `${key}-${v}`, className: propClass }, key, ": ", v)
    ), ")"), !(showExtensions && extensions.size) ? null : extensions.entrySeq().map(
      ([key, v]) => /* @__PURE__ */ import_react5.default.createElement(Property, { key: `${key}-${v}`, propKey: key, propVal: v, propClass })
    ), example && /* @__PURE__ */ import_react5.default.createElement(Property, { propKey: "example", propVal: example, propClass }), enumArray && /* @__PURE__ */ import_react5.default.createElement("span", { className: "prop-enum" }, "Enum: [ ", enumArray.join(", "), " ]"), description && /* @__PURE__ */ import_react5.default.createElement(Markdown, { source: description }), externalDocsUrl && /* @__PURE__ */ import_react5.default.createElement("div", { className: "external-docs" }, /* @__PURE__ */ import_react5.default.createElement(Link, { target: "_blank", href: sanitizeUrl(externalDocsUrl) }, externalDocsDescription || externalDocsUrl)), !(xml && xml.size) ? null : /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("span", { className: propClass }, "xml:"), xml.entrySeq().map(([key, v]) => /* @__PURE__ */ import_react5.default.createElement("span", { key: `${key}-${v}`, className: propClass }, /* @__PURE__ */ import_react5.default.createElement("br", null), "\xA0\xA0\xA0", key, ": ", String(v))).toArray())));
  }
};
__publicField(ModelFlatProperty, "propTypes", {
  namespace: import_prop_types4.default.string.isRequired,
  schema: import_prop_types4.default.object.isRequired,
  getComponent: import_prop_types4.default.func.isRequired,
  getConfigs: import_prop_types4.default.func.isRequired,
  name: import_prop_types4.default.string,
  displayName: import_prop_types4.default.string,
  depth: import_prop_types4.default.number,
  expandDepth: import_prop_types4.default.number
});

// src/swaggerUiFlatModelPlugin.tsx
var swaggerUiFlatModelPlugin = (system) => {
  return {
    components: {
      modelExample: ModelExample,
      ModelFlatWrapper,
      ModelFlat,
      ModelFlatProperty
    }
  };
};
window["swaggerUiFlatModelPlugin"] = swaggerUiFlatModelPlugin;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/