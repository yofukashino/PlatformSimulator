import { types } from "replugged";
export namespace Types {
  export import DefaultTypes = types;
  export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}
  export interface TitleBarClasses {
    focused: string;
    macButton: string;
    macButtonClose: string;
    macButtonMaximize: string;
    macButtonMinimize: string;
    macButtons: string;
    macDragRegion: string;
    titleBar: string;
    typeMacOS: string;
    typeMacOSWithFrame: string;
    typeWindows: string;
    unfocused: string;
    winButton: string;
    winButtonClose: string;
    winButtonMinMax: string;
    withBackgroundOverride: string;
    withFrame: string;
    wordmark: string;
    wordmarkMacOS: string;
    wordmarkWindows: string;
  }
  export interface PlatformChecks {
    PlatformTypes: {
      WINDOWS: string;
      OSX: string;
      LINUX: string;
      WEB: string;
    };
    getNativePlatform: DefaultTypes.AnyFunction;
    getOS: DefaultTypes.AnyFunction;
    getPlatform: DefaultTypes.AnyFunction;
    getPlatformName: DefaultTypes.AnyFunction;
    isAndroid: DefaultTypes.AnyFunction;
    isAndroidChrome: DefaultTypes.AnyFunction;
    isAndroidWeb: DefaultTypes.AnyFunction;
    isDesktop: DefaultTypes.AnyFunction;
    isIOS: DefaultTypes.AnyFunction;
    isLinux: DefaultTypes.AnyFunction;
    isMac: DefaultTypes.AnyFunction;
    isPlatformEmbedded: boolean;
    isWeb: DefaultTypes.AnyFunction;
    isWindows: DefaultTypes.AnyFunction;
  }
  export interface Socket {
    analytics: object;
    compressionHandler: object;
    connectionStartTime: number;
    connectionState: string;
    didForceClearGuildHashes: boolean;
    dispatchExceptionBackoff: object;
    dispatchSuccessTimer: number;
    expeditedHeartbeatTimeout: null | number;
    gatewayBackoff: object;
    handleIdentify: DefaultTypes.AnyFunction;
    hasConnectedOnce: boolean;
    heartbeatAck: boolean;
    heartbeatInterval: number;
    heartbeater: number;
    helloTimeout: null | number;
    identifyCompressedByteSize: number;
    identifyStartTime: number;
    identifyUncompressedByteSize: number;
    initialHeartbeatTimeout: null | number;
    isDeferringDispatches: boolean;
    isFastConnect: boolean;
    lastHeartbeatAckTime: number;
    nextReconnectIsImmediate: boolean;
    queuedDispatches: [];
    resumeAnalytics: object;
    resumeUrl: string;
    send: DefaultTypes.AnyFunction;
    seq: number;
    sessionId: string;
    token: string;
    webSocket: object;
    _events: object;
    _eventsCount: number;
    _maxListeners: undefined | number;
    addAnalytics: DefaultTypes.AnyFunction;
    callConnect: DefaultTypes.AnyFunction;
    close: DefaultTypes.AnyFunction;
    connect: DefaultTypes.AnyFunction;
    embeddedActivityClose: DefaultTypes.AnyFunction;
    expeditedHeartbeat: DefaultTypes.AnyFunction;
    getDeletedEntityIdsNotMatchingHash: DefaultTypes.AnyFunction;
    getIdentifyInitialGuildId: DefaultTypes.AnyFunction;
    getLogger: DefaultTypes.AnyFunction;
    hasQueuedDispatches: DefaultTypes.AnyFunction;
    isClosed: DefaultTypes.AnyFunction;
    isConnected: DefaultTypes.AnyFunction;
    isSessionEstablished: DefaultTypes.AnyFunction;
    lobbyConnect: DefaultTypes.AnyFunction;
    lobbyDisconnect: DefaultTypes.AnyFunction;
    lobbyVoiceStatesUpdate: DefaultTypes.AnyFunction;
    networkStateChange: DefaultTypes.AnyFunction;
    presenceUpdate: DefaultTypes.AnyFunction;
    processDispatchQueue: DefaultTypes.AnyFunction;
    processFirstQueuedDispatch: DefaultTypes.AnyFunction;
    remoteCommand: DefaultTypes.AnyFunction;
    requestForumUnreads: DefaultTypes.AnyFunction;
    requestGuildMembers: DefaultTypes.AnyFunction;
    requestLastMessages: DefaultTypes.AnyFunction;
    requestSoundboardSounds: DefaultTypes.AnyFunction;
    resetBackoff: DefaultTypes.AnyFunction;
    resetSocketOnError: DefaultTypes.AnyFunction;
    setResumeUrl: DefaultTypes.AnyFunction;
    speedTestCreate: DefaultTypes.AnyFunction;
    speedTestDelete: DefaultTypes.AnyFunction;
    streamCreate: DefaultTypes.AnyFunction;
    streamDelete: DefaultTypes.AnyFunction;
    streamPing: DefaultTypes.AnyFunction;
    streamSetPaused: DefaultTypes.AnyFunction;
    streamWatch: DefaultTypes.AnyFunction;
    updateGuildSubscriptions: DefaultTypes.AnyFunction;
    voiceServerPing: DefaultTypes.AnyFunction;
    voiceStateUpdate: DefaultTypes.AnyFunction;
    willReconnect: DefaultTypes.AnyFunction;
    _cleanup: DefaultTypes.AnyFunction;
    _clearHelloTimeout: DefaultTypes.AnyFunction;
    _connect: DefaultTypes.AnyFunction;
    _doFastConnectIdentify: DefaultTypes.AnyFunction;
    _doIdentify: DefaultTypes.AnyFunction;
    _doResume: DefaultTypes.AnyFunction;
    _doResumeOrIdentify: DefaultTypes.AnyFunction;
    _getConnectionPath: DefaultTypes.AnyFunction;
    _getGatewayUrl: DefaultTypes.AnyFunction;
    _handleClose: DefaultTypes.AnyFunction;
    _handleDispatch: DefaultTypes.AnyFunction;
    _handleDispatchWithoutQueueing: DefaultTypes.AnyFunction;
    _handleGenericDispatch: DefaultTypes.AnyFunction;
    _handleHeartbeatAck: DefaultTypes.AnyFunction;
    _handleHeartbeatTimeout: DefaultTypes.AnyFunction;
    _handleHello: DefaultTypes.AnyFunction;
    _handleInvalidSession: DefaultTypes.AnyFunction;
    _handleReady: DefaultTypes.AnyFunction;
    _handleReconnect: DefaultTypes.AnyFunction;
    _reset: DefaultTypes.AnyFunction;
    _sendHeartbeat: DefaultTypes.AnyFunction;
    _startHeartbeater: DefaultTypes.AnyFunction;
    _stopHeartbeater: DefaultTypes.AnyFunction;
    _updateLastHeartbeatAckTime: DefaultTypes.AnyFunction;
  }
  export interface GatewayConnectionStore {
    getSocket: () => Socket;
    initialize: DefaultTypes.AnyFunction;
    isConnected: DefaultTypes.AnyFunction;
    isConnectedOrOverlay: DefaultTypes.AnyFunction;
    isTryingToConnect: DefaultTypes.AnyFunction;
    lastTimeConnectedChanged: DefaultTypes.AnyFunction;
  }
  export interface PlatformWebsocket {
    browser: string;
    os: string;
  }
  export interface IdentityProps {
    capabilities: number;
    client_state: object;
    compress: boolean;
    presence: object;
    properties: object;
    token: string;
  }
  export interface DiscordNative {
    accessibility: {
      isAccessibilitySupportEnabled: DefaultTypes.AnyFunction;
    };
    app: {
      dock: {
        setBadge: DefaultTypes.AnyFunction;
        bounce: DefaultTypes.AnyFunction;
        cancelBounce: DefaultTypes.AnyFunction;
      };
      getBuildNumber: DefaultTypes.AnyFunction;
      getDefaultDoubleClickAction: DefaultTypes.AnyFunction;
      getModuleVersions: DefaultTypes.AnyFunction;
      getPath: DefaultTypes.AnyFunction;
      getReleaseChannel: DefaultTypes.AnyFunction;
      getVersion: DefaultTypes.AnyFunction;
      registerUserInteractionHandler: DefaultTypes.AnyFunction;
      relaunch: DefaultTypes.AnyFunction;
      setBadgeCount: DefaultTypes.AnyFunction;
    };
    clipboard: {
      copy: DefaultTypes.AnyFunction;
      copyImage: DefaultTypes.AnyFunction;
      cut: DefaultTypes.AnyFunction;
      paste: DefaultTypes.AnyFunction;
      read: DefaultTypes.AnyFunction;
    };
    clips: {
      deleteClip: DefaultTypes.AnyFunction;
      loadClip: DefaultTypes.AnyFunction;
      loadClipsDirectory: DefaultTypes.AnyFunction;
    };
    crashReporter: {
      getMetadata: DefaultTypes.AnyFunction;
      updateCrashReporter: DefaultTypes.AnyFunction;
    };
    desktopCapture: {
      getDesktopCaptureSources: DefaultTypes.AnyFunction;
    };
    features: {
      declareSupported: DefaultTypes.AnyFunction;
      supports: DefaultTypes.AnyFunction;
    };
    fileManager: {
      basename: DefaultTypes.AnyFunction;
      cleanupTempFiles: DefaultTypes.AnyFunction;
      dirname: DefaultTypes.AnyFunction;
      extname: DefaultTypes.AnyFunction;
      getModuleDataPathSync: DefaultTypes.AnyFunction;
      getModulePath: DefaultTypes.AnyFunction;
      join: DefaultTypes.AnyFunction;
      openFiles: DefaultTypes.AnyFunction;
      readLogFiles: DefaultTypes.AnyFunction;
      readTimeSeriesLogFiles: DefaultTypes.AnyFunction;
      saveWithDialog: DefaultTypes.AnyFunction;
      showItemInFolder: DefaultTypes.AnyFunction;
      showOpenDialog: DefaultTypes.AnyFunction;
    };
    gpuSettings: {
      getEnableHardwareAcceleration: DefaultTypes.AnyFunction;
      setEnableHardwareAcceleration: DefaultTypes.AnyFunction;
    };
    http: {
      getAPIEndpoint: DefaultTypes.AnyFunction;
      makeChunkedRequest: DefaultTypes.AnyFunction;
    };
    ipc: {
      invoke: DefaultTypes.AnyFunction;
      on: DefaultTypes.AnyFunction;
      send: DefaultTypes.AnyFunction;
    };
    isRenderer: boolean;
    nativeModules: {
      canBootstrapNewUpdater: boolean;
      ensureModule: DefaultTypes.AnyFunction;
      requireModule: DefaultTypes.AnyFunction;
    };
    os: {
      arch: string;
      release: string;
    };
    powerMonitor: {
      getSystemIdleTimeMs: DefaultTypes.AnyFunction;
      on: DefaultTypes.AnyFunction;
      removeAllListeners: DefaultTypes.AnyFunction;
      removeListener: DefaultTypes.AnyFunction;
    };
    powerSaveBlocker: {
      blockDisplaySleep: DefaultTypes.AnyFunction;
      cleanupDisplaySleep: DefaultTypes.AnyFunction;
      unblockDisplaySleep: DefaultTypes.AnyFunction;
    };
    process: {
      arch: string;
      env: object;
      platform: string;
    };
    processUtils: {
      flushCookies: DefaultTypes.AnyFunction;
      flushDNSCache: DefaultTypes.AnyFunction;
      flushStorageData: DefaultTypes.AnyFunction;
      getCPUCoreCount: DefaultTypes.AnyFunction;
      getCurrentCPUUsagePercent: DefaultTypes.AnyFunction;
      getCurrentMemoryUsageKB: DefaultTypes.AnyFunction;
      getLastCrash: DefaultTypes.AnyFunction;
      getMainArgvSync: DefaultTypes.AnyFunction;
      purgeMemory: DefaultTypes.AnyFunction;
    };
    remoteApp: {
      dock: {
        setBadge: DefaultTypes.AnyFunction;
        bounce: DefaultTypes.AnyFunction;
        cancelBounce: DefaultTypes.AnyFunction;
      };
      getBuildNumber: DefaultTypes.AnyFunction;
      getDefaultDoubleClickAction: DefaultTypes.AnyFunction;
      getModuleVersions: DefaultTypes.AnyFunction;
      getPath: DefaultTypes.AnyFunction;
      getReleaseChannel: DefaultTypes.AnyFunction;
      getVersion: DefaultTypes.AnyFunction;
      registerUserInteractionHandler: DefaultTypes.AnyFunction;
      relaunch: DefaultTypes.AnyFunction;
      setBadgeCount: DefaultTypes.AnyFunction;
    };
    remotePowerMonitor: {
      getSystemIdleTimeMs: DefaultTypes.AnyFunction;
      on: DefaultTypes.AnyFunction;
      removeAllListeners: DefaultTypes.AnyFunction;
      removeListener: DefaultTypes.AnyFunction;
    };
    safeStorage: {
      decryptString: DefaultTypes.AnyFunction;
      encryptString: DefaultTypes.AnyFunction;
      isEncryptionAvailable: DefaultTypes.AnyFunction;
    };
    setUncaughtExceptionHandler: DefaultTypes.AnyFunction;
    settings: {
      get: DefaultTypes.AnyFunction;
      getSync: DefaultTypes.AnyFunction;
      set: DefaultTypes.AnyFunction;
    };
    spellCheck: {
      getAvailableDictionaries: DefaultTypes.AnyFunction;
      on: DefaultTypes.AnyFunction;
      removeListener: DefaultTypes.AnyFunction;
      replaceMisspelling: DefaultTypes.AnyFunction;
      setLearnedWords: DefaultTypes.AnyFunction;
      setLocale: DefaultTypes.AnyFunction;
    };
    thumbar: { setThumbarButtons: DefaultTypes.AnyFunction };
    userDataCache: {
      cacheUserData: DefaultTypes.AnyFunction;
      deleteCache: DefaultTypes.AnyFunction;
      getCached: DefaultTypes.AnyFunction;
    };
    window: {
      USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean;
      blur: DefaultTypes.AnyFunction;
      close: DefaultTypes.AnyFunction;
      flashFrame: DefaultTypes.AnyFunction;
      focus: DefaultTypes.AnyFunction;
      fullscreen: DefaultTypes.AnyFunction;
      isAlwaysOnTop: DefaultTypes.AnyFunction;
      maximize: DefaultTypes.AnyFunction;
      minimize: DefaultTypes.AnyFunction;
      restore: DefaultTypes.AnyFunction;
      setAlwaysOnTop: DefaultTypes.AnyFunction;
      setBackgroundThrottling: DefaultTypes.AnyFunction;
      setDevtoolsCallbacks: DefaultTypes.AnyFunction;
      setProgressBar: DefaultTypes.AnyFunction;
      setZoomFactor: DefaultTypes.AnyFunction;
    };
  }

  export interface Settings {
    UI: string;
    WebSocket: string;
  }
}
export default Types;
