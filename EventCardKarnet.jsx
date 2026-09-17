/* Karnet event card — based on the design system's EventCard:
   category name sits next to the category tile on the thumbnail, meta rows for
   venue / date+time / price, "+" tile pinned to the card's top-right corner,
   whole card links to the event. */
const DS = () => window.KarnetKrakWDesignSystem_fd72fb || {};

function Media({ image, category, categoryLabel, ratio, tileSize = 34, onAdd, saved, bleed }) {
  const { Icon, CategoryTile, CATEGORY_ICON = {} } = DS();
  return React.createElement("div", {
    style: { position: "relative", overflow: "hidden", borderRadius: "var(--radius-media)",
      marginLeft: bleed || undefined, marginRight: bleed || undefined,
      background: image ? "var(--ink-100)" : "var(--white)",
      border: image ? "none" : "1px solid var(--border-subtle)",
      aspectRatio: ratio, display: "grid", placeItems: "center" },
  },
    image
      ? React.createElement("img", { src: image, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })
      : React.createElement("span", { style: { color: "var(--cat-" + category + ")", opacity: .32 } },
          React.createElement(Icon, { name: CATEGORY_ICON[category] || "image", size: 44, strokeWidth: 1.5 })),
    React.createElement("span", {
      style: { position: "absolute", top: 0, left: 0, display: "inline-flex", alignItems: "stretch", maxWidth: "100%" },
    },
      React.createElement(CategoryTile, { category, size: tileSize, style: { borderRadius: "var(--radius-media) 0 var(--radius-icon-tile) 0", flex: "0 0 auto" } }),
      categoryLabel
        ? React.createElement("span", {
            style: { display: "inline-flex", alignItems: "center", padding: "0 10px", minWidth: 0,
              background: "var(--cat-" + category + ")", color: "var(--white)",
              font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
          }, categoryLabel)
        : null),
    onAdd ? React.createElement(AddTile, { onAdd, saved, size: tileSize }) : null
  );
}

function MetaRow({ icon, children, strong }) {
  const { Icon } = DS();
  return React.createElement("span", {
    style: { display: "flex", alignItems: "center", gap: 8, minWidth: 0, maxWidth: "100%",
      font: "var(--type-body-sm)", color: strong ? "var(--text-strong)" : "var(--text-body)" },
  },
    React.createElement("span", { style: { color: "var(--accent)", display: "inline-flex", flex: "0 0 auto" } },
      React.createElement(Icon, { name: icon, size: 14 })),
    React.createElement("span", { style: { minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, children)
  );
}

function AddTile({ onAdd, saved, size, labels }) {
  const { Icon } = DS();
  const [hover, setHover] = React.useState(false);
  // after adding, keep showing the success state until the pointer leaves and comes back
  const [holdSuccess, setHoldSuccess] = React.useState(false);
  const showDelete = saved && hover && !holdSuccess;
  const L = labels || { add: "Dodaj do Moich wydarzeń", saved: "W Moich wydarzeniach", remove: "Usuń z Moich wydarzeń" };
  const state = saved
    ? (showDelete
        ? { bg: "var(--danger)", icon: "delete", label: L.remove }
        : { bg: "var(--success)", icon: "check", label: L.saved })
    : { bg: hover ? "var(--rose-700)" : "var(--accent)", icon: "plus", label: L.add };
  return React.createElement("span", {
    role: "button", "aria-label": state.label, title: state.label,
    onClick: (e) => { e.preventDefault(); e.stopPropagation(); setHoldSuccess(!saved); onAdd(); },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setHoldSuccess(false); },
    style: { position: "absolute", top: 0, right: 0, zIndex: 2,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, background: state.bg,
      color: "var(--white)", transition: "var(--transition-control)", cursor: "pointer" },
  }, React.createElement(Icon, { name: state.icon, size: Math.round(size * 0.44) }));
}

/* Wide saved-state button: shows the success state at rest, swaps to a red
   "remove from list" state on hover — same contract as AddTile. */
function SavedButton({ onAdd, saved, labels }) {
  const { Icon } = DS();
  const [hover, setHover] = React.useState(false);
  const [holdSuccess, setHoldSuccess] = React.useState(false);
  const showDelete = saved && hover && !holdSuccess;
  const L = labels || { add: "Dodaj do Moich wydarzeń", saved: "Dodane do Moich wydarzeń", remove: "Usuń z Moich wydarzeń" };
  const state = saved
    ? (showDelete
        ? { bg: "var(--danger)", icon: "delete", label: L.remove }
        : { bg: "var(--success)", icon: "check", label: L.saved })
    : { bg: hover ? "var(--ink-700)" : "transparent", icon: "plus", label: L.add };
  const outlined = !saved;
  return React.createElement("button", {
    type: "button", "aria-label": state.label,
    onClick: (e) => { e.preventDefault(); setHoldSuccess(!saved); onAdd(); },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setHoldSuccess(false); },
    style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
      width: "100%", height: 60, padding: "0 24px", cursor: "pointer",
      background: state.bg,
      border: "1px solid " + (outlined ? (hover ? "var(--ink-700)" : "var(--border-strong)") : state.bg),
      color: outlined && !hover ? "var(--text-strong)" : "var(--white)",
      font: "var(--fw-bold) var(--fs-base)/1 var(--font-body)",
      transition: "var(--transition-control)" },
  },
    React.createElement("span", null, state.label),
    React.createElement("span", { style: { display: "inline-flex", flex: "0 0 auto" } },
      React.createElement(Icon, { name: state.icon, size: 20 }))
  );
}

