import { types } from "replugged";
import { Store } from "replugged/dist/renderer/modules/common/flux";
export namespace Types {
  export import DefaultTypes = types;
  export type GenericModule = Record<string, DefaultTypes.AnyFunction>;
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
  export interface PlatformCheckUtils {
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
  export interface GatewayConnectionStore extends Store {
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
    presence: {
      activities: unknown[];
      afk: boolean;
      broadcast?: unknown;
      since: number;
      status: string;
    };
    properties: {
      app_arch?: string;
      browser?: string;
      browser_user_agent?: string;
      browser_version?: string;
      client_build_number?: number;
      client_event_source?: null | string;
      client_version?: string;
      native_build_number?: number;
      os?: string;
      os_arch?: string;
      os_version?: string;
      release_channel?: string;
      system_locale?: string;
    };
    token: string;
  }
  export interface Modules {
    loadModules?: () => Promise<void>;
    PlatformCheckUtils?: PlatformCheckUtils;

    GatewayConnectionStore?: GatewayConnectionStore;
  }
  export interface Settings {
    UI: string;
    WebSocket: string;
  }
}
export default Types;

declare global {
  export const DiscordNative: {
    accessibility: {
      isAccessibilitySupportEnabled: Types.DefaultTypes.AnyFunction;
    };
    app: {
      dock: {
        setBadge: Types.DefaultTypes.AnyFunction;
        bounce: Types.DefaultTypes.AnyFunction;
        cancelBounce: Types.DefaultTypes.AnyFunction;
      };
      getBuildNumber: Types.DefaultTypes.AnyFunction;
      getDefaultDoubleClickAction: Types.DefaultTypes.AnyFunction;
      getModuleVersions: Types.DefaultTypes.AnyFunction;
      getPath: Types.DefaultTypes.AnyFunction;
      getReleaseChannel: Types.DefaultTypes.AnyFunction;
      getVersion: Types.DefaultTypes.AnyFunction;
      registerUserInteractionHandler: Types.DefaultTypes.AnyFunction;
      relaunch: Types.DefaultTypes.AnyFunction;
      setBadgeCount: Types.DefaultTypes.AnyFunction;
    };
    clipboard: {
      copy: Types.DefaultTypes.AnyFunction;
      copyImage: Types.DefaultTypes.AnyFunction;
      cut: Types.DefaultTypes.AnyFunction;
      paste: Types.DefaultTypes.AnyFunction;
      read: Types.DefaultTypes.AnyFunction;
    };
    clips: {
      deleteClip: Types.DefaultTypes.AnyFunction;
      loadClip: Types.DefaultTypes.AnyFunction;
      loadClipsDirectory: Types.DefaultTypes.AnyFunction;
    };
    crashReporter: {
      getMetadata: Types.DefaultTypes.AnyFunction;
      updateCrashReporter: Types.DefaultTypes.AnyFunction;
    };
    desktopCapture: {
      getDesktopCaptureSources: Types.DefaultTypes.AnyFunction;
    };
    features: {
      declareSupported: Types.DefaultTypes.AnyFunction;
      supports: Types.DefaultTypes.AnyFunction;
    };
    fileManager: {
      basename: Types.DefaultTypes.AnyFunction;
      cleanupTempFiles: Types.DefaultTypes.AnyFunction;
      dirname: Types.DefaultTypes.AnyFunction;
      extname: Types.DefaultTypes.AnyFunction;
      getModuleDataPathSync: Types.DefaultTypes.AnyFunction;
      getModulePath: Types.DefaultTypes.AnyFunction;
      join: Types.DefaultTypes.AnyFunction;
      openFiles: Types.DefaultTypes.AnyFunction;
      readLogFiles: Types.DefaultTypes.AnyFunction;
      readTimeSeriesLogFiles: Types.DefaultTypes.AnyFunction;
      saveWithDialog: Types.DefaultTypes.AnyFunction;
      showItemInFolder: Types.DefaultTypes.AnyFunction;
      showOpenDialog: Types.DefaultTypes.AnyFunction;
    };
    gpuSettings: {
      getEnableHardwareAcceleration: Types.DefaultTypes.AnyFunction;
      setEnableHardwareAcceleration: Types.DefaultTypes.AnyFunction;
    };
    http: {
      getAPIEndpoint: Types.DefaultTypes.AnyFunction;
      makeChunkedRequest: Types.DefaultTypes.AnyFunction;
    };
    ipc: {
      invoke: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      send: Types.DefaultTypes.AnyFunction;
    };
    isRenderer: boolean;
    nativeModules: {
      canBootstrapNewUpdater: boolean;
      ensureModule: Types.DefaultTypes.AnyFunction;
      requireModule: Types.DefaultTypes.AnyFunction;
    };
    os: {
      arch: string;
      release: string;
    };
    powerMonitor: {
      getSystemIdleTimeMs: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      removeAllListeners: Types.DefaultTypes.AnyFunction;
      removeListener: Types.DefaultTypes.AnyFunction;
    };
    powerSaveBlocker: {
      blockDisplaySleep: Types.DefaultTypes.AnyFunction;
      cleanupDisplaySleep: Types.DefaultTypes.AnyFunction;
      unblockDisplaySleep: Types.DefaultTypes.AnyFunction;
    };
    process: {
      arch: string;
      env: object;
      platform: string;
    };
    processUtils: {
      flushCookies: Types.DefaultTypes.AnyFunction;
      flushDNSCache: Types.DefaultTypes.AnyFunction;
      flushStorageData: Types.DefaultTypes.AnyFunction;
      getCPUCoreCount: Types.DefaultTypes.AnyFunction;
      getCurrentCPUUsagePercent: Types.DefaultTypes.AnyFunction;
      getCurrentMemoryUsageKB: Types.DefaultTypes.AnyFunction;
      getLastCrash: Types.DefaultTypes.AnyFunction;
      getMainArgvSync: Types.DefaultTypes.AnyFunction;
      purgeMemory: Types.DefaultTypes.AnyFunction;
    };
    remoteApp: {
      dock: {
        setBadge: Types.DefaultTypes.AnyFunction;
        bounce: Types.DefaultTypes.AnyFunction;
        cancelBounce: Types.DefaultTypes.AnyFunction;
      };
      getBuildNumber: Types.DefaultTypes.AnyFunction;
      getDefaultDoubleClickAction: Types.DefaultTypes.AnyFunction;
      getModuleVersions: Types.DefaultTypes.AnyFunction;
      getPath: Types.DefaultTypes.AnyFunction;
      getReleaseChannel: Types.DefaultTypes.AnyFunction;
      getVersion: Types.DefaultTypes.AnyFunction;
      registerUserInteractionHandler: Types.DefaultTypes.AnyFunction;
      relaunch: Types.DefaultTypes.AnyFunction;
      setBadgeCount: Types.DefaultTypes.AnyFunction;
    };
    remotePowerMonitor: {
      getSystemIdleTimeMs: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      removeAllListeners: Types.DefaultTypes.AnyFunction;
      removeListener: Types.DefaultTypes.AnyFunction;
    };
    safeStorage: {
      decryptString: Types.DefaultTypes.AnyFunction;
      encryptString: Types.DefaultTypes.AnyFunction;
      isEncryptionAvailable: Types.DefaultTypes.AnyFunction;
    };
    setUncaughtExceptionHandler: Types.DefaultTypes.AnyFunction;
    settings: {
      get: Types.DefaultTypes.AnyFunction;
      getSync: Types.DefaultTypes.AnyFunction;
      set: Types.DefaultTypes.AnyFunction;
    };
    spellCheck: {
      getAvailableDictionaries: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      removeListener: Types.DefaultTypes.AnyFunction;
      replaceMisspelling: Types.DefaultTypes.AnyFunction;
      setLearnedWords: Types.DefaultTypes.AnyFunction;
      setLocale: Types.DefaultTypes.AnyFunction;
    };
    thumbar: { setThumbarButtons: Types.DefaultTypes.AnyFunction };
    userDataCache: {
      cacheUserData: Types.DefaultTypes.AnyFunction;
      deleteCache: Types.DefaultTypes.AnyFunction;
      getCached: Types.DefaultTypes.AnyFunction;
    };
    window: {
      USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean;
      blur: Types.DefaultTypes.AnyFunction;
      close: Types.DefaultTypes.AnyFunction;
      flashFrame: Types.DefaultTypes.AnyFunction;
      focus: Types.DefaultTypes.AnyFunction;
      fullscreen: Types.DefaultTypes.AnyFunction;
      isAlwaysOnTop: Types.DefaultTypes.AnyFunction;
      maximize: Types.DefaultTypes.AnyFunction;
      minimize: Types.DefaultTypes.AnyFunction;
      restore: Types.DefaultTypes.AnyFunction;
      setAlwaysOnTop: Types.DefaultTypes.AnyFunction;
      setBackgroundThrottling: Types.DefaultTypes.AnyFunction;
      setDevtoolsCallbacks: Types.DefaultTypes.AnyFunction;
      setProgressBar: Types.DefaultTypes.AnyFunction;
      setZoomFactor: Types.DefaultTypes.AnyFunction;
    };
  };
}
