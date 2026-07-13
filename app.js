const els = {
  dock: document.querySelector(".dock"),
  conversationStream: document.getElementById("conversationStream"),
  subtitleSpeaker: document.getElementById("subtitleSpeaker"),
  subtitle: document.getElementById("subtitleText"),
  caption: document.querySelector(".captionFloat"),
  dialogueScroll: document.getElementById("dialogueScroll"),
  detailsToggle: document.getElementById("detailsToggle"),
  detailSheet: document.getElementById("detailSheet"),
  closeDetails: document.getElementById("closeDetails"),
  state: document.getElementById("stateLabel"),
  statusIndicator: document.getElementById("statusIndicator"),
  main: document.getElementById("mainButton"),
  quickToggle: document.getElementById("quickToggle"),
  dockMic: document.getElementById("dockMicButton"),
  mic: document.getElementById("micButton"),
  speaker: document.getElementById("speakerButton"),
  webTtsTest: document.getElementById("webTtsTestButton"),
  webTtsHeard: document.getElementById("webTtsHeardButton"),
  webTtsNotHeard: document.getElementById("webTtsNotHeardButton"),
  webTtsSync: document.getElementById("webTtsSyncButton"),
  webTtsAudibility: document.getElementById("webTtsAudibilityStatus"),
  webTtsRoute: document.getElementById("webTtsRouteStatus"),
  stop: document.getElementById("stopButton"),
  reconnect: document.getElementById("reconnectButton"),
  themePicker: document.getElementById("themePicker"),
  modelSelect: document.getElementById("modelSelect"),
  modelStatus: document.getElementById("modelStatus"),
  memoryRefresh: document.getElementById("memoryRefreshButton"),
  memorySearch: document.getElementById("memorySearchInput"),
  memorySearchClear: document.getElementById("memorySearchClearButton"),
  memoryStatus: document.getElementById("memoryStatus"),
  memoryList: document.getElementById("memoryList"),
  accessGate: document.getElementById("accessGate"),
  accessForm: document.getElementById("accessForm"),
  accessToken: document.getElementById("accessTokenInput"),
  accessSubmit: document.getElementById("accessSubmitButton"),
  accessStatus: document.getElementById("accessStatus"),
  voiceProfile: document.getElementById("voiceProfileSelect"),
  documentPdf: document.getElementById("documentPdfInput"),
  documentUpload: document.getElementById("documentUploadButton"),
  documentSummarize: document.getElementById("documentSummarizeButton"),
  documentQuestion: document.getElementById("documentQuestionInput"),
  documentAsk: document.getElementById("documentAskButton"),
  documentStatus: document.getElementById("documentStatus"),
  documentContextBar: document.getElementById("documentContextBar"),
  documentAnswer: document.getElementById("documentAnswer"),
  sttHint: document.getElementById("sttHint"),
  partial: document.getElementById("partialText"),
  final: document.getElementById("finalText"),
  reply: document.getElementById("replyText"),
  vad: document.getElementById("vadLevel"),
  turn: document.getElementById("turnLabel"),
  log: document.getElementById("eventLog"),
  manual: document.getElementById("manualInput"),
  manualSend: document.getElementById("manualSend")
};

const VOICE_UI_VERSION = "161";
const IRIS_PUBLIC_CONFIG = Object.freeze({
  backendOrigin: "",
  appBasePath: "/voice",
  serviceWorkerUrl: `/voice/service-worker.js?v=${VOICE_UI_VERSION}`,
  serviceWorkerScope: "/voice",
  ...(window.IRIS_PUBLIC_CONFIG || {})
});
const DEFAULT_VOICE_PROFILE = "jarvis_taiwan_sweet_female";
const FALLBACK_VOICE_PROFILES = new Set([
  DEFAULT_VOICE_PROFILE,
  "jarvis_taiwan_bright_female",
  "jarvis_mainland_soft_female",
  "jarvis_mainland_lively_female",
  "jarvis_liaoning_playful_female",
  "jarvis_shaanxi_bright_female",
  "jarvis_hongkong_friendly_female"
]);
let supportedVoiceProfiles = new Set(FALLBACK_VOICE_PROFILES);
const params = new URLSearchParams(window.location.search);
if (params.has("reset_ui")) {
  Promise.all([
    "caches" in window ? caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key)))) : Promise.resolve(),
    "serviceWorker" in navigator
      ? navigator.serviceWorker.getRegistrations().then((registrations) => Promise.all(registrations.map((item) => item.unregister())))
      : Promise.resolve()
  ]).finally(() => {
    window.location.replace(`${appBasePath()}?v=${VOICE_UI_VERSION}`);
  });
}