function A11yBadge({ item }) {
  const { Icon } = DS();
  const [open, setOpen] = React.useState(false);
  return React.createElement("span", {
    style: { position: "relative", display: "inline-flex" },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
  },
    React.createElement("span", {
      role: "button", tabIndex: 0, "aria-label": item.short + " — " + (item.help || ""),
      onClick: (e) => { e.preventDefault(); e.stopPropagation(); setOpen(o => !o); },
      onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); setOpen(o => !o); } },
      onFocus: () => setOpen(true), onBlur: () => setOpen(false),
      style: { display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 8px", cursor: "help",
        border: "1px solid " + (open ? "var(--rose-700)" : "var(--rose-500)"),
        background: open ? "var(--rose-200)" : "var(--rose-100)", color: "var(--rose-900)",
        font: "var(--fw-bold) 12px/1.2 var(--font-body)", whiteSpace: "nowrap" },
    },
      React.createElement(Icon, { name: item.icon, size: 14 }),
      item.short
    ),
    open && item.help ? React.createElement("span", {
      role: "tooltip",
      style: { position: "absolute", left: 0, bottom: "calc(100% + 6px)", zIndex: 30, width: 230,
        padding: "10px 12px", background: "var(--ink-700)", color: "var(--white)",
        font: "var(--fw-regular) 14px/1.35 var(--font-body)", boxShadow: "var(--shadow-lg)", whiteSpace: "normal" },
    }, item.help) : null
  );
}

function EventCardKarnet({
  title, category = "other", categoryLabel, date, time, venue, description, image,
  layout = "poster", size = "lg", onAdd, saved, href = "#", style,
  id, free, price, program, day, month, weekday, badge, lead, a11y,
  ...rest
}) {
  const { Icon } = DS();
  const [hover, setHover] = React.useState(false);
  const row = layout === "row";
  const tile = layout === "tile";
  const small = size === "sm";
  const dateLine = [date, time].filter(Boolean).join(", ");
  const priceLine = price ? (price.charAt(0).toUpperCase() + price.slice(1)) : (free ? "Wstęp wolny" : null);
  const pad = small ? "var(--space-3)" : "var(--space-4)";
  return React.createElement("a", {
    href,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: row ? "grid" : "flex", gridTemplateColumns: row ? "150px 1fr" : undefined,
      flexDirection: "column", gap: small ? "var(--space-3)" : "var(--space-4)",
      height: "100%",
      padding: row ? pad : "0 " + pad,
      paddingBottom: small ? "var(--space-5)" : "var(--space-6)",
      background: "var(--bg-surface)",
      border: "1px solid " + (hover ? "var(--accent)" : "var(--border-default)"),
      borderRadius: "var(--radius-card)", textDecoration: "none", color: "var(--text-body)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-none)",
      transform: hover ? "translateY(var(--lift-y))" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      ...style,
    },
    ...rest,
  },
    React.createElement(Media, { image, category, categoryLabel, onAdd, saved,
      ratio: row ? "3 / 4" : tile ? "1 / 1" : small ? "16 / 10" : "3 / 2",
      tileSize: 34,
      bleed: row ? null : "calc(-1 * " + pad + ")" }),
    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: small ? 6 : 8, minWidth: 0, maxWidth: "100%", flex: 1, justifyContent: "flex-start" } },
      React.createElement("h3", {
        style: { font: tile || small ? "var(--type-h4)" : "var(--type-h3)", letterSpacing: "var(--ls-heading)",
          color: hover ? "var(--text-accent)" : "var(--text-strong)",
          transition: "color var(--dur-fast) var(--ease-standard)",
          display: "-webkit-box", WebkitLineClamp: tile || small ? 2 : 3, WebkitBoxOrient: "vertical",
          overflow: "hidden", minWidth: 0, overflowWrap: "anywhere" },
      }, title),
      description && !tile && !small ? React.createElement("p", {
        style: { font: "var(--type-body-sm)", color: "var(--text-body)", minWidth: 0, overflowWrap: "anywhere",
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" },
      }, description) : null,
      React.createElement("span", { style: { display: "flex", flexDirection: "column", gap: small ? 4 : 6, paddingTop: small ? 2 : 4, minWidth: 0 } },
        venue ? React.createElement(MetaRow, { icon: "map-pin", strong: true }, venue) : null,
        dateLine ? React.createElement(MetaRow, { icon: "calendar-days" }, dateLine) : null,
        priceLine ? React.createElement(MetaRow, { icon: "ticket" }, priceLine) : null,
        a11y && a11y.length ? React.createElement("span", {
          style: { display: "flex", flexWrap: "wrap", gap: 6, paddingTop: small ? 4 : 6 },
        }, a11y.map(a => React.createElement(A11yBadge, { key: a.key, item: a }))) : null
      )
    )
  );
}

window.EventCardKarnet = EventCardKarnet;
window.KarnetAddTile = AddTile;
window.KarnetSavedButton = SavedButton;
if (typeof module !== "undefined") module.exports = { EventCardKarnet, AddTile, SavedButton };
