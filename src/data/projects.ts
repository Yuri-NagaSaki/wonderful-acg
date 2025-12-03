export interface Project {
  title: string;
  url: string;
  description: string;
  nsfw?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  projects: Project[];
}

export const categories: Category[] = [
  {
    id: 'bot',
    name: 'BOT',
    icon: '🤖',
    projects: [
      { title: 'zhenxun_bot', url: 'https://github.com/HibiKier/zhenxun_bot', description: '基于 Nonebot2 和 go-cqhttp 开发，以 postgresql 作为数据库，非常可爱的绪山真寻bot' },
      { title: 'nonebot', url: 'https://github.com/nonebot/nonebot', description: '基于 OneBot 标准的 Python 异步 QQ 机器人框架' },
      { title: 'Adachi-BOT', url: 'https://github.com/Arondight/Adachi-BOT', description: '一个在QQ中运行的原神助手' },
      { title: 'go-cqhttp', url: 'https://github.com/Mrs4s/go-cqhttp', description: 'cqhttp的golang实现，轻量、原生跨平台' },
      { title: 'nazurin', url: 'https://github.com/y-young/nazurin', description: '图片收藏机器人' },
      { title: 'LittlePaimon', url: 'https://github.com/CMHopeSunshine/LittlePaimon', description: '原神qq群机器人' },
      { title: 'HoshinoBot', url: 'https://github.com/Ice-Cirno/HoshinoBot', description: 'A qqbot for Princess Connect Re:Dive' },
      { title: 'ABot-Graia', url: 'https://github.com/djkcyl/ABot-Graia', description: '一个使用 Graia Ariadne 搭建的 QQ 功能性机器人' },
      { title: 'novelai-bot', url: 'https://github.com/koishijs/novelai-bot', description: '基于 NovelAI 的画图机器人' },
      { title: 'Majsoul_bot', url: 'https://github.com/DaiShengSheng/Majsoul_bot', description: 'HoshinoBot下的雀魂QQ机器人' },
      { title: 'Majsoul-QQBot', url: 'https://github.com/NekoRabi/Majsoul-QQBot', description: '基于YiriMirai的雀魂机器人' },
      { title: 'CyberGroupmate', url: 'https://github.com/Archeb/CyberGroupmate', description: '赛博群友' },
    ],
  },
  {
    id: 'anime',
    name: '追番',
    icon: '📺',
    projects: [
      { title: 'Auto_Bangumi', url: 'https://github.com/EstrellaXD/Auto_Bangumi', description: '全自动追番工具，节约时间创造价值' },
      { title: 'minaplay', url: 'https://github.com/nepsyn/minaplay', description: 'MinaPlay 是一个基于 RSS 订阅的追番 / 追剧个人媒体库' },
      { title: 'ani-rss', url: 'https://github.com/wushuo894/ani-rss', description: '全自动追番工具（Java 版）' },
      { title: 'MALSync', url: 'https://github.com/MALSync/MALSync', description: '将 MyAnimeList/AniList/Kitsu/Simkl 集成到站点中，并具有自动剧集跟踪功能' },
      { title: 'Imomoe', url: 'https://github.com/SkyD666/Imomoe', description: '樱花动漫第三方安卓Android客户端' },
      { title: 'animeko', url: 'https://github.com/open-ani/animeko', description: '一站式在线弹幕追番平台：全自动 BT + 在线多数据源聚合，离线缓存，Bangumi 收藏同步，弹幕云过滤' },
      { title: 'animeTrackerList', url: 'https://github.com/DeSireFire/animeTrackerList', description: '动漫磁性链接加速方案' },
      { title: 'AnimeSearcher', url: 'https://github.com/zaxtyson/AnimeSearcher', description: '整合第三方网站的视频和弹幕资源，为白嫖党提供最佳看番追剧体验' },
      { title: 'PlexAniSync', url: 'https://github.com/RickDB/PlexAniSync', description: '将 Plex 动漫库同步到 AniList' },
      { title: 'Bangumi', url: 'https://github.com/RanKKI/Bangumi', description: '高度自定义的自动追番项目，搭配 Jellyfin 等媒体库使用更香' },
      { title: 'animity', url: 'https://github.com/kl3jvi/animity', description: 'Android 追番流媒体（国外）' },
      { title: 'TrackersListCollection', url: 'https://github.com/XIU2/TrackersListCollection', description: '每日更新！全网热门BT追踪器列表' },
      { title: 'miru', url: 'https://github.com/ThaUnknown/miru', description: '流式下载种子的客户端，边看边下' },
      { title: 'Miruro', url: 'https://github.com/Miruro-no-kuon/Miruro', description: '基于 Vite 和 Bun 的在线动漫' },
      { title: 'seanime', url: 'https://github.com/5rahim/seanime', description: '扫描、自动化和欣赏您的动漫收藏、阅读漫画、跟踪您的进度等等 AniList 集成' },
      { title: 'sub_share', url: 'https://github.com/foxofice/sub_share', description: '字幕共享' },
      { title: 'Haruhana-Fansub', url: 'https://github.com/HaruhanaSub/Haruhana-Fansub', description: '拨雪寻春字幕组' },
      { title: 'MPV_lazy', url: 'https://github.com/hooke007/MPV_lazy', description: 'MPV 播放器懒人包' },
      { title: 'mpv.net-DW', url: 'https://github.com/diana7127/mpv.net-DW', description: 'mpv.net_CM的DW版本，定制了播放界面、右键菜单、缩略图、视频滤镜和着色器' },
      { title: 'Anime-Subtitles', url: 'https://github.com/bipy/Anime-Subtitles', description: '外挂字幕备份' },
      { title: 'AnimeGarden', url: 'https://github.com/yjl9903/AnimeGarden', description: '动漫花园第3方镜像站及动漫Torrent聚合站' },
      { title: 'fixarr', url: 'https://github.com/sachinsenal0x64/fixarr', description: '字幕重命名方案' },
      { title: 'subtitle-renamer', url: 'https://github.com/nuthx/subtitle-renamer', description: '跨平台字幕重命名方案' },
      { title: 'bangumi-renamer', url: 'https://github.com/nuthx/bangumi-renamer', description: '自动识别番剧基于罗马音进行重命名' },
      { title: 'fontInAss', url: 'https://github.com/RiderLty/fontInAss', description: '实时将字体子集化后嵌入ass的工具' },
      { title: 'Kyoo', url: 'https://github.com/zoriya/Kyoo', description: '新的媒体库解决方案，Jellyfin 或 Plex 的替代品' },
      { title: 'dd-danmaku', url: 'https://github.com/chen3861229/dd-danmaku', description: 'Emby 新版弹幕插件' },
      { title: 'StrmAssistant', url: 'https://github.com/sjtuross/StrmAssistant', description: 'Emby神医助手' },
    ],
  },
  {
    id: 'datasource',
    name: '数据源',
    icon: '📊',
    projects: [
      { title: 'Bangumi Data', url: 'https://github.com/bangumi-data/bangumi-data', description: '蜜柑计划番剧数据' },
      { title: '一言（ヒトコト）', url: 'https://hitokoto.cn', description: '一言 API' },
      { title: 'AnimeGarden', url: 'https://github.com/yjl9903/AnimeGarden', description: '动漫花园第三方镜像' },
    ],
  },
  {
    id: 'bilibili',
    name: 'Bilibili',
    icon: '📹',
    projects: [
      { title: 'Bilibili-Evolved', url: 'https://github.com/the1812/Bilibili-Evolved', description: '强大的哔哩哔哩增强脚本' },
      { title: 'Hitomi-Downloader', url: 'https://github.com/KurtBestor/Hitomi-Downloader', description: '用于从各种网站下载图像/视频/音乐/文本等的桌面实用程序' },
      { title: 'bilibili-API-collect', url: 'https://github.com/SocialSisterYi/bilibili-API-collect', description: '哔哩哔哩-API 收集整理' },
      { title: 'Bili.Uwp', url: 'https://github.com/Richasy/Bili.Uwp', description: '适用于新系统UI的哔哩' },
      { title: 'BiliRoaming', url: 'https://github.com/yujincheng08/BiliRoaming', description: '哔哩漫游，解除B站客户端番剧区域限制，并且提供其他小功能' },
      { title: 'bilibili-helper-o', url: 'https://github.com/bilibili-helper/bilibili-helper-o', description: '哔哩哔哩辅助工具，可以替换播放器、推送通知并进行一些快捷操作' },
      { title: 'dailycheckin', url: 'https://github.com/Sitoi/dailycheckin', description: '基于腾讯云函数的自动签到' },
      { title: 'BewlyBewly', url: 'https://github.com/BewlyBewly/BewlyBewly', description: 'Bilibili 页面的重新设计' },
      { title: 'BilibiliSponsorBlock', url: 'https://github.com/hanydd/BilibiliSponsorBlock', description: '一款跳过B站视频中恰饭片段的浏览器插件（强烈推荐）' },
      { title: 'yutto', url: 'https://github.com/yutto-dev/yutto', description: '一个可爱且任性的 B 站视频下载器' },
      { title: 'bili-sync', url: 'https://github.com/amtoaer/bili-sync', description: '由 Rust & Tokio 驱动的哔哩哔哩同步工具' },
    ],
  },
  {
    id: 'theme',
    name: '动漫主题',
    icon: '🎨',
    projects: [
      { title: 'doki-theme-vscode', url: 'https://github.com/doki-theme/doki-theme-vscode', description: 'VS-Code 的可爱动漫人物主题' },
      { title: 'NotAnotherAnimeTheme', url: 'https://github.com/puckzxz/NotAnotherAnimeTheme', description: 'Discord 动漫主题' },
      { title: 'doki-theme-jetbrains', url: 'https://github.com/doki-theme/doki-theme-jetbrains', description: 'Jetbrains 动漫主题' },
      { title: 'Telegram Theme', url: 'https://t.me/JoinThemesWorld', description: 'Telegram 动漫主题' },
      { title: 'Sakurairo', url: 'https://github.com/mirai-mamori/Sakurairo', description: 'Wordpress 主题' },
      { title: 'sakura', url: 'https://github.com/mashirozx/sakura', description: 'Wordpress 主题' },
    ],
  },
  {
    id: 'imagesearch',
    name: '图像搜索',
    icon: '🔍',
    projects: [
      { title: 'trace.moe', url: 'https://github.com/soruly/trace.moe', description: '动漫图像搜索 - What Anime Is This?' },
    ],
  },
  {
    id: 'manga',
    name: '漫画',
    icon: '📖',
    projects: [
      { title: 'LANraragi', url: 'https://github.com/Difegue/LANraragi', description: '开源漫画存储仓库' },
    ],
  },
  {
    id: 'app',
    name: 'APP',
    icon: '📱',
    projects: [
      { title: 'iwara4a', url: 'https://github.com/re-ovo/iwara4a', description: '基于Jetpack Compose开发的iwara安卓app' },
      { title: 'AcgClub', url: 'https://github.com/Rabtman/AcgClub', description: '一款纯粹的ACG聚合类App' },
      { title: 'pikapika', url: 'https://github.com/niuhuan/pikapika', description: '美观易用且无广告的二次元客户端，同时支持MacOS，Windows，Android，iOS', nsfw: true },
      { title: 'jasmine', url: 'https://github.com/niuhuan/jasmine', description: '一个美观易用的漫画客户端，同时支持 Android / iOS / MacOS / Windows / Linux', nsfw: true },
      { title: 'EasyBangumi', url: 'https://github.com/heyanLE/EasyBangumi', description: '纯纯看番，追番和看番的安卓软件，多番剧源' },
      { title: 'hacg', url: 'https://github.com/yueeng/hacg', description: '琉璃神社 hacg android app by scala' },
      { title: 'misskey', url: 'https://github.com/misskey-dev/misskey', description: 'An interplanetary microblogging platform' },
      { title: 'NipaPlay', url: 'https://github.com/MCDFsteve/NipaPlay', description: 'Nipaplay 一款跨平台本地弹幕视频播放器，弹弹play 的mac代餐' },
    ],
  },
  {
    id: 'danmaku',
    name: '弹幕',
    icon: '💬',
    projects: [
      { title: 'ABPlayerHTML5', url: 'https://github.com/jabbany/ABPlayerHTML5', description: '弹幕评论的视频播放器，HTML5 中的 ABPlayer' },
      { title: 'CommentCoreLibrary', url: 'https://github.com/jabbany/CommentCoreLibrary', description: 'Javascript 实时评论（弹幕）引擎实现' },
      { title: 'Danmaku', url: 'https://github.com/weizhenye/Danmaku', description: '高性能 JavaScript 弹幕引擎' },
      { title: 'danmaku2ass', url: 'https://github.com/m13253/danmaku2ass', description: '将评论从 Niconico/AcFun/bilibili 转换为 ASS 格式' },
      { title: 'DPlayer', url: 'https://github.com/DIYgod/DPlayer', description: 'HTML5 弹幕视频播放器' },
      { title: 'AnimeSearcher', url: 'https://github.com/zaxtyson/AnimeSearcher', description: '整合第三方网站的视频和弹幕，为白嫖党提供最佳看番追剧体验' },
    ],
  },
  {
    id: 'pixiv',
    name: 'Pixiv',
    icon: '🖼️',
    projects: [
      { title: 'PixivBiu', url: 'https://github.com/txperl/PixivBiu', description: 'Pixiv 辅助工具' },
      { title: 'PixivBatchDownloader', url: 'https://github.com/xuejianxianzun/PixivBatchDownloader', description: 'Chrome 扩展，批量下载 Pixiv 的插画和小说，过滤作品、下载时重命名、转换动态图片等' },
      { title: 'PixivFanboxDownloader', url: 'https://github.com/xuejianxianzun/PixivFanboxDownloader', description: 'Chrome 扩展，用于批量下载 Pixiv Fanbox 上的文件' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: '🛠️',
    projects: [
      { title: 'voicevox', url: 'https://github.com/VOICEVOX/voicevox', description: '文本转语音' },
      { title: 'sakana', url: 'https://github.com/itorr/sakana', description: '「Sakana!」石蒜模拟器' },
      { title: 'paimon-moe', url: 'https://github.com/MadeBaruna/paimon-moe', description: 'Genshin Impact 追踪器' },
      { title: 'SakuraLLM', url: 'https://github.com/SakuraLLM/SakuraLLM', description: '适配轻小说/Galgame的日中翻译大模型' },
      { title: 'anilist-mcp', url: 'https://github.com/yuna0x0/anilist-mcp', description: 'AniList MCP 服务' },
    ],
  },
  {
    id: 'ai-art',
    name: 'AI作画',
    icon: '🎭',
    projects: [
      { title: 'StableDiffusionBook', url: 'https://github.com/sudoskys/StableDiffusionBook', description: 'AI 作画 Wiki' },
      { title: 'danbooru-diffusion-prompt-builder', url: 'https://github.com/wfjsw/danbooru-diffusion-prompt-builder', description: 'Danbooru/NovelAI tag 构建器' },
      { title: 'AI_image_gen', url: 'https://github.com/CYDXDianXian/AI_image_gen', description: 'NovelAI绘图 HoshinoBot 插件版' },
      { title: 'airi', url: 'https://github.com/moeru-ai/airi', description: 'AI VTuber' },
    ],
  },
];

// 计算总项目数
export const totalProjects = categories.reduce((sum, cat) => sum + cat.projects.length, 0);
