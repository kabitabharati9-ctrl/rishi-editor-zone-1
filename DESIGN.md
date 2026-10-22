---
name: "RISHI EDITOR ZONE"
description: "A video editing studio homepage for creators looking for Reels, cinematic edits, VFX, photo editing, and motion graphics."
colors:
  background: "oklch(0.055 0.006 285)"
  foreground: "oklch(0.96 0.004 285)"
  card: "oklch(0.095 0.006 285)"
  card-foreground: "oklch(0.96 0.004 285)"
  popover: "oklch(0.095 0.006 285)"
  popover-foreground: "oklch(0.96 0.004 285)"
  primary: "oklch(0.64 0.23 27)"
  primary-foreground: "oklch(0.98 0.004 285)"
  secondary: "oklch(0.16 0.008 285)"
  secondary-foreground: "oklch(0.91 0.006 285)"
  muted: "oklch(0.14 0.006 285)"
  muted-foreground: "oklch(0.68 0.008 285)"
  accent: "oklch(0.58 0.2 320)"
  accent-foreground: "oklch(0.98 0.004 285)"
  destructive: "oklch(0.64 0.23 27)"
  border: "oklch(0.25 0.008 285)"
  input: "oklch(0.2 0.008 285)"
  ring: "oklch(0.64 0.23 27)"
  sidebar-ring: "oklch(0.64 0.23 27)"
  sidebar-border: "oklch(0.25 0.008 285)"
  sidebar-accent-foreground: "oklch(0.96 0.004 285)"
  sidebar-accent: "oklch(0.14 0.006 285)"
  sidebar-primary-foreground: "oklch(0.98 0.004 285)"
  sidebar-primary: "oklch(0.64 0.23 27)"
typography:
  display:
    fontFamily: "\"Arial Narrow\", \"Franklin Gothic Medium\", Impact, sans-serif"
  body:
    fontFamily: "Arial / Helvetica Neue system stack."
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, \"Liberation Mono\", monospace"
rounded:
  sm: "calc(var(--radius) * 0.6)"
  md: "calc(var(--radius) * 0.8)"
  lg: "0.625rem"
  xl: "calc(var(--radius) * 1.4)"
  2xl: "calc(var(--radius) * 1.8)"
  3xl: "calc(var(--radius) * 2.2)"
  4xl: "calc(var(--radius) * 2.6)"
---

<!-- Generated from .project/DESIGN_SYSTEM.md + app/globals.css by the engine. Tokens above are normative and mirror the CSS; edit the CSS and DESIGN_SYSTEM.md, not this file. -->

## Overview

Black-glass edit suite: near-black studio surfaces, red signal accents, violet RGB light, oversized condensed headlines, and precise timeline-like rules.

## Colors

| Token | Value |
| background | oklch(0.055 0.006 285) |
| surface | oklch(0.095 0.006 285) |
| text / muted | oklch(0.96 0.004 285) / oklch(0.68 0.008 285) |
| border | oklch(0.25 0.008 285) |
| primary | oklch(0.64 0.23 27), signal red |
| accent | oklch(0.58 0.2 320), RGB violet |
| success / warning / danger | Existing semantic state colors; red stays reserved for critical meaning outside brand moments. |

Declared in `globals.css` as `--color-*` and mirrored in the frontmatter. Use the token, never a raw hex.

## Typography

- Headings: Arial Narrow / Franklin Gothic Medium / Impact system stack, heavy and tightly tracked.
- Body: Arial / Helvetica Neue system stack.
- Utility labels: system monospace, uppercase with generous tracking.

- Display: `"Arial Narrow", "Franklin Gothic Medium", Impact, sans-serif`
- Body: `Arial / Helvetica Neue system stack.`
- Mono: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`

## Layout

- Radius / shadow / spacing rhythm: 0.625rem base radius; mostly square frames, hairline borders, large 88–138px section spacing.
- Shared components: crisp outline and signal-red CTA treatments; portfolio preview frames use timeline details, not faux client photography.

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.625rem, `xl` calc(var(--radius) * 1.4), `2xl` calc(var(--radius) * 1.8), `3xl` calc(var(--radius) * 2.2), `4xl` calc(var(--radius) * 2.6)

## Do's and Don'ts

- Voice: Direct, confident, creator-focused. Short phrases; no invented results, prices, clients, or finished portfolio work.

- Do load faces through Fontsource, not `next/font/google`.
- Don't introduce a colour or radius that isn't a token above.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.
