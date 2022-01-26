# Singleton Pattern
A class that can be instantiated once and then accessed globally.  Why would one want to have a single instance of a class?  Typically it's to control access to some shared resource, like a database, file, HTTP connection, etc.

Singleton candidates must satisfy three requirements:

1. Controls access to a shared resource
2. Access to the resource will be requested from disparate parts of the system
3. There can only be one

## Some use cases
There're very few reasons to use a `Singleton`, since its best used as a resource management 

- Logging
  - Acceptable because it doesn't effect code execution.  If disabled, coding remains the same
- Translations
- Service locator

Generally seen as an anti-pattern(see below).

## Issues
Despite the utility of the Singleton, there're a couple of issues with this pattern.

- Global instance variable reference
- Dependencies are hidden
- Difficult to subclass
- Usually need more than one

### Global variable
Global state is harmful to application design because it makes program state unpredictable.  It's always a side effect.  The only way this is not a problem is if the global state is immutable.

### Dependencies are hidden
A component using one or more Singletons means dependency information is hidden.  Each component using a Singleton creates a coupling to all other components using the Singleton.  This makes the Singleton less reusable as each new user struggles to figure out all dependencies and coupled code.

### Difficult to subclass
Given that initialization occurs statically, it creates issue because subclasses inherit initialization code without the chance to override it.

### Usually need more than one
When a class starts as a Singleton, its functionality tends to evolve such that there need to be multiple instances.

## Remedy
- Create an interface and a default implementation of your singleton
- Construct a single instance of your default implementation at the “top” of your system. This might be in a Spring config, or in code, or defined in a variety of ways depending on your system.
- Pass the single instance into each component that needs it (dependency injection)

## Example
```ts
/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
  private static instance: Singleton;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   * Domain-specific logic
   */
  public someFunc() {
    // ...
  }
}
```

## Resources
http://web.archive.org/web/20120603233658/http://tech.puredanger.com/2007/07/03/pattern-hate-singleton

https://refactoring.guru/design-patterns/singleton/typescript/example

https://medium.com/swlh/design-patterns-in-typescript-singleton-part-1-of-5-bd3742b46589

https://www.patterns.dev/posts/singleton-pattern/