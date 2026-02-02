# Enhanced Telemetry Visual Reference

## Cockpit Display Layout (Desktop)

```
┌─────────────────────────────────────┐
│  REGIME                             │
│  GROUND EFFECT  ← (pulsing green)   │
├─────────────────────────────────────┤
│  SPEED                              │
│  115  KM/H                          │
│  ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁  ← sparkline       │
├─────────────────────────────────────┤
│  ALTITUDE                           │
│  0.50  M                            │
│  ▁▁▂▂▃▃▄▄▃▃▂▂▁▁  ← sparkline       │
├─────────────────────────────────────┤
│  EFFICIENCY                         │
│  118.5  L/D  ← (green, pulsing)     │
│  ▃▄▅▆▇█▇▆▅▄▃▂▁▂  ← sparkline       │
│  ███████████████  ← zones (3 bars)  │
├─────────────────────────────────────┤
│  WIND                               │
│  ↑  10 KM/H  ← (arrow rotates)      │
│     285° • G4                       │
└─────────────────────────────────────┘
```

## Color Coding

### Efficiency States
```
< 70 L/D    →  ░░░░  White/50%  (Below optimal)
70-89 L/D   →  ████  Cyan       (Free-stream)
90-109 L/D  →  ████  Green      (Ground effect)
≥ 110 L/D   →  ████  Green      (Peak - pulsing)
              ↑ Animated pulse
```

### Regime Labels
```
GROUND RUN          →  Cyan
GROUND EFFECT       →  Green (pulsing)
UPPER CUSHION       →  Cyan
TRANSITION          →  Cyan
```

## Efficiency Zones Indicator
```
Zone 1: ≥70 L/D   ███ Blue
Zone 2: ≥90 L/D   ███ Green
Zone 3: ≥110 L/D  ███ Green (bright)

Example at 118.5 L/D (all zones active):
███ ███ ███
```

## Sparkline Graphs

### Speed Graph (0-120 km/h range)
```
120 ┤                     ╭─╮
100 ┤                 ╭───╯ ╰─╮
 80 ┤             ╭───╯       ╰─
 60 ┤         ╭───╯
 40 ┤     ╭───╯
 20 ┤ ╭───╯
  0 ┴─────────────────────────────
    50 data points (5 seconds)
```

### Altitude Graph (0-0.6 m range)
```
0.6 ┤                 ╭─╮
0.5 ┤             ╭───╯ ╰─╮
0.4 ┤         ╭───╯       ╰─
0.3 ┤     ╭───╯
0.2 ┤ ╭───╯
0.1 ┤─╯
0.0 ┴─────────────────────────────
    50 data points (5 seconds)
```

### Efficiency Graph (0-125 L/D range)
```
125 ┤                     ╭─╮
110 ┤                 ╭───╯ ╰─╮  ← Peak zone
 90 ┤             ╭───╯       ╰─ ← Ground effect
 70 ┤         ╭───╯              ← Free-stream
 50 ┤     ╭───╯
 30 ┤ ╭───╯
  0 ┴─────────────────────────────
    50 data points (5 seconds)
```

## Wind Display Components

### Wind Arrow (SVG)
```
  ↑     ← Points in direction wind is FROM
 ╱│╲    ← Rotates based on wind.direction
  │     ← Smooth 500ms transition
  │
```

### Wind Data Format
```
Primary:   10 KM/H        (bold, white)
Secondary: 285° • G4      (small, dimmed)
           └─┘   └─┘
           │     └─ Gusts (km/h)
           └─ Direction (degrees)
```

## Contact Page Oscillations

### Visual Effect (over time)
```
Speed oscillation (±2 km/h):
117 ┤     ╱╲     ╱╲     ╱╲
115 ┤────╱  ╲───╱  ╲───╱  ╲───
113 ┤        ╲─╯    ╲─╯    ╲─╯
    └─────────────────────────→ time

Altitude oscillation (±0.03 m):
0.53┤   ╱╲   ╱╲   ╱╲   ╱╲
0.50┤──╱  ╲─╱  ╲─╱  ╲─╱  ╲──
0.47┤      ╲╱    ╲╱    ╲╱
    └─────────────────────────→ time

Different frequencies create natural movement
```

## Mobile Layout (Simplified)

```
┌──────────────────────────────────┐
│  115 KM/H  •  0.50 M  •  118.5   │
│  (No graphs, compact horizontal) │
└──────────────────────────────────┘
```

## Page-Specific Wind Conditions

```
PROJECT   →  5 km/h  @ 270° (W)   • G2
SCIENCE   →  8 km/h  @ 290° (WNW) • G3
PRODUCTS  → 12 km/h  @ 310° (NW)  • G5
CONTACT   → 10 km/h  @ 285° (WNW) • G4
```

## Animation Timings

```
Efficiency color transition:  300ms
Wind arrow rotation:          500ms
Contact oscillations:         60fps (16.67ms)
Telemetry history update:     100ms
Regime label pulse:           1000ms (CSS)
```

## Typography

```
Labels:       7-9px, uppercase, tracking-widest, 30% opacity
Values:       24px (desktop), 18px (mobile), bold
Units:        8-10px, uppercase, accent color
Sparklines:   60×12px, 50% opacity
Wind data:    10px (primary), 8px (secondary)
```

## Responsive Breakpoints

```
Mobile (< 768px):
  - Horizontal layout
  - No sparklines
  - No wind display
  - No regime label
  - Compact spacing

Desktop (≥ 768px):
  - Vertical layout
  - Full sparklines
  - Wind display
  - Regime label
  - Generous spacing
```

## Data Update Frequencies

```
Motion values:        60fps (via spring physics)
Telemetry history:    10 Hz (every 100ms)
Contact oscillations: 60fps (requestAnimationFrame)
Wind conditions:      On page change only
Regime detection:     On speed/altitude change (memoized)
```

## Performance Metrics

```
Memory usage:         ~150 data points total (3 × 50)
Update frequency:     10 Hz for history
Animation frames:     60fps on Contact page only
SVG paths:            3 sparklines + 1 wind arrow
Cleanup:              All intervals/animations disposed
```
