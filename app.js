const els = {
  home: document.querySelector(".home"),
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
  memoryRefresh: document.getElementById("memoryRefreshButton"),
  memorySearch: document.getElementById("memorySearchInput"),
  memorySearchClear: document.getElementById("memorySearchClearButton"),
  memoryOverview: document.getElementById("memoryOverview"),
  memoryStatus: document.getElementById("memoryStatus"),
  memoryList: document.getElementById("memoryList"),
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
  manualSend: document.getElementById("manualSend")
};

const VOICE_UI_VERSION = "354";
const SUPPORTED_DOCUMENT_EXTENSIONS = new Set([
  "pdf", "txt", "log", "md", "markdown", "csv", "tsv", "json", "html", "htm", "xml", "rtf",
  "doc", "xls", "ppt", "docx", "xlsx", "pptx", "odt", "ods", "odp", "eml",
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
    "access.sessionNote": "短期令牌仅保存在这台设备。",
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
    "access.sessionNote": "The short-lived token stays on this device.",
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

const WEB_VERSION = "voice-ui-web-polish-v354-companion-interface";
const PRE_AUTH_SAFE_EVENT_TYPES = new Set(["session_status", "server_capabilities", "error"]);
const TOKEN_KEY = "jarvis_voice_token";
const ACCESS_TOKEN_KEY = "iris_access_token";
const ACCESS_TOKEN_EXPIRES_KEY = "iris_access_token_expires_at";
const ACCESS_SUBJECT_ID_KEY = "iris_access_subject_id";
const THEME_KEY = "iris_voice_theme";
const LANGUAGE_KEY = "iris_voice_language";
const VOICE_CLIENT_ID_KEY = "jarvis_voice_client_id";
const TTS_AUDIBILITY_KEY = "jarvis_voice_tts_audibility";
const TTS_ROUTE_KEY = "jarvis_voice_tts_route";
const VOLUME_KEY = "jarvis_voice_volume";
let currentLanguage = normalizedLanguage(safeStorageGet(LANGUAGE_KEY, navigator.language || "zh"));
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
  if ((/[：:]$/.test(normalized) && normalized.length <= 18) || /^(要点|结构|来源|Sources|Key points|Outline)[：:]?$/i.test(normalized)) {
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

function setMessageBodyText(body, text, options = {}) {
  if (!body) return;
  const kind = options.kind || "";
  if (options.role === "file" || documentMessageKind(kind)) {
    renderDocumentMessageBody(body, text, options);
    return;
  }
  delete body.dataset.documentRender;
  delete body.dataset.documentKind;
  body.textContent = (text || "").trim() || " ";
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
  setMessageBodyText(body, value || " ", { ...options, role });
  item.append(meta, body);
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
    feedback.textContent = hasRemoteAction
      ? (currentLanguage === "en" ? "Nothing happens until you confirm." : "确认后才会执行。")
      : (currentLanguage === "en" ? "Choose an action when ready." : "需要时选择一个操作。");
    actions.appendChild(feedback);
    item.appendChild(actions);
  }
  if (role === "assistant" && options.feedbackTarget) {
    attachMessageFeedbackControls(item, options.feedbackTarget);
  }
  els.conversationStream.appendChild(item);
  scheduleConversationScroll({ force: options.forceScroll, allowed: shouldScroll });
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
    : '<path d="M7.8 9.8 11 16.2c.5 1 1.8.9 2.1-.1l.2-.8c.2-.7.1-1.5-.2-2.1l-.6-1.2h4.2c1.3 0 2.2-1.2 1.8-2.4l-1.6-5.2c-.3-.9-1.1-1.5-2-1.5H7.8v6.9Z"/><path d="M4 2.5h3.8v8H4z"/>';
  return `<svg viewBox="0 0 22 22" aria-hidden="true">${path}</svg>`;
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
  if (text.includes("删除") || text.includes("拒绝") || text.includes("remove") || text.includes("delete")) return "dismiss";
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
  return appendConversationMessage("user", value, { forceScroll: true });
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
    const reply = clientReplyForDisplay(String(payload.reply || "").trim(), actionButtons) || (currentLanguage === "en" ? "The operation finished." : "操作已完成。");
    appendAssistantConversation(reply, {
      id: payload.response_id ? `assistant_${payload.response_id}` : "",
      kind: payload.skill || payload.route || "operation_result",
      forceScroll: true,
      actions: actionButtons,
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
  body.textContent = textFor("welcome.message", "我在。你可以直接说，也可以把文件发给我。");
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

async function loadConversationHistory() {
  if (conversationHistoryLoaded || conversationHistoryLoading || !window.fetch || !els.conversationStream) return;
  if (shouldSkipConversationHistory()) {
    conversationHistoryLoaded = true;
    ensureAssistantConversationAnchor();
    logLine("conversation history skipped for screenshot QA");
    return;
  }
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
        forceScroll: index === items.length - 1,
        feedbackTarget: role === "assistant" && item.turn_id ? {
          turn_id: item.turn_id,
          response_id: item.response_id || "",
          channel: item.client_type === "voice" ? "voice" : "web"
        } : null
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

function normalizedLanguage(value) {
  const next = String(value || "").trim().toLowerCase();
  if (next.startsWith("en")) return "en";
  if (next.startsWith("zh") || next.startsWith("cn")) return "zh";
  return "zh";
}

function selectedLanguage() {
  return normalizedLanguage(safeStorageGet(LANGUAGE_KEY, navigator.language || "zh"));
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
  renderWebTtsRoute();
  renderWebTtsAudibility();
  if (lastMemoryControlPayload && els.memoryList && typeof renderMemoryControlCenter === "function") {
    renderMemoryControlCenter(lastMemoryControlPayload);
  }
  if (lastReviewWorkbenchPayload && els.reviewList && typeof renderReviewWorkbench === "function") {
    renderReviewWorkbench(lastReviewWorkbenchPayload);
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
    voice_profile: selectedVoiceProfile()
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
  return String(trigger.dedupe_key || trigger.trigger_id || `${item && item.kind || "proactive"}:${trigger.item || ""}`).trim();
}

function proactiveItemText(item) {
  const trigger = item && item.trigger && typeof item.trigger === "object" ? item.trigger : {};
  const primary = String(trigger.item || "").trim();
  const nextStep = String(trigger.next_step || "").trim();
  if (!primary) return "";
  if (item && item.kind === "contextual_followup") return primary;
  if (!nextStep || primary.includes(nextStep)) return primary;
  return `${primary}\n${nextStep}`;
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
    const contextual = item.kind === "contextual_followup";
    appendAssistantConversation(text, {
      id: `proactive_${Math.abs(key.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0))}`,
      label: currentLanguage === "en"
        ? (contextual ? "Iris · Follow-up" : "Iris · Reminder")
        : (contextual ? "Iris · 想起你了" : "Iris · 提醒"),
      kind: "proactive_followup",
      forceScroll: false
    });
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
        include_contextual: true,
        contextual_min_inactive_minutes: 30
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail && payload.detail.error || payload.detail || `proactive_scan_${response.status}`);
    }
    const rendered = renderProactiveItems(payload.items);
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
  loadConversationHistory().catch((err) => logLine(err.message || "conversation history failed"));
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
  if (currentAuthToken() || !isPublicFrontendMode()) {
    hideAccessGate();
    return;
  }
  showAccessGate("", "info");
}

function handleUnauthorizedResponse(response) {
  if (!response || response.status !== 401) return false;
  const activeToken = currentAuthToken();
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
  const value = Number(doc && doc.page_count);
  if (!Number.isFinite(value) || value <= 0) return "";
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
  return {
    id: doc.id || currentDocumentId || "",
    filename: doc.filename || currentDocumentName || "File",
    document_type: doc.document_type || "",
    media_type: doc.media_type || "",
    status: doc.status || "parsed",
    parser: doc.parser || "",
    page_count: Number.isFinite(Number(doc.page_count)) ? Number(doc.page_count) : null,
    char_count: Number.isFinite(Number(doc.char_count)) ? Number(doc.char_count) : null
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

function documentUserWarnings(warnings) {
  if (!Array.isArray(warnings)) return [];
  return warnings
    .map((warning) => String(warning || "").trim())
    .filter(Boolean)
    .filter((warning) => !DOCUMENT_INTERNAL_WARNING_PREFIXES.some((prefix) => warning.startsWith(prefix)));
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
  const visibleWarnings = documentUserWarnings(warnings);
  return [
    documentAcceptedLine(doc),
    documentReadableSummaryLine(doc),
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

function acceptUploadedDocument(payload, uploadMessageId, recovered = false) {
  clearPendingDocumentUpload(String(payload && payload.upload_id || ""));
  currentDocumentId = payload.id || "";
  setDocumentJobControls({
    status: String(payload.status || "ready") === "partial" ? "partial" : "ready",
    document_id: currentDocumentId,
    unit_parse: payload.unit_parse || null
  });
  const summaryLine = rememberDocumentSummaryData(payload);
  setDocumentStatus(summaryLine, currentDocumentId ? "ready" : "warning");
  currentDocumentWarnings = Array.isArray(payload.warnings) ? payload.warnings.filter(Boolean) : [];
  logDocumentDiagnostics(currentDocumentWarnings);
  const accepted = currentDocumentId
    ? documentReadyAnswerText(currentDocumentSummaryData || payload)
    : textFor("document.uploadMissingId", "上传完成，但没有拿到文档 ID。");
  currentDocumentAnswerMode = currentDocumentId ? "ready" : "warning";
  setDocumentAnswer(accepted);
  currentDocumentReadyFileMessageId = uploadMessageId;
  updateConversationMessage(uploadMessageId, documentFileReadyLine(), { label: textFor("role.file", "文件"), role: "file", kind: "document_ready" });
  currentDocumentReadyAssistantMessageId = appendAssistantConversation(accepted, { kind: "document_ready" });
  setDocumentBusy(false);
  setDocumentContextVisible(false);
  if (recovered) logLine(`document upload response reconciled ${currentDocumentId}`);
}

function refreshDocumentReadyPresentation() {
  if (!currentDocumentId || currentDocumentAnswerMode !== "ready" || !currentDocumentSummaryData) return;
  const answer = documentReadyAnswerText(currentDocumentSummaryData);
  const fileReady = documentFileReadyLine();
  setDocumentAnswer(answer);
  if (currentDocumentReadyFileMessageId) {
    updateConversationMessage(currentDocumentReadyFileMessageId, fileReady, {
      label: textFor("role.file", "文件"),
      role: "file",
      kind: "document_ready"
    });
  }
  if (currentDocumentReadyAssistantMessageId) {
    updateConversationMessage(currentDocumentReadyAssistantMessageId, answer, {
      label: "Iris",
      role: "assistant",
      kind: "document_ready"
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
    showAccessGate(textFor("access.required", "请先输入访问口令。"), "warning", "access.required");
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
        user_id: currentSubjectId(),
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
      flushLogRenderNow();
      return;
    }
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      handleUnauthorizedResponse(response);
      throw new Error(payload.detail || `HTTP ${response.status}`);
    }
    currentConversationId = payload.conversation_id || currentConversationId;
    const actionButtons = clientMessageActionButtons(payload.action_payloads);
    const reply = clientReplyForDisplay(String(payload.reply || "").trim(), actionButtons) || "我没有拿到可显示的回复。";
    els.reply.textContent = reply;
    appendAssistantConversation(reply, {
      id: payload.response_id ? `assistant_${payload.response_id}` : "",
      kind: payload.skill || payload.route || "text_reply",
      forceScroll: true,
      actions: actionButtons,
      feedbackTarget: payload.feedback || (payload.turn_id ? {
        turn_id: payload.turn_id,
        response_id: payload.response_id || "",
        channel: "web"
      } : null)
    });
    setSubtitle(reply, { speaker: "IRIS", resetFlow: true });
    setState("idle", { preserveSubtitle: true });
    logLine(`text reply · ${payload.route || "client"}${payload.skill ? `/${payload.skill}` : ""}`);
  } catch (err) {
    const message = `文字发送失败：${err.message || "网络不可用"}`;
    appendAssistantConversation(message, { kind: "error" });
    logLine(message);
    flushLogRenderNow();
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
  const hasDocument = Boolean(currentDocumentId && documentContextVisible);
  els.manualSend.dataset.empty = hasText ? "false" : "true";
  els.manualSend.dataset.canSubmit = canSubmit ? "true" : "false";
  els.manualSend.dataset.documentLinked = hasDocument ? "true" : "false";
  els.manualSend.dataset.documentBadge = hasDocument && currentDocumentSummaryData
    ? documentTypeBadge(currentDocumentSummaryData)
    : "FILE";
  els.manualSend.dataset.stateLabel = canSubmit
    ? (hasDocument ? "document-question-ready" : "message-ready")
    : (hasDocument ? "document-question-empty" : "message-empty");
  if (!isLoading) {
    els.manualSend.disabled = !canSubmit;
    els.manualSend.dataset.mode = canSubmit
      ? (hasDocument ? "document-question" : "ready")
      : (hasDocument ? "document-idle" : "idle");
    els.manualSend.textContent = hasDocument && hasText ? "?" : "↑";
  }
  const label = hasDocument
    ? (hasText
      ? textFor("composer.askDocument", "追问当前文件")
      : textFor("composer.askDocumentDisabled", "输入问题后追问当前文件"))
    : (hasText ? textFor("action.send", "发送") : textFor("action.sendDisabled", "输入内容后发送"));
  els.manualSend.setAttribute("aria-label", label);
  els.manualSend.setAttribute("title", label);
}

function setComposerSendLoading(isLoading) {
  if (!els.manualSend) return;
  const composer = els.manualSend.closest(".unifiedComposer");
  if (composer) composer.dataset.sending = isLoading ? "true" : "false";
  els.manualSend.disabled = Boolean(isLoading);
  els.manualSend.setAttribute("aria-busy", isLoading ? "true" : "false");
  if (isLoading) {
    els.manualSend.dataset.loading = "true";
    els.manualSend.dataset.mode = "sending";
    els.manualSend.dataset.stateLabel = "sending";
    els.manualSend.textContent = "•";
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
  const text = (els.manual && els.manual.value ? els.manual.value : "").trim();
  if (!text) {
    return;
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

function renderWebTtsAudibility() {
  if (!els.webTtsAudibility) return;
  if (!currentWebTtsAudibilityText) {
    currentWebTtsAudibilityText = safeStorageGet(TTS_AUDIBILITY_KEY, textFor("tts.unconfirmed", "未确认"));
    persistedWebTtsAudibilityText = currentWebTtsAudibilityText;
  }
  const value = currentWebTtsAudibilityText || textFor("tts.unconfirmed", "未确认");
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
  els.accessToken.addEventListener("input", resetAccessFieldFeedback);
  els.accessToken.addEventListener("focus", () => setAccessInputFocused(true));
  els.accessToken.addEventListener("blur", () => setAccessInputFocused(false));
}
if (els.accessReveal) {
  els.accessReveal.addEventListener("click", toggleAccessCodeVisibility);
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
refreshAccessRevealButton();
maybePromptForAccess();
initModelSettings();
initVoiceProfileSettings();
initVolumeSettings();
renderWebTtsAudibility();
renderWebTtsRoute();
syncComposerSendAvailability();
syncViewportMetrics({ refreshSubtitle: false });
if (canUseBackendNow()) {
  loadConversationHistory().catch((err) => logLine(err.message || "conversation history failed"));
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
serviceWorkerRegistrationIdleHandle = scheduleIdleWork(() => {
  serviceWorkerRegistrationIdleHandle = null;
  registerVoiceServiceWorker();
}, { timeout: 1600 });

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
