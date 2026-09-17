/* @ds-bundle: {"format":4,"namespace":"KarnetKrakWDesignSystem_fd72fb","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"CATEGORY_ICON","sourcePath":"components/core/Tag.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CategoryTile","sourcePath":"components/core/Tag.jsx"},{"name":"DateBadge","sourcePath":"components/events/DateBadge.jsx"},{"name":"EventCard","sourcePath":"components/events/EventCard.jsx"},{"name":"InfoBar","sourcePath":"components/events/InfoBar.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e61daf00bec7","components/core/Button.jsx":"2bd548314dc6","components/core/Card.jsx":"39460e715685","components/core/Icon.jsx":"d8208e6b03df","components/core/IconButton.jsx":"d2cb8760a990","components/core/Logo.jsx":"374421de6ea6","components/core/SectionHeader.jsx":"3ee0cfb265e7","components/core/Tag.jsx":"b245d6ea4a95","components/events/DateBadge.jsx":"6c2900c71ba3","components/events/EventCard.jsx":"ba9c9429da0d","components/events/InfoBar.jsx":"d88f41b812ef","components/feedback/Dialog.jsx":"13d0391b1c25","components/feedback/Toast.jsx":"91ac33a7e2ca","components/feedback/Tooltip.jsx":"01de3cb41f6c","components/forms/Checkbox.jsx":"0be602a474fb","components/forms/Input.jsx":"6db2c66e0300","components/forms/Radio.jsx":"0fe01b6af831","components/forms/SearchField.jsx":"6c076930eb0e","components/forms/Select.jsx":"c69d1c41ccf2","components/forms/Switch.jsx":"823413a11c42","components/navigation/Breadcrumb.jsx":"e272b178bc82","components/navigation/Pagination.jsx":"aa883f6230f6","components/navigation/Tabs.jsx":"2b702f545c49","ui_kits/karnet-web/Chrome.jsx":"961845c38851","ui_kits/karnet-web/EventScreen.jsx":"2fbdab76e49e","ui_kits/karnet-web/HomeScreen.jsx":"1b937f86f935","ui_kits/karnet-web/ListingScreen.jsx":"fa94e6810e7b","ui_kits/karnet-web/MobileScreens.jsx":"301d72fec732","ui_kits/karnet-web/data.js":"7d8ed2029085"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KarnetKrakWDesignSystem_fd72fb = window.KarnetKrakWDesignSystem_fd72fb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  accent: ["var(--accent)", "var(--white)"],
  dark: ["var(--ink-700)", "var(--white)"],
  soft: ["var(--rose-100)", "var(--rose-700)"],
  success: ["var(--success-soft)", "var(--success)"],
  warning: ["var(--warning-soft)", "var(--warning)"],
  info: ["var(--info-soft)", "var(--info)"],
  quiet: ["var(--ink-100)", "var(--ink-600)"]
};
function Badge({
  children,
  tone = "accent",
  uppercase = true,
  style,
  ...rest
}) {
  const [bg, fg] = TONE[tone] || TONE.accent;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 8px",
      borderRadius: "var(--radius-xs)",
      background: bg,
      color: fg,
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: uppercase ? "uppercase" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  interactive = false,
  padding = "var(--card-pad)",
  tone = "surface",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: tone === "alt" ? "var(--bg-surface-alt)" : tone === "inverse" ? "var(--bg-inverse)" : "var(--bg-surface)",
      color: tone === "inverse" ? "var(--text-inverse)" : "var(--text-body)",
      border: "1px solid " + (tone === "inverse" ? "transparent" : "var(--border-default)"),
      borderRadius: "var(--radius-card)",
      padding,
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-none)",
      transform: interactive && hover ? "translateY(var(--lift-y))" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      borderColor: interactive && hover ? "var(--accent)" : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Material Symbols Sharp glyph. The sharp cut has square terminals and hard corners, so it
   matches the system's 0px radii — no rounded caps anywhere. The font is loaded by
   tokens/fonts.css, so any page linking styles.css can render icons with no extra script.

   Names are the system's own vocabulary (kebab-case, Lucide-compatible); this map translates
   them to Material ligatures so existing call sites keep working. An unmapped name is passed
   through as a ligature, letting you use any Material Symbols name directly.

   Deliberately absent: brand marks. Material Symbols ships no platform logos, and a generic
   stand-in (a thumbs-up for Facebook) misreads badly — social links render as wordmarks in
   text until the site's own Fontello set is supplied. */
const GLYPH = {
  search: "search",
  filter: "filter_alt",
  "sliders-horizontal": "tune",
  "map-pin": "location_on",
  map: "map",
  home: "home",
  menu: "menu",
  "calendar-days": "calendar_month",
  "calendar-plus": "event_available",
  "calendar-x": "event_busy",
  clock: "schedule",
  ticket: "local_activity",
  plus: "add",
  check: "check",
  x: "close",
  heart: "favorite",
  bookmark: "bookmark",
  "share-2": "share",
  bell: "notifications",
  megaphone: "campaign",
  user: "person",
  glasses: "article",
  info: "info",
  "arrow-right": "arrow_forward",
  "arrow-left": "arrow_back",
  "arrow-up-right": "north_east",
  "arrow-down": "arrow_downward",
  "chevron-right": "chevron_right",
  "chevron-left": "chevron_left",
  "chevron-down": "expand_more",
  "chevron-up": "expand_less",
  list: "view_list",
  "grid-2x2": "grid_view",
  "layout-grid": "dashboard",
  music: "music_note",
  drama: "theater_comedy",
  theater: "theater_comedy",
  flag: "flag",
  "book-open": "menu_book",
  film: "movie",
  image: "image",
  frame: "image",
  baby: "child_care",
  phone: "call",
  mail: "mail",
  globe: "language",
  "check-circle": "check_circle",
  "alert-triangle": "warning",
  "alert-circle": "error",
  tag: "sell"
};
function Icon({
  name,
  size = 20,
  weight = 400,
  className = "",
  style,
  ...rest
}) {
  const glyph = GLYPH[name] || name;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    className: ("ks-icon " + className).trim(),
    style: {
      fontSize: size,
      width: size,
      height: size,
      flex: "0 0 auto",
      fontVariationSettings: '"FILL" 0, "wght" ' + weight + ', "GRAD" 0, "opsz" 24',
      overflow: "hidden",
      ...style
    }
  }, rest), glyph);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Karnet's signature action is a solid rose bar with a darker square icon block on the
   trailing edge, and it inverts to ink on hover. `split` keeps that construction;
   `primary` is the modernized single-block version. */
const SIZE = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 18px",
    font: "var(--fw-bold) var(--fs-xs)/1 var(--font-body)",
    gap: 8,
    icon: 14
  },
  md: {
    height: "var(--control-h-md)",
    padding: "0 24px",
    font: "var(--type-button)",
    gap: 10,
    icon: 16
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 30px",
    font: "var(--fw-bold) var(--fs-base)/1 var(--font-body)",
    gap: 12,
    icon: 18
  }
};
const VARIANT = {
  primary: {
    background: "var(--accent)",
    color: "var(--accent-contrast)",
    border: "1px solid var(--accent)"
  },
  split: {
    background: "var(--accent)",
    color: "var(--accent-contrast)",
    border: "1px solid var(--accent)"
  },
  secondary: {
    background: "transparent",
    color: "var(--text-strong)",
    border: "1px solid var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-strong)",
    border: "1px solid transparent"
  },
  inverse: {
    background: "var(--white)",
    color: "var(--ink-700)",
    border: "1px solid var(--white)"
  },
  danger: {
    background: "var(--danger)",
    color: "var(--white)",
    border: "1px solid var(--danger)"
  }
};
const HOVER = {
  primary: {
    background: "var(--accent-hover)",
    borderColor: "var(--accent-hover)"
  },
  split: {
    background: "var(--accent-hover)",
    borderColor: "var(--accent-hover)"
  },
  secondary: {
    background: "var(--ink-700)",
    color: "var(--text-inverse)",
    borderColor: "var(--ink-700)"
  },
  ghost: {
    background: "var(--ink-100)"
  },
  inverse: {
    background: "var(--ink-100)",
    borderColor: "var(--ink-100)"
  },
  danger: {
    background: "var(--crimson-700)",
    borderColor: "var(--crimson-700)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZE[size] || SIZE.md;
  const split = variant === "split";
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: split ? "space-between" : "center",
      gap: split ? 0 : s.gap,
      height: s.height,
      padding: split ? "0 0 0 24px" : s.padding,
      font: s.font,
      letterSpacing: "var(--ls-label)",
      borderRadius: "var(--radius-control)",
      overflow: "hidden",
      textDecoration: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-control)",
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      ...(VARIANT[variant] || VARIANT.primary),
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }, rest), iconLeft && !split ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      paddingRight: split ? 20 : 0
    }
  }, children), split ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.height,
      height: s.height,
      flex: "0 0 auto",
      background: hover && !disabled ? "var(--accent)" : "var(--accent-icon-block)",
      transition: "background-color var(--dur-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight || "arrow-right",
    size: s.icon
  })) : iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 32,
  md: 40,
  lg: 50
};
const GLYPH = {
  sm: 15,
  md: 18,
  lg: 20
};
function IconButton({
  icon,
  label,
  variant = "solid",
  size = "md",
  active = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const solid = variant === "solid";
  const outline = variant === "outline";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    "aria-pressed": active || undefined,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: box,
      height: box,
      borderRadius: "var(--radius-icon-tile)",
      background: solid ? hover ? "var(--ink-700)" : "var(--accent)" : active ? "var(--ink-700)" : hover ? "var(--ink-100)" : "transparent",
      color: solid || active ? "var(--white)" : "var(--text-strong)",
      border: outline ? "1px solid " + (hover ? "var(--accent)" : "var(--border-default)") : "1px solid transparent",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: GLYPH[size] || GLYPH.md
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The official Kraków Culture / KARNET lockup. Two files ship in assets/:
   logo-black.svg (light backgrounds) and logo.png (white, for photography and ink).
   Pass `src` when your page sits at a different depth than the default. */
function Logo({
  variant = "black",
  height = 56,
  src,
  alt = "Kraków Culture — Karnet",
  style,
  ...rest
}) {
  const file = src || (variant === "white" ? "assets/logo.png" : "assets/logo-black.svg");
  return /*#__PURE__*/React.createElement("img", _extends({
    src: file,
    alt: alt,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The site's section head: serif title with the result count in rose beside it,
   and a "Zobacz wszystkie >" link on the right. */
function SectionHeader({
  title,
  count,
  description,
  actionLabel = "Zobacz wszystkie",
  actionHref,
  size = "md",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      flexWrap: "wrap",
      paddingBottom: "var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      font: size === "lg" ? "var(--type-h1)" : "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)"
    }
  }, title, count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)",
      font: "inherit"
    }
  }, "(", count, ")") : null), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      maxWidth: "62ch"
    }
  }, description) : null), actionHref !== null && actionLabel ? /*#__PURE__*/React.createElement("a", {
    href: actionHref || "#",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      textDecoration: "none",
      font: "var(--fw-regular) var(--fs-base)/1 var(--font-body)",
      color: hover ? "var(--text-accent)" : "var(--text-strong)",
      transition: "color var(--dur-fast) var(--ease-standard)"
    }
  }, actionLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 15
  })) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Genres are graded through the rose ramp — the site distinguishes them by icon, not by hue. */
