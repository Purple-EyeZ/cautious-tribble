"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: ((k) => from[k]).bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

  // node_modules/@swc/helpers/esm/_async_to_generator.js
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
  }
  function _async_to_generator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err2) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err2);
        }
        _next(void 0);
      });
    };
  }
  var init_async_to_generator = __esm({
    "node_modules/@swc/helpers/esm/_async_to_generator.js"() {
    }
  });

  // libraries/utils/src/functions.ts
  function noop() {
  }
  function noopPromise() {
    return _noopPromise.apply(this, arguments);
  }
  function _noopPromise() {
    _noopPromise = _async_to_generator(function* () {
    });
    return _noopPromise.apply(this, arguments);
  }
  var objectSeal, objectFreeze, sleep;
  var init_functions = __esm({
    "libraries/utils/src/functions.ts"() {
      "use strict";
      init_async_to_generator();
      objectSeal = Object.seal;
      objectFreeze = Object.freeze;
      sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    }
  });

  // libraries/utils/src/library.ts
  function createLogger(name) {
    var tag = `[revenge.${name}]`;
    return {
      log: (message) => console.log(`${tag} ${message}`),
      warn: (message) => console.warn(`${tag} ${message}`),
      error: (message) => console.error(`${tag} ${message}`)
    };
  }
  var init_library = __esm({
    "libraries/utils/src/library.ts"() {
      "use strict";
    }
  });

  // libraries/debug/src/index.ts
  function timeOf(time) {
    return timestampOf(time) - PerformanceTimes.Native_RequiredIndex;
  }
  function timestampOf(time) {
    var timestamp = PerformanceTimes[time];
    if (timestamp === -1) return Number.NaN;
    return timestamp;
  }
  function recordTimestamp(time) {
    return PerformanceTimes[time] = nativePerformanceNow();
  }
  var PerformanceTimes;
  var init_src = __esm({
    "libraries/debug/src/index.ts"() {
      "use strict";
      PerformanceTimes = {
        Native_RequiredIndex: -1,
        Init_Initialize: -1,
        Modules_TriedRestoreCache: -1,
        Modules_HookedFactories: -1,
        Modules_IndexRequired: -1,
        Init_PromiseResolved: -1,
        Modules_RequiredAssets: -1,
        App_RunApplicationCalled: -1,
        App_AfterRunRACallbacks: -1,
        Plugins_Registered: -1,
        Storage_Initialized: -1,
        Plugins_Started: -1,
        App_CreateElementCalled: -1,
        App_AfterRunCECallbacks: -1
      };
    }
  });

  // libraries/utils/src/enums.ts
  function createBitFlagEnum(...flags) {
    var _enum = {};
    for (var i = 0; i < flags.length; i++) {
      var flag = flags[i];
      _enum[flag] = 1 << i;
    }
    return _enum;
  }
  var init_enums = __esm({
    "libraries/utils/src/enums.ts"() {
      "use strict";
    }
  });

  // libraries/modules/src/constants.ts
  var constants_exports = {};
  __export(constants_exports, {
    FirstAssetTypeRegisteredKey: () => FirstAssetTypeRegisteredKey,
    IndexMetroModuleId: () => IndexMetroModuleId,
    MetroCacheRelativeFilePath: () => MetroCacheRelativeFilePath,
    MetroCacheVersion: () => MetroCacheVersion,
    MetroModuleFilePathKey: () => MetroModuleFilePathKey,
    MetroModuleFlags: () => MetroModuleFlags,
    MetroModuleLookupFlags: () => MetroModuleLookupFlags,
    SafeModuleHookAmountBeforeDefer: () => SafeModuleHookAmountBeforeDefer,
    assetCacheIndexSymbol: () => assetCacheIndexSymbol
  });
  var MetroModuleFlags, MetroModuleLookupFlags, IndexMetroModuleId, SafeModuleHookAmountBeforeDefer, MetroCacheVersion, MetroCacheRelativeFilePath, FirstAssetTypeRegisteredKey, MetroModuleFilePathKey, assetCacheIndexSymbol;
  var init_constants = __esm({
    "libraries/modules/src/constants.ts"() {
      "use strict";
      init_enums();
      MetroModuleFlags = createBitFlagEnum("Blacklisted", "Asset");
      MetroModuleLookupFlags = createBitFlagEnum("NotFound", "FullLookup");
      IndexMetroModuleId = 0;
      SafeModuleHookAmountBeforeDefer = 1500;
      MetroCacheVersion = 2;
      MetroCacheRelativeFilePath = "RevengeMetroCache";
      FirstAssetTypeRegisteredKey = "__firstAssetTypeRegistered";
      MetroModuleFilePathKey = "__moduleFilePath";
      assetCacheIndexSymbol = Symbol.for("revenge.modules.metro.caches.assetCacheIndex");
    }
  });

  // libraries/utils/src/lazy.ts
  function lazyValue(factory, opts = {}) {
    var cache2;
    var HintMap = {
      object: {},
      // biome-ignore lint/complexity/useArrowFunction: When hint is a function, we need to hint it as a function WHICH CAN HAVE A CONSTRUCTOR
      function: function _function() {
      }
    };
    var dummy = HintMap[opts.hint ?? "function"];
    var proxyFactory = () => cache2 ??= factory();
    var proxy = new Proxy(dummy, lazyHandler);
    factories.set(proxy, proxyFactory);
    proxyContextHolder.set(dummy, {
      factory,
      options: opts
    });
    return proxy;
  }
  function lazyDestructure(factory, opts = {}) {
    var proxiedObject = lazyValue(factory);
    return new Proxy({}, {
      get(_3, property) {
        if (property === Symbol.iterator) {
          return function* () {
            yield proxiedObject;
            yield new Proxy({}, {
              get: (_4, p) => lazyValue(() => proxiedObject[p], opts)
            });
            throw new Error("This is not a real iterator, this is likely used incorrectly");
          };
        }
        return lazyValue(() => proxiedObject[property], opts);
      }
    });
  }
  function getProxyFactory(obj) {
    return factories.get(obj);
  }
  var unconfigurable, isUnconfigurable, factories, proxyContextHolder, lazyHandler;
  var init_lazy = __esm({
    "libraries/utils/src/lazy.ts"() {
      "use strict";
      unconfigurable = /* @__PURE__ */ new Set([
        "arguments",
        "caller",
        "prototype"
      ]);
      isUnconfigurable = (key) => typeof key === "string" && unconfigurable.has(key);
      factories = /* @__PURE__ */ new WeakMap();
      proxyContextHolder = /* @__PURE__ */ new WeakMap();
      lazyHandler = {
        ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((fnName) => {
          return [
            fnName,
            (target, ...args) => {
              var contextHolder = proxyContextHolder.get(target);
              var resolved = contextHolder?.factory();
              if (!resolved) throw new Error(`Cannot run Reflect.${fnName} on ${typeof resolved}`);
              return Reflect[fnName](resolved, ...args);
            }
          ];
        })),
        has(target, p) {
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries && p in isolatedEntries) return true;
          }
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Cannot read keys of ${typeof resolved} (reading '${String(p)})`);
          return Reflect.has(resolved, p);
        },
        get(target, p, receiver) {
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries?.[p]) return isolatedEntries[p];
          }
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Cannot read properties of ${typeof resolved} (reading '${String(p)}')`);
          return Reflect.get(resolved, p, receiver);
        },
        ownKeys: (target) => {
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Cannot get keys of ${typeof resolved}`);
          var cacheKeys = Reflect.ownKeys(resolved);
          for (var key of unconfigurable) {
            if (!cacheKeys.includes(key)) cacheKeys.push(key);
          }
          return cacheKeys;
        },
        getOwnPropertyDescriptor: (target, p) => {
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved) throw new Error(`Cannot get property descriptor of ${typeof resolved} (getting '${String(p)}')`);
          if (isUnconfigurable(p)) return Reflect.getOwnPropertyDescriptor(target, p);
          var descriptor = Reflect.getOwnPropertyDescriptor(resolved, p);
          if (descriptor) Object.defineProperty(target, p, descriptor);
          return descriptor;
        }
      };
    }
  });

  // libraries/modules/src/native/modules.ts
  var nmp, CacheModule, FileModule, ClientInfoModule, DeviceModule, BundleUpdaterManager, ThemeModule;
  var init_modules = __esm({
    "libraries/modules/src/native/modules.ts"() {
      "use strict";
      init_lazy();
      nmp = nativeModuleProxy;
      CacheModule = lazyValue(() => nmp.NativeCacheModule ?? nmp.MMKVManager);
      FileModule = lazyValue(() => nmp.NativeFileModule ?? nmp.RTNFileManager ?? nmp.DCDFileManager);
      ClientInfoModule = lazyValue(() => nmp.NativeClientInfoModule ?? nmp.RTNClientInfoManager ?? nmp.InfoDictionaryManager);
      DeviceModule = lazyValue(() => nmp.NativeDeviceModule ?? nmp.RTNDeviceManager ?? nmp.DCDDeviceManager);
      BundleUpdaterManager = lazyValue(() => nmp.BundleUpdaterManager);
      ThemeModule = lazyValue(() => nmp.NativeThemeModule ?? nmp.RTNThemeManager ?? nmp.DCDThemeManager);
    }
  });

  // libraries/modules/src/native/index.ts
  var native_exports = {};
  __export(native_exports, {
    BundleUpdaterManager: () => BundleUpdaterManager,
    CacheModule: () => CacheModule,
    ClientInfoModule: () => ClientInfoModule,
    DeviceModule: () => DeviceModule,
    FileModule: () => FileModule,
    ThemeModule: () => ThemeModule
  });
  var init_native = __esm({
    "libraries/modules/src/native/index.ts"() {
      "use strict";
      init_modules();
    }
  });

  // libraries/utils/src/errors.ts
  function getErrorStack(e) {
    return e?.stack || String(e);
  }
  var init_errors = __esm({
    "libraries/utils/src/errors.ts"() {
      "use strict";
    }
  });

  // node_modules/@marshift/strawberry/dist/index.mjs
  function unpatch(patchedFunction, hookId, type) {
    var patch = patchedFunctions.get(patchedFunction);
    if (!patch || !patch[type].delete(hookId)) return false;
    return true;
  }
  var hook_default, getPatchFunc, patchedFunctions, unpatchAll, before, instead, after;
  var init_dist = __esm({
    "node_modules/@marshift/strawberry/dist/index.mjs"() {
      hook_default = (patchedFunc, origFunc, funcArgs, ctx, isConstruct) => {
        var patch = patchedFunctions.get(patchedFunc);
        if (!patch) {
          return isConstruct ? Reflect.construct(origFunc, funcArgs, ctx) : origFunc.apply(ctx, funcArgs);
        }
        for (var hook of patch.b.values()) {
          var maybefuncArgs = hook.call(ctx, funcArgs);
          if (Array.isArray(maybefuncArgs)) funcArgs = maybefuncArgs;
        }
        var workingRetVal = [
          ...patch.i.values()
        ].reduce(
          (prev, current) => (...args) => current.call(ctx, args, prev),
          // This calls the original function
          (...args) => isConstruct ? Reflect.construct(origFunc, args, ctx) : origFunc.apply(ctx, args)
        )(...funcArgs);
        for (var hook1 of patch.a.values()) {
          workingRetVal = hook1.call(ctx, funcArgs, workingRetVal) ?? workingRetVal;
        }
        for (var cleanup of patch.c) cleanup();
        patch.c = [];
        return workingRetVal;
      };
      getPatchFunc = (patchType) => (funcParent, funcName, callback, oneTime = false) => {
        var origFunc = funcParent[funcName];
        if (typeof origFunc !== "function") {
          throw new Error(`${String(funcName)} is not a function in ${funcParent.constructor.name}`);
        }
        var funcPatch = patchedFunctions.get(origFunc);
        if (!funcPatch) {
          funcPatch = {
            b: /* @__PURE__ */ new Map(),
            i: /* @__PURE__ */ new Map(),
            a: /* @__PURE__ */ new Map(),
            c: []
          };
          var replaceProxy = new Proxy(origFunc, {
            apply: (_3, ctx, args) => runHook(ctx, args, false),
            construct: (_3, args) => runHook(origFunc, args, true),
            get: (target, prop, receiver) => prop == "toString" ? origFunc.toString.bind(origFunc) : Reflect.get(target, prop, receiver)
          });
          var runHook = (ctx, args, construct) => hook_default(replaceProxy, origFunc, args, ctx, construct);
          patchedFunctions.set(replaceProxy, funcPatch);
          if (!Reflect.defineProperty(funcParent, funcName, {
            value: replaceProxy,
            configurable: true,
            writable: true
          })) {
            funcParent[funcName] = replaceProxy;
          }
        }
        var hookId = Symbol();
        var patchedFunc = funcParent[funcName];
        var unpatchThisPatch = () => unpatch(patchedFunc, hookId, patchType);
        if (oneTime) funcPatch.c.push(unpatchThisPatch);
        funcPatch[patchType].set(hookId, callback);
        return unpatchThisPatch;
      };
      unpatchAll = () => patchedFunctions = /* @__PURE__ */ new WeakMap();
      unpatchAll();
      before = getPatchFunc("b");
      instead = getPatchFunc("i");
      after = getPatchFunc("a");
    }
  });

  // libraries/patcher/src/utils.ts
  function createExtendedPatchFunction(fn) {
    function patchFn(...args) {
      if (patcherLazyModuleSymbol in args[0]) {
        var onceModuleLoaded = args[0][patcherLazyModuleSymbol];
        var cancel = false;
        var unpatch2 = () => cancel = true;
        onceModuleLoaded((target) => {
          if (cancel) return;
          args[0] = target;
          unpatch2 = fn.apply(this, args);
        });
        return unpatch2;
      }
      return fn.apply(this, args);
    }
    function promisePatchFn(...args) {
      var thenable = args[0];
      if (!thenable || !("then" in thenable)) throw new Error("Cannot await a non-thenable object");
      var cancel = false;
      var unpatch2 = () => cancel = true;
      thenable.then((target) => {
        if (cancel) return;
        args[0] = target;
        unpatch2 = patchFn.apply(this, args);
      });
      return unpatch2;
    }
    return Object.assign(patchFn, {
      await: promisePatchFn
    });
  }
  function trapFunctionCallsRecursive(func, onBeforeCall, onReturn) {
    return new Proxy(func, {
      apply(target, thisArg, args) {
        var ret = target.apply(thisArg, onBeforeCall(args));
        return onReturn(ret);
      },
      get(target, prop) {
        var maybeFunc = Reflect.get(target, prop);
        if (typeof maybeFunc !== "function") return maybeFunc;
        return trapFunctionCallsRecursive(maybeFunc, onBeforeCall, onReturn);
      }
    });
  }
  var init_utils = __esm({
    "libraries/patcher/src/utils.ts"() {
      "use strict";
      init_src2();
    }
  });

  // libraries/patcher/src/index.ts
  function createPatcherInstance(name) {
    if (patcherInstances.has(name)) throw new Error(`Patcher instance with the name "${name}" already exists`);
    var unpatches = /* @__PURE__ */ new Set();
    var cleanups = /* @__PURE__ */ new WeakMap();
    patcherInstances.set(name, unpatches);
    var onBeforeCall = (_args) => {
      var args = _args;
      var debugKey = args[3] ?? "[NO_DEBUG_KEY]";
      var callback = args[2];
      args[2] = function patchedCallback(patchArgs, origOrRval) {
        if (void 0) console.debug(`Patch ${name}:${debugKey} is intercepting`);
        try {
          return callback.apply(this, [
            patchArgs,
            origOrRval
          ]);
        } catch (e) {
          console.error(`Patch ${name}:${debugKey} threw an error: ${e}`);
          throw new Error(`Patch ${name}:${debugKey} threw an error: ${e}`, {
            cause: e
          });
        }
      };
      args[3] = void 0;
      Object.defineProperty(args[2], "name", {
        value: `revenge.patcher.patch:${name}:${debugKey}`,
        writable: false
      });
      return args;
    };
    var onReturn = (ret) => {
      unpatches.add(ret);
      return () => {
        ret();
        unpatches.delete(ret);
      };
    };
    return {
      after: trapFunctionCallsRecursive(_after, onBeforeCall, onReturn),
      before: trapFunctionCallsRecursive(_before, onBeforeCall, onReturn),
      instead: trapFunctionCallsRecursive(_instead, onBeforeCall, onReturn),
      /**
       * Unpatches all patches created by this instance
       */
      unpatchAll() {
        for (var unpatch2 of unpatches) {
          unpatch2();
          var clups = cleanups.get(unpatch2);
          if (clups) for (var cleanup of clups) cleanup();
        }
      },
      /**
       * Destroys this instance, and unreserves the name
       */
      destroy() {
        this.unpatchAll();
        if (!patcherInstances.delete(name)) console.warn(`Patcher instance with the name "${name}" was not found, and cannot be deleted`);
      },
      /**
       * Whether this instance has been destroyed
       */
      get destroyed() {
        return !patcherInstances.has(name);
      },
      /**
       * The total number of patches created by this instance
       */
      get totalPatches() {
        return unpatches.size;
      }
    };
  }
  var patcherLazyModuleSymbol, patcherInstances, _after, _before, _instead;
  var init_src2 = __esm({
    "libraries/patcher/src/index.ts"() {
      "use strict";
      init_dist();
      init_utils();
      patcherLazyModuleSymbol = Symbol.for("revenge.patcher.lazyModule");
      patcherInstances = /* @__PURE__ */ new Map();
      _after = createExtendedPatchFunction(after);
      _before = createExtendedPatchFunction(before);
      _instead = createExtendedPatchFunction(instead);
    }
  });

  // libraries/modules/src/shared.ts
  var patcher, logger;
  var init_shared = __esm({
    "libraries/modules/src/shared.ts"() {
      "use strict";
      init_src2();
      init_library();
      patcher = createPatcherInstance("revenge.library.modules");
      logger = createLogger("modules");
    }
  });

  // libraries/modules/src/utils/lazy.ts
  function subscribeModuleLazy(proxy, callback) {
    var info = getLazyContext(proxy);
    if (!info) throw new Error("No lazy module attached to this proxy");
    var moduleId = info?.getModuleId();
    if (!moduleId) throw new Error(`Lazy module has no module ID attached, check if your filter matches any modules: ${info.filter.key}`);
    return subscribeModule(moduleId, () => callback(find.eager(info.filter)));
  }
  function getLazyContext(proxy) {
    return lazyContexts.get(proxy);
  }
  function createLazyModule(filter) {
    var moduleIds = indexedModuleIdsForLookup(filter.key);
    var moduleId;
    var cachedValue;
    var context = {
      filter,
      getModuleId: () => moduleId,
      getExports(cb) {
        for (var id of moduleIds) {
          moduleId = id;
          if (getMetroModules()[moduleId]?.isInitialized) {
            if (!cachedValue && !this.forceLoad()) {
              delete cache.lookupFlags[filter.key]?.[moduleId];
              continue;
            }
            cb(cachedValue);
            return noop;
          }
          return this.subscribe(cb);
        }
        if (cachedValue || this.forceLoad()) {
          cb(cachedValue);
          return noop;
        }
        moduleId = void 0;
        return noop;
      },
      subscribe(cb) {
        return subscribeModuleLazy(proxy, cb);
      },
      get cache() {
        return cachedValue;
      },
      forceLoad() {
        cachedValue ??= find.eager(filter);
        return cachedValue;
      }
    };
    var proxy = lazyValue(() => context.forceLoad(), {
      exemptedEntries: {
        [lazyContextSymbol]: context,
        [patcherLazyModuleSymbol]: (cb) => context.getExports(cb)
      }
    });
    lazyContexts.set(proxy, context);
    return proxy;
  }
  var lazyContextSymbol, lazyContexts;
  var init_lazy2 = __esm({
    "libraries/modules/src/utils/lazy.ts"() {
      "use strict";
      init_src2();
      init_functions();
      init_lazy();
      init_finders();
      init_metro();
      init_caches();
      lazyContextSymbol = Symbol.for("revenge.modules.lazyContext");
      lazyContexts = /* @__PURE__ */ new WeakMap();
    }
  });

  // libraries/modules/src/finders.ts
  var finders_exports = {};
  __export(finders_exports, {
    find: () => find,
    findByDisplayName: () => findByDisplayName,
    findByFilePath: () => findByFilePath,
    findByName: () => findByName,
    findByProps: () => findByProps,
    findByQuery: () => findByQuery,
    findBySingleProp: () => findBySingleProp,
    findByStoreName: () => findByStoreName,
    findByTypeName: () => findByTypeName,
    findId: () => findId,
    findProp: () => findProp,
    findSingleProp: () => findSingleProp
  });
  function filterExports(moduleExports, moduleId, filter) {
    if (moduleExports.default && moduleExports.__esModule && filter(moduleExports.default, moduleId, true)) {
      return {
        exports: filter.raw ? moduleExports : moduleExports.default,
        isDefaultExport: !filter.raw
      };
    }
    if (!filter.raw && filter(moduleExports, moduleId, false)) {
      return {
        exports: moduleExports,
        isDefaultExport: false
      };
    }
    return {};
  }
  var findId, find, findByProps, findByName, findByDisplayName, findByTypeName, findByStoreName, findByFilePath, findProp, findBySingleProp, findSingleProp, findByQuery;
  var init_finders = __esm({
    "libraries/modules/src/finders.ts"() {
      "use strict";
      init_lazy();
      init_filters2();
      init_metro();
      init_lazy2();
      findId = Object.assign(function findModuleId(filter) {
        var { cache: cache2, finish } = cacherFor(filter.key);
        for (var [id, moduleExports] of modulesForFinder(filter.key)) {
          var { exports, isDefaultExport } = filterExports(moduleExports, id, filter);
          if (typeof exports !== "undefined") {
            cache2(id, exports);
            finish(false);
            return [
              id,
              isDefaultExport
            ];
          }
        }
        finish(true);
        return [];
      }, {
        /**
             * Yields all modules where filter returns a truthy value.
             * @param filter The filter to match
             * @returns A generator that yields an array containing the module ID and whether the export is the default export
             */
        all: function* findModuleIdAll(filter) {
          var { cache: cache2, finish } = cacherFor(filter.key);
          var found = false;
          for (var [id, moduleExports] of modulesForFinder(filter.key, true)) {
            var { exports, isDefaultExport } = filterExports(moduleExports, id, filter);
            if (typeof exports !== "undefined") {
              cache2(id, exports);
              found = true;
              yield [
                id,
                isDefaultExport
              ];
            }
          }
          finish(found, true);
        }
      });
      find = Object.assign(function findModule(filter) {
        return createLazyModule(filter);
      }, {
        /**
             * Returns all exports where filter returns a truthy value.
             * @param filter The filter to match
             * @returns An array of exports
             */
        all: function* findModuleAll(filter) {
          for (var [id, isDefaultExport] of findId.all(filter)) {
            if (typeof id === "number") yield isDefaultExport ? requireModule(id).default : requireModule(id);
          }
        },
        eager: function findModuleEager(filter) {
          var [id, defaultExport] = findId(filter);
          if (typeof id === "number") return defaultExport ? requireModule(id).default : requireModule(id);
        }
      });
      findByProps = Object.assign(function findByPropsLazy(prop, ...props) {
        return find(byProps(prop, ...props));
      }, {
        async: function findByPropsAsync(prop, ...propsAndOrTimeout) {
          var cloned = [
            ...propsAndOrTimeout
          ];
          var timeout = typeof cloned[cloned.length - 1] === "number" ? cloned.pop() : 1e3;
          return new Promise((resolve) => {
            var id = setTimeout(() => resolve(void 0), timeout);
            findByProps(prop, ...cloned)[lazyContextSymbol].getExports((exp) => {
              clearTimeout(id);
              resolve(exp);
            });
          });
        },
        eager: function findByPropsEager(prop, ...props) {
          return find.eager(byProps(prop, ...props));
        },
        /**
             * Yield all exports with specified properties
             *
             * - Filter: `m[prop] && props.every(p => m[p])`
             * - Returns: `m`
             *
             * @param prop The property to search for
             * @param props Additional properties to search for
             * @returns The module exports
             */
        all: function findByPropsAll(prop, ...props) {
          return find.all(byProps(prop, ...props));
        }
      });
      findByName = Object.assign(function findByNameLazy(name, returnDefaultExport = true) {
        return find(returnDefaultExport ? byName(name) : byName.raw(name));
      }, {
        async: function findByNameAsync(name, returnDefaultExport = true, timeout = 1e3) {
          return new Promise((resolve) => {
            var id = setTimeout(() => resolve(void 0), timeout);
            findByName(name, returnDefaultExport)[lazyContextSymbol].getExports((exp) => {
              clearTimeout(id);
              resolve(exp);
            });
          });
        },
        eager: function findByNameEager(name, returnDefaultExport = true) {
          return find.eager(returnDefaultExport ? byName(name) : byName.raw(name));
        },
        /**
             * Yields all exports with matching name
             *
             * - Filter: `m.name === name`
             * - Yields: `m`, or `{ default: m }` if `returnDefaultExport` is `false`
             *
             * @param name The name to search for
             * @param returnDefaultExport Whether to return the default export instead of the whole module
             * @returns The module exports
             */
        all: function findByNameAll(name, returnDefaultExport = true) {
          return find.all(returnDefaultExport ? byName(name) : byName.raw(name));
        }
      });
      findByDisplayName = Object.assign(function findByDisplayNameLazy(name, returnDefaultExport = true) {
        return find(returnDefaultExport ? byDisplayName(name) : byDisplayName.raw(name));
      }, {
        async: function findByDisplayNameAsync(name, returnDefaultExport = true, timeout = 1e3) {
          return new Promise((resolve) => {
            var id = setTimeout(() => resolve(void 0), timeout);
            findByDisplayName(name, returnDefaultExport)[lazyContextSymbol].getExports((exp) => {
              clearTimeout(id);
              resolve(exp);
            });
          });
        },
        eager: function findByDisplayNameEager(name, returnDefaultExport = true) {
          return find.eager(returnDefaultExport ? byDisplayName(name) : byDisplayName.raw(name));
        },
        /**
             * Yields all exports with matching display name
             *
             * - Filter: `m.displayName === name`
             * - Yields: `m`, or `{ default: m }` if `returnDefaultExport` is `false`
             *
             * @param name The display name to search for
             * @param returnDefaultExport Whether to return the default export instead of the whole module
             * @returns The module exports
             */
        all: function findByDisplayNameAll(name, returnDefaultExport = true) {
          return find.all(returnDefaultExport ? byDisplayName(name) : byDisplayName.raw(name));
        }
      });
      findByTypeName = Object.assign(function findByTypeNameLazy(name, returnDefaultExport = true) {
        return find(returnDefaultExport ? byTypeName(name) : byTypeName.raw(name));
      }, {
        async: function findByTypeNameAsync(name, returnDefaultExport = true, timeout = 1e3) {
          return new Promise((resolve) => {
            var id = setTimeout(() => resolve(void 0), timeout);
            findByTypeName(name, returnDefaultExport)[lazyContextSymbol].getExports((exp) => {
              clearTimeout(id);
              resolve(exp);
            });
          });
        },
        eager: function findByTypeNameEager(name, returnDefaultExport = true) {
          return find.eager(returnDefaultExport ? byTypeName(name) : byTypeName.raw(name));
        },
        /**
             * Yields all exports by its type name (`x.type.name`)
             *
             * - Filter: `m.type.name === name`
             * - Returns: `m`, or `{ default: m }` if `returnDefaultExport` is `false`
             *
             * @param name The type name to search for
             * @param returnDefaultExport Whether to return the default export instead of the whole module
             * @returns The module exports
             */
        all: function findByTypeNameAll(name, returnDefaultExport = true) {
          return find.all(returnDefaultExport ? byTypeName(name) : byTypeName.raw(name));
        }
      });
      findByStoreName = Object.assign(function findByStoreNameLazy(name) {
        return find(byStoreName(name));
      }, {
        async: function findByStoreNameAsync(name, timeout = 5e3) {
          return new Promise((resolve) => {
            var id = setTimeout(() => resolve(void 0), timeout);
            findByStoreName(name)[lazyContextSymbol].getExports((exp) => {
              clearTimeout(id);
              resolve(exp);
            });
          });
        },
        eager: function findByStoreNameEager(name) {
          return find.eager(byStoreName(name));
        }
      });
      findByFilePath = Object.assign(function findByFilePathLazy(path, returnDefaultExport = false) {
        return find(byFilePath(path, returnDefaultExport));
      }, {
        async: function findByFilePathAsync(path, returnDefaultExport = true, timeout = 1e3) {
          return new Promise((resolve) => {
            var id = setTimeout(() => resolve(void 0), timeout);
            findByFilePath(path, returnDefaultExport)[lazyContextSymbol].getExports((exp) => {
              clearTimeout(id);
              resolve(exp);
            });
          });
        },
        eager: function findByFilePathEager(path, returnDefaultExport = true) {
          return find.eager(byFilePath(path, returnDefaultExport));
        }
      });
      findProp = Object.assign(function findPropLazy(prop, ...filterProps) {
        return lazyValue(() => findByProps.eager(prop, ...filterProps)?.[prop]);
      }, {
        async: function findPropAsync(prop, ...filterPropsAndOrTimeout) {
          return findByProps.async(prop, ...filterPropsAndOrTimeout).then((exports) => exports?.[prop]);
        },
        eager: function findPropEager(prop, ...filterProps) {
          return findByProps.eager(prop, ...filterProps)?.[prop];
        }
      });
      findBySingleProp = Object.assign(function findBySinglePropLazy(name) {
        return find(bySingleProp(name));
      }, {
        async: function findBySinglePropAsync(name, timeout = 1e3) {
          return new Promise((resolve) => {
            var id = setTimeout(() => resolve(void 0), timeout);
            findBySingleProp(name)[lazyContextSymbol].getExports((exp) => {
              clearTimeout(id);
              resolve(exp);
            });
          });
        },
        eager: function findBySinglePropEager(name) {
          return find.eager(bySingleProp(name));
        }
      });
      findSingleProp = Object.assign(function findSinglePropLazy(name) {
        return lazyValue(() => findBySingleProp.eager(name)?.[name]);
      }, {
        async: function findSinglePropAsync(name, timeout = 1e3) {
          return findBySingleProp.async(name, timeout).then((exports) => exports?.[name]);
        },
        eager: function findSinglePropEager(name) {
          return findBySingleProp.eager(name)?.[name];
        }
      });
      findByQuery = Object.assign(function findByQueryLazy() {
        throw new Error("Lazy finding for byQuery(...) is not supported, use findByQuery.eager(...) instead");
      }, {
        eager: function findByQueryEager(query, caseSensitive = false) {
          return find(byQuery(query, caseSensitive));
        },
        /**
             * Yields all exports that match a query string **(very expensive, only use for debugging)**
             * @param query The query string to search for
             * @param caseSensitive Whether the search should be case-sensitive
             * @returns All module exports
             */
        all: function findByQueryAll(query, caseSensitive = false) {
          return find.all(byQuery(query, caseSensitive));
        }
      });
    }
  });

  // libraries/modules/src/metro/caches.ts
  function restoreCache() {
    return _restoreCache.apply(this, arguments);
  }
  function _restoreCache() {
    _restoreCache = _async_to_generator(function* () {
      logger.log("Attempting to restore cache...");
      resolveModuleDependencies(getMetroModules(), IndexMetroModuleId);
      var path = `${FileModule.getConstants().CacheDirPath}/${MetroCacheRelativeFilePath}`;
      if (!(yield FileModule.fileExists(path))) return false;
      var savedCache = yield FileModule.readFile(path, "utf8");
      var storedCache = JSON.parse(savedCache);
      logger.log(`Cache found, validating... (compare: ${storedCache.v} === ${MetroCacheVersion}, ${storedCache.b} === ${ClientInfoModule.Build}, ${storedCache.t} === ${dependencies.size})`);
      if (storedCache.v !== MetroCacheVersion || storedCache.b !== ClientInfoModule.Build || storedCache.t !== dependencies.size) return false;
      logger.log(`Restoring cache of ${dependencies.size} modules`);
      cache.totalModules = storedCache.t;
      cache.exportsFlags = storedCache.e;
      cache.lookupFlags = storedCache.l;
      cache.assetModules = storedCache.a;
      cache.assets[assetCacheIndexSymbol] = {};
      cache.assetModules[assetCacheIndexSymbol] = {};
      return true;
    });
    return _restoreCache.apply(this, arguments);
  }
  function requireAssetModules() {
    var [assetsRegistryModuleId] = findId(byProps("registerAsset"));
    if (!assetsRegistryModuleId) return void logger.warn("Unable to create asset cache, cannot find assets-registry module ID, some assets may not load");
    var assetsRegistryExporterModuleId = 0;
    for (var id of dependencies) {
      var module = modules[id];
      if (!module?.dependencyMap) continue;
      if (module.dependencyMap.length === 1 && module.dependencyMap[0] === assetsRegistryModuleId) {
        assetsRegistryExporterModuleId = id;
        break;
      }
    }
    if (!assetsRegistryExporterModuleId) return void logger.warn("Unable to create asset cache, cannot find assets-registry exporter module ID, some assets may not load");
    logger.log("Importing all assets modules...");
    for (var id1 of dependencies) {
      var module1 = modules[id1];
      if (!module1?.dependencyMap) continue;
      if (module1.dependencyMap.length === 1 && module1.dependencyMap[0] === assetsRegistryExporterModuleId) requireModule(id1);
    }
  }
  function saveCache() {
    if (saveCacheDebounceTimeoutId) clearTimeout(saveCacheDebounceTimeoutId);
    saveCacheDebounceTimeoutId = setTimeout(() => {
      FileModule.writeFile("cache", MetroCacheRelativeFilePath, JSON.stringify({
        v: MetroCacheVersion,
        b: ClientInfoModule.Build,
        t: cache.totalModules,
        e: cache.exportsFlags,
        l: cache.lookupFlags,
        a: cache.assetModules,
        p: cache.patchableModules
      }), "utf8");
      logger.log(`Cache saved (${cache.totalModules} modules)`);
    }, 1e3);
  }
  function invalidateCache() {
    FileModule.removeFile("cache", MetroCacheRelativeFilePath);
    logger.warn("Cache invalidated");
  }
  function cacherFor(key) {
    var registry = cache.lookupFlags[key] ??= {};
    var invalidated = false;
    return {
      cache: (id, exports) => {
        registry[id] ??= (invalidated = true, 0);
        if (isModuleExportsBad(exports)) {
          blacklistModule(id);
          invalidated = true;
          if (id in registry) delete registry[id];
        }
      },
      finish: (notFound, fullLookup = false) => {
        registry.flags ??= 0;
        if (notFound) registry.flags |= MetroModuleLookupFlags.NotFound;
        if (fullLookup) registry.flags |= MetroModuleLookupFlags.FullLookup;
        if (invalidated) saveCache();
      }
    };
  }
  function cacheModuleAsBlacklisted(id) {
    cache.exportsFlags[id] |= MetroModuleFlags.Blacklisted;
  }
  function cacheAsset(name, index, moduleId, type) {
    cache.assets[name] ??= {};
    cache.assetModules[name] ??= {
      [FirstAssetTypeRegisteredKey]: type
    };
    cache.assets[name][type] = index;
    cache.assetModules[name][type] ??= moduleId;
    cache.assets[assetCacheIndexSymbol][index] = name;
    cache.assetModules[assetCacheIndexSymbol][index] = cache.assetModules[name][type];
    cache.exportsFlags[moduleId] |= MetroModuleFlags.Asset;
    saveCache();
  }
  function* indexedModuleIdsForLookup(key) {
    var modulesMap = cache.lookupFlags[key];
    if (!modulesMap) return void 0;
    for (var k in modulesMap) {
      if (k !== "flags") yield Number(k);
    }
  }
  var cache, saveCacheDebounceTimeoutId;
  var init_caches = __esm({
    "libraries/modules/src/metro/caches.ts"() {
      "use strict";
      init_async_to_generator();
      init_constants();
      init_filters2();
      init_finders();
      init_native();
      init_shared();
      init_metro();
      cache = {
        /**
         * Flags for each module's exports
         * @see {@link MetroModuleFlags}
         */
        exportsFlags: {},
        /**
         * Lookup registry for each filters, the key being the filter key, and the value being the registry
         * @see {@link MetroLookupCacheRegistry}
         * @see {@link MetroModuleLookupFlags}
         */
        lookupFlags: {},
        /**
         * Registry for assets, the key being the name, and the value being objects with the asset type as key and the index as value
         * #### This is in-memory.
         */
        assets: {
          [assetCacheIndexSymbol]: {}
        },
        /**
         * Registry for assets modules, the key being the name,
         * and the value being objects with the asset type as key and the module ID of the module that registers the asset as value
         */
        assetModules: {
          [assetCacheIndexSymbol]: {}
        },
        /**
         * Registry for patchable modules, the key being the patch, and the value being the module ID of the module to patch
         *
         * - `f`: File path tracking
         * - `r`: Fix native component registry duplicate register
         * - `b`: Blacklist freezing module
         * - `d`: Block Discord analytics
         * - `s`: Block Sentry initialization
         * - `m`: Fix Moment locale
         */
        patchableModules: {},
        /**
         * The total modules count
         */
        totalModules: 0
      };
    }
  });

  // libraries/modules/src/metro/patches.ts
  function initializeModulePatches(patcher6, logger5, metroModules) {
    subscribePatchableModule("f", (exports) => exports.fileFinishedImporting, (exports) => {
      patcher6.before(exports, "fileFinishedImporting", ([filePath]) => {
        var importingModuleId2 = getImportingModuleId();
        if (importingModuleId2 === -1 || !filePath) return;
        metroModules[importingModuleId2][MetroModuleFilePathKey] = filePath;
      }, "trackFilePath");
    });
    subscribePatchableModule("r", (exports) => [
      "customBubblingEventTypes",
      "customDirectEventTypes",
      "register",
      "get"
    ].every((x2) => exports[x2]), (exports) => {
      patcher6.instead(exports, "register", (args, origFunc) => {
        try {
          return origFunc(...args);
        } catch (e) {
        }
      }, "fixNativeComponentRegistryDuplicateRegister");
    });
    subscribePatchableModule("b", (exports, id) => {
      return exports.default?.reactProfilingEnabled && !metroModules[id + 1]?.publicModule.exports.default;
    }, (_3, id) => {
      if (!isModuleBlacklisted(id + 1)) {
        blacklistModule(id + 1);
        logger5.log(`Blacklisted module ${id + 1} as it causes freeze when initialized`);
      }
    });
    subscribePatchableModule("s", (m2) => m2.initSentry, (m2) => m2.initSentry = noop);
    subscribePatchableModule("d", (m2) => m2.default?.track && m2.default.trackMaker, (m2) => m2.default.track = () => noopPromise);
    subscribePatchableModule("m", (m2) => m2.isMoment, (moment) => patcher6.instead(moment, "defineLocale", (args, orig) => {
      var origLocale = moment.locale();
      orig(...args);
      moment.locale(origLocale);
    }));
  }
  function subscribePatchableModule(patchId, filter, patch) {
    var cachedId = cache.patchableModules[patchId];
    var unsub = cachedId ? subscribeModule(cachedId, (exports) => {
      patch(exports, cachedId);
    }) : subscribeModule.all((id, exports) => {
      if (!filter(exports, id)) return;
      unsub();
      cache.patchableModules[patchId] = id;
      patch(exports, id);
      subscribePatchableModule(patchId, filter, patch);
    });
  }
  var init_patches = __esm({
    "libraries/modules/src/metro/patches.ts"() {
      "use strict";
      init_constants();
      init_metro();
      init_functions();
    }
  });

  // libraries/modules/src/metro/index.ts
  var metro_exports = {};
  __export(metro_exports, {
    blacklistModule: () => blacklistModule,
    cache: () => cache,
    cacheAsset: () => cacheAsset,
    cacheModuleAsBlacklisted: () => cacheModuleAsBlacklisted,
    cacherFor: () => cacherFor,
    dependencies: () => dependencies,
    getImportingModuleId: () => getImportingModuleId,
    getMetroModules: () => getMetroModules,
    indexedModuleIdsForLookup: () => indexedModuleIdsForLookup,
    initializeModules: () => initializeModules,
    invalidateCache: () => invalidateCache,
    isModuleAssetRegistrar: () => isModuleAssetRegistrar,
    isModuleBlacklisted: () => isModuleBlacklisted,
    isModuleExportsBad: () => isModuleExportsBad,
    modulesForFinder: () => modulesForFinder,
    requireModule: () => requireModule,
    resolveModuleDependencies: () => resolveModuleDependencies,
    subscribeModule: () => subscribeModule
  });
  function getMetroModules() {
    return globalThis.modules;
  }
  function getImportingModuleId() {
    return importingModuleId;
  }
  function resolveModuleDependencies(modules3, id) {
    var metroModule = modules3[id];
    if (!metroModule) return void metroDependencies.delete(id);
    if (!metroModule.dependencyMap || resolvedModules.has(id)) return;
    resolvedModules.add(id);
    for (var depId of metroModule.dependencyMap) {
      metroDependencies.add(depId);
      resolveModuleDependencies(modules3, depId);
    }
  }
  function hookModule(id, metroModule) {
    if (metroModule.isInitialized) {
      logger.warn(`Hooking already initialized module: ${id}`);
      if (isModuleExportsBad(metroModule.publicModule.exports)) {
        blacklistModule(id);
        return false;
      }
      var subs = subscriptions[id];
      if (subs) for (var sub of subs) sub(id, metroModule.publicModule.exports);
      for (var sub1 of subscriptions.all) sub1(id, metroModule.publicModule.exports);
      return false;
    }
    var unpatch2 = patcher.instead(metroModule, "factory", (args, origFunc) => {
      unpatch2();
      var originalImportingId = importingModuleId;
      var { 4: moduleObject } = args;
      try {
        importingModuleId = id;
        origFunc(...args);
      } catch (error) {
        logger.log(`Blacklisted module ${id} because it could not be initialized: ${error}`);
        blacklistModule(id);
      }
      importingModuleId = originalImportingId;
      if (isModuleExportsBad(moduleObject.exports)) blacklistModule(id);
      else {
        var subs2 = subscriptions[id];
        if (subs2) for (var sub2 of subs2) sub2(id, moduleObject.exports);
        for (var sub12 of subscriptions.all) sub12(id, moduleObject.exports);
      }
    }, "moduleFactory");
    return true;
  }
  function initializeModules() {
    return _initializeModules.apply(this, arguments);
  }
  function _initializeModules() {
    _initializeModules = _async_to_generator(function* () {
      var metroModules = getMetroModules();
      if (metroModules[IndexMetroModuleId]?.isInitialized) throw new Error("Metro modules has already been initialized");
      var cacheRestored = yield restoreCache();
      recordTimestamp("Modules_TriedRestoreCache");
      initializeModulePatches(patcher, logger, metroModules);
      var moduleIds = metroDependencies.values();
      var hookCountLeft = Math.min(metroDependencies.size, SafeModuleHookAmountBeforeDefer);
      while (hookCountLeft > -1) {
        var id = moduleIds.next().value;
        if (moduleShouldNotBeHooked(id)) continue;
        hookModule(id, metroModules[id]);
        --hookCountLeft;
      }
      logger.log("Importing index module...");
      __r(IndexMetroModuleId);
      recordTimestamp("Modules_IndexRequired");
      var id1 = moduleIds.next().value;
      if (!id1) return;
      do {
        if (moduleShouldNotBeHooked(id1)) continue;
        hookModule(id1, metroModules[id1]);
      } while (id1 = moduleIds.next().value);
      recordTimestamp("Modules_HookedFactories");
      if (!cacheRestored) {
        requireAssetModules();
        recordTimestamp("Modules_RequiredAssets");
      }
      cache.totalModules = metroDependencies.size;
      saveCache();
    });
    return _initializeModules.apply(this, arguments);
  }
  function blacklistModule(id) {
    cacheModuleAsBlacklisted(id);
    saveCache();
  }
  function requireModule(id) {
    var metroModules = getMetroModules();
    if (isModuleBlacklisted(id)) return;
    var metroModule = metroModules[id];
    if (metroModule?.isInitialized && !metroModule.hasError) return __r(id);
    var ogHandler = ErrorUtils.getGlobalHandler();
    ErrorUtils.setGlobalHandler((err2, isFatal) => {
      logger.error(`Blacklisting module ${id} because it could not be imported (fatal = ${isFatal}): ${err2} `);
      blacklistModule(id);
    });
    var originalImportingId = id;
    var moduleExports;
    try {
      importingModuleId = id;
      moduleExports = __r(id);
    } catch (error) {
      logger.error(`Blacklisting module ${id} because it could not be imported: ${error}`);
      blacklistModule(id);
    } finally {
      importingModuleId = originalImportingId;
      ErrorUtils.setGlobalHandler(ogHandler);
    }
    return moduleExports;
  }
  function isModuleBlacklisted(id) {
    if (!(id in cache.exportsFlags)) return 0;
    return cache.exportsFlags[id] & MetroModuleFlags.Blacklisted;
  }
  function isModuleAssetRegistrar(id) {
    if (!(id in cache.exportsFlags)) return 0;
    return cache.exportsFlags[id] & MetroModuleFlags.Asset;
  }
  function moduleShouldNotBeHooked(id) {
    return isModuleBlacklisted(id) || isModuleAssetRegistrar(id);
  }
  function* modulesForFinder(key, fullLookup = false) {
    var lookupCache = cache.lookupFlags[key];
    if (lookupCache?.flags && // Check if any modules were found
    !(lookupCache.flags & MetroModuleLookupFlags.NotFound) && // Pass immediately if it's not a full lookup, otherwise check if it's a full lookup
    (!fullLookup || lookupCache.flags & MetroModuleLookupFlags.FullLookup)) for (var id in indexedModuleIdsForLookup(key)) {
      if (isModuleBlacklisted(id)) continue;
      yield [
        id,
        requireModule(Number(id))
      ];
    }
    else {
      for (var id1 of metroDependencies) {
        var mid = Number(id1);
        if (isModuleBlacklisted(mid)) continue;
        var exports = requireModule(mid);
        if (!exports) continue;
        yield [
          mid,
          exports
        ];
      }
    }
  }
  function isModuleExportsBad(exports) {
    return typeof exports === "undefined" || exports === null || exports === globalThis || exports[""] === null || exports.__proto__ === Object.prototype && Reflect.ownKeys(exports).length === 0;
  }
  var importingModuleId, subscriptions, metroDependencies, dependencies, resolvedModules, subscribeModule;
  var init_metro = __esm({
    "libraries/modules/src/metro/index.ts"() {
      "use strict";
      init_async_to_generator();
      init_src();
      init_constants();
      init_shared();
      init_caches();
      init_patches();
      init_caches();
      importingModuleId = -1;
      subscriptions = {
        all: /* @__PURE__ */ new Set()
      };
      metroDependencies = /* @__PURE__ */ new Set();
      dependencies = metroDependencies;
      resolvedModules = /* @__PURE__ */ new Set();
      subscribeModule = Object.assign(function subscribeModule2(id, callback) {
        if (!(id in subscriptions)) subscriptions[id] = /* @__PURE__ */ new Set();
        var set = subscriptions[id];
        set.add(callback);
        return () => set.delete(callback);
      }, {
        /**
             * Subscribes to a module once, calling the callback when the module is required
             * @param id The module ID
             * @param callback The callback to call when the module is required
             * @returns A function to unsubscribe
             */
        once: function subscribeModuleOnce(id, callback) {
          var unsub = subscribeModule(id, (...args) => {
            unsub();
            callback(...args);
          });
          return unsub;
        }
      }, {
        /**
             * Subscribes to all modules, calling the callback when any modules are required
             * @param callback The callback to call when any modules are required
             * @returns A function to unsubscribe
             */
        all: function subscribeModuleAll(callback) {
          subscriptions.all.add(callback);
          return () => subscriptions.all.delete(callback);
        }
      });
    }
  });

  // libraries/modules/src/utils/filters.ts
  function createFilter(predicate, keyFor) {
    var createHolder = (func, args, raw) => {
      return Object.assign(func, {
        filter: predicate,
        raw,
        key: `${raw ? "raw:" : ""}${keyFor(args)}`
      });
    };
    var curry = (raw) => (...args) => {
      return createHolder((m2, id, raw2) => predicate(args, m2, id, raw2), args, raw);
    };
    return Object.assign(curry(false), {
      raw: curry(true),
      keyFor
    });
  }
  function createSimpleFilter(predicate, key) {
    return createFilter((_3, m2) => predicate(m2), () => `dyn:${key}`)();
  }
  var init_filters = __esm({
    "libraries/modules/src/utils/filters.ts"() {
      "use strict";
    }
  });

  // libraries/modules/src/filters.ts
  var filters_exports = {};
  __export(filters_exports, {
    byDisplayName: () => byDisplayName,
    byFilePath: () => byFilePath,
    byMutableProp: () => byMutableProp,
    byName: () => byName,
    byProps: () => byProps,
    byQuery: () => byQuery,
    bySingleProp: () => bySingleProp,
    byStoreName: () => byStoreName,
    byTypeName: () => byTypeName,
    createFilter: () => createFilter,
    createSimpleFilter: () => createSimpleFilter
  });
  var byProps, byMutableProp, byName, byDisplayName, byTypeName, byStoreName, modules2, byFilePath, bySingleProp, byQuery;
  var init_filters2 = __esm({
    "libraries/modules/src/filters.ts"() {
      "use strict";
      init_constants();
      init_metro();
      init_filters();
      init_filters();
      byProps = createFilter((props, m2) => props.length === 0 ? m2[props[0]] : props.every((p) => m2[p]), (props) => `revenge.props(${props.join(",")})`);
      byMutableProp = createFilter(([prop], m2) => m2?.[prop] && !Object.getOwnPropertyDescriptor(m2, prop)?.get, (prop) => `revenge.mutableProp(${prop})`);
      byName = createFilter(([name], m2) => m2.name === name, (name) => `revenge.name(${name})`);
      byDisplayName = createFilter(([displayName], m2) => m2.displayName === displayName, (name) => `revenge.displayName(${name})`);
      byTypeName = createFilter(([typeName], m2) => m2.type?.name === typeName, (name) => `revenge.typeName(${name})`);
      byStoreName = createFilter(([name], m2) => m2.getName?.length === 0 && m2.getName() === name, (name) => `revenge.storeName(${name})`);
      modules2 = getMetroModules();
      byFilePath = createFilter(([path, returnDefaultExport], _3, id, isDefaultExport) => {
        return returnDefaultExport === isDefaultExport && modules2[id]?.[MetroModuleFilePathKey] === path;
      }, ([path, returnDefaultExport]) => `revenge.filePath(${path},${returnDefaultExport})`);
      bySingleProp = createFilter(([prop], m2) => m2[prop] && Object.keys(m2).length === 1, (prop) => `revenge.singleProp(${prop})`);
      byQuery = createFilter(([query, caseSensitive], m2) => {
        var applyStringTransformation = (str2) => caseSensitive ? str2 : str2.toLowerCase();
        var transformedQuery = applyStringTransformation(query);
        try {
          return m2.name?.toLowerCase()?.includes(transformedQuery) || m2.displayName?.toLowerCase()?.includes(transformedQuery) || m2.type?.name?.toLowerCase()?.includes(transformedQuery) || m2.getName?.length === 0 && m2.getName?.()?.toLowerCase()?.includes(transformedQuery) || modules2[m2.id]?.[MetroModuleFilePathKey]?.toLowerCase()?.includes(transformedQuery) || Object.keys(m2).some((k) => k.toLowerCase().includes(transformedQuery)) || Object.values(m2).some((v2) => String(v2).toLowerCase().includes(transformedQuery));
        } catch (e) {
          return false;
        }
      }, ([query, caseSensitive]) => `revenge.query(${caseSensitive ? query : query.toLowerCase()})`);
    }
  });

  // libraries/modules/src/common/components/icons.ts
  var icons_exports = {};
  __export(icons_exports, {
    CheckmarkLargeIcon: () => CheckmarkLargeIcon,
    CopyIcon: () => CopyIcon,
    DownloadIcon: () => DownloadIcon,
    FolderIcon: () => FolderIcon
  });
  function wrapIcon(Comp) {
    return function IconElement(props) {
      return Comp(props ?? {});
    };
  }
  var CheckmarkLargeIcon, CopyIcon, DownloadIcon, FolderIcon;
  var init_icons = __esm({
    "libraries/modules/src/common/components/icons.ts"() {
      "use strict";
      init_finders();
      CheckmarkLargeIcon = wrapIcon(findProp("CheckmarkLargeIcon"));
      CopyIcon = wrapIcon(findProp("CopyIcon"));
      DownloadIcon = wrapIcon(findProp("DownloadIcon"));
      FolderIcon = wrapIcon(findProp("FolderIcon"));
    }
  });

  // libraries/modules/src/common/components/index.ts
  var components_exports = {};
  __export(components_exports, {
    AlertActionButton: () => AlertActionButton,
    AlertModal: () => AlertModal,
    Button: () => Button,
    Card: () => Card,
    ContextMenu: () => ContextMenu,
    FlashList: () => FlashList,
    FloatingActionButton: () => FloatingActionButton,
    FormCheckbox: () => FormCheckbox,
    FormRadio: () => FormRadio,
    FormSwitch: () => FormSwitch,
    GhostInput: () => GhostInput,
    IconButton: () => IconButton,
    Icons: () => icons_exports,
    ImageButton: () => ImageButton,
    IntlLink: () => IntlLink,
    MasonryFlashList: () => MasonryFlashList,
    PressableScale: () => PressableScale,
    RowButton: () => RowButton,
    SafeAreaProvider: () => SafeAreaProvider,
    SafeAreaView: () => SafeAreaView,
    Slider: () => Slider,
    Stack: () => Stack,
    TableCheckboxRow: () => TableCheckboxRow,
    TableRadioGroup: () => TableRadioGroup,
    TableRadioRow: () => TableRadioRow,
    TableRow: () => TableRow,
    TableRowGroup: () => TableRowGroup,
    TableRowGroupTitle: () => TableRowGroupTitle,
    TableRowIcon: () => TableRowIcon,
    TableRowTrailingText: () => TableRowTrailingText,
    TableSwitchRow: () => TableSwitchRow,
    Text: () => Text,
    TextArea: () => TextArea,
    TextField: () => TextField,
    TextInput: () => TextInput,
    TwinButtons: () => TwinButtons
  });
  var SafeAreaProvider, SafeAreaView, TwinButtons, Button, IconButton, ImageButton, FloatingActionButton, RowButton, ContextMenu, TableRow, TableSwitchRow, TableRowGroup, TableRowGroupTitle, TableRowIcon, TableRadioGroup, TableCheckboxRow, TableRadioRow, AlertModal, AlertActionButton, TextInput, TextField, TextArea, GhostInput, Card, Stack, Slider, Text, IntlLink, PressableScale, TableRowTrailingText, FormSwitch, FormRadio, FormCheckbox, FlashList, MasonryFlashList;
  var init_components = __esm({
    "libraries/modules/src/common/components/index.ts"() {
      "use strict";
      init_lazy();
      init_finders();
      init_icons();
      ({ SafeAreaProvider, SafeAreaView } = lazyDestructure(() => findByProps.eager("useSafeAreaInsets")));
      TwinButtons = findProp("TwinButtons");
      ({
        Button: (
          // Buttons
          Button
        ),
        IconButton,
        ImageButton,
        FloatingActionButton,
        RowButton,
        ContextMenu: (
          // Context Menus
          ContextMenu
        ),
        TableRow: (
          // Tables
          TableRow
        ),
        TableSwitchRow,
        TableRowGroup,
        TableRowGroupTitle,
        TableRowIcon,
        TableRadioGroup,
        TableCheckboxRow,
        TableRadioRow,
        AlertModal: (
          // Alerts
          AlertModal
        ),
        AlertActionButton,
        TextInput: (
          // Inputs
          TextInput
        ),
        TextField,
        TextArea,
        GhostInput,
        Card: (
          // Containers
          Card
        ),
        Stack,
        Slider: (
          // Other
          Slider
        ),
        Text: (
          // Text
          Text
        )
      } = lazyDestructure(() => findByProps.eager("TextField", "ContextMenu")));
      IntlLink = findProp("IntlLink");
      PressableScale = findProp("PressableScale");
      TableRowTrailingText = findProp("TableRowTrailingText");
      FormSwitch = findSingleProp("FormSwitch");
      FormRadio = findSingleProp("FormRadio");
      FormCheckbox = findSingleProp("FormCheckbox");
      ({ FlashList, MasonryFlashList } = lazyDestructure(() => findByProps.eager("FlashList")));
    }
  });

  // libraries/modules/src/common/stores.ts
  var stores_exports = {};
  __export(stores_exports, {
    ThemeStore: () => ThemeStore
  });
  var ThemeStore;
  var init_stores = __esm({
    "libraries/modules/src/common/stores.ts"() {
      "use strict";
      init_finders();
      ThemeStore = findByStoreName("ThemeStore");
    }
  });

  // shims/events.ts
  var EventEmitter;
  var init_events = __esm({
    "shims/events.ts"() {
      "use strict";
      init_finders();
      EventEmitter = findProp("EventEmitter");
    }
  });

  // shims/deps.ts
  var deps_exports = {};
  __export(deps_exports, {
    default: () => deps_default
  });
  var deps_default;
  var init_deps = __esm({
    "shims/deps.ts"() {
      "use strict";
      init_finders();
      deps_default = {
        react: globalThis.React = findByProps("createElement"),
        "react-native": globalThis.ReactNative = findByProps("AppRegistry"),
        util: findByProps("inspect", "isNullOrUndefined"),
        moment: findByProps("isMoment"),
        "chroma-js": findByProps("brewer"),
        lodash: findByProps("forEachRight"),
        "@shopify/react-native-skia": findByProps("useFont")
      };
    }
  });

  // libraries/modules/src/common/index.ts
  var common_exports = {};
  __export(common_exports, {
    EventEmitter: () => EventEmitter,
    Flux: () => Flux,
    FluxDispatcher: () => FluxDispatcher,
    Logger: () => Logger,
    NavigationNative: () => NavigationNative,
    NavigationStack: () => NavigationStack,
    React: () => React2,
    ReactJSXRuntime: () => ReactJSXRuntime,
    ReactNative: () => ReactNative2,
    TextStyleSheet: () => TextStyleSheet,
    _: () => _,
    alerts: () => alerts,
    assetsRegistry: () => assetsRegistry,
    channels: () => channels,
    clipboard: () => clipboard,
    commands: () => commands,
    components: () => components_exports,
    constants: () => constants,
    createStyles: () => createStyles,
    dismissAlerts: () => dismissAlerts,
    filePicker: () => filePicker,
    intl: () => intl,
    intlModule: () => intlModule,
    invites: () => invites,
    legacy_alerts: () => legacy_alerts,
    links: () => links,
    messages: () => messages,
    nobleHashesUtils: () => nobleHashesUtils,
    openAlert: () => openAlert,
    semver: () => semver,
    stores: () => stores_exports,
    toasts: () => toasts,
    tokens: () => tokens,
    xxhash64: () => xxhash64
  });
  var constants, tokens, intl, intlModule, Logger, legacy_alerts, alerts, channels, links, clipboard, invites, commands, toasts, filePicker, messages, NavigationStack, NavigationNative, TextStyleSheet, createStyles, dismissAlerts, openAlert, Flux, FluxDispatcher, assetsRegistry, React2, ReactNative2, ReactJSXRuntime, semver, xxhash64, nobleHashesUtils, _;
  var init_common = __esm({
    "libraries/modules/src/common/index.ts"() {
      "use strict";
      init_lazy();
      init_finders();
      init_components();
      init_stores();
      init_events();
      init_deps();
      constants = findByProps("Fonts");
      tokens = findByProps("internal", "colors");
      intl = findByProps("intl");
      intlModule = findByProps("runtimeHashMessageKey");
      Logger = findByName("Logger");
      legacy_alerts = findByProps("openLazy", "close");
      alerts = findByProps("openAlert", "dismissAlert");
      channels = findByProps("getVoiceChannelId");
      links = findByProps("openURL", "openDeeplink");
      clipboard = findByProps("getImagePNG");
      invites = findByProps("createInvite");
      commands = findByProps("getBuiltInCommands");
      toasts = findByFilePath("modules/toast/native/ToastActionCreators.tsx", true);
      filePicker = findByProps("handleDocumentSelection");
      messages = findByProps("sendBotMessage");
      NavigationStack = findByProps("createStackNavigator");
      NavigationNative = findByProps("NavigationContainer");
      ({ TextStyleSheet, createStyles, dismissAlerts, openAlert } = lazyDestructure(() => findByProps.eager("createStyles", "TextStyleSheet")));
      Flux = findByProps("connectStores");
      FluxDispatcher = findByProps("_interceptors");
      assetsRegistry = findByProps("registerAsset");
      ({ React: React2, ReactNative: ReactNative2 } = lazyDestructure(() => globalThis));
      ReactJSXRuntime = findByProps("jsx", "jsxs");
      semver = findByProps("SEMVER_SPEC_VERSION");
      xxhash64 = findByProps("XXH64");
      nobleHashesUtils = findByProps("randomBytes");
      _ = findByProps("cloneDeep");
    }
  });

  // libraries/modules/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    constants: () => constants_exports,
    createModulesLibrary: () => createModulesLibrary
  });
  function createModulesLibrary() {
    return _createModulesLibrary.apply(this, arguments);
  }
  function _createModulesLibrary() {
    _createModulesLibrary = _async_to_generator(function* () {
      yield initializeModules();
      var common = yield Promise.resolve().then(() => (init_common(), common_exports));
      var native = yield Promise.resolve().then(() => (init_native(), native_exports));
      return {
        constants: constants_exports,
        common,
        filters: filters_exports,
        native,
        metro: metro_exports,
        ...finders_exports
      };
    });
    return _createModulesLibrary.apply(this, arguments);
  }
  var init_src3 = __esm({
    "libraries/modules/src/index.ts"() {
      "use strict";
      init_async_to_generator();
      init_constants();
      init_filters2();
      init_finders();
      init_metro();
    }
  });

  // libraries/ui/src/settings.ts
  var settings_exports = {};
  __export(settings_exports, {
    SettingsUILibrary: () => SettingsUILibrary,
    customData: () => customData
  });
  function createSettingsSection(section) {
    if (section.name in customData.sections) throw new Error(`The settings section with the name "${section.name}" already exists`);
    customData.sections[section.name] = section;
    return () => delete customData.sections[section.name];
  }
  function createSettingsRoute(key, route) {
    customData.rows[key] = route;
    return () => delete customData.rows[key];
  }
  function addSettingsRowsToSection(name, rows) {
    if (!(name in customData.sections)) throw new Error(`No setting section exists with the name "${name}"`);
    var section = customData.sections[name];
    Object.assign(section.settings, rows);
    return () => {
      for (var key in rows) delete section.settings[key];
    };
  }
  var customData, SettingsUILibrary;
  var init_settings = __esm({
    "libraries/ui/src/settings.ts"() {
      "use strict";
      customData = {
        sections: {},
        rows: {}
      };
      SettingsUILibrary = {
        addRowsToSection: addSettingsRowsToSection,
        createSection: createSettingsSection,
        createRoute: createSettingsRoute
      };
    }
  });

  // shims/react~jsx-runtime.ts
  function unproxyFirstArg(args) {
    if (!args[0]) {
      throw new Error("The passed component is falsy. Ensure that you are passing a valid component.");
    }
    var factory = getProxyFactory(args[0]);
    if (factory) args[0] = factory();
    return args;
  }
  var jsxRuntime, Fragment, jsx, jsxs;
  var init_react_jsx_runtime = __esm({
    "shims/react~jsx-runtime.ts"() {
      "use strict";
      init_src3();
      init_finders();
      init_lazy();
      jsxRuntime = findByProps("jsx", "jsxs", "Fragment");
      Fragment = Symbol.for("react.fragment");
      jsx = (...args) => jsxRuntime.jsx(...unproxyFirstArg(args));
      jsxs = (...args) => jsxRuntime.jsxs(...unproxyFirstArg(args));
    }
  });

  // libraries/react/src/shared.ts
  var patcher2;
  var init_shared2 = __esm({
    "libraries/react/src/shared.ts"() {
      "use strict";
      init_src2();
      patcher2 = createPatcherInstance("revenge.react");
    }
  });

  // globals:react-native
  var require_react_native = __commonJS({
    "globals:react-native"(exports, module) {
      module.exports = (init_deps(), __toCommonJS(deps_exports)).default["react-native"];
    }
  });

  // libraries/react/src/jsx.ts
  var jsx_exports = {};
  __export(jsx_exports, {
    ReactJSXLibrary: () => ReactJSXLibrary,
    afterJSXElementCreate: () => afterJSXElementCreate,
    beforeJSXElementCreate: () => beforeJSXElementCreate,
    isNativeJSXElement: () => isNativeJSXElement
  });
  function afterJSXElementCreate(elementName, callback) {
    patchJsxRuntimeIfNotPatched();
    var set = afterCallbacks[elementName] ??= /* @__PURE__ */ new Set();
    set.add(callback);
    return () => {
      set.delete(callback);
      unpatchIfNoListenersLeft();
    };
  }
  function beforeJSXElementCreate(elementName, callback) {
    patchJsxRuntimeIfNotPatched();
    var set = beforeCallbacks[elementName] ??= /* @__PURE__ */ new Set();
    set.add(callback);
    return () => {
      set.delete(callback);
      unpatchIfNoListenersLeft();
    };
  }
  function isNativeJSXElement(element) {
    return typeof element === "string";
  }
  var import_react_native, styles, patched, persistentPatch, beforeCallbacks, afterCallbacks, patchCallback, patchJsxRuntimeIfNotPatched, unpatchIfNoListenersLeft, ReactJSXLibrary;
  var init_jsx = __esm({
    "libraries/react/src/jsx.ts"() {
      "use strict";
      init_common();
      init_shared2();
      import_react_native = __toESM(require_react_native(), 1);
      styles = import_react_native.StyleSheet.create({
        hidden: {
          display: "none"
        }
      });
      patched = false;
      persistentPatch = import_react_native.Platform.OS === "ios";
      beforeCallbacks = {};
      afterCallbacks = {};
      patchCallback = (args, orig) => {
        var [Comp, props] = args;
        if (typeof (Comp?.type ?? Comp) === "undefined") {
          args[0] = "RCTView";
          args[1] = {
            style: styles.hidden
          };
          return orig.apply(ReactJSXRuntime, args);
        }
        var name = typeof Comp === "string" ? Comp : Comp?.name ?? // @ts-expect-error
        (typeof Comp?.type === "string" ? Comp.type : Comp?.type?.name) ?? Comp?.displayName;
        if (!name) return orig.apply(ReactJSXRuntime, args);
        var newArgs = args;
        if (name in beforeCallbacks) for (var cb of beforeCallbacks[name]) {
          var maybeArgs = cb(newArgs);
          if (maybeArgs) newArgs = maybeArgs;
        }
        var tree = orig.apply(ReactJSXRuntime, newArgs);
        if (name in afterCallbacks) {
          for (var cb1 of afterCallbacks[name]) {
            var maybeTree = cb1(Comp, props, tree);
            if (typeof maybeTree !== "undefined") tree = maybeTree;
          }
        }
        return tree;
      };
      setTimeout(() => persistentPatch && patchJsxRuntimeIfNotPatched());
      patchJsxRuntimeIfNotPatched = () => {
        if (patched) return;
        patched = true;
        patcher2.instead(ReactJSXRuntime, "jsx", patchCallback, "patchJsxRuntime");
        patcher2.instead(ReactJSXRuntime, "jsxs", patchCallback, "patchJsxRuntime");
      };
      unpatchIfNoListenersLeft = () => {
        if (persistentPatch) return;
        if (Object.values(beforeCallbacks).some((set) => set.size) || Object.values(afterCallbacks).some((set) => set.size)) return;
        patcher2.unpatchAll();
        patched = false;
      };
      ReactJSXLibrary = {
        beforeElementCreate: beforeJSXElementCreate,
        afterElementCreate: afterJSXElementCreate,
        isNativeElement: isNativeJSXElement
      };
    }
  });

  // libraries/ui/src/colors.ts
  var colors_exports = {};
  __export(colors_exports, {
    RawColor: () => RawColor,
    SemanticColor: () => SemanticColor,
    isSemanticColor: () => isSemanticColor,
    resolveSemanticColor: () => resolveSemanticColor
  });
  function isSemanticColor(key) {
    return tokens.internal.isSemanticColor(key);
  }
  function resolveSemanticColor(key, theme = ThemeStore.theme) {
    return tokens.internal.resolveSemanticColor(theme, key);
  }
  var SemanticColor, RawColor;
  var init_colors = __esm({
    "libraries/ui/src/colors.ts"() {
      "use strict";
      init_common();
      init_stores();
      init_lazy();
      SemanticColor = lazyValue(() => tokens.colors);
      RawColor = lazyValue(() => tokens.unsafe_rawColors);
    }
  });

  // libraries/app/src/components/ErrorBoundaryScreen.tsx
  var ErrorBoundaryScreen_exports = {};
  __export(ErrorBoundaryScreen_exports, {
    LabeledCard: () => LabeledCard,
    default: () => ErrorBoundaryScreen
  });
  function ErrorBoundaryScreen(props) {
    var errorBoundaryStyles = useErrorBoundaryStyles();
    var error = props.error;
    return /* @__PURE__ */ jsxs(SafeAreaView, {
      style: errorBoundaryStyles.view,
      children: [
        /* @__PURE__ */ jsxs(import_react_native2.View, {
          style: {
            gap: 4
          },
          children: [
            /* @__PURE__ */ jsx(Text, {
              variant: "display-lg",
              children: "Error!"
            }),
            /* @__PURE__ */ jsxs(Text, {
              variant: "text-md/normal",
              children: [
                "An error was thrown while rendering components. This could be caused by plugins, Revenge or Discord.",
                " ",
                Math.floor(Number(ClientInfoModule.Build) % 1e3 / 100) > 0 ? /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/normal",
                  color: "text-danger",
                  children: "You are not on a stable version of Discord which may explain why you are experiencing this issue."
                }) : null
              ]
            }),
            /* @__PURE__ */ jsxs(Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: [
                ClientInfoModule.Version,
                " (",
                ClientInfoModule.Build,
                ") \u2022 Revenge ",
                "local",
                " (",
                "f2f1365",
                false ? "-dirty" : "",
                ")"
              ]
            })
          ]
        }),
        /* @__PURE__ */ jsxs(LabeledCard, {
          label: "Error",
          rawContent: getErrorStack(error),
          children: [
            /* @__PURE__ */ jsx(Text, {
              variant: "text-md/medium",
              children: String(error)
            }),
            error instanceof Error && error.stack && /* @__PURE__ */ jsxs(Fragment, {
              children: [
                /* @__PURE__ */ jsx(Text, {
                  variant: "heading-xl/semibold",
                  children: "Call Stack"
                }),
                /* @__PURE__ */ jsx(import_react_native2.ScrollView, {
                  style: styles2.scrollView,
                  fadingEdgeLength: 64,
                  children: parseStackTrace(error.stack?.slice(String(error).length + 1)).map(({ at, file, line, column }) => (
                    // biome-ignore lint/correctness/useJsxKeyInIterable: This never gets rerendered
                    /* @__PURE__ */ jsxs(Text, {
                      variant: "heading-md/extrabold",
                      style: {
                        fontFamily: "monospace",
                        fontWeight: "bold"
                      },
                      children: [
                        at,
                        "\n",
                        /* @__PURE__ */ jsxs(Text, {
                          variant: "text-sm/medium",
                          style: {
                            fontFamily: "monospace"
                          },
                          color: "text-muted",
                          children: [
                            file,
                            typeof line === "number" && typeof column === "number" && /* @__PURE__ */ jsxs(Fragment, {
                              children: [
                                ":",
                                line,
                                ":",
                                column
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ))
                })
              ]
            })
          ]
        }),
        error instanceof Error && "componentStack" in error && /* @__PURE__ */ jsx(LabeledCard, {
          scrollable: true,
          label: "Component Stack",
          style: styles2.resizable,
          rawContent: error.componentStack,
          children: /* @__PURE__ */ jsx(Text, {
            selectable: true,
            variant: "text-md/medium",
            children: [
              ...error.componentStack.slice(1).split("\n").map((line) => [
                "<",
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  children: line.slice(7)
                }),
                "/>\n"
              ])
            ]
          })
        }),
        /* @__PURE__ */ jsxs(Stack, {
          direction: "horizontal",
          spacing: 16,
          children: [
            /* @__PURE__ */ jsx(Button, {
              style: styles2.growable,
              variant: "destructive",
              text: "Reload Discord",
              onPress: props.reload
            }),
            /* @__PURE__ */ jsx(Button, {
              style: styles2.growable,
              text: "Retry Render",
              onPress: props.rerender
            })
          ]
        })
      ]
    });
  }
  function LabeledCard(props) {
    var ViewComponent = props.scrollable ? import_react_native2.ScrollView : import_react_native2.View;
    return /* @__PURE__ */ jsxs(Card, {
      ...props,
      style: [
        styles2.scrollView,
        ...Array.isArray(props.style) ? props.style : [
          props.style
        ]
      ],
      children: [
        /* @__PURE__ */ jsxs(import_react_native2.View, {
          style: {
            flexDirection: "row",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ jsx(Text, {
              variant: "heading-xl/semibold",
              style: styles2.growable,
              children: props.label
            }),
            props.rawContent && /* @__PURE__ */ jsx(Button, {
              variant: "secondary",
              size: "sm",
              text: "Copy",
              onPress: () => clipboard.setString(props.rawContent)
            })
          ]
        }),
        /* @__PURE__ */ jsx(ViewComponent, {
          style: styles2.scrollView,
          fadingEdgeLength: 32,
          children: props.children
        })
      ]
    });
  }
  function parseStackTrace(stackTrace) {
    var frames = [];
    var lines = stackTrace.split("\n");
    for (var line of lines) {
      var match = StackFrameRegex.exec(line.trim());
      if (match) {
        var at = void 0;
        var path = void 0;
        var ln = null;
        var col = null;
        if (match[3] && match[4]) {
          at = match[1];
          path = match[2];
          ln = Number(match[3]);
          col = Number(match[4]);
        } else {
          at = match[5];
          path = match[6];
        }
        if (path === IndexBundleFilePath) path = "(Discord)";
        frames.push({
          at,
          file: path,
          line: ln,
          column: col
        });
      } else {
        frames.push({
          at: "UNABLE TO PARSE LINE",
          file: line,
          line: null,
          column: null
        });
      }
    }
    return frames;
  }
  var import_react_native2, useErrorBoundaryStyles, styles2, IndexBundleFilePath, StackFrameRegex;
  var init_ErrorBoundaryScreen = __esm({
    "libraries/app/src/components/ErrorBoundaryScreen.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_common();
      init_components();
      init_native();
      init_colors();
      init_errors();
      import_react_native2 = __toESM(require_react_native(), 1);
      useErrorBoundaryStyles = createStyles({
        view: {
          backgroundColor: SemanticColor.BG_BASE_SECONDARY,
          paddingHorizontal: 16,
          paddingVertical: 24,
          flex: 1,
          gap: 16
        }
      });
      styles2 = import_react_native2.StyleSheet.create({
        scrollView: {
          gap: 8,
          flex: 1
        },
        growable: {
          flexGrow: 1
        },
        resizable: {
          flex: 1
        }
      });
      IndexBundleFilePath = HermesInternal.getFunctionLocation(__r).fileName;
      StackFrameRegex = /at (.+) \(([^:]+):(\d+):(\d+)\)|at (.+)? \(([^)]+)\)/;
    }
  });

  // libraries/app/src/index.tsx
  var src_exports2 = {};
  __export(src_exports2, {
    AppLibrary: () => AppLibrary,
    afterAppInitialize: () => afterAppInitialize,
    afterAppRender: () => afterAppRender,
    isAppInitialized: () => isAppInitialized,
    isAppRendered: () => isAppRendered
  });
  function afterAppInitialize(callback) {
    if (isAppInitialized) throw new Error("Cannot attach a callback after the app has already been initialized");
    initializeCallbacks.add(callback);
  }
  function afterAppRender(callback) {
    if (isAppRendered) throw new Error("Cannot attach a callback after the App component has been rendered");
    renderCallbacks.add(callback);
  }
  var patcher3, logger2, initializeCallbacks, renderCallbacks, isAppInitialized, isAppRendered, unpatchRunApplication, unpatchCreateElement, afterErrorBoundaryPatchable, AppLibrary;
  var init_src4 = __esm({
    "libraries/app/src/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_src();
      init_common();
      init_finders();
      init_native();
      init_src2();
      init_jsx();
      init_library();
      patcher3 = createPatcherInstance("revenge.library.app");
      logger2 = createLogger("app");
      logger2.log("Library loaded");
      initializeCallbacks = /* @__PURE__ */ new Set();
      renderCallbacks = /* @__PURE__ */ new Set();
      isAppInitialized = false;
      isAppRendered = false;
      afterAppInitialize(() => isAppInitialized = true);
      afterAppRender(() => isAppRendered = true);
      unpatchRunApplication = patcher3.after(ReactNative2.AppRegistry, "runApplication", () => {
        unpatchRunApplication();
        recordTimestamp("App_RunApplicationCalled");
        logger2.log("AppRegistry.runApplication called");
        for (var callback of initializeCallbacks) callback();
        recordTimestamp("App_AfterRunRACallbacks");
        logger2.log("Initialized callbacks called");
      }, "runInitializeCallbacks");
      unpatchCreateElement = patcher3.after(React2, "createElement", () => {
        unpatchCreateElement();
        recordTimestamp("App_CreateElementCalled");
        logger2.log("React.createElement called");
        for (var callback of renderCallbacks) callback();
        recordTimestamp("App_AfterRunCECallbacks");
        logger2.log("Rendered callbacks called");
      }, "runRenderCallbacks");
      afterErrorBoundaryPatchable = ReactNative2.Platform.OS === "ios" ? afterAppRender : afterAppInitialize;
      afterErrorBoundaryPatchable(/* @__PURE__ */ function() {
        var _patchErrorBoundary = _async_to_generator(function* () {
          if (ReactNative2.Platform.OS === "ios") ReactJSXLibrary.afterElementCreate("PortalKeyboardPlaceholderInner", () => null);
          var { default: Screen } = yield Promise.resolve().then(() => (init_ErrorBoundaryScreen(), ErrorBoundaryScreen_exports));
          setImmediate(() => {
            patcher3.after.await(findByName.async("ErrorBoundary").then((it) => it.prototype), "render", function() {
              if (this.state.error) return /* @__PURE__ */ jsx(Screen, {
                error: this.state.error,
                rerender: () => this.setState({
                  error: null,
                  info: null
                }),
                reload: this.handleReload
              });
            }, "patchErrorBoundary");
            logger2.log("ErrorBoundary patched");
          });
        });
        function patchErrorBoundary() {
          return _patchErrorBoundary.apply(this, arguments);
        }
        return patchErrorBoundary;
      }());
      AppLibrary = {
        /**
         * Whether the app has finished initializing
         */
        get initialized() {
          return isAppInitialized;
        },
        /**
         * Whether the App component has been rendered
         */
        get rendered() {
          return isAppRendered;
        },
        /**
         * Attaches a callback to be called when the app has been rendered
         * @param callback The callback to be called
         */
        afterRender: afterAppRender,
        /**
         * Attaches a callback to be called when the app has been initialized
         * @param callback The callback to be called
         */
        afterInitialize: afterAppInitialize,
        /**
         * Reloads the app
         */
        reload: () => BundleUpdaterManager.reload()
      };
    }
  });

  // libraries/assets/src/index.ts
  var src_exports3 = {};
  __export(src_exports3, {
    AssetsLibrary: () => AssetsLibrary,
    customAssets: () => customAssets,
    getAssetByIndex: () => getAssetByIndex,
    getAssetByName: () => getAssetByName,
    getAssetIndexByName: () => getAssetIndexByName,
    getAssetModuleIdByIndex: () => getAssetModuleIdByIndex,
    getAssetModuleIdByName: () => getAssetModuleIdByName,
    getAssetTypesByIndex: () => getAssetTypesByIndex,
    getAssetTypesByName: () => getAssetTypesByName,
    getFirstRegisteredAssetTypeByName: () => getFirstRegisteredAssetTypeByName,
    isCustomAsset: () => isCustomAsset,
    registerCustomAsset: () => registerCustomAsset,
    setDefaultPreferredAssetType: () => setDefaultPreferredAssetType
  });
  function maybeResolveCustomAsset(args, orig) {
    if (CustomAssetBrandKey in this.asset) return {
      uri: this.asset[CustomAssetBrandKey]
    };
    return orig.apply(this, args);
  }
  function registerCustomAsset(asset, source) {
    if (asset.name in customAssets) throw new Error("Custom asset with the same name already exists, and registering multiple custom assets with the same name is not supported yet");
    return customAssets[asset.name] = assetsRegistry.registerAsset({
      ...asset,
      __packager_asset: true,
      scales: [
        1
      ],
      [CustomAssetBrandKey]: source,
      hash: "",
      httpServerLocation: `/(custom)/${asset.name}.${asset.type}`
    });
  }
  function isCustomAsset(asset) {
    return CustomAssetBrandKey in asset;
  }
  function getAssetByName(name, preferredType = defaultPreferredType) {
    if (name in customAssets) return getAssetByIndex(customAssets[name]);
    return getAssetByIndex(getAssetIndexByName(name, preferredType));
  }
  function getAssetByIndex(index) {
    return assetsIndex[index];
  }
  function getAssetIndexByName(name, preferredType = defaultPreferredType) {
    if (name in customAssets) return customAssets[name];
    var assetModule = cache.assetModules[name];
    if (!assetModule) return;
    var mid = assetModule[preferredType] ?? assetModule[getFirstRegisteredAssetTypeByName(name)];
    if (typeof mid === "undefined") return;
    return requireModule(mid);
  }
  function getAssetModuleIdByName(name, preferredType = defaultPreferredType) {
    var moduleIds = cache.assetModules[name];
    if (!moduleIds) return;
    return moduleIds[preferredType] ?? moduleIds[getFirstRegisteredAssetTypeByName(name)];
  }
  function getAssetModuleIdByIndex(index) {
    return cache.assetModules[assetCacheIndexSymbol][index];
  }
  function getAssetTypesByName(name, preferredType = defaultPreferredType) {
    return getAssetTypesByIndex(getAssetIndexByName(name, preferredType));
  }
  function getAssetTypesByIndex(index) {
    return Object.keys(cache.assetModules[assetCacheIndexSymbol][index] ?? {});
  }
  function getFirstRegisteredAssetTypeByName(name) {
    return cache.assetModules[name]?.[FirstAssetTypeRegisteredKey];
  }
  function setDefaultPreferredAssetType(type) {
    defaultPreferredType = type;
  }
  var patcher4, CustomAssetBrandKey, customAssets, defaultPreferredType, AssetSourceResolver, assetsIndex, AssetsLibrary;
  var init_src5 = __esm({
    "libraries/assets/src/index.ts"() {
      "use strict";
      init_common();
      init_finders();
      init_metro();
      init_src2();
      init_constants();
      patcher4 = createPatcherInstance("revenge.library.assets");
      CustomAssetBrandKey = "__revenge_asset";
      customAssets = {};
      defaultPreferredType = ReactNative.Platform.OS === "ios" ? "png" : "svg";
      patcher4.after(assetsRegistry, "registerAsset", ([asset], index) => {
        if (CustomAssetBrandKey in asset) return;
        var moduleId = getImportingModuleId();
        cacheAsset(asset.name, index, moduleId, asset.type);
      }, "patchRegisterAsset");
      AssetSourceResolver = findByName.async("AssetSourceResolver").then((it) => it.prototype);
      patcher4.instead.await(AssetSourceResolver, "defaultAsset", maybeResolveCustomAsset);
      patcher4.instead.await(AssetSourceResolver, "fromSource", maybeResolveCustomAsset);
      assetsIndex = new Proxy({}, {
        get(cache2, prop) {
          if (cache2[prop]) return cache2[prop];
          return cache2[prop] = assetsRegistry.getAssetByID(Number(prop));
        }
      });
      AssetsLibrary = {
        index: assetsIndex,
        registerCustom: registerCustomAsset,
        getByName: getAssetByName,
        getIndexByName: getAssetIndexByName,
        getByIndex: getAssetByIndex,
        getModuleIdByName: getAssetModuleIdByName,
        getModuleIdByIndex: getAssetModuleIdByIndex,
        getTypesByName: getAssetTypesByName,
        getTypesByIndex: getAssetTypesByIndex,
        setDefaultPreferredType: setDefaultPreferredAssetType
      };
    }
  });

  // libraries/plugins/src/constants.ts
  var WhitelistedPluginObjectKeys, DefaultPluginStopConfig, PluginStatus, PluginZipFileSizeLimit, InstallPluginResult;
  var init_constants2 = __esm({
    "libraries/plugins/src/constants.ts"() {
      "use strict";
      WhitelistedPluginObjectKeys = [
        "description",
        "disable",
        "icon",
        "id",
        "name",
        "version",
        "stop",
        "author",
        "errors"
      ];
      DefaultPluginStopConfig = {
        reloadRequired: false
      };
      PluginStatus = {
        Stopped: 0,
        Fetching: 1,
        Starting: 2,
        Started: 3
      };
      PluginZipFileSizeLimit = 16 * 1024 * 1024;
      InstallPluginResult = {
        Success: 0,
        AlreadyInstalled: 1,
        InvalidManifest: 2,
        InvalidFileFormat: 10,
        InvalidKeyFileFormat: 11,
        InvalidSignatureFileFormat: 12,
        SignatureVerificationFailed: 20,
        UnsignedUserConfirmationNeeded: 21
      };
    }
  });

  // libraries/shared/src/paths.ts
  var BaseDirectory, SettingsFilePath, TrustedKeysDirectoryPath, TrustedKeysDataFilePath, PluginsDirectoryPath, PluginsStatesFilePath, ExternalPluginsMetadataFilePath, ExternalPluginManifestFilePath, ExternalPluginSourceFilePath, PluginStoragePath;
  var init_paths = __esm({
    "libraries/shared/src/paths.ts"() {
      "use strict";
      BaseDirectory = "revenge";
      SettingsFilePath = `${BaseDirectory}/settings.json`;
      TrustedKeysDirectoryPath = `${BaseDirectory}/trusted_keys`;
      TrustedKeysDataFilePath = `${TrustedKeysDirectoryPath}/data.json`;
      PluginsDirectoryPath = `${BaseDirectory}/plugins`;
      PluginsStatesFilePath = `${PluginsDirectoryPath}/states.json`;
      ExternalPluginsMetadataFilePath = `${PluginsDirectoryPath}/externals.json`;
      ExternalPluginManifestFilePath = (id) => `${PluginsDirectoryPath}/${id}/manifest.json`;
      ExternalPluginSourceFilePath = (id) => `${PluginsDirectoryPath}/${id}/source.zip`;
      PluginStoragePath = (id) => `${PluginsDirectoryPath}/${id}/storage.json`;
    }
  });

  // node_modules/@swc/helpers/esm/_get_prototype_of.js
  function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _get_prototype_of(o);
  }
  var init_get_prototype_of = __esm({
    "node_modules/@swc/helpers/esm/_get_prototype_of.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_is_native_reflect_construct.js
  function _is_native_reflect_construct() {
    try {
      var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (_3) {
    }
    return (_is_native_reflect_construct = function _is_native_reflect_construct2() {
      return !!result;
    })();
  }
  var init_is_native_reflect_construct = __esm({
    "node_modules/@swc/helpers/esm/_is_native_reflect_construct.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_assert_this_initialized.js
  function _assert_this_initialized(self2) {
    if (self2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self2;
  }
  var init_assert_this_initialized = __esm({
    "node_modules/@swc/helpers/esm/_assert_this_initialized.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_type_of.js
  function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
  }
  var init_type_of = __esm({
    "node_modules/@swc/helpers/esm/_type_of.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_possible_constructor_return.js
  function _possible_constructor_return(self2, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) return call;
    return _assert_this_initialized(self2);
  }
  var init_possible_constructor_return = __esm({
    "node_modules/@swc/helpers/esm/_possible_constructor_return.js"() {
      init_assert_this_initialized();
      init_type_of();
    }
  });

  // node_modules/@swc/helpers/esm/_call_super.js
  function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
  }
  var init_call_super = __esm({
    "node_modules/@swc/helpers/esm/_call_super.js"() {
      init_get_prototype_of();
      init_is_native_reflect_construct();
      init_possible_constructor_return();
    }
  });

  // node_modules/@swc/helpers/esm/_class_call_check.js
  function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
  }
  var init_class_call_check = __esm({
    "node_modules/@swc/helpers/esm/_class_call_check.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_check_private_redeclaration.js
  function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  var init_check_private_redeclaration = __esm({
    "node_modules/@swc/helpers/esm/_check_private_redeclaration.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_create_class.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var init_create_class = __esm({
    "node_modules/@swc/helpers/esm/_create_class.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_set_prototype_of.js
  function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _set_prototype_of(o, p);
  }
  var init_set_prototype_of = __esm({
    "node_modules/@swc/helpers/esm/_set_prototype_of.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_inherits.js
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
    if (superClass) _set_prototype_of(subClass, superClass);
  }
  var init_inherits = __esm({
    "node_modules/@swc/helpers/esm/_inherits.js"() {
      init_set_prototype_of();
    }
  });

  // node_modules/@gullerya/object-observer/dist/object-observer.min.js
  var m, x, E, T, K, c, $, N, Y, I, B, D, R, z, y, g, q, H, G, J, F, P, L, C, Q, X, Z, _2, b, S, V, U, W, v;
  var init_object_observer_min = __esm({
    "node_modules/@gullerya/object-observer/dist/object-observer.min.js"() {
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      m = "insert";
      x = "update";
      E = "delete";
      T = "reverse";
      K = "shuffle";
      c = Symbol.for("object-observer-meta-key-0");
      $ = {
        async: 1
      };
      N = (o) => {
        if (!o || typeof o != "object") return null;
        var t = {}, e = [];
        for (var [r, n] of Object.entries(o)) if (r === "path") {
          if (typeof n != "string" || n === "") throw new Error('"path" option, if/when provided, MUST be a non-empty string');
          t[r] = n;
        } else if (r === "pathsOf") {
          if (o.path) throw new Error('"pathsOf" option MAY NOT be specified together with "path" option');
          if (typeof n != "string") throw new Error('"pathsOf" option, if/when provided, MUST be a string (MAY be empty)');
          t[r] = o.pathsOf.split(".").filter(Boolean);
        } else if (r === "pathsFrom") {
          if (o.path || o.pathsOf) throw new Error('"pathsFrom" option MAY NOT be specified together with "path"/"pathsOf" option/s');
          if (typeof n != "string" || n === "") throw new Error('"pathsFrom" option, if/when provided, MUST be a non-empty string');
          t[r] = n;
        } else e.push(r);
        if (e.length) throw new Error(`'${e.join(", ")}' is/are not a valid observer option/s`);
        return t;
      };
      Y = (o, t, e) => {
        var r = {};
        r[c] = t;
        for (var n in o) r[n] = g(o[n], n, t, e);
        return r;
      };
      I = (o, t, e) => {
        var r = o.length;
        var n = new Array(r);
        n[c] = t;
        for (var i = 0; i < r; i++) n[i] = g(o[i], i, t, e);
        return n;
      };
      B = (o, t) => (o[c] = t, o);
      D = (o, t) => {
        if (o === null) return t;
        var e = t;
        if (o.path) {
          var r = o.path;
          e = t.filter((n2) => n2.path.join(".") === r);
        } else if (o.pathsOf) {
          var r1 = o.pathsOf, n = r1.join(".");
          e = t.filter((i) => (i.path.length === r1.length + 1 || i.path.length === r1.length && (i.type === T || i.type === K)) && i.path.join(".").startsWith(n));
        } else if (o.pathsFrom) {
          var r2 = o.pathsFrom;
          e = t.filter((n2) => n2.path.join(".").startsWith(r2));
        }
        return e;
      };
      R = (o, t) => {
        try {
          o(t);
        } catch (e) {
          console.error(`failed to notify listener ${o} with ${t}`, e);
        }
      };
      z = function z2() {
        var t = this.batches;
        this.batches = [];
        for (var [e, r] of t) R(e, r);
      };
      y = (o, t) => {
        var e = o, r, n, i, l, h, s;
        var u = t.length;
        do {
          for (r = e.options.async, n = e.observers, s = n.length; s--; ) if ([i, l] = n[s], h = D(l, t), h.length) if (r) {
            e.batches.length === 0 && queueMicrotask(z.bind(e));
            var a = void 0;
            for (var p of e.batches) if (p[0] === i) {
              a = p;
              break;
            }
            a || (a = [
              i,
              []
            ], e.batches.push(a)), Array.prototype.push.apply(a[1], h);
          } else R(i, h);
          var f = e.parent;
          if (f) {
            for (var a1 = 0; a1 < u; a1++) {
              var p1 = t[a1];
              t[a1] = new b(p1.type, [
                e.ownKey,
                ...p1.path
              ], p1.value, p1.oldValue, p1.object);
            }
            e = f;
          } else e = null;
        } while (e);
      };
      g = (o, t, e, r) => r !== void 0 && r.has(o) ? null : typeof o != "object" || o === null ? o : Array.isArray(o) ? new U({
        target: o,
        ownKey: t,
        parent: e,
        visited: r
      }).proxy : ArrayBuffer.isView(o) ? new W({
        target: o,
        ownKey: t,
        parent: e
      }).proxy : o instanceof Date ? o : new V({
        target: o,
        ownKey: t,
        parent: e,
        visited: r
      }).proxy;
      q = function q2() {
        var t = this[c], e = t.target, r = e.length - 1;
        var n = e.pop();
        if (n && typeof n == "object") {
          var l = n[c];
          l && (n = l.detach());
        }
        var i = [
          new b(E, [
            r
          ], void 0, n, this)
        ];
        return y(t, i), n;
      };
      H = function H2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
        for (var s = 0; s < r; s++) n[s] = g(arguments[s], i + s, t);
        var l = Reflect.apply(e.push, e, n), h = [];
        for (var s1 = i, u = e.length; s1 < u; s1++) h[s1 - i] = new b(m, [
          s1
        ], e[s1], void 0, this);
        return y(t, h), l;
      };
      G = function G2() {
        var t = this[c], e = t.target;
        var r, n, i, l, h;
        for (r = e.shift(), r && typeof r == "object" && (h = r[c], h && (r = h.detach())), n = 0, i = e.length; n < i; n++) l = e[n], l && typeof l == "object" && (h = l[c], h && (h.ownKey = n));
        var s = [
          new b(E, [
            0
          ], void 0, r, this)
        ];
        return y(t, s), r;
      };
      J = function J2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r);
        for (var s = 0; s < r; s++) n[s] = g(arguments[s], s, t);
        var i = Reflect.apply(e.unshift, e, n);
        for (var s1 = 0, u = e.length, f; s1 < u; s1++) if (f = e[s1], f && typeof f == "object") {
          var a = f[c];
          a && (a.ownKey = s1);
        }
        var l = n.length, h = new Array(l);
        for (var s2 = 0; s2 < l; s2++) h[s2] = new b(m, [
          s2
        ], e[s2], void 0, this);
        return y(t, h), i;
      };
      F = function F2() {
        var t = this[c], e = t.target;
        var r, n, i;
        for (e.reverse(), r = 0, n = e.length; r < n; r++) if (i = e[r], i && typeof i == "object") {
          var h = i[c];
          h && (h.ownKey = r);
        }
        var l = [
          new b(T, [], void 0, void 0, this)
        ];
        return y(t, l), this;
      };
      P = function P2(t) {
        var e = this[c], r = e.target;
        var n, i, l;
        for (r.sort(t), n = 0, i = r.length; n < i; n++) if (l = r[n], l && typeof l == "object") {
          var s = l[c];
          s && (s.ownKey = n);
        }
        var h = [
          new b(K, [], void 0, void 0, this)
        ];
        return y(e, h), this;
      };
      L = function L2(t, e, r) {
        var n = this[c], i = n.target, l = [], h = i.length, s = i.slice(0);
        if (e = e === void 0 ? 0 : e < 0 ? Math.max(h + e, 0) : Math.min(e, h), r = r === void 0 ? h : r < 0 ? Math.max(h + r, 0) : Math.min(r, h), e < h && r > e) {
          i.fill(t, e, r);
          var u;
          for (var f = e, a, p; f < r; f++) a = i[f], i[f] = g(a, f, n), f in s ? (p = s[f], p && typeof p == "object" && (u = p[c], u && (p = u.detach())), l.push(new b(x, [
            f
          ], i[f], p, this))) : l.push(new b(m, [
            f
          ], i[f], void 0, this));
          y(n, l);
        }
        return this;
      };
      C = function C2(t, e, r) {
        var n = this[c], i = n.target, l = i.length;
        t = t < 0 ? Math.max(l + t, 0) : t, e = e === void 0 ? 0 : e < 0 ? Math.max(l + e, 0) : Math.min(e, l), r = r === void 0 ? l : r < 0 ? Math.max(l + r, 0) : Math.min(r, l);
        var h = Math.min(r - e, l - t);
        if (t < l && t !== e && h > 0) {
          var s = i.slice(0), u = [];
          i.copyWithin(t, e, r);
          for (var f = t, a, p, O; f < t + h; f++) a = i[f], a && typeof a == "object" && (a = g(a, f, n), i[f] = a), p = s[f], p && typeof p == "object" && (O = p[c], O && (p = O.detach())), !(typeof a != "object" && a === p) && u.push(new b(x, [
            f
          ], a, p, this));
          y(n, u);
        }
        return this;
      };
      Q = function Q2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
        for (var w = 0; w < r; w++) n[w] = g(arguments[w], w, t);
        var l = r === 0 ? 0 : n[0] < 0 ? i + n[0] : n[0], h = r < 2 ? i - l : n[1], s = Math.max(r - 2, 0), u = Reflect.apply(e.splice, e, n), f = e.length;
        var a;
        for (var w1 = 0, A; w1 < f; w1++) A = e[w1], A && typeof A == "object" && (a = A[c], a && (a.ownKey = w1));
        var p, O, j;
        for (p = 0, O = u.length; p < O; p++) j = u[p], j && typeof j == "object" && (a = j[c], a && (u[p] = a.detach()));
        var M = [];
        var d;
        for (d = 0; d < h; d++) d < s ? M.push(new b(x, [
          l + d
        ], e[l + d], u[d], this)) : M.push(new b(E, [
          l + d
        ], void 0, u[d], this));
        for (; d < s; d++) M.push(new b(m, [
          l + d
        ], e[l + d], void 0, this));
        return y(t, M), u;
      };
      X = function X2(t, e) {
        var r = this[c], n = r.target, i = t.length, l = n.slice(0);
        e = e || 0, n.set(t, e);
        var h = new Array(i);
        for (var s = e; s < i + e; s++) h[s - e] = new b(x, [
          s
        ], n[s], l[s], this);
        y(r, h);
      };
      Z = {
        pop: q,
        push: H,
        shift: G,
        unshift: J,
        reverse: F,
        sort: P,
        fill: L,
        copyWithin: C,
        splice: Q
      };
      _2 = {
        reverse: F,
        sort: P,
        fill: L,
        copyWithin: C,
        set: X
      };
      b = function b2(t, e, r, n, i) {
        "use strict";
        _class_call_check(this, b2);
        this.type = t, this.path = e, this.value = r, this.oldValue = n, this.object = i;
      };
      S = /* @__PURE__ */ function() {
        "use strict";
        function S2(t, e) {
          _class_call_check(this, S2);
          var { target: r, parent: n, ownKey: i, visited: l = /* @__PURE__ */ new Set() } = t;
          n && i !== void 0 ? (this.parent = n, this.ownKey = i) : (this.parent = null, this.ownKey = null), l.add(r);
          var h = e(r, this, l);
          l.delete(r), this.observers = [], this.revocable = Proxy.revocable(h, this), this.proxy = this.revocable.proxy, this.target = h, this.options = this.processOptions(t.options), this.options.async && (this.batches = []);
        }
        _create_class(S2, [
          {
            key: "processOptions",
            value: function processOptions(t) {
              if (t) {
                if (typeof t != "object") throw new Error(`Observable options if/when provided, MAY only be an object, got '${t}'`);
                var e = Object.keys(t).filter((r) => !(r in $));
                if (e.length) throw new Error(`'${e.join(", ")}' is/are not a valid Observable option/s`);
                return Object.assign({}, t);
              } else return {};
            }
          },
          {
            key: "detach",
            value: function detach() {
              return this.parent = null, this.target;
            }
          },
          {
            key: "set",
            value: function set(t, e, r) {
              var n = t[e];
              if (r !== n) {
                var i = g(r, e, this);
                if (t[e] = i, n && typeof n == "object") {
                  var h = n[c];
                  h && (n = h.detach());
                }
                var l = n === void 0 ? [
                  new b(m, [
                    e
                  ], i, void 0, this.proxy)
                ] : [
                  new b(x, [
                    e
                  ], i, n, this.proxy)
                ];
                y(this, l);
              }
              return true;
            }
          },
          {
            key: "deleteProperty",
            value: function deleteProperty(t, e) {
              var r = t[e];
              if (delete t[e], r && typeof r == "object") {
                var i = r[c];
                i && (r = i.detach());
              }
              var n = [
                new b(E, [
                  e
                ], void 0, r, this.proxy)
              ];
              return y(this, n), true;
            }
          }
        ]);
        return S2;
      }();
      V = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(V2, S2);
        function V2(t) {
          _class_call_check(this, V2);
          return _call_super(this, V2, [
            t,
            Y
          ]);
        }
        return V2;
      }(S);
      U = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(U2, S2);
        function U2(t) {
          _class_call_check(this, U2);
          return _call_super(this, U2, [
            t,
            I
          ]);
        }
        _create_class(U2, [
          {
            key: "get",
            value: function get(t, e) {
              return Z[e] || t[e];
            }
          }
        ]);
        return U2;
      }(S);
      W = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(W3, S2);
        function W3(t) {
          _class_call_check(this, W3);
          return _call_super(this, W3, [
            t,
            B
          ]);
        }
        _create_class(W3, [
          {
            key: "get",
            value: function get(t, e) {
              return _2[e] || t[e];
            }
          }
        ]);
        return W3;
      }(S);
      v = Object.freeze({
        from: (o, t) => {
          if (!o || typeof o != "object") throw new Error("observable MAY ONLY be created from a non-null object");
          if (o[c]) return o;
          if (Array.isArray(o)) return new U({
            target: o,
            ownKey: null,
            parent: null,
            options: t
          }).proxy;
          if (ArrayBuffer.isView(o)) return new W({
            target: o,
            ownKey: null,
            parent: null,
            options: t
          }).proxy;
          if (o instanceof Date) throw new Error(`${o} found to be one of a non-observable types`);
          return new V({
            target: o,
            ownKey: null,
            parent: null,
            options: t
          }).proxy;
        },
        isObservable: (o) => !!(o && o[c]),
        observe: (o, t, e) => {
          if (!v.isObservable(o)) throw new Error("invalid observable parameter");
          if (typeof t != "function") throw new Error(`observer MUST be a function, got '${t}'`);
          var r = o[c].observers;
          r.some((n) => n[0] === t) ? console.warn("observer may be bound to an observable only once; will NOT rebind") : r.push([
            t,
            N(e)
          ]);
        },
        unobserve: (o, ...t) => {
          if (!v.isObservable(o)) throw new Error("invalid observable parameter");
          var e = o[c].observers;
          var r = e.length;
          if (r) {
            if (!t.length) {
              e.splice(0);
              return;
            }
            for (; r; ) t.indexOf(e[--r][0]) >= 0 && e.splice(r, 1);
          }
        }
      });
    }
  });

  // libraries/storage/src/index.ts
  var src_exports4 = {};
  __export(src_exports4, {
    awaitStorage: () => awaitStorage,
    createStorage: () => createStorage,
    getPreloadedStorage: () => getPreloadedStorage,
    loadStorage: () => loadStorage,
    removeStorage: () => removeStorage,
    saveStorage: () => saveStorage,
    storageContextSymbol: () => storageContextSymbol,
    useObservable: () => useObservable
  });
  function createJSONFile(path) {
    var actualPath = `${FileModule.getConstants().DocumentsDirPath}/${path}`;
    var file = {
      read: /* @__PURE__ */ _async_to_generator(function* () {
        try {
          return JSON.parse(yield FileModule.readFile(actualPath, "utf8"));
        } catch (e) {
          throw new Error(`Failed to parse storage from: ${actualPath}`, {
            cause: e
          });
        }
      }),
      write: (data) => {
        if (!data || typeof data !== "object") {
          throw new Error("Data to write needs to be an object");
        }
        return FileModule.writeFile("documents", path, JSON.stringify(data), "utf8");
      },
      exists: () => FileModule.fileExists(actualPath),
      delete: () => FileModule.removeFile("documents", path)
    };
    return file;
  }
  function useObservable(observables, opts) {
    if (observables.some((o) => o?.[storageContextSymbol]?.error)) throw new Error("An error occured while initializing the storage");
    if (observables.some((o) => !v.isObservable(o))) {
      throw new Error("Argument passed isn't an Observable");
    }
    var [, forceUpdate] = React.useReducer((n) => ~n, 0);
    React.useEffect(() => {
      var listener = () => forceUpdate();
      for (var o of observables) v.observe(o, listener, opts);
      return () => {
        for (var o2 of observables) v.unobserve(o2, listener);
      };
    }, []);
  }
  function saveStorage(path, value) {
    return _saveStorage.apply(this, arguments);
  }
  function _saveStorage() {
    _saveStorage = _async_to_generator(function* (path, value) {
      loadedStorages[path] = value;
      createJSONFile(path).write(value);
    });
    return _saveStorage.apply(this, arguments);
  }
  function createStorage(path, { initial = {} } = {}) {
    var readyPromise = new Promise((r) => resolve = r);
    var resolve;
    var proxy;
    var backend = createJSONFile(path);
    var context = {
      emitter: new EventEmitter(),
      ready: false,
      readyPromise,
      file: backend
    };
    var callback = (data) => {
      var observable = v.from(data);
      v.observe(observable, (changes) => {
        for (var change of changes) {
          context.emitter.emit(change.type !== "delete" ? "set" : "delete", {
            path: change.path,
            value: change.value
          });
        }
        backend.write(observable);
      });
      var _proxy = new Proxy(observable, {
        get(target, prop, receiver) {
          if (prop === storageContextSymbol) return context;
          return Reflect.get(target, prop, receiver);
        }
      });
      context.ready = true;
      resolve();
      return proxy = _proxy;
    };
    if (loadedStorages[path]) {
      callback(loadedStorages[path]);
    } else {
      backend.exists().then(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (exists2) {
          if (!exists2) {
            loadedStorages[path] = initial;
            yield backend.write(initial);
            callback(initial);
          } else {
            callback(loadedStorages[path] = yield backend.read());
          }
        });
        return function(exists2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    var check = () => {
      if (proxy) return true;
      throw new Error(`Storage has not been initialized: ${path}`);
    };
    return new Proxy({}, {
      ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((k) => [
        k,
        (_3, ...args) => {
          return check() && Reflect[k](proxy, ...args);
        }
      ])),
      get(_3, prop, recv) {
        if (prop === storageContextSymbol) return context;
        return check() && Reflect.get(proxy, prop, recv);
      }
    });
  }
  function loadStorage(path) {
    return _loadStorage.apply(this, arguments);
  }
  function _loadStorage() {
    _loadStorage = _async_to_generator(function* (path) {
      if (loadedStorages[path]) return true;
      var backend = createJSONFile(path);
      if (yield backend.exists()) {
        loadedStorages[path] = yield backend.read();
        return false;
      }
      return true;
    });
    return _loadStorage.apply(this, arguments);
  }
  function removeStorage(path) {
    return _removeStorage.apply(this, arguments);
  }
  function _removeStorage() {
    _removeStorage = _async_to_generator(function* (path) {
      yield FileModule.removeFile("documents", path);
      delete loadedStorages[path];
    });
    return _removeStorage.apply(this, arguments);
  }
  function awaitStorage(...storages) {
    return Promise.all(storages.map((proxy) => proxy[storageContextSymbol].readyPromise));
  }
  function getPreloadedStorage(path) {
    return loadedStorages[path];
  }
  var storageContextSymbol, loadedStorages;
  var init_src6 = __esm({
    "libraries/storage/src/index.ts"() {
      "use strict";
      init_async_to_generator();
      init_object_observer_min();
      init_common();
      init_native();
      storageContextSymbol = Symbol.for("revenge.storage.context");
      loadedStorages = {};
    }
  });

  // libraries/preferences/src/index.ts
  var src_exports5 = {};
  __export(src_exports5, {
    pluginsStates: () => pluginsStates,
    settings: () => settings
  });
  var settings, pluginsStates;
  var init_src7 = __esm({
    "libraries/preferences/src/index.ts"() {
      "use strict";
      init_paths();
      init_src6();
      settings = createStorage(SettingsFilePath, {
        initial: {
          safeMode: {
            enabled: false,
            enabledNextLaunch: false
          }
        }
      });
      pluginsStates = createStorage(PluginsStatesFilePath, {
        initial: {}
      });
    }
  });

  // libraries/plugins/src/shared.ts
  var logger3;
  var init_shared3 = __esm({
    "libraries/plugins/src/shared.ts"() {
      "use strict";
      init_common();
      logger3 = new Logger("revenge.plugins");
    }
  });

  // libraries/plugins/src/internals.ts
  function registerPlugin(manifest, definition, opts = {}) {
    if (manifest.id in registeredPlugins) throw new Error(`Plugin "${manifest.id}" is already registered`);
    var options = {
      core: opts.core ?? false,
      manageable: opts.manageable ?? !opts.core,
      enabled: opts.enabled ?? !!opts.core
    };
    var status = PluginStatus.Stopped;
    var cleanups = /* @__PURE__ */ new Set();
    var def = {
      ...manifest,
      core: options.core,
      manageable: options.manageable,
      lifecycles: {
        prepare() {
          ctx.patcher ||= createPatcherInstance(`revenge.plugins.plugin(${manifest.id})`);
          ctx.storage ||= createStorage(PluginStoragePath(manifest.id), {
            initial: definition.initializeStorage?.() ?? {}
          });
        },
        subscribeModules: definition.onMetroModuleLoad ? () => {
          def.lifecycles.prepare();
          var unsub = subscribeModule.all((id, exports) => definition.onMetroModuleLoad(ctx, id, exports, unsub));
          def.status = PluginStatus.Started;
        } : void 0,
        beforeAppRender: definition.beforeAppRender,
        afterAppRender: definition.afterAppRender,
        beforeStop: definition.beforeStop
      },
      state: lazyValue(() => pluginsStates[manifest.id] ??= {
        // Core plugins are enabled by default
        // While external plugins are disabled by default
        enabled: options.enabled,
        errors: []
      }),
      get status() {
        return status;
      },
      set status(val) {
        status = val;
        if (!this.stopped) this.state.errors = [];
      },
      get enabled() {
        return this.state.enabled;
      },
      set enabled(value) {
        if (!this.manageable) return;
        this.state.enabled = value;
      },
      get stopped() {
        return this.status === PluginStatus.Stopped;
      },
      SettingsComponent: definition.settings,
      disable() {
        if (!this.manageable) throw new Error(`Cannot disable unmanageable plugin: ${this.id}`);
        this.enabled = false;
        if (!this.stopped) return this.stop();
        return DefaultPluginStopConfig;
      },
      enable() {
        if (!this.manageable) throw new Error(`Cannot enable unmanageable plugin: ${this.id}`);
        this.enabled = true;
      },
      errors: [],
      start() {
        return _async_to_generator(function* () {
          var handleError = (e) => {
            this.errors.push(e);
            this.disable();
          };
          if (!this.enabled) return handleError(new Error(`Plugin "${this.id}" must be enabled before starting`));
          if (!this.stopped) return handleError(new Error(`Plugin "${this.id}" is already started`));
          logger3.log(`Starting plugin: ${this.id}`);
          this.status = PluginStatus.Starting;
          if (isAppRendered && this.lifecycles.beforeAppRender) return handleError(new Error(`Plugin "${this.id}" requires running before app is initialized`));
          this.lifecycles.prepare();
          this.lifecycles.subscribeModules?.();
          if (this.lifecycles.beforeAppRender) {
            try {
              ctx.context.beforeAppRender = yield this.lifecycles.beforeAppRender(ctx);
            } catch (e) {
              return handleError(new Error(`Plugin "${this.id}" encountered an error when running lifecycle "beforeAppRender": ${e}`, {
                cause: e
              }));
            }
          }
          if (!this.lifecycles.afterAppRender) return void (this.status = PluginStatus.Started);
          var _this = this;
          var callback = /* @__PURE__ */ function() {
            var _ref = _async_to_generator(function* () {
              try {
                yield awaitStorage(ctx.storage);
                ctx.context.afterAppRender = yield _this.lifecycles.afterAppRender(ctx);
                _this.status = PluginStatus.Started;
              } catch (e) {
                return handleError(new Error(`Plugin "${_this.id}" encountered an error when running lifecycle "afterAppRender": ${e}`, {
                  cause: e
                }));
              }
            });
            return function callback2() {
              return _ref.apply(this, arguments);
            };
          }();
          if (isAppRendered) callback();
          else afterAppRender(callback);
        }).apply(this);
      },
      stop() {
        if (this.stopped) return DefaultPluginStopConfig;
        logger3.log(`Stopping plugin: ${this.id}`);
        var stopConfig = DefaultPluginStopConfig;
        try {
          var _$val = this.lifecycles.beforeStop?.(ctx);
          stopConfig = Object.assign(DefaultPluginStopConfig, _$val);
        } catch (e) {
          this.errors.push(new Error(`Plugin "${this.id}" encountered an error when running lifecycle "beforeStop": ${e}`, {
            cause: e
          }));
        }
        if (this.errors.length) {
          this.state.errors.push(...this.errors);
          var msg = `Plugin "${this.id}" encountered ${this.errors.length} errors
${this.errors.map(getErrorStack).join("\n")}`;
          logger3.error(msg);
          throw new AggregateError(this.errors, msg);
        }
        for (var cleanup of cleanups) cleanup();
        if (!ctx.patcher.destroyed) ctx.patcher.destroy();
        this.status = PluginStatus.Stopped;
        return stopConfig;
      }
    };
    objectFreeze(def);
    objectSeal(def);
    var ctx = {
      patcher: null,
      storage: null,
      context: {
        beforeAppRender: null,
        afterAppRender: null
      },
      revenge: lazyValue(() => revenge),
      cleanup(...funcs) {
        for (var cleanup of funcs) cleanups.add(cleanup);
      },
      plugin: makePluginDefinitionProxy(def)
    };
    registeredPlugins[manifest.id] = def;
    return def;
  }
  function makePluginDefinitionProxy(def) {
    return new Proxy(def, {
      get(target, prop) {
        if (WhitelistedPluginObjectKeys.includes(prop)) return target[prop];
        return void 0;
      },
      has(target, p) {
        return WhitelistedPluginObjectKeys.includes(p) && p in target;
      },
      defineProperty() {
        throw new Error("Cannot define internal plugin definition properties");
      },
      ownKeys(target) {
        return Object.keys(target).filter((key) => WhitelistedPluginObjectKeys.includes(key));
      },
      set() {
        throw new Error("Cannot set internal plugin definition properties");
      }
    });
  }
  var registeredPlugins, externalPluginsMetadata;
  var init_internals = __esm({
    "libraries/plugins/src/internals.ts"() {
      "use strict";
      init_async_to_generator();
      init_src4();
      init_metro();
      init_src2();
      init_constants2();
      init_src7();
      init_paths();
      init_src6();
      init_errors();
      init_functions();
      init_lazy();
      init_shared3();
      registeredPlugins = {};
      externalPluginsMetadata = createStorage(ExternalPluginsMetadataFilePath);
    }
  });

  // node_modules/uzip/UZIP.js
  var require_UZIP = __commonJS({
    "node_modules/uzip/UZIP.js"(exports, module) {
      var UZIP = {};
      if (typeof module == "object") module.exports = UZIP;
      UZIP["parse"] = function(buf, onlyNames) {
        var rUs = UZIP.bin.readUshort, rUi = UZIP.bin.readUint, o = 0, out = {};
        var data = new Uint8Array(buf);
        var eocd = data.length - 4;
        while (rUi(data, eocd) != 101010256) eocd--;
        var o = eocd;
        o += 4;
        o += 4;
        var cnu = rUs(data, o);
        o += 2;
        var cnt = rUs(data, o);
        o += 2;
        var csize = rUi(data, o);
        o += 4;
        var coffs = rUi(data, o);
        o += 4;
        o = coffs;
        for (var i = 0; i < cnu; i++) {
          var sign2 = rUi(data, o);
          o += 4;
          o += 4;
          o += 4;
          o += 4;
          var crc32 = rUi(data, o);
          o += 4;
          var csize = rUi(data, o);
          o += 4;
          var usize = rUi(data, o);
          o += 4;
          var nl = rUs(data, o), el = rUs(data, o + 2), cl = rUs(data, o + 4);
          o += 6;
          o += 8;
          var roff = rUi(data, o);
          o += 4;
          o += nl + el + cl;
          UZIP._readLocal(data, roff, out, csize, usize, onlyNames);
        }
        return out;
      };
      UZIP._readLocal = function(data, o, out, csize, usize, onlyNames) {
        var rUs = UZIP.bin.readUshort, rUi = UZIP.bin.readUint;
        var sign2 = rUi(data, o);
        o += 4;
        var ver = rUs(data, o);
        o += 2;
        var gpflg = rUs(data, o);
        o += 2;
        var cmpr = rUs(data, o);
        o += 2;
        var time = rUi(data, o);
        o += 4;
        var crc32 = rUi(data, o);
        o += 4;
        o += 8;
        var nlen = rUs(data, o);
        o += 2;
        var elen = rUs(data, o);
        o += 2;
        var name = UZIP.bin.readUTF8(data, o, nlen);
        o += nlen;
        o += elen;
        if (onlyNames) {
          out[name] = {
            size: usize,
            csize
          };
          return;
        }
        var file = new Uint8Array(data.buffer, o);
        if (false) {
        } else if (cmpr == 0) out[name] = new Uint8Array(file.buffer.slice(o, o + csize));
        else if (cmpr == 8) {
          var buf = new Uint8Array(usize);
          UZIP.inflateRaw(file, buf);
          out[name] = buf;
        } else throw "unknown compression method: " + cmpr;
      };
      UZIP.inflateRaw = function(file, buf) {
        return UZIP.F.inflate(file, buf);
      };
      UZIP.inflate = function(file, buf) {
        var CMF = file[0], FLG = file[1];
        var CM = CMF & 15, CINFO = CMF >>> 4;
        return UZIP.inflateRaw(new Uint8Array(file.buffer, file.byteOffset + 2, file.length - 6), buf);
      };
      UZIP.deflate = function(data, opts) {
        if (opts == null) opts = {
          level: 6
        };
        var off = 0, buf = new Uint8Array(50 + Math.floor(data.length * 1.1));
        buf[off] = 120;
        buf[off + 1] = 156;
        off += 2;
        off = UZIP.F.deflateRaw(data, buf, off, opts.level);
        var crc = UZIP.adler(data, 0, data.length);
        buf[off + 0] = crc >>> 24 & 255;
        buf[off + 1] = crc >>> 16 & 255;
        buf[off + 2] = crc >>> 8 & 255;
        buf[off + 3] = crc >>> 0 & 255;
        return new Uint8Array(buf.buffer, 0, off + 4);
      };
      UZIP.deflateRaw = function(data, opts) {
        if (opts == null) opts = {
          level: 6
        };
        var buf = new Uint8Array(50 + Math.floor(data.length * 1.1));
        var off = UZIP.F.deflateRaw(data, buf, off, opts.level);
        return new Uint8Array(buf.buffer, 0, off);
      };
      UZIP.encode = function(obj, noCmpr) {
        if (noCmpr == null) noCmpr = false;
        var tot = 0, wUi = UZIP.bin.writeUint, wUs = UZIP.bin.writeUshort;
        var zpd = {};
        for (var p in obj) {
          var cpr = !UZIP._noNeed(p) && !noCmpr, buf = obj[p], crc = UZIP.crc.crc(buf, 0, buf.length);
          zpd[p] = {
            cpr,
            usize: buf.length,
            crc,
            file: cpr ? UZIP.deflateRaw(buf) : buf
          };
        }
        for (var p in zpd) tot += zpd[p].file.length + 30 + 46 + 2 * UZIP.bin.sizeUTF8(p);
        tot += 22;
        var data = new Uint8Array(tot), o = 0;
        var fof = [];
        for (var p in zpd) {
          var file = zpd[p];
          fof.push(o);
          o = UZIP._writeHeader(data, o, p, file, 0);
        }
        var i = 0, ioff = o;
        for (var p in zpd) {
          var file = zpd[p];
          fof.push(o);
          o = UZIP._writeHeader(data, o, p, file, 1, fof[i++]);
        }
        var csize = o - ioff;
        wUi(data, o, 101010256);
        o += 4;
        o += 4;
        wUs(data, o, i);
        o += 2;
        wUs(data, o, i);
        o += 2;
        wUi(data, o, csize);
        o += 4;
        wUi(data, o, ioff);
        o += 4;
        o += 2;
        return data.buffer;
      };
      UZIP._noNeed = function(fn) {
        var ext = fn.split(".").pop().toLowerCase();
        return "png,jpg,jpeg,zip".indexOf(ext) != -1;
      };
      UZIP._writeHeader = function(data, o, p, obj, t, roff) {
        var wUi = UZIP.bin.writeUint, wUs = UZIP.bin.writeUshort;
        var file = obj.file;
        wUi(data, o, t == 0 ? 67324752 : 33639248);
        o += 4;
        if (t == 1) o += 2;
        wUs(data, o, 20);
        o += 2;
        wUs(data, o, 0);
        o += 2;
        wUs(data, o, obj.cpr ? 8 : 0);
        o += 2;
        wUi(data, o, 0);
        o += 4;
        wUi(data, o, obj.crc);
        o += 4;
        wUi(data, o, file.length);
        o += 4;
        wUi(data, o, obj.usize);
        o += 4;
        wUs(data, o, UZIP.bin.sizeUTF8(p));
        o += 2;
        wUs(data, o, 0);
        o += 2;
        if (t == 1) {
          o += 2;
          o += 2;
          o += 6;
          wUi(data, o, roff);
          o += 4;
        }
        var nlen = UZIP.bin.writeUTF8(data, o, p);
        o += nlen;
        if (t == 0) {
          data.set(file, o);
          o += file.length;
        }
        return o;
      };
      UZIP.crc = {
        table: function() {
          var tab = new Uint32Array(256);
          for (var n = 0; n < 256; n++) {
            var c2 = n;
            for (var k = 0; k < 8; k++) {
              if (c2 & 1) c2 = 3988292384 ^ c2 >>> 1;
              else c2 = c2 >>> 1;
            }
            tab[n] = c2;
          }
          return tab;
        }(),
        update: function update(c2, buf, off, len) {
          for (var i = 0; i < len; i++) c2 = UZIP.crc.table[(c2 ^ buf[off + i]) & 255] ^ c2 >>> 8;
          return c2;
        },
        crc: function crc(b3, o, l) {
          return UZIP.crc.update(4294967295, b3, o, l) ^ 4294967295;
        }
      };
      UZIP.adler = function(data, o, len) {
        var a = 1, b3 = 0;
        var off = o, end = o + len;
        while (off < end) {
          var eend = Math.min(off + 5552, end);
          while (off < eend) {
            a += data[off++];
            b3 += a;
          }
          a = a % 65521;
          b3 = b3 % 65521;
        }
        return b3 << 16 | a;
      };
      UZIP.bin = {
        readUshort: function readUshort(buff, p) {
          return buff[p] | buff[p + 1] << 8;
        },
        writeUshort: function writeUshort(buff, p, n) {
          buff[p] = n & 255;
          buff[p + 1] = n >> 8 & 255;
        },
        readUint: function readUint(buff, p) {
          return buff[p + 3] * (256 * 256 * 256) + (buff[p + 2] << 16 | buff[p + 1] << 8 | buff[p]);
        },
        writeUint: function writeUint(buff, p, n) {
          buff[p] = n & 255;
          buff[p + 1] = n >> 8 & 255;
          buff[p + 2] = n >> 16 & 255;
          buff[p + 3] = n >> 24 & 255;
        },
        readASCII: function readASCII(buff, p, l) {
          var s = "";
          for (var i = 0; i < l; i++) s += String.fromCharCode(buff[p + i]);
          return s;
        },
        writeASCII: function writeASCII(data, p, s) {
          for (var i = 0; i < s.length; i++) data[p + i] = s.charCodeAt(i);
        },
        pad: function pad(n) {
          return n.length < 2 ? "0" + n : n;
        },
        readUTF8: function readUTF8(buff, p, l) {
          var s = "", ns;
          for (var i = 0; i < l; i++) s += "%" + UZIP.bin.pad(buff[p + i].toString(16));
          try {
            ns = decodeURIComponent(s);
          } catch (e) {
            return UZIP.bin.readASCII(buff, p, l);
          }
          return ns;
        },
        writeUTF8: function writeUTF8(buff, p, str2) {
          var strl = str2.length, i = 0;
          for (var ci = 0; ci < strl; ci++) {
            var code = str2.charCodeAt(ci);
            if ((code & 4294967295 - (1 << 7) + 1) == 0) {
              buff[p + i] = code;
              i++;
            } else if ((code & 4294967295 - (1 << 11) + 1) == 0) {
              buff[p + i] = 192 | code >> 6;
              buff[p + i + 1] = 128 | code >> 0 & 63;
              i += 2;
            } else if ((code & 4294967295 - (1 << 16) + 1) == 0) {
              buff[p + i] = 224 | code >> 12;
              buff[p + i + 1] = 128 | code >> 6 & 63;
              buff[p + i + 2] = 128 | code >> 0 & 63;
              i += 3;
            } else if ((code & 4294967295 - (1 << 21) + 1) == 0) {
              buff[p + i] = 240 | code >> 18;
              buff[p + i + 1] = 128 | code >> 12 & 63;
              buff[p + i + 2] = 128 | code >> 6 & 63;
              buff[p + i + 3] = 128 | code >> 0 & 63;
              i += 4;
            } else throw "e";
          }
          return i;
        },
        sizeUTF8: function sizeUTF8(str2) {
          var strl = str2.length, i = 0;
          for (var ci = 0; ci < strl; ci++) {
            var code = str2.charCodeAt(ci);
            if ((code & 4294967295 - (1 << 7) + 1) == 0) {
              i++;
            } else if ((code & 4294967295 - (1 << 11) + 1) == 0) {
              i += 2;
            } else if ((code & 4294967295 - (1 << 16) + 1) == 0) {
              i += 3;
            } else if ((code & 4294967295 - (1 << 21) + 1) == 0) {
              i += 4;
            } else throw "e";
          }
          return i;
        }
      };
      UZIP.F = {};
      UZIP.F.deflateRaw = function(data, out, opos, lvl) {
        var opts = [
          /*
          	 ush good_length; /* reduce lazy search above this match length 
          	 ush max_lazy;    /* do not perform lazy search above this match length 
                  ush nice_length; /* quit search above this match length 
          */
          /*      good lazy nice chain */
          /* 0 */
          [
            0,
            0,
            0,
            0,
            0
          ],
          /* store only */
          /* 1 */
          [
            4,
            4,
            8,
            4,
            0
          ],
          /* max speed, no lazy matches */
          /* 2 */
          [
            4,
            5,
            16,
            8,
            0
          ],
          /* 3 */
          [
            4,
            6,
            16,
            16,
            0
          ],
          /* 4 */
          [
            4,
            10,
            16,
            32,
            0
          ],
          /* lazy matches */
          /* 5 */
          [
            8,
            16,
            32,
            32,
            0
          ],
          /* 6 */
          [
            8,
            16,
            128,
            128,
            0
          ],
          /* 7 */
          [
            8,
            32,
            128,
            256,
            0
          ],
          /* 8 */
          [
            32,
            128,
            258,
            1024,
            1
          ],
          /* 9 */
          [
            32,
            258,
            258,
            4096,
            1
          ]
        ];
        var opt = opts[lvl];
        var U2 = UZIP.F.U, goodIndex = UZIP.F._goodIndex, hash = UZIP.F._hash, putsE = UZIP.F._putsE;
        var i = 0, pos = opos << 3, cvrd = 0, dlen = data.length;
        if (lvl == 0) {
          while (i < dlen) {
            var len = Math.min(65535, dlen - i);
            putsE(out, pos, i + len == dlen ? 1 : 0);
            pos = UZIP.F._copyExact(data, i, len, out, pos + 8);
            i += len;
          }
          return pos >>> 3;
        }
        var lits = U2.lits, strt = U2.strt, prev = U2.prev, li = 0, lc = 0, bs = 0, ebits = 0, c2 = 0, nc = 0;
        if (dlen > 2) {
          nc = UZIP.F._hash(data, 0);
          strt[nc] = 0;
        }
        var nmch = 0, nmci = 0;
        for (i = 0; i < dlen; i++) {
          c2 = nc;
          if (i + 1 < dlen - 2) {
            nc = UZIP.F._hash(data, i + 1);
            var ii = i + 1 & 32767;
            prev[ii] = strt[nc];
            strt[nc] = ii;
          }
          if (cvrd <= i) {
            if ((li > 14e3 || lc > 26697) && dlen - i > 100) {
              if (cvrd < i) {
                lits[li] = i - cvrd;
                li += 2;
                cvrd = i;
              }
              pos = UZIP.F._writeBlock(i == dlen - 1 || cvrd == dlen ? 1 : 0, lits, li, ebits, data, bs, i - bs, out, pos);
              li = lc = ebits = 0;
              bs = i;
            }
            var mch = 0;
            if (i < dlen - 2) mch = UZIP.F._bestMatch(data, i, prev, c2, Math.min(opt[2], dlen - i), opt[3]);
            var len = mch >>> 16, dst = mch & 65535;
            if (mch != 0) {
              var len = mch >>> 16, dst = mch & 65535;
              var lgi = goodIndex(len, U2.of0);
              U2.lhst[257 + lgi]++;
              var dgi = goodIndex(dst, U2.df0);
              U2.dhst[dgi]++;
              ebits += U2.exb[lgi] + U2.dxb[dgi];
              lits[li] = len << 23 | i - cvrd;
              lits[li + 1] = dst << 16 | lgi << 8 | dgi;
              li += 2;
              cvrd = i + len;
            } else {
              U2.lhst[data[i]]++;
            }
            lc++;
          }
        }
        if (bs != i || data.length == 0) {
          if (cvrd < i) {
            lits[li] = i - cvrd;
            li += 2;
            cvrd = i;
          }
          pos = UZIP.F._writeBlock(1, lits, li, ebits, data, bs, i - bs, out, pos);
          li = 0;
          lc = 0;
          li = lc = ebits = 0;
          bs = i;
        }
        while ((pos & 7) != 0) pos++;
        return pos >>> 3;
      };
      UZIP.F._bestMatch = function(data, i, prev, c2, nice, chain) {
        var ci = i & 32767, pi = prev[ci];
        var dif = ci - pi + (1 << 15) & 32767;
        if (pi == ci || c2 != UZIP.F._hash(data, i - dif)) return 0;
        var tl = 0, td = 0;
        var dlim = Math.min(32767, i);
        while (dif <= dlim && --chain != 0 && pi != ci) {
          if (tl == 0 || data[i + tl] == data[i + tl - dif]) {
            var cl = UZIP.F._howLong(data, i, dif);
            if (cl > tl) {
              tl = cl;
              td = dif;
              if (tl >= nice) break;
              if (dif + 2 < cl) cl = dif + 2;
              var maxd = 0;
              for (var j = 0; j < cl - 2; j++) {
                var ei = i - dif + j + (1 << 15) & 32767;
                var li = prev[ei];
                var curd = ei - li + (1 << 15) & 32767;
                if (curd > maxd) {
                  maxd = curd;
                  pi = ei;
                }
              }
            }
          }
          ci = pi;
          pi = prev[ci];
          dif += ci - pi + (1 << 15) & 32767;
        }
        return tl << 16 | td;
      };
      UZIP.F._howLong = function(data, i, dif) {
        if (data[i] != data[i - dif] || data[i + 1] != data[i + 1 - dif] || data[i + 2] != data[i + 2 - dif]) return 0;
        var oi = i, l = Math.min(data.length, i + 258);
        i += 3;
        while (i < l && data[i] == data[i - dif]) i++;
        return i - oi;
      };
      UZIP.F._hash = function(data, i) {
        return (data[i] << 8 | data[i + 1]) + (data[i + 2] << 4) & 65535;
      };
      UZIP.saved = 0;
      UZIP.F._writeBlock = function(BFINAL, lits, li, ebits, data, o0, l0, out, pos) {
        var U2 = UZIP.F.U, putsF = UZIP.F._putsF, putsE = UZIP.F._putsE;
        var T2, ML, MD, MH, numl, numd, numh, lset, dset;
        U2.lhst[256]++;
        T2 = UZIP.F.getTrees();
        ML = T2[0];
        MD = T2[1];
        MH = T2[2];
        numl = T2[3];
        numd = T2[4];
        numh = T2[5];
        lset = T2[6];
        dset = T2[7];
        var cstSize = ((pos + 3 & 7) == 0 ? 0 : 8 - (pos + 3 & 7)) + 32 + (l0 << 3);
        var fxdSize = ebits + UZIP.F.contSize(U2.fltree, U2.lhst) + UZIP.F.contSize(U2.fdtree, U2.dhst);
        var dynSize = ebits + UZIP.F.contSize(U2.ltree, U2.lhst) + UZIP.F.contSize(U2.dtree, U2.dhst);
        dynSize += 14 + 3 * numh + UZIP.F.contSize(U2.itree, U2.ihst) + (U2.ihst[16] * 2 + U2.ihst[17] * 3 + U2.ihst[18] * 7);
        for (var j = 0; j < 286; j++) U2.lhst[j] = 0;
        for (var j = 0; j < 30; j++) U2.dhst[j] = 0;
        for (var j = 0; j < 19; j++) U2.ihst[j] = 0;
        var BTYPE = cstSize < fxdSize && cstSize < dynSize ? 0 : fxdSize < dynSize ? 1 : 2;
        putsF(out, pos, BFINAL);
        putsF(out, pos + 1, BTYPE);
        pos += 3;
        var opos = pos;
        if (BTYPE == 0) {
          while ((pos & 7) != 0) pos++;
          pos = UZIP.F._copyExact(data, o0, l0, out, pos);
        } else {
          var ltree, dtree;
          if (BTYPE == 1) {
            ltree = U2.fltree;
            dtree = U2.fdtree;
          }
          if (BTYPE == 2) {
            UZIP.F.makeCodes(U2.ltree, ML);
            UZIP.F.revCodes(U2.ltree, ML);
            UZIP.F.makeCodes(U2.dtree, MD);
            UZIP.F.revCodes(U2.dtree, MD);
            UZIP.F.makeCodes(U2.itree, MH);
            UZIP.F.revCodes(U2.itree, MH);
            ltree = U2.ltree;
            dtree = U2.dtree;
            putsE(out, pos, numl - 257);
            pos += 5;
            putsE(out, pos, numd - 1);
            pos += 5;
            putsE(out, pos, numh - 4);
            pos += 4;
            for (var i = 0; i < numh; i++) putsE(out, pos + i * 3, U2.itree[(U2.ordr[i] << 1) + 1]);
            pos += 3 * numh;
            pos = UZIP.F._codeTiny(lset, U2.itree, out, pos);
            pos = UZIP.F._codeTiny(dset, U2.itree, out, pos);
          }
          var off = o0;
          for (var si = 0; si < li; si += 2) {
            var qb = lits[si], len = qb >>> 23, end = off + (qb & (1 << 23) - 1);
            while (off < end) pos = UZIP.F._writeLit(data[off++], ltree, out, pos);
            if (len != 0) {
              var qc = lits[si + 1], dst = qc >> 16, lgi = qc >> 8 & 255, dgi = qc & 255;
              pos = UZIP.F._writeLit(257 + lgi, ltree, out, pos);
              putsE(out, pos, len - U2.of0[lgi]);
              pos += U2.exb[lgi];
              pos = UZIP.F._writeLit(dgi, dtree, out, pos);
              putsF(out, pos, dst - U2.df0[dgi]);
              pos += U2.dxb[dgi];
              off += len;
            }
          }
          pos = UZIP.F._writeLit(256, ltree, out, pos);
        }
        return pos;
      };
      UZIP.F._copyExact = function(data, off, len, out, pos) {
        var p8 = pos >>> 3;
        out[p8] = len;
        out[p8 + 1] = len >>> 8;
        out[p8 + 2] = 255 - out[p8];
        out[p8 + 3] = 255 - out[p8 + 1];
        p8 += 4;
        out.set(new Uint8Array(data.buffer, off, len), p8);
        return pos + (len + 4 << 3);
      };
      UZIP.F.getTrees = function() {
        var U2 = UZIP.F.U;
        var ML = UZIP.F._hufTree(U2.lhst, U2.ltree, 15);
        var MD = UZIP.F._hufTree(U2.dhst, U2.dtree, 15);
        var lset = [], numl = UZIP.F._lenCodes(U2.ltree, lset);
        var dset = [], numd = UZIP.F._lenCodes(U2.dtree, dset);
        for (var i = 0; i < lset.length; i += 2) U2.ihst[lset[i]]++;
        for (var i = 0; i < dset.length; i += 2) U2.ihst[dset[i]]++;
        var MH = UZIP.F._hufTree(U2.ihst, U2.itree, 7);
        var numh = 19;
        while (numh > 4 && U2.itree[(U2.ordr[numh - 1] << 1) + 1] == 0) numh--;
        return [
          ML,
          MD,
          MH,
          numl,
          numd,
          numh,
          lset,
          dset
        ];
      };
      UZIP.F.getSecond = function(a) {
        var b3 = [];
        for (var i = 0; i < a.length; i += 2) b3.push(a[i + 1]);
        return b3;
      };
      UZIP.F.nonZero = function(a) {
        var b3 = "";
        for (var i = 0; i < a.length; i += 2) if (a[i + 1] != 0) b3 += (i >> 1) + ",";
        return b3;
      };
      UZIP.F.contSize = function(tree, hst) {
        var s = 0;
        for (var i = 0; i < hst.length; i++) s += hst[i] * tree[(i << 1) + 1];
        return s;
      };
      UZIP.F._codeTiny = function(set, tree, out, pos) {
        for (var i = 0; i < set.length; i += 2) {
          var l = set[i], rst = set[i + 1];
          pos = UZIP.F._writeLit(l, tree, out, pos);
          var rsl = l == 16 ? 2 : l == 17 ? 3 : 7;
          if (l > 15) {
            UZIP.F._putsE(out, pos, rst, rsl);
            pos += rsl;
          }
        }
        return pos;
      };
      UZIP.F._lenCodes = function(tree, set) {
        var len = tree.length;
        while (len != 2 && tree[len - 1] == 0) len -= 2;
        for (var i = 0; i < len; i += 2) {
          var l = tree[i + 1], nxt = i + 3 < len ? tree[i + 3] : -1, nnxt = i + 5 < len ? tree[i + 5] : -1, prv = i == 0 ? -1 : tree[i - 1];
          if (l == 0 && nxt == l && nnxt == l) {
            var lz = i + 5;
            while (lz + 2 < len && tree[lz + 2] == l) lz += 2;
            var zc = Math.min(lz + 1 - i >>> 1, 138);
            if (zc < 11) set.push(17, zc - 3);
            else set.push(18, zc - 11);
            i += zc * 2 - 2;
          } else if (l == prv && nxt == l && nnxt == l) {
            var lz = i + 5;
            while (lz + 2 < len && tree[lz + 2] == l) lz += 2;
            var zc = Math.min(lz + 1 - i >>> 1, 6);
            set.push(16, zc - 3);
            i += zc * 2 - 2;
          } else set.push(l, 0);
        }
        return len >>> 1;
      };
      UZIP.F._hufTree = function(hst, tree, MAXL) {
        var list = [], hl = hst.length, tl = tree.length, i = 0;
        for (i = 0; i < tl; i += 2) {
          tree[i] = 0;
          tree[i + 1] = 0;
        }
        for (i = 0; i < hl; i++) if (hst[i] != 0) list.push({
          lit: i,
          f: hst[i]
        });
        var end = list.length, l2 = list.slice(0);
        if (end == 0) return 0;
        if (end == 1) {
          var lit = list[0].lit, l2 = lit == 0 ? 1 : 0;
          tree[(lit << 1) + 1] = 1;
          tree[(l2 << 1) + 1] = 1;
          return 1;
        }
        list.sort(function(a2, b4) {
          return a2.f - b4.f;
        });
        var a = list[0], b3 = list[1], i0 = 0, i1 = 1, i2 = 2;
        list[0] = {
          lit: -1,
          f: a.f + b3.f,
          l: a,
          r: b3,
          d: 0
        };
        while (i1 != end - 1) {
          if (i0 != i1 && (i2 == end || list[i0].f < list[i2].f)) {
            a = list[i0++];
          } else {
            a = list[i2++];
          }
          if (i0 != i1 && (i2 == end || list[i0].f < list[i2].f)) {
            b3 = list[i0++];
          } else {
            b3 = list[i2++];
          }
          list[i1++] = {
            lit: -1,
            f: a.f + b3.f,
            l: a,
            r: b3
          };
        }
        var maxl = UZIP.F.setDepth(list[i1 - 1], 0);
        if (maxl > MAXL) {
          UZIP.F.restrictDepth(l2, MAXL, maxl);
          maxl = MAXL;
        }
        for (i = 0; i < end; i++) tree[(l2[i].lit << 1) + 1] = l2[i].d;
        return maxl;
      };
      UZIP.F.setDepth = function(t, d) {
        if (t.lit != -1) {
          t.d = d;
          return d;
        }
        return Math.max(UZIP.F.setDepth(t.l, d + 1), UZIP.F.setDepth(t.r, d + 1));
      };
      UZIP.F.restrictDepth = function(dps, MD, maxl) {
        var i = 0, bCost = 1 << maxl - MD, dbt = 0;
        dps.sort(function(a, b3) {
          return b3.d == a.d ? a.f - b3.f : b3.d - a.d;
        });
        for (i = 0; i < dps.length; i++) if (dps[i].d > MD) {
          var od = dps[i].d;
          dps[i].d = MD;
          dbt += bCost - (1 << maxl - od);
        } else break;
        dbt = dbt >>> maxl - MD;
        while (dbt > 0) {
          var od = dps[i].d;
          if (od < MD) {
            dps[i].d++;
            dbt -= 1 << MD - od - 1;
          } else i++;
        }
        for (; i >= 0; i--) if (dps[i].d == MD && dbt < 0) {
          dps[i].d--;
          dbt++;
        }
        if (dbt != 0) console.log("debt left");
      };
      UZIP.F._goodIndex = function(v2, arr) {
        var i = 0;
        if (arr[i | 16] <= v2) i |= 16;
        if (arr[i | 8] <= v2) i |= 8;
        if (arr[i | 4] <= v2) i |= 4;
        if (arr[i | 2] <= v2) i |= 2;
        if (arr[i | 1] <= v2) i |= 1;
        return i;
      };
      UZIP.F._writeLit = function(ch, ltree, out, pos) {
        UZIP.F._putsF(out, pos, ltree[ch << 1]);
        return pos + ltree[(ch << 1) + 1];
      };
      UZIP.F.inflate = function(data, buf) {
        var u8 = Uint8Array;
        if (data[0] == 3 && data[1] == 0) return buf ? buf : new u8(0);
        var F3 = UZIP.F, bitsF = F3._bitsF, bitsE = F3._bitsE, decodeTiny = F3._decodeTiny, makeCodes = F3.makeCodes, codes2map = F3.codes2map, get17 = F3._get17;
        var U2 = F3.U;
        var noBuf = buf == null;
        if (noBuf) buf = new u8(data.length >>> 2 << 3);
        var BFINAL = 0, BTYPE = 0, HLIT = 0, HDIST = 0, HCLEN = 0, ML = 0, MD = 0;
        var off = 0, pos = 0;
        var lmap, dmap;
        while (BFINAL == 0) {
          BFINAL = bitsF(data, pos, 1);
          BTYPE = bitsF(data, pos + 1, 2);
          pos += 3;
          if (BTYPE == 0) {
            if ((pos & 7) != 0) pos += 8 - (pos & 7);
            var p8 = (pos >>> 3) + 4, len = data[p8 - 4] | data[p8 - 3] << 8;
            if (noBuf) buf = UZIP.F._check(buf, off + len);
            buf.set(new u8(data.buffer, data.byteOffset + p8, len), off);
            pos = p8 + len << 3;
            off += len;
            continue;
          }
          if (noBuf) buf = UZIP.F._check(buf, off + (1 << 17));
          if (BTYPE == 1) {
            lmap = U2.flmap;
            dmap = U2.fdmap;
            ML = (1 << 9) - 1;
            MD = (1 << 5) - 1;
          }
          if (BTYPE == 2) {
            HLIT = bitsE(data, pos, 5) + 257;
            HDIST = bitsE(data, pos + 5, 5) + 1;
            HCLEN = bitsE(data, pos + 10, 4) + 4;
            pos += 14;
            var ppos = pos;
            for (var i = 0; i < 38; i += 2) {
              U2.itree[i] = 0;
              U2.itree[i + 1] = 0;
            }
            var tl = 1;
            for (var i = 0; i < HCLEN; i++) {
              var l = bitsE(data, pos + i * 3, 3);
              U2.itree[(U2.ordr[i] << 1) + 1] = l;
              if (l > tl) tl = l;
            }
            pos += 3 * HCLEN;
            makeCodes(U2.itree, tl);
            codes2map(U2.itree, tl, U2.imap);
            lmap = U2.lmap;
            dmap = U2.dmap;
            pos = decodeTiny(U2.imap, (1 << tl) - 1, HLIT + HDIST, data, pos, U2.ttree);
            var mx0 = F3._copyOut(U2.ttree, 0, HLIT, U2.ltree);
            ML = (1 << mx0) - 1;
            var mx1 = F3._copyOut(U2.ttree, HLIT, HDIST, U2.dtree);
            MD = (1 << mx1) - 1;
            makeCodes(U2.ltree, mx0);
            codes2map(U2.ltree, mx0, lmap);
            makeCodes(U2.dtree, mx1);
            codes2map(U2.dtree, mx1, dmap);
          }
          while (true) {
            var code = lmap[get17(data, pos) & ML];
            pos += code & 15;
            var lit = code >>> 4;
            if (lit >>> 8 == 0) {
              buf[off++] = lit;
            } else if (lit == 256) {
              break;
            } else {
              var end = off + lit - 254;
              if (lit > 264) {
                var ebs = U2.ldef[lit - 257];
                end = off + (ebs >>> 3) + bitsE(data, pos, ebs & 7);
                pos += ebs & 7;
              }
              var dcode = dmap[get17(data, pos) & MD];
              pos += dcode & 15;
              var dlit = dcode >>> 4;
              var dbs = U2.ddef[dlit], dst = (dbs >>> 4) + bitsF(data, pos, dbs & 15);
              pos += dbs & 15;
              if (noBuf) buf = UZIP.F._check(buf, off + (1 << 17));
              while (off < end) {
                buf[off] = buf[off++ - dst];
                buf[off] = buf[off++ - dst];
                buf[off] = buf[off++ - dst];
                buf[off] = buf[off++ - dst];
              }
              off = end;
            }
          }
        }
        return buf.length == off ? buf : buf.slice(0, off);
      };
      UZIP.F._check = function(buf, len) {
        var bl = buf.length;
        if (len <= bl) return buf;
        var nbuf = new Uint8Array(Math.max(bl << 1, len));
        nbuf.set(buf, 0);
        return nbuf;
      };
      UZIP.F._decodeTiny = function(lmap, LL, len, data, pos, tree) {
        var bitsE = UZIP.F._bitsE, get17 = UZIP.F._get17;
        var i = 0;
        while (i < len) {
          var code = lmap[get17(data, pos) & LL];
          pos += code & 15;
          var lit = code >>> 4;
          if (lit <= 15) {
            tree[i] = lit;
            i++;
          } else {
            var ll = 0, n = 0;
            if (lit == 16) {
              n = 3 + bitsE(data, pos, 2);
              pos += 2;
              ll = tree[i - 1];
            } else if (lit == 17) {
              n = 3 + bitsE(data, pos, 3);
              pos += 3;
            } else if (lit == 18) {
              n = 11 + bitsE(data, pos, 7);
              pos += 7;
            }
            var ni = i + n;
            while (i < ni) {
              tree[i] = ll;
              i++;
            }
          }
        }
        return pos;
      };
      UZIP.F._copyOut = function(src, off, len, tree) {
        var mx = 0, i = 0, tl = tree.length >>> 1;
        while (i < len) {
          var v2 = src[i + off];
          tree[i << 1] = 0;
          tree[(i << 1) + 1] = v2;
          if (v2 > mx) mx = v2;
          i++;
        }
        while (i < tl) {
          tree[i << 1] = 0;
          tree[(i << 1) + 1] = 0;
          i++;
        }
        return mx;
      };
      UZIP.F.makeCodes = function(tree, MAX_BITS) {
        var U2 = UZIP.F.U;
        var max_code = tree.length;
        var code, bits, n, i, len;
        var bl_count = U2.bl_count;
        for (var i = 0; i <= MAX_BITS; i++) bl_count[i] = 0;
        for (i = 1; i < max_code; i += 2) bl_count[tree[i]]++;
        var next_code = U2.next_code;
        code = 0;
        bl_count[0] = 0;
        for (bits = 1; bits <= MAX_BITS; bits++) {
          code = code + bl_count[bits - 1] << 1;
          next_code[bits] = code;
        }
        for (n = 0; n < max_code; n += 2) {
          len = tree[n + 1];
          if (len != 0) {
            tree[n] = next_code[len];
            next_code[len]++;
          }
        }
      };
      UZIP.F.codes2map = function(tree, MAX_BITS, map) {
        var max_code = tree.length;
        var U2 = UZIP.F.U, r15 = U2.rev15;
        for (var i = 0; i < max_code; i += 2) if (tree[i + 1] != 0) {
          var lit = i >> 1;
          var cl = tree[i + 1], val = lit << 4 | cl;
          var rest = MAX_BITS - cl, i0 = tree[i] << rest, i1 = i0 + (1 << rest);
          while (i0 != i1) {
            var p0 = r15[i0] >>> 15 - MAX_BITS;
            map[p0] = val;
            i0++;
          }
        }
      };
      UZIP.F.revCodes = function(tree, MAX_BITS) {
        var r15 = UZIP.F.U.rev15, imb = 15 - MAX_BITS;
        for (var i = 0; i < tree.length; i += 2) {
          var i0 = tree[i] << MAX_BITS - tree[i + 1];
          tree[i] = r15[i0] >>> imb;
        }
      };
      UZIP.F._putsE = function(dt, pos, val) {
        val = val << (pos & 7);
        var o = pos >>> 3;
        dt[o] |= val;
        dt[o + 1] |= val >>> 8;
      };
      UZIP.F._putsF = function(dt, pos, val) {
        val = val << (pos & 7);
        var o = pos >>> 3;
        dt[o] |= val;
        dt[o + 1] |= val >>> 8;
        dt[o + 2] |= val >>> 16;
      };
      UZIP.F._bitsE = function(dt, pos, length) {
        return (dt[pos >>> 3] | dt[(pos >>> 3) + 1] << 8) >>> (pos & 7) & (1 << length) - 1;
      };
      UZIP.F._bitsF = function(dt, pos, length) {
        return (dt[pos >>> 3] | dt[(pos >>> 3) + 1] << 8 | dt[(pos >>> 3) + 2] << 16) >>> (pos & 7) & (1 << length) - 1;
      };
      UZIP.F._get17 = function(dt, pos) {
        return (dt[pos >>> 3] | dt[(pos >>> 3) + 1] << 8 | dt[(pos >>> 3) + 2] << 16) >>> (pos & 7);
      };
      UZIP.F._get25 = function(dt, pos) {
        return (dt[pos >>> 3] | dt[(pos >>> 3) + 1] << 8 | dt[(pos >>> 3) + 2] << 16 | dt[(pos >>> 3) + 3] << 24) >>> (pos & 7);
      };
      UZIP.F.U = function() {
        var u16 = Uint16Array, u32 = Uint32Array;
        return {
          next_code: new u16(16),
          bl_count: new u16(16),
          ordr: [
            16,
            17,
            18,
            0,
            8,
            7,
            9,
            6,
            10,
            5,
            11,
            4,
            12,
            3,
            13,
            2,
            14,
            1,
            15
          ],
          of0: [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            13,
            15,
            17,
            19,
            23,
            27,
            31,
            35,
            43,
            51,
            59,
            67,
            83,
            99,
            115,
            131,
            163,
            195,
            227,
            258,
            999,
            999,
            999
          ],
          exb: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            0,
            0,
            0,
            0
          ],
          ldef: new u16(32),
          df0: [
            1,
            2,
            3,
            4,
            5,
            7,
            9,
            13,
            17,
            25,
            33,
            49,
            65,
            97,
            129,
            193,
            257,
            385,
            513,
            769,
            1025,
            1537,
            2049,
            3073,
            4097,
            6145,
            8193,
            12289,
            16385,
            24577,
            65535,
            65535
          ],
          dxb: [
            0,
            0,
            0,
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            8,
            8,
            9,
            9,
            10,
            10,
            11,
            11,
            12,
            12,
            13,
            13,
            0,
            0
          ],
          ddef: new u32(32),
          flmap: new u16(512),
          fltree: [],
          fdmap: new u16(32),
          fdtree: [],
          lmap: new u16(32768),
          ltree: [],
          ttree: [],
          dmap: new u16(32768),
          dtree: [],
          imap: new u16(512),
          itree: [],
          //rev9 : new u16(  512)
          rev15: new u16(1 << 15),
          lhst: new u32(286),
          dhst: new u32(30),
          ihst: new u32(19),
          lits: new u32(15e3),
          strt: new u16(1 << 16),
          prev: new u16(1 << 15)
        };
      }();
      (function() {
        var U2 = UZIP.F.U;
        var len = 1 << 15;
        for (var i = 0; i < len; i++) {
          var x2 = i;
          x2 = (x2 & 2863311530) >>> 1 | (x2 & 1431655765) << 1;
          x2 = (x2 & 3435973836) >>> 2 | (x2 & 858993459) << 2;
          x2 = (x2 & 4042322160) >>> 4 | (x2 & 252645135) << 4;
          x2 = (x2 & 4278255360) >>> 8 | (x2 & 16711935) << 8;
          U2.rev15[i] = (x2 >>> 16 | x2 << 16) >>> 17;
        }
        function pushV(tgt, n, sv) {
          while (n-- != 0) tgt.push(0, sv);
        }
        for (var i = 0; i < 32; i++) {
          U2.ldef[i] = U2.of0[i] << 3 | U2.exb[i];
          U2.ddef[i] = U2.df0[i] << 4 | U2.dxb[i];
        }
        pushV(U2.fltree, 144, 8);
        pushV(U2.fltree, 255 - 143, 9);
        pushV(U2.fltree, 279 - 255, 7);
        pushV(U2.fltree, 287 - 279, 8);
        UZIP.F.makeCodes(U2.fltree, 9);
        UZIP.F.codes2map(U2.fltree, 9, U2.flmap);
        UZIP.F.revCodes(U2.fltree, 9);
        pushV(U2.fdtree, 32, 5);
        UZIP.F.makeCodes(U2.fdtree, 5);
        UZIP.F.codes2map(U2.fdtree, 5, U2.fdmap);
        UZIP.F.revCodes(U2.fdtree, 5);
        pushV(U2.itree, 19, 0);
        pushV(U2.ltree, 286, 0);
        pushV(U2.dtree, 30, 0);
        pushV(U2.ttree, 320, 0);
      })();
    }
  });

  // node_modules/@noble/hashes/esm/_assert.js
  function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  function bytes(b3, ...lengths) {
    if (!isBytes(b3)) throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b3.length)) throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b3.length}`);
  }
  function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
  }
  function output(out, instance) {
    bytes(out);
    var min = instance.outputLen;
    if (out.length < min) {
      throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
  }
  var init_assert = __esm({
    "node_modules/@noble/hashes/esm/_assert.js"() {
    }
  });

  // node_modules/@noble/hashes/esm/utils.js
  function utf8ToBytes(str2) {
    if (typeof str2 !== "string") throw new Error(`utf8ToBytes expected string, got ${typeof str2}`);
    return new Uint8Array(new TextEncoder().encode(str2));
  }
  function toBytes(data) {
    if (typeof data === "string") data = utf8ToBytes(data);
    bytes(data);
    return data;
  }
  function wrapConstructor(hashCons) {
    var hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    var tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  var createView, isLE, Hash, toStr;
  var init_utils2 = __esm({
    "node_modules/@noble/hashes/esm/utils.js"() {
      init_class_call_check();
      init_create_class();
      init_assert();
      createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
      isLE = new Uint8Array(new Uint32Array([
        287454020
      ]).buffer)[0] === 68;
      Hash = /* @__PURE__ */ function() {
        "use strict";
        function Hash2() {
          _class_call_check(this, Hash2);
        }
        _create_class(Hash2, [
          {
            // Safe version that clones internal state
            key: "clone",
            value: function clone() {
              return this._cloneInto();
            }
          }
        ]);
        return Hash2;
      }();
      toStr = {}.toString;
    }
  });

  // node_modules/@noble/hashes/esm/_md.js
  function setBigUint64(view, byteOffset, value, isLE2) {
    if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE2);
    var _32n2 = BigInt(32);
    var _u32_max = BigInt(4294967295);
    var wh = Number(value >> _32n2 & _u32_max);
    var wl = Number(value & _u32_max);
    var h = isLE2 ? 4 : 0;
    var l = isLE2 ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE2);
    view.setUint32(byteOffset + l, wl, isLE2);
  }
  var HashMD;
  var init_md = __esm({
    "node_modules/@noble/hashes/esm/_md.js"() {
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      init_assert();
      init_utils2();
      HashMD = /* @__PURE__ */ function(Hash2) {
        "use strict";
        _inherits(HashMD2, Hash2);
        function HashMD2(blockLen, outputLen, padOffset, isLE2) {
          _class_call_check(this, HashMD2);
          var _this;
          _this = _call_super(this, HashMD2);
          _this.blockLen = blockLen;
          _this.outputLen = outputLen;
          _this.padOffset = padOffset;
          _this.isLE = isLE2;
          _this.finished = false;
          _this.length = 0;
          _this.pos = 0;
          _this.destroyed = false;
          _this.buffer = new Uint8Array(blockLen);
          _this.view = createView(_this.buffer);
          return _this;
        }
        _create_class(HashMD2, [
          {
            key: "update",
            value: function update(data) {
              exists(this);
              var { view, buffer, blockLen } = this;
              data = toBytes(data);
              var len = data.length;
              for (var pos = 0; pos < len; ) {
                var take = Math.min(blockLen - this.pos, len - pos);
                if (take === blockLen) {
                  var dataView = createView(data);
                  for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
                  continue;
                }
                buffer.set(data.subarray(pos, pos + take), this.pos);
                this.pos += take;
                pos += take;
                if (this.pos === blockLen) {
                  this.process(view, 0);
                  this.pos = 0;
                }
              }
              this.length += data.length;
              this.roundClean();
              return this;
            }
          },
          {
            key: "digestInto",
            value: function digestInto(out) {
              exists(this);
              output(out, this);
              this.finished = true;
              var { buffer, view, blockLen, isLE: isLE2 } = this;
              var { pos } = this;
              buffer[pos++] = 128;
              this.buffer.subarray(pos).fill(0);
              if (this.padOffset > blockLen - pos) {
                this.process(view, 0);
                pos = 0;
              }
              for (var i = pos; i < blockLen; i++) buffer[i] = 0;
              setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
              this.process(view, 0);
              var oview = createView(out);
              var len = this.outputLen;
              if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
              var outLen = len / 4;
              var state = this.get();
              if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
              for (var i1 = 0; i1 < outLen; i1++) oview.setUint32(4 * i1, state[i1], isLE2);
            }
          },
          {
            key: "digest",
            value: function digest() {
              var { buffer, outputLen } = this;
              this.digestInto(buffer);
              var res = buffer.slice(0, outputLen);
              this.destroy();
              return res;
            }
          },
          {
            key: "_cloneInto",
            value: function _cloneInto(to) {
              to || (to = new this.constructor());
              to.set(...this.get());
              var { blockLen, buffer, length, finished, destroyed, pos } = this;
              to.length = length;
              to.pos = pos;
              to.finished = finished;
              to.destroyed = destroyed;
              if (length % blockLen) to.buffer.set(buffer);
              return to;
            }
          }
        ]);
        return HashMD2;
      }(Hash);
    }
  });

  // node_modules/@noble/hashes/esm/_u64.js
  function fromBig(n, le = false) {
    if (le) return {
      h: Number(n & U32_MASK64),
      l: Number(n >> _32n & U32_MASK64)
    };
    return {
      h: Number(n >> _32n & U32_MASK64) | 0,
      l: Number(n & U32_MASK64) | 0
    };
  }
  function split(lst, le = false) {
    var Ah = new Uint32Array(lst.length);
    var Al = new Uint32Array(lst.length);
    for (var i = 0; i < lst.length; i++) {
      var { h, l } = fromBig(lst[i], le);
      [Ah[i], Al[i]] = [
        h,
        l
      ];
    }
    return [
      Ah,
      Al
    ];
  }
  function add(Ah, Al, Bh, Bl) {
    var l = (Al >>> 0) + (Bl >>> 0);
    return {
      h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
      l: l | 0
    };
  }
  var U32_MASK64, _32n, toBig, shrSH, shrSL, rotrSH, rotrSL, rotrBH, rotrBL, rotr32H, rotr32L, rotlSH, rotlSL, rotlBH, rotlBL, add3L, add3H, add4L, add4H, add5L, add5H, u64, u64_default;
  var init_u64 = __esm({
    "node_modules/@noble/hashes/esm/_u64.js"() {
      U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
      _32n = /* @__PURE__ */ BigInt(32);
      toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
      shrSH = (h, _l, s) => h >>> s;
      shrSL = (h, l, s) => h << 32 - s | l >>> s;
      rotrSH = (h, l, s) => h >>> s | l << 32 - s;
      rotrSL = (h, l, s) => h << 32 - s | l >>> s;
      rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
      rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
      rotr32H = (_h, l) => l;
      rotr32L = (h, _l) => h;
      rotlSH = (h, l, s) => h << s | l >>> 32 - s;
      rotlSL = (h, l, s) => l << s | h >>> 32 - s;
      rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
      rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
      add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
      add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
      add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
      add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
      add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
      add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
      u64 = {
        fromBig,
        split,
        toBig,
        shrSH,
        shrSL,
        rotrSH,
        rotrSL,
        rotrBH,
        rotrBL,
        rotr32H,
        rotr32L,
        rotlSH,
        rotlSL,
        rotlBH,
        rotlBL,
        add,
        add3L,
        add3H,
        add4L,
        add4H,
        add5H,
        add5L
      };
      u64_default = u64;
    }
  });

  // node_modules/@noble/hashes/esm/sha512.js
  var SHA512_Kh, SHA512_Kl, SHA512_W_H, SHA512_W_L, SHA512, sha512;
  var init_sha512 = __esm({
    "node_modules/@noble/hashes/esm/sha512.js"() {
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      init_md();
      init_u64();
      init_utils2();
      [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => u64_default.split([
        "0x428a2f98d728ae22",
        "0x7137449123ef65cd",
        "0xb5c0fbcfec4d3b2f",
        "0xe9b5dba58189dbbc",
        "0x3956c25bf348b538",
        "0x59f111f1b605d019",
        "0x923f82a4af194f9b",
        "0xab1c5ed5da6d8118",
        "0xd807aa98a3030242",
        "0x12835b0145706fbe",
        "0x243185be4ee4b28c",
        "0x550c7dc3d5ffb4e2",
        "0x72be5d74f27b896f",
        "0x80deb1fe3b1696b1",
        "0x9bdc06a725c71235",
        "0xc19bf174cf692694",
        "0xe49b69c19ef14ad2",
        "0xefbe4786384f25e3",
        "0x0fc19dc68b8cd5b5",
        "0x240ca1cc77ac9c65",
        "0x2de92c6f592b0275",
        "0x4a7484aa6ea6e483",
        "0x5cb0a9dcbd41fbd4",
        "0x76f988da831153b5",
        "0x983e5152ee66dfab",
        "0xa831c66d2db43210",
        "0xb00327c898fb213f",
        "0xbf597fc7beef0ee4",
        "0xc6e00bf33da88fc2",
        "0xd5a79147930aa725",
        "0x06ca6351e003826f",
        "0x142929670a0e6e70",
        "0x27b70a8546d22ffc",
        "0x2e1b21385c26c926",
        "0x4d2c6dfc5ac42aed",
        "0x53380d139d95b3df",
        "0x650a73548baf63de",
        "0x766a0abb3c77b2a8",
        "0x81c2c92e47edaee6",
        "0x92722c851482353b",
        "0xa2bfe8a14cf10364",
        "0xa81a664bbc423001",
        "0xc24b8b70d0f89791",
        "0xc76c51a30654be30",
        "0xd192e819d6ef5218",
        "0xd69906245565a910",
        "0xf40e35855771202a",
        "0x106aa07032bbd1b8",
        "0x19a4c116b8d2d0c8",
        "0x1e376c085141ab53",
        "0x2748774cdf8eeb99",
        "0x34b0bcb5e19b48a8",
        "0x391c0cb3c5c95a63",
        "0x4ed8aa4ae3418acb",
        "0x5b9cca4f7763e373",
        "0x682e6ff3d6b2b8a3",
        "0x748f82ee5defb2fc",
        "0x78a5636f43172f60",
        "0x84c87814a1f0ab72",
        "0x8cc702081a6439ec",
        "0x90befffa23631e28",
        "0xa4506cebde82bde9",
        "0xbef9a3f7b2c67915",
        "0xc67178f2e372532b",
        "0xca273eceea26619c",
        "0xd186b8c721c0c207",
        "0xeada7dd6cde0eb1e",
        "0xf57d4f7fee6ed178",
        "0x06f067aa72176fba",
        "0x0a637dc5a2c898a6",
        "0x113f9804bef90dae",
        "0x1b710b35131c471b",
        "0x28db77f523047d84",
        "0x32caab7b40c72493",
        "0x3c9ebe0a15c9bebc",
        "0x431d67c49c100d4c",
        "0x4cc5d4becb3e42b6",
        "0x597f299cfc657e2a",
        "0x5fcb6fab3ad6faec",
        "0x6c44198c4a475817"
      ].map((n) => BigInt(n))))();
      SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
      SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
      SHA512 = /* @__PURE__ */ function(HashMD2) {
        "use strict";
        _inherits(SHA5122, HashMD2);
        function SHA5122() {
          _class_call_check(this, SHA5122);
          var _this;
          _this = _call_super(this, SHA5122, [
            128,
            64,
            16,
            false
          ]);
          _this.Ah = 1779033703 | 0;
          _this.Al = 4089235720 | 0;
          _this.Bh = 3144134277 | 0;
          _this.Bl = 2227873595 | 0;
          _this.Ch = 1013904242 | 0;
          _this.Cl = 4271175723 | 0;
          _this.Dh = 2773480762 | 0;
          _this.Dl = 1595750129 | 0;
          _this.Eh = 1359893119 | 0;
          _this.El = 2917565137 | 0;
          _this.Fh = 2600822924 | 0;
          _this.Fl = 725511199 | 0;
          _this.Gh = 528734635 | 0;
          _this.Gl = 4215389547 | 0;
          _this.Hh = 1541459225 | 0;
          _this.Hl = 327033209 | 0;
          return _this;
        }
        _create_class(SHA5122, [
          {
            // prettier-ignore
            key: "get",
            value: function get() {
              var { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
              return [
                Ah,
                Al,
                Bh,
                Bl,
                Ch,
                Cl,
                Dh,
                Dl,
                Eh,
                El,
                Fh,
                Fl,
                Gh,
                Gl,
                Hh,
                Hl
              ];
            }
          },
          {
            // prettier-ignore
            key: "set",
            value: function set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
              this.Ah = Ah | 0;
              this.Al = Al | 0;
              this.Bh = Bh | 0;
              this.Bl = Bl | 0;
              this.Ch = Ch | 0;
              this.Cl = Cl | 0;
              this.Dh = Dh | 0;
              this.Dl = Dl | 0;
              this.Eh = Eh | 0;
              this.El = El | 0;
              this.Fh = Fh | 0;
              this.Fl = Fl | 0;
              this.Gh = Gh | 0;
              this.Gl = Gl | 0;
              this.Hh = Hh | 0;
              this.Hl = Hl | 0;
            }
          },
          {
            key: "process",
            value: function process2(view, offset) {
              for (var i = 0; i < 16; i++, offset += 4) {
                SHA512_W_H[i] = view.getUint32(offset);
                SHA512_W_L[i] = view.getUint32(offset += 4);
              }
              for (var i1 = 16; i1 < 80; i1++) {
                var W15h = SHA512_W_H[i1 - 15] | 0;
                var W15l = SHA512_W_L[i1 - 15] | 0;
                var s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
                var s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
                var W2h = SHA512_W_H[i1 - 2] | 0;
                var W2l = SHA512_W_L[i1 - 2] | 0;
                var s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
                var s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
                var SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i1 - 7], SHA512_W_L[i1 - 16]);
                var SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i1 - 7], SHA512_W_H[i1 - 16]);
                SHA512_W_H[i1] = SUMh | 0;
                SHA512_W_L[i1] = SUMl | 0;
              }
              var { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
              for (var i2 = 0; i2 < 80; i2++) {
                var sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
                var sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
                var CHIh = Eh & Fh ^ ~Eh & Gh;
                var CHIl = El & Fl ^ ~El & Gl;
                var T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i2], SHA512_W_L[i2]);
                var T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i2], SHA512_W_H[i2]);
                var T1l = T1ll | 0;
                var sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
                var sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
                var MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
                var MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
                Hh = Gh | 0;
                Hl = Gl | 0;
                Gh = Fh | 0;
                Gl = Fl | 0;
                Fh = Eh | 0;
                Fl = El | 0;
                ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
                Dh = Ch | 0;
                Dl = Cl | 0;
                Ch = Bh | 0;
                Cl = Bl | 0;
                Bh = Ah | 0;
                Bl = Al | 0;
                var All = u64_default.add3L(T1l, sigma0l, MAJl);
                Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
                Al = All | 0;
              }
              ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
              ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
              ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
              ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
              ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
              ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
              ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
              ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
              this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
            }
          },
          {
            key: "roundClean",
            value: function roundClean() {
              SHA512_W_H.fill(0);
              SHA512_W_L.fill(0);
            }
          },
          {
            key: "destroy",
            value: function destroy() {
              this.buffer.fill(0);
              this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            }
          }
        ]);
        return SHA5122;
      }(HashMD);
      sha512 = /* @__PURE__ */ wrapConstructor(() => new SHA512());
    }
  });

  // node_modules/@noble/ed25519/index.js
  function hashFinish(asynchronous, res) {
    if (asynchronous) return sha512a(res.hashable).then(res.finish);
    return res.finish(sha512s(res.hashable));
  }
  var P3, N2, Gx, Gy, CURVE, err, str, isu8, au8, u8n, toU8, mod, isPoint, Point, G3, I2, padh, b2h, h2b, n2b_32LE, b2n_LE, concatB, invert, pow2, pow_2_252_3, RM1, uvRatio, modL_LE, _shaS, sha512a, sha512s, hash2extK, getExtendedPublicKey, getPublicKey, _sign, sign, dvo, _verify, verify, cr, etc, W2, precompute, Gpows, wNAF;
  var init_ed25519 = __esm({
    "node_modules/@noble/ed25519/index.js"() {
      init_async_to_generator();
      init_class_call_check();
      init_create_class();
      P3 = 2n ** 255n - 19n;
      N2 = 2n ** 252n + 27742317777372353535851937790883648493n;
      Gx = 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an;
      Gy = 0x6666666666666666666666666666666666666666666666666666666666666658n;
      CURVE = {
        a: -1n,
        d: 37095705934669439343138083508754565189542113879843219016388785533085940283555n,
        p: P3,
        n: N2,
        h: 8,
        Gx,
        Gy
      };
      err = (m2 = "") => {
        throw new Error(m2);
      };
      str = (s) => typeof s === "string";
      isu8 = (a) => a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
      au8 = (a, l) => !isu8(a) || typeof l === "number" && l > 0 && a.length !== l ? err("Uint8Array of valid length expected") : a;
      u8n = (data) => new Uint8Array(data);
      toU8 = (a, len) => au8(str(a) ? h2b(a) : u8n(au8(a)), len);
      mod = (a, b3 = P3) => {
        var r = a % b3;
        return r >= 0n ? r : b3 + r;
      };
      isPoint = (p) => p instanceof Point ? p : err("Point expected");
      Point = /* @__PURE__ */ function() {
        "use strict";
        function Point2(ex, ey, ez, et) {
          _class_call_check(this, Point2);
          this.ex = ex;
          this.ey = ey;
          this.ez = ez;
          this.et = et;
        }
        _create_class(Point2, [
          {
            key: "x",
            get: function get() {
              return this.toAffine().x;
            }
            // .x, .y will call expensive toAffine.
          },
          {
            key: "y",
            get: function get() {
              return this.toAffine().y;
            }
            // Should be used with care.
          },
          {
            key: "equals",
            value: function equals(other) {
              var { ex: X1, ey: Y1, ez: Z1 } = this;
              var { ex: X22, ey: Y2, ez: Z2 } = isPoint(other);
              var X1Z2 = mod(X1 * Z2), X2Z1 = mod(X22 * Z1);
              var Y1Z2 = mod(Y1 * Z2), Y2Z1 = mod(Y2 * Z1);
              return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
            }
          },
          {
            key: "is0",
            value: function is0() {
              return this.equals(I2);
            }
          },
          {
            key: "negate",
            value: function negate() {
              return new Point2(mod(-this.ex), this.ey, this.ez, mod(-this.et));
            }
          },
          {
            key: "double",
            value: function double() {
              var { ex: X1, ey: Y1, ez: Z1 } = this;
              var { a } = CURVE;
              var A = mod(X1 * X1);
              var B2 = mod(Y1 * Y1);
              var C3 = mod(2n * mod(Z1 * Z1));
              var D2 = mod(a * A);
              var x1y1 = X1 + Y1;
              var E2 = mod(mod(x1y1 * x1y1) - A - B2);
              var G4 = D2 + B2;
              var F3 = G4 - C3;
              var H3 = D2 - B2;
              var X3 = mod(E2 * F3);
              var Y3 = mod(G4 * H3);
              var T3 = mod(E2 * H3);
              var Z3 = mod(F3 * G4);
              return new Point2(X3, Y3, Z3, T3);
            }
          },
          {
            key: "add",
            value: function add2(other) {
              var { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
              var { ex: X22, ey: Y2, ez: Z2, et: T2 } = isPoint(other);
              var { a, d } = CURVE;
              var A = mod(X1 * X22);
              var B2 = mod(Y1 * Y2);
              var C3 = mod(T1 * d * T2);
              var D2 = mod(Z1 * Z2);
              var E2 = mod((X1 + Y1) * (X22 + Y2) - A - B2);
              var F3 = mod(D2 - C3);
              var G4 = mod(D2 + C3);
              var H3 = mod(B2 - a * A);
              var X3 = mod(E2 * F3);
              var Y3 = mod(G4 * H3);
              var T3 = mod(E2 * H3);
              var Z3 = mod(F3 * G4);
              return new Point2(X3, Y3, Z3, T3);
            }
          },
          {
            key: "mul",
            value: function mul(n, safe = true) {
              if (n === 0n) return safe === true ? err("cannot multiply by 0") : I2;
              if (!(typeof n === "bigint" && 0n < n && n < N2)) err("invalid scalar, must be < L");
              if (!safe && this.is0() || n === 1n) return this;
              if (this.equals(G3)) return wNAF(n).p;
              var p = I2, f = G3;
              for (var d = this; n > 0n; d = d.double(), n >>= 1n) {
                if (n & 1n) p = p.add(d);
                else if (safe) f = f.add(d);
              }
              return p;
            }
          },
          {
            key: "multiply",
            value: function multiply(scalar) {
              return this.mul(scalar);
            }
            // Aliases for compatibilty
          },
          {
            key: "clearCofactor",
            value: function clearCofactor() {
              return this.mul(BigInt(CURVE.h), false);
            }
            // multiply by cofactor
          },
          {
            key: "isSmallOrder",
            value: function isSmallOrder() {
              return this.clearCofactor().is0();
            }
            // check if P is small order
          },
          {
            key: "isTorsionFree",
            value: function isTorsionFree() {
              var p = this.mul(N2 / 2n, false).double();
              if (N2 % 2n) p = p.add(this);
              return p.is0();
            }
          },
          {
            key: "toAffine",
            value: function toAffine() {
              var { ex: x2, ey: y2, ez: z3 } = this;
              if (this.equals(I2)) return {
                x: 0n,
                y: 1n
              };
              var iz = invert(z3);
              if (mod(z3 * iz) !== 1n) err("invalid inverse");
              return {
                x: mod(x2 * iz),
                y: mod(y2 * iz)
              };
            }
          },
          {
            key: "toRawBytes",
            value: function toRawBytes() {
              var { x: x2, y: y2 } = this.toAffine();
              var b3 = n2b_32LE(y2);
              b3[31] |= x2 & 1n ? 128 : 0;
              return b3;
            }
          },
          {
            key: "toHex",
            value: function toHex2() {
              return b2h(this.toRawBytes());
            }
            // encode to hex string
          }
        ], [
          {
            key: "fromAffine",
            value: function fromAffine(p) {
              return new Point2(p.x, p.y, 1n, mod(p.x * p.y));
            }
          },
          {
            key: "fromHex",
            value: function fromHex(hex, zip215 = false) {
              var { d } = CURVE;
              hex = toU8(hex, 32);
              var normed = hex.slice();
              var lastByte = hex[31];
              normed[31] = lastByte & ~128;
              var y2 = b2n_LE(normed);
              if (zip215 && !(0n <= y2 && y2 < 2n ** 256n)) err("bad y coord 1");
              if (!zip215 && !(0n <= y2 && y2 < P3)) err("bad y coord 2");
              var y22 = mod(y2 * y2);
              var u = mod(y22 - 1n);
              var v2 = mod(d * y22 + 1n);
              var { isValid, value: x2 } = uvRatio(u, v2);
              if (!isValid) err("bad y coordinate 3");
              var isXOdd = (x2 & 1n) === 1n;
              var isLastByteOdd = (lastByte & 128) !== 0;
              if (!zip215 && x2 === 0n && isLastByteOdd) err("bad y coord 3");
              if (isLastByteOdd !== isXOdd) x2 = mod(-x2);
              return new Point2(x2, y2, 1n, mod(x2 * y2));
            }
          }
        ]);
        return Point2;
      }();
      Point.BASE = new Point(Gx, Gy, 1n, mod(Gx * Gy));
      Point.ZERO = new Point(0n, 1n, 1n, 0n);
      ({ BASE: G3, ZERO: I2 } = Point);
      padh = (num, pad) => num.toString(16).padStart(pad, "0");
      b2h = (b3) => Array.from(b3).map((e) => padh(e, 2)).join("");
      h2b = (hex) => {
        var l = hex.length;
        if (!str(hex) || l % 2) err("hex invalid 1");
        var arr = u8n(l / 2);
        for (var i = 0; i < arr.length; i++) {
          var j = i * 2;
          var h = hex.slice(j, j + 2);
          var b3 = Number.parseInt(h, 16);
          if (Number.isNaN(b3) || b3 < 0) err("hex invalid 2");
          arr[i] = b3;
        }
        return arr;
      };
      n2b_32LE = (num) => h2b(padh(num, 32 * 2)).reverse();
      b2n_LE = (b3) => BigInt("0x" + b2h(u8n(au8(b3)).reverse()));
      concatB = (...arrs) => {
        var r = u8n(arrs.reduce((sum, a) => sum + au8(a).length, 0));
        var pad = 0;
        arrs.forEach((a) => {
          r.set(a, pad);
          pad += a.length;
        });
        return r;
      };
      invert = (num, md = P3) => {
        if (num === 0n || md <= 0n) err("no inverse n=" + num + " mod=" + md);
        var a = mod(num, md), b3 = md, x2 = 0n, y2 = 1n, u = 1n, v2 = 0n;
        while (a !== 0n) {
          var q3 = b3 / a, r = b3 % a;
          var m2 = x2 - u * q3, n = y2 - v2 * q3;
          b3 = a, a = r, x2 = u, y2 = v2, u = m2, v2 = n;
        }
        return b3 === 1n ? mod(x2, md) : err("no inverse");
      };
      pow2 = (x2, power) => {
        var r = x2;
        while (power-- > 0n) {
          r *= r;
          r %= P3;
        }
        return r;
      };
      pow_2_252_3 = (x2) => {
        var x22 = x2 * x2 % P3;
        var b22 = x22 * x2 % P3;
        var b4 = pow2(b22, 2n) * b22 % P3;
        var b5 = pow2(b4, 1n) * x2 % P3;
        var b10 = pow2(b5, 5n) * b5 % P3;
        var b20 = pow2(b10, 10n) * b10 % P3;
        var b40 = pow2(b20, 20n) * b20 % P3;
        var b80 = pow2(b40, 40n) * b40 % P3;
        var b160 = pow2(b80, 80n) * b80 % P3;
        var b240 = pow2(b160, 80n) * b80 % P3;
        var b250 = pow2(b240, 10n) * b10 % P3;
        var pow_p_5_8 = pow2(b250, 2n) * x2 % P3;
        return {
          pow_p_5_8,
          b2: b22
        };
      };
      RM1 = 19681161376707505956807079304988542015446066515923890162744021073123829784752n;
      uvRatio = (u, v2) => {
        var v3 = mod(v2 * v2 * v2);
        var v7 = mod(v3 * v3 * v2);
        var pow = pow_2_252_3(u * v7).pow_p_5_8;
        var x2 = mod(u * v3 * pow);
        var vx2 = mod(v2 * x2 * x2);
        var root1 = x2;
        var root2 = mod(x2 * RM1);
        var useRoot1 = vx2 === u;
        var useRoot2 = vx2 === mod(-u);
        var noRoot = vx2 === mod(-u * RM1);
        if (useRoot1) x2 = root1;
        if (useRoot2 || noRoot) x2 = root2;
        if ((mod(x2) & 1n) === 1n) x2 = mod(-x2);
        return {
          isValid: useRoot1 || useRoot2,
          value: x2
        };
      };
      modL_LE = (hash) => mod(b2n_LE(hash), N2);
      sha512a = (...m2) => etc.sha512Async(...m2);
      sha512s = (...m2) => typeof _shaS === "function" ? _shaS(...m2) : err("etc.sha512Sync not set");
      hash2extK = (hashed) => {
        var head = hashed.slice(0, 32);
        head[0] &= 248;
        head[31] &= 127;
        head[31] |= 64;
        var prefix = hashed.slice(32, 64);
        var scalar = modL_LE(head);
        var point = G3.mul(scalar);
        var pointBytes = point.toRawBytes();
        return {
          head,
          prefix,
          scalar,
          point,
          pointBytes
        };
      };
      getExtendedPublicKey = (priv) => hash2extK(sha512s(toU8(priv, 32)));
      getPublicKey = (priv) => getExtendedPublicKey(priv).pointBytes;
      _sign = (e, rBytes, msg) => {
        var { pointBytes: P4, scalar: s } = e;
        var r = modL_LE(rBytes);
        var R2 = G3.mul(r).toRawBytes();
        var hashable = concatB(R2, P4, msg);
        var finish = (hashed) => {
          var S2 = mod(r + modL_LE(hashed) * s, N2);
          return au8(concatB(R2, n2b_32LE(S2)), 64);
        };
        return {
          hashable,
          finish
        };
      };
      sign = (msg, privKey) => {
        var m2 = toU8(msg);
        var e = getExtendedPublicKey(privKey);
        var rBytes = sha512s(e.prefix, m2);
        return hashFinish(false, _sign(e, rBytes, m2));
      };
      dvo = {
        zip215: true
      };
      _verify = (sig, msg, pub, opts = dvo) => {
        msg = toU8(msg);
        sig = toU8(sig, 64);
        var { zip215 } = opts;
        var A, R2, s, SB, hashable = new Uint8Array();
        try {
          A = Point.fromHex(pub, zip215);
          R2 = Point.fromHex(sig.slice(0, 32), zip215);
          s = b2n_LE(sig.slice(32, 64));
          SB = G3.mul(s, false);
          hashable = concatB(R2.toRawBytes(), A.toRawBytes(), msg);
        } catch (error) {
        }
        var finish = (hashed) => {
          if (SB == null) return false;
          if (!zip215 && A.isSmallOrder()) return false;
          var k = modL_LE(hashed);
          var RkA = R2.add(A.mul(k, false));
          return RkA.add(SB.negate()).clearCofactor().is0();
        };
        return {
          hashable,
          finish
        };
      };
      verify = (s, m2, p, opts = dvo) => hashFinish(false, _verify(s, m2, p, opts));
      cr = () => typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
      etc = {
        bytesToHex: b2h,
        hexToBytes: h2b,
        concatBytes: concatB,
        mod,
        invert,
        randomBytes: (len = 32) => {
          var crypto = cr();
          if (!crypto || !crypto.getRandomValues) err("crypto.getRandomValues must be defined");
          return crypto.getRandomValues(u8n(len));
        },
        sha512Async: /* @__PURE__ */ _async_to_generator(function* (...messages2) {
          var crypto = cr();
          if (!crypto || !crypto.subtle) err("crypto.subtle or etc.sha512Async must be defined");
          var m2 = concatB(...messages2);
          return u8n(yield crypto.subtle.digest("SHA-512", m2.buffer));
        }),
        sha512Sync: void 0
      };
      Object.defineProperties(etc, {
        sha512Sync: {
          configurable: false,
          get() {
            return _shaS;
          },
          set(f) {
            if (!_shaS) _shaS = f;
          }
        }
      });
      W2 = 8;
      precompute = () => {
        var points = [];
        var windows = 256 / W2 + 1;
        var p = G3, b3 = p;
        for (var w = 0; w < windows; w++) {
          b3 = p;
          points.push(b3);
          for (var i = 1; i < 2 ** (W2 - 1); i++) {
            b3 = b3.add(p);
            points.push(b3);
          }
          p = b3.double();
        }
        return points;
      };
      Gpows = void 0;
      wNAF = (n) => {
        var comp = Gpows || (Gpows = precompute());
        var neg = (cnd, p2) => {
          var _$n = p2.negate();
          return cnd ? _$n : p2;
        };
        var p = I2, f = G3;
        var windows = 1 + 256 / W2;
        var wsize = 2 ** (W2 - 1);
        var mask = BigInt(2 ** W2 - 1);
        var maxNum = 2 ** W2;
        var shiftBy = BigInt(W2);
        for (var w = 0; w < windows; w++) {
          var off = w * wsize;
          var wbits = Number(n & mask);
          n >>= shiftBy;
          if (wbits > wsize) {
            wbits -= maxNum;
            n += 1n;
          }
          var off1 = off, off2 = off + Math.abs(wbits) - 1;
          var cnd1 = w % 2 !== 0, cnd2 = wbits < 0;
          if (wbits === 0) {
            f = f.add(neg(cnd1, comp[off1]));
          } else {
            p = p.add(neg(cnd2, comp[off2]));
          }
        }
        return {
          p,
          f
        };
      };
    }
  });

  // node_modules/@swc/helpers/esm/_define_property.js
  function _define_property(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else obj[key] = value;
    return obj;
  }
  var init_define_property = __esm({
    "node_modules/@swc/helpers/esm/_define_property.js"() {
    }
  });

  // node_modules/@revenge-mod/keyutil/src/v1/certification.ts
  var RevengeCertificationV1;
  var init_certification = __esm({
    "node_modules/@revenge-mod/keyutil/src/v1/certification.ts"() {
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_ed25519();
      RevengeCertificationV1 = /* @__PURE__ */ function() {
        "use strict";
        function RevengeCertificationV12({ certifierPublicId, signature: certifierSignature, holderSignature }) {
          _class_call_check(this, RevengeCertificationV12);
          _define_property(this, "certifierPublicId", void 0);
          _define_property(this, "signature", void 0);
          _define_property(this, "holderSignature", void 0);
          this.certifierPublicId = certifierPublicId;
          this.signature = certifierSignature;
          this.holderSignature = holderSignature;
        }
        _create_class(RevengeCertificationV12, [
          {
            key: "isValid",
            value: function isValid(certifierPublicKey) {
              return verify(this.signature, this.holderSignature, certifierPublicKey);
            }
          }
        ]);
        return RevengeCertificationV12;
      }();
    }
  });

  // node_modules/@swc/helpers/esm/_class_private_method_get.js
  function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
  }
  var init_class_private_method_get = __esm({
    "node_modules/@swc/helpers/esm/_class_private_method_get.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_class_private_method_init.js
  function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
  }
  var init_class_private_method_init = __esm({
    "node_modules/@swc/helpers/esm/_class_private_method_init.js"() {
      init_check_private_redeclaration();
    }
  });

  // node_modules/@revenge-mod/keyutil/src/shared.ts
  var KeyType, KeySize, SignatureSize;
  var init_shared4 = __esm({
    "node_modules/@revenge-mod/keyutil/src/shared.ts"() {
      KeyType = /* @__PURE__ */ function(KeyType2) {
        KeyType2[KeyType2["Public"] = 1] = "Public";
        KeyType2[KeyType2["Private"] = 2] = "Private";
        return KeyType2;
      }({});
      KeySize = 32;
      SignatureSize = 64;
    }
  });

  // node_modules/@revenge-mod/keyutil/src/utils.ts
  function u64ToU8Array(bigInt) {
    var buffer = new ArrayBuffer(8);
    var view = new DataView(buffer);
    view.setBigUint64(0, bigInt);
    return new Uint8Array(buffer);
  }
  function u8ArrayToU64(u8) {
    var view = new DataView(u8.buffer);
    return view.getBigUint64(0);
  }
  function toKeyId(u8) {
    return toHex(u8).toUpperCase().slice(-16);
  }
  function toHex(u8) {
    return Array.from(u8).map((i) => i.toString(16).padStart(2, "0")).join("");
  }
  function bufToString(buf) {
    return new TextDecoder().decode(buf);
  }
  function strToU8(str2) {
    return new TextEncoder().encode(str2);
  }
  var init_utils3 = __esm({
    "node_modules/@revenge-mod/keyutil/src/utils.ts"() {
    }
  });

  // node_modules/@revenge-mod/keyutil/src/v1/public.ts
  var import_uzip, RevengePublicKeyV1;
  var init_public = __esm({
    "node_modules/@revenge-mod/keyutil/src/v1/public.ts"() {
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_ed25519();
      init_sha512();
      import_uzip = __toESM(require_UZIP(), 1);
      init_shared4();
      init_utils3();
      RevengePublicKeyV1 = /* @__PURE__ */ function() {
        "use strict";
        function RevengePublicKeyV12({ info, key, certifications, signature }) {
          _class_call_check(this, RevengePublicKeyV12);
          _define_property(this, "type", KeyType.Public);
          _define_property(this, "info", void 0);
          _define_property(this, "signature", void 0);
          _define_property(this, "certifications", void 0);
          _define_property(this, "key", void 0);
          _define_property(this, "id", void 0);
          _define_property(this, "version", 1);
          this.info = info;
          this.signature = signature;
          this.certifications = certifications;
          this.key = key;
          this.id = toKeyId(sha512(key)).toString().slice(-16);
        }
        _create_class(RevengePublicKeyV12, [
          {
            key: "toArrayBuffer",
            value: function toArrayBuffer() {
              var eCerts = (0, import_uzip.encode)(Object.fromEntries(Object.entries(this.certifications).map(([id, cert]) => [
                id,
                cert.signature
              ])));
              var t = new Uint8Array([
                this.version << 4 | this.type & 15
              ]);
              return (0, import_uzip.encode)({
                k: this.key,
                i: new Uint8Array(RevengePublicKeyV12.infoToArrayBuffer(this.info)),
                is: this.signature,
                c: new Uint8Array(eCerts),
                t
              });
            }
          },
          {
            key: "isValid",
            value: function isValid() {
              return this.verify(this.signature, RevengePublicKeyV12.infoToSignatureDataUint8Array(this.info));
            }
          },
          {
            key: "verify",
            value: function verify1(signature, data) {
              if (this.expired) return false;
              return verify(signature, data, this.key);
            }
          },
          {
            key: "expired",
            get: function get() {
              return Math.round(Date.now() / 1e3) > this.info.expires;
            }
          },
          {
            key: "isPublic",
            value: function isPublic() {
              return true;
            }
          },
          {
            key: "isPrivate",
            value: function isPrivate() {
              return false;
            }
          }
        ], [
          {
            key: "infoToArrayBuffer",
            value: function infoToArrayBuffer(info) {
              return (0, import_uzip.encode)({
                n: strToU8(info.name),
                e: u64ToU8Array(info.expires)
              });
            }
          },
          {
            key: "infoToSignatureDataUint8Array",
            value: function infoToSignatureDataUint8Array(info) {
              return sha512(new Uint8Array(RevengePublicKeyV12.infoToArrayBuffer(info)));
            }
          }
        ]);
        return RevengePublicKeyV12;
      }();
    }
  });

  // node_modules/@revenge-mod/keyutil/src/v1/signature.ts
  var import_uzip2, RevengeSignatureV1;
  var init_signature = __esm({
    "node_modules/@revenge-mod/keyutil/src/v1/signature.ts"() {
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_ed25519();
      import_uzip2 = __toESM(require_UZIP(), 1);
      init_utils3();
      RevengeSignatureV1 = /* @__PURE__ */ function() {
        "use strict";
        function RevengeSignatureV12({ signerPublicId, signature }) {
          _class_call_check(this, RevengeSignatureV12);
          _define_property(this, "signerPublicId", void 0);
          _define_property(this, "signature", void 0);
          _define_property(this, "version", 1);
          this.signerPublicId = signerPublicId;
          this.signature = signature;
        }
        _create_class(RevengeSignatureV12, [
          {
            key: "toArrayBuffer",
            value: function toArrayBuffer() {
              return (0, import_uzip2.encode)({
                i: strToU8(this.signerPublicId),
                s: this.signature
              });
            }
          },
          {
            key: "verify",
            value: function verify1(publicKey, data) {
              return verify(this.signature, data, publicKey);
            }
          }
        ]);
        return RevengeSignatureV12;
      }();
    }
  });

  // node_modules/@revenge-mod/keyutil/src/v1/private.ts
  function getPublicKeySignature() {
    return _class_private_method_get(this, _sign2, sign1).call(this, RevengePublicKeyV1.infoToSignatureDataUint8Array(this.info.publicKeyInfo));
  }
  function sign1(data) {
    if (this.expired) throw new Error("Cannot sign with expired key");
    return sign(data, this.key);
  }
  var import_uzip3, _getPublicKeySignature, _sign2, RevengePrivateKeyV1;
  var init_private = __esm({
    "node_modules/@revenge-mod/keyutil/src/v1/private.ts"() {
      init_class_call_check();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_define_property();
      init_ed25519();
      init_sha512();
      import_uzip3 = __toESM(require_UZIP(), 1);
      init_shared4();
      init_utils3();
      init_certification();
      init_public();
      init_signature();
      _getPublicKeySignature = /* @__PURE__ */ new WeakSet();
      _sign2 = /* @__PURE__ */ new WeakSet();
      RevengePrivateKeyV1 = /* @__PURE__ */ function() {
        "use strict";
        function RevengePrivateKeyV12({ info, key }) {
          _class_call_check(this, RevengePrivateKeyV12);
          _class_private_method_init(this, _getPublicKeySignature);
          _class_private_method_init(this, _sign2);
          _define_property(this, "type", KeyType.Private);
          _define_property(this, "info", void 0);
          _define_property(this, "key", void 0);
          _define_property(this, "publicId", void 0);
          _define_property(this, "id", void 0);
          _define_property(this, "version", 1);
          this.info = info;
          this.key = key;
          this.publicId = toKeyId(sha512(info.publicKey)).toUpperCase().slice(-16);
          this.id = toKeyId(sha512(key)).toUpperCase().slice(-16);
        }
        _create_class(RevengePrivateKeyV12, [
          {
            key: "expired",
            get: function get() {
              return Math.round(Date.now() / 1e3) > this.info.publicKeyInfo.expires;
            }
          },
          {
            key: "toArrayBuffer",
            value: function toArrayBuffer() {
              var eInfo = (0, import_uzip3.encode)({
                pi: new Uint8Array(RevengePublicKeyV1.infoToArrayBuffer(this.info.publicKeyInfo)),
                pis: _class_private_method_get(this, _getPublicKeySignature, getPublicKeySignature).call(this)
              });
              var t = new Uint8Array([
                this.version << 4 | this.type & 15
              ]);
              return (0, import_uzip3.encode)({
                k: this.key,
                i: new Uint8Array(eInfo),
                is: _class_private_method_get(this, _sign2, sign1).call(this, new Uint8Array(eInfo)),
                t
              });
            }
          },
          {
            key: "sign",
            value: function sign2(data) {
              return new RevengeSignatureV1({
                signature: _class_private_method_get(this, _sign2, sign1).call(this, data),
                signerPublicId: this.publicId
              });
            }
          },
          {
            key: "createPublicKey",
            value: function createPublicKey() {
              var pbKey = new RevengePublicKeyV1({
                key: this.info.publicKey,
                info: this.info.publicKeyInfo,
                signature: _class_private_method_get(this, _getPublicKeySignature, getPublicKeySignature).call(this),
                certifications: {}
              });
              this.certify(pbKey);
              return pbKey;
            }
          },
          {
            key: "certify",
            value: function certify(publicKey) {
              publicKey.certifications[this.publicId] = new RevengeCertificationV1({
                certifierPublicId: this.publicId,
                signature: _class_private_method_get(this, _sign2, sign1).call(this, publicKey.signature),
                holderSignature: publicKey.signature
              });
            }
          },
          {
            key: "isPublic",
            value: function isPublic() {
              return false;
            }
          },
          {
            key: "isPrivate",
            value: function isPrivate() {
              return true;
            }
          }
        ]);
        return RevengePrivateKeyV12;
      }();
    }
  });

  // node_modules/@revenge-mod/keyutil/src/v1/index.ts
  function readRevengeKey(key) {
    var { t, k, i, is, c: c2 } = (0, import_uzip4.parse)(key);
    if (!t || t.length !== 1 || !k || k.length !== KeySize || !i || !is || is.length !== SignatureSize) throw new Error("Invalid key file format");
    var { pi, pis, n, e } = (0, import_uzip4.parse)(i.buffer);
    var version = t[0] >> 4 & 15;
    var type = t[0] & 15;
    if (version !== 1) throw new Error("Unsupported key version");
    switch (type) {
      case KeyType.Private: {
        if (!pi || !pis) throw new Error("Invalid private key file format");
        var pk = getPublicKey(k);
        if (!RevengePublicKeyV1.prototype.verify.call({
          key: pk
        }, pis, sha512(pi))) throw new Error("Public key information's signature could not be verified");
        var { n: n1, e: e1 } = (0, import_uzip4.parse)(pi.buffer);
        return new RevengePrivateKeyV1({
          key: k,
          info: {
            publicKey: pk,
            publicKeyInfo: {
              name: bufToString(n1),
              expires: u8ArrayToU64(e1)
            }
          }
        });
      }
      case KeyType.Public: {
        if (!n || !e || !c2) throw new Error("Invalid public key file format");
        var certs = (0, import_uzip4.parse)(c2.buffer);
        return new RevengePublicKeyV1({
          key: k,
          certifications: Object.fromEntries(Object.entries(certs).map(([pkId, signature]) => [
            pkId,
            new RevengeCertificationV1({
              certifierPublicId: pkId,
              signature,
              holderSignature: is
            })
          ])),
          signature: is,
          info: {
            name: bufToString(n.buffer),
            expires: u8ArrayToU64(e)
          }
        });
      }
      default:
        throw new Error("Unsupported key type");
    }
  }
  function readRevengeSignature(signature) {
    var { s, i } = (0, import_uzip4.parse)(signature);
    if (!s || !i) throw new Error("Invalid signature file format");
    return new RevengeSignatureV1({
      signerPublicId: bufToString(i),
      signature: s
    });
  }
  var import_uzip4;
  var init_v1 = __esm({
    "node_modules/@revenge-mod/keyutil/src/v1/index.ts"() {
      init_ed25519();
      init_sha512();
      import_uzip4 = __toESM(require_UZIP(), 1);
      init_certification();
      init_private();
      init_public();
      init_signature();
      init_shared4();
      init_utils3();
      init_certification();
      init_private();
      init_public();
      init_signature();
      etc.sha512Sync = sha512;
    }
  });

  // node_modules/@swc/helpers/esm/_construct.js
  function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) _construct = Reflect.construct;
    else {
      _construct = function construct(Parent2, args2, Class2) {
        var a = [
          null
        ];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2) _set_prototype_of(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  var init_construct = __esm({
    "node_modules/@swc/helpers/esm/_construct.js"() {
      init_is_native_reflect_construct();
      init_set_prototype_of();
    }
  });

  // node_modules/@swc/helpers/esm/_is_native_function.js
  function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  var init_is_native_function = __esm({
    "node_modules/@swc/helpers/esm/_is_native_function.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_wrap_native_super.js
  function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrap_native_super = function _wrap_native_super2(Class2) {
      if (Class2 === null || !_is_native_function(Class2)) return Class2;
      if (typeof Class2 !== "function") throw new TypeError("Super expression must either be null or a function");
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2)) return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _get_prototype_of(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _set_prototype_of(Wrapper, Class2);
    };
    return _wrap_native_super(Class);
  }
  var init_wrap_native_super = __esm({
    "node_modules/@swc/helpers/esm/_wrap_native_super.js"() {
      init_construct();
      init_get_prototype_of();
      init_is_native_function();
      init_set_prototype_of();
    }
  });

  // node_modules/valibot/dist/index.js
  function getGlobalConfig(config2) {
    return {
      lang: config2?.lang ?? store?.lang,
      message: config2?.message,
      abortEarly: config2?.abortEarly ?? store?.abortEarly,
      abortPipeEarly: config2?.abortPipeEarly ?? store?.abortPipeEarly
    };
  }
  function getGlobalMessage(lang) {
    return store2?.get(lang);
  }
  function getSchemaMessage(lang) {
    return store3?.get(lang);
  }
  function getSpecificMessage(reference, lang) {
    return store4?.get(reference)?.get(lang);
  }
  function _stringify(input) {
    var type = typeof input;
    if (type === "string") {
      return `"${input}"`;
    }
    if (type === "number" || type === "bigint" || type === "boolean") {
      return `${input}`;
    }
    if (type === "object" || type === "function") {
      return (input && Object.getPrototypeOf(input)?.constructor?.name) ?? "null";
    }
    return type;
  }
  function _addIssue(context, label, dataset, config2, other) {
    var input = other && "input" in other ? other.input : dataset.value;
    var expected = other?.expected ?? context.expects ?? null;
    var received = other?.received ?? _stringify(input);
    var issue = {
      kind: context.kind,
      type: context.type,
      input,
      expected,
      received,
      message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
      requirement: context.requirement,
      path: other?.path,
      issues: other?.issues,
      lang: config2.lang,
      abortEarly: config2.abortEarly,
      abortPipeEarly: config2.abortPipeEarly
    };
    var isSchema = context.kind === "schema";
    var message = other?.message ?? context.message ?? getSpecificMessage(context.reference, issue.lang) ?? (isSchema ? getSchemaMessage(issue.lang) : null) ?? config2.message ?? getGlobalMessage(issue.lang);
    if (message) {
      issue.message = typeof message === "function" ? (
        // @ts-expect-error
        message(issue)
      ) : message;
    }
    if (isSchema) {
      dataset.typed = false;
    }
    if (dataset.issues) {
      dataset.issues.push(issue);
    } else {
      dataset.issues = [
        issue
      ];
    }
  }
  function _getStandardProps(context) {
    return {
      version: 1,
      vendor: "valibot",
      validate(value2) {
        return context["~run"]({
          value: value2
        }, getGlobalConfig());
      }
    };
  }
  function maxLength(requirement, message) {
    return {
      kind: "validation",
      type: "max_length",
      reference: maxLength,
      async: false,
      expects: `<=${requirement}`,
      requirement,
      message,
      "~run"(dataset, config2) {
        if (dataset.typed && dataset.value.length > this.requirement) {
          _addIssue(this, "length", dataset, config2, {
            received: `${dataset.value.length}`
          });
        }
        return dataset;
      }
    };
  }
  function minLength(requirement, message) {
    return {
      kind: "validation",
      type: "min_length",
      reference: minLength,
      async: false,
      expects: `>=${requirement}`,
      requirement,
      message,
      "~run"(dataset, config2) {
        if (dataset.typed && dataset.value.length < this.requirement) {
          _addIssue(this, "length", dataset, config2, {
            received: `${dataset.value.length}`
          });
        }
        return dataset;
      }
    };
  }
  function regex(requirement, message) {
    return {
      kind: "validation",
      type: "regex",
      reference: regex,
      async: false,
      expects: `${requirement}`,
      requirement,
      message,
      "~run"(dataset, config2) {
        if (dataset.typed && !this.requirement.test(dataset.value)) {
          _addIssue(this, "format", dataset, config2);
        }
        return dataset;
      }
    };
  }
  function object(entries, message) {
    return {
      kind: "schema",
      type: "object",
      reference: object,
      expects: "Object",
      async: false,
      entries,
      message,
      get "~standard"() {
        return _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        var input = dataset.value;
        if (input && typeof input === "object") {
          dataset.typed = true;
          dataset.value = {};
          for (var key in this.entries) {
            var value2 = input[key];
            var valueDataset = this.entries[key]["~run"]({
              value: value2
            }, config2);
            if (valueDataset.issues) {
              var pathItem = {
                type: "object",
                origin: "value",
                input,
                key,
                value: value2
              };
              for (var issue of valueDataset.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [
                    pathItem
                  ];
                }
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = valueDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            if (!valueDataset.typed) {
              dataset.typed = false;
            }
            if (valueDataset.value !== void 0 || key in input) {
              dataset.value[key] = valueDataset.value;
            }
          }
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  function string(message) {
    return {
      kind: "schema",
      type: "string",
      reference: string,
      expects: "string",
      async: false,
      message,
      get "~standard"() {
        return _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (typeof dataset.value === "string") {
          dataset.typed = true;
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  function parse2(schema, input, config2) {
    var dataset = schema["~run"]({
      value: input
    }, getGlobalConfig(config2));
    if (dataset.issues) {
      throw new ValiError(dataset.issues);
    }
    return dataset.value;
  }
  function pipe(...pipe2) {
    return {
      ...pipe2[0],
      pipe: pipe2,
      get "~standard"() {
        return _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        for (var item of pipe2) {
          if (item.kind !== "metadata") {
            if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
              dataset.typed = false;
              break;
            }
            if (!dataset.issues || !config2.abortEarly && !config2.abortPipeEarly) {
              dataset = item["~run"](dataset, config2);
            }
          }
        }
        return dataset;
      }
    };
  }
  var store, store2, store3, store4, NON_DIGIT_REGEX, ValiError, BASE64_REGEX, BIC_REGEX, CUID2_REGEX, DECIMAL_REGEX, DIGITS_REGEX, EMAIL_REGEX, HEXADECIMAL_REGEX, HEX_COLOR_REGEX, IMEI_REGEX, IPV4_REGEX, IPV6_REGEX, IP_REGEX, ISO_DATE_REGEX, ISO_DATE_TIME_REGEX, ISO_TIME_REGEX, ISO_TIME_SECOND_REGEX, ISO_TIMESTAMP_REGEX, ISO_WEEK_REGEX, MAC48_REGEX, MAC64_REGEX, MAC_REGEX, NANO_ID_REGEX, OCTAL_REGEX, ULID_REGEX, UUID_REGEX, CREDIT_CARD_REGEX, SANITIZE_REGEX, PROVIDER_REGEX_LIST;
  var init_dist2 = __esm({
    "node_modules/valibot/dist/index.js"() {
      init_call_super();
      init_class_call_check();
      init_define_property();
      init_inherits();
      init_wrap_native_super();
      NON_DIGIT_REGEX = RegExp("\\D", "gu");
      ValiError = /* @__PURE__ */ function(Error1) {
        "use strict";
        _inherits(ValiError2, Error1);
        function ValiError2(issues) {
          _class_call_check(this, ValiError2);
          var _this;
          _this = _call_super(this, ValiError2, [
            issues[0].message
          ]), /**
          * The error issues.
          */
          _define_property(_this, "issues", void 0);
          _this.name = "ValiError";
          _this.issues = issues;
          return _this;
        }
        return ValiError2;
      }(_wrap_native_super(Error));
      BASE64_REGEX = RegExp("^(?:[\\da-z+/]{4})*(?:[\\da-z+/]{2}==|[\\da-z+/]{3}=)?$", "iu");
      BIC_REGEX = RegExp("^[A-Z]{6}(?!00)[\\dA-Z]{2}(?:[\\dA-Z]{3})?$", "u");
      CUID2_REGEX = RegExp("^[a-z][\\da-z]*$", "u");
      DECIMAL_REGEX = RegExp("^[+-]?\\d+(?:\\.\\d+)?$", "u");
      DIGITS_REGEX = RegExp("^\\d+$", "u");
      EMAIL_REGEX = RegExp("^[\\w+-]+(?:\\.[\\w+-]+)*@[\\da-z]+(?:[.-][\\da-z]+)*\\.[a-z]{2,}$", "iu");
      HEXADECIMAL_REGEX = RegExp("^(?:0[hx])?[\\da-f]+$", "iu");
      HEX_COLOR_REGEX = RegExp("^#(?:[\\da-f]{3,4}|[\\da-f]{6}|[\\da-f]{8})$", "iu");
      IMEI_REGEX = RegExp("^\\d{15}$|^\\d{2}-\\d{6}-\\d{6}-\\d$", "u");
      IPV4_REGEX = // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive
      RegExp("^(?:(?:[1-9]|1\\d|2[0-4])?\\d|25[0-5])(?:\\.(?:(?:[1-9]|1\\d|2[0-4])?\\d|25[0-5])){3}$", "u");
      IPV6_REGEX = RegExp("^(?:(?:[\\da-f]{1,4}:){7}[\\da-f]{1,4}|(?:[\\da-f]{1,4}:){1,7}:|(?:[\\da-f]{1,4}:){1,6}:[\\da-f]{1,4}|(?:[\\da-f]{1,4}:){1,5}(?::[\\da-f]{1,4}){1,2}|(?:[\\da-f]{1,4}:){1,4}(?::[\\da-f]{1,4}){1,3}|(?:[\\da-f]{1,4}:){1,3}(?::[\\da-f]{1,4}){1,4}|(?:[\\da-f]{1,4}:){1,2}(?::[\\da-f]{1,4}){1,5}|[\\da-f]{1,4}:(?::[\\da-f]{1,4}){1,6}|:(?:(?::[\\da-f]{1,4}){1,7}|:)|fe80:(?::[\\da-f]{0,4}){0,4}%[\\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d)\\.){3}(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d)|(?:[\\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d)\\.){3}(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d))$", "iu");
      IP_REGEX = RegExp("^(?:(?:[1-9]|1\\d|2[0-4])?\\d|25[0-5])(?:\\.(?:(?:[1-9]|1\\d|2[0-4])?\\d|25[0-5])){3}$|^(?:(?:[\\da-f]{1,4}:){7}[\\da-f]{1,4}|(?:[\\da-f]{1,4}:){1,7}:|(?:[\\da-f]{1,4}:){1,6}:[\\da-f]{1,4}|(?:[\\da-f]{1,4}:){1,5}(?::[\\da-f]{1,4}){1,2}|(?:[\\da-f]{1,4}:){1,4}(?::[\\da-f]{1,4}){1,3}|(?:[\\da-f]{1,4}:){1,3}(?::[\\da-f]{1,4}){1,4}|(?:[\\da-f]{1,4}:){1,2}(?::[\\da-f]{1,4}){1,5}|[\\da-f]{1,4}:(?::[\\da-f]{1,4}){1,6}|:(?:(?::[\\da-f]{1,4}){1,7}|:)|fe80:(?::[\\da-f]{0,4}){0,4}%[\\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d)\\.){3}(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d)|(?:[\\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d)\\.){3}(?:25[0-5]|(?:2[0-4]|1?\\d)?\\d))$", "iu");
      ISO_DATE_REGEX = RegExp("^\\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\\d|0[1-9]|3[01])$", "u");
      ISO_DATE_TIME_REGEX = RegExp("^\\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\\d|0[1-9]|3[01])T(?:0\\d|1\\d|2[0-3]):[0-5]\\d$", "u");
      ISO_TIME_REGEX = RegExp("^(?:0\\d|1\\d|2[0-3]):[0-5]\\d$", "u");
      ISO_TIME_SECOND_REGEX = RegExp("^(?:0\\d|1\\d|2[0-3])(?::[0-5]\\d){2}$", "u");
      ISO_TIMESTAMP_REGEX = RegExp("^\\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\\d|0[1-9]|3[01])T(?:0\\d|1\\d|2[0-3])(?::[0-5]\\d){2}(?:\\.\\d{1,9})?(?:Z|[+-](?:0\\d|1\\d|2[0-3])(?::?[0-5]\\d)?)$", "u");
      ISO_WEEK_REGEX = RegExp("^\\d{4}-W(?:0[1-9]|[1-4]\\d|5[0-3])$", "u");
      MAC48_REGEX = RegExp("^(?:[\\da-f]{2}:){5}[\\da-f]{2}$|^(?:[\\da-f]{2}-){5}[\\da-f]{2}$|^(?:[\\da-f]{4}\\.){2}[\\da-f]{4}$", "iu");
      MAC64_REGEX = RegExp("^(?:[\\da-f]{2}:){7}[\\da-f]{2}$|^(?:[\\da-f]{2}-){7}[\\da-f]{2}$|^(?:[\\da-f]{4}\\.){3}[\\da-f]{4}$|^(?:[\\da-f]{4}:){3}[\\da-f]{4}$", "iu");
      MAC_REGEX = RegExp("^(?:[\\da-f]{2}:){5}[\\da-f]{2}$|^(?:[\\da-f]{2}-){5}[\\da-f]{2}$|^(?:[\\da-f]{4}\\.){2}[\\da-f]{4}$|^(?:[\\da-f]{2}:){7}[\\da-f]{2}$|^(?:[\\da-f]{2}-){7}[\\da-f]{2}$|^(?:[\\da-f]{4}\\.){3}[\\da-f]{4}$|^(?:[\\da-f]{4}:){3}[\\da-f]{4}$", "iu");
      NANO_ID_REGEX = RegExp("^[\\w-]+$", "u");
      OCTAL_REGEX = RegExp("^(?:0o)?[0-7]+$", "iu");
      ULID_REGEX = RegExp("^[\\da-hjkmnp-tv-z]{26}$", "iu");
      UUID_REGEX = RegExp("^[\\da-f]{8}(?:-[\\da-f]{4}){3}-[\\da-f]{12}$", "iu");
      CREDIT_CARD_REGEX = RegExp("^(?:\\d{14,19}|\\d{4}(?: \\d{3,6}){2,4}|\\d{4}(?:-\\d{3,6}){2,4})$", "u");
      SANITIZE_REGEX = RegExp("[- ]", "gu");
      PROVIDER_REGEX_LIST = [
        // American Express
        RegExp("^3[47]\\d{13}$", "u"),
        // Diners Club
        RegExp("^3(?:0[0-5]|[68]\\d)\\d{11,13}$", "u"),
        // Discover
        RegExp("^6(?:011|5\\d{2})\\d{12,15}$", "u"),
        // JCB
        RegExp("^(?:2131|1800|35\\d{3})\\d{11}$", "u"),
        // Mastercard
        RegExp("^5[1-5]\\d{2}|(?:222\\d|22[3-9]\\d|2[3-6]\\d{2}|27[01]\\d|2720)\\d{12}$", "u"),
        // UnionPay
        RegExp("^(?:6[27]\\d{14,17}|81\\d{14,17})$", "u"),
        // Visa
        RegExp("^4\\d{12}(?:\\d{3,6})?$", "u")
      ];
    }
  });

  // libraries/plugins/src/schemas.ts
  var PluginManifestSchema;
  var init_schemas = __esm({
    "libraries/plugins/src/schemas.ts"() {
      "use strict";
      init_dist2();
      PluginManifestSchema = object({
        name: pipe(string(), minLength(1), maxLength(100)),
        description: pipe(string(), minLength(1), maxLength(500)),
        author: pipe(string(), minLength(1), maxLength(100)),
        id: pipe(string(), regex(/^[a-z0-9-_\.]{1,100}$/)),
        version: pipe(string(), minLength(1), maxLength(50)),
        icon: pipe(string(), minLength(1), maxLength(100))
      });
    }
  });

  // libraries/plugins/src/index.ts
  var src_exports6 = {};
  __export(src_exports6, {
    InstallPluginResultMessage: () => InstallPluginResultMessage,
    installPlugin: () => installPlugin,
    registerExternalPlugin: () => registerExternalPlugin,
    registerExternalPlugins: () => registerExternalPlugins,
    startPlugins: () => startPlugins
  });
  function parseZipFromUri(uri) {
    return _parseZipFromUri.apply(this, arguments);
  }
  function _parseZipFromUri() {
    _parseZipFromUri = _async_to_generator(function* (uri) {
      if (uri.startsWith("http://") || uri.startsWith("https://")) {
        var headRes = yield fetch(uri, {
          method: "HEAD"
        });
        var cl = headRes.headers.get("content-length");
        if (!cl) throw new Error('Server did not provide "Content-Length" header');
        if (Number(cl) > PluginZipFileSizeLimit) throw new Error(`File size exceeds the limit of ${PluginZipFileSizeLimit} bytes`);
        var res = yield fetch(uri);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        var buf = new Uint8Array(yield res.arrayBuffer());
        return [
          false,
          (0, import_uzip5.parse)(buf)
        ];
      }
      if (import_react_native3.Platform.OS === "android" && uri.startsWith("content://")) {
        var fs = ReactNative.NativeModules.RNFSManager;
        var b64 = yield fs.readFile(uri);
        return [
          true,
          (0, import_uzip5.parse)(Buffer.from(b64, "base64"))
        ];
      }
      if (import_react_native3.Platform.OS === "ios" && uri.startsWith("file://")) {
        var buf1 = yield fetch(uri).then((res2) => res2.arrayBuffer());
        return [
          true,
          (0, import_uzip5.parse)(buf1)
        ];
      }
      throw new Error(`Unsupported URI: ${uri}`);
    });
    return _parseZipFromUri.apply(this, arguments);
  }
  function installPlugin(uri) {
    return _installPlugin.apply(this, arguments);
  }
  function _installPlugin() {
    _installPlugin = _async_to_generator(function* (uri, trustUnsigned = false) {
      try {
        var [local, { "manifest.json": manifestJson, "source.zip": sourceZip, public_key: publicKey, "source.zip.sig": sourceZipSig }] = yield parseZipFromUri(uri);
        if (!manifestJson || !sourceZip) return InstallPluginResult.InvalidFileFormat;
        var sourceZipHash = sha512(sourceZip);
        try {
          var manifest = parse2(PluginManifestSchema, JSON.parse(new TextDecoder().decode(manifestJson)));
          if (manifest.id in registeredPlugins) return InstallPluginResult.AlreadyInstalled;
          if (!sourceZipSig || !publicKey) {
            if (!trustUnsigned) return InstallPluginResult.UnsignedUserConfirmationNeeded;
          } else {
            try {
              var key = readRevengeKey(publicKey.buffer);
              if (key.isPrivate()) return InstallPluginResult.InvalidKeyFileFormat;
              if (!key.verify(readRevengeSignature(sourceZipSig).signature, sourceZipHash)) return InstallPluginResult.SignatureVerificationFailed;
            } catch (e) {
              return InstallPluginResult.InvalidKeyFileFormat;
            }
          }
          yield FileModule.writeFile("documents", ExternalPluginManifestFilePath(manifest.id), JSON.stringify(manifest), "utf8");
          yield FileModule.writeFile("documents", ExternalPluginSourceFilePath(manifest.id), Buffer.from(sourceZip).toString("base64"), "base64");
          externalPluginsMetadata[manifest.id] = {
            local,
            source: local ? void 0 : uri
          };
          registerExternalPlugin(manifest.id);
          return InstallPluginResult.Success;
        } catch (e) {
          return InstallPluginResult.InvalidManifest;
        }
      } catch (e) {
        return InstallPluginResult.InvalidFileFormat;
      }
    });
    return _installPlugin.apply(this, arguments);
  }
  function startPlugins() {
    logger3.info("Starting plugins...");
    var promises = [];
    var errors = [];
    for (var plugin3 of Object.values(registeredPlugins)) {
      if (!plugin3.enabled) continue;
      promises.push(plugin3.start().catch((e) => errors.push(e)));
    }
    return new Promise((resolve, reject) => {
      Promise.all(promises).then(() => errors.length ? reject(new AggregateError(errors, `Encountered ${errors.length} errors while starting plugins:
${errors.map(getErrorStack).join("\n")}`)) : resolve()).catch(reject);
    });
  }
  function registerExternalPlugin(id) {
    return _registerExternalPlugin.apply(this, arguments);
  }
  function _registerExternalPlugin() {
    _registerExternalPlugin = _async_to_generator(function* (id) {
      var manifestJson = yield FileModule.readFile(`${DDP}/${ExternalPluginManifestFilePath(id)}`, "utf8");
      var pluginZipB64 = yield FileModule.readFile(`${DDP}/${ExternalPluginSourceFilePath(id)}`, "base64");
      if (!manifestJson || !pluginZipB64) return false;
      var manifest = parse2(PluginManifestSchema, JSON.parse(manifestJson));
      var { "plugin.js": pluginJs } = (0, import_uzip5.parse)(Buffer.from(pluginZipB64, "base64"));
      try {
        var definePlugin = (def) => def;
        var definePluginCallback = globalEvalWithSourceUrl(`((definePlugin)=>{return ${new TextDecoder().decode(pluginJs)}})`, `revenge.plugins.definePlugin(${manifest.id})`);
        registerPlugin(manifest, definePluginCallback(definePlugin));
        logger3.log(`Registered external plugin: ${manifest.id}`);
        return true;
      } catch (e) {
        logger3.error(`Failed to register external plugin: ${manifest.id}`);
        return false;
      }
    });
    return _registerExternalPlugin.apply(this, arguments);
  }
  function registerExternalPlugins() {
    return _registerExternalPlugins.apply(this, arguments);
  }
  function _registerExternalPlugins() {
    _registerExternalPlugins = _async_to_generator(function* () {
      yield awaitStorage(externalPluginsMetadata);
      yield Promise.all(Object.keys(externalPluginsMetadata).map(registerExternalPlugin));
    });
    return _registerExternalPlugins.apply(this, arguments);
  }
  var import_react_native3, import_uzip5, InstallPluginResultMessage, DDP;
  var init_src8 = __esm({
    "libraries/plugins/src/index.ts"() {
      "use strict";
      init_async_to_generator();
      init_errors();
      init_internals();
      init_shared3();
      import_react_native3 = __toESM(require_react_native(), 1);
      import_uzip5 = __toESM(require_UZIP(), 1);
      init_sha512();
      init_v1();
      init_native();
      init_paths();
      init_src6();
      init_dist2();
      init_constants2();
      init_schemas();
      InstallPluginResultMessage = {
        [InstallPluginResult.Success]: "Successfully installed plugin",
        [InstallPluginResult.InvalidFileFormat]: "Invalid plugin file format",
        [InstallPluginResult.InvalidManifest]: "Invalid plugin manifest",
        [InstallPluginResult.AlreadyInstalled]: "Plugin is already installed",
        [InstallPluginResult.InvalidSignatureFileFormat]: "Invalid signature file format",
        [InstallPluginResult.InvalidKeyFileFormat]: "Invalid key file format",
        [InstallPluginResult.SignatureVerificationFailed]: "Signature verification failed",
        [InstallPluginResult.UnsignedUserConfirmationNeeded]: "Unsigned plugin requires user confirmation"
      };
      DDP = FileModule.getConstants().DocumentsDirPath;
    }
  });

  // src/assets/hermes.webp
  var hermes_default;
  var init_hermes = __esm({
    "src/assets/hermes.webp"() {
      hermes_default = "data:image/webp;base64,UklGRiYIAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSOgFAAABoEXbtilJOu/el2gbZbvSbdu2bdtluyoVKtu2bdu2XZnxsMd4kRH33Bef/RMRDiRJCppd8OLdxkIiyJEf0P9elMLQoZCmaQrDz5swpUhEU/rYXJ8cwmC15OuFc+fxOXf6yNA/bzRMjzmkDzCJHus2eeaMmWU4Y+a0wvu9D/CDe4Z9XI5ISP1aax6U7GXQcdh6tCwbHs8Nuo9I8zKSci/BslRtxiCaD0f/4HgNBKbmEuk4Dbr6IEqhomvhrZawfQm6lgN0McjU8bVhVHj6BXfAN1ou1lalFL5N3c36AVycooWe8YtRnMtjF0FZYPI8vQULPpaSHG7QpPd43eNgA9EqHw0snCpPgomuvO6x0VfSvXBdPz8uIIN5Mhc2D9+QSY0QhZ/lNzJ5Vz0CZufcEbvnAX66XJwvR4Jjc3nVxYFrKNbPg+H4adpxjEmfcCOzyk4pacfhwvXNHLyCDAYCPFjoTGXLnJjLdfxx2HiZJMO9CDYP78TddnO4p44DiEm1v2ohRKa6XneC2+0ZcY9FHnCm54SNJ6IAoNuDDlZx5uy74LJ/wriyAFjcoTDYd/ikBRsPlwBwXY3AyRuUAZO+5ipnkIi78Zdg2wMD4UBRQX5+ce/xa84ALh9uXRJK9OAq25MZb2YCh4pDkXA4EgkHCvPDU49Bw9xOUuleDod3eDMRatvA1oJgJBRjOBIqCCzTwF0qGHTTGbis9qE+iQRd+y5s7IwURMKhMoyEu8zjB7NIqJQP8KyD3WlkUILyt1fOjM4vCntfCscE+Tu5T2NJFRVM+pGrnJC4fyU1ggVsHlKUX1gcCHofi8bz4GDfFSRFQqZSX66yZeIBKui6C3BcuAcWjxvUp0coECiMXGIVG3NIzTVwfJlg5Mb4ycUuOX/i6JGDu0qZytNPVqlftywbZGRkZNb6ivv4WTVIKH6+XsCIARf9mFkRdeKot5rCNjN+/CcY3Fhd/bE/h67ad+pCiQvm0OZNKcxZzMYY9fBJ2wP8Wr1+rYw7Hnrqudc+/aqHxtyRgHrzbyPl/GvSX8Du22+/87bc7MyMBg3L/QwbSaSNZxjTS/peYEiNO2/Lu+22226/q07QR2gMT6V5EVG0rXbHbXke76g9PqlwsFmw3q/dUIoONXPujJXc7XCSCAtDSXLWNzTGK6PvqZV7x52Zz0fhJhV/sBZQgmiUFzzc6M6aDar/6tmknjxGknilHTzu7/31HQOSrLxQgQQ3OXx0I2I8fQnJtWv5GZBJxherkXRa6KeRBEnPf3eLGYeSjZ/IJB2nxz9hJffkQdJLdGUajUyy8uwtZGjBoNRdcJJql2tWEtQw2ZGeZOruAnwIK7n4Rh/h5MLF3Z5Sk6uYEdtS0WHXE9eToRmpeJG56OK0hPtOW6yrlPQsbF5d2G/I4MH9+pZl7x6BJcxiIagfacmK2FjGaOAeODx8qgtBM2AzF/rpUkoznikifTcPLvIST9r+5dE23lJ1h6BMrvLoNQq3X4mWC7eeekX9Lne7YB7HMlbi7IW+L9sdFrrqRiQNYSrHkeRsd/DwviYMklvhsJrblEy/tjuyNE8E1XGYymeVC326jZ0PX6mpNOkd2D4lTJ9xE6bp+spCpnIjqZVBnXxY072UOaoHMxbKS7jXektbeetZuCz8olbeeEojH9a86hPcPPchtfIebuK5J01b2RgWqzvO3KyOfMdVTiKpO6lOgs1eKqjQm6tspR254iAzEmE0d5VGPqwZyYMLFr5UK8udZyrtmmqlP7tILm5TKx/hPn47UrRfCv2YyiPXqJW/wuLnw5ruBbCZ2xGCVCjiKpvov5NnsRBFazKV6MA9PKx7MKkToqy9gvqMw+uIsuwa0l/yZsJ1lLUEHdW9YVDKTkQZNW520RQ2AqKJ/yCKAmM4vSHpYSBqKQh8Wrbqiv+BiqXNiQSrAx49ABU3Pe5VH2BQ7RZjp0yO45RBP1cqU1nl8g9DgxKwf/tnyKt+kLUzz31UJKslPlGYUkgpPHo6aQqdFNGUiWhKg/5vIwFWUDggGAIAAHATAJ0BKmAAYAA/HYS4Vi0oP6Oh2A5b8COJZizAA32RUQAeXH0ROeF00mnZi3Cs34GHeFMPKVzGYcunK+QUT/C3NINLqvx79scX8ZMM7nOMDHyzSHWtGsvMgTH7nb0+pIN6uZQBvFRXKtc6LLi9ZQKhZpYr8rT0UB1kEjG/CKiGYURHo/GSlciC95/OLqBxBVWF+EQXIuk2N2BdeHYlyj7za59gAP7vgj/+vssoBn+g2iClDvdcp/UtniO+2jSbvjLQJxMg+nshgrmEVmN5CP6WuBcxLLvg24IZX8A5YrLtP8an7/Nkd7QLEI9z46atnISBbVv//+ZHCBt/l34WG4y4SHlW7MycwvHYrwidZNaeubFL6mpQ+pUihICneYd/qB8BdKG9awX0x2uOOKkKGQPK9x7fSPuQZNW+Lmu2Y+jUeZwN1yrkwbehnXsMqt/NLjq0HiFO3YWnXcIRYgINP0JEdn0mOP6J8W/OWcBIXtXOXrLg5PxJ/sY/8xlftuZq1JTekn9p/weYF8plztTMvyJMCH7HPkLYJGxKH8LZxEvVCkZtiibWOHorFyg6N/gAWb3s/RTaJN9KxgaQfmFrEC/k86QuhQ7BT2Ub4KeT6VuvrrqOAN0/rl6JEd1/9VX5gcRVP1B8p+b3VlLEgEDMiUGD19rJh5c1Jd7Slyrx+xMMSdIypKOQZRgInALFaymeFI5w/pgEQfAA";
    }
  });

  // src/assets/plugin.webp
  var plugin_default;
  var init_plugin = __esm({
    "src/assets/plugin.webp"() {
      plugin_default = "data:image/webp;base64,UklGRqwDAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSOQCAAABoFttmyK5+gp6znpiGI0jZllLCYhZ9pKrIORRBvKY5igEhaBLlpgCuEwLU9D1ndM9U11dnUBEMHDbNo5j7b4XNO0X0GH0MP+rvdmhCkyvkrZLZi1H/DWvhJRCRDAVq/MZJfX4sVqJCHY645ICsHnvwX59AzWBmUUvlzRw4t4Pfxj//9fhDSBCkY/+K0biy7kOuLjK4HyoonSOdDRZKbBE2tjEB7rMrJCe8Qi0uSnJRp+BypIthdJp0PMTIDKAKpaTIB2vQWXg2O2ZhZo0PYduz+AfhlRY8rNovapwiatkYJoC/9vVWgJTb2nIZLkDkO1Xt3+jTZfZ217Q2JbuwN83QaBDe76p6dCOd6DRqXm82tOhLYdQQHf2XN3Tei60UukuyUvJ+6US40k7dlzcDSynE9t+6/VpyLijrLRgcGkKGhJ4SY4GTY5SpDcU//Dt9rqYDGkMT0Ei7tagwG2u8tuOGmt5HzLhPqE+o2jRUswEGn7tP6l5AIikmy60yXeNhbGkGrF0EzTaMMy0SNgCyxxv6ILnI0xukzLqVd5G0bpA1DzBZAJWSxFvf8t/jkFmqC8lf9kGPZG6pwaxBJ66NEimqb54fh+zBO5zdBoqktbpNNYXy2+VBfCAhq8jv0qodC6OFYhGqwpreCtHidmzSk82uN75iNbyZYYSqTBMa5t+eUJnOcyAxPHUtpm+rMhSH+7QpRVHH/gkBxB4Q59aXUZ99HKw6ffk8lrWrYBG+z17TbLo+W17jvp6wKWLhm+nMhT4Xf+16B5wlZegWkt8Tu+dMPCfQftVjed0qSxM3z6W4VIK1+gSWQYy5R0+0SexAq2KLOVZ4QxDGkXOQVCjfW4MHUN0pyWXM1ObzpWhCu8CVy9CZ2VEM3vuS2zyqt8BAG4Mv65688cP904gH73YGGpsSNY/uHdzfQOJbDFtI2MoofREnyfjEuZXG4Zgoh6bImv8ylHCICivLLk63SW4aX+dRw/dCVZQOCCiAAAAsAYAnQEqQABAAD7RWqVNqCUjIjHxyAEAGglAGAuHCCpP+8AAGMm4PtvKRO9N3okmIMW/3r1BCdO6DPbWWEgA/ubOvD2Xu9llQOeRcBLZf1gDZrKSfkzxqDVi7g8et6DeeSWy/tpGFi/nzKq1ekcOxPAqH9/BPjYxWmOC+bcRAyI0Fit4JY11H8Qq9Ohs0jQGO6fW+wDjSQFZwq23NLAAAAAA";
    }
  });

  // src/assets/react.webp
  var react_default;
  var init_react = __esm({
    "src/assets/react.webp"() {
      react_default = "data:image/webp;base64,UklGRmQCAABXRUJQVlA4WAoAAAAQAAAAKwAAKwAAQUxQSBQCAAABoFVte9VMeyTEwbwS6qA4+HBAHFAH1EHGQcYBEl4JSHglvBLuA0I382+OI2IC9N9Yyjv2heqALxdl9YRj+dATSCCW0yOBBJ4fqeRaVKpDmDn4UqSaPD4RLBrWIJK4a1jJD0yELi0gii6D6b2NdvUEeF411vc6y8UDtg2Wi0r/wg02aYPpL7Cgm5n9Ie07VtuevBjeZvvMxhEMM4aMI9jeKc8Ecm9gupxg3xOIxV56JJB3Kdj04kZIN4B4XJmD35NfehJ6tQSbjLw7hA0siLvUWS35GZidNJGlsks1CDsFR5FU8U6XpDkgZklyNmeRZAdRpEoUSSoJmKSJ4STJSCiSVIJNOvjR0KFLko9ckjp0DSdCAo1nsBOXpwnuowJSUkYVplOO8lRhHRkpOdvoAD+1UT8F+OiJSxN5OxmRzJIsTmGSKpH8Ot1gkdTIRdJKr0SRZM2PrUhSsDQ2SXPSdG7QTc6PDja9/CQ047IOXeMN6FA0kfaKwY8KdMhV19aB7FPp+CtOL1MD6KaXzTkHtHmabjZN9Tck573o3UZvzvvpW6fp7c4i6fazQ/gRfkBfbpIq/VOSnKNIJTg0/E4JjlIOwr7QWEey4DgI03ilvbfSL2QBYbrcWd4zslzMCbFcWGLvyWkDc/Adug1+4/rgLfF5Xh1ylR4Jvk7VSfuE5uCcrUiSdYZ512et7t7Xokurzfta9H8TVlA4ICoAAAAwAwCdASosACwAP/3+/3+/uzayI4gD8D+JaQAAG4G9Pg4AAP7mtQAAAAA=";
    }
  });

  // src/assets/revenge.webp
  var revenge_default;
  var init_revenge = __esm({
    "src/assets/revenge.webp"() {
      revenge_default = "data:image/webp;base64,UklGRkgGAABXRUJQVlA4WAoAAAAQAAAAXwAAXgAAQUxQSMoFAAAB8ERtu2nbtm19Of+5tmHbtm3btm3btm3btm3bZjdaG73V/Of/CxS2WktozkhETAD+X9Q5H0IQ10wuBEGhSAN5AJCpltp6n51WnQIQ1zQeE+x63qOfDWN26H3LA9IsDuN/wlyNaiRvGAvSKAHXc0zUZMxaTPxoMvgGCdiAyvL9fE/gGsNjoj+YKrCfF0IGyjmREHwnCG5hZFWjzQtfm/MSgke+HzDXg02YWD3yIoQanJcgDrl+2qW2O+Ps2SD1OS9BHDDx37UkfilwVXxA7tizrLznBY9/OZwkh82JUM15CUGQP/4Cr1FZo3HMrPDlnABjzbvuwVe/8GMvc03jGH43AXwJ5yWIR/4UC29+7C1v/EYm1pq4JqSUB+a+5LvE3KRRk5Fkm88AHs55CeKQ2zPdcjueef/Hg5ifWG/kQQhlPHB6Ipli1GQs2+blcIL88eZYY79Ln/56FPM1Rk3G2q6FlPAY+3kyJmONyiMBTLrQxkfd+NovbeaaRk3GgVW+Al/kgGfZb6zXyDfue3+QMTfFqMnYicZBk8AVCE5mP2u3xKzGqMnYwcozIHkes/bT6iM1JjN2vLE9O3xOwDmMbN7IkxFy4L5gaiDlM/B5s42hNVDi5x4uZ3EaG9g4dKqCmXppjcRF4XN6fmBqICo3g2Q8nqM2UeTRCJmAKxmb6Yaig6hNpHwZLiNYh6mJEn8cGw6Ax1yR1kDGvpnhAThM+DtTA9G4AgQAHN6i1mEpqnWKqZpVU+6MkBHcylhHrsZkA2UajVmrFHlGXsDxdSjvWua8t3pJMmqqzVJMJPnnI/ut8AetivJeSEawBbWSkQsCmGnra780khbVqqWoJDni5ZNWmhDAyYzV3gMcAI9FWV35LkJwAGSBfe77lSRVyylJtj+6dONpAUB6sDBpFYx/TZTjMMVgWpXIqxEALwIA4y9/3PNDSSthJH+4bZe5AMAFcXAY71emSjoPfI77hKnayRkAzgcBgKnXuotWYBx9zGJjA0AQh6yD+6gSE9eBAIDgIWq1UwuyToIHVmQqSPwZgASPYgf/cbXIAxAyAecwVrsJUiLbwr6MBcbeWeFR2mHCP2nVLoXk7UKtkviZR8WAW0owcUNIOcEyNFZVPgmfEaxIq0LjCpBSDpMNohUp70Qo18LFjJUSvwxwADxm6KVVUT4FcWV6cAoji41cBKGMYKZeWiXjsKlzHMb6lqkKlfuh5QpcD5YyWgkqPwBCUQCepbLOxeEBwOM5aiUjtwWCOOd8cFhwMBNLRz4GBPHOeQnAbVTWqNwSkgm4grESE3n2uCjcrY/KisoPF0Ph3C9TWWfksQh5B9VBM/5y0tJTTzD5gvt9QCorR/LeTWadaKKZ1rslMrKmmyAZwTpMNZCR5NA/BhmpxhqVZN9ff40mqaxX+SpcxmPuSKuDKRpJxsR6TZUkUzTWnPjzeHAAHCb4oyaSZmYcQDMz1m/smwUeuW9S6+pu48qQjOA2xiZS7oaQCTi+mSLPzhNsSm0i5QOQjMeMo2kNlPgh8j0epzaQ8d9J8gRrNlSaLw8e97PdPDQuVmKyP9huHOOY2QogmGcI29YwiV/4IgTM+iEZNVluM7R5EkIRAvxxg1jSksZcVdWULNtpkb9PBFcCAky250PfDu/t+69fWa8ltQ5SckUISrsAoGeqGWeebc4Fll5lva12P/i4sy676b6nX33v8x//HNanzFrHKLk2Aqq6IKg3jDPhlDPNs+gK665xMVOHKLkuWqjTOZ8VkZAv3qHsB52i5HpooWNd1nvfg4sY2ZGJ3BAtdLzDVMNpHZHIjdBC5wvWY2InJnJTtNAVm3ZGIjdDC93osQg7MZFbooWudHCfUQcskdughS4N2IntgUrktgjoWocH2T8widwRAd3r0fMyVa02a5M7IaCbPeR6khrrVTJuhYDu9sDqz0fWrQ/PDUG3OwHm2vbQw2o89LCd5gYCGlA86vcezehD3R7/iw1WUDggWAAAAPAGAJ0BKmAAXwA//f7/f7+7NrIuKAPwP4lpAABtkf3xmcYIEERHlib342OFAOaBJke9Cv7QJQApzTcmzxGs0vAA/ua1avUACK+DwABBcZhHeKGCV8ggAAA=";
    }
  });

  // src/plugins/assets/index.ts
  var init_assets = __esm({
    "src/plugins/assets/index.ts"() {
      "use strict";
      init_src5();
      init_internals();
      init_hermes();
      init_plugin();
      init_react();
      init_revenge();
      registerPlugin({
        name: "Assets",
        author: "Revenge",
        description: "Registers Revenge's assets as React Native assets",
        id: "revenge.assets",
        version: "1.0.0",
        icon: "ImageIcon"
      }, {
        beforeAppRender() {
          registerCustomAsset({
            name: "Revenge.RevengeIcon",
            type: "webp"
          }, revenge_default);
          registerCustomAsset({
            name: "Revenge.HermesIcon",
            type: "webp"
          }, hermes_default);
          registerCustomAsset({
            name: "Revenge.ReactIcon",
            type: "webp"
          }, react_default);
          registerCustomAsset({
            name: "Revenge.PluginIcon",
            type: "webp"
          }, plugin_default);
        }
      }, {
        core: true
      });
    }
  });

  // libraries/utils/src/trees.ts
  function treeSearch(tree, filter, opts, depth) {
    if (depth > opts.maxDepth || !tree) return;
    if (filter(tree)) return tree;
    var isArray = Array.isArray(tree);
    var keys = isArray ? tree : Object.keys(tree);
    for (var key of keys) {
      var item = isArray ? key : tree[key];
      if (typeof item !== "object" || item === null) continue;
      if (!isArray && opts.walkable.length && !opts.walkable.includes(key)) continue;
      if (!isArray && opts.ignore.includes(key)) continue;
      var found = treeSearch(item, filter, opts, depth + 1);
      if (found) return found;
    }
  }
  function findInTree(tree, filter, { walkable = [], ignore = [], maxDepth = 100 } = {}) {
    return treeSearch(tree, filter, {
      walkable,
      ignore,
      maxDepth
    }, 0);
  }
  var init_trees = __esm({
    "libraries/utils/src/trees.ts"() {
      "use strict";
    }
  });

  // libraries/utils/src/react.ts
  function findInReactTree(tree, filter) {
    return findInTree(tree, filter, {
      walkable: [
        "props",
        "children",
        "child",
        "sibling"
      ]
    });
  }
  var init_react2 = __esm({
    "libraries/utils/src/react.ts"() {
      "use strict";
      init_trees();
    }
  });

  // src/plugins/settings/pages/(Wrapper).tsx
  function PageWrapper(props) {
    return /* @__PURE__ */ jsx(import_react_native4.View, {
      style: styles3.growable,
      children: /* @__PURE__ */ jsx(import_react_native4.ScrollView, {
        keyboardShouldPersistTaps: "handled",
        contentContainerStyle: styles3.resizable,
        children: /* @__PURE__ */ jsx(Stack, {
          style: [
            props.withTopControls ? styles3.paddedContainerTopControls : styles3.paddedContainer,
            styles3.resizable
          ],
          spacing: 28,
          direction: "vertical",
          children: props.children
        })
      })
    });
  }
  var import_react_native4, styles3;
  var init_Wrapper = __esm({
    "src/plugins/settings/pages/(Wrapper).tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_components();
      import_react_native4 = __toESM(require_react_native(), 1);
      styles3 = import_react_native4.StyleSheet.create({
        growable: {
          flexGrow: 1
        },
        resizable: {
          flex: 1
        },
        paddedContainer: {
          paddingHorizontal: 16,
          paddingTop: 24
        },
        paddedContainerTopControls: {
          paddingTop: 12,
          paddingHorizontal: 16
        }
      });
    }
  });

  // src/plugins/settings/pages/About.tsx
  function AboutSettingsPage() {
    var runtimeProps = HermesInternal.getRuntimeProperties();
    return /* @__PURE__ */ jsx(import_react_native5.ScrollView, {
      children: /* @__PURE__ */ jsxs(PageWrapper, {
        children: [
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: "App",
            children: [
              {
                label: "Revenge",
                icon: "Revenge.RevengeIcon",
                trailing: `${"local"} (${"f2f1365"}${false ? "-dirty" : ""})`
              },
              {
                label: "Discord",
                icon: "Discord",
                trailing: `${ClientInfoModule.Version} (${ClientInfoModule.Build})`
              }
            ].map((props) => (
              // biome-ignore lint/correctness/useJsxKeyInIterable: This page never gets updated
              /* @__PURE__ */ jsx(VersionRow, {
                ...props
              })
            ))
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: "React",
            children: [
              {
                label: "React",
                icon: "Revenge.ReactIcon",
                trailing: React.version
              },
              {
                label: "React Native",
                icon: "Revenge.ReactIcon",
                trailing: runtimeProps["OSS Release Version"].slice(7)
              },
              {
                label: "Hermes Bytecode",
                icon: "Revenge.HermesIcon",
                trailing: `${runtimeProps["Bytecode Version"]} (${runtimeProps.Build})`
              }
            ].map((props) => (
              // biome-ignore lint/correctness/useJsxKeyInIterable: This page never gets updated
              /* @__PURE__ */ jsx(VersionRow, {
                ...props
              })
            ))
          })
        ]
      })
    });
  }
  function VersionRow(props) {
    return /* @__PURE__ */ jsx(TableRow, {
      label: props.label,
      icon: /* @__PURE__ */ jsx(TableRowIcon, {
        source: getAssetIndexByName(props.icon)
      }),
      trailing: /* @__PURE__ */ jsx(TableRowTrailingText, {
        text: props.trailing
      }),
      onPress: () => {
        clipboard.setString(`${props.label} - ${props.trailing}`);
        toasts.open({
          key: `revenge.toasts.settings.about.copied:${props.label}`,
          content: "Copied to clipboard",
          icon: icons_exports.CopyIcon
        });
      }
    });
  }
  var import_react_native5;
  var init_About = __esm({
    "src/plugins/settings/pages/About.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_common();
      init_components();
      init_native();
      init_Wrapper();
      import_react_native5 = __toESM(require_react_native(), 1);
    }
  });

  // src/plugins/settings/contributors.ts
  var contributors_default;
  var init_contributors = __esm({
    "src/plugins/settings/contributors.ts"() {
      "use strict";
      contributors_default = {
        team: [
          {
            name: "Palm",
            url: "https://palmdevs.me",
            icon: "https://github.com/PalmDevs.png",
            roles: [
              "Founder",
              "Lead Developer"
            ]
          },
          {
            name: "oSumAtrIX",
            url: "https://osumatrix.me",
            icon: "https://github.com/oSumAtrIX.png",
            roles: [
              "Project Manager",
              "Android Development"
            ]
          },
          {
            name: "Nexpid",
            url: "https://github.com/nexpid",
            icon: "https://github.com/nexpid.png",
            roles: [
              "Developer"
            ]
          }
        ],
        contributors: [
          {
            name: "Marsh",
            icon: "https://github.com/marshift.png",
            url: "https://marsh.zone",
            roles: [
              "Collaborator"
            ]
          },
          {
            name: "Cristian",
            icon: "https://github.com/Cristiandis.png",
            url: "https://github.com/Cristiandis",
            roles: [
              "Contributor",
              "Early iOS Tester"
            ]
          },
          {
            name: "Bread Cat",
            icon: "https://github.com/breadcat0314.png",
            roles: [
              "Early iOS Tester"
            ],
            url: "https://github.com/breadcat0314"
          },
          {
            name: "Puhbu",
            icon: "https://github.com/puhbu.png",
            roles: [
              "Early Android Tester"
            ]
          },
          {
            name: "true1ann",
            url: "https://github.com/true1ann",
            icon: "https://github.com/true1ann.png",
            roles: [
              "CI Contributor"
            ]
          }
        ]
      };
    }
  });

  // src/plugins/settings/pages/Contributors.tsx
  function ContributorsSettingsPage() {
    return /* @__PURE__ */ jsx(import_react_native6.ScrollView, {
      children: /* @__PURE__ */ jsxs(PageWrapper, {
        children: [
          /* @__PURE__ */ jsx(ContributorsSection, {
            title: "Team",
            data: contributors_default.team
          }),
          /* @__PURE__ */ jsx(ContributorsSection, {
            title: "Contributors",
            data: contributors_default.contributors
          })
        ]
      })
    });
  }
  function ContributorsSection({ title, data }) {
    if (!data.length) return null;
    return /* @__PURE__ */ jsx(TableRowGroup, {
      title,
      children: data.map((item) => {
        var icon = getAssetIndexByName(`Revenge.Contributors.${item.name}`);
        return (
          // biome-ignore lint/correctness/useJsxKeyInIterable: This list never changes
          /* @__PURE__ */ jsx(TableRow, {
            icon: icon ? /* @__PURE__ */ jsx(import_react_native6.Image, {
              style: styles4.avatar,
              source: icon
            }) : /* @__PURE__ */ jsx(TableRowIcon, {
              source: getAssetIndexByName("FriendsIcon")
            }),
            label: item.name,
            subLabel: item.roles.join(" \u2022 "),
            onPress: item.url ? () => links.openURL(item.url) : void 0,
            arrow: !!item.url
          })
        );
      })
    });
  }
  var import_react_native6, styles4;
  var init_Contributors = __esm({
    "src/plugins/settings/pages/Contributors.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_common();
      init_components();
      import_react_native6 = __toESM(require_react_native(), 1);
      init_contributors();
      init_Wrapper();
      styles4 = import_react_native6.StyleSheet.create({
        avatar: {
          width: 32,
          height: 32,
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: "transparent"
        }
      });
    }
  });

  // src/plugins/settings/pages/CustomPageRenderer.tsx
  function CustomPageRenderer() {
    var navigation = NavigationNative.useNavigation();
    var route = NavigationNative.useRoute();
    var { render: PageComponent, ...args } = route.params;
    React.useEffect(() => void navigation.setOptions({
      ...args
    }), []);
    return /* @__PURE__ */ jsx(PageComponent, {});
  }
  var init_CustomPageRenderer = __esm({
    "src/plugins/settings/pages/CustomPageRenderer.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_common();
    }
  });

  // globals:react
  var require_react = __commonJS({
    "globals:react"(exports, module) {
      module.exports = (init_deps(), __toCommonJS(deps_exports)).default["react"];
    }
  });

  // libraries/shared/src/components.tsx
  function Show({
    /**
    * The condition to check.
    */
    when,
    /**
    * The component to show if the condition is met.
    */
    children,
    /**
    * The fallback to show if the condition is not met.
    */
    fallback
  }) {
    return when ? /* @__PURE__ */ jsx(Fragment, {
      children
    }) : fallback ?? null;
  }
  var init_components2 = __esm({
    "libraries/shared/src/components.tsx"() {
      "use strict";
      init_react_jsx_runtime();
    }
  });

  // src/plugins/settings/pages/Plugins/components/BrowsePluginsButton.tsx
  function BrowsePluginsButton() {
    var navigation = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(Button, {
      size: "lg",
      icon: getAssetIndexByName("CompassIcon"),
      variant: "primary",
      text: "Browse plugins",
      onPress: () => navigation.navigate("RevengePluginBrowser")
    });
  }
  var init_BrowsePluginsButton = __esm({
    "src/plugins/settings/pages/Plugins/components/BrowsePluginsButton.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_common();
      init_components();
    }
  });

  // src/plugins/settings/pages/Plugins/components/shared.ts
  var import_react2, import_react_native7, styles5, PluginSettingsPageContext;
  var init_shared5 = __esm({
    "src/plugins/settings/pages/Plugins/components/shared.ts"() {
      "use strict";
      import_react2 = __toESM(require_react(), 1);
      import_react_native7 = __toESM(require_react_native(), 1);
      styles5 = import_react_native7.StyleSheet.create({
        grow: {
          flexGrow: 1
        },
        autoSize: {
          flex: 1
        },
        centerChildren: {
          alignItems: "center",
          justifyContent: "center"
        },
        headerContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingBottom: 12
        },
        queryContainer: {
          flexDirection: "row",
          width: "100%",
          gap: 8
        },
        emptyImage: {
          width: "40%",
          height: "20%",
          objectFit: "contain"
        },
        browserCtaContainer: {
          marginBottom: 16,
          marginTop: 32,
          gap: 16
        }
      });
      PluginSettingsPageContext = (0, import_react2.createContext)(void 0);
    }
  });

  // src/plugins/settings/pages/Plugins/components/Illustrations.tsx
  function NoPlugins() {
    var { ContextMenuComponent } = (0, import_react3.useContext)(PluginSettingsPageContext);
    return /* @__PURE__ */ jsxs(Stack, {
      spacing: 24,
      style: [
        styles5.grow,
        styles5.centerChildren
      ],
      children: [
        /* @__PURE__ */ jsx(import_react_native8.Image, {
          source: getAssetIndexByName("empty"),
          style: styles5.emptyImage
        }),
        /* @__PURE__ */ jsx(Text, {
          variant: "heading-lg/semibold",
          children: "No plugins yet!"
        }),
        /* @__PURE__ */ jsxs(import_react_native8.View, {
          style: [
            styles5.centerChildren,
            {
              gap: 8
            }
          ],
          children: [
            /* @__PURE__ */ jsx(BrowsePluginsButton, {}),
            /* @__PURE__ */ jsx(ContextMenuComponent, {
              children: (props) => /* @__PURE__ */ jsx(Button, {
                ...props,
                size: "lg",
                icon: getAssetIndexByName("FiltersHorizontalIcon"),
                variant: "secondary",
                text: "Change filters"
              })
            })
          ]
        })
      ]
    });
  }
  function NoResults() {
    return /* @__PURE__ */ jsxs(Stack, {
      spacing: 24,
      style: [
        styles5.grow,
        styles5.centerChildren
      ],
      children: [
        /* @__PURE__ */ jsx(import_react_native8.Image, {
          source: getAssetIndexByName("empty_quick_switcher"),
          style: styles5.emptyImage
        }),
        /* @__PURE__ */ jsx(Text, {
          variant: "heading-lg/semibold",
          children: "No results..."
        })
      ]
    });
  }
  var import_react3, import_react_native8;
  var init_Illustrations = __esm({
    "src/plugins/settings/pages/Plugins/components/Illustrations.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_components();
      import_react3 = __toESM(require_react(), 1);
      import_react_native8 = __toESM(require_react_native(), 1);
      init_BrowsePluginsButton();
      init_shared5();
    }
  });

  // libraries/ui/src/components.tsx
  function SearchInput(props) {
    return /* @__PURE__ */ jsx(TextInput, {
      ...props,
      leadingIcon: props.leadingIcon ?? findProp("MagnifyingGlassIcon"),
      placeholder: props.placeholder ?? "Search",
      returnKeyType: "search"
    });
  }
  function FormSwitch2(props) {
    return /* @__PURE__ */ jsx(import_react_native9.View, {
      style: props.disabled ? styles6.disabled : void 0,
      children: /* @__PURE__ */ jsx(FormSwitch, {
        ...props
      })
    });
  }
  var import_react_native9, styles6;
  var init_components3 = __esm({
    "libraries/ui/src/components.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_components();
      init_finders();
      import_react_native9 = __toESM(require_react_native(), 1);
      styles6 = import_react_native9.StyleSheet.create({
        disabled: {
          opacity: 0.5
        }
      });
    }
  });

  // src/plugins/settings/pages/Plugins/components/PluginCard.tsx
  function PluginCard({ name, description, author, version, icon, trailing, horizontalGaps }) {
    var cardStyles = usePluginCardStyles();
    return /* @__PURE__ */ jsxs(Card, {
      style: [
        cardStyles.card,
        horizontalGaps && cardStyles.withGap
      ],
      children: [
        /* @__PURE__ */ jsxs(Stack, {
          direction: "horizontal",
          style: styles5.grow,
          children: [
            /* @__PURE__ */ jsxs(Stack, {
              spacing: 8,
              direction: "horizontal",
              style: [
                cardStyles.topContainer,
                styles5.autoSize
              ],
              children: [
                /* @__PURE__ */ jsx(import_react_native10.Image, {
                  source: getAssetIndexByName(icon ?? "Revenge.PluginIcon"),
                  style: cardStyles.icon
                }),
                /* @__PURE__ */ jsxs(Text, {
                  variant: "heading-lg/semibold",
                  children: [
                    name,
                    " ",
                    /* @__PURE__ */ jsx(Text, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      children: version
                    })
                  ]
                })
              ]
            }),
            trailing
          ]
        }),
        /* @__PURE__ */ jsxs(Stack, {
          spacing: 4,
          style: [
            cardStyles.alignedContainer,
            styles5.grow
          ],
          children: [
            /* @__PURE__ */ jsxs(Text, {
              style: styles5.grow,
              variant: "heading-md/medium",
              color: "text-muted",
              children: [
                "by ",
                author
              ]
            }),
            /* @__PURE__ */ jsx(Text, {
              style: styles5.grow,
              variant: "text-md/medium",
              children: description
            })
          ]
        })
      ]
    });
  }
  var import_react_native10, usePluginCardStyles;
  var init_PluginCard = __esm({
    "src/plugins/settings/pages/Plugins/components/PluginCard.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_common();
      init_components();
      init_colors();
      import_react_native10 = __toESM(require_react_native(), 1);
      init_shared5();
      usePluginCardStyles = createStyles({
        icon: {
          width: 20,
          height: 20,
          tintColor: SemanticColor.TEXT_NORMAL
        },
        card: {
          flexGrow: 1,
          marginBottom: 12,
          paddingVertical: 12,
          paddingHorizontal: 12,
          gap: 4
        },
        withGap: {
          marginRight: 12
        },
        topContainer: {
          alignItems: "center"
        },
        alignedContainer: {
          paddingLeft: 28
        }
      });
    }
  });

  // src/plugins/settings/pages/Plugins/components/InstalledPluginCard.tsx
  function InstalledPluginCard({ enabled: _enabled, manageable, id, ...props }) {
    var [enabled, setEnabled] = (0, import_react4.useState)(_enabled);
    return /* @__PURE__ */ jsx(PluginCard, {
      ...props,
      trailing: /* @__PURE__ */ jsx(FormSwitch2, {
        value: enabled,
        disabled: !manageable,
        onValueChange: /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* (enabled2) {
            var plugin3 = registeredPlugins[id];
            if (enabled2) {
              plugin3.enable();
              if (plugin3.lifecycles.beforeAppRender || plugin3.lifecycles.subscribeModules) showReloadRequiredAlert(enabled2);
              else yield plugin3.start();
            } else {
              var { reloadRequired } = plugin3.disable();
              if (reloadRequired) showReloadRequiredAlert(enabled2);
            }
            setEnabled(enabled2);
          });
          return function(enabled2) {
            return _ref.apply(this, arguments);
          };
        }()
      })
    });
  }
  function showReloadRequiredAlert(enabling) {
    openAlert("revenge.plugins.reload-required", /* @__PURE__ */ jsx(AlertModal, {
      title: "Reload required",
      content: enabling ? "The plugin you have enabled requires a reload to take effect. Would you like to reload now?" : "The plugin you have disabled requires a reload to reverse its effects. Would you like to reload now?",
      actions: /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsx(AlertActionButton, {
            variant: "destructive",
            text: "Reload",
            onPress: () => BundleUpdaterManager.reload()
          }),
          /* @__PURE__ */ jsx(AlertActionButton, {
            variant: "secondary",
            text: "Not now"
          })
        ]
      })
    }));
  }
  var import_react4;
  var init_InstalledPluginCard = __esm({
    "src/plugins/settings/pages/Plugins/components/InstalledPluginCard.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_components3();
      init_common();
      init_components();
      init_native();
      init_internals();
      import_react4 = __toESM(require_react(), 1);
      init_PluginCard();
    }
  });

  // node_modules/tslib/tslib.es6.mjs
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __addDisposableResource: () => __addDisposableResource,
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldIn: () => __classPrivateFieldIn,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __disposeResources: () => __disposeResources,
    __esDecorate: () => __esDecorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __propKey: () => __propKey,
    __read: () => __read,
    __rest: () => __rest,
    __runInitializers: () => __runInitializers,
    __setFunctionName: () => __setFunctionName,
    __spread: () => __spread,
    __spreadArray: () => __spreadArray,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values,
    default: () => tslib_es6_default
  });
  function __extends(d, b3) {
    if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
    extendStatics(d, b3);
    function __() {
      this.constructor = d;
    }
    d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
  }
  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
    return c2 > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _3, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_3 = accept(result.get)) descriptor.get = _3;
        if (_3 = accept(result.set)) descriptor.set = _3;
        if (_3 = accept(result.init)) initializers.unshift(_3);
      } else if (_3 = accept(result)) {
        if (kind === "field") initializers.unshift(_3);
        else descriptor[key] = _3;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  }
  function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  }
  function __propKey(x2) {
    return typeof x2 === "symbol" ? x2 : "".concat(x2);
  }
  function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
      configurable: true,
      value: prefix ? "".concat(prefix, " ", name) : name
    });
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P4, generator) {
    function adopt(value) {
      return value instanceof P4 ? value : new P4(function(resolve) {
        resolve(value);
      });
    }
    return new (P4 || (P4 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _3 = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, f, y2, t, g2;
    return g2 = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
      return this;
    }), g2;
    function verb(n) {
      return function(v2) {
        return step([
          n,
          v2
        ]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g2 && (g2 = 0, op[0] && (_3 = 0)), _3) try {
        if (f = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done) return t;
        if (y2 = 0, t) op = [
          op[0] & 2,
          t.value
        ];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _3.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _3.label++;
            y2 = op[1];
            op = [
              0
            ];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t[1]) {
              _3.label = t[1];
              t = op;
              break;
            }
            if (t && _3.label < t[2]) {
              _3.label = t[2];
              _3.ops.push(op);
              break;
            }
            if (t[2]) _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e) {
        op = [
          6,
          e
        ];
        y2 = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  function __exportStar(m2, o) {
    for (var p in m2) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m2, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i = 0;
    if (m2) return m2.call(o);
    if (o && typeof o.length === "number") return {
      next: function next() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m2 = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m2) return o;
    var i = m2.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error
      };
    } finally {
      try {
        if (r && !r.done && (m2 = i["return"])) m2.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v2) {
    return this instanceof __await ? (this.v = v2, this) : new __await(v2);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g2 = generator.apply(thisArg, _arguments || []), i, q3 = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function awaitReturn(f) {
      return function(v2) {
        return Promise.resolve(v2).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g2[n]) {
        i[n] = function(v2) {
          return new Promise(function(a, b3) {
            q3.push([
              n,
              v2,
              a,
              b3
            ]) > 1 || resume(n, v2);
          });
        };
        if (f) i[n] = f(i[n]);
      }
    }
    function resume(n, v2) {
      try {
        step(g2[n](v2));
      } catch (e) {
        settle(q3[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q3[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v2) {
      if (f(v2), q3.shift(), q3.length) resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function(v2) {
        return (p = !p) ? {
          value: __await(o[n](v2)),
          done: false
        } : f ? f(v2) : v2;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m2 = o[Symbol.asyncIterator], i;
    return m2 ? m2.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v2) {
        return new Promise(function(resolve, reject) {
          v2 = o[n](v2), settle(resolve, reject, v2.done, v2.value);
        });
      };
    }
    function settle(resolve, reject, d, v2) {
      Promise.resolve(v2).then(function(v3) {
        resolve({
          value: v3,
          done: d
        });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", {
        value: raw
      });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod2) {
    if (mod2 && mod2.__esModule) return mod2;
    var result = {};
    if (mod2 != null) {
      for (var k in mod2) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod2, k)) __createBinding(result, mod2, k);
    }
    __setModuleDefault(result, mod2);
    return result;
  }
  function __importDefault(mod2) {
    return mod2 && mod2.__esModule ? mod2 : {
      default: mod2
    };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function dispose2() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value,
        dispose,
        async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  }
  function __disposeResources(env) {
    function fail(e) {
      env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async) return Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError) throw env.error;
    }
    return next();
  }
  var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
      extendStatics = function extendStatics1(d, b3) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b4) {
          d2.__proto__ = b4;
        } || function(d2, b4) {
          for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
        };
        return extendStatics(d, b3);
      };
      __assign = function __assign1() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      __createBinding = Object.create ? function __createBinding2(o, m2, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m2, k);
        if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m2[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m2, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m2[k];
      };
      __setModuleDefault = Object.create ? function __setModuleDefault2(o, v2) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v2
        });
      } : function(o, v2) {
        o["default"] = v2;
      };
      _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function _SuppressedError2(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      tslib_es6_default = {
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __metadata,
        __awaiter,
        __generator,
        __createBinding,
        __exportStar,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet,
        __classPrivateFieldIn,
        __addDisposableResource,
        __disposeResources
      };
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/dependencies/ContextProvider.js
  var require_ContextProvider = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/dependencies/ContextProvider.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var ContextProvider = (
        /** @class */
        /* @__PURE__ */ function() {
          function ContextProvider2() {
          }
          return ContextProvider2;
        }()
      );
      exports.default = ContextProvider;
    }
  });

  // node_modules/ts-object-utils/dist/ObjectUtil.js
  var require_ObjectUtil = __commonJS({
    "node_modules/ts-object-utils/dist/ObjectUtil.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var ObjectUtil = (
        /** @class */
        function() {
          function ObjectUtil2() {
          }
          ObjectUtil2.isNullOrUndefined = function(obj) {
            var ref = obj;
            return !(ref || ref === 0 || ref === false);
          };
          ObjectUtil2.isNull = function(obj) {
            return obj === null;
          };
          ObjectUtil2.isUndefined = function(obj) {
            return obj === void 0;
          };
          ObjectUtil2.isNumber = function(obj) {
            return typeof obj === "number";
          };
          ObjectUtil2.isString = function(obj) {
            return typeof obj === "string";
          };
          ObjectUtil2.isObject = function(obj) {
            return typeof obj === "object";
          };
          return ObjectUtil2;
        }()
      );
      exports.ObjectUtil = ObjectUtil;
    }
  });

  // node_modules/ts-object-utils/dist/Default.js
  var require_Default = __commonJS({
    "node_modules/ts-object-utils/dist/Default.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var ObjectUtil_1 = require_ObjectUtil();
      var Default = (
        /** @class */
        function() {
          function Default2() {
          }
          Default2.value = function(obj, defaultValue) {
            return ObjectUtil_1.ObjectUtil.isNullOrUndefined(obj) ? defaultValue : obj;
          };
          return Default2;
        }()
      );
      exports.Default = Default;
    }
  });

  // node_modules/ts-object-utils/dist/index.js
  var require_dist = __commonJS({
    "node_modules/ts-object-utils/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var ObjectUtil_1 = require_ObjectUtil();
      exports.ObjectUtil = ObjectUtil_1.ObjectUtil;
      var Default_1 = require_Default();
      exports.Default = Default_1.Default;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/dependencies/DataProvider.js
  var require_DataProvider = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/dependencies/DataProvider.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BaseDataProvider = void 0;
      var ts_object_utils_1 = require_dist();
      var BaseDataProvider = (
        /** @class */
        function() {
          function BaseDataProvider2(rowHasChanged, getStableId) {
            this._firstIndexToProcess = 0;
            this._size = 0;
            this._data = [];
            this._hasStableIds = false;
            this._requiresDataChangeHandling = false;
            this.rowHasChanged = rowHasChanged;
            if (getStableId) {
              this.getStableId = getStableId;
              this._hasStableIds = true;
            } else {
              this.getStableId = function(index) {
                return index.toString();
              };
            }
          }
          BaseDataProvider2.prototype.getDataForIndex = function(index) {
            return this._data[index];
          };
          BaseDataProvider2.prototype.getAllData = function() {
            return this._data;
          };
          BaseDataProvider2.prototype.getSize = function() {
            return this._size;
          };
          BaseDataProvider2.prototype.hasStableIds = function() {
            return this._hasStableIds;
          };
          BaseDataProvider2.prototype.requiresDataChangeHandling = function() {
            return this._requiresDataChangeHandling;
          };
          BaseDataProvider2.prototype.getFirstIndexToProcessInternal = function() {
            return this._firstIndexToProcess;
          };
          BaseDataProvider2.prototype.cloneWithRows = function(newData, firstModifiedIndex) {
            var dp = this.newInstance(this.rowHasChanged, this._hasStableIds ? this.getStableId : void 0);
            var newSize = newData.length;
            var iterCount = Math.min(this._size, newSize);
            if (ts_object_utils_1.ObjectUtil.isNullOrUndefined(firstModifiedIndex)) {
              var i = 0;
              for (i = 0; i < iterCount; i++) {
                if (this.rowHasChanged(this._data[i], newData[i])) {
                  break;
                }
              }
              dp._firstIndexToProcess = i;
            } else {
              dp._firstIndexToProcess = Math.max(Math.min(firstModifiedIndex, this._data.length), 0);
            }
            if (dp._firstIndexToProcess !== this._data.length) {
              dp._requiresDataChangeHandling = true;
            }
            dp._data = newData;
            dp._size = newSize;
            return dp;
          };
          return BaseDataProvider2;
        }()
      );
      exports.BaseDataProvider = BaseDataProvider;
      var DataProvider = (
        /** @class */
        function(_super) {
          __extends2(DataProvider2, _super);
          function DataProvider2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          DataProvider2.prototype.newInstance = function(rowHasChanged, getStableId) {
            return new DataProvider2(rowHasChanged, getStableId);
          };
          return DataProvider2;
        }(BaseDataProvider)
      );
      exports.default = DataProvider;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/exceptions/CustomError.js
  var require_CustomError = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/exceptions/CustomError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var CustomError = (
        /** @class */
        function(_super) {
          __extends2(CustomError2, _super);
          function CustomError2(exception) {
            var _this = _super.call(this, exception.message) || this;
            _this.name = exception.type;
            return _this;
          }
          return CustomError2;
        }(Error)
      );
      exports.default = CustomError;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/layoutmanager/LayoutManager.js
  var require_LayoutManager = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/layoutmanager/LayoutManager.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WrapGridLayoutManager = exports.LayoutManager = void 0;
      var CustomError_1 = require_CustomError();
      var LayoutManager = (
        /** @class */
        function() {
          function LayoutManager2() {
          }
          LayoutManager2.prototype.getOffsetForIndex = function(index) {
            var layouts = this.getLayouts();
            if (layouts.length > index) {
              return {
                x: layouts[index].x,
                y: layouts[index].y
              };
            } else {
              throw new CustomError_1.default({
                message: "No layout available for index: " + index,
                type: "LayoutUnavailableException"
              });
            }
          };
          LayoutManager2.prototype.getStyleOverridesForIndex = function(index) {
            return void 0;
          };
          LayoutManager2.prototype.removeLayout = function(index) {
            var layouts = this.getLayouts();
            if (index < layouts.length) {
              layouts.splice(index, 1);
            }
            if (index === 0 && layouts.length > 0) {
              var firstLayout = layouts[0];
              firstLayout.x = 0;
              firstLayout.y = 0;
            }
          };
          return LayoutManager2;
        }()
      );
      exports.LayoutManager = LayoutManager;
      var WrapGridLayoutManager = (
        /** @class */
        function(_super) {
          __extends2(WrapGridLayoutManager2, _super);
          function WrapGridLayoutManager2(layoutProvider, renderWindowSize, isHorizontal, cachedLayouts) {
            if (isHorizontal === void 0) {
              isHorizontal = false;
            }
            var _this = _super.call(this) || this;
            _this._layoutProvider = layoutProvider;
            _this._window = renderWindowSize;
            _this._totalHeight = 0;
            _this._totalWidth = 0;
            _this._isHorizontal = !!isHorizontal;
            _this._layouts = cachedLayouts ? cachedLayouts : [];
            return _this;
          }
          WrapGridLayoutManager2.prototype.getContentDimension = function() {
            return {
              height: this._totalHeight,
              width: this._totalWidth
            };
          };
          WrapGridLayoutManager2.prototype.removeLayout = function(index) {
            _super.prototype.removeLayout.call(this, index);
            if (this._layouts.length === 0) {
              this._totalHeight = 0;
              this._totalWidth = 0;
            }
          };
          WrapGridLayoutManager2.prototype.getLayouts = function() {
            return this._layouts;
          };
          WrapGridLayoutManager2.prototype.getOffsetForIndex = function(index) {
            if (this._layouts.length > index) {
              return {
                x: this._layouts[index].x,
                y: this._layouts[index].y
              };
            } else {
              throw new CustomError_1.default({
                message: "No layout available for index: " + index,
                type: "LayoutUnavailableException"
              });
            }
          };
          WrapGridLayoutManager2.prototype.overrideLayout = function(index, dim) {
            var layout = this._layouts[index];
            if (layout) {
              layout.isOverridden = true;
              layout.width = dim.width;
              layout.height = dim.height;
            }
            return true;
          };
          WrapGridLayoutManager2.prototype.setMaxBounds = function(itemDim) {
            if (this._isHorizontal) {
              itemDim.height = Math.min(this._window.height, itemDim.height);
            } else {
              itemDim.width = Math.min(this._window.width, itemDim.width);
            }
          };
          WrapGridLayoutManager2.prototype.relayoutFromIndex = function(startIndex, itemCount) {
            startIndex = this._locateFirstNeighbourIndex(startIndex);
            var startX = 0;
            var startY = 0;
            var maxBound = 0;
            var startVal = this._layouts[startIndex];
            if (startVal) {
              startX = startVal.x;
              startY = startVal.y;
              this._pointDimensionsToRect(startVal);
            }
            var oldItemCount = this._layouts.length;
            var itemDim = {
              height: 0,
              width: 0
            };
            var itemRect = null;
            var oldLayout = null;
            for (var i = startIndex; i < itemCount; i++) {
              oldLayout = this._layouts[i];
              var layoutType = this._layoutProvider.getLayoutTypeForIndex(i);
              if (oldLayout && oldLayout.isOverridden && oldLayout.type === layoutType) {
                itemDim.height = oldLayout.height;
                itemDim.width = oldLayout.width;
              } else {
                this._layoutProvider.setComputedLayout(layoutType, itemDim, i);
              }
              this.setMaxBounds(itemDim);
              while (!this._checkBounds(startX, startY, itemDim, this._isHorizontal)) {
                if (this._isHorizontal) {
                  startX += maxBound;
                  startY = 0;
                  this._totalWidth += maxBound;
                } else {
                  startX = 0;
                  startY += maxBound;
                  this._totalHeight += maxBound;
                }
                maxBound = 0;
              }
              maxBound = this._isHorizontal ? Math.max(maxBound, itemDim.width) : Math.max(maxBound, itemDim.height);
              if (i > oldItemCount - 1) {
                this._layouts.push({
                  x: startX,
                  y: startY,
                  height: itemDim.height,
                  width: itemDim.width,
                  type: layoutType
                });
              } else {
                itemRect = this._layouts[i];
                itemRect.x = startX;
                itemRect.y = startY;
                itemRect.type = layoutType;
                itemRect.width = itemDim.width;
                itemRect.height = itemDim.height;
              }
              if (this._isHorizontal) {
                startY += itemDim.height;
              } else {
                startX += itemDim.width;
              }
            }
            if (oldItemCount > itemCount) {
              this._layouts.splice(itemCount, oldItemCount - itemCount);
            }
            this._setFinalDimensions(maxBound);
          };
          WrapGridLayoutManager2.prototype._pointDimensionsToRect = function(itemRect) {
            if (this._isHorizontal) {
              this._totalWidth = itemRect.x;
            } else {
              this._totalHeight = itemRect.y;
            }
          };
          WrapGridLayoutManager2.prototype._setFinalDimensions = function(maxBound) {
            if (this._isHorizontal) {
              this._totalHeight = this._window.height;
              this._totalWidth += maxBound;
            } else {
              this._totalWidth = this._window.width;
              this._totalHeight += maxBound;
            }
          };
          WrapGridLayoutManager2.prototype._locateFirstNeighbourIndex = function(startIndex) {
            if (startIndex === 0) {
              return 0;
            }
            var i = startIndex - 1;
            for (; i >= 0; i--) {
              if (this._isHorizontal) {
                if (this._layouts[i].y === 0) {
                  break;
                }
              } else if (this._layouts[i].x === 0) {
                break;
              }
            }
            return i;
          };
          WrapGridLayoutManager2.prototype._checkBounds = function(itemX, itemY, itemDim, isHorizontal) {
            return isHorizontal ? itemY + itemDim.height <= this._window.height + 0.9 : itemX + itemDim.width <= this._window.width + 0.9;
          };
          return WrapGridLayoutManager2;
        }(LayoutManager)
      );
      exports.WrapGridLayoutManager = WrapGridLayoutManager;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/dependencies/LayoutProvider.js
  var require_LayoutProvider = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/dependencies/LayoutProvider.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LayoutProvider = exports.BaseLayoutProvider = void 0;
      var LayoutManager_1 = require_LayoutManager();
      var BaseLayoutProvider = (
        /** @class */
        function() {
          function BaseLayoutProvider2() {
            this.shouldRefreshWithAnchoring = true;
          }
          BaseLayoutProvider2.prototype.createLayoutManager = function(renderWindowSize, isHorizontal, cachedLayouts) {
            this._lastLayoutManager = this.newLayoutManager(renderWindowSize, isHorizontal, cachedLayouts);
            return this._lastLayoutManager;
          };
          BaseLayoutProvider2.prototype.getLayoutManager = function() {
            return this._lastLayoutManager;
          };
          return BaseLayoutProvider2;
        }()
      );
      exports.BaseLayoutProvider = BaseLayoutProvider;
      var LayoutProvider = (
        /** @class */
        function(_super) {
          __extends2(LayoutProvider2, _super);
          function LayoutProvider2(getLayoutTypeForIndex, setLayoutForType) {
            var _this = _super.call(this) || this;
            _this._getLayoutTypeForIndex = getLayoutTypeForIndex;
            _this._setLayoutForType = setLayoutForType;
            _this._tempDim = {
              height: 0,
              width: 0
            };
            return _this;
          }
          LayoutProvider2.prototype.newLayoutManager = function(renderWindowSize, isHorizontal, cachedLayouts) {
            return new LayoutManager_1.WrapGridLayoutManager(this, renderWindowSize, isHorizontal, cachedLayouts);
          };
          LayoutProvider2.prototype.getLayoutTypeForIndex = function(index) {
            return this._getLayoutTypeForIndex(index);
          };
          LayoutProvider2.prototype.setComputedLayout = function(type, dimension, index) {
            return this._setLayoutForType(type, dimension, index);
          };
          LayoutProvider2.prototype.checkDimensionDiscrepancy = function(dimension, type, index) {
            var dimension1 = dimension;
            this.setComputedLayout(type, this._tempDim, index);
            var dimension2 = this._tempDim;
            var layoutManager = this.getLayoutManager();
            if (layoutManager) {
              layoutManager.setMaxBounds(dimension2);
            }
            return dimension1.height !== dimension2.height || dimension1.width !== dimension2.width;
          };
          return LayoutProvider2;
        }(BaseLayoutProvider)
      );
      exports.LayoutProvider = LayoutProvider;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/layoutmanager/GridLayoutManager.js
  var require_GridLayoutManager = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/layoutmanager/GridLayoutManager.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GridLayoutManager = void 0;
      var LayoutManager_1 = require_LayoutManager();
      var GridLayoutManager = (
        /** @class */
        function(_super) {
          __extends2(GridLayoutManager2, _super);
          function GridLayoutManager2(layoutProvider, renderWindowSize, getSpan, maxSpan, acceptableRelayoutDelta, isHorizontal, cachedLayouts) {
            var _this = _super.call(this, layoutProvider, renderWindowSize, isHorizontal, cachedLayouts) || this;
            _this._getSpan = getSpan;
            _this._isGridHorizontal = isHorizontal;
            _this._renderWindowSize = renderWindowSize;
            if (acceptableRelayoutDelta < 0) {
              throw new Error("acceptableRelayoutDelta cannot be less than 0");
            } else {
              _this._acceptableRelayoutDelta = acceptableRelayoutDelta;
            }
            if (maxSpan <= 0) {
              throw new Error("Max Column Span cannot be less than or equal to 0");
            } else {
              _this._maxSpan = maxSpan;
            }
            return _this;
          }
          GridLayoutManager2.prototype.overrideLayout = function(index, dim) {
            var layout = this.getLayouts()[index];
            var heightDiff = Math.abs(dim.height - layout.height);
            var widthDiff = Math.abs(dim.width - layout.width);
            if (layout) {
              if (this._isGridHorizontal) {
                if (heightDiff < this._acceptableRelayoutDelta) {
                  if (widthDiff === 0) {
                    return false;
                  }
                  dim.height = layout.height;
                }
              } else {
                if (widthDiff < this._acceptableRelayoutDelta) {
                  if (heightDiff === 0) {
                    return false;
                  }
                  dim.width = layout.width;
                }
              }
            }
            return _super.prototype.overrideLayout.call(this, index, dim);
          };
          GridLayoutManager2.prototype.getStyleOverridesForIndex = function(index) {
            var columnSpanForIndex = this._getSpan(index);
            return this._isGridHorizontal ? {
              height: this._renderWindowSize.height / this._maxSpan * columnSpanForIndex
            } : {
              width: this._renderWindowSize.width / this._maxSpan * columnSpanForIndex
            };
          };
          return GridLayoutManager2;
        }(LayoutManager_1.WrapGridLayoutManager)
      );
      exports.GridLayoutManager = GridLayoutManager;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/dependencies/GridLayoutProvider.js
  var require_GridLayoutProvider = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/dependencies/GridLayoutProvider.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GridLayoutProvider = void 0;
      var LayoutProvider_1 = require_LayoutProvider();
      var GridLayoutManager_1 = require_GridLayoutManager();
      var GridLayoutProvider = (
        /** @class */
        function(_super) {
          __extends2(GridLayoutProvider2, _super);
          function GridLayoutProvider2(maxSpan, getLayoutType, getSpan, getHeightOrWidth, acceptableRelayoutDelta) {
            var _this = _super.call(this, getLayoutType, function(type, dimension, index) {
              _this.setLayout(dimension, index);
            }) || this;
            _this._getHeightOrWidth = getHeightOrWidth;
            _this._getSpan = getSpan;
            _this._maxSpan = maxSpan;
            _this._acceptableRelayoutDelta = acceptableRelayoutDelta === void 0 || acceptableRelayoutDelta === null ? 1 : acceptableRelayoutDelta;
            return _this;
          }
          GridLayoutProvider2.prototype.newLayoutManager = function(renderWindowSize, isHorizontal, cachedLayouts) {
            this._isHorizontal = isHorizontal;
            this._renderWindowSize = renderWindowSize;
            return new GridLayoutManager_1.GridLayoutManager(this, renderWindowSize, this._getSpan, this._maxSpan, this._acceptableRelayoutDelta, this._isHorizontal, cachedLayouts);
          };
          GridLayoutProvider2.prototype.setLayout = function(dimension, index) {
            var maxSpan = this._maxSpan;
            var itemSpan = this._getSpan(index);
            if (itemSpan > maxSpan) {
              throw new Error("Item span for index " + index + " is more than the max span");
            }
            if (this._renderWindowSize) {
              if (this._isHorizontal) {
                dimension.width = this._getHeightOrWidth(index);
                dimension.height = this._renderWindowSize.height / maxSpan * itemSpan;
              } else {
                dimension.height = this._getHeightOrWidth(index);
                dimension.width = this._renderWindowSize.width / maxSpan * itemSpan;
              }
            } else {
              throw new Error("setLayout called before layoutmanager was created, cannot be handled");
            }
          };
          return GridLayoutProvider2;
        }(LayoutProvider_1.LayoutProvider)
      );
      exports.GridLayoutProvider = GridLayoutProvider;
    }
  });

  // node_modules/lodash.debounce/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.debounce/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      var now = function now2() {
        return root.Date.now();
      };
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
          return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = debounce;
    }
  });

  // node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
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
          function typeOf(object2) {
            if (typeof object2 === "object" && object2 !== null) {
              var $$typeof = object2.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object2.type;
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
          var Fragment2 = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object2) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object2) || typeOf(object2) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object2) {
            return typeOf(object2) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object2) {
            return typeOf(object2) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object2) {
            return typeOf(object2) === REACT_PROVIDER_TYPE;
          }
          function isElement(object2) {
            return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object2) {
            return typeOf(object2) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object2) {
            return typeOf(object2) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object2) {
            return typeOf(object2) === REACT_LAZY_TYPE;
          }
          function isMemo(object2) {
            return typeOf(object2) === REACT_MEMO_TYPE;
          }
          function isPortal(object2) {
            return typeOf(object2) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object2) {
            return typeOf(object2) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object2) {
            return typeOf(object2) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object2) {
            return typeOf(object2) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment2;
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

  // node_modules/prop-types/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
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
      var hasOwnProperty = Object.prototype.hasOwnProperty;
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
        } catch (err2) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
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
      var printWarning = function printWarning2() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function printWarning2(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x2) {
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
                  var err2 = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err2.name = "Invariant Violation";
                  throw err2;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
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
      var printWarning = function printWarning2() {
      };
      if (true) {
        printWarning = function printWarning2(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x2) {
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
        function is(x2, y2) {
          if (x2 === y2) {
            return x2 !== 0 || 1 / x2 === 1 / y2;
          } else {
            return x2 !== x2 && y2 !== y2;
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
                var err2 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                err2.name = "Invariant Violation";
                throw err2;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3) {
                  printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
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
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), {
                expectedType
              });
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
                printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
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
              printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
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
          return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
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
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
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

  // node_modules/recyclerlistview/dist/reactnative/core/exceptions/RecyclerListViewExceptions.js
  var require_RecyclerListViewExceptions = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/exceptions/RecyclerListViewExceptions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var RecyclerListViewExceptions = {
        initializationException: {
          message: "Parameters required for initializing the module are missing",
          type: "Initialization essentials missing"
        },
        itemBoundsException: {
          message: "Dimensions cannot be undefined or null, check if LayoutProvider returns irregular values",
          type: "ItemBoundsException"
        },
        itemTypeNullException: {
          message: "RecyclerListView items always require a type, check if LayoutProvider returns irregular values",
          type: "ItemTypeNullException"
        },
        layoutException: {
          message: "RecyclerListView needs to have a bounded size. Currently height or, width is 0.Consider adding style={{flex:1}} or, fixed dimensions",
          type: "LayoutException"
        },
        platformNotDetectedException: {
          message: "Unable to detect the running platform, if you're trying to run recyclerlistview in browser make sure process.env.RLV_ENV is set to browser in webpack config",
          type: "PlatformNotDetectedException"
        },
        unresolvedDependenciesException: {
          message: "missing datasource or layout provider, cannot proceed without it",
          type: "UnresolvedDependenciesException"
        },
        refNotAsFunctionException: {
          message: "When using StickyContainer, RecyclerListView needs to use ref as a function and not as a string.",
          type: "RefNotAsFunctionException"
        },
        wrongStickyChildTypeException: {
          message: "StickyContainer can only have a single child of type RecyclerListView.",
          type: "WrongStickyChildTypeException"
        },
        usingOldVisibleIndexesChangedParam: {
          message: "onVisibleIndexesChanged has been deprecated. Please use onVisibleIndicesChanged instead.",
          type: "usingOldVisibleIndexesChangedParam"
        },
        stickyIndicesArraySortError: {
          message: "The sticky indices array passed to StickyContainer isn't sorted in ascending order.",
          type: "stickyIndicesArraySortError"
        }
      };
      exports.default = RecyclerListViewExceptions;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/constants/Constants.js
  var require_Constants = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/constants/Constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Constants = void 0;
      exports.Constants = {
        CONTEXT_PROVIDER_OFFSET_KEY_SUFFIX: "_offset",
        CONTEXT_PROVIDER_LAYOUT_KEY_SUFFIX: "_layouts"
      };
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/constants/Messages.js
  var require_Messages = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/constants/Messages.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Messages = void 0;
      exports.Messages = {
        ERROR_LISTVIEW_VALIDATION: "missing datasource or layout provider, cannot proceed without it",
        WARN_SCROLL_TO_INDEX: "scrollTo was called before RecyclerListView was measured, please wait for the mount to finish",
        VISIBLE_INDEXES_CHANGED_DEPRECATED: "onVisibleIndexesChanged deprecated. Please use onVisibleIndicesChanged instead.",
        ANIMATION_ON_PAGINATION: "Looks like you're trying to use RecyclerListView's layout animation render while doing pagination. This operation will be ignored to avoid creation of too many items due to developer error."
      };
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/utils/RecycleItemPool.js
  var require_RecycleItemPool = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/utils/RecycleItemPool.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var RecycleItemPool = (
        /** @class */
        function() {
          function RecycleItemPool2() {
            this._recyclableObjectMap = {};
            this._availabilitySet = {};
          }
          RecycleItemPool2.prototype.putRecycledObject = function(objectType, object2) {
            objectType = this._stringify(objectType);
            var objectSet = this._getRelevantSet(objectType);
            if (!this._availabilitySet[object2]) {
              objectSet[object2] = null;
              this._availabilitySet[object2] = objectType;
            }
          };
          RecycleItemPool2.prototype.getRecycledObject = function(objectType) {
            objectType = this._stringify(objectType);
            var objectSet = this._getRelevantSet(objectType);
            var recycledObject;
            for (var property in objectSet) {
              if (objectSet.hasOwnProperty(property)) {
                recycledObject = property;
                break;
              }
            }
            if (recycledObject) {
              delete objectSet[recycledObject];
              delete this._availabilitySet[recycledObject];
            }
            return recycledObject;
          };
          RecycleItemPool2.prototype.removeFromPool = function(object2) {
            if (this._availabilitySet[object2]) {
              delete this._getRelevantSet(this._availabilitySet[object2])[object2];
              delete this._availabilitySet[object2];
              return true;
            }
            return false;
          };
          RecycleItemPool2.prototype.clearAll = function() {
            this._recyclableObjectMap = {};
            this._availabilitySet = {};
          };
          RecycleItemPool2.prototype._getRelevantSet = function(objectType) {
            var objectSet = this._recyclableObjectMap[objectType];
            if (!objectSet) {
              objectSet = {};
              this._recyclableObjectMap[objectType] = objectSet;
            }
            return objectSet;
          };
          RecycleItemPool2.prototype._stringify = function(objectType) {
            if (typeof objectType === "number") {
              objectType = objectType.toString();
            }
            return objectType;
          };
          return RecycleItemPool2;
        }()
      );
      exports.default = RecycleItemPool;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/utils/BinarySearch.js
  var require_BinarySearch = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/utils/BinarySearch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var CustomError_1 = require_CustomError();
      var BinarySearch = (
        /** @class */
        function() {
          function BinarySearch2() {
          }
          BinarySearch2.findClosestHigherValueIndex = function(size, targetValue, valueExtractor) {
            var low = 0;
            var high = size - 1;
            var mid = Math.floor((low + high) / 2);
            var lastValue = 0;
            var absoluteLastDiff = Math.abs(valueExtractor(mid) - targetValue);
            var result = mid;
            var diff = 0;
            var absoluteDiff = 0;
            if (absoluteLastDiff === 0) {
              return result;
            }
            if (high < 0) {
              throw new CustomError_1.default({
                message: "The collection cannot be empty",
                type: "InvalidStateException"
              });
            }
            while (low <= high) {
              mid = Math.floor((low + high) / 2);
              lastValue = valueExtractor(mid);
              diff = lastValue - targetValue;
              absoluteDiff = Math.abs(diff);
              if (diff >= 0 && absoluteDiff < absoluteLastDiff) {
                absoluteLastDiff = absoluteDiff;
                result = mid;
              }
              if (targetValue < lastValue) {
                high = mid - 1;
              } else if (targetValue > lastValue) {
                low = mid + 1;
              } else {
                return mid;
              }
            }
            return result;
          };
          BinarySearch2.findClosestValueToTarget = function(values, target) {
            var low = 0;
            var high = values.length - 1;
            var mid = Math.floor((low + high) / 2);
            var midValue = values[mid];
            var lastMidValue = midValue + 1;
            while (low <= high && midValue !== lastMidValue) {
              if (midValue === target) {
                break;
              } else if (midValue < target) {
                low = mid;
              } else if (midValue > target) {
                high = mid;
              }
              mid = Math.floor((low + high) / 2);
              lastMidValue = midValue;
              midValue = values[mid];
            }
            return {
              value: midValue,
              index: mid
            };
          };
          BinarySearch2.findValueSmallerThanTarget = function(values, target) {
            var low = 0;
            var high = values.length - 1;
            if (target >= values[high]) {
              return {
                value: values[high],
                index: high
              };
            } else if (target < values[low]) {
              return void 0;
            }
            var midValueAndIndex = this.findClosestValueToTarget(values, target);
            var midValue = midValueAndIndex.value;
            var mid = midValueAndIndex.index;
            if (midValue <= target) {
              return {
                value: midValue,
                index: mid
              };
            } else {
              return {
                value: values[mid - 1],
                index: mid - 1
              };
            }
          };
          BinarySearch2.findValueLargerThanTarget = function(values, target) {
            var low = 0;
            var high = values.length - 1;
            if (target < values[low]) {
              return {
                value: values[low],
                index: low
              };
            } else if (target > values[high]) {
              return void 0;
            }
            var midValueAndIndex = this.findClosestValueToTarget(values, target);
            var midValue = midValueAndIndex.value;
            var mid = midValueAndIndex.index;
            if (midValue >= target) {
              return {
                value: midValue,
                index: mid
              };
            } else {
              return {
                value: values[mid + 1],
                index: mid + 1
              };
            }
          };
          BinarySearch2.findIndexOf = function(array, value) {
            var j = 0;
            var length = array.length;
            var i = 0;
            while (j < length) {
              i = length + j - 1 >> 1;
              if (value > array[i]) {
                j = i + 1;
              } else if (value < array[i]) {
                length = i;
              } else {
                return i;
              }
            }
            return -1;
          };
          return BinarySearch2;
        }()
      );
      exports.default = BinarySearch;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/ViewabilityTracker.js
  var require_ViewabilityTracker = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/ViewabilityTracker.js"(exports) {
      "use strict";
      var __spreadArray2 = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var BinarySearch_1 = require_BinarySearch();
      var ViewabilityTracker = (
        /** @class */
        function() {
          function ViewabilityTracker2(renderAheadOffset, initialOffset) {
            var _this = this;
            this._layouts = [];
            this._valueExtractorForBinarySearch = function(index) {
              var itemRect = _this._layouts[index];
              _this._setRelevantBounds(itemRect, _this._relevantDim);
              return _this._relevantDim.end;
            };
            this._currentOffset = Math.max(0, initialOffset);
            this._maxOffset = 0;
            this._actualOffset = 0;
            this._renderAheadOffset = renderAheadOffset;
            this._visibleWindow = {
              start: 0,
              end: 0
            };
            this._engagedWindow = {
              start: 0,
              end: 0
            };
            this._isHorizontal = false;
            this._windowBound = 0;
            this._visibleIndexes = [];
            this._engagedIndexes = [];
            this.onVisibleRowsChanged = null;
            this.onEngagedRowsChanged = null;
            this._relevantDim = {
              start: 0,
              end: 0
            };
            this._defaultCorrection = {
              startCorrection: 0,
              endCorrection: 0,
              windowShift: 0
            };
          }
          ViewabilityTracker2.prototype.init = function(windowCorrection) {
            this._doInitialFit(this._currentOffset, windowCorrection);
          };
          ViewabilityTracker2.prototype.setLayouts = function(layouts, maxOffset) {
            this._layouts = layouts;
            this._maxOffset = maxOffset;
          };
          ViewabilityTracker2.prototype.setDimensions = function(dimension, isHorizontal) {
            this._isHorizontal = isHorizontal;
            this._windowBound = isHorizontal ? dimension.width : dimension.height;
          };
          ViewabilityTracker2.prototype.forceRefresh = function() {
            var shouldForceScroll = this._actualOffset >= 0 && this._currentOffset >= this._maxOffset - this._windowBound;
            this.forceRefreshWithOffset(this._currentOffset);
            return shouldForceScroll;
          };
          ViewabilityTracker2.prototype.forceRefreshWithOffset = function(offset) {
            this._currentOffset = -1;
            this.updateOffset(offset, false, this._defaultCorrection);
          };
          ViewabilityTracker2.prototype.updateOffset = function(offset, isActual, windowCorrection) {
            var correctedOffset = offset;
            if (isActual) {
              this._actualOffset = offset;
              correctedOffset = Math.min(this._maxOffset, Math.max(0, offset + (windowCorrection.windowShift + windowCorrection.startCorrection)));
            }
            if (this._currentOffset !== correctedOffset) {
              this._currentOffset = correctedOffset;
              this._updateTrackingWindows(offset, windowCorrection);
              var startIndex = 0;
              if (this._visibleIndexes.length > 0) {
                startIndex = this._visibleIndexes[0];
              }
              this._fitAndUpdate(startIndex);
            }
          };
          ViewabilityTracker2.prototype.getLastOffset = function() {
            return this._currentOffset;
          };
          ViewabilityTracker2.prototype.getLastActualOffset = function() {
            return this._actualOffset;
          };
          ViewabilityTracker2.prototype.getEngagedIndexes = function() {
            return this._engagedIndexes;
          };
          ViewabilityTracker2.prototype.findFirstLogicallyVisibleIndex = function() {
            var relevantIndex = this._findFirstVisibleIndexUsingBS(1e-3);
            var result = relevantIndex;
            for (var i = relevantIndex - 1; i >= 0; i--) {
              if (this._isHorizontal) {
                if (this._layouts[relevantIndex].x !== this._layouts[i].x) {
                  break;
                } else {
                  result = i;
                }
              } else {
                if (this._layouts[relevantIndex].y !== this._layouts[i].y) {
                  break;
                } else {
                  result = i;
                }
              }
            }
            return result;
          };
          ViewabilityTracker2.prototype.updateRenderAheadOffset = function(renderAheadOffset) {
            this._renderAheadOffset = Math.max(0, renderAheadOffset);
            this.forceRefreshWithOffset(this._currentOffset);
          };
          ViewabilityTracker2.prototype.getCurrentRenderAheadOffset = function() {
            return this._renderAheadOffset;
          };
          ViewabilityTracker2.prototype.setActualOffset = function(actualOffset) {
            this._actualOffset = actualOffset;
          };
          ViewabilityTracker2.prototype._findFirstVisibleIndexOptimally = function() {
            var firstVisibleIndex = 0;
            if (this._currentOffset > 5e3) {
              firstVisibleIndex = this._findFirstVisibleIndexUsingBS();
            } else if (this._currentOffset > 0) {
              firstVisibleIndex = this._findFirstVisibleIndexLinearly();
            }
            return firstVisibleIndex;
          };
          ViewabilityTracker2.prototype._fitAndUpdate = function(startIndex) {
            var newVisibleItems = [];
            var newEngagedItems = [];
            this._fitIndexes(newVisibleItems, newEngagedItems, startIndex, true);
            this._fitIndexes(newVisibleItems, newEngagedItems, startIndex + 1, false);
            this._diffUpdateOriginalIndexesAndRaiseEvents(newVisibleItems, newEngagedItems);
          };
          ViewabilityTracker2.prototype._doInitialFit = function(offset, windowCorrection) {
            offset = Math.min(this._maxOffset, Math.max(0, offset));
            this._updateTrackingWindows(offset, windowCorrection);
            var firstVisibleIndex = this._findFirstVisibleIndexOptimally();
            this._fitAndUpdate(firstVisibleIndex);
          };
          ViewabilityTracker2.prototype._findFirstVisibleIndexLinearly = function() {
            var count = this._layouts.length;
            var itemRect = null;
            var relevantDim = {
              start: 0,
              end: 0
            };
            for (var i = 0; i < count; i++) {
              itemRect = this._layouts[i];
              this._setRelevantBounds(itemRect, relevantDim);
              if (this._itemIntersectsVisibleWindow(relevantDim.start, relevantDim.end)) {
                return i;
              }
            }
            return 0;
          };
          ViewabilityTracker2.prototype._findFirstVisibleIndexUsingBS = function(bias) {
            if (bias === void 0) {
              bias = 0;
            }
            var count = this._layouts.length;
            return BinarySearch_1.default.findClosestHigherValueIndex(count, this._visibleWindow.start + bias, this._valueExtractorForBinarySearch);
          };
          ViewabilityTracker2.prototype._fitIndexes = function(newVisibleIndexes, newEngagedIndexes, startIndex, isReverse) {
            var count = this._layouts.length;
            var relevantDim = {
              start: 0,
              end: 0
            };
            var i = 0;
            var atLeastOneLocated = false;
            if (startIndex < count) {
              if (!isReverse) {
                for (i = startIndex; i < count; i++) {
                  if (this._checkIntersectionAndReport(i, false, relevantDim, newVisibleIndexes, newEngagedIndexes)) {
                    atLeastOneLocated = true;
                  } else {
                    if (atLeastOneLocated) {
                      break;
                    }
                  }
                }
              } else {
                for (i = startIndex; i >= 0; i--) {
                  if (this._checkIntersectionAndReport(i, true, relevantDim, newVisibleIndexes, newEngagedIndexes)) {
                    atLeastOneLocated = true;
                  } else {
                    if (atLeastOneLocated) {
                      break;
                    }
                  }
                }
              }
            }
          };
          ViewabilityTracker2.prototype._checkIntersectionAndReport = function(index, insertOnTop, relevantDim, newVisibleIndexes, newEngagedIndexes) {
            var itemRect = this._layouts[index];
            var isFound = false;
            this._setRelevantBounds(itemRect, relevantDim);
            if (this._itemIntersectsVisibleWindow(relevantDim.start, relevantDim.end)) {
              if (insertOnTop) {
                newVisibleIndexes.splice(0, 0, index);
                newEngagedIndexes.splice(0, 0, index);
              } else {
                newVisibleIndexes.push(index);
                newEngagedIndexes.push(index);
              }
              isFound = true;
            } else if (this._itemIntersectsEngagedWindow(relevantDim.start, relevantDim.end)) {
              if (insertOnTop) {
                newEngagedIndexes.splice(0, 0, index);
              } else {
                newEngagedIndexes.push(index);
              }
              isFound = true;
            }
            return isFound;
          };
          ViewabilityTracker2.prototype._setRelevantBounds = function(itemRect, relevantDim) {
            if (this._isHorizontal) {
              relevantDim.end = itemRect.x + itemRect.width;
              relevantDim.start = itemRect.x;
            } else {
              relevantDim.end = itemRect.y + itemRect.height;
              relevantDim.start = itemRect.y;
            }
          };
          ViewabilityTracker2.prototype._isItemInBounds = function(window, itemBound) {
            return window.start < itemBound && window.end > itemBound;
          };
          ViewabilityTracker2.prototype._isItemBoundsBeyondWindow = function(window, startBound, endBound) {
            return window.start >= startBound && window.end <= endBound;
          };
          ViewabilityTracker2.prototype._isZeroHeightEdgeElement = function(window, startBound, endBound) {
            return startBound - endBound === 0 && (window.start === startBound || window.end === endBound);
          };
          ViewabilityTracker2.prototype._itemIntersectsWindow = function(window, startBound, endBound) {
            return this._isItemInBounds(window, startBound) || this._isItemInBounds(window, endBound) || this._isItemBoundsBeyondWindow(window, startBound, endBound) || this._isZeroHeightEdgeElement(window, startBound, endBound);
          };
          ViewabilityTracker2.prototype._itemIntersectsEngagedWindow = function(startBound, endBound) {
            return this._itemIntersectsWindow(this._engagedWindow, startBound, endBound);
          };
          ViewabilityTracker2.prototype._itemIntersectsVisibleWindow = function(startBound, endBound) {
            return this._itemIntersectsWindow(this._visibleWindow, startBound, endBound);
          };
          ViewabilityTracker2.prototype._updateTrackingWindows = function(offset, correction) {
            var startCorrection = correction.windowShift + correction.startCorrection;
            var bottomCorrection = correction.windowShift + correction.endCorrection;
            var startOffset = offset + startCorrection;
            var endOffset = offset + this._windowBound + bottomCorrection;
            this._engagedWindow.start = Math.max(0, startOffset - this._renderAheadOffset);
            this._engagedWindow.end = endOffset + this._renderAheadOffset;
            this._visibleWindow.start = startOffset;
            this._visibleWindow.end = endOffset;
          };
          ViewabilityTracker2.prototype._diffUpdateOriginalIndexesAndRaiseEvents = function(newVisibleItems, newEngagedItems) {
            this._diffArraysAndCallFunc(newVisibleItems, this._visibleIndexes, this.onVisibleRowsChanged);
            this._diffArraysAndCallFunc(newEngagedItems, this._engagedIndexes, this.onEngagedRowsChanged);
            this._visibleIndexes = newVisibleItems;
            this._engagedIndexes = newEngagedItems;
          };
          ViewabilityTracker2.prototype._diffArraysAndCallFunc = function(newItems, oldItems, func) {
            if (func) {
              var now = this._calculateArrayDiff(newItems, oldItems);
              var notNow = this._calculateArrayDiff(oldItems, newItems);
              if (now.length > 0 || notNow.length > 0) {
                func(__spreadArray2([], newItems, true), now, notNow);
              }
            }
          };
          ViewabilityTracker2.prototype._calculateArrayDiff = function(arr1, arr2) {
            var len = arr1.length;
            var diffArr = [];
            for (var i = 0; i < len; i++) {
              if (BinarySearch_1.default.findIndexOf(arr2, arr1[i]) === -1) {
                diffArr.push(arr1[i]);
              }
            }
            return diffArr;
          };
          return ViewabilityTracker2;
        }()
      );
      exports.default = ViewabilityTracker;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/utils/TSCast.js
  var require_TSCast = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/utils/TSCast.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var TSCast = (
        /** @class */
        function() {
          function TSCast2() {
          }
          TSCast2.cast = function(object2) {
            return object2;
          };
          return TSCast2;
        }()
      );
      exports.default = TSCast;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/VirtualRenderer.js
  var require_VirtualRenderer = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/VirtualRenderer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var RecycleItemPool_1 = require_RecycleItemPool();
      var CustomError_1 = require_CustomError();
      var RecyclerListViewExceptions_1 = require_RecyclerListViewExceptions();
      var ViewabilityTracker_1 = require_ViewabilityTracker();
      var ts_object_utils_1 = require_dist();
      var TSCast_1 = require_TSCast();
      var VirtualRenderer = (
        /** @class */
        function() {
          function VirtualRenderer2(renderStackChanged, scrollOnNextUpdate, fetchStableId, isRecyclingEnabled) {
            var _this = this;
            this._layoutProvider = TSCast_1.default.cast(null);
            this._recyclePool = TSCast_1.default.cast(null);
            this._layoutManager = null;
            this._viewabilityTracker = null;
            this._optimizeForAnimations = false;
            this._onVisibleItemsChanged = function(all, now, notNow) {
              if (_this.onVisibleItemsChanged) {
                _this.onVisibleItemsChanged(all, now, notNow);
              }
            };
            this._onEngagedItemsChanged = function(all, now, notNow) {
              var count = notNow.length;
              var resolvedKey;
              var disengagedIndex = 0;
              if (_this._isRecyclingEnabled) {
                for (var i = 0; i < count; i++) {
                  disengagedIndex = notNow[i];
                  delete _this._engagedIndexes[disengagedIndex];
                  if (_this._params && disengagedIndex < _this._params.itemCount) {
                    resolvedKey = _this._stableIdToRenderKeyMap[_this._fetchStableId(disengagedIndex)];
                    if (!ts_object_utils_1.ObjectUtil.isNullOrUndefined(resolvedKey)) {
                      _this._recyclePool.putRecycledObject(_this._layoutProvider.getLayoutTypeForIndex(disengagedIndex), resolvedKey.key);
                    }
                  }
                }
              }
              if (_this._updateRenderStack(now)) {
                _this._renderStackChanged(_this._renderStack);
              }
            };
            this._renderStack = {};
            this._fetchStableId = fetchStableId;
            this._stableIdToRenderKeyMap = {};
            this._engagedIndexes = {};
            this._renderStackChanged = renderStackChanged;
            this._scrollOnNextUpdate = scrollOnNextUpdate;
            this._dimensions = null;
            this._params = null;
            this._isRecyclingEnabled = isRecyclingEnabled;
            this._isViewTrackerRunning = false;
            this._markDirty = false;
            this._startKey = 0;
            this.onVisibleItemsChanged = null;
          }
          VirtualRenderer2.prototype.getLayoutDimension = function() {
            if (this._layoutManager) {
              return this._layoutManager.getContentDimension();
            }
            return {
              height: 0,
              width: 0
            };
          };
          VirtualRenderer2.prototype.setOptimizeForAnimations = function(shouldOptimize) {
            this._optimizeForAnimations = shouldOptimize;
          };
          VirtualRenderer2.prototype.hasPendingAnimationOptimization = function() {
            return this._optimizeForAnimations;
          };
          VirtualRenderer2.prototype.updateOffset = function(offsetX, offsetY, isActual, correction) {
            if (this._viewabilityTracker) {
              var offset = this._params && this._params.isHorizontal ? offsetX : offsetY;
              if (!this._isViewTrackerRunning) {
                if (isActual) {
                  this._viewabilityTracker.setActualOffset(offset);
                }
                this.startViewabilityTracker(correction);
              }
              this._viewabilityTracker.updateOffset(offset, isActual, correction);
            }
          };
          VirtualRenderer2.prototype.attachVisibleItemsListener = function(callback) {
            this.onVisibleItemsChanged = callback;
          };
          VirtualRenderer2.prototype.removeVisibleItemsListener = function() {
            this.onVisibleItemsChanged = null;
            if (this._viewabilityTracker) {
              this._viewabilityTracker.onVisibleRowsChanged = null;
            }
          };
          VirtualRenderer2.prototype.getLayoutManager = function() {
            return this._layoutManager;
          };
          VirtualRenderer2.prototype.setParamsAndDimensions = function(params, dim) {
            this._params = params;
            this._dimensions = dim;
          };
          VirtualRenderer2.prototype.setLayoutManager = function(layoutManager) {
            this._layoutManager = layoutManager;
            if (this._params) {
              this._layoutManager.relayoutFromIndex(0, this._params.itemCount);
            }
          };
          VirtualRenderer2.prototype.setLayoutProvider = function(layoutProvider) {
            this._layoutProvider = layoutProvider;
          };
          VirtualRenderer2.prototype.getViewabilityTracker = function() {
            return this._viewabilityTracker;
          };
          VirtualRenderer2.prototype.refreshWithAnchor = function() {
            if (this._viewabilityTracker) {
              var firstVisibleIndex = this._viewabilityTracker.findFirstLogicallyVisibleIndex();
              this._prepareViewabilityTracker();
              var offset = 0;
              if (this._layoutManager && this._params) {
                firstVisibleIndex = Math.min(this._params.itemCount - 1, firstVisibleIndex);
                var point = this._layoutManager.getOffsetForIndex(firstVisibleIndex);
                this._scrollOnNextUpdate(point);
                offset = this._params.isHorizontal ? point.x : point.y;
              }
              this._viewabilityTracker.forceRefreshWithOffset(offset);
            }
          };
          VirtualRenderer2.prototype.refresh = function() {
            if (this._viewabilityTracker) {
              this._prepareViewabilityTracker();
              this._viewabilityTracker.forceRefresh();
            }
          };
          VirtualRenderer2.prototype.getInitialOffset = function() {
            var offset = {
              x: 0,
              y: 0
            };
            if (this._params) {
              var initialRenderIndex = ts_object_utils_1.Default.value(this._params.initialRenderIndex, 0);
              if (initialRenderIndex > 0 && this._layoutManager) {
                offset = this._layoutManager.getOffsetForIndex(initialRenderIndex);
                this._params.initialOffset = this._params.isHorizontal ? offset.x : offset.y;
              } else {
                if (this._params.isHorizontal) {
                  offset.x = ts_object_utils_1.Default.value(this._params.initialOffset, 0);
                  offset.y = 0;
                } else {
                  offset.y = ts_object_utils_1.Default.value(this._params.initialOffset, 0);
                  offset.x = 0;
                }
              }
            }
            return offset;
          };
          VirtualRenderer2.prototype.init = function() {
            this.getInitialOffset();
            this._recyclePool = new RecycleItemPool_1.default();
            if (this._params) {
              this._viewabilityTracker = new ViewabilityTracker_1.default(ts_object_utils_1.Default.value(this._params.renderAheadOffset, 0), ts_object_utils_1.Default.value(this._params.initialOffset, 0));
            } else {
              this._viewabilityTracker = new ViewabilityTracker_1.default(0, 0);
            }
            this._prepareViewabilityTracker();
          };
          VirtualRenderer2.prototype.startViewabilityTracker = function(windowCorrection) {
            if (this._viewabilityTracker) {
              this._isViewTrackerRunning = true;
              this._viewabilityTracker.init(windowCorrection);
            }
          };
          VirtualRenderer2.prototype.syncAndGetKey = function(index, overrideStableIdProvider, newRenderStack, keyToStableIdMap) {
            var getStableId = overrideStableIdProvider ? overrideStableIdProvider : this._fetchStableId;
            var renderStack = newRenderStack ? newRenderStack : this._renderStack;
            var stableIdItem = this._stableIdToRenderKeyMap[getStableId(index)];
            var key = stableIdItem ? stableIdItem.key : void 0;
            if (ts_object_utils_1.ObjectUtil.isNullOrUndefined(key)) {
              var type = this._layoutProvider.getLayoutTypeForIndex(index);
              key = this._recyclePool.getRecycledObject(type);
              if (!ts_object_utils_1.ObjectUtil.isNullOrUndefined(key)) {
                var itemMeta = renderStack[key];
                if (itemMeta) {
                  var oldIndex = itemMeta.dataIndex;
                  itemMeta.dataIndex = index;
                  if (!ts_object_utils_1.ObjectUtil.isNullOrUndefined(oldIndex) && oldIndex !== index) {
                    delete this._stableIdToRenderKeyMap[getStableId(oldIndex)];
                  }
                } else {
                  renderStack[key] = {
                    dataIndex: index
                  };
                  if (keyToStableIdMap && keyToStableIdMap[key]) {
                    delete this._stableIdToRenderKeyMap[keyToStableIdMap[key]];
                  }
                }
              } else {
                key = getStableId(index);
                if (renderStack[key]) {
                  key = this._getCollisionAvoidingKey();
                }
                renderStack[key] = {
                  dataIndex: index
                };
              }
              this._markDirty = true;
              this._stableIdToRenderKeyMap[getStableId(index)] = {
                key,
                type
              };
            }
            if (!ts_object_utils_1.ObjectUtil.isNullOrUndefined(this._engagedIndexes[index])) {
              this._recyclePool.removeFromPool(key);
            }
            var stackItem = renderStack[key];
            if (stackItem && stackItem.dataIndex !== index) {
              console.warn("Possible stableId collision @", index);
            }
            return key;
          };
          VirtualRenderer2.prototype.handleDataSetChange = function(newDataProvider) {
            var _this = this;
            var getStableId = newDataProvider.getStableId;
            var maxIndex = newDataProvider.getSize() - 1;
            var activeStableIds = {};
            var newRenderStack = {};
            var keyToStableIdMap = {};
            if (this._optimizeForAnimations && this._recyclePool) {
              this._recyclePool.clearAll();
            }
            for (var key in this._renderStack) {
              if (this._renderStack.hasOwnProperty(key)) {
                var index = this._renderStack[key].dataIndex;
                if (!ts_object_utils_1.ObjectUtil.isNullOrUndefined(index)) {
                  if (index <= maxIndex) {
                    var stableId = getStableId(index);
                    activeStableIds[stableId] = 1;
                  }
                }
              }
            }
            var oldActiveStableIds = Object.keys(this._stableIdToRenderKeyMap);
            var oldActiveStableIdsCount = oldActiveStableIds.length;
            for (var i = 0; i < oldActiveStableIdsCount; i++) {
              var key = oldActiveStableIds[i];
              var stableIdItem = this._stableIdToRenderKeyMap[key];
              if (stableIdItem) {
                if (!activeStableIds[key]) {
                  if (!this._optimizeForAnimations && this._isRecyclingEnabled) {
                    this._recyclePool.putRecycledObject(stableIdItem.type, stableIdItem.key);
                  }
                  delete this._stableIdToRenderKeyMap[key];
                  var stackItem = this._renderStack[stableIdItem.key];
                  var dataIndex = stackItem ? stackItem.dataIndex : void 0;
                  if (!ts_object_utils_1.ObjectUtil.isNullOrUndefined(dataIndex) && dataIndex <= maxIndex && this._layoutManager) {
                    this._layoutManager.removeLayout(dataIndex);
                  }
                } else {
                  keyToStableIdMap[stableIdItem.key] = key;
                }
              }
            }
            var renderStackKeys = Object.keys(this._renderStack).sort(function(a, b3) {
              var firstItem = _this._renderStack[a];
              var secondItem = _this._renderStack[b3];
              if (firstItem && firstItem.dataIndex && secondItem && secondItem.dataIndex) {
                return firstItem.dataIndex - secondItem.dataIndex;
              }
              return 1;
            });
            var renderStackLength = renderStackKeys.length;
            for (var i = 0; i < renderStackLength; i++) {
              var key = renderStackKeys[i];
              var index = this._renderStack[key].dataIndex;
              if (!ts_object_utils_1.ObjectUtil.isNullOrUndefined(index)) {
                if (index <= maxIndex) {
                  var newKey = this.syncAndGetKey(index, getStableId, newRenderStack, keyToStableIdMap);
                  var newStackItem = newRenderStack[newKey];
                  if (!newStackItem) {
                    newRenderStack[newKey] = {
                      dataIndex: index
                    };
                  } else if (newStackItem.dataIndex !== index) {
                    var cllKey = this._getCollisionAvoidingKey();
                    newRenderStack[cllKey] = {
                      dataIndex: index
                    };
                    this._stableIdToRenderKeyMap[getStableId(index)] = {
                      key: cllKey,
                      type: this._layoutProvider.getLayoutTypeForIndex(index)
                    };
                  }
                }
              }
              delete this._renderStack[key];
            }
            Object.assign(this._renderStack, newRenderStack);
            for (var key in this._renderStack) {
              if (this._renderStack.hasOwnProperty(key)) {
                var index = this._renderStack[key].dataIndex;
                if (!ts_object_utils_1.ObjectUtil.isNullOrUndefined(index) && ts_object_utils_1.ObjectUtil.isNullOrUndefined(this._engagedIndexes[index])) {
                  var type = this._layoutProvider.getLayoutTypeForIndex(index);
                  this._recyclePool.putRecycledObject(type, key);
                }
              }
            }
          };
          VirtualRenderer2.prototype._getCollisionAvoidingKey = function() {
            return "#" + this._startKey++ + "_rlv_c";
          };
          VirtualRenderer2.prototype._prepareViewabilityTracker = function() {
            if (this._viewabilityTracker && this._layoutManager && this._dimensions && this._params) {
              this._viewabilityTracker.onEngagedRowsChanged = this._onEngagedItemsChanged;
              if (this.onVisibleItemsChanged) {
                this._viewabilityTracker.onVisibleRowsChanged = this._onVisibleItemsChanged;
              }
              this._viewabilityTracker.setLayouts(this._layoutManager.getLayouts(), this._params.isHorizontal ? this._layoutManager.getContentDimension().width : this._layoutManager.getContentDimension().height);
              this._viewabilityTracker.setDimensions({
                height: this._dimensions.height,
                width: this._dimensions.width
              }, ts_object_utils_1.Default.value(this._params.isHorizontal, false));
            } else {
              throw new CustomError_1.default(RecyclerListViewExceptions_1.default.initializationException);
            }
          };
          VirtualRenderer2.prototype._updateRenderStack = function(itemIndexes) {
            this._markDirty = false;
            var count = itemIndexes.length;
            var index = 0;
            var hasRenderStackChanged = false;
            for (var i = 0; i < count; i++) {
              index = itemIndexes[i];
              this._engagedIndexes[index] = 1;
              this.syncAndGetKey(index);
              hasRenderStackChanged = this._markDirty;
            }
            this._markDirty = false;
            return hasRenderStackChanged;
          };
          return VirtualRenderer2;
        }()
      );
      exports.default = VirtualRenderer;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/ItemAnimator.js
  var require_ItemAnimator = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/ItemAnimator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BaseItemAnimator = void 0;
      var BaseItemAnimator = (
        /** @class */
        function() {
          function BaseItemAnimator2() {
          }
          BaseItemAnimator2.prototype.animateWillMount = function(atX, atY, itemIndex) {
            return void 0;
          };
          BaseItemAnimator2.prototype.animateDidMount = function(atX, atY, itemRef, itemIndex) {
          };
          BaseItemAnimator2.prototype.animateWillUpdate = function(fromX, fromY, toX, toY, itemRef, itemIndex) {
          };
          BaseItemAnimator2.prototype.animateShift = function(fromX, fromY, toX, toY, itemRef, itemIndex) {
            return false;
          };
          BaseItemAnimator2.prototype.animateWillUnmount = function(atX, atY, itemRef, itemIndex) {
          };
          BaseItemAnimator2.USE_NATIVE_DRIVER = false;
          return BaseItemAnimator2;
        }()
      );
      exports.BaseItemAnimator = BaseItemAnimator;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/utils/ComponentCompat.js
  var require_ComponentCompat = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/utils/ComponentCompat.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ComponentCompat = void 0;
      var React3 = require_react();
      var ComponentCompat = (
        /** @class */
        function(_super) {
          __extends2(ComponentCompat2, _super);
          function ComponentCompat2(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this._hasRenderedOnce = false;
            _this._didPropsChange = false;
            return _this;
          }
          ComponentCompat2.prototype.shouldComponentUpdate = function(newProps, newState) {
            if (this.props !== newProps) {
              this.componentWillReceivePropsCompat(newProps);
            }
            return true;
          };
          ComponentCompat2.prototype.getHasRenderedOnce = function() {
            return this._hasRenderedOnce;
          };
          ComponentCompat2.prototype.componentWillReceivePropsCompat = function(newProps) {
          };
          ComponentCompat2.prototype.componentWillMountCompat = function() {
          };
          ComponentCompat2.prototype.componentWillUpdateCompat = function() {
          };
          ComponentCompat2.prototype.render = function() {
            if (!this._hasRenderedOnce) {
              this._hasRenderedOnce = true;
              this.componentWillMountCompat();
            } else {
              this.componentWillUpdateCompat();
            }
            return this.renderCompat();
          };
          return ComponentCompat2;
        }(React3.Component)
      );
      exports.ComponentCompat = ComponentCompat;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollComponent.js
  var require_BaseScrollComponent = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollComponent.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var React3 = require_react();
      var BaseScrollComponent = (
        /** @class */
        function(_super) {
          __extends2(BaseScrollComponent2, _super);
          function BaseScrollComponent2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          BaseScrollComponent2.prototype.getScrollableNode = function() {
            return null;
          };
          BaseScrollComponent2.prototype.getNativeScrollRef = function() {
            return null;
          };
          return BaseScrollComponent2;
        }(React3.Component)
      );
      exports.default = BaseScrollComponent;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/platform/reactnative/scrollcomponent/ScrollComponent.js
  var require_ScrollComponent = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/platform/reactnative/scrollcomponent/ScrollComponent.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      var __assign2 = exports && exports.__assign || function() {
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign2.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var React3 = require_react();
      var react_native_1 = require_react_native();
      var BaseScrollComponent_1 = require_BaseScrollComponent();
      var TSCast_1 = require_TSCast();
      var ScrollComponent = (
        /** @class */
        function(_super) {
          __extends2(ScrollComponent2, _super);
          function ScrollComponent2(args) {
            var _this = _super.call(this, args) || this;
            _this._scrollViewRef = null;
            _this._getScrollViewRef = function(scrollView) {
              _this._scrollViewRef = scrollView;
            };
            _this._onScroll = function(event) {
              if (event) {
                var contentOffset = event.nativeEvent.contentOffset;
                _this._offset = _this.props.isHorizontal ? contentOffset.x : contentOffset.y;
                _this.props.onScroll(contentOffset.x, contentOffset.y, event);
              }
            };
            _this._onLayout = function(event) {
              if (_this._height !== event.nativeEvent.layout.height || _this._width !== event.nativeEvent.layout.width) {
                _this._height = event.nativeEvent.layout.height;
                _this._width = event.nativeEvent.layout.width;
                if (_this.props.onSizeChanged) {
                  _this._isSizeChangedCalledOnce = true;
                  _this.props.onSizeChanged(event.nativeEvent.layout);
                }
              }
              if (_this.props.onLayout) {
                _this.props.onLayout(event);
              }
            };
            _this._height = args.layoutSize && args.layoutSize.height || 0;
            _this._width = args.layoutSize && args.layoutSize.width || 0;
            _this._offset = 0;
            _this._isSizeChangedCalledOnce = false;
            return _this;
          }
          ScrollComponent2.prototype.scrollTo = function(x2, y2, isAnimated) {
            if (this._scrollViewRef) {
              this._scrollViewRef.scrollTo({
                x: x2,
                y: y2,
                animated: isAnimated
              });
            }
          };
          ScrollComponent2.prototype.getScrollableNode = function() {
            if (this._scrollViewRef && this._scrollViewRef.getScrollableNode) {
              return this._scrollViewRef.getScrollableNode();
            }
            return null;
          };
          ScrollComponent2.prototype.getNativeScrollRef = function() {
            return this._scrollViewRef;
          };
          ScrollComponent2.prototype.render = function() {
            var Scroller = TSCast_1.default.cast(this.props.externalScrollView);
            var renderContentContainer = this.props.renderContentContainer ? this.props.renderContentContainer : this._defaultContainer;
            var contentContainerProps = {
              style: {
                height: this.props.contentHeight,
                width: this.props.contentWidth
              },
              horizontal: this.props.isHorizontal,
              scrollOffset: this._offset,
              renderAheadOffset: this.props.renderAheadOffset,
              windowSize: (this.props.isHorizontal ? this._width : this._height) + this.props.renderAheadOffset
            };
            return React3.createElement(Scroller, __assign2({
              ref: this._getScrollViewRef,
              removeClippedSubviews: false,
              scrollEventThrottle: this.props.scrollThrottle
            }, this.props, {
              horizontal: this.props.isHorizontal,
              onScroll: this._onScroll,
              onLayout: !this._isSizeChangedCalledOnce || this.props.canChangeSize ? this._onLayout : this.props.onLayout
            }), React3.createElement(react_native_1.View, {
              style: {
                flexDirection: this.props.isHorizontal ? "row" : "column"
              }
            }, renderContentContainer(contentContainerProps, this.props.children), this.props.renderFooter ? this.props.renderFooter() : null));
          };
          ScrollComponent2.prototype._defaultContainer = function(props, children) {
            return React3.createElement(react_native_1.View, __assign2({}, props), children);
          };
          ScrollComponent2.defaultProps = {
            contentHeight: 0,
            contentWidth: 0,
            externalScrollView: TSCast_1.default.cast(react_native_1.ScrollView),
            isHorizontal: false,
            scrollThrottle: 16
          };
          return ScrollComponent2;
        }(BaseScrollComponent_1.default)
      );
      exports.default = ScrollComponent;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/viewrenderer/BaseViewRenderer.js
  var require_BaseViewRenderer = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/viewrenderer/BaseViewRenderer.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var ComponentCompat_1 = require_ComponentCompat();
      var BaseViewRenderer = (
        /** @class */
        function(_super) {
          __extends2(BaseViewRenderer2, _super);
          function BaseViewRenderer2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isRendererMounted = true;
            return _this;
          }
          BaseViewRenderer2.prototype.shouldComponentUpdate = function(newProps) {
            var hasMoved = this.props.x !== newProps.x || this.props.y !== newProps.y;
            var hasSizeChanged = !newProps.forceNonDeterministicRendering && (this.props.width !== newProps.width || this.props.height !== newProps.height) || this.props.layoutProvider !== newProps.layoutProvider;
            var hasExtendedStateChanged = this.props.extendedState !== newProps.extendedState;
            var hasInternalSnapshotChanged = this.props.internalSnapshot !== newProps.internalSnapshot;
            var hasDataChanged = this.props.dataHasChanged && this.props.dataHasChanged(this.props.data, newProps.data);
            var shouldUpdate = hasSizeChanged || hasDataChanged || hasExtendedStateChanged || hasInternalSnapshotChanged;
            if (shouldUpdate) {
              newProps.itemAnimator.animateWillUpdate(this.props.x, this.props.y, newProps.x, newProps.y, this.getRef(), newProps.index);
            } else if (hasMoved) {
              shouldUpdate = !newProps.itemAnimator.animateShift(this.props.x, this.props.y, newProps.x, newProps.y, this.getRef(), newProps.index);
            }
            return shouldUpdate;
          };
          BaseViewRenderer2.prototype.componentDidMount = function() {
            this.animatorStyleOverrides = void 0;
            this.props.itemAnimator.animateDidMount(this.props.x, this.props.y, this.getRef(), this.props.index);
          };
          BaseViewRenderer2.prototype.componentWillMountCompat = function() {
            this.animatorStyleOverrides = this.props.itemAnimator.animateWillMount(this.props.x, this.props.y, this.props.index);
          };
          BaseViewRenderer2.prototype.componentWillUnmount = function() {
            this.isRendererMounted = false;
            this.props.itemAnimator.animateWillUnmount(this.props.x, this.props.y, this.getRef(), this.props.index);
          };
          BaseViewRenderer2.prototype.componentDidUpdate = function() {
          };
          BaseViewRenderer2.prototype.renderChild = function() {
            return this.props.childRenderer(this.props.layoutType, this.props.data, this.props.index, this.props.extendedState);
          };
          return BaseViewRenderer2;
        }(ComponentCompat_1.ComponentCompat)
      );
      exports.default = BaseViewRenderer;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/platform/reactnative/viewrenderer/ViewRenderer.js
  var require_ViewRenderer = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/platform/reactnative/viewrenderer/ViewRenderer.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      var __assign2 = exports && exports.__assign || function() {
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign2.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var React3 = require_react();
      var react_native_1 = require_react_native();
      var BaseViewRenderer_1 = require_BaseViewRenderer();
      var ViewRenderer = (
        /** @class */
        function(_super) {
          __extends2(ViewRenderer2, _super);
          function ViewRenderer2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._dim = {
              width: 0,
              height: 0
            };
            _this._viewRef = null;
            _this._setRef = function(view) {
              _this._viewRef = view;
            };
            _this._onLayout = function(event) {
              var xDiff = Math.abs(_this.props.x - event.nativeEvent.layout.x);
              var yDiff = Math.abs(_this.props.y - event.nativeEvent.layout.y);
              if (xDiff < 1 && yDiff < 1 && (_this.props.height !== event.nativeEvent.layout.height || _this.props.width !== event.nativeEvent.layout.width)) {
                _this._dim.height = event.nativeEvent.layout.height;
                _this._dim.width = event.nativeEvent.layout.width;
                if (_this.props.onSizeChanged) {
                  _this.props.onSizeChanged(_this._dim, _this.props.index);
                }
              }
              if (_this.props.onItemLayout) {
                _this.props.onItemLayout(_this.props.index);
              }
            };
            _this._scheduleForceSizeUpdateTimer = function() {
              if (!_this.props.forceNonDeterministicRendering) {
                return;
              }
              var oldDim = __assign2({}, _this._dim);
              setTimeout(function() {
                _this._forceSizeUpdate(oldDim);
              }, 32);
            };
            _this._forceSizeUpdate = function(dim) {
              if (dim.width === _this._dim.width && dim.height === _this._dim.height) {
                if (_this.isRendererMounted && _this.props.onSizeChanged) {
                  _this.props.onSizeChanged(_this._dim, _this.props.index);
                }
              }
            };
            return _this;
          }
          ViewRenderer2.prototype.renderCompat = function() {
            var props = this.props.forceNonDeterministicRendering ? {
              ref: this._setRef,
              onLayout: this._onLayout,
              style: __assign2(__assign2({
                flexDirection: this.props.isHorizontal ? "column" : "row",
                left: this.props.x,
                position: "absolute",
                top: this.props.y
              }, this.props.styleOverrides), this.animatorStyleOverrides)
            } : {
              ref: this._setRef,
              style: __assign2(__assign2({
                left: this.props.x,
                position: "absolute",
                top: this.props.y,
                height: this.props.height,
                width: this.props.width
              }, this.props.styleOverrides), this.animatorStyleOverrides)
            };
            return this._renderItemContainer(props, this.props, this.renderChild());
          };
          ViewRenderer2.prototype.componentDidUpdate = function() {
            _super.prototype.componentDidUpdate.call(this);
            if (this.props.layoutProvider && this._layoutManagerRef) {
              if (this.props.layoutProvider.getLayoutManager() !== this._layoutManagerRef) {
                this._layoutManagerRef = this.props.layoutProvider.getLayoutManager();
                this._scheduleForceSizeUpdateTimer();
              }
            }
          };
          ViewRenderer2.prototype.componentDidMount = function() {
            _super.prototype.componentDidMount.call(this);
            if (this.props.layoutProvider) {
              this._layoutManagerRef = this.props.layoutProvider.getLayoutManager();
            }
          };
          ViewRenderer2.prototype.getRef = function() {
            return this._viewRef;
          };
          ViewRenderer2.prototype._renderItemContainer = function(props, parentProps, children) {
            return this.props.renderItemContainer && this.props.renderItemContainer(props, parentProps, children) || React3.createElement(react_native_1.View, __assign2({}, props), children);
          };
          return ViewRenderer2;
        }(BaseViewRenderer_1.default)
      );
      exports.default = ViewRenderer;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/RecyclerListView.js
  var require_RecyclerListView = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/RecyclerListView.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      var __assign2 = exports && exports.__assign || function() {
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign2.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var debounce = require_lodash();
      var PropTypes = require_prop_types();
      var React3 = require_react();
      var ts_object_utils_1 = require_dist();
      var ContextProvider_1 = require_ContextProvider();
      var DataProvider_1 = require_DataProvider();
      var LayoutProvider_1 = require_LayoutProvider();
      var CustomError_1 = require_CustomError();
      var RecyclerListViewExceptions_1 = require_RecyclerListViewExceptions();
      var Constants_1 = require_Constants();
      var Messages_1 = require_Messages();
      var VirtualRenderer_1 = require_VirtualRenderer();
      var ItemAnimator_1 = require_ItemAnimator();
      var ComponentCompat_1 = require_ComponentCompat();
      var ScrollComponent_1 = require_ScrollComponent();
      var ViewRenderer_1 = require_ViewRenderer();
      var react_native_1 = require_react_native();
      var IS_WEB = !react_native_1.Platform || react_native_1.Platform.OS === "web";
      var RecyclerListView = (
        /** @class */
        function(_super) {
          __extends2(RecyclerListView2, _super);
          function RecyclerListView2(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.refreshRequestDebouncer = debounce(function(executable) {
              executable();
            });
            _this._onEndReachedCalled = false;
            _this._initComplete = false;
            _this._isMounted = true;
            _this._relayoutReqIndex = -1;
            _this._params = {
              initialOffset: 0,
              initialRenderIndex: 0,
              isHorizontal: false,
              itemCount: 0,
              renderAheadOffset: 250
            };
            _this._layout = {
              height: 0,
              width: 0
            };
            _this._pendingScrollToOffset = null;
            _this._tempDim = {
              height: 0,
              width: 0
            };
            _this._initialOffset = 0;
            _this._scrollComponent = null;
            _this._defaultItemAnimator = new ItemAnimator_1.BaseItemAnimator();
            _this.scrollToOffset = function(x2, y2, animate, useWindowCorrection) {
              if (animate === void 0) {
                animate = false;
              }
              if (useWindowCorrection === void 0) {
                useWindowCorrection = false;
              }
              if (_this._scrollComponent) {
                if (_this.props.isHorizontal) {
                  y2 = 0;
                  x2 = useWindowCorrection ? x2 - _this._windowCorrectionConfig.value.windowShift : x2;
                } else {
                  x2 = 0;
                  y2 = useWindowCorrection ? y2 - _this._windowCorrectionConfig.value.windowShift : y2;
                }
                _this._scrollComponent.scrollTo(x2, y2, animate);
              }
            };
            _this._onItemLayout = function(index) {
              _this.onItemLayout(index);
            };
            _this._onSizeChanged = function(layout) {
              if (layout.height === 0 || layout.width === 0) {
                if (!_this.props.suppressBoundedSizeException) {
                  throw new CustomError_1.default(RecyclerListViewExceptions_1.default.layoutException);
                } else {
                  return;
                }
              }
              if (!_this.props.canChangeSize && _this.props.layoutSize) {
                return;
              }
              var hasHeightChanged = _this._layout.height !== layout.height;
              var hasWidthChanged = _this._layout.width !== layout.width;
              _this._layout.height = layout.height;
              _this._layout.width = layout.width;
              if (!_this._initComplete) {
                _this._initComplete = true;
                _this._initTrackers(_this.props);
                _this._processOnEndReached();
              } else {
                if (hasHeightChanged && hasWidthChanged || hasHeightChanged && _this.props.isHorizontal || hasWidthChanged && !_this.props.isHorizontal) {
                  _this._checkAndChangeLayouts(_this.props, true);
                } else {
                  _this._refreshViewability();
                }
              }
            };
            _this._renderStackWhenReady = function(stack) {
              if (_this._pendingScrollToOffset) {
                _this._pendingRenderStack = stack;
                return;
              }
              if (!_this._initStateIfRequired(stack)) {
                _this.setState(function() {
                  return {
                    renderStack: stack
                  };
                });
              }
            };
            _this._dataHasChanged = function(row1, row2) {
              return _this.props.dataProvider.rowHasChanged(row1, row2);
            };
            _this._onViewContainerSizeChange = function(dim, index) {
              var layoutManager = _this._virtualRenderer.getLayoutManager();
              if (_this.props.debugHandlers && _this.props.debugHandlers.resizeDebugHandler) {
                var itemRect = layoutManager.getLayouts()[index];
                _this.props.debugHandlers.resizeDebugHandler.resizeDebug({
                  width: itemRect.width,
                  height: itemRect.height
                }, dim, index);
              }
              if (_this.props.forceNonDeterministicRendering && layoutManager.overrideLayout(index, dim)) {
                if (_this._relayoutReqIndex === -1) {
                  _this._relayoutReqIndex = index;
                } else {
                  _this._relayoutReqIndex = Math.min(_this._relayoutReqIndex, index);
                }
                _this._queueStateRefresh();
              }
            };
            _this._onScroll = function(offsetX, offsetY, rawEvent) {
              _this._virtualRenderer.updateOffset(offsetX, offsetY, true, _this._getWindowCorrection(offsetX, offsetY, _this.props));
              if (_this.props.onScroll) {
                _this.props.onScroll(rawEvent, offsetX, offsetY);
              }
              _this._processOnEndReached();
            };
            _this._virtualRenderer = new VirtualRenderer_1.default(_this._renderStackWhenReady, function(offset) {
              _this._pendingScrollToOffset = offset;
            }, function(index) {
              return _this.props.dataProvider.getStableId(index);
            }, !props.disableRecycling);
            if (_this.props.windowCorrectionConfig) {
              var windowCorrection = void 0;
              if (_this.props.windowCorrectionConfig.value) {
                windowCorrection = _this.props.windowCorrectionConfig.value;
              } else {
                windowCorrection = {
                  startCorrection: 0,
                  endCorrection: 0,
                  windowShift: 0
                };
              }
              _this._windowCorrectionConfig = {
                applyToItemScroll: !!_this.props.windowCorrectionConfig.applyToItemScroll,
                applyToInitialOffset: !!_this.props.windowCorrectionConfig.applyToInitialOffset,
                value: windowCorrection
              };
            } else {
              _this._windowCorrectionConfig = {
                applyToItemScroll: false,
                applyToInitialOffset: false,
                value: {
                  startCorrection: 0,
                  endCorrection: 0,
                  windowShift: 0
                }
              };
            }
            _this._getContextFromContextProvider(props);
            if (props.layoutSize) {
              _this._layout.height = props.layoutSize.height;
              _this._layout.width = props.layoutSize.width;
              _this._initComplete = true;
              _this._initTrackers(props);
            } else {
              _this.state = {
                internalSnapshot: {},
                renderStack: {}
              };
            }
            return _this;
          }
          RecyclerListView2.prototype.componentWillReceivePropsCompat = function(newProps) {
            this._assertDependencyPresence(newProps);
            this._checkAndChangeLayouts(newProps);
            if (!newProps.onVisibleIndicesChanged) {
              this._virtualRenderer.removeVisibleItemsListener();
            }
            if (newProps.onVisibleIndexesChanged) {
              throw new CustomError_1.default(RecyclerListViewExceptions_1.default.usingOldVisibleIndexesChangedParam);
            }
            if (newProps.onVisibleIndicesChanged) {
              this._virtualRenderer.attachVisibleItemsListener(newProps.onVisibleIndicesChanged);
            }
          };
          RecyclerListView2.prototype.componentDidUpdate = function() {
            this._processInitialOffset();
            this._processOnEndReached();
            this._checkAndChangeLayouts(this.props);
            this._virtualRenderer.setOptimizeForAnimations(false);
          };
          RecyclerListView2.prototype.componentDidMount = function() {
            if (this._initComplete) {
              this._processInitialOffset();
              this._processOnEndReached();
            }
          };
          RecyclerListView2.prototype.componentWillUnmount = function() {
            this._isMounted = false;
            if (this.props.contextProvider) {
              var uniqueKey = this.props.contextProvider.getUniqueKey();
              if (uniqueKey) {
                this.props.contextProvider.save(uniqueKey + Constants_1.Constants.CONTEXT_PROVIDER_OFFSET_KEY_SUFFIX, this.getCurrentScrollOffset());
                if (this.props.forceNonDeterministicRendering) {
                  if (this._virtualRenderer) {
                    var layoutManager = this._virtualRenderer.getLayoutManager();
                    if (layoutManager) {
                      var layoutsToCache = layoutManager.getLayouts();
                      this.props.contextProvider.save(uniqueKey + Constants_1.Constants.CONTEXT_PROVIDER_LAYOUT_KEY_SUFFIX, JSON.stringify({
                        layoutArray: layoutsToCache
                      }));
                    }
                  }
                }
              }
            }
          };
          RecyclerListView2.prototype.scrollToIndex = function(index, animate) {
            var layoutManager = this._virtualRenderer.getLayoutManager();
            if (layoutManager) {
              var offsets = layoutManager.getOffsetForIndex(index);
              this.scrollToOffset(offsets.x, offsets.y, animate, this._windowCorrectionConfig.applyToItemScroll);
            } else {
              console.warn(Messages_1.Messages.WARN_SCROLL_TO_INDEX);
            }
          };
          RecyclerListView2.prototype.bringToFocus = function(index, animate) {
            var listSize = this.getRenderedSize();
            var itemLayout = this.getLayout(index);
            var currentScrollOffset = this.getCurrentScrollOffset() + this._windowCorrectionConfig.value.windowShift;
            var isHorizontal = this.props.isHorizontal;
            if (itemLayout) {
              var mainAxisLayoutDimen = isHorizontal ? itemLayout.width : itemLayout.height;
              var mainAxisLayoutPos = isHorizontal ? itemLayout.x : itemLayout.y;
              var mainAxisListDimen = isHorizontal ? listSize.width : listSize.height;
              var screenEndPos = mainAxisListDimen + currentScrollOffset;
              if (mainAxisLayoutDimen > mainAxisListDimen || mainAxisLayoutPos < currentScrollOffset || mainAxisLayoutPos > screenEndPos) {
                this.scrollToIndex(index);
              } else {
                var viewEndPos = mainAxisLayoutPos + mainAxisLayoutDimen;
                if (viewEndPos > screenEndPos) {
                  var offset = viewEndPos - screenEndPos;
                  this.scrollToOffset(offset + currentScrollOffset, offset + currentScrollOffset, animate, true);
                }
              }
            }
          };
          RecyclerListView2.prototype.scrollToItem = function(data, animate) {
            var count = this.props.dataProvider.getSize();
            for (var i = 0; i < count; i++) {
              if (this.props.dataProvider.getDataForIndex(i) === data) {
                this.scrollToIndex(i, animate);
                break;
              }
            }
          };
          RecyclerListView2.prototype.getLayout = function(index) {
            var layoutManager = this._virtualRenderer.getLayoutManager();
            return layoutManager ? layoutManager.getLayouts()[index] : void 0;
          };
          RecyclerListView2.prototype.scrollToTop = function(animate) {
            this.scrollToOffset(0, 0, animate);
          };
          RecyclerListView2.prototype.scrollToEnd = function(animate) {
            var lastIndex = this.props.dataProvider.getSize() - 1;
            this.scrollToIndex(lastIndex, animate);
          };
          RecyclerListView2.prototype.updateRenderAheadOffset = function(renderAheadOffset) {
            var viewabilityTracker = this._virtualRenderer.getViewabilityTracker();
            if (viewabilityTracker) {
              viewabilityTracker.updateRenderAheadOffset(renderAheadOffset);
              return true;
            }
            return false;
          };
          RecyclerListView2.prototype.getCurrentRenderAheadOffset = function() {
            var viewabilityTracker = this._virtualRenderer.getViewabilityTracker();
            if (viewabilityTracker) {
              return viewabilityTracker.getCurrentRenderAheadOffset();
            }
            return this.props.renderAheadOffset;
          };
          RecyclerListView2.prototype.getCurrentScrollOffset = function() {
            var viewabilityTracker = this._virtualRenderer.getViewabilityTracker();
            return viewabilityTracker ? viewabilityTracker.getLastActualOffset() : 0;
          };
          RecyclerListView2.prototype.findApproxFirstVisibleIndex = function() {
            var viewabilityTracker = this._virtualRenderer.getViewabilityTracker();
            return viewabilityTracker ? viewabilityTracker.findFirstLogicallyVisibleIndex() : 0;
          };
          RecyclerListView2.prototype.getRenderedSize = function() {
            return this._layout;
          };
          RecyclerListView2.prototype.getContentDimension = function() {
            return this._virtualRenderer.getLayoutDimension();
          };
          RecyclerListView2.prototype.forceRerender = function() {
            this.setState({
              internalSnapshot: {}
            });
          };
          RecyclerListView2.prototype.getScrollableNode = function() {
            if (this._scrollComponent && this._scrollComponent.getScrollableNode) {
              return this._scrollComponent.getScrollableNode();
            }
            return null;
          };
          RecyclerListView2.prototype.getNativeScrollRef = function() {
            if (this._scrollComponent && this._scrollComponent.getNativeScrollRef) {
              return this._scrollComponent.getNativeScrollRef();
            }
            return null;
          };
          RecyclerListView2.prototype.renderCompat = function() {
            var _this = this;
            return React3.createElement(ScrollComponent_1.default, __assign2({
              ref: function ref(scrollComponent) {
                return _this._scrollComponent = scrollComponent;
              }
            }, this.props, this.props.scrollViewProps, {
              onScroll: this._onScroll,
              onSizeChanged: this._onSizeChanged,
              contentHeight: this._initComplete ? this._virtualRenderer.getLayoutDimension().height : 0,
              contentWidth: this._initComplete ? this._virtualRenderer.getLayoutDimension().width : 0,
              renderAheadOffset: this.getCurrentRenderAheadOffset()
            }), this._generateRenderStack());
          };
          RecyclerListView2.prototype.prepareForLayoutAnimationRender = function() {
            this._virtualRenderer.setOptimizeForAnimations(true);
          };
          RecyclerListView2.prototype.getVirtualRenderer = function() {
            return this._virtualRenderer;
          };
          RecyclerListView2.prototype.onItemLayout = function(index) {
            if (this.props.onItemLayout) {
              this.props.onItemLayout(index);
            }
          };
          RecyclerListView2.prototype._processInitialOffset = function() {
            var _this = this;
            if (this._pendingScrollToOffset) {
              setTimeout(function() {
                if (_this._pendingScrollToOffset) {
                  var offset = _this._pendingScrollToOffset;
                  _this._pendingScrollToOffset = null;
                  if (_this.props.isHorizontal) {
                    offset.y = 0;
                  } else {
                    offset.x = 0;
                  }
                  _this.scrollToOffset(offset.x, offset.y, false, _this._windowCorrectionConfig.applyToInitialOffset);
                  if (_this._pendingRenderStack) {
                    _this._renderStackWhenReady(_this._pendingRenderStack);
                    _this._pendingRenderStack = void 0;
                  }
                }
              }, 0);
            }
          };
          RecyclerListView2.prototype._getContextFromContextProvider = function(props) {
            if (props.contextProvider) {
              var uniqueKey = props.contextProvider.getUniqueKey();
              if (uniqueKey) {
                var offset = props.contextProvider.get(uniqueKey + Constants_1.Constants.CONTEXT_PROVIDER_OFFSET_KEY_SUFFIX);
                if (typeof offset === "number" && offset > 0) {
                  this._initialOffset = offset;
                  if (props.onRecreate) {
                    props.onRecreate({
                      lastOffset: this._initialOffset
                    });
                  }
                  props.contextProvider.remove(uniqueKey + Constants_1.Constants.CONTEXT_PROVIDER_OFFSET_KEY_SUFFIX);
                }
                if (props.forceNonDeterministicRendering) {
                  var cachedLayouts = props.contextProvider.get(uniqueKey + Constants_1.Constants.CONTEXT_PROVIDER_LAYOUT_KEY_SUFFIX);
                  if (cachedLayouts && typeof cachedLayouts === "string") {
                    this._cachedLayouts = JSON.parse(cachedLayouts).layoutArray;
                    props.contextProvider.remove(uniqueKey + Constants_1.Constants.CONTEXT_PROVIDER_LAYOUT_KEY_SUFFIX);
                  }
                }
              }
            }
          };
          RecyclerListView2.prototype._checkAndChangeLayouts = function(newProps, forceFullRender) {
            this._params.isHorizontal = newProps.isHorizontal;
            this._params.itemCount = newProps.dataProvider.getSize();
            this._virtualRenderer.setParamsAndDimensions(this._params, this._layout);
            this._virtualRenderer.setLayoutProvider(newProps.layoutProvider);
            if (newProps.dataProvider.hasStableIds() && this.props.dataProvider !== newProps.dataProvider) {
              if (newProps.dataProvider.requiresDataChangeHandling()) {
                this._virtualRenderer.handleDataSetChange(newProps.dataProvider);
              } else if (this._virtualRenderer.hasPendingAnimationOptimization()) {
                console.warn(Messages_1.Messages.ANIMATION_ON_PAGINATION);
              }
            }
            if (this.props.layoutProvider !== newProps.layoutProvider || this.props.isHorizontal !== newProps.isHorizontal) {
              this._virtualRenderer.setLayoutManager(newProps.layoutProvider.createLayoutManager(this._layout, newProps.isHorizontal));
              if (newProps.layoutProvider.shouldRefreshWithAnchoring) {
                this._virtualRenderer.refreshWithAnchor();
              } else {
                this._virtualRenderer.refresh();
              }
              this._refreshViewability();
            } else if (this.props.dataProvider !== newProps.dataProvider) {
              if (newProps.dataProvider.getSize() > this.props.dataProvider.getSize()) {
                this._onEndReachedCalled = false;
              }
              var layoutManager = this._virtualRenderer.getLayoutManager();
              if (layoutManager) {
                layoutManager.relayoutFromIndex(newProps.dataProvider.getFirstIndexToProcessInternal(), newProps.dataProvider.getSize());
                this._virtualRenderer.refresh();
              }
            } else if (forceFullRender) {
              var layoutManager = this._virtualRenderer.getLayoutManager();
              if (layoutManager) {
                var cachedLayouts = layoutManager.getLayouts();
                this._virtualRenderer.setLayoutManager(newProps.layoutProvider.createLayoutManager(this._layout, newProps.isHorizontal, cachedLayouts));
                this._refreshViewability();
              }
            } else if (this._relayoutReqIndex >= 0) {
              var layoutManager = this._virtualRenderer.getLayoutManager();
              if (layoutManager) {
                var dataProviderSize = newProps.dataProvider.getSize();
                layoutManager.relayoutFromIndex(Math.min(Math.max(dataProviderSize - 1, 0), this._relayoutReqIndex), dataProviderSize);
                this._relayoutReqIndex = -1;
                this._refreshViewability();
              }
            }
          };
          RecyclerListView2.prototype._refreshViewability = function() {
            this._virtualRenderer.refresh();
            this._queueStateRefresh();
          };
          RecyclerListView2.prototype._queueStateRefresh = function() {
            var _this = this;
            this.refreshRequestDebouncer(function() {
              if (_this._isMounted) {
                _this.setState(function(prevState) {
                  return prevState;
                });
              }
            });
          };
          RecyclerListView2.prototype._initStateIfRequired = function(stack) {
            if (!this.state && !this.getHasRenderedOnce()) {
              this.state = {
                internalSnapshot: {},
                renderStack: stack
              };
              return true;
            }
            return false;
          };
          RecyclerListView2.prototype._initTrackers = function(props) {
            this._assertDependencyPresence(props);
            if (props.onVisibleIndexesChanged) {
              throw new CustomError_1.default(RecyclerListViewExceptions_1.default.usingOldVisibleIndexesChangedParam);
            }
            if (props.onVisibleIndicesChanged) {
              this._virtualRenderer.attachVisibleItemsListener(props.onVisibleIndicesChanged);
            }
            this._params = {
              initialOffset: this._initialOffset ? this._initialOffset : props.initialOffset,
              initialRenderIndex: props.initialRenderIndex,
              isHorizontal: props.isHorizontal,
              itemCount: props.dataProvider.getSize(),
              renderAheadOffset: props.renderAheadOffset
            };
            this._virtualRenderer.setParamsAndDimensions(this._params, this._layout);
            var layoutManager = props.layoutProvider.createLayoutManager(this._layout, props.isHorizontal, this._cachedLayouts);
            this._virtualRenderer.setLayoutManager(layoutManager);
            this._virtualRenderer.setLayoutProvider(props.layoutProvider);
            this._virtualRenderer.init();
            var offset = this._virtualRenderer.getInitialOffset();
            var contentDimension = layoutManager.getContentDimension();
            if (offset.y > 0 && contentDimension.height > this._layout.height || offset.x > 0 && contentDimension.width > this._layout.width) {
              this._pendingScrollToOffset = offset;
              if (!this._initStateIfRequired()) {
                this.setState({});
              }
            } else {
              this._virtualRenderer.startViewabilityTracker(this._getWindowCorrection(offset.x, offset.y, props));
            }
          };
          RecyclerListView2.prototype._getWindowCorrection = function(offsetX, offsetY, props) {
            return props.applyWindowCorrection && props.applyWindowCorrection(offsetX, offsetY, this._windowCorrectionConfig.value) || this._windowCorrectionConfig.value;
          };
          RecyclerListView2.prototype._assertDependencyPresence = function(props) {
            if (!props.dataProvider || !props.layoutProvider) {
              throw new CustomError_1.default(RecyclerListViewExceptions_1.default.unresolvedDependenciesException);
            }
          };
          RecyclerListView2.prototype._assertType = function(type) {
            if (!type && type !== 0) {
              throw new CustomError_1.default(RecyclerListViewExceptions_1.default.itemTypeNullException);
            }
          };
          RecyclerListView2.prototype._renderRowUsingMeta = function(itemMeta) {
            var dataSize = this.props.dataProvider.getSize();
            var dataIndex = itemMeta.dataIndex;
            if (!ts_object_utils_1.ObjectUtil.isNullOrUndefined(dataIndex) && dataIndex < dataSize) {
              var itemRect = this._virtualRenderer.getLayoutManager().getLayouts()[dataIndex];
              var data = this.props.dataProvider.getDataForIndex(dataIndex);
              var type = this.props.layoutProvider.getLayoutTypeForIndex(dataIndex);
              var key = this._virtualRenderer.syncAndGetKey(dataIndex);
              var styleOverrides = this._virtualRenderer.getLayoutManager().getStyleOverridesForIndex(dataIndex);
              this._assertType(type);
              if (!this.props.forceNonDeterministicRendering) {
                this._checkExpectedDimensionDiscrepancy(itemRect, type, dataIndex);
              }
              return React3.createElement(ViewRenderer_1.default, {
                key,
                data,
                dataHasChanged: this._dataHasChanged,
                x: itemRect.x,
                y: itemRect.y,
                layoutType: type,
                index: dataIndex,
                styleOverrides,
                layoutProvider: this.props.layoutProvider,
                forceNonDeterministicRendering: this.props.forceNonDeterministicRendering,
                isHorizontal: this.props.isHorizontal,
                onSizeChanged: this._onViewContainerSizeChange,
                childRenderer: this.props.rowRenderer,
                height: itemRect.height,
                width: itemRect.width,
                itemAnimator: ts_object_utils_1.Default.value(this.props.itemAnimator, this._defaultItemAnimator),
                extendedState: this.props.extendedState,
                internalSnapshot: this.state.internalSnapshot,
                renderItemContainer: this.props.renderItemContainer,
                onItemLayout: this._onItemLayout
              });
            }
            return null;
          };
          RecyclerListView2.prototype._checkExpectedDimensionDiscrepancy = function(itemRect, type, index) {
            if (this.props.layoutProvider.checkDimensionDiscrepancy(itemRect, type, index)) {
              if (this._relayoutReqIndex === -1) {
                this._relayoutReqIndex = index;
              } else {
                this._relayoutReqIndex = Math.min(this._relayoutReqIndex, index);
              }
            }
          };
          RecyclerListView2.prototype._generateRenderStack = function() {
            var renderedItems = [];
            if (this.state) {
              for (var key in this.state.renderStack) {
                if (this.state.renderStack.hasOwnProperty(key)) {
                  renderedItems.push(this._renderRowUsingMeta(this.state.renderStack[key]));
                }
              }
            }
            return renderedItems;
          };
          RecyclerListView2.prototype._processOnEndReached = function() {
            if (this.props.onEndReached && this._virtualRenderer) {
              var layout = this._virtualRenderer.getLayoutDimension();
              var viewabilityTracker = this._virtualRenderer.getViewabilityTracker();
              if (viewabilityTracker) {
                var windowBound = this.props.isHorizontal ? layout.width - this._layout.width : layout.height - this._layout.height;
                var lastOffset = viewabilityTracker ? viewabilityTracker.getLastOffset() : 0;
                var threshold = windowBound - lastOffset;
                var listLength = this.props.isHorizontal ? this._layout.width : this._layout.height;
                var triggerOnEndThresholdRelative = listLength * ts_object_utils_1.Default.value(this.props.onEndReachedThresholdRelative, 0);
                var triggerOnEndThreshold = ts_object_utils_1.Default.value(this.props.onEndReachedThreshold, 0);
                if (threshold <= triggerOnEndThresholdRelative || threshold <= triggerOnEndThreshold) {
                  if (this.props.onEndReached && !this._onEndReachedCalled) {
                    this._onEndReachedCalled = true;
                    this.props.onEndReached();
                  }
                } else {
                  this._onEndReachedCalled = false;
                }
              }
            }
          };
          RecyclerListView2.defaultProps = {
            canChangeSize: false,
            disableRecycling: false,
            initialOffset: 0,
            initialRenderIndex: 0,
            isHorizontal: false,
            onEndReachedThreshold: 0,
            onEndReachedThresholdRelative: 0,
            renderAheadOffset: IS_WEB ? 1e3 : 250
          };
          RecyclerListView2.propTypes = {};
          return RecyclerListView2;
        }(ComponentCompat_1.ComponentCompat)
      );
      exports.default = RecyclerListView;
      RecyclerListView.propTypes = {
        //Refer the sample
        layoutProvider: PropTypes.instanceOf(LayoutProvider_1.BaseLayoutProvider).isRequired,
        //Refer the sample
        dataProvider: PropTypes.instanceOf(DataProvider_1.BaseDataProvider).isRequired,
        //Used to maintain scroll position in case view gets destroyed e.g, cases of back navigation
        contextProvider: PropTypes.instanceOf(ContextProvider_1.default),
        //Methods which returns react component to be rendered. You get type of view and data in the callback.
        rowRenderer: PropTypes.func.isRequired,
        //Initial offset you want to start rendering from, very useful if you want to maintain scroll context across pages.
        initialOffset: PropTypes.number,
        //Specify how many pixels in advance do you want views to be rendered. Increasing this value can help reduce blanks (if any). However keeping this as low
        //as possible should be the intent. Higher values also increase re-render compute
        renderAheadOffset: PropTypes.number,
        //Whether the listview is horizontally scrollable. Both use staggeredGrid implementation
        isHorizontal: PropTypes.bool,
        //On scroll callback onScroll(rawEvent, offsetX, offsetY), note you get offsets no need to read scrollTop/scrollLeft
        onScroll: PropTypes.func,
        //callback onRecreate(params), when recreating recycler view from context provider. Gives you the initial params in the first
        //frame itself to allow you to render content accordingly
        onRecreate: PropTypes.func,
        //Provide your own ScrollView Component. The contract for the scroll event should match the native scroll event contract, i.e.
        // scrollEvent = { nativeEvent: { contentOffset: { x: offset, y: offset } } }
        //Note: Please extend BaseScrollView to achieve expected behaviour
        externalScrollView: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.object
        ]),
        //Callback given when user scrolls to the end of the list or footer just becomes visible, useful in incremental loading scenarios
        onEndReached: PropTypes.func,
        //Specify how many pixels in advance you onEndReached callback
        onEndReachedThreshold: PropTypes.number,
        //Specify how far from the end (in units of visible length of the list)
        //the bottom edge of the list must be from the end of the content to trigger the onEndReached callback
        onEndReachedThresholdRelative: PropTypes.number,
        //Deprecated. Please use onVisibleIndicesChanged instead.
        onVisibleIndexesChanged: PropTypes.func,
        //Provides visible index, helpful in sending impression events etc, onVisibleIndicesChanged(all, now, notNow)
        onVisibleIndicesChanged: PropTypes.func,
        //Provide this method if you want to render a footer. Helpful in showing a loader while doing incremental loads.
        renderFooter: PropTypes.func,
        //Specify the initial item index you want rendering to start from. Preferred over initialOffset if both are specified.
        initialRenderIndex: PropTypes.number,
        //Specify the estimated size of the recyclerlistview to render the list items in the first pass. If provided, recyclerlistview will
        //use these dimensions to fill in the items in the first render. If not provided, recyclerlistview will first render with no items
        //and then fill in the items based on the size given by its onLayout event. canChangeSize can be set to true to relayout items when
        //the size changes.
        layoutSize: PropTypes.object,
        //iOS only. Scroll throttle duration.
        scrollThrottle: PropTypes.number,
        //Specify if size can change, listview will automatically relayout items. For web, works only with useWindowScroll = true
        canChangeSize: PropTypes.bool,
        //Web only. Layout elements in window instead of a scrollable div.
        useWindowScroll: PropTypes.bool,
        //Turns off recycling. You still get progressive rendering and all other features. Good for lazy rendering. This should not be used in most cases.
        disableRecycling: PropTypes.bool,
        //Default is false, if enabled dimensions provided in layout provider will not be strictly enforced.
        //Rendered dimensions will be used to relayout items. Slower if enabled.
        forceNonDeterministicRendering: PropTypes.bool,
        //In some cases the data passed at row level may not contain all the info that the item depends upon, you can keep all other info
        //outside and pass it down via this prop. Changing this object will cause everything to re-render. Make sure you don't change
        //it often to ensure performance. Re-renders are heavy.
        extendedState: PropTypes.object,
        //Enables animating RecyclerListView item cells e.g, shift, add, remove etc. This prop can be used to pass an external item animation implementation.
        //Look into BaseItemAnimator/DefaultJSItemAnimator/DefaultNativeItemAnimator/DefaultWebItemAnimator for more info.
        //By default there are few animations, to disable completely simply pass blank new BaseItemAnimator() object. Remember, create
        //one object and keep it do not create multiple object of type BaseItemAnimator.
        //Note: You might want to look into DefaultNativeItemAnimator to check an implementation based on LayoutAnimation. By default,
        //animations are JS driven to avoid workflow interference. Also, please note LayoutAnimation is buggy on Android.
        itemAnimator: PropTypes.instanceOf(ItemAnimator_1.BaseItemAnimator),
        //All of the Recyclerlistview item cells are enclosed inside this item container. The idea is pass a native UI component which implements a
        //view shifting algorithm to remove the overlaps between the neighbouring views. This is achieved by shifting them by the appropriate
        //amount in the correct direction if the estimated sizes of the item cells are not accurate. If this props is passed, it will be used to
        //enclose the list items and otherwise a default react native View will be used for the same.
        renderContentContainer: PropTypes.func,
        //This container is for wrapping individual cells that are being rendered by recyclerlistview unlike contentContainer which wraps all of them.
        renderItemContainer: PropTypes.func,
        //Deprecated in favour of `prepareForLayoutAnimationRender` method
        optimizeForInsertDeleteAnimations: PropTypes.bool,
        //To pass down style to inner ScrollView
        style: PropTypes.oneOfType([
          PropTypes.object,
          PropTypes.number
        ]),
        //For TS use case, not necessary with JS use.
        //For all props that need to be proxied to inner/external scrollview. Put them in an object and they'll be spread
        //and passed down.
        scrollViewProps: PropTypes.object,
        // Used when the logical offsetY differs from actual offsetY of recyclerlistview, could be because some other component is overlaying the recyclerlistview.
        // For e.x. toolbar within CoordinatorLayout are overlapping the recyclerlistview.
        // This method exposes the windowCorrection object of RecyclerListView, user can modify the values in realtime.
        applyWindowCorrection: PropTypes.func,
        // This can be used to hook an itemLayoutListener to listen to which item at what index is layout.
        // To get the layout params of the item, you can use the ref to call method getLayout(index), e.x. : `this._recyclerRef.getLayout(index)`
        // but there is a catch here, since there might be a pending relayout due to which the queried layout might not be precise.
        // Caution: RLV only listens to layout changes if forceNonDeterministicRendering is true
        onItemLayout: PropTypes.func,
        //Used to specify is window correction config and whether it should be applied to some scroll events
        windowCorrectionConfig: PropTypes.object
      };
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollView.js
  var require_BaseScrollView = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollView.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var React3 = require_react();
      var BaseScrollView = (
        /** @class */
        function(_super) {
          __extends2(BaseScrollView2, _super);
          function BaseScrollView2(props) {
            return _super.call(this, props) || this;
          }
          return BaseScrollView2;
        }(React3.Component)
      );
      exports.default = BaseScrollView;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/utils/AutoScroll.js
  var require_AutoScroll = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/utils/AutoScroll.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AutoScroll = void 0;
      var AutoScroll = (
        /** @class */
        function() {
          function AutoScroll2() {
          }
          AutoScroll2.scrollNow = function(scrollable, fromX, fromY, toX, toY, speedMultiplier) {
            if (speedMultiplier === void 0) {
              speedMultiplier = 1;
            }
            return new Promise(function(resolve) {
              scrollable.scrollToOffset(fromX, fromY, false);
              var incrementPerMs = 0.1 * speedMultiplier;
              var startTime = Date.now();
              var startX = fromX;
              var startY = fromY;
              var animationLoop = function animationLoop1() {
                requestAnimationFrame(function() {
                  var currentTime = Date.now();
                  var timeElapsed = currentTime - startTime;
                  var distanceToCover = incrementPerMs * timeElapsed;
                  startX += distanceToCover;
                  startY += distanceToCover;
                  scrollable.scrollToOffset(Math.min(toX, startX), Math.min(toY, startY), false);
                  startTime = currentTime;
                  if (Math.min(toX, startX) !== toX || Math.min(toY, startY) !== toY) {
                    animationLoop();
                    return;
                  }
                  resolve();
                });
              };
              animationLoop();
            });
          };
          return AutoScroll2;
        }()
      );
      exports.AutoScroll = AutoScroll;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/ProgressiveListView.js
  var require_ProgressiveListView = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/ProgressiveListView.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      var __assign2 = exports && exports.__assign || function() {
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign2.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var RecyclerListView_1 = require_RecyclerListView();
      var ProgressiveListView = (
        /** @class */
        function(_super) {
          __extends2(ProgressiveListView2, _super);
          function ProgressiveListView2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isFirstLayoutComplete = false;
            return _this;
          }
          ProgressiveListView2.prototype.componentDidMount = function() {
            _super.prototype.componentDidMount.call(this);
            if (!this.props.forceNonDeterministicRendering) {
              this.updateRenderAheadProgressively(this.getCurrentRenderAheadOffset());
            }
          };
          ProgressiveListView2.prototype.componentWillUnmount = function() {
            this.cancelRenderAheadUpdate();
            _super.prototype.componentWillUnmount.call(this);
          };
          ProgressiveListView2.prototype.onItemLayout = function(index) {
            if (!this.isFirstLayoutComplete) {
              this.isFirstLayoutComplete = true;
              if (this.props.forceNonDeterministicRendering) {
                this.updateRenderAheadProgressively(this.getCurrentRenderAheadOffset());
              }
            }
            _super.prototype.onItemLayout.call(this, index);
          };
          ProgressiveListView2.prototype.updateRenderAheadProgressively = function(newVal) {
            var _this = this;
            this.cancelRenderAheadUpdate();
            this.renderAheadUpdateCallbackId = requestAnimationFrame(function() {
              if (!_this.updateRenderAheadOffset(newVal)) {
                _this.updateRenderAheadProgressively(newVal);
              } else {
                _this.incrementRenderAhead();
              }
            });
          };
          ProgressiveListView2.prototype.incrementRenderAhead = function() {
            if (this.props.maxRenderAhead && this.props.renderAheadStep) {
              var layoutManager = this.getVirtualRenderer().getLayoutManager();
              var currentRenderAheadOffset = this.getCurrentRenderAheadOffset();
              if (layoutManager) {
                var contentDimension = layoutManager.getContentDimension();
                var maxContentSize = this.props.isHorizontal ? contentDimension.width : contentDimension.height;
                if (currentRenderAheadOffset < maxContentSize && currentRenderAheadOffset < this.props.maxRenderAhead) {
                  var newRenderAheadOffset = currentRenderAheadOffset + this.props.renderAheadStep;
                  this.updateRenderAheadProgressively(newRenderAheadOffset);
                } else {
                  this.performFinalUpdate();
                }
              }
            }
          };
          ProgressiveListView2.prototype.performFinalUpdate = function() {
            var _this = this;
            this.cancelRenderAheadUpdate();
            this.renderAheadUpdateCallbackId = requestAnimationFrame(function() {
              if (_this.props.finalRenderAheadOffset !== void 0) {
                _this.updateRenderAheadOffset(_this.props.finalRenderAheadOffset);
              }
            });
          };
          ProgressiveListView2.prototype.cancelRenderAheadUpdate = function() {
            if (this.renderAheadUpdateCallbackId !== void 0) {
              cancelAnimationFrame(this.renderAheadUpdateCallbackId);
            }
          };
          ProgressiveListView2.defaultProps = __assign2(__assign2({}, RecyclerListView_1.default.defaultProps), {
            maxRenderAhead: Number.MAX_VALUE,
            renderAheadStep: 300,
            renderAheadOffset: 0
          });
          return ProgressiveListView2;
        }(RecyclerListView_1.default)
      );
      exports.default = ProgressiveListView;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/index.js
  var require_reactnative = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ComponentCompat = exports.BaseDataProvider = exports.AutoScroll = exports.BaseScrollView = exports.BaseItemAnimator = exports.ProgressiveListView = exports.RecyclerListView = exports.GridLayoutManager = exports.GridLayoutProvider = exports.WrapGridLayoutManager = exports.LayoutManager = exports.BaseLayoutProvider = exports.LayoutProvider = exports.DataProvider = exports.ContextProvider = void 0;
      var ContextProvider_1 = require_ContextProvider();
      exports.ContextProvider = ContextProvider_1.default;
      var DataProvider_1 = require_DataProvider();
      exports.DataProvider = DataProvider_1.default;
      Object.defineProperty(exports, "BaseDataProvider", {
        enumerable: true,
        get: function get() {
          return DataProvider_1.BaseDataProvider;
        }
      });
      var LayoutProvider_1 = require_LayoutProvider();
      Object.defineProperty(exports, "BaseLayoutProvider", {
        enumerable: true,
        get: function get() {
          return LayoutProvider_1.BaseLayoutProvider;
        }
      });
      Object.defineProperty(exports, "LayoutProvider", {
        enumerable: true,
        get: function get() {
          return LayoutProvider_1.LayoutProvider;
        }
      });
      var GridLayoutProvider_1 = require_GridLayoutProvider();
      Object.defineProperty(exports, "GridLayoutProvider", {
        enumerable: true,
        get: function get() {
          return GridLayoutProvider_1.GridLayoutProvider;
        }
      });
      var RecyclerListView_1 = require_RecyclerListView();
      exports.RecyclerListView = RecyclerListView_1.default;
      var BaseScrollView_1 = require_BaseScrollView();
      exports.BaseScrollView = BaseScrollView_1.default;
      var ItemAnimator_1 = require_ItemAnimator();
      Object.defineProperty(exports, "BaseItemAnimator", {
        enumerable: true,
        get: function get() {
          return ItemAnimator_1.BaseItemAnimator;
        }
      });
      var AutoScroll_1 = require_AutoScroll();
      Object.defineProperty(exports, "AutoScroll", {
        enumerable: true,
        get: function get() {
          return AutoScroll_1.AutoScroll;
        }
      });
      var LayoutManager_1 = require_LayoutManager();
      Object.defineProperty(exports, "LayoutManager", {
        enumerable: true,
        get: function get() {
          return LayoutManager_1.LayoutManager;
        }
      });
      Object.defineProperty(exports, "WrapGridLayoutManager", {
        enumerable: true,
        get: function get() {
          return LayoutManager_1.WrapGridLayoutManager;
        }
      });
      var GridLayoutManager_1 = require_GridLayoutManager();
      Object.defineProperty(exports, "GridLayoutManager", {
        enumerable: true,
        get: function get() {
          return GridLayoutManager_1.GridLayoutManager;
        }
      });
      var ProgressiveListView_1 = require_ProgressiveListView();
      exports.ProgressiveListView = ProgressiveListView_1.default;
      var ComponentCompat_1 = require_ComponentCompat();
      Object.defineProperty(exports, "ComponentCompat", {
        enumerable: true,
        get: function get() {
          return ComponentCompat_1.ComponentCompat;
        }
      });
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/sticky/StickyObject.js
  var require_StickyObject = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/sticky/StickyObject.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StickyType = void 0;
      var React3 = require_react();
      var react_native_1 = require_react_native();
      var RecyclerListViewExceptions_1 = require_RecyclerListViewExceptions();
      var CustomError_1 = require_CustomError();
      var ComponentCompat_1 = require_ComponentCompat();
      var StickyType;
      (function(StickyType2) {
        StickyType2[StickyType2["HEADER"] = 0] = "HEADER";
        StickyType2[StickyType2["FOOTER"] = 1] = "FOOTER";
      })(StickyType = exports.StickyType || (exports.StickyType = {}));
      var StickyObject = (
        /** @class */
        function(_super) {
          __extends2(StickyObject2, _super);
          function StickyObject2(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.stickyType = StickyType.HEADER;
            _this.stickyTypeMultiplier = 1;
            _this.stickyVisiblity = false;
            _this.currentIndex = 0;
            _this.currentStickyIndex = 0;
            _this.visibleIndices = [];
            _this.bounceScrolling = false;
            _this._stickyViewOffset = new react_native_1.Animated.Value(0);
            _this._previousStickyIndex = 0;
            _this._nextStickyIndex = 0;
            _this._firstCompute = true;
            _this._smallestVisibleIndex = 0;
            _this._largestVisibleIndex = 0;
            _this._offsetY = 0;
            _this._windowCorrection = {
              startCorrection: 0,
              endCorrection: 0,
              windowShift: 0
            };
            return _this;
          }
          StickyObject2.prototype.componentWillReceivePropsCompat = function(newProps) {
            this._updateDimensionParams();
            this.calculateVisibleStickyIndex(newProps.stickyIndices, this._smallestVisibleIndex, this._largestVisibleIndex, this._offsetY, this._windowBound);
            this._computeLayouts(newProps.stickyIndices);
            this.stickyViewVisible(this.stickyVisiblity, false);
          };
          StickyObject2.prototype.renderCompat = function() {
            var containerStyle = [
              {
                transform: [
                  {
                    translateY: this._stickyViewOffset
                  }
                ]
              },
              !this.props.renderContainer && [
                {
                  position: "absolute",
                  width: this._scrollableWidth
                },
                this.containerPosition
              ]
            ];
            var content = React3.createElement(react_native_1.Animated.View, {
              style: containerStyle
            }, this.stickyVisiblity ? this._renderSticky() : null);
            if (this.props.renderContainer) {
              var _extendedState = this.props.getExtendedState();
              return this.props.renderContainer(content, this.currentStickyIndex, _extendedState);
            } else {
              return content;
            }
          };
          StickyObject2.prototype.onVisibleIndicesChanged = function(all) {
            if (this._firstCompute) {
              this.initStickyParams();
              this._offsetY = this._getAdjustedOffsetY(this._offsetY);
              this._firstCompute = false;
            }
            this._updateDimensionParams();
            this._setSmallestAndLargestVisibleIndices(all);
            this.calculateVisibleStickyIndex(this.props.stickyIndices, this._smallestVisibleIndex, this._largestVisibleIndex, this._offsetY, this._windowBound);
            this._computeLayouts();
            this.stickyViewVisible(this.stickyVisiblity);
          };
          StickyObject2.prototype.onScroll = function(offsetY) {
            offsetY = this._getAdjustedOffsetY(offsetY);
            this._offsetY = offsetY;
            this._updateDimensionParams();
            this.boundaryProcessing(offsetY, this._windowBound);
            if (this._previousStickyIndex !== void 0) {
              if (this._previousStickyIndex * this.stickyTypeMultiplier >= this.currentStickyIndex * this.stickyTypeMultiplier) {
                throw new CustomError_1.default(RecyclerListViewExceptions_1.default.stickyIndicesArraySortError);
              }
              var scrollY_1 = this.getScrollY(offsetY, this._scrollableHeight);
              if (this._previousHeight && this._currentYd && scrollY_1 && scrollY_1 < this._currentYd) {
                if (scrollY_1 > this._currentYd - this._previousHeight) {
                  this.currentIndex -= this.stickyTypeMultiplier;
                  var translate = (scrollY_1 - this._currentYd + this._previousHeight) * (-1 * this.stickyTypeMultiplier);
                  this._stickyViewOffset.setValue(translate);
                  this._computeLayouts();
                  this.stickyViewVisible(true);
                }
              } else {
                this._stickyViewOffset.setValue(0);
              }
            }
            if (this._nextStickyIndex !== void 0) {
              if (this._nextStickyIndex * this.stickyTypeMultiplier <= this.currentStickyIndex * this.stickyTypeMultiplier) {
                throw new CustomError_1.default(RecyclerListViewExceptions_1.default.stickyIndicesArraySortError);
              }
              var scrollY_2 = this.getScrollY(offsetY, this._scrollableHeight);
              if (this._currentHeight && this._nextYd && scrollY_2 && scrollY_2 + this._currentHeight > this._nextYd) {
                if (scrollY_2 <= this._nextYd) {
                  var translate = (scrollY_2 - this._nextYd + this._currentHeight) * (-1 * this.stickyTypeMultiplier);
                  this._stickyViewOffset.setValue(translate);
                } else if (scrollY_2 > this._nextYd) {
                  this.currentIndex += this.stickyTypeMultiplier;
                  this._stickyViewOffset.setValue(0);
                  this._computeLayouts();
                  this.stickyViewVisible(true);
                }
              } else {
                this._stickyViewOffset.setValue(0);
              }
            }
          };
          StickyObject2.prototype.stickyViewVisible = function(_visible, shouldTriggerRender) {
            if (shouldTriggerRender === void 0) {
              shouldTriggerRender = true;
            }
            this.stickyVisiblity = _visible;
            if (shouldTriggerRender) {
              this.setState({});
            }
          };
          StickyObject2.prototype.getWindowCorrection = function(props) {
            return props.getWindowCorrection && props.getWindowCorrection() || this._windowCorrection;
          };
          StickyObject2.prototype.boundaryProcessing = function(offsetY, windowBound) {
            var hasReachedBoundary = this.hasReachedBoundary(offsetY, windowBound);
            if (this.bounceScrolling !== hasReachedBoundary) {
              this.bounceScrolling = hasReachedBoundary;
              if (this.bounceScrolling) {
                this.stickyViewVisible(false);
              } else {
                this.onVisibleIndicesChanged(this.visibleIndices);
              }
            }
          };
          StickyObject2.prototype._updateDimensionParams = function() {
            var rlvDimension = this.props.getRLVRenderedSize();
            if (rlvDimension) {
              this._scrollableHeight = rlvDimension.height;
              this._scrollableWidth = rlvDimension.width;
            }
            var contentDimension = this.props.getContentDimension();
            if (contentDimension && this._scrollableHeight) {
              this._windowBound = contentDimension.height - this._scrollableHeight;
            }
          };
          StickyObject2.prototype._computeLayouts = function(newStickyIndices) {
            var stickyIndices = newStickyIndices ? newStickyIndices : this.props.stickyIndices;
            if (stickyIndices) {
              this.currentStickyIndex = stickyIndices[this.currentIndex];
              this._previousStickyIndex = stickyIndices[this.currentIndex - this.stickyTypeMultiplier];
              this._nextStickyIndex = stickyIndices[this.currentIndex + this.stickyTypeMultiplier];
              if (this.currentStickyIndex !== void 0) {
                this._currentLayout = this.props.getLayoutForIndex(this.currentStickyIndex);
                this._currentY = this._currentLayout ? this._currentLayout.y : void 0;
                this._currentHeight = this._currentLayout ? this._currentLayout.height : void 0;
                this._currentYd = this._currentY && this._currentHeight ? this.getCurrentYd(this._currentY, this._currentHeight) : void 0;
              }
              if (this._previousStickyIndex !== void 0) {
                this._previousLayout = this.props.getLayoutForIndex(this._previousStickyIndex);
                this._previousHeight = this._previousLayout ? this._previousLayout.height : void 0;
              }
              if (this._nextStickyIndex !== void 0) {
                this._nextLayout = this.props.getLayoutForIndex(this._nextStickyIndex);
                this._nextY = this._nextLayout ? this._nextLayout.y : void 0;
                this._nextHeight = this._nextLayout ? this._nextLayout.height : void 0;
                this._nextYd = this._nextY && this._nextHeight ? this.getNextYd(this._nextY, this._nextHeight) : void 0;
              }
            }
          };
          StickyObject2.prototype._setSmallestAndLargestVisibleIndices = function(indicesArray) {
            this.visibleIndices = indicesArray;
            this._smallestVisibleIndex = indicesArray[0];
            this._largestVisibleIndex = indicesArray[indicesArray.length - 1];
          };
          StickyObject2.prototype._renderSticky = function() {
            if (this.currentStickyIndex !== void 0) {
              var _stickyData = this.props.getDataForIndex(this.currentStickyIndex);
              var _stickyLayoutType = this.props.getLayoutTypeForIndex(this.currentStickyIndex);
              var _extendedState = this.props.getExtendedState();
              var _rowRenderer = this.props.getRowRenderer();
              if (this.props.overrideRowRenderer) {
                return this.props.overrideRowRenderer(_stickyLayoutType, _stickyData, this.currentStickyIndex, _extendedState);
              } else {
                return _rowRenderer(_stickyLayoutType, _stickyData, this.currentStickyIndex, _extendedState);
              }
            }
            return null;
          };
          StickyObject2.prototype._getAdjustedOffsetY = function(offsetY) {
            return offsetY + this.getWindowCorrection(this.props).windowShift;
          };
          return StickyObject2;
        }(ComponentCompat_1.ComponentCompat)
      );
      exports.default = StickyObject;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/sticky/StickyHeader.js
  var require_StickyHeader = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/sticky/StickyHeader.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var StickyObject_1 = require_StickyObject();
      var BinarySearch_1 = require_BinarySearch();
      var StickyHeader = (
        /** @class */
        function(_super) {
          __extends2(StickyHeader2, _super);
          function StickyHeader2(props, context) {
            return _super.call(this, props, context) || this;
          }
          StickyHeader2.prototype.onScroll = function(offsetY) {
            var startCorrection = this.getWindowCorrection(this.props).startCorrection;
            if (startCorrection) {
              this.containerPosition = {
                top: startCorrection
              };
              offsetY += startCorrection;
            }
            _super.prototype.onScroll.call(this, offsetY);
          };
          StickyHeader2.prototype.initStickyParams = function() {
            this.stickyType = StickyObject_1.StickyType.HEADER;
            this.stickyTypeMultiplier = 1;
            this.containerPosition = {
              top: this.getWindowCorrection(this.props).startCorrection
            };
            this.bounceScrolling = true;
          };
          StickyHeader2.prototype.calculateVisibleStickyIndex = function(stickyIndices, smallestVisibleIndex, largestVisibleIndex, offsetY, windowBound) {
            if (stickyIndices && smallestVisibleIndex !== void 0) {
              this.bounceScrolling = this.hasReachedBoundary(offsetY, windowBound);
              if (smallestVisibleIndex < stickyIndices[0] || this.bounceScrolling) {
                this.stickyVisiblity = false;
              } else {
                this.stickyVisiblity = true;
                var valueAndIndex = BinarySearch_1.default.findValueSmallerThanTarget(stickyIndices, smallestVisibleIndex);
                if (valueAndIndex) {
                  this.currentIndex = valueAndIndex.index;
                  this.currentStickyIndex = valueAndIndex.value;
                } else {
                  console.log("Header sticky index calculation gone wrong.");
                }
              }
            }
          };
          StickyHeader2.prototype.getNextYd = function(nextY, nextHeight) {
            return nextY;
          };
          StickyHeader2.prototype.getCurrentYd = function(currentY, currentHeight) {
            return currentY;
          };
          StickyHeader2.prototype.getScrollY = function(offsetY, scrollableHeight) {
            return offsetY;
          };
          StickyHeader2.prototype.hasReachedBoundary = function(offsetY, _windowBound) {
            return false;
          };
          return StickyHeader2;
        }(StickyObject_1.default)
      );
      exports.default = StickyHeader;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/sticky/StickyFooter.js
  var require_StickyFooter = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/sticky/StickyFooter.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var StickyObject_1 = require_StickyObject();
      var BinarySearch_1 = require_BinarySearch();
      var StickyFooter = (
        /** @class */
        function(_super) {
          __extends2(StickyFooter2, _super);
          function StickyFooter2(props, context) {
            return _super.call(this, props, context) || this;
          }
          StickyFooter2.prototype.onScroll = function(offsetY) {
            var endCorrection = this.getWindowCorrection(this.props).endCorrection;
            if (endCorrection) {
              this.containerPosition = {
                bottom: endCorrection
              };
              offsetY -= endCorrection;
            }
            _super.prototype.onScroll.call(this, offsetY);
          };
          StickyFooter2.prototype.initStickyParams = function() {
            this.stickyType = StickyObject_1.StickyType.FOOTER;
            this.stickyTypeMultiplier = -1;
            this.containerPosition = {
              bottom: this.getWindowCorrection(this.props).endCorrection
            };
            this.bounceScrolling = false;
          };
          StickyFooter2.prototype.calculateVisibleStickyIndex = function(stickyIndices, _smallestVisibleIndex, largestVisibleIndex, offsetY, windowBound) {
            if (stickyIndices && largestVisibleIndex) {
              this.bounceScrolling = this.hasReachedBoundary(offsetY, windowBound);
              if (largestVisibleIndex > stickyIndices[stickyIndices.length - 1] || this.bounceScrolling) {
                this.stickyVisiblity = false;
                if (this.props.alwaysStickyFooter && offsetY === 0) {
                  this.stickyVisiblity = true;
                }
              } else {
                this.stickyVisiblity = true;
                var valueAndIndex = BinarySearch_1.default.findValueLargerThanTarget(stickyIndices, largestVisibleIndex);
                if (valueAndIndex) {
                  this.currentIndex = valueAndIndex.index;
                  this.currentStickyIndex = valueAndIndex.value;
                } else {
                  console.log("Footer sticky index calculation gone wrong.");
                }
              }
            }
          };
          StickyFooter2.prototype.getNextYd = function(nextY, nextHeight) {
            return -1 * (nextY + nextHeight);
          };
          StickyFooter2.prototype.getCurrentYd = function(currentY, currentHeight) {
            return -1 * (currentY + currentHeight);
          };
          StickyFooter2.prototype.getScrollY = function(offsetY, scrollableHeight) {
            return scrollableHeight ? -1 * (offsetY + scrollableHeight) : void 0;
          };
          StickyFooter2.prototype.hasReachedBoundary = function(offsetY, windowBound) {
            if (windowBound !== void 0) {
              var endReachedMargin = Math.round(offsetY - windowBound);
              return endReachedMargin >= 0;
            }
            return false;
          };
          return StickyFooter2;
        }(StickyObject_1.default)
      );
      exports.default = StickyFooter;
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/core/StickyContainer.js
  var require_StickyContainer = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/core/StickyContainer.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      var __assign2 = exports && exports.__assign || function() {
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign2.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var React3 = require_react();
      var PropTypes = require_prop_types();
      var react_native_1 = require_react_native();
      var StickyHeader_1 = require_StickyHeader();
      var StickyFooter_1 = require_StickyFooter();
      var CustomError_1 = require_CustomError();
      var RecyclerListViewExceptions_1 = require_RecyclerListViewExceptions();
      var ComponentCompat_1 = require_ComponentCompat();
      var StickyContainer = (
        /** @class */
        function(_super) {
          __extends2(StickyContainer2, _super);
          function StickyContainer2(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this._recyclerRef = void 0;
            _this._stickyHeaderRef = null;
            _this._stickyFooterRef = null;
            _this._visibleIndicesAll = [];
            _this._windowCorrection = {
              startCorrection: 0,
              endCorrection: 0,
              windowShift: 0
            };
            _this._rlvRowRenderer = function(type, data, index, extendedState) {
              if (_this.props.alwaysStickyFooter) {
                var rlvDimension = _this._getRLVRenderedSize();
                var contentDimension = _this._getContentDimension();
                var isScrollable = false;
                if (rlvDimension && contentDimension) {
                  isScrollable = contentDimension.height > rlvDimension.height;
                }
                if (!isScrollable && _this.props.stickyFooterIndices && index === _this.props.stickyFooterIndices[0]) {
                  return null;
                }
              }
              return _this._rowRenderer(type, data, index, extendedState);
            };
            _this._getRecyclerRef = function(recycler) {
              _this._recyclerRef = recycler;
              if (_this.props.children.ref) {
                if (typeof _this.props.children.ref === "function") {
                  _this.props.children.ref(recycler);
                } else {
                  throw new CustomError_1.default(RecyclerListViewExceptions_1.default.refNotAsFunctionException);
                }
              }
            };
            _this._getCurrentWindowCorrection = function() {
              return _this._windowCorrection;
            };
            _this._getStickyHeaderRef = function(stickyHeaderRef) {
              if (_this._stickyHeaderRef !== stickyHeaderRef) {
                _this._stickyHeaderRef = stickyHeaderRef;
                _this._callStickyObjectsOnVisibleIndicesChanged(_this._visibleIndicesAll);
              }
            };
            _this._getStickyFooterRef = function(stickyFooterRef) {
              if (_this._stickyFooterRef !== stickyFooterRef) {
                _this._stickyFooterRef = stickyFooterRef;
                _this._callStickyObjectsOnVisibleIndicesChanged(_this._visibleIndicesAll);
              }
            };
            _this._onVisibleIndicesChanged = function(all, now, notNow) {
              _this._visibleIndicesAll = all;
              _this._callStickyObjectsOnVisibleIndicesChanged(all);
              if (_this.props.children && _this.props.children.props && _this.props.children.props.onVisibleIndicesChanged) {
                _this.props.children.props.onVisibleIndicesChanged(all, now, notNow);
              }
            };
            _this._callStickyObjectsOnVisibleIndicesChanged = function(all) {
              if (_this._stickyHeaderRef) {
                _this._stickyHeaderRef.onVisibleIndicesChanged(all);
              }
              if (_this._stickyFooterRef) {
                _this._stickyFooterRef.onVisibleIndicesChanged(all);
              }
            };
            _this._onScroll = function(rawEvent, offsetX, offsetY) {
              _this._getWindowCorrection(offsetX, offsetY, _this.props);
              if (_this._stickyHeaderRef) {
                _this._stickyHeaderRef.onScroll(offsetY);
              }
              if (_this._stickyFooterRef) {
                _this._stickyFooterRef.onScroll(offsetY);
              }
              if (_this.props.children && _this.props.children.props.onScroll) {
                _this.props.children.props.onScroll(rawEvent, offsetX, offsetY);
              }
            };
            _this._assertChildType = function() {
              if (React3.Children.count(_this.props.children) !== 1 || !_this._isChildRecyclerInstance()) {
                throw new CustomError_1.default(RecyclerListViewExceptions_1.default.wrongStickyChildTypeException);
              }
            };
            _this._isChildRecyclerInstance = function() {
              return _this.props.children.props.dataProvider && _this.props.children.props.rowRenderer && _this.props.children.props.layoutProvider;
            };
            _this._getLayoutForIndex = function(index) {
              if (_this._recyclerRef) {
                return _this._recyclerRef.getLayout(index);
              }
              return void 0;
            };
            _this._getDataForIndex = function(index) {
              return _this._dataProvider.getDataForIndex(index);
            };
            _this._getLayoutTypeForIndex = function(index) {
              return _this._layoutProvider.getLayoutTypeForIndex(index);
            };
            _this._getExtendedState = function() {
              return _this._extendedState;
            };
            _this._getRowRenderer = function() {
              return _this._rowRenderer;
            };
            _this._getRLVRenderedSize = function() {
              if (_this._recyclerRef) {
                return _this._recyclerRef.getRenderedSize();
              }
              return void 0;
            };
            _this._getContentDimension = function() {
              if (_this._recyclerRef) {
                return _this._recyclerRef.getContentDimension();
              }
              return void 0;
            };
            _this._applyWindowCorrection = function(offsetX, offsetY, windowCorrection) {
              if (_this.props.applyWindowCorrection) {
                _this.props.applyWindowCorrection(offsetX, offsetY, windowCorrection);
              }
            };
            _this._initParams = function(props2) {
              var childProps2 = props2.children.props;
              _this._dataProvider = childProps2.dataProvider;
              _this._layoutProvider = childProps2.layoutProvider;
              _this._extendedState = childProps2.extendedState;
              _this._rowRenderer = childProps2.rowRenderer;
            };
            _this._assertChildType();
            var childProps = props.children.props;
            _this._dataProvider = childProps.dataProvider;
            _this._layoutProvider = childProps.layoutProvider;
            _this._extendedState = childProps.extendedState;
            _this._rowRenderer = childProps.rowRenderer;
            _this._getWindowCorrection(0, 0, props);
            return _this;
          }
          StickyContainer2.prototype.componentWillReceivePropsCompat = function(newProps) {
            this._initParams(newProps);
          };
          StickyContainer2.prototype.renderCompat = function() {
            var _this = this;
            this._assertChildType();
            var recycler = React3.cloneElement(this.props.children, __assign2(__assign2({}, this.props.children.props), {
              ref: this._getRecyclerRef,
              onVisibleIndicesChanged: this._onVisibleIndicesChanged,
              onScroll: this._onScroll,
              applyWindowCorrection: this._applyWindowCorrection,
              rowRenderer: this._rlvRowRenderer
            }));
            return React3.createElement(react_native_1.View, {
              style: this.props.style ? this.props.style : {
                flex: 1
              }
            }, recycler, this.props.stickyHeaderIndices ? React3.createElement(StickyHeader_1.default, {
              ref: function ref(stickyHeaderRef) {
                return _this._getStickyHeaderRef(stickyHeaderRef);
              },
              stickyIndices: this.props.stickyHeaderIndices,
              getLayoutForIndex: this._getLayoutForIndex,
              getDataForIndex: this._getDataForIndex,
              getLayoutTypeForIndex: this._getLayoutTypeForIndex,
              getExtendedState: this._getExtendedState,
              getRLVRenderedSize: this._getRLVRenderedSize,
              getContentDimension: this._getContentDimension,
              getRowRenderer: this._getRowRenderer,
              overrideRowRenderer: this.props.overrideRowRenderer,
              renderContainer: this.props.renderStickyContainer,
              getWindowCorrection: this._getCurrentWindowCorrection
            }) : null, this.props.stickyFooterIndices ? React3.createElement(StickyFooter_1.default, {
              ref: function ref(stickyFooterRef) {
                return _this._getStickyFooterRef(stickyFooterRef);
              },
              stickyIndices: this.props.stickyFooterIndices,
              getLayoutForIndex: this._getLayoutForIndex,
              getDataForIndex: this._getDataForIndex,
              getLayoutTypeForIndex: this._getLayoutTypeForIndex,
              getExtendedState: this._getExtendedState,
              getRLVRenderedSize: this._getRLVRenderedSize,
              getContentDimension: this._getContentDimension,
              getRowRenderer: this._getRowRenderer,
              overrideRowRenderer: this.props.overrideRowRenderer,
              renderContainer: this.props.renderStickyContainer,
              getWindowCorrection: this._getCurrentWindowCorrection,
              alwaysStickBottom: this.props.alwaysStickyFooter
            }) : null);
          };
          StickyContainer2.prototype._getWindowCorrection = function(offsetX, offsetY, props) {
            return props.applyWindowCorrection && props.applyWindowCorrection(offsetX, offsetY, this._windowCorrection) || this._windowCorrection;
          };
          StickyContainer2.propTypes = {};
          return StickyContainer2;
        }(ComponentCompat_1.ComponentCompat)
      );
      exports.default = StickyContainer;
      StickyContainer.propTypes = {
        // Mandatory to pass a single child of RecyclerListView or any of its children classes. Exception will be thrown otherwise.
        children: PropTypes.element.isRequired,
        // Provide an array of indices whose corresponding items need to be stuck to the top of the recyclerView once the items scroll off the top.
        // Every subsequent sticky index view will push the previous sticky view off the top to take its place.
        // Note - Needs to be sorted ascending
        stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number),
        // Works same as sticky headers, but for views to be stuck at the bottom of the recyclerView.
        // Note - Needs to be sorted ascending
        stickyFooterIndices: PropTypes.arrayOf(PropTypes.number),
        // Will be called instead of rowRenderer for all sticky items. Any changes to the item for when they are stuck can be done here.
        overrideRowRenderer: PropTypes.func,
        // For all practical purposes, pass the style that is applied to the RecyclerListView component here.
        style: PropTypes.object,
        // For providing custom container to StickyHeader and StickyFooter allowing user extensibility to stylize these items accordingly.
        renderStickyContainer: PropTypes.func,
        // Used when the logical offsetY differs from actual offsetY of recyclerlistview, could be because some other component is overlaying the recyclerlistview.
        // For e.x. toolbar within CoordinatorLayout are overlapping the recyclerlistview.
        // This method exposes the windowCorrection object of RecyclerListView, user can modify the values in realtime.
        applyWindowCorrection: PropTypes.func
      };
    }
  });

  // node_modules/recyclerlistview/sticky/index.js
  var require_sticky = __commonJS({
    "node_modules/recyclerlistview/sticky/index.js"(exports, module) {
      module.exports = require_StickyContainer();
    }
  });

  // node_modules/@shopify/flash-list/dist/native/auto-layout/AutoLayoutViewNativeComponent.js
  var require_AutoLayoutViewNativeComponent = __commonJS({
    "node_modules/@shopify/flash-list/dist/native/auto-layout/AutoLayoutViewNativeComponent.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var react_native_1 = require_react_native();
      var AutoLayoutViewNativeComponent = react_native_1.View;
      exports.default = AutoLayoutViewNativeComponent;
    }
  });

  // node_modules/@shopify/flash-list/dist/native/auto-layout/AutoLayoutView.js
  var require_AutoLayoutView = __commonJS({
    "node_modules/@shopify/flash-list/dist/native/auto-layout/AutoLayoutView.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useOnNativeBlankAreaEvents = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var react_1 = tslib_1.__importStar(require_react());
      var AutoLayoutViewNativeComponent_1 = tslib_1.__importDefault(require_AutoLayoutViewNativeComponent());
      var listeners = [];
      var useOnNativeBlankAreaEvents = function useOnNativeBlankAreaEvents2(onBlankAreaEvent) {
        (0, react_1.useEffect)(function() {
          listeners.push(onBlankAreaEvent);
          return function() {
            listeners.filter(function(callback) {
              return callback !== onBlankAreaEvent;
            });
          };
        }, [
          onBlankAreaEvent
        ]);
      };
      exports.useOnNativeBlankAreaEvents = useOnNativeBlankAreaEvents;
      var AutoLayoutView = (
        /** @class */
        function(_super) {
          tslib_1.__extends(AutoLayoutView2, _super);
          function AutoLayoutView2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onBlankAreaEventCallback = function(_a) {
              var nativeEvent = _a.nativeEvent;
              var blankArea = Math.max(nativeEvent.offsetStart, nativeEvent.offsetEnd);
              var blankEventValue = {
                blankArea,
                offsetStart: nativeEvent.offsetStart,
                offsetEnd: nativeEvent.offsetEnd
              };
              _this.broadcastBlankEvent(blankEventValue);
              if (_this.props.onBlankAreaEvent) {
                _this.props.onBlankAreaEvent(blankEventValue);
              }
            };
            return _this;
          }
          AutoLayoutView2.prototype.broadcastBlankEvent = function(value) {
            var len = listeners.length;
            for (var i = 0; i < len; i++) {
              listeners[i](value);
            }
          };
          AutoLayoutView2.prototype.render = function() {
            return react_1.default.createElement(AutoLayoutViewNativeComponent_1.default, tslib_1.__assign({}, this.props, {
              onBlankAreaEvent: this.onBlankAreaEventCallback,
              enableInstrumentation: listeners.length !== 0 || Boolean(this.props.onBlankAreaEvent),
              disableAutoLayout: this.props.disableAutoLayout
            }), this.props.children);
          };
          return AutoLayoutView2;
        }(react_1.default.Component)
      );
      exports.default = AutoLayoutView;
    }
  });

  // node_modules/@shopify/flash-list/dist/native/cell-container/CellContainer.js
  var require_CellContainer = __commonJS({
    "node_modules/@shopify/flash-list/dist/native/cell-container/CellContainer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var react_1 = tslib_1.__importDefault(require_react());
      var react_native_1 = require_react_native();
      var CellContainer = react_1.default.forwardRef(function(props, ref) {
        return react_1.default.createElement(react_native_1.View, tslib_1.__assign({
          ref
        }, props));
      });
      CellContainer.displayName = "CellContainer";
      exports.default = CellContainer;
    }
  });

  // node_modules/@shopify/flash-list/dist/PureComponentWrapper.js
  var require_PureComponentWrapper = __commonJS({
    "node_modules/@shopify/flash-list/dist/PureComponentWrapper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PureComponentWrapper = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var react_1 = tslib_1.__importDefault(require_react());
      var PureComponentWrapper = (
        /** @class */
        function(_super) {
          tslib_1.__extends(PureComponentWrapper2, _super);
          function PureComponentWrapper2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.overrideEnabled = void 0;
            return _this;
          }
          PureComponentWrapper2.prototype.setEnabled = function(enabled) {
            if (enabled !== this.overrideEnabled) {
              this.overrideEnabled = enabled;
              this.forceUpdate();
            }
          };
          PureComponentWrapper2.prototype.render = function() {
            if (this.overrideEnabled === void 0) {
              return this.props.enabled && this.props.renderer(this.props.arg) || null;
            } else {
              return this.overrideEnabled && this.props.renderer(this.props.arg) || null;
            }
          };
          PureComponentWrapper2.defaultProps = {
            enabled: true
          };
          return PureComponentWrapper2;
        }(react_1.default.PureComponent)
      );
      exports.PureComponentWrapper = PureComponentWrapper;
    }
  });

  // node_modules/@shopify/flash-list/dist/utils/AverageWindow.js
  var require_AverageWindow = __commonJS({
    "node_modules/@shopify/flash-list/dist/utils/AverageWindow.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AverageWindow = void 0;
      var AverageWindow = (
        /** @class */
        function() {
          function AverageWindow2(size, startValue) {
            this.nextIndex = 0;
            this.inputValues = new Array(Math.max(1, size));
            this.currentAverage = startValue !== null && startValue !== void 0 ? startValue : 0;
            this.currentCount = startValue === void 0 ? 0 : 1;
            this.nextIndex = this.currentCount;
            this.inputValues[0] = startValue;
          }
          Object.defineProperty(AverageWindow2.prototype, "currentValue", {
            /**
             * Can be used to get the current average value
             */
            get: function get() {
              return this.currentAverage;
            },
            enumerable: false,
            configurable: true
          });
          AverageWindow2.prototype.addValue = function(value) {
            var target = this.getNextIndex();
            var oldValue = this.inputValues[target];
            var newCount = oldValue === void 0 ? this.currentCount + 1 : this.currentCount;
            this.inputValues[target] = value;
            this.currentAverage = this.currentAverage * (this.currentCount / newCount) + (value - (oldValue !== null && oldValue !== void 0 ? oldValue : 0)) / newCount;
            this.currentCount = newCount;
          };
          AverageWindow2.prototype.getNextIndex = function() {
            var newTarget = this.nextIndex;
            this.nextIndex = (this.nextIndex + 1) % this.inputValues.length;
            return newTarget;
          };
          return AverageWindow2;
        }()
      );
      exports.AverageWindow = AverageWindow;
    }
  });

  // node_modules/@shopify/flash-list/dist/utils/ContentContainerUtils.js
  var require_ContentContainerUtils = __commonJS({
    "node_modules/@shopify/flash-list/dist/utils/ContentContainerUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getContentContainerPadding = exports.applyContentContainerInsetForLayoutManager = exports.hasUnsupportedKeysInContentContainerStyle = exports.updateContentStyle = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var updateContentStyle = function updateContentStyle2(contentStyle, contentContainerStyleSource) {
        var _a = contentContainerStyleSource !== null && contentContainerStyleSource !== void 0 ? contentContainerStyleSource : {}, paddingTop = _a.paddingTop, paddingRight = _a.paddingRight, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, padding = _a.padding, paddingVertical = _a.paddingVertical, paddingHorizontal = _a.paddingHorizontal, backgroundColor = _a.backgroundColor;
        contentStyle.paddingLeft = Number(paddingLeft || paddingHorizontal || padding || 0);
        contentStyle.paddingRight = Number(paddingRight || paddingHorizontal || padding || 0);
        contentStyle.paddingTop = Number(paddingTop || paddingVertical || padding || 0);
        contentStyle.paddingBottom = Number(paddingBottom || paddingVertical || padding || 0);
        contentStyle.backgroundColor = backgroundColor;
        return contentStyle;
      };
      exports.updateContentStyle = updateContentStyle;
      var hasUnsupportedKeysInContentContainerStyle = function hasUnsupportedKeysInContentContainerStyle2(contentContainerStyleSource) {
        var _a = contentContainerStyleSource !== null && contentContainerStyleSource !== void 0 ? contentContainerStyleSource : {}, paddingTop = _a.paddingTop, paddingRight = _a.paddingRight, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, padding = _a.padding, paddingVertical = _a.paddingVertical, paddingHorizontal = _a.paddingHorizontal, backgroundColor = _a.backgroundColor, rest = tslib_1.__rest(_a, [
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
          "padding",
          "paddingVertical",
          "paddingHorizontal",
          "backgroundColor"
        ]);
        return Object.keys(rest).length > 0;
      };
      exports.hasUnsupportedKeysInContentContainerStyle = hasUnsupportedKeysInContentContainerStyle;
      var applyContentContainerInsetForLayoutManager = function applyContentContainerInsetForLayoutManager2(dim, contentContainerStyle, horizontal) {
        var contentStyle = (0, exports.updateContentStyle)({}, contentContainerStyle);
        if (horizontal) {
          dim.height -= contentStyle.paddingTop + contentStyle.paddingBottom;
        } else {
          dim.width -= contentStyle.paddingLeft + contentStyle.paddingRight;
        }
        return dim;
      };
      exports.applyContentContainerInsetForLayoutManager = applyContentContainerInsetForLayoutManager;
      var getContentContainerPadding = function getContentContainerPadding2(contentStyle, horizontal) {
        if (horizontal) {
          return {
            paddingTop: contentStyle.paddingTop,
            paddingBottom: contentStyle.paddingBottom
          };
        } else {
          return {
            paddingLeft: contentStyle.paddingLeft,
            paddingRight: contentStyle.paddingRight
          };
        }
      };
      exports.getContentContainerPadding = getContentContainerPadding;
    }
  });

  // node_modules/@shopify/flash-list/dist/GridLayoutProviderWithProps.js
  var require_GridLayoutProviderWithProps = __commonJS({
    "node_modules/@shopify/flash-list/dist/GridLayoutProviderWithProps.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var recyclerlistview_1 = require_reactnative();
      var AverageWindow_1 = require_AverageWindow();
      var ContentContainerUtils_1 = require_ContentContainerUtils();
      var GridLayoutProviderWithProps = (
        /** @class */
        function(_super) {
          tslib_1.__extends(GridLayoutProviderWithProps2, _super);
          function GridLayoutProviderWithProps2(maxSpan, getLayoutType, getSpan, getHeightOrWidth, props, acceptableRelayoutDelta) {
            var _this = this;
            var _a;
            _this = _super.call(this, maxSpan, function(i) {
              return getLayoutType(i, _this.props, _this.getCleanLayoutObj());
            }, function(i) {
              return getSpan(i, _this.props, _this.getCleanLayoutObj());
            }, function(i) {
              var _a2;
              return (
                // Using average item size if no override has been provided by the developer
                (_a2 = getHeightOrWidth(i, _this.props, _this.getCleanLayoutObj())) !== null && _a2 !== void 0 ? _a2 : _this.averageItemSize
              );
            }, acceptableRelayoutDelta) || this;
            _this.layoutObject = {
              span: void 0,
              size: void 0
            };
            _this.renderWindowInsets = {
              width: 0,
              height: 0
            };
            _this._hasExpired = false;
            _this.defaultEstimatedItemSize = 100;
            _this.props = props;
            _this.averageWindow = new AverageWindow_1.AverageWindow(1, (_a = props.estimatedItemSize) !== null && _a !== void 0 ? _a : _this.defaultEstimatedItemSize);
            _this.renderWindowInsets = _this.getAdjustedRenderWindowSize(_this.renderWindowInsets);
            return _this;
          }
          GridLayoutProviderWithProps2.prototype.updateProps = function(props) {
            var newInsetValues = (0, ContentContainerUtils_1.applyContentContainerInsetForLayoutManager)({
              height: 0,
              width: 0
            }, props.contentContainerStyle, Boolean(props.horizontal));
            this._hasExpired = this._hasExpired || this.props.numColumns !== props.numColumns || newInsetValues.height !== this.renderWindowInsets.height || newInsetValues.width !== this.renderWindowInsets.width;
            this.renderWindowInsets = newInsetValues;
            this.props = props;
            return this;
          };
          Object.defineProperty(GridLayoutProviderWithProps2.prototype, "hasExpired", {
            /**
             * This methods returns true if the layout provider has expired and needs to be recreated.
             * This can happen if the number of columns has changed or the render window size has changed in a way that cannot be handled by the layout provider internally.
             */
            get: function get() {
              return this._hasExpired;
            },
            enumerable: false,
            configurable: true
          });
          GridLayoutProviderWithProps2.prototype.markExpired = function() {
            this._hasExpired = true;
          };
          GridLayoutProviderWithProps2.prototype.reportItemLayout = function(index) {
            var _a;
            var layout = (_a = this.getLayoutManager()) === null || _a === void 0 ? void 0 : _a.getLayouts()[index];
            if (layout) {
              layout.isOverridden = true;
              this.averageWindow.addValue(this.props.horizontal ? layout.width : layout.height);
            }
          };
          Object.defineProperty(GridLayoutProviderWithProps2.prototype, "averageItemSize", {
            get: function get() {
              return this.averageWindow.currentValue;
            },
            enumerable: false,
            configurable: true
          });
          GridLayoutProviderWithProps2.prototype.newLayoutManager = function(renderWindowSize, isHorizontal, cachedLayouts) {
            var _a;
            var estimatedItemCount = Math.max(3, Math.round((this.props.horizontal ? renderWindowSize.width : renderWindowSize.height) / ((_a = this.props.estimatedItemSize) !== null && _a !== void 0 ? _a : this.defaultEstimatedItemSize)));
            this.averageWindow = new AverageWindow_1.AverageWindow(2 * (this.props.numColumns || 1) * estimatedItemCount, this.averageWindow.currentValue);
            var newLayoutManager = _super.prototype.newLayoutManager.call(this, this.getAdjustedRenderWindowSize(renderWindowSize), isHorizontal, cachedLayouts);
            if (cachedLayouts) {
              this.updateCachedDimensions(cachedLayouts, newLayoutManager);
            }
            return newLayoutManager;
          };
          GridLayoutProviderWithProps2.prototype.updateCachedDimensions = function(cachedLayouts, layoutManager) {
            var layoutCount = cachedLayouts.length;
            for (var i = 0; i < layoutCount; i++) {
              cachedLayouts[i] = tslib_1.__assign(tslib_1.__assign({}, cachedLayouts[i]), layoutManager.getStyleOverridesForIndex(i));
            }
          };
          GridLayoutProviderWithProps2.prototype.getCleanLayoutObj = function() {
            this.layoutObject.size = void 0;
            this.layoutObject.span = void 0;
            return this.layoutObject;
          };
          GridLayoutProviderWithProps2.prototype.getAdjustedRenderWindowSize = function(renderWindowSize) {
            return (0, ContentContainerUtils_1.applyContentContainerInsetForLayoutManager)(tslib_1.__assign({}, renderWindowSize), this.props.contentContainerStyle, Boolean(this.props.horizontal));
          };
          return GridLayoutProviderWithProps2;
        }(recyclerlistview_1.GridLayoutProvider)
      );
      exports.default = GridLayoutProviderWithProps;
    }
  });

  // node_modules/@shopify/flash-list/dist/errors/CustomError.js
  var require_CustomError2 = __commonJS({
    "node_modules/@shopify/flash-list/dist/errors/CustomError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var CustomError = (
        /** @class */
        function(_super) {
          tslib_1.__extends(CustomError2, _super);
          function CustomError2(exception) {
            var _this = _super.call(this, "".concat(exception.type, ": ").concat(exception.message)) || this;
            _this.name = exception.type;
            return _this;
          }
          return CustomError2;
        }(Error)
      );
      exports.default = CustomError;
    }
  });

  // node_modules/@shopify/flash-list/dist/errors/ExceptionList.js
  var require_ExceptionList = __commonJS({
    "node_modules/@shopify/flash-list/dist/errors/ExceptionList.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var ExceptionList = {
        refreshBooleanMissing: {
          message: "`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `undefined`.",
          type: "InvariantViolation"
        },
        stickyWhileHorizontalNotSupported: {
          message: "sticky headers are not supported when list is in horizontal mode. Remove `stickyHeaderIndices` prop.",
          type: "NotSupportedException"
        },
        columnsWhileHorizontalNotSupported: {
          message: "numColumns is not supported when list is in horizontal mode. Please remove or set numColumns to 1.",
          type: "NotSupportedException"
        },
        multipleViewabilityThresholdTypesNotSupported: {
          message: "You can set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold. Specifying both is not supported.",
          type: "MultipleViewabilityThresholdTypesException"
        },
        overrideItemLayoutRequiredForMasonryOptimization: {
          message: "optimizeItemArrangement has been enabled on `MasonryFlashList` but overrideItemLayout is not set.",
          type: "InvariantViolation"
        }
      };
      exports.default = ExceptionList;
    }
  });

  // node_modules/@shopify/flash-list/dist/errors/Warnings.js
  var require_Warnings = __commonJS({
    "node_modules/@shopify/flash-list/dist/errors/Warnings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var WarningList = {
        styleUnsupported: "You have passed a style to FlashList. This list doesn't support styling, use contentContainerStyle or wrap the list in a parent and apply style to it instead.",
        styleContentContainerUnsupported: "FlashList only supports padding related props and backgroundColor in contentContainerStyle. Please remove other values as they're not used.",
        unusableRenderedSize: "FlashList's rendered size is not usable. Either the height or width is too small (<2px). Please make sure that the parent view of the list has a valid size. FlashList will match the size of the parent.",
        missingKeyExtractor: "FlashList requires a keyExtractor prop to be defined when animating elements. Without it, the animations will not run as expected.",
        estimatedItemSizeMissingWarning: "estimatedItemSize FlashList prop is not defined - based on current configuration you can set it to @size to optimize list performance. Refer to FlashList documentation for more details."
      };
      exports.default = WarningList;
    }
  });

  // node_modules/@shopify/flash-list/dist/viewability/ViewabilityHelper.js
  var require_ViewabilityHelper = __commonJS({
    "node_modules/@shopify/flash-list/dist/viewability/ViewabilityHelper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var CustomError_1 = tslib_1.__importDefault(require_CustomError2());
      var ExceptionList_1 = tslib_1.__importDefault(require_ExceptionList());
      var ViewabilityHelper = (
        /** @class */
        function() {
          function ViewabilityHelper2(viewabilityConfig, viewableIndicesChanged) {
            this.possiblyViewableIndices = [];
            this.hasInteracted = false;
            this.viewableIndices = [];
            this.lastReportedViewableIndices = [];
            this.timers = /* @__PURE__ */ new Set();
            this.viewabilityConfig = viewabilityConfig;
            this.viewableIndicesChanged = viewableIndicesChanged;
          }
          ViewabilityHelper2.prototype.dispose = function() {
            this.timers.forEach(clearTimeout);
          };
          ViewabilityHelper2.prototype.updateViewableItems = function(horizontal, scrollOffset, listSize, getLayout, viewableIndices) {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (viewableIndices !== void 0) {
              this.possiblyViewableIndices = viewableIndices;
            }
            if (((_a = this.viewabilityConfig) === null || _a === void 0 ? void 0 : _a.itemVisiblePercentThreshold) !== null && ((_b = this.viewabilityConfig) === null || _b === void 0 ? void 0 : _b.itemVisiblePercentThreshold) !== void 0 && ((_c = this.viewabilityConfig) === null || _c === void 0 ? void 0 : _c.viewAreaCoveragePercentThreshold) !== null && ((_d = this.viewabilityConfig) === null || _d === void 0 ? void 0 : _d.viewAreaCoveragePercentThreshold) !== void 0) {
              throw new CustomError_1.default(ExceptionList_1.default.multipleViewabilityThresholdTypesNotSupported);
            }
            if (((_f = (_e = this.viewabilityConfig) === null || _e === void 0 ? void 0 : _e.waitForInteraction) !== null && _f !== void 0 ? _f : false) && !this.hasInteracted) {
              return;
            }
            var newViewableIndices = this.possiblyViewableIndices.filter(function(index) {
              var _a2, _b2;
              return _this.isItemViewable(index, horizontal, scrollOffset, listSize, (_a2 = _this.viewabilityConfig) === null || _a2 === void 0 ? void 0 : _a2.viewAreaCoveragePercentThreshold, (_b2 = _this.viewabilityConfig) === null || _b2 === void 0 ? void 0 : _b2.itemVisiblePercentThreshold, getLayout);
            });
            this.viewableIndices = newViewableIndices;
            var minimumViewTime = (_h = (_g = this.viewabilityConfig) === null || _g === void 0 ? void 0 : _g.minimumViewTime) !== null && _h !== void 0 ? _h : 250;
            if (minimumViewTime > 0) {
              var timeoutId_1 = setTimeout(function() {
                _this.timers.delete(timeoutId_1);
                _this.checkViewableIndicesChanges(newViewableIndices);
                _this.timers.add(timeoutId_1);
              }, minimumViewTime);
            } else {
              this.checkViewableIndicesChanges(newViewableIndices);
            }
          };
          ViewabilityHelper2.prototype.checkViewableIndicesChanges = function(newViewableIndices) {
            var _this = this;
            var currentlyNewViewableIndices = newViewableIndices.filter(function(index) {
              return _this.viewableIndices.includes(index);
            });
            var newlyVisibleItems = currentlyNewViewableIndices.filter(function(index) {
              return !_this.lastReportedViewableIndices.includes(index);
            });
            var newlyNonvisibleItems = this.lastReportedViewableIndices.filter(function(index) {
              return !currentlyNewViewableIndices.includes(index);
            });
            if (newlyVisibleItems.length > 0 || newlyNonvisibleItems.length > 0) {
              this.lastReportedViewableIndices = currentlyNewViewableIndices;
              this.viewableIndicesChanged(currentlyNewViewableIndices, newlyVisibleItems, newlyNonvisibleItems);
            }
          };
          ViewabilityHelper2.prototype.clearLastReportedViewableIndices = function() {
            this.lastReportedViewableIndices = [];
          };
          ViewabilityHelper2.prototype.isItemViewable = function(index, horizontal, scrollOffset, listSize, viewAreaCoveragePercentThreshold, itemVisiblePercentThreshold, getLayout) {
            var itemLayout = getLayout(index);
            if (itemLayout === void 0) {
              return false;
            }
            var itemTop = (horizontal ? itemLayout.x : itemLayout.y) - scrollOffset;
            var itemSize = horizontal ? itemLayout.width : itemLayout.height;
            var listMainSize = horizontal ? listSize.width : listSize.height;
            var pixelsVisible = Math.min(itemTop + itemSize, listMainSize) - Math.max(itemTop, 0);
            if (pixelsVisible === itemSize) {
              return true;
            }
            if (pixelsVisible === 0) {
              return false;
            }
            var viewAreaMode = viewAreaCoveragePercentThreshold !== null && viewAreaCoveragePercentThreshold !== void 0;
            var percent = viewAreaMode ? pixelsVisible / listMainSize : pixelsVisible / itemSize;
            var viewableAreaPercentThreshold = viewAreaMode ? viewAreaCoveragePercentThreshold * 0.01 : (itemVisiblePercentThreshold !== null && itemVisiblePercentThreshold !== void 0 ? itemVisiblePercentThreshold : 0) * 0.01;
            return percent >= viewableAreaPercentThreshold;
          };
          return ViewabilityHelper2;
        }()
      );
      exports.default = ViewabilityHelper;
    }
  });

  // node_modules/@shopify/flash-list/dist/viewability/ViewabilityManager.js
  var require_ViewabilityManager = __commonJS({
    "node_modules/@shopify/flash-list/dist/viewability/ViewabilityManager.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var ViewabilityHelper_1 = tslib_1.__importDefault(require_ViewabilityHelper());
      var ViewabilityManager = (
        /** @class */
        function() {
          function ViewabilityManager2(flashListRef) {
            var _this = this;
            var _a;
            this.viewabilityHelpers = [];
            this.hasInteracted = false;
            this.dispose = function() {
              _this.viewabilityHelpers.forEach(function(viewabilityHelper) {
                return viewabilityHelper.dispose();
              });
            };
            this.onVisibleIndicesChanged = function(all) {
              _this.updateViewableItems(all);
            };
            this.recordInteraction = function() {
              if (_this.hasInteracted) {
                return;
              }
              _this.hasInteracted = true;
              _this.viewabilityHelpers.forEach(function(viewabilityHelper) {
                viewabilityHelper.hasInteracted = true;
              });
              _this.updateViewableItems();
            };
            this.updateViewableItems = function(newViewableIndices) {
              var _a2, _b, _c, _d;
              var listSize = (_b = (_a2 = _this.flashListRef.recyclerlistview_unsafe) === null || _a2 === void 0 ? void 0 : _a2.getRenderedSize()) !== null && _b !== void 0 ? _b : _this.flashListRef.props.estimatedListSize;
              if (listSize === void 0 || !_this.shouldListenToVisibleIndices) {
                return;
              }
              var scrollOffset = ((_d = (_c = _this.flashListRef.recyclerlistview_unsafe) === null || _c === void 0 ? void 0 : _c.getCurrentScrollOffset()) !== null && _d !== void 0 ? _d : 0) - _this.flashListRef.firstItemOffset;
              _this.viewabilityHelpers.forEach(function(viewabilityHelper) {
                var _a3;
                viewabilityHelper.updateViewableItems((_a3 = _this.flashListRef.props.horizontal) !== null && _a3 !== void 0 ? _a3 : false, scrollOffset, listSize, function(index) {
                  var _a4;
                  return (_a4 = _this.flashListRef.recyclerlistview_unsafe) === null || _a4 === void 0 ? void 0 : _a4.getLayout(index);
                }, newViewableIndices);
              });
            };
            this.recomputeViewableItems = function() {
              _this.viewabilityHelpers.forEach(function(viewabilityHelper) {
                return viewabilityHelper.clearLastReportedViewableIndices();
              });
              _this.updateViewableItems();
            };
            this.createViewabilityHelper = function(viewabilityConfig, onViewableItemsChanged) {
              var mapViewToken = function mapViewToken2(index, isViewable) {
                var _a2;
                var item = (_a2 = _this.flashListRef.props.data) === null || _a2 === void 0 ? void 0 : _a2[index];
                var key = item === void 0 || _this.flashListRef.props.keyExtractor === void 0 ? index.toString() : _this.flashListRef.props.keyExtractor(item, index);
                return {
                  index,
                  isViewable,
                  item,
                  key,
                  timestamp: Date.now()
                };
              };
              return new ViewabilityHelper_1.default(viewabilityConfig, function(indices, newlyVisibleIndices, newlyNonvisibleIndices) {
                onViewableItemsChanged === null || onViewableItemsChanged === void 0 ? void 0 : onViewableItemsChanged({
                  viewableItems: indices.map(function(index) {
                    return mapViewToken(index, true);
                  }),
                  changed: tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(newlyVisibleIndices.map(function(index) {
                    return mapViewToken(index, true);
                  })), false), tslib_1.__read(newlyNonvisibleIndices.map(function(index) {
                    return mapViewToken(index, false);
                  })), false)
                });
              });
            };
            this.flashListRef = flashListRef;
            if (flashListRef.props.onViewableItemsChanged !== null && flashListRef.props.onViewableItemsChanged !== void 0) {
              this.viewabilityHelpers.push(this.createViewabilityHelper(flashListRef.props.viewabilityConfig, flashListRef.props.onViewableItemsChanged));
            }
            ((_a = flashListRef.props.viewabilityConfigCallbackPairs) !== null && _a !== void 0 ? _a : []).forEach(function(pair) {
              _this.viewabilityHelpers.push(_this.createViewabilityHelper(pair.viewabilityConfig, pair.onViewableItemsChanged));
            });
          }
          Object.defineProperty(ViewabilityManager2.prototype, "shouldListenToVisibleIndices", {
            /**
             * @returns true if the viewability manager has any viewability callback pairs registered.
             */
            get: function get() {
              return this.viewabilityHelpers.length > 0;
            },
            enumerable: false,
            configurable: true
          });
          return ViewabilityManager2;
        }()
      );
      exports.default = ViewabilityManager;
    }
  });

  // node_modules/@shopify/flash-list/dist/FlashListProps.js
  var require_FlashListProps = __commonJS({
    "node_modules/@shopify/flash-list/dist/FlashListProps.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RenderTargetOptions = void 0;
      exports.RenderTargetOptions = {
        Cell: "Cell",
        StickyHeader: "StickyHeader",
        Measurement: "Measurement"
      };
    }
  });

  // node_modules/recyclerlistview/dist/reactnative/platform/reactnative/itemanimators/defaultjsanimator/DefaultJSItemAnimator.js
  var require_DefaultJSItemAnimator = __commonJS({
    "node_modules/recyclerlistview/dist/reactnative/platform/reactnative/itemanimators/defaultjsanimator/DefaultJSItemAnimator.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function extendStatics12(d, b3) {
          extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b4) {
            d2.__proto__ = b4;
          } || function(d2, b4) {
            for (var p in b4) if (Object.prototype.hasOwnProperty.call(b4, p)) d2[p] = b4[p];
          };
          return extendStatics2(d, b3);
        };
        return function(d, b3) {
          if (typeof b3 !== "function" && b3 !== null) throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics2(d, b3);
          function __() {
            this.constructor = d;
          }
          d.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DefaultJSItemAnimator = void 0;
      var react_native_1 = require_react_native();
      var ItemAnimator_1 = require_ItemAnimator();
      var DefaultJSItemAnimator = (
        /** @class */
        function(_super) {
          __extends2(DefaultJSItemAnimator2, _super);
          function DefaultJSItemAnimator2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.shouldAnimateOnce = true;
            _this._hasAnimatedOnce = false;
            _this._isTimerOn = false;
            return _this;
          }
          DefaultJSItemAnimator2.prototype.animateWillMount = function(atX, atY, itemIndex) {
            return void 0;
          };
          DefaultJSItemAnimator2.prototype.animateDidMount = function(atX, atY, itemRef, itemIndex) {
          };
          DefaultJSItemAnimator2.prototype.animateWillUpdate = function(fromX, fromY, toX, toY, itemRef, itemIndex) {
          };
          DefaultJSItemAnimator2.prototype.animateShift = function(fromX, fromY, toX, toY, itemRef, itemIndex) {
            var _this = this;
            if (!this._isTimerOn) {
              this._isTimerOn = true;
              if (!this._hasAnimatedOnce) {
                setTimeout(function() {
                  _this._hasAnimatedOnce = true;
                }, 700);
              }
            }
            if (fromX !== toX || fromY !== toY) {
              if (!this.shouldAnimateOnce || this.shouldAnimateOnce && !this._hasAnimatedOnce) {
                var viewRef_1 = itemRef;
                var animXY_1 = new react_native_1.Animated.ValueXY({
                  x: fromX,
                  y: fromY
                });
                animXY_1.addListener(function(value) {
                  if (viewRef_1._isUnmountedForRecyclerListView) {
                    animXY_1.stopAnimation();
                    return;
                  }
                  viewRef_1.setNativeProps(_this._getNativePropObject(value.x, value.y));
                });
                if (viewRef_1._lastAnimVal) {
                  viewRef_1._lastAnimVal.stopAnimation();
                }
                viewRef_1._lastAnimVal = animXY_1;
                react_native_1.Animated.timing(animXY_1, {
                  toValue: {
                    x: toX,
                    y: toY
                  },
                  duration: 200,
                  easing: react_native_1.Easing.out(react_native_1.Easing.ease),
                  useNativeDriver: ItemAnimator_1.BaseItemAnimator.USE_NATIVE_DRIVER
                }).start(function() {
                  viewRef_1._lastAnimVal = null;
                });
                return true;
              }
            }
            return false;
          };
          DefaultJSItemAnimator2.prototype.animateWillUnmount = function(atX, atY, itemRef, itemIndex) {
            itemRef._isUnmountedForRecyclerListView = true;
          };
          DefaultJSItemAnimator2.prototype._getNativePropObject = function(x2, y2) {
            return {
              style: {
                left: x2,
                top: y2
              }
            };
          };
          return DefaultJSItemAnimator2;
        }(ItemAnimator_1.BaseItemAnimator)
      );
      exports.DefaultJSItemAnimator = DefaultJSItemAnimator;
    }
  });

  // node_modules/@shopify/flash-list/dist/native/config/PlatformHelper.js
  var require_PlatformHelper = __commonJS({
    "node_modules/@shopify/flash-list/dist/native/config/PlatformHelper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getFooterContainer = exports.getItemAnimator = exports.getCellContainerPlatformStyles = exports.PlatformConfig = void 0;
      var DefaultJSItemAnimator_1 = require_DefaultJSItemAnimator();
      var PlatformConfig = {
        defaultDrawDistance: 250,
        invertedTransformStyle: {
          transform: [
            {
              scaleY: -1
            }
          ]
        },
        invertedTransformStyleHorizontal: {
          transform: [
            {
              scaleX: -1
            }
          ]
        }
      };
      exports.PlatformConfig = PlatformConfig;
      var getCellContainerPlatformStyles = function getCellContainerPlatformStyles2(inverted, parentProps) {
        return void 0;
      };
      exports.getCellContainerPlatformStyles = getCellContainerPlatformStyles;
      var getItemAnimator = function getItemAnimator2() {
        return new DefaultJSItemAnimator_1.DefaultJSItemAnimator();
      };
      exports.getItemAnimator = getItemAnimator;
      var getFooterContainer = function getFooterContainer2() {
        return void 0;
      };
      exports.getFooterContainer = getFooterContainer;
    }
  });

  // node_modules/@shopify/flash-list/dist/FlashList.js
  var require_FlashList = __commonJS({
    "node_modules/@shopify/flash-list/dist/FlashList.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var react_1 = tslib_1.__importDefault(require_react());
      var react_native_1 = require_react_native();
      var recyclerlistview_1 = require_reactnative();
      var sticky_1 = tslib_1.__importDefault(require_sticky());
      var AutoLayoutView_1 = tslib_1.__importDefault(require_AutoLayoutView());
      var CellContainer_1 = tslib_1.__importDefault(require_CellContainer());
      var PureComponentWrapper_1 = require_PureComponentWrapper();
      var GridLayoutProviderWithProps_1 = tslib_1.__importDefault(require_GridLayoutProviderWithProps());
      var CustomError_1 = tslib_1.__importDefault(require_CustomError2());
      var ExceptionList_1 = tslib_1.__importDefault(require_ExceptionList());
      var Warnings_1 = tslib_1.__importDefault(require_Warnings());
      var ViewabilityManager_1 = tslib_1.__importDefault(require_ViewabilityManager());
      var FlashListProps_1 = require_FlashListProps();
      var PlatformHelper_1 = require_PlatformHelper();
      var ContentContainerUtils_1 = require_ContentContainerUtils();
      var StickyHeaderContainer = sticky_1.default;
      var FlashList2 = (
        /** @class */
        function(_super) {
          tslib_1.__extends(FlashList3, _super);
          function FlashList3(props) {
            var _this = this;
            var _a;
            _this = _super.call(this, props) || this;
            _this.listFixedDimensionSize = 0;
            _this.transformStyle = PlatformHelper_1.PlatformConfig.invertedTransformStyle;
            _this.transformStyleHorizontal = PlatformHelper_1.PlatformConfig.invertedTransformStyleHorizontal;
            _this.distanceFromWindow = 0;
            _this.contentStyle = {
              paddingBottom: 0,
              paddingTop: 0,
              paddingLeft: 0,
              paddingRight: 0
            };
            _this.loadStartTime = 0;
            _this.isListLoaded = false;
            _this.windowCorrectionConfig = {
              value: {
                windowShift: 0,
                startCorrection: 0,
                endCorrection: 0
              },
              applyToItemScroll: true,
              applyToInitialOffset: true
            };
            _this.isEmptyList = false;
            _this.onEndReached = function() {
              var _a2, _b;
              (_b = (_a2 = _this.props).onEndReached) === null || _b === void 0 ? void 0 : _b.call(_a2);
            };
            _this.getRefreshControl = function() {
              if (_this.props.onRefresh) {
                return react_1.default.createElement(react_native_1.RefreshControl, {
                  refreshing: Boolean(_this.props.refreshing),
                  progressViewOffset: _this.props.progressViewOffset,
                  onRefresh: _this.props.onRefresh
                });
              }
            };
            _this.onScrollBeginDrag = function(event) {
              var _a2, _b;
              _this.recordInteraction();
              (_b = (_a2 = _this.props).onScrollBeginDrag) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
            };
            _this.onScroll = function(event) {
              var _a2, _b;
              _this.recordInteraction();
              _this.viewabilityManager.updateViewableItems();
              (_b = (_a2 = _this.props).onScroll) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
            };
            _this.handleSizeChange = function(event) {
              var _a2;
              _this.validateListSize(event);
              var newSize = _this.props.horizontal ? event.nativeEvent.layout.height : event.nativeEvent.layout.width;
              var oldSize = _this.listFixedDimensionSize;
              _this.listFixedDimensionSize = newSize;
              if (oldSize > 0 && oldSize !== newSize) {
                (_a2 = _this.rlvRef) === null || _a2 === void 0 ? void 0 : _a2.forceRerender();
              }
              if (_this.props.onLayout) {
                _this.props.onLayout(event);
              }
            };
            _this.container = function(props2, children) {
              _this.clearPostLoadTimeout();
              return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(PureComponentWrapper_1.PureComponentWrapper, {
                enabled: _this.isListLoaded || children.length > 0 || _this.isEmptyList,
                contentStyle: _this.props.contentContainerStyle,
                horizontal: _this.props.horizontal,
                header: _this.props.ListHeaderComponent,
                extraData: _this.state.extraData,
                headerStyle: _this.props.ListHeaderComponentStyle,
                inverted: _this.props.inverted,
                renderer: _this.header
              }), react_1.default.createElement(AutoLayoutView_1.default, tslib_1.__assign({}, props2, {
                onBlankAreaEvent: _this.props.onBlankArea,
                onLayout: _this.updateDistanceFromWindow,
                disableAutoLayout: _this.props.disableAutoLayout
              }), children), _this.isEmptyList ? _this.getValidComponent(_this.props.ListEmptyComponent) : null, react_1.default.createElement(PureComponentWrapper_1.PureComponentWrapper, {
                enabled: _this.isListLoaded || children.length > 0 || _this.isEmptyList,
                contentStyle: _this.props.contentContainerStyle,
                horizontal: _this.props.horizontal,
                header: _this.props.ListFooterComponent,
                extraData: _this.state.extraData,
                headerStyle: _this.props.ListFooterComponentStyle,
                inverted: _this.props.inverted,
                renderer: _this.footer
              }), _this.getComponentForHeightMeasurement());
            };
            _this.itemContainer = function(props2, parentProps) {
              var _a2;
              var CellRendererComponent = (_a2 = _this.props.CellRendererComponent) !== null && _a2 !== void 0 ? _a2 : CellContainer_1.default;
              return react_1.default.createElement(CellRendererComponent, tslib_1.__assign({}, props2, {
                style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, props2.style), {
                  flexDirection: _this.props.horizontal ? "row" : "column",
                  alignItems: "stretch"
                }), _this.getTransform()), (0, PlatformHelper_1.getCellContainerPlatformStyles)(_this.props.inverted, parentProps)),
                index: parentProps.index
              }), react_1.default.createElement(PureComponentWrapper_1.PureComponentWrapper, {
                extendedState: parentProps.extendedState,
                internalSnapshot: parentProps.internalSnapshot,
                data: parentProps.data,
                arg: parentProps.index,
                renderer: _this.getCellContainerChild
              }));
            };
            _this.updateDistanceFromWindow = function(event) {
              var newDistanceFromWindow = _this.props.horizontal ? event.nativeEvent.layout.x : event.nativeEvent.layout.y;
              if (_this.distanceFromWindow !== newDistanceFromWindow) {
                _this.distanceFromWindow = newDistanceFromWindow;
                _this.windowCorrectionConfig.value.windowShift = -_this.distanceFromWindow;
                _this.viewabilityManager.updateViewableItems();
              }
            };
            _this.separator = function(index) {
              if (_this.props.data === null || _this.props.data === void 0 || index + 1 >= _this.props.data.length) {
                return null;
              }
              var leadingItem = _this.props.data[index];
              var trailingItem = _this.props.data[index + 1];
              var _$props = {
                leadingItem,
                trailingItem
              };
              var Separator = _this.props.ItemSeparatorComponent;
              return Separator && react_1.default.createElement(Separator, tslib_1.__assign({}, _$props));
            };
            _this.header = function() {
              return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(react_native_1.View, {
                style: {
                  paddingTop: _this.contentStyle.paddingTop,
                  paddingLeft: _this.contentStyle.paddingLeft
                }
              }), react_1.default.createElement(react_native_1.View, {
                style: [
                  _this.props.ListHeaderComponentStyle,
                  _this.getTransform()
                ]
              }, _this.getValidComponent(_this.props.ListHeaderComponent)));
            };
            _this.footer = function() {
              var _a2;
              var FooterContainer = (_a2 = (0, PlatformHelper_1.getFooterContainer)()) !== null && _a2 !== void 0 ? _a2 : CellContainer_1.default;
              return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(FooterContainer, {
                index: -1,
                style: [
                  _this.props.ListFooterComponentStyle,
                  _this.getTransform()
                ]
              }, _this.getValidComponent(_this.props.ListFooterComponent)), react_1.default.createElement(react_native_1.View, {
                style: {
                  paddingBottom: _this.contentStyle.paddingBottom,
                  paddingRight: _this.contentStyle.paddingRight
                }
              }));
            };
            _this.getComponentForHeightMeasurement = function() {
              return _this.props.horizontal && !_this.props.disableHorizontalListHeightMeasurement && !_this.isListLoaded && _this.state.dataProvider.getSize() > 0 ? react_1.default.createElement(react_native_1.View, {
                style: {
                  opacity: 0
                },
                pointerEvents: "none"
              }, _this.rowRendererWithIndex(Math.min(_this.state.dataProvider.getSize() - 1, 1), FlashListProps_1.RenderTargetOptions.Measurement)) : null;
            };
            _this.applyWindowCorrection = function(_3, __, correctionObject) {
              var _a2;
              correctionObject.windowShift = -_this.distanceFromWindow;
              (_a2 = _this.stickyContentContainerRef) === null || _a2 === void 0 ? void 0 : _a2.setEnabled(_this.isStickyEnabled);
            };
            _this.rowRendererSticky = function(index) {
              return _this.rowRendererWithIndex(index, FlashListProps_1.RenderTargetOptions.StickyHeader);
            };
            _this.rowRendererWithIndex = function(index, target) {
              var _a2, _b, _c;
              return (_b = (_a2 = _this.props).renderItem) === null || _b === void 0 ? void 0 : _b.call(_a2, {
                item: _this.props.data[index],
                index,
                target,
                extraData: (_c = _this.state.extraData) === null || _c === void 0 ? void 0 : _c.value
              });
            };
            _this.emptyRowRenderer = function() {
              return null;
            };
            _this.getCellContainerChild = function(index) {
              return react_1.default.createElement(react_1.default.Fragment, null, _this.props.inverted ? _this.separator(index) : null, react_1.default.createElement(react_native_1.View, {
                style: {
                  flexDirection: _this.props.horizontal || _this.props.numColumns === 1 ? "column" : "row"
                }
              }, _this.rowRendererWithIndex(index, FlashListProps_1.RenderTargetOptions.Cell)), _this.props.inverted ? null : _this.separator(index));
            };
            _this.recyclerRef = function(ref) {
              _this.rlvRef = ref;
            };
            _this.stickyContentRef = function(ref) {
              _this.stickyContentContainerRef = ref;
            };
            _this.stickyOverrideRowRenderer = function(_3, rowData, index, ___) {
              return react_1.default.createElement(PureComponentWrapper_1.PureComponentWrapper, {
                ref: _this.stickyContentRef,
                enabled: _this.isStickyEnabled,
                // We're passing rowData to ensure that sticky headers are updated when data changes
                rowData,
                arg: index,
                renderer: _this.rowRendererSticky
              });
            };
            _this.onItemLayout = function(index) {
              _this.state.layoutProvider.reportItemLayout(index);
              _this.raiseOnLoadEventIfNeeded();
            };
            _this.raiseOnLoadEventIfNeeded = function() {
              var _a2, _b;
              if (!_this.isListLoaded) {
                _this.isListLoaded = true;
                (_b = (_a2 = _this.props).onLoad) === null || _b === void 0 ? void 0 : _b.call(_a2, {
                  elapsedTimeInMs: Date.now() - _this.loadStartTime
                });
                _this.runAfterOnLoad();
              }
            };
            _this.runAfterOnLoad = function() {
              if (_this.props.estimatedItemSize === void 0) {
                _this.itemSizeWarningTimeoutId = setTimeout(function() {
                  var averageItemSize = Math.floor(_this.state.layoutProvider.averageItemSize);
                  console.warn(Warnings_1.default.estimatedItemSizeMissingWarning.replace("@size", averageItemSize.toString()));
                }, 1e3);
              }
              _this.postLoadTimeoutId = setTimeout(function() {
                if (_this.props.horizontal) {
                  _this.forceUpdate();
                }
              }, 500);
            };
            _this.clearPostLoadTimeout = function() {
              if (_this.postLoadTimeoutId !== void 0) {
                clearTimeout(_this.postLoadTimeoutId);
                _this.postLoadTimeoutId = void 0;
              }
            };
            _this.clearRenderSizeWarningTimeout = function() {
              if (_this.renderedSizeWarningTimeoutId !== void 0) {
                clearTimeout(_this.renderedSizeWarningTimeoutId);
                _this.renderedSizeWarningTimeoutId = void 0;
              }
            };
            _this.recordInteraction = function() {
              _this.viewabilityManager.recordInteraction();
            };
            _this.recomputeViewableItems = function() {
              _this.viewabilityManager.recomputeViewableItems();
            };
            _this.loadStartTime = Date.now();
            _this.validateProps();
            if (props.estimatedListSize) {
              if (props.horizontal) {
                _this.listFixedDimensionSize = props.estimatedListSize.height;
              } else {
                _this.listFixedDimensionSize = props.estimatedListSize.width;
              }
            }
            _this.distanceFromWindow = (_a = props.estimatedFirstItemOffset) !== null && _a !== void 0 ? _a : props.ListHeaderComponent && 1 || 0;
            _this.state = FlashList3.getInitialMutableState(_this);
            _this.viewabilityManager = new ViewabilityManager_1.default(_this);
            _this.itemAnimator = (0, PlatformHelper_1.getItemAnimator)();
            return _this;
          }
          FlashList3.prototype.validateProps = function() {
            var _a, _b;
            if (this.props.onRefresh && typeof this.props.refreshing !== "boolean") {
              throw new CustomError_1.default(ExceptionList_1.default.refreshBooleanMissing);
            }
            if (Number((_a = this.props.stickyHeaderIndices) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.props.horizontal) {
              throw new CustomError_1.default(ExceptionList_1.default.stickyWhileHorizontalNotSupported);
            }
            if (Number(this.props.numColumns) > 1 && this.props.horizontal) {
              throw new CustomError_1.default(ExceptionList_1.default.columnsWhileHorizontalNotSupported);
            }
            if (__DEV__ && Object.keys(react_native_1.StyleSheet.flatten((_b = this.props.style) !== null && _b !== void 0 ? _b : {})).length > 0) {
              console.warn(Warnings_1.default.styleUnsupported);
            }
            if ((0, ContentContainerUtils_1.hasUnsupportedKeysInContentContainerStyle)(this.props.contentContainerStyle)) {
              console.warn(Warnings_1.default.styleContentContainerUnsupported);
            }
          };
          FlashList3.getDerivedStateFromProps = function(nextProps, prevState) {
            var _a, _b;
            var newState = tslib_1.__assign({}, prevState);
            if (prevState.numColumns !== nextProps.numColumns) {
              newState.numColumns = nextProps.numColumns || 1;
              newState.layoutProvider = FlashList3.getLayoutProvider(newState.numColumns, nextProps);
            } else if (prevState.layoutProvider.updateProps(nextProps).hasExpired) {
              newState.layoutProvider = FlashList3.getLayoutProvider(newState.numColumns, nextProps);
            }
            newState.layoutProvider.shouldRefreshWithAnchoring = Boolean(!((_a = prevState.layoutProvider) === null || _a === void 0 ? void 0 : _a.hasExpired));
            if (nextProps.data !== prevState.data) {
              newState.data = nextProps.data;
              newState.dataProvider = prevState.dataProvider.cloneWithRows(nextProps.data);
              if (nextProps.renderItem !== prevState.renderItem) {
                newState.extraData = tslib_1.__assign({}, prevState.extraData);
              }
            }
            if (nextProps.extraData !== ((_b = prevState.extraData) === null || _b === void 0 ? void 0 : _b.value)) {
              newState.extraData = {
                value: nextProps.extraData
              };
            }
            newState.renderItem = nextProps.renderItem;
            return newState;
          };
          FlashList3.getInitialMutableState = function(flashList) {
            var getStableId;
            if (flashList.props.keyExtractor !== null && flashList.props.keyExtractor !== void 0) {
              getStableId = function getStableId2(index) {
                return flashList.props.keyExtractor(flashList.props.data[index], index).toString();
              };
            }
            return {
              data: null,
              layoutProvider: null,
              dataProvider: new recyclerlistview_1.DataProvider(function(r1, r2) {
                return r1 !== r2;
              }, getStableId),
              numColumns: 0
            };
          };
          FlashList3.getLayoutProvider = function(numColumns, flashListProps) {
            return new GridLayoutProviderWithProps_1.default(
              // max span or, total columns
              numColumns,
              function(index, props) {
                var _a;
                var type = (_a = props.getItemType) === null || _a === void 0 ? void 0 : _a.call(props, props.data[index], index, props.extraData);
                return type || 0;
              },
              function(index, props, mutableLayout) {
                var _a, _b;
                (_a = props.overrideItemLayout) === null || _a === void 0 ? void 0 : _a.call(props, mutableLayout, props.data[index], index, numColumns, props.extraData);
                return (_b = mutableLayout === null || mutableLayout === void 0 ? void 0 : mutableLayout.span) !== null && _b !== void 0 ? _b : 1;
              },
              function(index, props, mutableLayout) {
                var _a;
                (_a = props.overrideItemLayout) === null || _a === void 0 ? void 0 : _a.call(props, mutableLayout, props.data[index], index, numColumns, props.extraData);
                return mutableLayout === null || mutableLayout === void 0 ? void 0 : mutableLayout.size;
              },
              flashListProps
            );
          };
          FlashList3.prototype.componentDidMount = function() {
            var _a;
            if (((_a = this.props.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
              this.raiseOnLoadEventIfNeeded();
            }
          };
          FlashList3.prototype.componentWillUnmount = function() {
            this.viewabilityManager.dispose();
            this.clearPostLoadTimeout();
            this.clearRenderSizeWarningTimeout();
            if (this.itemSizeWarningTimeoutId !== void 0) {
              clearTimeout(this.itemSizeWarningTimeoutId);
            }
          };
          FlashList3.prototype.render = function() {
            this.isEmptyList = this.state.dataProvider.getSize() === 0;
            (0, ContentContainerUtils_1.updateContentStyle)(this.contentStyle, this.props.contentContainerStyle);
            var _a = this.props, drawDistance = _a.drawDistance, removeClippedSubviews = _a.removeClippedSubviews, stickyHeaderIndices = _a.stickyHeaderIndices, horizontal = _a.horizontal, onEndReachedThreshold = _a.onEndReachedThreshold, estimatedListSize = _a.estimatedListSize, initialScrollIndex = _a.initialScrollIndex, style = _a.style, contentContainerStyle = _a.contentContainerStyle, renderScrollComponent = _a.renderScrollComponent, restProps = tslib_1.__rest(_a, [
              "drawDistance",
              "removeClippedSubviews",
              "stickyHeaderIndices",
              "horizontal",
              "onEndReachedThreshold",
              "estimatedListSize",
              "initialScrollIndex",
              "style",
              "contentContainerStyle",
              "renderScrollComponent"
            ]);
            var initialOffset = this.isInitialScrollIndexInFirstRow() && this.distanceFromWindow || void 0;
            var finalDrawDistance = drawDistance === void 0 ? PlatformHelper_1.PlatformConfig.defaultDrawDistance : drawDistance;
            return react_1.default.createElement(StickyHeaderContainer, {
              overrideRowRenderer: this.stickyOverrideRowRenderer,
              applyWindowCorrection: this.applyWindowCorrection,
              stickyHeaderIndices,
              style: this.props.horizontal ? tslib_1.__assign({}, this.getTransform()) : tslib_1.__assign({
                flex: 1,
                overflow: "hidden"
              }, this.getTransform())
            }, react_1.default.createElement(recyclerlistview_1.ProgressiveListView, tslib_1.__assign({}, restProps, {
              ref: this.recyclerRef,
              layoutProvider: this.state.layoutProvider,
              dataProvider: this.state.dataProvider,
              rowRenderer: this.emptyRowRenderer,
              canChangeSize: true,
              isHorizontal: Boolean(horizontal),
              scrollViewProps: tslib_1.__assign({
                onScrollBeginDrag: this.onScrollBeginDrag,
                onLayout: this.handleSizeChange,
                refreshControl: this.props.refreshControl || this.getRefreshControl(),
                // Min values are being used to suppress RLV's bounded exception
                style: {
                  minHeight: 1,
                  minWidth: 1
                },
                contentContainerStyle: tslib_1.__assign({
                  backgroundColor: this.contentStyle.backgroundColor,
                  // Required to handle a scrollview bug. Check: https://github.com/Shopify/flash-list/pull/187
                  minHeight: 1,
                  minWidth: 1
                }, (0, ContentContainerUtils_1.getContentContainerPadding)(this.contentStyle, horizontal))
              }, this.props.overrideProps),
              forceNonDeterministicRendering: true,
              renderItemContainer: this.itemContainer,
              renderContentContainer: this.container,
              onEndReached: this.onEndReached,
              onEndReachedThresholdRelative: onEndReachedThreshold || void 0,
              extendedState: this.state.extraData,
              layoutSize: estimatedListSize,
              maxRenderAhead: 3 * finalDrawDistance,
              finalRenderAheadOffset: finalDrawDistance,
              renderAheadStep: finalDrawDistance,
              initialRenderIndex: !this.isInitialScrollIndexInFirstRow() && initialScrollIndex || void 0,
              initialOffset,
              onItemLayout: this.onItemLayout,
              onScroll: this.onScroll,
              onVisibleIndicesChanged: this.viewabilityManager.shouldListenToVisibleIndices ? this.viewabilityManager.onVisibleIndicesChanged : void 0,
              windowCorrectionConfig: this.getUpdatedWindowCorrectionConfig(),
              itemAnimator: this.itemAnimator,
              suppressBoundedSizeException: true,
              externalScrollView: renderScrollComponent
            })));
          };
          FlashList3.prototype.getUpdatedWindowCorrectionConfig = function() {
            if (this.isInitialScrollIndexInFirstRow()) {
              this.windowCorrectionConfig.applyToInitialOffset = false;
            } else {
              this.windowCorrectionConfig.applyToInitialOffset = true;
            }
            this.windowCorrectionConfig.value.windowShift = -this.distanceFromWindow;
            return this.windowCorrectionConfig;
          };
          FlashList3.prototype.isInitialScrollIndexInFirstRow = function() {
            var _a;
            return ((_a = this.props.initialScrollIndex) !== null && _a !== void 0 ? _a : this.state.numColumns) < this.state.numColumns;
          };
          FlashList3.prototype.validateListSize = function(event) {
            var _a = event.nativeEvent.layout, height = _a.height, width = _a.width;
            this.clearRenderSizeWarningTimeout();
            if (Math.floor(height) <= 1 || Math.floor(width) <= 1) {
              this.renderedSizeWarningTimeoutId = setTimeout(function() {
                console.warn(Warnings_1.default.unusableRenderedSize);
              }, 1e3);
            }
          };
          FlashList3.prototype.getTransform = function() {
            var transformStyle = this.props.horizontal ? this.transformStyleHorizontal : this.transformStyle;
            return this.props.inverted && transformStyle || void 0;
          };
          FlashList3.prototype.getValidComponent = function(component) {
            var PassedComponent = component;
            return react_1.default.isValidElement(PassedComponent) && PassedComponent || PassedComponent && react_1.default.createElement(PassedComponent, null) || null;
          };
          Object.defineProperty(FlashList3.prototype, "isStickyEnabled", {
            get: function get() {
              var _a;
              var currentOffset = ((_a = this.rlvRef) === null || _a === void 0 ? void 0 : _a.getCurrentScrollOffset()) || 0;
              return currentOffset >= this.distanceFromWindow;
            },
            enumerable: false,
            configurable: true
          });
          FlashList3.prototype.prepareForLayoutAnimationRender = function() {
            var _a;
            if (this.props.keyExtractor === null || this.props.keyExtractor === void 0) {
              console.warn(Warnings_1.default.missingKeyExtractor);
            } else {
              (_a = this.rlvRef) === null || _a === void 0 ? void 0 : _a.prepareForLayoutAnimationRender();
            }
          };
          FlashList3.prototype.scrollToEnd = function(params) {
            var _a;
            (_a = this.rlvRef) === null || _a === void 0 ? void 0 : _a.scrollToEnd(Boolean(params === null || params === void 0 ? void 0 : params.animated));
          };
          FlashList3.prototype.scrollToIndex = function(params) {
            var _a, _b, _c, _d, _e;
            var layout = (_a = this.rlvRef) === null || _a === void 0 ? void 0 : _a.getLayout(params.index);
            var listSize = (_b = this.rlvRef) === null || _b === void 0 ? void 0 : _b.getRenderedSize();
            if (layout && listSize) {
              var itemOffset = this.props.horizontal ? layout.x : layout.y;
              var fixedDimension = this.props.horizontal ? listSize.width : listSize.height;
              var itemSize = this.props.horizontal ? layout.width : layout.height;
              var scrollOffset = Math.max(0, itemOffset - ((_c = params.viewPosition) !== null && _c !== void 0 ? _c : 0) * (fixedDimension - itemSize)) - ((_d = params.viewOffset) !== null && _d !== void 0 ? _d : 0);
              (_e = this.rlvRef) === null || _e === void 0 ? void 0 : _e.scrollToOffset(scrollOffset, scrollOffset, Boolean(params.animated), true);
            }
          };
          FlashList3.prototype.scrollToItem = function(params) {
            var _a, _b;
            var index = (_b = (_a = this.props.data) === null || _a === void 0 ? void 0 : _a.indexOf(params.item)) !== null && _b !== void 0 ? _b : -1;
            if (index >= 0) {
              this.scrollToIndex(tslib_1.__assign(tslib_1.__assign({}, params), {
                index
              }));
            }
          };
          FlashList3.prototype.scrollToOffset = function(params) {
            var _a;
            var x2 = this.props.horizontal ? params.offset : 0;
            var y2 = this.props.horizontal ? 0 : params.offset;
            (_a = this.rlvRef) === null || _a === void 0 ? void 0 : _a.scrollToOffset(x2, y2, Boolean(params.animated));
          };
          FlashList3.prototype.getScrollableNode = function() {
            var _a, _b;
            return ((_b = (_a = this.rlvRef) === null || _a === void 0 ? void 0 : _a.getScrollableNode) === null || _b === void 0 ? void 0 : _b.call(_a)) || null;
          };
          Object.defineProperty(FlashList3.prototype, "recyclerlistview_unsafe", {
            /**
             * Allows access to internal recyclerlistview. This is useful for enabling access to its public APIs.
             * Warning: We may swap recyclerlistview for something else in the future. Use with caution.
             */
            /* eslint-disable @typescript-eslint/naming-convention */
            get: function get() {
              return this.rlvRef;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FlashList3.prototype, "firstItemOffset", {
            /**
             * Specifies how far the first item is from top of the list. This would normally be a sum of header size and top/left padding applied to the list.
             */
            get: function get() {
              return this.distanceFromWindow;
            },
            enumerable: false,
            configurable: true
          });
          FlashList3.prototype.clearLayoutCacheOnUpdate = function() {
            this.state.layoutProvider.markExpired();
          };
          FlashList3.defaultProps = {
            data: [],
            numColumns: 1
          };
          return FlashList3;
        }(react_1.default.PureComponent)
      );
      exports.default = FlashList2;
    }
  });

  // node_modules/@shopify/flash-list/dist/AnimatedFlashList.js
  var require_AnimatedFlashList = __commonJS({
    "node_modules/@shopify/flash-list/dist/AnimatedFlashList.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var react_native_1 = require_react_native();
      var FlashList_1 = tslib_1.__importDefault(require_FlashList());
      var AnimatedFlashList = react_native_1.Animated.createAnimatedComponent(FlashList_1.default);
      exports.default = AnimatedFlashList;
    }
  });

  // node_modules/@shopify/flash-list/dist/benchmark/AutoScrollHelper.js
  var require_AutoScrollHelper = __commonJS({
    "node_modules/@shopify/flash-list/dist/benchmark/AutoScrollHelper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Cancellable = exports.autoScroll = void 0;
      function autoScroll(scroll, fromX, fromY, toX, toY, speedMultiplier, cancellable) {
        if (speedMultiplier === void 0) {
          speedMultiplier = 1;
        }
        if (cancellable === void 0) {
          cancellable = new Cancellable();
        }
        return new Promise(function(resolve) {
          scroll(fromX, fromY, false);
          var incrementPerMs = 7 * speedMultiplier;
          var directionMultiplierX = toX > fromX ? 1 : -1;
          var directionMultiplierY = toY > fromY ? 1 : -1;
          var comparatorX = toX > fromX ? Math.min : Math.max;
          var comparatorY = toY > fromY ? Math.min : Math.max;
          var startTime = Date.now();
          var startX = fromX;
          var startY = fromY;
          var animationLoop = function animationLoop1() {
            requestAnimationFrame(function() {
              if (cancellable.isCancelled()) {
                resolve(false);
                return;
              }
              var currentTime = Date.now();
              var timeElapsed = currentTime - startTime;
              var distanceToCover = incrementPerMs * timeElapsed;
              startX += distanceToCover * directionMultiplierX;
              startY += distanceToCover * directionMultiplierY;
              scroll(comparatorX(toX, startX), comparatorY(toY, startY), false);
              startTime = currentTime;
              if (comparatorX(toX, startX) !== toX || comparatorY(toY, startY) !== toY) {
                return animationLoop();
              }
              resolve(true);
            });
          };
          animationLoop();
        });
      }
      exports.autoScroll = autoScroll;
      var Cancellable = (
        /** @class */
        function() {
          function Cancellable2() {
            this._isCancelled = false;
          }
          Cancellable2.prototype.cancel = function() {
            this._isCancelled = true;
          };
          Cancellable2.prototype.isCancelled = function() {
            return this._isCancelled;
          };
          return Cancellable2;
        }()
      );
      exports.Cancellable = Cancellable;
    }
  });

  // node_modules/@shopify/flash-list/dist/benchmark/roundToDecimalPlaces.js
  var require_roundToDecimalPlaces = __commonJS({
    "node_modules/@shopify/flash-list/dist/benchmark/roundToDecimalPlaces.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.roundToDecimalPlaces = void 0;
      function roundToDecimalPlaces(value, decimalPlaces) {
        var multiplier = Math.pow(10, decimalPlaces);
        return Math.round(value * multiplier) / multiplier;
      }
      exports.roundToDecimalPlaces = roundToDecimalPlaces;
    }
  });

  // node_modules/@shopify/flash-list/dist/benchmark/JSFPSMonitor.js
  var require_JSFPSMonitor = __commonJS({
    "node_modules/@shopify/flash-list/dist/benchmark/JSFPSMonitor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.JSFPSMonitor = void 0;
      var roundToDecimalPlaces_1 = require_roundToDecimalPlaces();
      var JSFPSMonitor = (
        /** @class */
        function() {
          function JSFPSMonitor2() {
            var _this = this;
            this.startTime = 0;
            this.frameCount = 0;
            this.timeWindow = {
              frameCount: 0,
              startTime: 0
            };
            this.minFPS = Number.MAX_SAFE_INTEGER;
            this.maxFPS = 0;
            this.averageFPS = 0;
            this.clearAnimationNumber = 0;
            this.updateLoopCompute = function() {
              _this.frameCount++;
              var elapsedTime = (Date.now() - _this.startTime) / 1e3;
              _this.averageFPS = elapsedTime > 0 ? _this.frameCount / elapsedTime : 0;
              _this.timeWindow.frameCount++;
              var timeWindowElapsedTime = (Date.now() - _this.timeWindow.startTime) / 1e3;
              if (timeWindowElapsedTime >= 1) {
                var timeWindowAverageFPS = _this.timeWindow.frameCount / timeWindowElapsedTime;
                _this.minFPS = Math.min(_this.minFPS, timeWindowAverageFPS);
                _this.maxFPS = Math.max(_this.maxFPS, timeWindowAverageFPS);
                _this.timeWindow.frameCount = 0;
                _this.timeWindow.startTime = Date.now();
              }
              _this.measureLoop();
            };
          }
          JSFPSMonitor2.prototype.measureLoop = function() {
            this.clearAnimationNumber = requestAnimationFrame(this.updateLoopCompute);
          };
          JSFPSMonitor2.prototype.startTracking = function() {
            if (this.startTime !== 0) {
              throw new Error("This FPS Monitor has already been run, please create a new instance");
            }
            this.startTime = Date.now();
            this.timeWindow.startTime = Date.now();
            this.measureLoop();
          };
          JSFPSMonitor2.prototype.stopAndGetData = function() {
            cancelAnimationFrame(this.clearAnimationNumber);
            if (this.minFPS === Number.MAX_SAFE_INTEGER) {
              this.minFPS = this.averageFPS;
              this.maxFPS = this.averageFPS;
            }
            return {
              minFPS: (0, roundToDecimalPlaces_1.roundToDecimalPlaces)(this.minFPS, 1),
              maxFPS: (0, roundToDecimalPlaces_1.roundToDecimalPlaces)(this.maxFPS, 1),
              averageFPS: (0, roundToDecimalPlaces_1.roundToDecimalPlaces)(this.averageFPS, 1)
            };
          };
          return JSFPSMonitor2;
        }()
      );
      exports.JSFPSMonitor = JSFPSMonitor;
    }
  });

  // node_modules/@shopify/flash-list/dist/benchmark/useBlankAreaTracker.js
  var require_useBlankAreaTracker = __commonJS({
    "node_modules/@shopify/flash-list/dist/benchmark/useBlankAreaTracker.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useBlankAreaTracker = void 0;
      var react_1 = require_react();
      function useBlankAreaTracker(flashListRef, onBlankAreaChange, config) {
        var _a;
        var startDelay = (_a = config === null || config === void 0 ? void 0 : config.startDelayInMs) !== null && _a !== void 0 ? _a : 1e3;
        var blankAreaResult = (0, react_1.useRef)({
          maxBlankArea: 0,
          cumulativeBlankArea: 0
        }).current;
        var waitOperations = (0, react_1.useRef)({
          inProgress: false,
          complete: false
        }).current;
        var onBlankAreaChangeRef = (0, react_1.useRef)(onBlankAreaChange);
        onBlankAreaChangeRef.current = onBlankAreaChange;
        var blankAreaTracker = (0, react_1.useCallback)(
          function(event) {
            var _a2, _b;
            if (!waitOperations.complete && startDelay > 0) {
              if (!waitOperations.inProgress) {
                waitOperations.inProgress = true;
                setTimeout(function() {
                  waitOperations.complete = true;
                }, startDelay);
              }
              return;
            }
            var rlv = (_a2 = flashListRef.current) === null || _a2 === void 0 ? void 0 : _a2.recyclerlistview_unsafe;
            var horizontal = Boolean((_b = flashListRef.current) === null || _b === void 0 ? void 0 : _b.props.horizontal);
            if (rlv) {
              processBlankAreaChange(rlv, horizontal, blankAreaResult, event, onBlankAreaChangeRef.current, config);
            }
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [
            flashListRef
          ]
        );
        return [
          blankAreaResult,
          blankAreaTracker
        ];
      }
      exports.useBlankAreaTracker = useBlankAreaTracker;
      function processBlankAreaChange(rlv, horizontal, blankAreaResult, event, onBlankAreaChange, config) {
        var listSize = horizontal ? rlv.getRenderedSize().width : rlv.getRenderedSize().height;
        var contentSize = horizontal ? rlv.getContentDimension().width : rlv.getContentDimension().height;
        if (contentSize > listSize) {
          var lastMaxBlankArea = blankAreaResult.maxBlankArea;
          var lastCumulativeBlankArea = blankAreaResult.cumulativeBlankArea;
          blankAreaResult.maxBlankArea = Math.max(blankAreaResult.maxBlankArea, event.blankArea, 0);
          blankAreaResult.cumulativeBlankArea += (config === null || config === void 0 ? void 0 : config.sumNegativeValues) ? event.blankArea : Math.max(event.blankArea, 0);
          if (lastCumulativeBlankArea !== blankAreaResult.cumulativeBlankArea || lastMaxBlankArea !== blankAreaResult.maxBlankArea) {
            onBlankAreaChange === null || onBlankAreaChange === void 0 ? void 0 : onBlankAreaChange(blankAreaResult);
          }
        }
      }
    }
  });

  // node_modules/@shopify/flash-list/dist/benchmark/useBenchmark.js
  var require_useBenchmark = __commonJS({
    "node_modules/@shopify/flash-list/dist/benchmark/useBenchmark.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getFormattedString = exports.useBenchmark = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var react_1 = require_react();
      var AutoScrollHelper_1 = require_AutoScrollHelper();
      var JSFPSMonitor_1 = require_JSFPSMonitor();
      var roundToDecimalPlaces_1 = require_roundToDecimalPlaces();
      var useBlankAreaTracker_1 = require_useBlankAreaTracker();
      function useBenchmark(flashListRef, callback, params) {
        var _this = this;
        if (params === void 0) {
          params = {};
        }
        var _a = tslib_1.__read((0, useBlankAreaTracker_1.useBlankAreaTracker)(flashListRef, void 0, {
          sumNegativeValues: params.sumNegativeBlankAreaValues,
          startDelayInMs: 0
        }), 2), blankAreaResult = _a[0], blankAreaTracker = _a[1];
        (0, react_1.useEffect)(function() {
          var _a2;
          var cancellable = new AutoScrollHelper_1.Cancellable();
          var suggestions = [];
          if (flashListRef.current) {
            if (!(Number((_a2 = flashListRef.current.props.data) === null || _a2 === void 0 ? void 0 : _a2.length) > 0)) {
              throw new Error("Data is empty, cannot run benchmark");
            }
          }
          var cancelTimeout = setTimeout(function() {
            return tslib_1.__awaiter(_this, void 0, void 0, function() {
              var jsFPSMonitor, i, jsProfilerResponse, result;
              return tslib_1.__generator(this, function(_a3) {
                switch (_a3.label) {
                  case 0:
                    jsFPSMonitor = new JSFPSMonitor_1.JSFPSMonitor();
                    jsFPSMonitor.startTracking();
                    i = 0;
                    _a3.label = 1;
                  case 1:
                    if (!(i < (params.repeatCount || 1))) return [
                      3,
                      4
                    ];
                    return [
                      4,
                      runScrollBenchmark(flashListRef, cancellable, params.speedMultiplier || 1)
                    ];
                  case 2:
                    _a3.sent();
                    _a3.label = 3;
                  case 3:
                    i++;
                    return [
                      3,
                      1
                    ];
                  case 4:
                    jsProfilerResponse = jsFPSMonitor.stopAndGetData();
                    if (jsProfilerResponse.averageFPS < 35) {
                      suggestions.push("Your average JS FPS is low. This can indicate that your components are doing too much work. Try to optimize your components and reduce re-renders if any");
                    }
                    computeSuggestions(flashListRef, suggestions);
                    result = generateResult(jsProfilerResponse, blankAreaResult, suggestions, cancellable);
                    if (!cancellable.isCancelled()) {
                      result.formattedString = getFormattedString(result);
                    }
                    callback(result);
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, params.startDelayInMs || 3e3);
          return function() {
            clearTimeout(cancelTimeout);
            cancellable.cancel();
          };
        }, []);
        return [
          blankAreaTracker
        ];
      }
      exports.useBenchmark = useBenchmark;
      function getFormattedString(res) {
        var _a, _b, _c, _d, _e;
        return "Results:\n\n" + "JS FPS: Avg: ".concat((_a = res.js) === null || _a === void 0 ? void 0 : _a.averageFPS, " | Min: ").concat((_b = res.js) === null || _b === void 0 ? void 0 : _b.minFPS, " | Max: ").concat((_c = res.js) === null || _c === void 0 ? void 0 : _c.maxFPS, "\n\n") + "".concat(res.blankArea ? "Blank Area: Max: ".concat((_d = res.blankArea) === null || _d === void 0 ? void 0 : _d.maxBlankArea, " Cumulative: ").concat((_e = res.blankArea) === null || _e === void 0 ? void 0 : _e.cumulativeBlankArea, "\n\n") : "") + "".concat(res.suggestions.length > 0 ? "Suggestions:\n\n".concat(res.suggestions.map(function(value, index) {
          return "".concat(index + 1, ". ").concat(value);
        }).join("\n")) : "");
      }
      exports.getFormattedString = getFormattedString;
      function generateResult(jsProfilerResponse, blankAreaResult, suggestions, cancellable) {
        return {
          js: jsProfilerResponse,
          blankArea: blankAreaResult.maxBlankArea >= 0 ? {
            maxBlankArea: (0, roundToDecimalPlaces_1.roundToDecimalPlaces)(blankAreaResult.maxBlankArea, 0),
            cumulativeBlankArea: (0, roundToDecimalPlaces_1.roundToDecimalPlaces)(blankAreaResult.cumulativeBlankArea, 0)
          } : void 0,
          suggestions,
          interrupted: cancellable.isCancelled()
        };
      }
      function runScrollBenchmark(flashListRef, cancellable, scrollSpeedMultiplier) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var horizontal_1, rlv, rlvSize, rlvContentSize, fromX, fromY, toX, toY, scrollNow;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!flashListRef.current) return [
                  3,
                  3
                ];
                horizontal_1 = flashListRef.current.props.horizontal;
                rlv = flashListRef.current.recyclerlistview_unsafe;
                if (!rlv) return [
                  3,
                  3
                ];
                rlvSize = rlv.getRenderedSize();
                rlvContentSize = rlv.getContentDimension();
                fromX = 0;
                fromY = 0;
                toX = rlvContentSize.width - rlvSize.width;
                toY = rlvContentSize.height - rlvSize.height;
                scrollNow = function scrollNow2(x2, y2) {
                  var _$_a;
                  (_$_a = flashListRef.current) === null || _$_a === void 0 ? void 0 : _$_a.scrollToOffset({
                    offset: horizontal_1 ? x2 : y2,
                    animated: false
                  });
                };
                return [
                  4,
                  (0, AutoScrollHelper_1.autoScroll)(scrollNow, fromX, fromY, toX, toY, scrollSpeedMultiplier, cancellable)
                ];
              case 1:
                _a.sent();
                return [
                  4,
                  (0, AutoScrollHelper_1.autoScroll)(scrollNow, toX, toY, fromX, fromY, scrollSpeedMultiplier, cancellable)
                ];
              case 2:
                _a.sent();
                _a.label = 3;
              case 3:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      function computeSuggestions(flashListRef, suggestions) {
        var _a;
        if (flashListRef.current) {
          if (flashListRef.current.props.data.length < 200) {
            suggestions.push("Data count is low. Try to increase it to a large number (e.g 200) using the 'useDataMultiplier' hook.");
          }
          var distanceFromWindow = (0, roundToDecimalPlaces_1.roundToDecimalPlaces)(flashListRef.current.firstItemOffset, 0);
          if ((flashListRef.current.props.estimatedFirstItemOffset || 0) !== distanceFromWindow) {
            suggestions.push("estimatedFirstItemOffset can be set to ".concat(distanceFromWindow));
          }
          var rlv_1 = flashListRef.current.recyclerlistview_unsafe;
          var horizontal_2 = flashListRef.current.props.horizontal;
          if (rlv_1) {
            var sizeArray = rlv_1.props.dataProvider.getAllData().map(function(_3, index) {
              var _a2, _b, _c, _d;
              return horizontal_2 ? ((_b = (_a2 = rlv_1.getLayout) === null || _a2 === void 0 ? void 0 : _a2.call(rlv_1, index)) === null || _b === void 0 ? void 0 : _b.width) || 0 : ((_d = (_c = rlv_1.getLayout) === null || _c === void 0 ? void 0 : _c.call(rlv_1, index)) === null || _d === void 0 ? void 0 : _d.height) || 0;
            });
            var averageSize = Math.round(sizeArray.reduce(function(prev, current) {
              return prev + current;
            }, 0) / sizeArray.length);
            if (Math.abs(averageSize - ((_a = flashListRef.current.props.estimatedItemSize) !== null && _a !== void 0 ? _a : flashListRef.current.state.layoutProvider.defaultEstimatedItemSize)) > 5) {
              suggestions.push("estimatedItemSize can be set to ".concat(averageSize));
            }
          }
        }
      }
    }
  });

  // node_modules/@shopify/flash-list/dist/benchmark/useDataMultiplier.js
  var require_useDataMultiplier = __commonJS({
    "node_modules/@shopify/flash-list/dist/benchmark/useDataMultiplier.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useDataMultiplier = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      function useDataMultiplier(data, count) {
        var len = data.length;
        var arr = new Array(count);
        var isObject = false;
        if (typeof data[0] === "object") {
          isObject = true;
        }
        for (var i = 0; i < count; i++) {
          arr[i] = isObject ? tslib_1.__assign({}, data[i % len]) : data[i % len];
        }
        return [
          arr
        ];
      }
      exports.useDataMultiplier = useDataMultiplier;
    }
  });

  // node_modules/@shopify/flash-list/dist/benchmark/useFlatListBenchmark.js
  var require_useFlatListBenchmark = __commonJS({
    "node_modules/@shopify/flash-list/dist/benchmark/useFlatListBenchmark.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useFlatListBenchmark = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var react_1 = require_react();
      var AutoScrollHelper_1 = require_AutoScrollHelper();
      var JSFPSMonitor_1 = require_JSFPSMonitor();
      var useBenchmark_1 = require_useBenchmark();
      function useFlatListBenchmark(flatListRef, callback, params) {
        var _this = this;
        (0, react_1.useEffect)(function() {
          var _a;
          var cancellable = new AutoScrollHelper_1.Cancellable();
          if (flatListRef.current) {
            if (!(Number((_a = flatListRef.current.props.data) === null || _a === void 0 ? void 0 : _a.length) > 0)) {
              throw new Error("Data is empty, cannot run benchmark");
            }
          }
          var cancelTimeout = setTimeout(function() {
            return tslib_1.__awaiter(_this, void 0, void 0, function() {
              var jsFPSMonitor, i, jsProfilerResponse, result;
              return tslib_1.__generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    jsFPSMonitor = new JSFPSMonitor_1.JSFPSMonitor();
                    jsFPSMonitor.startTracking();
                    i = 0;
                    _a2.label = 1;
                  case 1:
                    if (!(i < (params.repeatCount || 1))) return [
                      3,
                      4
                    ];
                    return [
                      4,
                      runScrollBenchmark(flatListRef, params.targetOffset, cancellable, params.speedMultiplier || 1)
                    ];
                  case 2:
                    _a2.sent();
                    _a2.label = 3;
                  case 3:
                    i++;
                    return [
                      3,
                      1
                    ];
                  case 4:
                    jsProfilerResponse = jsFPSMonitor.stopAndGetData();
                    result = {
                      js: jsProfilerResponse,
                      suggestions: [],
                      interrupted: cancellable.isCancelled()
                    };
                    if (!cancellable.isCancelled()) {
                      result.formattedString = (0, useBenchmark_1.getFormattedString)(result);
                    }
                    callback(result);
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, params.startDelayInMs || 3e3);
          return function() {
            clearTimeout(cancelTimeout);
            cancellable.cancel();
          };
        }, []);
        return [];
      }
      exports.useFlatListBenchmark = useFlatListBenchmark;
      function runScrollBenchmark(flatListRef, targetOffset, cancellable, scrollSpeedMultiplier) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var horizontal_1, fromX, fromY, toX, toY, scrollNow;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!flatListRef.current) return [
                  3,
                  3
                ];
                horizontal_1 = flatListRef.current.props.horizontal;
                fromX = 0;
                fromY = 0;
                toX = horizontal_1 ? targetOffset : 0;
                toY = horizontal_1 ? 0 : targetOffset;
                scrollNow = function scrollNow2(x2, y2) {
                  var _$_a;
                  (_$_a = flatListRef.current) === null || _$_a === void 0 ? void 0 : _$_a.scrollToOffset({
                    offset: horizontal_1 ? x2 : y2,
                    animated: false
                  });
                };
                return [
                  4,
                  (0, AutoScrollHelper_1.autoScroll)(scrollNow, fromX, fromY, toX, toY, scrollSpeedMultiplier, cancellable)
                ];
              case 1:
                _a.sent();
                return [
                  4,
                  (0, AutoScrollHelper_1.autoScroll)(scrollNow, toX, toY, fromX, fromY, scrollSpeedMultiplier, cancellable)
                ];
              case 2:
                _a.sent();
                _a.label = 3;
              case 3:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
    }
  });

  // node_modules/@shopify/flash-list/dist/MasonryFlashList.js
  var require_MasonryFlashList = __commonJS({
    "node_modules/@shopify/flash-list/dist/MasonryFlashList.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MasonryFlashList = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var react_1 = tslib_1.__importStar(require_react());
      var react_native_1 = require_react_native();
      var CustomError_1 = tslib_1.__importDefault(require_CustomError2());
      var ExceptionList_1 = tslib_1.__importDefault(require_ExceptionList());
      var FlashList_1 = tslib_1.__importDefault(require_FlashList());
      var ContentContainerUtils_1 = require_ContentContainerUtils();
      var defaultEstimatedItemSize = 100;
      var MasonryFlashListComponent = react_1.default.forwardRef(function(props, forwardRef) {
        var _a, _b, _c, _d, _e;
        var columnCount = props.numColumns || 1;
        var drawDistance = props.drawDistance;
        var estimatedListSize = (_b = (_a = props.estimatedListSize) !== null && _a !== void 0 ? _a : react_native_1.Dimensions.get("window")) !== null && _b !== void 0 ? _b : {
          height: 500,
          width: 500
        };
        if (props.optimizeItemArrangement && !props.overrideItemLayout) {
          throw new CustomError_1.default(ExceptionList_1.default.overrideItemLayoutRequiredForMasonryOptimization);
        }
        var dataSet = useDataSet(columnCount, Boolean(props.optimizeItemArrangement), props.data, props.overrideItemLayout, props.extraData);
        var totalColumnFlex = useTotalColumnFlex(dataSet, props);
        var propsRef = (0, react_1.useRef)(props);
        propsRef.current = props;
        var onScrollRef = (0, react_1.useRef)([]);
        var emptyScrollEvent = (0, react_1.useRef)(getEmptyScrollEvent()).current;
        var ScrollComponent = (0, react_1.useRef)(getFlashListScrollView(onScrollRef, function() {
          var _a2;
          return ((_a2 = getListRenderedSize(parentFlashList)) === null || _a2 === void 0 ? void 0 : _a2.height) || estimatedListSize.height;
        })).current;
        var onScrollProxy = (0, react_1.useRef)(function(scrollEvent) {
          var _a2, _b2, _c2, _d2, _e2;
          emptyScrollEvent.nativeEvent.contentOffset.y = scrollEvent.nativeEvent.contentOffset.y - ((_b2 = (_a2 = parentFlashList.current) === null || _a2 === void 0 ? void 0 : _a2.firstItemOffset) !== null && _b2 !== void 0 ? _b2 : 0);
          (_c2 = onScrollRef.current) === null || _c2 === void 0 ? void 0 : _c2.forEach(function(onScrollCallback) {
            onScrollCallback === null || onScrollCallback === void 0 ? void 0 : onScrollCallback(emptyScrollEvent);
          });
          if (!scrollEvent.nativeEvent.doNotPropagate) {
            (_e2 = (_d2 = propsRef.current).onScroll) === null || _e2 === void 0 ? void 0 : _e2.call(_d2, scrollEvent);
          }
        }).current;
        var onLoadForNestedLists = (0, react_1.useRef)(function(args) {
          var _a2, _b2;
          setTimeout(function() {
            emptyScrollEvent.nativeEvent.doNotPropagate = true;
            onScrollProxy === null || onScrollProxy === void 0 ? void 0 : onScrollProxy(emptyScrollEvent);
            emptyScrollEvent.nativeEvent.doNotPropagate = false;
          }, 32);
          (_b2 = (_a2 = propsRef.current).onLoad) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, args);
        }).current;
        var _f = tslib_1.__read(useRefWithForwardRef(forwardRef), 2), parentFlashList = _f[0], getFlashList = _f[1];
        var renderItem = props.renderItem, getItemType = props.getItemType, getColumnFlex = props.getColumnFlex, overrideItemLayout = props.overrideItemLayout, viewabilityConfig = props.viewabilityConfig, keyExtractor = props.keyExtractor, onLoad = props.onLoad, onViewableItemsChanged = props.onViewableItemsChanged, data = props.data, stickyHeaderIndices = props.stickyHeaderIndices, CellRendererComponent = props.CellRendererComponent, ItemSeparatorComponent = props.ItemSeparatorComponent, remainingProps = tslib_1.__rest(props, [
          "renderItem",
          "getItemType",
          "getColumnFlex",
          "overrideItemLayout",
          "viewabilityConfig",
          "keyExtractor",
          "onLoad",
          "onViewableItemsChanged",
          "data",
          "stickyHeaderIndices",
          "CellRendererComponent",
          "ItemSeparatorComponent"
        ]);
        var firstColumnHeight = ((_d = (_c = dataSet[0]) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) * ((_e = props.estimatedItemSize) !== null && _e !== void 0 ? _e : defaultEstimatedItemSize);
        var insetForLayoutManager = (0, ContentContainerUtils_1.applyContentContainerInsetForLayoutManager)({
          height: 0,
          width: 0
        }, props.contentContainerStyle, false);
        return react_1.default.createElement(FlashList_1.default, tslib_1.__assign({
          ref: getFlashList
        }, remainingProps, {
          horizontal: false,
          numColumns: columnCount,
          data: dataSet,
          onScroll: onScrollProxy,
          estimatedItemSize: firstColumnHeight || estimatedListSize.height,
          renderItem: function renderItem1(args) {
            var _a2, _b2;
            return react_1.default.createElement(FlashList_1.default, {
              renderScrollComponent: ScrollComponent,
              estimatedItemSize: props.estimatedItemSize,
              data: args.item,
              onLoad: args.index === 0 ? onLoadForNestedLists : void 0,
              renderItem: function renderItem12(innerArgs) {
                var _a3;
                return (_a3 = renderItem === null || renderItem === void 0 ? void 0 : renderItem(tslib_1.__assign(tslib_1.__assign({}, innerArgs), {
                  item: innerArgs.item.originalItem,
                  index: innerArgs.item.originalIndex,
                  columnSpan: 1,
                  columnIndex: args.index
                }))) !== null && _a3 !== void 0 ? _a3 : null;
              },
              keyExtractor: keyExtractor ? function(item, _3) {
                return keyExtractor === null || keyExtractor === void 0 ? void 0 : keyExtractor(item.originalItem, item.originalIndex);
              } : void 0,
              getItemType: getItemType ? function(item, _3, extraData) {
                return getItemType === null || getItemType === void 0 ? void 0 : getItemType(item.originalItem, item.originalIndex, extraData);
              } : void 0,
              drawDistance,
              estimatedListSize: {
                height: estimatedListSize.height,
                width: ((((_a2 = getListRenderedSize(parentFlashList)) === null || _a2 === void 0 ? void 0 : _a2.width) || estimatedListSize.width) + insetForLayoutManager.width) / totalColumnFlex * ((_b2 = getColumnFlex === null || getColumnFlex === void 0 ? void 0 : getColumnFlex(args.item, args.index, columnCount, props.extraData)) !== null && _b2 !== void 0 ? _b2 : 1)
              },
              extraData: props.extraData,
              CellRendererComponent,
              ItemSeparatorComponent,
              viewabilityConfig,
              onViewableItemsChanged: onViewableItemsChanged ? function(info) {
                updateViewTokens(info.viewableItems);
                updateViewTokens(info.changed);
                onViewableItemsChanged === null || onViewableItemsChanged === void 0 ? void 0 : onViewableItemsChanged(info);
              } : void 0,
              overrideItemLayout: overrideItemLayout ? function(layout, item, _3, __, extraData) {
                overrideItemLayout === null || overrideItemLayout === void 0 ? void 0 : overrideItemLayout(layout, item.originalItem, item.originalIndex, columnCount, extraData);
                layout.span = void 0;
              } : void 0
            });
          },
          overrideItemLayout: getColumnFlex ? function(layout, item, index, maxColumns, extraData) {
            layout.span = columnCount * getColumnFlex(item, index, maxColumns, extraData) / totalColumnFlex;
          } : void 0
        }));
      });
      var useDataSet = function useDataSet2(columnCount, optimizeItemArrangement, sourceData, overrideItemLayout, extraData) {
        return (0, react_1.useMemo)(function() {
          var _a;
          if (!sourceData || sourceData.length === 0) {
            return [];
          }
          var columnHeightTracker = new Array(columnCount).fill(0);
          var layoutObject = {
            size: void 0
          };
          var dataSet = new Array(columnCount);
          var dataSize = sourceData.length;
          for (var i = 0; i < columnCount; i++) {
            dataSet[i] = [];
          }
          for (var i = 0; i < dataSize; i++) {
            var nextColumnIndex = i % columnCount;
            if (optimizeItemArrangement) {
              for (var j = 0; j < columnCount; j++) {
                if (columnHeightTracker[j] < columnHeightTracker[nextColumnIndex]) {
                  nextColumnIndex = j;
                }
              }
              layoutObject.size = void 0;
              overrideItemLayout(layoutObject, sourceData[i], i, columnCount, extraData);
              columnHeightTracker[nextColumnIndex] += (_a = layoutObject.size) !== null && _a !== void 0 ? _a : defaultEstimatedItemSize;
            }
            dataSet[nextColumnIndex].push({
              originalItem: sourceData[i],
              originalIndex: i
            });
          }
          return dataSet;
        }, [
          sourceData,
          columnCount,
          optimizeItemArrangement,
          extraData
        ]);
      };
      var useTotalColumnFlex = function useTotalColumnFlex2(dataSet, props) {
        return (0, react_1.useMemo)(function() {
          var columnCount = props.numColumns || 1;
          if (!props.getColumnFlex) {
            return columnCount;
          }
          var totalFlexSum = 0;
          var dataSize = dataSet.length;
          for (var i = 0; i < dataSize; i++) {
            totalFlexSum += props.getColumnFlex(dataSet[i], i, columnCount, props.extraData);
          }
          return totalFlexSum;
        }, [
          dataSet,
          props.getColumnFlex,
          props.extraData
        ]);
      };
      var useRefWithForwardRef = function useRefWithForwardRef2(forwardRef) {
        var ref = (0, react_1.useRef)(null);
        return [
          ref,
          (0, react_1.useCallback)(function(instance) {
            ref.current = instance;
            if (typeof forwardRef === "function") {
              forwardRef(instance);
            } else if (forwardRef) {
              forwardRef.current = instance;
            }
          }, [
            forwardRef
          ])
        ];
      };
      var getFlashListScrollView = function getFlashListScrollView2(onScrollRef, getParentHeight) {
        var FlashListScrollView = react_1.default.forwardRef(function(props, ref) {
          var onLayout = props.onLayout, onScroll = props.onScroll, rest = tslib_1.__rest(props, [
            "onLayout",
            "onScroll"
          ]);
          var onLayoutProxy = (0, react_1.useCallback)(function(layoutEvent) {
            onLayout === null || onLayout === void 0 ? void 0 : onLayout({
              nativeEvent: {
                layout: {
                  height: getParentHeight(),
                  width: layoutEvent.nativeEvent.layout.width
                }
              }
            });
          }, [
            onLayout
          ]);
          (0, react_1.useEffect)(function() {
            var _a;
            if (onScroll) {
              (_a = onScrollRef.current) === null || _a === void 0 ? void 0 : _a.push(onScroll);
            }
            return function() {
              if (!onScrollRef.current || !onScroll) {
                return;
              }
              var indexToDelete = onScrollRef.current.indexOf(onScroll);
              if (indexToDelete > -1) {
                onScrollRef.current.splice(indexToDelete, 1);
              }
            };
          }, [
            onScroll
          ]);
          return react_1.default.createElement(react_native_1.View, tslib_1.__assign({
            ref
          }, rest, {
            onLayout: onLayoutProxy
          }));
        });
        FlashListScrollView.displayName = "FlashListScrollView";
        return FlashListScrollView;
      };
      var updateViewTokens = function updateViewTokens2(tokens2) {
        var length = tokens2.length;
        for (var i = 0; i < length; i++) {
          var token = tokens2[i];
          if (token.index !== null && token.index !== void 0) {
            if (token.item) {
              token.index = token.item.originalIndex;
              token.item = token.item.originalItem;
            } else {
              token.index = null;
              token.item = void 0;
            }
          }
        }
      };
      var getEmptyScrollEvent = function getEmptyScrollEvent2() {
        return {
          nativeEvent: {
            contentOffset: {
              y: 0,
              x: 0
            }
          }
        };
      };
      var getListRenderedSize = function getListRenderedSize2(parentFlashList) {
        var _a, _b;
        return (_b = (_a = parentFlashList === null || parentFlashList === void 0 ? void 0 : parentFlashList.current) === null || _a === void 0 ? void 0 : _a.recyclerlistview_unsafe) === null || _b === void 0 ? void 0 : _b.getRenderedSize();
      };
      MasonryFlashListComponent.displayName = "MasonryFlashList";
      exports.MasonryFlashList = MasonryFlashListComponent;
    }
  });

  // node_modules/@shopify/flash-list/dist/index.js
  var require_dist2 = __commonJS({
    "node_modules/@shopify/flash-list/dist/index.js"(exports) {
      "use strict";
      var __importDefault2 = exports && exports.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : {
          "default": mod2
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CellContainer = exports.Cancellable = exports.autoScroll = exports.JSFPSMonitor = exports.MasonryFlashList = exports.useBlankAreaTracker = exports.useFlatListBenchmark = exports.useDataMultiplier = exports.useBenchmark = exports.useOnNativeBlankAreaEvents = exports.AnimatedFlashList = exports.RenderTargetOptions = exports.FlashList = void 0;
      var FlashList_1 = require_FlashList();
      Object.defineProperty(exports, "FlashList", {
        enumerable: true,
        get: function get() {
          return __importDefault2(FlashList_1).default;
        }
      });
      var FlashListProps_1 = require_FlashListProps();
      Object.defineProperty(exports, "RenderTargetOptions", {
        enumerable: true,
        get: function get() {
          return FlashListProps_1.RenderTargetOptions;
        }
      });
      var AnimatedFlashList_1 = require_AnimatedFlashList();
      Object.defineProperty(exports, "AnimatedFlashList", {
        enumerable: true,
        get: function get() {
          return __importDefault2(AnimatedFlashList_1).default;
        }
      });
      var AutoLayoutView_1 = require_AutoLayoutView();
      Object.defineProperty(exports, "useOnNativeBlankAreaEvents", {
        enumerable: true,
        get: function get() {
          return AutoLayoutView_1.useOnNativeBlankAreaEvents;
        }
      });
      var useBenchmark_1 = require_useBenchmark();
      Object.defineProperty(exports, "useBenchmark", {
        enumerable: true,
        get: function get() {
          return useBenchmark_1.useBenchmark;
        }
      });
      var useDataMultiplier_1 = require_useDataMultiplier();
      Object.defineProperty(exports, "useDataMultiplier", {
        enumerable: true,
        get: function get() {
          return useDataMultiplier_1.useDataMultiplier;
        }
      });
      var useFlatListBenchmark_1 = require_useFlatListBenchmark();
      Object.defineProperty(exports, "useFlatListBenchmark", {
        enumerable: true,
        get: function get() {
          return useFlatListBenchmark_1.useFlatListBenchmark;
        }
      });
      var useBlankAreaTracker_1 = require_useBlankAreaTracker();
      Object.defineProperty(exports, "useBlankAreaTracker", {
        enumerable: true,
        get: function get() {
          return useBlankAreaTracker_1.useBlankAreaTracker;
        }
      });
      var MasonryFlashList_1 = require_MasonryFlashList();
      Object.defineProperty(exports, "MasonryFlashList", {
        enumerable: true,
        get: function get() {
          return MasonryFlashList_1.MasonryFlashList;
        }
      });
      var JSFPSMonitor_1 = require_JSFPSMonitor();
      Object.defineProperty(exports, "JSFPSMonitor", {
        enumerable: true,
        get: function get() {
          return JSFPSMonitor_1.JSFPSMonitor;
        }
      });
      var AutoScrollHelper_1 = require_AutoScrollHelper();
      Object.defineProperty(exports, "autoScroll", {
        enumerable: true,
        get: function get() {
          return AutoScrollHelper_1.autoScroll;
        }
      });
      Object.defineProperty(exports, "Cancellable", {
        enumerable: true,
        get: function get() {
          return AutoScrollHelper_1.Cancellable;
        }
      });
      var CellContainer_1 = require_CellContainer();
      Object.defineProperty(exports, "CellContainer", {
        enumerable: true,
        get: function get() {
          return __importDefault2(CellContainer_1).default;
        }
      });
    }
  });

  // src/plugins/settings/pages/Plugins/components/MasonaryFlashPluginList.tsx
  function MasonaryFlashPluginList({ data, header, ListItemComponent }) {
    var dimensions = (0, import_react_native11.useWindowDimensions)();
    var numColumns = Math.floor((dimensions.width - 16) / 448);
    var estimatedItemSize = 24.01 + 32 + 62 * import_react_native11.PixelRatio.getFontScale() ** 1.35;
    return /* @__PURE__ */ jsx(import_flash_list.MasonryFlashList, {
      stickyHeaderIndices: header ? [
        0
      ] : void 0,
      ListHeaderComponent: header,
      renderItem: ({ item, columnIndex }) => /* @__PURE__ */ jsx(ListItemComponent, {
        ...item,
        horizontalGaps: dimensions.width > 464 && columnIndex < numColumns - 1
      }),
      data,
      numColumns,
      estimatedItemSize,
      keyboardShouldPersistTaps: "handled"
    });
  }
  var import_flash_list, import_react_native11;
  var init_MasonaryFlashPluginList = __esm({
    "src/plugins/settings/pages/Plugins/components/MasonaryFlashPluginList.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      import_flash_list = __toESM(require_dist2(), 1);
      import_react_native11 = __toESM(require_react_native(), 1);
    }
  });

  // src/plugins/settings/pages/Plugins/components/PluginListSearchInput.tsx
  function PluginListSearchInput() {
    var { setQuery, ContextMenuComponent } = (0, import_react5.useContext)(PluginSettingsPageContext);
    return /* @__PURE__ */ jsxs(import_react_native12.View, {
      style: styles5.queryContainer,
      children: [
        /* @__PURE__ */ jsx(import_react_native12.View, {
          style: styles5.grow,
          children: /* @__PURE__ */ jsx(SearchInput, {
            isRound: true,
            isClearable: true,
            size: "md",
            onChange: (query) => setQuery(query.replaceAll(/\s/g, "").toLowerCase())
          })
        }),
        /* @__PURE__ */ jsx(ContextMenuComponent, {
          children: (props) => /* @__PURE__ */ jsx(IconButton, {
            ...props,
            icon: getAssetIndexByName("FiltersHorizontalIcon"),
            variant: "tertiary"
          })
        })
      ]
    });
  }
  var import_react5, import_react_native12;
  var init_PluginListSearchInput = __esm({
    "src/plugins/settings/pages/Plugins/components/PluginListSearchInput.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_components();
      init_components3();
      import_react5 = __toESM(require_react(), 1);
      import_react_native12 = __toESM(require_react_native(), 1);
      init_shared5();
    }
  });

  // src/plugins/settings/pages/Plugins/hooks.ts
  function useFilteredPlugins(plugins, query, options) {
    var { showCorePlugins, sortMode } = options;
    var _plugins = (0, import_react6.useMemo)(() => plugins.filter((plugin3) => plugin3.name.toLowerCase().replaceAll(/\s/g, "").includes(query) || plugin3.id.toLowerCase().includes(query)).sort((a, b3) => sortMode === "asc" ? a.name.localeCompare(b3.name) : b3.name.localeCompare(a.name)), [
      plugins,
      query,
      sortMode
    ]);
    var externalPlugins = (0, import_react6.useMemo)(() => _plugins.filter((plugin3) => !plugin3.core), [
      _plugins
    ]);
    var corePlugins = (0, import_react6.useMemo)(() => _plugins.filter((plugin3) => plugin3.core), [
      _plugins
    ]);
    var empty = !(showCorePlugins ? corePlugins.length + externalPlugins.length : externalPlugins.length);
    var noSearchResults = empty && !!query;
    return {
      plugins: _plugins,
      externalPlugins,
      corePlugins,
      empty,
      noSearchResults
    };
  }
  var import_react6;
  var init_hooks = __esm({
    "src/plugins/settings/pages/Plugins/hooks.ts"() {
      "use strict";
      import_react6 = __toESM(require_react(), 1);
    }
  });

  // src/plugins/settings/pages/Plugins/index.tsx
  function PluginsSettingsPage() {
    var { storage } = (0, import_react7.useContext)(PluginContext);
    useObservable([
      pluginsStates,
      storage,
      externalPluginsMetadata
    ]);
    var [query, setQuery] = (0, import_react7.useState)("");
    var { showCorePlugins, sortMode } = storage.plugins;
    var { externalPlugins, corePlugins, empty, noSearchResults } = useFilteredPlugins(Object.values(registeredPlugins), query, storage.plugins);
    var ContextMenuComponent = /* @__PURE__ */ (0, import_react7.memo)(({ children }) => /* @__PURE__ */ jsx(ContextMenu, {
      title: "Sort & Filter",
      items: [
        ...empty ? [] : [
          [
            {
              label: "Sort by name (A-Z)",
              IconComponent: sortMode === "asc" ? CheckmarkLargeIcon : void 0,
              action: () => storage.plugins.sortMode = "asc"
            },
            {
              label: "Sort by name (Z-A)",
              IconComponent: sortMode === "dsc" ? CheckmarkLargeIcon : void 0,
              action: () => storage.plugins.sortMode = "dsc"
            }
          ]
        ],
        [
          {
            label: "Show core plugins",
            IconComponent: showCorePlugins ? CheckmarkLargeIcon : void 0,
            variant: "destructive",
            action: () => storage.plugins.showCorePlugins = !showCorePlugins
          }
        ]
      ],
      children
    }));
    return /* @__PURE__ */ jsx(PageWrapper, {
      withTopControls: true,
      children: /* @__PURE__ */ jsx(PluginSettingsPageContext.Provider, {
        value: {
          setQuery,
          showCorePlugins,
          sortMode,
          ContextMenuComponent
        },
        children: /* @__PURE__ */ jsx(Stack, {
          spacing: 16,
          style: styles5.grow,
          children: /* @__PURE__ */ jsxs(Show, {
            when: !empty || noSearchResults,
            fallback: /* @__PURE__ */ jsx(NoPlugins, {}),
            children: [
              /* @__PURE__ */ jsx(PluginListSearchInput, {}),
              /* @__PURE__ */ jsx(Show, {
                when: !noSearchResults,
                fallback: /* @__PURE__ */ jsx(NoResults, {}),
                children: /* @__PURE__ */ jsxs(import_react_native13.ScrollView, {
                  fadingEdgeLength: 32,
                  keyboardShouldPersistTaps: "handled",
                  style: styles5.autoSize,
                  children: [
                    /* @__PURE__ */ jsx(MasonaryFlashPluginList, {
                      data: externalPlugins,
                      ListItemComponent: InstalledPluginCard
                    }),
                    /* @__PURE__ */ jsx(Show, {
                      when: showCorePlugins,
                      children: /* @__PURE__ */ jsx(MasonaryFlashPluginList, {
                        data: corePlugins,
                        header: (
                          // TableRowGroupTitle probably has some margin, setting it to flex-end causes it to be in the center, lucky.
                          /* @__PURE__ */ jsxs(import_react_native13.View, {
                            style: styles5.headerContainer,
                            children: [
                              /* @__PURE__ */ jsx(TableRowGroupTitle, {
                                title: "Core Plugins"
                              }),
                              /* @__PURE__ */ jsx(IconButton, {
                                icon: getAssetIndexByName("CircleQuestionIcon-primary"),
                                size: "sm",
                                variant: "tertiary",
                                onPress: showCorePluginsInformationAlert
                              })
                            ]
                          })
                        ),
                        ListItemComponent: InstalledPluginCard
                      })
                    }),
                    /* @__PURE__ */ jsx(PluginBrowserCTA, {})
                  ]
                })
              })
            ]
          })
        })
      })
    });
  }
  function PluginBrowserCTA() {
    return /* @__PURE__ */ jsxs(import_react_native13.View, {
      style: [
        styles5.centerChildren,
        styles5.browserCtaContainer
      ],
      children: [
        /* @__PURE__ */ jsx(Text, {
          variant: "heading-lg/semibold",
          children: "Want more plugins? Browse them here!"
        }),
        /* @__PURE__ */ jsx(BrowsePluginsButton, {})
      ]
    });
  }
  function showCorePluginsInformationAlert() {
    return openAlert("revenge.plugins.settings.plugins.core-plugins.description", /* @__PURE__ */ jsx(AlertModal, {
      title: "What are core plugins?",
      content: "Core plugins are an essential part of Revenge. They provide core functionalities like allowing you to access this settings menu. Disabling core plugins may cause unexpected behavior.",
      actions: /* @__PURE__ */ jsx(AlertActionButton, {
        text: "OK"
      })
    }));
  }
  var import_react7, import_react_native13;
  var init_Plugins = __esm({
    "src/plugins/settings/pages/Plugins/index.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_common();
      init_components();
      init_icons();
      import_react7 = __toESM(require_react(), 1);
      import_react_native13 = __toESM(require_react_native(), 1);
      init_src7();
      init_src6();
      init_internals();
      init_components2();
      init_BrowsePluginsButton();
      init_Illustrations();
      init_InstalledPluginCard();
      init_MasonaryFlashPluginList();
      init_PluginListSearchInput();
      init_shared5();
      init_hooks();
      init_Wrapper();
      init_settings2();
    }
  });

  // src/plugins/settings/pages/Plugins/components/InstallablePluginCard.tsx
  function InstallablePluginCard(props) {
    return /* @__PURE__ */ jsx(PluginCard, {
      ...props,
      trailing: /* @__PURE__ */ jsx(Button, {
        size: "sm",
        variant: "primary",
        icon: getAssetIndexByName("DownloadIcon"),
        text: "Install",
        onPress: () => installPlugin(props.url)
      })
    });
  }
  var init_InstallablePluginCard = __esm({
    "src/plugins/settings/pages/Plugins/components/InstallablePluginCard.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_components();
      init_src8();
      init_PluginCard();
    }
  });

  // src/plugins/settings/pages/Plugins/utils.tsx
  function installPluginFromStorage() {
    return _installPluginFromStorage.apply(this, arguments);
  }
  function _installPluginFromStorage() {
    _installPluginFromStorage = _async_to_generator(function* () {
      var result = yield filePicker.handleDocumentSelection({
        pickMultiple: false
      });
      var file = result?.[0];
      if (!file) return;
      var res = yield installPlugin(file.uri);
      if (!res) return onPluginInstalled();
      switch (res) {
        case InstallPluginResult.UnsignedUserConfirmationNeeded:
          return openAlert("revenge.plugins.installation.unsigned", /* @__PURE__ */ jsx(AlertModal, {
            title: "Install unsigned plugin?",
            content: /* @__PURE__ */ jsxs(Text, {
              color: "text-muted",
              children: [
                "The plugin you're trying to install is not signed. Are you sure you want to install it?",
                " ",
                /* @__PURE__ */ jsx(IntlLink, {
                  target: "https://palmdevs.me",
                  children: "Learn more about this feature."
                })
              ]
            }),
            actions: /* @__PURE__ */ jsxs(Fragment, {
              children: [
                /* @__PURE__ */ jsx(AlertActionButton, {
                  variant: "destructive",
                  text: "Install anyway",
                  onPress: () => installPlugin(file.uri, true).then(onPluginInstalled)
                }),
                /* @__PURE__ */ jsx(AlertActionButton, {
                  variant: "secondary",
                  text: "Cancel"
                })
              ]
            })
          }));
        default:
          return openAlert("revenge.plugins.installation.failed", /* @__PURE__ */ jsx(AlertModal, {
            title: "Plugin installation failed",
            content: InstallPluginResultMessage[res],
            actions: /* @__PURE__ */ jsx(AlertActionButton, {
              text: "OK"
            })
          }));
      }
    });
    return _installPluginFromStorage.apply(this, arguments);
  }
  var onPluginInstalled;
  var init_utils4 = __esm({
    "src/plugins/settings/pages/Plugins/utils.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_common();
      init_components();
      init_icons();
      init_src8();
      init_constants2();
      onPluginInstalled = () => toasts.open({
        key: "revenge.plugins.install.success",
        content: "Plugin installed!",
        IconComponent: DownloadIcon
      });
    }
  });

  // src/plugins/settings/pages/Plugins/Browser.tsx
  function PluginBrowserPage() {
    var navigation = NavigationNative.useNavigation();
    (0, import_react8.useEffect)(() => void (import_react_native14.Platform.OS === "android" && navigation.setOptions({
      headerRight: () => /* @__PURE__ */ jsx(ContextMenu, {
        title: "More options",
        items: [
          {
            label: "Install from storage",
            action: installPluginFromStorage,
            IconComponent: FolderIcon
          }
        ],
        children: (props) => /* @__PURE__ */ jsx(IconButton, {
          ...props,
          variant: "tertiary",
          icon: getAssetIndexByName("MoreHorizontalIcon")
        })
      })
    })), []);
    var [query, setQuery] = (0, import_react8.useState)("");
    var { externalPlugins, empty, noSearchResults } = useFilteredPlugins([
      {
        name: "Mock Plugin",
        description: "This is a mock plugin",
        author: "Mock Author",
        id: "mock-plugin-1",
        url: "https://palmdevs.me/mock-plugin.zip",
        version: "1.0.0",
        icon: "Revenge.PluginIcon"
      },
      {
        name: "Another Mock Plugin",
        description: "This is another mock plugin",
        author: "Mock Author",
        id: "mock-plugin-2",
        url: "https://palmdevs.me/mock-plugin-2.zip",
        version: "1.0.0",
        icon: "Revenge.PluginIcon"
      }
    ], query, {
      showCorePlugins: false,
      sortMode: "asc"
    });
    return /* @__PURE__ */ jsx(PageWrapper, {
      withTopControls: true,
      children: /* @__PURE__ */ jsx(PluginSettingsPageContext.Provider, {
        value: {
          setQuery,
          showCorePlugins: false,
          sortMode: "asc",
          ContextMenuComponent: /* @__PURE__ */ (0, import_react8.memo)(() => null)
        },
        children: /* @__PURE__ */ jsx(Stack, {
          spacing: 16,
          style: styles5.grow,
          children: /* @__PURE__ */ jsxs(Show, {
            when: !empty || noSearchResults,
            fallback: /* @__PURE__ */ jsx(NoPlugins, {}),
            children: [
              /* @__PURE__ */ jsx(PluginListSearchInput, {}),
              /* @__PURE__ */ jsx(Show, {
                when: !noSearchResults,
                fallback: /* @__PURE__ */ jsx(NoResults, {}),
                children: /* @__PURE__ */ jsx(MasonaryFlashPluginList, {
                  ListItemComponent: InstallablePluginCard,
                  data: externalPlugins
                })
              })
            ]
          })
        })
      })
    });
  }
  var import_react8, import_react_native14;
  var init_Browser = __esm({
    "src/plugins/settings/pages/Plugins/Browser.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_common();
      init_components();
      init_icons();
      init_components2();
      import_react8 = __toESM(require_react(), 1);
      import_react_native14 = __toESM(require_react_native(), 1);
      init_InstallablePluginCard();
      init_MasonaryFlashPluginList();
      init_PluginListSearchInput();
      init_shared5();
      init_Wrapper();
      init_utils4();
      init_Illustrations();
      init_hooks();
    }
  });

  // src/plugins/settings/constants.ts
  var GitHubURL, DiscordURL;
  var init_constants3 = __esm({
    "src/plugins/settings/constants.ts"() {
      "use strict";
      GitHubURL = "https://github.com/revenge-mod";
      DiscordURL = "https://discord.com/invite/ddcQf3s2Uq";
    }
  });

  // src/plugins/settings/pages/Revenge.tsx
  function RevengeSettingsPage() {
    var navigation = NavigationNative.useNavigation();
    useObservable([
      settings
    ]);
    return /* @__PURE__ */ jsx(import_react_native15.ScrollView, {
      children: /* @__PURE__ */ jsxs(PageWrapper, {
        children: [
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: "Info",
            children: /* @__PURE__ */ jsx(TableRow, {
              label: "About",
              icon: /* @__PURE__ */ jsx(TableRowIcon, {
                source: getAssetIndexByName("CircleInformationIcon-primary")
              }),
              arrow: true,
              onPress: () => navigation.push("RevengeAbout")
            })
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Revenge",
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: "Discord",
                icon: /* @__PURE__ */ jsx(TableRowIcon, {
                  source: getAssetIndexByName("Discord")
                }),
                arrow: true,
                onPress: () => links.openDeeplink(DiscordURL)
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "GitHub",
                icon: /* @__PURE__ */ jsx(TableRowIcon, {
                  source: getAssetIndexByName("img_account_sync_github_white")
                }),
                arrow: true,
                onPress: () => links.openURL(GitHubURL)
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Contributors",
                icon: /* @__PURE__ */ jsx(TableRowIcon, {
                  source: getAssetIndexByName("FriendsIcon")
                }),
                arrow: true,
                onPress: () => navigation.push("RevengeContributors")
              })
            ]
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: "Actions",
            children: /* @__PURE__ */ jsx(TableRow, {
              label: "Reload Discord",
              icon: /* @__PURE__ */ jsx(TableRowIcon, {
                source: getAssetIndexByName("RetryIcon")
              }),
              // Passing BundleUpdaterManager.reload directly just explodes for some reason. Maybe onPress had args?
              onPress: () => BundleUpdaterManager.reload()
            })
          })
        ]
      })
    });
  }
  var import_react_native15;
  var init_Revenge = __esm({
    "src/plugins/settings/pages/Revenge.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_common();
      init_components();
      init_native();
      init_src7();
      init_src6();
      init_constants3();
      init_Wrapper();
      import_react_native15 = __toESM(require_react_native(), 1);
    }
  });

  // src/plugins/settings/index.tsx
  function getCustomSettingRows() {
    return [
      ...Object.values(customData.sections),
      {
        name: "(unbound)",
        settings: customData.rows
      }
    ].map((section) => Object.entries(section.settings).reduce((rows, [key, row]) => {
      rows[key] = transformSettingRowToRawSettingRow(key, row);
      return rows;
    }, {})).reduce((rows, newRows) => Object.assign(rows, newRows), {});
  }
  function transformSettingRowToRawSettingRow(key, row) {
    return {
      title: () => row.label,
      parent: row.parent ?? null,
      icon: row.icon,
      IconComponent: row.icon ? () => TableRowIcon({
        source: row.icon
      }) : void 0,
      unsearchable: row.unsearchable,
      screen: row.type === "route" ? {
        route: key,
        getComponent: () => row.component
      } : void 0,
      onPress: row.onPress,
      useDescription: row.description ? () => row.description : void 0,
      useTrailing: row.trailing ? () => row.trailing : void 0,
      useIsDisabled: typeof row.disabled === "boolean" ? () => row.disabled : void 0,
      usePredicate: row.predicate,
      onValueChange: row.onValueChange,
      useValue: () => row.value,
      type: row.type
    };
  }
  var import_react10, plugin, PluginContext;
  var init_settings2 = __esm({
    "src/plugins/settings/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_components();
      init_internals();
      init_functions();
      init_react2();
      init_settings();
      init_About();
      init_Contributors();
      init_CustomPageRenderer();
      init_Plugins();
      init_Browser();
      init_Revenge();
      init_contributors();
      import_react10 = __toESM(require_react(), 1);
      plugin = registerPlugin({
        name: "Settings",
        author: "Revenge",
        description: "Settings menus for Revenge",
        id: "revenge.settings",
        version: "1.0.0",
        icon: "SettingsIcon"
      }, {
        afterAppRender(context) {
          return _async_to_generator(function* () {
            var { patcher: patcher6, revenge: { assets, modules: modules3, ui: { settings: sui } } } = context;
            for (var member of contributors_default.team.concat(contributors_default.contributors)) {
              if (!member.icon) continue;
              assets.registerCustom({
                name: `Revenge.Contributors.${member.name}`,
                type: "webp"
              }, member.icon);
            }
            sui.createSection({
              name: "Revenge",
              settings: {
                Revenge: {
                  type: "route",
                  label: "Revenge",
                  icon: assets.getIndexByName("Revenge.RevengeIcon"),
                  component: RevengeSettingsPage
                },
                RevengePlugins: {
                  type: "route",
                  label: "Plugins",
                  icon: assets.getIndexByName("Revenge.PluginIcon"),
                  component: () => /* @__PURE__ */ jsx(PluginContext.Provider, {
                    value: context,
                    children: /* @__PURE__ */ jsx(PluginsSettingsPage, {})
                  })
                }
              }
            });
            sui.createRoute("RevengePluginBrowser", {
              type: "route",
              label: "Plugin Browser",
              component: PluginBrowserPage,
              icon: assets.getIndexByName("Revenge.PluginIcon"),
              parent: "RevengePlugins"
            });
            sui.createRoute("RevengeAbout", {
              type: "route",
              label: "About",
              component: AboutSettingsPage,
              icon: assets.getIndexByName("CircleInformationIcon-primary"),
              parent: "Revenge"
            });
            sui.createRoute("RevengeContributors", {
              type: "route",
              label: "Contributors",
              component: ContributorsSettingsPage,
              icon: assets.getIndexByName("FriendsIcon"),
              parent: "Revenge"
            });
            sui.createRoute("RevengeCustomPage", {
              type: "route",
              label: "Revenge Page",
              unsearchable: true,
              component: CustomPageRenderer,
              predicate: () => false
            });
            yield sleep(0);
            var SettingsConstants = modules3.findByProps("SETTING_RENDERER_CONFIG");
            var SettingsOverviewScreen = modules3.findByName("SettingsOverviewScreen", false);
            var originalRendererConfig = SettingsConstants.SETTING_RENDERER_CONFIG;
            var rendererConfig = originalRendererConfig;
            Object.defineProperty(SettingsConstants, "SETTING_RENDERER_CONFIG", {
              enumerable: true,
              configurable: true,
              get: () => ({
                ...getCustomSettingRows(),
                ...rendererConfig
              }),
              set: (v2) => rendererConfig = v2
            });
            patcher6.after(SettingsOverviewScreen, "default", (_3, children) => {
              var registeredCustomRows = new Set(Object.values(customData.sections).flatMap(({ settings: settings2 }) => Object.keys(settings2)));
              var { sections } = findInReactTree(children, (i) => i.props?.sections).props;
              if (sections.findIndex((section2) => section2.settings.some((setting) => registeredCustomRows.has(setting))) !== -1) return;
              var index = -~sections.findIndex((section2) => section2.settings.includes("ACCOUNT")) || 1;
              for (var key in customData.sections) {
                var section = customData.sections[key];
                sections.splice(index++, 0, {
                  label: section.name,
                  settings: Object.keys(section.settings)
                });
              }
            }, "addNewSettingsSections");
          })();
        },
        initializeStorage: () => ({
          plugins: {
            sortMode: "asc",
            showCorePlugins: false
          }
        })
      }, {
        core: true,
        manageable: false
      });
      PluginContext = /* @__PURE__ */ (0, import_react10.createContext)(null);
    }
  });

  // src/plugins/staff-settings/index.tsx
  var init_staff_settings = __esm({
    "src/plugins/staff-settings/index.tsx"() {
      "use strict";
      init_internals();
      registerPlugin({
        name: "Staff Settings",
        author: "Revenge",
        description: "Enables access to staff settings on Discord",
        id: "revenge.staff-settings",
        version: "1.0.0",
        icon: "StaffBadgeIcon"
      }, {
        onMetroModuleLoad(_3, __, exports, unsub) {
          if (exports.default?.constructor?.displayName === "DeveloperExperimentStore") {
            unsub();
            exports.default = new Proxy(exports.default, {
              get(target, property, receiver) {
                if (property === "isDeveloper") return true;
                return Reflect.get(target, property, receiver);
              }
            });
          }
        },
        beforeStop() {
          return {
            reloadRequired: true
          };
        }
      }, {
        core: true,
        manageable: true,
        enabled: false
      });
    }
  });

  // src/plugins/developer-settings/pages/AssetBrowser.tsx
  function AssetDisplay({ index, asset, moduleId }) {
    return /* @__PURE__ */ jsx(TableRow, {
      variant: DisplayableTypes.has(asset.type) ? "default" : "danger",
      label: asset.name,
      subLabel: `Index: ${index} \u2022 Type: ${asset.type} \u2022 ${!moduleId ? "Custom asset" : `Module ID: ${moduleId}`}`,
      icon: DisplayableTypes.has(asset.type) ? /* @__PURE__ */ jsx(import_react_native16.Image, {
        source: index,
        style: {
          width: 32,
          height: 32
        }
      }) : /* @__PURE__ */ jsx(TableRow.Icon, {
        variant: "danger",
        source: getAssetIndexByName(asset.type in UndisplayableTypesIconMap ? UndisplayableTypesIconMap[asset.type] : UndisplayableTypesIconMap.default)
      }),
      onPress: () => openAlert("revenge.plugins.developer-settings.asset-browser.display", /* @__PURE__ */ jsx(AlertModal, {
        title: asset.name,
        content: `Index: ${index}
Module ID: ${moduleId ?? "(custom asset)"}
Type: ${asset.type}`,
        extraContent: DisplayableTypes.has(asset.type) ? /* @__PURE__ */ jsx(import_react_native16.Image, {
          resizeMode: "contain",
          source: index,
          style: {
            flexGrow: 1,
            width: "auto",
            height: 192
          }
        }) : /* @__PURE__ */ jsxs(Text, {
          variant: "text-sm/medium",
          color: "text-danger",
          style: {
            width: "100%",
            textAlign: "center"
          },
          children: [
            "Asset type ",
            asset.type.toUpperCase(),
            " is not supported for preview."
          ]
        }),
        actions: /* @__PURE__ */ jsxs(Stack, {
          children: [
            /* @__PURE__ */ jsx(AlertActionButton, {
              text: "Copy asset name",
              variant: "primary",
              onPress: () => copyToClipboard(asset.name)
            }),
            /* @__PURE__ */ jsx(AlertActionButton, {
              text: "Copy asset index",
              variant: "secondary",
              onPress: () => copyToClipboard(index.toString())
            })
          ]
        })
      }))
    });
  }
  function copyToClipboard(text) {
    clipboard.setString(text);
    toasts.open({
      key: "revenge.plugins.developer-settings.asset-browser.copied",
      content: "Copied to clipboard",
      icon: icons_exports.CopyIcon
    });
  }
  function AssetBrowserSettingsPage() {
    var [search, setSearch] = (0, import_react11.useState)("");
    return /* @__PURE__ */ jsxs(PageWrapper, {
      children: [
        /* @__PURE__ */ jsx(SearchInput, {
          size: "md",
          onChange: (v2) => setSearch(v2)
        }),
        /* @__PURE__ */ jsx(FlashList, {
          data: Object.values(cache.assetModules).flatMap((reg) => Object.values(reg).filter((x2) => typeof x2 === "number").map(requireModule)).concat(Object.values(customAssets)).map((index) => {
            var asset = getAssetByIndex(index);
            return [
              index,
              asset
            ];
          }).filter(([index, asset]) => asset.name.toLowerCase().includes(search.toLowerCase()) || index.toString().includes(search) || asset.type.includes(search)).map(([index, asset]) => {
            return {
              index,
              asset,
              moduleId: getAssetModuleIdByIndex(index)
            };
          }),
          renderItem: ({ item }) => /* @__PURE__ */ jsx(AssetDisplay, {
            ...item
          }),
          estimatedItemSize: 80
        })
      ]
    });
  }
  var import_react11, import_react_native16, DisplayableTypes, UndisplayableTypesIconMap;
  var init_AssetBrowser = __esm({
    "src/plugins/developer-settings/pages/AssetBrowser.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src5();
      init_common();
      init_components();
      init_metro();
      init_components3();
      import_react11 = __toESM(require_react(), 1);
      import_react_native16 = __toESM(require_react_native(), 1);
      init_Wrapper();
      DisplayableTypes = /* @__PURE__ */ new Set([
        "png",
        "jpg",
        "svg",
        "webp"
      ]);
      UndisplayableTypesIconMap = {
        jsona: "ic_file_text",
        lottie: "ic_image",
        webm: "CirclePlayIcon-primary",
        ttf: "ic_add_text",
        default: "UnknownGameIcon"
      };
    }
  });

  // src/plugins/developer-settings/pages/DebugPerformanceTimes.tsx
  function DebugPerformanceTimesSettingsPage() {
    var previousTimestamp;
    return /* @__PURE__ */ jsx(import_react_native17.ScrollView, {
      children: /* @__PURE__ */ jsxs(PageWrapper, {
        children: [
          /* @__PURE__ */ jsx(Text, {
            color: "text-danger",
            children: "Some delta times may be inaccurate as some steps run concurrently to each other. Only look at delta times when necessary. Steps that are marked in red were skipped/not recorded."
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            children: PerformanceTimesKeys.map((key) => {
              var timeNumber = timeOf(key);
              previousTimestamp ??= timestampOf(key);
              var time = timeNumber.toFixed(4);
              var delta = (timestampOf(key) - previousTimestamp).toFixed(4);
              if (!Number.isNaN(timeNumber)) previousTimestamp = timestampOf(key);
              return (
                // biome-ignore lint/correctness/useJsxKeyInIterable: This never gets rerendered
                /* @__PURE__ */ jsx(TableRow, {
                  variant: Number.isNaN(timeNumber) ? "danger" : "default",
                  label: key,
                  subLabel: `${time}ms (\u0394: ${delta}ms)`
                })
              );
            })
          })
        ]
      })
    });
  }
  var import_react_native17, PerformanceTimesKeys;
  var init_DebugPerformanceTimes = __esm({
    "src/plugins/developer-settings/pages/DebugPerformanceTimes.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src();
      init_components();
      import_react_native17 = __toESM(require_react_native(), 1);
      init_Wrapper();
      PerformanceTimesKeys = Object.keys(PerformanceTimes).sort((a, b3) => timeOf(a) - timeOf(b3));
    }
  });

  // src/plugins/developer-settings/debugger.ts
  function disconnectFromDebugger() {
    DebuggerContext.ws.close();
    DebuggerContext.connected = false;
  }
  function connectToDebugger(addr, revenge2) {
    var ws = DebuggerContext.ws = new WebSocket(`ws://${addr}`);
    ws.addEventListener("open", () => {
      DebuggerContext.connected = true;
      DebuggerEvents.emit("connect");
      DebuggerEvents.emit("*", "connect");
    });
    ws.addEventListener("close", () => {
      DebuggerContext.connected = false;
      DebuggerEvents.emit("disconnect");
      DebuggerEvents.emit("*", "disconnect");
    });
    ws.addEventListener("error", (e) => {
      DebuggerContext.connected = false;
      DebuggerEvents.emit("error", e);
      DebuggerEvents.emit("*", "error", e);
    });
    ws.addEventListener("message", (e) => {
      try {
        var json = JSON.parse(e.data);
        if (typeof json.code === "string" && typeof json.nonce === "string") {
          var res;
          try {
            res = globalThis.eval(json.code);
          } catch (e2) {
            res = e2;
          }
          var inspect = revenge2.modules.findProp("inspect");
          try {
            ws.send(res instanceof Error ? JSON.stringify({
              level: "error",
              message: String(res),
              nonce: json.nonce
            }) : JSON.stringify({
              level: "info",
              message: inspect(res, {
                showHidden: true
              }),
              nonce: json.nonce
            }));
          } catch (e2) {
            ws.send(JSON.stringify({
              level: "error",
              message: `DebuggerError: ${String(e2)}`,
              nonce: json.nonce
            }));
          }
        }
      } catch (e2) {
      }
    });
  }
  var DebuggerEvents, DebuggerContext;
  var init_debugger = __esm({
    "src/plugins/developer-settings/debugger.ts"() {
      "use strict";
      init_events();
      DebuggerEvents = new EventEmitter();
      DebuggerContext = {
        ws: void 0,
        connected: false
      };
    }
  });

  // src/plugins/developer-settings/devtools.ts
  function disconnectFromDevTools() {
    DevToolsContext.ws.close();
    DevToolsContext.connected = false;
  }
  function connectToDevTools(addr) {
    var ws = DevToolsContext.ws = new WebSocket(`ws://${addr}`);
    ws.addEventListener("open", () => {
      DevToolsContext.connected = true;
      DevToolsEvents.emit("connect");
      DevToolsEvents.emit("*", "connect");
    });
    ws.addEventListener("close", () => {
      DevToolsContext.connected = false;
      DevToolsEvents.emit("disconnect");
      DevToolsEvents.emit("*", "disconnect");
    });
    ws.addEventListener("error", (e) => {
      DevToolsContext.connected = false;
      DevToolsEvents.emit("error", e);
      DevToolsEvents.emit("*", "error", e);
    });
    __reactDevTools.exports.connectToDevTools({
      websocket: ws
    });
  }
  var DevToolsEvents, DevToolsContext;
  var init_devtools = __esm({
    "src/plugins/developer-settings/devtools.ts"() {
      "use strict";
      init_events();
      DevToolsEvents = new EventEmitter();
      DevToolsContext = {
        ws: void 0,
        connected: false,
        error: void 0
      };
    }
  });

  // src/plugins/developer-settings/pages/Developer.tsx
  function DeveloperSettingsPage() {
    var context = (0, import_react12.useContext)(PluginContext2);
    var { storage, revenge: { assets, modules: modules3 } } = context;
    useObservable([
      storage
    ]);
    var navigation = NavigationNative.useNavigation();
    var refDevToolsAddr = (0, import_react12.useRef)(storage.reactDevTools.address || "localhost:8097");
    var [rdtConnected, setRdtConnected] = (0, import_react12.useState)(DevToolsContext.connected);
    var refDebuggerAddr = (0, import_react12.useRef)(storage.debugger.address || "localhost:9090");
    var [dbgConnected, setDbgConnected] = (0, import_react12.useState)(DebuggerContext.connected);
    (0, import_react12.useEffect)(() => {
      var listener = (evt) => {
        if (evt === "connect") setRdtConnected(true);
        else setRdtConnected(false);
      };
      DevToolsEvents.on("*", listener);
      return () => void DevToolsEvents.off("*", listener);
    }, []);
    (0, import_react12.useEffect)(() => {
      var listener = (evt) => {
        if (evt === "connect") setDbgConnected(true);
        else setDbgConnected(false);
      };
      DebuggerEvents.on("*", listener);
      return () => void DebuggerEvents.off("*", listener);
    }, []);
    return /* @__PURE__ */ jsx(import_react_native18.ScrollView, {
      children: /* @__PURE__ */ jsxs(PageWrapper, {
        children: [
          /* @__PURE__ */ jsxs(Stack, {
            spacing: 8,
            direction: "vertical",
            children: [
              typeof __reactDevTools !== "undefined" && /* @__PURE__ */ jsxs(Fragment, {
                children: [
                  /* @__PURE__ */ jsx(TextInput, {
                    editable: !rdtConnected,
                    isDisabled: rdtConnected,
                    leadingText: "ws://",
                    defaultValue: refDevToolsAddr.current,
                    label: "React DevTools",
                    onChange: (text) => refDevToolsAddr.current = text,
                    onBlur: () => {
                      if (refDevToolsAddr.current === storage.reactDevTools.address) return;
                      storage.reactDevTools.address = refDevToolsAddr.current;
                      toasts.open({
                        key: "revenge.plugins.settings.react-devtools.saved",
                        content: "Saved DevTools address!"
                      });
                    },
                    returnKeyType: "done"
                  }),
                  /* @__PURE__ */ jsxs(TableRowGroup, {
                    children: [
                      rdtConnected ? /* @__PURE__ */ jsx(TableRow, {
                        label: "Disconnect from React DevTools",
                        variant: "danger",
                        icon: /* @__PURE__ */ jsx(TableRowIcon, {
                          variant: "danger",
                          source: assets.getIndexByName("Revenge.ReactIcon")
                        }),
                        onPress: () => disconnectFromDevTools()
                      }) : /* @__PURE__ */ jsx(TableRow, {
                        label: "Connect to React DevTools",
                        icon: /* @__PURE__ */ jsx(TableRowIcon, {
                          source: assets.getIndexByName("Revenge.ReactIcon")
                        }),
                        onPress: () => connectToDevTools(refDevToolsAddr.current)
                      }),
                      /* @__PURE__ */ jsx(TableSwitchRow, {
                        label: "Auto Connect on Startup",
                        subLabel: "Automatically connect to React DevTools when the app starts.",
                        icon: /* @__PURE__ */ jsx(TableRowIcon, {
                          source: assets.getIndexByName("Revenge.ReactIcon")
                        }),
                        value: storage.reactDevTools.autoConnect,
                        onValueChange: (v2) => storage.reactDevTools.autoConnect = v2
                      })
                    ]
                  }, String(rdtConnected))
                ]
              }),
              /* @__PURE__ */ jsx(TextInput, {
                editable: !dbgConnected,
                isDisabled: dbgConnected,
                leadingText: "ws://",
                defaultValue: refDebuggerAddr.current,
                label: "Debugger",
                onChange: (text) => refDebuggerAddr.current = text,
                onBlur: () => {
                  if (refDebuggerAddr.current === storage.debugger.address) return;
                  storage.debugger.address = refDebuggerAddr.current;
                  toasts.open({
                    key: "revenge.plugins.developer-settings.debugger.saved",
                    content: "Saved debugger address!"
                  });
                },
                returnKeyType: "done"
              }),
              /* @__PURE__ */ jsxs(TableRowGroup, {
                children: [
                  dbgConnected ? /* @__PURE__ */ jsx(TableRow, {
                    label: "Disconnect from debugger",
                    variant: "danger",
                    icon: /* @__PURE__ */ jsx(TableRowIcon, {
                      variant: "danger",
                      source: assets.getIndexByName("LinkIcon")
                    }),
                    onPress: () => disconnectFromDebugger()
                  }) : /* @__PURE__ */ jsx(TableRow, {
                    label: "Connect to debugger",
                    icon: /* @__PURE__ */ jsx(TableRowIcon, {
                      source: assets.getIndexByName("LinkIcon")
                    }),
                    onPress: () => connectToDebugger(storage.debugger.address, context.revenge)
                  }),
                  /* @__PURE__ */ jsx(TableSwitchRow, {
                    label: "Auto Connect on Startup",
                    subLabel: "Automatically connect to debugger when the app starts.",
                    icon: /* @__PURE__ */ jsx(TableRowIcon, {
                      source: assets.getIndexByName("LinkIcon")
                    }),
                    value: storage.debugger.autoConnect,
                    onValueChange: (v2) => storage.debugger.autoConnect = v2
                  })
                ]
              }, String(dbgConnected))
            ]
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Tools",
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: "Evaluate JavaScript",
                icon: /* @__PURE__ */ jsx(TableRowIcon, {
                  source: assets.getIndexByName("PaperIcon")
                }),
                onPress: () => {
                  alerts.openAlert("revenge.plugins.storage.evaluate", /* @__PURE__ */ jsx(PluginContext2.Provider, {
                    value: context,
                    children: /* @__PURE__ */ jsx(DeveloperSettingsPageEvaluateJavaScriptAlert, {})
                  }));
                }
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Asset Browser",
                icon: /* @__PURE__ */ jsx(TableRowIcon, {
                  source: assets.getIndexByName("ImageIcon")
                }),
                arrow: true,
                onPress: () => navigation.navigate("RevengeAssetBrowser")
              }),
              /* @__PURE__ */ jsx(TableRow, {
                variant: "danger",
                label: "Clear Settings",
                subLabel: "This will remove the settings file and reload the app.",
                icon: /* @__PURE__ */ jsx(TableRowIcon, {
                  variant: "danger",
                  source: assets.getIndexByName("TrashIcon")
                }),
                onPress: /* @__PURE__ */ _async_to_generator(function* () {
                  yield settings[storageContextSymbol].file.delete();
                  BundleUpdaterManager.reload();
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                variant: "danger",
                label: "Clear Plugins Data",
                subLabel: "This will remove the all plugin-related data and reload the app.",
                icon: /* @__PURE__ */ jsx(TableRowIcon, {
                  variant: "danger",
                  source: assets.getIndexByName("TrashIcon")
                }),
                onPress: /* @__PURE__ */ _async_to_generator(function* () {
                  yield FileModule.clearFolder("documents", PluginsDirectoryPath);
                  BundleUpdaterManager.reload();
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Tests",
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: "Test CustomPageRenderer",
                icon: /* @__PURE__ */ jsx(TableRowIcon, {
                  source: assets.getIndexByName("ScreenArrowIcon")
                }),
                arrow: true,
                onPress: () => navigation.navigate("RevengeCustomPage", {
                  title: "Custom Page Test",
                  render: () => null
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                variant: "danger",
                label: "Test ErrorBoundary",
                icon: /* @__PURE__ */ jsx(TableRowIcon, {
                  variant: "danger",
                  source: assets.getIndexByName("ScreenXIcon")
                }),
                arrow: true,
                onPress: () => navigation.navigate("RevengeCustomPage", {
                  title: "ErrorBoundary Test",
                  // @ts-expect-error: This will do it
                  render: () => /* @__PURE__ */ jsx("undefined", {})
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: "Performance",
            children: /* @__PURE__ */ jsx(TableRow, {
              label: "Show Debug Performance Times",
              icon: /* @__PURE__ */ jsx(TableRowIcon, {
                source: assets.getIndexByName("TimerIcon")
              }),
              onPress: () => navigation.navigate("RevengeDebugPerformanceTimes")
            })
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: "Caches",
            children: /* @__PURE__ */ jsx(TableRow, {
              variant: "danger",
              label: "Recreate Metro Cache",
              subLabel: "Module blacklists, lookup flags, asset index maps, asset module ID maps. This will reload the app.",
              icon: /* @__PURE__ */ jsx(TableRowIcon, {
                variant: "danger",
                source: assets.getIndexByName("TrashIcon")
              }),
              onPress: () => {
                modules3.metro.invalidateCache();
                BundleUpdaterManager.reload();
              }
            })
          })
        ]
      })
    });
  }
  function DeveloperSettingsPageEvaluateJavaScriptAlert() {
    var { revenge: { modules: modules3 } } = (0, import_react12.useContext)(PluginContext2);
    var [evalAwaitResult, setEvalAwaitResult] = (0, import_react12.useState)(true);
    var codeRef = (0, import_react12.useRef)("");
    return /* @__PURE__ */ jsx(AlertModal, {
      title: "Evaluate JavaScript",
      extraContent: /* @__PURE__ */ jsxs(Stack, {
        children: [
          /* @__PURE__ */ jsx(TextArea, {
            autoFocus: true,
            label: "Code",
            size: "md",
            placeholder: "ReactNative.NativeModules.BundleUpdaterManager.reload()",
            onChange: (v2) => codeRef.current = v2
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            children: /* @__PURE__ */ jsx(TableSwitchRow, {
              label: "Await result",
              value: evalAwaitResult,
              onValueChange: (v2) => setEvalAwaitResult(v2)
            })
          })
        ]
      }),
      actions: /* @__PURE__ */ jsxs(Stack, {
        children: [
          /* @__PURE__ */ jsx(AlertActionButton, {
            text: "Evaluate",
            variant: "primary",
            onPress: /* @__PURE__ */ _async_to_generator(function* () {
              var res = globalThis.eval(codeRef.current);
              alert(modules3.findProp("inspect")(res instanceof Promise && evalAwaitResult ? yield res : res, {
                depth: 5
              }));
            })
          }),
          /* @__PURE__ */ jsx(AlertActionButton, {
            text: "Cancel",
            variant: "secondary"
          })
        ]
      })
    });
  }
  var import_react12, import_react_native18;
  var init_Developer = __esm({
    "src/plugins/developer-settings/pages/Developer.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_common();
      init_components();
      init_native();
      init_src6();
      init_Wrapper();
      init_debugger();
      init_devtools();
      init_src7();
      init_paths();
      import_react12 = __toESM(require_react(), 1);
      import_react_native18 = __toESM(require_react_native(), 1);
      init_developer_settings();
    }
  });

  // src/plugins/developer-settings/index.tsx
  function setupDebugger({ patcher: patcher6, cleanup }) {
    var debuggerCleanups = /* @__PURE__ */ new Set();
    patcher6.before(globalThis, "nativeLoggingHook", ([message, level]) => {
      if (DebuggerContext.ws?.readyState === WebSocket.OPEN) DebuggerContext.ws.send(JSON.stringify({
        level: level === 3 ? "error" : level === 2 ? "warn" : "info",
        message
      }));
    }, "loggerPatch");
    globalThis.reload = () => BundleUpdaterManager.reload();
    globalThis.patcher = {
      snipe: (object2, key, callback) => debuggerCleanups.add(patcher6.after(object2, key, callback ?? ((args, ret) => console.log("[SNIPER]", args, ret)), "revenge.plugins.developer-settings.debugger.patcher.snipe")),
      noop: (object2, key) => debuggerCleanups.add(patcher6.instead(object2, key, () => void 0, "revenge.plugins.developer-settings.debugger.patcher.noop")),
      wipe: () => {
        for (var c2 of debuggerCleanups) c2();
        debuggerCleanups.clear();
      }
    };
    cleanup(() => {
      delete globalThis.reload;
      delete globalThis.patcher;
    }, () => {
      for (var c2 of debuggerCleanups) c2();
    });
  }
  var plugin2, PluginContext2;
  var init_developer_settings = __esm({
    "src/plugins/developer-settings/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_common();
      init_internals();
      init_functions();
      init_AssetBrowser();
      init_DebugPerformanceTimes();
      init_Developer();
      init_debugger();
      init_devtools();
      init_native();
      plugin2 = registerPlugin({
        name: "Developer Settings",
        author: "Revenge",
        description: "Developer settings for Revenge",
        id: "revenge.developer-settings",
        version: "1.0.0",
        icon: "WrenchIcon"
      }, {
        afterAppRender(context) {
          return _async_to_generator(function* () {
            var { cleanup, storage, revenge: { assets, ui: { settings: sui } } } = context;
            function wrapPluginContext(Component) {
              return () => /* @__PURE__ */ jsx(PluginContext2.Provider, {
                value: context,
                children: /* @__PURE__ */ jsx(Component, {})
              });
            }
            DevToolsEvents.on("error", (err2) => toasts.open({
              key: "revenge.plugins.settings.react-devtools.error",
              content: `Error while connecting to React DevTools:
${err2.message}`
            }));
            DevToolsEvents.on("connect", () => toasts.open({
              key: "revenge.plugins.settings.react-devtools.connected",
              content: "Connected to React DevTools"
            }));
            if (storage.reactDevTools.autoConnect && globalThis.__reactDevTools) connectToDevTools(storage.reactDevTools.address);
            if (storage.debugger.autoConnect) connectToDebugger(storage.debugger.address, context.revenge);
            setupDebugger(context);
            yield sleep(0);
            cleanup(sui.addRowsToSection("Revenge", {
              RevengeDeveloper: {
                type: "route",
                label: "Developer",
                icon: assets.getIndexByName("WrenchIcon"),
                component: wrapPluginContext(DeveloperSettingsPage)
              }
            }), sui.createRoute("RevengeDebugPerformanceTimes", {
              type: "route",
              label: "Debug Performance Times",
              component: DebugPerformanceTimesSettingsPage,
              icon: assets.getIndexByName("TimerIcon")
            }), sui.createRoute("RevengeAssetBrowser", {
              type: "route",
              label: "Asset Browser",
              component: AssetBrowserSettingsPage,
              icon: assets.getIndexByName("ImageIcon")
            }));
          })();
        },
        initializeStorage: () => ({
          reactDevTools: {
            address: "localhost:8097",
            autoConnect: false
          },
          debugger: {
            address: "localhost:9090",
            autoConnect: false
          }
        })
      }, {
        core: true,
        manageable: true,
        enabled: false
      });
      PluginContext2 = React.createContext(null);
    }
  });

  // src/plugins/warnings/index.ts
  var MinimumSupportedBuildNumber;
  var init_warnings = __esm({
    "src/plugins/warnings/index.ts"() {
      "use strict";
      init_common();
      init_native();
      init_internals();
      MinimumSupportedBuildNumber = ReactNative2.Platform.select({
        android: 254e3,
        ios: 66559
      });
      registerPlugin({
        name: "Warnings",
        author: "Revenge",
        description: "Startup warnings for users that are not using the recommended defaults for Revenge",
        id: "revenge.warnings",
        version: "1.0.0",
        icon: "WarningIcon"
      }, {
        afterAppRender({ revenge: { assets, modules: modules3 }, storage }) {
          var { legacy_alerts: legacy_alerts2, toasts: toasts2 } = modules3.common;
          if (
            // We do !> instead of < in case the value of the left is NaN
            !(Number(ClientInfoModule.Build) > MinimumSupportedBuildNumber) && (storage.supportWarningDismissedAt ?? Date.now()) + 6048e5 > Date.now()
          ) {
            legacy_alerts2.show({
              title: "Support Warning",
              body: (
                // biome-ignore lint/style/useTemplate: I can't see the whole message when not doing concatenation
                `Revenge does not officially support this build of Discord. Please update to a newer version as some features may not work as expected.

Supported Builds: 254.0 (${MinimumSupportedBuildNumber}) or after
Your Build: ${ClientInfoModule.Version} (${ClientInfoModule.Build})`
              ),
              confirmText: "Remind me in 7 days",
              onConfirm: () => {
                storage.supportWarningDismissedAt = Date.now();
                toasts2.open({
                  key: "revenge.toasts.warnings.support-warning.dismissed",
                  content: "You will see this warning again in 7 days",
                  icon: assets.getIndexByName("ic_warning_24px")
                });
              }
            });
          }
        }
      }, {
        core: true,
        manageable: false
      });
    }
  });

  // src/plugins/index.ts
  var plugins_exports = {};
  var init_plugins = __esm({
    "src/plugins/index.ts"() {
      "use strict";
      init_assets();
      init_settings2();
      init_staff_settings();
      init_developer_settings();
      init_warnings();
    }
  });

  // src/index.ts
  init_async_to_generator();
  init_functions();
  init_library();
  init_src();
  init_constants();
  init_native();
  init_errors();
  init_src2();
  Object.freeze = Object.seal = (o) => o;
  function initialize() {
    return _initialize.apply(this, arguments);
  }
  function _initialize() {
    _initialize = // ! This function is BLOCKING, so we need to make sure it's as fast as possible
    _async_to_generator(function* () {
      recordTimestamp("Init_Initialize");
      try {
        var [{ createModulesLibrary: createModulesLibrary2 }, { SettingsUILibrary: SettingsUILibrary2 }] = yield Promise.all([
          Promise.resolve().then(() => (init_src3(), src_exports)),
          Promise.resolve().then(() => (init_settings(), settings_exports))
        ]);
        var ModulesLibraryPromise = createModulesLibrary2();
        var [{ AppLibrary: AppLibrary2 }, { AssetsLibrary: AssetsLibrary2 }, UIColorsLibrary, { ReactJSXLibrary: ReactJSXLibrary2 }] = yield Promise.all([
          Promise.resolve().then(() => (init_src4(), src_exports2)),
          Promise.resolve().then(() => (init_src5(), src_exports3)),
          Promise.resolve().then(() => (init_colors(), colors_exports)),
          Promise.resolve().then(() => (init_jsx(), jsx_exports))
        ]);
        var ModulesLibrary = yield ModulesLibraryPromise;
        var [{ startPlugins: startPlugins2, registerExternalPlugins: registerExternalPlugins2 }, { awaitStorage: awaitStorage2 }, { settings: settings2, pluginsStates: pluginsStates2 }] = yield Promise.all([
          Promise.resolve().then(() => (init_src8(), src_exports6)),
          Promise.resolve().then(() => (init_src6(), src_exports4)),
          Promise.resolve().then(() => (init_src7(), src_exports5))
        ]);
        globalThis.revenge = {
          app: AppLibrary2,
          assets: AssetsLibrary2,
          modules: ModulesLibrary,
          react: {
            jsx: ReactJSXLibrary2
          },
          ui: {
            settings: SettingsUILibrary2,
            colors: UIColorsLibrary
          }
        };
        yield Promise.resolve().then(() => (init_plugins(), plugins_exports));
        yield registerExternalPlugins2();
        recordTimestamp("Plugins_Registered");
        yield awaitStorage2(settings2, pluginsStates2);
        recordTimestamp("Storage_Initialized");
        yield startPlugins2();
        recordTimestamp("Plugins_Started");
      } catch (e) {
        onError(e);
      }
    });
    return _initialize.apply(this, arguments);
  }
  function onError(e) {
    logger4.error(`Failed to load Revenge: ${getErrorStack(e)}`);
    alert([
      "Failed to load Revenge\n",
      `Build Number: ${ClientInfoModule.Build}`,
      getErrorStack(e)
    ].join("\n"));
  }
  var requireFunc;
  var patcher5 = createPatcherInstance("revenge.library.init");
  var logger4 = createLogger("init");
  var ErrorTypeWhitelist = [
    ReferenceError,
    TypeError,
    RangeError
  ];
  Promise._m = (promise, err2) => {
    if (err2) setTimeout(() => {
      if (promise._h === 0) logger4.error(`Unhandled promise rejection: ${getErrorStack(err2)}`);
    }, ErrorTypeWhitelist.some((it) => err2 instanceof it) ? 0 : 2e3);
  };
  if (typeof __r !== "undefined") initialize();
  function onceIndexRequired() {
    recordTimestamp("Native_RequiredIndex");
    var batchedBridge = __fbBatchedBridge;
    var callQueue = [];
    var unpatch2 = patcher5.instead(batchedBridge, "callFunctionReturnFlushedQueue", (args, orig) => {
      if (args[0] === "AppRegistry" || !batchedBridge.getCallableModule(args[0])) {
        callQueue.push(args);
        return batchedBridge.flushedQueue();
      }
      return orig.apply(batchedBridge, args);
    }, "holdNativeCalls");
    initialize().then(() => {
      recordTimestamp("Init_PromiseResolved");
      unpatch2();
      for (var queue of callQueue) batchedBridge.getCallableModule(queue[0]) && batchedBridge.__callFunction(...queue);
    }).catch(onError);
  }
  Object.defineProperties(globalThis, {
    __r: {
      configurable: true,
      get: () => requireFunc,
      set(metroRequire) {
        requireFunc = function patchedRequire(id) {
          if (id === IndexMetroModuleId) {
            requireFunc = metroRequire;
            onceIndexRequired();
          } else return metroRequire(id);
        };
      }
    },
    __d: {
      configurable: true,
      get() {
        globalThis.modules ??= __c?.();
        return this.value;
      },
      set(v2) {
        this.value = v2;
      }
    }
  });
})();
//# sourceURL=revenge
