/**
 * i18n localization dictionary and helper for Antigravity Auto Accept
 * Supports: English ('en') and Simplified Chinese ('zh-CN')
 */

const vscode = require('vscode');

const translations = {
    'en': {
        // Status Bar
        'status.loading': '$(sync~spin) Auto Accept: Loading...',
        'status.loadingTooltip': 'Antigravity Auto Accept is initializing...',
        'status.backgroundOff': '$(globe) Background: OFF',
        'status.backgroundOffTooltip': 'Background mode works across all agent chats',
        'status.backgroundOn': '$(sync~spin) Background: ON',
        'status.backgroundOnTooltip': 'Background mode is active',
        'status.backgroundClickToEnable': 'Click to enable background mode',
        'status.panel': 'Auto Accept Panel',
        'status.panelTooltip': 'Open Antigravity Auto Accept Control Panel',
        'status.active': 'Antigravity Auto Accept is active ({0}ms)',
        'status.cdpConnected': ' | CDP connected',
        'status.cdpDisconnected': ' | CDP disconnected',
        'status.paused': 'PAUSED',
        'status.pausedTooltip': '{0} Open Control Panel to fix.',
        'status.off': '$(circle-slash) Auto Accept: OFF',
        'status.offTooltip': 'Click to enable Antigravity Auto Accept',

        // Messages & Notifications
        'msg.enabled': 'Antigravity Auto Accept is enabled.',
        'msg.bgRequiresCdp': 'Background mode requires CDP on port {0}. Run: Antigravity Auto Accept: Save IDE Launcher',
        'msg.pausedMismatch': 'Auto Accept paused: {0} Open "Antigravity Auto Accept: Open Control Panel" to fix.',
        'msg.diagnosticsCopied': 'Diagnostics copied to clipboard.',
        'msg.diagnosticsCopyFailed': 'Failed to copy diagnostics: {0}',
        'msg.supportBundleCopied': 'Full support bundle copied to clipboard.',
        'msg.supportBundleCopyFailed': 'Failed to copy full support bundle: {0}',
        'msg.launcherStepsCopied': 'Launcher steps copied to clipboard.',
        'msg.launcherStepsCopyFailed': 'Failed to copy launcher steps: {0}',
        'msg.manualCommandCopied': 'Manual launch command copied to clipboard.',
        'msg.manualCommandCopyFailed': 'Failed to copy manual launch command: {0}',
        'msg.cdpPortSet': 'CDP port set to {0}.',
        'msg.exePathSet': '{0} executable path set to:\n{1}',
        'msg.exePathFailed': 'Executable path update failed: {0}',
        'msg.exePathCleared': '{0} executable path override cleared.',
        'msg.exePathResetFailed': 'Executable path reset failed: {0}',
        'msg.saveLauncherFailed': 'Save launcher failed: {0}',
        'msg.launcherSaved': 'Launcher saved at:\n{0}\n\nHow to open:\n{1}',
        'msg.copyStepsBtn': 'Copy Steps',
        'msg.legacyActionsNotice': 'Launch/setup actions were removed from this panel. Save a launcher file and open the IDE through it.',
        'msg.panelError': 'Control panel error: {0}',
        'msg.activationError': 'Antigravity Auto Accept failed to activate: {0}',
        'msg.langChanged': 'Language switched to English.',

        // Guidance
        'guidance.fixIdePath.label': 'Fix IDE Path',
        'guidance.fixIdePath.msg': 'The manual IDE path override is invalid. Clear it or choose a valid executable path before relying on launcher flow.',
        'guidance.mcpOnly.label': 'MCP Only',
        'guidance.mcpOnly.msg': 'This session is exposing MCP only, so the fixed CDP launcher workflow is not available here.',
        'guidance.saveLauncher.label': 'Save Launcher',
        'guidance.saveLauncher.msg': 'Save an IDE launcher for the selected CDP port so you can reopen the IDE with the expected runtime configuration.',
        'guidance.reopenLauncher.label': 'Reopen Through Launcher',
        'guidance.reopenLauncher.msg': 'The selected CDP port {0} is not active. Reopen the IDE through the saved launcher or update the selected port.',
        'guidance.waitForCdp.label': 'Wait For CDP',
        'guidance.waitForCdp.msg': 'The expected CDP port is starting. Keep the IDE open and refresh the panel again in a moment.',
        'guidance.keepIdeOpen.label': 'Keep IDE Open',
        'guidance.keepIdeOpen.msg': 'The expected CDP port is active, but no live CDP connection is registered yet. Give the IDE a moment and refresh if needed.',
        'guidance.ready.label': 'Ready',
        'guidance.ready.msg': 'CDP looks healthy. You can use Auto Accept or Background Mode when you need it.',
        'guidance.checkState.label': 'Check CDP State',
        'guidance.checkState.msg': 'Verify the selected CDP port and reopen the IDE through the saved launcher if the expected port is missing.',

        // Launcher steps
        'launcher.none': 'Save a launcher first to get platform-specific steps.',
        'launcher.winStep1': '1. Open File Explorer and go to: {0}',
        'launcher.winStep2': '2. Double-click: {0}',
        'launcher.winStep3': '3. Always launch the IDE through this file when you want CDP port {0}.',
        'launcher.winStep4': '4. Optional: create a shortcut/pin from this file for easier access.',
        'launcher.macStep1': '1. Open Finder and go to: {0}',
        'launcher.macStep2': '2. Run: {0}',
        'launcher.macStep3': '3. First run may require Right click -> Open -> Open (macOS Gatekeeper).',
        'launcher.macStep4': '4. Always launch the IDE with this file when you want CDP port {0}.',
        'launcher.linuxStep1': '1. Open a terminal in: {0}',
        'launcher.linuxStep2': '2. Run: "{0}"',
        'launcher.linuxStep3': '3. If needed, make sure it is executable: chmod +x "{0}".',
        'launcher.linuxStep4': '4. Always launch the IDE with this file when you want CDP port {0}.',

        // Control Panel UI (HTML)
        'panel.title': 'Antigravity Auto Accept Control Panel',
        'panel.subtitle': 'Choose CDP port, save a launcher file anywhere on your machine, and follow the exact open steps.',
        'panel.refresh': 'Refresh',
        'panel.langBtn': '🌐 中文',
        'panel.loading': 'Loading...',
        'panel.version': 'Version',
        'panel.ide': 'IDE',
        'panel.platform': 'Platform',
        'panel.remoteContext': 'Remote Context',
        'panel.extHost': 'Extension Host',
        'panel.expectedPort': 'Expected CDP Port',
        'panel.activePorts': 'Active CDP Ports',
        'panel.cdpConnections': 'CDP Connections',
        'panel.supportGuidance': 'Support Guidance',
        'panel.lastRefresh': 'Last refresh:',
        'panel.supportHealth': 'Support Health',
        'panel.launcherSaved': 'Launcher Saved',
        'panel.expectedPortActive': 'Expected Port Active',
        'panel.cdpConnected': 'CDP Connected',
        'panel.exePathValid': 'Executable Path Valid',
        'panel.bgReady': 'Background Ready',
        'panel.cdpPortLabel': 'CDP Port',
        'panel.savePort': 'Save Port',
        'panel.saveLauncher': 'Save IDE Launcher...',
        'panel.pauseOnMismatch': 'Pause when CDP port mismatch is detected',
        'panel.exePathOverride': 'Executable Path Override',
        'panel.autoDetectStatus': 'Auto-detect status: ',
        'panel.chooseIdePath': 'Choose IDE Path...',
        'panel.clearManualPath': 'Clear Manual Path',
        'panel.toggleAuto': 'Toggle Auto Accept',
        'panel.toggleBg': 'Toggle Background Mode',
        'panel.copyDiagnostics': 'Copy Diagnostics',
        'panel.openOutputLog': 'Open Output Log',
        'panel.copySupportBundle': 'Copy Full Support Bundle',
        'panel.statusSummary': 'Auto Accept: {0} | Background: {1}',
        'panel.savedLauncherPath': 'Saved Launcher Path',
        'panel.launcherPort': 'Launcher port: ',
        'panel.howToOpen': 'How To Open It',
        'panel.copyLauncherSteps': 'Copy Launcher Steps',
        'panel.manualCmdTitle': 'Manual Command (Alternative)',
        'panel.copyManualCmd': 'Copy Manual Command',
        'panel.recentActivity': 'Recent Activity',
        'panel.lastAction': 'Last Action',
        'panel.approvals': 'Approvals',
        'panel.permissions': 'Permissions',
        'panel.terminal': 'Terminal',
        'panel.fileEdits': 'File Edits',
        'panel.blocked': 'Blocked',
        'panel.credits': 'Fork maintained by angelic • Original author: pesosz (MIT License)'
    },

    'zh-CN': {
        // Status Bar
        'status.loading': '$(sync~spin) 自动接受: 加载中...',
        'status.loadingTooltip': 'Antigravity 自动接受插件正在初始化...',
        'status.backgroundOff': '$(globe) 后台模式: 关',
        'status.backgroundOffTooltip': '后台模式支持在所有智能体对话中生效',
        'status.backgroundOn': '$(sync~spin) 后台模式: 开',
        'status.backgroundOnTooltip': '后台模式已激活运行',
        'status.backgroundClickToEnable': '点击开启后台模式',
        'status.panel': '自动接受控制面板',
        'status.panelTooltip': '打开 Antigravity 自动接受控制面板',
        'status.active': 'Antigravity 自动接受运行中 ({0}ms)',
        'status.cdpConnected': ' | CDP 已连接',
        'status.cdpDisconnected': ' | CDP 未连接',
        'status.paused': '已暂停',
        'status.pausedTooltip': '{0} 打开控制面板解决。',
        'status.off': '$(circle-slash) 自动接受: 关',
        'status.offTooltip': '点击开启 Antigravity 自动接受',

        // Messages & Notifications
        'msg.enabled': 'Antigravity 自动接受已开启。',
        'msg.bgRequiresCdp': '后台模式需要 CDP 端口 {0}。请运行：保存启动器',
        'msg.pausedMismatch': '自动接受已暂停: {0} 打开“自动接受控制面板”以配置修正。',
        'msg.diagnosticsCopied': '诊断报告已复制到剪贴板。',
        'msg.diagnosticsCopyFailed': '复制诊断报告失败: {0}',
        'msg.supportBundleCopied': '完整支持报告包已复制到剪贴板。',
        'msg.supportBundleCopyFailed': '复制支持包失败: {0}',
        'msg.launcherStepsCopied': '启动步骤已复制到剪贴板。',
        'msg.launcherStepsCopyFailed': '复制启动步骤失败: {0}',
        'msg.manualCommandCopied': '手动启动命令已复制到剪贴板。',
        'msg.manualCommandCopyFailed': '复制手动启动命令失败: {0}',
        'msg.cdpPortSet': 'CDP 端口已设为 {0}。',
        'msg.exePathSet': '{0} 执行路径已设置为:\n{1}',
        'msg.exePathFailed': '更新可执行文件路径失败: {0}',
        'msg.exePathCleared': '{0} 手动路径覆盖已清除。',
        'msg.exePathResetFailed': '重置可执行文件路径失败: {0}',
        'msg.saveLauncherFailed': '保存启动器失败: {0}',
        'msg.launcherSaved': '启动器已保存至:\n{0}\n\n如何启动运行:\n{1}',
        'msg.copyStepsBtn': '复制步骤',
        'msg.legacyActionsNotice': '启动器生成后，请直接双击启动器以启动支持 CDP 的编辑器。',
        'msg.panelError': '控制面板错误: {0}',
        'msg.activationError': 'Antigravity 自动接受激活失败: {0}',
        'msg.langChanged': '语言已切换为简体中文。',

        // Guidance
        'guidance.fixIdePath.label': '修复 IDE 路径',
        'guidance.fixIdePath.msg': '手动设置的 IDE 路径无效。在生成启动器之前，请重新选择有效路径或清除手动覆盖。',
        'guidance.mcpOnly.label': '仅 MCP 模式',
        'guidance.mcpOnly.msg': '当前会话仅暴露 MCP 接口，无法使用固定的 CDP 端口启动器。',
        'guidance.saveLauncher.label': '保存启动器',
        'guidance.saveLauncher.msg': '请保存指定 CDP 端口的 IDE 启动器，以便通过预设环境重新启动 IDE。',
        'guidance.reopenLauncher.label': '通过启动器重新启动',
        'guidance.reopenLauncher.msg': '当前 CDP 端口 {0} 未处于活动状态。请通过保存的启动器重新启动编辑器，或更新端口。',
        'guidance.waitForCdp.label': '等待 CDP 连接',
        'guidance.waitForCdp.msg': '预期的 CDP 端口正在启动。请保持编辑器打开并稍后刷新控制面板。',
        'guidance.keepIdeOpen.label': '保持 IDE 打开',
        'guidance.keepIdeOpen.msg': '预期的 CDP 端口已激活，但尚未建立活动连接。请等待片刻后刷新。',
        'guidance.ready.label': '就绪',
        'guidance.ready.msg': 'CDP 状态良好，已准备就绪。您可以正常使用自动接受或后台模式。',
        'guidance.checkState.label': '检查 CDP 状态',
        'guidance.checkState.msg': '请核对所选 CDP 端口。如果预期端口丢失，请通过保存的启动器重新打开 IDE。',

        // Launcher steps
        'launcher.none': '请先保存启动器文件，以获取专属启动指南。',
        'launcher.winStep1': '1. 打开资源管理器并前往目录: {0}',
        'launcher.winStep2': '2. 双击运行: {0}',
        'launcher.winStep3': '3. 需要 CDP 端口 {0} 时，请始终通过该快捷方式或文件启动 IDE。',
        'launcher.winStep4': '4. 可选: 将该文件发送到桌面快捷方式或固定到任务栏以便日常打开。',
        'launcher.macStep1': '1. 打开访达 (Finder) 并前往: {0}',
        'launcher.macStep2': '2. 运行脚本: {0}',
        'launcher.macStep3': '3. 首次运行时可能需要右键点击 -> 打开 -> 确认打开 (macOS 安全限制)。',
        'launcher.macStep4': '4. 需要 CDP 端口 {0} 时，请始终通过该文件启动。',
        'launcher.linuxStep1': '1. 在对应目录打开终端: {0}',
        'launcher.linuxStep2': '2. 运行命令: "{0}"',
        'launcher.linuxStep3': '3. 如有需要，添加执行权限: chmod +x "{0}"。',
        'launcher.linuxStep4': '4. 需要 CDP 端口 {0} 时，请始终通过该文件启动。',

        // Control Panel UI (HTML)
        'panel.title': 'Antigravity 自动接受控制面板',
        'panel.subtitle': '配置 CDP 端口、生成专属桌面/目录启动器，实现全自动化免点确认。',
        'panel.refresh': '刷新',
        'panel.langBtn': '🌐 English',
        'panel.loading': '加载中...',
        'panel.version': '版本号',
        'panel.ide': '编辑器',
        'panel.platform': '操作系统',
        'panel.remoteContext': '远程环境',
        'panel.extHost': '插件宿主',
        'panel.expectedPort': '预期 CDP 端口',
        'panel.activePorts': '活跃 CDP 端口',
        'panel.cdpConnections': 'CDP 连接数',
        'panel.supportGuidance': '状态指引',
        'panel.lastRefresh': '最近刷新时间:',
        'panel.supportHealth': '健康检查',
        'panel.launcherSaved': '启动器已保存',
        'panel.expectedPortActive': '预期端口活跃',
        'panel.cdpConnected': 'CDP 已连接',
        'panel.exePathValid': '程序路径有效',
        'panel.bgReady': '后台就绪',
        'panel.cdpPortLabel': 'CDP 端口',
        'panel.savePort': '保存端口',
        'panel.saveLauncher': '保存 IDE 启动器...',
        'panel.pauseOnMismatch': '检测到 CDP 端口不匹配时自动暂停',
        'panel.exePathOverride': '可执行文件手动路径覆盖',
        'panel.autoDetectStatus': '自动检测状态: ',
        'panel.chooseIdePath': '选择 IDE 路径...',
        'panel.clearManualPath': '清除手动路径',
        'panel.toggleAuto': '开/关 自动接受',
        'panel.toggleBg': '开/关 后台模式',
        'panel.copyDiagnostics': '复制诊断报告',
        'panel.openOutputLog': '打开输出日志',
        'panel.copySupportBundle': '复制完整排错报告',
        'panel.statusSummary': '自动接受: {0} | 后台模式: {1}',
        'panel.savedLauncherPath': '已保存启动器路径',
        'panel.launcherPort': '启动器端口: ',
        'panel.howToOpen': '启动使用指南',
        'panel.copyLauncherSteps': '复制启动步骤',
        'panel.manualCmdTitle': '手动命令行启动方式（备用）',
        'panel.copyManualCmd': '复制手动命令',
        'panel.recentActivity': '近期活动统计',
        'panel.lastAction': '最近操作',
        'panel.approvals': '批准点击数',
        'panel.permissions': '权限授权数',
        'panel.terminal': '终端命令数',
        'panel.fileEdits': '文件编辑数',
        'panel.blocked': '已拦截危险操作',
        'panel.credits': '汉化分支维护者：angelic • 原作者：pesosz (MIT 许可证)'
    }
};