const CAT = {
  festival: "var(--cat-festival)",
  music: "var(--cat-music)",
  theatre: "var(--cat-theatre)",
  literature: "var(--cat-literature)",
  film: "var(--cat-film)",
  exhibition: "var(--cat-exhibition)",
  metropolis: "var(--cat-metropolis)",
  other: "var(--cat-other)",
  neutral: "var(--ink-400)"
};
const CAT_SOFT = {
  festival: "var(--cat-festival-soft)",
  music: "var(--cat-music-soft)",
  theatre: "var(--cat-theatre-soft)",
  literature: "var(--cat-literature-soft)",
  film: "var(--cat-film-soft)",
  exhibition: "var(--cat-exhibition-soft)",
  metropolis: "var(--cat-metropolis-soft)",
  other: "var(--cat-other-soft)",
  neutral: "var(--ink-100)"
};
const CATEGORY_ICON = {
  festival: "flag",
  music: "music",
  theatre: "drama",
  literature: "book-open",
  film: "film",
  exhibition: "image",
  metropolis: "calendar-days",
  other: "layout-grid",
  neutral: "tag"
};
function Tag({
  children,
  category = "neutral",
  tone = "solid",
  icon,
  onRemove,
  style,
  ...rest
}) {
  const c = CAT[category] || CAT.neutral;
  const solid = tone === "solid";
  const outline = tone === "outline";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 26,
      padding: onRemove ? "0 6px 0 10px" : "0 10px",
      borderRadius: "var(--radius-tag)",
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-body)",
      letterSpacing: "var(--ls-label)",
      background: solid ? c : outline ? "transparent" : CAT_SOFT[category] || CAT_SOFT.neutral,
      color: solid ? "var(--white)" : c,
      border: "1px solid " + (outline ? c : "transparent"),
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), icon !== false ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || CATEGORY_ICON[category] || "tag",
    size: 12
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Usu\u0144 filtr",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      border: 0,
      borderRadius: "var(--radius-xs)",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
}

/* The square rose tile that marks an event's genre on every thumbnail. */
function CategoryTile({
  category = "neutral",
  size = 34,
  style,
  ...rest
}) {
  const clean = {};
  for (const k in style || {}) if (style[k] !== undefined) clean[k] = style[k];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "0 0 auto",
      background: CAT[category] || CAT.neutral,
      color: "var(--white)",
      borderRadius: "var(--radius-icon-tile)",
      ...clean
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: CATEGORY_ICON[category] || "tag",
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { CATEGORY_ICON, Tag, CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/events/DateBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DateBadge({
  day,
  month,
  weekday,
  tone = "light",
  size = "md",
  style,
  ...rest
}) {
  const big = size === "lg";
  const dark = tone === "dark";
  const rose = tone === "rose";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: big ? 74 : 58,
      padding: big ? "10px 0 12px" : "8px 0 10px",
      flex: "0 0 auto",
      background: rose ? "var(--accent)" : dark ? "var(--ink-700)" : "var(--bg-surface)",
      color: rose || dark ? "var(--white)" : "var(--text-strong)",
      border: "1px solid " + (rose ? "var(--accent)" : dark ? "var(--ink-700)" : "var(--border-default)"),
      borderRadius: "var(--radius-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: (big ? "var(--fw-regular) var(--fs-3xl)" : "var(--fw-regular) var(--fs-xl)") + "/1 var(--font-display)"
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: rose || dark ? "rgba(255,255,255,.82)" : "var(--text-accent)"
    }
  }, month), weekday ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2,
      font: "var(--fw-regular) var(--fs-3xs)/1 var(--font-body)",
      color: rose || dark ? "rgba(255,255,255,.7)" : "var(--text-faint)"
    }
  }, weekday) : null);
}
Object.assign(__ds_scope, { DateBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/DateBadge.jsx", error: String((e && e.message) || e) }); }

// components/events/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The site's event card: thumbnail with a rose category tile pinned to its top-left,
   serif title, rose genre label, and a footer bar carrying the date between a
   "+ moje wydarzenia" tile and an arrow tile. Cards with no image show the category
   glyph large in pale rose on white — the site's own placeholder. */
function Media({
  image,
  category,
  ratio,
  tileSize = 34
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-media)",
      background: image ? "var(--ink-100)" : "var(--white)",
      border: image ? "none" : "1px solid var(--border-subtle)",
      aspectRatio: ratio,
      display: "grid",
      placeItems: "center"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cat-" + category + ")",
      opacity: .32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: __ds_scope.CATEGORY_ICON[category] || "image",
    size: 44,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement(__ds_scope.CategoryTile, {
    category: category,
    size: tileSize,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      borderRadius: "var(--radius-media) 0 var(--radius-icon-tile) 0"
    }
  }));
}
function FooterBar({
  date,
  onAdd,
  compact
}) {
  const [hoverAdd, setHoverAdd] = React.useState(false);
  const [hoverGo, setHoverGo] = React.useState(false);
  const box = compact ? 28 : 34;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch",
      justifyContent: "space-between",
      gap: 10,
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: 0,
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      minWidth: 0
    }
  }, onAdd ? /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Dodaj do moich wydarze\u0144",
    onClick: e => {
      e.preventDefault();
      onAdd();
    },
    onMouseEnter: () => setHoverAdd(true),
    onMouseLeave: () => setHoverAdd(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: box,
      height: box,
      flex: "0 0 auto",
      marginTop: 10,
      marginBottom: 10,
      background: hoverAdd ? "var(--ink-700)" : "var(--accent)",
      color: "var(--white)",
      borderRadius: "var(--radius-icon-tile)",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 15
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, date)), /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setHoverGo(true),
    onMouseLeave: () => setHoverGo(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: box,
      height: box,
      flex: "0 0 auto",
      marginTop: 10,
      marginBottom: 10,
      background: hoverGo ? "var(--ink-700)" : "var(--accent)",
      color: "var(--white)",
      borderRadius: "var(--radius-icon-tile)",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  })));
}
function EventCard({
  title,
  category = "other",
  categoryLabel,
  date,
  time,
  venue,
  description,
  image,
  layout = "poster",
  onAdd,
  href = "#",
  style,
  /* domain fields commonly spread in from event data — accepted and not forwarded to the DOM */
  id,
  free,
  price,
  program,
  day,
  month,
  weekday,
  badge,
  lead,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const row = layout === "row";
  const tile = layout === "tile";
  const dateLine = [date, time].filter(Boolean).join(", ");
  const titleStyle = {
    font: tile ? "var(--type-h4)" : row ? "var(--type-h3)" : "var(--type-h3)",
    letterSpacing: "var(--ls-heading)",
    color: hover ? "var(--text-accent)" : "var(--text-strong)",
    transition: "color var(--dur-fast) var(--ease-standard)",
    display: "-webkit-box",
    WebkitLineClamp: tile ? 2 : 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    minWidth: 0,
    overflowWrap: "anywhere"
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: row ? "grid" : "flex",
      gridTemplateColumns: row ? "150px 1fr" : undefined,
      flexDirection: "column",
      gap: row ? "var(--space-5)" : "var(--space-4)",
      padding: tile ? "var(--space-4)" : "var(--space-5)",
      background: "var(--bg-surface)",
      border: "1px solid " + (hover ? "var(--accent)" : "var(--border-default)"),
      borderRadius: "var(--radius-card)",
      textDecoration: "none",
      color: "var(--text-body)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-none)",
      transform: hover ? "translateY(var(--lift-y))" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Media, {
    image: image,
    category: category,
    ratio: row ? "3 / 4" : tile ? "1 / 1" : "3 / 2",
    tileSize: tile ? 28 : 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minWidth: 0,
      maxWidth: "100%",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: titleStyle
  }, title), categoryLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-accent)"
    }
  }, categoryLabel) : null, description && !tile ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      minWidth: 0,
      overflowWrap: "anywhere",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, description) : null, venue && !tile ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      minWidth: 0,
      maxWidth: "100%",
      overflow: "hidden",
      font: "var(--type-body-sm)",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rose-500)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, venue)) : null, /*#__PURE__*/React.createElement(FooterBar, {
    date: dateLine,
    onAdd: onAdd,
    compact: tile
  })));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/events/InfoBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The bordered fact bars on an event page: rose icon, value, optional expand chevron. */