function safeStorageGet(key, fallback = "") {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function safeStorageRemove(key) {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

function safeSessionGet(key, fallback = "") {
  try {
    const value = window.sessionStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function safeSessionSet(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function safeSessionRemove(key) {
  try {
    window.sessionStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

function normalizedOrigin(value) {
  const raw = String(value || "").trim().replace(/\/+$/, "");
  if (!raw) return "";
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return "";
    return url.origin;
  } catch {
    return "";
  }
}

const IRIS_BACKEND_ORIGIN = normalizedOrigin(IRIS_PUBLIC_CONFIG.backendOrigin);

function backendUrl(path) {
  const target = String(path || "");
  return IRIS_BACKEND_ORIGIN ? `${IRIS_BACKEND_ORIGIN}${target}` : target;
}

function backendWsUrl(path) {
  const base = IRIS_BACKEND_ORIGIN || `${window.location.protocol}//${window.location.host}`;
  const url = new URL(path, base);
  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
  return url.toString();
}

function appBasePath() {
  const base = String(IRIS_PUBLIC_CONFIG.appBasePath || "/voice").trim() || "/voice";
  return base.endsWith("/") && base.length > 1 ? base.slice(0, -1) : base;
}

function isPublicFrontendMode() {
  if (!IRIS_BACKEND_ORIGIN) return false;
  return IRIS_BACKEND_ORIGIN !== window.location.origin;
}

function canUseBackendNow() {
  return !isPublicFrontendMode() || Boolean(persistedVoiceToken);
}

const VISUAL_STATE_MAP = {
  idle: "idle",
  connected: "idle",
  connecting: "connecting",
  listening: "listening",
  user_speaking: "user_speaking",
  user_speech_ending: "thinking",
  transcribing: "thinking",
  thinking: "thinking",
  agent_responding: "thinking",
  agent_speaking: "ai_speaking",
  interruption_detected: "interrupted",
  interrupted: "interrupted",
  re_listening: "listening",
  error: "error",
  disconnected: "offline",
  microphone_error: "permission_required",
  stt_error: "error",
  tts_error: "error",
  auth_error: "error"
};

const VOICE_COPY = {
  idle: {
    topStatus: "在线",
    speaker: "IRIS",
    text: "我在。你可以直接说。",
    button: "问问 Iris",
    buttonTone: ""
  },
  connecting: {
    topStatus: "连接中",
    speaker: "IRIS",
    text: "正在连接 Iris...",
    button: "正在连接",
    buttonTone: "soft"
  },
  permission_required: {
    topStatus: "待授权",
    speaker: "IRIS",
    text: "开启麦克风后，我就可以听你说话。",
    button: "开启麦克风",
    buttonTone: ""
  },
  listening: {
    topStatus: "聆听中",
    speaker: "IRIS",
    text: "我在听。",
    button: "我在听",
    buttonTone: "soft"
  },
  user_speaking: {
    topStatus: "聆听中",
    speaker: "你",
    text: "正在聆听...",
    button: "正在聆听",
    buttonTone: "soft"
  },
  thinking: {
    topStatus: "思考中",
    speaker: "IRIS",
    text: "正在整理你的请求...",
    button: "正在整理",
    buttonTone: "soft"
  },
  ai_speaking: {
    topStatus: "回答中",
    speaker: "IRIS",
    text: "",
    button: "正在回答",
    buttonTone: "soft"
  },
  interrupted: {
    topStatus: "处理中",
    speaker: "IRIS",
    text: "我在听。",
    button: "我在听",
    buttonTone: "soft"
  },
  error: {
    topStatus: "可重试",
    speaker: "IRIS",
    text: "刚刚没有听清，可以再说一次。",
    button: "再试一次",
    buttonTone: ""
  },
  offline: {
    topStatus: "离线",
    speaker: "IRIS",
    text: "连接断开了，我正在尝试恢复。",
    button: "重新连接",
    buttonTone: ""
  }
};

let ws = null;
let connectPromise = null;
let voiceSocketAuthenticated = false;
let running = false;
let micMuted = false;
let speakerMuted = false;
let stream = null;
let audioContext = null;
let analyser = null;
let mediaSource = null;
let pcmProcessor = null;
let vadTimer = 0;
let vadDelayTimer = 0;
let recognition = null;
let recognitionActive = false;
let recognitionStarting = false;
let recognitionRestartTimer = 0;
let sttFatal = false;
let browserSttUnavailable = false;
let sttErrorCount = 0;
let serverCapabilitiesReceived = false;
let serverSttEnabled = false;
let serverSttRequested = false;
let serverPcmSttAvailable = false;
let serverSttMode = "";
let serverSttModel = "";
let pcmBackpressureDrops = 0;
let pcmScratch16 = null;
let pcmScratchBytes = null;
let pcmScratchBytesView = null;
let websocketSendFailures = 0;
let textPromptSeq = 0;
let serverTtsAvailable = false;
let serverTtsProfiles = new Set();
let serverTtsFailureCounts = new Map();
let currentAudio = null;
let currentAudioUrl = "";
let ttsRequestSeq = 0;
let activeTtsRequestId = 0;
let activeTtsAbortController = null;
let serverAudioElement = null;
let serverAudioUnlocked = false;
let serverAudioUnlockPromise = null;
let serverAudioUnlockFinishTimer = 0;
let serverAudioUnlockCancel = null;
let silentUnlockAudioUrl = "";
let outputVolume = 1;
let persistedOutputVolumePercent = null;
let currentVoiceProfile = DEFAULT_VOICE_PROFILE;
let persistedVoiceProfile = null;
let agentSpeaking = false;
let localSpeaking = false;
let speechStartAt = 0;
let silenceStartAt = 0;
let lastInterruptAt = 0;
let currentTurnId = "";
let currentResponseId = "";
let currentConversationId = "";
let lastReply = "";
let pendingUserPartialText = "";
let userPartialFrame = 0;
let pendingAgentReplyText = "";
let pendingAgentReplyResponseId = "";
let agentReplyFrame = 0;
let lastTtsRoute = {
  provider: "none",
  voiceProfile: DEFAULT_VOICE_PROFILE,
  source: "none",
  summary: "还没有播报记录。"
};
let currentTtsRouteText = "";
let persistedTtsRouteText = null;
let pendingTtsRoutePersistText = "";
let ttsRoutePersistTimer = 0;
let ttsRoutePersistIdleHandle = 0;
let currentWebTtsAudibilityText = "";
let persistedWebTtsAudibilityText = null;
let pendingWebTtsAudibilityText = "";
let webTtsAudibilityPersistTimer = 0;
let webTtsAudibilityPersistIdleHandle = 0;
let webTtsAudibilitySyncSeq = 0;
let activeWebTtsAudibilitySyncAbortController = null;
let persistedVoiceToken = null;
let cachedVoiceClientId = "";
let currentRawState = "idle";
let currentVisualState = "idle";
let lastStateRenderSignature = "";
let lastVadReadoutAt = 0;
let lastVadReadoutValue = "";
let subtitleFlowFrame = 0;
let subtitleMeasureFrame = 0;
let pendingSubtitleMeasure = null;
let subtitleAutoFlowPausedUntil = 0;
let pagehideCleanupStarted = false;
let lastSubtitleValue = "";
let lastSubtitleSpeaker = "IRIS";
let lastSubtitleRenderSignature = "";
let viewportMetricsFrame = 0;
let viewportMetricsRefreshSubtitle = false;
let orientationViewportMetricsTimer = 0;
let lastViewportMetricsSignature = "";
let lastKeyboardOpen = false;
let lastDockMetricsSignature = "";
let conversationScrollFrame = 0;
let conversationScrollSettleFrame = 0;
let conversationPinnedToBottom = true;
let conversationUserScrollPauseUntil = 0;
let composerResizeFrame = 0;
let serviceWorkerRegistrationIdleHandle = null;
let currentDocumentId = "";
let currentDocumentName = "";
let currentDocumentSummary = "";
let conversationMessageSeq = 0;
let conversationHistoryLoaded = false;
let conversationHistoryLoading = false;
let activeAssistantMessageId = "";
let lastUserConversationText = "";
let lastUserConversationAt = 0;
let memoryControlLoaded = false;
let memoryControlLoading = false;
let memorySearchTimer = 0;

const VAD = {
  startThresholdMs: 220,
  interruptThresholdMs: 480,
  silenceEndThresholdMs: 760,
  rmsThreshold: 0.035,
  interruptRmsThreshold: 0.055,
  rmsThresholdSquared: 0.001225,
  interruptRmsThresholdSquared: 0.003025
};
const VAD_READOUT_INTERVAL_MS = 125;
const VAD_ANALYSIS_INTERVAL_MS = 33;
const LOG_RENDER_LIMIT = 8;
const TTS_ROUTE_PERSIST_FALLBACK_MS = 160;
const CONVERSATION_BOTTOM_EPSILON_PX = 52;
const CONVERSATION_USER_SCROLL_PAUSE_MS = 9000;

const WEB_VERSION = "voice-ui-web-polish-v161-static-trim-access-key";
const PRE_AUTH_SAFE_EVENT_TYPES = new Set(["session_status", "server_capabilities", "error"]);
const TOKEN_KEY = "jarvis_voice_token";
const ACCESS_TOKEN_KEY = "iris_access_token";
const ACCESS_TOKEN_EXPIRES_KEY = "iris_access_token_expires_at";
const THEME_KEY = "iris_voice_theme";
const VOICE_CLIENT_ID_KEY = "jarvis_voice_client_id";
const TTS_AUDIBILITY_KEY = "jarvis_voice_tts_audibility";
const TTS_ROUTE_KEY = "jarvis_voice_tts_route";
const VOLUME_KEY = "jarvis_voice_volume";
const WEB_TEXT_CAPABILITIES = {
  calendar: true,
  calendar_read: true,
  calendar_write: true,
  tts: true,
  share_sheet: false,
  widget: false,
  microphone: false,
  server_stt: false,
  speech_recognition: false,
  interrupt: false
};
const TTS_AUDIBILITY_PERSIST_FALLBACK_MS = 160;
const WEBSOCKET_CONNECT_TIMEOUT_MS = 4500;
const REQUESTED_STT_MODE = params.get("stt") || "";
const PCM_WS_BUFFERED_AMOUNT_LIMIT = 512 * 1024;
const USER_AGENT = navigator.userAgent || "";
const NAVIGATOR_PLATFORM = navigator.platform || "";
const NAVIGATOR_MAX_TOUCH_POINTS = navigator.maxTouchPoints || 0;
const IS_ANDROID_DEVICE = /Android/i.test(USER_AGENT);
const IS_IOS_DEVICE = /iPad|iPhone|iPod/.test(USER_AGENT) || (NAVIGATOR_PLATFORM === "MacIntel" && NAVIGATOR_MAX_TOUCH_POINTS > 1);
const IS_CHROME_BROWSER = /(Chrome|Chromium|CriOS)\//.test(USER_AGENT) && !/(Edg|OPR|SamsungBrowser)\//.test(USER_AGENT);
const BROWSER_TARGET = IS_CHROME_BROWSER ? "chrome" : "unsupported";
const IDLE_TASK_TIMEOUT_MS = 1200;

function applyBrowserTargeting() {
  document.documentElement.dataset.browserTarget = BROWSER_TARGET;
  document.body.dataset.browserTarget = BROWSER_TARGET;
  document.body.classList.toggle("browserChrome", IS_CHROME_BROWSER);
  document.body.classList.toggle("browserUnsupported", BROWSER_TARGET === "unsupported");
}

function scheduleIdleWork(callback, options = {}) {
  const run = (deadline = null) => {
    if (pagehideCleanupStarted || document.visibilityState === "hidden") return;
    callback(deadline);
  };
  if (typeof window.requestIdleCallback === "function") {
    return { type: "idle", id: window.requestIdleCallback(run, { timeout: options.timeout || IDLE_TASK_TIMEOUT_MS }) };
  }
  const delay = Number.isFinite(Number(options.delayMs))
    ? Number(options.delayMs)
    : 0;
  return {
    type: "timer",
    id: window.setTimeout(() => run({ didTimeout: true, timeRemaining: () => 0 }), delay)
  };
}

function cancelIdleWork(handle) {
  if (!handle) return;
  if (handle.type === "idle" && typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(handle.id);
    return;
  }
  window.clearTimeout(handle.id);
}

function isAndroid() {
  return IS_ANDROID_DEVICE;
}

function shouldPreferServerStt() {
  if (REQUESTED_STT_MODE === "browser") return false;
  return IS_ANDROID_DEVICE || REQUESTED_STT_MODE === "server";
}

function isIOS() {
  return IS_IOS_DEVICE;
}

function scheduleViewportMetrics({ refreshSubtitle = true } = {}) {
  viewportMetricsRefreshSubtitle = viewportMetricsRefreshSubtitle || refreshSubtitle;
  if (viewportMetricsFrame) return;
  viewportMetricsFrame = window.requestAnimationFrame(() => {
    const shouldRefreshSubtitle = viewportMetricsRefreshSubtitle;
    viewportMetricsFrame = 0;
    viewportMetricsRefreshSubtitle = false;
    syncViewportMetrics({ refreshSubtitle: shouldRefreshSubtitle });
  });
}

function clearViewportMetricsSchedule() {
  if (viewportMetricsFrame) window.cancelAnimationFrame(viewportMetricsFrame);
  viewportMetricsFrame = 0;
  viewportMetricsRefreshSubtitle = false;
}

function scheduleOrientationViewportMetrics() {
  if (orientationViewportMetricsTimer) window.clearTimeout(orientationViewportMetricsTimer);
  orientationViewportMetricsTimer = window.setTimeout(() => {
    orientationViewportMetricsTimer = 0;
    scheduleViewportMetrics();
  }, 160);
}

function clearOrientationViewportMetricsSchedule() {
  if (orientationViewportMetricsTimer) window.clearTimeout(orientationViewportMetricsTimer);
  orientationViewportMetricsTimer = 0;
}

function syncViewportMetrics({ refreshSubtitle = true } = {}) {
  const viewport = window.visualViewport;
  const viewportHeight =
    (viewport && viewport.height) ||
    window.innerHeight ||
    document.documentElement.clientHeight ||
    720;
  const safeHeight = Math.max(420, Math.round(viewportHeight));
  const layoutHeight = window.innerHeight || document.documentElement.clientHeight || safeHeight;
  const keyboardOpen = Boolean(viewport && layoutHeight - viewport.height > 120);
  const viewportTopOffset = Math.max(0, Math.round(viewport ? viewport.offsetTop || 0 : 0));
  const viewportBottomOffset = Math.max(0, Math.round(layoutHeight - safeHeight - (viewport ? viewport.offsetTop || 0 : 0)));
  const viewportSignature = `${safeHeight}|${viewportTopOffset}|${viewportBottomOffset}|${keyboardOpen ? 1 : 0}`;
  if (viewportSignature !== lastViewportMetricsSignature) {
    const keyboardStateChanged = keyboardOpen !== lastKeyboardOpen;
    const wasPinnedToBottom = conversationPinnedToBottom || isConversationNearBottom();
    lastViewportMetricsSignature = viewportSignature;
    lastKeyboardOpen = keyboardOpen;
    document.documentElement.style.setProperty("--app-height", `${safeHeight}px`);
    document.documentElement.style.setProperty("--viewport-top-offset", `${viewportTopOffset}px`);
    document.documentElement.style.setProperty("--viewport-bottom-offset", `${viewportBottomOffset}px`);
    document.body.classList.toggle("keyboardOpen", keyboardOpen);
    if (keyboardOpen && window.scrollY) {
      window.scrollTo(0, 0);
    }
    updateConversationPinnedState();
    if (keyboardStateChanged || keyboardOpen) {
      scheduleConversationScroll({ allowed: wasPinnedToBottom });
    }
  }

  if (els.dock) {
    const dockHeight = Math.max(64, Math.ceil(els.dock.getBoundingClientRect().height || 0));
    const heightRatioCap = Math.floor(safeHeight * (safeHeight < 690 ? 0.36 : 0.42));
    const reservedChrome = dockHeight + (safeHeight < 690 ? 118 : 136);
    const availableHeight = Math.max(104, safeHeight - reservedChrome);
    const captionMax = Math.max(
      104,
      Math.min(safeHeight < 690 ? 220 : 320, heightRatioCap, availableHeight)
    );
    const quickCaptionMax = Math.max(
      88,
      Math.min(210, Math.floor(captionMax * 0.68), Math.max(88, safeHeight - dockHeight - 188))
    );
    const dockSignature = `${dockHeight}|${captionMax}|${quickCaptionMax}`;
    if (dockSignature !== lastDockMetricsSignature) {
      lastDockMetricsSignature = dockSignature;
      document.documentElement.style.setProperty("--dock-height", `${dockHeight}px`);
      document.documentElement.style.setProperty("--caption-max-height", `${captionMax}px`);
      document.documentElement.style.setProperty("--caption-quick-max-height", `${quickCaptionMax}px`);
    }
  }

  if (!refreshSubtitle || !els.dialogueScroll) return;
  scheduleSubtitleMeasure({ isLong: lastSubtitleValue.length > 56 || lastSubtitleValue.includes("\n") });
}

function setSttHint(text) {
  els.sttHint.textContent = text || " ";
}

function setSubtitleSpeaker(speaker) {
  if (!els.subtitleSpeaker) return;
  els.subtitleSpeaker.textContent = (speaker || "IRIS").trim() || "IRIS";
}

function cancelSubtitleFlow() {
  if (!subtitleFlowFrame) return;
  cancelAnimationFrame(subtitleFlowFrame);
  subtitleFlowFrame = 0;
}

function cancelSubtitleMeasure() {
  if (subtitleMeasureFrame) cancelAnimationFrame(subtitleMeasureFrame);
  subtitleMeasureFrame = 0;
  pendingSubtitleMeasure = null;
}

function isConversationNearBottom() {
  if (!els.conversationStream) return true;
  const remaining = els.conversationStream.scrollHeight - els.conversationStream.scrollTop - els.conversationStream.clientHeight;
  return remaining <= CONVERSATION_BOTTOM_EPSILON_PX;
}

function shouldAutoScrollConversation(options = {}) {
  if (options.force) return true;
  if (isConversationNearBottom()) return true;
  if (Date.now() < conversationUserScrollPauseUntil) return false;
  return conversationPinnedToBottom;
}

function updateConversationPinnedState({ userIntent = false } = {}) {
  if (!els.conversationStream) return;
  conversationPinnedToBottom = isConversationNearBottom();
  if (userIntent && !conversationPinnedToBottom) {
    conversationUserScrollPauseUntil = Date.now() + CONVERSATION_USER_SCROLL_PAUSE_MS;
  }
}

function scheduleConversationScroll(options = {}) {
  if (!els.conversationStream || conversationScrollFrame) return;
  const shouldScroll = Boolean(options.force || options.allowed || shouldAutoScrollConversation());
  if (!shouldScroll) return;
  conversationScrollFrame = requestAnimationFrame(() => {
    conversationScrollFrame = 0;
    if (!options.force && !options.allowed && !shouldAutoScrollConversation()) return;
    els.conversationStream.scrollTop = els.conversationStream.scrollHeight;
    conversationPinnedToBottom = true;
    if (conversationScrollSettleFrame) cancelAnimationFrame(conversationScrollSettleFrame);
    conversationScrollSettleFrame = requestAnimationFrame(() => {
      conversationScrollSettleFrame = 0;
      if (!els.conversationStream) return;
      if (!options.force && !options.allowed && !shouldAutoScrollConversation()) return;
      els.conversationStream.scrollTop = els.conversationStream.scrollHeight;
      conversationPinnedToBottom = true;
    });
  });
}

function clearConversationScrollSchedule() {
  if (conversationScrollFrame) cancelAnimationFrame(conversationScrollFrame);
  if (conversationScrollSettleFrame) cancelAnimationFrame(conversationScrollSettleFrame);
  conversationScrollFrame = 0;
  conversationScrollSettleFrame = 0;
}

function pauseSubtitleAutoFlow(ms = 7000) {
  subtitleAutoFlowPausedUntil = Date.now() + ms;
  cancelSubtitleFlow();
}

function syncSubtitleOverflow(isLong) {
  if (!els.dialogueScroll) return false;
  if (["idle", "listening"].includes(currentVisualState)) {
    els.dialogueScroll.classList.remove("hasOverflow");
    if (els.caption) els.caption.classList.remove("hasOverflow");
    document.body.classList.remove("longDialogue");
    return false;
  }
  const overflowing = Boolean(els.dialogueScroll.scrollHeight > els.dialogueScroll.clientHeight + 2);
  els.dialogueScroll.classList.toggle("hasOverflow", overflowing);
  if (els.caption) els.caption.classList.toggle("hasOverflow", overflowing);
  document.body.classList.toggle("longDialogue", Boolean(isLong || overflowing));
  return overflowing;
}

function scheduleSubtitleMeasure({ isLong = false, reset = false, force = false } = {}) {
  if (!els.dialogueScroll || pagehideCleanupStarted) return;
  pendingSubtitleMeasure = {
    isLong: Boolean(isLong),
    reset: Boolean(reset || (pendingSubtitleMeasure && pendingSubtitleMeasure.reset)),
    force: Boolean(force || (pendingSubtitleMeasure && pendingSubtitleMeasure.force))
  };
  if (subtitleMeasureFrame) return;
  subtitleMeasureFrame = requestAnimationFrame(() => {
    const measure = pendingSubtitleMeasure || {};
    subtitleMeasureFrame = 0;
    pendingSubtitleMeasure = null;
    const overflowing = syncSubtitleOverflow(Boolean(measure.isLong));
    if (!overflowing) {
      cancelSubtitleFlow();
      els.dialogueScroll.scrollTop = 0;
      return;
    }
    animateSubtitleFlow({
      reset: Boolean(measure.reset),
      force: Boolean(measure.force)
    });
  });
}

function animateSubtitleFlow({ reset = false, force = false } = {}) {
  if (!els.dialogueScroll) return;
  cancelSubtitleFlow();
  if (!force && Date.now() < subtitleAutoFlowPausedUntil) return;

  const scroller = els.dialogueScroll;
  const maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
  if (maxScroll <= 1) {
    scroller.scrollTop = 0;
    return;
  }

  if (reset) scroller.scrollTop = 0;

  const from = scroller.scrollTop;
  const distance = maxScroll - from;
  if (distance <= 1) return;

  const startedAt = performance.now();
  const duration = Math.max(1400, Math.min(9000, distance * 28));

  function tick(now) {
    const t = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    scroller.scrollTop = from + distance * eased;
    if (t < 1) {
      subtitleFlowFrame = requestAnimationFrame(tick);
      return;
    }
    subtitleFlowFrame = 0;
  }

  subtitleFlowFrame = requestAnimationFrame(tick);
}

function setSubtitle(text, options = {}) {
  if (!els.subtitle) return;
  const value = (text || "").trim() || "我在。";
  const speaker = (options.speaker || lastSubtitleSpeaker || "IRIS").trim() || "IRIS";
  const renderSignature = `${speaker}\n${value}`;
  if (!options.resetFlow && renderSignature === lastSubtitleRenderSignature) return;
  lastSubtitleRenderSignature = renderSignature;
  scheduleViewportMetrics({ refreshSubtitle: false });
  const previousValue = lastSubtitleValue;
  const speakerChanged = speaker !== lastSubtitleSpeaker;

  if (options.speaker) setSubtitleSpeaker(speaker);
  if (speaker === "你" && currentVisualState === "user_speaking") {
    setDockText(value);
  }
  const isLong = value.length > 56 || value.includes("\n");
  els.subtitle.textContent = value;
  els.subtitle.classList.toggle("scrolling", isLong);
  document.body.classList.toggle("longDialogue", isLong);
  if (els.dialogueScroll) {
    els.dialogueScroll.classList.toggle("scrolling", isLong);
    const isFreshSubtitle =
      Boolean(options.resetFlow) ||
      speakerChanged ||
      !previousValue ||
      (!value.startsWith(previousValue) && !previousValue.startsWith(value));
    scheduleSubtitleMeasure({ isLong, reset: isFreshSubtitle, force: isFreshSubtitle });
  }
  lastSubtitleValue = value;
  lastSubtitleSpeaker = speaker;
}

function conversationRoleLabel(role) {
  if (role === "user") return "你";
  if (role === "file") return "文件";
  if (role === "system") return "状态";
  return "Iris";
}

function appendConversationMessage(role, text, options = {}) {
  if (!els.conversationStream) return "";
  const value = (text || "").trim();
  if (!value && !options.allowEmpty) return "";
  const shouldScroll = shouldAutoScrollConversation({ force: options.forceScroll });
  conversationMessageSeq += 1;
  const id = options.id || `msg_${conversationMessageSeq}`;
  const item = document.createElement("article");
  item.className = `message ${role || "assistant"}`;
  item.dataset.messageId = id;
  if (options.kind) item.dataset.kind = options.kind;
  const meta = document.createElement("p");
  meta.className = "messageMeta";
  meta.textContent = options.label || conversationRoleLabel(role);
  const body = document.createElement("p");
  body.className = "messageText";
  body.textContent = value || " ";
  item.append(meta, body);
  if (Array.isArray(options.actions) && options.actions.length) {
    const actions = document.createElement("div");
    actions.className = "messageActions";
    options.actions.forEach((action) => actions.appendChild(action));
    item.appendChild(actions);
  }
  els.conversationStream.appendChild(item);
  scheduleConversationScroll({ force: options.forceScroll, allowed: shouldScroll });
  return id;
}

function findConversationMessage(id) {
  if (!id || !els.conversationStream) return null;
  return Array.from(els.conversationStream.querySelectorAll("[data-message-id]"))
    .find((item) => item.dataset.messageId === id) || null;
}

function updateConversationMessage(id, text, options = {}) {
  if (!id || !els.conversationStream) return false;
  const shouldScroll = shouldAutoScrollConversation({ force: options.forceScroll });
  const item = findConversationMessage(id);
  if (!item) return false;
  const body = item.querySelector(".messageText");
  if (body) body.textContent = (text || "").trim() || " ";
  if (options.label) {
    const meta = item.querySelector(".messageMeta");
    if (meta) meta.textContent = options.label;
  }
  scheduleConversationScroll({ force: options.forceScroll, allowed: shouldScroll });
  return true;
}

function appendUserConversation(text, options = {}) {
  const value = (text || "").trim();
  if (!value) return "";
  const now = Date.now();
  if (!options.force && value === lastUserConversationText && now - lastUserConversationAt < 1800) return "";
  lastUserConversationText = value;
  lastUserConversationAt = now;
  return appendConversationMessage("user", value, { forceScroll: true });
}

function appendAssistantConversation(text, options = {}) {
  return appendConversationMessage("assistant", text, options);
}

function serverTtsFailureCount(profile) {
  return Number(serverTtsFailureCounts.get(profile) || 0);
}

function rememberServerTtsFailure(profile) {
  if (!profile) return;
  serverTtsFailureCounts.set(profile, serverTtsFailureCount(profile) + 1);
}

function clearServerTtsFailure(profile = "") {
  if (profile) {
    serverTtsFailureCounts.delete(profile);
    return;
  }
  serverTtsFailureCounts = new Map();
}

function clearWelcomeMessageForHistory() {
  if (!els.conversationStream) return;
  els.conversationStream.querySelectorAll('[data-kind="welcome"]').forEach((item) => item.remove());
}

function ensureAssistantConversationAnchor() {
  if (!els.conversationStream) return;
  const hasAssistantText = Array.from(els.conversationStream.querySelectorAll(".message.assistant .messageText"))
    .some((item) => (item.textContent || "").trim());
  if (hasAssistantText) return;
  const item = document.createElement("article");
  item.className = "message assistant";
  item.dataset.kind = "welcome";
  const meta = document.createElement("p");
  meta.className = "messageMeta";
  meta.textContent = "Iris";
  const body = document.createElement("p");
  body.className = "messageText";
  body.textContent = "我在。你可以直接说，也可以把文件发给我。";
  item.append(meta, body);
  els.conversationStream.prepend(item);
}

function historyMessageLabel(role, time) {
  const prefix = role === "user" ? "你" : "Iris";
  if (!time) return `${prefix} · 最近`;
  const parsed = new Date(time);
  if (Number.isNaN(parsed.getTime())) return `${prefix} · 最近`;
  return `${prefix} · ${parsed.toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  })}`;
}

async function loadConversationHistory() {
  if (conversationHistoryLoaded || conversationHistoryLoading || !window.fetch || !els.conversationStream) return;
  conversationHistoryLoading = true;
  try {
    const response = await fetch(backendUrl("/client/v1/conversation/history?since_hours=24&limit=60"), {
      headers: authHeaders()
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `history_${response.status}`);
    }
    const items = Array.isArray(payload.items) ? payload.items : [];
    if (!items.length) return;
    clearWelcomeMessageForHistory();
    items.forEach((item, index) => {
      const role = item && item.role === "user" ? "user" : "assistant";
      appendConversationMessage(role, item.content || "", {
        id: `history_${index}_${Math.abs(String(item.time || index).split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0))}`,
        label: historyMessageLabel(role, item.time),
        kind: "history",
        forceScroll: index === items.length - 1
      });
    });
    ensureAssistantConversationAnchor();
    logLine(`loaded ${items.length} recent conversation messages`);
  } catch (err) {
    logLine(`conversation history skipped ${err.message || ""}`.trim());
  } finally {
    conversationHistoryLoaded = true;
    conversationHistoryLoading = false;
  }
}

function applyUserPartialText(text) {
  const value = text || "";
  if (els.partial && els.partial.textContent !== value) {
    els.partial.textContent = value;
  }
  setDockText(value || "正在聆听");
  setSubtitle(value || "正在听你说", { speaker: "你" });
}

function cancelUserPartialRender() {
  if (userPartialFrame) cancelAnimationFrame(userPartialFrame);
  userPartialFrame = 0;
  pendingUserPartialText = "";
}

function scheduleUserPartialRender(text) {
  pendingUserPartialText = text || "";
  if (userPartialFrame) return;
  userPartialFrame = requestAnimationFrame(() => {
    userPartialFrame = 0;
    const nextText = pendingUserPartialText;
    pendingUserPartialText = "";
    applyUserPartialText(nextText);
  });
}

function applyAgentReplyText(text, responseId = "") {
  if (responseId && currentResponseId && responseId !== currentResponseId) return;
  const value = text || "";
  if (els.reply && els.reply.textContent !== value) {
    els.reply.textContent = value;
  }
  setSubtitle(value || "Iris 正在回答", { speaker: "IRIS" });
}

function cancelAgentReplyRender() {
  if (agentReplyFrame) cancelAnimationFrame(agentReplyFrame);
  agentReplyFrame = 0;
  pendingAgentReplyText = "";
  pendingAgentReplyResponseId = "";
}

function flushAgentReplyRender() {
  if (!agentReplyFrame && !pendingAgentReplyText) return;
  if (agentReplyFrame) cancelAnimationFrame(agentReplyFrame);
  agentReplyFrame = 0;
  const text = pendingAgentReplyText;
  const responseId = pendingAgentReplyResponseId;
  pendingAgentReplyText = "";
  pendingAgentReplyResponseId = "";
  applyAgentReplyText(text, responseId);
}

function scheduleAgentReplyRender(text, responseId = "") {
  pendingAgentReplyText = text || "";
  pendingAgentReplyResponseId = responseId || "";
  if (agentReplyFrame) return;
  agentReplyFrame = requestAnimationFrame(() => {
    agentReplyFrame = 0;
    const nextText = pendingAgentReplyText;
    const nextResponseId = pendingAgentReplyResponseId;
    pendingAgentReplyText = "";
    pendingAgentReplyResponseId = "";
    applyAgentReplyText(nextText, nextResponseId);
  });
}

const SPEECH_MECHANICAL_TAIL_PATTERNS = [
  /(。|！|？|!|\?)?\s*要我展开[^。！？!?]*[。！？!?]?$/u,
  /(。|！|？|!|\?)?\s*你要我展开[^。！？!?]*[。！？!?]?$/u,
  /(。|！|？|!|\?)?\s*你要[^。！？!?]*我就(?:继续|展开)[^。！？!?]*[。！？!?]?$/u,
  /(。|！|？|!|\?)?\s*如果你要[^。！？!?]*(继续|展开)[^。！？!?]*[。！？!?]?$/u,
  /(。|！|？|!|\?)?\s*如果你想[^。！？!?]*(继续|展开)[^。！？!?]*[。！？!?]?$/u,
  /(。|！|？|!|\?)?\s*想(?:继续|展开)[^。！？!?]*我(?:就|可以)?[^。！？!?]*(继续|展开)[^。！？!?]*[。！？!?]?$/u,
  /(。|！|？|!|\?)?\s*需要我[^。！？!?]*(继续|展开)[^。！？!?]*[。！？!?]?$/u,
  /(。|！|？|!|\?)?\s*需要的话[^。！？!?]*(继续|展开)[^。！？!?]*[。！？!?]?$/u,
  /(。|！|？|!|\?)?\s*要不要我[^。！？!?]*(继续|展开)[^。！？!?]*[。！？!?]?$/u
];
const SPEECH_MARKDOWN_SYMBOLS = /[`*_>#]/g;
const SPEECH_REPEATED_NEWLINES = /\n{2,}/g;
const SPEECH_WHITESPACE = /\s+/g;

function speechContent(text) {
  let content = (text || "").trim();
  if (!content) return "";
  SPEECH_MECHANICAL_TAIL_PATTERNS.forEach((pattern) => {
    content = content.replace(pattern, "").trim();
  });
  content = content
    .replace(SPEECH_MARKDOWN_SYMBOLS, "")
    .replace(SPEECH_REPEATED_NEWLINES, "\n")
    .replace(/\n/g, "。")
    .replace(SPEECH_WHITESPACE, " ")
    .trim();
  if (content.length <= 180) return content;
  const head = content.slice(0, 180);
  const sentenceEnd = Math.max(
    head.lastIndexOf("。"),
    head.lastIndexOf("！"),
    head.lastIndexOf("？"),
    head.lastIndexOf("!"),
    head.lastIndexOf("?")
  );
  return sentenceEnd >= 80 ? head.slice(0, sentenceEnd + 1) : `${head.trimEnd()}。`;
}

function normalizedTheme(value) {
  const next = String(value || "").trim().toLowerCase().replace(/_/g, "-");
  if (["minimal-white", "soft-gray", "classic-blue", "pure-black"].includes(next)) return next;
  if (next === "light") return "minimal-white";
  if (next === "dark" || next === "black") return "pure-black";
  return "minimal-white";
}

function selectedTheme() {
  return normalizedTheme(safeStorageGet(THEME_KEY, "minimal-white"));
}

function applyTheme(theme, { persist = true } = {}) {
  const next = normalizedTheme(theme);
  document.body.dataset.theme = next;
  document.documentElement.dataset.theme = next;
  const metaTheme = document.querySelector("meta[name='theme-color']");
  const themeColors = {
    "minimal-white": "#f7f9fc",
    "soft-gray": "#eef1f5",
    "classic-blue": "#edf5ff",
    "pure-black": "#050608"
  };
  if (metaTheme) metaTheme.setAttribute("content", themeColors[next] || themeColors["minimal-white"]);
  if (els.themePicker) {
    els.themePicker.querySelectorAll("[data-theme-choice]").forEach((button) => {
      const active = normalizedTheme(button.dataset.themeChoice) === next;
      button.classList.toggle("active", active);
      button.setAttribute("aria-checked", active ? "true" : "false");
    });
  }
  if (persist) safeStorageSet(THEME_KEY, next);
}

function initThemeSettings() {
  applyTheme(selectedTheme(), { persist: false });
  if (!els.themePicker) return;
  els.themePicker.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-choice]");
    if (!button) return;
    applyTheme(button.dataset.themeChoice || "minimal-white");
  });
}

function modelDisplayName(model) {
  const labels = {
    "deepseek-v4-flash": "DeepSeek V4 Flash",
    "deepseek-v4-pro": "DeepSeek V4 Pro"
  };
  return labels[model] || model || "未知模型";
}

function setModelStatus(text) {
  if (els.modelStatus) els.modelStatus.textContent = text || " ";
}

function populateModelOptions(models, currentModel) {
  if (!els.modelSelect || !Array.isArray(models)) return;
  els.modelSelect.textContent = "";
  models.forEach((item) => {
    const id = String((item && (item.id || item.model)) || item || "").trim();
    if (!id) return;
    const option = document.createElement("option");
    option.value = id;
    option.textContent = String((item && item.label) || modelDisplayName(id));
    els.modelSelect.appendChild(option);
  });
  if (currentModel) els.modelSelect.value = currentModel;
  const selected = els.modelSelect.value || currentModel || "";
  setModelStatus(selected ? `当前：${modelDisplayName(selected)}（${selected}）` : "没有可用模型。");
}

async function loadModelSettings() {
  if (!els.modelSelect || !window.fetch) return;
  setModelStatus("读取当前模型中。");
  try {
    const response = await fetch(backendUrl("/voice/models"), {
      method: "GET",
      headers: authHeaders(),
      cache: "no-store"
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    populateModelOptions(payload.models || [], payload.current_model || "");
  } catch (err) {
    setModelStatus(`模型读取失败：${err.message || "unknown"}`);
    logLine(`model load failed ${err.message || ""}`.trim());
    throw err;
  }
}

async function switchModelFromMenu(model) {
  const target = String(model || "").trim();
  if (!target || !window.fetch) return;
  const previous = els.modelSelect ? els.modelSelect.value : "";
  setModelStatus(`正在切换到 ${modelDisplayName(target)}。`);
  try {
    const response = await fetch(backendUrl("/voice/models/current"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders()
      },
      body: JSON.stringify({ model: target })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(typeof payload.detail === "string" ? payload.detail : `HTTP ${response.status}`);
    }
    const current = payload.current_model || target;
    if (els.modelSelect) els.modelSelect.value = current;
    setModelStatus(`当前：${modelDisplayName(current)}（${current}）`);
    appendAssistantConversation(payload.message || `已切换为 ${current}`, { kind: "model_control" });
    logLine(`model switched ${current}`);
  } catch (err) {
    if (els.modelSelect && previous) els.modelSelect.value = previous;
    setModelStatus(`切换失败：${err.message || "unknown"}`);
    appendAssistantConversation(`模型切换失败：${err.message || "unknown"}`, { kind: "model_control_error" });
    logLine(`model switch failed ${err.message || ""}`.trim());
  }
}

function initModelSettings() {
  if (!els.modelSelect) return;
  els.modelSelect.addEventListener("change", () => {
    switchModelFromMenu(els.modelSelect.value).catch((err) => logLine(err.message || "model switch failed"));
  });
  if (!canUseBackendNow()) return;
  loadModelSettings().catch((err) => logLine(err.message || "model settings failed"));
}

const PresenceController = (() => {
  const stateMap = {
    idle: "idle",
    connected: "idle",
    connecting: "connecting",
    listening: "listening",
    user_speaking: "user_speaking",
    user_speech_ending: "thinking",
    transcribing: "thinking",
    thinking: "thinking",
    agent_responding: "thinking",
    agent_speaking: "ai_speaking",
    interruption_detected: "interrupted",
    interrupted: "interrupted",
    re_listening: "listening",
    error: "error",
    disconnected: "offline",
    microphone_error: "permission_required",
    stt_error: "error",
    tts_error: "error",
    auth_error: "error"
  };

  let currentState = "idle";
  let currentEmotion = "neutral";
  let mouthOpen = 0;

  function toPresenceState(rawState) {
    return stateMap[rawState] || VISUAL_STATE_MAP[rawState] || "idle";
  }

  return {
    mode: "minimal",
    setState(rawState) {
      const nextState = toPresenceState(rawState);
      if (currentState === nextState) return;
      currentState = nextState;
    },
    setEmotion(emotion) {
      currentEmotion = emotion || "neutral";
    },
    setMouthOpen(value) {
      mouthOpen = Math.max(0, Math.min(1, value || 0));
    },
    reset() {
      currentState = "idle";
      currentEmotion = "neutral";
      mouthOpen = 0;
    },
    diagnostics() {
      return { currentState, currentEmotion, mouthOpen };
    }
  };
})();

function normalizedVoiceProfile(profileId) {
  const selected = String(profileId || "").trim();
  return supportedVoiceProfiles.has(selected) ? selected : DEFAULT_VOICE_PROFILE;
}

function selectedVoiceProfile() {
  return normalizedVoiceProfile(currentVoiceProfile || (els.voiceProfile && els.voiceProfile.value) || DEFAULT_VOICE_PROFILE);
}

function initVoiceProfileSettings() {
  if (!els.voiceProfile) return;
  const persisted = safeStorageGet("jarvis_voice_profile", null);
  persistedVoiceProfile = persisted === null ? "" : persisted;
  const persistedProfileKnown = !persisted || supportedVoiceProfiles.has(persisted);
  const selected = normalizedVoiceProfile(persisted || els.voiceProfile.value || DEFAULT_VOICE_PROFILE);
  currentVoiceProfile = selected;
  els.voiceProfile.value = selected;
  if (els.voiceProfile.value !== selected) els.voiceProfile.value = DEFAULT_VOICE_PROFILE;
  const nextValue = els.voiceProfile.value || DEFAULT_VOICE_PROFILE;
  currentVoiceProfile = normalizedVoiceProfile(nextValue);
  if (persistedProfileKnown && persistedVoiceProfile !== nextValue) {
    safeStorageSet("jarvis_voice_profile", nextValue);
    persistedVoiceProfile = nextValue;
  }
  els.voiceProfile.addEventListener("change", () => {
    const previous = currentVoiceProfile;
    const selected = normalizedVoiceProfile(els.voiceProfile.value);
    els.voiceProfile.value = selected;
    currentVoiceProfile = selected;
    if (persistedVoiceProfile !== selected) {
      safeStorageSet("jarvis_voice_profile", selected);
      persistedVoiceProfile = selected;
    }
    if (previous === selected) return;
    clearServerTtsFailure(selected);
    send({ type: "voice_profile_changed", voice_profile: selected });
  });
}

function populateVoiceProfileOptions(profiles) {
  if (!els.voiceProfile || !Array.isArray(profiles)) return;
  const existing = new Set(Array.from(els.voiceProfile.options).map((option) => option.value));
  profiles
    .filter((profile) => profile && profile.id && (profile.provider || "edge_tts") === "edge_tts")
    .sort((a, b) => Number(a.sort_order || 100) - Number(b.sort_order || 100) || String(a.id).localeCompare(String(b.id)))
    .forEach((profile) => {
      supportedVoiceProfiles.add(profile.id);
      if (existing.has(profile.id)) return;
      const option = document.createElement("option");
      option.value = profile.id;
      option.textContent = profile.display_name || profile.id;
      els.voiceProfile.appendChild(option);
      existing.add(profile.id);
    });
  const persisted = safeStorageGet("jarvis_voice_profile", "");
  const selected = supportedVoiceProfiles.has(persisted) ? persisted : selectedVoiceProfile();
  currentVoiceProfile = normalizedVoiceProfile(selected);
  els.voiceProfile.value = currentVoiceProfile;
}

function normalizedVolume(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 1;
  if (numeric > 1) return Math.min(1, Math.max(0, numeric / 100));
  return Math.min(1, Math.max(0, numeric));
}

function volumePercent(value = outputVolume) {
  return Math.round(normalizedVolume(value) * 100);
}

function applyOutputVolume() {
  if (serverAudioElement) serverAudioElement.volume = outputVolume;
  if (currentAudio) currentAudio.volume = outputVolume;
}

function setOutputVolume(value, persist = false) {
  outputVolume = normalizedVolume(value);
  if (persist) {
    const percent = String(volumePercent());
    if (persistedOutputVolumePercent === null) persistedOutputVolumePercent = safeStorageGet(VOLUME_KEY);
    if (percent !== persistedOutputVolumePercent) {
      safeStorageSet(VOLUME_KEY, percent);
      persistedOutputVolumePercent = percent;
    }
  }
  applyOutputVolume();
}

function initVolumeSettings() {
  safeStorageRemove(VOLUME_KEY);
  persistedOutputVolumePercent = "";
  setOutputVolume(100, false);
}

function getServerAudioElement() {
  if (serverAudioElement) return serverAudioElement;
  const audio = document.createElement("audio");
  audio.preload = "auto";
  audio.setAttribute("playsinline", "");
  audio.setAttribute("webkit-playsinline", "");
  audio.style.position = "absolute";
  audio.style.width = "1px";
  audio.style.height = "1px";
  audio.style.opacity = "0";
  audio.style.pointerEvents = "none";
  document.body.appendChild(audio);
  serverAudioElement = audio;
  return audio;
}

function releaseServerAudioSource(audio, audioUrl = "", options = {}) {
  if (!audio) {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      if (currentAudioUrl === audioUrl) currentAudioUrl = "";
    }
    return;
  }
  const clearHandlers = options.clearHandlers !== false;
  const pauseAudio = options.pause !== false;
  const url = audioUrl || "";
  const sourceMatches = !url || audio.src === url;
  if (clearHandlers) {
    audio.onplay = null;
    audio.onended = null;
    audio.onerror = null;
  }
  if (pauseAudio) {
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch {}
  }
  if (url) {
    URL.revokeObjectURL(url);
    if (currentAudioUrl === url) currentAudioUrl = "";
  }
  if (sourceMatches) {
    try {
      audio.removeAttribute("src");
      audio.load();
    } catch {}
  }
}

function createSilentWavUrl() {
  const sampleRate = 16000;
  const samples = 960;
  const buffer = new ArrayBuffer(44 + samples * 2);
  const view = new DataView(buffer);
  const writeText = (offset, value) => {
    for (let i = 0; i < value.length; i += 1) view.setUint8(offset + i, value.charCodeAt(i));
  };
  writeText(0, "RIFF");
  view.setUint32(4, 36 + samples * 2, true);
  writeText(8, "WAVE");
  writeText(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeText(36, "data");
  view.setUint32(40, samples * 2, true);
  return URL.createObjectURL(new Blob([buffer], { type: "audio/wav" }));
}

function getSilentUnlockAudioUrl() {
  if (!silentUnlockAudioUrl) silentUnlockAudioUrl = createSilentWavUrl();
  return silentUnlockAudioUrl;
}

function releaseSilentUnlockAudioUrl() {
  if (!silentUnlockAudioUrl) return;
  URL.revokeObjectURL(silentUnlockAudioUrl);
  silentUnlockAudioUrl = "";
}

function clearServerAudioUnlockFinishTimer() {
  if (serverAudioUnlockFinishTimer) window.clearTimeout(serverAudioUnlockFinishTimer);
  serverAudioUnlockFinishTimer = 0;
}

function cancelServerAudioUnlock() {
  clearServerAudioUnlockFinishTimer();
  if (!serverAudioUnlockCancel) return;
  const cancel = serverAudioUnlockCancel;
  serverAudioUnlockCancel = null;
  cancel();
}

function unlockServerAudio() {
  if (typeof Audio === "undefined" || serverAudioUnlocked) return Promise.resolve(serverAudioUnlocked);
  if (activeTtsRequestId || currentAudio || agentSpeaking) return Promise.resolve(serverAudioUnlocked);
  if (serverAudioUnlockPromise) return serverAudioUnlockPromise;
  serverAudioUnlockPromise = new Promise((resolve) => {
    const audio = getServerAudioElement();
    const url = getSilentUnlockAudioUrl();
    let resolved = false;
    const stillUnlockAudio = () => audio.src === url;
    const scheduleFinish = (ok) => {
      if (resolved) return;
      clearServerAudioUnlockFinishTimer();
      serverAudioUnlockFinishTimer = window.setTimeout(() => {
        serverAudioUnlockFinishTimer = 0;
        finish(ok);
      }, 90);
    };
    const finish = (ok) => {
      if (resolved) return;
      resolved = true;
      clearServerAudioUnlockFinishTimer();
      serverAudioUnlockCancel = null;
      serverAudioUnlocked = serverAudioUnlocked || Boolean(ok);
      if (serverAudioUnlocked) clearServerTtsFailure();
      if (stillUnlockAudio()) {
        try {
          audio.pause();
          audio.currentTime = 0;
        } catch {}
        audio.onended = null;
        audio.onerror = null;
        audio.volume = outputVolume;
        audio.removeAttribute("src");
        audio.load();
      }
      serverAudioUnlockPromise = null;
      logLine(serverAudioUnlocked ? "server audio unlocked" : "server audio unlock blocked");
      resolve(serverAudioUnlocked);
    };
    serverAudioUnlockCancel = () => finish(false);
    try {
      audio.volume = 0.01;
      audio.src = url;
      audio.load();
      audio.onended = () => finish(true);
      audio.onerror = () => finish(false);
      const playResult = audio.play();
      if (playResult && typeof playResult.then === "function") {
        playResult.then(() => scheduleFinish(true)).catch(() => finish(false));
      } else {
        scheduleFinish(true);
      }
    } catch {
      finish(false);
    }
  });
  return serverAudioUnlockPromise;
}

function unlockTts() {
  return unlockServerAudio().catch(() => false);
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function ensurePcmScratch(sampleLength) {
  const length = Math.max(0, sampleLength | 0);
  if (!pcmScratch16 || pcmScratch16.length < length) {
    pcmScratch16 = new Int16Array(length);
    pcmScratchBytes = new Uint8Array(pcmScratch16.buffer);
    pcmScratchBytesView = null;
  }
  const byteLength = length * 2;
  if (!pcmScratchBytesView || pcmScratchBytesView.buffer !== pcmScratchBytes.buffer || pcmScratchBytesView.byteLength !== byteLength) {
    pcmScratchBytesView = new Uint8Array(pcmScratchBytes.buffer, 0, byteLength);
  }
  return pcmScratchBytesView;
}

function downsampleTo16k(float32, inputSampleRate) {
  const targetRate = 16000;
  if (inputSampleRate === targetRate) {
    const pcmBytes = ensurePcmScratch(float32.length);
    const pcm = pcmScratch16;
    for (let i = 0; i < float32.length; i += 1) {
      const s = Math.max(-1, Math.min(1, float32[i]));
      pcm[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }
    return pcmBytes;
  }
  const ratio = inputSampleRate / targetRate;
  const outLength = Math.floor(float32.length / ratio);
  const pcmBytes = ensurePcmScratch(outLength);
  const pcm = pcmScratch16;
  for (let i = 0; i < outLength; i += 1) {
    const start = Math.floor(i * ratio);
    const end = Math.min(Math.floor((i + 1) * ratio), float32.length);
    let sum = 0;
    let count = 0;
    for (let j = start; j < end; j += 1) {
      sum += float32[j];
      count += 1;
    }
    const s = Math.max(-1, Math.min(1, count ? sum / count : 0));
    pcm[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return pcmBytes;
}

function setState(state, options = {}) {
  const nextRawState = state || "idle";
  const visualState = VISUAL_STATE_MAP[nextRawState] || "idle";
  const renderSignature = `${nextRawState}|${visualState}`;
  if (renderSignature === lastStateRenderSignature) {
    updateDockControls(visualState);
    return;
  }
  lastStateRenderSignature = renderSignature;
  const previousVisualState = currentVisualState;
  currentRawState = nextRawState;
  currentVisualState = visualState;
  const copy = VOICE_COPY[visualState] || VOICE_COPY.idle;

  els.state.textContent = copy.topStatus;
  if (els.statusIndicator) {
    els.statusIndicator.setAttribute("aria-label", `状态：${copy.topStatus}`);
  }
  if (els.main) {
    els.main.textContent = copy.button;
    els.main.className = "primary";
    if (copy.buttonTone) els.main.classList.add(copy.buttonTone);
  }
  updateDockControls(visualState);
  document.body.dataset.voiceState = currentRawState;
  document.body.dataset.visualState = visualState;
  if (!["idle", "listening"].includes(visualState)) {
    document.body.classList.remove("quickOpen");
  }
  PresenceController.setState(state);
  if (copy.text && previousVisualState !== visualState && !options.preserveSubtitle) {
    setSubtitle(copy.text, { speaker: copy.speaker });
  } else if (copy.speaker) {
    setSubtitleSpeaker(copy.speaker);
  }
}

function updateDockControls(visualState) {
  if (els.dockMic) {
    const activePlayback = hasActiveVoicePlayback();
    const active = Boolean(running || activePlayback);
    const mode = activePlayback
      ? "interrupt"
      : running
        ? "stop"
        : "start";
    els.dockMic.dataset.mode = mode;
    els.dockMic.classList.toggle("active", active);
    els.dockMic.classList.toggle("muted", micMuted);
    els.dockMic.setAttribute(
      "aria-label",
      micMuted
        ? "取消麦克风静音"
        : mode === "interrupt"
          ? "打断 Iris"
          : mode === "stop"
            ? "结束语音"
            : "语音输入"
    );
  }
}

function setDockText(text) {
  if (!els.main) return;
  const value = (text || "").trim();
  if (!value) return;
  els.main.textContent = value.length > 28 ? `${value.slice(0, 28)}...` : value;
}

function openDetails() {
  if (!els.detailSheet) return;
  els.detailSheet.classList.add("open");
  els.detailSheet.setAttribute("aria-hidden", "false");
  document.body.classList.add("detailsOpen");
  document.body.classList.remove("quickOpen");
  if (els.memoryRefresh && !memoryControlLoaded && !memoryControlLoading) {
    refreshMemoryControlCenter().catch((err) => logLine(err.message || "memory refresh failed"));
  }
}

function closeDetails() {
  if (!els.detailSheet) return;
  els.detailSheet.classList.remove("open");
  els.detailSheet.setAttribute("aria-hidden", "true");
  document.body.classList.remove("detailsOpen");
}

let renderedLogLines = [];
let pendingLogLines = [];
let logRenderFrame = 0;

function flushLogRender() {
  logRenderFrame = 0;
  if (!els.log || !pendingLogLines.length) return;
  renderedLogLines = pendingLogLines.concat(renderedLogLines).slice(0, LOG_RENDER_LIMIT);
  pendingLogLines = [];
  const fragment = document.createDocumentFragment();
  renderedLogLines.forEach((line) => {
    const item = document.createElement("div");
    item.className = "logItem";
    item.textContent = line;
    fragment.appendChild(item);
  });
  els.log.replaceChildren(fragment);
}

function scheduleLogRender() {
  if (logRenderFrame || !els.log) return;
  logRenderFrame = requestAnimationFrame(flushLogRender);
}

function flushLogRenderNow() {
  if (logRenderFrame) cancelAnimationFrame(logRenderFrame);
  logRenderFrame = 0;
  flushLogRender();
}

function logLine(text) {
  pendingLogLines.unshift(`${new Date().toLocaleTimeString()} ${text}`);
  if (pendingLogLines.length > LOG_RENDER_LIMIT) pendingLogLines.length = LOG_RENDER_LIMIT;
  scheduleLogRender();
}

function saveToken() {
  safeStorageRemove(TOKEN_KEY);
  safeSessionRemove(ACCESS_TOKEN_KEY);
  safeSessionRemove(ACCESS_TOKEN_EXPIRES_KEY);
  persistedVoiceToken = "";
}

function rememberSessionToken(token, expiresAt) {
  const value = String(token || "").trim();
  if (!value) {
    saveToken();
    return;
  }
  safeStorageRemove(TOKEN_KEY);
  safeSessionSet(ACCESS_TOKEN_KEY, value);
  if (expiresAt) safeSessionSet(ACCESS_TOKEN_EXPIRES_KEY, String(expiresAt));
  persistedVoiceToken = value;
}

function loadToken() {
  safeStorageRemove(TOKEN_KEY);
  const expiresAt = Number(safeSessionGet(ACCESS_TOKEN_EXPIRES_KEY, "0"));
  if (expiresAt && expiresAt <= Math.floor(Date.now() / 1000)) {
    saveToken();
    return;
  }
  persistedVoiceToken = safeSessionGet(ACCESS_TOKEN_KEY, "");
}

function wsUrl() {
  return backendWsUrl("/voice/ws");
}

function voiceClientId() {
  if (cachedVoiceClientId) return cachedVoiceClientId;
  let clientId = safeStorageGet(VOICE_CLIENT_ID_KEY);
  if (!clientId) {
    const suffix = Math.random().toString(16).slice(2, 10);
    clientId = `voice_pwa_${Date.now().toString(36)}_${suffix}`;
    safeStorageSet(VOICE_CLIENT_ID_KEY, clientId);
  }
  cachedVoiceClientId = clientId;
  return cachedVoiceClientId;
}

function initVoiceClientId() {
  voiceClientId();
}

function authEvent() {
  const clientId = voiceClientId();
  return {
    type: "auth",
    token: persistedVoiceToken || "",
    client_type: "web",
    client_id: clientId,
    user_id: "default",
    voice_profile: selectedVoiceProfile()
  };
}

function authHeaders() {
  const token = persistedVoiceToken || "";
  return token ? { "X-Jarvis-Token": token } : {};
}

function setAccessStatus(text) {
  if (els.accessStatus) els.accessStatus.textContent = text || " ";
}

function completeSessionLogin(token, expiresAt) {
  rememberSessionToken(token, expiresAt || "");
  hideAccessGate();
  loadConversationHistory().catch((err) => logLine(err.message || "conversation history failed"));
  setState("idle");
  setAccessStatus(" ");
}

function showAccessGate(reason = "") {
  if (!els.accessGate) return;
  els.accessGate.hidden = false;
  document.body.classList.add("accessLocked");
  if (reason) setAccessStatus(reason);
  if (els.accessSubmit) els.accessSubmit.textContent = "进入";
  if (els.accessToken) window.setTimeout(() => els.accessToken.focus(), 60);
}

function hideAccessGate() {
  if (!els.accessGate) return;
  els.accessGate.hidden = true;
  document.body.classList.remove("accessLocked");
  setAccessStatus(" ");
}

function maybePromptForAccess() {
  if (persistedVoiceToken || !isPublicFrontendMode()) {
    hideAccessGate();
    return;
  }
  showAccessGate("请先输入访问密钥。");
}

function handleUnauthorizedResponse(response) {
  if (!response || response.status !== 401) return false;
  saveToken();
  showAccessGate("登录已过期，请重新输入访问密钥。");
  return true;
}

async function requestAccessSession(accessKey) {
  const response = await fetch(backendUrl("/voice/session-token"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({
      access_key: accessKey,
      client_id: voiceClientId()
    })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.detail || `HTTP ${response.status}`);
  if (!payload.session_token) throw new Error("session_token_missing");
  return payload;
}

function memoryTypeLabel(type) {
  const labels = {
    preference: "偏好",
    goal: "目标",
    project: "项目",
    relationship: "关系",
    health_context: "健康",
    schedule_preference: "日程",
    communication_style: "表达",
    fact: "事实",
    assistant_commitment: "承诺",
    temporary_state: "临时"
  };
  return labels[type] || type || "记忆";
}

function memorySourceLabel(item) {
  if (!item) return "未知";
  if (item.user_confirmed) return "用户确认";
  if (item.source === "user_message") return "用户提供";
  if (item.source === "user_correction") return "用户修正";
  return item.source || "模型整理";
}

function setMemoryStatus(text) {
  if (els.memoryStatus) els.memoryStatus.textContent = text || " ";
}

function renderMemoryEmpty(text) {
  if (!els.memoryList) return;
  const item = document.createElement("p");
  item.className = "memoryEmpty";
  item.textContent = text || "暂无记忆";
  els.memoryList.replaceChildren(item);
}

function memoryActionSnippet(content, maxLength = 44) {
  return String(content || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function memoryActionAllowed(item, action) {
  const actions = item && item.available_actions && typeof item.available_actions === "object" ? item.available_actions : {};
  return Boolean(actions[action]);
}

function setMemoryButtonsDisabled(container, disabled) {
  if (!container) return;
  container.querySelectorAll("button, textarea").forEach((node) => {
    node.disabled = Boolean(disabled);
  });
}

async function requestMemoryAction(action, item, options = {}) {
  const memoryId = item && item.memory_id ? String(item.memory_id) : "";
  if (!memoryId && !["confirm_pending", "cancel_pending"].includes(action)) return null;
  const body = {
    user_id: "default",
    channel: "web",
    client_id: voiceClientId(),
    action
  };
  if (memoryId) body.memory_id = memoryId;
  if (options.newContent) body.new_content = options.newContent;
  const response = await fetch(backendUrl("/client/v1/memory/action"), {
    method: "POST",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify(body)
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    throw new Error(payload.detail || `HTTP ${response.status}`);
  }
  if (payload && payload.reply) setMemoryStatus(payload.reply.replace(/\s+/g, " ").slice(0, 140));
  if (payload && payload.message && payload.message.reply) {
    appendConversationMessage("assistant", payload.message.reply);
  }
  await refreshMemoryControlCenter({ force: true });
  return payload;
}

function renderMemoryPendingCard(pending) {
  if (!pending || !pending.has_pending) return null;
  const pendingItem = Array.isArray(pending.items) && pending.items.length ? pending.items[0] : {};
  const card = document.createElement("article");
  card.className = "memoryPending";

  const title = document.createElement("p");
  title.className = "memoryMeta";
  title.textContent = "待确认记忆操作";

  const detail = document.createElement("p");
  detail.className = "memoryContent";
  detail.textContent = pendingItem.content_preview || pendingItem.action || "有一条记忆操作等待确认";

  const actions = document.createElement("div");
  actions.className = "memoryActions";

  const confirm = document.createElement("button");
  confirm.type = "button";
  confirm.textContent = "确认";
  confirm.addEventListener("click", async () => {
    setMemoryButtonsDisabled(card, true);
    try {
      await requestMemoryAction("confirm_pending", null);
    } catch (err) {
      setMemoryStatus(`确认失败：${err.message || "网络不可用"}`);
      setMemoryButtonsDisabled(card, false);
    }
  });

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = "取消";
  cancel.className = "danger";
  cancel.addEventListener("click", async () => {
    setMemoryButtonsDisabled(card, true);
    try {
      await requestMemoryAction("cancel_pending", null);
    } catch (err) {
      setMemoryStatus(`取消失败：${err.message || "网络不可用"}`);
      setMemoryButtonsDisabled(card, false);
    }
  });

  actions.append(confirm, cancel);
  card.append(title, detail, actions);
  return card;
}

function renderMemoryCorrectionEditor(row, item) {
  if (!row || row.querySelector(".memoryInlineEditor")) return;
  const editor = document.createElement("div");
  editor.className = "memoryInlineEditor";

  const input = document.createElement("textarea");
  input.rows = 3;
  input.value = item && item.content ? String(item.content) : "";
  input.setAttribute("aria-label", "新的记忆内容");

  const actions = document.createElement("div");
  actions.className = "memoryActions";

  const preview = document.createElement("button");
  preview.type = "button";
  preview.textContent = "生成修改预览";
  preview.addEventListener("click", async () => {
    const newContent = input.value.trim();
    if (!newContent || newContent === String(item.content || "").trim()) {
      setMemoryStatus("请先输入新的记忆内容");
      return;
    }
    setMemoryButtonsDisabled(editor, true);
    try {
      await requestMemoryAction("preview_correct", item, { newContent });
    } catch (err) {
      setMemoryStatus(`修改预览失败：${err.message || "网络不可用"}`);
      setMemoryButtonsDisabled(editor, false);
    }
  });

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = "收起";
  cancel.addEventListener("click", () => editor.remove());

  actions.append(preview, cancel);
  editor.append(input, actions);
  row.append(editor);
  window.setTimeout(() => input.focus(), 40);
}

async function requestMemoryPreview(action, item, container) {
  setMemoryButtonsDisabled(container, true);
  try {
    await requestMemoryAction(action, item);
  } catch (err) {
    setMemoryStatus(`操作失败：${err.message || "网络不可用"}`);
    setMemoryButtonsDisabled(container, false);
  }
}

function renderMemoryControlCenter(payload) {
  if (!els.memoryList) return;
  const events = Array.isArray(payload && payload.events) ? payload.events : [];
  const counts = payload && payload.event_counts ? payload.event_counts : {};
  const digest = payload && payload.digest ? payload.digest : {};
  const pending = payload && payload.pending ? payload.pending : {};
  const summary = payload && payload.control_summary ? payload.control_summary : {};
  const digestCounts = digest.counts || {};
  const activeCount = Number.isFinite(Number(counts.active)) ? Number(counts.active) : events.length;
  const digestTotal = Object.values(digestCounts).reduce((total, value) => total + (Number(value) || 0), 0);
  const actionCounts = summary.action_counts || {};
  const pendingCount = pending && pending.has_pending ? Number(pending.count || 1) : 0;
  setMemoryStatus(`事件 ${activeCount} 条 · 摘要 ${digestTotal} 条 · 待处理 ${pendingCount + Number(actionCounts.confirmable || 0)} 条`);
  const fragment = document.createDocumentFragment();
  const pendingCard = renderMemoryPendingCard(pending);
  if (pendingCard) fragment.appendChild(pendingCard);
  if (!events.length && !pendingCard) {
    renderMemoryEmpty("暂无可展示的事件记忆");
    return;
  }
  events.slice(-24).reverse().forEach((item) => {
    const row = document.createElement("article");
    row.className = "memoryItem";

    const meta = document.createElement("p");
    meta.className = "memoryMeta";
    const confidence = item.confidence === null || item.confidence === undefined ? "" : ` · ${Number(item.confidence).toFixed(2)}`;
    meta.textContent = `${memoryTypeLabel(item.type)} · ${memorySourceLabel(item)}${confidence}`;

    const content = document.createElement("p");
    content.className = "memoryContent";
    content.textContent = item.content || " ";

    const source = document.createElement("p");
    source.className = "memorySource";
    const parts = [item.channel || "", item.timestamp ? item.timestamp.replace("T", " ").slice(0, 16) : ""].filter(Boolean);
    source.textContent = parts.join(" · ");

    const actions = document.createElement("div");
    actions.className = "memoryActions";

    if (memoryActionAllowed(item, "confirm")) {
      const confirm = document.createElement("button");
      confirm.type = "button";
      confirm.textContent = "确认";
      confirm.addEventListener("click", () => requestMemoryPreview("preview_confirm", item, row));
      actions.append(confirm);
    }

    const correct = document.createElement("button");
    correct.type = "button";
    correct.textContent = "修正";
    correct.disabled = !memoryActionAllowed(item, "correct");
    correct.addEventListener("click", () => renderMemoryCorrectionEditor(row, item));

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "删除";
    remove.className = "danger";
    remove.disabled = !memoryActionAllowed(item, "delete");
    remove.addEventListener("click", () => requestMemoryPreview("preview_delete", item, row));

    actions.append(correct, remove);
    row.append(meta, content, source, actions);
    fragment.appendChild(row);
  });
  els.memoryList.replaceChildren(fragment);
}

async function refreshMemoryControlCenter(options = {}) {
  if (!els.memoryRefresh || !els.memoryList || memoryControlLoading) return;
  memoryControlLoading = true;
  els.memoryRefresh.disabled = true;
  if (!options.force) setMemoryStatus("读取中");
  try {
    const params = new URLSearchParams({ limit: "80", user_id: "default", channel: "web", client_id: voiceClientId() });
    const query = els.memorySearch ? els.memorySearch.value.trim() : "";
    if (query) params.set("q", query);
    const response = await fetch(backendUrl(`/client/v1/memory?${params.toString()}`), {
      method: "GET",
      headers: authHeaders(),
      cache: "no-store"
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    renderMemoryControlCenter(payload);
    memoryControlLoaded = true;
  } catch (err) {
    setMemoryStatus(`读取失败：${err.message || "网络不可用"}`);
    renderMemoryEmpty("记忆读取失败");
    logLine(`memory refresh failed ${err.message || ""}`.trim());
  } finally {
    memoryControlLoading = false;
    els.memoryRefresh.disabled = false;
  }
}

function scheduleMemorySearchRefresh() {
  if (!els.memorySearch) return;
  if (memorySearchTimer) window.clearTimeout(memorySearchTimer);
  memorySearchTimer = window.setTimeout(() => {
    memorySearchTimer = 0;
    refreshMemoryControlCenter().catch((err) => logLine(err.message || "memory search failed"));
  }, 220);
}

function clearMemorySearchSchedule() {
  if (!memorySearchTimer) return;
  window.clearTimeout(memorySearchTimer);
  memorySearchTimer = 0;
}

function setDocumentStatus(text) {
  if (els.documentStatus) els.documentStatus.textContent = text || " ";
  if (els.documentContextBar) els.documentContextBar.hidden = !currentDocumentId && !(text || "").trim();
}

function setDocumentAnswer(text) {
  if (els.documentAnswer) els.documentAnswer.textContent = text || " ";
}

function setDocumentBusy(busy) {
  if (els.documentUpload) els.documentUpload.disabled = Boolean(busy);
  if (els.documentSummarize) els.documentSummarize.disabled = Boolean(busy || !currentDocumentId);
  if (els.documentAsk) els.documentAsk.disabled = Boolean(busy || !currentDocumentId);
}

function documentSummaryLine(doc) {
  if (!doc) return "";
  const parts = [
    doc.filename || currentDocumentName || "PDF",
    doc.status ? `状态：${doc.status}` : "",
    doc.parser ? `解析器：${doc.parser}` : "",
    Number.isFinite(Number(doc.page_count)) && Number(doc.page_count) > 0 ? `${doc.page_count} 页` : "",
    Number.isFinite(Number(doc.char_count)) ? `${doc.char_count} 字符` : ""
  ].filter(Boolean);
  return parts.join(" · ");
}

async function uploadCurrentDocument() {
  if (!canUseBackendNow()) {
    showAccessGate("请先输入访问密钥。");
    return;
  }
  if (!els.documentPdf || !els.documentPdf.files || !els.documentPdf.files.length) {
    if (els.documentPdf) els.documentPdf.click();
    return;
  }
  const file = els.documentPdf.files[0];
  if (!file || (!file.name.toLowerCase().endsWith(".pdf") && file.type !== "application/pdf")) {
    setDocumentStatus("这里只接收 PDF 文件。");
    return;
  }
  currentDocumentId = "";
  currentDocumentName = file.name;
  currentDocumentSummary = "";
  setDocumentBusy(true);
  setDocumentStatus(`正在上传并解析：${file.name}`);
  setDocumentAnswer(" ");
  appendConversationMessage("file", `正在接收：${file.name}`, { kind: "uploading" });
  const url = backendUrl(`/client/v1/documents/upload?filename=${encodeURIComponent(file.name)}&client_id=${encodeURIComponent(voiceClientId())}`);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/pdf",
        "X-Jarvis-Client-Id": voiceClientId(),
        ...authHeaders()
      },
      body: file
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail && typeof payload.detail === "string" ? payload.detail : `upload_failed_${response.status}`);
    }
    currentDocumentId = payload.id || "";
    currentDocumentSummary = documentSummaryLine(payload);
    setDocumentStatus(documentSummaryLine(payload));
    const warnings = Array.isArray(payload.warnings) && payload.warnings.length ? `\n${payload.warnings.join("\n")}` : "";
    const accepted = currentDocumentId ? `已接收 ${payload.filename || file.name}。\n${documentSummaryLine(payload)}${warnings}` : "上传完成，但没有拿到文档 ID。";
    setDocumentAnswer(accepted);
    appendAssistantConversation(accepted, { kind: "document_ready" });
  } catch (err) {
    currentDocumentId = "";
    currentDocumentSummary = "";
    setDocumentStatus(`PDF 上传失败：${err.message || "unknown"}`);
    appendAssistantConversation(`PDF 上传失败：${err.message || "unknown"}`, { kind: "document_error" });
    logLine(`document upload failed ${err.message || ""}`.trim());
  } finally {
    if (els.documentPdf) els.documentPdf.value = "";
    setDocumentBusy(false);
  }
}

async function summarizeCurrentDocument() {
  if (!canUseBackendNow()) {
    showAccessGate("请先输入访问密钥。");
    return;
  }
  if (!currentDocumentId) {
    setDocumentStatus("先上传并解析一份 PDF。");
    return;
  }
  setDocumentBusy(true);
  setDocumentAnswer("正在整理摘要...");
  const pendingId = appendAssistantConversation("正在整理这份 PDF 的摘要...", { kind: "document_pending" });
  try {
    const response = await fetch(backendUrl(`/client/v1/documents/${encodeURIComponent(currentDocumentId)}/summarize`), {
      method: "POST",
      headers: {
        "X-Jarvis-Client-Id": voiceClientId(),
        ...authHeaders()
      }
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `summarize_failed_${response.status}`);
    }
    const points = Array.isArray(payload.key_points) && payload.key_points.length
      ? `\n\n要点：\n${payload.key_points.map((item) => `- ${item}`).join("\n")}`
      : "";
    const outline = Array.isArray(payload.outline) && payload.outline.length
      ? `\n\n结构：\n${payload.outline.map((item) => `- ${item}`).join("\n")}`
      : "";
    const text = `${payload.summary || "没有生成摘要。"}${points}${outline}`;
    setDocumentAnswer(text);
    if (!updateConversationMessage(pendingId, text, { label: "Iris · PDF 摘要" })) {
      appendAssistantConversation(text, { label: "Iris · PDF 摘要", kind: "document_summary" });
    }
    if (payload.document) setDocumentStatus(documentSummaryLine(payload.document));
  } catch (err) {
    setDocumentAnswer(`摘要失败：${err.message || "unknown"}`);
    updateConversationMessage(pendingId, `摘要失败：${err.message || "unknown"}`, { label: "Iris" });
    logLine(`document summarize failed ${err.message || ""}`.trim());
  } finally {
    setDocumentBusy(false);
  }
}

async function askCurrentDocument(questionOverride = "") {
  if (!canUseBackendNow()) {
    showAccessGate("请先输入访问密钥。");
    return;
  }
  if (!currentDocumentId) {
    setDocumentStatus("先上传并解析一份 PDF。");
    return;
  }
  const question = (questionOverride || (els.documentQuestion && els.documentQuestion.value ? els.documentQuestion.value : "")).trim();
  if (!question) {
    setDocumentAnswer("先输入一个想问这份 PDF 的问题。");
    return;
  }
  setDocumentBusy(true);
  setDocumentAnswer("正在从文档里找相关内容...");
  appendUserConversation(question, { force: true });
  const pendingId = appendAssistantConversation("正在从当前 PDF 里找相关内容...", { kind: "document_pending" });
  try {
    const response = await fetch(backendUrl(`/client/v1/documents/${encodeURIComponent(currentDocumentId)}/ask`), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Jarvis-Client-Id": voiceClientId(),
        ...authHeaders()
      },
      body: JSON.stringify({ question })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `ask_failed_${response.status}`);
    }
    const citations = Array.isArray(payload.citations) && payload.citations.length
      ? `\n\n来源：${payload.citations.map((item) => item.citation_label || (item.page ? `第 ${item.page} 页` : item.chunk_id)).filter(Boolean).join("、")}`
      : "";
    const text = `${payload.answer || "没有找到可回答的内容。"}${citations}`;
    setDocumentAnswer(text);
    if (!updateConversationMessage(pendingId, text, { label: "Iris · PDF" })) {
      appendAssistantConversation(text, { label: "Iris · PDF", kind: "document_answer" });
    }
  } catch (err) {
    setDocumentAnswer(`追问失败：${err.message || "unknown"}`);
    updateConversationMessage(pendingId, `追问失败：${err.message || "unknown"}`, { label: "Iris" });
    logLine(`document ask failed ${err.message || ""}`.trim());
  } finally {
    setDocumentBusy(false);
  }
}

function clearTtsRoutePersistSchedule() {
  if (ttsRoutePersistTimer) window.clearTimeout(ttsRoutePersistTimer);
  if (ttsRoutePersistIdleHandle && typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(ttsRoutePersistIdleHandle);
  }
  ttsRoutePersistTimer = 0;
  ttsRoutePersistIdleHandle = 0;
}

function flushTtsRoutePersist() {
  clearTtsRoutePersistSchedule();
  if (!pendingTtsRoutePersistText) return;
  const text = pendingTtsRoutePersistText;
  pendingTtsRoutePersistText = "";
  if (persistedTtsRouteText === null) persistedTtsRouteText = safeStorageGet(TTS_ROUTE_KEY);
  if (text === persistedTtsRouteText) return;
  safeStorageSet(TTS_ROUTE_KEY, text);
  persistedTtsRouteText = text;
}

function scheduleTtsRoutePersist(text) {
  pendingTtsRoutePersistText = text || "";
  if (ttsRoutePersistTimer || ttsRoutePersistIdleHandle) return;
  if (typeof window.requestIdleCallback === "function") {
    ttsRoutePersistIdleHandle = window.requestIdleCallback(flushTtsRoutePersist, { timeout: 900 });
    return;
  }
  ttsRoutePersistTimer = window.setTimeout(flushTtsRoutePersist, TTS_ROUTE_PERSIST_FALLBACK_MS);
}

function rememberTtsRoute(route) {
  lastTtsRoute = {
    provider: route.provider || "unknown",
    voiceProfile: route.voiceProfile || selectedVoiceProfile(),
    source: route.source || "unknown",
    summary: route.summary || ""
  };
  const readable = [
    `来源：${lastTtsRoute.source}`,
    `Provider：${lastTtsRoute.provider}`,
    `音色：${lastTtsRoute.voiceProfile}`,
    lastTtsRoute.summary
  ].filter(Boolean).join("\n");
  currentTtsRouteText = readable;
  scheduleTtsRoutePersist(readable);
  renderWebTtsRoute();
}

function send(event) {
  if (!ws || ws.readyState !== WebSocket.OPEN) return false;
  try {
    ws.send(JSON.stringify(event));
    return true;
  } catch (error) {
    return recordWebSocketSendFailure(error, event && event.type ? event.type : "event");
  }
}

function sendRaw(payload, context = "binary") {
  if (!ws || ws.readyState !== WebSocket.OPEN) return false;
  try {
    ws.send(payload);
    return true;
  } catch (error) {
    return recordWebSocketSendFailure(error, context);
  }
}

function releaseCurrentSocket(socket) {
  if (ws === socket) {
    ws = null;
    voiceSocketAuthenticated = false;
  }
}

function recordWebSocketSendFailure(error, context = "event") {
  websocketSendFailures += 1;
  const detail = error && error.message ? ` ${error.message}` : "";
  logLine(`WebSocket send failed ${context} #${websocketSendFailures}${detail}`.trim());
  suspendVoiceCaptureAfterSendFailure();
  setState("disconnected");
  setSttHint("语音连接刚才断开了。网络恢复后再点一次就好。");
  flushLogRenderNow();
  return false;
}

function closeVoiceSocket(reason = "client_close") {
  if (ws) {
    try {
      ws.close(1000, reason);
    } catch {}
    ws = null;
  }
  connectPromise = null;
  voiceSocketAuthenticated = false;
}

function releaseVoiceCaptureResources(reason = "") {
  stopRecognition();
  stopPcmStreamer({ releaseSource: true });
  stopVad();
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
  mediaSource = null;
  analyser = null;
  if (audioContext) {
    audioContext.close().catch(() => {});
    audioContext = null;
  }
  if (reason) logLine(`voice capture resources released: ${reason}`);
}

function suspendVoiceCaptureAfterSendFailure() {
  running = false;
  serverSttEnabled = false;
  serverSttRequested = false;
  localSpeaking = false;
  releaseVoiceCaptureResources("send_failure");
  closeVoiceSocket("send_failure");
  logLine("voice capture suspended after WebSocket send failure");
}

function suspendVoiceCaptureAfterSocketClose(reason = "socket_close") {
  running = false;
  serverSttEnabled = false;
  serverSttRequested = false;
  localSpeaking = false;
  releaseVoiceCaptureResources(reason);
}

function shutdownVoiceSessionForPageHide() {
  cancelUserPartialRender();
  cancelAgentReplyRender();
  const hasPlaybackWork = Boolean(currentAudio || currentAudioUrl || activeTtsRequestId || activeTtsAbortController || agentSpeaking);
  if (!running && !ws && !hasPlaybackWork && !audioContext && !stream) return;
  running = false;
  serverSttEnabled = false;
  serverSttRequested = false;
  localSpeaking = false;
  stopPlayback("pagehide", { notifyInterrupt: false });
  releaseVoiceCaptureResources("pagehide");
  send({ type: "stop_session" });
  closeVoiceSocket("pagehide");
  logLine("voice session cleaned up for pagehide");
}

async function sendTextPrompt(text) {
  const final = (text || "").trim();
  if (!final) return;
  if (!canUseBackendNow()) {
    showAccessGate("请先输入访问密钥。");
    return;
  }
  const requestId = textPromptSeq + 1;
  textPromptSeq = requestId;
  prepareTextInputTurn();
  els.final.textContent = final;
  els.partial.textContent = "";
  setDockText(final);
  setSubtitle(final, { speaker: "你" });
  appendUserConversation(final);
  setState("thinking");
  try {
    const response = await fetch(backendUrl("/client/v1/message"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders()
      },
      body: JSON.stringify({
        client_type: "web",
        client_id: voiceClientId(),
        session_id: currentConversationId || "web",
        user_id: "default",
        input: { type: "text", text: final },
        client_context: {
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Shanghai",
          locale: navigator.language || "zh-CN",
          foreground: document.visibilityState !== "hidden",
          voice_profile: selectedVoiceProfile(),
          voice_output: false
        },
        capabilities: WEB_TEXT_CAPABILITIES,
        auth: { token: persistedVoiceToken || "" }
      })
    });
    if (requestId !== textPromptSeq) {
      logLine("stale text prompt skipped");
      return;
    }
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    currentConversationId = payload.conversation_id || currentConversationId;
    const reply = String(payload.reply || "").trim() || "我没有拿到可显示的回复。";
    els.reply.textContent = reply;
    appendAssistantConversation(reply, {
      id: payload.response_id ? `assistant_${payload.response_id}` : "",
      kind: payload.skill || payload.route || "text_reply",
      forceScroll: true
    });
    setSubtitle(reply, { speaker: "IRIS", resetFlow: true });
    setState("idle", { preserveSubtitle: true });
    logLine(`text reply · ${payload.route || "client"}${payload.skill ? `/${payload.skill}` : ""}`);
  } catch (err) {
    const message = `文字发送失败：${err.message || "网络不可用"}`;
    appendAssistantConversation(message, { kind: "error" });
    logLine(message);
    setState("error");
    setSttHint("文字发送失败。网络恢复后再试一次。");
    return;
  }
}

function prepareTextInputTurn() {
  stopPlayback("text_input", { notifyInterrupt: false });
  cancelUserPartialRender();
  stopRecognition();
  if (running) {
    running = false;
    releaseVoiceCaptureResources("text_input");
    send({ type: "stop_session" });
    closeVoiceSocket("text_input");
  }
  serverSttEnabled = false;
  serverSttRequested = false;
  recognitionActive = false;
  recognitionStarting = false;
}

function handleTextPromptCommand(text, options = {}) {
  const final = (text || "").trim();
  if (!final) return;
  if (options.clearManualInput && els.manual) els.manual.value = "";
  if (options.closeQuick) document.body.classList.remove("quickOpen");
  if (options.documentAware && currentDocumentId) {
    askCurrentDocument(final).catch((err) => {
      const message = `文档追问失败：${err.message || "PDF 不可用"}`;
      logLine(message);
      appendAssistantConversation(message, { kind: "document_error" });
    });
    return;
  }
  sendTextPrompt(final).catch((err) => {
    const message = `文字发送失败：${err.message || "语音连接不可用"}`;
    logLine(message);
    if (currentRawState !== "auth_error") {
      setState("disconnected");
      setSttHint("文字发送失败。网络恢复后再试一次。");
    }
  });
}

function applyComposerInputSize() {
  if (!els.manual) return;
  els.manual.style.height = "auto";
  const next = Math.min(132, Math.max(42, els.manual.scrollHeight || 42));
  els.manual.style.height = `${next}px`;
  scheduleViewportMetrics({ refreshSubtitle: false });
}

function resizeComposerInput(options = {}) {
  if (!els.manual) return;
  if (options.immediate) {
    if (composerResizeFrame) cancelAnimationFrame(composerResizeFrame);
    composerResizeFrame = 0;
    applyComposerInputSize();
    return;
  }
  if (composerResizeFrame) return;
  composerResizeFrame = requestAnimationFrame(() => {
    composerResizeFrame = 0;
    applyComposerInputSize();
  });
}

function clearComposerResizeSchedule() {
  if (composerResizeFrame) cancelAnimationFrame(composerResizeFrame);
  composerResizeFrame = 0;
}

function handleComposerSubmit() {
  const text = (els.manual && els.manual.value ? els.manual.value : "").trim();
  if (!text) {
    if (currentDocumentId) summarizeCurrentDocument().catch((err) => logLine(err.message || "document summarize failed"));
    return;
  }
  if (els.manual) {
    els.manual.value = "";
    resizeComposerInput({ immediate: true });
  }
  handleTextPromptCommand(text, { documentAware: true });
}

async function connect() {
  if (!canUseBackendNow()) {
    showAccessGate("请先输入访问密钥。");
    return false;
  }
  if (ws && ws.readyState === WebSocket.OPEN && voiceSocketAuthenticated) return true;
  if (ws && connectPromise && ws.readyState !== WebSocket.CLOSED) return connectPromise;
  if (ws && ws.readyState === WebSocket.OPEN && !voiceSocketAuthenticated) {
    closeVoiceSocket("auth_not_ready");
  }
  setState("connecting");
  let socket;
  try {
    socket = new WebSocket(wsUrl());
  } catch (error) {
    const detail = error && error.message ? ` ${error.message}` : "";
    logLine(`WebSocket create failed${detail}`.trim());
    running = false;
    setState("disconnected");
    setSttHint("语音连接还没建立成功。网络恢复后再点一次就好。");
    return false;
  }
  ws = socket;
  voiceSocketAuthenticated = false;
  const pendingConnect = new Promise((resolve) => {
    let settled = false;
    const timeout = window.setTimeout(() => {
      if (ws !== socket) {
        finish(false);
        return;
      }
      const timeoutReason = socket.readyState === WebSocket.CONNECTING ? "connect_timeout" : "auth_timeout";
      logLine(timeoutReason === "connect_timeout" ? "WebSocket connect timeout" : "WebSocket auth timeout");
      setState("disconnected");
      setSttHint("连接超时。网络恢复后再点一次就好。");
      try {
        socket.close(1000, timeoutReason);
      } catch {}
      releaseCurrentSocket(socket);
      finish(false);
    }, WEBSOCKET_CONNECT_TIMEOUT_MS);
    const finish = (ok) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      if (connectPromise === pendingConnect) connectPromise = null;
      resolve(Boolean(ok));
    };
    socket.addEventListener("open", () => {
      if (ws !== socket) {
        socket.close(1000, "stale_voice_socket");
        finish(false);
        return;
      }
      try {
        socket.send(JSON.stringify(authEvent()));
      } catch (error) {
        recordWebSocketSendFailure(error, "auth");
        setState("disconnected");
        try {
          socket.close(1000, "auth_send_failed");
        } catch {}
        releaseCurrentSocket(socket);
        finish(false);
        return;
      }
      setState("connected");
      logLine("WebSocket connected");
    });
    socket.addEventListener("close", (event) => {
      if (ws !== socket) {
        finish(false);
        return;
      }
      if (event.code === 1008) {
        if (running) {
          suspendVoiceCaptureAfterSocketClose("auth_socket_close");
        } else {
          running = false;
          serverSttEnabled = false;
          serverSttRequested = false;
        }
        setState("auth_error");
        setSttHint("连接鉴权失败。Tailscale 内访问会自动放行；非 Tailscale 访问需要正确 Token。");
      } else if (running) {
        suspendVoiceCaptureAfterSocketClose("socket_close");
        setState("disconnected");
      }
      logLine(`WebSocket closed ${event.code || ""}`);
      releaseCurrentSocket(socket);
      finish(false);
    });
    socket.addEventListener("error", () => {
      if (ws !== socket) {
        finish(false);
        return;
      }
      setState("disconnected");
      setSttHint("语音连接刚才断开了。网络恢复后再点一次就好。");
      logLine("WebSocket error");
      try {
        socket.close(1000, "socket_error");
      } catch {}
      releaseCurrentSocket(socket);
      finish(false);
    });
    socket.addEventListener("message", (event) => {
      if (ws !== socket) return;
      try {
        const parsed = JSON.parse(event.data);
        if (parsed && parsed.type === "auth_ack") {
          if (parsed.ok === false) {
            setState("auth_error");
            setSttHint("连接鉴权失败。Tailscale 内访问会自动放行；非 Tailscale 访问需要正确 Token。");
            try {
              socket.close(1008, "auth_rejected");
            } catch {}
            releaseCurrentSocket(socket);
            finish(false);
            return;
          }
          voiceSocketAuthenticated = true;
          handleServerEvent(parsed);
          finish(true);
          return;
        }
        if (!voiceSocketAuthenticated && !PRE_AUTH_SAFE_EVENT_TYPES.has(String(parsed && parsed.type || ""))) {
          logLine(`ignored pre-auth server event ${parsed && parsed.type ? parsed.type : "unknown"}`);
          return;
        }
        handleServerEvent(parsed);
      } catch (err) {
        logLine("bad server event");
      }
    });
  });
  connectPromise = pendingConnect;
  return connectPromise;
}

async function start() {
  if (running) return;
  pagehideCleanupStarted = false;
  unlockTts().catch(() => {});
  running = true;
  speakerMuted = false;
  els.speaker.textContent = "静音扬声器";
  els.partial.textContent = "";
  els.final.textContent = "";
  els.reply.textContent = "";
  cancelUserPartialRender();
  cancelAgentReplyRender();
  setSubtitle("我在，慢慢说。", { speaker: "IRIS" });
  setSttHint("");
  sttFatal = false;
  browserSttUnavailable = false;
  sttErrorCount = 0;
  serverCapabilitiesReceived = false;
  serverSttEnabled = false;
  serverSttRequested = false;
  serverPcmSttAvailable = false;
  serverSttMode = "";
  serverSttModel = "";
  websocketSendFailures = 0;
  const wsReady = await connect();
  if (!wsReady) {
    running = false;
    if (currentRawState !== "auth_error") {
      setState("disconnected");
      setSttHint("语音连接还没建立成功，我没有开始录音。请点“重连”或重新开始。");
    }
    return;
  }
  try {
    await startMicrophone();
  } catch (err) {
    running = false;
    releaseVoiceCaptureResources("microphone_error");
    send({ type: "stop_session" });
    closeVoiceSocket("microphone_error");
    setState("microphone_error");
    throw err;
  }
  if (!running || !ws || ws.readyState !== WebSocket.OPEN || !voiceSocketAuthenticated) {
    const authFailed = currentRawState === "auth_error";
    running = false;
    releaseVoiceCaptureResources("socket_closed_after_microphone_start");
    if (!authFailed) {
      setState("disconnected");
      setSttHint("语音连接刚才断开了。网络恢复后再点一次就好。");
    }
    return;
  }
  if (shouldPreferServerStt()) {
    requestServerStt("preferred_device_start");
  } else {
    scheduleRecognitionRestart(120);
  }
  setState("listening");
}

async function stop() {
  running = false;
  cancelUserPartialRender();
  cancelAgentReplyRender();
  stopPlayback("stop_session");
  releaseVoiceCaptureResources("stop_session");
  send({ type: "stop_session" });
  closeVoiceSocket("stop_session");
  setState("idle");
}

async function startMicrophone() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    });
  } catch (err) {
    setState("microphone_error");
    logLine("microphone permission error");
    throw err;
  }

  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  try {
    if (!AudioContextCtor) {
      setState("microphone_error");
      setSttHint("当前浏览器不支持 Web Audio，无法启用语音识别。");
      throw new Error("Web Audio unavailable");
    }
    audioContext = new AudioContextCtor();
    await ensureAudioContextRunning();
    mediaSource = audioContext.createMediaStreamSource(stream);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024;
    mediaSource.connect(analyser);
    startVad();
  } catch (err) {
    releaseVoiceCaptureResources("microphone_start_failed");
    throw err;
  }
}