let currentLanguage = 'zh-CN';

function detectSystemLanguage() {
    const vscodeLocale = vscode.env.language || '';
    if (vscodeLocale.toLowerCase().startsWith('zh')) {
        return 'zh-CN';
    }
    return 'en';
}

function resolveLanguage(configuredLang) {
    if (configuredLang === 'zh-CN' || configuredLang === 'zh') {
        return 'zh-CN';
    }
    if (configuredLang === 'en') {
        return 'en';
    }
    return detectSystemLanguage();
}

function initLanguage(configuredLang) {
    currentLanguage = resolveLanguage(configuredLang);
    return currentLanguage;
}

function setLanguage(lang) {
    if (lang === 'zh-CN' || lang === 'en') {
        currentLanguage = lang;
    } else {
        currentLanguage = detectSystemLanguage();
    }
    return currentLanguage;
}

function getLanguage() {
    return currentLanguage;
}

function t(key, ...args) {
    const dict = translations[currentLanguage] || translations['en'];
    let str = dict[key] || translations['en'][key] || key;
    if (args.length > 0) {
        args.forEach((val, idx) => {
            str = str.replace(new RegExp(`\\{${idx}\\}`, 'g'), String(val));
        });
    }
    return str;
}

function getAllTranslations(lang = currentLanguage) {
    return translations[lang] || translations['zh-CN'];
}

module.exports = {
    t,
    initLanguage,
    setLanguage,
    getLanguage,
    getAllTranslations,
    detectSystemLanguage
};