function InfoBar({
  icon,
  children,
  expandable = false,
  open = false,
  onToggle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: expandable ? onToggle : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      minHeight: 52,
      padding: "0 16px",
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      cursor: expandable ? "pointer" : "default",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--rose-500)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      font: "var(--type-body-sm)",
      color: "var(--text-strong)"
    }
  }, children), expandable ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--rose-500)",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })) : null);
}
Object.assign(__ds_scope, { InfoBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/events/InfoBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "grid",
      placeItems: "center",
      padding: "var(--space-7)",
      background: "var(--bg-overlay)",
      backdropFilter: "blur(3px)",
      animation: "none"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--bg-surface)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Zamknij",
    onClick: onClose
  }) : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    icon: "info",
    color: "var(--ink-900)"
  },
  success: {
    icon: "check-circle",
    color: "var(--success)"
  },
  warning: {
    icon: "alert-triangle",
    color: "var(--amber-600)"
  },
  danger: {
    icon: "alert-circle",
    color: "var(--danger)"
  }
};
function Toast({
  children,
  tone = "neutral",
  onClose,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "12px 14px 12px 16px",
      minWidth: 300,
      background: "var(--ink-900)",
      color: "var(--paper)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      font: "var(--type-body-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: tone === "neutral" ? "var(--paper)" : t.color
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Zamknij",
    style: {
      border: 0,
      background: "transparent",
      color: "var(--ink-300)",
      cursor: "pointer",
      display: "inline-flex",
      padding: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  label,
  placement = "top",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 40,
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      background: "var(--ink-900)",
      color: "var(--paper)",
      font: "var(--fw-medium) var(--fs-2xs)/1.3 var(--font-body)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      opacity: open ? 1 : 0,
      transition: "opacity var(--dur-fast) var(--ease-standard)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  onChange,
  count,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      minHeight: 28,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      flex: "0 0 auto",
      borderRadius: "var(--radius-xs)",
      background: checked ? "var(--accent)" : "var(--bg-surface)",
      border: "1px solid " + (checked ? "var(--accent)" : "var(--border-default)"),
      color: "var(--white)",
      transition: "var(--transition-control)"
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 3
  }) : null), /*#__PURE__*/React.createElement("span", null, label), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-faint)"
    }
  }, "(", count, ")") : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The search panel's fields are underlined, not boxed: a rose label above, a rose
   1px rule below, an icon on the left. `variant="boxed"` is the modernized form field. */
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = "md",
  variant = "underline",
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const inputId = id || uid;
  const h = size === "lg" ? "var(--control-h-lg)" : size === "sm" ? "var(--control-h-sm)" : "var(--control-h-md)";
  const underline = variant === "underline";
  const line = error ? "var(--danger)" : focus ? "var(--accent-press)" : underline ? "var(--rose-500)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: underline ? 2 : 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: underline ? "var(--fw-regular) var(--fs-sm)/1.3 var(--font-body)" : "var(--type-label)",
      color: underline ? "var(--text-accent)" : "var(--text-strong)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: h,
      padding: underline ? "0 2px" : "0 14px",
      background: underline ? "transparent" : "var(--bg-surface)",
      borderRadius: underline ? 0 : "var(--radius-field)",
      border: underline ? "none" : "1px solid " + line,
      borderBottom: "1px solid " + line,
      boxShadow: !underline && focus ? "var(--shadow-focus)" : "none",
      transition: "var(--transition-control)",
      color: "var(--rose-500)"
    }
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 17
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      font: "var(--type-body)",
      color: "var(--text-strong)",
      padding: 0
    }
  }, rest))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      font: "var(--type-meta)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      minHeight: 28,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: "var(--bg-surface)",
      border: "1px solid " + (checked ? "var(--accent)" : "var(--border-default)"),
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--accent)" : "transparent",
      transition: "var(--transition-control)"
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  value,
  onChange,
  placeholder = "Wpisz szukane słowo",
  onSubmit,
  submitLabel = "Szukaj",
  size = "md",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const h = size === "lg" ? "var(--control-h-lg)" : "var(--control-h-md)";
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    },
    style: {
      display: "flex",
      alignItems: "stretch",
      height: h,
      background: "var(--bg-surface)",
      borderRadius: "var(--radius-control)",
      border: "1px solid " + (focus ? "var(--accent)" : "var(--border-default)"),
      overflow: "hidden",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      paddingLeft: 16,
      color: "var(--rose-500)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      padding: "0 12px",
      font: "var(--type-body)",
      color: "var(--text-strong)"
    }
  }), value ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onChange && onChange({
      target: {
        value: ""
      }
    }),
    "aria-label": "Wyczy\u015B\u0107",
    style: {
      border: 0,
      background: "transparent",
      color: "var(--text-muted)",
      cursor: "pointer",
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      border: 0,
      cursor: "pointer",
      padding: "0 24px",
      background: hover ? "var(--ink-700)" : "var(--accent)",
      color: "var(--white)",
      font: "var(--type-button)",
      letterSpacing: "var(--ls-label)",
      transition: "var(--transition-control)"
    }
  }, submitLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  })));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  size = "md",
  variant = "boxed",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const h = size === "lg" ? "var(--control-h-lg)" : size === "sm" ? "var(--control-h-sm)" : "var(--control-h-md)";
  const underline = variant === "underline";
  const line = focus ? "var(--accent-press)" : underline ? "var(--rose-500)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: underline ? 2 : 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      font: underline ? "var(--fw-regular) var(--fs-sm)/1.3 var(--font-body)" : "var(--type-label)",
      color: underline ? "var(--text-accent)" : "var(--text-strong)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: underline ? "0 2px" : "0 12px 0 14px",
      background: underline ? "transparent" : "var(--bg-surface)",
      borderRadius: underline ? 0 : "var(--radius-field)",
      border: underline ? "none" : "1px solid " + line,
      borderBottom: "1px solid " + line,
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      alignSelf: "stretch",
      paddingRight: 22,
      minWidth: 0,
      appearance: "none",
      border: 0,
      outline: "none",
      background: "transparent",
      font: "var(--type-body-sm)",
      color: "var(--text-strong)",
      cursor: "pointer"
    }
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      pointerEvents: "none",
      position: "absolute",
      right: underline ? 2 : 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--rose-500)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      minHeight: 28,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 40,
      height: 20,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--accent)" : "var(--ink-200)",
      transition: "background-color var(--dur-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 14,
      height: 14,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--dur-fast) var(--ease-standard)"
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap",
      font: "var(--fw-medium) var(--fs-2xs)/1.2 var(--font-body)",
      color: "var(--text-muted)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const item = typeof it === "string" ? {
      label: it
    } : it;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, item.href && !last ? /*#__PURE__*/React.createElement("a", {
      href: item.href,
      style: {
        color: "inherit",
        textDecoration: "none"
      }
    }, item.label) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? "var(--text-strong)" : "inherit"
      }
    }, item.label), !last ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        color: "var(--text-faint)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 12
    })) : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  nextLabel = "Następne",
  style,
  ...rest
}) {
  const go = p => onChange && onChange(Math.min(pageCount, Math.max(1, p)));
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 || i === pageCount || Math.abs(i - page) <= 2) pages.push(i);else if (pages[pages.length - 1] !== "…") pages.push("…");
  }
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      flexWrap: "wrap",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: "g" + i,
    style: {
      width: 28,
      textAlign: "center",
      color: "var(--text-faint)"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => go(p),
    "aria-current": p === page || undefined,
    style: {
      minWidth: 32,
      height: 32,
      padding: "0 8px",
      cursor: "pointer",
      border: 0,
      background: "transparent",
      borderRadius: "var(--radius-xs)",
      color: p === page ? "var(--text-accent)" : "var(--text-body)",
      font: (p === page ? "var(--fw-bold)" : "var(--fw-regular)") + " var(--fs-base)/1 var(--font-body)",
      transition: "var(--transition-control)"
    }
  }, p))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "split",
    size: "sm",
    onClick: () => go(page + 1),
    disabled: page === pageCount
  }, nextLabel));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The site's primary nav is a row of solid rose tabs that step darker across the row.
   variant="nav" reproduces that; "underline" and "pill" are quieter in-page switchers. */
const RAMP = ["var(--rose-400)", "var(--rose-400)", "var(--rose-600)", "#ad6676", "#aa6577", "var(--rose-700)", "var(--rose-800)", "var(--rose-900)"];
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  style,
  ...rest
}) {
  const nav = variant === "nav";
  const pill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: nav ? 2 : pill ? 8 : 28,
      borderBottom: nav || pill ? "none" : "1px solid var(--border-default)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const item = typeof it === "string" ? {
      value: it,
      label: it
    } : it;
    const active = item.value === value;
    const base = RAMP[i % RAMP.length];
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(item.value),
      style: {
        position: "relative",
        border: 0,
        cursor: "pointer",
        flex: nav ? 1 : "0 0 auto",
        background: nav ? active ? "var(--ink-700)" : base : pill ? active ? "var(--accent)" : "var(--ink-050)" : "transparent",
        color: nav ? "var(--white)" : pill ? active ? "var(--white)" : "var(--text-body)" : active ? "var(--text-strong)" : "var(--text-muted)",
        font: nav ? "var(--fw-bold) var(--fs-sm)/1.2 var(--font-body)" : "var(--fw-bold) var(--fs-sm)/1 var(--font-body)",
        letterSpacing: "var(--ls-label)",
        minHeight: nav ? 52 : pill ? 36 : 46,
        padding: nav ? "8px 14px" : pill ? "0 16px" : "0 0 2px",
        borderRadius: nav ? "var(--radius-sm)" : pill ? "var(--radius-control)" : 0,
        transition: "var(--transition-control)"
      }
    }, item.label, item.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        opacity: 0.75
      }
    }, "(", item.count, ")") : null, !nav && !pill && active ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 3,
        background: "var(--accent)"
      }
    }) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karnet-web/Chrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Tabs,
  Logo,
  Input,
  Select,
  Checkbox,
  SearchField
} = window.KarnetKrakWDesignSystem_fd72fb;