async function ensureAudioContextRunning() {
  if (!audioContext || audioContext.state !== "suspended") return true;
  try {
    await audioContext.resume();
    return audioContext.state === "running";
  } catch (err) {
    logLine(`audio resume failed ${err.message || ""}`.trim());
    return false;
  }
}

function startPcmStreamer() {
  if (!audioContext || !mediaSource || pcmProcessor) return;
  ensureAudioContextRunning().catch(() => {});
  const bufferSize = 4096;
  pcmProcessor = audioContext.createScriptProcessor(bufferSize, 1, 1);
  const pcmChunkEvent = {
    type: "pcm_audio_chunk",
    sample_rate: 16000,
    audio_b64: ""
  };
  pcmProcessor.onaudioprocess = (event) => {
    if (!running || micMuted || !serverSttEnabled) return;
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    if (ws.bufferedAmount > PCM_WS_BUFFERED_AMOUNT_LIMIT) {
      pcmBackpressureDrops += 1;
      if (pcmBackpressureDrops === 1 || pcmBackpressureDrops % 25 === 0) {
        logLine(`PCM STT backpressure drop ${pcmBackpressureDrops}`);
      }
      return;
    }
    const input = event.inputBuffer.getChannelData(0);
    const pcmBytes = downsampleTo16k(input, audioContext.sampleRate);
    pcmChunkEvent.audio_b64 = bytesToBase64(pcmBytes);
    send(pcmChunkEvent);
  };
  mediaSource.connect(pcmProcessor);
  pcmProcessor.connect(audioContext.destination);
}

