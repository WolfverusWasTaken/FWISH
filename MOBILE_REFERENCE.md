# Mobile-Optimized Cockpit - Quick Reference

## Mobile View (< 768px)

### Layout
```
┌────────────────────────────────────────────────────┐
│                                                    │
│  ┌──────────────────────────────────────────────┐ │
│  │  115    •    0.50    •    118.5              │ │
│  │  KM/H        M            L/D                │ │
│  │                           ███ ███ ███        │ │
│  └──────────────────────────────────────────────┘ │
│                                                    │
└────────────────────────────────────────────────────┘
         ↑
    Bottom-4 positioning
    Horizontal flex layout
    Compact spacing (gap-4)
```

### Styling
- **Background**: `bg-black/60` (darker for better mobile visibility)
- **Blur**: `backdrop-blur-lg`
- **Border**: `border-white/10`
- **Shape**: `rounded-full`
- **Padding**: `px-5 py-3` (compact)
- **Position**: `bottom-4` (closer to edge)

### What's Visible
✅ Speed (115 KM/H)
✅ Altitude (0.50 M)  
✅ Efficiency (118.5 L/D) with color coding
✅ Efficiency zones (3 bars)

### What's Hidden
❌ Regime label
❌ Wind display
❌ Sparkline graphs

---

## Desktop View (≥ 768px)

### Layout
```
┌─────────────────────┐
│                     │
│  ┌───────────────┐  │
│  │ GROUND EFFECT │  │ ← Regime (green, pulsing)
│  ├───────────────┤  │
│  │ SPEED         │  │
│  │ 115 KM/H      │  │
│  ├───────────────┤  │
│  │ ALTITUDE      │  │
│  │ 0.50 M        │  │
│  ├───────────────┤  │
│  │ EFFICIENCY    │  │
│  │ 118.5 L/D     │  │ ← Green (peak)
│  │ ███ ███ ███   │  │ ← All zones lit
│  └───────────────┘  │
│                     │
│  ┌───────────────┐  │
│  │ WIND          │  │
│  │ ↑ 10 KM/H     │  │ ← Arrow rotates
│  │ 285° • G4     │  │
│  └───────────────┘  │
│                     │
└─────────────────────┘
```

### Styling
- **Main container**: Transparent background
- **Wind card**: `bg-black/40` with blur
- **Position**: `bottom-10 left-10`
- **Layout**: Vertical flex
- **Spacing**: `gap-6` (generous)

---

## Efficiency Color States

### Visual Examples

```
< 70 L/D (Below Optimal)
┌─────────────┐
│ 65.0 L/D    │ ← White/50% (dimmed)
│ █░░ ░░░ ░░░ │ ← Only first zone
└─────────────┘

70-89 L/D (Free-stream)
┌─────────────┐
│ 75.0 L/D    │ ← Cyan
│ ███ ░░░ ░░░ │ ← First zone lit
└─────────────┘

90-109 L/D (Ground Effect)
┌─────────────┐
│ 95.0 L/D    │ ← Green
│ ███ ███ ░░░ │ ← Two zones lit
└─────────────┘

≥ 110 L/D (Peak Performance)
┌─────────────┐
│ 118.5 L/D   │ ← Green + Pulsing
│ ███ ███ ███ │ ← All zones lit
└─────────────┘
```

---

## Oscillation Behavior

### Science Page (80 km/h, 0.10 m)
```
Speed over time:
82 ┤     ╱╲     ╱╲
80 ┤────╱  ╲───╱  ╲───
78 ┤        ╲─╯    ╲─╯

Altitude over time:
0.13┤   ╱╲   ╱╲
0.10┤──╱  ╲─╱  ╲──
0.07┤      ╲╱    ╲╱
```

