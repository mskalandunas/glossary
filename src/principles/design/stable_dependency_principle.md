# Stable Dependency Principle (SDP)

> [A component's] dependencies should be in the direction of stability

Let's figure out what this means.

Types of components -- stable and volatile.

## Stable Components
Stable components have either:
- High-level policy
- Has stood the tested of time and has more or less found its role within the architecture
  - use cases influencing change have been identified and addressed

### Examples
- Native global APIs like `JSON.stringify`, `Promise`, etc
- Browser APIs like `document.getElementById` and `fetch`
- Domain layer classes

## Volatile Components
Volatile components:
- low-level details
- fairly new and will probably change often

### Examples
- Clients, which exist on the outerbounds of the application and change frequently
- Features in development or classes/functions without any clear responsibility

## Conclusion
This means we often write code depending on stable components.  Volatile components are important and are ever present in every system -- they're essentially components in development.  It's important that **no currently stable component depends on a volatile component.**

Revisiting the principle, we can rewrite it as:

> New components should be built ontop of stable components, whose interfaces and responsibilities are expected to be stable, rather than volatile components, whose interfaces and responsibiltiies may be less dependable

## Source
https://khalilstemmler.com/wiki/stable-dependency-principle/