function stopPcmStreamer(options = {}) {
  const processor = pcmProcessor;
  if (processor) {
    if (mediaSource) {
      try {
        mediaSource.disconnect(processor);
      } catch {}
    }
    try {
      processor.disconnect();
    } catch {}
    processor.onaudioprocess = null;
  }
  pcmProcessor = null;
  if (options.releaseSource) mediaSource = null;
}

function requestServerStt(reason) {
  serverSttRequested = true;
  if (serverPcmSttAvailable) {
    enableServerStt(reason);
    return;
  }
  if (!serverCapabilitiesReceived) {
    setState("listening");
    setSttHint("正在确认 Iris 云端识别能力，确认后会自动接管。");
    logLine(`server STT requested: ${reason || "request"}`);
    return;
  }
  fallbackToBrowserStt("server_stt_unavailable");
}

function enableServerStt(reason) {
  if (serverSttEnabled) {
    if (!pcmProcessor) startPcmStreamer();
    return;
  }
  if (!serverPcmSttAvailable) {
    requestServerStt(reason || "enable_without_capability");
    return;
  }
  if (!audioContext || !mediaSource) {
    serverSttRequested = true;
    setSttHint("Iris 云端识别已就绪，正在等待麦克风启动。");
    logLine(`server STT pending microphone: ${reason || "enable"}`);
    return;
  }
  serverSttEnabled = true;
  pcmBackpressureDrops = 0;
  sttFatal = true;
  stopRecognition();
  startPcmStreamer();
  setState("listening");
  const label = [serverSttMode, serverSttModel].filter(Boolean).join(" / ");
  setSttHint(`已切换到 Iris 云端识别${label ? `（${label}）` : ""}。请靠近手机正常说话。`);
  logLine(`server STT enabled: ${reason || "fallback"}`);
}