/* Photo band with the white lockup, three utility tiles top-right, and the rose tab bar. */
function TopBar({
  route,
  onNavigate,
  lang,
  setLang,
  compactHeader
}) {
  const [navValue, setNavValue] = React.useState("Wydarzenia");
  const [searchOpen, setSearchOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: compactHeader ? 132 : 210,
      overflow: "hidden",
      background: "linear-gradient(115deg,#16233d 0%,#2b3f6b 38%,#7b3d55 72%,#c98a5c 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)",
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-7)",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      display: "inline-block",
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: compactHeader ? 48 : 62,
    src: "../../assets/logo.png"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: "var(--space-7)",
      display: "flex",
      gap: 2
    }
  }, searchOpen ? /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onNavigate("listing");
    },
    style: {
      display: "flex",
      alignItems: "center",
      height: 44,
      background: "var(--accent)",
      paddingLeft: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    placeholder: "Szukaj\u2026",
    style: {
      border: 0,
      outline: "none",
      background: "transparent",
      color: "var(--white)",
      font: "var(--type-body-sm)",
      width: 170
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Szukaj",
    style: {
      width: 44,
      height: 44,
      border: 0,
      background: "var(--accent)",
      color: "var(--white)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17
  }))) : /*#__PURE__*/React.createElement("button", {
    "aria-label": "Szukaj",
    onClick: () => setSearchOpen(true),
    style: {
      width: 44,
      height: 44,
      border: 0,
      background: "var(--accent)",
      color: "var(--white)",
      cursor: "pointer",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Facebook",
    style: {
      width: 44,
      height: 44,
      background: "var(--blue-facebook)",
      color: "var(--white)",
      display: "grid",
      placeItems: "center",
      textDecoration: "none",
      font: "var(--fw-bold) var(--fs-md)/1 var(--font-body)"
    }
  }, "f"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(lang === "PL" ? "EN" : "PL"),
    style: {
      width: 44,
      height: 44,
      border: 0,
      background: "var(--rose-700)",
      color: "var(--white)",
      cursor: "pointer",
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-body)",
      letterSpacing: "var(--ls-label)"
    }
  }, lang === "PL" ? "EN" : "PL")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-7)",
      transform: "translateY(-26px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("home"),
    "aria-label": "Strona g\u0142\xF3wna",
    style: {
      width: 52,
      border: 0,
      cursor: "pointer",
      background: route === "home" ? "var(--ink-700)" : "var(--white)",
      color: route === "home" ? "var(--white)" : "var(--text-strong)",
      borderRadius: "var(--radius-sm)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "home",
    size: 17
  })), /*#__PURE__*/React.createElement(Tabs, {
    variant: "nav",
    items: window.KARNET_NAV,
    value: route === "home" ? navValue : "Wydarzenia",
    onChange: v => {
      setNavValue(v);
      onNavigate("listing");
    },
    style: {
      flex: 1
    }
  }))));
}

/* One-line search bar: pill field with an inset rose "szukaj" button, then two
   outlined filter chips that open date and extra-filter popovers. */
function FilterChip({
  icon,
  label,
  open,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      height: 48,
      padding: "0 22px",
      cursor: "pointer",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      background: open ? "var(--ink-700)" : "var(--bg-surface)",
      color: open ? "var(--white)" : "var(--text-strong)",
      border: "1px solid " + (open ? "var(--ink-700)" : hover ? "var(--accent)" : "var(--border-default)"),
      font: "var(--fw-bold) var(--fs-sm)/1 var(--font-body)",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), label);
}
function SearchPanel({
  onSubmit
}) {
  const [q, setQ] = React.useState("");
  const [panel, setPanel] = React.useState(null);
  const [free, setFree] = React.useState(false);
  const toggle = p => setPanel(v => v === p ? null : p);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-5) var(--space-6)",
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit(q);
    },
    style: {
      flex: 1,
      minWidth: 280,
      display: "flex",
      alignItems: "center",
      gap: 12,
      height: 48,
      paddingLeft: 18,
      borderRadius: "var(--radius-pill)",
      background: "var(--bg-surface-alt)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--rose-500)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "szukaj wydarzenia, miejsca lub artysty",
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      font: "var(--type-body)",
      color: "var(--text-strong)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      height: 40,
      padding: "0 30px",
      marginRight: 4,
      border: 0,
      cursor: "pointer",
      borderRadius: "var(--radius-pill)",
      background: "var(--accent)",
      color: "var(--white)",
      font: "var(--fw-bold) var(--fs-sm)/1 var(--font-body)"
    }
  }, "szukaj")), /*#__PURE__*/React.createElement(FilterChip, {
    icon: "calendar-days",
    label: "filtruj wg daty",
    open: panel === "date",
    onClick: () => toggle("date")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    icon: "sliders-horizontal",
    label: "inne filtry",
    open: panel === "more",
    onClick: () => toggle("more")
  }), panel ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      right: "var(--space-6)",
      zIndex: 40,
      minWidth: 300,
      padding: "var(--space-6)",
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, panel === "date" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, "Kiedy?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["dziś", "jutro", "ten weekend", "przyszły tydzień", "ten miesiąc"].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-default)",
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      cursor: "pointer"
    }
  }, d)))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, "Inne filtry"), /*#__PURE__*/React.createElement(Select, {
    label: "Kategoria",
    variant: "underline",
    options: ["dowolna", ...window.KARNET_CATS.slice(1).map(c => c.label)]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Gdzie?",
    variant: "underline",
    options: ["Kraków i okolice", "Stare Miasto", "Podgórze", "Nowa Huta", "Metropolia"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, window.KARNET_FILTERS.slice(0, 4).map(f => /*#__PURE__*/React.createElement(Checkbox, {
    key: f,
    label: f,
    checked: f === "wstęp wolny" ? free : false,
    onChange: () => f === "wstęp wolny" && setFree(!free)
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "split",
    size: "sm",
    onClick: () => {
      setPanel(null);
      onSubmit(q);
    }
  }, "Poka\u017C wyniki")) : null));
}
function PartnerStrip() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-9)",
      padding: "var(--space-6) var(--space-8)",
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-card)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Poprzedni",
    variant: "outline",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "var(--space-8)",
      font: "var(--fw-bold) var(--fs-sm)/1 var(--font-body)",
      color: "var(--text-faint)",
      letterSpacing: "var(--ls-label)"
    }
  }, ["KRAKÓW", "kbf", "MUZEUM KRAKOWA", "TEATR SŁOWACKIEGO", "EUROPEJSKIE MIASTO KULTURY"].map(p => /*#__PURE__*/React.createElement("span", {
    key: p
  }, p))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "Nast\u0119pny",
    variant: "outline",
    size: "sm"
  })));
}
function SiteFooter() {
  const cols = [["Wydarzenia", "Polecamy", "Magazyny"], ["Mapa", "Kalendarium roczne", "Artykuły", "Moje wydarzenia"], ["Festiwale", "Koncerty", "Spektakle", "Literatura"], ["Film", "Wystawy", "W gminach Metropolii", "Inne"], ["Reklama", "Kontakt", "Newsletter"]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--bg-surface)",
      borderTop: "1px solid var(--border-default)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-11) var(--space-7) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr 1fr",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 54,
    src: "../../assets/logo-black.svg"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-muted)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, "Portal informacyjno-kulturalny miasta Krakowa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "Redakcja:"), /*#__PURE__*/React.createElement("span", null, "ul. Wygrana 2"), /*#__PURE__*/React.createElement("span", null, "30-311 Krak\xF3w")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "karnet@krakowculture.pl"), /*#__PURE__*/React.createElement("span", null, "pn.\u2013pt. 8.30\u201316.30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "var(--space-5)",
      padding: "var(--space-9) 0"
    }
  }, ["Facebook", "Instagram", "LinkedIn", "YouTube"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 42,
      padding: "0 18px",
      border: "1px solid var(--ink-700)",
      color: "var(--ink-700)",
      textDecoration: "none",
      font: "var(--fw-bold) var(--fs-xs)/1 var(--font-body)",
      letterSpacing: "var(--ls-label)"
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: "var(--space-7)",
      paddingTop: "var(--space-7)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, cols.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, col.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--type-meta)",
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      paddingTop: "var(--space-7)",
      font: "var(--type-meta)",
      color: "var(--text-accent)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--text-accent)"
    }
  }, "Deklaracja dost\u0119pno\u015Bci"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, "\xA9 Krakowskie Biuro Festiwalowe 2026"))));
}
Object.assign(window, {
  TopBar,
  SearchPanel,
  FilterChip,
  SiteFooter,
  PartnerStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karnet-web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karnet-web/EventScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  Tag,
  CategoryTile,
  Badge,
  Card,
  SectionHeader,
  Breadcrumb,
  EventCard,
  InfoBar,
  Tooltip
} = window.KarnetKrakWDesignSystem_fd72fb;
function SideRail({
  title,
  events,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, events.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.id
  }, e, {
    description: undefined,
    venue: undefined,
    onClick: ev => {
      ev.preventDefault();
      onOpen(e);
    }
  })))));
}
function EventScreen({
  event,
  onOpen,
  onBack,
  onAdd
}) {
  const [venueOpen, setVenueOpen] = React.useState(false);
  const related = window.KARNET_EVENTS.filter(e => e.id !== event.id);
  const promoted = related.slice(0, 3);
  const similar = related.filter(e => e.category === event.category).slice(0, 4);
  const more = similar.length ? similar : related.slice(3, 7);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-7) var(--space-8) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Start",
      href: "#"
    }, {
      label: "Wydarzenia",
      href: "#"
    }, event.categoryLabel]
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      border: 0,
      background: "transparent",
      cursor: "pointer",
      font: "var(--type-body-sm)",
      color: "var(--text-accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15
  }), "Wr\xF3\u0107 do listy")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: "var(--space-9)",
      marginTop: "var(--space-7)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gridTemplateColumns: "44px 1fr",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(CategoryTile, {
    category: event.category,
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      color: "var(--text-strong)"
    }
  }, event.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-accent)"
    }
  }, event.categoryLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 9",
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      background: "linear-gradient(120deg,#e8a33c,#d9642f 55%,#8d3f56)"
    }
  }, event.badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "dark"
  }, event.badge)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 14,
      bottom: 14,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Dodaj do moich wydarze\u0144"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    label: "Dodaj",
    onClick: () => onAdd(event)
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Udost\u0119pnij"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "share-2",
    label: "Udost\u0119pnij"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(InfoBar, {
    icon: "calendar-days"
  }, event.date, event.time ? ", godz. " + event.time : ""), /*#__PURE__*/React.createElement(InfoBar, {
    icon: "map-pin",
    expandable: true,
    open: venueOpen,
    onToggle: () => setVenueOpen(!venueOpen)
  }, event.venue), venueOpen ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      background: "var(--bg-surface-alt)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, "Wej\u015Bcie od strony dziedzi\u0144ca. Obiekt dost\u0119pny dla os\xF3b z niepe\u0142nosprawno\u015Bci\u0105 ruchow\u0105.") : null, /*#__PURE__*/React.createElement(InfoBar, {
    icon: "ticket"
  }, event.price)), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-strong)"
    }
  }, "Program"), event.program.split("\n\n").map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, para)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, event.description), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-faint)"
    }
  }, "\u0179r\xF3d\u0142o: materia\u0142y organizatora")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      paddingTop: "var(--space-7)",
      borderTop: "1px solid var(--border-subtle)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-strong)"
    }
  }, "Lokalizacja i bilety"), /*#__PURE__*/React.createElement(Button, {
    variant: "split",
    size: "md"
  }, event.free ? "Wejściówki" : "Kup bilet")), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-strong)"
    }
  }, "Wi\u0119cej"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, "Organizator: Towarzystwo Artystyczne Stowarzyszenie \u201EJazzowy Krak\xF3w\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(InfoBar, {
    icon: "globe"
  }, "https://karnet.krakowculture.pl"), /*#__PURE__*/React.createElement(InfoBar, {
    icon: "phone"
  }, "+48 12 354 27 00"), /*#__PURE__*/React.createElement(InfoBar, {
    icon: "mail"
  }, "karnet@krakowculture.pl"))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)"
    }
  }, "Miejsce wydarzenia"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      borderRadius: "var(--radius-media)",
      border: "1px solid var(--border-default)",
      background: "var(--bg-surface-alt)",
      display: "grid",
      placeItems: "center",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map",
    size: 26,
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)"
    }
  }, "mapa Leaflet \u2014 ", event.venue))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(SideRail, {
    title: "Polecamy",
    events: promoted,
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 250,
      border: "1px dashed var(--border-default)",
      borderRadius: "var(--radius-md)",
      display: "grid",
      placeItems: "center",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)"
    }
  }, "REKLAMA"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)"
    }
  }, "300 \xD7 250"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)"
    }
  }, "Podobne wydarzenia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, more.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.id,
    layout: "tile"
  }, e, {
    onClick: ev => {
      ev.preventDefault();
      onOpen(e);
    }
  })))))))), /*#__PURE__*/React.createElement(PartnerStrip, null));
}
Object.assign(window, {
  EventScreen,
  SideRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karnet-web/EventScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karnet-web/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  Tag,
  CategoryTile,
  Badge,
  Card,
  SectionHeader,
  EventCard,
  Tabs
} = window.KarnetKrakWDesignSystem_fd72fb;

/* Full-bleed promo band with carousel arrows, as in the reference layout. */
function PromoBand({
  event,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-7) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      minHeight: 340,
      background: "linear-gradient(115deg,#20304f 0%,#6b3a52 55%,#c98a5c 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: 18,
      transform: "translateY(-50%)",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Poprzednie",
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      right: 18,
      transform: "translateY(-50%)",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "Nast\u0119pne",
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 340,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 14,
      padding: "60px 90px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Polecamy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      color: "var(--white)"
    }
  }, "Wianki w Krakowie 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)",
      flexWrap: "wrap",
      justifyContent: "center",
      font: "var(--type-body-sm)",
      color: "rgba(255,255,255,.88)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-days",
    size: 15
  }), "20\u201321 czerwca 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), "Bulwary Wi\u015Blane")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "split",
    size: "md",
    onClick: () => onOpen(event)
  }, "Wi\u0119cej")))));
}