### Products Page (120 km/h, 0.60 m)
```
Speed over time:
122 ┤     ╱╲     ╱╲
120 ┤────╱  ╲───╱  ╲───
118 ┤        ╲─╯    ╲─╯

Altitude over time:
0.63┤   ╱╲   ╱╲
0.60┤──╱  ╲─╱  ╲──
0.57┤      ╲╱    ╲╱
```

### Contact Page (115 km/h, 0.50 m)
```
Speed over time:
117 ┤     ╱╲     ╱╲
115 ┤────╱  ╲───╱  ╲───
113 ┤        ╲─╯    ╲─╯

Altitude over time:
0.53┤   ╱╲   ╱╲
0.50┤──╱  ╲─╱  ╲──
0.47┤      ╲╱    ╲╱
```

---

## Responsive Breakpoint

```css
/* Mobile: < 768px */
.cockpit {
  position: fixed;
  bottom: 1rem;          /* bottom-4 */
  left: 50%;
  transform: translateX(-50%);
  
  flex-direction: row;   /* Horizontal */
  gap: 1rem;             /* gap-4 */
  
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(16px);
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,0.1);
}

/* Desktop: ≥ 768px */
@media (min-width: 768px) {
  .cockpit {
    bottom: 2.5rem;      /* bottom-10 */
    left: 2.5rem;        /* left-10 */
    transform: none;
    
    flex-direction: column; /* Vertical */
    gap: 1.5rem;         /* gap-6 */
    
    background: transparent;
    backdrop-filter: none;
    padding: 0;
    border-radius: 0;
    border: none;
  }
}
```

---

## Touch Targets (Mobile)

All telemetry values have adequate spacing:
- **Minimum tap target**: 44×44px (iOS guidelines)
- **Horizontal spacing**: 1rem (gap-4)
- **Vertical padding**: 0.75rem
- **Total height**: ~60px (comfortable for thumbs)

---

## Performance on Mobile

### Optimizations
- ✅ No sparkline rendering (saves GPU)
- ✅ No history buffer (saves memory)
- ✅ Efficient oscillations (60fps)
- ✅ CSS transitions (hardware accelerated)
- ✅ Minimal DOM updates

### Battery Impact
- **Low**: Only 3 motion values updating
- **Efficient**: requestAnimationFrame (pauses when tab inactive)
- **Optimized**: No unnecessary re-renders

---

## Accessibility

### Mobile
- **High contrast**: Dark background, white text
- **Large text**: 18px (text-lg) minimum
- **Clear labels**: Uppercase, tracked
- **Color + Shape**: Efficiency uses both color AND zones

### Desktop
- **Larger text**: 24px (text-2xl)
- **More context**: Regime and wind labels
- **Better spacing**: Easier to scan

---

## Quick Comparison

| Feature | Mobile | Desktop |
|---------|--------|---------|
| Layout | Horizontal | Vertical |
| Position | Bottom center | Bottom left |
| Background | Dark blur | Transparent |
| Regime | Hidden | Visible |
| Wind | Hidden | Visible |
| Zones | Visible | Visible |
| Spacing | Compact | Generous |
| Size | Small | Large |

---

## Testing Checklist

### Mobile (< 768px)
- [ ] Telemetry bar appears at bottom center
- [ ] Horizontal layout with 3 metrics
- [ ] Efficiency zones visible and updating
- [ ] Dark background with blur
- [ ] No regime or wind display
- [ ] Oscillations working on Science/Products/Contact
- [ ] Comfortable thumb reach

### Desktop (≥ 768px)
- [ ] Telemetry stack appears at bottom left
- [ ] Vertical layout
- [ ] Regime label visible and pulsing (when appropriate)
- [ ] Wind card visible below telemetry
- [ ] Wind arrow rotating correctly
- [ ] Transparent background
- [ ] All spacing comfortable

### All Screens
- [ ] Efficiency colors changing correctly
- [ ] Zones lighting up at right thresholds
- [ ] Smooth transitions between pages
- [ ] Oscillations smooth (60fps)
- [ ] No layout shift or jank