function fallbackToBrowserStt(reason) {
  serverSttEnabled = false;
  sttFatal = false;
  stopPcmStreamer();
  if (browserSttUnavailable) {
    sttFatal = true;
    setState("stt_error");
    setSttHint("浏览器语音识别启动失败，Iris 云端识别也暂不可用。你可以先用手动输入。");
    logLine(`STT browser unavailable: ${reason || "unknown"}`);
    return;
  }
  const Ctor = speechRecognitionCtor();
  if (!Ctor) {
    setState("stt_error");
    setSttHint("这台设备既没有可用的浏览器语音识别，Iris 云端识别也暂不可用。你可以先用手动输入。");
    logLine(`STT no fallback: ${reason || "unknown"}`);
    return;
  }
  setState("listening");
  setSttHint("云端识别暂不可用，已切回浏览器语音识别。");
  scheduleRecognitionRestart(250);
  logLine(`STT fallback to browser: ${reason || "unknown"}`);
}

function scheduleVadTick(tick, delayMs = VAD_ANALYSIS_INTERVAL_MS) {
  if (!running || vadTimer || vadDelayTimer) return;
  const requestTick = () => {
    if (!running || vadTimer) return;
    vadTimer = requestAnimationFrame(tick);
  };
  if (delayMs > 0) {
    vadDelayTimer = window.setTimeout(() => {
      vadDelayTimer = 0;
      requestTick();
    }, delayMs);
    return;
  }
  requestTick();
}

