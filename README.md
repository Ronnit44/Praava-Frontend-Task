# ⚖️ Floating Hero Section — Praava Legal Frontend Task

A pixel-inspired implementation of the **Legal Work Platform Hero Section** using React + Tailwind CSS.  
This project demonstrates component architecture, reusable UI patterns, floating layout positioning, and visual polish.

---

## ✨ Overview

The hero section showcases a legal workflow platform with floating interactive cards representing key features such as Billing, Matters, Tasks, Documents, and a Portal interaction card.

The design replicates the provided reference with responsive behavior and modern UI effects.

---

## 🚀 Live Features

- 🎯 Split hero layout (text + floating visualization)
- 🧩 Reusable `FloatingCard` component
- 🔄 Variant-based component architecture (Portal card)
- 🌀 Rotated floating cards with absolute positioning
- 🌙 Dark mode styling
- 📱 Responsive mobile stacking
- ✨ Subtle hover & motion effects

---

## 🧱 Component Architecture

The core of the UI is a reusable floating card component with variant support:

```tsx
<FloatingCard variant="default" ... />
<FloatingCard variant="profile" ... />
```

### Variants

- **default** → pill feature cards (Billing, Matters, Tasks, Documents)  
- **profile** → portal interaction card (John Doe)

Both share:

- floating wrapper  
- rotation logic  
- animation delay  
- visual depth styling  

This ensures consistency while allowing layout differences.

---

## 🎨 Floating Layout Strategy

- Parent container → `relative`
- Cards → `absolute`
- Rotation → CSS transform
- Inner content → inverse rotation (keeps text upright)

```css
transform: rotate(angle);
transform: rotate(-angle); /* inner */
```

---

## 🛠️ Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- Lucide React Icons

---

---

## ⚙️ Setup

```bash
npm install
npm run dev
```

---

## 📱 Responsive Behavior

- Desktop → floating chaotic layout  
- Mobile → stacked cards grid  
- Large screens → animated floating positions  

---

## 🌙 Dark Mode

Tailwind dark classes are used for gradient background and text contrast.

---

## ⭐ Assignment Requirements Coverage

✔ Split layout  
✔ Floating pills with rotation  
✔ Reusable component  
✔ Portal card variant  
✔ Background blobs  
✔ Responsive design  
✔ Tailwind styling  

---

## 💡 Key Implementation Detail

The Portal card is implemented as a **variant of the FloatingCard component** rather than a separate element, demonstrating scalable component design.

---


## 📄 License

This project was created as part of the Praava Legal Frontend Assessment.
