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
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err3) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err3);
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
      log: (message2) => console.log(`${tag} ${message2}`),
      warn: (message2) => console.warn(`${tag} ${message2}`),
      error: (message2) => console.error(`${tag} ${message2}`)
    };
  }
  var init_library = __esm({
    "libraries/utils/src/library.ts"() {
      "use strict";
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
    MetroModuleFlags: () => MetroModuleFlags,
    MetroModuleLookupFlags: () => MetroModuleLookupFlags,
    assetCacheIndexSymbol: () => assetCacheIndexSymbol
  });
  var MetroModuleFlags, MetroModuleLookupFlags, IndexMetroModuleId, MetroCacheVersion, MetroCacheRelativeFilePath, FirstAssetTypeRegisteredKey, assetCacheIndexSymbol;
  var init_constants = __esm({
    "libraries/modules/src/constants.ts"() {
      "use strict";
      init_enums();
      MetroModuleFlags = createBitFlagEnum("Blacklisted", "Asset");
      MetroModuleLookupFlags = createBitFlagEnum("NotFound", "FullLookup");
      IndexMetroModuleId = 0;
      MetroCacheVersion = 3;
      MetroCacheRelativeFilePath = "RevengeMetroCache";
      FirstAssetTypeRegisteredKey = "__ftr";
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
      CacheModule = lazyValue(() => nmp.NativeCacheModule ?? nmp.MMKVManager, {
        hint: "object"
      });
      FileModule = lazyValue(() => nmp.NativeFileModule ?? nmp.RTNFileManager ?? nmp.DCDFileManager, {
        hint: "object"
      });
      ClientInfoModule = lazyValue(() => nmp.NativeClientInfoModule ?? nmp.RTNClientInfoManager ?? nmp.InfoDictionaryManager, {
        hint: "object"
      });
      DeviceModule = lazyValue(() => nmp.NativeDeviceModule ?? nmp.RTNDeviceManager ?? nmp.DCDDeviceManager, {
        hint: "object"
      });
      BundleUpdaterManager = lazyValue(() => nmp.BundleUpdaterManager, {
        hint: "object"
      });
      ThemeModule = lazyValue(() => nmp.NativeThemeModule ?? nmp.RTNThemeManager ?? nmp.DCDThemeManager, {
        hint: "object"
      });
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
      init_src();
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
  var init_src = __esm({
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

  // libraries/utils/src/errors.ts
  function getErrorStack(e) {
    return e?.stack || String(e);
  }
  var init_errors = __esm({
    "libraries/utils/src/errors.ts"() {
      "use strict";
    }
  });

  // libraries/modules/src/shared.ts
  var logger;
  var init_shared = __esm({
    "libraries/modules/src/shared.ts"() {
      "use strict";
      init_library();
      logger = createLogger("modules");
    }
  });

  // libraries/modules/src/metro/patches.ts
  var patches_exports = {};
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
  var patcher;
  var init_patches = __esm({
    "libraries/modules/src/metro/patches.ts"() {
      "use strict";
      init_src();
      init_functions();
      init_metro();
      init_caches();
      init_shared();
      patcher = createPatcherInstance("revenge.library.modules.metro.patches");
      subscribePatchableModule("f", (exports) => exports.fileFinishedImporting, (exports) => {
        patcher.before(exports, "fileFinishedImporting", ([filePath]) => {
          var importingModuleId2 = getImportingModuleId();
          if (importingModuleId2 === -1 || !filePath) return;
          cache.moduleFilePaths.set(importingModuleId2, filePath);
        }, "trackFilePath");
      });
      subscribePatchableModule("r", (exports) => [
        "customBubblingEventTypes",
        "customDirectEventTypes",
        "register",
        "get"
      ].every((x2) => exports[x2]), (exports) => {
        patcher.instead(exports, "register", (args, origFunc) => {
          try {
            return origFunc(...args);
          } catch (e) {
          }
        }, "fixNativeComponentRegistryDuplicateRegister");
      });
      subscribePatchableModule("b", (exports, id) => {
        return exports.default?.reactProfilingEnabled && !modules.get(id + 1)?.publicModule.exports.default;
      }, (_3, id) => {
        if (!isModuleBlacklisted(id + 1)) {
          blacklistModule(id + 1);
          logger.log(`Blacklisted module ${id + 1} as it causes freeze when initialized`);
        }
      });
      subscribePatchableModule("s", (m2) => m2.initSentry, (m2) => m2.initSentry = noop);
      subscribePatchableModule("d", (m2) => m2.default?.track && m2.default.trackMaker, (m2) => m2.default.track = () => noopPromise);
      subscribePatchableModule("m", (m2) => m2.isMoment, (moment) => patcher.instead(moment, "defineLocale", (args, orig) => {
        var origLocale = moment.locale();
        orig(...args);
        moment.locale(origLocale);
      }));
    }
  });

  // libraries/modules/src/metro/index.ts
  var metro_exports = {};
  __export(metro_exports, {
    blacklistModule: () => blacklistModule,
    getImportingModuleId: () => getImportingModuleId,
    initializeModules: () => initializeModules,
    isModuleAssetRegistrar: () => isModuleAssetRegistrar,
    isModuleBlacklisted: () => isModuleBlacklisted,
    isModuleExportsBad: () => isModuleExportsBad,
    modulesForFinder: () => modulesForFinder,
    requireModule: () => requireModule,
    subscribeModule: () => subscribeModule
  });
  function getImportingModuleId() {
    return importingModuleId;
  }
  function handleModuleInitializeError(id, error) {
    logger.error(`Blacklisting module ${id} because it could not be imported: ${error}`);
    blacklistModule(id);
  }
  function initializeModules() {
    return _initializeModules.apply(this, arguments);
  }
  function _initializeModules() {
    _initializeModules = _async_to_generator(function* () {
      var _loop = function(id2, module2) {
        if (!moduleShouldNotBeHooked(id2)) {
          if (module2.isInitialized) {
            if (isModuleExportsBad(module2.publicModule.exports)) blacklistModule(id2);
            else {
              logger.warn(`Hooking already initialized module: ${id2}`);
              executeModuleSubscriptions.call(module2);
            }
            return "continue";
          }
          var origFac = module2.factory;
          module2.factory = (...args) => {
            var originalImportingId = importingModuleId;
            importingModuleId = id2;
            try {
              origFac(...args);
              if (isModuleExportsBad(module2.publicModule.exports)) return blacklistModule(id2);
              executeModuleSubscriptions.call(module2);
            } catch (error) {
              handleModuleInitializeError(id2, error);
            } finally {
              importingModuleId = originalImportingId;
            }
          };
        }
      };
      var cacheRestored = yield restoreCache();
      yield Promise.resolve().then(() => (init_patches(), patches_exports));
      function executeModuleSubscriptions() {
        var id2 = this.publicModule.id;
        var exports = this.publicModule.exports;
        var subs = subscriptions.get(id2);
        if (subs) for (var sub of subs) sub(id2, exports);
        for (var sub1 of allSubscriptionsSet) sub1(id2, exports);
      }
      for (var [id, module] of modules.entries()) _loop(id, module);
      logger.log("Importing index module...");
      __r(IndexMetroModuleId);
      if (!cacheRestored) requireAssetModules();
      saveCache();
    });
    return _initializeModules.apply(this, arguments);
  }
  function blacklistModule(id) {
    cacheModuleAsBlacklisted(id);
    saveCache();
  }
  function requireModule(id) {
    if (isModuleBlacklisted(id)) return;
    var module = modules.get(id);
    if (!module) return;
    if (module.isInitialized && !module.hasError) return module.publicModule.exports;
    var originalImportingId = id;
    importingModuleId = id;
    try {
      return __r(id);
    } catch (error) {
      handleModuleInitializeError(id, error);
    } finally {
      importingModuleId = originalImportingId;
    }
  }
  function isModuleBlacklisted(id) {
    return cache.exportsFlags[id] & MetroModuleFlags.Blacklisted;
  }
  function isModuleAssetRegistrar(id) {
    return cache.exportsFlags[id] & MetroModuleFlags.Asset;
  }
  function moduleShouldNotBeHooked(id) {
    return isModuleBlacklisted(id) || isModuleAssetRegistrar(id);
  }
  function* modulesForFinder(key, fullLookup = false) {
    var lookupCache = cache.lookupFlags[key];
    if (lookupCache?.flags && // Check if any modules were found
    !(lookupCache.flags & MetroModuleLookupFlags.NotFound) && // Pass immediately if it's not a full lookup, otherwise check if it's a full lookup
    (!fullLookup || lookupCache.flags & MetroModuleLookupFlags.FullLookup)) for (var id of indexedModuleIdsForLookup(key)) {
      if (isModuleBlacklisted(id)) continue;
      yield [
        id,
        requireModule(id)
      ];
    }
    else {
      for (var id1 of modules.keys()) {
        if (isModuleBlacklisted(id1)) continue;
        var exports = requireModule(id1);
        if (!exports) continue;
        yield [
          id1,
          exports
        ];
      }
    }
  }
  function isModuleExportsBad(exports) {
    return typeof exports === "undefined" || exports === null || exports === globalThis || exports[""] === null || exports.__proto__ === Object.prototype && Reflect.ownKeys(exports).length === 0;
  }
  var importingModuleId, allSubscriptionsSet, subscriptions, subscribeModule;
  var init_metro = __esm({
    "libraries/modules/src/metro/index.ts"() {
      "use strict";
      init_async_to_generator();
      init_caches();
      init_constants();
      init_shared();
      importingModuleId = -1;
      allSubscriptionsSet = /* @__PURE__ */ new Set();
      subscriptions = /* @__PURE__ */ new Map([
        [
          "all",
          allSubscriptionsSet
        ]
      ]);
      subscribeModule = Object.assign(function subscribeModule2(id, callback) {
        if (!subscriptions.has(id)) subscriptions.set(id, /* @__PURE__ */ new Set());
        var set = subscriptions.get(id);
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
          allSubscriptionsSet.add(callback);
          return () => allSubscriptionsSet.delete(callback);
        }
      });
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
          if (modules.get(moduleId)?.isInitialized) {
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
      init_src();
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
      init_caches();
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
      var path = `${FileModule.getConstants().CacheDirPath}/${MetroCacheRelativeFilePath}`;
      if (!(yield FileModule.fileExists(path))) return false;
      var savedCache = yield FileModule.readFile(path, "utf8");
      var storedCache = JSON.parse(savedCache);
      logger.log(`Cache found, validating... (compare: ${storedCache.v} === ${MetroCacheVersion}, ${storedCache.b} === ${ClientInfoModule.Build}, ${storedCache.t} === ${modules.size})`);
      if (storedCache.v !== MetroCacheVersion || storedCache.b !== ClientInfoModule.Build || storedCache.t !== modules.size) return false;
      logger.log(`Restoring cache of ${modules.size} modules`);
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
    for (var [id, module] of modules) {
      if (!module.dependencyMap) continue;
      if (module.dependencyMap.length === 1 && module.dependencyMap[0] === assetsRegistryModuleId) {
        assetsRegistryExporterModuleId = id;
        break;
      }
    }
    if (!assetsRegistryExporterModuleId) return void logger.warn("Unable to create asset cache, cannot find assets-registry exporter module ID, some assets may not load");
    logger.log("Importing all assets modules...");
    for (var [id1, module1] of modules) {
      if (!module1.dependencyMap) continue;
      if (module1.dependencyMap.length === 1 && module1.dependencyMap[0] === assetsRegistryExporterModuleId) requireModule(id1);
    }
  }
  function saveCache() {
    return _saveCache.apply(this, arguments);
  }
  function _saveCache() {
    _saveCache = _async_to_generator(function* () {
      if (savePending) return;
      savePending = true;
      yield FileModule.writeFile("cache", MetroCacheRelativeFilePath, JSON.stringify({
        v: MetroCacheVersion,
        b: ClientInfoModule.Build,
        t: cache.totalModules,
        e: cache.exportsFlags,
        l: cache.lookupFlags,
        a: cache.assetModules,
        p: cache.patchableModules
      }), "utf8");
      logger.log(`Cache saved (${cache.totalModules} modules)`);
      savePending = false;
    });
    return _saveCache.apply(this, arguments);
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
  var cache, savePending;
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
         * Registry for module file paths
         * #### This is in-memory.
         */
        moduleFilePaths: /* @__PURE__ */ new Map(),
        /**
         * The total modules count
         */
        totalModules: modules.size
      };
      savePending = false;
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
  var byProps, byMutableProp, byName, byDisplayName, byTypeName, byStoreName, byFilePath, bySingleProp, byQuery;
  var init_filters2 = __esm({
    "libraries/modules/src/filters.ts"() {
      "use strict";
      init_caches();
      init_filters();
      init_filters();
      byProps = createFilter((props, m2) => props.length === 0 ? m2[props[0]] : props.every((p) => m2[p]), (props) => `revenge.props(${props.join(",")})`);
      byMutableProp = createFilter(([prop], m2) => m2?.[prop] && !Object.getOwnPropertyDescriptor(m2, prop)?.get, (prop) => `revenge.mutableProp(${prop})`);
      byName = createFilter(([name], m2) => m2.name === name, (name) => `revenge.name(${name})`);
      byDisplayName = createFilter(([displayName], m2) => m2.displayName === displayName, (name) => `revenge.displayName(${name})`);
      byTypeName = createFilter(([typeName], m2) => m2.type?.name === typeName, (name) => `revenge.typeName(${name})`);
      byStoreName = createFilter(([name], m2) => m2.getName?.length === 0 && m2.getName() === name, (name) => `revenge.storeName(${name})`);
      byFilePath = createFilter(([path, returnDefaultExport], _3, id, isDefaultExport) => {
        return returnDefaultExport === isDefaultExport && cache.moduleFilePaths.get(id) === path;
      }, ([path, returnDefaultExport]) => `revenge.filePath(${path},${returnDefaultExport})`);
      bySingleProp = createFilter(([prop], m2) => m2[prop] && Object.keys(m2).length === 1, (prop) => `revenge.singleProp(${prop})`);
      byQuery = createFilter(([query, caseSensitive], m2) => {
        var applyStringTransformation = (str2) => caseSensitive ? str2 : str2.toLowerCase();
        var transformedQuery = applyStringTransformation(query);
        try {
          return m2.name?.toLowerCase()?.includes(transformedQuery) || m2.displayName?.toLowerCase()?.includes(transformedQuery) || m2.type?.name?.toLowerCase()?.includes(transformedQuery) || m2.getName?.length === 0 && m2.getName?.()?.toLowerCase()?.includes(transformedQuery) || cache.moduleFilePaths.get(m2.id)?.toLowerCase()?.includes(transformedQuery) || Object.keys(m2).some((k) => k.toLowerCase().includes(transformedQuery)) || Object.values(m2).some((v2) => String(v2).toLowerCase().includes(transformedQuery));
        } catch (e) {
          return false;
        }
      }, ([query, caseSensitive]) => `revenge.query(${caseSensitive ? query : query.toLowerCase()})`);
    }
  });

  // shims/deps.ts
  var deps_exports = {};
  __export(deps_exports, {
    default: () => deps_default
  });
  var lazyFindByProps, deps_default;
  var init_deps = __esm({
    "shims/deps.ts"() {
      "use strict";
      lazyFindByProps = (...props) => {
        var { findByProps: findByProps2 } = (init_finders(), __toCommonJS(finders_exports));
        return findByProps2(...props);
      };
      deps_default = {
        react: () => globalThis.React = lazyFindByProps("createElement"),
        "react-native": () => globalThis.ReactNative = lazyFindByProps("AppRegistry"),
        util: () => lazyFindByProps("inspect", "isNullOrUndefined"),
        moment: () => lazyFindByProps("isMoment"),
        "chroma-js": () => lazyFindByProps("brewer"),
        lodash: () => lazyFindByProps("forEachRight"),
        "@shopify/react-native-skia": () => lazyFindByProps("useFont"),
        "@shopify/flash-list": () => lazyFindByProps("FlashList")
      };
    }
  });

  // globals:react
  var require_react = __commonJS({
    "globals:react"(exports, module) {
      module.exports = (init_deps(), __toCommonJS(deps_exports)).default["react"]();
    }
  });

  // globals:react-native
  var require_react_native = __commonJS({
    "globals:react-native"(exports, module) {
      module.exports = (init_deps(), __toCommonJS(deps_exports)).default["react-native"]();
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
    ActionSheet: () => ActionSheet,
    ActionSheetCloseButton: () => ActionSheetCloseButton,
    ActionSheetRow: () => ActionSheetRow,
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
  var SafeAreaProvider, SafeAreaView, TwinButtons, Button, IconButton, ImageButton, FloatingActionButton, RowButton, ContextMenu, TableRow, TableSwitchRow, TableRowGroup, TableRowGroupTitle, TableRowIcon, TableRadioGroup, TableCheckboxRow, TableRadioRow, AlertModal, AlertActionButton, ActionSheet, ActionSheetCloseButton, ActionSheetRow, TextInput, TextField, TextArea, GhostInput, Card, Stack, Slider, Text, IntlLink, PressableScale, TableRowTrailingText, FormSwitch, FormRadio, FormCheckbox, FlashList, MasonryFlashList;
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
        ActionSheet: (
          // Sheets
          ActionSheet
        ),
        ActionSheetCloseButton,
        ActionSheetRow,
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

  // globals:lodash
  var require_lodash = __commonJS({
    "globals:lodash"(exports, module) {
      module.exports = (init_deps(), __toCommonJS(deps_exports)).default["lodash"]();
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
    React: () => import_react.default,
    ReactJSXRuntime: () => ReactJSXRuntime,
    ReactNative: () => import_react_native.default,
    TextStyleSheet: () => TextStyleSheet,
    _: () => _,
    actionSheets: () => actionSheets,
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
    links: () => links,
    messages: () => messages,
    nobleHashesUtils: () => nobleHashesUtils,
    openAlert: () => openAlert,
    semver: () => semver,
    showSimpleActionSheet: () => showSimpleActionSheet,
    stores: () => stores_exports,
    toasts: () => toasts,
    tokens: () => tokens,
    xxhash64: () => xxhash64
  });
  var import_react, import_react_native, constants, tokens, intl, intlModule, Logger, actionSheets, alerts, channels, links, clipboard, invites, commands, toasts, filePicker, messages, NavigationStack, NavigationNative, TextStyleSheet, createStyles, dismissAlerts, openAlert, showSimpleActionSheet, Flux, FluxDispatcher, assetsRegistry, ReactJSXRuntime, semver, xxhash64, nobleHashesUtils, _;
  var init_common = __esm({
    "libraries/modules/src/common/index.ts"() {
      "use strict";
      init_lazy();
      init_finders();
      import_react = __toESM(require_react(), 1);
      import_react_native = __toESM(require_react_native(), 1);
      init_components();
      init_stores();
      init_events();
      constants = findByProps("Fonts");
      tokens = findByProps("internal", "colors");
      intl = findByProps("intl");
      intlModule = findByProps("runtimeHashMessageKey");
      Logger = findByName("Logger");
      actionSheets = findByProps("hideActionSheet");
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
      showSimpleActionSheet = findSingleProp("showSimpleActionSheet");
      Flux = findByProps("connectStores");
      FluxDispatcher = findByProps("_interceptors");
      assetsRegistry = findByProps("registerAsset");
      ReactJSXRuntime = findByProps("jsx", "jsxs");
      semver = findByProps("SEMVER_SPEC_VERSION");
      xxhash64 = findByProps("XXH64");
      nobleHashesUtils = findByProps("randomBytes");
      _ = lazyValue(() => require_lodash());
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
  var init_src2 = __esm({
    "libraries/modules/src/index.ts"() {
      "use strict";
      init_async_to_generator();
      init_constants();
      init_filters2();
      init_finders();
      init_metro();
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
      init_src2();
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
      init_src();
      patcher2 = createPatcherInstance("revenge.react");
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
  var import_react_native2, styles, patched, persistentPatch, beforeCallbacks, afterCallbacks, patchCallback, patchJsxRuntimeIfNotPatched, unpatchIfNoListenersLeft, ReactJSXLibrary;
  var init_jsx = __esm({
    "libraries/react/src/jsx.ts"() {
      "use strict";
      init_common();
      init_shared2();
      import_react_native2 = __toESM(require_react_native(), 1);
      styles = import_react_native2.StyleSheet.create({
        hidden: {
          display: "none"
        }
      });
      patched = false;
      persistentPatch = import_react_native2.Platform.OS === "ios";
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
      SemanticColor = lazyValue(() => tokens.colors, {
        hint: "object"
      });
      RawColor = lazyValue(() => tokens.unsafe_rawColors, {
        hint: "object"
      });
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
        /* @__PURE__ */ jsxs(import_react_native3.View, {
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
                "c3bb6d2",
                true ? "-dirty" : "",
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
                /* @__PURE__ */ jsx(import_react_native3.ScrollView, {
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
    var ViewComponent = props.scrollable ? import_react_native3.ScrollView : import_react_native3.View;
    return /* @__PURE__ */ jsxs(Card, {
      ...props,
      style: [
        styles2.scrollView,
        ...Array.isArray(props.style) ? props.style : [
          props.style
        ]
      ],
      children: [
        /* @__PURE__ */ jsxs(import_react_native3.View, {
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
        var ln2 = null;
        var col = null;
        if (match[3] && match[4]) {
          at = match[1];
          path = match[2];
          ln2 = Number(match[3]);
          col = Number(match[4]);
        } else {
          at = match[5];
          path = match[6];
        }
        if (path === IndexBundleFilePath) path = "(Discord)";
        frames.push({
          at,
          file: path,
          line: ln2,
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
  var import_react_native3, useErrorBoundaryStyles, styles2, IndexBundleFilePath, StackFrameRegex;
  var init_ErrorBoundaryScreen = __esm({
    "libraries/app/src/components/ErrorBoundaryScreen.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_common();
      init_components();
      init_native();
      init_colors();
      init_errors();
      import_react_native3 = __toESM(require_react_native(), 1);
      useErrorBoundaryStyles = createStyles({
        view: {
          backgroundColor: SemanticColor.BG_BASE_SECONDARY,
          paddingHorizontal: 16,
          paddingVertical: 24,
          flex: 1,
          gap: 16
        }
      });
      styles2 = import_react_native3.StyleSheet.create({
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
  var init_src3 = __esm({
    "libraries/app/src/index.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_common();
      init_finders();
      init_native();
      init_src();
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
      unpatchRunApplication = patcher3.after(import_react_native.default.AppRegistry, "runApplication", () => {
        unpatchRunApplication();
        logger2.log("AppRegistry.runApplication called");
        for (var callback of initializeCallbacks) callback();
        logger2.log("Initialized callbacks called");
      }, "runInitializeCallbacks");
      unpatchCreateElement = patcher3.after(import_react.default, "createElement", () => {
        unpatchCreateElement();
        logger2.log("React.createElement called");
        for (var callback of renderCallbacks) callback();
        logger2.log("Rendered callbacks called");
      }, "runRenderCallbacks");
      afterErrorBoundaryPatchable = import_react_native.default.Platform.OS === "ios" ? afterAppRender : afterAppInitialize;
      afterErrorBoundaryPatchable(/* @__PURE__ */ function() {
        var _patchErrorBoundary = _async_to_generator(function* () {
          if (import_react_native.default.Platform.OS === "ios") ReactJSXLibrary.afterElementCreate("PortalKeyboardPlaceholderInner", () => null);
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
  var init_src4 = __esm({
    "libraries/assets/src/index.ts"() {
      "use strict";
      init_common();
      init_finders();
      init_metro();
      init_src();
      init_caches();
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
  function _assert_this_initialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
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
  function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) return call;
    return _assert_this_initialized(self);
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

  // node_modules/@noble/hashes/esm/_assert.js
  function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
  }
  function bytes(b5, ...lengths) {
    if (!isBytes(b5)) throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b5.length)) throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b5.length}`);
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
            value: function process(view, offset) {
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
  var P, N, Gx, Gy, CURVE, err, str, isu8, au8, u8n, toU8, mod, isPoint, Point, G, I, padh, b2h, h2b, n2b_32LE, b2n_LE, concatB, invert, pow2, pow_2_252_3, RM1, uvRatio, modL_LE, _shaS, sha512a, sha512s, hash2extK, getExtendedPublicKey, getPublicKey, _sign, sign, dvo, _verify, verify, cr, etc, W, precompute, Gpows, wNAF;
  var init_ed25519 = __esm({
    "node_modules/@noble/ed25519/index.js"() {
      init_async_to_generator();
      init_class_call_check();
      init_create_class();
      P = 2n ** 255n - 19n;
      N = 2n ** 252n + 27742317777372353535851937790883648493n;
      Gx = 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an;
      Gy = 0x6666666666666666666666666666666666666666666666666666666666666658n;
      CURVE = {
        a: -1n,
        d: 37095705934669439343138083508754565189542113879843219016388785533085940283555n,
        p: P,
        n: N,
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
      mod = (a, b5 = P) => {
        var r = a % b5;
        return r >= 0n ? r : b5 + r;
      };
      isPoint = (p) => p instanceof Point ? p : err("Point expected");
      Point = /* @__PURE__ */ function() {
        "use strict";
        function Point2(ex, ey, ez, et2) {
          _class_call_check(this, Point2);
          this.ex = ex;
          this.ey = ey;
          this.ez = ez;
          this.et = et2;
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
              return this.equals(I);
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
              if (n === 0n) return safe === true ? err("cannot multiply by 0") : I;
              if (!(typeof n === "bigint" && 0n < n && n < N)) err("invalid scalar, must be < L");
              if (!safe && this.is0() || n === 1n) return this;
              if (this.equals(G)) return wNAF(n).p;
              var p = I, f = G;
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
              var p = this.mul(N / 2n, false).double();
              if (N % 2n) p = p.add(this);
              return p.is0();
            }
          },
          {
            key: "toAffine",
            value: function toAffine() {
              var { ex: x2, ey: y2, ez: z3 } = this;
              if (this.equals(I)) return {
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
              var b5 = n2b_32LE(y2);
              b5[31] |= x2 & 1n ? 128 : 0;
              return b5;
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
              if (!zip215 && !(0n <= y2 && y2 < P)) err("bad y coord 2");
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
      ({ BASE: G, ZERO: I } = Point);
      padh = (num, pad) => num.toString(16).padStart(pad, "0");
      b2h = (b5) => Array.from(b5).map((e) => padh(e, 2)).join("");
      h2b = (hex) => {
        var l = hex.length;
        if (!str(hex) || l % 2) err("hex invalid 1");
        var arr = u8n(l / 2);
        for (var i = 0; i < arr.length; i++) {
          var j = i * 2;
          var h = hex.slice(j, j + 2);
          var b5 = Number.parseInt(h, 16);
          if (Number.isNaN(b5) || b5 < 0) err("hex invalid 2");
          arr[i] = b5;
        }
        return arr;
      };
      n2b_32LE = (num) => h2b(padh(num, 32 * 2)).reverse();
      b2n_LE = (b5) => BigInt("0x" + b2h(u8n(au8(b5)).reverse()));
      concatB = (...arrs) => {
        var r = u8n(arrs.reduce((sum, a) => sum + au8(a).length, 0));
        var pad = 0;
        arrs.forEach((a) => {
          r.set(a, pad);
          pad += a.length;
        });
        return r;
      };
      invert = (num, md = P) => {
        if (num === 0n || md <= 0n) err("no inverse n=" + num + " mod=" + md);
        var a = mod(num, md), b5 = md, x2 = 0n, y2 = 1n, u = 1n, v2 = 0n;
        while (a !== 0n) {
          var q3 = b5 / a, r = b5 % a;
          var m2 = x2 - u * q3, n = y2 - v2 * q3;
          b5 = a, a = r, x2 = u, y2 = v2, u = m2, v2 = n;
        }
        return b5 === 1n ? mod(x2, md) : err("no inverse");
      };
      pow2 = (x2, power) => {
        var r = x2;
        while (power-- > 0n) {
          r *= r;
          r %= P;
        }
        return r;
      };
      pow_2_252_3 = (x2) => {
        var x22 = x2 * x2 % P;
        var b23 = x22 * x2 % P;
        var b43 = pow2(b23, 2n) * b23 % P;
        var b5 = pow2(b43, 1n) * x2 % P;
        var b10 = pow2(b5, 5n) * b5 % P;
        var b20 = pow2(b10, 10n) * b10 % P;
        var b40 = pow2(b20, 20n) * b20 % P;
        var b80 = pow2(b40, 40n) * b40 % P;
        var b160 = pow2(b80, 80n) * b80 % P;
        var b240 = pow2(b160, 80n) * b80 % P;
        var b250 = pow2(b240, 10n) * b10 % P;
        var pow_p_5_8 = pow2(b250, 2n) * x2 % P;
        return {
          pow_p_5_8,
          b2: b23
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
      modL_LE = (hash) => mod(b2n_LE(hash), N);
      sha512a = (...m2) => etc.sha512Async(...m2);
      sha512s = (...m2) => typeof _shaS === "function" ? _shaS(...m2) : err("etc.sha512Sync not set");
      hash2extK = (hashed) => {
        var head = hashed.slice(0, 32);
        head[0] &= 248;
        head[31] &= 127;
        head[31] |= 64;
        var prefix = hashed.slice(32, 64);
        var scalar = modL_LE(head);
        var point = G.mul(scalar);
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
        var R2 = G.mul(r).toRawBytes();
        var hashable = concatB(R2, P4, msg);
        var finish = (hashed) => {
          var S2 = mod(r + modL_LE(hashed) * s, N);
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
          SB = G.mul(s, false);
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
      W = 8;
      precompute = () => {
        var points = [];
        var windows = 256 / W + 1;
        var p = G, b5 = p;
        for (var w = 0; w < windows; w++) {
          b5 = p;
          points.push(b5);
          for (var i = 1; i < 2 ** (W - 1); i++) {
            b5 = b5.add(p);
            points.push(b5);
          }
          p = b5.double();
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
        var p = I, f = G;
        var windows = 1 + 256 / W;
        var wsize = 2 ** (W - 1);
        var mask = BigInt(2 ** W - 1);
        var maxNum = 2 ** W;
        var shiftBy = BigInt(W);
        for (var w = 0; w < windows; w++) {
          var off = w * wsize;
          var wbits3 = Number(n & mask);
          n >>= shiftBy;
          if (wbits3 > wsize) {
            wbits3 -= maxNum;
            n += 1n;
          }
          var off1 = off, off2 = off + Math.abs(wbits3) - 1;
          var cnd1 = w % 2 !== 0, cnd2 = wbits3 < 0;
          if (wbits3 === 0) {
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

  // node_modules/fflate/esm/browser.js
  function deflateSync(data, opts) {
    return dopt(data, opts || {}, 0, 0);
  }
  function inflateSync(data, opts) {
    return inflt(data, {
      i: 2
    }, opts && opts.out, opts && opts.dictionary);
  }
  function strToU8(str2, latin1) {
    if (latin1) {
      var ar_1 = new u8(str2.length);
      for (var i = 0; i < str2.length; ++i) ar_1[i] = str2.charCodeAt(i);
      return ar_1;
    }
    if (te) return te.encode(str2);
    var l = str2.length;
    var ar = new u8(str2.length + (str2.length >> 1));
    var ai = 0;
    var w = function w2(v2) {
      ar[ai++] = v2;
    };
    for (var i = 0; i < l; ++i) {
      if (ai + 5 > ar.length) {
        var n = new u8(ai + 8 + (l - i << 1));
        n.set(ar);
        ar = n;
      }
      var c2 = str2.charCodeAt(i);
      if (c2 < 128 || latin1) w(c2);
      else if (c2 < 2048) w(192 | c2 >> 6), w(128 | c2 & 63);
      else if (c2 > 55295 && c2 < 57344) c2 = 65536 + (c2 & 1023 << 10) | str2.charCodeAt(++i) & 1023, w(240 | c2 >> 18), w(128 | c2 >> 12 & 63), w(128 | c2 >> 6 & 63), w(128 | c2 & 63);
      else w(224 | c2 >> 12), w(128 | c2 >> 6 & 63), w(128 | c2 & 63);
    }
    return slc(ar, 0, ai);
  }
  function strFromU8(dat, latin1) {
    if (latin1) {
      var r = "";
      for (var i = 0; i < dat.length; i += 16384) r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
      return r;
    } else if (td) {
      return td.decode(dat);
    } else {
      var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
      if (r.length) err2(8);
      return s;
    }
  }
  function zipSync(data, opts) {
    if (!opts) opts = {};
    var r = {};
    var files = [];
    fltn(data, "", r, opts);
    var o = 0;
    var tot = 0;
    for (var fn in r) {
      var _a2 = r[fn], file = _a2[0], p = _a2[1];
      var compression = p.level == 0 ? 0 : 8;
      var f = strToU8(fn), s = f.length;
      var com = p.comment, m2 = com && strToU8(com), ms = m2 && m2.length;
      var exl = exfl(p.extra);
      if (s > 65535) err2(11);
      var d = compression ? deflateSync(file, p) : file, l = d.length;
      var c2 = crc();
      c2.p(file);
      files.push(mrg(p, {
        size: file.length,
        crc: c2.d(),
        c: d,
        f,
        m: m2,
        u: s != fn.length || m2 && com.length != ms,
        o,
        compression
      }));
      o += 30 + s + exl + l;
      tot += 76 + 2 * (s + exl) + (ms || 0) + l;
    }
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    for (var i = 0; i < files.length; ++i) {
      var f = files[i];
      wzh(out, f.o, f, f.f, f.u, f.c.length);
      var badd = 30 + f.f.length + exfl(f.extra);
      out.set(f.c, f.o + badd);
      wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
    }
    wzf(out, o, files.length, cdl, oe);
    return out;
  }
  function unzipSync(data, opts) {
    var files = {};
    var e = data.length - 22;
    for (; b4(data, e) != 101010256; --e) {
      if (!e || data.length - e > 65558) err2(13);
    }
    ;
    var c2 = b2(data, e + 8);
    if (!c2) return {};
    var o = b4(data, e + 16);
    var z3 = o == 4294967295 || c2 == 65535;
    if (z3) {
      var ze = b4(data, e - 12);
      z3 = b4(data, ze) == 101075792;
      if (z3) {
        c2 = b4(data, ze + 32);
        o = b4(data, ze + 48);
      }
    }
    var fltr = opts && opts.filter;
    for (var i = 0; i < c2; ++i) {
      var _a2 = zh(data, o, z3), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b5 = slzh(data, off);
      o = no;
      if (!fltr || fltr({
        name: fn,
        size: sc,
        originalSize: su,
        compression: c_2
      })) {
        if (!c_2) files[fn] = slc(data, b5, b5 + sc);
        else if (c_2 == 8) files[fn] = inflateSync(data.subarray(b5, b5 + sc), {
          out: new u8(su)
        });
        else err2(14, "unknown compression type " + c_2);
      }
    }
    return files;
  }
  var u8, u16, i32, fleb, fdeb, clim, freb, _a, fl, revfl, _b, fd, revfd, rev, x2, i, hMap, flt, i, i, i, i, fdt, i, flm, flrm, fdm, fdrm, max, bits, bits16, shft, slc, ec, err2, inflt, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, deo, et, dflt, crct, crc, dopt, mrg, b2, b4, b8, wbytes, fltn, te, td, tds, dutf8, slzh, zh, z64e, exfl, wzh, wzf;
  var init_browser = __esm({
    "node_modules/fflate/esm/browser.js"() {
      u8 = Uint8Array;
      u16 = Uint16Array;
      i32 = Int32Array;
      fleb = new u8([
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
        /* unused */
        0,
        0,
        /* impossible */
        0
      ]);
      fdeb = new u8([
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
        /* unused */
        0,
        0
      ]);
      clim = new u8([
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
      ]);
      freb = function freb2(eb, start) {
        var b5 = new u16(31);
        for (var i = 0; i < 31; ++i) {
          b5[i] = start += 1 << eb[i - 1];
        }
        var r = new i32(b5[30]);
        for (var i = 1; i < 30; ++i) {
          for (var j = b5[i]; j < b5[i + 1]; ++j) {
            r[j] = j - b5[i] << 5 | i;
          }
        }
        return {
          b: b5,
          r
        };
      };
      _a = freb(fleb, 2);
      fl = _a.b;
      revfl = _a.r;
      fl[28] = 258, revfl[258] = 28;
      _b = freb(fdeb, 0);
      fd = _b.b;
      revfd = _b.r;
      rev = new u16(32768);
      for (i = 0; i < 32768; ++i) {
        x2 = (i & 43690) >> 1 | (i & 21845) << 1;
        x2 = (x2 & 52428) >> 2 | (x2 & 13107) << 2;
        x2 = (x2 & 61680) >> 4 | (x2 & 3855) << 4;
        rev[i] = ((x2 & 65280) >> 8 | (x2 & 255) << 8) >> 1;
      }
      hMap = function hMap2(cd, mb, r) {
        var s = cd.length;
        var i = 0;
        var l = new u16(mb);
        for (; i < s; ++i) {
          if (cd[i]) ++l[cd[i] - 1];
        }
        var le = new u16(mb);
        for (i = 1; i < mb; ++i) {
          le[i] = le[i - 1] + l[i - 1] << 1;
        }
        var co;
        if (r) {
          co = new u16(1 << mb);
          var rvb = 15 - mb;
          for (i = 0; i < s; ++i) {
            if (cd[i]) {
              var sv = i << 4 | cd[i];
              var r_1 = mb - cd[i];
              var v2 = le[cd[i] - 1]++ << r_1;
              for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
                co[rev[v2] >> rvb] = sv;
              }
            }
          }
        } else {
          co = new u16(s);
          for (i = 0; i < s; ++i) {
            if (cd[i]) {
              co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
            }
          }
        }
        return co;
      };
      flt = new u8(288);
      for (i = 0; i < 144; ++i) flt[i] = 8;
      for (i = 144; i < 256; ++i) flt[i] = 9;
      for (i = 256; i < 280; ++i) flt[i] = 7;
      for (i = 280; i < 288; ++i) flt[i] = 8;
      fdt = new u8(32);
      for (i = 0; i < 32; ++i) fdt[i] = 5;
      flm = /* @__PURE__ */ hMap(flt, 9, 0);
      flrm = /* @__PURE__ */ hMap(flt, 9, 1);
      fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
      fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
      max = function max2(a) {
        var m2 = a[0];
        for (var i = 1; i < a.length; ++i) {
          if (a[i] > m2) m2 = a[i];
        }
        return m2;
      };
      bits = function bits2(d, p, m2) {
        var o = p / 8 | 0;
        return (d[o] | d[o + 1] << 8) >> (p & 7) & m2;
      };
      bits16 = function bits162(d, p) {
        var o = p / 8 | 0;
        return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
      };
      shft = function shft2(p) {
        return (p + 7) / 8 | 0;
      };
      slc = function slc2(v2, s, e) {
        if (s == null || s < 0) s = 0;
        if (e == null || e > v2.length) e = v2.length;
        return new u8(v2.subarray(s, e));
      };
      ec = [
        "unexpected EOF",
        "invalid block type",
        "invalid length/literal",
        "invalid distance",
        "stream finished",
        "no stream handler",
        ,
        "no callback",
        "invalid UTF-8 data",
        "extra field too long",
        "date not in range 1980-2099",
        "filename too long",
        "stream finishing",
        "invalid zip data"
      ];
      err2 = function err1(ind, msg, nt) {
        var e = new Error(msg || ec[ind]);
        e.code = ind;
        if (Error.captureStackTrace) Error.captureStackTrace(e, err2);
        if (!nt) throw e;
        return e;
      };
      inflt = function inflt2(dat, st, buf, dict) {
        var sl = dat.length, dl = dict ? dict.length : 0;
        if (!sl || st.f && !st.l) return buf || new u8(0);
        var noBuf = !buf;
        var resize = noBuf || st.i != 2;
        var noSt = st.i;
        if (noBuf) buf = new u8(sl * 3);
        var cbuf = function cbuf2(l2) {
          var bl = buf.length;
          if (l2 > bl) {
            var nbuf = new u8(Math.max(bl * 2, l2));
            nbuf.set(buf);
            buf = nbuf;
          }
        };
        var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
        var tbts = sl * 8;
        do {
          if (!lm) {
            final = bits(dat, pos, 1);
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
              var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
              if (t > sl) {
                if (noSt) err2(0);
                break;
              }
              if (resize) cbuf(bt + l);
              buf.set(dat.subarray(s, t), bt);
              st.b = bt += l, st.p = pos = t * 8, st.f = final;
              continue;
            } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
              var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
              var tl = hLit + bits(dat, pos + 5, 31) + 1;
              pos += 14;
              var ldt = new u8(tl);
              var clt = new u8(19);
              for (var i = 0; i < hcLen; ++i) {
                clt[clim[i]] = bits(dat, pos + i * 3, 7);
              }
              pos += hcLen * 3;
              var clb = max(clt), clbmsk = (1 << clb) - 1;
              var clm = hMap(clt, clb, 1);
              for (var i = 0; i < tl; ) {
                var r = clm[bits(dat, pos, clbmsk)];
                pos += r & 15;
                var s = r >> 4;
                if (s < 16) {
                  ldt[i++] = s;
                } else {
                  var c2 = 0, n = 0;
                  if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i - 1];
                  else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
                  else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
                  while (n--) ldt[i++] = c2;
                }
              }
              var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
              lbt = max(lt);
              dbt = max(dt);
              lm = hMap(lt, lbt, 1);
              dm = hMap(dt, dbt, 1);
            } else err2(1);
            if (pos > tbts) {
              if (noSt) err2(0);
              break;
            }
          }
          if (resize) cbuf(bt + 131072);
          var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
          var lpos = pos;
          for (; ; lpos = pos) {
            var c2 = lm[bits16(dat, pos) & lms], sym = c2 >> 4;
            pos += c2 & 15;
            if (pos > tbts) {
              if (noSt) err2(0);
              break;
            }
            if (!c2) err2(2);
            if (sym < 256) buf[bt++] = sym;
            else if (sym == 256) {
              lpos = pos, lm = null;
              break;
            } else {
              var add2 = sym - 254;
              if (sym > 264) {
                var i = sym - 257, b5 = fleb[i];
                add2 = bits(dat, pos, (1 << b5) - 1) + fl[i];
                pos += b5;
              }
              var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
              if (!d) err2(3);
              pos += d & 15;
              var dt = fd[dsym];
              if (dsym > 3) {
                var b5 = fdeb[dsym];
                dt += bits16(dat, pos) & (1 << b5) - 1, pos += b5;
              }
              if (pos > tbts) {
                if (noSt) err2(0);
                break;
              }
              if (resize) cbuf(bt + 131072);
              var end = bt + add2;
              if (bt < dt) {
                var shift = dl - dt, dend = Math.min(dt, end);
                if (shift + bt < 0) err2(3);
                for (; bt < dend; ++bt) buf[bt] = dict[shift + bt];
              }
              for (; bt < end; ++bt) buf[bt] = buf[bt - dt];
            }
          }
          st.l = lm, st.p = lpos, st.b = bt, st.f = final;
          if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
        } while (!final);
        return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
      };
      wbits = function wbits2(d, p, v2) {
        v2 <<= p & 7;
        var o = p / 8 | 0;
        d[o] |= v2;
        d[o + 1] |= v2 >> 8;
      };
      wbits16 = function wbits162(d, p, v2) {
        v2 <<= p & 7;
        var o = p / 8 | 0;
        d[o] |= v2;
        d[o + 1] |= v2 >> 8;
        d[o + 2] |= v2 >> 16;
      };
      hTree = function hTree2(d, mb) {
        var t = [];
        for (var i = 0; i < d.length; ++i) {
          if (d[i]) t.push({
            s: i,
            f: d[i]
          });
        }
        var s = t.length;
        var t2 = t.slice();
        if (!s) return {
          t: et,
          l: 0
        };
        if (s == 1) {
          var v2 = new u8(t[0].s + 1);
          v2[t[0].s] = 1;
          return {
            t: v2,
            l: 1
          };
        }
        t.sort(function(a, b5) {
          return a.f - b5.f;
        });
        t.push({
          s: -1,
          f: 25001
        });
        var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
        t[0] = {
          s: -1,
          f: l.f + r.f,
          l,
          r
        };
        while (i1 != s - 1) {
          l = t[t[i0].f < t[i2].f ? i0++ : i2++];
          r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
          t[i1++] = {
            s: -1,
            f: l.f + r.f,
            l,
            r
          };
        }
        var maxSym = t2[0].s;
        for (var i = 1; i < s; ++i) {
          if (t2[i].s > maxSym) maxSym = t2[i].s;
        }
        var tr = new u16(maxSym + 1);
        var mbt = ln(t[i1 - 1], tr, 0);
        if (mbt > mb) {
          var i = 0, dt = 0;
          var lft = mbt - mb, cst = 1 << lft;
          t2.sort(function(a, b5) {
            return tr[b5.s] - tr[a.s] || a.f - b5.f;
          });
          for (; i < s; ++i) {
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
              dt += cst - (1 << mbt - tr[i2_1]);
              tr[i2_1] = mb;
            } else break;
          }
          dt >>= lft;
          while (dt > 0) {
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
            else ++i;
          }
          for (; i >= 0 && dt; --i) {
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
              --tr[i2_3];
              ++dt;
            }
          }
          mbt = mb;
        }
        return {
          t: new u8(tr),
          l: mbt
        };
      };
      ln = function ln1(n, l, d) {
        return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
      };
      lc = function lc2(c2) {
        var s = c2.length;
        while (s && !c2[--s]) ;
        var cl = new u16(++s);
        var cli = 0, cln = c2[0], cls = 1;
        var w = function w2(v2) {
          cl[cli++] = v2;
        };
        for (var i = 1; i <= s; ++i) {
          if (c2[i] == cln && i != s) ++cls;
          else {
            if (!cln && cls > 2) {
              for (; cls > 138; cls -= 138) w(32754);
              if (cls > 2) {
                w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
                cls = 0;
              }
            } else if (cls > 3) {
              w(cln), --cls;
              for (; cls > 6; cls -= 6) w(8304);
              if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
            }
            while (cls--) w(cln);
            cls = 1;
            cln = c2[i];
          }
        }
        return {
          c: cl.subarray(0, cli),
          n: s
        };
      };
      clen = function clen2(cf, cl) {
        var l = 0;
        for (var i = 0; i < cl.length; ++i) l += cf[i] * cl[i];
        return l;
      };
      wfblk = function wfblk2(out, pos, dat) {
        var s = dat.length;
        var o = shft(pos + 2);
        out[o] = s & 255;
        out[o + 1] = s >> 8;
        out[o + 2] = out[o] ^ 255;
        out[o + 3] = out[o + 1] ^ 255;
        for (var i = 0; i < s; ++i) out[o + i + 4] = dat[i];
        return (o + 4 + s) * 8;
      };
      wblk = function wblk2(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
        wbits(out, p++, final);
        ++lf[256];
        var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
        var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
        var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
        var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
        var lcfreq = new u16(19);
        for (var i = 0; i < lclt.length; ++i) ++lcfreq[lclt[i] & 31];
        for (var i = 0; i < lcdt.length; ++i) ++lcfreq[lcdt[i] & 31];
        var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
        var nlcc = 19;
        for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc) ;
        var flen = bl + 5 << 3;
        var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
        var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
        if (bs >= 0 && flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
        var lm, ll, dm, dl;
        wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
        if (dtlen < ftlen) {
          lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
          var llm = hMap(lct, mlcb, 0);
          wbits(out, p, nlc - 257);
          wbits(out, p + 5, ndc - 1);
          wbits(out, p + 10, nlcc - 4);
          p += 14;
          for (var i = 0; i < nlcc; ++i) wbits(out, p + 3 * i, lct[clim[i]]);
          p += 3 * nlcc;
          var lcts = [
            lclt,
            lcdt
          ];
          for (var it = 0; it < 2; ++it) {
            var clct = lcts[it];
            for (var i = 0; i < clct.length; ++i) {
              var len = clct[i] & 31;
              wbits(out, p, llm[len]), p += lct[len];
              if (len > 15) wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
            }
          }
        } else {
          lm = flm, ll = flt, dm = fdm, dl = fdt;
        }
        for (var i = 0; i < li; ++i) {
          var sym = syms[i];
          if (sym > 255) {
            var len = sym >> 18 & 31;
            wbits16(out, p, lm[len + 257]), p += ll[len + 257];
            if (len > 7) wbits(out, p, sym >> 23 & 31), p += fleb[len];
            var dst = sym & 31;
            wbits16(out, p, dm[dst]), p += dl[dst];
            if (dst > 3) wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
          } else {
            wbits16(out, p, lm[sym]), p += ll[sym];
          }
        }
        wbits16(out, p, lm[256]);
        return p + ll[256];
      };
      deo = /* @__PURE__ */ new i32([
        65540,
        131080,
        131088,
        131104,
        262176,
        1048704,
        1048832,
        2114560,
        2117632
      ]);
      et = /* @__PURE__ */ new u8(0);
      dflt = function dflt2(dat, lvl, plvl, pre, post, st) {
        var s = st.z || dat.length;
        var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
        var w = o.subarray(pre, o.length - post);
        var lst = st.l;
        var pos = (st.r || 0) & 7;
        if (lvl) {
          if (pos) w[0] = st.r >> 3;
          var opt = deo[lvl - 1];
          var n = opt >> 13, c2 = opt & 8191;
          var msk_1 = (1 << plvl) - 1;
          var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
          var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
          var hsh = function hsh2(i2) {
            return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
          };
          var syms = new i32(25e3);
          var lf = new u16(288), df = new u16(32);
          var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
          for (; i + 2 < s; ++i) {
            var hv = hsh(i);
            var imod = i & 32767, pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            if (wi <= i) {
              var rem = s - i;
              if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
                pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                li = lc_1 = eb = 0, bs = i;
                for (var j = 0; j < 286; ++j) lf[j] = 0;
                for (var j = 0; j < 30; ++j) df[j] = 0;
              }
              var l = 2, d = 0, ch_1 = c2, dif = imod - pimod & 32767;
              if (rem > 2 && hv == hsh(i - dif)) {
                var maxn = Math.min(n, rem) - 1;
                var maxd = Math.min(32767, i);
                var ml = Math.min(258, rem);
                while (dif <= maxd && --ch_1 && imod != pimod) {
                  if (dat[i + l] == dat[i + l - dif]) {
                    var nl = 0;
                    for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl) ;
                    if (nl > l) {
                      l = nl, d = dif;
                      if (nl > maxn) break;
                      var mmd = Math.min(dif, nl - 2);
                      var md = 0;
                      for (var j = 0; j < mmd; ++j) {
                        var ti = i - dif + j & 32767;
                        var pti = prev[ti];
                        var cd = ti - pti & 32767;
                        if (cd > md) md = cd, pimod = ti;
                      }
                    }
                  }
                  imod = pimod, pimod = prev[imod];
                  dif += imod - pimod & 32767;
                }
              }
              if (d) {
                syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
                var lin = revfl[l] & 31, din = revfd[d] & 31;
                eb += fleb[lin] + fdeb[din];
                ++lf[257 + lin];
                ++df[din];
                wi = i + l;
                ++lc_1;
              } else {
                syms[li++] = dat[i];
                ++lf[dat[i]];
              }
            }
          }
          for (i = Math.max(i, wi); i < s; ++i) {
            syms[li++] = dat[i];
            ++lf[dat[i]];
          }
          pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
          if (!lst) {
            st.r = pos & 7 | w[pos / 8 | 0] << 3;
            pos -= 7;
            st.h = head, st.p = prev, st.i = i, st.w = wi;
          }
        } else {
          for (var i = st.w || 0; i < s + lst; i += 65535) {
            var e = i + 65535;
            if (e >= s) {
              w[pos / 8 | 0] = lst;
              e = s;
            }
            pos = wfblk(w, pos + 1, dat.subarray(i, e));
          }
          st.i = s;
        }
        return slc(o, 0, pre + shft(pos) + post);
      };
      crct = /* @__PURE__ */ function() {
        var t = new Int32Array(256);
        for (var i = 0; i < 256; ++i) {
          var c2 = i, k = 9;
          while (--k) c2 = (c2 & 1 && -306674912) ^ c2 >>> 1;
          t[i] = c2;
        }
        return t;
      }();
      crc = function crc2() {
        var c2 = -1;
        return {
          p: function p(d) {
            var cr2 = c2;
            for (var i = 0; i < d.length; ++i) cr2 = crct[cr2 & 255 ^ d[i]] ^ cr2 >>> 8;
            c2 = cr2;
          },
          d: function d() {
            return ~c2;
          }
        };
      };
      dopt = function dopt2(dat, opt, pre, post, st) {
        if (!st) {
          st = {
            l: 1
          };
          if (opt.dictionary) {
            var dict = opt.dictionary.subarray(-32768);
            var newDat = new u8(dict.length + dat.length);
            newDat.set(dict);
            newDat.set(dat, dict.length);
            dat = newDat;
            st.w = dict.length;
          }
        }
        return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
      };
      mrg = function mrg2(a, b5) {
        var o = {};
        for (var k in a) o[k] = a[k];
        for (var k in b5) o[k] = b5[k];
        return o;
      };
      b2 = function b22(d, b5) {
        return d[b5] | d[b5 + 1] << 8;
      };
      b4 = function b42(d, b5) {
        return (d[b5] | d[b5 + 1] << 8 | d[b5 + 2] << 16 | d[b5 + 3] << 24) >>> 0;
      };
      b8 = function b82(d, b5) {
        return b4(d, b5) + b4(d, b5 + 4) * 4294967296;
      };
      wbytes = function wbytes2(d, b5, v2) {
        for (; v2; ++b5) d[b5] = v2, v2 >>>= 8;
      };
      fltn = function fltn1(d, p, t, o) {
        for (var k in d) {
          var val = d[k], n = p + k, op = o;
          if (Array.isArray(val)) op = mrg(o, val[1]), val = val[0];
          if (val instanceof u8) t[n] = [
            val,
            op
          ];
          else {
            t[n += "/"] = [
              new u8(0),
              op
            ];
            fltn(val, n, t, o);
          }
        }
      };
      te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
      td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
      tds = 0;
      try {
        td.decode(et, {
          stream: true
        });
        tds = 1;
      } catch (e) {
      }
      dutf8 = function dutf82(d) {
        for (var r = "", i = 0; ; ) {
          var c2 = d[i++];
          var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
          if (i + eb > d.length) return {
            s: r,
            r: slc(d, i - 1)
          };
          if (!eb) r += String.fromCharCode(c2);
          else if (eb == 3) {
            c2 = ((c2 & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
          } else if (eb & 1) r += String.fromCharCode((c2 & 31) << 6 | d[i++] & 63);
          else r += String.fromCharCode((c2 & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
        }
      };
      slzh = function slzh2(d, b5) {
        return b5 + 30 + b2(d, b5 + 26) + b2(d, b5 + 28);
      };
      zh = function zh2(d, b5, z3) {
        var fnl = b2(d, b5 + 28), fn = strFromU8(d.subarray(b5 + 46, b5 + 46 + fnl), !(b2(d, b5 + 8) & 2048)), es = b5 + 46 + fnl, bs = b4(d, b5 + 20);
        var _a2 = z3 && bs == 4294967295 ? z64e(d, es) : [
          bs,
          b4(d, b5 + 24),
          b4(d, b5 + 42)
        ], sc = _a2[0], su = _a2[1], off = _a2[2];
        return [
          b2(d, b5 + 10),
          sc,
          su,
          fn,
          es + b2(d, b5 + 30) + b2(d, b5 + 32),
          off
        ];
      };
      z64e = function z64e2(d, b5) {
        for (; b2(d, b5) != 1; b5 += 4 + b2(d, b5 + 2)) ;
        return [
          b8(d, b5 + 12),
          b8(d, b5 + 4),
          b8(d, b5 + 20)
        ];
      };
      exfl = function exfl2(ex) {
        var le = 0;
        if (ex) {
          for (var k in ex) {
            var l = ex[k].length;
            if (l > 65535) err2(9);
            le += l + 4;
          }
        }
        return le;
      };
      wzh = function wzh2(d, b5, f, fn, u, c2, ce, co) {
        var fl2 = fn.length, ex = f.extra, col = co && co.length;
        var exl = exfl(ex);
        wbytes(d, b5, ce != null ? 33639248 : 67324752), b5 += 4;
        if (ce != null) d[b5++] = 20, d[b5++] = f.os;
        d[b5] = 20, b5 += 2;
        d[b5++] = f.flag << 1 | (c2 < 0 && 8), d[b5++] = u && 8;
        d[b5++] = f.compression & 255, d[b5++] = f.compression >> 8;
        var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y2 = dt.getFullYear() - 1980;
        if (y2 < 0 || y2 > 119) err2(10);
        wbytes(d, b5, y2 << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b5 += 4;
        if (c2 != -1) {
          wbytes(d, b5, f.crc);
          wbytes(d, b5 + 4, c2 < 0 ? -c2 - 2 : c2);
          wbytes(d, b5 + 8, f.size);
        }
        wbytes(d, b5 + 12, fl2);
        wbytes(d, b5 + 14, exl), b5 += 16;
        if (ce != null) {
          wbytes(d, b5, col);
          wbytes(d, b5 + 6, f.attrs);
          wbytes(d, b5 + 10, ce), b5 += 14;
        }
        d.set(fn, b5);
        b5 += fl2;
        if (exl) {
          for (var k in ex) {
            var exf = ex[k], l = exf.length;
            wbytes(d, b5, +k);
            wbytes(d, b5 + 2, l);
            d.set(exf, b5 + 4), b5 += 4 + l;
          }
        }
        if (col) d.set(co, b5), b5 += col;
        return b5;
      };
      wzf = function wzf2(o, b5, c2, d, e) {
        wbytes(o, b5, 101010256);
        wbytes(o, b5 + 8, c2);
        wbytes(o, b5 + 10, c2);
        wbytes(o, b5 + 12, d);
        wbytes(o, b5 + 16, e);
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
  var init_shared3 = __esm({
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
  function u8ArrayToU64(u82) {
    var view = new DataView(u82.buffer);
    return view.getBigUint64(0);
  }
  function toKeyId(u82) {
    return toHex(u82).toUpperCase().slice(-16);
  }
  function toHex(u82) {
    return Array.from(u82).map((i) => i.toString(16).padStart(2, "0")).join("");
  }
  function bufToString(buf) {
    return new TextDecoder().decode(buf);
  }
  function strToU82(str2) {
    return new TextEncoder().encode(str2);
  }
  var init_utils3 = __esm({
    "node_modules/@revenge-mod/keyutil/src/utils.ts"() {
    }
  });

  // node_modules/@revenge-mod/keyutil/src/v1/public.ts
  var RevengePublicKeyV1;
  var init_public = __esm({
    "node_modules/@revenge-mod/keyutil/src/v1/public.ts"() {
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_ed25519();
      init_sha512();
      init_browser();
      init_shared3();
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
            key: "toZipStructure",
            value: function toZipStructure() {
              return {
                k: this.key,
                i: zipSync(RevengePublicKeyV12.infoToZipStructure(this.info)),
                is: this.signature,
                c: zipSync(Object.fromEntries(Object.entries(this.certifications).map(([id, cert]) => [
                  id,
                  cert.signature
                ]))),
                t: new Uint8Array([
                  this.version << 4 | this.type & 15
                ])
              };
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
            key: "infoToZipStructure",
            value: function infoToZipStructure(info) {
              return {
                n: strToU82(info.name),
                e: u64ToU8Array(info.expires)
              };
            }
          },
          {
            key: "infoToSignatureDataUint8Array",
            value: function infoToSignatureDataUint8Array(info) {
              return sha512(zipSync(RevengePublicKeyV12.infoToZipStructure(info), {
                mtime: "1980"
              }));
            }
          }
        ]);
        return RevengePublicKeyV12;
      }();
    }
  });

  // node_modules/@revenge-mod/keyutil/src/v1/signature.ts
  var RevengeSignatureV1;
  var init_signature = __esm({
    "node_modules/@revenge-mod/keyutil/src/v1/signature.ts"() {
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_ed25519();
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
            key: "toZipStructure",
            value: function toZipStructure() {
              return {
                i: strToU82(this.signerPublicId),
                s: this.signature
              };
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
  var _getPublicKeySignature, _sign2, RevengePrivateKeyV1;
  var init_private = __esm({
    "node_modules/@revenge-mod/keyutil/src/v1/private.ts"() {
      init_class_call_check();
      init_class_private_method_get();
      init_class_private_method_init();
      init_create_class();
      init_define_property();
      init_ed25519();
      init_sha512();
      init_browser();
      init_shared3();
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
            key: "toZipStructure",
            value: function toZipStructure() {
              var zi = zipSync({
                pi: zipSync(RevengePublicKeyV1.infoToZipStructure(this.info.publicKeyInfo), {
                  mtime: "1980"
                }),
                pis: _class_private_method_get(this, _getPublicKeySignature, getPublicKeySignature).call(this)
              });
              return {
                k: this.key,
                i: zi,
                is: _class_private_method_get(this, _sign2, sign1).call(this, zi),
                t: new Uint8Array([
                  this.version << 4 | this.type & 15
                ])
              };
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
    var { t, k, i, is, c: c2 } = unzipSync(key);
    if (!t || t.length !== 1 || !k || k.length !== KeySize || !i || !is || is.length !== SignatureSize) throw new Error("Invalid key file format");
    var { pi, pis, n, e } = unzipSync(i);
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
        var { n: n1, e: e1 } = unzipSync(pi);
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
        var certs = unzipSync(c2);
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
    var { s, i } = unzipSync(signature);
    if (!s || !i) throw new Error("Invalid signature file format");
    return new RevengeSignatureV1({
      signerPublicId: bufToString(i),
      signature: s
    });
  }
  var init_v1 = __esm({
    "node_modules/@revenge-mod/keyutil/src/v1/index.ts"() {
      init_ed25519();
      init_sha512();
      init_browser();
      init_certification();
      init_private();
      init_public();
      init_signature();
      init_shared3();
      init_utils3();
      init_certification();
      init_private();
      init_public();
      init_signature();
      etc.sha512Sync = sha512;
    }
  });

  // libraries/shared/src/paths.ts
  var BaseDirectory, SettingsFilePath, TrustedKeysDirectoryPath, TrustedKeysDataFilePath, PluginsDirectoryPath, PluginsStatesFilePath, ExternalPluginsMetadataFilePath, PluginDirectoryPath, ExternalPluginManifestFilePath, ExternalPluginSourceFilePath, PluginStoragePath;
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
      PluginDirectoryPath = (id) => `${PluginsDirectoryPath}/${id}`;
      ExternalPluginManifestFilePath = (id) => `${PluginDirectoryPath(id)}/manifest.json`;
      ExternalPluginSourceFilePath = (id) => `${PluginDirectoryPath(id)}/source.zip`;
      PluginStoragePath = (id) => `${PluginDirectoryPath(id)}/storage.json`;
    }
  });

  // node_modules/@gullerya/object-observer/dist/object-observer.min.js
  var m, x, E, T, K, c, $, N2, Y, I2, B, D, R, z, y, g, q, H, G2, J, F, P2, L, C, Q, X, Z, _2, b, S, V, U, W2, v;
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
      N2 = (o) => {
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
      I2 = (o, t, e) => {
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
      }).proxy : ArrayBuffer.isView(o) ? new W2({
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
      G2 = function G3() {
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
      P2 = function P3(t) {
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
        shift: G2,
        unshift: J,
        reverse: F,
        sort: P2,
        fill: L,
        copyWithin: C,
        splice: Q
      };
      _2 = {
        reverse: F,
        sort: P2,
        fill: L,
        copyWithin: C,
        set: X
      };
      b = function b3(t, e, r, n, i) {
        "use strict";
        _class_call_check(this, b3);
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
            I2
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
      W2 = /* @__PURE__ */ function(S2) {
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
          if (ArrayBuffer.isView(o)) return new W2({
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
            N2(e)
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

  // libraries/utils/src/hooks.ts
  function useRerenderer() {
    var [, forceUpdate] = (0, import_react2.useReducer)((x2) => ~x2, 0);
    return forceUpdate;
  }
  var import_react2;
  var init_hooks = __esm({
    "libraries/utils/src/hooks.ts"() {
      "use strict";
      import_react2 = __toESM(require_react(), 1);
    }
  });

  // libraries/utils/src/observables.ts
  function useObserve(observables, opts) {
    var rerender = useRerenderer();
    React.useEffect(() => {
      for (var o of observables) v.observe(o, rerender, opts);
      return () => {
        for (var o2 of observables) v.unobserve(o2, rerender);
      };
    }, []);
  }
  function useObserveFiltered(observable, filter, opts) {
    var rerender = useRerenderer();
    React.useEffect(() => {
      var listener = (changes) => filter(changes) && rerender();
      v.observe(observable, listener, opts);
      return () => v.unobserve(observable, listener);
    }, []);
  }
  var init_observables = __esm({
    "libraries/utils/src/observables.ts"() {
      "use strict";
      init_object_observer_min();
      init_hooks();
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
    useObserveStorage: () => useObserveStorage,
    useObserveStorageFiltered: () => useObserveStorageFiltered
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
  function useObserveStorage(observables, opts) {
    for (var o of observables) {
      var err3 = o[storageContextSymbol].error;
      if (err3) throw new Error(`An error occured while initializing the storage: ${getErrorStack(err3)}`, {
        cause: err3
      });
    }
    return useObserve(observables, opts);
  }
  function useObserveStorageFiltered(observable, filter, opts) {
    var err3 = observable[storageContextSymbol].error;
    if (err3) throw new Error(`An error occured while initializing the storage: ${getErrorStack(err3)}`, {
      cause: err3
    });
    return useObserveFiltered(observable, filter, opts);
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
  var init_src5 = __esm({
    "libraries/storage/src/index.ts"() {
      "use strict";
      init_async_to_generator();
      init_object_observer_min();
      init_common();
      init_native();
      init_errors();
      init_observables();
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
  var init_src6 = __esm({
    "libraries/preferences/src/index.ts"() {
      "use strict";
      init_paths();
      init_src5();
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

  // libraries/utils/src/zip.ts
  function parseZip(buf) {
    return unzipSync(buf instanceof Uint8Array ? buf : new Uint8Array(buf));
  }
  function parseZipFromURI(uri, options) {
    return _parseZipFromURI.apply(this, arguments);
  }
  function _parseZipFromURI() {
    _parseZipFromURI = _async_to_generator(function* (uri, options) {
      if (uri.startsWith("http://") || uri.startsWith("https://")) {
        try {
          var res = yield fetch(uri);
          if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
          if (options?.httpFileSizeLimit) {
            var cl = res.headers.get("content-length");
            if (!cl) throw new Error('Server did not provide "Content-Length" header');
            if (Number(cl) > options.httpFileSizeLimit) throw new Error("File size exceeds the limit");
          }
          var buf = new Uint8Array(yield res.arrayBuffer());
          return unzipSync(buf);
        } catch (e) {
          throw new Error(`Failed to fetch: ${e}`, {
            cause: e
          });
        }
      }
      try {
        if (import_react_native4.Platform.OS === "android" && uri.startsWith("content://")) {
          var fs = ReactNative.NativeModules.RNFSManager;
          var b64 = yield fs.readFile(uri);
          return unzipSync(Buffer.from(b64, "base64"));
        }
        if (import_react_native4.Platform.OS === "ios" && uri.startsWith("file://")) {
          var buf1 = yield fetch(uri).then((res2) => res2.arrayBuffer());
          return unzipSync(new Uint8Array(buf1));
        }
      } catch (e) {
        throw new Error(`Failed to read file: ${e}`, {
          cause: e
        });
      }
      throw new Error(`Unsupported URI: ${uri}`);
    });
    return _parseZipFromURI.apply(this, arguments);
  }
  var import_react_native4;
  var init_zip = __esm({
    "libraries/utils/src/zip.ts"() {
      "use strict";
      init_async_to_generator();
      init_browser();
      import_react_native4 = __toESM(require_react_native(), 1);
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
    var message2 = other?.message ?? context.message ?? getSpecificMessage(context.reference, issue.lang) ?? (isSchema ? getSchemaMessage(issue.lang) : null) ?? config2.message ?? getGlobalMessage(issue.lang);
    if (message2) {
      issue.message = typeof message2 === "function" ? (
        // @ts-expect-error
        message2(issue)
      ) : message2;
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
  function maxLength(requirement, message2) {
    return {
      kind: "validation",
      type: "max_length",
      reference: maxLength,
      async: false,
      expects: `<=${requirement}`,
      requirement,
      message: message2,
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
  function minLength(requirement, message2) {
    return {
      kind: "validation",
      type: "min_length",
      reference: minLength,
      async: false,
      expects: `>=${requirement}`,
      requirement,
      message: message2,
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
  function regex(requirement, message2) {
    return {
      kind: "validation",
      type: "regex",
      reference: regex,
      async: false,
      expects: `${requirement}`,
      requirement,
      message: message2,
      "~run"(dataset, config2) {
        if (dataset.typed && !this.requirement.test(dataset.value)) {
          _addIssue(this, "format", dataset, config2);
        }
        return dataset;
      }
    };
  }
  function getDefault(schema, dataset, config2) {
    return typeof schema.default === "function" ? (
      // @ts-expect-error
      schema.default(dataset, config2)
    ) : (
      // @ts-expect-error
      schema.default
    );
  }
  function function_(message2) {
    return {
      kind: "schema",
      type: "function",
      reference: function_,
      expects: "Function",
      async: false,
      message: message2,
      get "~standard"() {
        return _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (typeof dataset.value === "function") {
          dataset.typed = true;
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  function object(entries, message2) {
    return {
      kind: "schema",
      type: "object",
      reference: object,
      expects: "Object",
      async: false,
      entries,
      message: message2,
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
  function optional(wrapped, default_) {
    return {
      kind: "schema",
      type: "optional",
      reference: optional,
      expects: `(${wrapped.expects} | undefined)`,
      async: false,
      wrapped,
      default: default_,
      get "~standard"() {
        return _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (dataset.value === void 0) {
          if (this.default !== void 0) {
            dataset.value = getDefault(this, dataset, config2);
          }
          if (dataset.value === void 0) {
            dataset.typed = true;
            return dataset;
          }
        }
        return this.wrapped["~run"](dataset, config2);
      }
    };
  }
  function string(message2) {
    return {
      kind: "schema",
      type: "string",
      reference: string,
      expects: "string",
      async: false,
      message: message2,
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
  function parse(schema, input, config2) {
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
        "errors",
        "SettingsComponent"
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
        KeyNoValidity: 21,
        KeyRevoked: 22,
        PluginUnsigned: 23
      };
    }
  });

  // libraries/plugins/src/shared.ts
  var logger3;
  var init_shared4 = __esm({
    "libraries/plugins/src/shared.ts"() {
      "use strict";
      init_common();
      logger3 = new Logger("revenge.plugins");
    }
  });

  // libraries/plugins/src/internals.ts
  function registerPlugin(manifest, definition, opts = {}) {
    if (manifest.id in registeredPlugins) throw new Error(`Plugin "${manifest.id}" is already registered`);
    var external = opts.external ?? true;
    var options = {
      external,
      manageable: opts.manageable ?? external,
      // Internal plugins are enabled by default
      // While external plugins are disabled by default
      enabled: opts.enabled ?? !external
    };
    var status = PluginStatus.Stopped;
    var cleanups = /* @__PURE__ */ new Set();
    var def = {
      ...manifest,
      context: lazyValue(() => ctx, {
        hint: "object"
      }),
      external: options.external,
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
        enabled: options.enabled,
        errors: []
      }, {
        hint: "object"
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
      SettingsComponent: definition.SettingsComponent ? () => (0, import_react3.createElement)(definition.SettingsComponent, ctx) : void 0,
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
              ctx.context.beforeAppRender = (yield this.lifecycles.beforeAppRender(ctx)) ?? null;
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
                ctx.context.afterAppRender = (yield _this.lifecycles.afterAppRender(ctx)) ?? null;
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
      revenge: lazyValue(() => revenge, {
        hint: "object"
      }),
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
  var import_react3, registeredPlugins, externalPluginsMetadata;
  var init_internals = __esm({
    "libraries/plugins/src/internals.ts"() {
      "use strict";
      init_async_to_generator();
      init_src3();
      init_metro();
      init_src();
      init_constants2();
      init_src6();
      init_paths();
      init_src5();
      init_errors();
      init_functions();
      init_lazy();
      init_shared4();
      import_react3 = __toESM(require_react(), 1);
      registeredPlugins = {};
      externalPluginsMetadata = createStorage(ExternalPluginsMetadataFilePath);
    }
  });

  // libraries/plugins/src/schemas.ts
  var PluginManifestSchema, PluginDefinitionSchema;
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
      PluginDefinitionSchema = object({
        beforeAppRender: optional(function_()),
        afterAppRender: optional(function_()),
        beforeStop: optional(function_()),
        onMetroModuleLoad: optional(function_()),
        SettingsComponent: optional(function_()),
        initializeStorage: optional(function_())
      });
    }
  });

  // libraries/plugins/src/index.ts
  var src_exports6 = {};
  __export(src_exports6, {
    InstallPluginResultMessage: () => InstallPluginResultMessage,
    clearPluginStorage: () => clearPluginStorage,
    installPlugin: () => installPlugin,
    registerExternalPlugin: () => registerExternalPlugin,
    registerExternalPlugins: () => registerExternalPlugins,
    startPlugins: () => startPlugins,
    uninstallPlugin: () => uninstallPlugin
  });
  function installPlugin(uri) {
    return _installPlugin.apply(this, arguments);
  }
  function _installPlugin() {
    _installPlugin = _async_to_generator(function* (uri, trustUnsigned = false) {
      try {
        var local = !(uri.startsWith("http://") || uri.startsWith("https://"));
        var { "manifest.json": manifestJson, "source.zip": sourceZip, public_key: publicKey, "source.zip.sig": sourceZipSig } = yield parseZipFromURI(uri, {
          httpFileSizeLimit: PluginZipFileSizeLimit
        });
        if (!manifestJson || !sourceZip) return InstallPluginResult.InvalidFileFormat;
        var sourceZipHash = sha512(sourceZip);
        try {
          var manifest = parse(PluginManifestSchema, JSON.parse(new TextDecoder().decode(manifestJson)));
          if (manifest.id in registeredPlugins) return InstallPluginResult.AlreadyInstalled;
          if (!sourceZipSig || !publicKey) {
            if (!trustUnsigned) return InstallPluginResult.PluginUnsigned;
          } else {
            try {
              var key = readRevengeKey(publicKey);
              if (key.isPrivate()) return InstallPluginResult.InvalidKeyFileFormat;
              if (!key.isValid()) return InstallPluginResult.InvalidKeyFileFormat;
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
  function clearPluginStorage(id) {
    return FileModule.removeFile("documents", PluginStoragePath(id));
  }
  function uninstallPlugin(id) {
    return _uninstallPlugin.apply(this, arguments);
  }
  function _uninstallPlugin() {
    _uninstallPlugin = _async_to_generator(function* (id) {
      if (id in registeredPlugins) {
        var plugin4 = registeredPlugins[id];
        if (!plugin4.external) throw new Error(`Cannot uninstall internal plugin: ${plugin4.id}`);
        if (plugin4.manageable !== false) {
          plugin4.disable();
        }
        plugin4.unregister();
        delete registeredPlugins[id];
      }
      if (!(id in externalPluginsMetadata)) throw new Error(`Plugin "${id}" is not installed`);
      delete externalPluginsMetadata[id];
      delete pluginsStates[id];
      yield FileModule.clearFolder("documents", PluginDirectoryPath(id));
      return true;
    });
    return _uninstallPlugin.apply(this, arguments);
  }
  function startPlugins() {
    logger3.info("Starting plugins...");
    var promises = [];
    var errors = [];
    for (var plugin4 of Object.values(registeredPlugins)) {
      if (!plugin4.enabled) continue;
      promises.push(plugin4.start().catch((e) => errors.push(e)));
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
      var manifest = parse(PluginManifestSchema, JSON.parse(manifestJson));
      var { "plugin.js": pluginJs } = parseZip(Buffer.from(pluginZipB64, "base64"));
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
  var InstallPluginResultMessage, DDP;
  var init_src7 = __esm({
    "libraries/plugins/src/index.ts"() {
      "use strict";
      init_async_to_generator();
      init_sha512();
      init_v1();
      init_native();
      init_src6();
      init_paths();
      init_src5();
      init_errors();
      init_zip();
      init_dist2();
      init_internals();
      init_shared4();
      init_constants2();
      init_schemas();
      InstallPluginResultMessage = {
        [InstallPluginResult.Success]: "Plugin installed",
        [InstallPluginResult.InvalidFileFormat]: "Invalid plugin file",
        [InstallPluginResult.InvalidManifest]: "Invalid plugin manifest",
        [InstallPluginResult.AlreadyInstalled]: "Plugin is already installed",
        [InstallPluginResult.InvalidSignatureFileFormat]: "Invalid signature file",
        [InstallPluginResult.InvalidKeyFileFormat]: "Invalid key file",
        [InstallPluginResult.KeyNoValidity]: "Key has no validity. It may be expired or have been tampered.",
        [InstallPluginResult.KeyRevoked]: "Key has been revoked. This key may've been compromised.",
        [InstallPluginResult.SignatureVerificationFailed]: "Signature verification failed. The plugin may've been tampered.",
        [InstallPluginResult.PluginUnsigned]: "Unsigned plugin requires user confirmation. If you see this message, this is a bug."
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
      init_src4();
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
        external: false
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
    return /* @__PURE__ */ jsx(import_react_native5.View, {
      style: styles3.growable,
      children: /* @__PURE__ */ jsx(import_react_native5.ScrollView, {
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
  var import_react_native5, styles3;
  var init_Wrapper = __esm({
    "src/plugins/settings/pages/(Wrapper).tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_components();
      import_react_native5 = __toESM(require_react_native(), 1);
      styles3 = import_react_native5.StyleSheet.create({
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
    return /* @__PURE__ */ jsx(import_react_native6.ScrollView, {
      children: /* @__PURE__ */ jsxs(PageWrapper, {
        children: [
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: "App",
            children: [
              {
                label: "Revenge",
                icon: "Revenge.RevengeIcon",
                trailing: `${"local"} (${"c3bb6d2"}${true ? "-dirty" : ""})`
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
  var import_react_native6;
  var init_About = __esm({
    "src/plugins/settings/pages/About.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_common();
      init_components();
      init_native();
      init_Wrapper();
      import_react_native6 = __toESM(require_react_native(), 1);
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
        ],
        vengeance: [
          {
            name: "Nexpid",
            icon: "https://github.com/nexpid.png",
            url: "https://github.com/nexpid",
            roles: [
              "Vengeance Lead Developer"
            ]
          }
        ]
      };
    }
  });

  // src/plugins/settings/pages/Contributors.tsx
  function ContributorsSettingsPage() {
    return /* @__PURE__ */ jsx(import_react_native7.ScrollView, {
      children: /* @__PURE__ */ jsxs(PageWrapper, {
        children: [
          /* @__PURE__ */ jsx(ContributorsSection, {
            title: "Team",
            data: contributors_default.team
          }),
          /* @__PURE__ */ jsx(ContributorsSection, {
            title: "Contributors",
            data: contributors_default.contributors
          }),
          /* @__PURE__ */ jsx(ContributorsSection, {
            title: "Vengeance",
            data: contributors_default.vengeance
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
            icon: icon ? /* @__PURE__ */ jsx(import_react_native7.Image, {
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
  var import_react_native7, styles4;
  var init_Contributors = __esm({
    "src/plugins/settings/pages/Contributors.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_common();
      init_components();
      import_react_native7 = __toESM(require_react_native(), 1);
      init_contributors();
      init_Wrapper();
      styles4 = import_react_native7.StyleSheet.create({
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

  // libraries/utils/src/components.tsx
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
    "libraries/utils/src/components.tsx"() {
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
      init_src4();
      init_common();
      init_components();
    }
  });

  // src/plugins/settings/pages/Plugins/components/shared.ts
  var import_react5, import_react_native8, styles5, PluginSettingsPageContext;
  var init_shared5 = __esm({
    "src/plugins/settings/pages/Plugins/components/shared.ts"() {
      "use strict";
      import_react5 = __toESM(require_react(), 1);
      import_react_native8 = __toESM(require_react_native(), 1);
      styles5 = import_react_native8.StyleSheet.create({
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
      PluginSettingsPageContext = (0, import_react5.createContext)(void 0);
    }
  });

  // src/plugins/settings/pages/Plugins/components/Illustrations.tsx
  function NoPlugins() {
    var { ContextMenuComponent } = (0, import_react6.useContext)(PluginSettingsPageContext);
    return /* @__PURE__ */ jsxs(Stack, {
      spacing: 24,
      style: [
        styles5.grow,
        styles5.centerChildren
      ],
      children: [
        /* @__PURE__ */ jsx(import_react_native9.Image, {
          source: getAssetIndexByName("empty"),
          style: styles5.emptyImage
        }),
        /* @__PURE__ */ jsx(Text, {
          variant: "heading-lg/semibold",
          children: "No plugins yet!"
        }),
        /* @__PURE__ */ jsxs(import_react_native9.View, {
          style: [
            styles5.centerChildren,
            {
              gap: 8
            }
          ],
          children: [
            /* @__PURE__ */ jsx(BrowsePluginsButton, {}),
            React.createElement(ContextMenuComponent, {
              // biome-ignore lint/correctness/noChildrenProp: This is a valid use case
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
        /* @__PURE__ */ jsx(import_react_native9.Image, {
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
  var import_react6, import_react_native9;
  var init_Illustrations = __esm({
    "src/plugins/settings/pages/Plugins/components/Illustrations.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_components();
      import_react6 = __toESM(require_react(), 1);
      import_react_native9 = __toESM(require_react_native(), 1);
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
    return /* @__PURE__ */ jsx(import_react_native10.View, {
      style: props.disabled ? styles6.disabled : void 0,
      children: /* @__PURE__ */ jsx(FormSwitch, {
        ...props
      })
    });
  }
  var import_react_native10, styles6;
  var init_components3 = __esm({
    "libraries/ui/src/components.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_components();
      init_finders();
      import_react_native10 = __toESM(require_react_native(), 1);
      styles6 = import_react_native10.StyleSheet.create({
        disabled: {
          opacity: 0.5
        }
      });
    }
  });

  // src/plugins/settings/pages/Plugins/contexts/PluginCardContext.ts
  var import_react7, PluginCardContext, PluginCardContext_default;
  var init_PluginCardContext = __esm({
    "src/plugins/settings/pages/Plugins/contexts/PluginCardContext.ts"() {
      "use strict";
      import_react7 = __toESM(require_react(), 1);
      PluginCardContext = (0, import_react7.createContext)(null);
      PluginCardContext_default = PluginCardContext;
    }
  });

  // src/plugins/settings/pages/Plugins/components/PluginCard.tsx
  function PluginCard({ trailing, horizontalGaps }) {
    var { manifest: { icon, name, version, author, description } } = (0, import_react8.useContext)(PluginCardContext_default);
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
                /* @__PURE__ */ jsx(import_react_native11.Image, {
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
  var import_react_native11, import_react8, usePluginCardStyles;
  var init_PluginCard = __esm({
    "src/plugins/settings/pages/Plugins/components/PluginCard.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_common();
      init_components();
      init_colors();
      import_react_native11 = __toESM(require_react_native(), 1);
      init_shared5();
      import_react8 = __toESM(require_react(), 1);
      init_PluginCardContext();
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
          alignItems: "center",
          flexShrink: 1
        },
        alignedContainer: {
          paddingLeft: 28
        }
      });
    }
  });

  // src/plugins/settings/pages/Plugins/components/InstalledPluginCard.tsx
  function InstalledPluginCard(props) {
    var { plugin: plugin4, manifest: { name }, navigation } = (0, import_react9.useContext)(PluginCardContext_default);
    var { SettingsComponent, enabled, id, manageable, context } = plugin4;
    var rerender = useRerenderer();
    return /* @__PURE__ */ jsx(PluginCard, {
      ...props,
      trailing: /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsx(Show, {
            when: SettingsComponent,
            children: /* @__PURE__ */ jsx(IconButton, {
              disabled: !enabled,
              size: "sm",
              icon: getAssetIndexByName("SettingsIcon"),
              variant: "tertiary",
              onPress: () => {
                navigation.navigate("RevengeCustomPage", {
                  title: name,
                  // @ts-expect-error: I love TypeScript
                  render: () => /* @__PURE__ */ jsx(SettingsComponent, {
                    ...context
                  })
                });
              },
              style: {
                marginBottom: "auto"
              }
            })
          }),
          /* @__PURE__ */ jsx(IconButton, {
            size: "sm",
            icon: getAssetIndexByName("MoreHorizontalIcon"),
            variant: "tertiary",
            style: {
              marginBottom: "auto"
            }
          }),
          /* @__PURE__ */ jsx(FormSwitch2, {
            value: enabled,
            disabled: !manageable,
            onValueChange: /* @__PURE__ */ function() {
              var _ref = _async_to_generator(function* (enabled2) {
                var plugin5 = registeredPlugins[id];
                if (enabled2) {
                  plugin5.enable();
                  if (plugin5.lifecycles.beforeAppRender || plugin5.lifecycles.subscribeModules) showReloadRequiredAlert(enabled2);
                  else yield plugin5.start();
                } else {
                  var { reloadRequired } = plugin5.disable();
                  if (reloadRequired) showReloadRequiredAlert(enabled2);
                }
                rerender();
              });
              return function(enabled2) {
                return _ref.apply(this, arguments);
              };
            }()
          })
        ]
      })
    });
  }
  function showReloadRequiredAlert(enabling) {
    openAlert("revenge.plugins.settings.plugins.reload-required", /* @__PURE__ */ jsx(AlertModal, {
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
  var import_react9;
  var init_InstalledPluginCard = __esm({
    "src/plugins/settings/pages/Plugins/components/InstalledPluginCard.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_src4();
      init_components3();
      init_components2();
      init_hooks();
      init_common();
      init_components();
      init_native();
      init_internals();
      import_react9 = __toESM(require_react(), 1);
      init_PluginCard();
      init_PluginCardContext();
    }
  });

  // globals:@shopify/flash-list
  var require_flash_list = __commonJS({
    "globals:@shopify/flash-list"(exports, module) {
      module.exports = (init_deps(), __toCommonJS(deps_exports)).default["@shopify/flash-list"]();
    }
  });

  // src/plugins/settings/pages/Plugins/components/MasonaryFlashPluginList.tsx
  function MasonaryFlashPluginList({ data, header, ListItemComponentProps, ListItemComponent, ListFooterComponent }) {
    var navigation = NavigationNative.useNavigation();
    var dimensions = (0, import_react_native12.useWindowDimensions)();
    var numColumns = Math.floor((dimensions.width - 16) / 448);
    var estimatedItemSize = 24.01 + 32 + 62 * import_react_native12.PixelRatio.getFontScale() ** 1.35;
    return /* @__PURE__ */ jsx(import_flash_list.MasonryFlashList, {
      stickyHeaderIndices: header ? [
        0
      ] : void 0,
      ListHeaderComponent: header,
      renderItem: ({ item, columnIndex }) => /* @__PURE__ */ jsx(PluginCardContext_default.Provider, {
        value: {
          navigation,
          plugin: item,
          manifest: item
        },
        children: /* @__PURE__ */ jsx(ListItemComponent, {
          ...ListItemComponentProps ? ListItemComponentProps(item) : item,
          horizontalGaps: dimensions.width > 464 && columnIndex < numColumns - 1
        })
      }),
      data,
      numColumns,
      estimatedItemSize,
      keyboardShouldPersistTaps: "handled",
      ListFooterComponent: ListFooterComponent ? ListFooterComponent : void 0
    });
  }
  var import_flash_list, import_react_native12;
  var init_MasonaryFlashPluginList = __esm({
    "src/plugins/settings/pages/Plugins/components/MasonaryFlashPluginList.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_common();
      import_flash_list = __toESM(require_flash_list(), 1);
      import_react_native12 = __toESM(require_react_native(), 1);
      init_PluginCardContext();
    }
  });

  // src/plugins/settings/pages/Plugins/components/PluginListSearchInputAndFilters.tsx
  function PluginListSearchAndFilters() {
    var { setQuery, ContextMenuComponent } = (0, import_react10.useContext)(PluginSettingsPageContext);
    return /* @__PURE__ */ jsxs(import_react_native13.View, {
      style: styles5.queryContainer,
      children: [
        /* @__PURE__ */ jsx(import_react_native13.View, {
          style: styles5.grow,
          children: /* @__PURE__ */ jsx(SearchInput, {
            isRound: true,
            isClearable: true,
            size: "md",
            onChange: (query) => setQuery(query.replaceAll(/\s/g, "").toLowerCase())
          })
        }),
        /* @__PURE__ */ jsx(Show, {
          when: ContextMenuComponent,
          children: React.createElement(ContextMenuComponent, {
            // biome-ignore lint/correctness/noChildrenProp: This is a valid use case
            children: (props) => /* @__PURE__ */ jsx(IconButton, {
              ...props,
              icon: getAssetIndexByName("FiltersHorizontalIcon"),
              variant: "secondary-overlay"
            })
          })
        })
      ]
    });
  }
  var import_react10, import_react_native13;
  var init_PluginListSearchInputAndFilters = __esm({
    "src/plugins/settings/pages/Plugins/components/PluginListSearchInputAndFilters.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_components();
      init_components3();
      init_components2();
      import_react10 = __toESM(require_react(), 1);
      import_react_native13 = __toESM(require_react_native(), 1);
      init_shared5();
    }
  });

  // src/plugins/settings/pages/Plugins/hooks.ts
  function useFilteredPlugins(plugins, query, options) {
    var { showInternal, showVengeance } = options;
    var _plugins = (0, import_react11.useMemo)(() => plugins.filter((plugin4) => plugin4.name.toLowerCase().replaceAll(/\s/g, "").includes(query) || plugin4.id.toLowerCase().includes(query)), [
      plugins,
      query
    ]);
    var externalPlugins = (0, import_react11.useMemo)(() => _plugins.filter((plugin4) => (plugin4.external ?? true) && (!options.showUnmanageable ? plugin4.manageable ?? true : true)), [
      _plugins,
      options.showUnmanageable
    ]);
    var vengeancePlugins = (0, import_react11.useMemo)(() => _plugins.filter((plugin4) => !(plugin4.external ?? true) && plugin4.id.startsWith("vengeance.") && (!options.showUnmanageable ? plugin4.manageable ?? true : true)), [
      _plugins,
      options.showUnmanageable
    ]);
    var internalPlugins = (0, import_react11.useMemo)(() => _plugins.filter((plugin4) => !(plugin4.external ?? true) && !plugin4.id.startsWith("vengeance.") && (!options.showUnmanageable ? plugin4.manageable ?? true : true)), [
      _plugins,
      options.showUnmanageable
    ]);
    var empty = ![
      showInternal && internalPlugins.length,
      showVengeance && vengeancePlugins.length,
      externalPlugins.length
    ].reduce((a, b5) => a + (b5 || 0), 0);
    var noSearchResults = empty && !!query;
    return {
      plugins: _plugins,
      externalPlugins,
      vengeancePlugins,
      internalPlugins,
      empty,
      noSearchResults
    };
  }
  var import_react11;
  var init_hooks2 = __esm({
    "src/plugins/settings/pages/Plugins/hooks.ts"() {
      "use strict";
      import_react11 = __toESM(require_react(), 1);
    }
  });

  // src/plugins/settings/pages/Plugins/index.tsx
  function PluginsSettingsPage() {
    var { storage } = (0, import_react12.useContext)(PluginContext);
    useObserveStorage([
      storage,
      externalPluginsMetadata
    ]);
    var [query, setQuery] = (0, import_react12.useState)("");
    var { showInternal, showVengeance, showUnmanageable } = storage.plugins;
    var { externalPlugins, vengeancePlugins, internalPlugins, empty, noSearchResults } = useFilteredPlugins(Object.values(registeredPlugins), query, storage.plugins);
    var ContextMenuComponent = /* @__PURE__ */ (0, import_react12.memo)(({ children }) => /* @__PURE__ */ jsx(ContextMenu, {
      title: "Filters",
      items: [
        [
          {
            label: "Show Vengeance plugins",
            IconComponent: showVengeance ? CheckmarkLargeIcon : void 0,
            action: () => storage.plugins.showVengeance = !showVengeance
          },
          {
            label: "Show internal plugins",
            IconComponent: showInternal ? CheckmarkLargeIcon : void 0,
            action: () => storage.plugins.showInternal = !showInternal
          },
          {
            label: "Show essential plugins",
            IconComponent: showUnmanageable ? CheckmarkLargeIcon : void 0,
            action: () => storage.plugins.showUnmanageable = !showUnmanageable
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
          showInternal,
          showVengeance,
          showUnmanageable,
          ContextMenuComponent
        },
        children: /* @__PURE__ */ jsx(Stack, {
          spacing: 16,
          style: styles5.grow,
          children: /* @__PURE__ */ jsxs(Show, {
            when: !empty || noSearchResults,
            fallback: /* @__PURE__ */ jsx(NoPlugins, {}),
            children: [
              /* @__PURE__ */ jsx(PluginListSearchAndFilters, {}),
              /* @__PURE__ */ jsx(Show, {
                when: !noSearchResults,
                fallback: /* @__PURE__ */ jsx(NoResults, {}),
                children: /* @__PURE__ */ jsxs(import_react_native14.ScrollView, {
                  fadingEdgeLength: 32,
                  keyboardShouldPersistTaps: "handled",
                  style: styles5.autoSize,
                  children: [
                    /* @__PURE__ */ jsx(MasonaryFlashPluginList, {
                      data: externalPlugins,
                      ListItemComponent: InstalledPluginCard,
                      ListFooterComponent: !showVengeance && !showInternal && PluginBrowserCTA
                    }),
                    /* @__PURE__ */ jsx(Show, {
                      when: showVengeance,
                      children: /* @__PURE__ */ jsx(MasonaryFlashPluginList, {
                        data: vengeancePlugins,
                        header: /* @__PURE__ */ jsx(TableRowGroupTitle, {
                          title: "Vengeance Plugins"
                        }),
                        ListItemComponent: InstalledPluginCard,
                        ListFooterComponent: !showInternal && PluginBrowserCTA
                      })
                    }),
                    /* @__PURE__ */ jsx(Show, {
                      when: showInternal,
                      children: /* @__PURE__ */ jsx(MasonaryFlashPluginList, {
                        data: internalPlugins,
                        header: (
                          // TableRowGroupTitle probably has some margin, setting it to flex-end causes it to be in the center, lucky.
                          /* @__PURE__ */ jsxs(import_react_native14.View, {
                            style: styles5.headerContainer,
                            children: [
                              /* @__PURE__ */ jsx(TableRowGroupTitle, {
                                title: "Internal Plugins"
                              }),
                              /* @__PURE__ */ jsx(IconButton, {
                                icon: getAssetIndexByName("CircleQuestionIcon-primary"),
                                size: "sm",
                                variant: "tertiary",
                                onPress: showInternalPluginsInformationAlert
                              })
                            ]
                          })
                        ),
                        ListItemComponent: InstalledPluginCard,
                        ListFooterComponent: showInternal && PluginBrowserCTA
                      })
                    })
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
    return /* @__PURE__ */ jsxs(import_react_native14.View, {
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
  function showInternalPluginsInformationAlert() {
    return openAlert("revenge.plugins.settings.plugins.internal-plugins.description", /* @__PURE__ */ jsx(AlertModal, {
      title: "What are internal plugins?",
      content: "Internal plugins are directly integrated into Revenge, and provide core functionalities such as this settings menu. Some internal plugins are essential to provide necessary resources required by other plugins.",
      actions: /* @__PURE__ */ jsx(AlertActionButton, {
        text: "OK"
      })
    }));
  }
  var import_react12, import_react_native14;
  var init_Plugins = __esm({
    "src/plugins/settings/pages/Plugins/index.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_common();
      init_components();
      init_icons();
      import_react12 = __toESM(require_react(), 1);
      import_react_native14 = __toESM(require_react_native(), 1);
      init_src5();
      init_internals();
      init_components2();
      init_BrowsePluginsButton();
      init_Illustrations();
      init_InstalledPluginCard();
      init_MasonaryFlashPluginList();
      init_PluginListSearchInputAndFilters();
      init_shared5();
      init_hooks2();
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
      init_src4();
      init_components();
      init_src7();
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
        case InstallPluginResult.PluginUnsigned:
          return openAlert("revenge.plugins.settings.plugins.install.unsigned", /* @__PURE__ */ jsx(AlertModal, {
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
          return openAlert("revenge.plugins.settings.plugin.install.failed", /* @__PURE__ */ jsx(AlertModal, {
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
      init_src7();
      init_constants2();
      onPluginInstalled = () => toasts.open({
        key: "revenge.plugins.settings.plugins.install.success",
        content: "Plugin installed!",
        IconComponent: DownloadIcon
      });
    }
  });

  // src/plugins/settings/pages/Plugins/Browser.tsx
  function PluginBrowserPage() {
    var navigation = NavigationNative.useNavigation();
    (0, import_react13.useEffect)(() => navigation.setOptions({
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
    }), []);
    var [query, setQuery] = (0, import_react13.useState)("");
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
      showInternal: false,
      showVengeance: true,
      showUnmanageable: false
    });
    return /* @__PURE__ */ jsx(PageWrapper, {
      withTopControls: true,
      children: /* @__PURE__ */ jsx(PluginSettingsPageContext.Provider, {
        value: {
          setQuery,
          showInternal: false,
          showVengeance: true,
          showUnmanageable: false,
          ContextMenuComponent: /* @__PURE__ */ (0, import_react13.memo)(() => null)
        },
        children: /* @__PURE__ */ jsx(Stack, {
          spacing: 16,
          style: styles5.grow,
          children: /* @__PURE__ */ jsxs(Show, {
            when: !empty || noSearchResults,
            fallback: /* @__PURE__ */ jsx(NoPlugins, {}),
            children: [
              /* @__PURE__ */ jsx(PluginListSearchAndFilters, {}),
              /* @__PURE__ */ jsx(Show, {
                when: !noSearchResults,
                fallback: /* @__PURE__ */ jsx(NoResults, {}),
                children: /* @__PURE__ */ jsx(MasonaryFlashPluginList, {
                  data: externalPlugins,
                  ListItemComponentProps: (item) => ({
                    url: item.url
                  }),
                  ListItemComponent: InstallablePluginCard
                })
              })
            ]
          })
        })
      })
    });
  }
  var import_react13;
  var init_Browser = __esm({
    "src/plugins/settings/pages/Plugins/Browser.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_common();
      init_components();
      init_icons();
      init_components2();
      import_react13 = __toESM(require_react(), 1);
      init_InstallablePluginCard();
      init_MasonaryFlashPluginList();
      init_PluginListSearchInputAndFilters();
      init_shared5();
      init_Wrapper();
      init_utils4();
      init_Illustrations();
      init_hooks2();
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
    useObserveStorage([
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
              onPress: () => navigation.navigate("RevengeAbout")
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
                onPress: () => navigation.navigate("RevengeContributors")
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
      init_src4();
      init_common();
      init_components();
      init_native();
      init_src6();
      init_src5();
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
  var import_react15, plugin, PluginContext;
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
      import_react15 = __toESM(require_react(), 1);
      init_About();
      init_Contributors();
      init_CustomPageRenderer();
      init_Plugins();
      init_Browser();
      init_Revenge();
      init_contributors();
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
            var { patcher: patcher6, revenge: { assets, modules: modules2, ui: { settings: sui } } } = context;
            for (var member of Object.values(contributors_default).flat()) {
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
            var SettingsConstants = modules2.findByProps("SETTING_RENDERER_CONFIG");
            var SettingsOverviewScreen = modules2.findByName("SettingsOverviewScreen", false);
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
            showInternal: false,
            showVengeance: true,
            showUnmanageable: false
          }
        })
      }, {
        external: false,
        manageable: false
      });
      PluginContext = /* @__PURE__ */ (0, import_react15.createContext)(null);
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
        external: false,
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
    var [search, setSearch] = (0, import_react16.useState)("");
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
  var import_react16, import_react_native16, DisplayableTypes, UndisplayableTypesIconMap;
  var init_AssetBrowser = __esm({
    "src/plugins/developer-settings/pages/AssetBrowser.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_common();
      init_components();
      init_metro();
      init_caches();
      init_components3();
      import_react16 = __toESM(require_react(), 1);
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

  // src/plugins/developer-settings/debugger.ts
  function disconnectFromDebugger() {
    DebuggerContext.ws?.close();
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
    DevToolsContext.ws?.close();
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
    var context = (0, import_react17.useContext)(PluginContext2);
    var { storage, revenge: { assets } } = context;
    useObserveStorage([
      storage
    ]);
    var navigation = NavigationNative.useNavigation();
    var refDevToolsAddr = (0, import_react17.useRef)(storage.reactDevTools.address || "localhost:8097");
    var [rdtConnected, setRdtConnected] = (0, import_react17.useState)(DevToolsContext.connected);
    var refDebuggerAddr = (0, import_react17.useRef)(storage.debugger.address || "localhost:9090");
    var [dbgConnected, setDbgConnected] = (0, import_react17.useState)(DebuggerContext.connected);
    (0, import_react17.useEffect)(() => {
      var listener = (evt) => {
        if (evt === "connect") setRdtConnected(true);
        else setRdtConnected(false);
      };
      DevToolsEvents.on("*", listener);
      return () => void DevToolsEvents.off("*", listener);
    }, []);
    (0, import_react17.useEffect)(() => {
      var listener = (evt) => {
        if (evt === "connect") setDbgConnected(true);
        else setDbgConnected(false);
      };
      DebuggerEvents.on("*", listener);
      return () => void DebuggerEvents.off("*", listener);
    }, []);
    return /* @__PURE__ */ jsx(import_react_native17.ScrollView, {
      children: /* @__PURE__ */ jsxs(PageWrapper, {
        children: [
          typeof __reactDevTools !== "undefined" && /* @__PURE__ */ jsxs(Stack, {
            spacing: 8,
            direction: "vertical",
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
                    key: "revenge.plugins.developer-settings.react-devtools.saved",
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
          /* @__PURE__ */ jsxs(Stack, {
            spacing: 8,
            direction: "vertical",
            children: [
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
                  alerts.openAlert("revenge.plugins.developer-settings.evaluate", /* @__PURE__ */ jsx(PluginContext2.Provider, {
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
                invalidateCache();
                BundleUpdaterManager.reload();
              }
            })
          })
        ]
      })
    });
  }
  function DeveloperSettingsPageEvaluateJavaScriptAlert() {
    var { revenge: { modules: modules2 } } = (0, import_react17.useContext)(PluginContext2);
    var [evalAwaitResult, setEvalAwaitResult] = (0, import_react17.useState)(true);
    var codeRef = (0, import_react17.useRef)("");
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
              try {
                var res = globalThis.eval(codeRef.current);
                alert(modules2.findProp("inspect")(res instanceof Promise && evalAwaitResult ? yield res : res, {
                  depth: 5
                }));
              } catch (e) {
                alert(getErrorStack(e));
              }
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
  var import_react17, import_react_native17;
  var init_Developer = __esm({
    "src/plugins/developer-settings/pages/Developer.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_common();
      init_components();
      init_native();
      init_src5();
      init_src6();
      init_paths();
      init_errors();
      init_Wrapper();
      init_debugger();
      init_devtools();
      init_developer_settings();
      import_react17 = __toESM(require_react(), 1);
      import_react_native17 = __toESM(require_react_native(), 1);
      init_caches();
    }
  });

  // src/plugins/developer-settings/index.tsx
  function setupDebugger({ patcher: patcher6, cleanup }) {
    var debuggerCleanups = /* @__PURE__ */ new Set();
    patcher6.before(globalThis, "nativeLoggingHook", ([message2, level]) => {
      if (DebuggerContext.ws?.readyState === WebSocket.OPEN) DebuggerContext.ws.send(JSON.stringify({
        level: level === 3 ? "error" : level === 2 ? "warn" : "info",
        message: message2
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
            DevToolsEvents.on("error", (err3) => toasts.open({
              key: "revenge.plugins.settings.react-devtools.error",
              content: `Error while connecting to React DevTools:
${err3.message}`
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
            }), sui.createRoute("RevengeAssetBrowser", {
              type: "route",
              label: "Asset Browser",
              component: AssetBrowserSettingsPage,
              icon: assets.getIndexByName("ImageIcon")
            }), disconnectFromDebugger, disconnectFromDevTools);
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
        external: false,
        manageable: true,
        enabled: false
      });
      PluginContext2 = React.createContext(null);
    }
  });

  // src/plugins/warnings/index.tsx
  var MinimumSupportedBuildNumber;
  var init_warnings = __esm({
    "src/plugins/warnings/index.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_common();
      init_components();
      init_native();
      init_internals();
      MinimumSupportedBuildNumber = import_react_native.default.Platform.select({
        android: 26e4,
        ios: 69233
      });
      registerPlugin({
        name: "Warnings",
        author: "Revenge",
        description: "Startup warnings for users that are not using the recommended defaults for Revenge",
        id: "revenge.warnings",
        version: "1.0.0",
        icon: "WarningIcon"
      }, {
        afterAppRender({ revenge: { assets, modules: modules2 }, storage }) {
          var { alerts: alerts2, toasts: toasts2 } = modules2.common;
          if (
            // We do !> instead of < in case the value of the left is NaN
            !(Number(ClientInfoModule.Build) > MinimumSupportedBuildNumber) && (storage.supportWarningDismissedAt ?? Date.now()) + 6048e5 > Date.now()
          ) {
            alerts2.openAlert("revenge.plugins.warnings.support-warning", /* @__PURE__ */ jsx(AlertModal, {
              title: "Support Warning",
              content: (
                // biome-ignore lint/style/useTemplate: I can't see the whole message when not doing concatenation
                `Revenge does not officially support this build of Discord. Please update to a newer version as some features may not work as expected.

Supported Builds: 260.0 (${MinimumSupportedBuildNumber}) and above
Your Build: ${ClientInfoModule.Version} (${ClientInfoModule.Build})`
              ),
              actions: /* @__PURE__ */ jsx(AlertActionButton, {
                text: "Remind me in 7 days",
                onPress: () => {
                  storage.supportWarningDismissedAt = Date.now();
                  toasts2.open({
                    key: "revenge.plugins.warnings.support-warning.dismissed",
                    content: "You will see this warning again in 7 days",
                    icon: assets.getIndexByName("ic_warning_24px")
                  });
                }
              })
            }));
          }
        }
      }, {
        external: false,
        manageable: false
      });
    }
  });

  // src/plugins/vengeance/notrack/index.tsx
  var import_react_native18;
  var init_notrack = __esm({
    "src/plugins/vengeance/notrack/index.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_components();
      init_internals();
      init_src5();
      import_react_native18 = __toESM(require_react_native(), 1);
      init_Wrapper();
      registerPlugin({
        name: "NoTrack",
        author: "Vengeance",
        description: "Prevents Discord from tracking your every move by disabling sentry functions",
        id: "vengeance.notrack",
        version: "1.0.0",
        icon: "EyeIcon"
      }, {
        beforeAppRender({ revenge: { modules: modules2 }, patcher: patcher6, storage }) {
          var http = modules2.findByProps("HTTP", "post");
          patcher6.instead(http.HTTP, "post", (args, original) => {
            var { url } = args?.[0] ?? {};
            if (url?.startsWith("/science") && storage.blockScience) {
              if (storage.countRequests) storage.blockedRequests++;
              return Promise.resolve();
            }
            return original.apply(this, args);
          }, "http.post");
        },
        initializeStorage() {
          return {
            blockedRequests: 0,
            blockScience: true,
            countRequests: true
          };
        },
        SettingsComponent({ storage }) {
          useObserveStorage([
            storage
          ]);
          return /* @__PURE__ */ jsx(import_react_native18.ScrollView, {
            children: /* @__PURE__ */ jsxs(PageWrapper, {
              children: [
                /* @__PURE__ */ jsx(Card, {
                  children: /* @__PURE__ */ jsxs(Text, {
                    variant: "text-md/medium",
                    children: [
                      "NoTrack has successfully blocked",
                      " ",
                      /* @__PURE__ */ jsxs(Text, {
                        variant: "text-md/bold",
                        children: [
                          storage.blockedRequests,
                          " tracking request",
                          storage.blockedRequests !== 1 ? "s" : ""
                        ]
                      }),
                      " ",
                      "so far"
                    ]
                  })
                }),
                /* @__PURE__ */ jsxs(TableRowGroup, {
                  title: "Settings",
                  children: [
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Block /science",
                      subLabel: `Blocks requests to Discord's "science" analytics API endpoint`,
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("BeakerIcon")
                      }),
                      value: storage.blockScience,
                      onValueChange: (v2) => storage.blockScience = v2
                    }),
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Save count",
                      subLabel: "Count the number of blocked requests",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("ClockIcon")
                      }),
                      value: storage.countRequests,
                      onValueChange: (v2) => storage.countRequests = v2
                    })
                  ]
                })
              ]
            })
          });
        }
      }, {
        external: false,
        manageable: true,
        enabled: true
      });
    }
  });

  // src/plugins/vengeance/freenitro/patches/extra/appIcons.ts
  function patchAppIcons({ revenge: { modules: modules2 }, storage, patcher: patcher6, cleanup }) {
    var icons = modules2.findByProps("getIcons", "getOfficialAlternateIcons");
    var iconsIds = modules2.findByProps("FreemiumAppIconIds", "MasterAppIconIds");
    var upsellObj = modules2.findByProps("useIsPremiumAppIconUpsellEnabled");
    var upsellComponent = modules2.findByName("PremiumAppIconFeatureUpsell", false);
    var patched2 = true;
    cleanup(() => patched2 = false);
    var _Freemiums = iconsIds.FreemiumAppIconIds;
    Object.defineProperty(iconsIds, "FreemiumAppIconIds", {
      get() {
        return patched2 && storage.extra.appIcons ? iconsIds.MasterAppIconIds : _Freemiums;
      }
    });
    patcher6.after(icons, "getIcons", (_3, ret) => storage.extra.appIcons ? ret.map((x2) => ({
      ...x2,
      isPremium: false
    })) : ret, "appicons.getIcons");
    patcher6.after(icons, "getOfficialAlternateIcons", (_3, ret) => storage.extra.appIcons ? ret.map((x2) => ({
      ...x2,
      isPremium: false
    })) : ret, "appicons.getOfficialAlternateIcons");
    patcher6.after(icons, "getIconById", (_3, ret) => storage.extra.appIcons ? {
      ...ret,
      isPremium: false
    } : ret, "appicons.getIconById");
    patcher6.instead(upsellObj, "useIsPremiumAppIconUpsellEnabled", () => storage.extra.appIcons, "appicons.upsellObj");
    patcher6.instead(upsellComponent, "default", function(args, original) {
      return storage.extra.appIcons ? null : original.apply(this, args);
    }, "appicons.upsellComponent");
  }
  var init_appIcons = __esm({
    "src/plugins/vengeance/freenitro/patches/extra/appIcons.ts"() {
      "use strict";
    }
  });

  // src/plugins/vengeance/freenitro/patches/extra/nitroThemes.ts
  function patchNitroThemes({ revenge: { modules: modules2 }, patcher: patcher6, storage }) {
    var getPremiumSubscription = modules2.findProp("getPremiumSubscription");
    patcher6.before(FluxDispatcher, "dispatch", (args) => {
      var [event] = args;
      if (event.type === "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE" && event.changes.appearance?.settings.clientThemeSettings?.backgroundGradientPresetId && (getPremiumSubscription() || storage.bypassNitroCheck)) {
        event.changes.appearance.shouldSync = false;
        return args;
      }
    }, "nitrothemes.shouldSync");
  }
  var init_nitroThemes = __esm({
    "src/plugins/vengeance/freenitro/patches/extra/nitroThemes.ts"() {
      "use strict";
      init_common();
    }
  });

  // src/plugins/vengeance/freenitro/patches/fakeify.tsx
  function patchFakeify({ revenge: { modules: modules2 }, patcher: patcher6, storage }, emojiPickerOpen) {
    var messagesModule = modules2.findByProps("sendMessage", "editMessage");
    var EmojiPickerList = modules2.findByTypeName("EmojiPickerList");
    var ChatInputSendButton = modules2.findByTypeName("ChatInputSendButton");
    var PermissionsBits = modules2.findProp("Permissions");
    var getChannel = modules2.findProp("getChannel");
    var getSelfMember = modules2.findProp("getSelfMember");
    var can = modules2.findProp("can");
    var getChannelId = modules2.findProp("getChannelId");
    var getStickerById = modules2.findProp("getStickerById");
    var getPremiumSubscription = modules2.findProp("getPremiumSubscription");
    function hasPermission(channelId, permission) {
      var channel = getChannel(channelId);
      if (!channel || channel.isPrivate()) return true;
      return can(permission, channel);
    }
    var hasExternalEmojiPerms = (channelId) => hasPermission(channelId, PermissionsBits.USE_EXTERNAL_EMOJIS);
    var hasExternalStickerPerms = (channelId) => hasPermission(channelId, PermissionsBits.USE_EXTERNAL_STICKERS);
    var hasEmbedLinksPerms = (channelId) => hasPermission(channelId, PermissionsBits.EMBED_LINKS);
    var guildId = () => getChannel(getChannelId())?.guild_id;
    function canUseEmote(e, channelId) {
      if (getPremiumSubscription() && storage.bypassNitroCheck) return false;
      if (e.type === 0) return true;
      if (!e.available) return false;
      var twitchSubEmote = false;
      if (e.managed && e.guildId) {
        var myRoles = getSelfMember(e.guildId)?.roles ?? [];
        twitchSubEmote = e.roles?.some((r) => myRoles.includes(r)) || false;
      }
      var hasNitro = getPremiumSubscription() && !storage.bypassNitroCheck;
      if (hasNitro || twitchSubEmote) return e.guildId === guildId() || hasExternalEmojiPerms(channelId);
      return !e.animated && e.guildId === guildId();
    }
    patcher6.instead(messagesModule, "sendStickers", /* @__PURE__ */ function() {
      var _ref = _async_to_generator(function* (args, original) {
        if (!storage.stickers.enabled) return original.apply(this, args);
        var [channelId, stickerIds, extra, something] = args;
        var stickers = stickerIds.map((id) => {
          var sticker = getStickerById(id);
          var canUseStickers = getPremiumSubscription() && !storage.bypassNitroCheck && hasExternalStickerPerms(channelId);
          if (!sticker || "pack_id" in sticker || sticker.available && (canUseStickers || sticker.guild_id === guildId())) return;
          var link = `https://media.discordapp.net/stickers/${id}.${sticker.format_type === 4 ? "gif" : "png"}?size=${storage.stickers.size}&name=${encodeURIComponent(sticker.name)}`;
          return storage.hyperlinks ? `[${sticker.name}](${link})` : link;
        });
        if (stickers[0]) {
          if (!hasEmbedLinksPerms(channelId) && !storage.ignoreEmbeds) {
            if (!(yield showNoEmbedPermsAlert(() => storage.ignoreEmbeds = true))) return yield Promise.reject();
          }
          return yield messagesModule.sendMessage(channelId, {
            content: stickers.join(" ")
          }, extra, something);
        }
        return yield original.apply(this, args);
      });
      return function(args, original) {
        return _ref.apply(this, arguments);
      };
    }(), "fakeify.sendStickers");
    patcher6.instead(EmojiPickerList, "type", function(args, original) {
      var [props] = args;
      if (!storage.emoji.enabled || !props?.categories || !props.channel) return original.apply(this, args);
      for (var category of props.categories) {
        category.isNitroLocked = false;
        category.emojisDisabled?.clear();
      }
      (0, import_react18.useEffect)(() => {
        emojiPickerOpen.current.add("picker");
        return () => void emojiPickerOpen.current.delete("picker");
      }, []);
      return original.apply(this, args);
    }, "fakeify.EmojiPickerList");
    patcher6.before(ChatInputSendButton, "type", ([{ messageHasContent }]) => void (messageHasContent ? emojiPickerOpen.current.add("chat") : emojiPickerOpen.current.delete("chat")), "fakeify.ChatInputSendButton");
    patcher6.instead(messagesModule, "sendMessage", /* @__PURE__ */ function() {
      var _ref = _async_to_generator(function* (args, original) {
        if (!storage.emoji.enabled) return yield original.apply(this, args);
        var [channelId, data] = args;
        var didBypass = false;
        var i = -1;
        var didIs = /* @__PURE__ */ new Set();
        for (var emoji of data.validNonShortcutEmojis ?? []) {
          i++;
          if (canUseEmote(emoji, channelId)) continue;
          didBypass = true;
          var emojiString = `<${emoji.animated ? "a" : ""}:${emoji.name}:${emoji.id}>`;
          var link = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "webp"}?size=${storage.emoji.size}&name=${encodeURIComponent(emoji.name)}`;
          var text = storage.hyperlinks ? `[${emoji.name}](${link})` : link;
          data.content = data.content.replace(emojiString, text);
          didIs.add(i);
        }
        if (data.validNonShortcutEmojis) data.validNonShortcutEmojis = data.validNonShortcutEmojis.filter((_3, i2) => !didIs.has(i2));
        if (didBypass && !hasEmbedLinksPerms(channelId) && !storage.ignoreEmbeds) {
          if (!(yield showNoEmbedPermsAlert(() => storage.ignoreEmbeds = true))) return yield Promise.reject();
        }
        return yield original.apply(this, args);
      });
      return function(args, original) {
        return _ref.apply(this, arguments);
      };
    }(), "fakeify.sendMessage");
    patcher6.instead(messagesModule, "editMessage", /* @__PURE__ */ function() {
      var _ref = _async_to_generator(function* (args, original) {
        if (!storage.emoji.enabled) return yield original.apply(this, args);
        var [channelId, _3, data] = args;
        var didBypass = false;
        var i = -1;
        var didIs = /* @__PURE__ */ new Set();
        for (var emoji of data.validNonShortcutEmojis ?? []) {
          i++;
          if (canUseEmote(emoji, channelId)) continue;
          didBypass = true;
          var emojiString = `<${emoji.animated ? "a" : ""}:${emoji.name}:${emoji.id}>`;
          var link = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "webp"}?size=${storage.emoji.size}`;
          var text = storage.hyperlinks ? `[${emoji.name}](${link})` : `${link}&name=${encodeURIComponent(emoji.name)}`;
          data.content = data.content.replace(emojiString, text);
          didIs.add(i);
        }
        if (data.validNonShortcutEmojis) data.validNonShortcutEmojis = data.validNonShortcutEmojis.filter((_4, i2) => !didIs.has(i2));
        if (didBypass && !hasEmbedLinksPerms(channelId) && !storage.ignoreEmbeds) {
          if (!(yield showNoEmbedPermsAlert(() => storage.ignoreEmbeds = true))) return yield Promise.reject();
        }
        return yield original.apply(this, args);
      });
      return function(args, original) {
        return _ref.apply(this, arguments);
      };
    }(), "fakeify.editMessage");
  }
  function NoEmbedPermsAlertModal({ outcome, disable }) {
    (0, import_react18.useEffect)(() => () => outcome(false), []);
    var [meow, setMeow] = React.useState(false);
    FormSwitch2;
    return /* @__PURE__ */ jsx(AlertModal, {
      title: "Hold on!",
      content: "You are trying to send/edit a message that has a fake emoji or sticker, however you do not have permissions to embed links in the current channel. Are you sure you want to send this message? Your fake items will appear as a link only.",
      extraContent: /* @__PURE__ */ jsx(FormCheckboxRow, {
        label: "Do not show again",
        selected: meow,
        onPress: () => setMeow(!meow)
      }),
      actions: /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsx(AlertActionButton, {
            variant: "primary",
            text: "Send anyway",
            onPress: () => {
              if (meow) disable();
              outcome(true);
            }
          }),
          /* @__PURE__ */ jsx(AlertActionButton, {
            variant: "secondary",
            text: "Cancel",
            onPress: () => outcome(false)
          })
        ]
      })
    });
  }
  function showNoEmbedPermsAlert(disable) {
    return new Promise((res) => openAlert("vengeance.plugins.freenitro.fakeify.no-embed-perms", /* @__PURE__ */ jsx(NoEmbedPermsAlertModal, {
      outcome: res,
      disable
    })));
  }
  var import_react18, FormCheckboxRow;
  var init_fakeify = __esm({
    "src/plugins/vengeance/freenitro/patches/fakeify.tsx"() {
      "use strict";
      init_async_to_generator();
      init_react_jsx_runtime();
      init_common();
      init_components();
      init_finders();
      init_components3();
      import_react18 = __toESM(require_react(), 1);
      FormCheckboxRow = findProp("FormCheckboxRow");
    }
  });

  // src/plugins/vengeance/freenitro/patches/realify.tsx
  function patchRealify({ revenge: { modules: modules2 }, storage, patcher: patcher6 }) {
    var StickerDetailActionSheet = modules2.findByTypeName("StickerDetailActionSheet");
    var getCustomEmojiById = modules2.findProp("getCustomEmojiById");
    var getStickerById = modules2.findProp("getStickerById");
    var { prototype: RowManager } = modules2.findByName("RowManager");
    function findFakeEmoji(src, loadCache) {
      if (!storage.emoji.realify || !storage.emoji.enabled) return null;
      if (!cdnLinks.some((x2) => src.includes(x2))) return null;
      var fakeEmojiMatch = src.match(emojiUrlRegex);
      if (fakeEmojiMatch) {
        var temp = loadCache(fakeEmojiMatch[1]);
        if (temp) return temp;
        var url = null;
        try {
          url = new URL(src);
        } catch (e) {
        }
        var name = getCustomEmojiById(fakeEmojiMatch[1])?.name ?? url?.searchParams.get("name") ?? "FakeEmoji";
        return {
          name,
          id: fakeEmojiMatch[1],
          animated: fakeEmojiMatch[2] === "gif",
          src
        };
      }
      return null;
    }
    function findFakeSticker(src, loadCache) {
      if (!storage.stickers.realify || !storage.stickers.enabled) return null;
      if (!cdnLinks.some((x2) => src.includes(x2))) return null;
      var fakeStickerMatch = src.match(stickerUrlRegex);
      if (fakeStickerMatch) {
        var temp = loadCache(fakeStickerMatch[1]);
        if (temp) return temp;
        var url = null;
        try {
          url = new URL(src);
        } catch (e) {
        }
        var sticker = getStickerById(fakeStickerMatch[1]);
        var name = sticker?.name ?? url?.searchParams.get("name") ?? "FakeSticker";
        var width = Number(sticker?.width ?? url?.searchParams.get("size") ?? storage.stickers.size);
        var height = Number(sticker?.height ?? url?.searchParams.get("size") ?? storage.stickers.size);
        var formatType = fakeStickerMatch[2] === "gif" ? 4 : sticker?.format_type ?? 1;
        return {
          format_type: formatType,
          name,
          id: fakeStickerMatch[1],
          src,
          width,
          height
        };
      }
      return null;
    }
    patcher6.after(RowManager, "generate", (_3, row) => {
      if (row.type !== 1 || !row.message) return;
      var { message: message2 } = row;
      var membeds = message2.embeds ?? [];
      var removeEmbeds = /* @__PURE__ */ new Set();
      var emojis = /* @__PURE__ */ new Map();
      var stickers = /* @__PURE__ */ new Map();
      for (var i in membeds) {
        var embed = membeds[i];
        if (embed.type !== "image" || !embed.url) continue;
        var fakeEmoji = findFakeEmoji(embed.url, (id2) => emojis.get(id2));
        if (fakeEmoji) {
          removeEmbeds.add(Number(i));
          emojis.set(fakeEmoji.id, fakeEmoji);
        }
        var fakeSticker = findFakeSticker(embed.url, (id2) => stickers.get(id2));
        if (fakeSticker) {
          removeEmbeds.add(Number(i));
          stickers.set(fakeSticker.id, fakeSticker);
        }
      }
      message2.embeds = membeds.filter((_4, i2) => !removeEmbeds.has(i2));
      if (!message2.content?.length) message2.content = [
        ...emojis.values()
      ].map(({ id: id2, name: name2, src: src2, animated }) => ({
        type: "customEmoji",
        id: id2,
        alt: name2 + isFakerAlt,
        src: src2,
        frozenSrc: src2.replace(".gif", ".webp"),
        animated,
        jumboable: emojis.size <= 30
      }));
      else {
        var recursiveCheck2 = function(contents) {
          for (var i2 in contents) {
            var cnt = contents[i2];
            if (!cnt) continue;
            if (Array.isArray(cnt)) recursiveCheck2(cnt);
            else {
              if ("type" in cnt && cnt.type === "link") {
                if (typeof cnt.target === "string") {
                  var e = findFakeEmoji(cnt.target, (id2) => emojis.get(id2));
                  if (e) {
                    emojis.set(e.id, e);
                    contents[i2] = {
                      type: "customEmoji",
                      id: e.id,
                      alt: e.name + isFakerAlt,
                      src: e.src,
                      frozenSrc: e.src.replace(".gif", ".webp"),
                      get jumboable() {
                        return isJumboable;
                      },
                      animated: e.animated
                    };
                  } else {
                    var s = findFakeSticker(cnt.target, (id2) => stickers.get(id2));
                    if (s) {
                      stickers.set(s.id, s);
                      contents[i2] = {
                        type: "text",
                        content: ""
                      };
                    }
                  }
                }
              } else if ("content" in cnt && Array.isArray(cnt.content)) recursiveCheck2(cnt.content);
              else if ("items" in cnt && Array.isArray(cnt.items)) recursiveCheck2(cnt.items);
            }
          }
          if (shouldDebug) console.log("Rec check ", contents);
          if (contents.find((x2) => x2 && (!("type" in x2) || x2.type === "text" && x2.content?.length > 0 || x2.type !== "customEmoji")) || contents.filter((x2) => x2 && "type" in x2 && x2.type === "customEmoji").length > 30) isJumboable = false;
        };
        var recursiveCheck = recursiveCheck2;
        var isJumboable = true;
        if (shouldDebug ? DebuggerContext.connected : true) recursiveCheck2(message2.content);
      }
      var mattachments = message2.attachments ?? [];
      var removeAttachments = /* @__PURE__ */ new Set();
      for (var i1 in mattachments) {
        if (!storage.stickers.realify || !storage.stickers.enabled) continue;
        var attachment = mattachments[i1];
        if (attachment.attachmentType !== "image" || !attachment.filename.endsWith(".gif") || !attachment.isAnimated || !attachment.width || !attachment.height) continue;
        if (attachmentUrlRegex.test(attachment.url)) {
          var id = attachment.filename.slice(0, -4);
          if (!id || !getStickerById(id)) continue;
          if (stickers.get(id)) {
            removeAttachments.add(Number(i1));
            continue;
          }
          var name = getStickerById(id)?.name ?? attachment.description ?? "FakeSticker";
          removeAttachments.add(Number(i1));
          stickers.set(id, {
            format_type: 4,
            name,
            id,
            src: attachment.url,
            width: attachment.width,
            height: attachment.height
          });
        }
      }
      message2.attachments = mattachments.filter((_4, i2) => !removeAttachments.has(i2));
      if (stickers.size) {
        message2.stickers ??= [];
        for (var { format_type, name: name1, id: id1, src, width, height } of stickers.values()) message2.stickers.push({
          format_type,
          id: id1,
          asset: id1,
          name: name1 + isFakerAlt,
          url: src,
          width,
          height,
          renderMode: 0
        });
      }
      return row;
    }, "realify.RowGenerator");
    patcher6.before(import_react_native19.View, "render", (args) => {
      var props = args?.[0];
      var textMain = props?.children?.[0]?.props;
      var textSub = props?.children?.[1]?.props;
      var isEmoji = textMain?.children?.endsWith?.(":");
      if (textMain?.children?.endsWith?.(isEmoji ? `${isFakerAlt}:` : isFakerAlt) && textMain?.color === "header-primary" && textMain?.variant === (isEmoji ? "text-md/bold" : "heading-md/extrabold") && textSub?.children && textSub?.variant === "text-sm/medium") {
        textMain.children = isEmoji ? `${textMain.children.slice(0, -(isFakerAlt.length + 1))}:` : textMain.children.slice(0, -isFakerAlt.length);
        textSub.children += ` This is a FreeNitro ${isEmoji ? "emoji" : "sticker"} and renders like a real ${isEmoji ? "emoji" : "sticker"} only to you. Appears as a link to non-plugin users.`;
        return args;
      }
    }, "realify.View");
    patcher6.after(StickerDetailActionSheet, "type", ([props], ret) => {
      var sticker = ret?.props?.children?.props?.children?.props?.sticker;
      if (sticker?.name && props?.renderableSticker?.name) {
        sticker.name = props.renderableSticker.name;
        return ret;
      }
    }, "realify.StickerDetailActionSheet");
  }
  var import_react_native19, cdnLinks, emojiUrlRegex, stickerUrlRegex, attachmentUrlRegex, isFakerAlt, shouldDebug;
  var init_realify = __esm({
    "src/plugins/vengeance/freenitro/patches/realify.tsx"() {
      "use strict";
      import_react_native19 = __toESM(require_react_native(), 1);
      init_debugger();
      cdnLinks = [
        "cdn.discordapp.com",
        "media.discordapp.net"
      ];
      emojiUrlRegex = /\/emojis\/(\d+?)\.(png|webp|gif)/;
      stickerUrlRegex = /\/stickers\/(\d+?)\.(png|webp|gif)/;
      attachmentUrlRegex = /\/attachments\/\d+?\/\d+?\/(\d+?)\.gif/;
      isFakerAlt = "\u200B [FreeNitro fake]";
      shouldDebug = false;
    }
  });

  // src/plugins/vengeance/freenitro/index.tsx
  var import_react_native20, emojiSizeLadder, stickerSizeLadder, useSettingsStyles, plugin3;
  var init_freenitro = __esm({
    "src/plugins/vengeance/freenitro/index.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_common();
      init_components();
      init_internals();
      init_src5();
      init_colors();
      import_react_native20 = __toESM(require_react_native(), 1);
      init_Wrapper();
      init_appIcons();
      init_nitroThemes();
      init_fakeify();
      init_realify();
      emojiSizeLadder = [
        32,
        48,
        64,
        128,
        160,
        256,
        512
      ];
      stickerSizeLadder = [
        32,
        64,
        128,
        160,
        256,
        512
      ];
      useSettingsStyles = createStyles({
        icon: {
          tintColor: SemanticColor.INTERACTIVE_NORMAL
        },
        slider: {
          backgroundColor: SemanticColor.CARD_PRIMARY_BG,
          paddingHorizontal: 12,
          paddingVertical: 8
        }
      });
      plugin3 = registerPlugin({
        name: "FreeNitro",
        author: "Vengeance",
        description: "Lets you send fake custom/animated emoji and stickers and use profile themes without having nitro.",
        id: "vengeance.freenitro",
        version: "1.0.0",
        icon: "GiftIcon"
      }, {
        beforeAppRender(context) {
          var _this, _loop = function(key2, predicate2) {
            patcher6.instead(canUseObj, key2, (args, original) => predicate2() || original.apply(_this, args));
          };
          var { revenge: { modules: modules2 }, storage, patcher: patcher6 } = context;
          var emojiPickerOpen = {
            current: /* @__PURE__ */ new Set()
          };
          var canUseObj = modules2.findByProps("canUseCustomStickersEverywhere");
          var predicates = [
            // Part of solution
            {
              key: "canUseEmojisEverywhere",
              predicate: () => !!emojiPickerOpen.current.size
            },
            {
              key: "canUseAnimatedEmojis",
              predicate: () => !!emojiPickerOpen.current.size
            },
            // Part of solution
            {
              key: "canUseCustomStickersEverywhere",
              predicate: () => storage.stickers.enabled
            },
            // Part of solution
            {
              key: "canUseClientThemes",
              predicate: () => storage.extra.nitroThemes
            },
            // Resolves soundboard
            {
              key: "canUseSoundboardEverywhere",
              predicate: () => storage.extra.soundboard
            }
          ];
          for (var { key, predicate } of predicates) _this = this, _loop(key, predicate);
          patchFakeify(context, emojiPickerOpen);
          patchRealify(context);
          patchAppIcons(context);
          patchNitroThemes(context);
        },
        initializeStorage() {
          return {
            bypassNitroCheck: true,
            hyperlinks: true,
            ignoreEmbeds: false,
            emoji: {
              enabled: true,
              size: 48,
              realify: true
            },
            stickers: {
              enabled: true,
              size: 160,
              realify: true
            },
            extra: {
              nitroThemes: true,
              appIcons: true,
              soundboard: true
            }
          };
        },
        SettingsComponent({ storage }) {
          useObserveStorage([
            storage
          ]);
          var settingsStyles = useSettingsStyles();
          return /* @__PURE__ */ jsx(import_react_native20.ScrollView, {
            children: /* @__PURE__ */ jsxs(PageWrapper, {
              children: [
                /* @__PURE__ */ jsxs(TableRowGroup, {
                  title: "Global",
                  children: [
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Bypass Nitro check",
                      subLabel: "Forces the plugin to work even if you have Nitro",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("NitroWheelIcon")
                      }),
                      value: storage.bypassNitroCheck,
                      onValueChange: (v2) => storage.bypassNitroCheck = v2
                    }),
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Hyperlink",
                      subLabel: "Turns fake emojis and fake stickers into hyperlinks",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("LinkIcon")
                      }),
                      value: storage.hyperlinks,
                      onValueChange: (v2) => storage.hyperlinks = v2
                    }),
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Ignore no embed permissions alert",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("WarningIcon")
                      }),
                      value: storage.ignoreEmbeds,
                      onValueChange: (v2) => storage.ignoreEmbeds = v2
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs(TableRowGroup, {
                  title: "Emoji",
                  children: [
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Enabled",
                      subLabel: "Allows sending fake emojis",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("emoji-neutral")
                      }),
                      value: storage.emoji.enabled,
                      onValueChange: (v2) => storage.emoji.enabled = v2
                    }),
                    /* @__PURE__ */ jsx(TableRow, {
                      label: "Size",
                      subLabel: "Size of the emojis when sending",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("ImageIcon")
                      }),
                      trailing: /* @__PURE__ */ jsx(Text, {
                        variant: "text-md/medium",
                        children: storage.emoji.size
                      })
                    }),
                    /* @__PURE__ */ jsx(import_react_native20.View, {
                      style: settingsStyles.slider,
                      children: /* @__PURE__ */ jsx(Slider, {
                        value: emojiSizeLadder.indexOf(storage.emoji.size) + 1,
                        step: 1,
                        minimumValue: 1,
                        maximumValue: emojiSizeLadder.length,
                        onValueChange: (v2) => storage.emoji.size = emojiSizeLadder[v2 - 1]
                      })
                    }),
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Realify",
                      subLabel: "Turn fake emojis into real ones",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("PencilSparkleIcon")
                      }),
                      value: storage.emoji.realify,
                      onValueChange: (v2) => storage.emoji.realify = v2
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs(TableRowGroup, {
                  title: "Stickers",
                  children: [
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Enabled",
                      subLabel: "Allows sending fake stickers",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("StickerIcon")
                      }),
                      value: storage.stickers.enabled,
                      onValueChange: (v2) => storage.stickers.enabled = v2
                    }),
                    /* @__PURE__ */ jsx(TableRow, {
                      label: "Size",
                      subLabel: "Size of the stickers when sending",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("ImageIcon")
                      }),
                      trailing: /* @__PURE__ */ jsx(Text, {
                        variant: "text-md/medium",
                        children: storage.stickers.size
                      })
                    }),
                    /* @__PURE__ */ jsx(import_react_native20.View, {
                      style: settingsStyles.slider,
                      children: /* @__PURE__ */ jsx(Slider, {
                        value: stickerSizeLadder.indexOf(storage.stickers.size) + 1,
                        step: 1,
                        minimumValue: 1,
                        maximumValue: stickerSizeLadder.length,
                        onValueChange: (v2) => storage.stickers.size = stickerSizeLadder[v2 - 1]
                      })
                    }),
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Realify",
                      subLabel: "Turn fake stickers into real ones",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("PencilSparkleIcon")
                      }),
                      value: storage.stickers.realify,
                      onValueChange: (v2) => storage.stickers.realify = v2
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs(TableRowGroup, {
                  title: "Extras",
                  children: [
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Nitro client themes",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("PencilIcon")
                      }),
                      value: storage.extra.nitroThemes,
                      onValueChange: (v2) => storage.extra.nitroThemes = v2
                    }),
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Custom app icons",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("PencilIcon")
                      }),
                      value: storage.extra.appIcons,
                      onValueChange: (v2) => storage.extra.appIcons = v2
                    }),
                    /* @__PURE__ */ jsx(TableSwitchRow, {
                      label: "Free soundboard sounds",
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: getAssetIndexByName("PencilIcon")
                      }),
                      value: storage.extra.soundboard,
                      onValueChange: (v2) => storage.extra.soundboard = v2
                    })
                  ]
                }),
                /* @__PURE__ */ jsx(import_react_native20.View, {
                  style: {
                    height: 12
                  }
                })
              ]
            })
          });
        }
      }, {
        external: false,
        manageable: true,
        enabled: false
      });
    }
  });

  // src/plugins/vengeance/newplugins/index.tsx
  function NewPluginsAlert({ plugins }) {
    var styles7 = useAlertStyles();
    return /* @__PURE__ */ jsx(AlertModal, {
      title: "New Grub Alert",
      content: `${plugins.length} new plugin${plugins.length !== 1 ? "s have" : " has"} been added to Vengeance!`,
      extraContent: plugins.map((pluh, i, a) => /* @__PURE__ */ jsx(Card, {
        border: "subtle",
        style: i !== a.length - 1 && {
          marginBottom: -12
        },
        children: /* @__PURE__ */ jsxs(Stack, {
          direction: "horizontal",
          spacing: 8,
          children: [
            /* @__PURE__ */ jsx(import_react_native21.Image, {
              source: (pluh.icon && getAssetIndexByName(pluh.icon)) ?? getAssetIndexByName("UnknownGameIcon"),
              style: styles7.icon
            }),
            /* @__PURE__ */ jsxs(Stack, {
              direction: "vertical",
              spacing: 0,
              style: {
                flexShrink: 1
              },
              children: [
                /* @__PURE__ */ jsx(Text, {
                  variant: "heading-lg/semibold",
                  children: pluh.name
                }),
                /* @__PURE__ */ jsxs(Text, {
                  variant: "heading-md/medium",
                  color: "text-muted",
                  style: {
                    marginBottom: 4
                  },
                  children: [
                    "by ",
                    pluh.author
                  ]
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/medium",
                  children: pluh.description
                })
              ]
            })
          ]
        })
      }, pluh.id)),
      actions: /* @__PURE__ */ jsx(AlertActionButton, {
        variant: "secondary",
        text: "Okay"
      })
    });
  }
  var import_react_native21, useAlertStyles;
  var init_newplugins = __esm({
    "src/plugins/vengeance/newplugins/index.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_src4();
      init_common();
      init_components();
      init_internals();
      init_colors();
      import_react_native21 = __toESM(require_react_native(), 1);
      registerPlugin({
        name: "Plugin Notifier",
        author: "Vengeance",
        description: "Notifies you when a new plugin is added to Vengeance",
        id: "vengeance.pluginnotifier",
        version: "1.0.0",
        icon: "PencilSparkleIcon"
      }, {
        afterAppRender({ storage }) {
          var plugs = Object.entries(registeredPlugins).filter(([_3, x2]) => !x2.external && x2.manageable);
          storage.checkedPlugins = storage.checkedPlugins.filter((x2) => plugs.find(([key]) => x2 === key));
          var newPlugs = plugs.filter(([key]) => !storage.checkedPlugins.includes(key));
          if (newPlugs.length) {
            storage.checkedPlugins = plugs.map(([key]) => key);
            openAlert("vengeance.pluginnotifier.newpluginsalert", /* @__PURE__ */ jsx(NewPluginsAlert, {
              plugins: newPlugs.map(([_3, val]) => val)
            }));
          }
        },
        initializeStorage() {
          return {
            checkedPlugins: Object.entries(registeredPlugins).filter(([_3, x2]) => !x2.external && x2.manageable).map(([key]) => key)
          };
        }
      }, {
        external: false,
        manageable: true,
        enabled: true
      });
      useAlertStyles = createStyles({
        icon: {
          tintColor: SemanticColor.TEXT_NORMAL,
          width: 20,
          height: 20,
          marginTop: 3
        }
      });
    }
  });

  // libraries/modules/src/common/commands.ts
  var ApplicationCommandOptionType, ApplicationCommandInputType, ApplicationCommandType;
  var init_commands = __esm({
    "libraries/modules/src/common/commands.ts"() {
      "use strict";
      ApplicationCommandOptionType = /* @__PURE__ */ function(ApplicationCommandOptionType2) {
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["SubCommand"] = 1] = "SubCommand";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["SubCommandGroup"] = 2] = "SubCommandGroup";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["String"] = 3] = "String";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["Integer"] = 4] = "Integer";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["Boolean"] = 5] = "Boolean";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["User"] = 6] = "User";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["Channel"] = 7] = "Channel";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["Role"] = 8] = "Role";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["Mentionable"] = 9] = "Mentionable";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["Number"] = 10] = "Number";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["Attachment"] = 11] = "Attachment";
        return ApplicationCommandOptionType2;
      }({});
      ApplicationCommandInputType = /* @__PURE__ */ function(ApplicationCommandInputType2) {
        ApplicationCommandInputType2[ApplicationCommandInputType2["BuiltIn"] = 0] = "BuiltIn";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BuiltInText"] = 1] = "BuiltInText";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BuiltInIntegration"] = 2] = "BuiltInIntegration";
        ApplicationCommandInputType2[ApplicationCommandInputType2["Bot"] = 3] = "Bot";
        ApplicationCommandInputType2[ApplicationCommandInputType2["Placeholder"] = 4] = "Placeholder";
        return ApplicationCommandInputType2;
      }({});
      ApplicationCommandType = /* @__PURE__ */ function(ApplicationCommandType2) {
        ApplicationCommandType2[ApplicationCommandType2["ChatInput"] = 1] = "ChatInput";
        ApplicationCommandType2[ApplicationCommandType2["User"] = 2] = "User";
        ApplicationCommandType2[ApplicationCommandType2["Message"] = 3] = "Message";
        return ApplicationCommandType2;
      }({});
    }
  });

  // src/plugins/vengeance/commands/cmds/debug.ts
  var import_react_native22, MinimumSupportedBuildNumber2, getDeviceInfo, getDeviceManufacturer, debug_default;
  var init_debug = __esm({
    "src/plugins/vengeance/commands/cmds/debug.ts"() {
      "use strict";
      init_common();
      init_finders();
      init_native();
      init_lazy();
      init_commands();
      import_react_native22 = __toESM(require_react_native(), 1);
      MinimumSupportedBuildNumber2 = ReactNative.Platform.select({
        default: 254e3,
        ios: 66559
      });
      ({ getDeviceInfo, getDeviceManufacturer } = lazyValue(() => findByProps("getDeviceInfo")));
      debug_default = {
        inputType: ApplicationCommandInputType.BuiltIn,
        name: "debug",
        description: "Sends helpful debug information in chat",
        options: [
          {
            name: "ephemeral",
            description: "Sends the message as ephemeral",
            type: ApplicationCommandOptionType.Boolean
          }
        ],
        execute([ephemeral], ctx) {
          var isOutdated = !(Number(ClientInfoModule.Build) > MinimumSupportedBuildNumber2);
          var runtimeProps = HermesInternal.getRuntimeProperties();
          var PlatformConstants = import_react_native22.Platform.constants;
          var content = [
            "**Vengeance Debug**",
            `> **Vengeance:** ${"c3bb6d2"}${true ? "-dirty" : ""} (${__PYON_LOADER__.loaderName} v${__PYON_LOADER__.loaderVersion})`,
            `> **Discord:** ${ClientInfoModule.Version} (${ClientInfoModule.Build})`,
            `> **React:** ${React.version} (**RN** ${runtimeProps["OSS Release Version"]?.slice(7)})`,
            `> **Hermes:** ${runtimeProps["OSS Release Version"]} (bytecode ${runtimeProps["Bytecode Version"]})`,
            `> **OS:** ${PlatformConstants.systemName ?? "Android"} ${PlatformConstants.Release ?? PlatformConstants.osVersion}${PlatformConstants.Version ? ` (SDK ${PlatformConstants.Version})` : ""}`,
            `> **Device:** ${getDeviceInfo()} (by ${getDeviceManufacturer()})`,
            isOutdated && "> :warning: Using outdated and unsupported version",
            ClientInfoModule.ReleaseChannel.includes("canary") && `> :warning: Using release **${ClientInfoModule.ReleaseChannel}**`
          ].filter((row) => !!row).join("\n");
          if (ephemeral?.value) messages.sendBotMessage(ctx.channel.id, content);
          else messages.sendMessage(ctx.channel.id, {
            content
          });
        }
      };
    }
  });

  // src/plugins/vengeance/commands/cmds/plugins.ts
  var plugins_default;
  var init_plugins = __esm({
    "src/plugins/vengeance/commands/cmds/plugins.ts"() {
      "use strict";
      init_common();
      init_commands();
      init_internals();
      plugins_default = {
        inputType: ApplicationCommandInputType.BuiltIn,
        name: "plugins",
        description: "Sends a formatted list of your enabled plugins",
        options: [
          {
            name: "ephemeral",
            description: "Sends the message as ephemeral",
            type: ApplicationCommandOptionType.Boolean
          }
        ],
        execute([ephemeral], ctx) {
          var allPlugins = Object.values(registeredPlugins);
          var externalPlugins = allPlugins.filter((plugin4) => plugin4.external && plugin4.enabled);
          var vengeancePlugins = allPlugins.filter((plugin4) => !plugin4.external && plugin4.id.startsWith("vengeance.") && plugin4.manageable && plugin4.enabled);
          var internalPlugins = allPlugins.filter((plugin4) => !plugin4.external && !plugin4.id.startsWith("vengeance.") && plugin4.manageable && plugin4.enabled);
          var mapPlugin = (plugin4) => plugin4.name;
          var content = [
            externalPlugins.length && `> **External Plugins** (${externalPlugins.length})`,
            externalPlugins.map(mapPlugin).join(",  "),
            vengeancePlugins.length && `> **Vengeance Plugins** (${vengeancePlugins.length})`,
            vengeancePlugins.map(mapPlugin).join(",  "),
            internalPlugins.length && `> **Internal Plugins** (${internalPlugins.length})`,
            internalPlugins.map(mapPlugin).join(",  ")
          ].filter((row) => !!row).join("\n");
          if (ephemeral?.value) messages.sendBotMessage(ctx.channel.id, content);
          else messages.sendMessage(ctx.channel.id, {
            content
          });
        }
      };
    }
  });

  // src/plugins/vengeance/commands/cmds/venfetch.ts
  var import_react_native23, MinimumSupportedBuildNumber3, getDeviceInfo2, getDeviceManufacturer2, getCurrentUser, message, prime, colorRange, venfetch_default;
  var init_venfetch = __esm({
    "src/plugins/vengeance/commands/cmds/venfetch.ts"() {
      "use strict";
      init_common();
      init_finders();
      init_native();
      init_lazy();
      init_commands();
      init_internals();
      import_react_native23 = __toESM(require_react_native(), 1);
      MinimumSupportedBuildNumber3 = ReactNative.Platform.select({
        default: 254e3,
        ios: 66559
      });
      ({ getDeviceInfo: getDeviceInfo2, getDeviceManufacturer: getDeviceManufacturer2 } = lazyValue(() => findByProps("getDeviceInfo")));
      getCurrentUser = lazyValue(() => findProp("getCurrentUser"));
      message = ({ baseClr, keyClr, titleClr, username, title, discord, os, device, plugins }) => `
\`\`\`ansi
\x1B[0;3${baseClr}m \u2584\u2580\u2580\u2580\u2580\u2580\u2584\u2584\u2584\u2584\u2584\u2584\u2580\u2580\u2580\u2580\u2580\u2584     \x1B[1;4;3${baseClr}mVengeance@${username}\x1B[0;3${titleClr}m ${title}
\x1B[0;3${baseClr}m\u2588                  \u2588    \x1B[1;3${keyClr}mDiscord\x1B[0m ${discord}
\x1B[0;3${baseClr}m\u2588   \u2584\u2584\u2584\u2584     \u2584\u2584\u2584\u2584   \u2588   \x1B[1;3${keyClr}mOS\x1B[0m ${os}
\x1B[0;3${baseClr}m\u2588   \u2580\u2588\u2588\u2588\u2580   \u2580\u2588\u2588\u2588\u2580   \u2588   \x1B[1;3${keyClr}mDevice\x1B[0m ${device}
\x1B[0;3${baseClr}m \u2588                  \u2588   \x1B[1;3${keyClr}mPlugins\x1B[0m ${plugins}
\x1B[0;3${baseClr}m \u2580\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584        \u2588    \x1B[0m
\x1B[0;3${baseClr}m         \u2588      \u2584\u2584\u2580     \x1B[0m\x1B[0;40;30m\u2588\u2593\u2592\u2592\u2591 \x1B[0m   \x1B[0;41;31m\u2588\u2593\u2592\u2592\u2591 \x1B[0m   \x1B[0;44;32m\u2588\u2593\u2592\u2592\u2591 \x1B[0m   \x1B[0;44;33m\u2588\u2593\u2592\u2592\u2591 \x1B[0m
\x1B[0;3${baseClr}m          \u2580\u2580\u2580\u2580\u2580\u2580\u2580       \x1B[0m\x1B[0;43;34m\u2588\u2593\u2592\u2592\u2591 \x1B[0m   \x1B[0;41;35m\u2588\u2593\u2592\u2592\u2591 \x1B[0m   \x1B[0;44;36m\u2588\u2593\u2592\u2592\u2591 \x1B[0m   \x1B[0;42;37m\u2588\u2593\u2592\u2592\u2591 \x1B[0m
\`\`\`
`;
      prime = 524287;
      colorRange = 8;
      venfetch_default = {
        inputType: ApplicationCommandInputType.BuiltIn,
        name: "venfetch",
        aliases: [
          "neofetch",
          "fastfetch",
          "revfetch"
        ],
        description: "Sends a neofetch/fastfetch inspired message. Like /debug, but more stylish!",
        options: [
          {
            name: "ephemeral",
            description: "Sends the message as ephemeral",
            type: ApplicationCommandOptionType.Boolean
          },
          {
            name: "color",
            description: "Coolor",
            type: ApplicationCommandOptionType.Integer
          }
        ],
        execute(args, ctx) {
          var ephemeral = args.find((a) => a.name === "ephemeral");
          var color = args.find((a) => a.name === "color");
          var PlatformConstants = import_react_native23.Platform.constants;
          var isOutdated = !(Number(ClientInfoModule.Build) > MinimumSupportedBuildNumber3);
          var allPlugins = Object.values(registeredPlugins);
          var externalPlugins = allPlugins.filter((plugin4) => plugin4.external && plugin4.enabled);
          var vengeancePlugins = allPlugins.filter((plugin4) => !plugin4.external && plugin4.id.startsWith("vengeance.") && plugin4.manageable && plugin4.enabled);
          var internalPlugins = allPlugins.filter((plugin4) => !plugin4.external && !plugin4.id.startsWith("vengeance.") && plugin4.manageable && plugin4.enabled);
          var { username, id } = getCurrentUser() ?? {
            username: "johndoe",
            id: prime.toString()
          };
          var clrMap = [
            [
              0,
              7
            ],
            [
              1,
              5
            ],
            [
              2,
              3
            ],
            [
              4,
              6
            ]
          ];
          var baseClr = color && Number.isFinite(Number(color.value)) ? Math.abs(Number(color.value) % colorRange) : Number(BigInt(id) / BigInt(prime) % BigInt(8));
          var keyClr = clrMap.find(([a, b5]) => a === baseClr || b5 === baseClr)?.find((x2) => x2 !== baseClr) ?? 0;
          var content = message({
            baseClr,
            keyClr,
            titleClr: baseClr === 0 ? 7 : 0,
            username,
            title: `${"c3bb6d2"}${true ? "-dirty" : ""} (${__PYON_LOADER__.loaderName} v${__PYON_LOADER__.loaderVersion})`,
            discord: `${ClientInfoModule.Version} (${ClientInfoModule.Build}) ${isOutdated ? "\u26B0" : ""}${ClientInfoModule.ReleaseChannel.includes("canary") ? "\u{1F329}" : ""}`,
            os: `${PlatformConstants.systemName ?? "Android"} ${PlatformConstants.Release ?? PlatformConstants.osVersion}${PlatformConstants.Version ? ` (SDK ${PlatformConstants.Version})` : ""}`,
            device: `${getDeviceInfo2()} (by ${getDeviceManufacturer2()})`,
            plugins: [
              externalPlugins.length && `${externalPlugins.length} (external)`,
              vengeancePlugins.length && `${vengeancePlugins.length} (vengeance)`,
              internalPlugins.length && `${internalPlugins.length} (internal)`
            ].filter((section) => !!section).join(", ")
          });
          if (ephemeral?.value) messages.sendBotMessage(ctx.channel.id, content);
          else messages.sendMessage(ctx.channel.id, {
            content
          });
        }
      };
    }
  });

  // src/plugins/vengeance/commands/index.ts
  var cmds;
  var init_commands2 = __esm({
    "src/plugins/vengeance/commands/index.ts"() {
      "use strict";
      init_common();
      init_internals();
      init_commands();
      init_debug();
      init_plugins();
      init_venfetch();
      cmds = [
        debug_default,
        plugins_default,
        venfetch_default
      ];
      registerPlugin({
        name: "Commands",
        author: "Vengeance",
        description: `Adds ${cmds.length} awesome QOL commands to the client (${cmds.map(({ name }) => `/${name}`).join(", ")})`,
        id: "vengeance.commands",
        version: "1.0.0",
        icon: "SlashBoxIcon"
      }, {
        afterAppRender({ patcher: patcher6 }) {
          patcher6.after(commands, "getBuiltInCommands", (_3, ret) => {
            var lastId = Math.min(...ret.map((a) => Number(a.id))) - 1;
            var cmdussy = [
              ...cmds
            ];
            for (var cmd of cmds) for (var alias of cmd.aliases ?? []) cmdussy.push({
              ...cmd,
              name: alias
            });
            return [
              ...ret,
              ...cmdussy.map(({ inputType, name, description, options, execute }, i) => ({
                id: (lastId - i).toString(),
                untranslatedName: name,
                displayName: name,
                type: ApplicationCommandType.ChatInput,
                inputType,
                applicationId: "-1",
                untranslatedDescription: description,
                displayDescription: description,
                options: options.map(({ name: name2, description: description2, type, required }) => ({
                  name: name2,
                  displayName: name2,
                  type,
                  description: description2,
                  displayDescription: description2,
                  required
                })),
                execute
              }))
            ];
          });
        }
      }, {
        external: false,
        manageable: true,
        enabled: true
      });
    }
  });

  // src/plugins/vengeance/messages-tab/index.tsx
  var ScreenName;
  var init_messages_tab = __esm({
    "src/plugins/vengeance/messages-tab/index.tsx"() {
      "use strict";
      init_react_jsx_runtime();
      init_internals();
      init_lazy();
      ScreenName = "palmdevs.messages-tab.messages";
      registerPlugin({
        name: "Messages Tab",
        author: "Palm",
        description: "Brings the messages tab back",
        id: "vengeance.palmdevs.messages-tab",
        version: "1.0.0",
        icon: "ic_message"
      }, {
        beforeAppRender({ patcher: patcher6, revenge: { modules: modules2 } }) {
          var Messages = modules2.findByFilePath("modules/main_tabs_v2/native/tabs/messages/Messages.tsx", true);
          var useTabBarTabOptions = modules2.findByName("useTabBarTabOptions");
          var SelectedGuildStore = revenge.modules.findByProps("getLastSelectedGuildId");
          var RouterUtils = modules2.findByProps("transitionTo");
          var NavigationBottomTabs = modules2.findByProps("createBottomTabNavigator");
          var navigation;
          patcher6.after(NavigationBottomTabs, "createBottomTabNavigator", (_3, Tab) => {
            patcher6.before(Tab, "Navigator", ([props]) => {
              var screens = props.children.props.children;
              var origTabBar = props.tabBar;
              props.tabBar = (tbProps) => {
                navigation = tbProps.navigation;
                return origTabBar(tbProps);
              };
              var tabBarTabOptions = useTabBarTabOptions();
              if (!screens.some((screen) => screen?.props?.name === ScreenName)) screens.splice(1, 0, /* @__PURE__ */ jsx(Tab.Screen, {
                options: tabBarTabOptions.messages({
                  navigation: lazyValue(() => navigation)
                }),
                name: ScreenName,
                component: () => Messages.type({
                  renderedViaPlugin: true
                })
              }));
            });
          });
          patcher6.instead(Messages, "type", ([props], orig) => {
            if (props.renderedViaPlugin) return orig(props);
            setImmediate(() => {
              var lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
              RouterUtils.transitionToGuild(lastSelectedGuildId);
              navigation.navigate(ScreenName);
            });
            return null;
          });
          patcher6.instead(RouterUtils, "transitionTo", ([path, opts], orig) => {
            if (path.startsWith("/channels/@me")) {
              if (opts?.navigationReplace) navigation.navigate(ScreenName);
              if (opts?.openChannel) orig(path, {
                navigationReplace: false,
                openChannel: opts?.openChannel ?? true
              });
            } else orig(path, opts);
          });
          patcher6.instead(modules2.findProp("Messages", "DragPreview"), "type", () => null);
        }
      }, {
        external: false,
        manageable: true,
        enabled: false
      });
    }
  });

  // src/plugins/vengeance/restore-devices-setting/index.ts
  var init_restore_devices_setting = __esm({
    "src/plugins/vengeance/restore-devices-setting/index.ts"() {
      "use strict";
      init_internals();
      registerPlugin({
        name: "Restore Devices Setting",
        author: "Palm",
        description: "Brings the Devices settings page back",
        id: "vengeance.palmdevs.restore-devices-setting",
        version: "1.0.0",
        icon: "LaptopPhoneIcon"
      }, {
        beforeAppRender({ patcher: patcher6, revenge: { modules: modules2 } }) {
          var DevicesSetting = modules2.findByFilePath("modules/main_tabs_v2/native/settings/definitions/DevicesSetting.tsx", true);
          patcher6.instead(DevicesSetting, "usePredicate", () => true);
        }
      }, {
        external: false,
        manageable: true,
        enabled: false
      });
    }
  });

  // src/plugins/vengeance/index.ts
  var init_vengeance = __esm({
    "src/plugins/vengeance/index.ts"() {
      "use strict";
      init_notrack();
      init_freenitro();
      init_newplugins();
      init_commands2();
      init_messages_tab();
      init_restore_devices_setting();
    }
  });

  // src/plugins/index.ts
  var plugins_exports = {};
  var init_plugins2 = __esm({
    "src/plugins/index.ts"() {
      "use strict";
      init_assets();
      init_settings2();
      init_staff_settings();
      init_developer_settings();
      init_warnings();
      init_vengeance();
    }
  });

  // src/index.ts
  init_async_to_generator();
  init_functions();
  init_library();
  init_constants();
  init_native();
  init_src();
  init_errors();
  Object.freeze = Object.seal = (o) => o;
  function initialize() {
    return _initialize.apply(this, arguments);
  }
  function _initialize() {
    _initialize = // ! This function is BLOCKING, so we need to make sure it's as fast as possible
    _async_to_generator(function* () {
      try {
        var { createModulesLibrary: createModulesLibrary2 } = yield Promise.resolve().then(() => (init_src2(), src_exports));
        var ModulesLibraryPromise = createModulesLibrary2();
        var [{ AppLibrary: AppLibrary2 }, { AssetsLibrary: AssetsLibrary2 }, UIColorsLibrary, { SettingsUILibrary: SettingsUILibrary2 }, { ReactJSXLibrary: ReactJSXLibrary2 }] = yield Promise.all([
          Promise.resolve().then(() => (init_src3(), src_exports2)),
          Promise.resolve().then(() => (init_src4(), src_exports3)),
          Promise.resolve().then(() => (init_colors(), colors_exports)),
          Promise.resolve().then(() => (init_settings(), settings_exports)),
          Promise.resolve().then(() => (init_jsx(), jsx_exports))
        ]);
        var ModulesLibrary = yield ModulesLibraryPromise;
        var [{ startPlugins: startPlugins2, registerExternalPlugins: registerExternalPlugins2 }, { awaitStorage: awaitStorage2 }, { settings: settings2, pluginsStates: pluginsStates2 }] = yield Promise.all([
          Promise.resolve().then(() => (init_src7(), src_exports6)),
          Promise.resolve().then(() => (init_src5(), src_exports4)),
          Promise.resolve().then(() => (init_src6(), src_exports5))
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
        yield Promise.resolve().then(() => (init_plugins2(), plugins_exports));
        yield registerExternalPlugins2();
        yield awaitStorage2(settings2, pluginsStates2);
        yield startPlugins2();
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
  Promise._m = (promise, err3) => {
    if (err3) setTimeout(() => {
      if (promise._h === 0) logger4.error(`Unhandled promise rejection: ${getErrorStack(err3)}`);
    }, ErrorTypeWhitelist.some((it) => err3 instanceof it) ? 0 : 2e3);
  };
  if (typeof __r !== "undefined") initialize();
  function onceIndexRequired() {
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
