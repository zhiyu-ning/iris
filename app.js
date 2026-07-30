const els = {
  home: document.querySelector(".home"),
  dock: document.querySelector(".dock"),
  conversationStream: document.getElementById("conversationStream"),
  conversationSearchNavigator: document.getElementById("conversationSearchNavigator"),
  conversationSearchNavigatorQuery: document.getElementById("conversationSearchNavigatorQuery"),
  conversationSearchNavigatorPosition: document.getElementById("conversationSearchNavigatorPosition"),
  conversationSearchPrevious: document.getElementById("conversationSearchPreviousButton"),
  conversationSearchNext: document.getElementById("conversationSearchNextButton"),
  conversationSearchClose: document.getElementById("conversationSearchCloseButton"),
  subtitleSpeaker: document.getElementById("subtitleSpeaker"),
  subtitle: document.getElementById("subtitleText"),
  caption: document.querySelector(".captionFloat"),
  dialogueScroll: document.getElementById("dialogueScroll"),
  detailsToggle: document.getElementById("detailsToggle"),
  conversationShare: document.getElementById("conversationShareButton"),
  voiceCall: document.getElementById("voiceCallButton"),
  capabilityToggle: document.getElementById("capabilityToggle"),
  capabilityPanel: document.getElementById("capabilityPanel"),
  capabilityCustom: document.getElementById("capabilityCustomButton"),
  thinkingCapability: document.getElementById("thinkingCapabilityButton"),
  thinkingCapabilityLabel: document.getElementById("thinkingCapabilityLabel"),
  thinkingModePicker: document.getElementById("thinkingModePicker"),
  thinkingModePickerTitle: document.getElementById("thinkingModePickerTitle"),
  thinkingModePickerHint: document.getElementById("thinkingModePickerHint"),
  thinkingModeStatus: document.getElementById("thinkingModeStatus"),
  detailSheet: document.getElementById("detailSheet"),
  closeDetails: document.getElementById("closeDetails"),
  state: document.getElementById("stateLabel"),
  statusIndicator: document.getElementById("statusIndicator"),
  main: document.getElementById("mainButton"),
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
  languagePicker: document.getElementById("languagePicker"),
  languageStatus: document.getElementById("languageStatus"),
  modelSelect: document.getElementById("modelSelect"),
  modelStatus: document.getElementById("modelStatus"),
  conversationStatus: document.getElementById("conversationStatus"),
  conversationCurrentTitle: document.getElementById("conversationCurrentTitle"),
  conversationMemoryHint: document.getElementById("conversationMemoryHint"),
  conversationModeBadge: document.getElementById("conversationModeBadge"),
  emptyMemoryChip: document.getElementById("emptyMemoryChip"),
  conversationNew: document.getElementById("conversationNewButton"),
  conversationTemporary: document.getElementById("conversationTemporaryButton"),
  conversationSearch: document.getElementById("conversationSearchInput"),
  conversationIncludeArchived: document.getElementById("conversationIncludeArchived"),
  conversationFeedback: document.getElementById("conversationFeedback"),
  conversationList: document.getElementById("conversationList"),
  projectSelect: document.getElementById("projectSpaceSelect"),
  projectNew: document.getElementById("projectNewButton"),
  projectEditor: document.getElementById("projectEditor"),
  projectName: document.getElementById("projectNameInput"),
  projectInstructions: document.getElementById("projectInstructionsInput"),
  projectGoal: document.getElementById("projectGoalInput"),
  projectFollowup: document.getElementById("projectFollowupEnabled"),
  projectTaskInput: document.getElementById("projectTaskInput"),
  projectTaskDue: document.getElementById("projectTaskDueInput"),
  projectTaskAdd: document.getElementById("projectTaskAddButton"),
  projectTaskList: document.getElementById("projectTaskList"),
  projectTaskStatus: document.getElementById("projectTaskStatus"),
  projectMeta: document.getElementById("projectMeta"),
  projectFilesStatus: document.getElementById("projectFilesStatus"),
  projectFileList: document.getElementById("projectFileList"),
  projectSave: document.getElementById("projectSaveButton"),
  projectArchive: document.getElementById("projectArchiveButton"),
  memoryRefresh: document.getElementById("memoryRefreshButton"),
  memorySearch: document.getElementById("memorySearchInput"),
  memorySearchClear: document.getElementById("memorySearchClearButton"),
  memoryOverview: document.getElementById("memoryOverview"),
  memoryStatus: document.getElementById("memoryStatus"),
  memoryList: document.getElementById("memoryList"),
  proactiveStatus: document.getElementById("proactiveStatus"),
  proactiveOverview: document.getElementById("proactiveOverview"),
  proactiveOverviewTitle: document.getElementById("proactiveOverviewTitle"),
  proactiveOverviewHint: document.getElementById("proactiveOverviewHint"),
  proactiveEnabled: document.getElementById("proactiveEnabled"),
  proactivePush: document.getElementById("proactivePush"),
  proactivePushTitle: document.getElementById("proactivePushTitle"),
  proactivePushHint: document.getElementById("proactivePushHint"),
  proactivePushBadge: document.getElementById("proactivePushBadge"),
  proactivePushAction: document.getElementById("proactivePushAction"),
  proactivePushTest: document.getElementById("proactivePushTest"),
  proactivePushPreviewRow: document.getElementById("proactivePushPreviewRow"),
  proactivePushPreview: document.getElementById("proactivePushPreview"),
  proactiveDailyLimit: document.getElementById("proactiveDailyLimit"),
  proactiveInterval: document.getElementById("proactiveInterval"),
  proactiveAdaptive: document.getElementById("proactiveAdaptive"),
  proactiveRhythm: document.getElementById("proactiveRhythm"),
  proactiveRhythmTitle: document.getElementById("proactiveRhythmTitle"),
  proactiveRhythmHint: document.getElementById("proactiveRhythmHint"),
  proactiveRhythmSent: document.getElementById("proactiveRhythmSent"),
  proactiveRhythmReplied: document.getElementById("proactiveRhythmReplied"),
  proactiveRhythmDismissed: document.getElementById("proactiveRhythmDismissed"),
  proactiveQuietStart: document.getElementById("proactiveQuietStart"),
  proactiveQuietEnd: document.getElementById("proactiveQuietEnd"),
  proactiveEmotion: document.getElementById("proactiveEmotion"),
  proactiveGoal: document.getElementById("proactiveGoal"),
  proactiveCalendar: document.getElementById("proactiveCalendar"),
  proactiveFeedback: document.getElementById("proactiveControlFeedback"),
  proactiveRefresh: document.getElementById("proactiveRefreshButton"),
  proactiveInbox: document.getElementById("proactiveInbox"),
  reviewRefresh: document.getElementById("reviewWorkbenchRefreshButton"),
  reviewTabs: document.getElementById("reviewWorkbenchTabs"),
  reviewOverview: document.getElementById("reviewWorkbenchOverview"),
  reviewStatus: document.getElementById("reviewWorkbenchStatus"),
  reviewList: document.getElementById("reviewWorkbenchList"),
  modelCard: document.getElementById("modelControlCard"),
  modelCardTitle: document.getElementById("modelControlTitle"),
  modelCardMeta: document.getElementById("modelControlMeta"),
  accessGate: document.getElementById("accessGate"),
  accessForm: document.getElementById("accessForm"),
  accessToken: document.getElementById("accessTokenInput"),
  accessReveal: document.getElementById("accessRevealButton"),
  accessSubmit: document.getElementById("accessSubmitButton"),
  accessStatus: document.getElementById("accessStatus"),
  accessTheme: document.getElementById("accessThemeToggle"),
  accessLanguage: document.getElementById("accessLanguageToggle"),
  accessBack: document.getElementById("accessBackButton"),
  voiceProfile: document.getElementById("voiceProfileSelect"),
  voiceControlCard: document.getElementById("voiceControlCard"),
  voiceControlTitle: document.getElementById("voiceControlTitle"),
  voiceControlMeta: document.getElementById("voiceControlMeta"),
  documentPdf: document.getElementById("documentPdfInput"),
  documentUpload: document.getElementById("documentUploadButton"),
  documentUploadStatus: document.getElementById("documentUploadStatus"),
  documentJobCancel: document.getElementById("documentJobCancelButton"),
  documentJobRetry: document.getElementById("documentJobRetryButton"),
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
  diagnosticsStatus: document.getElementById("diagnosticsActionStatus"),
  diagnosticsCopy: document.getElementById("copyDiagnosticsButton"),
  diagnosticsClear: document.getElementById("clearDiagnosticsButton"),
  manual: document.getElementById("manualInput"),
  manualSend: document.getElementById("manualSend"),
  canvasWorkspace: document.getElementById("canvasWorkspace"),
  canvasHeaderTitle: document.getElementById("canvasHeaderTitle"),
  canvasSaveStatus: document.getElementById("canvasSaveStatus"),
  canvasLibraryToggle: document.getElementById("canvasLibraryToggle"),
  canvasClose: document.getElementById("canvasCloseButton"),
  canvasLibrary: document.getElementById("canvasLibrary"),
  canvasNew: document.getElementById("canvasNewButton"),
  canvasLibraryList: document.getElementById("canvasLibraryList"),
  canvasEmptyState: document.getElementById("canvasEmptyState"),
  canvasEmptyCreate: document.getElementById("canvasEmptyCreateButton"),
  canvasEditorShell: document.getElementById("canvasEditorShell"),
  canvasTitle: document.getElementById("canvasTitleInput"),
  canvasRevisionBadge: document.getElementById("canvasRevisionBadge"),
  canvasKind: document.getElementById("canvasKindSelect"),
  canvasLanguage: document.getElementById("canvasLanguageInput"),
  canvasAssistOpen: document.getElementById("canvasAssistOpenButton"),
  canvasRun: document.getElementById("canvasRunButton"),
  canvasPreviewToggle: document.getElementById("canvasPreviewToggle"),
  canvasVersions: document.getElementById("canvasVersionsButton"),
  canvasExport: document.getElementById("canvasExportButton"),
  canvasEditor: document.getElementById("canvasEditor"),
  canvasPreview: document.getElementById("canvasPreview"),
  canvasRunPanel: document.getElementById("canvasRunPanel"),
  canvasRunStatus: document.getElementById("canvasRunStatus"),
  canvasRunMeta: document.getElementById("canvasRunMeta"),
  canvasRunOutput: document.getElementById("canvasRunOutput"),
  canvasRunArtifacts: document.getElementById("canvasRunArtifacts"),
  canvasRunClose: document.getElementById("canvasRunCloseButton"),
  canvasWordCount: document.getElementById("canvasWordCount"),
  canvasUpdatedAt: document.getElementById("canvasUpdatedAt"),
  canvasDelete: document.getElementById("canvasDeleteButton"),
  canvasAssistPanel: document.getElementById("canvasAssistPanel"),
  canvasAssistClose: document.getElementById("canvasAssistCloseButton"),
  canvasSelectionStatus: document.getElementById("canvasSelectionStatus"),
  canvasAssistInput: document.getElementById("canvasAssistInput"),
  canvasAssistSubmit: document.getElementById("canvasAssistSubmitButton"),
  canvasSuggestionCard: document.getElementById("canvasSuggestionCard"),
  canvasSuggestionText: document.getElementById("canvasSuggestionText"),
  canvasSuggestionDiscard: document.getElementById("canvasSuggestionDiscardButton"),
  canvasSuggestionApply: document.getElementById("canvasSuggestionApplyButton"),
  canvasVersionDrawer: document.getElementById("canvasVersionDrawer"),
  canvasVersionClose: document.getElementById("canvasVersionCloseButton"),
  canvasVersionList: document.getElementById("canvasVersionList"),
  canvasDeletePanel: document.getElementById("canvasDeletePanel"),
  canvasDeleteScope: document.getElementById("canvasDeleteScope"),
  canvasDeleteCancel: document.getElementById("canvasDeleteCancelButton"),
  canvasDeleteConfirm: document.getElementById("canvasDeleteConfirmButton")
};

const VOICE_UI_VERSION = "389";
const SUPPORTED_DOCUMENT_EXTENSIONS = new Set([
  "pdf", "txt", "log", "md", "markdown", "csv", "tsv", "json", "html", "htm", "xml", "rtf",
  "doc", "xls", "ppt", "docx", "docm", "xlsx", "xlsm", "pptx", "pptm", "odt", "ods", "odp", "eml",
  "png", "jpg", "jpeg", "webp", "tif", "tiff", "heic", "heif"
]);
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
const VOICE_PROFILE_LABELS = {
  jarvis_taiwan_sweet_female: { zh: "台湾甜妹", en: "Taiwan Sweet" },
  jarvis_taiwan_bright_female: { zh: "台湾元气", en: "Taiwan Bright" },
  jarvis_mainland_soft_female: { zh: "温柔普通话", en: "Soft Mandarin" },
  jarvis_mainland_lively_female: { zh: "活泼普通话", en: "Lively Mandarin" },
  jarvis_liaoning_playful_female: { zh: "东北小贝", en: "Liaoning Playful" },
  jarvis_shaanxi_bright_female: { zh: "陕西小妮", en: "Shaanxi Bright" },
  jarvis_hongkong_friendly_female: { zh: "港风女声", en: "Hong Kong Voice" }
};
const serverVoiceProfileLabels = new Map(Object.entries(VOICE_PROFILE_LABELS));
const params = new URLSearchParams(window.location.search);
const IS_QA_MODE = params.has("qa");
const QA_HISTORY_ENABLED = params.get("qa_history") === "1";
const PUBLIC_SHARE_TOKEN = String(params.get("share") || "").trim();
const PUBLIC_SHARE_REQUESTED = params.has("share");
const PUBLIC_SHARE_MODE = PUBLIC_SHARE_REQUESTED;
const PUBLIC_SHARE_TOKEN_VALID = /^shr_[A-Za-z0-9_-]{43}$/.test(PUBLIC_SHARE_TOKEN);
const responseAuthTokens = new WeakMap();
const irisNativeFetch = typeof window.fetch === "function" ? window.fetch.bind(window) : null;

function authTokenFromFetchRequest(input, init = {}) {
  try {
    const headersSource = init && Object.prototype.hasOwnProperty.call(init, "headers")
      ? init.headers
      : typeof Request !== "undefined" && input instanceof Request
        ? input.headers
        : undefined;
    if (!headersSource || typeof Headers === "undefined") return "";
    return String(new Headers(headersSource).get("X-Jarvis-Token") || "");
  } catch {
    return "";
  }
}

if (irisNativeFetch) {
  window.fetch = async (input, init = {}) => {
    const requestToken = authTokenFromFetchRequest(input, init);
    const response = await irisNativeFetch(input, init);
    if (response && typeof response === "object") responseAuthTokens.set(response, requestToken);
    return response;
  };
}
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

function shouldSkipConversationHistory() {
  return IS_QA_MODE && !QA_HISTORY_ENABLED;
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

function documentApiUrl(path, query = {}) {
  const url = new URL(backendUrl(path), window.location.href);
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value) !== "") {
      url.searchParams.set(key, String(value));
    }
  });
  return url.toString();
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
  if (PUBLIC_SHARE_MODE) return false;
  return !isPublicFrontendMode() || Boolean(currentAuthToken());
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
  stt_error: "stt_error",
  tts_error: "error",
  auth_error: "error"
};

const VOICE_COPY = {
  zh: {
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
    stt_error: {
      topStatus: "语音不可用",
      speaker: "IRIS",
      text: "语音识别暂不可用，可以先打字给我。",
      button: "用文字输入",
      buttonTone: ""
    },
    offline: {
      topStatus: "离线",
      speaker: "IRIS",
      text: "连接断开了，我正在尝试恢复。",
      button: "重新连接",
      buttonTone: ""
    }
  },
  en: {
    idle: {
      topStatus: "Online",
      speaker: "IRIS",
      text: "I'm here. You can speak or send a file.",
      button: "Ask Iris",
      buttonTone: ""
    },
    connecting: {
      topStatus: "Connecting",
      speaker: "IRIS",
      text: "Connecting to Iris...",
      button: "Connecting",
      buttonTone: "soft"
    },
    permission_required: {
      topStatus: "Permission",
      speaker: "IRIS",
      text: "Turn on the microphone and I can listen.",
      button: "Enable mic",
      buttonTone: ""
    },
    listening: {
      topStatus: "Listening",
      speaker: "IRIS",
      text: "I'm listening.",
      button: "Listening",
      buttonTone: "soft"
    },
    user_speaking: {
      topStatus: "Listening",
      speaker: "You",
      text: "Listening...",
      button: "Listening",
      buttonTone: "soft"
    },
    thinking: {
      topStatus: "Thinking",
      speaker: "IRIS",
      text: "Working through your request...",
      button: "Thinking",
      buttonTone: "soft"
    },
    ai_speaking: {
      topStatus: "Answering",
      speaker: "IRIS",
      text: "",
      button: "Answering",
      buttonTone: "soft"
    },
    interrupted: {
      topStatus: "Processing",
      speaker: "IRIS",
      text: "I'm listening.",
      button: "Listening",
      buttonTone: "soft"
    },
    error: {
      topStatus: "Retry",
      speaker: "IRIS",
      text: "I missed that. Try once more.",
      button: "Try again",
      buttonTone: ""
    },
    stt_error: {
      topStatus: "Voice issue",
      speaker: "IRIS",
      text: "Voice recognition is unavailable. You can type to me for now.",
      button: "Type instead",
      buttonTone: ""
    },
    offline: {
      topStatus: "Offline",
      speaker: "IRIS",
      text: "The connection dropped. I'm trying to recover.",
      button: "Reconnect",
      buttonTone: ""
    }
  }
};

const UI_TEXT = {
  zh: {
    "status.online": "在线",
    "welcome.message": "我在。你可以直接说，也可以把文件发给我。",
    "voice.idleText": "我在。你可以直接说。",
    "voice.startListening": "我在，慢慢说。",
    "voice.connectFailedHint": "语音连接还没建立成功，我没有开始录音。请点“重连”或重新开始。",
    "voice.inputting": "正在语音输入",
    "voice.buttonIdle": "问问 Iris",
    "voice.defaultSubtitle": "我在。",
    "voice.controlKicker": "声音状态",
    "voice.controlHint": "这里控制 Iris 的说话音色、输入麦克风和播放开关。",
    "voice.controlMeta": "{mic} · {speaker}",
    "empty.kicker": "随时在这儿",
    "empty.title": "先说一句，Iris 会接住。",
    "empty.voice": "语音优先",
    "empty.pdf": "文件阅读",
    "empty.memory": "记忆连续",
    "access.eyebrow": "PRIVATE ACCESS",
    "access.tagline": "你的私人 AI 空间",
    "access.copy": "登录后，会话、语音、文件和记忆会继续接上。",
    "access.private": "只属于你",
    "access.voice": "语音优先",
    "access.memory": "记忆连续",
    "access.files": "文件理解",
    "access.sessionNote": "短期令牌仅保存在这台设备。",
    "access.focusTitle": "输入访问密钥",
    "access.focusHint": "密钥可以是数字、字母或符号的组合",
    "access.welcomeTitle": "欢迎回来",
    "access.welcomeHint": "请输入访问密钥以继续",
    "access.forgot": "忘记密码？",
    "access.connectingTitle": "正在连接到 Iris",
    "access.connectingVerify": "验证访问权限",
    "access.connectingVerified": "密钥验证成功",
    "access.connectingSecure": "建立安全连接",
    "access.connectingSecuring": "正在加密通信通道…",
    "access.connectingSync": "同步你的数据",
    "access.connectingSyncing": "即将就绪…",
    "access.connectingWait": "请稍候…",
    "access.connectingSoon": "马上就好",
    "access.keyLabel": "访问口令",
    "access.trust": "只用于确认访问权限，不会公开你的内容。",
    "access.placeholder": "输入访问口令",
    "access.submit": "进入 Iris",
    "access.submitLoading": "正在确认身份",
    "access.showCode": "显示访问口令",
    "access.hideCode": "隐藏访问口令",
    "access.required": "请先输入访问口令。",
    "access.expired": "登录已过期，请重新输入访问口令。",
    "access.empty": "请输入访问口令。",
    "access.verifying": "正在确认你的私人空间。",
    "access.slow": "连接有点慢，我还在确认。",
    "access.offline": "当前网络不可用，请稍后重试。",
    "access.failed": "口令不正确，请再试一次。",
    "access.checkKey": "请再检查一次访问口令。",
    "access.unavailable": "Iris 暂时没有回应，请稍后再试。",
    "connection.dropped": "语音连接刚才断开了。网络恢复后再点一次就好。",
    "connection.failed": "语音连接还没建立成功。网络恢复后再点一次就好。",
    "connection.timeout": "连接超时。网络恢复后再点一次就好。",
    "settings.aria": "Iris 设置",
    "settings.eyebrow": "SETTINGS",
    "settings.title": "设置",
    "settings.connection": "连接",
    "settings.connectionSub": "重连 · 停止",
    "settings.conversations": "会话",
    "settings.conversationsSub": "短期上下文 · 历史",
    "conversation.kicker": "CONVERSATION SPACES",
    "conversation.defaultTitle": "日常对话",
    "conversation.memoryHint": "每个会话独立保留短期上下文，个人长期记忆仍会连续。",
    "conversation.new": "新对话",
    "conversation.temporary": "临时对话",
    "conversation.temporaryBadge": "临时",
    "conversation.temporaryHint": "不读取或写入长期记忆；本对话将在 {time} 自动清除。工具操作和安全审计仍会保留。",
    "conversation.temporaryExpires": "{time} 自动清除",
    "conversation.temporaryMemoryOff": "不留长期记忆",
    "conversation.search": "搜索标题或内容",
    "conversation.searchTitleMatch": "标题命中",
    "conversation.searchMessageMatch": "消息内命中",
    "conversation.searchLocated": "已定位到历史消息",
    "conversation.searchPrevious": "上一个命中",
    "conversation.searchNext": "下一个命中",
    "conversation.searchClose": "关闭命中导航",
    "conversation.searchPosition": "第 {current} / {total} 处",
    "conversation.historyEarlier": "载入更早消息",
    "conversation.historyLater": "载入更新消息",
    "conversation.historyLoading": "正在载入…",
    "conversation.archived": "归档",
    "conversation.branch": "从这里分支",
    "conversation.branched": "已创建独立分支",
    "conversation.editMessage": "编辑这条消息",
    "conversation.editHint": "将在新分支发送，原对话会保留。",
    "conversation.editCancel": "取消",
    "conversation.editSubmit": "在新分支发送",
    "conversation.editRequired": "消息不能为空。",
    "conversation.editNoChange": "请先修改消息内容。",
    "conversation.editCreating": "正在创建编辑分支…",
    "conversation.editFailed": "编辑分支创建失败",
    "conversation.regenerate": "重新生成回答",
    "conversation.regenerating": "正在新分支重新生成…",
    "conversation.regenerateFailed": "重新生成失败",
    "conversation.versionPrevious": "上一版本",
    "conversation.versionNext": "下一版本",
    "conversation.versionOriginal": "原版",
    "conversation.versionEdit": "编辑版",
    "conversation.versionRegenerate": "重试版",
    "conversation.versionPosition": "{current} / {total}",
    "conversation.versionSwitchFailed": "版本切换失败",
    "conversation.export": "导出",
    "conversation.exportMarkdown": "Markdown",
    "conversation.exportJson": "JSON",
    "conversation.share": "分享",
    "conversation.shareCurrent": "分享当前会话",
    "conversation.shareKicker": "只读快照",
    "conversation.shareTitle": "分享这段对话",
    "conversation.shareLoading": "正在核对可分享内容…",
    "conversation.shareScope": "将分享当前 {count} 条你与 Iris 的文字消息。",
    "conversation.shareBoundary": "不会包含你的身份、长期记忆、项目信息、文件原件、工具记录或之后的新消息。",
    "conversation.shareWarning": "任何拿到链接的人都能查看这份快照。创建前请先检查当前对话。",
    "conversation.shareExpiry": "链接有效期",
    "conversation.shareExpiry1": "1 天",
    "conversation.shareExpiry7": "7 天",
    "conversation.shareExpiry30": "30 天",
    "conversation.shareExpiryNever": "长期有效",
    "conversation.shareConfirm": "创建只读链接",
    "conversation.shareCreating": "正在创建安全链接…",
    "conversation.shareReady": "只读链接已创建",
    "conversation.shareCopy": "复制链接",
    "conversation.shareCopied": "链接已复制",
    "conversation.shareOpen": "打开",
    "conversation.shareSystem": "系统分享",
    "conversation.shareRevoke": "撤销链接",
    "conversation.shareRevoked": "链接已撤销",
    "conversation.shareClose": "关闭",
    "conversation.shareUnavailable": "暂时无法分享这段会话。",
    "conversation.shareTemporaryBlocked": "临时对话不会生成公开链接。",
    "conversation.shareEmpty": "这段会话还没有可分享的文字消息。",
    "conversation.shareExpired": "这份分享已过期",
    "conversation.shareNotFound": "这份分享不存在或已被撤销",
    "conversation.shareReadOnly": "由 Iris 创建的只读对话快照",
    "conversation.shareSnapshot": "快照创建于 {time}，不会随原会话更新。",
    "conversation.shareBack": "打开 Iris",
    "conversation.shareYou": "你",
    "canvas.capability": "创作画布",
    "canvas.workspace": "创作空间",
    "canvas.saved": "已保存",
    "canvas.saving": "正在保存",
    "canvas.unsaved": "有未保存修改",
    "canvas.conflict": "画布已在别处更新，已载入最新版",
    "canvas.libraryToggle": "画布列表",
    "canvas.close": "关闭画布",
    "canvas.libraryKicker": "你的空间",
    "canvas.library": "画布",
    "canvas.new": "新建",
    "canvas.emptyKicker": "一张安静的纸",
    "canvas.emptyTitle": "把想法写成作品",
    "canvas.emptyHint": "从空白开始，或把 Iris 的一条回答送进画布继续修改。",
    "canvas.createBlank": "创建空白画布",
    "canvas.title": "标题",
    "canvas.untitled": "未命名画布",
    "canvas.toolbar": "画布工具栏",
    "canvas.type": "类型",
    "canvas.writing": "写作",
    "canvas.code": "代码",
    "canvas.language": "语言",
    "canvas.run": "运行",
    "canvas.running": "正在运行",
    "canvas.analysisKicker": "ISOLATED ANALYSIS",
    "canvas.runResult": "运行结果",
    "canvas.runClose": "收起运行结果",
    "canvas.runWaiting": "等待运行",
    "canvas.runCompleted": "运行完成",
    "canvas.runFailed": "运行失败",
    "canvas.runTimeout": "运行超时",
    "canvas.runLimited": "已触发资源限制",
    "canvas.runRevision": "基于 v{revision} · {duration} ms",
    "canvas.runNoOutput": "程序已结束，没有文本输出。",
    "canvas.stdout": "输出",
    "canvas.stderr": "错误",
    "canvas.artifacts": "生成的文件",
    "canvas.download": "下载",
    "canvas.runRequestFailed": "暂时无法运行这段代码。",
    "canvas.artifactFailed": "文件下载失败，请稍后再试。",
    "canvas.preview": "预览",
    "canvas.edit": "编辑",
    "canvas.versions": "版本",
    "canvas.export": "导出",
    "canvas.content": "从这里开始写…",
    "canvas.delete": "删除",
    "canvas.assistKicker": "IRIS REVISION",
    "canvas.assistTitle": "一起改得更好",
    "canvas.assistAction": "请 Iris 修改",
    "canvas.assistClose": "收起建议",
    "canvas.assistWhole": "将修改整篇内容",
    "canvas.assistSelection": "将只修改已选择的 {count} 个字符",
    "canvas.assistPlaceholder": "例如：更自然、更简洁，保留原来的语气",
    "canvas.assistPreview": "生成修改预览",
    "canvas.suggestion": "修改预览",
    "canvas.previewOnly": "还没有写入画布",
    "canvas.discard": "放弃",
    "canvas.apply": "应用修改",
    "canvas.historyKicker": "VERSION HISTORY",
    "canvas.history": "版本历史",
    "canvas.historyClose": "关闭版本历史",
    "canvas.restore": "恢复为新版本",
    "canvas.current": "当前版本",
    "canvas.deleteKicker": "永久删除",
    "canvas.deleteTitle": "删除这张画布？",
    "canvas.deleteWarning": "历史版本也会一起删除，这项操作无法撤销。",
    "canvas.cancel": "取消",
    "canvas.deleteConfirm": "永久删除",
    "canvas.deleteScope": "将删除「{title}」及其 {count} 个历史版本。",
    "canvas.loadFailed": "暂时无法载入画布。",
    "canvas.saveFailed": "保存失败，请稍后再试",
    "canvas.assistFailed": "Iris 暂时没有给出修改建议。",
    "canvas.temporaryBlocked": "临时对话不会保存持久画布。",
    "canvas.sendTo": "在 Canvas 中编辑",
    "canvas.created": "已送入 Canvas",
    "canvas.wordCount": "{count} 字",
    "canvas.updated": "更新于 {time}",
    "canvas.emptyList": "还没有画布",
    "canvas.exportFailed": "导出失败，请稍后再试。",
    "conversation.delete": "删除",
    "conversation.deleteKicker": "永久删除",
    "conversation.deleteTitle": "删除「{title}」？",
    "conversation.deleteScope": "将删除 {messages} 条消息和 {turns} 个回合。已上传的 {documents} 份文件与长期记忆会保留。",
    "conversation.deleteWarning": "这项操作无法撤销。",
    "conversation.deleteCancel": "取消",
    "conversation.deleteConfirm": "永久删除",
    "conversation.deleteLoading": "正在核对删除范围…",
    "conversation.deleteSuccess": "会话已永久删除；文件与长期记忆仍保留。",
    "project.label": "当前空间",
    "project.selectAria": "当前项目空间",
    "project.personal": "个人空间",
    "project.new": "新项目",
    "project.kicker": "PROJECT SPACE",
    "project.name": "项目名称",
    "project.instructions": "项目说明",
    "project.instructionsPlaceholder": "告诉 Iris 这个项目的目标、背景和回答偏好",
    "project.instructionsHint": "说明只影响项目内回答，不会扩大工具权限。",
    "project.goal": "项目目标",
    "project.goalPlaceholder": "这个项目最终要抵达哪里？",
    "project.followup": "允许 Iris 主动跟进",
    "project.followupHint": "只跟进这里明确列出的步骤，仍遵守静默时段和频率上限。",
    "project.plan": "下一步",
    "project.planHint": "把目标拆成几个可以真正完成的动作",
    "project.taskPlaceholder": "添加一个清晰的下一步",
    "project.taskDue": "截止日期",
    "project.taskAdd": "添加",
    "project.tasksEmpty": "还没有下一步。先写一件真正能开始的事。",
    "project.tasksOpen": "{count} 项待完成",
    "project.tasksComplete": "全部完成",
    "project.taskNoDue": "暂不设日期",
    "project.taskOverdue": "已逾期",
    "project.taskToday": "今天到期",
    "project.taskTomorrow": "明天到期",
    "project.taskDueOn": "{date} 到期",
    "project.taskComplete": "标记完成",
    "project.taskReopen": "重新打开",
    "project.taskEdit": "编辑",
    "project.taskDelete": "删除",
    "project.taskSave": "保存",
    "project.taskCancel": "取消",
    "project.taskAdded": "下一步已添加。",
    "project.taskUpdated": "下一步已更新。",
    "project.taskDeleted": "下一步已删除。",
    "project.taskRequired": "请先写下要完成的事。",
    "project.taskFailed": "项目步骤更新失败",
    "project.taskRefreshing": "内容刚被更新，正在同步最新版本。",
    "project.files": "项目文件",
    "project.filesHint": "提问时自动检索这些文件",
    "project.filesEmpty": "这个项目还没有文件",
    "project.filesLoading": "正在读取",
    "project.filesUnavailable": "文件不可用",
    "project.filesLoadFailed": "暂时无法读取项目文件，请稍后重试",
    "project.fileRemove": "移除",
    "project.fileRemoving": "正在移除",
    "project.fileRemoved": "已从项目移除",
    "project.fileRemoveFailed": "移除失败",
    "project.save": "保存项目",
    "project.archive": "归档项目",
    "project.restore": "恢复项目",
    "settings.appearance": "外观",
    "settings.appearanceSub": "主题 · 模式",
    "settings.themeAria": "界面主题",
    "settings.language": "语言",
    "settings.languageSub": "中文 · English",
    "settings.languageAria": "界面语言",
    "settings.model": "模型",
    "settings.modelLabel": "回答模型",
    "model.kicker": "模型路由",
    "model.cardTitle": "回答模型",
    "model.cardHint": "切换后会影响 Iris 接下来的回答。",
    "model.status.loading": "读取当前模型中。",
    "model.status.current": "当前：{name}",
    "model.status.none": "没有可用模型。",
    "model.status.switching": "正在切换到 {name}。",
    "model.status.loadFailed": "模型读取失败：{reason}",
    "model.status.switchFailed": "切换失败：{reason}",
    "model.message.switched": "已切换为 {name}",
    "model.message.switchFailed": "模型切换失败：{reason}",
    "settings.memory": "记忆",
    "settings.memorySub": "偏好 · 项目 · 待确认",
    "settings.proactive": "主动陪伴",
    "settings.proactiveSub": "时机 · 频率 · 最近消息",
    "proactive.kicker": "PROACTIVE CARE",
    "proactive.enabled": "开启主动陪伴",
    "proactive.onTitle": "主动陪伴已开启",
    "proactive.onHint": "Iris 会在有依据、时机合适时自然来找你。",
    "proactive.offTitle": "主动陪伴已暂停",
    "proactive.offHint": "提醒和回访都先安静下来，随时可以恢复。",
    "proactive.dailyLimit": "每天最多",
    "proactive.interval": "最短间隔",
    "proactive.adaptive": "允许 Iris 自动降低软性回访频率",
    "proactive.rhythmKicker": "RHYTHM LEARNING",
    "proactive.rhythmLearning": "还在了解你的节奏",
    "proactive.rhythmLearningHint": "样本足够后，Iris 只会降低打扰，不会自动增加频率。",
    "proactive.rhythmMetricsAria": "近 30 天主动陪伴互动",
    "proactive.rhythmSent": "主动",
    "proactive.rhythmReplied": "回复",
    "proactive.rhythmDismissed": "忽略",
    "proactive.rhythmSafety": "只调整情绪与目标回访；日程和事务提醒不受影响。",
    "proactive.quietHours": "安静时段",
    "proactive.quietStart": "开始",
    "proactive.quietEnd": "结束",
    "proactive.sources": "可以主动提起",
    "proactive.emotion": "情绪回访",
    "proactive.goal": "目标进展",
    "proactive.calendar": "日程准备",
    "proactive.inboxKicker": "RECENT",
    "proactive.inbox": "最近主动消息",
    "proactive.empty": "最近没有等待处理的主动消息。",
    "proactive.dismiss": "忽略这条",
    "proactive.dismissed": "已收起，不会再沿着这条继续问。",
    "proactive.saved": "主动陪伴偏好已保存。",
    "proactive.saveFailed": "暂时没能保存，请稍后重试。",
    "proactive.pushKicker": "BACKGROUND DELIVERY",
    "proactive.pushLoading": "正在检查后台通知",
    "proactive.pushLoadingHint": "开启后，即使没有打开网页，Iris 也能在合适的时候找到你。",
    "proactive.pushChecking": "检查中",
    "proactive.pushEnable": "开启后台通知",
    "proactive.pushDisable": "关闭后台通知",
    "proactive.pushTest": "发送测试通知",
    "proactive.pushPreview": "锁屏显示消息内容",
    "proactive.pushPreviewHint": "默认隐藏正文，只提示有新消息。",
    "proactive.pushOn": "后台通知已开启",
    "proactive.pushOnHint": "网页关闭后也能送达；安静时段与频率限制仍然有效。",
    "proactive.pushOff": "只在打开 Iris 时主动找你",
    "proactive.pushOffHint": "开启后台通知后，关闭网页也不会错过合适的提醒。",
    "proactive.pushUnavailable": "当前服务暂未配置后台通知",
    "proactive.pushUnavailableHint": "站内主动陪伴不受影响，稍后可以再检查。",
    "proactive.pushUnsupported": "这个浏览器不支持后台通知",
    "proactive.pushUnsupportedHint": "仍可在打开 Iris 时接收主动消息。",
    "proactive.pushInstall": "先把 Iris 添加到主屏幕",
    "proactive.pushInstallHint": "在 Safari 分享菜单选择“添加到主屏幕”，再从主屏幕打开 Iris。",
    "proactive.pushBlocked": "通知权限已被系统关闭",
    "proactive.pushBlockedHint": "请在系统设置中允许 Iris 通知，然后回来刷新。",
    "proactive.pushReady": "可开启",
    "proactive.pushEnabled": "已开启",
    "proactive.pushNeedsHome": "需添加",
    "proactive.pushDenied": "已关闭",
    "proactive.pushError": "连接后台通知失败，请稍后重试。",
    "proactive.pushSaved": "后台通知设置已保存。",
    "proactive.pushTestSent": "测试通知已经发出。",
    "proactive.pushTestFailed": "测试通知没有送达，请稍后再试。",
    "settings.review": "审阅",
    "settings.reviewSub": "动作 · 学习 · 待处理",
    "review.tabsAria": "审阅范围",
    "review.pending": "待处理",
    "review.all": "全部",
    "settings.sound": "声音",
    "settings.soundSub": "语音 · 播放 · 麦克风",
    "settings.voiceLabel": "Edge TTS 音色",
    "settings.advanced": "高级",
    "settings.advancedSub": "开发者选项与诊断",
    "action.uploadFile": "上传文件",
    "action.voiceInput": "语音输入",
    "action.send": "发送",
    "action.sendDisabled": "输入内容后发送",
    "action.themeCycle": "切换主题",
    "action.close": "关闭",
    "action.reconnect": "重连",
    "action.stop": "停止",
    "action.refresh": "刷新",
    "action.clear": "清除",
    "action.microphone": "麦克风",
    "action.muteSpeaker": "静音扬声器",
    "action.unmuteSpeaker": "打开扬声器",
    "action.unmuteMic": "取消麦克风静音",
    "action.micOn": "麦克风开",
    "action.micMuted": "麦克风关",
    "action.soundOn": "扬声器开",
    "action.soundMuted": "已静音",
    "action.interrupt": "打断 Iris",
    "action.stopVoice": "结束语音",
    "composer.placeholder": "输入内容...",
    "composer.aria": "输入内容",
    "composer.askDocument": "追问当前文件",
    "composer.askDocumentDisabled": "输入问题后追问当前文件",
    "document.disconnected": "未连接文件",
    "document.summary": "摘要",
    "document.ask": "追问",
    "document.onlyPdf": "暂不支持这种文件。请选择 PDF、图片、文本、Markdown、CSV、JSON、HTML、Office 或 OpenDocument 文件。",
    "document.selectingPdf": "选择文件",
    "document.selectingPdfHint": "正在打开文件选择器",
    "document.uploadingPdfAria": "正在上传文件",
    "document.uploading": "正在上传并解析：",
    "document.receiving": "正在接收：",
    "document.fileReady": "文件已读",
    "document.accepted": "我读完了：",
    "document.uploadMissingId": "上传完成，但没有拿到文档 ID。",
    "document.uploadFailed": "文件上传失败：",
    "document.uploadVerifying": "连接中断，正在确认文件是否已经上传...",
    "document.uploadVerifyLater": "暂时无法确认上传结果。网络恢复后会自动继续检查。",
    "document.uploadIncomplete": "文件没有上传完整，请重新选择后再试。",
    "document.noDocument": "先上传并解析一份文件。",
    "document.summarizePendingShort": "正在整理摘要...",
    "document.summarizePending": "正在整理这份文件的摘要...",
    "document.summaryEmpty": "没有生成摘要。",
    "document.summaryPoints": "要点",
    "document.summaryOutline": "结构",
    "document.summaryFailed": "摘要失败：",
    "document.askMissingQuestion": "先输入一个想问这份文件的问题。",
    "document.askPendingShort": "正在从文档里找相关内容...",
    "document.askPending": "正在从当前文件里找相关内容...",
    "document.askEmpty": "没有找到可回答的内容。",
    "document.askSources": "来源",
    "document.askPage": "第 {page} 页",
    "document.askFailed": "追问失败：",
    "document.summaryLabel": "Iris · 文件摘要",
    "document.answerLabel": "Iris · 文件",
    "memory.search": "搜索记忆",
    "memory.clearSearch": "清空记忆搜索",
    "tts.audibilityTitle": "发声听感确认",
    "tts.checkKicker": "发声检查",
    "tts.flowGuide": "先测试播报，再告诉 Iris 你有没有听到。",
    "tts.unconfirmed": "未确认",
    "tts.routeTitle": "最近播报链路",
    "tts.noRoute": "还没有播报记录。",
    "tts.routeSource": "来源",
    "tts.routeProvider": "服务",
    "tts.routeVoice": "音色",
    "tts.test": "测试播报",
    "tts.confirmHint": "听完后确认结果",
    "tts.testPending": "等待确认：请听浏览器是否播出了刚才这句测试语音。",
    "tts.testUtterance": "Iris Web 发声测试。现在使用你选择的 Edge TTS 音色。",
    "tts.heard": "我听到了",
    "tts.notHeard": "没听到",
    "tts.sync": "同步记录",
    "tts.heardStatus": "已确认听到：Web 最近一次测试播报可被人耳听见。",
    "tts.notHeardStatus": "未听到：请检查媒体音量、静音开关、蓝牙输出、浏览器自动播放权限和 Edge TTS 音频播放链路。",
    "tts.syncPending": "正在同步服务器最近一次 Web 听感记录。",
    "tts.syncEmpty": "服务器还没有 Web 听感记录。",
    "tts.syncEventHeard": "已确认听到",
    "tts.syncEventNotHeard": "未听到",
    "tts.syncEventLine": "{status}：服务器最近一次 Web 测试播报记录（{created}）。",
    "debug.userSaid": "我说",
    "debug.kicker": "运行诊断",
    "debug.title": "只读状态与最近事件",
    "debug.copy": "复制诊断",
    "debug.copying": "正在复制",
    "debug.copySuccess": "已复制当前诊断摘要。",
    "debug.copyFailed": "复制失败，请稍后再试。",
    "debug.clear": "清空日志",
    "debug.clearSuccess": "日志已清空。",
    "debug.recentEvents": "最近事件",
    "debug.localOnly": "本地显示",
    "role.user": "你",
    "role.file": "文件",
    "role.system": "状态",
    "role.recent": "最近"
  },
  en: {
    "status.online": "Online",
    "welcome.message": "I'm here. You can speak or send a file.",
    "voice.idleText": "I'm here. You can speak.",
    "voice.startListening": "I'm listening. Take your time.",
    "voice.connectFailedHint": "The voice connection is not ready, so recording did not start. Tap Reconnect or start again.",
    "voice.inputting": "Voice input active",
    "voice.buttonIdle": "Ask Iris",
    "voice.defaultSubtitle": "I'm here.",
    "voice.controlKicker": "Voice status",
    "voice.controlHint": "Control Iris's speaking voice, input mic, and playback switch here.",
    "voice.controlMeta": "{mic} · {speaker}",
    "empty.kicker": "Always here",
    "empty.title": "Start anywhere. Iris will follow.",
    "empty.voice": "Voice first",
    "empty.pdf": "File reading",
    "empty.memory": "Continuous memory",
    "access.eyebrow": "PRIVATE ACCESS",
    "access.tagline": "Your private AI space",
    "access.copy": "After sign-in, conversations, voice, files, and memory stay continuous.",
    "access.private": "Only yours",
    "access.voice": "Voice first",
    "access.memory": "Continuous memory",
    "access.files": "File understanding",
    "access.sessionNote": "The short-lived token stays on this device.",
    "access.focusTitle": "Enter your access code",
    "access.focusHint": "Use any combination of letters, numbers, or symbols",
    "access.welcomeTitle": "Welcome back",
    "access.welcomeHint": "Enter your access code to continue",
    "access.forgot": "Forgot code?",
    "access.connectingTitle": "Connecting to Iris",
    "access.connectingVerify": "Verify access",
    "access.connectingVerified": "Access code confirmed",
    "access.connectingSecure": "Secure connection",
    "access.connectingSecuring": "Encrypting the channel…",
    "access.connectingSync": "Sync your space",
    "access.connectingSyncing": "Almost ready…",
    "access.connectingWait": "Please wait…",
    "access.connectingSoon": "Just a moment",
    "access.keyLabel": "Access code",
    "access.trust": "Only confirms access. Nothing is shared publicly.",
    "access.placeholder": "Enter access code",
    "access.submit": "Enter Iris",
    "access.submitLoading": "Confirming identity",
    "access.showCode": "Show access code",
    "access.hideCode": "Hide access code",
    "access.required": "Enter your access code first.",
    "access.expired": "Your session expired. Enter the access code again.",
    "access.empty": "Enter your access code.",
    "access.verifying": "Confirming your private Iris space.",
    "access.slow": "Taking a little longer. I am still confirming.",
    "access.offline": "Network is unavailable. Try again later.",
    "access.failed": "The access code is not correct. Try again.",
    "access.checkKey": "Check the access code and try again.",
    "access.unavailable": "Iris is not responding right now. Try again later.",
    "connection.dropped": "The voice connection dropped. Try again when the network is back.",
    "connection.failed": "The voice connection was not established. Try again when the network is back.",
    "connection.timeout": "The voice connection timed out. Try again when the network is back.",
    "settings.aria": "Iris settings",
    "settings.eyebrow": "SETTINGS",
    "settings.title": "Settings",
    "settings.connection": "Connection",
    "settings.connectionSub": "Reconnect · Stop",
    "settings.conversations": "Conversations",
    "settings.conversationsSub": "Short-term context · History",
    "conversation.kicker": "CONVERSATION SPACES",
    "conversation.defaultTitle": "Everyday chat",
    "conversation.memoryHint": "Short-term context stays separate while personal long-term memory continues.",
    "conversation.new": "New chat",
    "conversation.temporary": "Temporary",
    "conversation.temporaryBadge": "Temporary",
    "conversation.temporaryHint": "No long-term memory is read or written. This chat clears automatically at {time}. Tool actions and safety audit records remain.",
    "conversation.temporaryExpires": "Clears at {time}",
    "conversation.temporaryMemoryOff": "Long-term memory off",
    "conversation.search": "Search titles or content",
    "conversation.searchTitleMatch": "Title match",
    "conversation.searchMessageMatch": "Message match",
    "conversation.searchLocated": "Located historical message",
    "conversation.searchPrevious": "Previous match",
    "conversation.searchNext": "Next match",
    "conversation.searchClose": "Close match navigator",
    "conversation.searchPosition": "{current} of {total}",
    "conversation.historyEarlier": "Load earlier messages",
    "conversation.historyLater": "Load newer messages",
    "conversation.historyLoading": "Loading…",
    "conversation.archived": "Archived",
    "conversation.branch": "Branch from here",
    "conversation.branched": "Independent branch created",
    "conversation.editMessage": "Edit this message",
    "conversation.editHint": "This sends in a new branch. The original conversation stays unchanged.",
    "conversation.editCancel": "Cancel",
    "conversation.editSubmit": "Send in new branch",
    "conversation.editRequired": "Message cannot be empty.",
    "conversation.editNoChange": "Change the message before sending.",
    "conversation.editCreating": "Creating edit branch…",
    "conversation.editFailed": "Edit branch failed",
    "conversation.regenerate": "Regenerate response",
    "conversation.regenerating": "Regenerating in a new branch…",
    "conversation.regenerateFailed": "Regeneration failed",
    "conversation.versionPrevious": "Previous version",
    "conversation.versionNext": "Next version",
    "conversation.versionOriginal": "Original",
    "conversation.versionEdit": "Edited",
    "conversation.versionRegenerate": "Regenerated",
    "conversation.versionPosition": "{current} / {total}",
    "conversation.versionSwitchFailed": "Version switch failed",
    "conversation.export": "Export",
    "conversation.exportMarkdown": "Markdown",
    "conversation.exportJson": "JSON",
    "conversation.share": "Share",
    "conversation.shareCurrent": "Share current conversation",
    "conversation.shareKicker": "READ-ONLY SNAPSHOT",
    "conversation.shareTitle": "Share this conversation",
    "conversation.shareLoading": "Checking what can be shared…",
    "conversation.shareScope": "This shares {count} current text messages between you and Iris.",
    "conversation.shareBoundary": "Your identity, long-term memory, project metadata, original files, tool records, and future messages stay private.",
    "conversation.shareWarning": "Anyone with the link can read this snapshot. Review the current conversation before creating it.",
    "conversation.shareExpiry": "Link expiry",
    "conversation.shareExpiry1": "1 day",
    "conversation.shareExpiry7": "7 days",
    "conversation.shareExpiry30": "30 days",
    "conversation.shareExpiryNever": "No expiry",
    "conversation.shareConfirm": "Create read-only link",
    "conversation.shareCreating": "Creating secure link…",
    "conversation.shareReady": "Read-only link created",
    "conversation.shareCopy": "Copy link",
    "conversation.shareCopied": "Link copied",
    "conversation.shareOpen": "Open",
    "conversation.shareSystem": "Share…",
    "conversation.shareRevoke": "Revoke link",
    "conversation.shareRevoked": "Link revoked",
    "conversation.shareClose": "Close",
    "conversation.shareUnavailable": "This conversation cannot be shared right now.",
    "conversation.shareTemporaryBlocked": "Temporary conversations never create public links.",
    "conversation.shareEmpty": "This conversation has no shareable text yet.",
    "conversation.shareExpired": "This shared snapshot has expired",
    "conversation.shareNotFound": "This shared snapshot does not exist or was revoked",
    "conversation.shareReadOnly": "A read-only conversation snapshot created by Iris",
    "conversation.shareSnapshot": "Snapshot created {time}. It does not update with the private conversation.",
    "conversation.shareBack": "Open Iris",
    "conversation.shareYou": "You",
    "canvas.capability": "Canvas",
    "canvas.workspace": "Creative space",
    "canvas.saved": "Saved",
    "canvas.saving": "Saving",
    "canvas.unsaved": "Unsaved changes",
    "canvas.conflict": "Updated elsewhere; the latest version is loaded",
    "canvas.libraryToggle": "Canvas library",
    "canvas.close": "Close Canvas",
    "canvas.libraryKicker": "Your space",
    "canvas.library": "Canvases",
    "canvas.new": "New",
    "canvas.emptyKicker": "A quiet page",
    "canvas.emptyTitle": "Shape an idea into something finished",
    "canvas.emptyHint": "Start blank, or send one of Iris's replies here and keep editing.",
    "canvas.createBlank": "Create a blank canvas",
    "canvas.title": "Title",
    "canvas.untitled": "Untitled canvas",
    "canvas.toolbar": "Canvas toolbar",
    "canvas.type": "Type",
    "canvas.writing": "Writing",
    "canvas.code": "Code",
    "canvas.language": "Language",
    "canvas.run": "Run",
    "canvas.running": "Running",
    "canvas.analysisKicker": "ISOLATED ANALYSIS",
    "canvas.runResult": "Run result",
    "canvas.runClose": "Close run result",
    "canvas.runWaiting": "Ready to run",
    "canvas.runCompleted": "Completed",
    "canvas.runFailed": "Failed",
    "canvas.runTimeout": "Timed out",
    "canvas.runLimited": "Resource limit reached",
    "canvas.runRevision": "From v{revision} · {duration} ms",
    "canvas.runNoOutput": "The program finished without text output.",
    "canvas.stdout": "Output",
    "canvas.stderr": "Errors",
    "canvas.artifacts": "Generated files",
    "canvas.download": "Download",
    "canvas.runRequestFailed": "This code could not be run right now.",
    "canvas.artifactFailed": "Download failed. Please try again.",
    "canvas.preview": "Preview",
    "canvas.edit": "Edit",
    "canvas.versions": "Versions",
    "canvas.export": "Export",
    "canvas.content": "Start writing here…",
    "canvas.delete": "Delete",
    "canvas.assistKicker": "IRIS REVISION",
    "canvas.assistTitle": "Make it better together",
    "canvas.assistAction": "Revise with Iris",
    "canvas.assistClose": "Close suggestions",
    "canvas.assistWhole": "The full canvas will be revised",
    "canvas.assistSelection": "Only the selected {count} characters will be revised",
    "canvas.assistPlaceholder": "For example: make it warmer and more concise, while keeping my voice",
    "canvas.assistPreview": "Generate a revision preview",
    "canvas.suggestion": "Revision preview",
    "canvas.previewOnly": "Nothing has been written yet",
    "canvas.discard": "Discard",
    "canvas.apply": "Apply revision",
    "canvas.historyKicker": "VERSION HISTORY",
    "canvas.history": "Version history",
    "canvas.historyClose": "Close version history",
    "canvas.restore": "Restore as a new version",
    "canvas.current": "Current version",
    "canvas.deleteKicker": "PERMANENT DELETE",
    "canvas.deleteTitle": "Delete this canvas?",
    "canvas.deleteWarning": "Its version history will also be deleted. This cannot be undone.",
    "canvas.cancel": "Cancel",
    "canvas.deleteConfirm": "Delete permanently",
    "canvas.deleteScope": "This will delete “{title}” and its {count} saved versions.",
    "canvas.loadFailed": "Canvas could not be loaded right now.",
    "canvas.saveFailed": "Could not save. Please try again",
    "canvas.assistFailed": "Iris could not prepare a revision right now.",
    "canvas.temporaryBlocked": "Temporary conversations do not keep persistent canvases.",
    "canvas.sendTo": "Edit in Canvas",
    "canvas.created": "Sent to Canvas",
    "canvas.wordCount": "{count} words",
    "canvas.updated": "Updated {time}",
    "canvas.emptyList": "No canvases yet",
    "canvas.exportFailed": "Export failed. Please try again.",
    "conversation.delete": "Delete",
    "conversation.deleteKicker": "PERMANENT DELETE",
    "conversation.deleteTitle": "Delete “{title}”?",
    "conversation.deleteScope": "This removes {messages} messages and {turns} turns. {documents} uploaded files and long-term memory stay intact.",
    "conversation.deleteWarning": "This action cannot be undone.",
    "conversation.deleteCancel": "Cancel",
    "conversation.deleteConfirm": "Delete permanently",
    "conversation.deleteLoading": "Checking the deletion scope…",
    "conversation.deleteSuccess": "Conversation permanently deleted. Files and long-term memory were preserved.",
    "project.label": "Current space",
    "project.selectAria": "Current project space",
    "project.personal": "Personal space",
    "project.new": "New project",
    "project.kicker": "PROJECT SPACE",
    "project.name": "Project name",
    "project.instructions": "Project instructions",
    "project.instructionsPlaceholder": "Give Iris the goals, context, and response preferences for this project",
    "project.instructionsHint": "Instructions shape project replies but never expand tool permissions.",
    "project.goal": "Project goal",
    "project.goalPlaceholder": "Where should this project ultimately arrive?",
    "project.followup": "Let Iris follow up proactively",
    "project.followupHint": "Only explicit steps below are followed up, with quiet hours and frequency limits intact.",
    "project.plan": "Next steps",
    "project.planHint": "Turn the goal into a few actions you can actually finish",
    "project.taskPlaceholder": "Add one clear next step",
    "project.taskDue": "Due date",
    "project.taskAdd": "Add",
    "project.tasksEmpty": "No next steps yet. Start with one thing you can truly begin.",
    "project.tasksOpen": "{count} open",
    "project.tasksComplete": "All complete",
    "project.taskNoDue": "No date",
    "project.taskOverdue": "Overdue",
    "project.taskToday": "Due today",
    "project.taskTomorrow": "Due tomorrow",
    "project.taskDueOn": "Due {date}",
    "project.taskComplete": "Mark complete",
    "project.taskReopen": "Reopen",
    "project.taskEdit": "Edit",
    "project.taskDelete": "Delete",
    "project.taskSave": "Save",
    "project.taskCancel": "Cancel",
    "project.taskAdded": "Next step added.",
    "project.taskUpdated": "Next step updated.",
    "project.taskDeleted": "Next step deleted.",
    "project.taskRequired": "Write the next step first.",
    "project.taskFailed": "Project step update failed",
    "project.taskRefreshing": "This changed elsewhere. Syncing the latest version.",
    "project.files": "Project files",
    "project.filesHint": "Iris searches these files when relevant",
    "project.filesEmpty": "No files in this project yet",
    "project.filesLoading": "Loading",
    "project.filesUnavailable": "File unavailable",
    "project.filesLoadFailed": "Project files are temporarily unavailable. Try again shortly.",
    "project.fileRemove": "Remove",
    "project.fileRemoving": "Removing",
    "project.fileRemoved": "Removed from project",
    "project.fileRemoveFailed": "Remove failed",
    "project.save": "Save project",
    "project.archive": "Archive project",
    "project.restore": "Restore project",
    "settings.appearance": "Appearance",
    "settings.appearanceSub": "Theme · Mode",
    "settings.themeAria": "Interface theme",
    "settings.language": "Language",
    "settings.languageSub": "Chinese · English",
    "settings.languageAria": "Interface language",
    "settings.model": "Model",
    "settings.modelLabel": "Response model",
    "model.kicker": "Model router",
    "model.cardTitle": "Response model",
    "model.cardHint": "Changes affect Iris replies after the switch.",
    "model.status.loading": "Reading current model.",
    "model.status.current": "Current: {name}",
    "model.status.none": "No model available.",
    "model.status.switching": "Switching to {name}.",
    "model.status.loadFailed": "Model load failed: {reason}",
    "model.status.switchFailed": "Switch failed: {reason}",
    "model.message.switched": "Switched to {name}",
    "model.message.switchFailed": "Model switch failed: {reason}",
    "settings.memory": "Memory",
    "settings.memorySub": "Prefs · Projects · Review",
    "settings.proactive": "Proactive care",
    "settings.proactiveSub": "Timing · Frequency · Recent",
    "proactive.kicker": "PROACTIVE CARE",
    "proactive.enabled": "Enable proactive care",
    "proactive.onTitle": "Proactive care is on",
    "proactive.onHint": "Iris may check in when there is evidence and the timing feels right.",
    "proactive.offTitle": "Proactive care is paused",
    "proactive.offHint": "Reminders and check-ins will stay quiet until you resume them.",
    "proactive.dailyLimit": "Daily maximum",
    "proactive.interval": "Minimum interval",
    "proactive.adaptive": "Allow Iris to reduce soft follow-up frequency",
    "proactive.rhythmKicker": "RHYTHM LEARNING",
    "proactive.rhythmLearning": "Still learning your rhythm",
    "proactive.rhythmLearningHint": "With enough samples, Iris may only reduce interruptions, never increase them.",
    "proactive.rhythmMetricsAria": "Proactive care interactions over the last 30 days",
    "proactive.rhythmSent": "Sent",
    "proactive.rhythmReplied": "Replies",
    "proactive.rhythmDismissed": "Dismissed",
    "proactive.rhythmSafety": "Only emotional and goal follow-ups adapt; calendar and transactional reminders are exempt.",
    "proactive.quietHours": "Quiet hours",
    "proactive.quietStart": "Start",
    "proactive.quietEnd": "End",
    "proactive.sources": "Iris may bring up",
    "proactive.emotion": "Emotional follow-up",
    "proactive.goal": "Goal progress",
    "proactive.calendar": "Calendar preparation",
    "proactive.inboxKicker": "RECENT",
    "proactive.inbox": "Recent proactive messages",
    "proactive.empty": "No proactive messages are waiting for you.",
    "proactive.dismiss": "Dismiss",
    "proactive.dismissed": "Dismissed. Iris will not continue this thread.",
    "proactive.saved": "Proactive care preferences saved.",
    "proactive.saveFailed": "Could not save this preference. Try again.",
    "proactive.pushKicker": "BACKGROUND DELIVERY",
    "proactive.pushLoading": "Checking background notifications",
    "proactive.pushLoadingHint": "When enabled, Iris can reach you at the right moment even when the page is closed.",
    "proactive.pushChecking": "Checking",
    "proactive.pushEnable": "Enable notifications",
    "proactive.pushDisable": "Turn off notifications",
    "proactive.pushTest": "Send test notification",
    "proactive.pushPreview": "Show message content on Lock Screen",
    "proactive.pushPreviewHint": "Message text stays hidden by default.",
    "proactive.pushOn": "Background notifications are on",
    "proactive.pushOnHint": "Delivery works while the page is closed; quiet hours and frequency limits still apply.",
    "proactive.pushOff": "Iris can only reach you while open",
    "proactive.pushOffHint": "Enable notifications to keep timely check-ins available in the background.",
    "proactive.pushUnavailable": "Background delivery is not configured",
    "proactive.pushUnavailableHint": "In-app proactive care still works. Check again later.",
    "proactive.pushUnsupported": "This browser does not support background notifications",
    "proactive.pushUnsupportedHint": "You can still receive proactive messages while Iris is open.",
    "proactive.pushInstall": "Add Iris to your Home Screen first",
    "proactive.pushInstallHint": "Use Safari Share, choose Add to Home Screen, then open Iris from its icon.",
    "proactive.pushBlocked": "Notification permission is turned off",
    "proactive.pushBlockedHint": "Allow Iris notifications in system settings, then refresh.",
    "proactive.pushReady": "Available",
    "proactive.pushEnabled": "On",
    "proactive.pushNeedsHome": "Add first",
    "proactive.pushDenied": "Off",
    "proactive.pushError": "Could not connect background notifications. Try again.",
    "proactive.pushSaved": "Background notification settings saved.",
    "proactive.pushTestSent": "Test notification sent.",
    "proactive.pushTestFailed": "The test notification did not arrive. Try again.",
    "settings.review": "Review",
    "settings.reviewSub": "Actions · Learning · Pending",
    "review.tabsAria": "Review scope",
    "review.pending": "Pending",
    "review.all": "All",
    "settings.sound": "Voice",
    "settings.soundSub": "Speech · Playback · Mic",
    "settings.voiceLabel": "Edge TTS voice",
    "settings.advanced": "Advanced",
    "settings.advancedSub": "Developer options and diagnostics",
    "action.uploadFile": "Upload file",
    "action.voiceInput": "Voice input",
    "action.send": "Send",
    "action.sendDisabled": "Type a message to send",
    "action.themeCycle": "Switch theme",
    "action.close": "Close",
    "action.reconnect": "Reconnect",
    "action.stop": "Stop",
    "action.refresh": "Refresh",
    "action.clear": "Clear",
    "action.microphone": "Mic",
    "action.muteSpeaker": "Mute",
    "action.unmuteSpeaker": "Sound on",
    "action.unmuteMic": "Mic on",
    "action.micOn": "Mic on",
    "action.micMuted": "Mic off",
    "action.soundOn": "Sound on",
    "action.soundMuted": "Muted",
    "action.interrupt": "Interrupt Iris",
    "action.stopVoice": "Stop voice",
    "composer.placeholder": "Type a message...",
    "composer.aria": "Message input",
    "composer.askDocument": "Ask current file",
    "composer.askDocumentDisabled": "Type a question to ask the current file",
    "document.disconnected": "No file connected",
    "document.summary": "Summary",
    "document.ask": "Ask",
    "document.onlyPdf": "That file type is not supported. Choose PDF, image, text, Markdown, CSV, JSON, HTML, Office, or OpenDocument.",
    "document.selectingPdf": "Choose file",
    "document.selectingPdfHint": "Opening file picker",
    "document.uploadingPdfAria": "Uploading file",
    "document.uploading": "Uploading and parsing: ",
    "document.receiving": "Receiving: ",
    "document.fileReady": "File read",
    "document.accepted": "I’ve read ",
    "document.uploadMissingId": "Upload finished, but no document ID was returned.",
    "document.uploadFailed": "File upload failed: ",
    "document.uploadVerifying": "Connection interrupted. Checking whether the file was uploaded...",
    "document.uploadVerifyLater": "The upload result is still unknown. Iris will check again when the connection returns.",
    "document.uploadIncomplete": "The file did not finish uploading. Please choose it again and retry.",
    "document.noDocument": "Upload and parse a file first.",
    "document.summarizePendingShort": "Summarizing...",
    "document.summarizePending": "Summarizing this file...",
    "document.summaryEmpty": "No summary was generated.",
    "document.summaryPoints": "Key points",
    "document.summaryOutline": "Outline",
    "document.summaryFailed": "Summary failed: ",
    "document.askMissingQuestion": "Type a question for this file first.",
    "document.askPendingShort": "Looking through the document...",
    "document.askPending": "Searching the current file...",
    "document.askEmpty": "No answerable content was found.",
    "document.askSources": "Sources",
    "document.askPage": "Page {page}",
    "document.askFailed": "Question failed: ",
    "document.summaryLabel": "Iris · File Summary",
    "document.answerLabel": "Iris · File",
    "memory.search": "Search memory",
    "memory.clearSearch": "Clear memory search",
    "tts.audibilityTitle": "Voice audibility",
    "tts.checkKicker": "Voice check",
    "tts.flowGuide": "Test playback first, then tell Iris whether you heard it.",
    "tts.unconfirmed": "Not confirmed",
    "tts.routeTitle": "Recent playback route",
    "tts.noRoute": "No playback record yet.",
    "tts.routeSource": "Source",
    "tts.routeProvider": "Service",
    "tts.routeVoice": "Voice",
    "tts.test": "Test voice",
    "tts.confirmHint": "Confirm the result after listening",
    "tts.testPending": "Waiting for confirmation: listen for the test phrase.",
    "tts.testUtterance": "Iris Web voice test. Using your selected Edge TTS voice.",
    "tts.heard": "Heard",
    "tts.notHeard": "No sound",
    "tts.sync": "Sync record",
    "tts.heardStatus": "Confirmed: the latest Web test playback was audible.",
    "tts.notHeardStatus": "No sound: check media volume, mute switch, Bluetooth output, browser autoplay permission, and the Edge TTS playback route.",
    "tts.syncPending": "Syncing the latest Web audibility record from the server.",
    "tts.syncEmpty": "No Web audibility record on the server yet.",
    "tts.syncEventHeard": "Heard",
    "tts.syncEventNotHeard": "No sound",
    "tts.syncEventLine": "{status}: latest Web test playback record on the server ({created}).",
    "debug.userSaid": "You said",
    "debug.kicker": "Runtime diagnostics",
    "debug.title": "Read-only state and recent events",
    "debug.copy": "Copy report",
    "debug.copying": "Copying",
    "debug.copySuccess": "Copied the current diagnostics summary.",
    "debug.copyFailed": "Copy failed. Try again later.",
    "debug.clear": "Clear log",
    "debug.clearSuccess": "Log cleared.",
    "debug.recentEvents": "Recent events",
    "debug.localOnly": "Local only",
    "role.user": "You",
    "role.file": "File",
    "role.system": "Status",
    "role.recent": "Recent"
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
let activeTextPromptAbortController = null;
let activeTextPromptMessageId = "";
let serverTtsAvailable = false;
let serverTtsProfiles = new Set();
let serverTtsFailureCounts = new Map();
let currentAudio = null;
let currentAudioUrl = "";
let ttsRequestSeq = 0;
let activeTtsRequestId = 0;
let activeTtsAbortController = null;
let activeTtsSession = null;
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
let currentConversationTitle = "";
let canvasItems = [];
let currentCanvas = null;
let canvasDirty = false;
let canvasSaveTimer = 0;
let canvasSavePromise = null;
let canvasSuggestion = null;
let currentCanvasRun = null;
let canvasSelection = { start: 0, end: 0 };
let canvasDeleteToken = "";
let canvasRestoreFocus = null;
let conversationVersionGroup = null;
let conversationVersionRequestSeq = 0;
let conversationVersionSourceTurnId = "";
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
  summary: ""
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
let currentDocumentSummaryData = null;
let currentDocumentWarnings = [];
let currentDocumentAnswerMode = "";
let currentDocumentReadyFileMessageId = "";
let currentDocumentReadyAssistantMessageId = "";
let documentContextVisible = false;
let documentUploadInFlight = false;
let documentUploadReconcileTimer = 0;
let documentUploadReconcileRunning = false;
let activeDocumentJobId = "";
let activeDocumentUnitRetryId = "";
let documentJobActive = false;
let activeDocumentBatch = null;
let documentBatchPollTimer = 0;
let conversationMessageSeq = 0;
let conversationHistoryLoaded = false;
let conversationHistoryLoading = false;
let conversationHistoryRequestSeq = 0;
let conversationHistoryWindow = {
  start: 0,
  end: 0,
  total: 0,
  hasMoreBefore: false,
  hasMoreAfter: false
};
let conversationHistoryPageLoading = false;
let conversationSearchSession = null;
let conversationSearchNavigationBusy = false;
let conversationLibraryLoaded = false;
let conversationLibraryLoading = false;
let conversationLibraryItems = [];
let conversationLibrarySearchTimer = 0;
let conversationShareOverlay = null;
let conversationShareReturnFocus = null;
let projectLibraryItems = [];
let projectLibraryLoaded = false;
let projectLibraryLoading = false;
let projectDocumentItems = [];
let projectDocumentProjectId = "";
let projectDocumentLoading = false;
let projectDocumentError = "";
let projectDocumentRequestSeq = 0;
let projectTaskEditingId = "";
let projectTaskRenderedProjectId = "";
const projectTaskBusyIds = new Set();
let currentProjectFilterId = "";
let projectFilterTouched = false;
let activeAssistantMessageId = "";
let connectionStatusMessageId = "";
let lastUserConversationText = "";
let lastUserConversationAt = 0;
let detailsReturnFocus = null;
let memoryControlLoaded = false;
let memoryControlLoading = false;
let memorySearchTimer = 0;
let lastMemoryControlPayload = null;
let memoryControlRequestSeq = 0;
let activeMemoryAbortController = null;
let reviewWorkbenchLoaded = false;
let reviewWorkbenchLoading = false;
let reviewWorkbenchFilter = "pending";
let lastReviewWorkbenchPayload = null;
const reviewDecisionKeys = new Map();
let modelStatusMeta = { key: "", values: {} };
let accessSlowNoticeTimer = 0;
let proactiveScanTimer = 0;
let proactiveScanInFlight = false;
let proactiveScanLastAt = 0;
let activeProactiveNotificationId = "";
let proactivePreferencesLoaded = false;
let proactivePreferencesLoading = false;
let proactivePreferencesSaving = false;
let proactivePreferencesSnapshot = null;
let proactiveInboxItems = [];
let proactivePushStatus = null;
let proactivePushLoading = false;
let proactivePushRegistration = null;
let proactivePushSubscription = null;
let proactivePushSubscriptionServerId = "";
let pendingProactiveNotificationId = "";
const renderedProactiveKeys = new Set();

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
const KEYBOARD_DOCK_GAP_PX = 12;
const MEMORY_ACTION_MIN_BUSY_MS = 720;
const COMPOSER_ACTION_MIN_BUSY_MS = 260;
const MAINTENANCE_ACTION_MIN_BUSY_MS = 280;
const PROACTIVE_SCAN_INTERVAL_MS = 15 * 60 * 1000;
const PROACTIVE_SCAN_BUSY_RETRY_MS = 60 * 1000;
const DOCUMENT_UPLOAD_MAX_FILES = 12;
const DOCUMENT_UPLOAD_CONCURRENCY = 3;
const DOCUMENT_BATCH_POLL_INTERVAL_MS = 700;

const WEB_VERSION = "voice-ui-web-polish-v389-reply-readability";
const PRE_AUTH_SAFE_EVENT_TYPES = new Set(["session_status", "server_capabilities", "error"]);
const TOKEN_KEY = "jarvis_voice_token";
const ACCESS_TOKEN_KEY = "iris_access_token";
const ACCESS_TOKEN_EXPIRES_KEY = "iris_access_token_expires_at";
const ACCESS_SUBJECT_ID_KEY = "iris_access_subject_id";
const CONVERSATION_SELECTION_KEY = "iris_selected_conversation";
const THEME_KEY = "iris_voice_theme";
const LANGUAGE_KEY = "iris_voice_language";
const VOICE_CLIENT_ID_KEY = "jarvis_voice_client_id";
const TTS_AUDIBILITY_KEY = "jarvis_voice_tts_audibility";
const TTS_ROUTE_KEY = "jarvis_voice_tts_route";
const VOLUME_KEY = "jarvis_voice_volume";
const THINKING_MODE_KEY = "iris_thinking_mode";
let currentLanguage = normalizedLanguage(safeStorageGet(LANGUAGE_KEY, "zh"));
let selectedThinkingMode = normalizedThinkingMode(safeStorageGet(THINKING_MODE_KEY, "auto"));
const WEB_TEXT_CAPABILITIES = {
  calendar: true,
  calendar_read: true,
  calendar_write: true,
  tts: true,
  share_sheet: true,
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
const POINTER_FINE_QUERY = typeof window.matchMedia === "function" ? window.matchMedia("(hover: hover) and (pointer: fine)") : null;
const IDLE_TASK_TIMEOUT_MS = 1200;

function applyBrowserTargeting() {
  document.documentElement.dataset.browserTarget = BROWSER_TARGET;
  document.body.dataset.browserTarget = BROWSER_TARGET;
  document.body.classList.toggle("browserChrome", IS_CHROME_BROWSER);
  document.body.classList.toggle("browserUnsupported", BROWSER_TARGET === "unsupported");
  document.body.classList.toggle("iosDevice", IS_IOS_DEVICE);
  mountComposerViewportPortal();
  document.body.classList.toggle("pointerFine", Boolean(POINTER_FINE_QUERY && POINTER_FINE_QUERY.matches));
}

function mountComposerViewportPortal() {
  if (PUBLIC_SHARE_MODE) return;
  if (!els.dock || els.dock.parentElement === document.body) return;
  // A fixed descendant of the transformed app canvas can disappear from the
  // compositor after input/document state changes. Keep one root-level layer
  // positioned from visualViewport coordinates instead of position: fixed.
  els.dock.dataset.viewportHost = "body";
  els.dock.dataset.viewportMode = "visual-absolute";
  document.body.appendChild(els.dock);
}

if (POINTER_FINE_QUERY) {
  const syncPointerFine = () => document.body.classList.toggle("pointerFine", POINTER_FINE_QUERY.matches);
  if (typeof POINTER_FINE_QUERY.addEventListener === "function") {
    POINTER_FINE_QUERY.addEventListener("change", syncPointerFine);
  } else if (typeof POINTER_FINE_QUERY.addListener === "function") {
    POINTER_FINE_QUERY.addListener(syncPointerFine);
  }
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

function canFallbackToServerStt() {
  return REQUESTED_STT_MODE !== "browser";
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

function calculateDockViewportTop(viewportPageTop, viewportHeight, dockHeight, gap = KEYBOARD_DOCK_GAP_PX) {
  const top = Number(viewportPageTop);
  const height = Number(viewportHeight);
  const composerHeight = Number(dockHeight);
  const safeGap = Number(gap);
  if (![top, height, composerHeight, safeGap].every(Number.isFinite) || height <= 0 || composerHeight < 0) return 0;
  return Math.max(0, Math.round(top + height - composerHeight - Math.max(0, safeGap)));
}

function visualViewportPageTop(viewport) {
  const explicitPageTop = Number(viewport && viewport.pageTop);
  if (Number.isFinite(explicitPageTop)) return Math.max(0, Math.round(explicitPageTop));
  const offsetTop = Number(viewport && viewport.offsetTop) || 0;
  return Math.max(0, Math.round((window.scrollY || 0) + offsetTop));
}

function syncComposerViewport(viewport) {
  const rootStyle = document.documentElement.style;
  const viewportHeight = Number(viewport && viewport.height)
    || window.innerHeight
    || document.documentElement.clientHeight
    || 720;
  const pageTop = visualViewportPageTop(viewport);
  rootStyle.setProperty("--visual-viewport-page-top", `${pageTop}px`);
  rootStyle.setProperty("--visual-viewport-height", `${Math.max(240, Math.round(viewportHeight))}px`);
  if (!els.dock) return 0;
  const dockHeight = Math.max(0, Math.ceil(els.dock.getBoundingClientRect().height || 0));
  return calculateDockViewportTop(pageTop, viewportHeight, dockHeight, KEYBOARD_DOCK_GAP_PX);
}

function resetIosRootScroll(editableFocused) {
  if (!IS_IOS_DEVICE || !editableFocused) return false;
  const scrollingElement = document.scrollingElement;
  const scrollTop = Math.max(
    Number(window.scrollY || 0),
    Number(scrollingElement && scrollingElement.scrollTop || 0),
    Number(document.documentElement.scrollTop || 0),
    Number(document.body.scrollTop || 0)
  );
  if (scrollTop <= 0) return false;
  window.scrollTo(0, 0);
  if (scrollingElement) scrollingElement.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  return true;
}

function syncViewportMetrics({ refreshSubtitle = true } = {}) {
  const viewport = window.visualViewport;
  const viewportHeight =
    (viewport && viewport.height) ||
    window.innerHeight ||
    document.documentElement.clientHeight ||
    720;
  const safeHeight = Math.max(240, Math.round(viewportHeight));
  const layoutHeight = window.innerHeight || document.documentElement.clientHeight || safeHeight;
  const activeElement = document.activeElement;
  const editableFocused = Boolean(
    activeElement
    && activeElement !== document.body
    && (
      activeElement.matches("input, textarea, select, [contenteditable='true'], [contenteditable='']")
      || activeElement.isContentEditable
    )
  );
  const keyboardOpen = Boolean(viewport && editableFocused && layoutHeight - viewport.height > 120);
  const rawViewportTopOffset = Math.max(0, Math.round(viewport ? viewport.offsetTop || 0 : 0));
  const rawViewportBottomOffset = Math.max(0, Math.round(layoutHeight - safeHeight - (viewport ? viewport.offsetTop || 0 : 0)));
  const viewportTopOffset = keyboardOpen ? rawViewportTopOffset : 0;
  const viewportBottomOffset = keyboardOpen ? rawViewportBottomOffset : 0;
  const rootScrollReset = resetIosRootScroll(editableFocused);
  const viewportPageTop = visualViewportPageTop(viewport);
  syncComposerViewport(viewport);
  const viewportSignature = `${safeHeight}|${viewportTopOffset}|${viewportBottomOffset}|${viewportPageTop}|${keyboardOpen ? 1 : 0}`;
  if (viewportSignature !== lastViewportMetricsSignature) {
    const keyboardStateChanged = keyboardOpen !== lastKeyboardOpen;
    const wasPinnedToBottom = conversationPinnedToBottom || isConversationNearBottom();
    lastViewportMetricsSignature = viewportSignature;
    lastKeyboardOpen = keyboardOpen;
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty("--app-height", `${safeHeight}px`);
    rootStyle.setProperty("--viewport-top-offset", `${viewportTopOffset}px`);
    rootStyle.setProperty("--viewport-bottom-offset", `${viewportBottomOffset}px`);
    document.body.classList.toggle("keyboardOpen", keyboardOpen);
    updateConversationPinnedState();
    if (keyboardStateChanged || keyboardOpen) {
      scheduleConversationScroll({ allowed: wasPinnedToBottom });
    }
  }
  if (rootScrollReset) scheduleViewportMetrics({ refreshSubtitle: false });

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

function revealConversationMessage(id, options = {}) {
  const item = findConversationMessage(id);
  if (!item || !els.conversationStream) return;
  const block = options.block || "end";
  let attempts = 0;
  const reveal = () => {
    const scroller = els.conversationStream;
    if (!scroller) return;
    const itemHeight = item.offsetHeight || item.getBoundingClientRect().height || 0;
    const itemTop = item.offsetTop || 0;
    const itemBottom = itemTop + itemHeight;
    const maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    const dockHeight = els.dock ? Math.ceil(els.dock.getBoundingClientRect().height || 0) : 0;
    const bottomPadding = 44;
    const topPadding = 24;
    const target = block === "start"
      ? itemTop - topPadding
      : itemBottom - scroller.clientHeight + dockHeight + bottomPadding;
    scroller.scrollTop = Math.max(0, Math.min(maxScroll, target));
    conversationPinnedToBottom = isConversationNearBottom();
    attempts += 1;
    if (attempts < 4) requestAnimationFrame(reveal);
  };
  requestAnimationFrame(reveal);
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
  const value = (text || "").trim() || textFor("voice.defaultSubtitle", "我在。");
  const speaker = (options.speaker || lastSubtitleSpeaker || "IRIS").trim() || "IRIS";
  const renderSignature = `${speaker}\n${value}`;
  if (!options.resetFlow && renderSignature === lastSubtitleRenderSignature) return;
  lastSubtitleRenderSignature = renderSignature;
  scheduleViewportMetrics({ refreshSubtitle: false });
  const previousValue = lastSubtitleValue;
  const speakerChanged = speaker !== lastSubtitleSpeaker;

  if (options.speaker) setSubtitleSpeaker(speaker);
  if ((speaker === "你" || speaker.toLowerCase() === "you") && currentVisualState === "user_speaking") {
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
  if (role === "user") return textFor("role.user", "你");
  if (role === "file") return textFor("role.file", "文件");
  if (role === "system") return textFor("role.system", "状态");
  return "Iris";
}

function documentMessageKind(kind = "") {
  return String(kind || "").startsWith("document_") || kind === "uploading";
}

function normalizeDocumentDisplayLine(line) {
  return String(line || "")
    .replace(/^#{1,6}\s+/, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function appendDocumentInlineText(target, text) {
  const parts = String(text || "").split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  parts.forEach((part) => {
    const strongMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (strongMatch) {
      const strong = document.createElement("strong");
      strong.textContent = strongMatch[1];
      target.appendChild(strong);
      return;
    }
    target.appendChild(document.createTextNode(part));
  });
}

function documentLineClass(line, index) {
  const normalized = normalizeDocumentDisplayLine(line);
  if (!normalized) return "";
  if (/^-{3,}$/.test(normalized)) return "";
  if (/^[\-•]\s+/.test(normalized)) return "documentMessageBullet";
  if (/^\|.+\|$/.test(normalized)) return "documentMessageTableLine";
  if ((/[：:]$/.test(normalized) && normalized.length <= 18) || /^(要点|结构|来源|附件|Sources|Attachments|Key points|Outline)[：:]?$/i.test(normalized)) {
    return "documentMessageSectionTitle";
  }
  if (index === 0 || /^(我读完了|I’ve read|文件上传失败|File upload failed|PDF 上传失败|摘要失败|追问失败|正在)/.test(normalized)) {
    return "documentMessageLead";
  }
  return "documentMessageParagraph";
}

function renderDocumentMessageBody(body, text, options = {}) {
  const value = (text || "").trim();
  body.dataset.documentRender = "true";
  body.dataset.documentKind = options.kind || "";
  body.replaceChildren();
  const lines = value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) {
    body.textContent = " ";
    return;
  }
  lines.forEach((line, index) => {
    const className = documentLineClass(line, index);
    if (!className) return;
    const row = document.createElement("span");
    row.className = className;
    if (className === "documentMessageBullet") {
      appendDocumentInlineText(row, normalizeDocumentDisplayLine(line).replace(/^[\-•]\s+/, ""));
    } else if (className === "documentMessageTableLine") {
      const cells = normalizeDocumentDisplayLine(line)
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim())
        .filter(Boolean);
      if (/^-+$/.test(cells.join("").replace(/\s+/g, ""))) return;
      cells.slice(0, 3).forEach((cell) => {
        const chip = document.createElement("span");
        chip.className = "documentMessageCell";
        appendDocumentInlineText(chip, cell);
        row.appendChild(chip);
      });
    } else {
      appendDocumentInlineText(row, normalizeDocumentDisplayLine(line));
    }
    if (row.childNodes.length) body.appendChild(row);
  });
}

const REPLY_FIELD_KEYS = new Set([
  "收件人", "发件人", "抄送", "密送", "主题", "正文", "时间", "日期", "地点",
  "来源", "状态", "结果", "原因", "建议", "风险", "下一步", "温度", "天气",
  "是否下雨", "降雨", "降水概率", "风速", "湿度", "空气质量", "文件", "页码", "附件",
  "from", "to", "cc", "bcc", "subject", "body", "time", "date", "location",
  "source", "status", "result"
]);

function appendReplyInlineText(target, text) {
  const value = String(text || "");
  const tokenPattern = /(\*\*[^*\n]+\*\*|`[^`\n]+`|\[[^\]\n]+\]\(https?:\/\/[^)\s]+\))/g;
  let cursor = 0;
  for (const match of value.matchAll(tokenPattern)) {
    const index = Number(match.index || 0);
    if (index > cursor) target.appendChild(document.createTextNode(value.slice(cursor, index)));
    const token = match[0];
    if (token.startsWith("**")) {
      const strong = document.createElement("strong");
      strong.textContent = token.slice(2, -2);
      target.appendChild(strong);
    } else if (token.startsWith("`")) {
      const code = document.createElement("code");
      code.textContent = token.slice(1, -1);
      target.appendChild(code);
    } else {
      const parsed = token.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
      if (parsed) {
        const link = document.createElement("a");
        link.textContent = parsed[1];
        link.href = parsed[2];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        target.appendChild(link);
      } else {
        target.appendChild(document.createTextNode(token));
      }
    }
    cursor = index + token.length;
  }
  if (cursor < value.length) target.appendChild(document.createTextNode(value.slice(cursor)));
}

function replyFieldParts(line) {
  const match = String(line || "").match(/^\s*([^：:\n]{1,18})[：:]\s*(.*)$/);
  if (!match) return null;
  const key = match[1].trim();
  const value = match[2].trim();
  if (!value) return { key, value, section: key.length <= 16 };
  return (
    REPLY_FIELD_KEYS.has(key.toLowerCase())
    || (/^[\u3400-\u9fff]{1,3}$/.test(key))
  ) ? { key, value, section: false } : null;
}

function replyLineKind(line) {
  const value = String(line || "");
  const stripped = value.trim();
  if (!stripped) return "blank";
  if (/^\s{0,3}#{1,6}\s+\S/.test(value)) return "heading";
  if (/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(value)) return "rule";
  if (/^\s*\|.*\|\s*$/.test(value) && (stripped.match(/\|/g) || []).length >= 2) return "table";
  if (/^\s*[-+*•]\s+\S/.test(value)) return "unordered";
  if (/^\s*(?:\d{1,3}[.)、]|[一二三四五六七八九十]+[、.])\s*\S/.test(value)) return "ordered";
  if (/^\s*>\s?\S/.test(value)) return "quote";
  if (/^\s*[A-Z0-9]{6}\s*$/.test(value)) return "token";
  const field = replyFieldParts(value);
  if (field) return field.section ? "section" : "field";
  if (stripped.length <= 28 && /[：:]$/.test(stripped)) return "section";
  return "prose";
}

function replyNeedsJoiningSpace(left, right) {
  if (!left || !right) return false;
  const leftChar = left.slice(-1);
  const rightChar = right.charAt(0);
  if (/\s/.test(leftChar) || /\s/.test(rightChar)) return false;
  if (/[\(\[\{「『“‘]/.test(leftChar) || /[\)\]\}，。！？；：、,.!?;:」』”’]/.test(rightChar)) return false;
  return /[A-Za-z0-9]/.test(leftChar) || /[A-Za-z0-9]/.test(rightChar);
}

function joinReplyProseLines(lines) {
  return (lines || []).reduce((joined, line) => {
    const part = String(line || "").trim().replace(/[ \t]+/g, " ");
    if (!part) return joined;
    if (!joined) return part;
    return `${joined}${replyNeedsJoiningSpace(joined, part) ? " " : ""}${part}`;
  }, "");
}

function appendReplyParagraph(container, text, className = "replyParagraph") {
  const paragraph = document.createElement("p");
  paragraph.className = className;
  appendReplyInlineText(paragraph, String(text || "").trim());
  container.appendChild(paragraph);
}

function appendReplyTable(container, lines) {
  const rows = (lines || []).map((line) => String(line || "")
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim()));
  const separator = rows.length > 1 && rows[1].every((cell) => /^:?-{2,}:?$/.test(cell));
  const wrapper = document.createElement("div");
  wrapper.className = "replyTableWrap";
  wrapper.tabIndex = 0;
  wrapper.setAttribute("role", "region");
  wrapper.setAttribute("aria-label", currentLanguage === "en" ? "Response table" : "回复表格");
  const table = document.createElement("table");
  rows.forEach((cells, rowIndex) => {
    if (separator && rowIndex === 1) return;
    const row = document.createElement("tr");
    cells.forEach((cell) => {
      const node = document.createElement(separator && rowIndex === 0 ? "th" : "td");
      if (separator && rowIndex === 0) node.scope = "col";
      appendReplyInlineText(node, cell);
      row.appendChild(node);
    });
    table.appendChild(row);
  });
  wrapper.appendChild(table);
  container.appendChild(wrapper);
}

function renderAssistantReplyBody(body, text) {
  const value = String(text || "").trim();
  body.dataset.replyRender = "true";
  body.dataset.replyText = value;
  delete body.dataset.documentRender;
  delete body.dataset.documentKind;
  body.replaceChildren();
  if (!value) {
    body.textContent = " ";
    return;
  }
  const lines = value.replace(/\r\n?/g, "\n").split("\n");
  let index = 0;
  while (index < lines.length) {
    if (!lines[index].trim()) {
      index += 1;
      continue;
    }
    const kind = replyLineKind(lines[index]);
    if (/^\s*(`{3,}|~{3,})/.test(lines[index])) {
      const marker = lines[index].match(/^\s*(`{3,}|~{3,})/)[1][0];
      const language = lines[index].trim().replace(/^(`{3,}|~{3,})/, "").trim();
      const codeLines = [];
      index += 1;
      while (index < lines.length && !new RegExp(`^\\s*\\${marker}{3,}\\s*$`).test(lines[index])) {
        codeLines.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) index += 1;
      const pre = document.createElement("pre");
      pre.className = "replyCodeBlock";
      if (language) pre.dataset.language = language.slice(0, 24);
      const code = document.createElement("code");
      code.textContent = codeLines.join("\n");
      pre.appendChild(code);
      body.appendChild(pre);
      continue;
    }
    if (kind === "heading") {
      const match = lines[index].trim().match(/^(#{1,6})\s+(.+)$/);
      const heading = document.createElement("h3");
      heading.className = "replyHeading";
      heading.dataset.level = String(Math.min(3, match ? match[1].length : 1));
      appendReplyInlineText(heading, match ? match[2] : lines[index].trim());
      body.appendChild(heading);
      index += 1;
      continue;
    }
    if (kind === "section") {
      const field = replyFieldParts(lines[index]);
      appendReplyParagraph(
        body,
        field ? field.key : lines[index].trim().replace(/[：:]$/, ""),
        "replySectionLabel"
      );
      index += 1;
      continue;
    }
    if (kind === "rule") {
      const rule = document.createElement("hr");
      rule.className = "replyRule";
      body.appendChild(rule);
      index += 1;
      continue;
    }
    if (kind === "token") {
      const token = document.createElement("code");
      token.className = "replyConfirmationToken";
      token.textContent = lines[index].trim();
      body.appendChild(token);
      index += 1;
      continue;
    }
    if (kind === "unordered" || kind === "ordered") {
      const list = document.createElement(kind === "ordered" ? "ol" : "ul");
      list.className = "replyList";
      while (index < lines.length && replyLineKind(lines[index]) === kind) {
        const item = document.createElement("li");
        const itemText = lines[index]
          .replace(/^\s*[-+*•]\s+/, "")
          .replace(/^\s*(?:\d{1,3}[.)、]|[一二三四五六七八九十]+[、.])\s*/, "");
        appendReplyInlineText(item, itemText);
        list.appendChild(item);
        index += 1;
      }
      body.appendChild(list);
      continue;
    }
    if (kind === "quote") {
      const quoteLines = [];
      while (index < lines.length && replyLineKind(lines[index]) === "quote") {
        quoteLines.push(lines[index].replace(/^\s*>\s?/, ""));
        index += 1;
      }
      const quote = document.createElement("blockquote");
      quote.className = "replyQuote";
      appendReplyInlineText(quote, joinReplyProseLines(quoteLines));
      body.appendChild(quote);
      continue;
    }
    if (kind === "table") {
      const tableLines = [];
      while (index < lines.length && replyLineKind(lines[index]) === "table") {
        tableLines.push(lines[index]);
        index += 1;
      }
      appendReplyTable(body, tableLines);
      continue;
    }
    if (kind === "field") {
      const fields = document.createElement("dl");
      fields.className = "replyFields";
      while (index < lines.length && replyLineKind(lines[index]) === "field") {
        const field = replyFieldParts(lines[index]);
        if (!field) break;
        const term = document.createElement("dt");
        term.textContent = field.key;
        const definition = document.createElement("dd");
        appendReplyInlineText(definition, field.value);
        fields.append(term, definition);
        index += 1;
      }
      body.appendChild(fields);
      continue;
    }
    const prose = [];
    while (index < lines.length && replyLineKind(lines[index]) === "prose") {
      prose.push(lines[index]);
      index += 1;
    }
    appendReplyParagraph(body, joinReplyProseLines(prose));
  }
  if (!body.childNodes.length) body.textContent = value;
}

function messageBodySourceText(body) {
  if (!body) return "";
  return String(body.dataset.replyText || body.textContent || "").trim();
}

function boundedDocumentComparisonText(value, limit = 180) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, Math.max(1, Math.min(Number(limit) || 180, 480)));
}

function clientDocumentEvidenceAction(value) {
  const source = value && typeof value === "object" ? value : {};
  const endpoint = boundedDocumentComparisonText(source.endpoint, 360);
  const method = boundedDocumentComparisonText(source.method || "GET", 12).toUpperCase();
  if (
    method !== "GET"
    || !/^\/client\/v1\/documents\/[A-Za-z0-9_-]{1,160}\/evidence\/[A-Za-z0-9_.-]{1,160}$/.test(endpoint)
  ) {
    return null;
  }
  const rawQuery = source.query && typeof source.query === "object" ? source.query : {};
  const query = {};
  ["user_id", "client_id"].forEach((key) => {
    const text = boundedDocumentComparisonText(rawQuery[key], 160);
    if (text) query[key] = text;
  });
  return { endpoint, method: "GET", query };
}

function clientDocumentComparisonPayload(actionPayloads) {
  const source = actionPayloads && typeof actionPayloads === "object"
    ? actionPayloads.document_comparison
    : null;
  if (!source || typeof source !== "object") return null;

  const documentIds = Array.from(new Set(
    (Array.isArray(source.document_ids) ? source.document_ids : [])
      .map((value) => boundedDocumentComparisonText(value, 160))
      .filter(Boolean)
  )).slice(0, 12);
  const documents = [];
  const seenDocuments = new Set();
  (Array.isArray(source.documents) ? source.documents : []).slice(0, 12).forEach((item) => {
    if (!item || typeof item !== "object") return;
    const id = boundedDocumentComparisonText(item.id, 160);
    const filename = boundedDocumentComparisonText(item.filename || id, 180);
    const identity = id || filename;
    if (!identity || seenDocuments.has(identity)) return;
    seenDocuments.add(identity);
    documents.push({
      id,
      filename,
      documentType: boundedDocumentComparisonText(item.document_type, 80)
    });
  });
  documentIds.forEach((id) => {
    if (seenDocuments.has(id)) return;
    seenDocuments.add(id);
    documents.push({ id, filename: id, documentType: "" });
  });

  const citations = (Array.isArray(source.citations) ? source.citations : [])
    .slice(0, 16)
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const filename = boundedDocumentComparisonText(item.filename, 180);
      const label = boundedDocumentComparisonText(
        item.citation_label || item.source_label || item.chunk_id,
        260
      );
      if (!filename && !label) return [];
      const documentId = boundedDocumentComparisonText(item.document_id, 160);
      const chunkId = boundedDocumentComparisonText(item.chunk_id, 160);
      return [{
        documentId,
        filename,
        label: label || filename,
        chunkId,
        page: Number.isFinite(Number(item.page)) ? Math.max(1, Math.floor(Number(item.page))) : null,
        evidenceAction: clientDocumentEvidenceAction(item.evidence_action || item.evidence)
      }];
    });
  const conflicts = (Array.isArray(source.conflicts) ? source.conflicts : [])
    .slice(0, 8)
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const field = boundedDocumentComparisonText(item.field || item.field_key, 100);
      const values = (Array.isArray(item.values) ? item.values : [])
        .slice(0, 8)
        .flatMap((value) => {
          if (!value || typeof value !== "object") return [];
          const displayValue = boundedDocumentComparisonText(value.value, 180);
          if (!displayValue) return [];
          const documentId = boundedDocumentComparisonText(value.document_id, 160);
          const chunkId = boundedDocumentComparisonText(value.chunk_id, 160);
          return [{
            value: displayValue,
            documentId,
            filename: boundedDocumentComparisonText(value.filename, 180),
            chunkId,
            label: boundedDocumentComparisonText(
              value.citation_label || value.source_label || value.chunk_id,
              260
            ),
            evidenceAction: clientDocumentEvidenceAction(value.evidence_action || value.evidence)
          }];
        });
      if (!field || values.length < 2) return [];
      return [{ field, values }];
    });

  if (documents.length < 2 && !citations.length && !conflicts.length) return null;
  const supportedStatuses = new Set(["SUPPORTED", "CONFLICT", "PARTIAL_EVIDENCE", "INSUFFICIENT_EVIDENCE"]);
  const rawStatus = boundedDocumentComparisonText(source.verification_status, 64).toUpperCase();
  const mode = boundedDocumentComparisonText(source.mode, 40) === "project_knowledge"
    ? "project_knowledge"
    : "comparison";
  return {
    documents: documents.slice(0, 12),
    documentIds,
    citations,
    conflicts,
    mode,
    comparisonReady: Boolean(source.comparison_ready),
    verificationStatus: supportedStatuses.has(rawStatus)
      ? rawStatus
      : (conflicts.length ? "CONFLICT" : citations.length ? "SUPPORTED" : "INSUFFICIENT_EVIDENCE")
  };
}

function clientMultiIntentPayload(actionPayloads) {
  const source = actionPayloads && typeof actionPayloads === "object"
    ? actionPayloads.multi_intent
    : null;
  if (!source || typeof source !== "object") return null;

  const allowedCapabilities = new Set(["calendar", "mail"]);
  const allowedStatuses = new Set(["succeeded", "failed"]);
  const seenCapabilities = new Set();
  const items = (Array.isArray(source.items) ? source.items : [])
    .slice(0, 4)
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const capability = boundedDocumentComparisonText(item.capability, 32).toLowerCase();
      const status = boundedDocumentComparisonText(item.status, 32).toLowerCase();
      if (
        !allowedCapabilities.has(capability)
        || !allowedStatuses.has(status)
        || seenCapabilities.has(capability)
      ) {
        return [];
      }
      seenCapabilities.add(capability);
      return [{
        capability,
        status,
        operationId: boundedDocumentComparisonText(item.operation_id, 160),
        verified: Boolean(item.verified),
        durationMs: Math.max(0, Math.min(Number(item.duration_ms) || 0, 3600000)),
        errorCode: boundedDocumentComparisonText(item.error_code, 120)
      }];
    });
  if (items.length < 2) return null;

  const completedCount = items.filter((item) => item.status === "succeeded").length;
  const failedCount = items.length - completedCount;
  const status = failedCount === 0 ? "complete" : completedCount === 0 ? "failed" : "partial";
  return {
    planId: boundedDocumentComparisonText(source.plan_id, 80),
    mode: "parallel_read",
    status,
    items,
    completedCount,
    failedCount,
    totalCount: items.length,
    sideEffect: false,
    requiresConfirmation: false
  };
}

function clientResearchVerificationPayload(actionPayloads) {
  const source = actionPayloads && typeof actionPayloads === "object"
    ? actionPayloads.research_verification
    : null;
  if (!source || typeof source !== "object") return null;
  const supportedStatuses = new Set([
    "SUPPORTED",
    "CONFLICT",
    "PARTIAL_EVIDENCE",
    "INSUFFICIENT_EVIDENCE"
  ]);
  const verificationStatus = boundedDocumentComparisonText(source.verification_status, 64).toUpperCase();
  if (!supportedStatuses.has(verificationStatus)) return null;
  const documents = (Array.isArray(source.documents) ? source.documents : [])
    .slice(0, 4)
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const id = boundedDocumentComparisonText(item.id, 160);
      const filename = boundedDocumentComparisonText(item.filename || id, 180);
      if (!id && !filename) return [];
      return [{
        id,
        filename,
        documentType: boundedDocumentComparisonText(item.document_type, 80)
      }];
    });
  const citations = (Array.isArray(source.document_citations) ? source.document_citations : [])
    .slice(0, 16)
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const filename = boundedDocumentComparisonText(item.filename, 180);
      const label = boundedDocumentComparisonText(
        item.citation_label || item.source_label || item.chunk_id,
        260
      );
      if (!filename && !label) return [];
      return [{
        documentId: boundedDocumentComparisonText(item.document_id, 160),
        filename,
        label: label || filename,
        chunkId: boundedDocumentComparisonText(item.chunk_id, 160),
        page: Number.isFinite(Number(item.page)) ? Math.max(1, Math.floor(Number(item.page))) : null,
        evidenceAction: clientDocumentEvidenceAction(item.evidence_action || item.evidence)
      }];
    });
  const webSources = (Array.isArray(source.web_sources) ? source.web_sources : [])
    .slice(0, 10)
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const rawUrl = boundedDocumentComparisonText(item.url, 480);
      let parsed;
      try {
        parsed = new URL(rawUrl);
      } catch (_) {
        return [];
      }
      if (!["http:", "https:"].includes(parsed.protocol)) return [];
      return [{
        title: boundedDocumentComparisonText(item.title || parsed.hostname, 260),
        url: parsed.href,
        domain: boundedDocumentComparisonText(item.domain || parsed.hostname, 160),
        published: boundedDocumentComparisonText(item.published, 80)
      }];
    });
  const allowedStepStatuses = new Set(["succeeded", "failed"]);
  const steps = (Array.isArray(source.steps) ? source.steps : [])
    .slice(0, 2)
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const capability = boundedDocumentComparisonText(item.capability, 32).toLowerCase();
      const status = boundedDocumentComparisonText(item.status, 32).toLowerCase();
      if (!["document", "web"].includes(capability) || !allowedStepStatuses.has(status)) return [];
      return [{ capability, status, verified: Boolean(item.verified) }];
    });
  if (steps.length !== 2 || !documents.length) return null;
  return {
    planId: boundedDocumentComparisonText(source.plan_id, 80),
    verificationStatus,
    summary: boundedDocumentComparisonText(source.summary, 1200),
    agreements: (Array.isArray(source.agreements) ? source.agreements : [])
      .map((value) => boundedDocumentComparisonText(value, 320))
      .filter(Boolean)
      .slice(0, 6),
    conflicts: (Array.isArray(source.conflicts) ? source.conflicts : [])
      .map((value) => boundedDocumentComparisonText(value, 320))
      .filter(Boolean)
      .slice(0, 6),
    limitations: (Array.isArray(source.limitations) ? source.limitations : [])
      .map((value) => boundedDocumentComparisonText(value, 320))
      .filter(Boolean)
      .slice(0, 6),
    documents,
    citations,
    webSources,
    steps,
    sideEffect: false,
    requiresConfirmation: false
  };
}

function clientDeepResearchPayload(actionPayloads) {
  const source = actionPayloads && typeof actionPayloads === "object"
    ? actionPayloads.deep_research
    : null;
  if (!source || typeof source !== "object") return null;
  const allowedStatuses = new Set(["COMPLETE", "PARTIAL", "INSUFFICIENT_EVIDENCE"]);
  const rawStatus = boundedDocumentComparisonText(source.status, 64).toUpperCase();
  if (!allowedStatuses.has(rawStatus)) return null;

  const sourceRows = (Array.isArray(source.sources) ? source.sources : [])
    .slice(0, 24)
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const sourceId = boundedDocumentComparisonText(item.source_id, 40).replace(/[^A-Za-z0-9_-]/g, "");
      const rawUrl = boundedDocumentComparisonText(item.url, 1200);
      let parsed;
      try {
        parsed = new URL(rawUrl);
      } catch (_) {
        return [];
      }
      const trustTier = boundedDocumentComparisonText(item.trust_tier, 16).toLowerCase();
      const sourceRole = boundedDocumentComparisonText(item.source_role, 24).toLowerCase();
      if (
        !sourceId
        || !["http:", "https:"].includes(parsed.protocol)
        || !["high", "medium", "low"].includes(trustTier)
        || !["primary", "authoritative", "secondary", "low_quality"].includes(sourceRole)
      ) {
        return [];
      }
      return [{
        sourceId,
        title: boundedDocumentComparisonText(item.title || parsed.hostname, 260),
        url: parsed.href,
        domain: boundedDocumentComparisonText(item.domain || parsed.hostname, 160),
        published: boundedDocumentComparisonText(item.published, 80),
        trustTier,
        sourceRole,
        authorityScore: Math.max(0, Math.min(100, Number(item.authority_score) || 0))
      }];
    });
  const dedupedSources = [];
  const sourceById = new Map();
  sourceRows.forEach((sourceItem) => {
    if (sourceById.has(sourceItem.sourceId)) return;
    sourceById.set(sourceItem.sourceId, sourceItem);
    dedupedSources.push(sourceItem);
  });

  const claims = (Array.isArray(source.claims) ? source.claims : [])
    .slice(0, 4)
    .flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const questionId = boundedDocumentComparisonText(item.question_id, 40).replace(/[^A-Za-z0-9_-]/g, "");
      let status = boundedDocumentComparisonText(item.status, 24).toUpperCase();
      if (!questionId || !["SUPPORTED", "CONFLICT", "OPEN"].includes(status)) return [];
      const sourceIds = (Array.isArray(item.source_ids) ? item.source_ids : [])
        .map((value) => boundedDocumentComparisonText(value, 40).replace(/[^A-Za-z0-9_-]/g, ""))
        .filter((value, index, values) => value && sourceById.has(value) && values.indexOf(value) === index)
        .slice(0, 6);
      if (status !== "OPEN" && !sourceIds.length) status = "OPEN";
      return [{
        claimId: boundedDocumentComparisonText(item.claim_id, 40).replace(/[^A-Za-z0-9_-]/g, ""),
        questionId,
        question: boundedDocumentComparisonText(item.question, 320),
        status,
        conclusion: boundedDocumentComparisonText(item.conclusion, 1600),
        sourceIds,
        caveats: (Array.isArray(item.caveats) ? item.caveats : [])
          .map((value) => boundedDocumentComparisonText(value, 320))
          .filter(Boolean)
          .slice(0, 4)
      }];
    });
  if (claims.length < 2) return null;
  const verifiedCount = claims.filter((item) => item.status !== "OPEN").length;
  const normalizedStatus = verifiedCount === 0
    ? "INSUFFICIENT_EVIDENCE"
    : verifiedCount === claims.length
      ? "COMPLETE"
      : "PARTIAL";
  const budget = source.budget && typeof source.budget === "object" ? source.budget : {};
  return {
    planId: boundedDocumentComparisonText(source.plan_id, 80),
    topic: boundedDocumentComparisonText(source.topic, 600),
    status: normalizedStatus,
    executiveSummary: boundedDocumentComparisonText(source.executive_summary, 2400),
    claims,
    sources: dedupedSources,
    coverageRatio: claims.length ? verifiedCount / claims.length : 0,
    limitations: (Array.isArray(source.limitations) ? source.limitations : [])
      .map((value) => boundedDocumentComparisonText(value, 320))
      .filter(Boolean)
      .slice(0, 6),
    budget: {
      searchesPlanned: Math.max(0, Math.min(4, Number(budget.searches_planned) || claims.length)),
      searchesExecuted: Math.max(0, Math.min(4, Number(budget.searches_executed) || 0)),
      searchesSucceeded: Math.max(0, Math.min(4, Number(budget.searches_succeeded) || 0)),
      sourceCount: dedupedSources.length,
      modelCalls: Math.max(0, Math.min(8, Number(budget.model_calls) || 0)),
      wallTimeMs: Math.max(0, Math.min(90000, Number(budget.wall_time_ms) || 0)),
      budgetExhausted: Boolean(budget.budget_exhausted)
    },
    sideEffect: false,
    requiresConfirmation: false
  };
}

function documentComparisonStatusMeta(status = "", mode = "comparison") {
  const en = currentLanguage === "en";
  const projectKnowledge = mode === "project_knowledge";
  const value = String(status || "").toUpperCase();
  if (value === "CONFLICT") {
    return {
      label: en ? "Differences found" : "发现差异",
      description: en ? "Conflicting values remain separate." : "冲突值保持分开，没有被自动合并。",
      tone: "conflict"
    };
  }
  if (value === "PARTIAL_EVIDENCE") {
    return {
      label: en ? "Partial evidence" : "部分证据",
      description: projectKnowledge
        ? (en ? "The answer uses only project files with relevant evidence." : "本次回答只使用检索到相关证据的项目文件。")
        : (en ? "Some files did not provide enough evidence." : "部分文件没有检索到足够证据。"),
      tone: "partial"
    };
  }
  if (value === "INSUFFICIENT_EVIDENCE") {
    return {
      label: en ? "Evidence needed" : "证据不足",
      description: projectKnowledge
        ? (en ? "Project files do not support this answer yet." : "当前项目文件还不足以支持这个回答。")
        : (en ? "The current files cannot support a reliable comparison." : "当前文件还不足以支持可靠比较。"),
      tone: "insufficient"
    };
  }
  return {
    label: en ? "Evidence aligned" : "证据一致",
    description: projectKnowledge
      ? (en ? "The cited project evidence supports this answer." : "本轮项目证据支持这个回答。")
      : (en ? "The cited evidence supports this comparison." : "本轮引用证据支持这次比较。"),
    tone: "supported"
  };
}

function documentComparisonFileLabel(item = {}) {
  return boundedDocumentComparisonText(
    item.filename || item.id,
    180
  ) || (currentLanguage === "en" ? "Document" : "文件");
}

function appendDocumentComparisonValue(target, item = {}, { compact = false } = {}) {
  const row = document.createElement("div");
  row.className = compact ? "documentComparisonValue isCompact" : "documentComparisonValue";
  const value = document.createElement("strong");
  value.textContent = item.value || "—";
  const source = document.createElement("span");
  source.textContent = item.filename || item.label || (currentLanguage === "en" ? "Document" : "文件");
  row.append(value, source);
  target.appendChild(row);
}

function clientDocumentPreviewAction(value) {
  const source = value && typeof value === "object" ? value : {};
  const endpoint = boundedDocumentComparisonText(source.endpoint, 360);
  const method = boundedDocumentComparisonText(source.method || "GET", 12).toUpperCase();
  if (
    method !== "GET"
    || !/^\/client\/v1\/documents\/[A-Za-z0-9_-]{1,160}\/pages\/[1-9]\d{0,5}\/render$/.test(endpoint)
  ) {
    return null;
  }
  const rawQuery = source.query && typeof source.query === "object" ? source.query : {};
  const query = {};
  ["user_id", "client_id"].forEach((key) => {
    const text = boundedDocumentComparisonText(rawQuery[key], 160);
    if (text) query[key] = text;
  });
  return { endpoint, method: "GET", query };
}

function releaseDocumentEvidenceResources(dialog) {
  if (!dialog) return;
  if (dialog._irisEvidenceAbortController) {
    dialog._irisEvidenceAbortController.abort();
    dialog._irisEvidenceAbortController = null;
  }
  if (dialog._irisEvidenceObjectUrl) {
    URL.revokeObjectURL(dialog._irisEvidenceObjectUrl);
    dialog._irisEvidenceObjectUrl = "";
  }
  dialog._irisEvidenceRequestId = "";
}

function resetDocumentEvidenceOverview(dialog, payload, { restoreFocus = false } = {}) {
  if (!dialog || !payload) return;
  releaseDocumentEvidenceResources(dialog);
  const overview = dialog.querySelector(".documentEvidenceOverview");
  const inspector = dialog.querySelector(".documentEvidenceInspector");
  if (overview) overview.hidden = false;
  if (inspector) {
    inspector.hidden = true;
    inspector.replaceChildren();
  }
  const status = documentComparisonStatusMeta(payload.verificationStatus);
  const title = dialog.querySelector("#documentEvidenceTitle");
  const description = dialog.querySelector("#documentEvidenceDescription");
  if (title) {
    title.textContent = currentLanguage === "en"
      ? `${payload.documents.length} files checked`
      : `已核对 ${payload.documents.length} 份文件`;
  }
  if (description) description.textContent = status.description;
  dialog.dataset.view = "overview";
  if (
    restoreFocus
    && dialog._irisCitationFocus
    && dialog._irisCitationFocus.isConnected
    && typeof dialog._irisCitationFocus.focus === "function"
  ) {
    dialog._irisCitationFocus.focus({ preventScroll: true });
  }
}

function closeDocumentEvidenceDialog(dialog = document.getElementById("documentEvidenceDialog")) {
  if (!dialog || !dialog.open || dialog.dataset.state === "closing") return;
  dialog.dataset.state = "closing";
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finish = () => {
    releaseDocumentEvidenceResources(dialog);
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    dialog.dataset.state = "closed";
    document.body.classList.remove("documentEvidenceOpen");
    const returnFocus = dialog._irisReturnFocus;
    dialog._irisReturnFocus = null;
    dialog._irisCitationFocus = null;
    if (returnFocus && typeof returnFocus.focus === "function" && returnFocus.isConnected) {
      returnFocus.focus({ preventScroll: true });
    }
  };
  window.clearTimeout(dialog._irisCloseTimer || 0);
  dialog._irisCloseTimer = window.setTimeout(finish, reducedMotion ? 80 : 170);
}

function ensureDocumentEvidenceDialog() {
  let dialog = document.getElementById("documentEvidenceDialog");
  if (dialog) return dialog;
  dialog = document.createElement("dialog");
  dialog.id = "documentEvidenceDialog";
  dialog.className = "documentEvidenceDialog";
  dialog.setAttribute("aria-labelledby", "documentEvidenceTitle");
  dialog.setAttribute("aria-describedby", "documentEvidenceDescription");
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDocumentEvidenceDialog(dialog);
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDocumentEvidenceDialog(dialog);
  });
  document.body.appendChild(dialog);
  return dialog;
}

function documentEvidenceLocation(evidence = {}) {
  const parts = [];
  const page = Number(evidence.page);
  if (Number.isFinite(page) && page > 0) {
    parts.push(currentLanguage === "en" ? `Page ${Math.floor(page)}` : `第 ${Math.floor(page)} 页`);
  }
  const section = boundedDocumentComparisonText(evidence.section, 180);
  if (section) parts.push(section);
  const label = boundedDocumentComparisonText(evidence.citation_label || evidence.source_label, 260);
  if (label && !parts.includes(label)) parts.push(label);
  return parts.join(" · ") || (currentLanguage === "en" ? "Exact source unit" : "精确来源单元");
}

function appendDocumentEvidenceTables(target, tables) {
  const items = Array.isArray(tables) ? tables.slice(0, 4) : [];
  if (!items.length) return;
  const section = document.createElement("section");
  section.className = "documentEvidenceSourceSection";
  const heading = document.createElement("h3");
  heading.textContent = currentLanguage === "en" ? "Table evidence" : "表格证据";
  section.appendChild(heading);
  items.forEach((table) => {
    if (!table || typeof table !== "object") return;
    const card = document.createElement("article");
    card.className = "documentEvidenceTable";
    const label = document.createElement("strong");
    label.textContent = boundedDocumentComparisonText(
      table.citation_label || table.table_id,
      260
    ) || (currentLanguage === "en" ? "Table" : "表格");
    card.appendChild(label);
    const headers = Array.isArray(table.headers) ? table.headers.slice(0, 8) : [];
    if (headers.length) {
      const row = document.createElement("p");
      row.className = "documentEvidenceTableHeader";
      row.textContent = headers.map((value) => boundedDocumentComparisonText(value, 120)).join(" · ");
      card.appendChild(row);
    }
    const rows = Array.isArray(table.rows) ? table.rows.slice(0, 5) : [];
    rows.forEach((values) => {
      if (!Array.isArray(values)) return;
      const row = document.createElement("p");
      row.textContent = values.slice(0, 8)
        .map((value) => boundedDocumentComparisonText(value, 160))
        .join(" · ");
      card.appendChild(row);
    });
    section.appendChild(card);
  });
  target.appendChild(section);
}

function appendDocumentEvidenceFigures(target, figures) {
  const items = Array.isArray(figures) ? figures.slice(0, 4) : [];
  if (!items.length) return;
  const section = document.createElement("section");
  section.className = "documentEvidenceSourceSection";
  const heading = document.createElement("h3");
  heading.textContent = currentLanguage === "en" ? "Figure evidence" : "图片证据";
  section.appendChild(heading);
  items.forEach((figure) => {
    if (!figure || typeof figure !== "object") return;
    const item = document.createElement("p");
    item.className = "documentEvidenceFigure";
    item.textContent = boundedDocumentComparisonText(
      figure.caption || figure.citation_label || figure.label || figure.figure_id,
      1000
    );
    if (item.textContent) section.appendChild(item);
  });
  if (section.childElementCount > 1) target.appendChild(section);
}

function renderDocumentEvidenceInspectorShell(dialog, payload, citation, state = "loading") {
  const overview = dialog.querySelector(".documentEvidenceOverview");
  const inspector = dialog.querySelector(".documentEvidenceInspector");
  if (!inspector) return null;
  if (overview) overview.hidden = true;
  inspector.hidden = false;
  inspector.dataset.state = state;
  inspector.replaceChildren();
  dialog.dataset.view = "source";

  const title = dialog.querySelector("#documentEvidenceTitle");
  const description = dialog.querySelector("#documentEvidenceDescription");
  if (title) {
    title.textContent = citation.filename || (currentLanguage === "en" ? "Source evidence" : "来源证据");
  }
  if (description) {
    description.textContent = citation.label || (currentLanguage === "en" ? "Exact cited unit" : "引用的精确内容单元");
  }

  const toolbar = document.createElement("div");
  toolbar.className = "documentEvidenceSourceToolbar";
  const back = document.createElement("button");
  back.type = "button";
  back.className = "documentEvidenceBack";
  back.textContent = currentLanguage === "en" ? "Back" : "返回证据";
  back.addEventListener("click", () => resetDocumentEvidenceOverview(dialog, payload, { restoreFocus: true }));
  const location = document.createElement("span");
  location.textContent = citation.label || (citation.page
    ? (currentLanguage === "en" ? `Page ${citation.page}` : `第 ${citation.page} 页`)
    : (currentLanguage === "en" ? "Exact source" : "精确来源"));
  toolbar.append(back, location);
  inspector.appendChild(toolbar);
  return { inspector, back };
}

function renderDocumentEvidenceError(dialog, payload, citation, message) {
  const shell = renderDocumentEvidenceInspectorShell(dialog, payload, citation, "error");
  if (!shell) return;
  const error = document.createElement("div");
  error.className = "documentEvidenceSourceState";
  error.setAttribute("role", "alert");
  const title = document.createElement("strong");
  title.textContent = currentLanguage === "en" ? "Source unavailable" : "暂时无法读取来源";
  const detail = document.createElement("p");
  detail.textContent = boundedDocumentComparisonText(message, 300)
    || (currentLanguage === "en" ? "Please retry in a moment." : "请稍后重试。");
  error.append(title, detail);
  shell.inspector.appendChild(error);
}

async function appendDocumentEvidencePreview(dialog, target, preview, requestId) {
  const action = clientDocumentPreviewAction(preview && preview.action);
  if (!action || !preview.available) return;
  const section = document.createElement("section");
  section.className = "documentEvidenceSourceSection";
  const heading = document.createElement("h3");
  heading.textContent = currentLanguage === "en" ? "Original page" : "原页定位";
  const state = document.createElement("p");
  state.className = "documentEvidencePreviewState";
  state.textContent = currentLanguage === "en" ? "Loading page preview…" : "正在加载原页…";
  section.append(heading, state);
  target.appendChild(section);
  try {
    const response = await fetch(documentApiUrl(action.endpoint, action.query), {
      method: "GET",
      headers: authHeaders(),
      cache: "no-store",
      signal: dialog._irisEvidenceAbortController
        ? dialog._irisEvidenceAbortController.signal
        : undefined
    });
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(`preview_${response.status}`);
    }
    const blob = await response.blob();
    if (dialog._irisEvidenceRequestId !== requestId) return;
    const objectUrl = URL.createObjectURL(blob);
    if (dialog._irisEvidenceObjectUrl) URL.revokeObjectURL(dialog._irisEvidenceObjectUrl);
    dialog._irisEvidenceObjectUrl = objectUrl;
    const figure = document.createElement("figure");
    figure.className = "documentEvidencePreview";
    const stage = document.createElement("div");
    stage.className = "documentEvidencePreviewStage";
    const sourceWidth = Number(preview.width);
    const sourceHeight = Number(preview.height);
    if (
      Number.isFinite(sourceWidth)
      && Number.isFinite(sourceHeight)
      && sourceWidth > 0
      && sourceHeight > 0
    ) {
      stage.style.setProperty("--document-preview-aspect", `${sourceWidth} / ${sourceHeight}`);
    }
    const image = document.createElement("img");
    image.alt = currentLanguage === "en" ? "Rendered cited source page" : "引用来源原页";
    image.addEventListener("load", () => {
      if (
        !stage.style.getPropertyValue("--document-preview-aspect")
        && image.naturalWidth > 0
        && image.naturalHeight > 0
      ) {
        stage.style.setProperty(
          "--document-preview-aspect",
          `${image.naturalWidth} / ${image.naturalHeight}`
        );
      }
    }, { once: true });
    image.src = objectUrl;
    stage.appendChild(image);
    const highlights = Array.isArray(preview.highlights) ? preview.highlights.slice(0, 16) : [];
    highlights.forEach((item) => {
      const bbox = item && Array.isArray(item.bbox) ? item.bbox.map(Number) : [];
      if (
        bbox.length < 4
        || bbox.some((value) => !Number.isFinite(value))
        || bbox[2] <= bbox[0]
        || bbox[3] <= bbox[1]
      ) return;
      const x0 = Math.max(0, Math.min(1, bbox[0]));
      const y0 = Math.max(0, Math.min(1, bbox[1]));
      const x1 = Math.max(0, Math.min(1, bbox[2]));
      const y1 = Math.max(0, Math.min(1, bbox[3]));
      if (x1 <= x0 || y1 <= y0) return;
      const highlight = document.createElement("span");
      highlight.className = "documentEvidenceHighlight";
      highlight.style.left = `${x0 * 100}%`;
      highlight.style.top = `${y0 * 100}%`;
      highlight.style.width = `${(x1 - x0) * 100}%`;
      highlight.style.height = `${(y1 - y0) * 100}%`;
      stage.appendChild(highlight);
    });
    figure.appendChild(stage);
    state.replaceWith(figure);
  } catch (error) {
    if (error && error.name === "AbortError") return;
    state.textContent = currentLanguage === "en"
      ? "The text evidence is available, but this page preview could not be rendered."
      : "文字证据已读取，但原页预览暂时无法生成。";
  }
}

async function openDocumentEvidenceCitation(dialog, payload, citation, opener) {
  const action = citation && citation.evidenceAction;
  if (!dialog || !payload || !action) return;
  releaseDocumentEvidenceResources(dialog);
  dialog._irisCitationFocus = opener || null;
  const requestId = `evidence_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  dialog._irisEvidenceRequestId = requestId;
  dialog._irisEvidenceAbortController = typeof AbortController !== "undefined"
    ? new AbortController()
    : null;
  const shell = renderDocumentEvidenceInspectorShell(dialog, payload, citation, "loading");
  if (!shell) return;
  const loading = document.createElement("div");
  loading.className = "documentEvidenceSourceState";
  loading.setAttribute("role", "status");
  loading.setAttribute("aria-live", "polite");
  const loadingTitle = document.createElement("strong");
  loadingTitle.textContent = currentLanguage === "en" ? "Reading exact source" : "正在读取精确来源";
  const loadingCopy = document.createElement("p");
  loadingCopy.textContent = currentLanguage === "en"
    ? "Retrieving the cited unit without loading the whole document."
    : "只读取这条引用对应的内容单元，不加载整份文件。";
  loading.append(loadingTitle, loadingCopy);
  shell.inspector.appendChild(loading);
  shell.back.focus({ preventScroll: true });

  try {
    const response = await fetch(documentApiUrl(action.endpoint, action.query), {
      method: "GET",
      headers: authHeaders(),
      cache: "no-store",
      signal: dialog._irisEvidenceAbortController
        ? dialog._irisEvidenceAbortController.signal
        : undefined
    });
    const responsePayload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      const detail = responsePayload && responsePayload.detail;
      throw new Error(
        typeof detail === "string"
          ? detail
          : (detail && detail.error) || `evidence_${response.status}`
      );
    }
    if (dialog._irisEvidenceRequestId !== requestId) return;
    const evidence = responsePayload && responsePayload.evidence && typeof responsePayload.evidence === "object"
      ? responsePayload.evidence
      : null;
    if (!evidence) throw new Error("evidence_payload_missing");
    const ready = renderDocumentEvidenceInspectorShell(dialog, payload, citation, "ready");
    if (!ready) return;

    const meta = document.createElement("div");
    meta.className = "documentEvidenceSourceMeta";
    const locator = document.createElement("strong");
    locator.textContent = documentEvidenceLocation(evidence);
    const type = document.createElement("span");
    type.textContent = [
      boundedDocumentComparisonText(evidence.document_type, 80),
      evidence.ocr_low_confidence
        ? (currentLanguage === "en" ? "Low OCR confidence" : "OCR 置信度较低")
        : ""
    ].filter(Boolean).join(" · ");
    meta.append(locator, type);
    ready.inspector.appendChild(meta);

    const excerpt = document.createElement("section");
    excerpt.className = "documentEvidenceSourceSection";
    const heading = document.createElement("h3");
    heading.textContent = currentLanguage === "en" ? "Exact excerpt" : "证据原文";
    const text = document.createElement("p");
    text.className = "documentEvidenceExcerpt";
    text.textContent = String(evidence.text || "").trim()
      || (currentLanguage === "en" ? "No text was stored for this structural unit." : "这个结构单元没有可展示的文字。");
    excerpt.append(heading, text);
    ready.inspector.appendChild(excerpt);
    appendDocumentEvidenceTables(ready.inspector, evidence.tables);
    appendDocumentEvidenceFigures(ready.inspector, evidence.figures);
    await appendDocumentEvidencePreview(dialog, ready.inspector, evidence.preview || {}, requestId);
  } catch (error) {
    if (error && error.name === "AbortError") return;
    if (dialog._irisEvidenceRequestId !== requestId) return;
    renderDocumentEvidenceError(dialog, payload, citation, error && error.message);
  }
}

function renderDocumentEvidenceDialog(dialog, payload) {
  const status = documentComparisonStatusMeta(payload.verificationStatus);
  releaseDocumentEvidenceResources(dialog);
  dialog.replaceChildren();
  dialog.dataset.tone = status.tone;
  dialog.dataset.view = "overview";
  dialog._irisEvidencePayload = payload;

  const sheet = document.createElement("section");
  sheet.className = "documentEvidenceSheet";

  const header = document.createElement("header");
  header.className = "documentEvidenceHeader";
  const titleBlock = document.createElement("div");
  const eyebrow = document.createElement("p");
  eyebrow.className = "documentEvidenceEyebrow";
  eyebrow.textContent = currentLanguage === "en" ? "DOCUMENT WORKSPACE" : "DOCUMENT WORKSPACE";
  const title = document.createElement("h2");
  title.id = "documentEvidenceTitle";
  title.textContent = currentLanguage === "en"
    ? `${payload.documents.length} files checked`
    : `已核对 ${payload.documents.length} 份文件`;
  const description = document.createElement("p");
  description.id = "documentEvidenceDescription";
  description.className = "documentEvidenceDescription";
  description.textContent = status.description;
  titleBlock.append(eyebrow, title, description);
  const close = document.createElement("button");
  close.type = "button";
  close.className = "documentEvidenceClose";
  close.setAttribute("aria-label", currentLanguage === "en" ? "Close evidence" : "关闭证据");
  close.textContent = "×";
  close.addEventListener("click", () => closeDocumentEvidenceDialog(dialog));
  header.append(titleBlock, close);
  sheet.appendChild(header);

  const overview = document.createElement("div");
  overview.className = "documentEvidenceOverview";

  const statusRow = document.createElement("div");
  statusRow.className = "documentEvidenceStatus";
  statusRow.dataset.tone = status.tone;
  const statusDot = document.createElement("span");
  statusDot.setAttribute("aria-hidden", "true");
  const statusLabel = document.createElement("strong");
  statusLabel.textContent = status.label;
  const counts = document.createElement("span");
  counts.textContent = currentLanguage === "en"
    ? `${payload.citations.length} citations · ${payload.conflicts.length} conflicts`
    : `${payload.citations.length} 条引用 · ${payload.conflicts.length} 组差异`;
  statusRow.append(statusDot, statusLabel, counts);
  overview.appendChild(statusRow);

  const files = document.createElement("div");
  files.className = "documentEvidenceFiles";
  files.setAttribute("aria-label", currentLanguage === "en" ? "Compared files" : "参与比较的文件");
  payload.documents.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "documentEvidenceFile";
    chip.textContent = documentComparisonFileLabel(item);
    files.appendChild(chip);
  });
  overview.appendChild(files);

  const content = document.createElement("div");
  content.className = "documentEvidenceContent";
  if (payload.conflicts.length) {
    const section = document.createElement("section");
    section.className = "documentEvidenceSection";
    const heading = document.createElement("h3");
    heading.textContent = currentLanguage === "en" ? "Differences preserved" : "保留的差异";
    section.appendChild(heading);
    payload.conflicts.forEach((conflict) => {
      const card = document.createElement("article");
      card.className = "documentEvidenceConflict";
      const field = document.createElement("h4");
      field.textContent = conflict.field;
      const values = document.createElement("div");
      values.className = "documentEvidenceConflictValues";
      conflict.values.forEach((value) => appendDocumentComparisonValue(values, value));
      card.append(field, values);
      section.appendChild(card);
    });
    content.appendChild(section);
  }

  const citationSection = document.createElement("section");
  citationSection.className = "documentEvidenceSection";
  const citationHeading = document.createElement("h3");
  citationHeading.textContent = currentLanguage === "en" ? "Citations" : "引用位置";
  citationSection.appendChild(citationHeading);
  const citationList = document.createElement("ol");
  citationList.className = "documentEvidenceCitations";
  if (payload.citations.length) {
    payload.citations.forEach((citation) => {
      const row = document.createElement("li");
      const sourceControl = document.createElement(citation.evidenceAction ? "button" : "div");
      sourceControl.className = citation.evidenceAction
        ? "documentEvidenceCitationButton"
        : "documentEvidenceCitationStatic";
      if (citation.evidenceAction) {
        sourceControl.type = "button";
        sourceControl.setAttribute(
          "aria-label",
          currentLanguage === "en"
            ? `Open source ${citation.filename || citation.label || ""}`.trim()
            : `查看来源 ${citation.filename || citation.label || ""}`.trim()
        );
      }
      const filename = document.createElement("strong");
      filename.textContent = citation.filename || (currentLanguage === "en" ? "Document" : "文件");
      const label = document.createElement("span");
      label.textContent = citation.label || (citation.page
        ? (currentLanguage === "en" ? `Page ${citation.page}` : `第 ${citation.page} 页`)
        : (currentLanguage === "en" ? "Location available" : "位置已记录"));
      sourceControl.append(filename, label);
      if (citation.evidenceAction) {
        const arrow = document.createElement("span");
        arrow.className = "documentEvidenceCitationArrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "›";
        sourceControl.appendChild(arrow);
        sourceControl.addEventListener("click", () => {
          openDocumentEvidenceCitation(dialog, payload, citation, sourceControl);
        });
      }
      row.appendChild(sourceControl);
      citationList.appendChild(row);
    });
  } else {
    const empty = document.createElement("li");
    empty.className = "isEmpty";
    empty.textContent = currentLanguage === "en"
      ? "No reliable citation was returned for this comparison."
      : "这次比较没有返回可可靠展示的引用位置。";
    citationList.appendChild(empty);
  }
  citationSection.appendChild(citationList);
  content.appendChild(citationSection);
  overview.appendChild(content);

  const note = document.createElement("p");
  note.className = "documentEvidenceNote";
  note.textContent = currentLanguage === "en"
    ? "Evidence comes from this retrieval turn. Conflicting values are never merged automatically."
    : "证据来自本轮文件检索；冲突值不会被自动合并。";
  overview.appendChild(note);
  sheet.appendChild(overview);
  const inspector = document.createElement("section");
  inspector.className = "documentEvidenceInspector";
  inspector.hidden = true;
  sheet.appendChild(inspector);
  dialog.appendChild(sheet);
}

function openDocumentEvidenceDialog(payload, opener = null) {
  if (!payload) return;
  const dialog = ensureDocumentEvidenceDialog();
  window.clearTimeout(dialog._irisCloseTimer || 0);
  dialog._irisReturnFocus = opener || document.activeElement;
  renderDocumentEvidenceDialog(dialog, payload);
  dialog.dataset.state = "opening";
  document.body.classList.add("documentEvidenceOpen");
  if (!dialog.open) {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }
  window.requestAnimationFrame(() => {
    dialog.dataset.state = "open";
    const close = dialog.querySelector(".documentEvidenceClose");
    if (close) close.focus({ preventScroll: true });
  });
}

function appendDocumentComparisonCard(item, payload) {
  if (!item || !payload) return;
  const projectKnowledge = payload.mode === "project_knowledge";
  const status = documentComparisonStatusMeta(payload.verificationStatus, payload.mode);
  const card = document.createElement("section");
  card.className = "documentComparisonCard";
  card.dataset.tone = status.tone;
  card.setAttribute(
    "aria-label",
    projectKnowledge
      ? (currentLanguage === "en" ? "Project knowledge evidence" : "项目知识证据")
      : (currentLanguage === "en" ? "Document comparison evidence" : "文件比较证据")
  );

  const header = document.createElement("div");
  header.className = "documentComparisonHeader";
  const heading = document.createElement("div");
  const kicker = document.createElement("span");
  kicker.className = "documentComparisonKicker";
  kicker.textContent = projectKnowledge ? "PROJECT KNOWLEDGE" : "DOCUMENT WORKSPACE";
  const title = document.createElement("strong");
  title.textContent = projectKnowledge
    ? (currentLanguage === "en"
      ? `${payload.documents.length} project files searched`
      : `已检索 ${payload.documents.length} 份项目文件`)
    : (currentLanguage === "en"
      ? `${payload.documents.length} files checked`
      : `已核对 ${payload.documents.length} 份文件`);
  heading.append(kicker, title);
  const statusChip = document.createElement("span");
  statusChip.className = "documentComparisonStatus";
  statusChip.textContent = status.label;
  header.append(heading, statusChip);
  card.appendChild(header);

  const files = document.createElement("div");
  files.className = "documentComparisonFiles";
  payload.documents.slice(0, 4).forEach((documentItem) => {
    const chip = document.createElement("span");
    chip.textContent = documentComparisonFileLabel(documentItem);
    files.appendChild(chip);
  });
  if (payload.documents.length > 4) {
    const more = document.createElement("span");
    more.textContent = `+${payload.documents.length - 4}`;
    files.appendChild(more);
  }
  card.appendChild(files);

  if (payload.conflicts.length) {
    const preview = document.createElement("div");
    preview.className = "documentComparisonPreview";
    payload.conflicts.slice(0, 2).forEach((conflict) => {
      const row = document.createElement("div");
      const field = document.createElement("span");
      field.textContent = conflict.field;
      const values = document.createElement("div");
      conflict.values.slice(0, 3).forEach((value) => appendDocumentComparisonValue(values, value, { compact: true }));
      row.append(field, values);
      preview.appendChild(row);
    });
    card.appendChild(preview);
  } else {
    const summary = document.createElement("p");
    summary.className = "documentComparisonSummary";
    summary.textContent = status.description;
    card.appendChild(summary);
  }

  const footer = document.createElement("div");
  footer.className = "documentComparisonFooter";
  const counts = document.createElement("span");
  counts.textContent = currentLanguage === "en"
    ? `${payload.citations.length} citations`
    : `${payload.citations.length} 条引用`;
  const open = document.createElement("button");
  open.type = "button";
  open.className = "documentComparisonOpen";
  open.textContent = currentLanguage === "en" ? "View evidence" : "查看证据";
  open.setAttribute("aria-haspopup", "dialog");
  open.addEventListener("click", () => openDocumentEvidenceDialog(payload, open));
  footer.append(counts, open);
  card.appendChild(footer);
  item.appendChild(card);
}

function multiIntentStatusMeta(payload) {
  const en = currentLanguage === "en";
  if (payload.status === "partial") {
    return {
      label: en ? "Partly complete" : "部分完成",
      title: en
        ? `${payload.completedCount} of ${payload.totalCount} completed`
        : `${payload.completedCount}/${payload.totalCount} 项已完成`,
      tone: "partial"
    };
  }
  if (payload.status === "failed") {
    return {
      label: en ? "Unavailable" : "未完成",
      title: en ? "Neither read completed" : `${payload.totalCount} 项均未完成`,
      tone: "failed"
    };
  }
  return {
    label: en ? "Complete" : "已完成",
    title: en
      ? `${payload.totalCount} reads completed together`
      : `${payload.totalCount} 项已一起处理`,
    tone: "complete"
  };
}

function multiIntentCapabilityMeta(capability) {
  const en = currentLanguage === "en";
  if (capability === "calendar") {
    return {
      title: en ? "Calendar" : "日历",
      detail: en ? "Schedule read" : "日程读取",
      symbol: "日"
    };
  }
  return {
    title: en ? "Mail" : "邮件",
    detail: en ? "Inbox read" : "收件箱读取",
    symbol: "邮"
  };
}

function appendMultiIntentCard(item, payload) {
  if (!item || !payload) return;
  const status = multiIntentStatusMeta(payload);
  const card = document.createElement("section");
  card.className = "multiIntentCard";
  card.dataset.tone = status.tone;
  card.setAttribute("aria-label", currentLanguage === "en" ? "Multi-step read result" : "多步骤读取结果");

  const header = document.createElement("div");
  header.className = "multiIntentHeader";
  const heading = document.createElement("div");
  const kicker = document.createElement("span");
  kicker.className = "multiIntentKicker";
  kicker.textContent = "TOGETHER";
  const title = document.createElement("strong");
  title.textContent = status.title;
  heading.append(kicker, title);
  const chip = document.createElement("span");
  chip.className = "multiIntentStatus";
  chip.textContent = status.label;
  header.append(heading, chip);
  card.appendChild(header);

  const list = document.createElement("div");
  list.className = "multiIntentList";
  payload.items.forEach((result) => {
    const capability = multiIntentCapabilityMeta(result.capability);
    const row = document.createElement("div");
    row.className = "multiIntentRow";
    row.dataset.status = result.status;
    const symbol = document.createElement("span");
    symbol.className = "multiIntentSymbol";
    symbol.textContent = capability.symbol;
    symbol.setAttribute("aria-hidden", "true");
    const copy = document.createElement("span");
    copy.className = "multiIntentCopy";
    const name = document.createElement("strong");
    name.textContent = capability.title;
    const detail = document.createElement("span");
    detail.textContent = capability.detail;
    copy.append(name, detail);
    const resultLabel = document.createElement("span");
    resultLabel.className = "multiIntentResult";
    resultLabel.textContent = result.status === "succeeded"
      ? (currentLanguage === "en" ? "Done" : "完成")
      : (currentLanguage === "en" ? "Unavailable" : "未完成");
    row.append(symbol, copy, resultLabel);
    list.appendChild(row);
  });
  card.appendChild(list);

  const footer = document.createElement("p");
  footer.className = "multiIntentFooter";
  footer.textContent = currentLanguage === "en"
    ? "Read-only · Nothing was changed"
    : "只读操作 · 没有修改日历或邮箱";
  card.appendChild(footer);
  item.appendChild(card);
}

function researchVerificationStatusMeta(status = "") {
  const en = currentLanguage === "en";
  const value = String(status || "").toUpperCase();
  if (value === "SUPPORTED") {
    return {
      label: en ? "Supported" : "得到支持",
      title: en ? "Sources align" : "文件与公开来源一致",
      tone: "supported"
    };
  }
  if (value === "CONFLICT") {
    return {
      label: en ? "Conflict" : "发现冲突",
      title: en ? "Sources disagree" : "文件与公开来源不一致",
      tone: "conflict"
    };
  }
  if (value === "INSUFFICIENT_EVIDENCE") {
    return {
      label: en ? "Insufficient" : "证据不足",
      title: en ? "Unable to verify" : "暂时无法可靠核验",
      tone: "insufficient"
    };
  }
  return {
    label: en ? "Partial" : "部分核验",
    title: en ? "More evidence needed" : "仍需要更多证据",
    tone: "partial"
  };
}

function appendResearchVerificationCard(item, payload) {
  if (!item || !payload) return;
  const status = researchVerificationStatusMeta(payload.verificationStatus);
  const card = document.createElement("section");
  card.className = "researchVerificationCard";
  card.dataset.tone = status.tone;
  card.setAttribute("aria-label", currentLanguage === "en" ? "Evidence verification" : "联合证据核验");

  const header = document.createElement("div");
  header.className = "researchVerificationHeader";
  const copy = document.createElement("div");
  const kicker = document.createElement("span");
  kicker.className = "researchVerificationKicker";
  kicker.textContent = "EVIDENCE CHECK";
  const title = document.createElement("strong");
  title.textContent = status.title;
  copy.append(kicker, title);
  const chip = document.createElement("span");
  chip.className = "researchVerificationStatus";
  chip.textContent = status.label;
  header.append(copy, chip);
  card.appendChild(header);

  const flow = document.createElement("div");
  flow.className = "researchVerificationFlow";
  payload.steps.forEach((step, index) => {
    const stage = document.createElement("div");
    stage.className = "researchVerificationStage";
    stage.dataset.status = step.status;
    const marker = document.createElement("span");
    marker.className = "researchVerificationStageMarker";
    marker.textContent = step.capability === "document" ? "文" : "网";
    const stageCopy = document.createElement("span");
    const stageName = document.createElement("strong");
    stageName.textContent = step.capability === "document"
      ? (currentLanguage === "en" ? "Document" : "文件证据")
      : (currentLanguage === "en" ? "Web" : "公开来源");
    const stageState = document.createElement("span");
    stageState.textContent = step.status === "succeeded"
      ? (currentLanguage === "en" ? "Read" : "已读取")
      : (currentLanguage === "en" ? "Unavailable" : "未完成");
    stageCopy.append(stageName, stageState);
    stage.append(marker, stageCopy);
    flow.appendChild(stage);
    if (index < payload.steps.length - 1) {
      const connector = document.createElement("span");
      connector.className = "researchVerificationConnector";
      connector.setAttribute("aria-hidden", "true");
      connector.textContent = "→";
      flow.appendChild(connector);
    }
  });
  card.appendChild(flow);

  if (payload.webSources.length) {
    const sources = document.createElement("div");
    sources.className = "researchVerificationSources";
    payload.webSources.slice(0, 3).forEach((source) => {
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "researchVerificationSource";
      const sourceTitle = document.createElement("strong");
      sourceTitle.textContent = source.title || source.domain;
      const sourceDomain = document.createElement("span");
      sourceDomain.textContent = source.domain || new URL(source.url).hostname;
      link.append(sourceTitle, sourceDomain);
      sources.appendChild(link);
    });
    card.appendChild(sources);
  }

  const footer = document.createElement("div");
  footer.className = "researchVerificationFooter";
  const counts = document.createElement("span");
  counts.textContent = currentLanguage === "en"
    ? `${payload.citations.length} document citations · ${payload.webSources.length} web sources`
    : `${payload.citations.length} 条文件引用 · ${payload.webSources.length} 个公开来源`;
  footer.appendChild(counts);
  if (payload.citations.length) {
    const open = document.createElement("button");
    open.type = "button";
    open.className = "researchVerificationOpen";
    open.textContent = currentLanguage === "en" ? "Document evidence" : "查看文件证据";
    open.setAttribute("aria-haspopup", "dialog");
    const evidencePayload = {
      documents: payload.documents,
      documentIds: payload.documents.map((documentItem) => documentItem.id).filter(Boolean),
      citations: payload.citations,
      conflicts: [],
      mode: "project_knowledge",
      comparisonReady: true,
      verificationStatus: payload.verificationStatus
    };
    open.addEventListener("click", () => openDocumentEvidenceDialog(evidencePayload, open));
    footer.appendChild(open);
  }
  card.appendChild(footer);
  item.appendChild(card);
}

function deepResearchStatusMeta(status = "") {
  const en = currentLanguage === "en";
  if (String(status || "").toUpperCase() === "COMPLETE") {
    return {
      label: en ? "Complete" : "研究完成",
      title: en ? "Evidence map complete" : "证据地图已完成",
      tone: "complete"
    };
  }
  if (String(status || "").toUpperCase() === "INSUFFICIENT_EVIDENCE") {
    return {
      label: en ? "Insufficient" : "证据不足",
      title: en ? "Research needs sources" : "研究尚缺可靠来源",
      tone: "insufficient"
    };
  }
  return {
    label: en ? "Partial" : "部分完成",
    title: en ? "Open questions remain" : "仍有问题等待确认",
    tone: "partial"
  };
}

function deepResearchClaimMeta(status = "") {
  const en = currentLanguage === "en";
  const value = String(status || "").toUpperCase();
  if (value === "SUPPORTED") {
    return { label: en ? "Supported" : "已支持", tone: "supported" };
  }
  if (value === "CONFLICT") {
    return { label: en ? "Conflict" : "有冲突", tone: "conflict" };
  }
  return { label: en ? "Open" : "待确认", tone: "open" };
}

function deepResearchSourceRoleLabel(role = "") {
  const en = currentLanguage === "en";
  const labels = {
    primary: en ? "Primary" : "一手来源",
    authoritative: en ? "Authority" : "权威来源",
    secondary: en ? "Secondary" : "二手来源",
    low_quality: en ? "Low confidence" : "低可信"
  };
  return labels[role] || labels.secondary;
}

function deepResearchMarkdownText(value = "") {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\s+/g, " ")
    .trim();
}

function deepResearchMarkdown(payload) {
  const en = currentLanguage === "en";
  const status = deepResearchStatusMeta(payload.status);
  const sourceById = new Map(payload.sources.map((source) => [source.sourceId, source]));
  const lines = [
    `# ${deepResearchMarkdownText(payload.topic || status.title)}`,
    "",
    `> ${status.label} · ${Math.round(payload.coverageRatio * 100)}% ${en ? "evidence coverage" : "证据覆盖"}`,
    ""
  ];
  if (payload.executiveSummary) {
    lines.push(en ? "## Executive summary" : "## 执行摘要", "", deepResearchMarkdownText(payload.executiveSummary), "");
  }
  lines.push(en ? "## Findings" : "## 研究结论", "");
  payload.claims.forEach((claim, index) => {
    const claimMeta = deepResearchClaimMeta(claim.status);
    lines.push(
      `### ${index + 1}. ${deepResearchMarkdownText(claim.question)}`,
      "",
      `**${en ? "Status" : "状态"}:** ${claimMeta.label}`,
      "",
      deepResearchMarkdownText(claim.conclusion),
      ""
    );
    if (claim.caveats.length) {
      lines.push(`**${en ? "Caveats" : "限制"}:**`);
      claim.caveats.forEach((caveat) => lines.push(`- ${deepResearchMarkdownText(caveat)}`));
      lines.push("");
    }
    const claimSources = claim.sourceIds.map((sourceId) => sourceById.get(sourceId)).filter(Boolean);
    if (claimSources.length) {
      lines.push(`**${en ? "Evidence" : "证据"}:**`);
      claimSources.forEach((source) => {
        lines.push(`- [${deepResearchMarkdownText(source.title || source.domain)}](${source.url})`);
      });
      lines.push("");
    }
  });
  if (payload.limitations.length) {
    lines.push(en ? "## Limitations" : "## 研究局限", "");
    payload.limitations.forEach((limitation) => lines.push(`- ${deepResearchMarkdownText(limitation)}`));
    lines.push("");
  }
  if (payload.sources.length) {
    lines.push(en ? "## Sources" : "## 来源", "");
    payload.sources.forEach((source, index) => {
      const title = deepResearchMarkdownText(source.title || source.domain);
      const meta = `${deepResearchSourceRoleLabel(source.sourceRole)} · ${Math.round(source.authorityScore)}/100`;
      lines.push(`${index + 1}. [${title}](${source.url}) — ${meta}`);
    });
    lines.push("");
  }
  lines.push(
    "---",
    en
      ? `Read-only research · ${payload.budget.searchesSucceeded}/${payload.budget.searchesExecuted} searches completed`
      : `只读研究 · ${payload.budget.searchesSucceeded}/${payload.budget.searchesExecuted} 个检索已完成`
  );
  return `${lines.join("\n").trim()}\n`;
}

function deepResearchDownloadFilename(topic = "") {
  const safeTopic = String(topic || "iris-deep-research")
    .normalize("NFKC")
    .replace(/[\\/:*?"<>|\u0000-\u001F]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[.-]+|[.-]+$/g, "")
    .slice(0, 72);
  return `${safeTopic || "iris-deep-research"}.md`;
}

function downloadDeepResearchMarkdown(payload) {
  const blob = new Blob([deepResearchMarkdown(payload)], { type: "text/markdown;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = deepResearchDownloadFilename(payload.topic);
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
}

function deepResearchContinuePrompt(payload) {
  const questions = payload.claims
    .filter((claim) => claim.status === "OPEN")
    .map((claim) => claim.question)
    .filter(Boolean)
    .slice(0, 4);
  if (!questions.length) return "";
  if (currentLanguage === "en") {
    return `Continue deep research on "${payload.topic}". Prioritize these unresolved questions: ${questions.join("; ")}`;
  }
  return `继续深度研究“${payload.topic}”，优先查证这些尚未确认的问题：${questions.join("；")}`;
}

function appendDeepResearchSource(parent, source) {
  const link = document.createElement("a");
  link.href = source.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "deepResearchSource";
  link.dataset.role = source.sourceRole;
  const marker = document.createElement("span");
  marker.className = "deepResearchSourceScore";
  marker.textContent = String(Math.round(source.authorityScore));
  const sourceCopy = document.createElement("span");
  const sourceTitle = document.createElement("strong");
  sourceTitle.textContent = source.title || source.domain;
  const sourceMeta = document.createElement("span");
  sourceMeta.textContent = `${deepResearchSourceRoleLabel(source.sourceRole)} · ${source.domain}`;
  sourceCopy.append(sourceTitle, sourceMeta);
  link.append(marker, sourceCopy);
  parent.appendChild(link);
}

function appendDeepResearchCard(item, payload) {
  if (!item || !payload) return;
  const status = deepResearchStatusMeta(payload.status);
  const sourceById = new Map(payload.sources.map((source) => [source.sourceId, source]));
  const card = document.createElement("section");
  card.className = "deepResearchCard";
  card.dataset.tone = status.tone;
  card.setAttribute("aria-label", currentLanguage === "en" ? "Deep research report" : "深度研究报告");

  const header = document.createElement("div");
  header.className = "deepResearchHeader";
  const heading = document.createElement("div");
  const kicker = document.createElement("span");
  kicker.className = "deepResearchKicker";
  kicker.textContent = "DEEP RESEARCH";
  const title = document.createElement("strong");
  title.textContent = payload.topic || status.title;
  const subtitle = document.createElement("span");
  subtitle.textContent = status.title;
  heading.append(kicker, title, subtitle);
  const statusChip = document.createElement("span");
  statusChip.className = "deepResearchStatus";
  statusChip.textContent = status.label;
  header.append(heading, statusChip);
  card.appendChild(header);

  const metrics = document.createElement("div");
  metrics.className = "deepResearchMetrics";
  const metricValues = [
    {
      value: `${Math.round(payload.coverageRatio * 100)}%`,
      label: currentLanguage === "en" ? "coverage" : "证据覆盖"
    },
    {
      value: String(payload.claims.length),
      label: currentLanguage === "en" ? "questions" : "研究问题"
    },
    {
      value: String(payload.sources.length),
      label: currentLanguage === "en" ? "sources" : "公开来源"
    }
  ];
  metricValues.forEach((metric) => {
    const node = document.createElement("span");
    const value = document.createElement("strong");
    value.textContent = metric.value;
    const label = document.createElement("small");
    label.textContent = metric.label;
    node.append(value, label);
    metrics.appendChild(node);
  });
  const coverage = document.createElement("span");
  coverage.className = "deepResearchCoverage";
  coverage.style.setProperty("--research-coverage", `${Math.round(payload.coverageRatio * 100)}%`);
  coverage.setAttribute("aria-hidden", "true");
  metrics.prepend(coverage);
  card.appendChild(metrics);

  if (payload.executiveSummary) {
    const summary = document.createElement("p");
    summary.className = "deepResearchSummary";
    summary.textContent = payload.executiveSummary;
    card.appendChild(summary);
  }

  const claims = document.createElement("div");
  claims.className = "deepResearchClaims";
  payload.claims.forEach((claim, index) => {
    const claimMeta = deepResearchClaimMeta(claim.status);
    const row = document.createElement("article");
    row.className = "deepResearchClaim";
    row.dataset.tone = claimMeta.tone;
    const claimHead = document.createElement("div");
    const number = document.createElement("span");
    number.className = "deepResearchClaimNumber";
    number.textContent = String(index + 1).padStart(2, "0");
    const question = document.createElement("strong");
    question.textContent = claim.question;
    const claimStatus = document.createElement("span");
    claimStatus.className = "deepResearchClaimStatus";
    claimStatus.textContent = claimMeta.label;
    claimHead.append(number, question, claimStatus);
    row.appendChild(claimHead);

    const conclusion = document.createElement("p");
    conclusion.textContent = claim.conclusion;
    row.appendChild(conclusion);

    if (claim.caveats.length) {
      const caveats = document.createElement("ul");
      caveats.className = "deepResearchCaveats";
      claim.caveats.forEach((caveat) => {
        const entry = document.createElement("li");
        entry.textContent = caveat;
        caveats.appendChild(entry);
      });
      row.appendChild(caveats);
    }

    const claimSources = claim.sourceIds
      .map((sourceId) => sourceById.get(sourceId))
      .filter(Boolean)
      .slice(0, 3);
    if (claimSources.length) {
      const references = document.createElement("div");
      references.className = "deepResearchClaimSources";
      claimSources.forEach((source) => {
        const link = document.createElement("a");
        link.href = source.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = source.domain || source.title;
        link.title = source.title;
        references.appendChild(link);
      });
      row.appendChild(references);
    }
    claims.appendChild(row);
  });
  card.appendChild(claims);

  if (payload.limitations.length) {
    const limitations = document.createElement("section");
    limitations.className = "deepResearchLimitations";
    const title = document.createElement("strong");
    title.textContent = currentLanguage === "en" ? "Research limitations" : "研究局限";
    const list = document.createElement("ul");
    payload.limitations.forEach((limitation) => {
      const entry = document.createElement("li");
      entry.textContent = limitation;
      list.appendChild(entry);
    });
    limitations.append(title, list);
    card.appendChild(limitations);
  }

  if (payload.sources.length) {
    const registry = document.createElement("div");
    registry.className = "deepResearchSources";
    const registryTitle = document.createElement("span");
    registryTitle.className = "deepResearchSourcesTitle";
    registryTitle.textContent = currentLanguage === "en" ? "Source quality" : "来源质量";
    registry.appendChild(registryTitle);
    payload.sources.slice(0, 5).forEach((source) => appendDeepResearchSource(registry, source));
    if (payload.sources.length > 5) {
      const disclosure = document.createElement("details");
      disclosure.className = "deepResearchSourcesDisclosure";
      const summary = document.createElement("summary");
      const remaining = payload.sources.length - 5;
      summary.textContent = currentLanguage === "en"
        ? `Show ${remaining} more sources`
        : `查看其余 ${remaining} 个来源`;
      const additional = document.createElement("div");
      additional.className = "deepResearchSourcesMore";
      payload.sources.slice(5).forEach((source) => appendDeepResearchSource(additional, source));
      disclosure.append(summary, additional);
      registry.appendChild(disclosure);
    }
    card.appendChild(registry);
  }

  const actions = document.createElement("div");
  actions.className = "deepResearchActions";
  const actionStatus = document.createElement("span");
  actionStatus.className = "deepResearchActionStatus";
  actionStatus.setAttribute("role", "status");
  actionStatus.setAttribute("aria-live", "polite");
  const setActionStatus = (message, tone = "") => {
    actionStatus.textContent = message;
    actionStatus.dataset.tone = tone;
  };
  const copy = document.createElement("button");
  copy.type = "button";
  copy.className = "deepResearchAction";
  copy.textContent = currentLanguage === "en" ? "Copy report" : "复制报告";
  copy.addEventListener("click", async () => {
    copy.disabled = true;
    try {
      await writeDiagnosticsClipboard(deepResearchMarkdown(payload));
      setActionStatus(currentLanguage === "en" ? "Report copied" : "报告已复制", "success");
    } catch (_) {
      setActionStatus(currentLanguage === "en" ? "Copy failed" : "复制失败", "error");
    } finally {
      copy.disabled = false;
    }
  });
  const download = document.createElement("button");
  download.type = "button";
  download.className = "deepResearchAction";
  download.textContent = currentLanguage === "en" ? "Download .md" : "下载 .md";
  download.addEventListener("click", () => {
    try {
      downloadDeepResearchMarkdown(payload);
      setActionStatus(currentLanguage === "en" ? "Markdown downloaded" : "Markdown 已下载", "success");
    } catch (_) {
      setActionStatus(currentLanguage === "en" ? "Download failed" : "下载失败", "error");
    }
  });
  actions.append(copy, download);
  const continuePrompt = deepResearchContinuePrompt(payload);
  if (continuePrompt) {
    const continueResearch = document.createElement("button");
    continueResearch.type = "button";
    continueResearch.className = "deepResearchAction deepResearchContinue";
    continueResearch.textContent = currentLanguage === "en" ? "Continue research" : "继续查证";
    continueResearch.addEventListener("click", () => {
      continueResearch.disabled = true;
      setActionStatus(currentLanguage === "en" ? "Continuing research…" : "正在继续查证…", "loading");
      sendTextPrompt(continuePrompt).then((succeeded) => {
        continueResearch.disabled = false;
        setActionStatus(
          succeeded
            ? (currentLanguage === "en" ? "Follow-up research started" : "已发起新一轮查证")
            : (currentLanguage === "en" ? "Unable to continue" : "继续查证失败"),
          succeeded ? "success" : "error"
        );
      });
    });
    actions.appendChild(continueResearch);
  }
  actions.appendChild(actionStatus);
  card.appendChild(actions);

  const footer = document.createElement("p");
  footer.className = "deepResearchFooter";
  footer.textContent = currentLanguage === "en"
    ? `Read-only · ${payload.budget.searchesSucceeded}/${payload.budget.searchesExecuted} searches completed`
    : `只读研究 · ${payload.budget.searchesSucceeded}/${payload.budget.searchesExecuted} 个检索已完成`;
  card.appendChild(footer);
  item.appendChild(card);
}

function setMessageBodyText(body, text, options = {}) {
  if (!body) return;
  const kind = options.kind || "";
  const value = options.preserveText
    ? (String(text || "") || " ")
    : ((text || "").trim() || " ");
  body.dataset.replyText = String(value || "").trim();
  if (options.role === "file" || documentMessageKind(kind)) {
    delete body.dataset.replyRender;
    renderDocumentMessageBody(body, value, options);
    return;
  }
  if (options.role === "assistant" && !options.preserveText && !options.streamState) {
    renderAssistantReplyBody(body, value);
    return;
  }
  delete body.dataset.replyRender;
  delete body.dataset.documentRender;
  delete body.dataset.documentKind;
  body.textContent = value;
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
  if (options.streamState) item.dataset.streamState = String(options.streamState);
  if (options.turnId) item.dataset.turnId = String(options.turnId);
  if (Number.isInteger(options.historyIndex) && options.historyIndex >= 0) {
    item.dataset.historyIndex = String(options.historyIndex);
  }
  if (options.kind) item.dataset.kind = options.kind;
  const meta = document.createElement("p");
  meta.className = "messageMeta";
  meta.textContent = options.label || conversationRoleLabel(role);
  const thinking = role === "assistant" ? clientThinkingPayload(options.thinking) : null;
  if (thinking && thinking.applied && thinking.requested_mode !== "auto") {
    item.dataset.thinkingMode = thinking.resolved_mode;
    const badge = document.createElement("span");
    badge.className = "messageThinkingBadge";
    badge.dataset.mode = thinking.resolved_mode;
    badge.textContent = thinkingModeCopy(thinking.resolved_mode).native;
    badge.setAttribute(
      "title",
      currentLanguage === "en"
        ? `${thinkingModeCopy(thinking.resolved_mode).name} applied`
        : `已使用${thinkingModeCopy(thinking.resolved_mode).name}`
    );
    meta.appendChild(badge);
  }
  const body = document.createElement("div");
  body.className = "messageText";
  setMessageBodyText(body, value || " ", { ...options, role });
  item.append(meta, body);
  if (role === "assistant" && options.documentComparison) {
    appendDocumentComparisonCard(item, options.documentComparison);
  }
  if (role === "assistant" && options.multiIntent) {
    appendMultiIntentCard(item, options.multiIntent);
  }
  if (role === "assistant" && options.researchVerification) {
    appendResearchVerificationCard(item, options.researchVerification);
  }
  if (role === "assistant" && options.deepResearch) {
    appendDeepResearchCard(item, options.deepResearch);
  }
  if (Array.isArray(options.actions) && options.actions.length) {
    const actions = document.createElement("div");
    actions.className = "messageActions";
    actions.setAttribute("role", "group");
    actions.setAttribute("aria-label", currentLanguage === "en" ? "Message actions" : "消息操作");
    options.actions.forEach((action, index) => actions.appendChild(decorateMessageActionButton(action, index)));
    const feedback = document.createElement("p");
    feedback.className = "messageActionFeedback";
    feedback.dataset.tone = "idle";
    feedback.setAttribute("role", "status");
    feedback.setAttribute("aria-live", "polite");
    const hasRemoteAction = options.actions.some((button) => button && button.dataset && button.dataset.remoteAction === "true");
    feedback.textContent = String(options.actionHint || "").trim() || (
      hasRemoteAction
        ? (currentLanguage === "en" ? "Nothing happens until you confirm." : "确认后才会执行。")
        : (currentLanguage === "en" ? "Choose an action when ready." : "需要时选择一个操作。")
    );
    actions.appendChild(feedback);
    item.appendChild(actions);
  }
  if (role === "assistant" && options.feedbackTarget) {
    attachMessageFeedbackControls(item, options.feedbackTarget);
  }
  if (role === "user" && options.editableTarget) {
    attachUserMessageEditControls(item, options.editableTarget);
  }
  if (options.beforeElement && options.beforeElement.parentNode === els.conversationStream) {
    els.conversationStream.insertBefore(item, options.beforeElement);
  } else {
    els.conversationStream.appendChild(item);
  }
  if (!options.suppressScroll) {
    scheduleConversationScroll({ force: options.forceScroll, allowed: shouldScroll });
  }
  if (options.revealFromStart && shouldScroll) {
    revealConversationMessage(id, { block: "start" });
  }
  return id;
}

function feedbackTargetPayload(target = {}) {
  const turnId = String(target.turn_id || target.turnId || "").trim();
  const responseId = String(target.response_id || target.responseId || "").trim();
  if (!turnId) return null;
  return {
    turnId,
    responseId,
    channel: String(target.channel || "web").toLowerCase() === "voice" ? "voice" : "web"
  };
}

function feedbackIcon(kind) {
  const path = kind === "like"
    ? '<path d="M7.8 10.2 11 3.8c.5-1 1.8-.9 2.1.1l.2.8c.2.7.1 1.5-.2 2.1l-.6 1.2h4.2c1.3 0 2.2 1.2 1.8 2.4l-1.6 5.2c-.3.9-1.1 1.5-2 1.5H7.8V10.2Z"/><path d="M4 9.5h3.8v8H4z"/>'
    : kind === "branch"
      ? '<path d="M6 4v5.2c0 1.5 1.2 2.8 2.8 2.8H17"/><path d="m13.5 8.5 3.5 3.5-3.5 3.5"/><circle cx="6" cy="4" r="1.7"/>'
      : kind === "regenerate"
        ? '<path d="M17.8 7.7A7 7 0 1 0 18 13"/><path d="M17.8 3.8v3.9h-3.9"/>'
        : kind === "canvas"
          ? '<path d="M5 3.5h9.8L18 6.7v11.8H5Z"/><path d="M14.5 3.5v3.6H18"/><path d="M8 10h7M8 13h7M8 16h4.2"/>'
        : kind === "edit"
          ? '<path d="m5 15.8.6-3.5L14.7 3.2a1.6 1.6 0 0 1 2.2 0l1 1a1.6 1.6 0 0 1 0 2.2l-9.1 9.1-3.8.3Z"/><path d="m12.9 5 3.2 3.2"/>'
          : '<path d="M7.8 9.8 11 16.2c.5 1 1.8.9 2.1-.1l.2-.8c.2-.7.1-1.5-.2-2.1l-.6-1.2h4.2c1.3 0 2.2-1.2 1.8-2.4l-1.6-5.2c-.3-.9-1.1-1.5-2-1.5H7.8v6.9Z"/><path d="M4 2.5h3.8v8H4z"/>';
  return `<svg viewBox="0 0 22 22" aria-hidden="true">${path}</svg>`;
}

async function forkConversationTurn(target, mode) {
  const sourceConversationId = currentConversationId;
  if (!sourceConversationId || !target || !target.turnId) {
    throw new Error("conversation_turn_not_found");
  }
  const response = await fetch(
    backendUrl(
      `/client/v1/conversations/${encodeURIComponent(sourceConversationId)}`
      + `/turns/${encodeURIComponent(target.turnId)}/fork`
    ),
    {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentSubjectId(),
        mode
      })
    }
  );
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    throw new Error(payload.detail || `HTTP ${response.status}`);
  }
  conversationLibraryLoaded = false;
  await refreshConversationLibrary({ force: true });
  await switchConversation(payload.conversation_id);
  return payload;
}

async function branchConversationFromTurn(group, target, button) {
  if (!group || group.dataset.busy === "true" || !currentConversationId) return;
  if (conversationSwitchBlocked()) {
    const status = group.querySelector(".messageFeedbackStatus");
    if (status) {
      status.textContent = currentLanguage === "en"
        ? "Finish the file upload first"
        : "请先完成文件上传";
    }
    return;
  }
  const sourceConversationId = currentConversationId;
  const status = group.querySelector(".messageFeedbackStatus");
  group.dataset.busy = "true";
  button.disabled = true;
  button.setAttribute("aria-busy", "true");
  if (status) status.textContent = currentLanguage === "en" ? "Creating branch…" : "正在创建分支…";
  try {
    const response = await fetch(
      backendUrl(`/client/v1/conversations/${encodeURIComponent(sourceConversationId)}/branch`),
      {
        method: "POST",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: currentSubjectId(),
          turn_id: target.turnId
        })
      }
    );
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    conversationLibraryLoaded = false;
    await refreshConversationLibrary({ force: true });
    await switchConversation(payload.conversation_id);
    setSubtitle(
      currentLanguage === "en"
        ? "A new branch is ready."
        : "新的独立分支已经接上。",
      { speaker: "IRIS", resetFlow: true }
    );
  } catch (error) {
    if (status) {
      status.textContent = `${currentLanguage === "en" ? "Branch failed" : "分支失败"}：${error.message || ""}`;
    }
    button.disabled = false;
  } finally {
    group.dataset.busy = "false";
    button.removeAttribute("aria-busy");
  }
}

async function regenerateConversationTurn(group, target, button) {
  if (!group || group.dataset.busy === "true" || !currentConversationId) return;
  const status = group.querySelector(".messageFeedbackStatus");
  if (conversationSwitchBlocked()) {
    if (status) {
      status.textContent = currentLanguage === "en"
        ? "Finish the file upload first"
        : "请先完成文件上传";
    }
    return;
  }
  group.dataset.busy = "true";
  button.disabled = true;
  button.setAttribute("aria-busy", "true");
  if (status) {
    status.textContent = textFor("conversation.regenerating", "正在新分支重新生成…");
  }
  try {
    const payload = await forkConversationTurn(target, "regenerate");
    const sourceMessage = String(payload.source_user_message || "").trim();
    if (!sourceMessage) throw new Error("conversation_source_message_empty");
    await sendTextPrompt(sourceMessage, { forceUserMessage: true });
  } catch (error) {
    if (document.body.contains(group) && status) {
      status.textContent = `${textFor("conversation.regenerateFailed", "重新生成失败")}：${error.message || ""}`;
      button.disabled = false;
    }
  } finally {
    group.dataset.busy = "false";
    button.removeAttribute("aria-busy");
  }
}

function editableMessageTarget(rawTarget = {}, item = null) {
  const turnId = String(rawTarget.turn_id || rawTarget.turnId || "").trim();
  const sourceText = String(
    rawTarget.source_text
    || rawTarget.sourceText
    || (item && item.querySelector(".messageText") && item.querySelector(".messageText").textContent)
    || ""
  ).trim();
  if (!turnId || !sourceText) return null;
  return { turnId, sourceText };
}

function closeUserMessageEditor(item) {
  if (!item) return;
  const body = item.querySelector(".messageText");
  const controls = item.querySelector(".messageUserControls");
  const editor = item.querySelector(".messageEditPanel");
  if (body) body.hidden = false;
  if (controls) controls.hidden = false;
  if (editor) editor.remove();
  item.classList.remove("isEditing");
}

function openUserMessageEditor(item, target) {
  if (!item || !target || item.querySelector(".messageEditPanel")) return;
  if (conversationSwitchBlocked()) {
    setSubtitle(
      currentLanguage === "en"
        ? "Finish or cancel the current file upload before editing."
        : "请先完成或取消当前文件上传，再编辑消息。",
      { speaker: "IRIS", resetFlow: true }
    );
    return;
  }
  const body = item.querySelector(".messageText");
  const controls = item.querySelector(".messageUserControls");
  if (body) body.hidden = true;
  if (controls) controls.hidden = true;
  item.classList.add("isEditing");

  const panel = document.createElement("div");
  panel.className = "messageEditPanel";
  const label = document.createElement("label");
  label.className = "messageEditLabel";
  label.textContent = textFor("conversation.editMessage", "编辑这条消息");
  const input = document.createElement("textarea");
  input.className = "messageEditInput";
  input.rows = 3;
  input.maxLength = 1600;
  input.value = target.sourceText;
  input.setAttribute("aria-label", label.textContent);
  const hint = document.createElement("p");
  hint.className = "messageEditHint";
  hint.textContent = textFor(
    "conversation.editHint",
    "将在新分支发送，原对话会保留。"
  );
  const status = document.createElement("p");
  status.className = "messageEditStatus";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  const actions = document.createElement("div");
  actions.className = "messageEditActions";
  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.className = "messageEditCancel";
  cancel.textContent = textFor("conversation.editCancel", "取消");
  cancel.addEventListener("click", () => closeUserMessageEditor(item));
  const submit = document.createElement("button");
  submit.type = "button";
  submit.className = "messageEditSubmit";
  submit.textContent = textFor("conversation.editSubmit", "在新分支发送");
  submit.addEventListener("click", async () => {
    const replacement = String(input.value || "").trim();
    if (!replacement) {
      status.textContent = textFor("conversation.editRequired", "消息不能为空。");
      input.focus();
      return;
    }
    if (replacement === target.sourceText) {
      status.textContent = textFor("conversation.editNoChange", "请先修改消息内容。");
      input.focus();
      return;
    }
    input.disabled = true;
    cancel.disabled = true;
    submit.disabled = true;
    submit.setAttribute("aria-busy", "true");
    status.textContent = textFor("conversation.editCreating", "正在创建编辑分支…");
    try {
      await forkConversationTurn(target, "edit");
      await sendTextPrompt(replacement, { forceUserMessage: true });
    } catch (error) {
      if (document.body.contains(panel)) {
        status.textContent = `${textFor("conversation.editFailed", "编辑分支创建失败")}：${error.message || ""}`;
        input.disabled = false;
        cancel.disabled = false;
        submit.disabled = false;
        submit.removeAttribute("aria-busy");
      }
    }
  });
  actions.append(cancel, submit);
  panel.append(label, input, hint, status, actions);
  item.appendChild(panel);
  window.requestAnimationFrame(() => {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  });
}

function attachUserMessageEditControls(item, rawTarget) {
  if (!item || item.querySelector(".messageUserControls")) return;
  const target = editableMessageTarget(rawTarget, item);
  if (!target) return;
  const controls = document.createElement("div");
  controls.className = "messageUserControls";
  const edit = document.createElement("button");
  edit.type = "button";
  edit.className = "messageFeedbackIcon messageEditIcon";
  edit.innerHTML = feedbackIcon("edit");
  edit.setAttribute("aria-label", textFor("conversation.editMessage", "编辑这条消息"));
  edit.title = textFor("conversation.editMessage", "编辑这条消息");
  edit.addEventListener("click", () => openUserMessageEditor(item, target));
  controls.appendChild(edit);
  item.appendChild(controls);
}

async function submitMessageFeedback(group, target, feedbackType, button) {
  if (!group || group.dataset.busy === "true") return;
  group.dataset.busy = "true";
  if (button) button.setAttribute("aria-busy", "true");
  const status = group.querySelector(".messageFeedbackStatus");
  try {
    const response = await fetch(backendUrl("/client/v1/feedback"), {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({
        feedback_type: feedbackType,
        turn_id: target.turnId,
        user_id: currentSubjectId(),
        target_refs: [
          `turn:${target.turnId}`,
          ...(target.responseId ? [`response:${target.responseId}`] : [])
        ],
        channel: target.channel,
        conversation_id: currentConversationId || "",
        client_id: voiceClientId(),
        response_id: target.responseId
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    group.dataset.selected = feedbackType;
    if (button) button.setAttribute("aria-pressed", "true");
    if (status) status.textContent = currentLanguage === "en" ? "Feedback saved" : "已记下";
    if (feedbackType === "dislike") {
      const refinements = group.querySelector(".messageFeedbackRefinements");
      if (refinements) refinements.hidden = false;
    } else if (["more_concise", "more_detail", "style_wrong"].includes(feedbackType)) {
      group.querySelectorAll(".messageFeedbackRefinements button").forEach((node) => {
        node.disabled = true;
        node.setAttribute("aria-pressed", node === button ? "true" : "false");
      });
    }
  } catch (err) {
    if (status) status.textContent = currentLanguage === "en" ? "Try again" : "未能提交";
    logLine(`feedback failed · ${err.message || "network"}`);
  } finally {
    group.dataset.busy = "false";
    if (button) button.setAttribute("aria-busy", "false");
  }
}

function attachMessageFeedbackControls(item, rawTarget) {
  if (!item || item.querySelector(".messageFeedbackControls")) return;
  const target = feedbackTargetPayload(rawTarget);
  if (!target) return;
  const group = document.createElement("div");
  group.className = "messageFeedbackControls";
  group.setAttribute("role", "group");
  group.setAttribute("aria-label", currentLanguage === "en" ? "Response feedback" : "回复反馈");
  ["like", "dislike"].forEach((kind) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "messageFeedbackIcon";
    button.innerHTML = feedbackIcon(kind);
    button.setAttribute("aria-label", kind === "like" ? "这次回答很好" : "这次回答需要调整");
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => submitMessageFeedback(group, target, kind, button));
    group.appendChild(button);
  });
  const regenerate = document.createElement("button");
  regenerate.type = "button";
  regenerate.className = "messageFeedbackIcon messageRegenerateIcon";
  regenerate.innerHTML = feedbackIcon("regenerate");
  regenerate.setAttribute("aria-label", textFor("conversation.regenerate", "重新生成回答"));
  regenerate.title = textFor("conversation.regenerate", "重新生成回答");
  regenerate.addEventListener("click", () => {
    regenerateConversationTurn(group, target, regenerate);
  });
  group.appendChild(regenerate);
  const canvas = document.createElement("button");
  canvas.type = "button";
  canvas.className = "messageFeedbackIcon messageCanvasIcon";
  canvas.innerHTML = feedbackIcon("canvas");
  canvas.setAttribute("aria-label", textFor("canvas.sendTo", "在 Canvas 中编辑"));
  canvas.title = textFor("canvas.sendTo", "在 Canvas 中编辑");
  canvas.addEventListener("click", async () => {
    const body = item.querySelector(".messageText");
    const content = messageBodySourceText(body);
    if (!content) return;
    canvas.disabled = true;
    canvas.setAttribute("aria-busy", "true");
    try {
      await createCanvasFromContent(content, {
        sourceTurnId: target.turnId,
        restoreFocus: canvas
      });
      const status = group.querySelector(".messageFeedbackStatus");
      if (status) status.textContent = textFor("canvas.created", "已送入 Canvas");
    } catch (error) {
      const status = group.querySelector(".messageFeedbackStatus");
      if (status) {
        status.textContent = error.message === "temporary_conversation_canvas_not_persisted"
          ? textFor("canvas.temporaryBlocked", "临时对话不会保存持久画布。")
          : textFor("canvas.loadFailed", "暂时无法载入画布。");
      }
    } finally {
      canvas.disabled = false;
      canvas.removeAttribute("aria-busy");
    }
  });
  group.appendChild(canvas);
  const branch = document.createElement("button");
  branch.type = "button";
  branch.className = "messageFeedbackIcon messageBranchIcon";
  branch.innerHTML = feedbackIcon("branch");
  branch.setAttribute("aria-label", textFor("conversation.branch", "从这里分支"));
  branch.title = textFor("conversation.branch", "从这里分支");
  branch.addEventListener("click", () => branchConversationFromTurn(group, target, branch));
  group.appendChild(branch);
  const refinements = document.createElement("div");
  refinements.className = "messageFeedbackRefinements";
  refinements.hidden = true;
  [["more_concise", "更短"], ["more_detail", "更详细"], ["style_wrong", "更自然"]]
    .forEach(([kind, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => submitMessageFeedback(group, target, kind, button));
      refinements.appendChild(button);
    });
  const status = document.createElement("span");
  status.className = "messageFeedbackStatus";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  group.append(refinements, status);
  item.appendChild(group);
}

function messageActionVariant(button, index = 0) {
  const text = String(button && button.textContent ? button.textContent : "").trim().toLowerCase();
  if (text.includes("采纳") || text.includes("accept") || text.includes("确认")) return "primary";
  if (text.includes("删除") || text.includes("拒绝") || text.includes("remove") || text.includes("delete")) return "danger";
  return index === 0 ? "primary" : "neutral";
}

function messageActionKey(button, index = 0) {
  const existing = button && (button.dataset.actionKey || button.dataset.action);
  const text = String(existing || (button && button.textContent) || "").trim().toLowerCase();
  if (text.includes("采纳") || text.includes("accept") || text.includes("确认")) return "accept";
  if (text.includes("稍后") || text.includes("later") || text.includes("delay")) return "later";
  if (
    text.includes("删除")
    || text.includes("拒绝")
    || text.includes("remove")
    || text.includes("delete")
    || text.includes("dismiss")
  ) return "dismiss";
  return `action-${index + 1}`;
}

function messageActionSelectedText(label, actionKey = "") {
  const key = String(actionKey || "").trim().toLowerCase();
  const value = String(label || "").trim();
  if (currentLanguage === "en") {
    if (key === "accept") return "Accepted. I’ll keep this direction.";
    if (key === "later") return "Saved for later.";
    if (key === "dismiss") return "Dismissed.";
    return value ? `Done. ${value}` : "Done.";
  }
  if (key === "accept") return "已采纳，我会按这个方向处理。";
  if (key === "later") return "已放到稍后处理。";
  if (key === "dismiss") return "已忽略这条建议。";
  return value ? `已处理：${value}` : "已处理。";
}

function decorateMessageActionButton(button, index = 0) {
  if (!button) return document.createTextNode("");
  const visibleText = button.textContent.trim() || `action-${index + 1}`;
  const actionKey = messageActionKey(button, index);
  button.dataset.action = button.dataset.action || visibleText;
  button.dataset.actionKey = actionKey;
  button.dataset.variant = button.dataset.variant || messageActionVariant(button, index);
  button.dataset.defaultLabel = visibleText;
  button.setAttribute("aria-pressed", button.getAttribute("aria-pressed") || "false");
  button.setAttribute("aria-label", button.getAttribute("aria-label") || visibleText);
  button.addEventListener("click", () => {
    if (button.dataset.remoteAction === "true") return;
    const group = button.closest(".messageActions");
    if (!group) return;
    group.dataset.selectedAction = button.dataset.action || visibleText;
    group.dataset.selectedKey = button.dataset.actionKey || actionKey;
    group.dataset.state = "selected";
    const message = button.closest(".message");
    if (message) message.dataset.actionState = "selected";
    group.querySelectorAll("button").forEach((node) => {
      node.setAttribute("aria-pressed", node === button ? "true" : "false");
      node.dataset.selected = node === button ? "true" : "false";
    });
    const feedback = group.querySelector(".messageActionFeedback");
    if (feedback) {
      feedback.dataset.tone = "success";
      feedback.textContent = messageActionSelectedText(button.dataset.defaultLabel || visibleText, button.dataset.actionKey || actionKey);
    }
  });
  return button;
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
  if (options.role) item.className = `message ${options.role}`;
  if (options.kind) item.dataset.kind = options.kind;
  if (options.streamState) item.dataset.streamState = String(options.streamState);
  const body = item.querySelector(".messageText");
  if (body) {
    const role = options.role || (item.classList.contains("file") ? "file" : item.classList.contains("user") ? "user" : item.classList.contains("system") ? "system" : "assistant");
    setMessageBodyText(body, (text || "").trim() || " ", { ...options, role, kind: options.kind || item.dataset.kind || "" });
  }
  if (options.label) {
    const meta = item.querySelector(".messageMeta");
    if (meta) meta.textContent = options.label;
  }
  if (options.feedbackTarget) attachMessageFeedbackControls(item, options.feedbackTarget);
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
  clearWelcomeMessageForHistory();
  return appendConversationMessage("user", value, {
    ...options,
    forceScroll: true
  });
}

function appendAssistantConversation(text, options = {}) {
  return appendConversationMessage("assistant", text, options);
}

function normalizedClientMessageAction(key, payload) {
  if (!["confirm", "cancel"].includes(key)) return null;
  if (!payload || payload.endpoint !== "/client/v1/message" || String(payload.method || "POST").toUpperCase() !== "POST") return null;
  const body = payload.body && typeof payload.body === "object" ? payload.body : null;
  const inputText = String(body && body.input && body.input.text || "").trim();
  if (!body || !inputText) return null;
  return { key, endpoint: payload.endpoint, method: "POST", body, inputText };
}

function clientMessageActionLabel(action) {
  if (!action) return "";
  if (action.key === "cancel") return currentLanguage === "en" ? "Cancel" : "取消";
  const withoutCode = action.inputText.replace(/\s+[A-Z0-9]{6}$/i, "").trim();
  if (withoutCode && withoutCode.length <= 12) return withoutCode;
  return currentLanguage === "en" ? "Confirm" : "确认";
}

function clientMessageActionRequestBody(action) {
  const body = action && action.body && typeof action.body === "object" ? action.body : {};
  const input = body.input && typeof body.input === "object" ? body.input : {};
  return {
    ...body,
    input: {
      ...input,
      type: input.type || "text",
      text: String(action && action.inputText || "").trim()
    }
  };
}

function clientMessageActionButtons(actionPayloads) {
  if (!actionPayloads || typeof actionPayloads !== "object") return [];
  return ["confirm", "cancel"].flatMap((key) => {
    const action = normalizedClientMessageAction(key, actionPayloads[key]);
    if (!action) return [];
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = clientMessageActionLabel(action);
    button.dataset.remoteAction = "true";
    button.dataset.clientAction = key;
    button.dataset.actionKey = key === "confirm" ? "accept" : "dismiss";
    button.dataset.variant = key === "confirm" && /删除|delete/i.test(action.inputText) ? "danger" : key === "confirm" ? "primary" : "neutral";
    button.setAttribute("aria-label", button.textContent);
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      executeClientMessageAction(button, action).catch((err) => logLine(err.message || "message action failed"));
    });
    return [button];
  });
}

function clientReplyForDisplay(text, actionButtons = []) {
  const value = String(text || "").trim();
  if (!actionButtons.length) return value;
  return value
    .split(/\r?\n/)
    .filter((line) => !/^确认无误后，请回复[：:]/.test(line.trim()))
    .filter((line) => !/^如果不执行，请回复[：:]/.test(line.trim()))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function setClientMessageActionState(button, state, feedbackText = "") {
  const group = button ? button.closest(".messageActions") : null;
  if (!group) return;
  group.dataset.state = state;
  const busy = state === "executing";
  group.querySelectorAll("button").forEach((node) => {
    node.disabled = busy || state === "completed";
    node.setAttribute("aria-busy", node === button && busy ? "true" : "false");
    node.setAttribute("aria-pressed", node === button && state === "completed" ? "true" : "false");
    node.dataset.selected = node === button && state === "completed" ? "true" : "false";
  });
  const feedback = group.querySelector(".messageActionFeedback");
  if (feedback) {
    feedback.dataset.tone = state === "failed" ? "error" : state === "completed" ? "success" : "info";
    feedback.textContent = feedbackText || (busy
      ? (currentLanguage === "en" ? "Working..." : "正在处理...")
      : (currentLanguage === "en" ? "Choose an action when ready." : "需要时选择一个操作。"));
  }
}

async function executeClientMessageAction(button, action) {
  const group = button ? button.closest(".messageActions") : null;
  if (!group || group.dataset.state === "executing" || group.dataset.state === "completed") return;
  setClientMessageActionState(button, "executing");
  appendUserConversation(clientMessageActionLabel(action), { force: true });
  setState("thinking");
  try {
    const response = await fetch(backendUrl(action.endpoint), {
      method: action.method,
      headers: {
        "Content-Type": "application/json",
        ...authHeaders()
      },
      body: JSON.stringify(clientMessageActionRequestBody(action))
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    currentConversationId = payload.conversation_id || currentConversationId;
    const actionButtons = clientMessageActionButtons(payload.action_payloads);
    const documentComparison = clientDocumentComparisonPayload(payload.action_payloads);
    const multiIntent = clientMultiIntentPayload(payload.action_payloads);
    const researchVerification = clientResearchVerificationPayload(payload.action_payloads);
    const deepResearch = clientDeepResearchPayload(payload.action_payloads);
    const reply = clientReplyForDisplay(String(payload.reply || "").trim(), actionButtons) || (currentLanguage === "en" ? "The operation finished." : "操作已完成。");
    appendAssistantConversation(reply, {
      id: payload.response_id ? `assistant_${payload.response_id}` : "",
      kind: documentComparison
        ? "document_comparison"
        : deepResearch
          ? "deep_research"
          : researchVerification
            ? "research_verification"
            : multiIntent
              ? "multi_intent"
              : payload.skill || payload.route || "operation_result",
      forceScroll: true,
      actions: actionButtons,
      documentComparison,
      multiIntent,
      researchVerification,
      deepResearch,
      revealFromStart: Boolean(deepResearch),
      feedbackTarget: payload.feedback || (payload.turn_id ? {
        turn_id: payload.turn_id,
        response_id: payload.response_id || "",
        channel: "web"
      } : null)
    });
    setClientMessageActionState(button, "completed", action.key === "cancel"
      ? (currentLanguage === "en" ? "Cancelled." : "已取消。")
      : (currentLanguage === "en" ? "Confirmed." : "已确认。"));
    setSubtitle(reply, { speaker: "IRIS", resetFlow: true });
    setState("idle", { preserveSubtitle: true });
    logLine(`message action · ${action.key} · ${payload.route || "client"}`);
  } catch (err) {
    const message = currentLanguage === "en"
      ? `Action failed: ${err.message || "network unavailable"}`
      : `操作失败：${err.message || "网络不可用"}`;
    setClientMessageActionState(button, "failed", message);
    group.querySelectorAll("button").forEach((node) => {
      node.disabled = false;
      node.setAttribute("aria-busy", "false");
    });
    setState("error");
    logLine(message);
  }
}

function showConnectionRecoveryHint(key, fallback) {
  const message = textFor(key, fallback);
  setSttHint(message);
  setSubtitle(message, { speaker: "IRIS", resetFlow: true });
  const label = textFor("role.system", "状态");
  if (
    connectionStatusMessageId
    && updateConversationMessage(connectionStatusMessageId, message, { role: "system", label, forceScroll: true })
  ) {
    return;
  }
  connectionStatusMessageId = appendConversationMessage("system", message, {
    kind: "connection_status",
    label,
    forceScroll: true
  });
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

function conversationSelectionStorageKey() {
  return `${CONVERSATION_SELECTION_KEY}:${currentSubjectId()}`;
}

function selectedConversationId() {
  return String(safeSessionGet(conversationSelectionStorageKey(), "") || "").trim();
}

function rememberSelectedConversation(conversationId) {
  const value = String(conversationId || "").trim();
  if (value) safeSessionSet(conversationSelectionStorageKey(), value);
}

function setConversationFeedback(message = "", tone = "info") {
  if (!els.conversationFeedback) return;
  els.conversationFeedback.textContent = String(message || "");
  els.conversationFeedback.dataset.tone = tone;
}

function currentProjectRecord() {
  return projectLibraryItems.find((item) => item.project_id === currentProjectFilterId) || null;
}

function projectConversationCount(projectId) {
  return conversationLibraryItems.filter((item) => String(item.project_id || "") === String(projectId || "")).length;
}

function mergeProjectRecord(nextProject) {
  if (!nextProject || typeof nextProject !== "object") return null;
  const projectId = String(nextProject.project_id || "").trim();
  if (!projectId) return null;
  const index = projectLibraryItems.findIndex((item) => String(item.project_id || "") === projectId);
  if (index < 0) {
    projectLibraryItems.unshift(nextProject);
    return nextProject;
  }
  const previous = projectLibraryItems[index] || {};
  const merged = {
    ...previous,
    ...nextProject,
    conversation_count: nextProject.conversation_count ?? previous.conversation_count ?? 0
  };
  projectLibraryItems.splice(index, 1, merged);
  return merged;
}

function projectTasks(project = currentProjectRecord()) {
  const items = project && Array.isArray(project.tasks) ? project.tasks.filter((item) => item && item.task_id) : [];
  return [...items].sort((left, right) => {
    const leftDone = left.status === "completed" ? 1 : 0;
    const rightDone = right.status === "completed" ? 1 : 0;
    if (leftDone !== rightDone) return leftDone - rightDone;
    const leftDue = String(left.due_on || "9999-12-31");
    const rightDue = String(right.due_on || "9999-12-31");
    if (leftDue !== rightDue) return leftDue.localeCompare(rightDue);
    return String(left.created_at || "").localeCompare(String(right.created_at || ""));
  });
}

function projectTaskDueLabel(task) {
  const dueOn = String(task && task.due_on || "").trim();
  if (!dueOn) return textFor("project.taskNoDue", "暂不设日期");
  const due = new Date(`${dueOn}T00:00:00`);
  if (Number.isNaN(due.getTime())) return dueOn;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.round((due.getTime() - today.getTime()) / 86400000);
  if (days < 0) return textFor("project.taskOverdue", "已逾期");
  if (days === 0) return textFor("project.taskToday", "今天到期");
  if (days === 1) return textFor("project.taskTomorrow", "明天到期");
  const formatted = due.toLocaleDateString(currentLanguage === "en" ? "en-US" : "zh-CN", {
    month: "short",
    day: "numeric"
  });
  return textFor("project.taskDueOn", "{date} 到期").replace("{date}", formatted);
}

function setProjectTaskStatus(message = "", tone = "info") {
  if (!els.projectTaskStatus) return;
  els.projectTaskStatus.textContent = String(message || "");
  els.projectTaskStatus.dataset.tone = tone;
}

async function refreshProjectAfterTaskConflict() {
  setProjectTaskStatus(textFor("project.taskRefreshing", "内容刚被更新，正在同步最新版本。"), "warning");
  projectLibraryLoaded = false;
  await refreshProjectLibrary({ force: true });
}

async function mutateProjectTask(task, changes, { remove = false, successKey = "project.taskUpdated" } = {}) {
  const project = currentProjectRecord();
  const taskId = String(task && task.task_id || "").trim();
  if (!project || !taskId || projectTaskBusyIds.has(taskId)) return;
  projectTaskBusyIds.add(taskId);
  renderProjectTaskList();
  try {
    const response = await fetch(
      backendUrl(`/client/v1/projects/${encodeURIComponent(project.project_id)}/tasks/${encodeURIComponent(taskId)}`),
      {
        method: remove ? "DELETE" : "PATCH",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: currentSubjectId(),
          expected_revision: Number(task.revision || 1),
          ...(remove ? {} : changes)
        })
      }
    );
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      if (response.status === 409) {
        await refreshProjectAfterTaskConflict();
        return;
      }
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    mergeProjectRecord(payload.project);
    projectTaskEditingId = "";
    renderProjectSpaceControl();
    setProjectTaskStatus(textFor(successKey, "下一步已更新。"), "success");
  } catch (error) {
    setProjectTaskStatus(
      `${textFor("project.taskFailed", "项目步骤更新失败")}：${error && error.message || ""}`,
      "error"
    );
  } finally {
    projectTaskBusyIds.delete(taskId);
    renderProjectTaskList();
  }
}

function projectTaskAction(labelKey, fallback, action, { ariaLabel = "", className = "" } = {}) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = textFor(labelKey, fallback);
  if (ariaLabel) button.setAttribute("aria-label", ariaLabel);
  button.addEventListener("click", action);
  return button;
}

function renderProjectTaskEditor(task, row) {
  const editor = document.createElement("div");
  editor.className = "projectTaskInlineEditor";
  const title = document.createElement("input");
  title.type = "text";
  title.maxLength = 240;
  title.value = String(task.title || "");
  title.setAttribute("aria-label", textFor("project.taskPlaceholder", "添加一个清晰的下一步"));
  const due = document.createElement("input");
  due.type = "date";
  due.value = String(task.due_on || "");
  due.setAttribute("aria-label", textFor("project.taskDue", "截止日期"));
  const save = projectTaskAction("project.taskSave", "保存", () => {
    const nextTitle = title.value.trim();
    if (!nextTitle) {
      title.focus();
      setProjectTaskStatus(textFor("project.taskRequired", "请先写下要完成的事。"), "warning");
      return;
    }
    void mutateProjectTask(task, { title: nextTitle, due_on: due.value });
  }, { className: "projectTaskSave" });
  const cancel = projectTaskAction("project.taskCancel", "取消", () => {
    projectTaskEditingId = "";
    renderProjectTaskList();
  }, { className: "projectTaskCancel" });
  [title, due].forEach((control) => {
    control.disabled = projectTaskBusyIds.has(task.task_id);
  });
  save.disabled = projectTaskBusyIds.has(task.task_id);
  cancel.disabled = projectTaskBusyIds.has(task.task_id);
  editor.append(title, due, save, cancel);
  row.append(editor);
  window.setTimeout(() => title.focus({ preventScroll: true }), 0);
}

function renderProjectTaskList() {
  if (!els.projectTaskList) return;
  const project = currentProjectRecord();
  els.projectTaskList.replaceChildren();
  if (!project) return;
  const tasks = projectTasks(project);
  const openCount = tasks.filter((task) => task.status === "open").length;
  if (els.projectTaskStatus && !els.projectTaskStatus.textContent) {
    els.projectTaskStatus.textContent = openCount
      ? textFor("project.tasksOpen", "{count} 项待完成").replace("{count}", String(openCount))
      : textFor("project.tasksComplete", "全部完成");
    els.projectTaskStatus.dataset.tone = openCount ? "info" : "success";
  }
  if (!tasks.length) {
    const empty = document.createElement("p");
    empty.className = "projectTaskEmpty";
    empty.textContent = textFor("project.tasksEmpty", "还没有下一步。先写一件真正能开始的事。");
    els.projectTaskList.appendChild(empty);
    return;
  }
  const archived = project.status === "archived";
  tasks.forEach((task) => {
    const row = document.createElement("article");
    row.className = "projectTaskItem";
    row.dataset.status = task.status === "completed" ? "completed" : "open";
    row.dataset.busy = projectTaskBusyIds.has(task.task_id) ? "true" : "false";
    if (projectTaskEditingId === task.task_id) {
      renderProjectTaskEditor(task, row);
      els.projectTaskList.appendChild(row);
      return;
    }
    const completeLabel = task.status === "completed"
      ? textFor("project.taskReopen", "重新打开")
      : textFor("project.taskComplete", "标记完成");
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "projectTaskToggle";
    toggle.setAttribute("aria-label", `${completeLabel}：${task.title}`);
    toggle.setAttribute("aria-pressed", task.status === "completed" ? "true" : "false");
    toggle.disabled = archived || projectTaskBusyIds.has(task.task_id);
    toggle.addEventListener("click", () => {
      void mutateProjectTask(task, {
        status: task.status === "completed" ? "open" : "completed"
      });
    });
    const copy = document.createElement("div");
    copy.className = "projectTaskCopy";
    const title = document.createElement("strong");
    title.textContent = String(task.title || "");
    const meta = document.createElement("small");
    meta.textContent = projectTaskDueLabel(task);
    if (String(task.due_on || "") && meta.textContent === textFor("project.taskOverdue", "已逾期")) {
      meta.dataset.tone = "danger";
    }
    copy.append(title, meta);
    const actions = document.createElement("div");
    actions.className = "projectTaskActions";
    const edit = projectTaskAction("project.taskEdit", "编辑", () => {
      projectTaskEditingId = task.task_id;
      renderProjectTaskList();
    }, {
      ariaLabel: `${textFor("project.taskEdit", "编辑")}：${task.title}`,
      className: "projectTaskEdit"
    });
    edit.disabled = archived || projectTaskBusyIds.has(task.task_id);
    const remove = projectTaskAction("project.taskDelete", "删除", () => {
      void mutateProjectTask(task, {}, { remove: true, successKey: "project.taskDeleted" });
    }, {
      ariaLabel: `${textFor("project.taskDelete", "删除")}：${task.title}`,
      className: "projectTaskDelete"
    });
    remove.disabled = projectTaskBusyIds.has(task.task_id);
    actions.append(edit, remove);
    row.append(toggle, copy, actions);
    els.projectTaskList.appendChild(row);
  });
}

async function addProjectTask() {
  const project = currentProjectRecord();
  const title = String(els.projectTaskInput && els.projectTaskInput.value || "").trim();
  if (!project || project.status === "archived" || !els.projectTaskAdd || els.projectTaskAdd.disabled) return;
  if (!title) {
    setProjectTaskStatus(textFor("project.taskRequired", "请先写下要完成的事。"), "warning");
    if (els.projectTaskInput) els.projectTaskInput.focus();
    return;
  }
  els.projectTaskAdd.disabled = true;
  els.projectTaskAdd.setAttribute("aria-busy", "true");
  try {
    const response = await fetch(
      backendUrl(`/client/v1/projects/${encodeURIComponent(project.project_id)}/tasks`),
      {
        method: "POST",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: currentSubjectId(),
          title,
          due_on: String(els.projectTaskDue && els.projectTaskDue.value || "")
        })
      }
    );
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    mergeProjectRecord(payload.project);
    if (els.projectTaskInput) els.projectTaskInput.value = "";
    if (els.projectTaskDue) els.projectTaskDue.value = "";
    renderProjectSpaceControl();
    setProjectTaskStatus(textFor("project.taskAdded", "下一步已添加。"), "success");
    if (els.projectTaskInput) els.projectTaskInput.focus({ preventScroll: true });
  } catch (error) {
    setProjectTaskStatus(
      `${textFor("project.taskFailed", "项目步骤更新失败")}：${error && error.message || ""}`,
      "error"
    );
  } finally {
    els.projectTaskAdd.removeAttribute("aria-busy");
    const latest = currentProjectRecord();
    els.projectTaskAdd.disabled = !latest || latest.status === "archived";
  }
}

function resetProjectDocumentLibrary(projectId = "") {
  projectDocumentItems = [];
  projectDocumentProjectId = String(projectId || "");
  projectDocumentLoading = false;
  projectDocumentError = "";
  projectDocumentRequestSeq += 1;
  renderProjectDocumentLibrary();
}

function projectDocumentAddedLabel(value) {
  const parsed = new Date(String(value || ""));
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString(currentLanguage === "en" ? "en-US" : "zh-CN", {
    month: "short",
    day: "numeric"
  });
}

function projectDocumentDetailLabel(item = {}) {
  if (!item.available) return textFor("project.filesUnavailable", "文件不可用");
  const details = [];
  const pages = Math.max(0, Number(item.page_count || 0));
  const chars = Math.max(0, Number(item.char_count || 0));
  if (pages) details.push(currentLanguage === "en" ? `${pages} pages` : `${pages} 页`);
  else if (chars) details.push(currentLanguage === "en" ? `${chars.toLocaleString("en-US")} chars` : `${chars.toLocaleString("zh-CN")} 字`);
  const added = projectDocumentAddedLabel(item.added_at);
  if (added) details.push(added);
  return details.join(" · ") || (currentLanguage === "en" ? "Ready for retrieval" : "可供检索");
}

function renderProjectDocumentLibrary() {
  if (!els.projectFileList || !els.projectFilesStatus) return;
  const project = currentProjectRecord();
  if (!project) {
    els.projectFilesStatus.textContent = "";
    els.projectFileList.replaceChildren();
    return;
  }
  if (projectDocumentLoading && projectDocumentProjectId === project.project_id) {
    els.projectFilesStatus.textContent = textFor("project.filesLoading", "正在读取");
  } else if (projectDocumentError && projectDocumentProjectId === project.project_id) {
    els.projectFilesStatus.textContent = currentLanguage === "en" ? "Unavailable" : "暂时不可用";
  } else {
    els.projectFilesStatus.textContent = currentLanguage === "en"
      ? `${projectDocumentItems.length} files`
      : `${projectDocumentItems.length} 份`;
  }
  const fragment = document.createDocumentFragment();
  if (
    !projectDocumentLoading
    && projectDocumentProjectId === project.project_id
    && !projectDocumentItems.length
  ) {
    const empty = document.createElement("p");
    empty.className = "projectFileEmpty";
    empty.textContent = projectDocumentError
      || textFor("project.filesEmpty", "这个项目还没有文件");
    fragment.appendChild(empty);
  }
  projectDocumentItems.forEach((item) => {
    const row = document.createElement("article");
    row.className = "projectFileItem";
    row.dataset.available = item.available ? "true" : "false";
    const identity = document.createElement("div");
    identity.className = "projectFileIdentity";
    const mark = document.createElement("span");
    mark.className = "projectFileMark";
    const type = String(item.document_type || "").trim().toUpperCase();
    mark.textContent = (type || "FILE").slice(0, 5);
    const copy = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = String(item.filename || item.document_id || (currentLanguage === "en" ? "File" : "文件"));
    name.title = name.textContent;
    const meta = document.createElement("small");
    meta.textContent = projectDocumentDetailLabel(item);
    copy.append(name, meta);
    identity.append(mark, copy);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "projectFileRemove";
    remove.textContent = textFor("project.fileRemove", "移除");
    remove.setAttribute("aria-label", `${remove.textContent} ${name.textContent}`);
    remove.addEventListener("click", () => {
      removeProjectDocument(project.project_id, item.document_id, remove);
    });
    row.append(identity, remove);
    fragment.appendChild(row);
  });
  els.projectFileList.replaceChildren(fragment);
}

async function refreshProjectDocuments(projectId, { force = false } = {}) {
  const requestedProjectId = String(projectId || "").trim();
  if (!requestedProjectId) {
    resetProjectDocumentLibrary("");
    return;
  }
  if (
    !force
    && projectDocumentProjectId === requestedProjectId
    && (projectDocumentLoading || projectDocumentItems.length)
  ) {
    renderProjectDocumentLibrary();
    return;
  }
  if (!canUseBackendNow()) return;
  const requestSeq = ++projectDocumentRequestSeq;
  if (projectDocumentProjectId !== requestedProjectId) {
    projectDocumentItems = [];
  }
  projectDocumentProjectId = requestedProjectId;
  projectDocumentLoading = true;
  projectDocumentError = "";
  renderProjectDocumentLibrary();
  try {
    const response = await fetch(
      backendUrl(`/client/v1/projects/${encodeURIComponent(requestedProjectId)}/documents`),
      { headers: authHeaders(), cache: "no-store" }
    );
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    if (requestSeq !== projectDocumentRequestSeq || currentProjectFilterId !== requestedProjectId) return;
    projectDocumentItems = Array.isArray(payload.items) ? payload.items : [];
    projectDocumentError = "";
  } catch (err) {
    if (requestSeq !== projectDocumentRequestSeq) return;
    projectDocumentError = textFor(
      "project.filesLoadFailed",
      "暂时无法读取项目文件，请稍后重试"
    );
    logLine(`project files load failed ${err && err.message || err}`);
  } finally {
    if (requestSeq === projectDocumentRequestSeq) {
      projectDocumentLoading = false;
      renderProjectDocumentLibrary();
    }
  }
}

async function removeProjectDocument(projectId, documentId, button) {
  const safeProjectId = String(projectId || "").trim();
  const safeDocumentId = String(documentId || "").trim();
  if (!safeProjectId || !safeDocumentId || (button && button.disabled)) return;
  if (button) {
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    button.textContent = textFor("project.fileRemoving", "正在移除");
  }
  try {
    const response = await fetch(
      backendUrl(`/client/v1/projects/${encodeURIComponent(safeProjectId)}/documents/${encodeURIComponent(safeDocumentId)}`),
      { method: "DELETE", headers: authHeaders() }
    );
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    projectDocumentItems = projectDocumentItems.filter((item) => String(item.document_id || "") !== safeDocumentId);
    projectDocumentError = "";
    renderProjectDocumentLibrary();
    projectLibraryLoaded = false;
    await refreshProjectLibrary({ force: true });
    setConversationFeedback(textFor("project.fileRemoved", "已从项目移除"), "success");
  } catch (err) {
    setConversationFeedback(
      `${textFor("project.fileRemoveFailed", "移除失败")}：${err && err.message || err}`,
      "error"
    );
    renderProjectDocumentLibrary();
  }
}

function renderProjectSpaceControl() {
  if (!els.projectSelect) return;
  const selected = String(currentProjectFilterId || "");
  const fragment = document.createDocumentFragment();
  const personal = document.createElement("option");
  personal.value = "";
  personal.textContent = textFor("project.personal", "个人空间");
  fragment.append(personal);
  projectLibraryItems.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.project_id;
    option.textContent = `${project.name}${project.status === "archived" ? (currentLanguage === "en" ? " · Archived" : " · 已归档") : ""}`;
    fragment.append(option);
  });
  els.projectSelect.replaceChildren(fragment);
  els.projectSelect.value = projectLibraryItems.some((item) => item.project_id === selected) ? selected : "";
  if (els.projectSelect.value !== selected) currentProjectFilterId = els.projectSelect.value;

  const project = currentProjectRecord();
  if (els.projectEditor) els.projectEditor.hidden = !project;
  if (!project) {
    projectTaskEditingId = "";
    projectTaskRenderedProjectId = "";
    setProjectTaskStatus("");
    renderProjectTaskList();
    resetProjectDocumentLibrary("");
    return;
  }
  if (projectTaskRenderedProjectId !== project.project_id) {
    projectTaskRenderedProjectId = project.project_id;
    projectTaskEditingId = "";
    setProjectTaskStatus("");
  }
  if (els.projectName && document.activeElement !== els.projectName) {
    els.projectName.value = String(project.name || "");
  }
  if (els.projectInstructions && document.activeElement !== els.projectInstructions) {
    els.projectInstructions.value = String(project.instructions || "");
  }
  if (els.projectGoal && document.activeElement !== els.projectGoal) {
    els.projectGoal.value = String(project.goal || "");
  }
  if (els.projectFollowup) {
    els.projectFollowup.checked = project.proactive_followup_enabled === true;
  }
  if (els.projectMeta) {
    const conversationCount = Math.max(0, Number(project.conversation_count ?? projectConversationCount(project.project_id)));
    const documentCount = Math.max(0, Number(project.document_count || 0));
    const openTaskCount = Math.max(0, Number(
      project.open_task_count
      ?? projectTasks(project).filter((task) => task.status === "open").length
    ));
    els.projectMeta.textContent = currentLanguage === "en"
      ? `${conversationCount} chats · ${documentCount} files · ${openTaskCount} next`
      : `${conversationCount} 个会话 · ${documentCount} 份文件 · ${openTaskCount} 个下一步`;
  }
  const archived = project.status === "archived";
  if (els.projectName) els.projectName.disabled = archived;
  if (els.projectInstructions) els.projectInstructions.disabled = archived;
  if (els.projectGoal) els.projectGoal.disabled = archived;
  if (els.projectFollowup) els.projectFollowup.disabled = archived;
  if (els.projectTaskInput) els.projectTaskInput.disabled = archived;
  if (els.projectTaskDue) els.projectTaskDue.disabled = archived;
  if (els.projectTaskAdd) els.projectTaskAdd.disabled = archived;
  if (els.projectSave) els.projectSave.disabled = archived;
  if (els.projectArchive) {
    els.projectArchive.textContent = archived
      ? textFor("project.restore", "恢复项目")
      : textFor("project.archive", "归档项目");
    els.projectArchive.dataset.archived = archived ? "true" : "false";
  }
  renderProjectTaskList();
  if (projectDocumentProjectId !== project.project_id) {
    void refreshProjectDocuments(project.project_id);
  } else {
    renderProjectDocumentLibrary();
  }
}

async function activateProjectSpace(projectId) {
  const requestedProjectId = String(projectId || "");
  if (conversationSwitchBlocked()) {
    renderProjectSpaceControl();
    setConversationFeedback(
      currentLanguage === "en"
        ? "Finish or cancel the current file upload before switching spaces."
        : "请先完成或取消当前文件上传，再切换空间。",
      "warning"
    );
    return;
  }
  currentProjectFilterId = requestedProjectId;
  projectFilterTouched = true;
  const current = currentConversationRecord();
  if (String(current && current.project_id || "") !== requestedProjectId) {
    const target = conversationLibraryItems.find((item) => (
      item.status !== "archived"
      && String(item.project_id || "") === requestedProjectId
      && (!requestedProjectId ? Boolean(item.is_default) : true)
    )) || conversationLibraryItems.find((item) => (
      item.status !== "archived"
      && String(item.project_id || "") === requestedProjectId
    ));
    if (target) {
      await switchConversation(target.conversation_id, { keepDetails: true });
      return;
    }
  }
  renderProjectSpaceControl();
  renderConversationLibrary();
  setConversationFeedback("");
}

async function refreshProjectLibrary({ force = false } = {}) {
  if (projectLibraryLoading || (!force && projectLibraryLoaded)) return;
  if (!canUseBackendNow()) return;
  projectLibraryLoading = true;
  if (els.projectSelect) els.projectSelect.setAttribute("aria-busy", "true");
  const params = new URLSearchParams();
  if (els.conversationIncludeArchived && els.conversationIncludeArchived.checked) {
    params.set("include_archived", "true");
  }
  try {
    const response = await fetch(backendUrl(`/client/v1/projects${params.toString() ? `?${params}` : ""}`), {
      headers: authHeaders(),
      cache: "no-store"
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    projectLibraryItems = Array.isArray(payload.items) ? payload.items : [];
    if (currentProjectFilterId && !projectLibraryItems.some((item) => item.project_id === currentProjectFilterId)) {
      currentProjectFilterId = "";
    }
    projectLibraryLoaded = true;
    renderProjectSpaceControl();
  } finally {
    projectLibraryLoading = false;
    if (els.projectSelect) els.projectSelect.removeAttribute("aria-busy");
  }
}

async function createNewProject() {
  if (conversationSwitchBlocked()) {
    setConversationFeedback(
      currentLanguage === "en"
        ? "Finish or cancel the current file upload before starting a project."
        : "请先完成或取消当前文件上传，再新建项目。",
      "warning"
    );
    return;
  }
  if (els.projectNew) {
    els.projectNew.disabled = true;
    els.projectNew.setAttribute("aria-busy", "true");
  }
  try {
    const response = await fetch(backendUrl("/client/v1/projects"), {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentSubjectId(),
        name: currentLanguage === "en" ? "New project" : "新项目"
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    currentProjectFilterId = String(payload.project_id || "");
    projectFilterTouched = true;
    projectLibraryLoaded = false;
    conversationLibraryLoaded = false;
    await refreshProjectLibrary({ force: true });
    await refreshConversationLibrary({ force: true });
    await switchConversation(payload.conversation_id, { keepDetails: true });
    renderProjectSpaceControl();
    window.setTimeout(() => {
      if (!els.projectName) return;
      els.projectName.focus({ preventScroll: true });
      els.projectName.select();
    }, 80);
    setConversationFeedback(currentLanguage === "en" ? "Project created." : "项目已创建。", "success");
  } finally {
    if (els.projectNew) {
      els.projectNew.disabled = false;
      els.projectNew.removeAttribute("aria-busy");
    }
  }
}

async function saveCurrentProject(event) {
  if (event) event.preventDefault();
  const project = currentProjectRecord();
  if (!project || project.status === "archived") return;
  const name = String(els.projectName && els.projectName.value || "").trim();
  const instructions = String(els.projectInstructions && els.projectInstructions.value || "").trim();
  const goal = String(els.projectGoal && els.projectGoal.value || "").trim();
  const proactiveFollowupEnabled = Boolean(els.projectFollowup && els.projectFollowup.checked);
  if (!name) {
    setConversationFeedback(currentLanguage === "en" ? "Enter a project name." : "请填写项目名称。", "warning");
    return;
  }
  if (els.projectSave) {
    els.projectSave.disabled = true;
    els.projectSave.setAttribute("aria-busy", "true");
  }
  try {
    const response = await fetch(backendUrl(`/client/v1/projects/${encodeURIComponent(project.project_id)}`), {
      method: "PATCH",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentSubjectId(),
        name,
        instructions,
        goal,
        proactive_followup_enabled: proactiveFollowupEnabled
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    mergeProjectRecord(payload.project);
    renderProjectSpaceControl();
    setConversationFeedback(currentLanguage === "en" ? "Project updated." : "项目设置已保存。", "success");
  } finally {
    if (els.projectSave) {
      els.projectSave.disabled = false;
      els.projectSave.removeAttribute("aria-busy");
    }
  }
}

async function toggleCurrentProjectArchived() {
  const project = currentProjectRecord();
  if (!project) return;
  const archived = project.status === "archived";
  if (els.projectArchive) els.projectArchive.disabled = true;
  try {
    const response = await fetch(backendUrl(`/client/v1/projects/${encodeURIComponent(project.project_id)}`), {
      method: "PATCH",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentSubjectId(),
        status: archived ? "active" : "archived"
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    if (!archived) {
      const current = currentConversationRecord();
      if (current && current.project_id === project.project_id) {
        const next = conversationLibraryItems.find((item) => item.is_default)
          || conversationLibraryItems.find((item) => !item.project_id && item.status !== "archived");
        if (next) await switchConversation(next.conversation_id);
      }
      currentProjectFilterId = "";
    }
    projectLibraryLoaded = false;
    conversationLibraryLoaded = false;
    await refreshProjectLibrary({ force: true });
    await refreshConversationLibrary({ force: true });
    setConversationFeedback(
      archived
        ? (currentLanguage === "en" ? "Project restored." : "项目已恢复。")
        : (currentLanguage === "en" ? "Project archived." : "项目已归档。"),
      "success"
    );
  } finally {
    if (els.projectArchive) els.projectArchive.disabled = false;
  }
}

function currentConversationRecord() {
  return conversationLibraryItems.find((item) => item.conversation_id === currentConversationId) || null;
}

function conversationTemporaryExpiryLabel(record, { compact = false } = {}) {
  if (!record || record.memory_mode !== "temporary") return "";
  const parsed = new Date(String(record.expires_at || ""));
  if (Number.isNaN(parsed.getTime())) {
    return currentLanguage === "en" ? "soon" : "稍后";
  }
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const sameDay = parsed.toDateString() === now.toDateString();
  const isTomorrow = parsed.toDateString() === tomorrow.toDateString();
  const clock = parsed.toLocaleTimeString(currentLanguage === "en" ? "en-US" : "zh-CN", {
    hour: "2-digit",
    minute: "2-digit"
  });
  if (compact) return clock;
  if (currentLanguage === "en") {
    if (sameDay) return `today ${clock}`;
    if (isTomorrow) return `tomorrow ${clock}`;
    return parsed.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  if (sameDay) return `今天 ${clock}`;
  if (isTomorrow) return `明天 ${clock}`;
  return parsed.toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function updateConversationIdentity(record = currentConversationRecord()) {
  const fallback = textFor("conversation.defaultTitle", "日常对话");
  if (record && record.title) currentConversationTitle = String(record.title).trim();
  const title = currentConversationTitle || fallback;
  const temporary = Boolean(record && record.memory_mode === "temporary");
  if (els.conversationCurrentTitle) els.conversationCurrentTitle.textContent = title;
  if (els.conversationMemoryHint) {
    els.conversationMemoryHint.textContent = temporary
      ? textFor(
        "conversation.temporaryHint",
        "不读取或写入长期记忆；本对话将在 {time} 自动清除。工具操作和安全审计仍会保留。"
      ).replace("{time}", conversationTemporaryExpiryLabel(record))
      : textFor(
        "conversation.memoryHint",
        "每个会话独立保留短期上下文，个人长期记忆仍会连续。"
      );
  }
  if (els.conversationModeBadge) {
    els.conversationModeBadge.hidden = !temporary;
    els.conversationModeBadge.textContent = textFor("conversation.temporaryBadge", "临时");
    els.conversationModeBadge.title = temporary
      ? textFor("conversation.temporaryExpires", "{time} 自动清除")
        .replace("{time}", conversationTemporaryExpiryLabel(record))
      : "";
  }
  if (els.emptyMemoryChip) {
    els.emptyMemoryChip.textContent = temporary
      ? textFor("conversation.temporaryMemoryOff", "不留长期记忆")
      : textFor("empty.memory", "记忆连续");
  }
  if (els.conversationShare) {
    const shareable = Boolean(record && !temporary && Number(record.message_count || 0) > 0);
    els.conversationShare.disabled = !shareable;
    els.conversationShare.setAttribute(
      "aria-label",
      temporary
        ? textFor("conversation.shareTemporaryBlocked", "临时对话不会生成公开链接。")
        : textFor("conversation.shareCurrent", "分享当前会话")
    );
    els.conversationShare.title = els.conversationShare.getAttribute("aria-label");
  }
  document.documentElement.dataset.conversationMode = temporary ? "temporary" : "personal";
  if (els.conversationStatus) {
    const statusText = temporary
      ? `${title} · ${textFor("conversation.temporaryBadge", "临时")}`
      : title;
    els.conversationStatus.textContent = statusText;
    els.conversationStatus.title = statusText;
  }
  renderProjectSpaceControl();
}

function conversationUpdatedLabel(value) {
  const parsed = new Date(String(value || ""));
  if (Number.isNaN(parsed.getTime())) {
    return currentLanguage === "en" ? "No messages yet" : "还没有消息";
  }
  return parsed.toLocaleString(currentLanguage === "en" ? "en-US" : "zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function conversationExportFilename(response, item, format) {
  const disposition = String(response.headers.get("content-disposition") || "");
  const match = disposition.match(/filename="([^"]+)"/i);
  if (match && match[1]) return match[1];
  const safeId = String(item.conversation_id || "conversation").replace(/[^A-Za-z0-9_-]/g, "-");
  return `iris-${safeId}.${format === "json" ? "json" : "md"}`;
}

async function downloadConversationExport(item, format, button) {
  if (!item || !item.conversation_id || !["markdown", "json"].includes(format)) return;
  if (button) {
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
  }
  try {
    const response = await fetch(
      backendUrl(`/client/v1/conversations/${encodeURIComponent(item.conversation_id)}/export?format=${format}`),
      {
        headers: authHeaders(),
        cache: "no-store"
      }
    );
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = conversationExportFilename(response, item, format);
    link.hidden = true;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1200);
    setConversationFeedback(
      currentLanguage === "en"
        ? `${format === "json" ? "JSON" : "Markdown"} export downloaded.`
        : `${format === "json" ? "JSON" : "Markdown"} 会话已导出。`,
      "success"
    );
  } catch (error) {
    setConversationFeedback(
      `${currentLanguage === "en" ? "Export failed" : "导出失败"}：${error.message || ""}`,
      "error"
    );
  } finally {
    if (button) {
      button.disabled = false;
      button.removeAttribute("aria-busy");
    }
  }
}

function conversationExportControl(item) {
  const control = document.createElement("details");
  control.className = "conversationExportControl";
  const summary = document.createElement("summary");
  summary.textContent = textFor("conversation.export", "导出");
  const choices = document.createElement("div");
  choices.className = "conversationExportChoices";
  [
    ["markdown", textFor("conversation.exportMarkdown", "Markdown")],
    ["json", textFor("conversation.exportJson", "JSON")]
  ].forEach(([format, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => downloadConversationExport(item, format, button));
    choices.appendChild(button);
  });
  control.append(summary, choices);
  return control;
}

function conversationShareErrorMessage(detail, fallback = "") {
  const code = String(detail || "").trim();
  const messages = currentLanguage === "en"
    ? {
        temporary_conversation_cannot_be_shared: "Temporary conversations never create public links.",
        conversation_share_has_no_messages: "This conversation has no shareable text yet.",
        conversation_share_preview_stale: "The conversation changed. Review the latest snapshot before sharing.",
        conversation_share_confirmation_token_invalid: "This share confirmation is no longer valid. Review it again.",
        conversation_share_confirmation_token_expired: "This share confirmation expired. Review it again.",
        conversation_share_confirmation_scope_mismatch: "This confirmation belongs to another conversation.",
        conversation_share_content_limit_exceeded: "This conversation is too large to share as one snapshot.",
        conversation_share_signing_secret_unavailable: "Secure sharing is temporarily unavailable.",
        conversation_share_user_limit_exceeded: "You have reached the active share-link limit. Revoke an older link first.",
        conversation_share_conversation_limit_exceeded: "This conversation already has too many active links. Revoke one first.",
        conversation_not_found_or_scope_mismatch: "This conversation is no longer available."
      }
    : {
        temporary_conversation_cannot_be_shared: "临时对话不会生成公开链接。",
        conversation_share_has_no_messages: "这段会话还没有可分享的文字消息。",
        conversation_share_preview_stale: "这段会话刚刚有更新，请重新核对最新快照。",
        conversation_share_confirmation_token_invalid: "这次分享确认已经失效，请重新核对。",
        conversation_share_confirmation_token_expired: "这次分享确认已经过期，请重新核对。",
        conversation_share_confirmation_scope_mismatch: "这次确认不属于当前会话。",
        conversation_share_content_limit_exceeded: "这段会话太长，暂时无法作为一份快照分享。",
        conversation_share_signing_secret_unavailable: "安全分享暂时不可用，请稍后再试。",
        conversation_share_user_limit_exceeded: "活跃分享链接已达到上限，请先撤销旧链接。",
        conversation_share_conversation_limit_exceeded: "这段会话的活跃链接过多，请先撤销一个。",
        conversation_not_found_or_scope_mismatch: "这段会话已经不可用。"
      };
  return messages[code] || code || fallback || textFor("conversation.shareUnavailable", "暂时无法分享这段会话。");
}

function conversationShareUrl(publicToken) {
  const token = String(publicToken || "").trim();
  if (!/^shr_[A-Za-z0-9_-]{43}$/.test(token)) return "";
  const url = new URL(window.location.href);
  url.pathname = `${appBasePath()}/`;
  url.search = "";
  url.hash = "";
  url.searchParams.set("share", token);
  return url.toString();
}

async function copyConversationShareUrl(url) {
  const value = String(url || "").trim();
  if (!value) return false;
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    await navigator.clipboard.writeText(value);
    return true;
  }
  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  const copied = document.execCommand("copy");
  input.remove();
  return copied;
}

function closeConversationShareDialog() {
  if (!conversationShareOverlay) return;
  const overlay = conversationShareOverlay;
  conversationShareOverlay = null;
  overlay.remove();
  document.body.classList.remove("conversationShareOpen");
  const returnFocus = conversationShareReturnFocus;
  conversationShareReturnFocus = null;
  if (returnFocus && returnFocus.isConnected && typeof returnFocus.focus === "function") {
    returnFocus.focus({ preventScroll: true });
  }
}

function conversationShareActionButton(label, className = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  if (className) button.className = className;
  return button;
}

function conversationShareExpirySelect(preview) {
  const field = document.createElement("label");
  field.className = "conversationShareExpiry";
  const label = document.createElement("span");
  label.textContent = textFor("conversation.shareExpiry", "链接有效期");
  const select = document.createElement("select");
  select.setAttribute("aria-label", label.textContent);
  [
    [1, textFor("conversation.shareExpiry1", "1 天")],
    [7, textFor("conversation.shareExpiry7", "7 天")],
    [30, textFor("conversation.shareExpiry30", "30 天")],
    [0, textFor("conversation.shareExpiryNever", "长期有效")]
  ].forEach(([value, text]) => {
    if (
      Array.isArray(preview.available_expiry_days)
      && !preview.available_expiry_days.map(Number).includes(value)
    ) return;
    const option = document.createElement("option");
    option.value = String(value);
    option.textContent = text;
    option.selected = value === Number(preview.default_expiry_days || 7);
    select.appendChild(option);
  });
  field.append(label, select);
  return { field, select };
}

function renderConversationShareReady(container, item, share) {
  container.replaceChildren();
  const ready = document.createElement("section");
  ready.className = "conversationShareReady";
  const marker = document.createElement("span");
  marker.className = "conversationShareReadyMark";
  marker.setAttribute("aria-hidden", "true");
  marker.textContent = "✓";
  const title = document.createElement("h3");
  title.textContent = textFor("conversation.shareReady", "只读链接已创建");
  const url = conversationShareUrl(share && share.public_token);
  const input = document.createElement("input");
  input.type = "url";
  input.readOnly = true;
  input.value = url;
  input.setAttribute("aria-label", currentLanguage === "en" ? "Public share link" : "公开分享链接");
  const actions = document.createElement("div");
  actions.className = "conversationShareReadyActions";
  const copy = conversationShareActionButton(textFor("conversation.shareCopy", "复制链接"), "sharePrimaryAction");
  const open = conversationShareActionButton(textFor("conversation.shareOpen", "打开"));
  const system = conversationShareActionButton(textFor("conversation.shareSystem", "系统分享"));
  const revoke = conversationShareActionButton(textFor("conversation.shareRevoke", "撤销链接"), "shareDangerAction");
  const status = document.createElement("p");
  status.className = "conversationShareInlineStatus";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  copy.addEventListener("click", async () => {
    copy.disabled = true;
    try {
      const copied = await copyConversationShareUrl(url);
      status.dataset.tone = copied ? "success" : "error";
      status.textContent = copied
        ? textFor("conversation.shareCopied", "链接已复制")
        : textFor("conversation.shareUnavailable", "暂时无法分享这段会话。");
    } catch (error) {
      status.dataset.tone = "error";
      status.textContent = error.message || textFor("conversation.shareUnavailable", "暂时无法分享这段会话。");
    } finally {
      copy.disabled = false;
    }
  });
  open.addEventListener("click", () => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  });
  if (typeof navigator.share === "function") {
    system.addEventListener("click", () => {
      navigator.share({ title: String(item.title || "Iris"), url }).catch((error) => {
        if (error && error.name !== "AbortError") {
          status.dataset.tone = "error";
          status.textContent = error.message || textFor("conversation.shareUnavailable", "暂时无法分享这段会话。");
        }
      });
    });
  } else {
    system.hidden = true;
  }
  revoke.addEventListener("click", async () => {
    revoke.disabled = true;
    revoke.setAttribute("aria-busy", "true");
    try {
      const response = await fetch(
        backendUrl(
          `/client/v1/conversations/${encodeURIComponent(item.conversation_id)}`
          + `/shares/${encodeURIComponent(share.share_id)}`
        ),
        {
          method: "DELETE",
          headers: { ...authHeaders(), "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: currentSubjectId(),
            client_id: voiceClientId()
          })
        }
      );
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        handleUnauthorizedResponse(response);
        throw new Error(conversationShareErrorMessage(payload.detail));
      }
      input.disabled = true;
      actions.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
      });
      status.dataset.tone = "success";
      status.textContent = textFor("conversation.shareRevoked", "链接已撤销");
      setConversationFeedback(status.textContent, "success");
    } catch (error) {
      revoke.disabled = false;
      revoke.removeAttribute("aria-busy");
      status.dataset.tone = "error";
      status.textContent = error.message || textFor("conversation.shareUnavailable", "暂时无法分享这段会话。");
    }
  });
  actions.append(copy, open, system, revoke);
  ready.append(marker, title, input, actions, status);
  container.appendChild(ready);
  copy.focus({ preventScroll: true });
}

function appendExistingConversationShares(container, item, shares) {
  const active = (Array.isArray(shares) ? shares : []).filter((share) => share.status === "active");
  if (!active.length) return;
  const section = document.createElement("section");
  section.className = "conversationExistingShares";
  const title = document.createElement("p");
  title.className = "conversationExistingSharesTitle";
  title.textContent = currentLanguage === "en"
    ? `${active.length} active ${active.length === 1 ? "link" : "links"}`
    : `${active.length} 个有效链接`;
  const list = document.createElement("div");
  list.className = "conversationExistingShareList";
  active.slice(0, 4).forEach((share) => {
    const row = document.createElement("div");
    row.className = "conversationExistingShare";
    const copy = document.createElement("div");
    const created = document.createElement("strong");
    created.textContent = conversationUpdatedLabel(share.created_at);
    const expiry = document.createElement("span");
    expiry.textContent = share.expires_at
      ? (currentLanguage === "en"
        ? `Expires ${conversationUpdatedLabel(share.expires_at)}`
        : `${conversationUpdatedLabel(share.expires_at)} 到期`)
      : textFor("conversation.shareExpiryNever", "长期有效");
    copy.append(created, expiry);
    const actions = document.createElement("div");
    const use = conversationShareActionButton(textFor("conversation.shareCopy", "复制链接"));
    const revoke = conversationShareActionButton(textFor("conversation.shareRevoke", "撤销链接"), "shareDangerAction");
    use.addEventListener("click", async () => {
      use.disabled = true;
      try {
        await copyConversationShareUrl(conversationShareUrl(share.public_token));
        use.textContent = textFor("conversation.shareCopied", "链接已复制");
      } finally {
        window.setTimeout(() => {
          use.disabled = false;
          use.textContent = textFor("conversation.shareCopy", "复制链接");
        }, 900);
      }
    });
    revoke.addEventListener("click", async () => {
      revoke.disabled = true;
      try {
        const response = await fetch(
          backendUrl(
            `/client/v1/conversations/${encodeURIComponent(item.conversation_id)}`
            + `/shares/${encodeURIComponent(share.share_id)}`
          ),
          {
            method: "DELETE",
            headers: { ...authHeaders(), "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: currentSubjectId(),
              client_id: voiceClientId()
            })
          }
        );
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          handleUnauthorizedResponse(response);
          throw new Error(conversationShareErrorMessage(payload.detail));
        }
        row.dataset.revoked = "true";
        row.remove();
        if (!list.children.length) section.remove();
        setConversationFeedback(textFor("conversation.shareRevoked", "链接已撤销"), "success");
      } catch (error) {
        revoke.disabled = false;
        setConversationFeedback(
          error.message || textFor("conversation.shareUnavailable", "暂时无法分享这段会话。"),
          "error"
        );
      }
    });
    actions.append(use, revoke);
    row.append(copy, actions);
    list.appendChild(row);
  });
  section.append(title, list);
  container.appendChild(section);
}

async function openConversationShareDialog(item, opener = null) {
  if (!item || !item.conversation_id) return;
  closeConversationShareDialog();
  conversationShareReturnFocus = opener instanceof HTMLElement ? opener : document.activeElement;
  const overlay = document.createElement("div");
  overlay.className = "conversationShareOverlay";
  const dialog = document.createElement("section");
  dialog.className = "conversationShareDialog";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "conversationShareDialogTitle");
  const header = document.createElement("header");
  const heading = document.createElement("div");
  const kicker = document.createElement("span");
  kicker.textContent = textFor("conversation.shareKicker", "只读快照");
  const title = document.createElement("h2");
  title.id = "conversationShareDialogTitle";
  title.textContent = textFor("conversation.shareTitle", "分享这段对话");
  const close = conversationShareActionButton("×", "conversationShareClose");
  close.setAttribute("aria-label", textFor("conversation.shareClose", "关闭"));
  close.addEventListener("click", closeConversationShareDialog);
  heading.append(kicker, title);
  header.append(heading, close);
  const body = document.createElement("div");
  body.className = "conversationShareBody";
  const loading = document.createElement("div");
  loading.className = "conversationShareLoading";
  loading.innerHTML = '<span aria-hidden="true"></span>';
  const loadingText = document.createElement("p");
  loadingText.textContent = textFor("conversation.shareLoading", "正在核对可分享内容…");
  loading.appendChild(loadingText);
  body.appendChild(loading);
  dialog.append(header, body);
  overlay.appendChild(dialog);
  document.body.appendChild(overlay);
  conversationShareOverlay = overlay;
  document.body.classList.add("conversationShareOpen");
  overlay.addEventListener("pointerdown", (event) => {
    if (event.target === overlay) closeConversationShareDialog();
  });
  overlay.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeConversationShareDialog();
      return;
    }
    if (event.key === "Tab") {
      const focusable = Array.from(
        dialog.querySelectorAll(
          'button:not([disabled]):not([hidden]), input:not([disabled]), select:not([disabled]), '
          + 'textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element instanceof HTMLElement && element.offsetParent !== null);
      if (!focusable.length) {
        event.preventDefault();
        dialog.focus({ preventScroll: true });
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    }
  });
  close.focus({ preventScroll: true });

  if (String(item.memory_mode || "personal") === "temporary") {
    body.replaceChildren();
    const warning = document.createElement("p");
    warning.className = "conversationShareBlocked";
    warning.textContent = textFor("conversation.shareTemporaryBlocked", "临时对话不会生成公开链接。");
    body.appendChild(warning);
    return;
  }

  try {
    const [previewResponse, sharesResponse] = await Promise.all([
      fetch(
        backendUrl(`/client/v1/conversations/${encodeURIComponent(item.conversation_id)}/share-preview`),
        {
          method: "POST",
          headers: { ...authHeaders(), "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: currentSubjectId(),
            client_id: voiceClientId()
          }),
          cache: "no-store"
        }
      ),
      fetch(
        backendUrl(`/client/v1/conversations/${encodeURIComponent(item.conversation_id)}/shares`),
        { headers: authHeaders(), cache: "no-store" }
      )
    ]);
    const preview = await previewResponse.json().catch(() => ({}));
    const existing = await sharesResponse.json().catch(() => ({}));
    if (!previewResponse.ok) {
      handleUnauthorizedResponse(previewResponse);
      throw new Error(conversationShareErrorMessage(preview.detail));
    }
    if (!sharesResponse.ok) {
      handleUnauthorizedResponse(sharesResponse);
      throw new Error(conversationShareErrorMessage(existing.detail));
    }
    if (!conversationShareOverlay || conversationShareOverlay !== overlay) return;
    body.replaceChildren();
    const conversationTitle = document.createElement("strong");
    conversationTitle.className = "conversationShareConversationTitle";
    conversationTitle.textContent = String(preview.title || item.title || "Iris");
    const scope = document.createElement("p");
    scope.className = "conversationShareScope";
    scope.textContent = textFor(
      "conversation.shareScope",
      "将分享当前 {count} 条你与 Iris 的文字消息。"
    ).replace("{count}", String(Math.max(0, Number(preview.message_count) || 0)));
    const boundary = document.createElement("p");
    boundary.className = "conversationShareBoundary";
    boundary.textContent = textFor(
      "conversation.shareBoundary",
      "不会包含你的身份、长期记忆、项目信息、文件原件、工具记录或之后的新消息。"
    );
    const warning = document.createElement("p");
    warning.className = "conversationShareWarning";
    warning.textContent = textFor(
      "conversation.shareWarning",
      "任何拿到链接的人都能查看这份快照。创建前请先检查当前对话。"
    );
    const { field, select } = conversationShareExpirySelect(preview);
    const confirm = conversationShareActionButton(
      textFor("conversation.shareConfirm", "创建只读链接"),
      "conversationShareConfirm"
    );
    const status = document.createElement("p");
    status.className = "conversationShareInlineStatus";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    confirm.addEventListener("click", async () => {
      confirm.disabled = true;
      confirm.setAttribute("aria-busy", "true");
      status.dataset.tone = "info";
      status.textContent = textFor("conversation.shareCreating", "正在创建安全链接…");
      try {
        const response = await fetch(
          backendUrl(`/client/v1/conversations/${encodeURIComponent(item.conversation_id)}/shares`),
          {
            method: "POST",
            headers: { ...authHeaders(), "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: currentSubjectId(),
              client_id: voiceClientId(),
              confirmation_token: preview.confirmation_token,
              expires_in_days: Number(select.value)
            }),
            cache: "no-store"
          }
        );
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          handleUnauthorizedResponse(response);
          throw new Error(conversationShareErrorMessage(payload.detail));
        }
        renderConversationShareReady(body, item, payload.share || {});
        setConversationFeedback(textFor("conversation.shareReady", "只读链接已创建"), "success");
      } catch (error) {
        confirm.disabled = false;
        confirm.removeAttribute("aria-busy");
        status.dataset.tone = "error";
        status.textContent = error.message || textFor("conversation.shareUnavailable", "暂时无法分享这段会话。");
      }
    });
    body.append(conversationTitle, scope, boundary, warning, field, confirm, status);
    appendExistingConversationShares(body, item, existing.items);
    confirm.focus({ preventScroll: true });
  } catch (error) {
    if (!conversationShareOverlay || conversationShareOverlay !== overlay) return;
    body.replaceChildren();
    const failure = document.createElement("p");
    failure.className = "conversationShareBlocked";
    failure.textContent = error.message || textFor("conversation.shareUnavailable", "暂时无法分享这段会话。");
    body.appendChild(failure);
  }
}

function publicShareDate(value) {
  const parsed = new Date(String(value || ""));
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleString(currentLanguage === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderPublicConversationShare(payload) {
  const share = payload && payload.share && typeof payload.share === "object"
    ? payload.share
    : null;
  if (!share || !Array.isArray(share.messages)) throw new Error("conversation_share_invalid");
  const view = document.getElementById("publicConversationShare");
  if (!view) return;
  view.replaceChildren();
  const header = document.createElement("header");
  header.className = "publicShareHeader";
  const brand = document.createElement("a");
  brand.className = "publicShareBrand";
  brand.href = `${appBasePath()}/`;
  brand.innerHTML = '<span aria-hidden="true"></span><strong>Iris</strong>';
  const badge = document.createElement("span");
  badge.className = "publicShareBadge";
  badge.textContent = currentLanguage === "en" ? "READ ONLY" : "只读";
  header.append(brand, badge);
  const hero = document.createElement("section");
  hero.className = "publicShareHero";
  const kicker = document.createElement("span");
  kicker.textContent = textFor("conversation.shareKicker", "只读快照");
  const title = document.createElement("h1");
  title.textContent = String(share.title || "Iris");
  const summary = document.createElement("p");
  summary.textContent = textFor(
    "conversation.shareReadOnly",
    "由 Iris 创建的只读对话快照"
  );
  const timestamp = document.createElement("small");
  timestamp.textContent = textFor(
    "conversation.shareSnapshot",
    "快照创建于 {time}，不会随原会话更新。"
  ).replace("{time}", publicShareDate(share.created_at));
  hero.append(kicker, title, summary, timestamp);
  const stream = document.createElement("section");
  stream.className = "publicShareMessages";
  stream.setAttribute("aria-label", currentLanguage === "en" ? "Shared conversation" : "分享的对话");
  share.messages.forEach((message) => {
    if (!message || !["user", "assistant"].includes(message.role)) return;
    const article = document.createElement("article");
    article.className = `publicShareMessage ${message.role}`;
    const meta = document.createElement("p");
    meta.className = "publicShareMessageMeta";
    meta.textContent = message.role === "user"
      ? textFor("conversation.shareYou", "你")
      : "Iris";
    if (message.time) {
      const time = document.createElement("span");
      time.textContent = publicShareDate(message.time);
      meta.appendChild(time);
    }
    const content = document.createElement("div");
    content.className = "publicShareMessageText";
    if (message.role === "assistant") {
      renderAssistantReplyBody(content, String(message.content || ""));
    } else {
      content.textContent = String(message.content || "");
    }
    article.append(meta, content);
    stream.appendChild(article);
  });
  const footer = document.createElement("footer");
  footer.className = "publicShareFooter";
  const copy = document.createElement("p");
  copy.textContent = textFor(
    "conversation.shareBoundary",
    "不会包含你的身份、长期记忆、项目信息、文件原件、工具记录或之后的新消息。"
  );
  const back = document.createElement("a");
  back.href = `${appBasePath()}/`;
  back.textContent = textFor("conversation.shareBack", "打开 Iris");
  footer.append(copy, back);
  view.append(header, hero, stream, footer);
  document.title = `${share.title || "Iris"} · Iris`;
}

function renderPublicConversationShareFailure(detail) {
  const view = document.getElementById("publicConversationShare");
  if (!view) return;
  view.replaceChildren();
  const failure = document.createElement("section");
  failure.className = "publicShareFailure";
  const brand = document.createElement("span");
  brand.className = "publicShareFailureMark";
  brand.setAttribute("aria-hidden", "true");
  const title = document.createElement("h1");
  title.textContent = detail === "conversation_share_expired"
    ? textFor("conversation.shareExpired", "这份分享已过期")
    : textFor("conversation.shareNotFound", "这份分享不存在或已被撤销");
  const back = document.createElement("a");
  back.href = `${appBasePath()}/`;
  back.textContent = textFor("conversation.shareBack", "打开 Iris");
  failure.append(brand, title, back);
  view.appendChild(failure);
}

async function initializePublicConversationShare() {
  if (!PUBLIC_SHARE_MODE) return false;
  document.body.classList.add("publicShareMode");
  document.body.classList.remove("accessLocked");
  const terminal = document.querySelector(".terminal");
  if (terminal) {
    terminal.hidden = true;
    terminal.setAttribute("aria-hidden", "true");
  }
  if (els.dock) els.dock.hidden = true;
  if (els.accessGate) {
    els.accessGate.hidden = true;
    els.accessGate.setAttribute("aria-hidden", "true");
  }
  const view = document.createElement("main");
  view.id = "publicConversationShare";
  view.className = "publicConversationShare";
  view.setAttribute("aria-live", "polite");
  const loading = document.createElement("section");
  loading.className = "publicShareLoading";
  loading.innerHTML = '<span aria-hidden="true"></span>';
  const loadingText = document.createElement("p");
  loadingText.textContent = currentLanguage === "en" ? "Opening shared conversation…" : "正在打开分享的对话…";
  loading.appendChild(loadingText);
  view.appendChild(loading);
  document.body.appendChild(view);
  if (!PUBLIC_SHARE_TOKEN_VALID) {
    renderPublicConversationShareFailure(404);
    return true;
  }
  try {
    const response = await fetch(
      backendUrl(`/client/v1/public/conversation-shares/${encodeURIComponent(PUBLIC_SHARE_TOKEN)}`),
      { cache: "no-store" }
    );
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(String(payload.detail || "conversation_share_not_found"));
    }
    renderPublicConversationShare(payload);
  } catch (error) {
    renderPublicConversationShareFailure(String(error.message || "conversation_share_not_found"));
  }
  return true;
}

function beginConversationRename(row, item) {
  if (!row || row.querySelector(".conversationRenameEditor")) return;
  const editor = document.createElement("form");
  editor.className = "conversationRenameEditor";
  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = 64;
  input.value = String(item.title || "");
  input.setAttribute("aria-label", currentLanguage === "en" ? "Conversation title" : "会话标题");
  const save = document.createElement("button");
  save.type = "submit";
  save.textContent = currentLanguage === "en" ? "Save" : "保存";
  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = currentLanguage === "en" ? "Cancel" : "取消";
  cancel.addEventListener("click", () => editor.remove());
  editor.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = input.value.trim();
    if (!title) {
      setConversationFeedback(currentLanguage === "en" ? "Enter a title first." : "请先输入会话标题。", "warning");
      return;
    }
    save.disabled = true;
    try {
      const response = await fetch(backendUrl(`/client/v1/conversations/${encodeURIComponent(item.conversation_id)}`), {
        method: "PATCH",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: currentSubjectId(), title })
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        handleUnauthorizedResponse(response);
        throw new Error(payload.detail || `HTTP ${response.status}`);
      }
      await refreshConversationLibrary({ force: true });
      setConversationFeedback(currentLanguage === "en" ? "Conversation renamed." : "会话名称已更新。", "success");
    } catch (error) {
      setConversationFeedback(`${currentLanguage === "en" ? "Rename failed" : "改名失败"}：${error.message || ""}`, "error");
      save.disabled = false;
    }
  });
  editor.append(input, save, cancel);
  row.append(editor);
  window.setTimeout(() => {
    input.focus({ preventScroll: true });
    input.select();
  }, 40);
}

async function setConversationArchived(item, archived) {
  const response = await fetch(backendUrl(`/client/v1/conversations/${encodeURIComponent(item.conversation_id)}`), {
    method: "PATCH",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: currentSubjectId(),
      status: archived ? "archived" : "active"
    })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    throw new Error(payload.detail || `HTTP ${response.status}`);
  }
  if (archived && currentConversationId === item.conversation_id) {
    const next = conversationLibraryItems.find((candidate) => candidate.is_default)
      || conversationLibraryItems.find((candidate) => candidate.status !== "archived");
    if (next) await switchConversation(next.conversation_id);
  }
  await refreshConversationLibrary({ force: true });
  setConversationFeedback(
    archived
      ? (currentLanguage === "en" ? "Conversation archived." : "会话已归档。")
      : (currentLanguage === "en" ? "Conversation restored." : "会话已恢复。"),
    "success"
  );
}

function conversationDeleteScopeText(preview) {
  return formatTextFor(
    "conversation.deleteScope",
    currentLanguage === "en"
      ? "This removes {messages} messages and {turns} turns. {documents} uploaded files and long-term memory stay intact."
      : "将删除 {messages} 条消息和 {turns} 个回合。已上传的 {documents} 份文件与长期记忆会保留。",
    {
      messages: Math.max(0, Number(preview && preview.message_count) || 0),
      turns: Math.max(0, Number(preview && preview.turn_count) || 0),
      documents: Math.max(0, Number(preview && preview.document_count) || 0)
    }
  );
}

function conversationDeleteErrorMessage(detail, fallback) {
  const code = String(detail || "").trim();
  const messages = currentLanguage === "en"
    ? {
        conversation_delete_preview_stale: "This conversation changed. Open delete again to review the latest scope.",
        conversation_delete_token_invalid: "This delete confirmation is no longer valid. Open delete again.",
        conversation_delete_token_invalid_or_expired: "This delete confirmation expired. Open delete again.",
        conversation_delete_token_scope_mismatch: "This delete confirmation belongs to another conversation.",
        default_conversation_cannot_be_deleted: "The everyday conversation cannot be deleted.",
        conversation_not_found_or_scope_mismatch: "This conversation is no longer available."
      }
    : {
        conversation_delete_preview_stale: "这段会话刚刚有更新，请重新打开删除并核对最新范围。",
        conversation_delete_token_invalid: "这次删除确认已失效，请重新打开删除。",
        conversation_delete_token_invalid_or_expired: "这次删除确认已过期，请重新打开删除。",
        conversation_delete_token_scope_mismatch: "这次删除确认不属于当前会话。",
        default_conversation_cannot_be_deleted: "日常对话不能删除。",
        conversation_not_found_or_scope_mismatch: "这段会话已经不可用。"
      };
  return messages[code] || code || fallback;
}

async function confirmConversationDelete(row, item, preview, confirmButton) {
  if (!preview || !preview.confirmation_token) return;
  if (currentConversationId === item.conversation_id && conversationSwitchBlocked()) {
    setConversationFeedback(
      currentLanguage === "en"
        ? "Finish or cancel the current file upload before deleting this conversation."
        : "请先完成或取消当前文件上传，再删除这段会话。",
      "warning"
    );
    return;
  }
  confirmButton.disabled = true;
  confirmButton.setAttribute("aria-busy", "true");
  try {
    const response = await fetch(
      backendUrl(`/client/v1/conversations/${encodeURIComponent(item.conversation_id)}`),
      {
        method: "DELETE",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: currentSubjectId(),
          confirmation_token: preview.confirmation_token
        })
      }
    );
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      const detail = String(payload.detail || "");
      if (detail === "conversation_delete_preview_stale"
          || detail.includes("token_invalid")
          || detail.includes("token_scope_mismatch")) {
        row?.querySelector(".conversationDeletePanel")?.remove();
      }
      throw new Error(
        conversationDeleteErrorMessage(
          detail,
          currentLanguage === "en" ? "The conversation could not be deleted." : "暂时无法删除这段会话。"
        )
      );
    }
    const deletedCurrent = currentConversationId === item.conversation_id;
    if (deletedCurrent) {
      if (running) await stop().catch(() => {});
      else closeVoiceSocket("conversation_deleted");
      stopPlayback("conversation_deleted", { notifyInterrupt: false });
      currentConversationId = String(payload.next_conversation_id || "");
      currentProjectFilterId = "";
      projectFilterTouched = false;
      if (currentConversationId) rememberSelectedConversation(currentConversationId);
      resetConversationSurface();
    }
    conversationLibraryLoaded = false;
    projectLibraryLoaded = false;
    await refreshProjectLibrary({ force: true });
    await refreshConversationLibrary({ force: true });
    if (deletedCurrent) await loadConversationHistory({ force: true });
    setConversationFeedback(
      textFor(
        "conversation.deleteSuccess",
        currentLanguage === "en"
          ? "Conversation permanently deleted. Files and long-term memory were preserved."
          : "会话已永久删除；文件与长期记忆仍保留。"
      ),
      "success"
    );
  } catch (error) {
    setConversationFeedback(
      `${currentLanguage === "en" ? "Delete failed" : "删除失败"}：${error.message || ""}`,
      "error"
    );
    confirmButton.disabled = false;
    confirmButton.removeAttribute("aria-busy");
  }
}

async function beginConversationDelete(row, item) {
  if (!row || item.is_default || row.querySelector(".conversationDeletePanel")) return;
  if (currentConversationId === item.conversation_id && conversationSwitchBlocked()) {
    setConversationFeedback(
      currentLanguage === "en"
        ? "Finish or cancel the current file upload before deleting this conversation."
        : "请先完成或取消当前文件上传，再删除这段会话。",
      "warning"
    );
    return;
  }
  document.querySelectorAll(".conversationDeletePanel, .conversationRenameEditor").forEach(
    (element) => element.remove()
  );
  const panel = document.createElement("section");
  panel.className = "conversationDeletePanel";
  panel.setAttribute("role", "alertdialog");
  panel.setAttribute("aria-modal", "false");
  panel.setAttribute("aria-label", textFor("conversation.deleteKicker", "永久删除"));
  panel.dataset.loading = "true";

  const kicker = document.createElement("span");
  kicker.className = "conversationDeleteKicker";
  kicker.textContent = textFor("conversation.deleteKicker", "永久删除");
  const title = document.createElement("strong");
  title.textContent = formatTextFor(
    "conversation.deleteTitle",
    currentLanguage === "en" ? "Delete “{title}”?" : "删除「{title}」？",
    { title: String(item.title || textFor("conversation.defaultTitle", "日常对话")) }
  );
  const scope = document.createElement("p");
  scope.textContent = textFor("conversation.deleteLoading", "正在核对删除范围…");
  const warning = document.createElement("p");
  warning.className = "conversationDeleteWarning";
  warning.textContent = textFor("conversation.deleteWarning", "这项操作无法撤销。");
  const actions = document.createElement("div");
  actions.className = "conversationDeleteActions";
  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = textFor("conversation.deleteCancel", "取消");
  cancel.addEventListener("click", () => panel.remove());
  const confirm = document.createElement("button");
  confirm.type = "button";
  confirm.dataset.variant = "danger";
  confirm.disabled = true;
  confirm.textContent = textFor("conversation.deleteConfirm", "永久删除");
  actions.append(cancel, confirm);
  panel.append(kicker, title, scope, warning, actions);
  row.append(panel);
  window.requestAnimationFrame(() => {
    panel.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
  });

  try {
    const response = await fetch(
      backendUrl(`/client/v1/conversations/${encodeURIComponent(item.conversation_id)}/deletion-preview`),
      {
        method: "POST",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: currentSubjectId() }),
        cache: "no-store"
      }
    );
    const preview = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(
        conversationDeleteErrorMessage(
          preview.detail,
          currentLanguage === "en" ? "The deletion scope could not be loaded." : "暂时无法读取删除范围。"
        )
      );
    }
    if (!panel.isConnected) return;
    panel.dataset.loading = "false";
    scope.textContent = conversationDeleteScopeText(preview);
    confirm.disabled = false;
    confirm.addEventListener("click", () => {
      confirmConversationDelete(row, item, preview, confirm);
    });
    panel.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
    confirm.focus({ preventScroll: true });
  } catch (error) {
    panel.remove();
    setConversationFeedback(
      `${currentLanguage === "en" ? "Delete preview failed" : "删除预览失败"}：${error.message || ""}`,
      "error"
    );
  }
}

function conversationSearchMatch(item) {
  const match = item && item.search_match && typeof item.search_match === "object"
    ? item.search_match
    : null;
  if (!match || !["title", "message"].includes(String(match.kind || ""))) return null;
  return match;
}

function appendSearchHighlightedText(parent, text, rawHighlights) {
  if (!parent) return;
  const value = String(text || "");
  const highlights = (Array.isArray(rawHighlights) ? rawHighlights : [])
    .map((item) => ({
      start: Math.max(0, Math.min(value.length, Number(item && item.start) || 0)),
      end: Math.max(0, Math.min(value.length, Number(item && item.end) || 0))
    }))
    .filter((item) => item.end > item.start)
    .sort((left, right) => left.start - right.start)
    .slice(0, 4);
  if (!highlights.length) {
    parent.textContent = value;
    return;
  }
  let cursor = 0;
  highlights.forEach((highlight) => {
    if (highlight.start < cursor) return;
    if (highlight.start > cursor) {
      parent.appendChild(document.createTextNode(value.slice(cursor, highlight.start)));
    }
    const mark = document.createElement("mark");
    mark.textContent = value.slice(highlight.start, highlight.end);
    parent.appendChild(mark);
    cursor = highlight.end;
  });
  if (cursor < value.length) {
    parent.appendChild(document.createTextNode(value.slice(cursor)));
  }
}

function conversationSearchMatchLabel(match, item = null) {
  if (!match) return "";
  if (match.kind === "title") {
    return textFor("conversation.searchTitleMatch", "标题命中");
  }
  const role = match.role === "user" ? textFor("role.user", "你") : "Iris";
  const timestamp = match.time ? conversationUpdatedLabel(match.time) : "";
  const kind = textFor("conversation.searchMessageMatch", "消息内命中");
  const count = Math.max(0, Number(item && item.search_message_match_count) || 0);
  const countLabel = count > 1
    ? (currentLanguage === "en" ? `${count} matches` : `${count} 处`)
    : "";
  return [role, timestamp, kind, countLabel].filter(Boolean).join(" · ");
}

function clearConversationSearchSession() {
  conversationSearchSession = null;
  conversationSearchNavigationBusy = false;
  renderConversationSearchNavigator();
}

function renderConversationSearchNavigator() {
  const session = conversationSearchSession;
  const visible = Boolean(
    session
    && session.conversationId === currentConversationId
    && session.query
    && session.total > 0
  );
  if (!els.conversationSearchNavigator) return;
  els.conversationSearchNavigator.hidden = !visible;
  if (!visible) return;
  const current = Math.min(session.total, Math.max(0, session.activeOrdinal) + 1);
  if (els.conversationSearchNavigatorQuery) {
    els.conversationSearchNavigatorQuery.textContent = `“${session.query}”`;
    els.conversationSearchNavigatorQuery.title = session.query;
  }
  if (els.conversationSearchNavigatorPosition) {
    els.conversationSearchNavigatorPosition.textContent = formatTextFor(
      "conversation.searchPosition",
      "第 {current} / {total} 处",
      { current, total: session.total }
    );
  }
  if (els.conversationSearchPrevious) {
    els.conversationSearchPrevious.disabled = conversationSearchNavigationBusy || session.activeOrdinal <= 0;
    els.conversationSearchPrevious.setAttribute(
      "aria-label",
      textFor("conversation.searchPrevious", "上一个命中")
    );
  }
  if (els.conversationSearchNext) {
    els.conversationSearchNext.disabled = (
      conversationSearchNavigationBusy
      || session.activeOrdinal >= session.total - 1
    );
    els.conversationSearchNext.setAttribute(
      "aria-label",
      textFor("conversation.searchNext", "下一个命中")
    );
  }
  if (els.conversationSearchClose) {
    els.conversationSearchClose.disabled = conversationSearchNavigationBusy;
    els.conversationSearchClose.setAttribute(
      "aria-label",
      textFor("conversation.searchClose", "关闭命中导航")
    );
  }
  els.conversationSearchNavigator.dataset.busy = conversationSearchNavigationBusy ? "true" : "false";
}

async function conversationSearchMatchAtOrdinal(ordinal) {
  const session = conversationSearchSession;
  if (!session) return null;
  const target = Math.max(0, Math.min(session.total - 1, Number(ordinal) || 0));
  if (session.matches.has(target)) return session.matches.get(target);
  const pageSize = 30;
  const offset = Math.floor(target / pageSize) * pageSize;
  const params = new URLSearchParams({
    q: session.query,
    offset: String(offset),
    limit: String(pageSize)
  });
  const response = await fetch(
    backendUrl(`/client/v1/conversations/${encodeURIComponent(session.conversationId)}/matches?${params}`),
    { headers: authHeaders(), cache: "no-store" }
  );
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    throw new Error(payload.detail || `HTTP ${response.status}`);
  }
  if (!conversationSearchSession || conversationSearchSession !== session) return null;
  session.total = Math.max(0, Number(payload.count) || 0);
  (Array.isArray(payload.items) ? payload.items : []).forEach((item) => {
    const itemOrdinal = Number(item && item.ordinal);
    if (Number.isInteger(itemOrdinal) && itemOrdinal >= 0) {
      session.matches.set(itemOrdinal, item);
    }
  });
  renderConversationSearchNavigator();
  return session.matches.get(target) || null;
}

async function navigateConversationSearch(delta) {
  const session = conversationSearchSession;
  if (!session || conversationSearchNavigationBusy) return;
  const target = Math.max(
    0,
    Math.min(session.total - 1, session.activeOrdinal + Number(delta || 0))
  );
  if (target === session.activeOrdinal) return;
  conversationSearchNavigationBusy = true;
  renderConversationSearchNavigator();
  try {
    const match = await conversationSearchMatchAtOrdinal(target);
    if (!match || !match.turn_id) throw new Error("search_match_unavailable");
    if (!conversationSearchSession || conversationSearchSession !== session) return;
    session.activeOrdinal = target;
    renderConversationSearchNavigator();
    await switchConversation(session.conversationId, {
      anchorTurnId: String(match.turn_id || ""),
      anchorMessageIndex: Number(match.message_index),
      preserveSearchNavigation: true
    });
  } catch (error) {
    setConversationFeedback(
      `${currentLanguage === "en" ? "Unable to locate match" : "暂时无法定位这处内容"}：${error.message || ""}`,
      "error"
    );
  } finally {
    conversationSearchNavigationBusy = false;
    renderConversationSearchNavigator();
  }
}

function openConversationSearchResult(item, searchMatch) {
  if (!searchMatch || searchMatch.kind !== "message") {
    clearConversationSearchSession();
    return switchConversation(item.conversation_id);
  }
  const query = String(els.conversationSearch && els.conversationSearch.value || "").trim();
  const ordinal = Math.max(0, Number(searchMatch.ordinal) || 0);
  const total = Math.max(1, Number(item.search_message_match_count) || 1);
  conversationSearchSession = {
    conversationId: String(item.conversation_id || ""),
    query,
    total,
    activeOrdinal: Math.min(total - 1, ordinal),
    matches: new Map([[Math.min(total - 1, ordinal), searchMatch]])
  };
  renderConversationSearchNavigator();
  return switchConversation(item.conversation_id, {
    anchorTurnId: String(searchMatch.turn_id || ""),
    anchorMessageIndex: Number(searchMatch.message_index),
    preserveSearchNavigation: true
  });
}

function renderConversationLibrary() {
  if (!els.conversationList) return;
  els.conversationList.replaceChildren();
  updateConversationIdentity();
  const visibleItems = conversationLibraryItems.filter((item) => (
    currentProjectFilterId
      ? String(item.project_id || "") === currentProjectFilterId
      : !String(item.project_id || "")
  ));
  if (!visibleItems.length) {
    const empty = document.createElement("p");
    empty.className = "conversationLibraryEmpty";
    empty.textContent = currentLanguage === "en" ? "No matching conversations." : "没有匹配的会话。";
    els.conversationList.append(empty);
    return;
  }
  const fragment = document.createDocumentFragment();
  visibleItems.forEach((item) => {
    const searchMatch = conversationSearchMatch(item);
    const row = document.createElement("article");
    row.className = "conversationLibraryItem";
    row.dataset.current = item.conversation_id === currentConversationId ? "true" : "false";
    row.dataset.status = item.status || "active";
    row.dataset.memoryMode = item.memory_mode || "personal";
    if (searchMatch) row.dataset.searchKind = searchMatch.kind;

    const select = document.createElement("button");
    select.type = "button";
    select.className = "conversationSelect";
    select.disabled = item.status === "archived";
    select.setAttribute("aria-current", row.dataset.current === "true" ? "true" : "false");
    const title = document.createElement("strong");
    const titleText = item.title || textFor("conversation.defaultTitle", "日常对话");
    if (searchMatch && searchMatch.kind === "title") {
      appendSearchHighlightedText(title, titleText, searchMatch.highlights);
    } else {
      title.textContent = titleText;
    }
    const preview = document.createElement("span");
    preview.className = "conversationPreview";
    const previewText = searchMatch && searchMatch.kind === "message"
      ? String(searchMatch.snippet || "")
      : item.last_message_preview
        || (currentLanguage === "en" ? "Start a new thought here." : "从这里开始一段新的想法。");
    if (searchMatch && searchMatch.kind === "message") {
      preview.classList.add("conversationSearchSnippet");
      appendSearchHighlightedText(preview, previewText, searchMatch.highlights);
    } else {
      preview.textContent = previewText;
    }
    const meta = document.createElement("span");
    meta.className = "conversationMeta";
    const project = projectLibraryItems.find((candidate) => candidate.project_id === item.project_id);
    const projectLabel = project ? ` · ${project.name}` : "";
    const expiryLabel = item.memory_mode === "temporary"
      ? ` · ${textFor("conversation.temporaryExpires", "{time} 自动清除").replace(
        "{time}",
        conversationTemporaryExpiryLabel(item, { compact: true })
      )}`
      : "";
    meta.textContent = `${conversationUpdatedLabel(item.updated_at)} · ${Math.max(0, Number(item.message_count || 0))} ${currentLanguage === "en" ? "messages" : "条消息"}${projectLabel}${expiryLabel}`;
    select.append(title);
    if (item.memory_mode === "temporary") {
      const privacyBadge = document.createElement("span");
      privacyBadge.className = "conversationPrivacyBadge";
      privacyBadge.textContent = textFor("conversation.temporaryBadge", "临时");
      select.appendChild(privacyBadge);
    }
    select.append(preview);
    if (searchMatch) {
      const matchMeta = document.createElement("span");
      matchMeta.className = "conversationSearchMatchMeta";
      matchMeta.textContent = conversationSearchMatchLabel(searchMatch, item);
      select.appendChild(matchMeta);
    }
    if (item.parent_conversation_id || item.branch_source_deleted) {
      const lineage = document.createElement("span");
      lineage.className = "conversationLineage";
      lineage.textContent = item.branch_source_deleted
        ? (currentLanguage === "en" ? "Independent branch · source deleted" : "独立分支 · 来源已删除")
        : currentLanguage === "en"
          ? `Branch · depth ${Math.max(1, Number(item.branch_depth || 1))}`
          : `独立分支 · 第 ${Math.max(1, Number(item.branch_depth || 1))} 层`;
      select.appendChild(lineage);
    }
    select.appendChild(meta);
    select.addEventListener("click", () => {
      openConversationSearchResult(item, searchMatch).catch((error) => {
        setConversationFeedback(`${currentLanguage === "en" ? "Switch failed" : "切换失败"}：${error.message || ""}`, "error");
      });
    });

    const actions = document.createElement("div");
    actions.className = "conversationItemActions";
    if (item.status === "archived") {
      const restore = document.createElement("button");
      restore.type = "button";
      restore.textContent = currentLanguage === "en" ? "Restore" : "恢复";
      restore.addEventListener("click", () => {
        setConversationArchived(item, false).catch((error) => {
          setConversationFeedback(`${currentLanguage === "en" ? "Restore failed" : "恢复失败"}：${error.message || ""}`, "error");
        });
      });
      actions.append(restore);
    } else {
      const rename = document.createElement("button");
      rename.type = "button";
      rename.textContent = currentLanguage === "en" ? "Rename" : "改名";
      rename.addEventListener("click", () => beginConversationRename(row, item));
      actions.append(rename);
      if (!item.is_default) {
        const archive = document.createElement("button");
        archive.type = "button";
        archive.textContent = currentLanguage === "en" ? "Archive" : "归档";
        archive.addEventListener("click", () => {
          setConversationArchived(item, true).catch((error) => {
            setConversationFeedback(`${currentLanguage === "en" ? "Archive failed" : "归档失败"}：${error.message || ""}`, "error");
          });
        });
        actions.append(archive);
      }
    }
    if (Number(item.message_count || 0) > 0) {
      if (item.memory_mode !== "temporary") {
        const share = document.createElement("button");
        share.type = "button";
        share.textContent = textFor("conversation.share", "分享");
        share.addEventListener("click", () => openConversationShareDialog(item, share));
        actions.appendChild(share);
      }
      actions.appendChild(conversationExportControl(item));
    }
    if (!item.is_default) {
      const remove = document.createElement("button");
      remove.type = "button";
      remove.dataset.variant = "danger";
      remove.textContent = textFor("conversation.delete", "删除");
      remove.addEventListener("click", () => {
        beginConversationDelete(row, item);
      });
      actions.append(remove);
    }
    row.append(select, actions);
    fragment.append(row);
  });
  els.conversationList.append(fragment);
}

async function refreshConversationLibrary({ force = false } = {}) {
  if (conversationLibraryLoading || (!force && conversationLibraryLoaded)) return;
  if (!canUseBackendNow()) return;
  conversationLibraryLoading = true;
  if (els.conversationList) els.conversationList.setAttribute("aria-busy", "true");
  const params = new URLSearchParams();
  const query = String(els.conversationSearch && els.conversationSearch.value || "").trim();
  if (query) params.set("q", query);
  if (els.conversationIncludeArchived && els.conversationIncludeArchived.checked) {
    params.set("include_archived", "true");
  }
  try {
    const response = await fetch(backendUrl(`/client/v1/conversations${params.toString() ? `?${params}` : ""}`), {
      headers: authHeaders(),
      cache: "no-store"
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    conversationLibraryItems = Array.isArray(payload.items) ? payload.items : [];
    const activeIds = new Set(
      conversationLibraryItems
        .filter((item) => item.status !== "archived")
        .map((item) => item.conversation_id)
    );
    if (!currentConversationId || (!query && !activeIds.has(currentConversationId))) {
      const remembered = selectedConversationId();
      currentConversationId = activeIds.has(remembered)
        ? remembered
        : String(payload.default_conversation_id || "");
      if (currentConversationId) rememberSelectedConversation(currentConversationId);
    }
    if (!projectFilterTouched) {
      const current = conversationLibraryItems.find((item) => item.conversation_id === currentConversationId);
      currentProjectFilterId = String(current && current.project_id || "");
    }
    renderConversationLibrary();
    renderProjectSpaceControl();
    conversationLibraryLoaded = true;
    setConversationFeedback("");
  } finally {
    conversationLibraryLoading = false;
    if (els.conversationList) els.conversationList.setAttribute("aria-busy", "false");
  }
}

function conversationSwitchBlocked() {
  const batchActive = Boolean(
    activeDocumentBatch
    && Array.isArray(activeDocumentBatch.items)
    && activeDocumentBatch.items.some((item) => !documentBatchItemTerminal(item))
  );
  return documentUploadInFlight || documentJobActive || batchActive;
}

function resetConversationDocumentContext() {
  currentDocumentId = "";
  currentDocumentName = "";
  currentDocumentSummary = "";
  currentDocumentSummaryData = null;
  currentDocumentWarnings = [];
  currentDocumentAnswerMode = "";
  currentDocumentReadyFileMessageId = "";
  currentDocumentReadyAssistantMessageId = "";
  setDocumentAnswer(" ");
  setDocumentContextVisible(false);
  setDocumentStatus("", "info");
  setDocumentUploadStatus("", "info", false);
}

function resetConversationSurface({ preserveSearchNavigation = false } = {}) {
  conversationHistoryRequestSeq += 1;
  conversationVersionRequestSeq += 1;
  textPromptSeq += 1;
  conversationVersionGroup = null;
  if (els.conversationStream) els.conversationStream.replaceChildren();
  conversationMessageSeq = 0;
  activeAssistantMessageId = "";
  connectionStatusMessageId = "";
  conversationHistoryLoaded = false;
  conversationHistoryLoading = false;
  conversationHistoryPageLoading = false;
  conversationHistoryWindow = {
    start: 0,
    end: 0,
    total: 0,
    hasMoreBefore: false,
    hasMoreAfter: false
  };
  if (!preserveSearchNavigation) clearConversationSearchSession();
  resetConversationDocumentContext();
  ensureAssistantConversationAnchor();
}

function focusConversationSearchHit(turnId, historyIndex = -1) {
  if (!els.conversationStream || !turnId) return false;
  const safeTurnId = String(turnId);
  const candidates = Array.from(
    els.conversationStream.querySelectorAll("[data-turn-id]")
  ).filter((item) => item.dataset.turnId === safeTurnId);
  const target = candidates.find(
    (item) => Number(item.dataset.historyIndex) === Number(historyIndex)
  ) || candidates[0];
  if (!target) return false;
  target.classList.remove("conversationSearchAnchorHit");
  void target.offsetWidth;
  target.classList.add("conversationSearchAnchorHit");
  target.setAttribute("tabindex", "-1");
  const targetTop = target.offsetTop;
  const centeredTop = Math.max(
    0,
    targetTop - (els.conversationStream.clientHeight - target.offsetHeight) / 2
  );
  els.conversationStream.scrollTo({
    top: centeredTop,
    behavior: "auto"
  });
  target.focus({ preventScroll: true });
  window.setTimeout(() => {
    target.classList.remove("conversationSearchAnchorHit");
    target.removeAttribute("tabindex");
  }, 3200);
  setSubtitle(textFor("conversation.searchLocated", "已定位到历史消息"), {
    speaker: "IRIS",
    resetFlow: true
  });
  return true;
}

async function switchConversation(
  conversationId,
  {
    keepDetails = false,
    anchorTurnId = "",
    anchorMessageIndex = -1,
    preserveSearchNavigation = false,
    versionSourceTurnId = ""
  } = {}
) {
  const nextId = String(conversationId || "").trim();
  const safeAnchorTurnId = String(anchorTurnId || "").trim();
  const safeVersionSourceTurnId = String(versionSourceTurnId || "").trim();
  if (!nextId) {
    if (!keepDetails) closeDetails();
    return;
  }
  if (nextId === currentConversationId && !safeAnchorTurnId && !safeVersionSourceTurnId) {
    if (!preserveSearchNavigation) clearConversationSearchSession();
    if (!keepDetails) closeDetails();
    return;
  }
  if (conversationSwitchBlocked()) {
    setConversationFeedback(
      currentLanguage === "en"
        ? "Finish or cancel the current file upload before switching conversations."
        : "请先完成或取消当前文件上传，再切换会话。",
      "warning"
    );
    return;
  }
  if (running) await stop().catch(() => {});
  else closeVoiceSocket("conversation_switch");
  stopPlayback("conversation_switch", { notifyInterrupt: false });
  if (nextId !== currentConversationId) {
    currentConversationId = nextId;
    const nextRecord = conversationLibraryItems.find((item) => item.conversation_id === nextId);
    currentProjectFilterId = String(nextRecord && nextRecord.project_id || "");
    projectFilterTouched = false;
    rememberSelectedConversation(nextId);
  }
  resetConversationSurface({ preserveSearchNavigation });
  conversationVersionSourceTurnId = safeVersionSourceTurnId;
  renderConversationLibrary();
  renderConversationSearchNavigator();
  const historyPayload = await loadConversationHistory({
    force: true,
    anchorTurnId: safeAnchorTurnId,
    anchorMessageIndex
  });
  if (!keepDetails) closeDetails();
  if (safeAnchorTurnId && historyPayload && historyPayload.anchor_found) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        focusConversationSearchHit(safeAnchorTurnId, anchorMessageIndex);
      });
    });
  }
  const activeRecord = currentConversationRecord();
  setSubtitle(
    activeRecord && activeRecord.memory_mode === "temporary"
      ? (
        currentLanguage === "en"
          ? "Temporary chat. Long-term memory is off."
          : "临时对话已接上，不会使用长期记忆。"
      )
      : (currentLanguage === "en" ? "This conversation is ready." : "这段会话已经接上。"),
    {
      speaker: "IRIS",
      resetFlow: true
    }
  );
  return historyPayload;
}

async function createNewConversation({ memoryMode = "personal" } = {}) {
  const temporary = memoryMode === "temporary";
  if (conversationSwitchBlocked()) {
    setConversationFeedback(
      currentLanguage === "en"
        ? "Finish or cancel the current file upload before starting a new chat."
        : "请先完成或取消当前文件上传，再新建会话。",
      "warning"
    );
    return;
  }
  const trigger = temporary ? els.conversationTemporary : els.conversationNew;
  if (trigger) {
    trigger.disabled = true;
    trigger.setAttribute("aria-busy", "true");
  }
  try {
    const response = await fetch(backendUrl("/client/v1/conversations"), {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentSubjectId(),
        memory_mode: temporary ? "temporary" : "personal",
        ...(!temporary && currentProjectFilterId ? { project_id: currentProjectFilterId } : {})
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    conversationLibraryLoaded = false;
    await refreshConversationLibrary({ force: true });
    await switchConversation(payload.conversation_id);
  } finally {
    if (trigger) {
      trigger.disabled = false;
      trigger.removeAttribute("aria-busy");
    }
  }
}

async function initializeConversationSpace() {
  await refreshProjectLibrary({ force: true });
  await refreshConversationLibrary({ force: true });
  await loadConversationHistory({ force: true });
}

function clearWelcomeMessageForHistory() {
  if (!els.conversationStream) return;
  els.conversationStream.querySelectorAll('[data-kind="welcome"]').forEach((item) => item.remove());
}

function conversationVersionModeLabel(mode) {
  if (mode === "edit") return textFor("conversation.versionEdit", "编辑版");
  if (mode === "regenerate") return textFor("conversation.versionRegenerate", "重试版");
  return textFor("conversation.versionOriginal", "原版");
}

function conversationVersionTarget(group = conversationVersionGroup) {
  if (!els.conversationStream || !group || !Array.isArray(group.items)) return null;
  const current = group.items.find(
    (item) => item.conversation_id === currentConversationId
  );
  if (!current) return null;
  if (current.conversation_id === group.source_conversation_id) {
    return Array.from(
      els.conversationStream.querySelectorAll(".message.assistant[data-turn-id]")
    ).find((item) => item.dataset.turnId === String(group.source_turn_id || "")) || null;
  }
  const prefixCount = Math.max(0, Number(current.fork_prefix_message_count || 0));
  const expectedHistoryIndex = prefixCount + 1;
  const persisted = els.conversationStream.querySelector(
    `.message.assistant[data-history-index="${expectedHistoryIndex}"]`
  );
  if (persisted) return persisted;
  const live = Array.from(
    els.conversationStream.querySelectorAll(
      ".message.assistant[data-turn-id]:not([data-history-index])"
    )
  ).filter((item) => item.dataset.kind !== "welcome");
  return live.at(-1) || null;
}

function conversationVersionChevron(direction) {
  const path = direction === "previous"
    ? '<path d="m12.5 4.5-5 5 5 5"/>'
    : '<path d="m7.5 4.5 5 5-5 5"/>';
  return `<svg viewBox="0 0 20 20" aria-hidden="true">${path}</svg>`;
}

async function switchConversationVersion(nextIndex) {
  const group = conversationVersionGroup;
  if (
    !group
    || group.busy
    || !Array.isArray(group.items)
    || nextIndex < 0
    || nextIndex >= group.items.length
  ) return;
  const target = group.items[nextIndex];
  if (!target || target.conversation_id === currentConversationId) return;
  if (conversationSwitchBlocked()) {
    setSubtitle(
      currentLanguage === "en"
        ? "Finish or cancel the current file upload before switching versions."
        : "请先完成或取消当前文件上传，再切换版本。",
      { speaker: "IRIS", resetFlow: true }
    );
    return;
  }
  group.busy = true;
  document.querySelectorAll(".conversationVersionNavigator").forEach((item) => {
    item.dataset.busy = "true";
    item.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  });
  try {
    const payload = await switchConversation(target.conversation_id, {
      versionSourceTurnId: group.source_turn_id
    });
    if (!payload) throw new Error("conversation_version_history_unavailable");
  } catch (error) {
    group.busy = false;
    renderConversationVersionNavigator();
    setSubtitle(
      `${textFor("conversation.versionSwitchFailed", "版本切换失败")}：${error.message || ""}`,
      { speaker: "IRIS", resetFlow: true }
    );
  }
}

function renderConversationVersionNavigator() {
  if (!els.conversationStream) return;
  els.conversationStream.querySelectorAll(".conversationVersionNavigator")
    .forEach((item) => item.remove());
  els.conversationStream.querySelectorAll(".conversationBranchContext.hasVersionNavigator")
    .forEach((item) => item.classList.remove("hasVersionNavigator"));
  const group = conversationVersionGroup;
  if (!group || !Array.isArray(group.items) || group.items.length <= 1) return;
  const currentIndex = group.items.findIndex(
    (item) => item.conversation_id === currentConversationId
  );
  if (currentIndex < 0) return;
  const current = group.items[currentIndex];
  const navigator = document.createElement("div");
  navigator.className = "conversationVersionNavigator";
  navigator.setAttribute("role", "group");
  navigator.setAttribute(
    "aria-label",
    `${conversationVersionModeLabel(current.version_mode)} · ${currentIndex + 1} / ${group.items.length}`
  );
  const previous = document.createElement("button");
  previous.type = "button";
  previous.className = "conversationVersionPrevious";
  previous.innerHTML = conversationVersionChevron("previous");
  previous.setAttribute(
    "aria-label",
    textFor("conversation.versionPrevious", "上一版本")
  );
  previous.title = previous.getAttribute("aria-label");
  previous.disabled = currentIndex === 0;
  previous.addEventListener("click", () => switchConversationVersion(currentIndex - 1));
  const position = document.createElement("span");
  position.className = "conversationVersionPosition";
  position.setAttribute("role", "status");
  position.setAttribute("aria-live", "polite");
  const mode = document.createElement("span");
  mode.className = "conversationVersionMode";
  mode.textContent = conversationVersionModeLabel(current.version_mode);
  const count = document.createElement("span");
  count.className = "conversationVersionCount";
  count.textContent = formatTextFor(
    "conversation.versionPosition",
    "{current} / {total}",
    { current: currentIndex + 1, total: group.items.length }
  );
  position.append(mode, count);
  const next = document.createElement("button");
  next.type = "button";
  next.className = "conversationVersionNext";
  next.innerHTML = conversationVersionChevron("next");
  next.setAttribute("aria-label", textFor("conversation.versionNext", "下一版本"));
  next.title = next.getAttribute("aria-label");
  next.disabled = currentIndex === group.items.length - 1;
  next.addEventListener("click", () => switchConversationVersion(currentIndex + 1));
  navigator.append(previous, position, next);

  const target = conversationVersionTarget(group);
  if (target) {
    target.appendChild(navigator);
    return;
  }
  const branchContext = els.conversationStream.querySelector(".conversationBranchContext");
  if (branchContext) {
    branchContext.classList.add("hasVersionNavigator");
    branchContext.appendChild(navigator);
    return;
  }
  navigator.classList.add("isFallback");
  els.conversationStream.prepend(navigator);
}

async function loadConversationVersionGroup(record, { sourceTurnId = "" } = {}) {
  const conversationId = String(
    record && record.conversation_id || currentConversationId || ""
  ).trim();
  if (!conversationId) {
    conversationVersionGroup = null;
    renderConversationVersionNavigator();
    return null;
  }
  const requestId = conversationVersionRequestSeq + 1;
  conversationVersionRequestSeq = requestId;
  const params = new URLSearchParams();
  const requestedSourceTurnId = String(
    sourceTurnId || conversationVersionSourceTurnId || ""
  ).trim();
  if (requestedSourceTurnId) params.set("source_turn_id", requestedSourceTurnId);
  try {
    const response = await fetch(
      backendUrl(
        `/client/v1/conversations/${encodeURIComponent(conversationId)}/versions`
        + `${params.toString() ? `?${params}` : ""}`
      ),
      { headers: authHeaders(), cache: "no-store" }
    );
    const payload = await response.json().catch(() => ({}));
    if (
      requestId !== conversationVersionRequestSeq
      || conversationId !== currentConversationId
    ) return null;
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `versions_${response.status}`);
    }
    conversationVersionGroup = (
      Array.isArray(payload.items)
      && payload.items.length > 1
      && payload.items.some((item) => item.conversation_id === currentConversationId)
    ) ? { ...payload, busy: false } : null;
    conversationVersionSourceTurnId = String(payload.source_turn_id || "");
    renderConversationVersionNavigator();
    return conversationVersionGroup;
  } catch (error) {
    if (requestId === conversationVersionRequestSeq) {
      conversationVersionGroup = null;
      renderConversationVersionNavigator();
      logLine(`conversation versions skipped ${error.message || ""}`.trim());
    }
    return null;
  }
}

function renderConversationBranchContext(record) {
  if (!els.conversationStream) return;
  els.conversationStream.querySelectorAll(".conversationBranchContext").forEach((item) => item.remove());
  if (!record || !record.parent_conversation_id || !record.branched_from_turn_id) return;
  const parent = conversationLibraryItems.find(
    (item) => item.conversation_id === record.parent_conversation_id
  );
  const note = document.createElement("aside");
  note.className = "conversationBranchContext";
  note.setAttribute("role", "note");
  const marker = document.createElement("span");
  marker.setAttribute("aria-hidden", "true");
  marker.innerHTML = feedbackIcon("branch");
  const copy = document.createElement("span");
  const parentTitle = String(parent && parent.title || "").trim();
  copy.textContent = currentLanguage === "en"
    ? `Independent branch${parentTitle ? ` from “${parentTitle}”` : ""} · continuing here will not change the original`
    : `独立分支${parentTitle ? ` · 来自「${parentTitle}」` : ""} · 在这里继续不会改动原会话`;
  note.append(marker, copy);
  els.conversationStream.prepend(note);
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
  const body = document.createElement("div");
  body.className = "messageText";
  renderAssistantReplyBody(
    body,
    textFor("welcome.message", "我在。你可以直接说，也可以把文件发给我。")
  );
  item.append(meta, body);
  els.conversationStream.prepend(item);
}

function historyMessageLabel(role, time) {
  const prefix = role === "user" ? textFor("role.user", "你") : "Iris";
  const recent = textFor("role.recent", "最近");
  if (!time) return `${prefix} · ${recent}`;
  const parsed = new Date(time);
  if (Number.isNaN(parsed.getTime())) return `${prefix} · ${recent}`;
  return `${prefix} · ${parsed.toLocaleString(currentLanguage === "en" ? "en-US" : "zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  })}`;
}

function appendConversationHistoryItem(
  item,
  historyIndex,
  {
    beforeElement = null,
    forceScroll = false,
    suppressScroll = false
  } = {}
) {
  if (!els.conversationStream || !item || historyIndex < 0) return "";
  if (els.conversationStream.querySelector(`[data-history-index="${historyIndex}"]`)) return "";
  const role = item.role === "user" ? "user" : "assistant";
  const documentComparison = role === "assistant"
    ? clientDocumentComparisonPayload(item.ui_payload)
    : null;
  const multiIntent = role === "assistant"
    ? clientMultiIntentPayload(item.ui_payload)
    : null;
  const researchVerification = role === "assistant"
    ? clientResearchVerificationPayload(item.ui_payload)
    : null;
  const deepResearch = role === "assistant"
    ? clientDeepResearchPayload(item.ui_payload)
    : null;
  const thinking = role === "assistant"
    ? clientThinkingPayload(item.ui_payload)
    : null;
  return appendConversationMessage(role, item.content || "", {
    id: `history_${historyIndex}_${Math.abs(String(item.time || historyIndex).split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0))}`,
    label: historyMessageLabel(role, item.time),
    kind: documentComparison
      ? "document_comparison"
      : deepResearch
        ? "deep_research"
        : researchVerification
          ? "research_verification"
          : multiIntent
            ? "multi_intent"
            : "history",
    forceScroll,
    suppressScroll,
    beforeElement,
    turnId: String(item.turn_id || ""),
    historyIndex,
    documentComparison,
    multiIntent,
    researchVerification,
    deepResearch,
    thinking,
    feedbackTarget: role === "assistant" && item.turn_id ? {
      turn_id: item.turn_id,
      response_id: item.response_id || "",
      channel: item.client_type === "voice" ? "voice" : "web"
    } : null,
    editableTarget: role === "user" && item.turn_id ? {
      turn_id: item.turn_id,
      source_text: item.content || ""
    } : null
  });
}

function updateConversationHistoryWindow(payload, { merge = false } = {}) {
  const start = Math.max(0, Number(payload && payload.window_start) || 0);
  const end = Math.max(start, Number(payload && payload.window_end) || 0);
  const total = Math.max(end, Number(payload && payload.total_messages) || 0);
  if (merge && conversationHistoryWindow.total) {
    conversationHistoryWindow = {
      start: Math.min(conversationHistoryWindow.start, start),
      end: Math.max(conversationHistoryWindow.end, end),
      total,
      hasMoreBefore: Math.min(conversationHistoryWindow.start, start) > 0,
      hasMoreAfter: Math.max(conversationHistoryWindow.end, end) < total
    };
    return;
  }
  conversationHistoryWindow = {
    start,
    end,
    total,
    hasMoreBefore: Boolean(payload && payload.has_more_before),
    hasMoreAfter: Boolean(payload && payload.has_more_after)
  };
}

function conversationHistoryPager(direction) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "conversationHistoryPager";
  button.dataset.direction = direction;
  button.disabled = conversationHistoryPageLoading;
  button.setAttribute("aria-busy", conversationHistoryPageLoading ? "true" : "false");
  button.textContent = conversationHistoryPageLoading
    ? textFor("conversation.historyLoading", "正在载入…")
    : direction === "before"
      ? textFor("conversation.historyEarlier", "载入更早消息")
      : textFor("conversation.historyLater", "载入更新消息");
  button.addEventListener("click", () => {
    loadConversationHistoryPage(direction).catch((error) => {
      setConversationFeedback(
        `${currentLanguage === "en" ? "History load failed" : "历史消息载入失败"}：${error.message || ""}`,
        "error"
      );
    });
  });
  return button;
}

function renderConversationHistoryPagers() {
  if (!els.conversationStream) return;
  els.conversationStream.querySelectorAll(".conversationHistoryPager").forEach((item) => item.remove());
  if (!conversationHistoryWindow.total) return;
  const firstHistoryItem = els.conversationStream.querySelector("[data-history-index]");
  if (conversationHistoryWindow.hasMoreBefore) {
    const before = conversationHistoryPager("before");
    if (firstHistoryItem) els.conversationStream.insertBefore(before, firstHistoryItem);
    else els.conversationStream.appendChild(before);
  }
  if (conversationHistoryWindow.hasMoreAfter) {
    els.conversationStream.appendChild(conversationHistoryPager("after"));
  }
}

async function loadConversationHistoryPage(direction) {
  if (
    conversationHistoryPageLoading
    || !els.conversationStream
    || !currentConversationId
    || !["before", "after"].includes(direction)
  ) return;
  if (direction === "before" && !conversationHistoryWindow.hasMoreBefore) return;
  if (direction === "after" && !conversationHistoryWindow.hasMoreAfter) return;
  els.conversationStream.scrollTo({
    top: els.conversationStream.scrollTop,
    behavior: "auto"
  });
  conversationHistoryPageLoading = true;
  renderConversationHistoryPagers();
  const requestedConversationId = currentConversationId;
  const pageSize = 80;
  const requestedStart = direction === "before"
    ? Math.max(0, conversationHistoryWindow.start - pageSize)
    : conversationHistoryWindow.end;
  const requestedLimit = direction === "before"
    ? Math.max(1, conversationHistoryWindow.start - requestedStart)
    : pageSize;
  try {
    const params = new URLSearchParams({
      conversation_id: requestedConversationId,
      durable_window: "true",
      window_start: String(requestedStart),
      window_limit: String(requestedLimit)
    });
    const response = await fetch(
      backendUrl(`/client/v1/conversation/history?${params}`),
      { headers: authHeaders(), cache: "no-store" }
    );
    const payload = await response.json().catch(() => ({}));
    if (requestedConversationId !== currentConversationId) return;
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `history_${response.status}`);
    }
    const items = Array.isArray(payload.items) ? payload.items : [];
    els.conversationStream.querySelectorAll(".conversationHistoryPager").forEach((item) => item.remove());
    const previousHeight = els.conversationStream.scrollHeight;
    const previousTop = els.conversationStream.scrollTop;
    const beforeElement = direction === "before"
      ? els.conversationStream.querySelector("[data-history-index]")
      : null;
    const windowStart = Math.max(0, Number(payload.window_start) || 0);
    items.forEach((item, index) => {
      appendConversationHistoryItem(item, windowStart + index, {
        beforeElement,
        suppressScroll: true
      });
    });
    updateConversationHistoryWindow(payload, { merge: true });
    renderConversationHistoryPagers();
    renderConversationVersionNavigator();
    if (direction === "before") {
      const addedHeight = els.conversationStream.scrollHeight - previousHeight;
      els.conversationStream.scrollTo({
        top: previousTop + Math.max(0, addedHeight),
        behavior: "auto"
      });
    }
    logLine(`loaded ${items.length} ${direction} durable conversation messages`);
  } finally {
    conversationHistoryPageLoading = false;
    renderConversationHistoryPagers();
  }
}

async function loadConversationHistory({
  force = false,
  anchorTurnId = "",
  anchorMessageIndex = -1
} = {}) {
  if (force) conversationHistoryLoaded = false;
  if (conversationHistoryLoaded || conversationHistoryLoading || !window.fetch || !els.conversationStream) return;
  if (shouldSkipConversationHistory()) {
    conversationHistoryLoaded = true;
    ensureAssistantConversationAnchor();
    logLine("conversation history skipped for screenshot QA");
    return;
  }
  const requestId = conversationHistoryRequestSeq + 1;
  const requestedConversationId = String(currentConversationId || "");
  conversationHistoryRequestSeq = requestId;
  conversationHistoryLoading = true;
  try {
    const params = new URLSearchParams({
      since_hours: "336",
      limit: "120",
      durable_window: "true",
      window_limit: "120"
    });
    if (currentConversationId) params.set("conversation_id", currentConversationId);
    const safeAnchorTurnId = String(anchorTurnId || "").trim();
    if (safeAnchorTurnId) {
      params.set("anchor_turn_id", safeAnchorTurnId);
      if (Number.isInteger(Number(anchorMessageIndex)) && Number(anchorMessageIndex) >= 0) {
        params.set("anchor_message_index", String(Math.trunc(Number(anchorMessageIndex))));
      }
      params.set("window_before", "40");
      params.set("window_after", "40");
    }
    const response = await fetch(backendUrl(`/client/v1/conversation/history?${params}`), {
      headers: authHeaders()
    });
    const payload = await response.json().catch(() => ({}));
    if (
      requestId !== conversationHistoryRequestSeq
      || (requestedConversationId && requestedConversationId !== currentConversationId)
    ) {
      logLine("stale conversation history skipped");
      return;
    }
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `history_${response.status}`);
    }
    currentConversationId = String(payload.conversation_id || currentConversationId || "");
    if (currentConversationId) rememberSelectedConversation(currentConversationId);
    if (payload.conversation) {
      const existingIndex = conversationLibraryItems.findIndex((item) => item.conversation_id === currentConversationId);
      if (existingIndex >= 0) conversationLibraryItems[existingIndex] = payload.conversation;
      updateConversationIdentity(payload.conversation);
      renderConversationBranchContext(payload.conversation);
    }
    const items = Array.isArray(payload.items) ? payload.items : [];
    updateConversationHistoryWindow(payload);
    if (!items.length) {
      renderConversationHistoryPagers();
      await loadConversationVersionGroup(payload.conversation || null, {
        sourceTurnId: conversationVersionSourceTurnId
      });
      return payload;
    }
    clearWelcomeMessageForHistory();
    const windowStart = Math.max(0, Number(payload.window_start) || 0);
    items.forEach((item, index) => {
      appendConversationHistoryItem(item, windowStart + index, {
        forceScroll: !safeAnchorTurnId && index === items.length - 1
      });
    });
    renderConversationHistoryPagers();
    ensureAssistantConversationAnchor();
    await loadConversationVersionGroup(payload.conversation || null, {
      sourceTurnId: conversationVersionSourceTurnId
    });
    logLine(
      safeAnchorTurnId
        ? `loaded ${items.length} anchored conversation messages`
        : `loaded ${items.length} recent conversation messages`
    );
    return payload;
  } catch (err) {
    if (requestId !== conversationHistoryRequestSeq) return;
    logLine(`conversation history skipped ${err.message || ""}`.trim());
    return null;
  } finally {
    if (requestId === conversationHistoryRequestSeq) {
      conversationHistoryLoaded = true;
      conversationHistoryLoading = false;
    }
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

function normalizedLanguage(value) {
  const next = String(value || "").trim().toLowerCase();
  if (next.startsWith("en")) return "en";
  if (next.startsWith("zh") || next.startsWith("cn")) return "zh";
  return "zh";
}

function selectedLanguage() {
  return normalizedLanguage(safeStorageGet(LANGUAGE_KEY, "zh"));
}

function textFor(key, fallback = "") {
  const table = UI_TEXT[currentLanguage] || UI_TEXT.zh;
  if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
  if (Object.prototype.hasOwnProperty.call(UI_TEXT.zh, key)) return UI_TEXT.zh[key];
  return fallback || key;
}

function formatTextFor(key, fallback = "", values = {}) {
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replace(new RegExp(`\\{${name}\\}`, "g"), String(value ?? "")),
    textFor(key, fallback)
  );
}

function stateCopyFor(visualState) {
  const langCopy = VOICE_COPY[currentLanguage] || VOICE_COPY.zh;
  return langCopy[visualState] || langCopy.idle || VOICE_COPY.zh.idle;
}

function syncLanguageControls() {
  if (els.languagePicker) {
    els.languagePicker.querySelectorAll("[data-language-choice]").forEach((button) => {
      const active = normalizedLanguage(button.dataset.languageChoice) === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-checked", active ? "true" : "false");
    });
  }
  if (els.accessLanguage) {
    els.accessLanguage.textContent = currentLanguage === "zh" ? "EN" : "中";
    els.accessLanguage.setAttribute("aria-label", currentLanguage === "zh" ? "Switch to English" : "切换到中文");
    els.accessLanguage.setAttribute("title", currentLanguage === "zh" ? "Switch to English" : "切换到中文");
  }
  syncAccessQuickControls();
}

function themeLabelFor(theme) {
  const labels = {
    zh: {
      "minimal-white": "极简白",
      "soft-gray": "素雅灰",
      "classic-blue": "经典蓝",
      "pure-black": "极致黑",
      "aurora-glass": "流光玻璃"
    },
    en: {
      "minimal-white": "Minimal white",
      "soft-gray": "Soft gray",
      "classic-blue": "Classic blue",
      "pure-black": "Pure black",
      "aurora-glass": "Aurora glass"
    }
  };
  return (labels[currentLanguage] || labels.zh)[normalizedTheme(theme)] || theme;
}

function syncAccessQuickControls() {
  const activeTheme = normalizedTheme(document.documentElement.dataset.theme || selectedTheme());
  if (els.accessTheme) {
    els.accessTheme.dataset.activeTheme = activeTheme;
    els.accessTheme.setAttribute("aria-pressed", activeTheme === "minimal-white" ? "false" : "true");
    const label = currentLanguage === "en"
      ? `Theme: ${themeLabelFor(activeTheme)}. Tap to change.`
      : `当前主题：${themeLabelFor(activeTheme)}。点击切换。`;
    els.accessTheme.setAttribute("aria-label", label);
    els.accessTheme.setAttribute("title", label);
  }
  if (els.accessLanguage) {
    els.accessLanguage.dataset.language = currentLanguage;
    els.accessLanguage.setAttribute("aria-pressed", currentLanguage === "en" ? "true" : "false");
  }
}

function applyLanguage(language, { persist = true, refreshState = true } = {}) {
  currentLanguage = normalizedLanguage(language);
  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = textFor(node.dataset.i18n, node.textContent || "");
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", textFor(node.dataset.i18nPlaceholder, node.getAttribute("placeholder") || ""));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", textFor(node.dataset.i18nAriaLabel, node.getAttribute("aria-label") || ""));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    node.setAttribute("title", textFor(node.dataset.i18nTitle, node.getAttribute("title") || ""));
  });
  syncLanguageControls();
  refreshAccessStatusLanguage();
  refreshAccessRevealButton();
  refreshDiagnosticsStatusLanguage();
  refreshModelStatusLanguage();
  refreshVoiceProfileLabels();
  syncAudioSettingButtons();
  syncComposerSendAvailability();
  renderThinkingMode();
  renderWebTtsRoute();
  renderWebTtsAudibility();
  if (lastMemoryControlPayload && els.memoryList && typeof renderMemoryControlCenter === "function") {
    renderMemoryControlCenter(lastMemoryControlPayload);
  }
  if (lastReviewWorkbenchPayload && els.reviewList && typeof renderReviewWorkbench === "function") {
    renderReviewWorkbench(lastReviewWorkbenchPayload);
  }
  if (proactivePreferencesSnapshot && typeof renderProactivePreferences === "function") {
    renderProactivePreferences(proactivePreferencesSnapshot);
  }
  if (conversationLibraryItems.length && typeof renderConversationLibrary === "function") {
    renderConversationLibrary();
  }
  if (typeof renderConversationSearchNavigator === "function") {
    renderConversationSearchNavigator();
  }
  if (typeof renderConversationHistoryPagers === "function") {
    renderConversationHistoryPagers();
  }
  if (currentDocumentId && typeof setDocumentStatus === "function") {
    setDocumentStatus(currentDocumentStatusLine() || (currentLanguage === "en" ? "File" : "文件"), "ready");
    refreshDocumentReadyPresentation();
  }
  updateDockControls(currentVisualState);
  if (persist) safeStorageSet(LANGUAGE_KEY, currentLanguage);
  if (refreshState) setState(currentRawState || "idle", { preserveSubtitle: true });
}

function syncAudioSettingButtons() {
  let micLabel = "";
  let speakerLabel = "";
  if (els.mic) {
    micLabel = micMuted ? textFor("action.micMuted", "麦克风关") : textFor("action.micOn", "麦克风开");
    els.mic.textContent = micLabel;
    els.mic.dataset.state = micMuted ? "off" : "on";
    els.mic.setAttribute("aria-pressed", micMuted ? "true" : "false");
    els.mic.setAttribute("aria-label", micLabel);
    els.mic.setAttribute("title", micLabel);
  }
  if (els.speaker) {
    speakerLabel = speakerMuted ? textFor("action.soundMuted", "已静音") : textFor("action.soundOn", "扬声器开");
    els.speaker.textContent = speakerLabel;
    els.speaker.dataset.state = speakerMuted ? "off" : "on";
    els.speaker.setAttribute("aria-pressed", speakerMuted ? "true" : "false");
    els.speaker.setAttribute("aria-label", speakerLabel);
    els.speaker.setAttribute("title", speakerLabel);
  }
  refreshVoiceControlCard({ micLabel, speakerLabel });
}

function initLanguageSettings() {
  applyLanguage(selectedLanguage(), { persist: false, refreshState: false });
  if (els.languagePicker) {
    els.languagePicker.addEventListener("click", (event) => {
      const button = event.target.closest("[data-language-choice]");
      if (!button) return;
      applyLanguage(button.dataset.languageChoice || "zh");
    });
  }
  if (els.accessLanguage) {
    els.accessLanguage.addEventListener("click", () => {
      applyLanguage(currentLanguage === "zh" ? "en" : "zh");
    });
  }
}

function normalizedTheme(value) {
  const next = String(value || "").trim().toLowerCase().replace(/_/g, "-");
  if (["minimal-white", "soft-gray", "classic-blue", "pure-black", "aurora-glass"].includes(next)) return next;
  if (next === "light") return "minimal-white";
  if (next === "dark" || next === "black") return "pure-black";
  if (next === "aurora" || next === "glass") return "aurora-glass";
  return "minimal-white";
}

function selectedTheme() {
  return normalizedTheme(safeStorageGet(THEME_KEY, "minimal-white"));
}

const THEME_SEQUENCE = ["minimal-white", "soft-gray", "classic-blue", "pure-black", "aurora-glass"];

function applyTheme(theme, { persist = true } = {}) {
  const next = normalizedTheme(theme);
  document.body.dataset.theme = next;
  document.documentElement.dataset.theme = next;
  const metaTheme = document.querySelector("meta[name='theme-color']");
  const themeColors = {
    "minimal-white": "#f7f9fc",
    "soft-gray": "#eef1f5",
    "classic-blue": "#edf5ff",
    "pure-black": "#050608",
    "aurora-glass": "#aebdff"
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
  syncAccessQuickControls();
}

function cycleTheme() {
  const current = normalizedTheme(document.documentElement.dataset.theme || selectedTheme());
  const index = THEME_SEQUENCE.indexOf(current);
  const next = THEME_SEQUENCE[(index + 1 + THEME_SEQUENCE.length) % THEME_SEQUENCE.length];
  applyTheme(next);
}

function initThemeSettings() {
  applyTheme(selectedTheme(), { persist: false });
  if (els.accessTheme) {
    els.accessTheme.addEventListener("click", cycleTheme);
  }
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
  return labels[model] || model || (currentLanguage === "en" ? "Unknown model" : "未知模型");
}

function modelStatusTone(statusKey) {
  if (statusKey === "model.status.loading" || statusKey === "model.status.switching") return "loading";
  if (statusKey === "model.status.loadFailed" || statusKey === "model.status.switchFailed") return "error";
  if (statusKey === "model.status.current") return "success";
  if (statusKey === "model.status.none") return "warning";
  return "info";
}

function setModelCardTitle(text = "") {
  if (!els.modelCardTitle) return;
  const value = String(text || "").trim() || textFor("model.cardTitle", "回答模型");
  els.modelCardTitle.textContent = value;
  els.modelCardTitle.title = value;
}

function setModelStatus(text, { statusKey = "", values = {} } = {}) {
  const value = text || " ";
  const tone = modelStatusTone(statusKey);
  if (els.modelStatus) {
    els.modelStatus.textContent = value;
    els.modelStatus.title = value;
    els.modelStatus.dataset.tone = tone;
  }
  if (els.modelCard) els.modelCard.dataset.tone = tone;
  if (els.modelCardMeta) {
    els.modelCardMeta.textContent = value;
    els.modelCardMeta.title = value;
  }
  if (statusKey) {
    if (els.modelStatus) els.modelStatus.dataset.statusKey = statusKey;
    if (els.modelCardMeta) els.modelCardMeta.dataset.statusKey = statusKey;
    modelStatusMeta = { key: statusKey, values: { ...values } };
  } else {
    if (els.modelStatus) delete els.modelStatus.dataset.statusKey;
    if (els.modelCardMeta) delete els.modelCardMeta.dataset.statusKey;
    modelStatusMeta = { key: "", values: {} };
  }
}

function setModelStatusKey(statusKey, fallback, values = {}) {
  setModelStatus(formatTextFor(statusKey, fallback, values), { statusKey, values });
}

function setCurrentModelStatus(model) {
  const id = String(model || "").trim();
  if (!id) {
    setModelCardTitle(textFor("model.cardTitle", "回答模型"));
    setModelStatusKey("model.status.none", "No model available.");
    return;
  }
  setModelCardTitle(modelDisplayName(id));
  setModelStatusKey("model.status.current", `Current: ${modelDisplayName(id)}`, {
    name: modelDisplayName(id),
    id
  });
}

function refreshModelStatusLanguage() {
  if (!modelStatusMeta.key) return;
  const selected = els.modelSelect ? String(els.modelSelect.value || "").trim() : "";
  if (selected) setModelCardTitle(modelDisplayName(selected));
  else setModelCardTitle(textFor("model.cardTitle", "回答模型"));
  setModelStatusKey(modelStatusMeta.key, els.modelStatus ? els.modelStatus.textContent || " " : " ", modelStatusMeta.values);
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
  setCurrentModelStatus(selected);
}

async function loadModelSettings() {
  if (!els.modelSelect || !window.fetch) return;
  setModelStatusKey("model.status.loading", "Reading current model.");
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
    setModelStatusKey("model.status.loadFailed", `Model load failed: ${err.message || "unknown"}`, {
      reason: err.message || "unknown"
    });
    logLine(`model load failed ${err.message || ""}`.trim());
    throw err;
  }
}

async function switchModelFromMenu(model) {
  const target = String(model || "").trim();
  if (!target || !window.fetch) return;
  const previous = els.modelSelect ? els.modelSelect.value : "";
  setModelCardTitle(modelDisplayName(target));
  setModelStatusKey("model.status.switching", `Switching to ${modelDisplayName(target)}.`, {
    name: modelDisplayName(target),
    id: target
  });
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
    setCurrentModelStatus(current);
    const currentName = modelDisplayName(current);
    appendAssistantConversation(formatTextFor("model.message.switched", `Switched to ${currentName}`, {
      id: current,
      name: currentName
    }), { kind: "model_control" });
    logLine(`model switched ${current}`);
  } catch (err) {
    if (els.modelSelect && previous) els.modelSelect.value = previous;
    setModelStatusKey("model.status.switchFailed", `Switch failed: ${err.message || "unknown"}`, {
      reason: err.message || "unknown"
    });
    appendAssistantConversation(formatTextFor("model.message.switchFailed", `Model switch failed: ${err.message || "unknown"}`, {
      reason: err.message || "unknown"
    }), { kind: "model_control_error" });
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
    stt_error: "stt_error",
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

function rememberVoiceProfileLabel(profile) {
  const id = String((profile && profile.id) || "").trim();
  if (!id) return;
  const existing = serverVoiceProfileLabels.get(id) || VOICE_PROFILE_LABELS[id] || {};
  serverVoiceProfileLabels.set(id, {
    zh: profile.display_name_zh || profile.display_name || existing.zh || id,
    en: profile.display_name_en || profile.english_name || profile.name_en || existing.en || existing.zh || profile.display_name || id
  });
}

function voiceProfileLabel(profileId, fallback = "") {
  const id = String(profileId || "").trim();
  const labels = serverVoiceProfileLabels.get(id) || VOICE_PROFILE_LABELS[id];
  if (!labels) return fallback || id;
  return labels[currentLanguage] || labels.zh || labels.en || fallback || id;
}

function refreshVoiceProfileLabels() {
  if (!els.voiceProfile) return;
  Array.from(els.voiceProfile.options).forEach((option) => {
    option.textContent = voiceProfileLabel(option.value, option.textContent || option.value);
  });
  refreshVoiceControlCard();
}

function voiceControlTone() {
  if (speakerMuted && micMuted) return "error";
  if (speakerMuted || micMuted) return "warning";
  return "success";
}

function refreshVoiceControlCard(labels = {}) {
  if (!els.voiceControlCard) return;
  const selected = selectedVoiceProfile();
  const voiceName = voiceProfileLabel(selected, selected);
  const micLabel = labels.micLabel || (micMuted ? textFor("action.micMuted", "麦克风关") : textFor("action.micOn", "麦克风开"));
  const speakerLabel = labels.speakerLabel || (speakerMuted ? textFor("action.soundMuted", "已静音") : textFor("action.soundOn", "扬声器开"));
  const meta = formatTextFor("voice.controlMeta", "{mic} · {speaker}", {
    mic: micLabel,
    speaker: speakerLabel
  });
  const tone = voiceControlTone();
  els.voiceControlCard.dataset.tone = tone;
  if (els.voiceControlTitle) {
    els.voiceControlTitle.textContent = voiceName;
    els.voiceControlTitle.title = voiceName;
  }
  if (els.voiceControlMeta) {
    els.voiceControlMeta.textContent = meta;
    els.voiceControlMeta.title = meta;
  }
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
  refreshVoiceProfileLabels();
  els.voiceProfile.addEventListener("change", () => {
    const previous = currentVoiceProfile;
    const selected = normalizedVoiceProfile(els.voiceProfile.value);
    els.voiceProfile.value = selected;
    currentVoiceProfile = selected;
    refreshVoiceControlCard();
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
      rememberVoiceProfileLabel(profile);
      if (existing.has(profile.id)) return;
      const option = document.createElement("option");
      option.value = profile.id;
      option.textContent = voiceProfileLabel(profile.id, profile.display_name || profile.id);
      els.voiceProfile.appendChild(option);
      existing.add(profile.id);
    });
  const persisted = safeStorageGet("jarvis_voice_profile", "");
  const selected = supportedVoiceProfiles.has(persisted) ? persisted : selectedVoiceProfile();
  currentVoiceProfile = normalizedVoiceProfile(selected);
  els.voiceProfile.value = currentVoiceProfile;
  refreshVoiceProfileLabels();
  refreshVoiceControlCard();
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
  const copy = stateCopyFor(visualState);

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
  PresenceController.setState(state);
  if (copy.text && previousVisualState !== visualState && !options.preserveSubtitle) {
    setSubtitle(copy.text, { speaker: copy.speaker });
  } else if (copy.speaker) {
    setSubtitleSpeaker(copy.speaker);
  }
  if (visualState === "idle" && previousVisualState !== "idle") {
    const elapsed = proactiveScanLastAt ? Date.now() - proactiveScanLastAt : PROACTIVE_SCAN_INTERVAL_MS;
    if (elapsed >= PROACTIVE_SCAN_INTERVAL_MS) scheduleProactiveScan(1800);
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
    els.dockMic.dataset.active = active ? "true" : "false";
    els.dockMic.classList.toggle("active", active);
    els.dockMic.classList.toggle("muted", micMuted);
    els.dockMic.setAttribute("aria-pressed", active ? "true" : "false");
    const label = micMuted
      ? textFor("action.unmuteMic", "取消麦克风静音")
      : mode === "interrupt"
        ? textFor("action.interrupt", "打断 Iris")
        : mode === "stop"
          ? textFor("action.stopVoice", "结束语音")
          : textFor("action.voiceInput", "语音输入");
    els.dockMic.setAttribute("aria-label", label);
    els.dockMic.setAttribute("title", label);
    if (els.voiceInputStatus) {
      els.voiceInputStatus.dataset.mode = mode;
      els.voiceInputStatus.dataset.active = active ? "true" : "false";
    }
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
  setCapabilityPanelOpen(false);
  detailsReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : els.detailsToggle;
  els.detailSheet.classList.add("open");
  els.detailSheet.setAttribute("aria-hidden", "false");
  if (els.detailsToggle) els.detailsToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("detailsOpen");
  window.setTimeout(() => {
    if (els.closeDetails) els.closeDetails.focus({ preventScroll: true });
    else els.detailSheet.focus({ preventScroll: true });
  }, 40);
  if (els.memoryRefresh && !memoryControlLoaded && !memoryControlLoading) {
    refreshMemoryControlCenter().catch((err) => logLine(err.message || "memory refresh failed"));
  }
  if (els.proactiveRefresh && !proactivePreferencesLoaded && !proactivePreferencesLoading) {
    loadProactiveControlCenter().catch((err) => logLine(err.message || "proactive preferences failed"));
  }
  if (els.conversationList && !conversationLibraryLoaded && !conversationLibraryLoading) {
    refreshConversationLibrary().catch((err) => logLine(err.message || "conversation library failed"));
  }
}

function closeDetails({ restoreFocus = true } = {}) {
  if (!els.detailSheet) return;
  els.detailSheet.classList.remove("open");
  els.detailSheet.setAttribute("aria-hidden", "true");
  if (els.detailsToggle) els.detailsToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("detailsOpen");
  const focusTarget = detailsReturnFocus;
  if (restoreFocus && focusTarget && document.contains(focusTarget)) {
    window.setTimeout(() => focusTarget.focus({ preventScroll: true }), 0);
  }
  detailsReturnFocus = null;
}

const THINKING_MODE_COPY = {
  zh: {
    auto: {
      name: "自动思考",
      short: "Auto",
      native: "自动",
      hint: "自动判断问题需要的深度",
      status: "按问题调整",
      placeholder: "输入内容..."
    },
    fast: {
      name: "快速回应",
      short: "Fast",
      native: "快速",
      hint: "优先速度，直接给出关键答案",
      status: "直接回答",
      placeholder: "快速问 Iris..."
    },
    normal: {
      name: "标准思考",
      short: "Normal",
      native: "标准",
      hint: "在速度、解释与可靠性之间平衡",
      status: "均衡分析",
      placeholder: "问 Iris..."
    },
    deep: {
      name: "深度思考",
      short: "Deep",
      native: "深度",
      hint: "检查假设与遗漏，再校验最终答案",
      status: "双重校验",
      placeholder: "让 Iris 深入想想..."
    }
  },
  en: {
    auto: {
      name: "Auto thinking",
      short: "Auto",
      native: "Auto",
      hint: "Iris chooses the depth for each question",
      status: "Adapts to the question",
      placeholder: "Type a message..."
    },
    fast: {
      name: "Fast response",
      short: "Fast",
      native: "Fast",
      hint: "Prioritizes speed and the essential answer",
      status: "Direct answer",
      placeholder: "Ask Iris quickly..."
    },
    normal: {
      name: "Normal thinking",
      short: "Normal",
      native: "Normal",
      hint: "Balances speed, explanation, and reliability",
      status: "Balanced analysis",
      placeholder: "Ask Iris..."
    },
    deep: {
      name: "Deep thinking",
      short: "Deep",
      native: "Deep",
      hint: "Checks assumptions and verifies the final answer",
      status: "Double checked",
      placeholder: "Let Iris think deeply..."
    }
  }
};

function normalizedThinkingMode(value) {
  const normalized = String(value || "auto").trim().toLowerCase();
  return ["auto", "fast", "normal", "deep"].includes(normalized) ? normalized : "auto";
}

function thinkingModeCopy(mode = selectedThinkingMode) {
  const language = currentLanguage === "en" ? "en" : "zh";
  return THINKING_MODE_COPY[language][normalizedThinkingMode(mode)];
}

function setThinkingModePickerOpen(open, { focusActive = false } = {}) {
  if (!els.thinkingModePicker) return;
  const shouldOpen = Boolean(open);
  els.thinkingModePicker.hidden = !shouldOpen;
  if (els.thinkingCapability) {
    els.thinkingCapability.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  }
  if (shouldOpen && focusActive) {
    window.setTimeout(() => {
      const selected = els.thinkingModePicker.querySelector(
        `[data-thinking-mode="${selectedThinkingMode}"]`
      );
      if (selected instanceof HTMLElement) selected.focus({ preventScroll: true });
    }, 0);
  }
}

function renderThinkingMode() {
  const mode = normalizedThinkingMode(selectedThinkingMode);
  const copy = thinkingModeCopy(mode);
  document.documentElement.dataset.thinkingMode = mode;
  if (els.thinkingCapability) {
    els.thinkingCapability.dataset.active = mode === "auto" ? "false" : "true";
    els.thinkingCapability.setAttribute(
      "aria-label",
      currentLanguage === "en"
        ? `Thinking mode: ${copy.native}`
        : `思考模式：${copy.native}`
    );
  }
  if (els.thinkingCapabilityLabel) {
    els.thinkingCapabilityLabel.textContent = mode === "auto"
      ? (currentLanguage === "en" ? "Thinking" : "思考模式")
      : copy.native;
  }
  if (els.thinkingModePickerTitle) {
    els.thinkingModePickerTitle.textContent = currentLanguage === "en"
      ? "Choose how Iris thinks"
      : "选择思考方式";
  }
  if (els.thinkingModePickerHint) els.thinkingModePickerHint.textContent = copy.hint;
  if (els.thinkingModePicker) {
    els.thinkingModePicker.setAttribute(
      "aria-label",
      currentLanguage === "en" ? "Thinking mode" : "思考模式"
    );
    els.thinkingModePicker.querySelectorAll("[data-thinking-mode]").forEach((button) => {
      const buttonMode = normalizedThinkingMode(button.dataset.thinkingMode);
      const buttonCopy = thinkingModeCopy(buttonMode);
      button.setAttribute("aria-checked", buttonMode === mode ? "true" : "false");
      button.dataset.selected = buttonMode === mode ? "true" : "false";
      const strong = button.querySelector("strong");
      const native = button.querySelector("span");
      if (strong) strong.textContent = buttonCopy.short;
      if (native) native.textContent = buttonCopy.native;
    });
  }
  if (els.thinkingModeStatus) {
    const visible = mode !== "auto";
    els.thinkingModeStatus.hidden = !visible;
    els.thinkingModeStatus.dataset.mode = mode;
    els.thinkingModeStatus.setAttribute(
      "aria-label",
      currentLanguage === "en"
        ? `${copy.name}. Open thinking mode settings.`
        : `${copy.name}。打开思考模式设置。`
    );
    const title = els.thinkingModeStatus.querySelector("strong");
    const detail = els.thinkingModeStatus.querySelector("span:last-child");
    if (title) title.textContent = copy.name;
    if (detail) detail.textContent = copy.status;
  }
  if (els.dock) els.dock.dataset.thinkingVisible = mode === "auto" ? "false" : "true";
  if (els.manual) els.manual.setAttribute("placeholder", copy.placeholder);
  scheduleViewportMetrics({ refreshSubtitle: false });
}

function setThinkingMode(mode, { persist = true, closePicker = true } = {}) {
  selectedThinkingMode = normalizedThinkingMode(mode);
  if (persist) safeStorageSet(THINKING_MODE_KEY, selectedThinkingMode);
  renderThinkingMode();
  if (closePicker) setThinkingModePickerOpen(false);
}

function thinkingStreamLabel(mode, stage = "start") {
  const normalized = normalizedThinkingMode(mode);
  if (currentLanguage === "en") {
    if (normalized === "fast") return "Iris · responding fast";
    if (normalized === "normal") return stage === "progress" ? "Iris · shaping the answer" : "Iris · thinking";
    if (normalized === "deep") return stage === "progress" ? "Iris · verifying the answer" : "Iris · thinking deeply";
    return stage === "progress" ? "Iris · preparing a reply" : "Iris · thinking";
  }
  if (normalized === "fast") return "Iris · 快速回应";
  if (normalized === "normal") return stage === "progress" ? "Iris · 正在组织回答" : "Iris · 正在思考";
  if (normalized === "deep") return stage === "progress" ? "Iris · 正在校验答案" : "Iris · 深入思考";
  return stage === "progress" ? "Iris · 正在组织回答" : "Iris · 正在整理";
}

function setCapabilityPanelOpen(open, { restoreFocus = false } = {}) {
  if (!els.capabilityPanel) return;
  const shouldOpen = Boolean(open);
  els.capabilityPanel.hidden = !shouldOpen;
  els.capabilityPanel.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
  if (els.capabilityToggle) {
    els.capabilityToggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  }
  document.body.classList.toggle("capabilitiesOpen", shouldOpen);
  if (!shouldOpen) setThinkingModePickerOpen(false);
  if (!shouldOpen && restoreFocus && els.capabilityToggle) {
    els.capabilityToggle.focus({ preventScroll: true });
  }
}

function primeComposerFromCapability(prompt) {
  if (!els.manual) return;
  els.manual.value = String(prompt || "");
  resizeComposerInput();
  syncComposerSendAvailability();
  setCapabilityPanelOpen(false);
  els.manual.focus({ preventScroll: true });
  const end = els.manual.value.length;
  els.manual.setSelectionRange(end, end);
}

function openMemorySettings() {
  openDetails();
  const memoryGroup = els.detailSheet && els.detailSheet.querySelector(".memoryGroup");
  if (!(memoryGroup instanceof HTMLDetailsElement)) return;
  memoryGroup.open = true;
  window.setTimeout(() => scrollSettingsGroupIntoView(memoryGroup), 80);
}

function getSettingsScrollContainer() {
  if (!els.detailSheet) return null;
  const settingsList = els.detailSheet.querySelector(".settingsList");
  if (settingsList instanceof HTMLElement) {
    const style = getComputedStyle(settingsList);
    const scrollable = /auto|scroll/i.test(style.overflowY) && settingsList.scrollHeight > settingsList.clientHeight + 1;
    if (scrollable) return settingsList;
  }
  return els.detailSheet;
}

function settingsScrollTopInset(scrollContainer) {
  if (!scrollContainer) return 0;
  const style = getComputedStyle(scrollContainer);
  let inset = Math.max(12, Number.parseFloat(style.paddingTop) || 0);
  if (scrollContainer === els.detailSheet) {
    const header = els.detailSheet.querySelector(".sheetHeader");
    if (header instanceof HTMLElement) {
      const sheetRect = els.detailSheet.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      inset = Math.max(inset, headerRect.bottom - sheetRect.top + 10);
    }
  }
  return inset;
}

function alignSettingsGroupInSheet(group) {
  if (!group || !els.detailSheet) return;
  const summary = group.querySelector("summary") || group;
  const scrollContainer = getSettingsScrollContainer();
  if (!scrollContainer) return;
  const containerRect = scrollContainer.getBoundingClientRect();
  const summaryRect = summary.getBoundingClientRect();
  const topInset = settingsScrollTopInset(scrollContainer);
  const delta = summaryRect.top - containerRect.top - topInset;
  if (Math.abs(delta) < 2) return;
  scrollContainer.scrollTo({
    top: Math.max(0, scrollContainer.scrollTop + delta),
    behavior: "auto"
  });
}

function scrollSettingsGroupIntoView(group, { delay = 80 } = {}) {
  if (!group || !group.open || !els.detailSheet || !document.body.classList.contains("detailsOpen")) return;
  const run = () => {
    if (!group.open || !document.contains(group)) return;
    alignSettingsGroupInSheet(group);
    window.setTimeout(() => alignSettingsGroupInSheet(group), 80);
  };
  window.setTimeout(() => requestAnimationFrame(run), delay);
}

function closeSiblingSettingsGroups(activeGroup) {
  if (!activeGroup || !els.detailSheet) return;
  els.detailSheet.querySelectorAll("details.settingsGroup").forEach((group) => {
    if (group !== activeGroup && group.open) group.open = false;
  });
}

function initSettingsGroupAutoScroll() {
  if (!els.detailSheet) return;
  els.detailSheet.querySelectorAll("details.settingsGroup").forEach((group) => {
    group.addEventListener("toggle", () => {
      if (group.open) {
        closeSiblingSettingsGroups(group);
        scrollSettingsGroupIntoView(group);
        if (group.classList.contains("reviewGroup") && !reviewWorkbenchLoaded && !reviewWorkbenchLoading) {
          refreshReviewWorkbench().catch((err) => logLine(err.message || "review workbench refresh failed"));
        }
        if (group.classList.contains("proactiveGroup") && !proactivePreferencesLoading) {
          loadProactiveControlCenter({ force: true }).catch((err) => {
            logLine(err.message || "proactive preferences failed");
          });
        }
        if (group.classList.contains("conversationGroup") && !conversationLibraryLoading) {
          refreshConversationLibrary({ force: true }).catch((err) => {
            logLine(err.message || "conversation library failed");
          });
        }
      }
    });
  });
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

function currentDiagnosticsLogLines() {
  return pendingLogLines.concat(renderedLogLines).slice(0, LOG_RENDER_LIMIT);
}

function setDiagnosticsStatus(text, tone = "info", statusKey = "") {
  if (!els.diagnosticsStatus) return;
  const visibleText = String(text || "").trim();
  els.diagnosticsStatus.textContent = text || " ";
  els.diagnosticsStatus.dataset.tone = ["info", "success", "warning", "error", "loading"].includes(tone) ? tone : "info";
  els.diagnosticsStatus.dataset.visible = visibleText ? "true" : "false";
  if (statusKey) els.diagnosticsStatus.dataset.statusKey = statusKey;
  else delete els.diagnosticsStatus.dataset.statusKey;
}

function refreshDiagnosticsStatusLanguage() {
  if (!els.diagnosticsStatus) return;
  const statusKey = els.diagnosticsStatus.dataset.statusKey || "";
  if (!statusKey) return;
  setDiagnosticsStatus(textFor(statusKey, els.diagnosticsStatus.textContent || " "), els.diagnosticsStatus.dataset.tone || "info", statusKey);
}

function diagnosticsSnapshot() {
  return {
    version: VOICE_UI_VERSION,
    webVersion: WEB_VERSION,
    browserTarget: BROWSER_TARGET,
    theme: document.body.dataset.theme || "",
    language: currentLanguage,
    visualState: currentVisualState,
    rawState: currentRawState,
    voiceProfile: selectedVoiceProfile(),
    model: els.modelSelect ? els.modelSelect.value : "",
    ttsRoute: els.webTtsRoute ? els.webTtsRoute.textContent.trim() : "",
    ttsPlayback: activeTtsSession ? {
      progressive: Boolean(activeTtsSession.progressive),
      segment: activeTtsSession.currentSegment + 1,
      segmentCount: activeTtsSession.segmentCount
    } : null,
    audibility: els.webTtsAudibility ? els.webTtsAudibility.textContent.trim() : "",
    document: currentDocumentId ? {
      id: currentDocumentId,
      name: currentDocumentName,
      status: currentDocumentStatusLine()
    } : null,
    recentEvents: currentDiagnosticsLogLines()
  };
}

function diagnosticsText() {
  return JSON.stringify(diagnosticsSnapshot(), null, 2);
}

async function writeDiagnosticsClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand && document.execCommand("copy");
  textarea.remove();
  if (!ok) throw new Error("clipboard_unavailable");
  return true;
}

async function copyDiagnostics() {
  if (!els.diagnosticsCopy) return;
  els.diagnosticsCopy.disabled = true;
  els.diagnosticsCopy.dataset.loading = "true";
  els.diagnosticsCopy.setAttribute("aria-busy", "true");
  setDiagnosticsStatus(textFor("debug.copying", "正在复制"), "loading", "debug.copying");
  try {
    await writeDiagnosticsClipboard(diagnosticsText());
    setDiagnosticsStatus(textFor("debug.copySuccess", "已复制当前诊断摘要。"), "success", "debug.copySuccess");
  } catch (err) {
    setDiagnosticsStatus(textFor("debug.copyFailed", "复制失败，请稍后再试。"), "error", "debug.copyFailed");
    logLine(`diagnostics copy failed ${err.message || ""}`.trim());
  } finally {
    els.diagnosticsCopy.disabled = false;
    els.diagnosticsCopy.removeAttribute("data-loading");
    els.diagnosticsCopy.setAttribute("aria-busy", "false");
  }
}

function clearDiagnosticsLog() {
  renderedLogLines = [];
  pendingLogLines = [];
  if (logRenderFrame) cancelAnimationFrame(logRenderFrame);
  logRenderFrame = 0;
  if (els.log) els.log.replaceChildren();
  setDiagnosticsStatus(textFor("debug.clearSuccess", "日志已清空。"), "success", "debug.clearSuccess");
}

function saveToken() {
  safeStorageRemove(TOKEN_KEY);
  safeSessionRemove(ACCESS_TOKEN_KEY);
  safeSessionRemove(ACCESS_TOKEN_EXPIRES_KEY);
  safeSessionRemove(ACCESS_SUBJECT_ID_KEY);
  persistedVoiceToken = "";
}

function rememberSessionToken(token, expiresAt, subjectId = "default") {
  const value = String(token || "").trim();
  if (!value) {
    saveToken();
    return;
  }
  safeStorageRemove(TOKEN_KEY);
  safeSessionSet(ACCESS_TOKEN_KEY, value);
  if (expiresAt) safeSessionSet(ACCESS_TOKEN_EXPIRES_KEY, String(expiresAt));
  safeSessionSet(ACCESS_SUBJECT_ID_KEY, String(subjectId || "default").trim() || "default");
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

function currentAuthToken() {
  if (!persistedVoiceToken) loadToken();
  return persistedVoiceToken || "";
}

function subjectIdFromSessionToken(token) {
  const parts = String(token || "").split(".");
  if (parts.length !== 6 || parts[0] !== "iris_session_v2") return "";
  try {
    const encoded = parts[2].replace(/-/g, "+").replace(/_/g, "/");
    const padded = encoded + "=".repeat((4 - (encoded.length % 4)) % 4);
    const subjectId = window.atob(padded);
    return /^[A-Za-z0-9_.:@-]{1,128}$/.test(subjectId) ? subjectId : "";
  } catch (error) {
    return "";
  }
}

function currentSubjectId() {
  const stored = String(safeSessionGet(ACCESS_SUBJECT_ID_KEY, "") || "").trim();
  if (stored) return stored;
  const recovered = subjectIdFromSessionToken(currentAuthToken());
  if (recovered) {
    safeSessionSet(ACCESS_SUBJECT_ID_KEY, recovered);
    return recovered;
  }
  return "default";
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
    token: currentAuthToken(),
    client_type: "web",
    client_id: clientId,
    user_id: currentSubjectId(),
    conversation_id: currentConversationId || "",
    voice_profile: selectedVoiceProfile(),
    proactive_notification_id: activeProactiveNotificationId
  };
}

function authHeaders() {
  const token = currentAuthToken();
  return {
    ...(token ? { "X-Jarvis-Token": token } : {}),
    "X-Jarvis-User-Id": currentSubjectId(),
    "X-Jarvis-Client-Id": voiceClientId()
  };
}

function clearProactiveScanSchedule() {
  if (proactiveScanTimer) window.clearTimeout(proactiveScanTimer);
  proactiveScanTimer = 0;
}

function proactiveComposerBusy() {
  const composer = els.manualSend ? els.manualSend.closest(".unifiedComposer") : null;
  if (!composer) return false;
  return composer.dataset.sending === "true"
    || composer.dataset.documentBusy === "true"
    || composer.dataset.uploadSelecting === "true";
}

function canRunProactiveScan() {
  return !IS_QA_MODE
    && !PUBLIC_SHARE_MODE
    && !pagehideCleanupStarted
    && document.visibilityState === "visible"
    && canUseBackendNow()
    && currentVisualState === "idle"
    && !running
    && !agentSpeaking
    && !localSpeaking
    && !documentUploadInFlight
    && !proactiveComposerBusy();
}

function scheduleProactiveScan(delayMs = PROACTIVE_SCAN_INTERVAL_MS) {
  clearProactiveScanSchedule();
  if (pagehideCleanupStarted || IS_QA_MODE || !canUseBackendNow()) return;
  proactiveScanTimer = window.setTimeout(() => {
    proactiveScanTimer = 0;
    runProactiveScan().catch((error) => {
      logLine(`proactive scan failed ${error && error.message || "unknown"}`);
    });
  }, Math.max(500, Number(delayMs) || PROACTIVE_SCAN_INTERVAL_MS));
}

function proactiveItemKey(item) {
  const trigger = item && item.trigger && typeof item.trigger === "object" ? item.trigger : {};
  return String(item && item.notification_id || trigger.dedupe_key || trigger.trigger_id || `${item && item.kind || "proactive"}:${trigger.item || ""}`).trim();
}

function proactiveItemText(item) {
  const trigger = item && item.trigger && typeof item.trigger === "object" ? item.trigger : {};
  const primary = String(trigger.item || "").trim();
  const nextStep = String(trigger.next_step || "").trim();
  if (!primary) return "";
  if (item && ["contextual_followup", "project_progress"].includes(item.kind)) return primary;
  if (!nextStep || primary.includes(nextStep)) return primary;
  return `${primary}\n${nextStep}`;
}

async function acknowledgeProactiveItem(item, event = "seen") {
  const notificationId = String(item && item.notification_id || "").trim();
  if (!notificationId || !canUseBackendNow()) return false;
  const response = await fetch(backendUrl("/client/v1/proactive/events"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders()
    },
    cache: "no-store",
    body: JSON.stringify({
      notification_id: notificationId,
      event,
      user_id: currentSubjectId(),
      channel: "web",
      client_id: voiceClientId()
    })
  });
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    return false;
  }
  return true;
}

function setProactiveControlFeedback(message = "", tone = "info") {
  if (!els.proactiveFeedback) return;
  els.proactiveFeedback.textContent = String(message || "").trim();
  els.proactiveFeedback.dataset.tone = tone;
}

function setProactiveControlsBusy(busy) {
  proactivePreferencesSaving = Boolean(busy);
  [
    els.proactiveEnabled,
    els.proactiveDailyLimit,
    els.proactiveInterval,
    els.proactiveAdaptive,
    els.proactiveQuietStart,
    els.proactiveQuietEnd,
    els.proactiveEmotion,
    els.proactiveGoal,
    els.proactiveCalendar,
    els.proactiveRefresh
  ].forEach((control) => {
    if (control) control.disabled = proactivePreferencesSaving;
  });
  if (els.proactiveOverview) {
    els.proactiveOverview.dataset.busy = proactivePreferencesSaving ? "true" : "false";
  }
}

function ensureProactiveSelectValue(select, value, suffixZh, suffixEn) {
  if (!select) return;
  const normalized = String(value);
  if (!Array.from(select.options).some((option) => option.value === normalized)) {
    const option = document.createElement("option");
    option.value = normalized;
    option.textContent = `${normalized} ${currentLanguage === "en" ? suffixEn : suffixZh}`;
    select.appendChild(option);
  }
  select.value = normalized;
}

function localizeProactiveSelectOptions() {
  if (els.proactiveDailyLimit) {
    Array.from(els.proactiveDailyLimit.options).forEach((option) => {
      option.textContent = currentLanguage === "en"
        ? `${option.value} per day`
        : `${option.value} 次`;
    });
  }
  if (els.proactiveInterval) {
    const zhLabels = {
      "30": "30 分钟",
      "60": "1 小时",
      "120": "2 小时",
      "240": "4 小时"
    };
    const enLabels = {
      "30": "30 minutes",
      "60": "1 hour",
      "120": "2 hours",
      "240": "4 hours"
    };
    Array.from(els.proactiveInterval.options).forEach((option) => {
      const labels = currentLanguage === "en" ? enLabels : zhLabels;
      option.textContent = labels[option.value]
        || (currentLanguage === "en" ? `${option.value} minutes` : `${option.value} 分钟`);
    });
  }
}

function proactiveInboxTime(value) {
  const date = new Date(String(value || ""));
  if (!Number.isFinite(date.getTime())) return "";
  try {
    return new Intl.DateTimeFormat(currentLanguage === "en" ? "en" : "zh-CN", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  } catch (error) {
    return "";
  }
}

function proactiveRhythmInterval(minutes) {
  const value = Math.max(0, Number(minutes) || 0);
  if (currentLanguage === "en") {
    if (value >= 60 && value % 60 === 0) {
      const hours = value / 60;
      return `${hours} ${hours === 1 ? "hour" : "hours"}`;
    }
    return `${value} minutes`;
  }
  if (value >= 60 && value % 60 === 0) return `${value / 60} 小时`;
  return `${value} 分钟`;
}

function renderProactiveRhythm(rhythm, preferences) {
  const profile = rhythm && typeof rhythm === "object" ? rhythm : {};
  const engagement = profile.engagement && typeof profile.engagement === "object"
    ? profile.engagement
    : {};
  const overall = engagement.overall && typeof engagement.overall === "object"
    ? engagement.overall
    : {};
  const soft = engagement.soft && typeof engagement.soft === "object"
    ? engagement.soft
    : {};
  const configured = profile.configured && typeof profile.configured === "object"
    ? profile.configured
    : {};
  const recommended = profile.recommended && typeof profile.recommended === "object"
    ? profile.recommended
    : configured;
  const effective = profile.effective && typeof profile.effective === "object"
    ? profile.effective
    : configured;
  const enabled = preferences.adaptive_frequency_enabled === true;
  const state = String(profile.state || "learning");
  const minimum = Math.max(1, Number(
    engagement.minimum_adaptive_sample
      || (profile.safety && profile.safety.minimum_sample)
      || 6
  ));
  const sent = Math.max(0, Number(overall.sent_count) || 0);
  const replied = Math.max(0, Number(overall.replied_count) || 0);
  const dismissed = Math.max(0, Number(overall.dismissed_count) || 0);
  if (els.proactiveAdaptive) els.proactiveAdaptive.checked = enabled;
  if (els.proactiveRhythmSent) els.proactiveRhythmSent.textContent = String(sent);
  if (els.proactiveRhythmReplied) els.proactiveRhythmReplied.textContent = String(replied);
  if (els.proactiveRhythmDismissed) els.proactiveRhythmDismissed.textContent = String(dismissed);
  if (els.proactiveRhythm) {
    els.proactiveRhythm.dataset.enabled = enabled ? "true" : "false";
    els.proactiveRhythm.dataset.state = state;
    els.proactiveRhythm.dataset.applied = profile.applied ? "true" : "false";
  }

  let title = currentLanguage === "en" ? "Still learning your rhythm" : "还在了解你的节奏";
  let hint = currentLanguage === "en"
    ? `${Math.min(Number(soft.sent_count) || 0, minimum)} of ${minimum} soft follow-ups observed.`
    : `已观察 ${Math.min(Number(soft.sent_count) || 0, minimum)} / ${minimum} 条软性回访。`;
  if (state === "quieter") {
    title = enabled
      ? (currentLanguage === "en" ? "Iris has slowed down" : "Iris 已经放慢")
      : (currentLanguage === "en" ? "A quieter rhythm is available" : "可以更安静一点");
    const target = enabled ? effective : recommended;
    const daily = Math.max(1, Number(target.soft_max_messages_per_day) || 1);
    const interval = proactiveRhythmInterval(target.soft_message_interval_minutes);
    hint = currentLanguage === "en"
      ? `${enabled ? "Soft follow-ups now use" : "Turn this on to use"} up to ${daily} daily, at least ${interval} apart.`
      : `${enabled ? "软性回访已调整为" : "开启后将调整为"}每天最多 ${daily} 次，至少间隔 ${interval}。`;
  } else if (state === "well_matched") {
    title = currentLanguage === "en" ? "This rhythm fits well" : "当前节奏很合适";
    hint = currentLanguage === "en"
      ? "Your responses are healthy. Iris will keep this rhythm and will not become more frequent."
      : "你的回应很自然。Iris 会保持当前节奏，不会因此变得更频繁。";
  } else if (state === "balanced") {
    title = currentLanguage === "en" ? "Keeping the current rhythm" : "保持当前节奏";
    hint = currentLanguage === "en"
      ? "Recent replies and dismissals are mixed, so Iris will not change the cadence."
      : "近期回复与忽略较为均衡，Iris 暂不改变节奏。";
  }
  if (els.proactiveRhythmTitle) els.proactiveRhythmTitle.textContent = title;
  if (els.proactiveRhythmHint) els.proactiveRhythmHint.textContent = hint;
}

function renderProactiveInbox(items) {
  proactiveInboxItems = Array.isArray(items) ? items.filter((item) => item && item.notification_id) : [];
  if (!els.proactiveInbox) return;
  els.proactiveInbox.replaceChildren();
  if (!proactiveInboxItems.length) {
    const empty = document.createElement("p");
    empty.className = "proactiveInboxEmpty";
    empty.textContent = textFor("proactive.empty", "最近没有等待处理的主动消息。");
    els.proactiveInbox.appendChild(empty);
    return;
  }
  proactiveInboxItems.forEach((item) => {
    const trigger = item.trigger && typeof item.trigger === "object" ? item.trigger : {};
    const card = document.createElement("article");
    card.className = "proactiveInboxItem";
    card.dataset.notificationId = String(item.notification_id);
    const copy = document.createElement("div");
    const meta = document.createElement("span");
    const contextual = item.kind === "contextual_followup";
    const projectProgress = item.kind === "project_progress";
    meta.textContent = [
      currentLanguage === "en"
        ? (projectProgress ? "Project" : (contextual ? "Follow-up" : "Reminder"))
        : (projectProgress ? "项目" : (contextual ? "回访" : "提醒")),
      proactiveInboxTime(item.created_at)
    ].filter(Boolean).join(" · ");
    const text = document.createElement("p");
    text.textContent = String(trigger.item || "").trim();
    copy.append(meta, text);
    const dismiss = document.createElement("button");
    dismiss.type = "button";
    dismiss.textContent = textFor("proactive.dismiss", "忽略这条");
    dismiss.addEventListener("click", () => {
      dismissProactiveNotification(item.notification_id, { button: dismiss }).catch((error) => {
        logLine(`proactive dismiss failed ${error && error.message || "unknown"}`);
      });
    });
    card.append(copy, dismiss);
    els.proactiveInbox.appendChild(card);
  });
  if (pendingProactiveNotificationId) {
    window.setTimeout(() => focusProactiveNotification(pendingProactiveNotificationId), 0);
  }
}

function isStandaloneWebApp() {
  return Boolean(
    window.matchMedia && window.matchMedia("(display-mode: standalone)").matches
  ) || window.navigator.standalone === true;
}

function isAppleMobileBrowser() {
  const ua = String(window.navigator.userAgent || "");
  return /iPhone|iPad|iPod/i.test(ua)
    || (window.navigator.platform === "MacIntel" && Number(window.navigator.maxTouchPoints) > 1);
}

function proactivePushCapability() {
  if (!window.isSecureContext) return "unsupported";
  if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) {
    return "unsupported";
  }
  if (isAppleMobileBrowser() && !isStandaloneWebApp()) return "install";
  if (Notification.permission === "denied") return "blocked";
  return "ready";
}

function setProactivePushBusy(busy) {
  proactivePushLoading = Boolean(busy);
  [els.proactivePushAction, els.proactivePushTest, els.proactivePushPreview].forEach((control) => {
    if (control) control.disabled = proactivePushLoading;
  });
  if (els.proactivePush) els.proactivePush.dataset.busy = proactivePushLoading ? "true" : "false";
}

function renderProactivePushStatus() {
  if (!els.proactivePush) return;
  const server = proactivePushStatus && typeof proactivePushStatus === "object"
    ? proactivePushStatus
    : {};
  const capability = proactivePushCapability();
  const active = Boolean(proactivePushSubscription);
  let state = "off";
  let title = textFor("proactive.pushOff", "只在打开 Iris 时主动找你");
  let hint = textFor("proactive.pushOffHint", "开启后台通知后，关闭网页也不会错过合适的提醒。");
  let badge = textFor("proactive.pushReady", "可开启");
  let badgeTone = "info";
  let action = textFor("proactive.pushEnable", "开启后台通知");
  let disabled = false;

  if (proactivePushLoading && !proactivePushStatus) {
    state = "loading";
    title = textFor("proactive.pushLoading", "正在检查后台通知");
    hint = textFor("proactive.pushLoadingHint", "开启后，即使没有打开网页，Iris 也能在合适的时候找到你。");
    badge = textFor("proactive.pushChecking", "检查中");
    badgeTone = "loading";
    disabled = true;
  } else if (!server.configured) {
    state = "unavailable";
    title = textFor("proactive.pushUnavailable", "当前服务暂未配置后台通知");
    hint = textFor("proactive.pushUnavailableHint", "站内主动陪伴不受影响，稍后可以再检查。");
    badge = textFor("proactive.pushDenied", "已关闭");
    badgeTone = "muted";
    disabled = true;
  } else if (capability === "unsupported") {
    state = "unsupported";
    title = textFor("proactive.pushUnsupported", "这个浏览器不支持后台通知");
    hint = textFor("proactive.pushUnsupportedHint", "仍可在打开 Iris 时接收主动消息。");
    badge = textFor("proactive.pushDenied", "已关闭");
    badgeTone = "muted";
    disabled = true;
  } else if (capability === "install") {
    state = "install";
    title = textFor("proactive.pushInstall", "先把 Iris 添加到主屏幕");
    hint = textFor("proactive.pushInstallHint", "在 Safari 分享菜单选择“添加到主屏幕”，再从主屏幕打开 Iris。");
    badge = textFor("proactive.pushNeedsHome", "需添加");
    badgeTone = "warning";
    disabled = true;
  } else if (capability === "blocked") {
    state = "blocked";
    title = textFor("proactive.pushBlocked", "通知权限已被系统关闭");
    hint = textFor("proactive.pushBlockedHint", "请在系统设置中允许 Iris 通知，然后回来刷新。");
    badge = textFor("proactive.pushDenied", "已关闭");
    badgeTone = "warning";
    disabled = true;
  } else if (active) {
    state = "enabled";
    title = textFor("proactive.pushOn", "后台通知已开启");
    hint = textFor("proactive.pushOnHint", "网页关闭后也能送达；安静时段与频率限制仍然有效。");
    badge = textFor("proactive.pushEnabled", "已开启");
    badgeTone = "success";
    action = textFor("proactive.pushDisable", "关闭后台通知");
  }

  els.proactivePush.dataset.state = state;
  if (els.proactivePushTitle) els.proactivePushTitle.textContent = title;
  if (els.proactivePushHint) els.proactivePushHint.textContent = hint;
  if (els.proactivePushBadge) {
    els.proactivePushBadge.textContent = badge;
    els.proactivePushBadge.dataset.tone = badgeTone;
  }
  if (els.proactivePushAction) {
    els.proactivePushAction.textContent = action;
    els.proactivePushAction.disabled = disabled || proactivePushLoading;
  }
  if (els.proactivePushTest) {
    els.proactivePushTest.hidden = !active;
    els.proactivePushTest.disabled = proactivePushLoading;
  }
  if (els.proactivePushPreviewRow) els.proactivePushPreviewRow.hidden = !active;
  if (els.proactivePushPreview) {
    const localRecord = Array.isArray(server.subscriptions)
      ? server.subscriptions.find(
        (item) => item
          && item.active !== false
          && (!proactivePushSubscriptionServerId || item.subscription_id === proactivePushSubscriptionServerId)
      )
      : null;
    els.proactivePushPreview.checked = Boolean(localRecord && localRecord.preview_content);
    els.proactivePushPreview.disabled = proactivePushLoading;
  }
}

async function ensureProactiveServiceWorker() {
  if (!("serviceWorker" in navigator)) return null;
  if (proactivePushRegistration) return proactivePushRegistration;
  const serviceWorkerUrl = String(
    IRIS_PUBLIC_CONFIG.serviceWorkerUrl || `/voice/service-worker.js?v=${VOICE_UI_VERSION}`
  );
  proactivePushRegistration = await navigator.serviceWorker.register(serviceWorkerUrl, {
    scope: String(IRIS_PUBLIC_CONFIG.serviceWorkerScope || "/voice"),
    updateViaCache: "none"
  });
  return proactivePushRegistration;
}

async function loadProactivePushStatus() {
  if (proactivePushLoading || !canUseBackendNow()) return;
  setProactivePushBusy(true);
  renderProactivePushStatus();
  try {
    const params = new URLSearchParams({ user_id: currentSubjectId() });
    const response = await fetch(backendUrl(`/client/v1/proactive/push?${params}`), {
      headers: authHeaders(),
      cache: "no-store"
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `proactive_push_${response.status}`);
    }
    proactivePushStatus = payload;
    if (proactivePushCapability() === "ready") {
      const registration = await ensureProactiveServiceWorker();
      proactivePushSubscription = registration && registration.pushManager
        ? await registration.pushManager.getSubscription()
        : null;
      proactivePushSubscriptionServerId = proactivePushSubscription
        ? await proactivePushSubscriptionId(proactivePushSubscription.endpoint)
        : "";
    } else {
      proactivePushSubscription = null;
      proactivePushSubscriptionServerId = "";
    }
  } catch (error) {
    proactivePushStatus = { configured: false, subscriptions: [] };
    logLine(`proactive push status failed ${error && error.message || "unknown"}`);
  } finally {
    setProactivePushBusy(false);
    renderProactivePushStatus();
  }
}

function base64UrlToUint8Array(value) {
  const normalized = String(value || "").replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - normalized.length % 4) % 4);
  const raw = window.atob(padded);
  return Uint8Array.from(raw, (character) => character.charCodeAt(0));
}

async function proactivePushSubscriptionId(endpoint) {
  const bytes = new TextEncoder().encode(String(endpoint || ""));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return `wps_${Array.from(new Uint8Array(digest))
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 20)}`;
}

async function saveProactivePushSubscription(subscription, { previewContent = false } = {}) {
  const response = await fetch(backendUrl("/client/v1/proactive/push/subscriptions"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Jarvis-Client-Id": voiceClientId(),
      ...authHeaders()
    },
    cache: "no-store",
    body: JSON.stringify({
      user_id: currentSubjectId(),
      client_id: voiceClientId(),
      label: `${isAppleMobileBrowser() ? "Apple" : "Web"} · ${navigator.language || "unknown"}`,
      preview_content: Boolean(previewContent),
      subscription: subscription.toJSON()
    })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    throw new Error(payload.detail || `proactive_push_subscribe_${response.status}`);
  }
  proactivePushStatus = payload.status || proactivePushStatus;
  proactivePushSubscription = subscription;
  proactivePushSubscriptionServerId = String(
    payload.subscription && payload.subscription.subscription_id || ""
  );
  return payload;
}

async function enableProactivePush() {
  if (proactivePushLoading || proactivePushCapability() !== "ready") return;
  setProactivePushBusy(true);
  try {
    const permission = Notification.permission === "granted"
      ? "granted"
      : await Notification.requestPermission();
    if (permission !== "granted") {
      proactivePushSubscription = null;
      renderProactivePushStatus();
      return;
    }
    const registration = await ensureProactiveServiceWorker();
    let subscription = await registration.pushManager.getSubscription();
    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64UrlToUint8Array(proactivePushStatus.public_key)
      });
    }
    await saveProactivePushSubscription(subscription, { previewContent: false });
    setProactiveControlFeedback(textFor("proactive.pushSaved", "后台通知设置已保存。"), "success");
  } catch (error) {
    setProactiveControlFeedback(textFor("proactive.pushError", "连接后台通知失败，请稍后重试。"), "error");
    logLine(`proactive push enable failed ${error && error.message || "unknown"}`);
  } finally {
    setProactivePushBusy(false);
    renderProactivePushStatus();
  }
}

async function disableProactivePush() {
  if (proactivePushLoading || !proactivePushSubscription) return;
  setProactivePushBusy(true);
  try {
    const subscription = proactivePushSubscription;
    const subscriptionId = proactivePushSubscriptionServerId
      || await proactivePushSubscriptionId(subscription.endpoint);
    const response = await fetch(
      backendUrl(`/client/v1/proactive/push/subscriptions/${encodeURIComponent(subscriptionId)}?user_id=${encodeURIComponent(currentSubjectId())}`),
      {
        method: "DELETE",
        headers: {
          "X-Jarvis-Client-Id": voiceClientId(),
          ...authHeaders()
        },
        cache: "no-store"
      }
    );
    if (!response.ok && response.status !== 404) {
      const payload = await response.json().catch(() => ({}));
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `proactive_push_unsubscribe_${response.status}`);
    }
    await subscription.unsubscribe();
    proactivePushSubscription = null;
    proactivePushSubscriptionServerId = "";
    proactivePushStatus = response.ok
      ? (await response.json().catch(() => ({}))).status || proactivePushStatus
      : proactivePushStatus;
    setProactiveControlFeedback(textFor("proactive.pushSaved", "后台通知设置已保存。"), "success");
  } catch (error) {
    setProactiveControlFeedback(textFor("proactive.pushError", "连接后台通知失败，请稍后重试。"), "error");
    logLine(`proactive push disable failed ${error && error.message || "unknown"}`);
  } finally {
    setProactivePushBusy(false);
    renderProactivePushStatus();
  }
}

async function updateProactivePushPreview() {
  if (!proactivePushSubscription || !els.proactivePushPreview || proactivePushLoading) return;
  setProactivePushBusy(true);
  try {
    await saveProactivePushSubscription(proactivePushSubscription, {
      previewContent: els.proactivePushPreview.checked
    });
    setProactiveControlFeedback(textFor("proactive.pushSaved", "后台通知设置已保存。"), "success");
  } catch (error) {
    setProactiveControlFeedback(textFor("proactive.pushError", "连接后台通知失败，请稍后重试。"), "error");
  } finally {
    setProactivePushBusy(false);
    renderProactivePushStatus();
  }
}

async function sendProactivePushTest() {
  if (proactivePushLoading || !proactivePushSubscription) return;
  setProactivePushBusy(true);
  try {
    const response = await fetch(backendUrl("/client/v1/proactive/push/test"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Jarvis-Client-Id": voiceClientId(),
        ...authHeaders()
      },
      cache: "no-store",
      body: JSON.stringify({ user_id: currentSubjectId(), client_id: voiceClientId() })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.sent_count) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || "proactive_push_test_failed");
    }
    setProactiveControlFeedback(textFor("proactive.pushTestSent", "测试通知已经发出。"), "success");
  } catch (error) {
    setProactiveControlFeedback(textFor("proactive.pushTestFailed", "测试通知没有送达，请稍后再试。"), "error");
  } finally {
    setProactivePushBusy(false);
    renderProactivePushStatus();
  }
}

function captureProactiveLaunchIntent() {
  const params = new URLSearchParams(window.location.search);
  const notificationId = String(params.get("proactive_notification_id") || "").trim();
  if (!notificationId) return;
  pendingProactiveNotificationId = notificationId;
  params.delete("proactive_notification_id");
  const query = params.toString();
  history.replaceState(history.state, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
}

function focusProactiveNotification(notificationId) {
  const normalized = String(notificationId || "").trim();
  if (!normalized) return false;
  const item = proactiveInboxItems.find(
    (candidate) => String(candidate && candidate.notification_id || "") === normalized
  );
  if (!item) return false;
  pendingProactiveNotificationId = "";
  if (document.body.classList.contains("detailsOpen") && typeof closeDetails === "function") {
    closeDetails();
  }
  renderProactiveItems([item]);
  window.setTimeout(() => scheduleConversationScroll({ force: true }), 60);
  return true;
}

function renderProactivePreferences(payload) {
  proactivePreferencesSnapshot = payload && typeof payload === "object" ? payload : {};
  const preferences = payload && payload.preferences && typeof payload.preferences === "object"
    ? payload.preferences
    : {};
  const enabled = preferences.enabled !== false;
  const dailyLimit = Number(preferences.max_active_messages_per_day) || 4;
  const interval = Number(preferences.soft_message_interval_minutes) || 60;
  const quiet = Array.isArray(preferences.quiet_hours) ? preferences.quiet_hours : ["23:30", "08:00"];
  if (els.proactiveEnabled) els.proactiveEnabled.checked = enabled;
  ensureProactiveSelectValue(els.proactiveDailyLimit, dailyLimit, "次", "per day");
  ensureProactiveSelectValue(els.proactiveInterval, interval, "分钟", "minutes");
  localizeProactiveSelectOptions();
  if (els.proactiveQuietStart) els.proactiveQuietStart.value = quiet[0] || "23:30";
  if (els.proactiveQuietEnd) els.proactiveQuietEnd.value = quiet[1] || "08:00";
  if (els.proactiveEmotion) els.proactiveEmotion.checked = preferences.allow_emotion_followup !== false;
  if (els.proactiveGoal) els.proactiveGoal.checked = preferences.allow_goal_followup !== false;
  if (els.proactiveCalendar) els.proactiveCalendar.checked = preferences.allow_calendar_preparation !== false;
  renderProactiveRhythm(payload && payload.rhythm, preferences);
  if (els.proactiveOverview) els.proactiveOverview.dataset.enabled = enabled ? "true" : "false";
  if (els.proactiveOverviewTitle) {
    els.proactiveOverviewTitle.textContent = enabled
      ? textFor("proactive.onTitle", "主动陪伴已开启")
      : textFor("proactive.offTitle", "主动陪伴已暂停");
  }
  if (els.proactiveOverviewHint) {
    els.proactiveOverviewHint.textContent = enabled
      ? textFor("proactive.onHint", "Iris 会在有依据、时机合适时自然来找你。")
      : textFor("proactive.offHint", "提醒和回访都先安静下来，随时可以恢复。");
  }
  if (els.proactiveStatus) {
    els.proactiveStatus.textContent = enabled
      ? (currentLanguage === "en" ? `On · up to ${dailyLimit} daily` : `开启 · 每天最多 ${dailyLimit} 次`)
      : (currentLanguage === "en" ? "Paused" : "已暂停");
    els.proactiveStatus.dataset.tone = enabled ? "success" : "muted";
  }
  renderProactiveInbox(payload && payload.inbox && payload.inbox.items);
  renderProactivePushStatus();
  if (!enabled) {
    clearProactiveScanSchedule();
    clearActiveProactiveConversation();
  } else if (!proactiveScanTimer) {
    scheduleProactiveScan(2200);
  }
}

async function loadProactiveControlCenter({ force = false } = {}) {
  if (proactivePreferencesLoading || (!force && proactivePreferencesLoaded)) return;
  if (!canUseBackendNow()) return;
  proactivePreferencesLoading = true;
  if (els.proactiveStatus) {
    els.proactiveStatus.textContent = currentLanguage === "en" ? "Loading preferences" : "读取偏好中";
    els.proactiveStatus.dataset.tone = "loading";
  }
  try {
    const params = new URLSearchParams({ channel: "web", user_id: currentSubjectId() });
    const response = await fetch(backendUrl(`/client/v1/proactive/preferences?${params.toString()}`), {
      method: "GET",
      headers: authHeaders(),
      cache: "no-store"
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `proactive_preferences_${response.status}`);
    }
    proactivePreferencesLoaded = true;
    renderProactivePreferences(payload);
    await loadProactivePushStatus();
    setProactiveControlFeedback("");
  } catch (error) {
    if (els.proactiveStatus) {
      els.proactiveStatus.textContent = currentLanguage === "en" ? "Preferences unavailable" : "偏好暂不可用";
      els.proactiveStatus.dataset.tone = "error";
    }
    throw error;
  } finally {
    proactivePreferencesLoading = false;
  }
}

async function saveProactivePreferences(preferences) {
  if (proactivePreferencesSaving || !canUseBackendNow()) return;
  setProactiveControlsBusy(true);
  setProactiveControlFeedback(
    currentLanguage === "en" ? "Saving…" : "正在保存…",
    "loading"
  );
  try {
    const response = await fetch(backendUrl("/client/v1/proactive/preferences"), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders()
      },
      cache: "no-store",
      body: JSON.stringify({
        user_id: currentSubjectId(),
        channel: "web",
        client_id: voiceClientId(),
        preferences
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `proactive_preferences_${response.status}`);
    }
    proactivePreferencesLoaded = true;
    renderProactivePreferences(payload);
    setProactiveControlFeedback(textFor("proactive.saved", "主动陪伴偏好已保存。"), "success");
  } catch (error) {
    setProactiveControlFeedback(textFor("proactive.saveFailed", "暂时没能保存，请稍后重试。"), "error");
    await loadProactiveControlCenter({ force: true }).catch(() => {});
    throw error;
  } finally {
    setProactiveControlsBusy(false);
  }
}

async function dismissProactiveNotification(notificationId, { button = null } = {}) {
  const normalized = String(notificationId || "").trim();
  if (!normalized || (button && button.dataset.loading === "true")) return;
  if (button) {
    button.dataset.loading = "true";
    button.disabled = true;
  }
  try {
    const dismissed = await acknowledgeProactiveItem({ notification_id: normalized }, "dismissed");
    if (!dismissed) throw new Error("proactive_dismiss_failed");
    if (activeProactiveNotificationId === normalized) clearActiveProactiveConversation();
    proactiveInboxItems = proactiveInboxItems.filter(
      (item) => String(item.notification_id || "") !== normalized
    );
    renderProactiveInbox(proactiveInboxItems);
    const message = findConversationMessage(normalized);
    if (message) {
      message.dataset.proactiveState = "dismissed";
      const group = message.querySelector(".messageActions");
      if (group) {
        group.dataset.state = "selected";
        group.querySelectorAll("button").forEach((control) => {
          control.disabled = true;
          control.setAttribute("aria-pressed", control === button ? "true" : "false");
        });
        const feedback = group.querySelector(".messageActionFeedback");
        if (feedback) {
          feedback.dataset.tone = "success";
          feedback.textContent = textFor(
            "proactive.dismissed",
            "已收起，不会再沿着这条继续问。"
          );
        }
      }
    }
    setProactiveControlFeedback(
      textFor("proactive.dismissed", "已收起，不会再沿着这条继续问。"),
      "success"
    );
  } finally {
    if (button && !button.closest('[data-proactive-state="dismissed"]')) {
      button.dataset.loading = "false";
      button.disabled = false;
    }
  }
}

function proactiveDismissAction(notificationId) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = textFor("proactive.dismiss", "忽略这条");
  button.dataset.remoteAction = "true";
  button.dataset.actionKey = "dismiss";
  button.dataset.variant = "neutral";
  button.addEventListener("click", () => {
    dismissProactiveNotification(notificationId, { button }).catch((error) => {
      logLine(`proactive dismiss failed ${error && error.message || "unknown"}`);
    });
  });
  return button;
}

function clearActiveProactiveConversation() {
  if (!activeProactiveNotificationId) return;
  activeProactiveNotificationId = "";
  if (ws && ws.readyState === WebSocket.OPEN && voiceSocketAuthenticated) {
    send(authEvent());
  }
}

function renderProactiveItems(items) {
  if (!Array.isArray(items)) return 0;
  let rendered = 0;
  items.forEach((item) => {
    if (!item || item.sent !== true) return;
    const text = proactiveItemText(item);
    const key = proactiveItemKey(item);
    if (!text || !key || renderedProactiveKeys.has(key)) return;
    renderedProactiveKeys.add(key);
    const notificationId = String(item.notification_id || "").trim();
    if (notificationId) activeProactiveNotificationId = notificationId;
    const contextual = item.kind === "contextual_followup";
    const projectProgress = item.kind === "project_progress";
    appendAssistantConversation(text, {
      id: notificationId || `proactive_${Math.abs(key.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0))}`,
      label: currentLanguage === "en"
        ? (projectProgress ? "Iris · Project check-in" : (contextual ? "Iris · Follow-up" : "Iris · Reminder"))
        : (projectProgress ? "Iris · 项目回访" : (contextual ? "Iris · 想起你了" : "Iris · 提醒")),
      kind: "proactive_followup",
      actions: notificationId ? [proactiveDismissAction(notificationId)] : [],
      actionHint: currentLanguage === "en"
        ? "Dismiss only if you do not want to continue this thread."
        : "不想继续这条时，可以把它收起。",
      forceScroll: false
    });
    if (notificationId) {
      acknowledgeProactiveItem(item, "seen").catch((error) => {
        logLine(`proactive receipt failed ${error && error.message || "unknown"}`);
      });
      if (ws && ws.readyState === WebSocket.OPEN && voiceSocketAuthenticated) {
        send(authEvent());
      }
    }
    rendered += 1;
  });
  return rendered;
}

async function runProactiveScan() {
  if (proactiveScanInFlight) return;
  if (!canRunProactiveScan()) {
    scheduleProactiveScan(PROACTIVE_SCAN_BUSY_RETRY_MS);
    return;
  }
  proactiveScanInFlight = true;
  proactiveScanLastAt = Date.now();
  try {
    const response = await fetch(backendUrl("/client/v1/proactive/scan"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Jarvis-Client-Id": voiceClientId(),
        ...authHeaders()
      },
      cache: "no-store",
      body: JSON.stringify({
        user_id: currentSubjectId(),
        channel: "web",
        client_id: voiceClientId(),
        record: true,
        include_project_progress: true,
        include_contextual: true,
        contextual_min_inactive_minutes: 30
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail && payload.detail.error || payload.detail || `proactive_scan_${response.status}`);
    }
    const inboxItems = payload.inbox && Array.isArray(payload.inbox.items)
      ? payload.inbox.items
      : [];
    const rendered = renderProactiveItems(inboxItems.length ? inboxItems : payload.items);
    const contextualStatus = payload.sources && payload.sources.contextual && payload.sources.contextual.analysis
      ? payload.sources.contextual.analysis.status || ""
      : "";
    logLine(`proactive scan · ${payload.sent_count || 0} eligible · ${rendered} rendered${contextualStatus ? ` · ${contextualStatus}` : ""}`);
  } finally {
    proactiveScanInFlight = false;
    scheduleProactiveScan(PROACTIVE_SCAN_INTERVAL_MS);
  }
}

function setAccessStatus(text, tone = "info", statusKey = "") {
  const normalizedTone = ["info", "warning", "loading", "error", "success"].includes(tone) ? tone : "info";
  if (els.accessGate) els.accessGate.dataset.accessState = normalizedTone;
  if (els.accessForm) els.accessForm.dataset.tone = normalizedTone;
  if (els.accessToken) {
    els.accessToken.dataset.tone = normalizedTone;
    els.accessToken.setAttribute("aria-invalid", ["warning", "error"].includes(normalizedTone) ? "true" : "false");
  }
  if (els.accessStatus) {
    const visibleText = String(text || "").trim();
    els.accessStatus.textContent = text || " ";
    els.accessStatus.dataset.tone = normalizedTone;
    els.accessStatus.dataset.visible = visibleText ? "true" : "false";
    if (statusKey) els.accessStatus.dataset.statusKey = statusKey;
    else delete els.accessStatus.dataset.statusKey;
    els.accessStatus.title = visibleText;
  }
}

function refreshAccessStatusLanguage() {
  if (!els.accessStatus) return;
  const statusKey = els.accessStatus.dataset.statusKey || "";
  if (!statusKey) return;
  setAccessStatus(textFor(statusKey, els.accessStatus.textContent || " "), els.accessStatus.dataset.tone || "info", statusKey);
}

function setAccessCodeVisible(visible, { focusInput = false } = {}) {
  if (!els.accessToken || !els.accessReveal) return;
  const isVisible = Boolean(visible);
  els.accessToken.type = isVisible ? "text" : "password";
  els.accessReveal.dataset.visible = isVisible ? "true" : "false";
  els.accessReveal.setAttribute("aria-pressed", isVisible ? "true" : "false");
  const label = isVisible
    ? textFor("access.hideCode", "隐藏访问口令")
    : textFor("access.showCode", "显示访问口令");
  els.accessReveal.setAttribute("aria-label", label);
  els.accessReveal.setAttribute("title", label);
  if (focusInput) focusAccessToken(0);
}

function refreshAccessRevealButton() {
  setAccessCodeVisible(Boolean(els.accessToken && els.accessToken.type === "text"));
}

function toggleAccessCodeVisibility() {
  if (!els.accessToken) return;
  setAccessCodeVisible(els.accessToken.type !== "text", { focusInput: true });
}

function clearAccessSlowNoticeTimer() {
  if (!accessSlowNoticeTimer) return;
  window.clearTimeout(accessSlowNoticeTimer);
  accessSlowNoticeTimer = 0;
}

function startAccessSlowNoticeTimer() {
  clearAccessSlowNoticeTimer();
  accessSlowNoticeTimer = window.setTimeout(() => {
    accessSlowNoticeTimer = 0;
    const stillSubmitting = Boolean(
      els.accessGate
      && els.accessGate.dataset.submitting === "true"
      && els.accessSubmit
      && els.accessSubmit.dataset.loading === "true"
    );
    if (!stillSubmitting) return;
    setAccessStatus(textFor("access.slow", "连接有点慢，我还在确认。"), "loading", "access.slow");
  }, 4000);
}

function setAccessSubmitLoading(isLoading) {
  if (!els.accessSubmit) return;
  if (!isLoading) clearAccessSlowNoticeTimer();
  els.accessSubmit.disabled = Boolean(isLoading);
  els.accessSubmit.setAttribute("aria-busy", isLoading ? "true" : "false");
  if (els.accessReveal) {
    // Visibility is a local-only control and should remain usable while the
    // network request is pending, especially when verification is slow.
    els.accessReveal.disabled = false;
    els.accessReveal.removeAttribute("aria-disabled");
  }
  if (els.accessForm) els.accessForm.setAttribute("aria-busy", isLoading ? "true" : "false");
  if (els.accessGate) {
    if (isLoading) els.accessGate.dataset.submitting = "true";
    else delete els.accessGate.dataset.submitting;
  }
  if (isLoading) {
    els.accessSubmit.dataset.loading = "true";
    els.accessSubmit.textContent = textFor("access.submitLoading", "正在确认身份");
    startAccessSlowNoticeTimer();
  } else {
    els.accessSubmit.removeAttribute("data-loading");
    els.accessSubmit.textContent = textFor("access.submit", "进入 Iris");
  }
}

function accessFailureKey(error) {
  const message = String((error && error.message) || "").trim();
  const lower = message.toLowerCase();
  if (lower.includes("http 5") || lower.includes("session_token_missing")) {
    return "access.unavailable";
  }
  if (
    !message
    || lower.includes("invalid")
    || lower.includes("access")
    || lower.includes("token")
    || lower.includes("key")
    || lower.includes("unauthorized")
    || lower.includes("forbidden")
    || lower.includes("401")
    || lower.includes("403")
  ) {
    return "access.failed";
  }
  if (lower.includes("network") || lower.includes("fetch") || lower.includes("failed to fetch")) {
    return "access.offline";
  }
  return "access.checkKey";
}

function accessFailureMessage(error) {
  return textFor(accessFailureKey(error), textFor("access.checkKey", "请再检查一次访问口令。"));
}

function resetAccessFieldFeedback() {
  if (!els.accessGate || !els.accessToken) return;
  const state = els.accessGate.dataset.accessState || "info";
  if (!["warning", "error"].includes(state)) return;
  els.accessToken.setAttribute("aria-invalid", "false");
  setAccessStatus(" ", "info");
}

function refreshAccessFormatFeedback() {
  if (!els.accessToken || !els.accessGate || els.accessGate.dataset.submitting === "true") return;
  const value = String(els.accessToken.value || "").trim();
  if (!value) {
    setAccessStatus(" ", "info");
    return;
  }
  if (value.length >= 6) {
    setAccessStatus(
      currentLanguage === "en" ? "Access code format looks right." : "密钥格式正确",
      "success",
    );
  }
}

function setAccessInputFocused(focused) {
  const value = focused ? "true" : "false";
  if (els.accessGate) els.accessGate.dataset.inputFocused = value;
  if (els.accessForm) els.accessForm.dataset.focused = value;
  if (els.accessToken) els.accessToken.dataset.focused = value;
}

function syncAccessInputFocusState() {
  setAccessInputFocused(Boolean(els.accessToken && document.activeElement === els.accessToken));
}

function focusAccessToken(delay = 0) {
  if (!els.accessToken) return;
  window.setTimeout(() => {
    els.accessToken.focus();
    syncAccessInputFocusState();
  }, delay);
}

function shouldAutoFocusAccessInput() {
  const coarsePointer = typeof window.matchMedia === "function"
    && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  return !coarsePointer && window.innerWidth >= 720;
}

function setMainSurfaceLocked(isLocked) {
  if (!els.home) return;
  if (isLocked) {
    els.home.setAttribute("aria-hidden", "true");
    els.home.setAttribute("inert", "");
  } else {
    els.home.removeAttribute("aria-hidden");
    els.home.removeAttribute("inert");
  }
}

function completeSessionLogin(token, expiresAt, subjectId = "default") {
  rememberSessionToken(token, expiresAt || "", subjectId);
  setAccessStatus(" ", "success");
  hideAccessGate();
  initializeConversationSpace().catch((err) => logLine(err.message || "conversation initialization failed"));
  schedulePendingDocumentUploadReconciliation(600);
  scheduleProactiveScan(2600);
  setState("idle");
  setAccessStatus(" ", "info");
}

function showAccessGate(reason = "", tone = "info", statusKey = "") {
  if (!els.accessGate) return;
  clearAccessSlowNoticeTimer();
  els.accessGate.hidden = false;
  els.accessGate.setAttribute("aria-hidden", "false");
  document.body.classList.add("accessLocked");
  setMainSurfaceLocked(true);
  setAccessStatus(reason || " ", reason ? tone : "info", reason ? statusKey : "");
  setAccessSubmitLoading(false);
  syncAccessQuickControls();
  if (shouldAutoFocusAccessInput()) focusAccessToken(60);
}

function hideAccessGate() {
  if (!els.accessGate) return;
  clearAccessSlowNoticeTimer();
  els.accessGate.hidden = true;
  els.accessGate.setAttribute("aria-hidden", "true");
  document.body.classList.remove("accessLocked");
  setMainSurfaceLocked(false);
  setAccessStatus(" ", "info");
  setAccessInputFocused(false);
}

function maybePromptForAccess() {
  if (PUBLIC_SHARE_MODE) {
    hideAccessGate();
    return;
  }
  if (currentAuthToken() || !isPublicFrontendMode()) {
    hideAccessGate();
    return;
  }
  showAccessGate("", "info");
}

function handleUnauthorizedResponse(response) {
  if (!response || response.status !== 401) return false;
  const activeToken = currentAuthToken();
  if (!activeToken && els.accessGate && !els.accessGate.hidden) {
    logLine("ignored expected pre-session unauthorized response");
    return true;
  }
  if (activeToken && responseAuthTokens.has(response) && responseAuthTokens.get(response) !== activeToken) {
    logLine("ignored stale pre-session unauthorized response");
    return false;
  }
  saveToken();
  showAccessGate(textFor("access.expired", "登录已过期，请重新输入访问口令。"), "warning", "access.expired");
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
  const labels = currentLanguage === "en" ? {
    preference: "Preference",
    goal: "Goal",
    project: "Project",
    relationship: "Relationship",
    health_context: "Health",
    schedule_preference: "Schedule",
    communication_style: "Style",
    fact: "Fact",
    assistant_commitment: "Commitment",
    temporary_state: "Temporary"
  } : {
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
  return labels[type] || type || (currentLanguage === "en" ? "Memory" : "记忆");
}

function memorySourceLabel(item) {
  const en = currentLanguage === "en";
  if (!item) return en ? "Unknown" : "未知";
  if (item.user_confirmed) return en ? "Confirmed" : "用户确认";
  if (item.source === "user_message") return en ? "From you" : "用户提供";
  if (item.source === "user_correction") return en ? "Corrected" : "用户修正";
  return item.source || (en ? "Iris organized" : "模型整理");
}

function memoryActionReadableName(action) {
  const labels = currentLanguage === "en" ? {
    confirm_pending: "Review approved",
    cancel_pending: "Review dismissed",
    preview_confirm: "Ready to approve",
    preview_correct: "Edit preview ready",
    preview_delete: "Delete preview ready",
    open_correct: "Editing memory",
    collapse_editor: "Editor closed",
    confirm: "Memory approved",
    correct: "Memory edited",
    delete: "Memory deleted"
  } : {
    confirm_pending: "已确认这条记忆",
    cancel_pending: "已取消这条记忆",
    preview_confirm: "确认预览已准备好",
    preview_correct: "修改预览已准备好",
    preview_delete: "删除预览已准备好",
    open_correct: "正在修正记忆",
    collapse_editor: "已收起编辑器",
    confirm: "已确认记忆",
    correct: "已修正记忆",
    delete: "已删除记忆"
  };
  return labels[action] || action || (currentLanguage === "en" ? "memory action" : "记忆操作");
}

function readableMemoryStatusText(text) {
  let value = String(text || "").replace(/\s+/g, " ").trim();
  Object.keys({
    confirm_pending: true,
    cancel_pending: true,
    preview_confirm: true,
    preview_correct: true,
    preview_delete: true,
    open_correct: true,
    collapse_editor: true
  }).forEach((action) => {
    value = value.split(action).join(memoryActionReadableName(action));
  });
  return value;
}

function memoryStatusNavText(text, tone) {
  const value = readableMemoryStatusText(text);
  const counts = value.match(/(\d+)\s*条事件.*?(\d+)\s*条摘要.*?(\d+)\s*条待确认/);
  if (counts) return currentLanguage === "en" ? `${counts[1]} memories · ${counts[3]} to review` : `${counts[1]} 条记忆 · ${counts[3]} 条待确认`;
  if (tone === "loading") return currentLanguage === "en" ? "Syncing memory" : "正在同步记忆";
  if (tone === "success") return currentLanguage === "en" ? "Memory updated" : "记忆已更新";
  if (tone === "warning") return currentLanguage === "en" ? "Memory needs review" : "有记忆待确认";
  if (tone === "error") return currentLanguage === "en" ? "Memory sync failed" : "记忆同步失败";
  return value.length > 18 ? `${value.slice(0, 18)}...` : value;
}

function memoryOverviewParts(text, tone) {
  const value = readableMemoryStatusText(text);
  const counts = value.match(/(\d+)\s*条事件.*?(\d+)\s*条摘要.*?(\d+)\s*条待确认/);
  const en = currentLanguage === "en";
  if (counts) {
    return {
      kicker: en ? "Memory Vault" : "记忆库",
      title: en ? `${counts[1]} events · ${counts[2]} summaries` : `${counts[1]} 条事件 · ${counts[2]} 条摘要`,
      detail: Number(counts[3]) > 0
        ? (en ? `${counts[3]} need review. Iris will preview before writing.` : `${counts[3]} 条需要你确认，确认前会先生成预览。`)
        : (en ? "No pending review right now." : "当前没有待确认项。")
    };
  }
  if (tone === "loading") {
    return { kicker: en ? "Working" : "正在处理", title: en ? "Syncing memory" : "记忆正在同步", detail: value || (en ? "One moment." : "请稍等一下。") };
  }
  if (tone === "success") {
    return { kicker: en ? "Done" : "已完成", title: en ? "Memory updated" : "记忆已更新", detail: value || (en ? "The latest change has been saved." : "最新变更已经写入。") };
  }
  if (tone === "warning") {
    return { kicker: en ? "Review" : "需要确认", title: en ? "Memory needs your review" : "有记忆需要你看一眼", detail: value || (en ? "Iris writes it only after you confirm." : "确认后才会写入长期记忆。") };
  }
  if (tone === "error") {
    return { kicker: en ? "Sync failed" : "同步失败", title: en ? "Memory did not sync" : "记忆暂时没同步成功", detail: value || (en ? "Try again later." : "稍后可以再试一次。") };
  }
  return {
    kicker: en ? "Memory Vault" : "记忆库",
    title: en ? "Ready to sync" : "准备同步",
    detail: value || (en ? "Preferences, projects, and conversation cues live here." : "偏好、项目和对话线索会在这里整理。")
  };
}

function renderMemoryOverview(text, tone) {
  if (!els.memoryOverview) return;
  const parts = memoryOverviewParts(text, tone);
  els.memoryOverview.dataset.tone = tone || "info";
  els.memoryOverview.replaceChildren();

  const kicker = document.createElement("span");
  kicker.className = "memoryOverviewKicker";
  kicker.textContent = parts.kicker;

  const title = document.createElement("strong");
  title.textContent = parts.title;

  const detail = document.createElement("span");
  detail.textContent = parts.detail;

  els.memoryOverview.append(kicker, title, detail);
}

function memoryStatusTone(text) {
  const value = readableMemoryStatusText(text).toLowerCase();
  if (value.includes("失败") || value.includes("错误") || value.includes("不可用") || value.includes("failed") || value.includes("error")) return "error";
  if (value.includes("读取中") || value.includes("处理中") || value.includes("确认中") || value.includes("取消中") || value.includes("生成") || value.includes("正在") || value.includes("loading")) return "loading";
  if (value.includes("待处理") || value.includes("待确认") || value.includes("请先") || value.includes("等待") || value.includes("pending")) return "warning";
  if (value.includes("已") || value.includes("完成") || value.includes("成功") || value.includes("触发") || value.includes("done") || value.includes("success")) return "success";
  return "info";
}

function setMemoryStatus(text, tone = "") {
  const value = readableMemoryStatusText(text || " ");
  const normalizedTone = tone || memoryStatusTone(value);
  if (els.memoryStatus) {
    els.memoryStatus.textContent = memoryStatusNavText(value, normalizedTone);
    els.memoryStatus.title = value;
    els.memoryStatus.dataset.tone = normalizedTone;
    els.memoryStatus.dataset.detail = value;
  }
  renderMemoryOverview(value, normalizedTone);
  if (els.memoryList) els.memoryList.dataset.tone = normalizedTone;
}

function renderMemoryEmpty(text) {
  if (!els.memoryList) return;
  const item = document.createElement("p");
  item.className = "memoryEmpty";
  item.textContent = text || (currentLanguage === "en" ? "No memory to show yet." : "暂无记忆");
  item.dataset.tone = memoryStatusTone(item.textContent);
  els.memoryList.replaceChildren(item);
  els.memoryList.scrollTop = 0;
}

function memoryActionSnippet(content, maxLength = 44) {
  return String(content || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function memoryConfidenceLabel(confidence) {
  const value = Number(confidence);
  if (!Number.isFinite(value)) return "";
  const percent = `${Math.max(0, Math.min(100, Math.round(value * 100)))}%`;
  return currentLanguage === "en" ? `${percent} confidence` : `可信度 ${percent}`;
}

function memoryActionAllowed(item, action) {
  const actions = item && item.available_actions && typeof item.available_actions === "object" ? item.available_actions : {};
  return Boolean(actions[action]);
}

function memoryActionConfig(action) {
  const configs = {
    confirm_pending: { variant: "success", priority: "primary", loadingLabel: currentLanguage === "en" ? "Confirming" : "确认中", status: currentLanguage === "en" ? "Confirming this memory" : "正在确认这条记忆" },
    cancel_pending: { variant: "danger", priority: "danger", loadingLabel: currentLanguage === "en" ? "Cancelling" : "取消中", status: currentLanguage === "en" ? "Cancelling pending memory" : "正在取消待确认记忆" },
    preview_confirm: { variant: "success", priority: "primary", loadingLabel: currentLanguage === "en" ? "Previewing" : "预览中", status: currentLanguage === "en" ? "Building confirm preview" : "正在生成确认预览" },
    preview_correct: { variant: "primary", priority: "primary", loadingLabel: currentLanguage === "en" ? "Previewing" : "预览中", status: currentLanguage === "en" ? "Building edit preview" : "正在生成修改预览" },
    preview_delete: { variant: "danger", priority: "danger", loadingLabel: currentLanguage === "en" ? "Previewing" : "预览中", status: currentLanguage === "en" ? "Building delete preview" : "正在生成删除预览" },
    open_correct: { variant: "neutral", priority: "secondary" },
    collapse_editor: { variant: "neutral", priority: "secondary" }
  };
  return configs[action] || { variant: "neutral", priority: "secondary", loadingLabel: currentLanguage === "en" ? "Working" : "处理中", status: currentLanguage === "en" ? "Working" : "处理中" };
}

function decorateMemoryActionButton(button, action, label = "") {
  if (!button) return button;
  const config = memoryActionConfig(action);
  const visibleText = button.textContent.trim() || action;
  const accessibleLabel = label || visibleText;
  button.dataset.action = action;
  button.dataset.variant = config.variant;
  button.dataset.priority = config.priority || "secondary";
  button.dataset.defaultLabel = visibleText;
  button.setAttribute("aria-label", accessibleLabel);
  button.title = accessibleLabel;
  return button;
}

function setMemoryActionLoading(button, loading) {
  if (!button) return;
  const config = memoryActionConfig(button.dataset.action || "");
  if (loading) {
    if (!button.dataset.defaultLabel) button.dataset.defaultLabel = button.textContent.trim();
    button.dataset.loading = "true";
    button.setAttribute("aria-busy", "true");
    button.textContent = config.loadingLabel || "处理中";
  } else {
    button.removeAttribute("data-loading");
    button.removeAttribute("aria-busy");
    if (button.dataset.defaultLabel) button.textContent = button.dataset.defaultLabel;
  }
}

function setMemoryButtonsDisabled(container, disabled, activeButton = null) {
  if (!container) return;
  container.dataset.busy = disabled ? "true" : "false";
  container.setAttribute("aria-busy", disabled ? "true" : "false");
  container.querySelectorAll("button, textarea").forEach((node) => {
    if (disabled) {
      if (!node.dataset.wasDisabled) node.dataset.wasDisabled = node.disabled ? "true" : "false";
      node.disabled = true;
      if (node === activeButton && node.tagName === "BUTTON") setMemoryActionLoading(node, true);
    } else {
      node.disabled = node.dataset.wasDisabled === "true";
      delete node.dataset.wasDisabled;
      if (node.tagName === "BUTTON") setMemoryActionLoading(node, false);
    }
  });
}

async function runMemoryActionWithFeedback(action, item, options = {}) {
  const container = options.container || null;
  const trigger = options.trigger || null;
  const config = memoryActionConfig(action);
  const busyStartedAt = typeof performance !== "undefined" ? performance.now() : Date.now();
  const keepBusyVisible = async () => {
    const now = typeof performance !== "undefined" ? performance.now() : Date.now();
    const remaining = MEMORY_ACTION_MIN_BUSY_MS - (now - busyStartedAt);
    if (remaining > 0) await new Promise((resolve) => window.setTimeout(resolve, remaining));
  };
  setMemoryStatus(config.status || "处理中", "loading");
  setMemoryButtonsDisabled(container, true, trigger);
  try {
    const payload = await requestMemoryAction(action, item, options);
    await keepBusyVisible();
    if (container && container.isConnected) setMemoryButtonsDisabled(container, false);
    return payload;
  } catch (err) {
    await keepBusyVisible();
    const prefix = options.errorPrefix || (currentLanguage === "en" ? "Action failed" : "操作失败");
    setMemoryStatus(`${prefix}：${err.message || (currentLanguage === "en" ? "Network unavailable" : "网络不可用")}`, "error");
    setMemoryButtonsDisabled(container, false);
    return null;
  }
}

async function requestMemoryAction(action, item, options = {}) {
  const memoryId = item && item.memory_id ? String(item.memory_id) : "";
  if (!memoryId && !["confirm_pending", "cancel_pending"].includes(action)) return null;
  const body = {
    user_id: currentSubjectId(),
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
  if (payload && payload.reply) setMemoryStatus(payload.reply.replace(/\s+/g, " ").slice(0, 140), "success");
  if (payload && payload.message && payload.message.reply) {
    appendConversationMessage("assistant", payload.message.reply);
  }
  await refreshMemoryControlCenter({ force: true });
  return payload;
}

function renderMemoryPendingCard(pending) {
  if (!pending || !pending.has_pending) return null;
  const en = currentLanguage === "en";
  const pendingItem = Array.isArray(pending.items) && pending.items.length ? pending.items[0] : {};
  const card = document.createElement("article");
  card.className = "memoryPending";
  card.dataset.state = "pending";
  card.setAttribute("aria-label", en ? "Pending memory action" : "待确认记忆操作");

  const top = document.createElement("div");
  top.className = "memoryCardTop";

  const title = document.createElement("p");
  title.className = "memoryMeta";
  title.textContent = en ? "Needs review" : "待你确认";

  const badge = document.createElement("span");
  badge.className = "memoryBadge";
  badge.textContent = en ? "Manual write" : "不会自动写入";

  top.append(title, badge);

  const detail = document.createElement("p");
  detail.className = "memoryContent";
  detail.textContent = pendingItem.content_preview || (pendingItem.action ? memoryActionReadableName(pendingItem.action) : "") || (en ? "A memory action is waiting for review." : "有一条记忆操作等待确认");

  const hint = document.createElement("p");
  hint.className = "memoryHint";
  hint.textContent = en ? "Iris writes it only after you confirm. Cancel if it feels wrong." : "确认后才会进入长期记忆；不合适可以直接取消。";

  const actions = document.createElement("div");
  actions.className = "memoryActions";

  const confirm = document.createElement("button");
  confirm.type = "button";
  confirm.textContent = en ? "Confirm" : "确认";
  decorateMemoryActionButton(confirm, "confirm_pending", en ? "Confirm pending memory" : "确认待处理记忆");
  confirm.addEventListener("click", () => {
    runMemoryActionWithFeedback("confirm_pending", null, {
      container: card,
      trigger: confirm,
      errorPrefix: en ? "Confirm failed" : "确认失败"
    });
  });

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = en ? "Cancel" : "取消";
  cancel.className = "danger";
  decorateMemoryActionButton(cancel, "cancel_pending", en ? "Cancel pending memory" : "取消待处理记忆");
  cancel.addEventListener("click", () => {
    runMemoryActionWithFeedback("cancel_pending", null, {
      container: card,
      trigger: cancel,
      errorPrefix: en ? "Cancel failed" : "取消失败"
    });
  });

  actions.append(confirm, cancel);
  card.append(top, detail, hint, actions);
  return card;
}

function renderMemoryCorrectionEditor(row, item) {
  if (!row || row.querySelector(".memoryInlineEditor")) return;
  const en = currentLanguage === "en";
  const editor = document.createElement("div");
  editor.className = "memoryInlineEditor";
  editor.dataset.state = "editing";
  editor.setAttribute("aria-label", en ? "Edit this memory" : "修正这条记忆");

  const input = document.createElement("textarea");
  input.rows = 3;
  input.value = item && item.content ? String(item.content) : "";
  input.setAttribute("aria-label", en ? "New memory content" : "新的记忆内容");

  const actions = document.createElement("div");
  actions.className = "memoryActions";

  const preview = document.createElement("button");
  preview.type = "button";
  preview.textContent = en ? "Preview edit" : "生成修改预览";
  decorateMemoryActionButton(preview, "preview_correct", en ? "Preview memory edit" : "生成修改预览");
  preview.addEventListener("click", async () => {
    const newContent = input.value.trim();
    if (!newContent || newContent === String(item.content || "").trim()) {
      setMemoryStatus(en ? "Please edit the memory content first" : "请先输入新的记忆内容", "warning");
      return;
    }
    runMemoryActionWithFeedback("preview_correct", item, {
      container: editor,
      trigger: preview,
      newContent,
      errorPrefix: en ? "Edit preview failed" : "修改预览失败"
    });
  });

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = en ? "Close" : "收起";
  decorateMemoryActionButton(cancel, "collapse_editor", en ? "Close edit field" : "收起修正编辑器");
  cancel.addEventListener("click", () => {
    editor.remove();
    setMemoryStatus(en ? "Edit field closed" : "已收起修正编辑器", "info");
  });

  actions.append(preview, cancel);
  editor.append(input, actions);
  row.append(editor);
  window.setTimeout(() => input.focus(), 40);
}

async function requestMemoryPreview(action, item, container, trigger = null) {
  await runMemoryActionWithFeedback(action, item, {
    container,
    trigger,
    errorPrefix: currentLanguage === "en" ? "Action failed" : "操作失败"
  });
}

function renderMemoryControlCenter(payload) {
  if (!els.memoryList) return;
  lastMemoryControlPayload = payload || null;
  const en = currentLanguage === "en";
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
  setMemoryStatus(`${activeCount} 条事件 · ${digestTotal} 条摘要 · ${pendingCount + Number(actionCounts.confirmable || 0)} 条待确认`);
  const fragment = document.createDocumentFragment();
  const pendingCard = renderMemoryPendingCard(pending);
  if (pendingCard) fragment.appendChild(pendingCard);
  if (!events.length && !pendingCard) {
    renderMemoryEmpty(en ? "No event memory to show yet." : "暂无可展示的事件记忆");
    return;
  }
  events.slice(-24).reverse().forEach((item) => {
    const row = document.createElement("article");
    row.className = "memoryItem";
    row.dataset.state = memoryActionAllowed(item, "confirm") ? "needs-confirmation" : "active";
    row.dataset.memoryType = item.type || "unknown";

    const top = document.createElement("div");
    top.className = "memoryCardTop";

    const meta = document.createElement("p");
    meta.className = "memoryMeta";
    const confidence = memoryConfidenceLabel(item.confidence);
    meta.textContent = [memoryTypeLabel(item.type), memorySourceLabel(item), confidence].filter(Boolean).join(" · ");

    const badge = document.createElement("span");
    badge.className = "memoryBadge";
    badge.textContent = row.dataset.state === "needs-confirmation" ? (en ? "Review" : "待确认") : (en ? "Synced" : "已同步");

    top.append(meta, badge);

    const content = document.createElement("p");
    content.className = "memoryContent";
    content.textContent = item.content || " ";

    const source = document.createElement("p");
    source.className = "memorySource";
    const parts = [item.channel || "", item.timestamp ? item.timestamp.replace("T", " ").slice(0, 16) : ""].filter(Boolean);
    source.textContent = parts.length ? `${en ? "Source" : "来源"} ${parts.join(" · ")}` : `${en ? "Source" : "来源"} Iris`;

    const actions = document.createElement("div");
    actions.className = "memoryActions";

    if (memoryActionAllowed(item, "confirm")) {
      const confirm = document.createElement("button");
      confirm.type = "button";
      confirm.textContent = en ? "Confirm" : "确认";
      decorateMemoryActionButton(confirm, "preview_confirm", en ? "Preview confirming this memory" : "预览确认这条记忆");
      confirm.addEventListener("click", () => requestMemoryPreview("preview_confirm", item, row, confirm));
      actions.append(confirm);
    }

    const correct = document.createElement("button");
    correct.type = "button";
    correct.textContent = en ? "Edit" : "修正";
    decorateMemoryActionButton(correct, "open_correct", en ? "Edit this memory" : "修正这条记忆");
    correct.disabled = !memoryActionAllowed(item, "correct");
    correct.addEventListener("click", () => {
      setMemoryStatus(en ? "Editing this memory" : "正在修正这条记忆", "info");
      renderMemoryCorrectionEditor(row, item);
    });

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = en ? "Delete" : "删除";
    remove.className = "danger";
    decorateMemoryActionButton(remove, "preview_delete", en ? "Preview deleting this memory" : "预览删除这条记忆");
    remove.disabled = !memoryActionAllowed(item, "delete");
    remove.addEventListener("click", () => requestMemoryPreview("preview_delete", item, row, remove));

    actions.append(correct, remove);
    row.append(top, content, source, actions);
    fragment.appendChild(row);
  });
  els.memoryList.replaceChildren(fragment);
  els.memoryList.scrollTop = 0;
}

async function refreshMemoryControlCenter(options = {}) {
  if (!els.memoryRefresh || !els.memoryList) return;
  const requestId = ++memoryControlRequestSeq;
  if (activeMemoryAbortController) activeMemoryAbortController.abort();
  const abortController = typeof AbortController !== "undefined" ? new AbortController() : null;
  activeMemoryAbortController = abortController;
  let requestTimedOut = false;
  const requestTimeout = window.setTimeout(() => {
    requestTimedOut = true;
    if (abortController) abortController.abort();
  }, 10000);
  memoryControlLoading = true;
  els.memoryRefresh.disabled = true;
  els.memoryRefresh.dataset.loading = "true";
  els.memoryRefresh.setAttribute("aria-busy", "true");
  els.memoryList.setAttribute("aria-busy", "true");
  if (!options.force) setMemoryStatus(currentLanguage === "en" ? "Reading memory" : "读取中", "loading");
  try {
    const params = new URLSearchParams({ limit: "80", user_id: currentSubjectId(), client_id: voiceClientId() });
    const query = els.memorySearch ? els.memorySearch.value.trim() : "";
    if (query) params.set("q", query);
    const response = await fetch(backendUrl(`/client/v1/memory?${params.toString()}`), {
      method: "GET",
      headers: authHeaders(),
      cache: "no-store",
      ...(abortController ? { signal: abortController.signal } : {})
    });
    const payload = await response.json().catch(() => ({}));
    if (requestId !== memoryControlRequestSeq) return;
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    renderMemoryControlCenter(payload);
    memoryControlLoaded = true;
  } catch (err) {
    if (requestId !== memoryControlRequestSeq) return;
    const reason = requestTimedOut
      ? (currentLanguage === "en" ? "Request timed out" : "请求超时")
      : err.message || (currentLanguage === "en" ? "Network unavailable" : "网络不可用");
    setMemoryStatus(`${currentLanguage === "en" ? "Read failed" : "读取失败"}：${reason}`, "error");
    renderMemoryEmpty(currentLanguage === "en" ? "Memory could not be loaded." : "记忆读取失败");
    logLine(`memory refresh failed ${reason}`.trim());
  } finally {
    window.clearTimeout(requestTimeout);
    if (requestId !== memoryControlRequestSeq) return;
    activeMemoryAbortController = null;
    memoryControlLoading = false;
    els.memoryRefresh.disabled = false;
    els.memoryRefresh.removeAttribute("data-loading");
    els.memoryRefresh.removeAttribute("aria-busy");
    els.memoryList.setAttribute("aria-busy", "false");
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

function reviewWorkbenchStatusLabel(status) {
  const labels = currentLanguage === "en" ? {
    proposed: "Proposed",
    awaiting_confirmation: "Needs approval",
    executing: "Executing",
    verifying: "Verifying",
    succeeded: "Completed",
    failed: "Needs attention",
    cancelled: "Cancelled",
    expired: "Expired",
    result_unknown: "Result unknown",
    pending_review: "Needs review",
    approved: "Committing",
    rejected: "Rejected",
    committed: "Saved",
    commit_failed: "Commit failed",
    revoked: "Revoked",
    revoke_failed: "Revoke failed"
  } : {
    proposed: "已提议",
    awaiting_confirmation: "待批准",
    executing: "正在执行",
    verifying: "正在核验",
    succeeded: "已完成",
    failed: "需要处理",
    cancelled: "已取消",
    expired: "已过期",
    result_unknown: "结果待核实",
    pending_review: "待审阅",
    approved: "正在写入",
    rejected: "已拒绝",
    committed: "已保存",
    commit_failed: "写入失败",
    revoked: "已撤销",
    revoke_failed: "撤销失败"
  };
  return labels[status] || String(status || "-");
}

function reviewWorkbenchActionTitle(action) {
  const labels = currentLanguage === "en" ? {
    "mail.send": "Send email",
    "mail.reply": "Reply to email",
    "mail.delete": "Delete email",
    "calendar.create": "Create calendar event",
    "calendar.update": "Update calendar event",
    "calendar.delete": "Delete calendar event",
    "calendar.undo": "Undo calendar action",
    "task.create": "Create task",
    "task.update": "Update task",
    "task.complete": "Complete task",
    "task.reopen": "Reopen task",
    "task.delete": "Delete task",
    "task.undo": "Undo task action",
    "reminder.create": "Create reminder",
    "reminder.update": "Update reminder",
    "reminder.complete": "Complete reminder",
    "reminder.reopen": "Reopen reminder",
    "reminder.delete": "Delete reminder",
    "reminder.undo": "Undo reminder action"
  } : {
    "mail.send": "发送邮件",
    "mail.reply": "回复邮件",
    "mail.delete": "删除邮件",
    "calendar.create": "创建日程",
    "calendar.update": "修改日程",
    "calendar.delete": "删除日程",
    "calendar.undo": "撤销日程操作",
    "task.create": "创建待办",
    "task.update": "修改待办",
    "task.complete": "完成待办",
    "task.reopen": "恢复待办",
    "task.delete": "删除待办",
    "task.undo": "撤销待办操作",
    "reminder.create": "创建提醒",
    "reminder.update": "修改提醒",
    "reminder.complete": "完成提醒",
    "reminder.reopen": "恢复提醒",
    "reminder.delete": "删除提醒",
    "reminder.undo": "撤销提醒操作"
  };
  const value = String(action || "");
  return labels[value] || value.replace(/[._:-]+/g, " ") || (currentLanguage === "en" ? "External action" : "外部动作");
}

function reviewWorkbenchMemoryTitle(record) {
  const typeLabels = currentLanguage === "en" ? {
    profile: "profile",
    preference: "preference",
    episodic: "experience",
    semantic: "fact",
    procedural: "habit",
    relationship: "relationship"
  } : {
    profile: "个人资料",
    preference: "偏好",
    episodic: "经历",
    semantic: "事实",
    procedural: "习惯",
    relationship: "关系"
  };
  const operationLabels = currentLanguage === "en" ? {
    create: "Save",
    update: "Update",
    supersede: "Replace",
    invalidate: "Invalidate",
    forget: "Forget"
  } : {
    create: "写入",
    update: "更新",
    supersede: "替换",
    invalidate: "停用",
    forget: "遗忘"
  };
  const operation = operationLabels[record.operation] || (currentLanguage === "en" ? "Review" : "审阅");
  const type = typeLabels[record.memory_type] || (currentLanguage === "en" ? "memory" : "记忆");
  return currentLanguage === "en" ? `${operation} ${type}` : `${operation}${type}`;
}

function reviewWorkbenchPhase(item) {
  const record = item.record || {};
  if (record.can_approve || record.can_cancel || record.can_reject || record.can_revoke) return "needs-review";
  if (["proposed", "awaiting_confirmation", "pending_review", "failed", "result_unknown", "commit_failed", "revoke_failed"].includes(record.status)) return "attention";
  if (["executing", "verifying", "approved"].includes(record.status)) return "in-progress";
  return "resolved";
}

function normalizeReviewWorkbenchPayload(payload) {
  const actions = Array.isArray(payload && payload.actions && payload.actions.transactions)
    ? payload.actions.transactions.map((record) => ({
      key: `action:${record.transaction_id}`,
      kind: "action",
      id: record.transaction_id,
      title: reviewWorkbenchActionTitle(record.action),
      record
    }))
    : [];
  const learning = Array.isArray(payload && payload.learning && payload.learning.reviews)
    ? payload.learning.reviews.map((record) => ({
      key: `learning:${record.review_id}`,
      kind: "learning",
      id: record.review_id,
      title: reviewWorkbenchMemoryTitle(record),
      record
    }))
    : [];
  return actions.concat(learning).map((item) => ({ ...item, phase: reviewWorkbenchPhase(item) })).sort((left, right) => {
    const rank = { "needs-review": 0, attention: 1, "in-progress": 2, resolved: 3 };
    const rankDelta = (rank[left.phase] ?? 9) - (rank[right.phase] ?? 9);
    if (rankDelta) return rankDelta;
    return String(right.record.updated_at || "").localeCompare(String(left.record.updated_at || ""));
  });
}

function setReviewWorkbenchStatus(text, tone = "info") {
  const value = String(text || " ");
  if (els.reviewStatus) {
    els.reviewStatus.textContent = value;
    els.reviewStatus.title = value;
    els.reviewStatus.dataset.tone = tone;
  }
  if (els.reviewOverview) els.reviewOverview.dataset.tone = tone;
}

function renderReviewWorkbenchOverview(items, payload) {
  if (!els.reviewOverview) return;
  const pending = items.filter((item) => item.phase === "needs-review").length;
  const attention = items.filter((item) => item.phase === "attention").length;
  const running = items.filter((item) => item.phase === "in-progress").length;
  const partial = Boolean(payload && payload.partial);
  const en = currentLanguage === "en";
  const title = pending
    ? (en ? `${pending} waiting for you` : `${pending} 项等你决定`)
    : (attention ? (en ? `${attention} need attention` : `${attention} 项需要核实`) : (en ? "Nothing needs approval" : "当前没有待批准项"));
  const detail = partial
    ? (en ? "One review source is temporarily unavailable. Available items are still shown." : "一类审阅数据暂时不可用，其他项目仍已显示。")
    : (running
      ? (en ? `${running} are being executed or committed.` : `${running} 项正在执行或写入。`)
      : (en ? "External actions and long-term learning stay separate under one review surface." : "外部动作和长期学习在同一入口审阅，但仍由各自状态机治理。"));
  els.reviewOverview.replaceChildren();
  const kicker = document.createElement("span");
  kicker.className = "reviewOverviewKicker";
  kicker.textContent = "REVIEW QUEUE";
  const strong = document.createElement("strong");
  strong.textContent = title;
  const copy = document.createElement("span");
  copy.textContent = detail;
  els.reviewOverview.append(kicker, strong, copy);
  const nav = en
    ? `${pending} pending${attention ? ` · ${attention} attention` : ""}`
    : `${pending} 项待处理${attention ? ` · ${attention} 项需核实` : ""}`;
  setReviewWorkbenchStatus(nav, partial || attention ? "warning" : (pending ? "info" : "success"));
}

function reviewWorkbenchTime(value) {
  const text = String(value || "");
  if (!text) return "";
  const date = new Date(text);
  if (Number.isNaN(date.getTime())) return text.replace("T", " ").slice(0, 16);
  try {
    return new Intl.DateTimeFormat(currentLanguage === "en" ? "en" : "zh-CN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  } catch (_err) {
    return text.replace("T", " ").slice(0, 16);
  }
}

function reviewWorkbenchKindLabel(kind) {
  if (kind === "action") return currentLanguage === "en" ? "External action" : "外部动作";
  return currentLanguage === "en" ? "Long-term learning" : "长期学习";
}

function reviewWorkbenchImpactLabel(item) {
  const record = item.record || {};
  if (item.kind === "action") {
    return currentLanguage === "en" ? `Risk ${record.risk_level || "-"}` : `风险 ${record.risk_level || "-"}`;
  }
  const labels = currentLanguage === "en"
    ? { low: "Low impact", medium: "Medium impact", high: "High impact", critical: "Critical impact" }
    : { low: "低影响", medium: "中影响", high: "高影响", critical: "关键影响" };
  return labels[record.impact] || String(record.impact || "-");
}

function reviewWorkbenchDecisionKey(item, decision) {
  const mapKey = `${item.key}:${item.record.revision}:${decision}`;
  if (reviewDecisionKeys.has(mapKey)) return reviewDecisionKeys.get(mapKey);
  const random = typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(16).slice(2)}`;
  const key = `web-review-${decision}-${random}`.slice(0, 160);
  reviewDecisionKeys.set(mapKey, key);
  return key;
}

function reviewWorkbenchDecisionCopy(item, decision) {
  const en = currentLanguage === "en";
  if (item.kind === "action" && decision === "approve") {
    return en
      ? "This approval immediately executes the external action shown above. Confirm only after checking every detail."
      : "批准后会立即执行上方外部动作。请核对每个细节后再确认。";
  }
  if (item.kind === "learning" && decision === "approve") {
    return en
      ? "This approval writes the proposal into long-term memory."
      : "批准后会把上方内容写入长期记忆。";
  }
  if (item.kind === "learning" && decision === "revoke") {
    return en
      ? "This removes the committed memory through a new forgotten revision."
      : "确认后会通过新的遗忘修订撤销这条长期记忆。";
  }
  return en ? "This closes the pending item without executing it." : "确认后会关闭这项待处理内容，不会执行或写入。";
}

function setReviewCardBusy(card, busy) {
  if (!card) return;
  card.dataset.busy = busy ? "true" : "false";
  card.setAttribute("aria-busy", busy ? "true" : "false");
  card.querySelectorAll("button").forEach((button) => {
    button.disabled = busy;
  });
}

async function runReviewWorkbenchDecision(item, decision, card) {
  const endpoint = item.kind === "action"
    ? `/client/v1/actions/transactions/${encodeURIComponent(item.id)}/decision`
    : `/client/v1/learning/reviews/${encodeURIComponent(item.id)}/decision`;
  const body = {
    user_id: currentSubjectId(),
    action: decision,
    expected_revision: Number(item.record.revision),
    idempotency_key: reviewWorkbenchDecisionKey(item, decision),
    reason_code: "workbench_user_decision"
  };
  setReviewCardBusy(card, true);
  setReviewWorkbenchStatus(currentLanguage === "en" ? "Applying your decision" : "正在提交你的决定", "loading");
  try {
    const response = await fetch(backendUrl(endpoint), {
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
    await refreshReviewWorkbench({ force: true });
  } catch (err) {
    setReviewWorkbenchStatus(
      `${currentLanguage === "en" ? "Decision failed" : "提交失败"}：${err.message || (currentLanguage === "en" ? "Network unavailable" : "网络不可用")}`,
      "error"
    );
    setReviewCardBusy(card, false);
    if (String(err.message || "").includes("revision_conflict")) {
      refreshReviewWorkbench({ force: true }).catch(() => {});
    }
  }
}

function armReviewWorkbenchDecision(item, decision, card) {
  if (!card) return;
  const existing = card.querySelector(".reviewDecisionConfirm");
  if (existing) existing.remove();
  const panel = document.createElement("div");
  panel.className = "reviewDecisionConfirm";
  panel.setAttribute("role", "alert");
  const copy = document.createElement("p");
  copy.textContent = reviewWorkbenchDecisionCopy(item, decision);
  const actions = document.createElement("div");
  actions.className = "reviewActions";
  const confirm = document.createElement("button");
  confirm.type = "button";
  confirm.dataset.role = decision === "approve" ? "primary" : (decision === "revoke" ? "danger" : "secondary");
  confirm.textContent = currentLanguage === "en" ? "Confirm decision" : "确认决定";
  confirm.addEventListener("click", () => runReviewWorkbenchDecision(item, decision, card));
  const back = document.createElement("button");
  back.type = "button";
  back.dataset.role = "quiet";
  back.textContent = currentLanguage === "en" ? "Back" : "返回";
  back.addEventListener("click", () => panel.remove());
  actions.append(confirm, back);
  panel.append(copy, actions);
  card.appendChild(panel);
  window.setTimeout(() => {
    panel.scrollIntoView({ block: "nearest", inline: "nearest" });
    confirm.focus({ preventScroll: true });
  }, 20);
}

function reviewProposalContent(proposal) {
  if (!proposal || !proposal.content || typeof proposal.content !== "object") return "";
  const content = proposal.content;
  for (const key of ["text", "label", "value", "summary", "title", "name"]) {
    const value = content[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  const safe = {};
  Object.entries(content).forEach(([key, value]) => {
    if (/id|hash|evidence|source|channel/i.test(key)) return;
    if (["string", "number", "boolean"].includes(typeof value)) safe[key] = value;
  });
  return Object.keys(safe).length ? JSON.stringify(safe, null, 2) : "";
}

function appendReviewDetailActions(detail, item, detailPayload, card) {
  const actions = document.createElement("div");
  actions.className = "reviewActions";
  const record = item.record || {};
  if (item.kind === "action") {
    const preview = detailPayload && detailPayload.private_preview;
    if (record.can_approve && preview && preview.available) {
      const approve = document.createElement("button");
      approve.type = "button";
      approve.dataset.role = "primary";
      approve.textContent = currentLanguage === "en" ? "Approve and execute" : "批准并执行";
      approve.addEventListener("click", () => armReviewWorkbenchDecision(item, "approve", card));
      actions.appendChild(approve);
    }
    if (record.can_cancel) {
      const cancel = document.createElement("button");
      cancel.type = "button";
      cancel.dataset.role = "secondary";
      cancel.textContent = currentLanguage === "en" ? "Cancel action" : "取消动作";
      cancel.addEventListener("click", () => armReviewWorkbenchDecision(item, "cancel", card));
      actions.appendChild(cancel);
    }
  } else {
    const proposal = detailPayload && detailPayload.proposal;
    if (record.can_approve && proposal) {
      const approve = document.createElement("button");
      approve.type = "button";
      approve.dataset.role = "primary";
      approve.textContent = currentLanguage === "en" ? "Approve memory" : "批准写入";
      approve.addEventListener("click", () => armReviewWorkbenchDecision(item, "approve", card));
      actions.appendChild(approve);
    }
    if (record.can_reject) {
      const reject = document.createElement("button");
      reject.type = "button";
      reject.dataset.role = "secondary";
      reject.textContent = currentLanguage === "en" ? "Reject" : "拒绝";
      reject.addEventListener("click", () => armReviewWorkbenchDecision(item, "reject", card));
      actions.appendChild(reject);
    }
    if (record.can_revoke) {
      const revoke = document.createElement("button");
      revoke.type = "button";
      revoke.dataset.role = "danger";
      revoke.textContent = currentLanguage === "en" ? "Revoke memory" : "撤销记忆";
      revoke.addEventListener("click", () => armReviewWorkbenchDecision(item, "revoke", card));
      actions.appendChild(revoke);
    }
  }
  if (actions.childElementCount) detail.appendChild(actions);
}

function renderReviewWorkbenchDetail(item, payload, card) {
  const previous = card.querySelector(".reviewDetail");
  if (previous) previous.remove();
  const detail = document.createElement("section");
  detail.className = "reviewDetail";
  const heading = document.createElement("p");
  heading.className = "reviewDetailHeading";
  heading.textContent = currentLanguage === "en" ? "Verified review detail" : "已核验的审阅详情";
  const content = document.createElement("pre");
  content.className = "reviewDetailContent";
  if (item.kind === "action") {
    const preview = payload && payload.private_preview;
    if (preview && preview.available) {
      content.textContent = preview.content || (currentLanguage === "en" ? "No preview copy." : "没有可展示的预览内容。" );
      detail.dataset.previewAvailable = "true";
    } else {
      const code = preview && preview.warning_code ? ` (${preview.warning_code})` : "";
      content.textContent = currentLanguage === "en"
        ? `The private action preview is no longer current${code}. Approval is disabled; cancel it or create a fresh preview in the conversation.`
        : `这条私密动作预览已经失效或发生变化${code}。工作台已禁用批准；你可以取消它，或回到对话重新生成预览。`;
      detail.dataset.previewAvailable = "false";
    }
  } else {
    const proposal = payload && payload.proposal;
    const proposalText = reviewProposalContent(proposal);
    content.textContent = proposalText || (currentLanguage === "en"
      ? "The private proposal payload has been removed after its lifecycle completed."
      : "私密提案内容已在生命周期结束后删除。");
    detail.dataset.previewAvailable = proposal ? "true" : "false";
  }
  const provenance = document.createElement("p");
  provenance.className = "reviewProvenance";
  const sourceCount = Array.isArray(item.record.source_event_ids) ? item.record.source_event_ids.length : 0;
  const evidenceCount = Array.isArray(item.record.evidence_refs) ? item.record.evidence_refs.length : 0;
  provenance.textContent = currentLanguage === "en"
    ? `Revision ${item.record.revision} · ${sourceCount} source refs · ${evidenceCount} evidence refs`
    : `修订 ${item.record.revision} · ${sourceCount} 个来源引用 · ${evidenceCount} 个证据引用`;
  detail.append(heading, content, provenance);
  appendReviewDetailActions(detail, item, payload, card);
  card.appendChild(detail);
}

async function loadReviewWorkbenchDetail(item, card, trigger) {
  if (!item || !card || card.dataset.detailLoading === "true") return;
  const existing = card.querySelector(".reviewDetail");
  if (existing) {
    existing.remove();
    trigger.textContent = currentLanguage === "en" ? "View details" : "查看详情";
    trigger.setAttribute("aria-expanded", "false");
    return;
  }
  card.dataset.detailLoading = "true";
  trigger.disabled = true;
  trigger.textContent = currentLanguage === "en" ? "Loading" : "读取中";
  try {
    const query = new URLSearchParams({
      user_id: currentSubjectId(),
      include_proposal: "true"
    });
    if (item.kind === "action") query.set("include_private_preview", "true");
    const endpoint = item.kind === "action"
      ? `/client/v1/actions/transactions/${encodeURIComponent(item.id)}?${query.toString()}`
      : `/client/v1/learning/reviews/${encodeURIComponent(item.id)}?${query.toString()}`;
    const response = await fetch(backendUrl(endpoint), {
      method: "GET",
      headers: authHeaders(),
      cache: "no-store"
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    renderReviewWorkbenchDetail(item, payload, card);
    trigger.textContent = currentLanguage === "en" ? "Hide details" : "收起详情";
    trigger.setAttribute("aria-expanded", "true");
  } catch (err) {
    setReviewWorkbenchStatus(
      `${currentLanguage === "en" ? "Detail failed" : "详情读取失败"}：${err.message || ""}`,
      "error"
    );
    trigger.textContent = currentLanguage === "en" ? "Try details again" : "重试详情";
  } finally {
    delete card.dataset.detailLoading;
    trigger.disabled = false;
  }
}

function renderReviewWorkbenchCard(item) {
  const card = document.createElement("article");
  card.className = "reviewItem";
  card.dataset.kind = item.kind;
  card.dataset.phase = item.phase;
  card.dataset.status = item.record.status || "";

  const top = document.createElement("div");
  top.className = "reviewCardTop";
  const kind = document.createElement("span");
  kind.className = "reviewKind";
  kind.textContent = reviewWorkbenchKindLabel(item.kind);
  const status = document.createElement("span");
  status.className = "reviewBadge";
  status.textContent = reviewWorkbenchStatusLabel(item.record.status);
  top.append(kind, status);

  const title = document.createElement("h3");
  title.textContent = item.title;
  const meta = document.createElement("p");
  meta.className = "reviewMeta";
  const reversible = item.kind === "action"
    ? (item.record.reversible
      ? (currentLanguage === "en" ? "reversible" : "可撤销")
      : (currentLanguage === "en" ? "not reversible" : "不可撤销"))
    : `${currentLanguage === "en" ? "sensitivity" : "敏感度"} ${item.record.sensitivity || "-"}`;
  meta.textContent = [reviewWorkbenchImpactLabel(item), reversible, reviewWorkbenchTime(item.record.updated_at)].filter(Boolean).join(" · ");

  const hint = document.createElement("p");
  hint.className = "reviewHint";
  if (item.kind === "action") {
    hint.textContent = currentLanguage === "en"
      ? "Private target details are loaded and revalidated only when you open this item."
      : "只有打开详情时才会临时读取并重新核验私密目标内容。";
  } else {
    hint.textContent = currentLanguage === "en"
      ? "Approval writes to long-term memory; revocation creates an auditable forgotten revision."
      : "批准会写入长期记忆；撤销会生成可审计的遗忘修订。";
  }

  const actions = document.createElement("div");
  actions.className = "reviewActions reviewCardActions";
  const detail = document.createElement("button");
  detail.type = "button";
  detail.dataset.role = "quiet";
  detail.textContent = currentLanguage === "en" ? "View details" : "查看详情";
  detail.setAttribute("aria-expanded", "false");
  detail.addEventListener("click", () => loadReviewWorkbenchDetail(item, card, detail));
  actions.appendChild(detail);

  card.append(top, title, meta, hint, actions);
  return card;
}

function renderReviewWorkbench(payload) {
  if (!els.reviewList) return;
  lastReviewWorkbenchPayload = payload || {};
  const items = normalizeReviewWorkbenchPayload(payload || {});
  renderReviewWorkbenchOverview(items, payload || {});
  const visible = reviewWorkbenchFilter === "pending"
    ? items.filter((item) => item.phase !== "resolved")
    : items;
  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "reviewEmpty";
    empty.textContent = reviewWorkbenchFilter === "pending"
      ? (currentLanguage === "en" ? "Nothing needs your decision right now." : "现在没有需要你决定的项目。")
      : (currentLanguage === "en" ? "No review history yet." : "还没有审阅记录。" );
    els.reviewList.replaceChildren(empty);
    return;
  }
  const fragment = document.createDocumentFragment();
  visible.slice(0, 80).forEach((item) => fragment.appendChild(renderReviewWorkbenchCard(item)));
  els.reviewList.replaceChildren(fragment);
}

async function fetchReviewWorkbenchCollection(path) {
  const params = new URLSearchParams({ user_id: currentSubjectId(), limit: "100" });
  const response = await fetch(backendUrl(`${path}?${params.toString()}`), {
    method: "GET",
    headers: authHeaders(),
    cache: "no-store"
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    throw new Error(payload.detail || `HTTP ${response.status}`);
  }
  return payload;
}

async function refreshReviewWorkbench(options = {}) {
  if (!els.reviewRefresh || !els.reviewList || reviewWorkbenchLoading) return;
  reviewWorkbenchLoading = true;
  els.reviewRefresh.disabled = true;
  els.reviewRefresh.dataset.loading = "true";
  els.reviewRefresh.setAttribute("aria-busy", "true");
  els.reviewList.setAttribute("aria-busy", "true");
  if (!options.force) setReviewWorkbenchStatus(currentLanguage === "en" ? "Syncing review queue" : "正在同步审阅队列", "loading");
  try {
    const [actions, learning] = await Promise.allSettled([
      fetchReviewWorkbenchCollection("/client/v1/actions/transactions"),
      fetchReviewWorkbenchCollection("/client/v1/learning/reviews")
    ]);
    if (actions.status === "rejected" && learning.status === "rejected") {
      throw new Error(actions.reason && actions.reason.message || learning.reason && learning.reason.message || "review_sources_unavailable");
    }
    const payload = {
      actions: actions.status === "fulfilled" ? actions.value : { transactions: [], metrics: {} },
      learning: learning.status === "fulfilled" ? learning.value : { reviews: [], metrics: {} },
      partial: actions.status === "rejected" || learning.status === "rejected",
      errors: {
        actions: actions.status === "rejected" ? String(actions.reason && actions.reason.message || "unavailable") : "",
        learning: learning.status === "rejected" ? String(learning.reason && learning.reason.message || "unavailable") : ""
      }
    };
    renderReviewWorkbench(payload);
    reviewWorkbenchLoaded = true;
  } catch (err) {
    setReviewWorkbenchStatus(
      `${currentLanguage === "en" ? "Review sync failed" : "审阅同步失败"}：${err.message || (currentLanguage === "en" ? "Network unavailable" : "网络不可用")}`,
      "error"
    );
    const empty = document.createElement("p");
    empty.className = "reviewEmpty";
    empty.textContent = currentLanguage === "en" ? "The review queue could not be loaded." : "审阅队列暂时无法读取。";
    els.reviewList.replaceChildren(empty);
    logLine(`review workbench refresh failed ${err.message || ""}`.trim());
  } finally {
    reviewWorkbenchLoading = false;
    els.reviewRefresh.disabled = false;
    els.reviewRefresh.removeAttribute("data-loading");
    els.reviewRefresh.removeAttribute("aria-busy");
    els.reviewList.setAttribute("aria-busy", "false");
  }
}

function setReviewWorkbenchFilter(filter) {
  reviewWorkbenchFilter = filter === "all" ? "all" : "pending";
  if (els.reviewTabs) {
    els.reviewTabs.querySelectorAll("[data-review-filter]").forEach((button) => {
      const active = button.dataset.reviewFilter === reviewWorkbenchFilter;
      button.setAttribute("aria-selected", active ? "true" : "false");
      button.classList.toggle("active", active);
    });
  }
  if (lastReviewWorkbenchPayload) renderReviewWorkbench(lastReviewWorkbenchPayload);
}

function setDocumentStatus(text, tone = "info", title = "") {
  const normalizedTone = ["info", "loading", "ready", "warning", "error"].includes(tone) ? tone : "info";
  const value = text || " ";
  if (els.documentStatus) {
    els.documentStatus.textContent = value;
    const titleValue = title || (currentDocumentSummaryData && ["ready", "loading"].includes(normalizedTone)
      ? currentDocumentStatusTitleLine()
      : value.trim());
    els.documentStatus.title = titleValue;
  }
  if (els.documentContextBar) {
    els.documentContextBar.hidden = !documentContextVisible || (!currentDocumentId && !value.trim());
    els.documentContextBar.dataset.tone = normalizedTone;
    els.documentContextBar.dataset.hasDocument = currentDocumentId ? "true" : "false";
    els.documentContextBar.dataset.documentBadge = currentDocumentSummaryData
      ? documentTypeBadge(currentDocumentSummaryData)
      : "FILE";
  }
  if (els.documentContextBar && !els.documentContextBar.hidden) {
    setDocumentUploadStatus("", "info", false);
  }
  syncComposerSendAvailability();
  scheduleViewportMetrics({ refreshSubtitle: false });
}

function setDocumentContextVisible(visible) {
  documentContextVisible = Boolean(visible);
  if (els.documentContextBar) {
    const hasStatus = Boolean(els.documentStatus && String(els.documentStatus.textContent || "").trim());
    els.documentContextBar.hidden = !documentContextVisible || (!currentDocumentId && !hasStatus);
    if (!els.documentContextBar.hidden) setDocumentUploadStatus("", "info", false);
  }
  syncComposerSendAvailability();
  scheduleViewportMetrics({ refreshSubtitle: false });
}

function setDocumentAnswer(text) {
  if (els.documentAnswer) els.documentAnswer.textContent = text || " ";
}

function setDocumentUploadStatus(text = "", tone = "info", visible = false) {
  const normalizedTone = ["info", "loading", "ready", "warning", "error"].includes(tone) ? tone : "info";
  const value = String(text || "").trim();
  const hasVisibleDocumentContext = Boolean(els.documentContextBar && !els.documentContextBar.hidden);
  const shouldShow = Boolean(visible && value && !hasVisibleDocumentContext);
  if (els.documentUploadStatus) {
    els.documentUploadStatus.textContent = shouldShow ? value : " ";
    els.documentUploadStatus.title = shouldShow ? value : "";
    els.documentUploadStatus.dataset.tone = normalizedTone;
    els.documentUploadStatus.dataset.visible = shouldShow ? "true" : "false";
    els.documentUploadStatus.hidden = !shouldShow;
  }
  const composer = els.documentUpload ? els.documentUpload.closest(".unifiedComposer") : null;
  if (composer) {
    composer.dataset.uploadStatusVisible = shouldShow ? "true" : "false";
    if (shouldShow) composer.dataset.uploadTone = normalizedTone;
    else delete composer.dataset.uploadTone;
  }
  scheduleViewportMetrics({ refreshSubtitle: false });
}

const DOCUMENT_JOB_ACTIVE_STATUSES = new Set(["received", "analyzing", "parsing", "indexing"]);

function documentPayloadIsTerminal(documentItem) {
  const status = String(documentItem && documentItem.status || "").toLowerCase();
  return Boolean(documentItem && documentItem.id) && !DOCUMENT_JOB_ACTIVE_STATUSES.has(status) && status !== "failed";
}

function terminalDocumentFromReceipt(receipt) {
  const documentItem = receipt && receipt.document;
  if (documentPayloadIsTerminal(documentItem)) return documentItem;
  const job = receipt && receipt.job;
  const jobStatus = String(job && job.status || "").toLowerCase();
  const resultStatus = String(job && job.result_document_status || "").toLowerCase();
  if (
    documentItem
    && ["ready", "partial"].includes(jobStatus)
    && resultStatus
    && !DOCUMENT_JOB_ACTIVE_STATUSES.has(resultStatus)
    && resultStatus !== "failed"
  ) {
    return { ...documentItem, status: resultStatus };
  }
  return null;
}

function documentJobStageLabel(stage) {
  const labels = currentLanguage === "en"
    ? { uploading: "Uploading", verifying: "Verifying", received: "Queued", analyzing: "Analyzing", parsing: "Parsing", indexing: "Indexing", cancelling: "Cancelling", ready: "Ready", partial: "Partially ready", failed: "Failed", cancelled: "Cancelled" }
    : { uploading: "正在上传", verifying: "正在确认", received: "已排队", analyzing: "正在分析", parsing: "正在解析", indexing: "正在建立索引", cancelling: "正在取消", ready: "已就绪", partial: "部分就绪", failed: "解析失败", cancelled: "已取消" };
  return labels[String(stage || "")] || String(stage || "");
}

function documentJobStatusLine(job, pending = null) {
  const filename = String((job && job.filename) || (pending && pending.filename) || currentDocumentName || "");
  const stage = String((job && (job.stage || job.status)) || "received");
  const progress = Math.max(0, Math.min(100, Number(job && job.progress || 0)));
  const unitParse = job && job.unit_parse && typeof job.unit_parse === "object" ? job.unit_parse : null;
  const unitCount = Math.max(0, Number(unitParse && unitParse.unit_count || 0));
  const readyCount = Math.max(0, Number(unitParse && unitParse.ready_count || 0));
  const failedCount = Math.max(0, Number(unitParse && unitParse.failed_count || 0));
  const unitLine = unitCount > 1
    ? currentLanguage === "en"
      ? `${readyCount}/${unitCount} units${failedCount ? `, ${failedCount} failed` : ""}`
      : `${readyCount}/${unitCount} 个单元${failedCount ? `，${failedCount} 个失败` : ""}`
    : "";
  return [filename, documentJobStageLabel(stage), `${Math.round(progress)}%`, unitLine].filter(Boolean).join(" · ");
}

function setDocumentJobControls(job = null) {
  const status = String(job && job.status || "");
  const unitParse = job && job.unit_parse && typeof job.unit_parse === "object" ? job.unit_parse : null;
  const retryableUnitCount = Math.max(0, Number(unitParse && unitParse.retryable_failed_count || 0));
  documentJobActive = DOCUMENT_JOB_ACTIVE_STATUSES.has(status);
  activeDocumentJobId = String(job && job.job_id || (documentJobActive ? activeDocumentJobId : ""));
  activeDocumentUnitRetryId = retryableUnitCount > 0
    ? String(job && job.document_id || currentDocumentId || "")
    : "";
  if (els.documentJobCancel) {
    els.documentJobCancel.hidden = !(job && job.can_cancel);
    els.documentJobCancel.disabled = false;
    els.documentJobCancel.textContent = currentLanguage === "en" ? "Cancel" : "取消";
  }
  if (els.documentJobRetry) {
    els.documentJobRetry.hidden = !(job && (job.can_retry || retryableUnitCount > 0));
    els.documentJobRetry.disabled = false;
    els.documentJobRetry.textContent = retryableUnitCount > 0
      ? currentLanguage === "en" ? `Retry failed (${retryableUnitCount})` : `重试失败项 (${retryableUnitCount})`
      : currentLanguage === "en" ? "Retry" : "重试";
  }
  if (els.documentSummarize) {
    els.documentSummarize.hidden = Boolean(job && (documentJobActive || status === "failed" || status === "cancelled"));
  }
}

function setDocumentBusy(busy) {
  const effectiveBusy = Boolean(busy || documentJobActive);
  if (els.documentContextBar) els.documentContextBar.dataset.busy = effectiveBusy ? "true" : "false";
  const composer = els.documentUpload ? els.documentUpload.closest(".unifiedComposer") : null;
  if (composer) composer.dataset.documentBusy = effectiveBusy ? "true" : "false";
  if (els.documentUpload) {
    els.documentUpload.disabled = effectiveBusy;
    els.documentUpload.setAttribute("aria-busy", effectiveBusy ? "true" : "false");
    if (effectiveBusy) {
      els.documentUpload.dataset.loading = "true";
      els.documentUpload.dataset.mode = "uploading";
      els.documentUpload.setAttribute("aria-label", textFor("document.uploadingPdfAria", "正在上传文件"));
      els.documentUpload.setAttribute("title", textFor("document.uploadingPdfAria", "正在上传文件"));
      const hasVisibleDocumentContext = Boolean(els.documentContextBar && !els.documentContextBar.hidden);
      if (!documentJobActive && !hasVisibleDocumentContext) {
        setDocumentUploadStatus(textFor("document.uploadingPdfAria", "正在上传文件"), "loading", true);
      } else {
        setDocumentUploadStatus("", "info", false);
      }
    } else {
      els.documentUpload.removeAttribute("data-loading");
      els.documentUpload.dataset.mode = "idle";
      els.documentUpload.setAttribute("aria-label", textFor("action.uploadFile", "上传文件"));
      els.documentUpload.setAttribute("title", textFor("action.uploadFile", "上传文件"));
      if (!composer || composer.dataset.uploadSelecting !== "true") setDocumentUploadStatus("", "info", false);
    }
  }
  if (els.documentSummarize) els.documentSummarize.disabled = Boolean(effectiveBusy || !currentDocumentId);
  if (els.documentAsk) els.documentAsk.disabled = Boolean(effectiveBusy || !currentDocumentId);
  syncComposerSendAvailability();
}

function setDocumentUploadSelecting(selecting) {
  if (!els.documentUpload) return;
  const composer = els.documentUpload.closest(".unifiedComposer");
  if (composer) composer.dataset.uploadSelecting = selecting ? "true" : "false";
  if (els.documentUpload.disabled && selecting) return;
  if (selecting) {
    els.documentUpload.dataset.mode = "selecting";
    els.documentUpload.setAttribute("aria-pressed", "true");
    setDocumentUploadStatus(
      `${textFor("document.selectingPdf", "选择文件")} · ${textFor("document.selectingPdfHint", "正在打开文件选择器。")}`,
      "info",
      true
    );
  } else {
    els.documentUpload.dataset.mode = "idle";
    els.documentUpload.setAttribute("aria-pressed", "false");
    if (!composer || composer.dataset.documentBusy !== "true") setDocumentUploadStatus("", "info", false);
  }
}

function documentStatusLabel(status) {
  if (!status) return "";
  if (status === "parsed") return currentLanguage === "en" ? "Ready" : "已就绪";
  return currentLanguage === "en" ? `Status: ${status}` : `状态：${status}`;
}

function documentParserLabel(parser) {
  if (!parser) return "";
  return currentLanguage === "en" ? `Parser: ${parser}` : `解析器：${parser}`;
}

function documentPageCountLabel(count) {
  const value = Number(count);
  if (!Number.isFinite(value) || value <= 0) return "";
  if (currentLanguage === "en") return `${value} ${value === 1 ? "page" : "pages"}`;
  return `${value} 页`;
}

function documentTypeBadge(doc) {
  const filename = String(doc && doc.filename || "").toLowerCase();
  const extension = filename.includes(".") ? filename.split(".").pop() : "";
  if (["docm", "xlsm", "pptm"].includes(extension)) return extension.toUpperCase();
  const kind = String(doc && doc.document_type || "").toUpperCase();
  const labels = {
    TEXT: "TXT",
    MARKDOWN: "MD",
    PDF: "PDF",
    CSV: "CSV",
    TSV: "TSV",
    JSON: "JSON",
    HTML: "HTML",
    XML: "XML",
    RTF: "RTF",
    DOC: "DOC",
    XLS: "XLS",
    PPT: "PPT",
    DOCX: "DOCX",
    XLSX: "XLSX",
    PPTX: "PPTX",
    ODT: "ODT",
    ODS: "ODS",
    ODP: "ODP",
    EML: "EML",
    IMAGE: "IMG"
  };
  return labels[kind] || (kind ? kind.slice(0, 5) : "FILE");
}

function documentUnitCountLabel(doc) {
  const rawValue = Number(doc && doc.page_count);
  if (!Number.isFinite(rawValue) || rawValue <= 0) return "";
  const filename = String(doc && doc.filename || "").toLowerCase();
  const extension = filename.includes(".") ? filename.split(".").pop() : "";
  const value = ["docm", "xlsm", "pptm"].includes(extension)
    ? Math.max(1, rawValue - 1)
    : rawValue;
  const kind = String(doc && doc.document_type || "").toLowerCase();
  if (["xls", "xlsx", "ods"].includes(kind)) return currentLanguage === "en" ? `${value} ${value === 1 ? "sheet" : "sheets"}` : `${value} 个工作表`;
  if (["ppt", "pptx", "odp"].includes(kind)) return currentLanguage === "en" ? `${value} ${value === 1 ? "slide" : "slides"}` : `${value} 张幻灯片`;
  if (kind === "image") return currentLanguage === "en" ? `${value} ${value === 1 ? "image" : "images"}` : `${value} 张图片`;
  if (["text", "markdown", "json", "html", "xml", "rtf", "doc", "docx", "odt", "eml", "csv", "tsv"].includes(kind)) {
    return currentLanguage === "en" ? `${value} ${value === 1 ? "part" : "parts"}` : `${value} 个内容单元`;
  }
  return documentPageCountLabel(value);
}

function documentCharCountLabel(count) {
  const value = Number(count);
  if (!Number.isFinite(value)) return "";
  if (currentLanguage === "en") return `${value} chars`;
  return `${value} 字符`;
}

function normalizeDocumentSummaryData(doc) {
  if (!doc) return null;
  const attachments = Array.isArray(doc.attachments)
    ? doc.attachments
      .filter((item) => item && typeof item === "object")
      .map((item) => ({
        index: Number.isFinite(Number(item.index)) ? Number(item.index) : null,
        filename: String(item.filename || "").trim(),
        status: String(item.status || "").trim().toLowerCase(),
        error_code: String(item.error_code || "").trim(),
        document_type: String(item.document_type || "").trim().toLowerCase(),
        page_count: Number.isFinite(Number(item.page_count)) ? Number(item.page_count) : null,
        slide_numbers: Array.isArray(item.slide_numbers)
          ? item.slide_numbers.map((value) => Number(value)).filter(Number.isFinite)
          : []
      }))
    : [];
  const attachmentCount = Number.isFinite(Number(doc.attachment_count))
    ? Math.max(0, Number(doc.attachment_count))
    : attachments.length;
  const inferredReadyCount = attachments.filter((item) => (
    !["failed", "rejected"].includes(item.status) && !item.error_code
  )).length;
  const attachmentReadyCount = Number.isFinite(Number(doc.attachment_ready_count))
    ? Math.max(0, Math.min(attachmentCount, Number(doc.attachment_ready_count)))
    : Math.min(attachmentCount, inferredReadyCount);
  return {
    id: doc.id || currentDocumentId || "",
    filename: doc.filename || currentDocumentName || "File",
    document_type: doc.document_type || "",
    media_type: doc.media_type || "",
    status: doc.status || "parsed",
    parser: doc.parser || "",
    page_count: Number.isFinite(Number(doc.page_count)) ? Number(doc.page_count) : null,
    char_count: Number.isFinite(Number(doc.char_count)) ? Number(doc.char_count) : null,
    attachment_count: attachmentCount,
    attachment_ready_count: attachmentReadyCount,
    attachments
  };
}

function rememberDocumentSummaryData(doc) {
  currentDocumentSummaryData = normalizeDocumentSummaryData(doc);
  if (currentDocumentSummaryData) {
    currentDocumentName = currentDocumentSummaryData.filename || currentDocumentName;
    currentDocumentSummary = documentSummaryLine(currentDocumentSummaryData);
  }
  return currentDocumentStatusLine();
}

function currentDocumentStatusLine() {
  if (currentDocumentSummaryData) {
    currentDocumentSummary = documentSummaryLine(currentDocumentSummaryData);
    return documentContextSummaryLine(currentDocumentSummaryData);
  }
  return currentDocumentSummary || currentDocumentName || "";
}

function currentDocumentStatusTitleLine() {
  if (currentDocumentSummaryData) {
    return documentSummaryLine(currentDocumentSummaryData, { includeParser: false, includeCharCount: false });
  }
  return currentDocumentSummary || currentDocumentName || "";
}

function documentSummaryLine(doc, options = {}) {
  if (!doc) return "";
  const includeFilename = options.includeFilename !== false;
  const includeParser = options.includeParser !== false;
  const includeCharCount = options.includeCharCount !== false;
  const parts = [
    includeFilename ? doc.filename || currentDocumentName || (currentLanguage === "en" ? "File" : "文件") : "",
    documentStatusLabel(doc.status),
    includeParser ? documentParserLabel(doc.parser) : "",
    documentUnitCountLabel(doc),
    includeCharCount ? documentCharCountLabel(doc.char_count) : ""
  ].filter(Boolean);
  return parts.join(" · ");
}

function documentContextSummaryLine(doc) {
  if (!doc) return "";
  const parts = [
    doc.filename || currentDocumentName || (currentLanguage === "en" ? "File" : "文件"),
    documentStatusLabel(doc.status)
  ].filter(Boolean);
  return parts.join(" · ");
}

function documentReadableSummaryLine(doc) {
  if (!doc) return "";
  const sizeParts = [
    documentUnitCountLabel(doc)
  ].filter(Boolean);
  const status = doc.status ? documentStatusLabel(doc.status) : documentStatusLabel("parsed");
  return sizeParts.length ? `${status} · ${sizeParts.join(" · ")}` : status;
}

function documentLabeledValue(key, fallback, value) {
  return `${textFor(key, fallback)}${value}`;
}

function documentAcceptedLine(docOrName) {
  const name = typeof docOrName === "string"
    ? docOrName
    : ((docOrName && docOrName.filename) || currentDocumentName || (currentLanguage === "en" ? "File" : "文件"));
  const line = documentLabeledValue("document.accepted", currentLanguage === "en" ? "I’ve read " : "我读完了：", name);
  return currentLanguage === "en" ? `${line}.` : `${line}。`;
}

function documentFileReadyLine() {
  return textFor("document.fileReady", currentLanguage === "en" ? "File read" : "文件已读");
}

function supportedDocumentFile(file) {
  if (!file || !file.name) return false;
  const extension = String(file.name).toLowerCase().split(".").pop();
  return SUPPORTED_DOCUMENT_EXTENSIONS.has(extension);
}

function documentUploadError(payload, status) {
  const detail = payload && payload.detail;
  const code = typeof detail === "string" ? detail : (detail && detail.error) || payload.error || "";
  if (code === "unsupported_document_type") return currentLanguage === "en" ? "Unsupported file type" : "暂不支持这种文件";
  if (code === "file_type_mismatch") return currentLanguage === "en" ? "The file content does not match its extension" : "文件内容与扩展名不一致";
  if (code === "file_too_large") return currentLanguage === "en" ? "The file is too large" : "文件过大";
  if (code === "empty_upload") return currentLanguage === "en" ? "The file is empty" : "文件为空";
  if (code === "invalid_image") return currentLanguage === "en" ? "The image is damaged or unreadable" : "图片损坏或无法读取";
  if (code === "image_pixel_limit_exceeded") return currentLanguage === "en" ? "The image dimensions are too large" : "图片尺寸过大";
  return code || `upload_failed_${status}`;
}

const DOCUMENT_INTERNAL_WARNING_PREFIXES = [
  "pymupdf4llm_low_coverage:",
  "pymupdf4llm_text_corruption:",
  "pymupdf4llm_failed:",
  "mineru_failed:",
  "mineru_exit_"
];

const DOCUMENT_WARNING_TRANSLATIONS = new Map([
  [
    "VBA macros detected. Iris indexed a read-only inventory and did not execute any code.",
    "检测到 VBA 宏。Iris 只建立了只读清单，没有执行任何代码。"
  ],
  [
    "A macro-enabled Office container was detected, but no VBA project was present. No code was executed.",
    "这是支持宏的 Office 文件，但没有发现 VBA 工程，也没有执行任何代码。"
  ],
  [
    "ActiveX package parts were detected and were not executed.",
    "检测到 ActiveX 组件。Iris 只记录了组件清单，没有执行它们。"
  ],
  [
    "At least one VBA project could not be fully inspected; its hash and safety status remain available.",
    "至少一个 VBA 工程未能完整检查；Iris 仍保留了文件指纹和安全状态。"
  ],
  [
    "The local BM25 retrieval index is unavailable; document questions will use deterministic fallback retrieval.",
    "本地检索索引暂不可用；文件问答会使用确定性备用检索。"
  ]
]);

const DOCUMENT_ATTACHMENT_ERROR_LABELS = {
  unsupported_embedded_document_type: {
    zh: "不支持这种嵌入文件类型",
    en: "unsupported embedded file type"
  },
  unsupported_document_type: {
    zh: "暂不支持这种文件类型",
    en: "unsupported file type"
  },
  attachment_depth_limit: {
    zh: "超过安全嵌套层级",
    en: "safe nesting depth exceeded"
  },
  attachment_count_limit: {
    zh: "超过附件数量上限",
    en: "attachment count limit exceeded"
  },
  attachment_total_bytes_limit: {
    zh: "附件总大小超过上限",
    en: "combined attachment size limit exceeded"
  },
  file_too_large: {
    zh: "附件过大",
    en: "attachment too large"
  },
  file_type_mismatch: {
    zh: "文件内容与扩展名不一致",
    en: "file content does not match its extension"
  },
  empty_attachment: {
    zh: "附件为空",
    en: "empty attachment"
  }
};

function documentAttachmentErrorLabel(code) {
  const normalized = String(code || "").trim();
  const known = DOCUMENT_ATTACHMENT_ERROR_LABELS[normalized];
  if (known) return currentLanguage === "en" ? known.en : known.zh;
  return currentLanguage === "en" ? "could not be read safely" : "未能安全读取";
}

function documentHasAttachmentCoverageGap(doc) {
  const total = Math.max(0, Number(doc && doc.attachment_count || 0));
  const ready = Math.max(0, Number(doc && doc.attachment_ready_count || 0));
  return total > 0 && ready < total;
}

function documentAttachmentLocationLabel(item) {
  const slides = Array.isArray(item && item.slide_numbers) ? item.slide_numbers : [];
  if (!slides.length) return "";
  const values = slides.slice(0, 3).join("、");
  if (currentLanguage === "en") return `${slides.length === 1 ? "slide" : "slides"} ${values}`;
  return `第 ${values} 张幻灯片`;
}

function documentAttachmentSummaryLines(doc) {
  const total = Math.max(0, Number(doc && doc.attachment_count || 0));
  if (!total) return [];
  const ready = Math.max(0, Math.min(total, Number(doc && doc.attachment_ready_count || 0)));
  const attachments = Array.isArray(doc && doc.attachments) ? doc.attachments : [];
  const partial = ready < total;
  const lines = [
    currentLanguage === "en" ? "Attachments" : "附件",
    partial
      ? (
        currentLanguage === "en"
          ? `The main file is available. ${ready}/${total} attachments were read; ${total - ready} will not be used in answers.`
          : `主体内容可以使用。${total} 个附件中已读取 ${ready} 个；其余 ${total - ready} 个不会进入回答。`
      )
      : (
        currentLanguage === "en"
          ? `${ready}/${total} attachments were read.`
          : `${ready}/${total} 个附件已全部读取。`
      )
  ];
  attachments.slice(0, 6).forEach((item, index) => {
    const filename = String(item.filename || "").trim() || (
      currentLanguage === "en" ? `Attachment ${index + 1}` : `附件 ${index + 1}`
    );
    const failed = ["failed", "rejected"].includes(String(item.status || "")) || Boolean(item.error_code);
    const state = failed
      ? (
        currentLanguage === "en"
          ? `not read: ${documentAttachmentErrorLabel(item.error_code)}`
          : `未读取：${documentAttachmentErrorLabel(item.error_code)}`
      )
      : (currentLanguage === "en" ? "read" : "已读取");
    const location = documentAttachmentLocationLabel(item);
    lines.push(`- ${[filename, location, state].filter(Boolean).join(" · ")}`);
  });
  if (attachments.length > 6) {
    lines.push(
      currentLanguage === "en"
        ? `- ${attachments.length - 6} more attachments are included in the file record.`
        : `- 另有 ${attachments.length - 6} 个附件已记录在文件清单中。`
    );
  }
  return lines;
}

function documentUserWarning(warning) {
  if (currentLanguage === "en") return warning;
  return DOCUMENT_WARNING_TRANSLATIONS.get(warning) || warning;
}

function documentUserWarnings(warnings, doc = null) {
  if (!Array.isArray(warnings)) return [];
  const attachmentSummaryCoversWarning = Number(doc && doc.attachment_count || 0) > 0;
  return warnings
    .map((warning) => String(warning || "").trim())
    .filter(Boolean)
    .filter((warning) => !DOCUMENT_INTERNAL_WARNING_PREFIXES.some((prefix) => warning.startsWith(prefix)))
    .filter((warning) => !(
      attachmentSummaryCoversWarning
      && (
        /attachment\(s\) could not be indexed/i.test(warning)
        || /embedded document\(s\) could not be indexed/i.test(warning)
      )
    ))
    .map(documentUserWarning);
}

function logDocumentDiagnostics(warnings) {
  if (!Array.isArray(warnings)) return;
  warnings
    .map((warning) => String(warning || "").trim())
    .filter(Boolean)
    .forEach((warning) => logLine(`document parser diagnostic ${warning}`));
}

function documentReadyAnswerText(doc, warnings = currentDocumentWarnings) {
  if (!doc) return "";
  const visibleWarnings = documentUserWarnings(warnings, doc);
  return [
    documentAcceptedLine(doc),
    documentReadableSummaryLine(doc),
    ...documentAttachmentSummaryLines(doc),
    visibleWarnings.length ? visibleWarnings.join("\n") : ""
  ].filter(Boolean).join("\n");
}

function newDocumentUploadId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return `upload_${window.crypto.randomUUID().replace(/-/g, "")}`;
  }
  return `upload_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 14)}`;
}

const DOCUMENT_UPLOAD_PENDING_KEY = "iris_pending_document_upload_v1";
const DOCUMENT_UPLOAD_PENDING_MAX_AGE_MS = 24 * 60 * 60 * 1000;

function documentUploadDescriptor(file, uploadId, uploadMessageId = "") {
  return {
    upload_id: String(uploadId || ""),
    filename: String(file && file.name || ""),
    size_bytes: Number(file && file.size || 0),
    client_id: voiceClientId(),
    message_id: String(uploadMessageId || ""),
    job_id: "",
    document_id: "",
    created_at_ms: Date.now(),
    attempts: 0
  };
}

function rememberPendingDocumentUpload(pending) {
  if (!pending || !pending.upload_id || !pending.filename) return false;
  return safeSessionSet(DOCUMENT_UPLOAD_PENDING_KEY, JSON.stringify(pending));
}

function readPendingDocumentUpload() {
  const raw = safeSessionGet(DOCUMENT_UPLOAD_PENDING_KEY, "");
  if (!raw) return null;
  try {
    const pending = JSON.parse(raw);
    const createdAt = Number(pending && pending.created_at_ms || 0);
    if (!pending || !pending.upload_id || !pending.filename || pending.client_id !== voiceClientId()) {
      safeSessionRemove(DOCUMENT_UPLOAD_PENDING_KEY);
      return null;
    }
    if (!createdAt || Date.now() - createdAt > DOCUMENT_UPLOAD_PENDING_MAX_AGE_MS) {
      safeSessionRemove(DOCUMENT_UPLOAD_PENDING_KEY);
      return null;
    }
    return pending;
  } catch {
    safeSessionRemove(DOCUMENT_UPLOAD_PENDING_KEY);
    return null;
  }
}

function clearPendingDocumentUpload(uploadId = "") {
  const pending = readPendingDocumentUpload();
  if (uploadId && pending && pending.upload_id !== uploadId) return;
  safeSessionRemove(DOCUMENT_UPLOAD_PENDING_KEY);
}

function documentMatchesUpload(documentItem, file, uploadId) {
  if (!documentItem || String(documentItem.upload_id || "") !== uploadId) return false;
  const expectedSize = Number(file && (file.size ?? file.size_bytes));
  const storedSize = Number(documentItem.size_bytes);
  if (Number.isFinite(expectedSize) && Number.isFinite(storedSize) && expectedSize !== storedSize) return false;
  return documentPayloadIsTerminal(documentItem);
}

async function reconcileDocumentUploadWithDelays(file, uploadId, delays) {
  for (const delay of delays) {
    if (delay) await new Promise((resolve) => window.setTimeout(resolve, delay));
    try {
      const url = documentApiUrl("/client/v1/documents", { limit: 10, client_id: voiceClientId() });
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-Jarvis-Client-Id": voiceClientId(),
          ...authHeaders()
        }
      });
      if (!response.ok) {
        handleUnauthorizedResponse(response);
        continue;
      }
      const payload = await response.json().catch(() => ({}));
      const recovered = Array.isArray(payload.documents)
        ? payload.documents.find((item) => documentMatchesUpload(item, file, uploadId))
        : null;
      if (recovered) return recovered;
    } catch (error) {
      logLine(`document upload reconciliation retry ${error && error.message || "failed"}`);
    }
  }
  return null;
}

async function reconcileDocumentUpload(file, uploadId) {
  return reconcileDocumentUploadWithDelays(file, uploadId, [0, 320, 900]);
}

async function inspectDocumentUploadReceipt(pending) {
  try {
    const url = documentApiUrl("/client/v1/documents/upload-status", {
      upload_id: pending.upload_id,
      client_id: voiceClientId()
    });
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Jarvis-Client-Id": voiceClientId(),
        ...authHeaders()
      },
      cache: "no-store"
    });
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      return { status: "unknown" };
    }
    return await response.json().catch(() => ({ status: "unknown" }));
  } catch (error) {
    logLine(`document upload receipt retry ${error && error.message || "failed"}`);
    return { status: "unknown" };
  }
}

function showPendingDocumentUpload(pending, longWait = false) {
  const message = textFor(
    longWait ? "document.uploadVerifyLater" : "document.uploadVerifying",
    longWait
      ? "暂时无法确认上传结果。网络恢复后会自动继续检查。"
      : "连接中断，正在确认文件是否已经上传..."
  );
  currentDocumentAnswerMode = "warning";
  setDocumentContextVisible(true);
  setDocumentStatus(message, "warning");
  setDocumentAnswer(message);
  const updated = pending && pending.message_id
    ? updateConversationMessage(pending.message_id, message, { label: "Iris", role: "assistant", kind: "document_pending" })
    : false;
  if (!updated && !longWait) {
    pending.message_id = appendAssistantConversation(message, { kind: "document_pending" });
    rememberPendingDocumentUpload(pending);
  }
}

function showIncompleteDocumentUpload(pending) {
  const message = textFor("document.uploadIncomplete", "文件没有上传完整，请重新选择后再试。");
  currentDocumentId = "";
  currentDocumentSummary = "";
  currentDocumentSummaryData = null;
  currentDocumentWarnings = [];
  currentDocumentAnswerMode = "error";
  currentDocumentReadyFileMessageId = "";
  currentDocumentReadyAssistantMessageId = "";
  setDocumentContextVisible(true);
  setDocumentStatus(message, "error");
  setDocumentAnswer(message);
  const updated = pending && pending.message_id
    ? updateConversationMessage(pending.message_id, message, { label: "Iris", role: "assistant", kind: "document_error" })
    : false;
  if (!updated) appendAssistantConversation(message, { kind: "document_error" });
}

function showDocumentJob(pending, job) {
  if (!pending || !job) return;
  pending.job_id = String(job.job_id || pending.job_id || "");
  pending.document_id = String(job.document_id || pending.document_id || "");
  pending.attempts = 0;
  rememberPendingDocumentUpload(pending);
  setDocumentJobControls(job);
  setDocumentContextVisible(true);
  const line = documentJobStatusLine(job, pending);
  const status = String(job.status || "");
  const tone = DOCUMENT_JOB_ACTIVE_STATUSES.has(status)
    ? "loading"
    : status === "failed"
      ? "error"
      : status === "cancelled"
        ? "warning"
        : "ready";
  currentDocumentAnswerMode = DOCUMENT_JOB_ACTIVE_STATUSES.has(status) ? "loading" : tone;
  setDocumentStatus(line, tone);
  setDocumentAnswer(line);
  if (pending.message_id) {
    updateConversationMessage(pending.message_id, line, {
      label: textFor("role.file", "文件"),
      role: "file",
      kind: DOCUMENT_JOB_ACTIVE_STATUSES.has(status) ? "document_pending" : "document_error"
    });
  }
  setDocumentBusy(false);
}

function schedulePendingDocumentUploadReconciliation(delay = 1200) {
  if (documentUploadReconcileTimer) window.clearTimeout(documentUploadReconcileTimer);
  documentUploadReconcileTimer = window.setTimeout(() => {
    documentUploadReconcileTimer = 0;
    resumePendingDocumentUploadReconciliation().catch((error) => {
      logLine(`document upload background reconciliation failed ${error && error.message || "failed"}`);
    });
  }, Math.max(0, Number(delay) || 0));
}

async function resumePendingDocumentUploadReconciliation() {
  const pending = readPendingDocumentUpload();
  if (!pending || documentUploadReconcileRunning) return null;
  if (!canUseBackendNow() || (typeof navigator !== "undefined" && navigator.onLine === false)) {
    schedulePendingDocumentUploadReconciliation(5000);
    return null;
  }
  documentUploadReconcileRunning = true;
  try {
    const receipt = await inspectDocumentUploadReceipt(pending);
    const committedDocument = receipt.status === "committed" ? terminalDocumentFromReceipt(receipt) : null;
    if (committedDocument) {
      clearPendingDocumentUpload(pending.upload_id);
      acceptUploadedDocument(committedDocument, pending.message_id || "", true);
      return committedDocument;
    }
    if (receipt.status === "committed" && receipt.document) {
      showPendingDocumentUpload(pending);
      schedulePendingDocumentUploadReconciliation(700);
      return receipt.document;
    }
    if (receipt.status === "processing" && receipt.job) {
      showDocumentJob(pending, receipt.job);
      schedulePendingDocumentUploadReconciliation(700);
      return receipt.job;
    }
    if (["failed", "cancelled"].includes(receipt.status) && receipt.job) {
      showDocumentJob(pending, receipt.job);
      logLine(`document job ${receipt.status} ${receipt.job.job_id || ""}`.trim());
      return receipt;
    }
    if (receipt.status === "failed") {
      clearPendingDocumentUpload(pending.upload_id);
      showIncompleteDocumentUpload(pending);
      logLine(`document upload confirmed incomplete ${receipt.debug_ref || ""}`.trim());
      return receipt;
    }
    const recovered = await reconcileDocumentUploadWithDelays(pending, pending.upload_id, [0, 800, 2200]);
    if (recovered) {
      clearPendingDocumentUpload(pending.upload_id);
      acceptUploadedDocument(recovered, pending.message_id || "", true);
      return recovered;
    }
    pending.attempts = Number(pending.attempts || 0) + 1;
    rememberPendingDocumentUpload(pending);
    showPendingDocumentUpload(pending, pending.attempts >= 3);
    schedulePendingDocumentUploadReconciliation(pending.attempts >= 3 ? 15000 : 5000);
    return null;
  } finally {
    documentUploadReconcileRunning = false;
  }
}

function refreshCurrentProjectFilesAfterUpload() {
  const projectId = String(currentProjectFilterId || "").trim();
  if (!projectId) return;
  projectLibraryLoaded = false;
  void Promise.allSettled([
    refreshProjectLibrary({ force: true }),
    refreshProjectDocuments(projectId, { force: true })
  ]);
}

function acceptUploadedDocument(payload, uploadMessageId, recovered = false) {
  clearPendingDocumentUpload(String(payload && payload.upload_id || ""));
  currentDocumentId = payload.id || "";
  setDocumentJobControls({
    status: String(payload.status || "ready") === "partial" ? "partial" : "ready",
    document_id: currentDocumentId,
    unit_parse: payload.unit_parse || null
  });
  const summaryLine = rememberDocumentSummaryData(payload);
  const attachmentCoverageGap = documentHasAttachmentCoverageGap(currentDocumentSummaryData || payload);
  setDocumentStatus(
    summaryLine,
    currentDocumentId ? (attachmentCoverageGap ? "warning" : "ready") : "warning"
  );
  currentDocumentWarnings = Array.isArray(payload.warnings) ? payload.warnings.filter(Boolean) : [];
  logDocumentDiagnostics(currentDocumentWarnings);
  const accepted = currentDocumentId
    ? documentReadyAnswerText(currentDocumentSummaryData || payload)
    : textFor("document.uploadMissingId", "上传完成，但没有拿到文档 ID。");
  currentDocumentAnswerMode = currentDocumentId ? "ready" : "warning";
  setDocumentAnswer(accepted);
  currentDocumentReadyFileMessageId = uploadMessageId;
  const readyKind = attachmentCoverageGap ? "document_partial" : "document_ready";
  updateConversationMessage(uploadMessageId, documentFileReadyLine(), { label: textFor("role.file", "文件"), role: "file", kind: readyKind });
  currentDocumentReadyAssistantMessageId = appendAssistantConversation(accepted, { kind: readyKind });
  setDocumentBusy(false);
  setDocumentContextVisible(false);
  refreshCurrentProjectFilesAfterUpload();
  if (recovered) logLine(`document upload response reconciled ${currentDocumentId}`);
}

function refreshDocumentReadyPresentation() {
  if (!currentDocumentId || currentDocumentAnswerMode !== "ready" || !currentDocumentSummaryData) return;
  const answer = documentReadyAnswerText(currentDocumentSummaryData);
  const fileReady = documentFileReadyLine();
  const attachmentCoverageGap = documentHasAttachmentCoverageGap(currentDocumentSummaryData);
  const readyKind = attachmentCoverageGap ? "document_partial" : "document_ready";
  setDocumentStatus(currentDocumentStatusLine(), attachmentCoverageGap ? "warning" : "ready");
  setDocumentAnswer(answer);
  if (currentDocumentReadyFileMessageId) {
    updateConversationMessage(currentDocumentReadyFileMessageId, fileReady, {
      label: textFor("role.file", "文件"),
      role: "file",
      kind: readyKind
    });
  }
  if (currentDocumentReadyAssistantMessageId) {
    updateConversationMessage(currentDocumentReadyAssistantMessageId, answer, {
      label: "Iris",
      role: "assistant",
      kind: readyKind
    });
  }
}

function documentBatchItemTerminal(item) {
  return ["ready", "partial", "failed", "cancelled"].includes(String(item && item.status || ""));
}

function documentBatchStatusLine(batch) {
  const items = Array.isArray(batch && batch.items) ? batch.items : [];
  const total = items.length;
  const succeeded = items.filter((item) => ["ready", "partial"].includes(String(item.status || ""))).length;
  const failed = items.filter((item) => ["failed", "cancelled"].includes(String(item.status || ""))).length;
  const completed = succeeded + failed;
  const progress = total
    ? Math.round(items.reduce((sum, item) => sum + Math.max(0, Math.min(100, Number(item.progress || 0))), 0) / total)
    : 0;
  if (completed >= total && total) {
    return currentLanguage === "en"
      ? `${total} files complete · ${succeeded} ready${failed ? ` · ${failed} failed` : ""}`
      : `${total} 份文件处理完成 · ${succeeded} 份就绪${failed ? ` · ${failed} 份失败` : ""}`;
  }
  return currentLanguage === "en"
    ? `Processing ${total} files · ${completed}/${total} complete · ${progress}%`
    : `正在并行处理 ${total} 份文件 · ${completed}/${total} 已完成 · ${progress}%`;
}

function updateDocumentBatchItemMessage(item) {
  if (!item || !item.message_id) return;
  const line = [
    item.filename,
    documentJobStageLabel(item.status),
    `${Math.max(0, Math.min(100, Math.round(Number(item.progress || 0))))}%`
  ].filter(Boolean).join(" · ");
  updateConversationMessage(item.message_id, line, {
    label: textFor("role.file", "文件"),
    role: "file",
    kind: documentBatchItemTerminal(item)
      ? ["ready", "partial"].includes(String(item.status || "")) ? "document_ready" : "document_error"
      : "document_pending"
  });
}

function updateDocumentBatchPresentation(batch) {
  if (!batch || activeDocumentBatch !== batch) return;
  const line = documentBatchStatusLine(batch);
  const terminal = batch.items.every(documentBatchItemTerminal);
  const failed = batch.items.filter((item) => ["failed", "cancelled"].includes(String(item.status || ""))).length;
  setDocumentContextVisible(true);
  setDocumentStatus(line, terminal ? failed === batch.items.length ? "error" : failed ? "warning" : "ready" : "loading");
  setDocumentAnswer(line);
  batch.items.forEach(updateDocumentBatchItemMessage);
}

function scheduleDocumentBatchPoll(batch, delay = DOCUMENT_BATCH_POLL_INTERVAL_MS) {
  if (documentBatchPollTimer) window.clearTimeout(documentBatchPollTimer);
  documentBatchPollTimer = window.setTimeout(() => {
    documentBatchPollTimer = 0;
    pollDocumentBatch(batch).catch((error) => {
      logLine(`document batch poll failed ${error && error.message || "unknown"}`);
      scheduleDocumentBatchPoll(batch, 1800);
    });
  }, Math.max(100, Number(delay) || DOCUMENT_BATCH_POLL_INTERVAL_MS));
}

async function inspectDocumentBatchItem(item) {
  const path = item.job_id
    ? `/client/v1/documents/jobs/${encodeURIComponent(item.job_id)}`
    : "/client/v1/documents/upload-status";
  const url = documentApiUrl(path, item.job_id
    ? { client_id: voiceClientId() }
    : { upload_id: item.upload_id, client_id: voiceClientId() });
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Jarvis-Client-Id": voiceClientId(),
      ...authHeaders()
    },
    cache: "no-store"
  });
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    throw new Error(`document_batch_status_${response.status}`);
  }
  const payload = await response.json().catch(() => ({}));
  const job = payload.job && typeof payload.job === "object" ? payload.job : null;
  if (job) {
    item.job_id = String(job.job_id || item.job_id || "");
    item.document_id = String(job.document_id || item.document_id || "");
    item.status = String(job.status || item.status || "received");
    item.progress = Number(job.progress || item.progress || 0);
  } else if (payload.status === "committed" && payload.document) {
    item.status = String(payload.document.status || "ready") === "partial" ? "partial" : "ready";
    item.progress = 100;
  } else if (["failed", "cancelled"].includes(String(payload.status || ""))) {
    item.status = String(payload.status);
    item.progress = 100;
    item.error = String(payload.error || item.status);
  }
  if (payload.document && typeof payload.document === "object") item.document = payload.document;
}

function finishDocumentBatch(batch) {
  if (!batch || activeDocumentBatch !== batch) return;
  const readyItems = batch.items.filter((item) => ["ready", "partial"].includes(String(item.status || "")));
  const failedItems = batch.items.filter((item) => ["failed", "cancelled"].includes(String(item.status || "")));
  const latest = [...readyItems].reverse().find((item) => item.document && item.document.id);
  if (latest) {
    currentDocumentId = String(latest.document.id || latest.document_id || "");
    currentDocumentName = String(latest.document.filename || latest.filename || "");
    currentDocumentWarnings = Array.isArray(latest.document.warnings) ? latest.document.warnings.filter(Boolean) : [];
    rememberDocumentSummaryData(latest.document);
    setDocumentJobControls({
      status: String(latest.document.status || "ready") === "partial" ? "partial" : "ready",
      document_id: currentDocumentId,
      unit_parse: latest.document.unit_parse || null
    });
  } else {
    currentDocumentId = "";
    setDocumentJobControls(null);
  }
  const result = documentBatchStatusLine(batch);
  currentDocumentAnswerMode = readyItems.length ? "ready" : "error";
  setDocumentAnswer(result);
  appendAssistantConversation(
    currentLanguage === "en"
      ? `${result}. The ready files are now available in this conversation's short-term memory.`
      : `${result}。已就绪文件已经进入这段会话的短期记忆。`,
    { kind: readyItems.length ? "document_ready" : "document_error" }
  );
  if (failedItems.length) {
    logLine(`document batch completed with ${failedItems.length} failed item(s)`);
  }
  documentUploadInFlight = false;
  activeDocumentBatch = null;
  setDocumentContextVisible(false);
  setDocumentBusy(false);
  if (readyItems.length) refreshCurrentProjectFilesAfterUpload();
}

async function pollDocumentBatch(batch) {
  if (!batch || activeDocumentBatch !== batch) return;
  const pending = batch.items.filter((item) => !documentBatchItemTerminal(item) && (item.job_id || item.upload_id));
  await Promise.allSettled(pending.map((item) => inspectDocumentBatchItem(item)));
  updateDocumentBatchPresentation(batch);
  if (batch.items.every(documentBatchItemTerminal)) {
    finishDocumentBatch(batch);
    return;
  }
  scheduleDocumentBatchPoll(batch);
}

async function uploadDocumentBatchItem(item) {
  const url = documentApiUrl("/client/v1/documents/upload", {
    async: "true",
    filename: item.file.name,
    client_id: voiceClientId(),
    conversation_id: currentConversationId || "",
    upload_id: item.upload_id
  });
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": item.file.type || "application/octet-stream",
        "X-Jarvis-Client-Id": voiceClientId(),
        ...authHeaders()
      },
      body: item.file
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      const error = new Error(documentUploadError(payload, response.status));
      error.uploadHttpStatus = response.status;
      throw error;
    }
    if (response.status === 202 && payload.job) {
      item.job_id = String(payload.job_id || payload.job.job_id || "");
      item.document_id = String(payload.document_id || payload.job.document_id || "");
      item.status = String(payload.job.status || "received");
      item.progress = Number(payload.job.progress || 5);
      return;
    }
    item.document = payload;
    item.document_id = String(payload.id || "");
    item.status = String(payload.status || "ready") === "partial" ? "partial" : "ready";
    item.progress = 100;
  } catch (error) {
    if (!error || !error.uploadHttpStatus) {
      item.status = "verifying";
      item.progress = Math.max(1, Number(item.progress || 0));
      item.error = String(error && error.message || "network_error");
      return;
    }
    item.status = "failed";
    item.progress = 100;
    item.error = String(error.message || "upload_failed");
  }
}

async function uploadDocumentBatch(files) {
  const selected = Array.from(files || []).slice(0, DOCUMENT_UPLOAD_MAX_FILES);
  const batch = {
    id: `batch_${Date.now().toString(36)}`,
    items: selected.map((file) => ({
      file,
      filename: file.name,
      upload_id: newDocumentUploadId(),
      job_id: "",
      document_id: "",
      status: "uploading",
      progress: 0,
      error: "",
      document: null,
      message_id: appendConversationMessage(
        "file",
        documentLabeledValue("document.receiving", "正在接收：", file.name),
        { kind: "uploading" }
      )
    }))
  };
  activeDocumentBatch = batch;
  documentUploadInFlight = true;
  currentDocumentId = "";
  setDocumentJobControls(null);
  setDocumentContextVisible(true);
  setDocumentBusy(true);
  updateDocumentBatchPresentation(batch);

  let cursor = 0;
  const workers = Array.from(
    { length: Math.min(DOCUMENT_UPLOAD_CONCURRENCY, batch.items.length) },
    async () => {
      while (cursor < batch.items.length) {
        const item = batch.items[cursor];
        cursor += 1;
        await uploadDocumentBatchItem(item);
        updateDocumentBatchPresentation(batch);
      }
    }
  );
  await Promise.all(workers);
  if (batch.items.every(documentBatchItemTerminal)) finishDocumentBatch(batch);
  else scheduleDocumentBatchPoll(batch, 250);
}

async function uploadCurrentDocument() {
  if (!canUseBackendNow()) {
    showAccessGate(textFor("access.required", "请先输入访问口令。"), "warning", "access.required");
    return;
  }
  if (documentUploadInFlight) {
    logLine("document upload ignored while another upload is in flight");
    if (els.documentPdf) els.documentPdf.value = "";
    return;
  }
  if (!els.documentPdf || !els.documentPdf.files || !els.documentPdf.files.length) {
    if (els.documentPdf) els.documentPdf.click();
    return;
  }
  const selectedFiles = Array.from(els.documentPdf.files || []);
  if (selectedFiles.length > DOCUMENT_UPLOAD_MAX_FILES) {
    setDocumentContextVisible(true);
    setDocumentStatus(
      currentLanguage === "en"
        ? `Choose no more than ${DOCUMENT_UPLOAD_MAX_FILES} files at once.`
        : `一次最多选择 ${DOCUMENT_UPLOAD_MAX_FILES} 份文件。`,
      "warning"
    );
    els.documentPdf.value = "";
    return;
  }
  const unsupported = selectedFiles.find((item) => !supportedDocumentFile(item));
  if (unsupported) {
    setDocumentContextVisible(true);
    setDocumentStatus(
      currentLanguage === "en" ? `Unsupported file: ${unsupported.name}` : `暂不支持这种文件：${unsupported.name}`,
      "warning"
    );
    els.documentPdf.value = "";
    return;
  }
  if (selectedFiles.length > 1) {
    try {
      await uploadDocumentBatch(selectedFiles);
    } finally {
      els.documentPdf.value = "";
    }
    return;
  }
  const file = selectedFiles[0];
  if (!supportedDocumentFile(file)) {
    setDocumentContextVisible(true);
    setDocumentStatus(textFor("document.onlyPdf", "暂不支持这种文件。请选择 PDF、图片、文本、Markdown、CSV、JSON、HTML、Office 或 OpenDocument 文件。"), "warning");
    if (els.documentPdf) els.documentPdf.value = "";
    return;
  }
  documentUploadInFlight = true;
  currentDocumentId = "";
  currentDocumentName = file.name;
  currentDocumentSummary = "";
  currentDocumentSummaryData = null;
  currentDocumentWarnings = [];
  currentDocumentAnswerMode = "";
  currentDocumentReadyFileMessageId = "";
  currentDocumentReadyAssistantMessageId = "";
  setDocumentContextVisible(true);
  setDocumentStatus(documentLabeledValue("document.uploading", "正在上传并解析：", file.name), "loading");
  setDocumentBusy(true);
  setDocumentAnswer(" ");
  const uploadMessageId = appendConversationMessage("file", documentLabeledValue("document.receiving", "正在接收：", file.name), { kind: "uploading" });
  const uploadId = newDocumentUploadId();
  const pendingUpload = documentUploadDescriptor(file, uploadId, uploadMessageId);
  rememberPendingDocumentUpload(pendingUpload);
  const url = documentApiUrl("/client/v1/documents/upload", {
    async: "true",
    filename: file.name,
    client_id: voiceClientId(),
    conversation_id: currentConversationId || "",
    upload_id: uploadId
  });
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": file.type || "application/octet-stream",
        "X-Jarvis-Client-Id": voiceClientId(),
        ...authHeaders()
      },
      body: file
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      const uploadError = new Error(documentUploadError(payload, response.status));
      uploadError.uploadHttpStatus = response.status;
      throw uploadError;
    }
    if (response.status === 202 && payload.job) {
      pendingUpload.job_id = String(payload.job_id || payload.job.job_id || "");
      pendingUpload.document_id = String(payload.document_id || payload.job.document_id || "");
      rememberPendingDocumentUpload(pendingUpload);
      showDocumentJob(pendingUpload, payload.job);
      schedulePendingDocumentUploadReconciliation(350);
      return;
    }
    acceptUploadedDocument(payload, uploadMessageId);
  } catch (err) {
    const recovered = err && err.uploadHttpStatus ? null : await reconcileDocumentUpload(file, uploadId);
    if (recovered) {
      acceptUploadedDocument(recovered, uploadMessageId, true);
      return;
    }
    if (!err || !err.uploadHttpStatus) {
      showPendingDocumentUpload(pendingUpload);
      schedulePendingDocumentUploadReconciliation(1800);
      logLine(`document upload result unknown ${err && err.message || "network_error"}`);
      return;
    }
    clearPendingDocumentUpload(uploadId);
    currentDocumentId = "";
    currentDocumentSummary = "";
    currentDocumentSummaryData = null;
    currentDocumentWarnings = [];
    currentDocumentAnswerMode = "error";
    currentDocumentReadyFileMessageId = "";
    currentDocumentReadyAssistantMessageId = "";
    const errorText = documentLabeledValue("document.uploadFailed", "文件上传失败：", err.message || "unknown");
    setDocumentContextVisible(true);
    setDocumentStatus(errorText, "error");
    if (!updateConversationMessage(uploadMessageId, errorText, { label: "Iris", role: "assistant", kind: "document_error" })) {
      appendAssistantConversation(errorText, { kind: "document_error" });
    }
    logLine(`document upload failed ${err.message || ""}`.trim());
  } finally {
    documentUploadInFlight = false;
    if (els.documentPdf) els.documentPdf.value = "";
    setDocumentBusy(false);
  }
}

async function controlCurrentDocumentJob(action) {
  let pending = readPendingDocumentUpload();
  const jobId = String(activeDocumentJobId || (pending && pending.job_id) || "");
  const unitRetryDocumentId = action === "retry" ? String(activeDocumentUnitRetryId || "") : "";
  if ((!jobId && !unitRetryDocumentId) || !["cancel", "retry"].includes(action)) return;
  const button = action === "cancel" ? els.documentJobCancel : els.documentJobRetry;
  if (button) button.disabled = true;
  try {
    const path = unitRetryDocumentId
      ? `/client/v1/documents/${encodeURIComponent(unitRetryDocumentId)}/units/retry`
      : `/client/v1/documents/jobs/${encodeURIComponent(jobId)}/${action}`;
    const response = await fetch(
      documentApiUrl(path, { client_id: voiceClientId() }),
      {
        method: "POST",
        headers: {
          ...(unitRetryDocumentId ? { "Content-Type": "application/json" } : {}),
          "X-Jarvis-Client-Id": voiceClientId(),
          ...authHeaders()
        },
        ...(unitRetryDocumentId ? { body: JSON.stringify({ unit_ids: [] }) } : {})
      }
    );
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      const detail = payload && payload.detail;
      throw new Error((detail && detail.error) || detail || `document_job_${action}_failed_${response.status}`);
    }
    if (payload.job && !pending) {
      pending = {
        upload_id: String(payload.job.upload_id || `unit_retry_${Date.now()}`),
        filename: String(payload.job.filename || currentDocumentName || ""),
        document_id: String(payload.job.document_id || currentDocumentId || ""),
        job_id: String(payload.job.job_id || ""),
        message_id: "",
        attempts: 0
      };
      rememberPendingDocumentUpload(pending);
    }
    if (payload.job && pending) showDocumentJob(pending, payload.job);
    if (payload.job && DOCUMENT_JOB_ACTIVE_STATUSES.has(String(payload.job.status || ""))) {
      schedulePendingDocumentUploadReconciliation(300);
    }
  } catch (error) {
    const message = action === "cancel"
      ? documentLabeledValue("document.cancelFailed", "取消失败：", error && error.message || "unknown")
      : documentLabeledValue("document.retryFailed", "重试失败：", error && error.message || "unknown");
    setDocumentStatus(message, "error");
    setDocumentUploadStatus(message, "error", true);
    logLine(`document job ${action} failed ${error && error.message || "unknown"}`);
  } finally {
    if (button) button.disabled = false;
  }
}

async function summarizeCurrentDocument() {
  if (!canUseBackendNow()) {
    showAccessGate(textFor("access.required", "请先输入访问口令。"), "warning", "access.required");
    return;
  }
  if (!currentDocumentId) {
    setDocumentStatus(textFor("document.noDocument", "先上传并解析一份文件。"), "warning");
    return;
  }
  setDocumentBusy(true);
  currentDocumentAnswerMode = "summary";
  if (currentDocumentSummaryData || currentDocumentSummary || currentDocumentName) {
    setDocumentStatus(currentDocumentStatusLine() || currentDocumentName, "loading");
  }
  setDocumentAnswer(textFor("document.summarizePendingShort", "正在整理摘要..."));
  const pendingId = appendAssistantConversation(textFor("document.summarizePending", "正在整理这份文件的摘要..."), { kind: "document_pending" });
  try {
    const response = await fetch(documentApiUrl(`/client/v1/documents/${encodeURIComponent(currentDocumentId)}/summarize`, { client_id: voiceClientId() }), {
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
      ? `\n\n${textFor("document.summaryPoints", "要点")}：\n${payload.key_points.map((item) => `- ${item}`).join("\n")}`
      : "";
    const outline = Array.isArray(payload.outline) && payload.outline.length
      ? `\n\n${textFor("document.summaryOutline", "结构")}：\n${payload.outline.map((item) => `- ${item}`).join("\n")}`
      : "";
    const text = `${payload.summary || textFor("document.summaryEmpty", "没有生成摘要。")}${points}${outline}`;
    setDocumentAnswer(text);
    if (!updateConversationMessage(pendingId, text, { label: textFor("document.summaryLabel", "Iris · PDF 摘要"), kind: "document_summary" })) {
      const summaryId = appendAssistantConversation(text, { label: textFor("document.summaryLabel", "Iris · PDF 摘要"), kind: "document_summary" });
      revealConversationMessage(summaryId);
    } else {
      revealConversationMessage(pendingId);
    }
    if (payload.document) setDocumentStatus(rememberDocumentSummaryData(payload.document), "ready");
    else if (currentDocumentSummaryData || currentDocumentSummary || currentDocumentName) setDocumentStatus(currentDocumentStatusLine() || currentDocumentName, "ready");
  } catch (err) {
    const errorText = documentLabeledValue("document.summaryFailed", "摘要失败：", err.message || "unknown");
    setDocumentStatus(errorText, "error");
    setDocumentAnswer(errorText);
    updateConversationMessage(pendingId, errorText, { label: "Iris" });
    logLine(`document summarize failed ${err.message || ""}`.trim());
  } finally {
    setDocumentBusy(false);
  }
}

async function askCurrentDocument(questionOverride = "") {
  if (!canUseBackendNow()) {
    showAccessGate(textFor("access.required", "请先输入访问口令。"), "warning", "access.required");
    return;
  }
  if (!currentDocumentId) {
    setDocumentStatus(textFor("document.noDocument", "先上传并解析一份文件。"), "warning");
    return;
  }
  const question = (questionOverride || (els.documentQuestion && els.documentQuestion.value ? els.documentQuestion.value : "")).trim();
  if (!question) {
    const hint = textFor("document.askMissingQuestion", "先输入一个想问这份文件的问题。");
    setDocumentStatus(hint, "warning");
    setDocumentAnswer(hint);
    return;
  }
  setDocumentBusy(true);
  currentDocumentAnswerMode = "answer";
  if (currentDocumentSummaryData || currentDocumentSummary || currentDocumentName) {
    setDocumentStatus(currentDocumentStatusLine() || currentDocumentName, "loading");
  }
  setDocumentAnswer(textFor("document.askPendingShort", "正在从文档里找相关内容..."));
  appendUserConversation(question, { force: true });
  const pendingId = appendAssistantConversation(textFor("document.askPending", "正在从当前文件里找相关内容..."), { kind: "document_pending" });
  try {
    const response = await fetch(documentApiUrl(`/client/v1/documents/${encodeURIComponent(currentDocumentId)}/ask`, { client_id: voiceClientId() }), {
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
      ? `\n\n${textFor("document.askSources", "来源")}：${payload.citations.map((item) => item.citation_label || (item.page ? textFor("document.askPage", "第 {page} 页").replace("{page}", item.page) : item.chunk_id)).filter(Boolean).join("、")}`
      : "";
    const text = `${payload.answer || textFor("document.askEmpty", "没有找到可回答的内容。")}${citations}`;
    setDocumentAnswer(text);
    if (!updateConversationMessage(pendingId, text, { label: textFor("document.answerLabel", "Iris · PDF"), kind: "document_answer" })) {
      const answerId = appendAssistantConversation(text, { label: textFor("document.answerLabel", "Iris · PDF"), kind: "document_answer" });
      revealConversationMessage(answerId);
    } else {
      revealConversationMessage(pendingId);
    }
    if (currentDocumentSummaryData || currentDocumentSummary || currentDocumentName) setDocumentStatus(currentDocumentStatusLine() || currentDocumentName, "ready");
  } catch (err) {
    const errorText = documentLabeledValue("document.askFailed", "追问失败：", err.message || "unknown");
    setDocumentStatus(errorText, "error");
    setDocumentAnswer(errorText);
    updateConversationMessage(pendingId, errorText, { label: "Iris" });
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

function readableTtsRouteSource(source = "") {
  const value = String(source || "").trim();
  const en = currentLanguage === "en";
  const labels = {
    qa_screenshot: en ? "Web test" : "Web 测试",
    desktop_qa_screenshot: en ? "Desktop Web test" : "桌面 Web 测试",
    web_tts_audibility_test: en ? "Voice check" : "发声检查",
    web_tts_test: en ? "Voice check" : "发声检查",
    server_audio: en ? "Iris voice playback" : "Iris 语音播放",
    voice_reply: en ? "Iris reply" : "Iris 回答"
  };
  if (labels[value]) return labels[value];
  if (/qa|screenshot/i.test(value)) {
    return /desktop/i.test(value) ? (en ? "Desktop Web test" : "桌面 Web 测试") : (en ? "Web test" : "Web 测试");
  }
  if (!value || value === "unknown") return en ? "Iris Web" : "Iris Web";
  return value.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
}

function readableTtsProvider(provider = "") {
  const value = String(provider || "").trim();
  const labels = {
    edge_tts: "Edge TTS",
    edge: "Edge TTS",
    server_http_tts: "Edge TTS",
    qa_tts: "Edge TTS",
    web_audio: currentLanguage === "en" ? "Web audio" : "Web 音频"
  };
  if (labels[value]) return labels[value];
  if (/qa|screenshot|test/i.test(value)) return "Edge TTS";
  if (!value || value === "unknown") return "Edge TTS";
  return value.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
}

function readableTtsRouteSummary(route = {}) {
  const summary = String(route.summary || "").trim();
  if (!summary) return "";
  if (/QA|qa_|desktop_qa|screenshot/i.test(summary)) {
    return currentLanguage === "en" ? "Test playback was triggered." : "测试播报已触发。";
  }
  return summary;
}

function buildTtsRouteText(route = lastTtsRoute) {
  if (!route || route.provider === "none") return textFor("tts.noRoute", "还没有播报记录。");
  const summary = readableTtsRouteSummary(route);
  return [
    `${textFor("tts.routeSource", "来源")}：${readableTtsRouteSource(route.source)}`,
    `${textFor("tts.routeProvider", "服务")}：${readableTtsProvider(route.provider)}`,
    `${textFor("tts.routeVoice", "音色")}：${voiceProfileLabel(route.voiceProfile || selectedVoiceProfile(), selectedVoiceProfile())}`,
    summary
  ].filter(Boolean).join("\n");
}

function rememberTtsRoute(route) {
  lastTtsRoute = {
    provider: route.provider || "unknown",
    voiceProfile: route.voiceProfile || selectedVoiceProfile(),
    source: route.source || "unknown",
    summary: route.summary || ""
  };
  const readable = buildTtsRouteText(lastTtsRoute);
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
  showConnectionRecoveryHint("connection.dropped", "语音连接刚才断开了。网络恢复后再点一次就好。");
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

function suspendVoiceCaptureAfterSttFatal(reason = "stt_error") {
  running = false;
  serverSttEnabled = false;
  serverSttRequested = false;
  localSpeaking = false;
  sttFatal = true;
  releaseVoiceCaptureResources(reason);
  send({ type: "stop_session" });
  closeVoiceSocket(reason);
  setState("stt_error");
}

function shutdownVoiceSessionForPageHide() {
  cancelUserPartialRender();
  cancelAgentReplyRender();
  const hasPlaybackWork = Boolean(
    currentAudio
    || currentAudioUrl
    || activeTtsRequestId
    || activeTtsAbortController
    || activeTtsSession
    || agentSpeaking
  );
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

async function sendTextPrompt(text, options = {}) {
  const final = (text || "").trim();
  if (!final) return false;
  if (activeTextPromptAbortController) return false;
  if (!canUseBackendNow()) {
    showAccessGate(textFor("access.required", "请先输入访问口令。"), "warning", "access.required");
    return false;
  }
  const requestId = textPromptSeq + 1;
  const requestThinkingMode = normalizedThinkingMode(selectedThinkingMode);
  textPromptSeq = requestId;
  prepareTextInputTurn();
  els.final.textContent = final;
  els.partial.textContent = "";
  setDockText(final);
  setSubtitle(final, { speaker: "你" });
  const userMessageId = appendUserConversation(final, {
    force: Boolean(options.forceUserMessage)
  });
  const streamingMessageId = appendAssistantConversation("", {
    id: `assistant_stream_${requestId}`,
    allowEmpty: true,
    kind: "streaming",
    streamState: "thinking",
    label: thinkingStreamLabel(requestThinkingMode),
    forceScroll: true
  });
  activeTextPromptMessageId = streamingMessageId;
  const controller = new AbortController();
  const composerWasBusy = Boolean(els.manualSend && els.manualSend.dataset.loading === "true");
  activeTextPromptAbortController = controller;
  setComposerSendLoading(true);
  setState("thinking");
  let assembledReply = "";
  let streamStarted = false;
  let donePayload = null;
  try {
    const requestBody = clientTextMessageRequestBody(final, requestThinkingMode);
    let response = await fetch(backendUrl("/client/v1/message/stream"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders()
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });
    if (requestId !== textPromptSeq) {
      logLine("stale text prompt skipped");
      flushLogRenderNow();
      return false;
    }
    if ([404, 405].includes(response.status)) {
      response = await fetch(backendUrl("/client/v1/message"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders()
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });
      const legacyPayload = await response.json().catch(() => ({}));
      if (!response.ok) {
        handleUnauthorizedResponse(response);
        throw new Error(legacyPayload.detail || `HTTP ${response.status}`);
      }
      donePayload = legacyPayload;
    } else if (!response.ok) {
      const failurePayload = await response.json().catch(() => ({}));
      handleUnauthorizedResponse(response);
      throw new Error(failurePayload.detail || `HTTP ${response.status}`);
    } else {
      const contentType = String(response.headers.get("content-type") || "").toLowerCase();
      if (!contentType.includes("text/event-stream") || !response.body) {
        throw new Error("服务器没有返回可读取的消息流");
      }
      await consumeClientMessageEventStream(response, (event, payload) => {
        if (requestId !== textPromptSeq) return;
        if (event === "stream_start") {
          streamStarted = true;
          updateConversationMessage(streamingMessageId, "", {
            kind: "streaming",
            streamState: "thinking",
            label: thinkingStreamLabel(requestThinkingMode),
            preserveText: true,
            forceScroll: true
          });
          return;
        }
        if (event === "progress") {
          updateConversationMessage(streamingMessageId, "", {
            kind: "streaming",
            streamState: "thinking",
            label: thinkingStreamLabel(requestThinkingMode, "progress"),
            preserveText: true,
            forceScroll: true
          });
          return;
        }
        if (event === "metadata") {
          applyClientTextResponseIdentity(payload, userMessageId, final);
          return;
        }
        if (event === "delta") {
          assembledReply += String(payload.delta || "");
          updateConversationMessage(streamingMessageId, assembledReply, {
            kind: "streaming",
            streamState: "streaming",
            label: "Iris",
            preserveText: true,
            forceScroll: true
          });
          setSubtitle(assembledReply, { speaker: "IRIS", resetFlow: true });
          return;
        }
        if (event === "done") {
          donePayload = payload;
          return;
        }
        if (event === "error") {
          const error = new Error(currentLanguage === "en" ? "Iris could not finish this reply." : "Iris 没能完成这次回答。");
          error.code = String(payload.code || "message_stream_failed");
          throw error;
        }
      });
      if (!donePayload) {
        throw new Error(streamStarted ? "消息流提前结束" : "消息流没有开始");
      }
    }
    if (requestId !== textPromptSeq) {
      logLine("stale text prompt skipped");
      flushLogRenderNow();
      return false;
    }
    finalizeClientTextResponse(donePayload, {
      userMessageId,
      userText: final,
      streamingMessageId
    });
    return true;
  } catch (err) {
    if (requestId !== textPromptSeq) {
      logLine("stale text prompt failure skipped");
      return false;
    }
    if (controller.signal.aborted || (err && err.name === "AbortError")) {
      const stoppedLabel = currentLanguage === "en" ? "Generation stopped." : "已停止生成。";
      const visibleReply = assembledReply.trimEnd();
      const stoppedReply = visibleReply ? `${visibleReply}\n\n${stoppedLabel}` : stoppedLabel;
      updateConversationMessage(streamingMessageId, stoppedReply, {
        kind: "stream_stopped",
        streamState: "stopped",
        label: currentLanguage === "en" ? "Iris · stopped" : "Iris · 已停止",
        preserveText: true,
        forceScroll: true
      });
      els.reply.textContent = stoppedReply;
      setSubtitle(stoppedReply, { speaker: "IRIS", resetFlow: true });
      setState("idle", { preserveSubtitle: true });
      window.setTimeout(() => {
        refreshConversationLibrary({ force: true }).catch((error) => {
          logLine(error.message || "conversation library refresh failed");
        });
      }, 700);
      logLine(`text stream stopped · ${assembledReply.length} chars visible`);
      return true;
    }
    const message = `文字发送失败：${err.message || "网络不可用"}`;
    if (streamingMessageId) {
      updateConversationMessage(streamingMessageId, message, {
        kind: "error",
        streamState: "error",
        label: "Iris",
        forceScroll: true
      });
    } else {
      appendAssistantConversation(message, { kind: "error" });
    }
    logLine(message);
    flushLogRenderNow();
    setState("error");
    setSttHint("文字发送失败。网络恢复后再试一次。");
    return false;
  } finally {
    if (activeTextPromptAbortController === controller) {
      activeTextPromptAbortController = null;
      activeTextPromptMessageId = "";
      if (composerWasBusy) setComposerSendLoading(true);
      else setComposerSendLoading(false);
    }
  }
}

function clientTextMessageRequestBody(text, thinkingMode = selectedThinkingMode) {
  return {
    client_type: "web",
    client_id: voiceClientId(),
    session_id: currentConversationId || "web",
    user_id: currentSubjectId(),
    input: { type: "text", text: String(text || "").trim() },
    client_context: {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Shanghai",
      locale: navigator.language || "zh-CN",
      foreground: document.visibilityState !== "hidden",
      voice_profile: selectedVoiceProfile(),
      voice_output: false,
      proactive_notification_id: activeProactiveNotificationId || null,
      thinking_mode: normalizedThinkingMode(thinkingMode)
    },
    capabilities: WEB_TEXT_CAPABILITIES,
    auth: { token: persistedVoiceToken || "" }
  };
}

function parseClientMessageSseBlock(block) {
  let event = "message";
  const data = [];
  String(block || "").split(/\r?\n/).forEach((line) => {
    if (line.startsWith("event:")) event = line.slice(6).trim();
    else if (line.startsWith("data:")) data.push(line.slice(5).trimStart());
  });
  if (!data.length) return null;
  const raw = data.join("\n");
  if (raw.length > 2_000_000) throw new Error("消息流事件过大");
  return { event, payload: JSON.parse(raw) };
}

async function consumeClientMessageEventStream(response, onEvent) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";
  while (true) {
    const { value, done } = await reader.read();
    buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
    if (buffer.length > 4_000_000) throw new Error("消息流缓冲区过大");
    let boundary = buffer.match(/\r?\n\r?\n/);
    while (boundary && Number.isInteger(boundary.index)) {
      const block = buffer.slice(0, boundary.index);
      buffer = buffer.slice(boundary.index + boundary[0].length);
      const parsed = parseClientMessageSseBlock(block);
      if (parsed) onEvent(parsed.event, parsed.payload);
      boundary = buffer.match(/\r?\n\r?\n/);
    }
    if (done) break;
  }
  const trailing = parseClientMessageSseBlock(buffer.trim());
  if (trailing) onEvent(trailing.event, trailing.payload);
}

function applyClientTextResponseIdentity(payload, userMessageId, userText) {
  if (!payload || typeof payload !== "object") return;
  currentConversationId = payload.conversation_id || currentConversationId;
  const userMessage = findConversationMessage(userMessageId);
  if (userMessage && payload.turn_id) {
    userMessage.dataset.turnId = String(payload.turn_id);
    attachUserMessageEditControls(userMessage, {
      turn_id: payload.turn_id,
      source_text: userText
    });
  }
}

function clientThinkingPayload(value) {
  const source = value && typeof value === "object" && value.thinking && typeof value.thinking === "object"
    ? value.thinking
    : value;
  if (!source || typeof source !== "object") return null;
  const requestedMode = normalizedThinkingMode(source.requested_mode);
  const resolvedMode = normalizedThinkingMode(source.resolved_mode);
  const strategy = String(source.strategy || "").trim().toLowerCase();
  if (
    !["fast", "normal", "deep"].includes(resolvedMode)
    || !["direct", "balanced", "deliberate_verify", "cognitive_composer", "capability_runtime"].includes(strategy)
  ) {
    return null;
  }
  return {
    requested_mode: requestedMode,
    resolved_mode: resolvedMode,
    source: String(source.source || "user").trim().toLowerCase() === "automatic" ? "automatic" : "user",
    applied: Boolean(source.applied),
    strategy
  };
}

function finalizeClientTextResponse(payload, { userMessageId, userText, streamingMessageId } = {}) {
  applyClientTextResponseIdentity(payload, userMessageId, userText);
  refreshConversationLibrary({ force: true }).catch((error) => {
    logLine(error.message || "conversation library refresh failed");
  });
  const actionButtons = clientMessageActionButtons(payload.action_payloads);
  const documentComparison = clientDocumentComparisonPayload(payload.action_payloads);
  const multiIntent = clientMultiIntentPayload(payload.action_payloads);
  const researchVerification = clientResearchVerificationPayload(payload.action_payloads);
  const deepResearch = clientDeepResearchPayload(payload.action_payloads);
  const thinking = clientThinkingPayload(payload.thinking);
  const reply = clientReplyForDisplay(String(payload.reply || "").trim(), actionButtons) || "我没有拿到可显示的回复。";
  els.reply.textContent = reply;
  const streamingMessage = findConversationMessage(streamingMessageId);
  if (streamingMessage) streamingMessage.remove();
  appendAssistantConversation(reply, {
    id: payload.response_id ? `assistant_${payload.response_id}` : "",
    kind: documentComparison
      ? "document_comparison"
      : deepResearch
        ? "deep_research"
        : researchVerification
          ? "research_verification"
          : multiIntent
            ? "multi_intent"
            : payload.skill || payload.route || "text_reply",
    forceScroll: true,
    actions: actionButtons,
    documentComparison,
    multiIntent,
    researchVerification,
    deepResearch,
    thinking,
    revealFromStart: Boolean(deepResearch),
    turnId: String(payload.turn_id || ""),
    feedbackTarget: payload.feedback || (payload.turn_id ? {
      turn_id: payload.turn_id,
      response_id: payload.response_id || "",
      channel: "web"
    } : null)
  });
  renderConversationVersionNavigator();
  setSubtitle(reply, { speaker: "IRIS", resetFlow: true });
  setState("idle", { preserveSubtitle: true });
  clearActiveProactiveConversation();
  logLine(`text reply · ${payload.route || "client"}${payload.skill ? `/${payload.skill}` : ""}`);
  return reply;
}

function stopActiveTextPrompt() {
  if (!activeTextPromptAbortController) return false;
  activeTextPromptAbortController.abort("user_stop");
  const message = findConversationMessage(activeTextPromptMessageId);
  if (message) message.dataset.streamState = "stopping";
  setComposerSendLoading(true);
  return true;
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
  if (!final) return Promise.resolve(false);
  if (options.clearManualInput && els.manual) els.manual.value = "";
  return sendTextPrompt(final).catch((err) => {
    const message = `文字发送失败：${err.message || "语音连接不可用"}`;
    logLine(message);
    flushLogRenderNow();
    if (currentRawState !== "auth_error") {
      setState("disconnected");
      setSttHint("文字发送失败。网络恢复后再试一次。");
    }
    return false;
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

function composerHasText() {
  return Boolean(els.manual && String(els.manual.value || "").trim());
}

function composerCanSubmit() {
  const documentBusy = Boolean(els.documentContextBar && els.documentContextBar.dataset.busy === "true");
  return !documentBusy && composerHasText();
}

function syncComposerSendAvailability() {
  if (!els.manualSend) return;
  const isLoading = els.manualSend.dataset.loading === "true";
  const hasText = composerHasText();
  const canSubmit = composerCanSubmit();
  const documentBusy = Boolean(els.documentContextBar && els.documentContextBar.dataset.busy === "true");
  const canStartVoice = !documentBusy && !hasText;
  const hasDocument = Boolean(currentDocumentId && documentContextVisible);
  els.manualSend.dataset.empty = hasText ? "false" : "true";
  els.manualSend.dataset.canSubmit = canSubmit ? "true" : "false";
  els.manualSend.dataset.documentLinked = hasDocument ? "true" : "false";
  els.manualSend.dataset.documentBadge = hasDocument && currentDocumentSummaryData
    ? documentTypeBadge(currentDocumentSummaryData)
    : "FILE";
  els.manualSend.dataset.stateLabel = canSubmit
    ? (hasDocument ? "document-question-ready" : "message-ready")
    : canStartVoice
      ? "voice-ready"
      : (hasDocument ? "document-question-empty" : "message-empty");
  if (!isLoading) {
    els.manualSend.disabled = !canSubmit && !canStartVoice;
    els.manualSend.dataset.mode = canSubmit
      ? (hasDocument ? "document-question" : "ready")
      : canStartVoice
        ? "voice"
        : (hasDocument ? "document-idle" : "idle");
    els.manualSend.textContent = canStartVoice ? "" : hasDocument && hasText ? "?" : "↑";
  }
  const label = hasDocument
    ? (hasText
      ? textFor("composer.askDocument", "追问当前文件")
      : canStartVoice
        ? textFor("action.voiceInput", "语音输入")
        : textFor("composer.askDocumentDisabled", "输入问题后追问当前文件"))
    : (hasText ? textFor("action.send", "发送") : textFor("action.voiceInput", "语音输入"));
  els.manualSend.setAttribute("aria-label", label);
  els.manualSend.setAttribute("title", label);
}

function setComposerSendLoading(isLoading) {
  if (!els.manualSend) return;
  const composer = els.manualSend.closest(".unifiedComposer");
  if (composer) composer.dataset.sending = isLoading ? "true" : "false";
  const canStop = Boolean(isLoading && activeTextPromptAbortController);
  els.manualSend.disabled = Boolean(isLoading && !canStop);
  els.manualSend.setAttribute("aria-busy", isLoading ? "true" : "false");
  if (isLoading) {
    els.manualSend.dataset.loading = "true";
    els.manualSend.dataset.mode = canStop ? "stop" : "sending";
    els.manualSend.dataset.stateLabel = canStop ? "stop-generation" : "sending";
    els.manualSend.textContent = canStop ? "■" : "•";
    const label = canStop
      ? (currentLanguage === "en" ? "Stop generating" : "停止生成")
      : (currentLanguage === "en" ? "Sending" : "正在发送");
    els.manualSend.setAttribute("aria-label", label);
    els.manualSend.setAttribute("title", label);
  } else {
    els.manualSend.removeAttribute("data-loading");
    els.manualSend.textContent = "↑";
    syncComposerSendAvailability();
  }
}

async function keepComposerFeedbackVisible(startedAt) {
  const now = typeof performance !== "undefined" ? performance.now() : Date.now();
  const remaining = COMPOSER_ACTION_MIN_BUSY_MS - (now - startedAt);
  if (remaining > 0) await new Promise((resolve) => window.setTimeout(resolve, remaining));
}

async function handleComposerSubmit() {
  if (stopActiveTextPrompt()) return true;
  const text = (els.manual && els.manual.value ? els.manual.value : "").trim();
  if (!text) {
    return handleDockVoiceCommand();
  }
  const startedAt = typeof performance !== "undefined" ? performance.now() : Date.now();
  setComposerSendLoading(true);
  if (els.manual) {
    els.manual.value = "";
    resizeComposerInput({ immediate: true });
  }
  try {
    if (currentDocumentId && documentContextVisible) await askCurrentDocument(text);
    else await handleTextPromptCommand(text);
  } finally {
    await keepComposerFeedbackVisible(startedAt);
    setComposerSendLoading(false);
  }
}

async function connect() {
  if (!canUseBackendNow()) {
    showAccessGate(textFor("access.required", "请先输入访问口令。"), "warning", "access.required");
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
    showConnectionRecoveryHint("connection.failed", "语音连接还没建立成功。网络恢复后再点一次就好。");
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
      showConnectionRecoveryHint(timeoutReason === "connect_timeout" ? "connection.timeout" : "connection.failed", "连接超时。网络恢复后再点一次就好。");
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
      showConnectionRecoveryHint("connection.dropped", "语音连接刚才断开了。网络恢复后再点一次就好。");
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
  syncAudioSettingButtons();
  els.partial.textContent = "";
  els.final.textContent = "";
  els.reply.textContent = "";
  cancelUserPartialRender();
  cancelAgentReplyRender();
  setSubtitle(textFor("voice.startListening", "我在，慢慢说。"), { speaker: "IRIS" });
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
      showConnectionRecoveryHint("connection.failed", textFor("voice.connectFailedHint", "语音连接还没建立成功，我没有开始录音。请点“重连”或重新开始。"));
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
      showConnectionRecoveryHint("connection.dropped", "语音连接刚才断开了。网络恢复后再点一次就好。");
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
    suspendVoiceCaptureAfterSttFatal("browser_stt_unavailable");
    setSttHint("浏览器语音识别启动失败，Iris 云端识别也暂不可用。你可以先用手动输入。");
    logLine(`STT browser unavailable: ${reason || "unknown"}`);
    return;
  }
  const Ctor = speechRecognitionCtor();
  if (!Ctor) {
    suspendVoiceCaptureAfterSttFatal("speech_recognition_unavailable");
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

    if (["not-allowed", "audio-capture"].includes(code) && canFallbackToServerStt()) {
      browserSttUnavailable = true;
      setSttHint("浏览器语音识别不可用，正在切换 Iris 云端识别。");
      requestServerStt(code);
      return;
    }

    if (["not-allowed", "audio-capture"].includes(code)) {
      suspendVoiceCaptureAfterSttFatal(code);
      return;
    }

    suspendVoiceCaptureAfterSttFatal(code);
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
        showConnectionRecoveryHint("connection.dropped", "语音连接刚才断开了。网络恢复后再点一次就好。");
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
    clearActiveProactiveConversation();
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
    const feedbackTarget = {
      turn_id: event.turn_id || currentTurnId,
      response_id: event.response_id || currentResponseId,
      channel: "voice"
    };
    if (event.text && !updateConversationMessage(activeAssistantMessageId, event.text, { feedbackTarget })) {
      activeAssistantMessageId = appendAssistantConversation(event.text, {
        id: event.response_id ? `assistant_${event.response_id}` : "",
        kind: "agent_reply",
        feedbackTarget
      });
    }
    speak(event.text || "", event.turn_id || currentTurnId, event.response_id || currentResponseId);
    return;
  }
  if (type === "agent_speaking_stopped") {
    if (event.response_id && currentResponseId && event.response_id !== currentResponseId) return;
    agentSpeaking = false;
    PresenceController.setMouthOpen(0);
    const activeMessage = findConversationMessage(activeAssistantMessageId);
    if (activeMessage && currentTurnId) {
      attachMessageFeedbackControls(activeMessage, {
        turn_id: currentTurnId,
        response_id: currentResponseId,
        channel: "voice"
      });
    }
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

function localizedTtsPlaceholder(value, kind) {
  const text = String(value || "").trim();
  const placeholderSets = {
    audibility: new Set(["未确认", "Not confirmed"]),
    route: new Set(["还没有播报记录。", "No playback record yet."]),
  };
  const key = kind === "route" ? "tts.noRoute" : "tts.unconfirmed";
  const fallback = kind === "route" ? "还没有播报记录。" : "未确认";
  return !text || placeholderSets[kind].has(text) ? textFor(key, fallback) : text;
}

function renderWebTtsAudibility() {
  if (!els.webTtsAudibility) return;
  if (!currentWebTtsAudibilityText) {
    currentWebTtsAudibilityText = safeStorageGet(TTS_AUDIBILITY_KEY, textFor("tts.unconfirmed", "未确认"));
    persistedWebTtsAudibilityText = currentWebTtsAudibilityText;
  }
  const value = localizedTtsPlaceholder(currentWebTtsAudibilityText, "audibility");
  currentWebTtsAudibilityText = value;
  const tone = webTtsAudibilityTone(value);
  els.webTtsAudibility.textContent = value;
  els.webTtsAudibility.title = value;
  els.webTtsAudibility.dataset.tone = tone;
  const box = els.webTtsAudibility.closest(".audibilityBox");
  if (box) box.dataset.tone = tone;
  if (els.webTtsHeard) els.webTtsHeard.setAttribute("aria-pressed", tone === "success" ? "true" : "false");
  if (els.webTtsNotHeard) els.webTtsNotHeard.setAttribute("aria-pressed", tone === "error" ? "true" : "false");
}

function webTtsAudibilityTone(text) {
  const value = String(text || "").toLowerCase();
  if (!value.trim() || value.includes("未确认") || value.includes("not confirmed")) return "info";
  if (value.includes("等待") || value.includes("正在") || value.includes("waiting") || value.includes("connecting") || value.includes("pending") || value.includes("syncing")) return "loading";
  if (value.includes("失败") || value.includes("未听到") || value.includes("没听到") || value.includes("no sound") || value.includes("failed")) return "error";
  if (value.includes("已确认") || value.includes("已同步") || value.includes("confirmed") || value.includes("audible") || value.includes("heard") || value.includes("synced")) return "success";
  return "info";
}

function setWebTtsButtonLoading(button, loading) {
  if (!button) return;
  button.disabled = Boolean(loading);
  if (loading) button.dataset.loading = "true";
  else button.removeAttribute("data-loading");
}

function renderWebTtsRoute() {
  if (!els.webTtsRoute) return;
  if (lastTtsRoute.provider && lastTtsRoute.provider !== "none") {
    currentTtsRouteText = buildTtsRouteText(lastTtsRoute);
  }
  if (!currentTtsRouteText) {
    currentTtsRouteText = safeStorageGet(TTS_ROUTE_KEY, textFor("tts.noRoute", "还没有播报记录。"));
    persistedTtsRouteText = currentTtsRouteText;
  }
  currentTtsRouteText = localizedTtsPlaceholder(currentTtsRouteText, "route");
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
  currentWebTtsAudibilityText = (value || "").trim() || textFor("tts.unconfirmed", "未确认");
  renderWebTtsAudibility();
  if (persist) scheduleWebTtsAudibilityPersist(currentWebTtsAudibilityText);
}

function recordWebTtsAudibility(heard) {
  const value = heard
    ? textFor("tts.heardStatus", "已确认听到：Web 最近一次测试播报可被人耳听见。")
    : textFor("tts.notHeardStatus", "未听到：请检查媒体音量、静音开关、蓝牙输出、浏览器自动播放权限和 Edge TTS 音频播放链路。");
  rememberWebTtsAudibility(value);
  setSubtitle(value, { speaker: "IRIS", resetFlow: true });
  logLine(`web TTS audibility ${heard ? "heard" : "not_heard"}`);
  reportWebTtsAudibility(heard, value).catch((err) => logLine(`web audibility report failed ${err.message || ""}`.trim()));
}

async function reportWebTtsAudibility(heard, note) {
  if (!window.fetch) return false;
  const routeSummary = readableTtsRouteSummary(lastTtsRoute);
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
      route_summary: [routeSummary, currentWebTtsAudibilityText || ""].filter(Boolean).join("\n"),
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

function readableWebTtsAudibilityDetail(detail = "") {
  const lines = String(detail || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const safeLines = lines.filter((line) => !/\bqa\b|qa_|jarvis_|screenshot/i.test(line));
  if (safeLines.length) return safeLines.join("\n");
  return lines.length ? (currentLanguage === "en" ? "Test playback details were recorded." : "测试播报记录已保存。") : "";
}

function cancelWebTtsAudibilitySync() {
  webTtsAudibilitySyncSeq += 1;
  if (!activeWebTtsAudibilitySyncAbortController) return;
  activeWebTtsAudibilitySyncAbortController.abort();
  activeWebTtsAudibilitySyncAbortController = null;
}

function summarizeWebTtsAudibilityEvent(event) {
  if (!event) return "";
  const heard = event.heard
    ? textFor("tts.syncEventHeard", "已确认听到")
    : textFor("tts.syncEventNotHeard", "未听到");
  const created = event.created_at || (currentLanguage === "en" ? "unknown time" : "时间未知");
  const detail = readableWebTtsAudibilityDetail(event.note || event.route_summary || "");
  return [
    formatTextFor("tts.syncEventLine", "{status}：服务器最近一次 Web 测试播报记录（{created}）。", {
      status: heard,
      created
    }),
    detail
  ].filter(Boolean).join("\n");
}

async function syncWebTtsAudibility() {
  if (!window.fetch) return false;
  cancelWebTtsAudibilitySync();
  const requestId = webTtsAudibilitySyncSeq + 1;
  webTtsAudibilitySyncSeq = requestId;
  const abortController = typeof AbortController !== "undefined" ? new AbortController() : null;
  activeWebTtsAudibilitySyncAbortController = abortController;
  const isCurrentSync = () => webTtsAudibilitySyncSeq === requestId && (!abortController || !abortController.signal.aborted);
  const pending = textFor("tts.syncPending", "正在同步服务器最近一次 Web 听感记录。");
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
    const value = summarizeWebTtsAudibilityEvent(event) || textFor("tts.syncEmpty", "服务器还没有 Web 听感记录。");
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
  const value = textFor("tts.testPending", "等待确认：请听浏览器是否播出了刚才这句测试语音。");
  const utterance = textFor("tts.testUtterance", "Iris Web 发声测试。现在使用你选择的 Edge TTS 音色。");
  rememberWebTtsAudibility(value);
  setSubtitle(utterance, {
    speaker: "IRIS",
    resetFlow: true
  });
  speakerMuted = false;
  syncAudioSettingButtons();
  await unlockTts().catch(() => {});
  const testId = `web-tts-audibility-${Date.now()}`;
  setWebTtsButtonLoading(els.webTtsTest, true);
  try {
    await speak(
      utterance,
      testId,
      testId
    );
  } finally {
    setWebTtsButtonLoading(els.webTtsTest, false);
  }
}

function shouldTryServerTts() {
  const profile = selectedVoiceProfile();
  if (!profile || !supportedVoiceProfiles.has(profile)) return false;
  if (serverTtsFailureCount(profile) >= 2) return false;
  if (serverTtsProfiles.size) return serverTtsProfiles.has(profile);
  return serverTtsAvailable || supportedVoiceProfiles.has(profile);
}

const TTS_SEGMENT_TARGET_CHARS = 150;
const TTS_SEGMENT_MAX_CHARS = 220;
const TTS_PREFETCH_WINDOW = 2;

function splitLongSpeechUnit(value, maxChars = TTS_SEGMENT_MAX_CHARS) {
  const parts = [];
  let remaining = String(value || "").trim();
  while (remaining.length > maxChars) {
    const windowText = remaining.slice(0, maxChars + 1);
    const minimumBoundary = Math.max(36, Math.floor(maxChars * 0.45));
    let boundary = -1;
    for (const expression of [/[，,、：:\s]/g, /[。！？!?；;]/g]) {
      expression.lastIndex = 0;
      for (const match of windowText.matchAll(expression)) {
        const candidate = Number(match.index || 0) + String(match[0] || "").length;
        if (candidate >= minimumBoundary && candidate <= maxChars) boundary = Math.max(boundary, candidate);
      }
    }
    if (boundary < minimumBoundary) boundary = maxChars;
    const part = remaining.slice(0, boundary).trim();
    if (part) parts.push(part);
    remaining = remaining.slice(boundary).trim();
  }
  if (remaining) parts.push(remaining);
  return parts;
}

function splitProgressiveSpeechSegments(
  text,
  targetChars = TTS_SEGMENT_TARGET_CHARS,
  maxChars = TTS_SEGMENT_MAX_CHARS
) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  if (!value) return [];
  if (value.length <= targetChars) return [value];

  const sentenceUnits = [];
  let currentUnit = "";
  for (const character of value) {
    currentUnit += character;
    if (/[。！？!?；;\n]/.test(character)) {
      const unit = currentUnit.trim();
      if (unit) sentenceUnits.push(unit);
      currentUnit = "";
    }
  }
  if (currentUnit.trim()) sentenceUnits.push(currentUnit.trim());

  const boundedUnits = sentenceUnits.flatMap((unit) => (
    unit.length > maxChars ? splitLongSpeechUnit(unit, maxChars) : [unit]
  ));
  const segments = [];
  let segment = "";
  boundedUnits.forEach((unit) => {
    const joined = segment ? `${segment} ${unit}` : unit;
    if (segment && joined.length > targetChars) {
      segments.push(segment);
      segment = unit;
      return;
    }
    segment = joined;
  });
  if (segment) segments.push(segment);
  return segments.flatMap((item) => (
    item.length > maxChars ? splitLongSpeechUnit(item, maxChars) : [item]
  ));
}

function updateProgressiveTtsState(session, segmentIndex = -1) {
  if (!session) {
    delete document.body.dataset.ttsProgressive;
    delete document.body.dataset.ttsSegment;
    return;
  }
  session.currentSegment = Math.max(0, segmentIndex);
  document.body.dataset.ttsProgressive = session.segmentCount > 1 ? "true" : "false";
  document.body.dataset.ttsSegment = `${session.currentSegment + 1}/${session.segmentCount}`;
  if (session.segmentCount > 1 && currentVisualState === "ai_speaking" && els.state) {
    const label = currentLanguage === "en"
      ? `Speaking · ${session.currentSegment + 1}/${session.segmentCount}`
      : `回答中 · ${session.currentSegment + 1}/${session.segmentCount}`;
    els.state.textContent = label;
    if (els.statusIndicator) els.statusIndicator.setAttribute("aria-label", label);
  }
}

async function fetchServerTtsSegment({
  text,
  profile,
  abortController,
  isCurrentRequest,
  segmentIndex,
  segmentCount
}) {
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
  if (!isCurrentRequest()) return null;
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    const error = new Error(`server_tts_http_${response.status}`);
    error.status = response.status;
    throw error;
  }
  const provider = response.headers.get("X-Jarvis-TTS-Provider") || "server";
  const serverProfile = response.headers.get("X-Jarvis-Voice-Profile") || profile;
  const cached = response.headers.get("X-Jarvis-TTS-Cached") || "0";
  const blob = await response.blob();
  if (!isCurrentRequest()) return null;
  if (!blob.size) throw new Error("server_tts_empty_audio");
  logLine(
    `server TTS ready · segment=${segmentIndex + 1}/${segmentCount} `
    + `provider=${provider} profile=${serverProfile} bytes=${blob.size} cached=${cached}`
  );
  return {
    blob,
    provider,
    serverProfile,
    cached,
    segmentIndex
  };
}

async function speakWithServerTts(text, turnId, responseId, requestId) {
  if (!shouldTryServerTts() || !window.fetch || typeof Audio === "undefined") return false;
  const profile = selectedVoiceProfile();
  const segments = splitProgressiveSpeechSegments(text);
  if (!segments.length) return false;
  const abortController = typeof AbortController !== "undefined" ? new AbortController() : null;
  activeTtsAbortController = abortController;
  const isCurrentRequest = () => activeTtsRequestId === requestId && (!abortController || !abortController.signal.aborted);
  const clearAbortController = () => {
    if (activeTtsAbortController === abortController) activeTtsAbortController = null;
  };
  const session = {
    requestId,
    turnId,
    responseId,
    segmentCount: segments.length,
    currentSegment: 0,
    progressive: segments.length > 1,
    started: false,
    finished: false,
    totalBytes: 0,
    provider: "",
    serverProfile: profile
  };
  activeTtsSession = session;
  updateProgressiveTtsState(session, 0);
  const pendingSegments = new Map();
  const ensureSegment = (index) => {
    if (index < 0 || index >= segments.length) return Promise.resolve(null);
    if (!pendingSegments.has(index)) {
      pendingSegments.set(
        index,
        fetchServerTtsSegment({
          text: segments[index],
          profile,
          abortController,
          isCurrentRequest,
          segmentIndex: index,
          segmentCount: segments.length
        }).catch((error) => ({ error }))
      );
    }
    return pendingSegments.get(index);
  };
  const prefetchFrom = (index) => {
    for (let offset = 0; offset < TTS_PREFETCH_WINDOW; offset += 1) {
      ensureSegment(index + offset);
    }
  };
  const releasePendingSegments = () => {
    if (abortController && !abortController.signal.aborted) abortController.abort();
    pendingSegments.clear();
  };
  rememberTtsRoute({
    provider: "server_pending",
    voiceProfile: profile,
    source: "server_http_tts",
    summary: segments.length > 1
      ? `正在准备渐进式语音：profile=${profile}，segments=${segments.length}`
      : `正在请求服务器 TTS：profile=${profile}`
  });

  const finish = ({ failed = false, failure = null } = {}) => {
    if (session.finished || activeTtsRequestId !== requestId) return;
    session.finished = true;
    if (currentAudio) {
      releaseServerAudioSource(currentAudio, currentAudioUrl);
      currentAudio = null;
    } else if (currentAudioUrl) {
      releaseServerAudioSource(serverAudioElement, currentAudioUrl);
    }
    releasePendingSegments();
    activeTtsRequestId = 0;
    clearAbortController();
    if (activeTtsSession === session) activeTtsSession = null;
    updateProgressiveTtsState(null);
    agentSpeaking = false;
    PresenceController.setMouthOpen(0);
    if (failed) {
      rememberServerTtsFailure(session.serverProfile || profile);
      rememberTtsRoute({
        provider: "server_http_tts_failed",
        voiceProfile: session.serverProfile || profile,
        source: "server_http_tts",
        summary: `渐进式语音在 ${session.currentSegment + 1}/${session.segmentCount} 段中断：${failure || "unknown"}`
      });
      setState("tts_error");
      setSttHint("Edge TTS 没能播完这次回答，请稍后再试。");
    } else {
      rememberTtsRoute({
        provider: session.provider || "server",
        voiceProfile: session.serverProfile || profile,
        source: "server_http_tts",
        summary: session.progressive
          ? `渐进式语音播放完成：segments=${session.segmentCount}，${session.totalBytes} bytes`
          : `服务器 TTS 播放完成：${session.totalBytes} bytes`
      });
      clearServerTtsFailure(session.serverProfile || profile);
      if (currentRawState === "agent_speaking") {
        setState(running ? "listening" : "idle", { preserveSubtitle: true });
      }
    }
    logLine(
      failed
        ? `server TTS stopped · segment=${session.currentSegment + 1}/${session.segmentCount}`
        : `server TTS ended · segments=${session.segmentCount}`
    );
    send({ type: "playback_finished", turn_id: turnId, response_id: responseId });
  };

  const handleLateFailure = (error) => {
    if (!isCurrentRequest()) return;
    if (error && error.name === "AbortError") return;
    finish({ failed: true, failure: error && error.message });
  };

  const playSegment = async (index) => {
    if (!isCurrentRequest()) return false;
    updateProgressiveTtsState(session, index);
    prefetchFrom(index);
    const asset = await ensureSegment(index);
    pendingSegments.delete(index);
    if (!asset || !isCurrentRequest()) return false;
    if (asset.error) throw asset.error;
    session.currentSegment = index;
    session.provider = asset.provider;
    session.serverProfile = asset.serverProfile;
    session.totalBytes += asset.blob.size;

    const audio = getServerAudioElement();
    if (currentAudioUrl) releaseServerAudioSource(audio, currentAudioUrl);
    const audioUrl = URL.createObjectURL(asset.blob);
    currentAudioUrl = audioUrl;
    audio.src = audioUrl;
    audio.volume = outputVolume;
    audio.muted = false;
    audio.load();
    currentAudio = audio;

    const markStarted = () => {
      if (!isCurrentRequest() || session.started) return;
      session.started = true;
      serverAudioUnlocked = true;
      agentSpeaking = true;
      PresenceController.setMouthOpen(0.6);
      setState("agent_speaking");
      updateProgressiveTtsState(session, index);
      send({ type: "playback_started", turn_id: turnId, response_id: responseId });
    };
    audio.onplay = markStarted;
    audio.onended = () => {
      if (!isCurrentRequest()) return;
      if (currentAudio === audio) currentAudio = null;
      releaseServerAudioSource(audio, audioUrl);
      if (index + 1 >= segments.length) {
        finish();
        return;
      }
      playSegment(index + 1).catch(handleLateFailure);
    };
    audio.onerror = () => {
      if (!isCurrentRequest()) return;
      if (currentAudio === audio) currentAudio = null;
      releaseServerAudioSource(audio, audioUrl);
      handleLateFailure(new Error(`server_tts_playback_segment_${index + 1}_failed`));
    };
    try {
      await audio.play();
    } catch (error) {
      if (currentAudio === audio) currentAudio = null;
      releaseServerAudioSource(audio, audioUrl);
      throw error;
    }
    if (!isCurrentRequest()) {
      if (currentAudio === audio) currentAudio = null;
      releaseServerAudioSource(audio, audioUrl);
      return false;
    }
    markStarted();
    rememberTtsRoute({
      provider: asset.provider,
      voiceProfile: asset.serverProfile,
      source: "server_http_tts",
      summary: session.progressive
        ? `渐进式语音正在播放：segment=${index + 1}/${segments.length}，cached=${asset.cached}`
        : `服务器 TTS 已播放：provider=${asset.provider}，profile=${asset.serverProfile}，${asset.blob.size} bytes，cached=${asset.cached}`
    });
    logLine(
      `server TTS started · segment=${index + 1}/${segments.length} `
      + `provider=${asset.provider} profile=${asset.serverProfile} bytes=${asset.blob.size} cached=${asset.cached}`
    );
    return true;
  };

  try {
    prefetchFrom(0);
    return await playSegment(0);
  } catch (err) {
    if (err && err.name === "AbortError") {
      logLine("server TTS aborted");
      pendingSegments.clear();
      clearAbortController();
      return false;
    }
    releasePendingSegments();
    if (activeTtsSession === session) activeTtsSession = null;
    updateProgressiveTtsState(null);
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
  activeTtsSession = null;
  updateProgressiveTtsState(null);
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
    || activeTtsSession
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
    showConnectionRecoveryHint("connection.failed", "语音连接还没建立成功。网络恢复后再点一次就好。");
  }
}

function markMaintenanceAction(button) {
  if (!button) return;
  const group = button.closest(".maintenanceGrid");
  if (group) {
    group.dataset.lastAction = button.dataset.actionRole || button.id || "";
    group.querySelectorAll("button").forEach((node) => {
      if (node === button) node.dataset.lastAction = "true";
      else node.removeAttribute("data-last-action");
    });
  } else {
    button.dataset.lastAction = "true";
  }
}

function setMaintenanceActionLoading(button, loading) {
  if (!button) return;
  if (loading) {
    button.dataset.loading = "true";
    button.setAttribute("aria-busy", "true");
  } else {
    button.removeAttribute("data-loading");
    button.removeAttribute("aria-busy");
  }
}

async function runMaintenanceActionWithFeedback(button, action) {
  if (!button || button.dataset.loading === "true") return;
  const startedAt = typeof performance !== "undefined" ? performance.now() : Date.now();
  markMaintenanceAction(button);
  setMaintenanceActionLoading(button, true);
  try {
    await Promise.resolve(action());
  } finally {
    const now = typeof performance !== "undefined" ? performance.now() : Date.now();
    const remaining = MAINTENANCE_ACTION_MIN_BUSY_MS - (now - startedAt);
    if (remaining > 0) await new Promise((resolve) => window.setTimeout(resolve, remaining));
    setMaintenanceActionLoading(button, false);
  }
}

async function handleAccessSubmit(event) {
  if (event) event.preventDefault();
  const accessKey = els.accessToken && els.accessToken.value ? els.accessToken.value.trim() : "";
  if (!accessKey) {
    showAccessGate(textFor("access.empty", "请输入访问口令。"), "warning", "access.empty");
    focusAccessToken(40);
    return;
  }
  if (typeof navigator !== "undefined" && navigator && navigator.onLine === false) {
    showAccessGate(textFor("access.offline", "当前网络不可用，请稍后重试。"), "warning", "access.offline");
    return;
  }
  setAccessSubmitLoading(true);
  try {
    setAccessStatus(textFor("access.verifying", "正在确认你的私人空间。"), "loading", "access.verifying");
    const session = await requestAccessSession(accessKey);
    if (els.accessToken) els.accessToken.value = "";
    setAccessCodeVisible(false);
    completeSessionLogin(session.session_token, session.expires_at, session.subject_id);
    loadModelSettings().catch((err) => logLine(err.message || "model settings failed"));
  } catch (err) {
    const failureKey = accessFailureKey(err);
    showAccessGate(textFor(failureKey, accessFailureMessage(err)), "error", failureKey);
  } finally {
    setAccessSubmitLoading(false);
  }
}

function canvasConversationScope() {
  const record = currentConversationRecord();
  if (record && record.memory_mode === "temporary") {
    throw new Error("temporary_conversation_canvas_not_persisted");
  }
  return {
    conversationId: currentConversationId || "",
    projectId: String((record && record.project_id) || "")
  };
}

function canvasTitleFromContent(content) {
  const firstLine = String(content || "")
    .split(/\r?\n/)
    .map((line) => line.replace(/^#{1,6}\s+/, "").replace(/^[-*+]\s+/, "").trim())
    .find(Boolean);
  return (firstLine || textFor("canvas.untitled", "未命名画布")).slice(0, 96);
}

function canvasKindFromContent(content) {
  return /```[A-Za-z0-9_+.#-]*\s*\n[\s\S]+?```/.test(String(content || "")) ? "code" : "writing";
}

function canvasLanguageFromContent(content, kind) {
  if (kind !== "code") return "markdown";
  const match = String(content || "").match(/```([A-Za-z0-9_+.#-]+)/);
  return String((match && match[1]) || "plain").toLowerCase();
}

function canvasRequestPath(path) {
  return backendUrl(`/client/v1/canvases${path}`);
}

async function canvasJsonRequest(path, options = {}) {
  const response = await fetch(canvasRequestPath(path), {
    ...options,
    headers: {
      ...authHeaders(),
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {})
    }
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    handleUnauthorizedResponse(response);
    const error = new Error(String(payload.detail || `HTTP ${response.status}`));
    error.status = response.status;
    error.payload = payload;
    throw error;
  }
  return payload;
}

function setCanvasSaveStatus(key = "canvas.saved", tone = "saved", fallback = "") {
  if (!els.canvasSaveStatus) return;
  els.canvasSaveStatus.textContent = textFor(key, fallback || key);
  els.canvasSaveStatus.dataset.tone = tone;
}

function canvasDateLabel(value, options = {}) {
  const parsed = new Date(String(value || ""));
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleString(currentLanguage === "en" ? "en-US" : "zh-CN", {
    month: options.compact ? undefined : "short",
    day: options.compact ? undefined : "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function canvasWordCount(content) {
  const value = String(content || "");
  if (currentLanguage === "en") {
    return (value.trim().match(/\S+/g) || []).length;
  }
  return value.replace(/\s/g, "").length;
}

function updateCanvasDocumentMeta() {
  if (!currentCanvas) return;
  if (els.canvasHeaderTitle) {
    els.canvasHeaderTitle.textContent = String(currentCanvas.title || textFor("canvas.workspace", "创作空间"));
  }
  if (els.canvasRevisionBadge) {
    els.canvasRevisionBadge.textContent = `v${Math.max(1, Number(currentCanvas.revision) || 1)}`;
  }
  if (els.canvasWordCount) {
    els.canvasWordCount.textContent = formatTextFor(
      "canvas.wordCount",
      "{count} 字",
      { count: canvasWordCount(els.canvasEditor ? els.canvasEditor.value : currentCanvas.content) }
    );
  }
  if (els.canvasUpdatedAt) {
    els.canvasUpdatedAt.textContent = formatTextFor(
      "canvas.updated",
      "更新于 {time}",
      { time: canvasDateLabel(currentCanvas.updated_at, { compact: true }) }
    );
  }
}

function upsertCanvasListItem(canvas) {
  if (!canvas || !canvas.canvas_id) return;
  const index = canvasItems.findIndex((item) => item.canvas_id === canvas.canvas_id);
  const summary = { ...(index >= 0 ? canvasItems[index] : {}), ...canvas };
  delete summary.content;
  delete summary.version;
  if (index >= 0) canvasItems.splice(index, 1);
  canvasItems.unshift(summary);
}

function renderCanvasLibrary() {
  if (!els.canvasLibraryList) return;
  els.canvasLibraryList.replaceChildren();
  if (!canvasItems.length) {
    const empty = document.createElement("p");
    empty.className = "canvasLibraryEmpty";
    empty.textContent = textFor("canvas.emptyList", "还没有画布");
    els.canvasLibraryList.appendChild(empty);
    return;
  }
  canvasItems.forEach((canvas) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "canvasLibraryItem";
    button.dataset.canvasId = String(canvas.canvas_id || "");
    button.classList.toggle("isActive", Boolean(currentCanvas && currentCanvas.canvas_id === canvas.canvas_id));
    button.setAttribute("role", "listitem");
    const icon = document.createElement("span");
    icon.className = `canvasLibraryItemIcon is${canvas.kind === "code" ? "Code" : "Writing"}`;
    icon.textContent = canvas.kind === "code" ? "</>" : "Aa";
    const copy = document.createElement("span");
    copy.className = "canvasLibraryItemCopy";
    const title = document.createElement("strong");
    title.textContent = String(canvas.title || textFor("canvas.untitled", "未命名画布"));
    const meta = document.createElement("small");
    meta.textContent = `${canvas.kind === "code" ? textFor("canvas.code", "代码") : textFor("canvas.writing", "写作")} · ${canvasDateLabel(canvas.updated_at, { compact: true })}`;
    copy.append(title, meta);
    button.append(icon, copy);
    button.addEventListener("click", () => {
      openCanvasById(String(canvas.canvas_id || "")).catch((error) => {
        logLine(error.message || "canvas open failed");
      });
    });
    els.canvasLibraryList.appendChild(button);
  });
}

function setCanvasEmptyState(empty) {
  if (els.canvasEmptyState) els.canvasEmptyState.hidden = !empty;
  if (els.canvasEditorShell) els.canvasEditorShell.hidden = empty;
  if (els.canvasAssistPanel && empty) els.canvasAssistPanel.hidden = true;
  if (els.canvasWorkspace) els.canvasWorkspace.classList.toggle("hasCanvas", !empty);
}

function resetCanvasSuggestion() {
  canvasSuggestion = null;
  if (els.canvasSuggestionCard) els.canvasSuggestionCard.hidden = true;
  if (els.canvasSuggestionText) els.canvasSuggestionText.textContent = "";
}

function isCanvasPythonRunnable() {
  const kind = String((els.canvasKind && els.canvasKind.value) || (currentCanvas && currentCanvas.kind) || "");
  const language = String(
    (els.canvasLanguage && els.canvasLanguage.value) || (currentCanvas && currentCanvas.language) || ""
  ).trim().toLowerCase();
  return kind === "code" && ["python", "py", "python3"].includes(language);
}

function updateCanvasRunAvailability() {
  if (!els.canvasRun) return;
  els.canvasRun.hidden = !currentCanvas || !isCanvasPythonRunnable();
  if (els.canvasRun.getAttribute("aria-busy") !== "true") {
    els.canvasRun.textContent = textFor("canvas.run", "运行");
  }
}

function resetCanvasRun() {
  currentCanvasRun = null;
  if (els.canvasRunPanel) els.canvasRunPanel.hidden = true;
  if (els.canvasRunStatus) {
    els.canvasRunStatus.textContent = textFor("canvas.runWaiting", "等待运行");
    els.canvasRunStatus.dataset.status = "waiting";
  }
  if (els.canvasRunMeta) els.canvasRunMeta.textContent = "";
  if (els.canvasRunOutput) els.canvasRunOutput.replaceChildren();
  if (els.canvasRunArtifacts) {
    els.canvasRunArtifacts.replaceChildren();
    els.canvasRunArtifacts.hidden = true;
  }
  updateCanvasRunAvailability();
}

function canvasRunStatusLabel(status) {
  if (status === "completed") return textFor("canvas.runCompleted", "运行完成");
  if (status === "timeout") return textFor("canvas.runTimeout", "运行超时");
  if (status === "resource_limited") return textFor("canvas.runLimited", "已触发资源限制");
  return textFor("canvas.runFailed", "运行失败");
}

function formatCanvasArtifactSize(value) {
  const bytes = Math.max(0, Number(value) || 0);
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(bytes < 10 * 1024 ? 1 : 0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function appendCanvasRunStream(labelKey, fallback, content, tone = "standard") {
  if (!els.canvasRunOutput || !String(content || "")) return;
  const section = document.createElement("section");
  section.className = "canvasRunStream";
  section.dataset.tone = tone;
  const label = document.createElement("strong");
  label.textContent = textFor(labelKey, fallback);
  const pre = document.createElement("pre");
  pre.textContent = String(content);
  section.append(label, pre);
  els.canvasRunOutput.appendChild(section);
}

async function downloadCanvasArtifact(run, artifact, button) {
  if (!currentCanvas || !run || !artifact) return;
  if (button) {
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
  }
  try {
    const query = new URLSearchParams({ user_id: currentSubjectId() });
    const path = `/${encodeURIComponent(currentCanvas.canvas_id)}/runs/${encodeURIComponent(run.run_id)}/artifacts/${encodeURIComponent(artifact.artifact_id)}?${query}`;
    const response = await fetch(canvasRequestPath(path), { headers: authHeaders() });
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(`HTTP ${response.status}`);
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = String(artifact.filename || "iris-artifact");
    anchor.hidden = true;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    setCanvasSaveStatus("canvas.artifactFailed", "error", "文件下载失败，请稍后再试。");
    logLine(error.message || "canvas artifact download failed");
  } finally {
    if (button) {
      button.disabled = false;
      button.removeAttribute("aria-busy");
    }
  }
}

function renderCanvasRun(run) {
  if (!run || !els.canvasRunPanel) return;
  currentCanvasRun = run;
  const status = String(run.status || "failed");
  els.canvasRunPanel.hidden = false;
  if (els.canvasRunStatus) {
    els.canvasRunStatus.textContent = canvasRunStatusLabel(status);
    els.canvasRunStatus.dataset.status = status;
  }
  if (els.canvasRunMeta) {
    els.canvasRunMeta.textContent = formatTextFor(
      "canvas.runRevision",
      "基于 v{revision} · {duration} ms",
      {
        revision: Math.max(1, Number(run.revision) || 1),
        duration: Math.max(0, Number(run.duration_ms) || 0)
      }
    );
  }
  if (els.canvasRunOutput) {
    els.canvasRunOutput.replaceChildren();
    appendCanvasRunStream("canvas.stdout", "输出", run.stdout);
    appendCanvasRunStream("canvas.stderr", "错误", run.stderr, "error");
    if (!String(run.stdout || "") && !String(run.stderr || "")) {
      const empty = document.createElement("p");
      empty.className = "canvasRunEmpty";
      empty.textContent = textFor("canvas.runNoOutput", "程序已结束，没有文本输出。");
      els.canvasRunOutput.appendChild(empty);
    }
  }
  if (els.canvasRunArtifacts) {
    els.canvasRunArtifacts.replaceChildren();
    const artifacts = Array.isArray(run.artifacts) ? run.artifacts : [];
    els.canvasRunArtifacts.hidden = !artifacts.length;
    if (artifacts.length) {
      const title = document.createElement("strong");
      title.className = "canvasRunArtifactsTitle";
      title.textContent = textFor("canvas.artifacts", "生成的文件");
      els.canvasRunArtifacts.appendChild(title);
      artifacts.forEach((artifact) => {
        const row = document.createElement("div");
        row.className = "canvasRunArtifact";
        const copy = document.createElement("span");
        const name = document.createElement("strong");
        name.textContent = String(artifact.filename || "artifact");
        const size = document.createElement("small");
        size.textContent = formatCanvasArtifactSize(artifact.size_bytes);
        copy.append(name, size);
        const download = document.createElement("button");
        download.type = "button";
        download.textContent = textFor("canvas.download", "下载");
        download.addEventListener("click", () => {
          downloadCanvasArtifact(run, artifact, download);
        });
        row.append(copy, download);
        els.canvasRunArtifacts.appendChild(row);
      });
    }
  }
}

async function loadLatestCanvasRun() {
  if (!currentCanvas || !isCanvasPythonRunnable()) return;
  const canvasId = currentCanvas.canvas_id;
  try {
    const payload = await canvasJsonRequest(`/${encodeURIComponent(canvasId)}/runs?limit=1`);
    if (currentCanvas && currentCanvas.canvas_id === canvasId && Array.isArray(payload.items) && payload.items[0]) {
      renderCanvasRun(payload.items[0]);
    }
  } catch (error) {
    logLine(error.message || "canvas run history failed");
  }
}

async function runCurrentCanvas() {
  if (!currentCanvas || !isCanvasPythonRunnable() || !els.canvasRun) return;
  if (canvasDirty && !(await saveCurrentCanvas({ source: "before_run" }))) return;
  els.canvasRun.disabled = true;
  els.canvasRun.setAttribute("aria-busy", "true");
  els.canvasRun.textContent = textFor("canvas.running", "正在运行");
  if (els.canvasRunPanel) els.canvasRunPanel.hidden = false;
  if (els.canvasRunStatus) {
    els.canvasRunStatus.textContent = textFor("canvas.running", "正在运行");
    els.canvasRunStatus.dataset.status = "running";
  }
  try {
    const payload = await canvasJsonRequest(`/${encodeURIComponent(currentCanvas.canvas_id)}/runs`, {
      method: "POST",
      body: JSON.stringify({
        user_id: currentSubjectId(),
        client_id: voiceClientId(),
        expected_revision: currentCanvas.revision
      })
    });
    renderCanvasRun(payload.run || null);
  } catch (error) {
    if (error.status === 409) {
      await loadLatestCanvasAfterConflict(currentCanvas.canvas_id);
    } else {
      renderCanvasRun({
        status: "failed",
        revision: currentCanvas.revision,
        duration_ms: 0,
        stdout: "",
        stderr: textFor("canvas.runRequestFailed", "暂时无法运行这段代码。"),
        artifacts: []
      });
    }
  } finally {
    els.canvasRun.disabled = false;
    els.canvasRun.removeAttribute("aria-busy");
    updateCanvasRunAvailability();
  }
}

function populateCanvasEditor(canvas) {
  currentCanvas = canvas || null;
  canvasDirty = false;
  window.clearTimeout(canvasSaveTimer);
  canvasSaveTimer = 0;
  resetCanvasSuggestion();
  resetCanvasRun();
  if (!currentCanvas) {
    setCanvasEmptyState(true);
    if (els.canvasHeaderTitle) els.canvasHeaderTitle.textContent = textFor("canvas.workspace", "创作空间");
    renderCanvasLibrary();
    return;
  }
  setCanvasEmptyState(false);
  if (els.canvasTitle) els.canvasTitle.value = String(currentCanvas.title || "");
  if (els.canvasKind) els.canvasKind.value = currentCanvas.kind === "code" ? "code" : "writing";
  if (els.canvasLanguage) els.canvasLanguage.value = String(currentCanvas.language || "");
  if (els.canvasEditor) {
    els.canvasEditor.value = String(currentCanvas.content || "");
    els.canvasEditor.classList.toggle("isCode", currentCanvas.kind === "code");
  }
  setCanvasPreview(false);
  updateCanvasDocumentMeta();
  setCanvasSaveStatus("canvas.saved", "saved", "已保存");
  if (els.canvasAssistPanel) els.canvasAssistPanel.hidden = false;
  updateCanvasRunAvailability();
  renderCanvasLibrary();
}

async function loadCanvasLibrary() {
  const payload = await canvasJsonRequest("?limit=100");
  canvasItems = Array.isArray(payload.items) ? payload.items : [];
  renderCanvasLibrary();
  return canvasItems;
}

async function openCanvasById(canvasId) {
  if (!canvasId) return;
  if (currentCanvas && currentCanvas.canvas_id !== canvasId && canvasDirty) {
    const saved = await saveCurrentCanvas({ source: "switch" });
    if (!saved) return;
  }
  const payload = await canvasJsonRequest(`/${encodeURIComponent(canvasId)}`);
  populateCanvasEditor(payload.canvas || null);
  await loadLatestCanvasRun();
  if (window.matchMedia("(max-width: 760px)").matches && els.canvasWorkspace) {
    els.canvasWorkspace.classList.remove("libraryOpen");
  }
}

async function openCanvasWorkspace(options = {}) {
  if (!els.canvasWorkspace) return;
  canvasRestoreFocus = options.restoreFocus || document.activeElement;
  els.canvasWorkspace.hidden = false;
  els.canvasWorkspace.setAttribute("aria-hidden", "false");
  document.body.classList.add("canvasOpen");
  await loadCanvasLibrary();
  if (options.canvas && options.canvas.canvas_id) {
    upsertCanvasListItem(options.canvas);
    populateCanvasEditor(options.canvas);
  } else if (currentCanvas && canvasItems.some((item) => item.canvas_id === currentCanvas.canvas_id)) {
    await openCanvasById(currentCanvas.canvas_id);
  } else if (canvasItems.length) {
    await openCanvasById(canvasItems[0].canvas_id);
  } else {
    populateCanvasEditor(null);
    if (els.canvasWorkspace) els.canvasWorkspace.classList.add("libraryOpen");
  }
}

async function closeCanvasWorkspace() {
  if (!els.canvasWorkspace || els.canvasWorkspace.hidden) return;
  if (canvasDirty) {
    const saved = await saveCurrentCanvas({ source: "close" });
    if (!saved) return;
  }
  closeCanvasVersionDrawer();
  closeCanvasDeletePanel();
  if (els.canvasAssistPanel) els.canvasAssistPanel.hidden = true;
  els.canvasWorkspace.hidden = true;
  els.canvasWorkspace.setAttribute("aria-hidden", "true");
  els.canvasWorkspace.classList.remove("libraryOpen", "assistOpen");
  document.body.classList.remove("canvasOpen");
  if (canvasRestoreFocus && typeof canvasRestoreFocus.focus === "function") {
    canvasRestoreFocus.focus({ preventScroll: true });
  }
}

async function createCanvasFromContent(content, options = {}) {
  const scope = canvasConversationScope();
  const cleanContent = String(content || "");
  const kind = options.kind || canvasKindFromContent(cleanContent);
  const payload = await canvasJsonRequest("", {
    method: "POST",
    body: JSON.stringify({
      user_id: currentSubjectId(),
      client_id: voiceClientId(),
      conversation_id: scope.conversationId,
      project_id: scope.projectId,
      source_turn_id: String(options.sourceTurnId || ""),
      title: String(options.title || canvasTitleFromContent(cleanContent)),
      content: cleanContent,
      kind,
      language: String(options.language || canvasLanguageFromContent(cleanContent, kind))
    })
  });
  const canvas = payload.canvas;
  upsertCanvasListItem(canvas);
  await openCanvasWorkspace({ canvas, restoreFocus: options.restoreFocus });
  return canvas;
}

async function createBlankCanvas() {
  return createCanvasFromContent("", {
    title: textFor("canvas.untitled", "未命名画布"),
    kind: "writing",
    language: "markdown",
    restoreFocus: document.activeElement
  });
}

function canvasDraftSnapshot() {
  if (!currentCanvas) return null;
  return {
    title: String((els.canvasTitle && els.canvasTitle.value) || textFor("canvas.untitled", "未命名画布")).trim(),
    content: String((els.canvasEditor && els.canvasEditor.value) || ""),
    kind: els.canvasKind && els.canvasKind.value === "code" ? "code" : "writing",
    language: String((els.canvasLanguage && els.canvasLanguage.value) || "").trim()
  };
}

function scheduleCanvasSave(delay = 720) {
  window.clearTimeout(canvasSaveTimer);
  canvasSaveTimer = window.setTimeout(() => {
    canvasSaveTimer = 0;
    saveCurrentCanvas({ source: "autosave" }).catch((error) => {
      logLine(error.message || "canvas autosave failed");
    });
  }, delay);
}

function markCanvasDirty() {
  if (!currentCanvas) return;
  canvasDirty = true;
  resetCanvasRun();
  setCanvasSaveStatus("canvas.unsaved", "dirty", "有未保存修改");
  updateCanvasDocumentMeta();
  if (els.canvasEditor && els.canvasKind) {
    els.canvasEditor.classList.toggle("isCode", els.canvasKind.value === "code");
  }
  if (els.canvasPreview && !els.canvasPreview.hidden) renderCanvasPreview();
  scheduleCanvasSave();
}

async function loadLatestCanvasAfterConflict(canvasId) {
  const latest = await canvasJsonRequest(`/${encodeURIComponent(canvasId)}`);
  populateCanvasEditor(latest.canvas || null);
  setCanvasSaveStatus("canvas.conflict", "warning", "画布已在别处更新，已载入最新版");
  return false;
}

async function saveCurrentCanvas(options = {}) {
  window.clearTimeout(canvasSaveTimer);
  canvasSaveTimer = 0;
  if (!currentCanvas || !canvasDirty) return true;
  if (canvasSavePromise) {
    await canvasSavePromise;
    return canvasDirty ? saveCurrentCanvas(options) : true;
  }
  const canvasId = currentCanvas.canvas_id;
  const expectedRevision = Number(currentCanvas.revision) || 1;
  const draft = canvasDraftSnapshot();
  canvasDirty = false;
  setCanvasSaveStatus("canvas.saving", "saving", "正在保存");
  canvasSavePromise = (async () => {
    try {
      const payload = await canvasJsonRequest(`/${encodeURIComponent(canvasId)}`, {
        method: "PATCH",
        body: JSON.stringify({
          user_id: currentSubjectId(),
          client_id: voiceClientId(),
          expected_revision: expectedRevision,
          source: String(options.source || "manual").slice(0, 32),
          ...draft
        })
      });
      const saved = payload.canvas;
      currentCanvas = saved;
      resetCanvasRun();
      upsertCanvasListItem(saved);
      if (!canvasDirty) {
        if (els.canvasTitle) els.canvasTitle.value = saved.title || "";
        if (els.canvasKind) els.canvasKind.value = saved.kind || "writing";
        if (els.canvasLanguage) els.canvasLanguage.value = saved.language || "";
        if (els.canvasEditor) els.canvasEditor.value = saved.content || "";
        setCanvasSaveStatus("canvas.saved", "saved", "已保存");
      } else {
        setCanvasSaveStatus("canvas.unsaved", "dirty", "有未保存修改");
      }
      updateCanvasDocumentMeta();
      renderCanvasLibrary();
      return true;
    } catch (error) {
      if (error.status === 409) return loadLatestCanvasAfterConflict(canvasId);
      canvasDirty = true;
      setCanvasSaveStatus("canvas.saveFailed", "error", "保存失败，请稍后再试");
      scheduleCanvasSave(1800);
      return false;
    } finally {
      canvasSavePromise = null;
    }
  })();
  return canvasSavePromise;
}

function appendCanvasPreviewParagraph(container, lines) {
  const text = lines.join("\n").trim();
  if (!text) return;
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  container.appendChild(paragraph);
}

function renderCanvasPreview() {
  if (!els.canvasPreview || !els.canvasEditor) return;
  els.canvasPreview.replaceChildren();
  const content = els.canvasEditor.value || "";
  const kind = els.canvasKind && els.canvasKind.value === "code" ? "code" : "writing";
  if (kind === "code") {
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = content.replace(/^```[A-Za-z0-9_+.#-]*\s*\n?/, "").replace(/\n?```\s*$/, "");
    pre.appendChild(code);
    els.canvasPreview.appendChild(pre);
    return;
  }
  const lines = content.split(/\r?\n/);
  let paragraph = [];
  let codeLines = [];
  let inCode = false;
  lines.forEach((line) => {
    if (/^```/.test(line.trim())) {
      if (inCode) {
        const pre = document.createElement("pre");
        const code = document.createElement("code");
        code.textContent = codeLines.join("\n");
        pre.appendChild(code);
        els.canvasPreview.appendChild(pre);
        codeLines = [];
      } else {
        appendCanvasPreviewParagraph(els.canvasPreview, paragraph);
        paragraph = [];
      }
      inCode = !inCode;
      return;
    }
    if (inCode) {
      codeLines.push(line);
      return;
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    const listItem = line.match(/^[-*+]\s+(.+)$/);
    if (heading) {
      appendCanvasPreviewParagraph(els.canvasPreview, paragraph);
      paragraph = [];
      const node = document.createElement(heading[1].length === 1 ? "h1" : heading[1].length === 2 ? "h2" : "h3");
      node.textContent = heading[2];
      els.canvasPreview.appendChild(node);
    } else if (listItem) {
      appendCanvasPreviewParagraph(els.canvasPreview, paragraph);
      paragraph = [];
      let list = els.canvasPreview.lastElementChild;
      if (!list || list.tagName !== "UL") {
        list = document.createElement("ul");
        els.canvasPreview.appendChild(list);
      }
      const item = document.createElement("li");
      item.textContent = listItem[1];
      list.appendChild(item);
    } else if (!line.trim()) {
      appendCanvasPreviewParagraph(els.canvasPreview, paragraph);
      paragraph = [];
    } else {
      paragraph.push(line);
    }
  });
  if (codeLines.length) {
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = codeLines.join("\n");
    pre.appendChild(code);
    els.canvasPreview.appendChild(pre);
  }
  appendCanvasPreviewParagraph(els.canvasPreview, paragraph);
}

function setCanvasPreview(enabled) {
  const active = Boolean(enabled);
  if (els.canvasEditor) els.canvasEditor.hidden = active;
  if (els.canvasPreview) {
    els.canvasPreview.hidden = !active;
    if (active) renderCanvasPreview();
  }
  if (els.canvasPreviewToggle) {
    els.canvasPreviewToggle.textContent = active
      ? textFor("canvas.edit", "编辑")
      : textFor("canvas.preview", "预览");
    els.canvasPreviewToggle.setAttribute("aria-pressed", active ? "true" : "false");
  }
}

function applyCanvasFormat(kind) {
  if (!els.canvasEditor || els.canvasEditor.hidden) return;
  const input = els.canvasEditor;
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const selected = input.value.slice(start, end);
  let prefix = "";
  let suffix = "";
  if (kind === "bold") {
    prefix = "**";
    suffix = "**";
  } else if (kind === "italic") {
    prefix = "_";
    suffix = "_";
  } else if (kind === "heading") {
    prefix = "## ";
  } else if (kind === "list") {
    prefix = "- ";
  }
  input.setRangeText(`${prefix}${selected}${suffix}`, start, end, "end");
  input.focus();
  markCanvasDirty();
}

function updateCanvasSelectionStatus() {
  if (!els.canvasEditor) return;
  canvasSelection = {
    start: Math.max(0, els.canvasEditor.selectionStart || 0),
    end: Math.max(0, els.canvasEditor.selectionEnd || 0)
  };
  const count = Math.max(0, canvasSelection.end - canvasSelection.start);
  if (els.canvasSelectionStatus) {
    els.canvasSelectionStatus.textContent = count
      ? formatTextFor("canvas.assistSelection", "将只修改已选择的 {count} 个字符", { count })
      : textFor("canvas.assistWhole", "将修改整篇内容");
  }
}

function openCanvasAssistPanel() {
  if (!currentCanvas || !els.canvasAssistPanel) return;
  updateCanvasSelectionStatus();
  resetCanvasSuggestion();
  els.canvasAssistPanel.hidden = false;
  if (els.canvasWorkspace) els.canvasWorkspace.classList.add("assistOpen");
  if (els.canvasAssistInput) els.canvasAssistInput.focus({ preventScroll: true });
}

function closeCanvasAssistPanel() {
  if (els.canvasAssistPanel) els.canvasAssistPanel.hidden = true;
  if (els.canvasWorkspace) els.canvasWorkspace.classList.remove("assistOpen");
  resetCanvasSuggestion();
}

async function requestCanvasAssistPreview() {
  if (!currentCanvas || !els.canvasAssistInput) return;
  const instruction = els.canvasAssistInput.value.trim();
  if (!instruction) {
    els.canvasAssistInput.focus();
    return;
  }
  if (canvasDirty && !(await saveCurrentCanvas({ source: "before_assist" }))) return;
  updateCanvasSelectionStatus();
  if (els.canvasAssistSubmit) {
    els.canvasAssistSubmit.disabled = true;
    els.canvasAssistSubmit.setAttribute("aria-busy", "true");
  }
  try {
    const payload = await canvasJsonRequest(`/${encodeURIComponent(currentCanvas.canvas_id)}/assist-preview`, {
      method: "POST",
      body: JSON.stringify({
        user_id: currentSubjectId(),
        client_id: voiceClientId(),
        expected_revision: currentCanvas.revision,
        instruction,
        selection_start: canvasSelection.end > canvasSelection.start ? canvasSelection.start : null,
        selection_end: canvasSelection.end > canvasSelection.start ? canvasSelection.end : null
      })
    });
    canvasSuggestion = payload.suggestion || null;
    if (els.canvasSuggestionText) {
      els.canvasSuggestionText.textContent = String(
        (canvasSuggestion && (canvasSuggestion.suggestion || canvasSuggestion.preview_content)) || ""
      );
    }
    if (els.canvasSuggestionCard) els.canvasSuggestionCard.hidden = !canvasSuggestion;
  } catch (error) {
    if (error.status === 409) {
      await loadLatestCanvasAfterConflict(currentCanvas.canvas_id);
    } else {
      setCanvasSaveStatus("canvas.assistFailed", "error", "Iris 暂时没有给出修改建议。");
    }
  } finally {
    if (els.canvasAssistSubmit) {
      els.canvasAssistSubmit.disabled = false;
      els.canvasAssistSubmit.removeAttribute("aria-busy");
    }
  }
}

async function applyCanvasSuggestion() {
  if (!canvasSuggestion || !currentCanvas) return;
  if (Number(canvasSuggestion.base_revision) !== Number(currentCanvas.revision)) {
    await loadLatestCanvasAfterConflict(currentCanvas.canvas_id);
    return;
  }
  if (els.canvasEditor) els.canvasEditor.value = String(canvasSuggestion.preview_content || "");
  canvasDirty = true;
  resetCanvasSuggestion();
  const saved = await saveCurrentCanvas({ source: "ai_apply" });
  if (saved) {
    if (els.canvasAssistInput) els.canvasAssistInput.value = "";
    setCanvasSaveStatus("canvas.saved", "saved", "已保存");
  }
}

function closeCanvasVersionDrawer() {
  if (!els.canvasVersionDrawer) return;
  els.canvasVersionDrawer.hidden = true;
  els.canvasVersionDrawer.setAttribute("aria-hidden", "true");
  if (els.canvasWorkspace) els.canvasWorkspace.classList.remove("versionsOpen");
}

function renderCanvasVersions(items) {
  if (!els.canvasVersionList) return;
  els.canvasVersionList.replaceChildren();
  items.forEach((version) => {
    const card = document.createElement("article");
    card.className = "canvasVersionItem";
    card.setAttribute("role", "listitem");
    const heading = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `v${version.revision}`;
    const time = document.createElement("span");
    time.textContent = canvasDateLabel(version.created_at);
    heading.append(title, time);
    const meta = document.createElement("p");
    meta.textContent = `${version.source || "manual"} · ${version.char_count || 0} ${currentLanguage === "en" ? "chars" : "字符"}`;
    const preview = document.createElement("pre");
    preview.hidden = true;
    const actions = document.createElement("div");
    const view = document.createElement("button");
    view.type = "button";
    view.textContent = currentLanguage === "en" ? "View" : "查看";
    view.addEventListener("click", async () => {
      view.disabled = true;
      try {
        const payload = await canvasJsonRequest(
          `/${encodeURIComponent(currentCanvas.canvas_id)}/versions/${encodeURIComponent(version.revision)}`
        );
        preview.textContent = String((payload.canvas && payload.canvas.content) || "");
        preview.hidden = !preview.hidden;
      } finally {
        view.disabled = false;
      }
    });
    const restore = document.createElement("button");
    restore.type = "button";
    restore.textContent = Number(version.revision) === Number(currentCanvas.revision)
      ? textFor("canvas.current", "当前版本")
      : textFor("canvas.restore", "恢复为新版本");
    restore.disabled = Number(version.revision) === Number(currentCanvas.revision);
    restore.addEventListener("click", () => {
      restoreCanvasVersion(Number(version.revision), restore).catch((error) => {
        logLine(error.message || "canvas restore failed");
      });
    });
    actions.append(view, restore);
    card.append(heading, meta, preview, actions);
    els.canvasVersionList.appendChild(card);
  });
}

async function openCanvasVersionDrawer() {
  if (!currentCanvas || !els.canvasVersionDrawer) return;
  if (canvasDirty && !(await saveCurrentCanvas({ source: "before_history" }))) return;
  const payload = await canvasJsonRequest(`/${encodeURIComponent(currentCanvas.canvas_id)}/versions?limit=200`);
  renderCanvasVersions(Array.isArray(payload.items) ? payload.items : []);
  els.canvasVersionDrawer.hidden = false;
  els.canvasVersionDrawer.setAttribute("aria-hidden", "false");
  if (els.canvasWorkspace) els.canvasWorkspace.classList.add("versionsOpen");
}

async function restoreCanvasVersion(revision, button) {
  if (!currentCanvas) return;
  if (button) button.disabled = true;
  try {
    const payload = await canvasJsonRequest(`/${encodeURIComponent(currentCanvas.canvas_id)}/restore`, {
      method: "POST",
      body: JSON.stringify({
        user_id: currentSubjectId(),
        client_id: voiceClientId(),
        revision,
        expected_revision: currentCanvas.revision
      })
    });
    populateCanvasEditor(payload.canvas || null);
    await openCanvasVersionDrawer();
  } catch (error) {
    if (error.status === 409) await loadLatestCanvasAfterConflict(currentCanvas.canvas_id);
    else throw error;
  } finally {
    if (button) button.disabled = false;
  }
}

async function exportCurrentCanvas() {
  if (!currentCanvas) return;
  if (canvasDirty && !(await saveCurrentCanvas({ source: "before_export" }))) return;
  const format = currentCanvas.kind === "code" ? "source" : "markdown";
  try {
    const response = await fetch(
      canvasRequestPath(`/${encodeURIComponent(currentCanvas.canvas_id)}/export?format=${encodeURIComponent(format)}`),
      { headers: authHeaders() }
    );
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(`HTTP ${response.status}`);
    }
    const blob = await response.blob();
    const disposition = response.headers.get("content-disposition") || "";
    const match = disposition.match(/filename="?([^";]+)"?/i);
    const filename = (match && match[1]) || `${currentCanvas.title || "iris-canvas"}.${format === "source" ? "txt" : "md"}`;
    const href = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(href), 1200);
  } catch (error) {
    setCanvasSaveStatus("canvas.exportFailed", "error", "导出失败，请稍后再试。");
  }
}

function closeCanvasDeletePanel() {
  canvasDeleteToken = "";
  if (els.canvasDeletePanel) els.canvasDeletePanel.hidden = true;
}

async function openCanvasDeletePanel() {
  if (!currentCanvas || !els.canvasDeletePanel) return;
  if (canvasDirty && !(await saveCurrentCanvas({ source: "before_delete" }))) return;
  const preview = await canvasJsonRequest(`/${encodeURIComponent(currentCanvas.canvas_id)}/deletion-preview`, {
    method: "POST",
    body: JSON.stringify({
      user_id: currentSubjectId(),
      client_id: voiceClientId()
    })
  });
  canvasDeleteToken = String(preview.confirmation_token || "");
  if (els.canvasDeleteScope) {
    els.canvasDeleteScope.textContent = formatTextFor(
      "canvas.deleteScope",
      "将删除「{title}」及其 {count} 个历史版本。",
      { title: preview.title || currentCanvas.title, count: preview.version_count || currentCanvas.version_count || 1 }
    );
  }
  els.canvasDeletePanel.hidden = false;
  if (els.canvasDeleteCancel) els.canvasDeleteCancel.focus({ preventScroll: true });
}

async function confirmCanvasDelete() {
  if (!currentCanvas || !canvasDeleteToken || !els.canvasDeleteConfirm) return;
  const canvasId = currentCanvas.canvas_id;
  els.canvasDeleteConfirm.disabled = true;
  try {
    await canvasJsonRequest(`/${encodeURIComponent(canvasId)}`, {
      method: "DELETE",
      body: JSON.stringify({
        user_id: currentSubjectId(),
        client_id: voiceClientId(),
        confirmation_token: canvasDeleteToken
      })
    });
    canvasItems = canvasItems.filter((item) => item.canvas_id !== canvasId);
    currentCanvas = null;
    closeCanvasDeletePanel();
    renderCanvasLibrary();
    if (canvasItems.length) await openCanvasById(canvasItems[0].canvas_id);
    else populateCanvasEditor(null);
  } catch (error) {
    if (error.status === 409) {
      closeCanvasDeletePanel();
      await loadLatestCanvasAfterConflict(canvasId);
    } else {
      throw error;
    }
  } finally {
    els.canvasDeleteConfirm.disabled = false;
  }
}

function registerVoiceServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  const registrationPromise = navigator.serviceWorker
    .register(String(IRIS_PUBLIC_CONFIG.serviceWorkerUrl || `/voice/service-worker.js?v=${VOICE_UI_VERSION}`), {
      scope: String(IRIS_PUBLIC_CONFIG.serviceWorkerScope || "/voice"),
      updateViaCache: "none"
    })
    .then((registration) => {
      proactivePushRegistration = registration;
      scheduleIdleWork(() => registration.update().catch(() => {}), { timeout: 2200 });
      if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
      return registration;
    })
    .catch(() => {});
  return registrationPromise;
}

els.main.addEventListener("click", () => handleMainButton().catch((err) => logLine(err.message || "main action failed")));
if (els.dockMic) {
  els.dockMic.addEventListener("click", () => handleDockVoiceCommand().catch((err) => logLine(err.message || "dock voice failed")));
}
if (els.conversationShare) {
  els.conversationShare.addEventListener("click", () => {
    const record = currentConversationRecord();
    if (record) openConversationShareDialog(record, els.conversationShare);
  });
}
if (els.voiceCall) {
  els.voiceCall.addEventListener("click", () => {
    if (els.dockMic) els.dockMic.click();
  });
}
if (els.capabilityToggle) {
  els.capabilityToggle.addEventListener("click", () => {
    const isOpen = Boolean(els.capabilityPanel && !els.capabilityPanel.hidden);
    setCapabilityPanelOpen(!isOpen);
  });
}
if (els.capabilityPanel) {
  els.capabilityPanel.addEventListener("click", (event) => {
    const button = event.target instanceof HTMLElement ? event.target.closest("button") : null;
    if (!button || !els.capabilityPanel.contains(button)) return;
    const thinkingMode = button.dataset.thinkingMode || "";
    if (thinkingMode) {
      setThinkingMode(thinkingMode);
      setCapabilityPanelOpen(false);
      return;
    }
    const prompt = button.dataset.capabilityPrompt || "";
    const action = button.dataset.capabilityAction || "";
    if (prompt) {
      primeComposerFromCapability(prompt);
      return;
    }
    if (action === "file") {
      setCapabilityPanelOpen(false);
      if (els.documentUpload) els.documentUpload.click();
      return;
    }
    if (action === "canvas") {
      setCapabilityPanelOpen(false);
      try {
        canvasConversationScope();
      } catch (error) {
        setSubtitle(textFor("canvas.temporaryBlocked", "临时对话不会保存持久画布。"), {
          speaker: "IRIS",
          resetFlow: true
        });
        return;
      }
      openCanvasWorkspace({ restoreFocus: button }).catch((error) => {
        setSubtitle(textFor("canvas.loadFailed", "暂时无法载入画布。"), {
          speaker: "IRIS",
          resetFlow: true
        });
        logLine(error.message || "canvas workspace failed");
      });
      return;
    }
    if (action === "thinking") {
      const isOpen = Boolean(els.thinkingModePicker && !els.thinkingModePicker.hidden);
      setThinkingModePickerOpen(!isOpen, { focusActive: !isOpen });
      return;
    }
    if (action === "memory") openMemorySettings();
  });
}
if (els.thinkingModeStatus) {
  els.thinkingModeStatus.addEventListener("click", () => {
    setCapabilityPanelOpen(true);
    setThinkingModePickerOpen(true, { focusActive: true });
  });
}
if (els.capabilityCustom) {
  els.capabilityCustom.addEventListener("click", openDetails);
}
if (els.canvasClose) {
  els.canvasClose.addEventListener("click", () => {
    closeCanvasWorkspace().catch((error) => logLine(error.message || "canvas close failed"));
  });
}
if (els.canvasLibraryToggle) {
  els.canvasLibraryToggle.addEventListener("click", () => {
    if (els.canvasWorkspace) els.canvasWorkspace.classList.toggle("libraryOpen");
  });
}
[els.canvasNew, els.canvasEmptyCreate].filter(Boolean).forEach((button) => {
  button.addEventListener("click", () => {
    button.disabled = true;
    createBlankCanvas()
      .then(() => {
        if (els.canvasWorkspace) els.canvasWorkspace.classList.remove("libraryOpen");
        if (els.canvasTitle) {
          els.canvasTitle.focus({ preventScroll: true });
          els.canvasTitle.select();
        }
      })
      .catch((error) => {
        if (error.message === "temporary_conversation_canvas_not_persisted") {
          setSubtitle(textFor("canvas.temporaryBlocked", "临时对话不会保存持久画布。"), {
            speaker: "IRIS",
            resetFlow: true
          });
        } else {
          setCanvasSaveStatus("canvas.loadFailed", "error", "暂时无法载入画布。");
        }
      })
      .finally(() => {
        button.disabled = false;
      });
  });
});
[els.canvasTitle, els.canvasEditor, els.canvasLanguage].filter(Boolean).forEach((input) => {
  input.addEventListener("input", markCanvasDirty);
});
if (els.canvasKind) {
  els.canvasKind.addEventListener("change", () => {
    if (els.canvasLanguage && !els.canvasLanguage.value.trim()) {
      els.canvasLanguage.value = els.canvasKind.value === "code" ? "plain" : "markdown";
    }
    markCanvasDirty();
  });
}
if (els.canvasEditor) {
  ["select", "keyup", "mouseup"].forEach((eventName) => {
    els.canvasEditor.addEventListener(eventName, updateCanvasSelectionStatus);
  });
}
if (els.canvasWorkspace) {
  els.canvasWorkspace.addEventListener("click", (event) => {
    const button = event.target instanceof HTMLElement
      ? event.target.closest("[data-canvas-format]")
      : null;
    if (!button || !els.canvasWorkspace.contains(button)) return;
    applyCanvasFormat(String(button.dataset.canvasFormat || ""));
  });
}
if (els.canvasPreviewToggle) {
  els.canvasPreviewToggle.addEventListener("click", () => {
    setCanvasPreview(Boolean(els.canvasPreview && els.canvasPreview.hidden));
  });
}
if (els.canvasRun) {
  els.canvasRun.addEventListener("click", () => {
    runCurrentCanvas().catch((error) => logLine(error.message || "canvas run failed"));
  });
}
if (els.canvasRunClose) {
  els.canvasRunClose.addEventListener("click", () => {
    if (els.canvasRunPanel) els.canvasRunPanel.hidden = true;
  });
}
if (els.canvasAssistOpen) els.canvasAssistOpen.addEventListener("click", openCanvasAssistPanel);
if (els.canvasAssistClose) els.canvasAssistClose.addEventListener("click", closeCanvasAssistPanel);
if (els.canvasAssistSubmit) {
  els.canvasAssistSubmit.addEventListener("click", () => {
    requestCanvasAssistPreview().catch((error) => logLine(error.message || "canvas assist failed"));
  });
}
if (els.canvasSuggestionDiscard) els.canvasSuggestionDiscard.addEventListener("click", resetCanvasSuggestion);
if (els.canvasSuggestionApply) {
  els.canvasSuggestionApply.addEventListener("click", () => {
    applyCanvasSuggestion().catch((error) => logLine(error.message || "canvas apply failed"));
  });
}
if (els.canvasVersions) {
  els.canvasVersions.addEventListener("click", () => {
    openCanvasVersionDrawer().catch((error) => logLine(error.message || "canvas versions failed"));
  });
}
if (els.canvasVersionClose) els.canvasVersionClose.addEventListener("click", closeCanvasVersionDrawer);
if (els.canvasExport) {
  els.canvasExport.addEventListener("click", () => {
    exportCurrentCanvas().catch((error) => logLine(error.message || "canvas export failed"));
  });
}
if (els.canvasDelete) {
  els.canvasDelete.addEventListener("click", () => {
    openCanvasDeletePanel().catch((error) => logLine(error.message || "canvas delete preview failed"));
  });
}
if (els.canvasDeleteCancel) els.canvasDeleteCancel.addEventListener("click", closeCanvasDeletePanel);
if (els.canvasDeleteConfirm) {
  els.canvasDeleteConfirm.addEventListener("click", () => {
    confirmCanvasDelete().catch((error) => logLine(error.message || "canvas delete failed"));
  });
}
if (els.detailsToggle) els.detailsToggle.addEventListener("click", openDetails);
if (els.closeDetails) els.closeDetails.addEventListener("click", closeDetails);
if (els.accessForm) {
  els.accessForm.addEventListener("submit", (event) => {
    handleAccessSubmit(event).catch((err) => {
      const failureKey = accessFailureKey(err);
      showAccessGate(textFor(failureKey, accessFailureMessage(err)), "error", failureKey);
    });
  });
}
if (els.accessToken) {
  els.accessToken.addEventListener("input", () => {
    resetAccessFieldFeedback();
    refreshAccessFormatFeedback();
  });
  els.accessToken.addEventListener("focus", () => setAccessInputFocused(true));
  els.accessToken.addEventListener("blur", () => setAccessInputFocused(false));
}
if (els.accessReveal) {
  els.accessReveal.addEventListener("click", toggleAccessCodeVisibility);
}
if (els.accessBack) {
  els.accessBack.addEventListener("click", () => {
    if (els.accessGate && els.accessGate.dataset.submitting === "true") return;
    if (els.accessToken) els.accessToken.blur();
    setAccessInputFocused(false);
  });
}
if (els.diagnosticsCopy) {
  els.diagnosticsCopy.addEventListener("click", () => {
    copyDiagnostics().catch((err) => {
      setDiagnosticsStatus(textFor("debug.copyFailed", "复制失败，请稍后再试。"), "error", "debug.copyFailed");
      logLine(err.message || "diagnostics copy failed");
      els.diagnosticsCopy.disabled = false;
      els.diagnosticsCopy.removeAttribute("data-loading");
      els.diagnosticsCopy.setAttribute("aria-busy", "false");
    });
  });
}
if (els.diagnosticsClear) {
  els.diagnosticsClear.addEventListener("click", clearDiagnosticsLog);
}
if (els.memoryRefresh) {
  els.memoryRefresh.addEventListener("click", () => {
    refreshMemoryControlCenter().catch((err) => logLine(err.message || "memory refresh failed"));
  });
}
if (els.conversationNew) {
  els.conversationNew.addEventListener("click", () => {
    createNewConversation().catch((error) => {
      setConversationFeedback(`${currentLanguage === "en" ? "Could not create conversation" : "新建会话失败"}：${error.message || ""}`, "error");
    });
  });
}
if (els.conversationTemporary) {
  els.conversationTemporary.addEventListener("click", () => {
    createNewConversation({ memoryMode: "temporary" }).catch((error) => {
      setConversationFeedback(
        `${currentLanguage === "en" ? "Could not create temporary chat" : "新建临时对话失败"}：${error.message || ""}`,
        "error"
      );
    });
  });
}
if (els.projectSelect) {
  els.projectSelect.addEventListener("change", () => {
    activateProjectSpace(els.projectSelect.value).catch((error) => {
      setConversationFeedback(
        `${currentLanguage === "en" ? "Could not switch project" : "切换项目失败"}：${error.message || ""}`,
        "error"
      );
    });
  });
}
if (els.projectNew) {
  els.projectNew.addEventListener("click", () => {
    createNewProject().catch((error) => {
      setConversationFeedback(`${currentLanguage === "en" ? "Could not create project" : "新建项目失败"}：${error.message || ""}`, "error");
    });
  });
}
if (els.projectEditor) {
  els.projectEditor.addEventListener("submit", (event) => {
    saveCurrentProject(event).catch((error) => {
      setConversationFeedback(`${currentLanguage === "en" ? "Save failed" : "保存失败"}：${error.message || ""}`, "error");
    });
  });
}
if (els.projectTaskAdd) {
  els.projectTaskAdd.addEventListener("click", () => {
    addProjectTask().catch((error) => {
      setProjectTaskStatus(
        `${textFor("project.taskFailed", "项目步骤更新失败")}：${error.message || ""}`,
        "error"
      );
    });
  });
}
if (els.projectTaskInput) {
  els.projectTaskInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.isComposing) return;
    event.preventDefault();
    addProjectTask().catch((error) => {
      setProjectTaskStatus(
        `${textFor("project.taskFailed", "项目步骤更新失败")}：${error.message || ""}`,
        "error"
      );
    });
  });
}
if (els.projectArchive) {
  els.projectArchive.addEventListener("click", () => {
    toggleCurrentProjectArchived().catch((error) => {
      setConversationFeedback(`${currentLanguage === "en" ? "Project update failed" : "项目操作失败"}：${error.message || ""}`, "error");
    });
  });
}
if (els.conversationSearch) {
  els.conversationSearch.addEventListener("input", () => {
    if (conversationLibrarySearchTimer) window.clearTimeout(conversationLibrarySearchTimer);
    conversationLibrarySearchTimer = window.setTimeout(() => {
      conversationLibrarySearchTimer = 0;
      refreshConversationLibrary({ force: true }).catch((error) => {
        setConversationFeedback(`${currentLanguage === "en" ? "Search failed" : "搜索失败"}：${error.message || ""}`, "error");
      });
    }, 220);
  });
  els.conversationSearch.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (conversationLibrarySearchTimer) window.clearTimeout(conversationLibrarySearchTimer);
    conversationLibrarySearchTimer = 0;
    refreshConversationLibrary({ force: true }).catch((error) => {
      setConversationFeedback(`${currentLanguage === "en" ? "Search failed" : "搜索失败"}：${error.message || ""}`, "error");
    });
  });
}
if (els.conversationSearchPrevious) {
  els.conversationSearchPrevious.addEventListener("click", () => {
    navigateConversationSearch(-1);
  });
}
if (els.conversationSearchNext) {
  els.conversationSearchNext.addEventListener("click", () => {
    navigateConversationSearch(1);
  });
}
if (els.conversationSearchClose) {
  els.conversationSearchClose.addEventListener("click", clearConversationSearchSession);
}
if (els.conversationIncludeArchived) {
  els.conversationIncludeArchived.addEventListener("change", () => {
    Promise.all([
      refreshProjectLibrary({ force: true }),
      refreshConversationLibrary({ force: true })
    ]).catch((error) => {
      setConversationFeedback(`${currentLanguage === "en" ? "Refresh failed" : "刷新失败"}：${error.message || ""}`, "error");
    });
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
if (els.proactiveRefresh) {
  els.proactiveRefresh.addEventListener("click", () => {
    loadProactiveControlCenter({ force: true }).catch((err) => {
      logLine(err.message || "proactive preferences refresh failed");
    });
  });
}
if (els.proactivePushAction) {
  els.proactivePushAction.addEventListener("click", () => {
    const action = proactivePushSubscription ? disableProactivePush : enableProactivePush;
    action().catch((err) => logLine(err.message || "proactive push action failed"));
  });
}
if (els.proactivePushTest) {
  els.proactivePushTest.addEventListener("click", () => {
    sendProactivePushTest().catch((err) => logLine(err.message || "proactive push test failed"));
  });
}
if (els.proactivePushPreview) {
  els.proactivePushPreview.addEventListener("change", () => {
    updateProactivePushPreview().catch((err) => logLine(err.message || "proactive push privacy failed"));
  });
}
if (els.proactiveEnabled) {
  els.proactiveEnabled.addEventListener("change", () => {
    saveProactivePreferences({ enabled: els.proactiveEnabled.checked }).catch((err) => {
      logLine(err.message || "proactive enabled preference failed");
    });
  });
}
if (els.proactiveDailyLimit) {
  els.proactiveDailyLimit.addEventListener("change", () => {
    saveProactivePreferences({
      max_active_messages_per_day: Number(els.proactiveDailyLimit.value)
    }).catch((err) => logLine(err.message || "proactive daily limit failed"));
  });
}
if (els.proactiveInterval) {
  els.proactiveInterval.addEventListener("change", () => {
    saveProactivePreferences({
      soft_message_interval_minutes: Number(els.proactiveInterval.value)
    }).catch((err) => logLine(err.message || "proactive interval failed"));
  });
}
if (els.proactiveAdaptive) {
  els.proactiveAdaptive.addEventListener("change", () => {
    saveProactivePreferences({
      adaptive_frequency_enabled: els.proactiveAdaptive.checked
    }).catch((err) => logLine(err.message || "proactive adaptive rhythm failed"));
  });
}
function saveProactiveQuietHours() {
  if (!els.proactiveQuietStart || !els.proactiveQuietEnd) return;
  saveProactivePreferences({
    quiet_hours: [els.proactiveQuietStart.value, els.proactiveQuietEnd.value]
  }).catch((err) => logLine(err.message || "proactive quiet hours failed"));
}
if (els.proactiveQuietStart) els.proactiveQuietStart.addEventListener("change", saveProactiveQuietHours);
if (els.proactiveQuietEnd) els.proactiveQuietEnd.addEventListener("change", saveProactiveQuietHours);
[
  [els.proactiveEmotion, "allow_emotion_followup"],
  [els.proactiveGoal, "allow_goal_followup"],
  [els.proactiveCalendar, "allow_calendar_preparation"]
].forEach(([control, field]) => {
  if (!control) return;
  control.addEventListener("change", () => {
    saveProactivePreferences({ [field]: control.checked }).catch((err) => {
      logLine(err.message || `proactive ${field} failed`);
    });
  });
});
if (els.reviewRefresh) {
  els.reviewRefresh.addEventListener("click", () => {
    refreshReviewWorkbench({ force: true }).catch((err) => logLine(err.message || "review refresh failed"));
  });
}
if (els.reviewTabs) {
  els.reviewTabs.addEventListener("click", (event) => {
    const button = event.target instanceof HTMLElement ? event.target.closest("[data-review-filter]") : null;
    if (!button || !els.reviewTabs.contains(button)) return;
    setReviewWorkbenchFilter(button.dataset.reviewFilter || "pending");
  });
}
if (els.detailSheet) {
  els.detailSheet.addEventListener("click", (event) => {
    if (event.target === els.detailSheet) closeDetails();
  });
  els.detailSheet.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
    const summary = event.target instanceof HTMLElement ? event.target.closest("summary.navSummary") : null;
    const group = summary ? summary.closest("details.settingsGroup") : null;
    if (!summary || !group || !els.detailSheet.contains(summary)) return;
    event.preventDefault();
    group.open = !group.open;
    if (group.open) scrollSettingsGroupIntoView(group);
  });
  initSettingsGroupAutoScroll();
}
function clearFormKeyboardFocus() {
  document.querySelectorAll("[data-form-keyboard-focus]").forEach((node) => {
    node.removeAttribute("data-form-keyboard-focus");
  });
}
function syncFormKeyboardFocus(target) {
  const el = target instanceof HTMLElement ? target : null;
  if (!el || !el.matches("input:not([type='file']), select, textarea")) return;
  if (document.body.classList.contains("keyboardInput")) {
    el.setAttribute("data-form-keyboard-focus", "true");
  }
}
document.addEventListener("keydown", (event) => {
  if (["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", " "].includes(event.key)) {
    document.body.classList.add("keyboardInput");
    syncFormKeyboardFocus(document.activeElement);
  }
  if (
    document.body.classList.contains("canvasOpen")
    && (event.metaKey || event.ctrlKey)
    && event.key.toLowerCase() === "s"
  ) {
    event.preventDefault();
    saveCurrentCanvas({ source: "keyboard" }).catch((error) => {
      logLine(error.message || "canvas keyboard save failed");
    });
    return;
  }
  if (event.key === "Escape" && document.body.classList.contains("canvasOpen")) {
    event.preventDefault();
    if (els.canvasDeletePanel && !els.canvasDeletePanel.hidden) {
      closeCanvasDeletePanel();
    } else if (els.canvasVersionDrawer && !els.canvasVersionDrawer.hidden) {
      closeCanvasVersionDrawer();
    } else if (els.canvasAssistPanel && !els.canvasAssistPanel.hidden && els.canvasWorkspace.classList.contains("assistOpen")) {
      closeCanvasAssistPanel();
    } else {
      closeCanvasWorkspace().catch((error) => logLine(error.message || "canvas escape close failed"));
    }
    return;
  }
  if (event.key === "Escape" && document.body.classList.contains("capabilitiesOpen")) {
    event.preventDefault();
    if (els.thinkingModePicker && !els.thinkingModePicker.hidden) {
      setThinkingModePickerOpen(false);
      if (els.thinkingCapability) els.thinkingCapability.focus({ preventScroll: true });
    } else {
      setCapabilityPanelOpen(false, { restoreFocus: true });
    }
    return;
  }
  if (event.key !== "Escape" || !document.body.classList.contains("detailsOpen")) return;
  event.preventDefault();
  closeDetails();
});
document.addEventListener("pointerdown", () => {
  document.body.classList.remove("keyboardInput");
  if (els.detailsToggle) els.detailsToggle.removeAttribute("data-keyboard-focus");
  clearFormKeyboardFocus();
}, { passive: true });
if (els.detailsToggle) {
  els.detailsToggle.addEventListener("focusin", () => {
    if (document.body.classList.contains("keyboardInput")) {
      els.detailsToggle.setAttribute("data-keyboard-focus", "true");
    }
  });
  els.detailsToggle.addEventListener("focusout", () => {
    els.detailsToggle.removeAttribute("data-keyboard-focus");
  });
}
document.addEventListener("focusin", (event) => {
  syncFormKeyboardFocus(event.target);
  if (event.target === els.accessToken) setAccessInputFocused(true);
  if (IS_IOS_DEVICE && event.target instanceof HTMLElement && event.target.matches("input, textarea, select, [contenteditable='true'], [contenteditable='']")) {
    scheduleViewportMetrics({ refreshSubtitle: false });
    scheduleOrientationViewportMetrics();
  }
}, true);
document.addEventListener("focusout", (event) => {
  const target = event.target instanceof HTMLElement ? event.target : null;
  if (target === els.accessToken) setAccessInputFocused(false);
  if (!target || !target.matches("input, select, textarea")) return;
  target.removeAttribute("data-form-keyboard-focus");
  if (IS_IOS_DEVICE) {
    scheduleViewportMetrics({ refreshSubtitle: false });
    scheduleOrientationViewportMetrics();
  }
}, true);
els.reconnect.addEventListener("click", () => {
  runMaintenanceActionWithFeedback(els.reconnect, handleReconnectCommand).catch((err) => {
    logLine(err.message || "reconnect failed");
    setState("disconnected");
    showConnectionRecoveryHint("connection.failed", "语音连接还没建立成功。网络恢复后再点一次就好。");
  });
});
els.stop.addEventListener("click", () => {
  runMaintenanceActionWithFeedback(els.stop, () => handleStopCommand("manual_stop")).catch((err) => {
    logLine(err.message || "stop failed");
  });
});
els.mic.addEventListener("click", () => {
  micMuted = !micMuted;
  document.body.classList.toggle("micMuted", micMuted);
  syncAudioSettingButtons();
  updateDockControls(currentVisualState);
  if (micMuted) stopRecognition();
  else if (running && shouldPreferServerStt()) requestServerStt("mic_unmuted");
  else if (running && !serverSttEnabled) startRecognition();
  send({ type: "mute", mic_muted: micMuted });
});
els.speaker.addEventListener("click", () => {
  speakerMuted = !speakerMuted;
  syncAudioSettingButtons();
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
    setWebTtsButtonLoading(els.webTtsSync, true);
    syncWebTtsAudibility()
      .catch((err) => {
        const message = `听感同步失败：${err.message || "请检查 Tailnet 或 Token"}`;
        rememberWebTtsAudibility(message);
        logLine(message);
      })
      .finally(() => setWebTtsButtonLoading(els.webTtsSync, false));
  });
}
if (els.documentUpload) {
  els.documentUpload.addEventListener("click", () => {
    setDocumentUploadSelecting(true);
    window.setTimeout(() => setDocumentUploadSelecting(false), 760);
    if (els.documentPdf) els.documentPdf.click();
  });
}
if (els.documentPdf) {
  els.documentPdf.addEventListener("change", () => {
    uploadCurrentDocument().catch((err) => {
      setDocumentStatus(documentLabeledValue("document.uploadFailed", "文件上传失败：", err.message || "unknown"), "error");
      logLine(err.message || "document upload failed");
    });
  });
}
if (els.documentJobCancel) {
  els.documentJobCancel.addEventListener("click", () => {
    controlCurrentDocumentJob("cancel").catch((err) => logLine(err.message || "document job cancel failed"));
  });
}
if (els.documentJobRetry) {
  els.documentJobRetry.addEventListener("click", () => {
    controlCurrentDocumentJob("retry").catch((err) => logLine(err.message || "document job retry failed"));
  });
}
if (els.documentSummarize) {
  els.documentSummarize.addEventListener("click", () => {
    summarizeCurrentDocument().catch((err) => {
      const errorText = documentLabeledValue("document.summaryFailed", "摘要失败：", err.message || "unknown");
      setDocumentStatus(errorText, "error");
      setDocumentAnswer(errorText);
      logLine(err.message || "document summarize failed");
    });
  });
}
if (els.documentAsk) {
  els.documentAsk.addEventListener("click", () => {
    askCurrentDocument().catch((err) => {
      const errorText = documentLabeledValue("document.askFailed", "追问失败：", err.message || "unknown");
      setDocumentStatus(errorText, "error");
      setDocumentAnswer(errorText);
      logLine(err.message || "document ask failed");
    });
  });
}
if (els.documentQuestion) {
  els.documentQuestion.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      askCurrentDocument().catch((err) => {
        const errorText = documentLabeledValue("document.askFailed", "追问失败：", err.message || "unknown");
        setDocumentStatus(errorText, "error");
        setDocumentAnswer(errorText);
        logLine(err.message || "document ask failed");
      });
    }
  });
}
els.manualSend.addEventListener("click", () => {
  setCapabilityPanelOpen(false);
  if (stopActiveTextPrompt()) return;
  handleComposerSubmit().catch((err) => {
    setComposerSendLoading(false);
    logLine(err.message || "composer submit failed");
  });
});
if (els.manual) {
  els.manual.addEventListener("input", () => {
    resizeComposerInput();
    syncComposerSendAvailability();
  });
  els.manual.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      setCapabilityPanelOpen(false);
      if (stopActiveTextPrompt()) return;
      handleComposerSubmit().catch((err) => {
        setComposerSendLoading(false);
        logLine(err.message || "composer submit failed");
      });
    }
  });
}
applyBrowserTargeting();
loadToken();
initVoiceClientId();
initThemeSettings();
initLanguageSettings();
setThinkingMode(selectedThinkingMode, { persist: false, closePicker: true });
refreshAccessRevealButton();
if (PUBLIC_SHARE_MODE) {
  initializePublicConversationShare().catch((err) => {
    logLine(err.message || "public conversation share failed");
    renderPublicConversationShareFailure("conversation_share_not_found");
  });
} else {
  maybePromptForAccess();
}
initModelSettings();
initVoiceProfileSettings();
initVolumeSettings();
renderWebTtsAudibility();
renderWebTtsRoute();
syncComposerSendAvailability();
syncViewportMetrics({ refreshSubtitle: false });
if (!PUBLIC_SHARE_MODE && canUseBackendNow()) {
  initializeConversationSpace().catch((err) => logLine(err.message || "conversation initialization failed"));
  schedulePendingDocumentUploadReconciliation(900);
  scheduleProactiveScan(3200);
}
window.addEventListener("resize", () => scheduleViewportMetrics(), { passive: true });
window.addEventListener("scroll", () => scheduleViewportMetrics({ refreshSubtitle: false }), { passive: true });
window.addEventListener("orientationchange", () => scheduleOrientationViewportMetrics(), { passive: true });
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", () => scheduleViewportMetrics(), { passive: true });
  window.visualViewport.addEventListener("scroll", () => scheduleViewportMetrics(), { passive: true });
}
if (els.dock && typeof ResizeObserver === "function") {
  new ResizeObserver(() => scheduleViewportMetrics({ refreshSubtitle: false })).observe(els.dock);
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
els.mic.textContent = textFor("action.micOn", "麦克风开");
syncAudioSettingButtons();
setState("idle");
setSubtitle(textFor("voice.idleText", "我在。你可以直接说。"), { speaker: "IRIS" });
logLine(WEB_VERSION);
logLine(`browser target ${BROWSER_TARGET}`);
captureProactiveLaunchIntent();
serviceWorkerRegistrationIdleHandle = scheduleIdleWork(() => {
  serviceWorkerRegistrationIdleHandle = null;
  registerVoiceServiceWorker();
}, { timeout: 1600 });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("message", (event) => {
    const data = event.data && typeof event.data === "object" ? event.data : {};
    if (data.type !== "IRIS_PROACTIVE_NOTIFICATION_CLICK") return;
    pendingProactiveNotificationId = String(data.notification_id || "").trim();
    if (!pendingProactiveNotificationId) return;
    if (!focusProactiveNotification(pendingProactiveNotificationId)) {
      proactivePreferencesLoaded = false;
      loadProactiveControlCenter({ force: true }).catch((err) => {
        logLine(err.message || "proactive notification open failed");
      });
    }
  });
}

document.addEventListener("visibilitychange", () => {
  document.body.classList.toggle("pageHidden", document.visibilityState !== "visible");
  if (document.visibilityState === "visible") pagehideCleanupStarted = false;
  if (document.visibilityState === "visible") {
    schedulePendingDocumentUploadReconciliation(500);
    scheduleProactiveScan(1800);
  } else {
    clearProactiveScanSchedule();
  }
  if (document.visibilityState === "visible" && running) {
    ensureAudioContextRunning().catch(() => {});
  }
});

window.addEventListener("pageshow", () => {
  pagehideCleanupStarted = false;
}, { passive: true });

window.addEventListener("online", () => {
  schedulePendingDocumentUploadReconciliation(250);
}, { passive: true });

window.addEventListener("pageshow", () => {
  schedulePendingDocumentUploadReconciliation(500);
  scheduleProactiveScan(2200);
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
  clearProactiveScanSchedule();
}, { passive: true });