function startVad() {
  if (vadTimer || vadDelayTimer || !analyser) return;
  const data = new Float32Array(analyser.fftSize);
  const tick = (now = performance.now()) => {
    vadTimer = 0;
    if (!running || !analyser) return;
    if (audioContext && audioContext.state === "suspended") ensureAudioContextRunning().catch(() => {});
    analyser.getFloatTimeDomainData(data);
    let sum = 0;
    for (let i = 0; i < data.length; i += 1) sum += data[i] * data[i];
    const levelSquared = sum / data.length;
    const needsReadout = Boolean(els.vad && now - lastVadReadoutAt >= VAD_READOUT_INTERVAL_MS);
    const rms = document.hidden && !needsReadout ? 0 : Math.sqrt(levelSquared);
    if (needsReadout) {
      const nextReadout = rms.toFixed(3);
      if (nextReadout !== lastVadReadoutValue) {
        els.vad.textContent = nextReadout;
        lastVadReadoutValue = nextReadout;
      }
      lastVadReadoutAt = now;
    }
    setVoiceLevelFromSquared(levelSquared, rms);
    updateVadSquared(levelSquared);
    scheduleVadTick(tick);
  };
  scheduleVadTick(tick, 0);
}

function stopVad() {
  if (vadTimer) cancelAnimationFrame(vadTimer);
  if (vadDelayTimer) window.clearTimeout(vadDelayTimer);
  vadTimer = 0;
  vadDelayTimer = 0;
  localSpeaking = false;
  lastVadReadoutAt = 0;
  lastVadReadoutValue = "";
}

function setVoiceLevelFromSquared(levelSquared, rms = null) {
  if (document.hidden) return;
  const level = rms == null ? Math.sqrt(Math.max(0, levelSquared || 0)) : rms;
  const target = Math.max(0, Math.min(1, (level || 0) * 13.5));
  PresenceController.setMouthOpen(!running || micMuted ? 0 : target);
}

function updateVadSquared(levelSquared) {
  if (micMuted) return;
  const now = Date.now();
  const thresholdSquared = agentSpeaking ? VAD.interruptRmsThresholdSquared : VAD.rmsThresholdSquared;
  if (levelSquared >= thresholdSquared) {
    if (!speechStartAt) speechStartAt = now;
    silenceStartAt = 0;
    if (!localSpeaking && now - speechStartAt >= VAD.startThresholdMs) {
      localSpeaking = true;
      send({ type: "user_started_speaking", timestamp: now });
      setState("user_speaking");
    }
    if (agentSpeaking && now - speechStartAt >= VAD.interruptThresholdMs && now - lastInterruptAt > 900) {
      lastInterruptAt = now;
      interrupt("user_speech_detected");
    }
  } else {
    speechStartAt = 0;
    if (localSpeaking) {
      if (!silenceStartAt) silenceStartAt = now;
      if (now - silenceStartAt >= VAD.silenceEndThresholdMs) {
        localSpeaking = false;
        silenceStartAt = 0;
        send({ type: "user_stopped_speaking", timestamp: now });
        if (!agentSpeaking) setState("user_speech_ending");
      }
    }
  }
}

function speechRecognitionCtor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function scheduleRecognitionRestart(delayMs = 500) {
  if (!running || micMuted || sttFatal || browserSttUnavailable) return;
  if (recognitionRestartTimer) clearTimeout(recognitionRestartTimer);
  recognitionRestartTimer = window.setTimeout(() => {
    recognitionRestartTimer = 0;
    startRecognition();
  }, delayMs);
}

function stopRecognitionRestart() {
  if (recognitionRestartTimer) clearTimeout(recognitionRestartTimer);
  recognitionRestartTimer = 0;
}

function explainSttError(error) {
  const code = error || "error";
  const messages = {
    "no-speech": "没听到清晰语音，我会继续听。",
    aborted: "语音识别被中断，我会重新开始。",
    "audio-capture": "浏览器拿不到麦克风音频，请检查麦克风权限。",
    "not-allowed": "麦克风或语音识别权限被拒绝，请在浏览器权限里允许麦克风。",
    "service-not-allowed": "这台手机的浏览器语音识别服务不可用，可先用手动输入或键盘语音。",
    network: "浏览器语音识别网络服务失败，可先用手动输入或键盘语音。",
    language: "当前浏览器不支持中文语音识别。"
  };
  return messages[code] || `语音识别异常：${code}`;
}

