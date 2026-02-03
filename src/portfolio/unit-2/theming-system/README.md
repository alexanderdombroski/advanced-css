# Product Showcase - Theming System

## ARCHITECTURE CHOICE:

- [x] Choose either [CUBE CSS](https://cube.fyi/#what-does-cube-css-stand-for) or BEM for organizing your CSS.
- [x] Document your choice and follow it consistently throughout.

**CUBE CSS approach:**

- Composition: Layout patterns (.flow, .grid, .cluster)
- Utilities: Single-purpose classes (.text-center, .font-bold)
- Blocks: Component styles (.card, .button)
- Exceptions: State variations (add additional classes as needed)

<!--
**BEM approach:**

- Blocks: Standalone components (.card)
- Elements: Parts of blocks (.card**title, .card**image)
- Modifiers: Variations (.card--featured)
-->

## ORGANIZATION:

You may create additional CSS files if you prefer to separate:

- Base styles and custom properties
- Layout patterns
- Components
- Utilities

## MODERN CSS FEATURES TO USE:

- CSS nesting throughout
- Custom properties for theming
- color-mix() for color variations
- Modern selectors (:is, :where, :has, :not)
- Logical properties (margin-inline, padding-block)

## REQUIREMENTS:

- [ ] Define theme system with custom properties
- [ ] Implement light and dark themes
- [ ] Support prefers-color-scheme
- [ ] Use color-mix() for color variations
- [ ] Create responsive layout
- [ ] Ensure accessibility (contrast, focus indicators, reduced motion)
- [ ] Style all components and states