/* A horizontally scrolling shelf: title-with-arrow, optional chip sub-filters,
   then fixed-width cards in one scrollable row. */
function Shelf({
  title,
  count,
  chips,
  events,
  onOpen,
  onAdd,
  cardWidth = 290
}) {
  const [chip, setChip] = React.useState(chips ? chips[0] : null);
  const railRef = React.useRef(null);
  const scroll = dir => {
    const el = railRef.current;
    if (el) el.scrollBy({
      left: dir * (cardWidth + 16) * 2,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-7) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-strong)"
    }
  }, title, count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, " (", count, ")") : null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Przewi\u0144 w lewo",
    variant: "outline",
    size: "sm",
    onClick: () => scroll(-1)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "Przewi\u0144 w prawo",
    variant: "outline",
    size: "sm",
    onClick: () => scroll(1)
  }))), chips ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: "var(--space-5)"
    }
  }, chips.map(c => {
    const on = c === chip;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => setChip(c),
      style: {
        border: "1px solid " + (on ? "var(--accent)" : "var(--border-default)"),
        cursor: "pointer",
        height: 34,
        padding: "0 16px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--accent)" : "var(--bg-surface)",
        color: on ? "var(--white)" : "var(--text-body)",
        font: "var(--fw-bold) var(--fs-xs)/1 var(--font-body)",
        transition: "var(--transition-control)"
      }
    }, c);
  })) : null, /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginTop: "var(--space-5)",
      overflowX: "auto",
      paddingBottom: 6,
      scrollSnapType: "x mandatory"
    }
  }, events.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    style: {
      flex: "0 0 " + cardWidth + "px",
      minWidth: 0,
      display: "flex",
      scrollSnapAlign: "start"
    }
  }, /*#__PURE__*/React.createElement(EventCard, _extends({}, e, {
    description: undefined,
    onAdd: onAdd ? () => onAdd(e) : undefined,
    onClick: ev => {
      ev.preventDefault();
      onOpen(e);
    },
    style: {
      width: "100%"
    }
  }))))));
}