function startRecognition() {
  if (browserSttUnavailable) {
    requestServerStt("browser_stt_unavailable");
    return;
  }
  const Ctor = speechRecognitionCtor();
  if (!Ctor) {
    setState("stt_error");
    logLine("SpeechRecognition unavailable");
    requestServerStt("speech_recognition_unavailable");
    return;
  }
  if (!running || micMuted || sttFatal || recognitionActive || recognitionStarting) return;

  try {
    recognition = new Ctor();
  } catch (err) {
    browserSttUnavailable = true;
    recognition = null;
    recognitionActive = false;
    recognitionStarting = false;
    logLine(`SpeechRecognition constructor failed ${err && err.message ? err.message : ""}`.trim());
    flushLogRenderNow();
    setSttHint("浏览器语音识别启动失败，正在尝试 Iris 云端识别。");
    requestServerStt("speech_recognition_constructor_failed");
    return;
  }
  recognition.lang = "zh-CN";
  recognition.continuous = !isAndroid();
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.onstart = () => {
    recognitionActive = true;
    recognitionStarting = false;
    sttErrorCount = 0;
    setSttHint(isAndroid() ? "移动端短句识别中，说完会自动续听。" : "");
    logLine("STT started");
  };
  recognition.onerror = (event) => {
    const code = event.error || "error";
    recognitionStarting = false;
    sttErrorCount += 1;
    logLine(`STT ${code}`);
    setSttHint(explainSttError(code));

    if (["no-speech", "aborted"].includes(code)) {
      setState("listening");
      return;
    }

    if (["network", "service-not-allowed", "language"].includes(code)) {
      requestServerStt(code);
      return;
    }

    if (["not-allowed", "audio-capture"].includes(code)) {
      sttFatal = true;
      setState("stt_error");
      return;
    }

    setState("stt_error");
  };
  recognition.onend = () => {
    recognitionActive = false;
    recognitionStarting = false;
    if (running && !micMuted) {
      scheduleRecognitionRestart(isAndroid() ? 900 : 350);
    }
  };
  recognition.onresult = (event) => {
    let interim = "";
    let final = "";
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const text = event.results[i][0].transcript.trim();
      if (event.results[i].isFinal) final += text;
      else interim += text;
    }
    if (interim) {
      scheduleUserPartialRender(interim);
      send({ type: "partial_transcript", text: interim });
    }
    if (final) {
      cancelUserPartialRender();
      els.final.textContent = final;
      els.partial.textContent = "";
      stopPlayback("new_user_turn");
      serverSttEnabled = false;
      setDockText(final);
      setSubtitle(final, { speaker: "你" });
      if (!send({ type: "final_transcript", text: final })) {
        logLine("final transcript send skipped");
        setState("disconnected");
        setSttHint("语音连接刚才断开了。网络恢复后再点一次就好。");
        return;
      }
      setState("thinking");
    }
  };
  try {
    recognitionStarting = true;
    recognition.start();
  } catch {
    // Chrome throws if start is called while already starting.
    recognitionStarting = false;
    scheduleRecognitionRestart(650);
  }
}

function stopRecognition() {
  stopRecognitionRestart();
  if (recognition && recognitionActive) {
    try {
      recognition.stop();
    } catch {}
  }
  recognition = null;
  recognitionActive = false;
  recognitionStarting = false;
}

function handleServerEvent(event) {
  const type = event.type;
  if (type === "auth_ack") {
    currentConversationId = event.conversation_id || currentConversationId;
    logLine("voice auth ok");
    return;
  }
  if (type === "session_status") {
    currentTurnId = event.current_turn_id || currentTurnId;
    currentResponseId = event.current_response_id || currentResponseId;
    els.turn.textContent = currentTurnId ? currentTurnId.slice(0, 10) : "";
    setState(event.state || "connected");
    return;
  }
  if (type === "server_capabilities") {
    serverCapabilitiesReceived = true;
    currentConversationId = event.conversation_id || currentConversationId;
    serverPcmSttAvailable = Boolean(event.stt && event.stt.server_pcm_stt);
    serverSttMode = String((event.stt && event.stt.server_mode) || "");
    serverSttModel = String((event.stt && event.stt.server_model) || "");
    serverTtsAvailable = Boolean(event.tts && event.tts.server_http_tts);
    serverTtsProfiles = new Set(
      ((event.tts && event.tts.profile_statuses) || [])
        .filter((item) => item && item.available && item.id)
        .map((item) => item.id)
    );
    if (event.tts && Array.isArray(event.tts.profiles)) populateVoiceProfileOptions(event.tts.profiles);
    if (serverTtsAvailable) {
      ((event.tts && event.tts.profiles) || []).forEach((profile) => {
        if (profile && profile.id && (profile.provider || "edge_tts") === "edge_tts") {
          serverTtsProfiles.add(profile.id);
        }
      });
      clearServerTtsFailure();
    }
    else if (event.tts && event.tts.unavailable_reason) logLine(`server TTS ${event.tts.unavailable_reason}`);
    logLine("voice session ready");
    if (running && shouldPreferServerStt() && serverPcmSttAvailable) {
      enableServerStt("preferred_device");
    } else if (running && serverSttRequested && !serverPcmSttAvailable) {
      fallbackToBrowserStt("capability_unavailable");
    }
    return;
  }
  if (type === "stt_status") {
    if (event.mode) serverSttMode = String(event.mode);
    if (event.model) serverSttModel = String(event.model);
    if (event.state === "ready") {
      serverPcmSttAvailable = true;
    }
    if (event.state === "unavailable") {
      serverPcmSttAvailable = false;
      if (running && serverSttRequested) fallbackToBrowserStt("stt_status_unavailable");
      return;
    }
    if (event.state === "ready" && running && shouldPreferServerStt()) {
      enableServerStt("server_ready");
    }
    if (event.state === "transcribing") {
      setState("transcribing");
      const label = [serverSttMode, serverSttModel].filter(Boolean).join(" / ");
      setSttHint(`Iris 云端正在识别${label ? `（${label}）` : ""}。`);
    }
    return;
  }
  if (type === "partial_transcript") {
    scheduleUserPartialRender(event.text || "");
    return;
  }
  if (type === "final_transcript") {
    cancelUserPartialRender();
    els.final.textContent = event.text || "";
    setDockText(event.text || "识别完成");
    setSubtitle(event.text || "识别完成", { speaker: "你" });
    appendUserConversation(event.text || "");
    return;
  }
  if (type === "agent_speaking_started") {
    currentTurnId = event.turn_id || "";
    currentResponseId = event.response_id || "";
    els.turn.textContent = currentTurnId.slice(0, 10);
    activeAssistantMessageId = appendAssistantConversation("正在想...", {
      id: currentResponseId ? `assistant_${currentResponseId}` : "",
      kind: "agent_pending",
      allowEmpty: true
    });
    setState("agent_responding");
    return;
  }
  if (type === "agent_text_delta") {
    if (event.response_id && currentResponseId && event.response_id !== currentResponseId) return;
    lastReply = event.text || "";
    if (!activeAssistantMessageId) {
      activeAssistantMessageId = appendAssistantConversation(lastReply || " ", {
        id: event.response_id ? `assistant_${event.response_id}` : "",
        kind: "agent_reply",
        allowEmpty: true
      });
    } else {
      updateConversationMessage(activeAssistantMessageId, lastReply || " ");
    }
    scheduleAgentReplyRender(lastReply, event.response_id || currentResponseId);
    return;
  }
  if (type === "tts_request") {
    if (event.response_id && currentResponseId && event.response_id !== currentResponseId) return;
    flushAgentReplyRender();
    if (event.text && !updateConversationMessage(activeAssistantMessageId, event.text)) {
      activeAssistantMessageId = appendAssistantConversation(event.text, {
        id: event.response_id ? `assistant_${event.response_id}` : "",
        kind: "agent_reply"
      });
    }
    speak(event.text || "", event.turn_id || currentTurnId, event.response_id || currentResponseId);
    return;
  }
  if (type === "agent_speaking_stopped") {
    if (event.response_id && currentResponseId && event.response_id !== currentResponseId) return;
    agentSpeaking = false;
    PresenceController.setMouthOpen(0);
    if (currentRawState === "agent_speaking") setState(running ? "listening" : "idle", { preserveSubtitle: true });
    activeAssistantMessageId = "";
    return;
  }
  if (type === "interrupted") {
    cancelAgentReplyRender();
    stopPlayback("server_interrupted", { notifyInterrupt: false });
    setState("re_listening");
    logLine("interrupted");
    return;
  }
  if (type === "error") {
    const code = String(event.code || "");
    if (["server_stt_unavailable", "server_stt_error"].includes(code)) {
      fallbackToBrowserStt(code);
      setSubtitle(event.message || "云端识别暂不可用，已切回浏览器识别", { speaker: "IRIS" });
      return;
    }
    if (["empty_transcript", "stt_audio_too_short"].includes(code)) {
      setState("listening");
      setSttHint(event.message || "这句没有听清，我继续听。");
      setSubtitle(event.message || "这句没有听清，我继续听。", { speaker: "IRIS" });
      return;
    }
    setState("error");
    logLine(event.message || event.code || "error");
    setSubtitle(event.message || event.code || "云端错误", { speaker: "IRIS" });
    appendAssistantConversation(event.message || event.code || "云端错误", { kind: "error" });
  }
}

async function speak(text, turnId, responseId) {
  const spokenText = speechContent(text);
  if (!spokenText || speakerMuted) {
    send({ type: "playback_finished", turn_id: turnId, response_id: responseId });
    return;
  }
  stopPlayback("replace_tts", { notifyInterrupt: false });
  const requestId = ttsRequestSeq + 1;
  ttsRequestSeq = requestId;
  activeTtsRequestId = requestId;
  const played = await speakWithServerTts(spokenText, turnId, responseId, requestId);
  if (activeTtsRequestId !== requestId) return;
  if (played) return;
  activeTtsRequestId = 0;
  setState("tts_error");
  setSttHint("Edge TTS 暂时不可用，请稍后再试。");
  send({ type: "playback_finished", turn_id: turnId, response_id: responseId });
}

function renderWebTtsAudibility() {
  if (!els.webTtsAudibility) return;
  if (!currentWebTtsAudibilityText) {
    currentWebTtsAudibilityText = safeStorageGet(TTS_AUDIBILITY_KEY, "未确认");
    persistedWebTtsAudibilityText = currentWebTtsAudibilityText;
  }
  els.webTtsAudibility.textContent = currentWebTtsAudibilityText || "未确认";
}

function renderWebTtsRoute() {
  if (!els.webTtsRoute) return;
  if (!currentTtsRouteText) {
    currentTtsRouteText = safeStorageGet(TTS_ROUTE_KEY, "还没有播报记录。");
    persistedTtsRouteText = currentTtsRouteText;
  }
  els.webTtsRoute.textContent = currentTtsRouteText;
}

function clearWebTtsAudibilityPersistSchedule() {
  if (webTtsAudibilityPersistTimer) window.clearTimeout(webTtsAudibilityPersistTimer);
  if (webTtsAudibilityPersistIdleHandle && typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(webTtsAudibilityPersistIdleHandle);
  }
  webTtsAudibilityPersistTimer = 0;
  webTtsAudibilityPersistIdleHandle = 0;
}

function flushWebTtsAudibilityPersist() {
  clearWebTtsAudibilityPersistSchedule();
  if (!pendingWebTtsAudibilityText) return;
  const text = pendingWebTtsAudibilityText;
  pendingWebTtsAudibilityText = "";
  if (persistedWebTtsAudibilityText === null) persistedWebTtsAudibilityText = safeStorageGet(TTS_AUDIBILITY_KEY);
  if (text === persistedWebTtsAudibilityText) return;
  safeStorageSet(TTS_AUDIBILITY_KEY, text);
  persistedWebTtsAudibilityText = text;
}

function scheduleWebTtsAudibilityPersist(text) {
  pendingWebTtsAudibilityText = text || "";
  if (webTtsAudibilityPersistTimer || webTtsAudibilityPersistIdleHandle) return;
  if (typeof window.requestIdleCallback === "function") {
    webTtsAudibilityPersistIdleHandle = window.requestIdleCallback(flushWebTtsAudibilityPersist, { timeout: 900 });
    return;
  }
  webTtsAudibilityPersistTimer = window.setTimeout(flushWebTtsAudibilityPersist, TTS_AUDIBILITY_PERSIST_FALLBACK_MS);
}

function rememberWebTtsAudibility(value, { persist = true } = {}) {
  currentWebTtsAudibilityText = (value || "").trim() || "未确认";
  renderWebTtsAudibility();
  if (persist) scheduleWebTtsAudibilityPersist(currentWebTtsAudibilityText);
}

function recordWebTtsAudibility(heard) {
  const value = heard
    ? "已确认听到：Web 最近一次测试播报可被人耳听见。"
    : "未听到：请检查媒体音量、静音开关、蓝牙输出、浏览器自动播放权限和 Edge TTS 音频播放链路。";
  rememberWebTtsAudibility(value);
  setSubtitle(value, { speaker: "IRIS", resetFlow: true });
  logLine(`web TTS audibility ${heard ? "heard" : "not_heard"}`);
  reportWebTtsAudibility(heard, value).catch((err) => logLine(`web audibility report failed ${err.message || ""}`.trim()));
}

async function reportWebTtsAudibility(heard, note) {
  if (!window.fetch) return false;
  const response = await fetch(backendUrl("/voice/audibility"), {
    method: "POST",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders()
    },
    body: JSON.stringify({
      client_id: voiceClientId(),
      heard,
      voice_profile: lastTtsRoute.voiceProfile || selectedVoiceProfile(),
      tts_provider: lastTtsRoute.provider || "web_client",
      route_summary: [lastTtsRoute.summary, currentWebTtsAudibilityText || ""].filter(Boolean).join("\n"),
      note: note || ""
    })
  });
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    throw new Error(`HTTP ${response.status}`);
  }
  const payload = await response.json().catch(() => ({}));
  logLine(`web audibility reported · ${payload.event_id || "ok"}`);
  return true;
}

function cancelWebTtsAudibilitySync() {
  webTtsAudibilitySyncSeq += 1;
  if (!activeWebTtsAudibilitySyncAbortController) return;
  activeWebTtsAudibilitySyncAbortController.abort();
  activeWebTtsAudibilitySyncAbortController = null;
}

function summarizeWebTtsAudibilityEvent(event) {
  if (!event) return "";
  const heard = event.heard ? "已确认听到" : "未听到";
  const created = event.created_at || "时间未知";
  const detail = event.note || event.route_summary || "";
  return [`${heard}：服务器最近一次 Web 测试播报记录（${created}）。`, detail].filter(Boolean).join("\n");
}

async function syncWebTtsAudibility() {
  if (!window.fetch) return false;
  cancelWebTtsAudibilitySync();
  const requestId = webTtsAudibilitySyncSeq + 1;
  webTtsAudibilitySyncSeq = requestId;
  const abortController = typeof AbortController !== "undefined" ? new AbortController() : null;
  activeWebTtsAudibilitySyncAbortController = abortController;
  const isCurrentSync = () => webTtsAudibilitySyncSeq === requestId && (!abortController || !abortController.signal.aborted);
  const pending = "正在同步服务器最近一次 Web 听感记录。";
  rememberWebTtsAudibility(pending);
  try {
    const response = await fetch(backendUrl("/voice/audibility/latest?limit=1"), {
      method: "GET",
      headers: {
        ...authHeaders()
      },
      cache: "no-store",
      ...(abortController ? { signal: abortController.signal } : {})
    });
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(`HTTP ${response.status}`);
    }
    const payload = await response.json().catch(() => ({}));
    if (!isCurrentSync()) {
      logLine("stale web audibility sync skipped");
      return false;
    }
    const event = Array.isArray(payload.events) ? payload.events[0] : null;
    const value = summarizeWebTtsAudibilityEvent(event) || "服务器还没有 Web 听感记录。";
    rememberWebTtsAudibility(value);
    setSubtitle(value, { speaker: "IRIS", resetFlow: true });
    logLine(`web audibility synced · ${event && event.event_id ? event.event_id : "empty"}`);
    return true;
  } catch (err) {
    if (abortController && abortController.signal.aborted) {
      logLine("web audibility sync aborted");
      return false;
    }
    throw err;
  } finally {
    if (activeWebTtsAudibilitySyncAbortController === abortController) {
      activeWebTtsAudibilitySyncAbortController = null;
    }
  }
}

async function startWebTtsAudibilityTest() {
  const value = "等待确认：请听浏览器是否播出了刚才这句测试语音。";
  rememberWebTtsAudibility(value);
  setSubtitle("Iris Web 发声测试。现在使用你选择的 Edge TTS 音色。", {
    speaker: "IRIS",
    resetFlow: true
  });
  speakerMuted = false;
  if (els.speaker) els.speaker.textContent = "静音扬声器";
  await unlockTts().catch(() => {});
  const testId = `web-tts-audibility-${Date.now()}`;
  await speak(
    "Iris Web 发声测试。现在使用你选择的 Edge TTS 音色。",
    testId,
    testId
  );
}

function shouldTryServerTts() {
  const profile = selectedVoiceProfile();
  if (!profile || !supportedVoiceProfiles.has(profile)) return false;
  if (serverTtsFailureCount(profile) >= 2) return false;
  if (serverTtsProfiles.size) return serverTtsProfiles.has(profile);
  return serverTtsAvailable || supportedVoiceProfiles.has(profile);
}

