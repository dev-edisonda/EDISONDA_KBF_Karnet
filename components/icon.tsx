import type { CSSProperties } from "react";
import {
  PartyPopper,
  Music,
  Theater,
  BookOpen,
  Film,
  Palette,
  TreePine,
  Sparkles,
  Landmark,
  Library,
  Building2,
  MoreHorizontal,
  Accessibility,
  Ear,
  Captions,
  Headphones,
  Moon,
  Toilet,
  CircleParking,
  CircleHelp,
  CircleCheck,
  CircleX,
  type LucideIcon,
} from "lucide-react";

// Central icon registry keyed by the `icon` string stored on category/accessibility
// records (mirrors how a Strapi "icon" field would resolve to a UI icon).
const ICONS: Record<string, LucideIcon> = {
  PartyPopper,
  Music,
  Theater,
  BookOpen,
  Film,
  Palette,
  TreePine,
  Sparkles,
  Landmark,
  Library,
  Building2,
  MoreHorizontal,
  Accessibility,
  Ear,
  Captions,
  Headphones,
  Moon,
  Toilet,
  CircleParking,
  CircleHelp,
  CircleCheck,
  CircleX,
};

export function CategoryIcon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) {
  const Cmp = ICONS[name] ?? MoreHorizontal;
  return <Cmp className={className} style={style} aria-hidden="true" />;
}