/* Wide rose promo strip between shelves, as in the reference. */
function PromoStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-7) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      padding: "var(--space-8) var(--space-9)",
      background: "var(--rose-100)",
      border: "1px solid var(--rose-300)",
      borderRadius: "var(--radius-card)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-strong)"
    }
  }, "Szukasz wydarze\u0144 dla ca\u0142ej rodziny?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, "Sprawd\u017A kalendarium Kids in Krak\xF3w.")), /*#__PURE__*/React.createElement(Button, {
    variant: "split",
    size: "md"
  }, "Przegl\u0105daj")));
}
function ArticlesSection() {
  const [tab, setTab] = React.useState("a");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-10) var(--space-7) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-inverse)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      font: "var(--type-h2)",
      color: "var(--white)"
    }
  }, "Artyku\u0142y ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, [["a", "Artykuły"], ["b", "Wywiady"], ["c", "Newsy"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setTab(v),
    style: {
      border: 0,
      cursor: "pointer",
      height: 34,
      padding: "0 16px",
      borderRadius: "var(--radius-pill)",
      background: tab === v ? "var(--accent)" : "var(--ink-600)",
      color: "var(--white)",
      font: "var(--fw-bold) var(--fs-xs)/1 var(--font-body)",
      transition: "var(--transition-control)"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0,1fr))",
      gap: "var(--space-5)",
      marginTop: "var(--space-7)"
    }
  }, window.KARNET_ARTICLES.map(a => /*#__PURE__*/React.createElement("a", {
    key: a.id,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      textDecoration: "none",
      border: "1px solid var(--ink-600)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      height: 22,
      padding: "0 8px",
      borderRadius: "var(--radius-xs)",
      background: "var(--accent)",
      color: "var(--white)",
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, "Inspiracje"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      color: "var(--white)"
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--rose-400)"
    }
  }, a.date), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--ink-200)",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, a.lead))))));
}
function HomeScreen({
  onOpen,
  onAdd,
  onSearch
}) {
  const ev = window.KARNET_EVENTS;
  const byCat = k => {
    const l = ev.filter(e => e.category === k);
    return l.length >= 4 ? l : [...l, ...ev.filter(e => e.category !== k)].slice(0, 6);
  };
  const label = k => window.KARNET_CATS.find(c => c.key === k).label;
  const count = k => window.KARNET_CATS.find(c => c.key === k).count;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PromoBand, {
    event: ev[1],
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement(SearchPanel, {
    onSubmit: onSearch
  }), /*#__PURE__*/React.createElement(Shelf, {
    title: "Popularne wydarzenia",
    events: ev.slice(0, 6),
    onOpen: onOpen,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(PromoStrip, null), /*#__PURE__*/React.createElement(Shelf, {
    title: "Kalendarium",
    chips: ["dziś", "jutro", "ten weekend", "przyszły tydzień", "ten miesiąc"],
    events: ev.slice(2, 8),
    onOpen: onOpen,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(Shelf, {
    title: label("theatre"),
    count: count("theatre"),
    chips: ["wszystkie", "komedia", "musical", "opera", "dla dzieci", "dramat"],
    events: byCat("theatre"),
    onOpen: onOpen,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(Shelf, {
    title: label("music"),
    count: count("music"),
    chips: ["wszystkie", "klasyczna", "jazz", "rock", "elektronika", "dla dzieci"],
    events: byCat("music"),
    onOpen: onOpen,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(Shelf, {
    title: label("festival"),
    count: count("festival"),
    events: byCat("festival"),
    onOpen: onOpen,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(Shelf, {
    title: label("exhibition"),
    count: count("exhibition"),
    chips: ["wszystkie", "wystawy stałe", "wystawy czasowe"],
    events: byCat("exhibition"),
    onOpen: onOpen,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(ArticlesSection, null), /*#__PURE__*/React.createElement(PartnerStrip, null));
}
Object.assign(window, {
  HomeScreen,
  PromoBand,
  Shelf,
  PromoStrip,
  ArticlesSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karnet-web/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karnet-web/ListingScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  Tag,
  CategoryTile,
  Card,
  Checkbox,
  Select,
  Tabs,
  Pagination,
  Breadcrumb,
  EventCard
} = window.KarnetKrakWDesignSystem_fd72fb;

/* Category chips replace the old sidebar rail: one horizontal row, each chip carrying
   its category colour when active. */
function CategoryChips({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, window.KARNET_CATS.map(c => {
    const on = c.key === active;
    const hue = c.key === "all" ? "var(--ink-700)" : "var(--cat-" + c.key + ")";
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      onClick: () => setActive(c.key),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        height: 38,
        padding: "0 18px",
        cursor: "pointer",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        background: on ? hue : "var(--bg-surface)",
        color: on ? "var(--white)" : "var(--text-body)",
        border: "1px solid " + (on ? hue : "var(--border-default)"),
        font: "var(--fw-bold) var(--fs-sm)/1 var(--font-body)",
        transition: "var(--transition-control)"
      }
    }, c.label, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: on ? .8 : .55,
        font: "var(--fw-regular) var(--fs-xs)/1 var(--font-body)"
      }
    }, c.count));
  }));
}

/* Secondary row: date chips on the left, sort + view controls on the right. */
function ResultsToolbar({
  when,
  setWhen,
  view,
  setView,
  sort,
  setSort
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["dowolna data", "dziś", "jutro", "ten weekend", "ten miesiąc"].map(d => {
    const on = d === when;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: () => setWhen(d),
      style: {
        height: 34,
        padding: "0 16px",
        cursor: "pointer",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--ink-700)" : "transparent",
        color: on ? "var(--white)" : "var(--text-muted)",
        border: "1px solid " + (on ? "var(--ink-700)" : "var(--border-default)"),
        font: "var(--fw-bold) var(--fs-xs)/1 var(--font-body)",
        transition: "var(--transition-control)"
      }
    }, d);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    value: sort,
    onChange: e => setSort(e.target.value),
    options: ["od najbliższych", "alfabetycznie", "ostatnio dodane"],
    style: {
      minWidth: 190
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "grid-2x2",
    label: "Kafelki",
    variant: view === "grid" ? "solid" : "outline",
    size: "sm",
    onClick: () => setView("grid")
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "list",
    label: "Lista",
    variant: view === "list" ? "solid" : "outline",
    size: "sm",
    onClick: () => setView("list")
  })));
}
function ListingScreen({
  query,
  setQuery,
  onOpen,
  onAdd
}) {
  const [active, setActive] = React.useState("all");
  const [when, setWhen] = React.useState("dowolna data");
  const [sort, setSort] = React.useState("od najbliższych");
  const [picked, setPicked] = React.useState([]);
  const [view, setView] = React.useState("grid");
  const [page, setPage] = React.useState(1);
  const toggle = f => setPicked(p => p.includes(f) ? p.filter(x => x !== f) : [...p, f]);
  let events = window.KARNET_EVENTS;
  if (active !== "all") events = events.filter(e => e.category === active);
  if (picked.includes("wstęp wolny")) events = events.filter(e => e.free);
  if (query) events = events.filter(e => (e.title + e.venue).toLowerCase().includes(query.toLowerCase()));
  if (sort === "alfabetycznie") events = [...events].sort((a, b) => a.title.localeCompare(b.title, "pl"));
  const cat = window.KARNET_CATS.find(c => c.key === active);
  const chips = [...picked.map(p => ({
    k: p,
    label: p,
    clear: () => toggle(p)
  })), ...(when !== "dowolna data" ? [{
    k: "when",
    label: when,
    clear: () => setWhen("dowolna data")
  }] : []), ...(query ? [{
    k: "q",
    label: "„" + query + "\u201d",
    clear: () => setQuery("")
  }] : [])];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Start",
      href: "#"
    }, {
      label: "Wydarzenia",
      href: "#"
    }, cat.label],
    style: {
      paddingBottom: "var(--space-5)"
    }
  }), /*#__PURE__*/React.createElement(SearchPanel, {
    onSubmit: setQuery
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      padding: "var(--space-8) 0 0"
    }
  }, /*#__PURE__*/React.createElement(CategoryChips, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement(ResultsToolbar, {
    when: when,
    setWhen: setWhen,
    view: view,
    setView: setView,
    sort: sort,
    setSort: setSort
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      paddingBottom: "var(--space-5)",
      borderBottom: "1px solid var(--border-default)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      color: "var(--text-strong)"
    }
  }, cat.label, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "(", events.length, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, chips.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c.k,
    icon: false,
    onRemove: c.clear
  }, c.label)), chips.length ? /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setPicked([]);
      setWhen("dowolna data");
      setQuery("");
    },
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      font: "var(--type-body-sm)",
      color: "var(--text-accent)"
    }
  }, "wyczy\u015B\u0107 wszystko") : null)), events.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-5)",
      padding: "var(--space-13) 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rose-300)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-x",
    size: 40,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)"
    }
  }, "Brak wynik\xF3w"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Spr\xF3buj usun\u0105\u0107 cz\u0119\u015B\u0107 filtr\xF3w albo wybra\u0107 inn\u0105 kategori\u0119."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => {
      setPicked([]);
      setActive("all");
      setWhen("dowolna data");
      setQuery("");
    }
  }, "Wyczy\u015B\u0107 filtry")) : view === "grid" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, events.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.id
  }, e, {
    description: undefined,
    onAdd: () => onAdd(e),
    onClick: ev => {
      ev.preventDefault();
      onOpen(e);
    }
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, events.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.id,
    layout: "row"
  }, e, {
    onAdd: () => onAdd(e),
    onClick: ev => {
      ev.preventDefault();
      onOpen(e);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-7)",
      padding: "var(--space-9) 0 0"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconRight: "chevron-down"
  }, "Poka\u017C wi\u0119cej wydarze\u0144"), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: 57,
    onChange: setPage,
    style: {
      width: "100%"
    }
  }))), /*#__PURE__*/React.createElement(PartnerStrip, null));
}
Object.assign(window, {
  ListingScreen,
  CategoryChips,
  ResultsToolbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karnet-web/ListingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karnet-web/MobileScreens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  Tag,
  CategoryTile,
  Badge,
  Logo,
  SearchField,
  Checkbox,
  EventCard,
  InfoBar,
  SectionHeader,
  Tabs
} = window.KarnetKrakWDesignSystem_fd72fb;
function MobileHeader({
  onMenu,
  onSearch,
  onHome
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 104,
      overflow: "hidden",
      background: "linear-gradient(115deg,#16233d 0%,#2b3f6b 45%,#7b3d55 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)",
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome();
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 38,
    src: "../../assets/logo.png"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Szukaj",
    onClick: onSearch,
    style: {
      width: 40,
      height: 40,
      border: 0,
      background: "var(--accent)",
      color: "#fff",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    onClick: onMenu,
    style: {
      width: 40,
      height: 40,
      border: 0,
      background: "var(--rose-700)",
      color: "#fff",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 18
  }))))));
}
function MobileMenu({
  open,
  onClose,
  onNavigate
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "var(--bg-overlay)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("nav", {
    onClick: e => e.stopPropagation(),
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: "82%",
      background: "var(--bg-surface)",
      padding: "20px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)"
    }
  }, "Menu"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Zamknij",
    variant: "ghost",
    onClick: onClose
  })), window.KARNET_NAV.map((n, i) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => {
      onNavigate("listing");
      onClose();
    },
    style: {
      textAlign: "left",
      border: 0,
      cursor: "pointer",
      padding: "14px 16px",
      borderRadius: "var(--radius-sm)",
      background: ["var(--rose-400)", "var(--rose-400)", "var(--rose-600)", "#ad6676", "#aa6577", "var(--rose-700)", "var(--rose-800)"][i],
      color: "#fff",
      font: "var(--fw-bold) var(--fs-sm)/1 var(--font-body)"
    }
  }, n))));
}