async function speakWithServerTts(text, turnId, responseId, requestId) {
  if (!shouldTryServerTts() || !window.fetch || typeof Audio === "undefined") return false;
  const profile = selectedVoiceProfile();
  const abortController = typeof AbortController !== "undefined" ? new AbortController() : null;
  activeTtsAbortController = abortController;
  const isCurrentRequest = () => activeTtsRequestId === requestId && (!abortController || !abortController.signal.aborted);
  const clearAbortController = () => {
    if (activeTtsAbortController === abortController) activeTtsAbortController = null;
  };
  rememberTtsRoute({
    provider: "server_pending",
    voiceProfile: profile,
    source: "server_http_tts",
    summary: `正在请求服务器 TTS：profile=${profile}`
  });
  try {
    const response = await fetch(backendUrl("/voice/tts"), {
      method: "POST",
      signal: abortController ? abortController.signal : undefined,
      headers: {
        "Content-Type": "application/json",
        ...authHeaders()
      },
      body: JSON.stringify({
        text,
        voice_profile: profile,
        emotion: document.body.dataset.voiceState === "agent_speaking" ? "warm" : "neutral"
      })
    });
    if (!isCurrentRequest()) return true;
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      rememberServerTtsFailure(profile);
      clearAbortController();
      rememberTtsRoute({
        provider: "server_http_tts_failed",
        voiceProfile: profile,
        source: "server_http_tts",
        summary: `服务器 TTS 请求失败：HTTP ${response.status}`
      });
      logLine(`server TTS ${response.status}`);
      return false;
    }
    const provider = response.headers.get("X-Jarvis-TTS-Provider") || "server";
    const serverProfile = response.headers.get("X-Jarvis-Voice-Profile") || profile;
    const cached = response.headers.get("X-Jarvis-TTS-Cached") || "0";
    const blob = await response.blob();
    if (!isCurrentRequest()) return true;
    if (!blob.size) {
      rememberServerTtsFailure(profile);
      clearAbortController();
      rememberTtsRoute({
        provider: "server_http_tts_failed",
        voiceProfile: serverProfile,
        source: "server_http_tts",
        summary: "服务器 TTS 返回空音频。"
      });
      logLine("server TTS empty audio");
      return false;
    }
    const audio = getServerAudioElement();
    releaseServerAudioSource(audio, currentAudioUrl);
    const audioUrl = URL.createObjectURL(blob);
    currentAudioUrl = audioUrl;
    audio.src = audioUrl;
    audio.volume = outputVolume;
    audio.muted = false;
    audio.load();
    currentAudio = audio;
    let playbackStarted = false;
    const markStarted = () => {
      if (!isCurrentRequest()) return;
      if (playbackStarted) return;
      playbackStarted = true;
      serverAudioUnlocked = true;
      agentSpeaking = true;
      PresenceController.setMouthOpen(0.6);
      setState("agent_speaking");
      rememberTtsRoute({
        provider,
        voiceProfile: serverProfile,
        source: "server_http_tts",
        summary: `服务器 TTS 已播放：provider=${provider}，profile=${serverProfile}，${blob.size} bytes，cached=${cached}`
      });
      logLine(`server TTS started · provider=${provider} profile=${serverProfile} bytes=${blob.size} cached=${cached}`);
      send({ type: "playback_started", turn_id: turnId, response_id: responseId });
    };
    const finish = () => {
      if (activeTtsRequestId !== requestId) return;
      if (currentAudio === audio) currentAudio = null;
      releaseServerAudioSource(audio, audioUrl);
      activeTtsRequestId = 0;
      if (activeTtsAbortController === abortController) activeTtsAbortController = null;
      agentSpeaking = false;
      PresenceController.setMouthOpen(0);
      rememberTtsRoute({
        provider,
        voiceProfile: serverProfile,
        source: "server_http_tts",
        summary: `服务器 TTS 播放完成：provider=${provider}，profile=${serverProfile}，${blob.size} bytes，cached=${cached}`
      });
      logLine("server TTS ended");
      send({ type: "playback_finished", turn_id: turnId, response_id: responseId });
      if (currentRawState === "agent_speaking") setState(running ? "listening" : "idle", { preserveSubtitle: true });
    };
    audio.onplay = markStarted;
    audio.onended = finish;
    audio.onerror = () => {
      if (activeTtsRequestId !== requestId) return;
      if (!playbackStarted) rememberServerTtsFailure(serverProfile || profile);
      if (playbackStarted) {
        finish();
        return;
      }
      rememberTtsRoute({
        provider: "server_http_tts_failed",
        voiceProfile: serverProfile,
        source: "server_http_tts",
        summary: "Edge TTS 音频播放失败。"
      });
      if (currentAudio === audio) currentAudio = null;
      releaseServerAudioSource(audio, audioUrl);
      activeTtsRequestId = 0;
      if (activeTtsAbortController === abortController) activeTtsAbortController = null;
      setState("tts_error");
      setSttHint("Edge TTS 音频播放失败，请稍后再试。");
      send({ type: "playback_finished", turn_id: turnId, response_id: responseId });
    };
    try {
      await audio.play();
    } catch (err) {
      if (currentAudio === audio) currentAudio = null;
      releaseServerAudioSource(audio, audioUrl);
      throw err;
    }
    if (!isCurrentRequest()) {
      if (currentAudio === audio) currentAudio = null;
      releaseServerAudioSource(audio, audioUrl);
      return true;
    }
    markStarted();
    clearServerTtsFailure(serverProfile || profile);
    return true;
  } catch (err) {
    if (err && err.name === "AbortError") {
      logLine("server TTS aborted");
      clearAbortController();
      return false;
    }
    rememberServerTtsFailure(profile);
    clearAbortController();
    rememberTtsRoute({
      provider: "server_http_tts_failed",
      voiceProfile: profile,
      source: "server_http_tts",
      summary: `服务器 TTS 异常：${err.message || "unknown"}`
    });
    logLine(`server TTS failed ${err.message || ""}`.trim());
    return false;
  }
}

function stopPlayback(reason, options = {}) {
  const notifyInterrupt = options.notifyInterrupt !== false;
  activeTtsRequestId = 0;
  if (activeTtsAbortController) {
    activeTtsAbortController.abort();
    activeTtsAbortController = null;
  }
  if (currentAudio) {
    releaseServerAudioSource(currentAudio, currentAudioUrl);
    currentAudio = null;
  } else if (currentAudioUrl) {
    releaseServerAudioSource(serverAudioElement, currentAudioUrl);
  }
  if (agentSpeaking && notifyInterrupt) {
    send({ type: "interrupt", turn_id: currentTurnId, response_id: currentResponseId, reason: reason || "client_stop", timestamp: Date.now() });
  }
  agentSpeaking = false;
  PresenceController.setMouthOpen(0);
}

function interrupt(reason) {
  stopPlayback(reason, { notifyInterrupt: false });
  send({ type: "interrupt", turn_id: currentTurnId, response_id: currentResponseId, reason, timestamp: Date.now() });
  setState("interruption_detected");
}

async function handleMainButton() {
  if (agentSpeaking || currentVisualState === "ai_speaking") {
    setSubtitle("正在回答。需要打断的话，点右侧按钮。", { speaker: "IRIS" });
    return;
  }
  if (!running) {
    await start();
    return;
  }
  if (["offline", "error", "permission_required"].includes(currentVisualState)) {
    if (ws) ws.close();
    running = false;
    await start();
    return;
  }
  if (currentVisualState === "interrupted") {
    setState("listening");
    return;
  }
  setSubtitle(currentVisualState === "thinking" ? "我正在处理，稍等一下。" : "我在听。", { speaker: "IRIS" });
}

async function handleDockVoiceCommand() {
  if (hasActiveVoicePlayback()) {
    handleStopCommand("dock_voice_interrupt");
    return;
  }
  if (running) {
    handleStopCommand("dock_voice_stop");
    return;
  }
  await handleMainButton();
}

function hasActiveVoicePlayback() {
  return Boolean(
    agentSpeaking
    || currentVisualState === "ai_speaking"
    || currentAudio
    || activeTtsRequestId
    || activeTtsAbortController
  );
}

function handleStopCommand(reason) {
  if (hasActiveVoicePlayback()) {
    interrupt(reason);
    return;
  }
  if (running) {
    stop().catch((err) => logLine(err.message || "stop failed"));
    return;
  }
  setState("idle");
  setSubtitle("我在。", { speaker: "IRIS" });
}

async function handleReconnectCommand() {
  closeVoiceSocket("manual_reconnect");
  const connected = await connect();
  if (!connected && currentRawState !== "auth_error") {
    setState("disconnected");
    setSttHint("语音连接还没建立成功。网络恢复后再点一次就好。");
  }
}

async function handleAccessSubmit(event) {
  if (event) event.preventDefault();
  const accessKey = els.accessToken && els.accessToken.value ? els.accessToken.value.trim() : "";
  if (!accessKey) {
    showAccessGate("请输入访问密钥。");
    return;
  }
  if (els.accessSubmit) els.accessSubmit.disabled = true;
  try {
    setAccessStatus("正在验证访问密钥。");
    const session = await requestAccessSession(accessKey);
    if (els.accessToken) els.accessToken.value = "";
    completeSessionLogin(session.session_token, session.expires_at);
    loadModelSettings().catch((err) => logLine(err.message || "model settings failed"));
  } catch (err) {
    showAccessGate(`连接失败：${err.message || "请检查访问密钥"}`);
  } finally {
    if (els.accessSubmit) els.accessSubmit.disabled = false;
  }
}

function registerVoiceServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker
    .register(String(IRIS_PUBLIC_CONFIG.serviceWorkerUrl || `/voice/service-worker.js?v=${VOICE_UI_VERSION}`), {
      scope: String(IRIS_PUBLIC_CONFIG.serviceWorkerScope || "/voice"),
      updateViaCache: "none"
    })
    .then((registration) => {
      scheduleIdleWork(() => registration.update().catch(() => {}), { timeout: 2200 });
      if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
    })
    .catch(() => {});
}

els.main.addEventListener("click", () => handleMainButton().catch((err) => logLine(err.message || "main action failed")));
if (els.dockMic) {
  els.dockMic.addEventListener("click", () => handleDockVoiceCommand().catch((err) => logLine(err.message || "dock voice failed")));
}
if (els.quickToggle) {
  els.quickToggle.addEventListener("click", () => {
    document.body.classList.toggle("quickOpen");
  });
}
if (els.detailsToggle) els.detailsToggle.addEventListener("click", openDetails);
if (els.closeDetails) els.closeDetails.addEventListener("click", closeDetails);
if (els.accessForm) {
  els.accessForm.addEventListener("submit", (event) => {
    handleAccessSubmit(event).catch((err) => showAccessGate(`连接失败：${err.message || "unknown"}`));
  });
}
if (els.memoryRefresh) {
  els.memoryRefresh.addEventListener("click", () => {
    refreshMemoryControlCenter().catch((err) => logLine(err.message || "memory refresh failed"));
  });
}
if (els.memorySearch) {
  els.memorySearch.addEventListener("input", scheduleMemorySearchRefresh);
  els.memorySearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (memorySearchTimer) window.clearTimeout(memorySearchTimer);
      memorySearchTimer = 0;
      refreshMemoryControlCenter().catch((err) => logLine(err.message || "memory search failed"));
    }
  });
}
if (els.memorySearchClear) {
  els.memorySearchClear.addEventListener("click", () => {
    if (els.memorySearch) els.memorySearch.value = "";
    if (memorySearchTimer) window.clearTimeout(memorySearchTimer);
    memorySearchTimer = 0;
    refreshMemoryControlCenter().catch((err) => logLine(err.message || "memory search clear failed"));
  });
}
if (els.detailSheet) {
  els.detailSheet.addEventListener("click", (event) => {
    if (event.target === els.detailSheet) closeDetails();
  });
}
document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => handleTextPromptCommand(button.getAttribute("data-prompt") || "", { closeQuick: true }));
});
els.reconnect.addEventListener("click", () => {
  handleReconnectCommand().catch((err) => {
    logLine(err.message || "reconnect failed");
    setState("disconnected");
    setSttHint("语音连接还没建立成功。网络恢复后再点一次就好。");
  });
});
els.stop.addEventListener("click", () => handleStopCommand("manual_stop"));
els.mic.addEventListener("click", () => {
  micMuted = !micMuted;
  document.body.classList.toggle("micMuted", micMuted);
  els.mic.textContent = micMuted ? "取消静音" : "麦克风";
  updateDockControls(currentVisualState);
  if (micMuted) stopRecognition();
  else if (running && shouldPreferServerStt()) requestServerStt("mic_unmuted");
  else if (running && !serverSttEnabled) startRecognition();
  send({ type: "mute", mic_muted: micMuted });
});
els.speaker.addEventListener("click", () => {
  speakerMuted = !speakerMuted;
  els.speaker.textContent = speakerMuted ? "打开扬声器" : "静音扬声器";
  if (speakerMuted) stopPlayback("speaker_muted");
  else unlockTts().catch(() => {});
});
if (els.webTtsTest) {
  els.webTtsTest.addEventListener("click", () => {
    startWebTtsAudibilityTest().catch((err) => logLine(err.message || "web TTS audibility test failed"));
  });
}
if (els.webTtsHeard) {
  els.webTtsHeard.addEventListener("click", () => recordWebTtsAudibility(true));
}
if (els.webTtsNotHeard) {
  els.webTtsNotHeard.addEventListener("click", () => recordWebTtsAudibility(false));
}
if (els.webTtsSync) {
  els.webTtsSync.addEventListener("click", () => {
    syncWebTtsAudibility().catch((err) => {
      const message = `听感同步失败：${err.message || "请检查 Tailnet 或 Token"}`;
      rememberWebTtsAudibility(message);
      logLine(message);
    });
  });
}
if (els.documentUpload) {
  els.documentUpload.addEventListener("click", () => {
    if (els.documentPdf) els.documentPdf.click();
  });
}
if (els.documentPdf) {
  els.documentPdf.addEventListener("change", () => {
    uploadCurrentDocument().catch((err) => {
      setDocumentStatus(`PDF 上传失败：${err.message || "unknown"}`);
      logLine(err.message || "document upload failed");
    });
  });
}
if (els.documentSummarize) {
  els.documentSummarize.addEventListener("click", () => {
    summarizeCurrentDocument().catch((err) => {
      setDocumentAnswer(`摘要失败：${err.message || "unknown"}`);
      logLine(err.message || "document summarize failed");
    });
  });
}
if (els.documentAsk) {
  els.documentAsk.addEventListener("click", () => {
    askCurrentDocument().catch((err) => {
      setDocumentAnswer(`追问失败：${err.message || "unknown"}`);
      logLine(err.message || "document ask failed");
    });
  });
}
if (els.documentQuestion) {
  els.documentQuestion.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      askCurrentDocument().catch((err) => {
        setDocumentAnswer(`追问失败：${err.message || "unknown"}`);
        logLine(err.message || "document ask failed");
      });
    }
  });
}
els.manualSend.addEventListener("click", () => {
  handleComposerSubmit();
});
if (els.manual) {
  els.manual.addEventListener("input", resizeComposerInput);
  els.manual.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleComposerSubmit();
    }
  });
}
applyBrowserTargeting();
loadToken();
initVoiceClientId();
maybePromptForAccess();
initThemeSettings();
initModelSettings();
initVoiceProfileSettings();
initVolumeSettings();
renderWebTtsAudibility();
renderWebTtsRoute();
syncViewportMetrics({ refreshSubtitle: false });
if (canUseBackendNow()) {
  loadConversationHistory().catch((err) => logLine(err.message || "conversation history failed"));
}
window.addEventListener("resize", () => scheduleViewportMetrics(), { passive: true });
window.addEventListener("orientationchange", () => scheduleOrientationViewportMetrics(), { passive: true });
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", () => scheduleViewportMetrics(), { passive: true });
  window.visualViewport.addEventListener("scroll", () => scheduleViewportMetrics(), { passive: true });
}
if (els.dialogueScroll) {
  ["touchstart", "pointerdown", "wheel"].forEach((eventName) => {
    els.dialogueScroll.addEventListener(eventName, () => pauseSubtitleAutoFlow(), { passive: true });
  });
}
if (els.conversationStream) {
  els.conversationStream.addEventListener("scroll", () => updateConversationPinnedState({ userIntent: true }), { passive: true });
  ["touchstart", "pointerdown", "wheel"].forEach((eventName) => {
    els.conversationStream.addEventListener(eventName, () => updateConversationPinnedState({ userIntent: true }), { passive: true });
  });
}
els.speaker.textContent = "静音扬声器";
setState("idle");
setSubtitle("我在。你可以直接说。", { speaker: "IRIS" });
logLine(WEB_VERSION);
logLine(`browser target ${BROWSER_TARGET}`);
serviceWorkerRegistrationIdleHandle = scheduleIdleWork(() => {
  serviceWorkerRegistrationIdleHandle = null;
  registerVoiceServiceWorker();
}, { timeout: 1600 });

document.addEventListener("visibilitychange", () => {
  document.body.classList.toggle("pageHidden", document.visibilityState !== "visible");
  if (document.visibilityState === "visible") pagehideCleanupStarted = false;
  if (document.visibilityState === "visible" && running) {
    ensureAudioContextRunning().catch(() => {});
  }
});

window.addEventListener("pageshow", () => {
  pagehideCleanupStarted = false;
}, { passive: true });

window.addEventListener("pagehide", () => {
  pagehideCleanupStarted = true;
  shutdownVoiceSessionForPageHide();
  cancelServerAudioUnlock();
  cancelWebTtsAudibilitySync();
  clearViewportMetricsSchedule();
  clearOrientationViewportMetricsSchedule();
  cancelSubtitleMeasure();
  cancelSubtitleFlow();
  clearConversationScrollSchedule();
  clearComposerResizeSchedule();
  clearMemorySearchSchedule();
  cancelIdleWork(serviceWorkerRegistrationIdleHandle);
  serviceWorkerRegistrationIdleHandle = null;
  flushWebTtsAudibilityPersist();
  flushTtsRoutePersist();
  releaseSilentUnlockAudioUrl();
  flushLogRenderNow();
}, { passive: true });
