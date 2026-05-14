/* ===== Theme Manager ===== */
(function () {
  const THEME_KEY = 'course-ui-theme';
  const themes = {
    default: { name: '商务绿', icon: '▣', desc: '绿色商务风格，简约稳重，适合日常办公使用。' },
    anime: { name: '二次元', icon: '✦', desc: '暖色系动漫风格，柔和圆角，活泼可爱。' },
    tech: { name: '科技感', icon: '◈', desc: '暗色科幻风格，霓虹蓝绿配色，极客美学。' }
  };

  window.Theme = {
    current: function () {
      return localStorage.getItem(THEME_KEY) || 'default';
    },
    apply: function (name) {
      document.documentElement.setAttribute('data-theme', name || 'default');
      localStorage.setItem(THEME_KEY, name || 'default');
    },
    list: function () {
      return Object.entries(themes).map(function (entry) {
        return { id: entry[0], name: entry[1].name, icon: entry[1].icon, desc: entry[1].desc };
      });
    },
    info: function (id) {
      return themes[id] || themes['default'];
    },
    init: function () {
      var saved = localStorage.getItem(THEME_KEY) || 'default';
      document.documentElement.setAttribute('data-theme', saved);
    }
  };

  Theme.init();
})();