/* Horizontally scrolling shelf, the mobile form of the desktop Shelf. */
function MobileShelf({
  title,
  chips,
  events,
  onOpen,
  onAdd
}) {
  const [chip, setChip] = React.useState(chips ? chips[0] : null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 17
  })), chips ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      paddingBottom: 2
    }
  }, chips.map(c => {
    const on = c === chip;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => setChip(c),
      style: {
        flex: "0 0 auto",
        height: 32,
        padding: "0 14px",
        cursor: "pointer",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--accent)" : "var(--bg-surface)",
        color: on ? "#fff" : "var(--text-body)",
        border: "1px solid " + (on ? "var(--accent)" : "var(--border-default)"),
        font: "var(--fw-bold) var(--fs-xs)/1 var(--font-body)"
      }
    }, c);
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      overflowX: "auto",
      paddingBottom: 6,
      scrollSnapType: "x mandatory"
    }
  }, events.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    style: {
      flex: "0 0 232px",
      minWidth: 0,
      display: "flex",
      scrollSnapAlign: "start"
    }
  }, /*#__PURE__*/React.createElement(EventCard, _extends({}, e, {
    description: undefined,
    onAdd: onAdd ? () => onAdd(e) : undefined,
    onClick: ev => {
      ev.preventDefault();
      onOpen(e);
    },
    style: {
      width: "100%"
    }
  }))))));
}
function MobileHome({
  onOpen,
  onAdd,
  onSearch
}) {
  const [q, setQ] = React.useState("");
  const ev = window.KARNET_EVENTS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      minHeight: 200,
      background: "linear-gradient(115deg,#20304f,#6b3a52 55%,#c98a5c)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "flex-end",
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Polecamy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h2)",
      color: "#fff"
    }
  }, "Wianki w Krakowie 2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "split",
    size: "sm",
    onClick: () => onOpen(ev[1])
  }, "Wi\u0119cej"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSearch(q);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 48,
      paddingLeft: 16,
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--rose-500)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "szukaj wydarzenia lub miejsca",
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      font: "var(--type-body-sm)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      height: 40,
      padding: "0 22px",
      marginRight: 4,
      border: 0,
      cursor: "pointer",
      borderRadius: "var(--radius-pill)",
      background: "var(--accent)",
      color: "#fff",
      font: "var(--fw-bold) var(--fs-xs)/1 var(--font-body)"
    }
  }, "szukaj")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, ["filtruj wg daty", "inne filtry"].map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: onSearch,
    style: {
      flex: "0 0 auto",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 38,
      padding: "0 16px",
      cursor: "pointer",
      borderRadius: "var(--radius-pill)",
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      color: "var(--text-strong)",
      font: "var(--fw-bold) var(--fs-xs)/1 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f === "filtruj wg daty" ? "calendar-days" : "sliders-horizontal",
    size: 15
  }), f))), /*#__PURE__*/React.createElement(MobileShelf, {
    title: "Popularne wydarzenia",
    events: ev.slice(0, 5),
    onOpen: onOpen,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(MobileShelf, {
    title: "Kalendarium",
    chips: ["dziś", "jutro", "ten weekend"],
    events: ev.slice(2, 7),
    onOpen: onOpen,
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement(MobileShelf, {
    title: "Spektakle",
    chips: ["wszystkie", "komedia", "musical", "opera"],
    events: ev.slice(5, 10),
    onOpen: onOpen,
    onAdd: onAdd
  }));
}
function MobileListing({
  onOpen,
  onAdd
}) {
  const [active, setActive] = React.useState("all");
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const [picked, setPicked] = React.useState([]);
  const toggle = f => setPicked(p => p.includes(f) ? p.filter(x => x !== f) : [...p, f]);
  let events = window.KARNET_EVENTS;
  if (active !== "all") events = events.filter(e => e.category === active);
  if (picked.includes("wstęp wolny")) events = events.filter(e => e.free);
  const cat = window.KARNET_CATS.find(c => c.key === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "16px 16px 32px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: cat.label,
    count: events.length,
    actionHref: null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto"
    }
  }, window.KARNET_CATS.map(c => {
    const on = c.key === active;
    const hue = c.key === "all" ? "var(--ink-700)" : "var(--cat-" + c.key + ")";
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      onClick: () => setActive(c.key),
      style: {
        flex: "0 0 auto",
        cursor: "pointer",
        height: 36,
        padding: "0 16px",
        borderRadius: "var(--radius-pill)",
        background: on ? hue : "var(--bg-surface)",
        color: on ? "#fff" : "var(--text-body)",
        border: "1px solid " + (on ? hue : "var(--border-default)"),
        font: "var(--fw-bold) var(--fs-xs)/1 var(--font-body)",
        transition: "var(--transition-control)"
      }
    }, c.label);
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: "filter",
    onClick: () => setFiltersOpen(!filtersOpen),
    style: {
      alignSelf: "flex-start"
    }
  }, "Filtry", picked.length ? " (" + picked.length + ")" : ""), filtersOpen ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: 16,
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-card)"
    }
  }, window.KARNET_FILTERS.map(f => /*#__PURE__*/React.createElement(Checkbox, {
    key: f,
    label: f,
    checked: picked.includes(f),
    onChange: () => toggle(f)
  }))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, events.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.id
  }, e, {
    description: undefined,
    onAdd: () => onAdd(e),
    onClick: ev => {
      ev.preventDefault();
      onOpen(e);
    }
  })))));
}
function MobileEvent({
  event,
  onBack,
  onAdd,
  onOpen
}) {
  const more = window.KARNET_EVENTS.filter(e => e.id !== event.id).slice(0, 2);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 90px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      border: 0,
      background: "transparent",
      cursor: "pointer",
      font: "var(--type-body-sm)",
      color: "var(--text-accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15
  }), "Wr\xF3\u0107"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "36px 1fr",
      gap: 12,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(CategoryTile, {
    category: event.category,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-strong)"
    }
  }, event.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-accent)"
    }
  }, event.categoryLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 3",
      borderRadius: "var(--radius-media)",
      background: "linear-gradient(120deg,#e8a33c,#d9642f 55%,#8d3f56)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(InfoBar, {
    icon: "calendar-days"
  }, event.date, event.time ? ", godz. " + event.time : ""), /*#__PURE__*/React.createElement(InfoBar, {
    icon: "map-pin",
    expandable: true
  }, event.venue), /*#__PURE__*/React.createElement(InfoBar, {
    icon: "ticket"
  }, event.price)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, event.description), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, event.program.split("\n\n")[0]), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)"
    }
  }, "Podobne wydarzenia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, more.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.id,
    layout: "tile"
  }, e, {
    onClick: ev => {
      ev.preventDefault();
      onOpen(e);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      padding: 12,
      background: "var(--bg-surface)",
      borderTop: "1px solid var(--border-default)",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "plus",
    label: "Dodaj do moich wydarze\u0144",
    size: "lg",
    onClick: () => onAdd(event)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "split",
    fullWidth: true
  }, event.free ? "Wejściówki" : "Kup bilet")));
}
Object.assign(window, {
  MobileHeader,
  MobileMenu,
  MobileShelf,
  MobileHome,
  MobileListing,
  MobileEvent
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karnet-web/MobileScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/karnet-web/data.js
try { (() => {
window.KARNET_CATS = [{
  key: "all",
  label: "Wszystkie",
  count: 685
}, {
  key: "festival",
  label: "Festiwale",
  count: 32
}, {
  key: "music",
  label: "Koncerty",
  count: 205
}, {
  key: "theatre",
  label: "Spektakle",
  count: 251
}, {
  key: "literature",
  label: "Literatura",
  count: 32
}, {
  key: "film",
  label: "Film",
  count: 9
}, {
  key: "exhibition",
  label: "Wystawy",
  count: 144
}, {
  key: "metropolis",
  label: "W gminach Metropolii",
  count: 44
}, {
  key: "other",
  label: "Inne",
  count: 18
}];
window.KARNET_NAV = ["Wydarzenia", "Polecamy", "Magazyny", "Mapa", "Kalendarium roczne", "Artykuły", "Moje wydarzenia"];
window.KARNET_FILTERS = ["wydarzenia plenerowe", "wstęp wolny", "dostępne dla niepełnosprawnych", "dla dzieci", "dla seniorów", "dla rodzin"];
window.KARNET_EVENTS = [{
  id: 1,
  category: "metropolis",
  categoryLabel: "W gminach Metropolii",
  title: "Święta Barbaro, módl się za nami. Poczet górniczy",
  description: "Kolekcja prezentowana w Wieliczce powstała dzięki inżynierowi górnictwa. Muzeum Żup Krakowskich Wieliczka prezentuje na wystawie ponad 120 obiektów z kolekcji, ukazujących…",
  venue: "Muzeum Żup Krakowskich w Wieliczce – Ekspozycja podziemna, ul. Daniłowicza 10",
  date: "11.05.2026 - 30.12.2026",
  time: "",
  day: "11",
  month: "maj",
  weekday: "pon.",
  price: "Bilet 25 zł",
  free: false,
  program: "Ekspozycja czynna codziennie od 9:00 do 18:00, ostatnie wejście o 17:00. Zwiedzanie z przewodnikiem rozpoczyna się o pełnych godzinach."
}, {
  id: 2,
  category: "festival",
  categoryLabel: "Festiwale",
  title: "XXXII Międzynarodowy Festiwal „Starzy i Młodzi, czyli Jazz w Krakowie”",
  description: "Program: 12 MAJA, godz. 20.00 Forum Horyzonty NEW JAZZ UNDERGROUND młody jazz prosto z Nowego Jorku. Abdias Armenteros – saksofon tenorowy i sopranowy…",
  venue: "Forum Horyzonty, ul. Konopnickiej 28",
  date: "12.05.2026 - 21.06.2026",
  time: "20:00",
  day: "12",
  month: "maj",
  weekday: "wt.",
  price: "od 60 zł",
  free: false,
  badge: "Polecamy",
  program: "12 MAJA, godz. 20.00 — NEW JAZZ UNDERGROUND. Młody jazz prosto z Nowego Jorku: Abdias Armenteros (saksofon tenorowy i sopranowy), Sebastian Rios (kontrabas), TJ Reddick (perkusja).\n\n18 MAJA, godz. 20.00 — MICHAŁ BARAŃSKI: JOY RETURN, MY BABY. Michał Barański (kontrabas), Kornel Kowalski (fortepian), Dawid Fortuna (perkusja).\n\n26 MAJA, godz. 20.00 — CHRIS POTTER TRIO featuring MATT BREWER i KENDRICK SCOTT."
}, {
  id: 3,
  category: "film",
  categoryLabel: "Festiwale i przeglądy filmowe",
  title: "17. Przegląd Nowego Kina Francuskiego",
  description: "Siedemnasta edycja Przeglądu Nowego Kina Francuskiego odbędzie się między 12 a 18 czerwca. W programie jest jedenaście nagrodzonych filmów, które wspólnie ukazują różnorodność…",
  venue: "Kino Pod Baranami, Rynek Główny 27",
  date: "12.06.2026 - 18.06.2026",
  time: "",
  day: "12",
  month: "cze",
  weekday: "pt.",
  price: "Bilet 22 zł",
  free: false,
  program: "Pokazy w dwóch salach Kina Pod Baranami. Wszystkie filmy prezentowane są w wersji oryginalnej z polskimi napisami."
}, {
  id: 4,
  category: "exhibition",
  categoryLabel: "Wystawy czasowe",
  title: "Archiwum Włoskiej Kreatywności",
  description: "Wystawa została zorganizowana i zaprojektowana przez MoMo-Mondo Mostre. Kuratorką ekspozycji jest Clara Tosi Pamphili, a jej pomysł narodził się ze wspólnej idei działania z Marco…",
  venue: "Włoski Instytut Kultury, ul. Grodzka 49",
  date: "12.06.2026 - 31.08.2026",
  time: "11:00 - 19:00",
  day: "12",
  month: "cze",
  weekday: "pt.",
  price: "Wstęp wolny",
  free: true,
  program: "Wystawa dostępna od wtorku do niedzieli. Oprowadzania kuratorskie w każdą pierwszą środę miesiąca o 17:00."
}, {
  id: 5,
  category: "exhibition",
  categoryLabel: "Wystawy czasowe",
  title: "Szpila. Osoba pozornie logiczna",
  description: "Wystawa podejmuje temat współczesnej tożsamości – jej płynności, niepewności i ciągłego negocjowania granic tego, kim jesteśmy, kim chcielibyśmy być, a kim jak postrzegają nas inni…",
  venue: "Galeria Restwornowski, ul. św. Jana 20",
  date: "12.06.2026 - 27.06.2026",
  time: "19:00",
  day: "12",
  month: "cze",
  weekday: "pt.",
  price: "Wstęp wolny",
  free: true,
  program: "Wernisaż 12 czerwca o 19:00 z udziałem artystki. Oprowadzanie autorskie 20 czerwca o 12:00."
}, {
  id: 6,
  category: "theatre",
  categoryLabel: "Spektakle teatralne",
  title: "Adonis ma gościa",
  description: "Adonis ma gościa w reżyserii Rafała Sabary sięga to pierwszy w historii Krakowskiego Teatru VARIETE familijny spektakl muzyczny. Adonis jest piękną i utalentowaną papugą, która…",
  venue: "Krakowski Teatr Variété, ul. Grzegórzecka 71",
  date: "16.06.2026",
  time: "09:00",
  day: "16",
  month: "cze",
  weekday: "wt.",
  price: "od 45 zł",
  free: false,
  program: "Spektakl trwa 90 minut bez przerwy. Zalecany wiek: od 6 lat."
}, {
  id: 7,
  category: "theatre",
  categoryLabel: "Spektakle teatralne",
  title: "Kamienie na szaniec",
  description: "Utrzymana w naturalistycznej konwencji adaptacja dzieła Aleksandra Kamińskiego. Kamienie na szaniec stanowi wstrząsającą opowieść o sile przyjaźni, patriotyzmie i honorze…",
  venue: "Teatr Współczesny, ul. Starowiślna 21",
  date: "16.06.2026",
  time: "09:00",
  day: "16",
  month: "cze",
  weekday: "wt.",
  price: "od 40 zł",
  free: false,
  program: "Spektakl grany w ramach programu edukacyjnego dla szkół. Po przedstawieniu spotkanie z zespołem."
}, {
  id: 8,
  category: "music",
  categoryLabel: "Koncerty",
  title: "27. Letni Festiwal Opery Krakowskiej",
  description: "Letni Festiwal Opery Krakowskiej to cykl spektakli i koncertów plenerowych, które przez całe wakacje wypełniają dziedziniec i scenę główną opery…",
  venue: "Opera Krakowska, ul. Lubicz 48",
  date: "16.06.2026 - 18.08.2026",
  time: "18:00",
  day: "16",
  month: "cze",
  weekday: "wt.",
  price: "od 80 zł",
  free: false,
  program: "W programie: Carmen, Traviata, Nabucco oraz galowy koncert finałowy."
}, {
  id: 9,
  category: "festival",
  categoryLabel: "Festiwale",
  title: "EtnoKraków / Rozstaje 2026",
  description: "Krajobraz muzyczny 28. edycji EtnoKraków/Rozstaje 2026 i wydarzeń towarzyszących: festiwalowi to artyści z Polski, Wielkiej Brytanii, Estonii, Ukrainy, Węgier, Senegalu, Syrii…",
  venue: "Strefa Nowa, ul. Kopernika 19",
  date: "13.06.2026 - 28.06.2026",
  time: "",
  day: "13",
  month: "cze",
  weekday: "sob.",
  price: "Karnet 120 zł",
  free: false,
  badge: "Polecamy",
  program: "Koncerty wieczorne na dwóch scenach, warsztaty taneczne i śpiewu tradycyjnego w ciągu dnia."
}, {
  id: 10,
  category: "literature",
  categoryLabel: "Literatura",
  title: "Bunkier. Czytelnia Sztuki. Psychologia twórczości",
  description: "Twórczość jest zjawiskiem, które fascynuje zarówno psychologów, jak i pedagogów, rodziców, historyków sztuki, a także samych artystów. Edward Nęcka…",
  venue: "Bunkier Sztuki, pl. Szczepański 3a",
  date: "16.06.2026",
  time: "17:30",
  day: "16",
  month: "cze",
  weekday: "wt.",
  price: "Wstęp wolny",
  free: true,
  program: "Spotkanie tłumaczone na polski język migowy. Wstęp wolny, liczba miejsc ograniczona."
}, {
  id: 11,
  category: "exhibition",
  categoryLabel: "Wystawy czasowe",
  title: "Paweł Orłowski. To nie jest forma",
  description: "Galeria ASP im. Jana Matejki w Krakowie, artysta Paweł Orłowski, kuratorka Emilia Orzechowska wraz z Van Rij Gallery zapraszają na wystawę najnowszych prac Pawła Orłowskiego…",
  venue: "Galeria ASP w Krakowie, ul. Basztowa 18",
  date: "13.06.2026 - 12.09.2026",
  time: "18:00",
  day: "13",
  month: "cze",
  weekday: "sob.",
  price: "Wstęp wolny",
  free: true,
  program: "Galeria otwarta od poniedziałku do piątku, 10:00–18:00."
}, {
  id: 12,
  category: "metropolis",
  categoryLabel: "W gminach Metropolii",
  title: "Salvador Dalí w Niepołomicach",
  description: "Wystawa prezentuje grafiki jednego z najbardziej rozpoznawalnych artystów XX wieku. Ekspozycja obejmuje trzy cykle graficzne: Pieroana braola, Tristan i Izolda oraz…",
  venue: "Małopolskie Centrum Dźwięku i Słowa, ul. Zamkowa 4, Niepołomice",
  date: "12.06.2026 - 05.07.2026",
  time: "10:00 - 18:00",
  day: "12",
  month: "cze",
  weekday: "pt.",
  price: "Bilet 20 zł",
  free: false,
  program: "Zwiedzanie indywidualne oraz oprowadzania grupowe po wcześniejszej rezerwacji."
}];
window.KARNET_ARTICLES = [{
  id: 101,
  title: "Kto zbudował Kraków?",
  date: "11 czerwca 2026",
  lead: "Gra miejska Kraków to miasto pełne zagadnień. Wybierzcie się na spacer, który pomoże rozwikłać niektóre z nich."
}, {
  id: 102,
  title: "Dni Krakowa 2026",
  date: "1 czerwca 2026",
  lead: "Już od pierwszych dni miesiąca Kraków wypełnią koncerty, festiwale i spektakle, które od lat tworzą wyjątkową atmosferę początku lata."
}, {
  id: 103,
  title: "Kossakówka – nowa filia Muzeum Krakowa",
  date: "12 maja 2026",
  lead: "Już wkrótce Kossakówka, historyczna willa rodziny Kossaków, ponownie otworzy swoje drzwi dla krakowian i turystów."
}, {
  id: 104,
  title: "Nominacje do XIV edycji Nagrody im. Wisławy Szymborskiej",
  date: "8 maja 2026",
  lead: "Zofia Bałdyga, Jerzy Jarniewicz, Marta Kwiecień, Marzena Niemiec i Agata Piwowarska — to pięcioro autorów nominowanych w tej edycji."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/karnet-web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.CATEGORY_ICON = __ds_scope.CATEGORY_ICON;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.DateBadge = __ds_scope.DateBadge;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.InfoBar = __ds_scope.InfoBar;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
