---
title: PHP
description: Guidance for working with PHP at AnalogFolk
position: 4
category: PHP
---

## PHP

PHP is a server side scripting language used to generate dynamic pages.
Analogfolk prefer the use of [Laravel][laravel] as an MVC framework for PHP projects.

### Syntax

Follow the guidelines in the PHP Standards Recommendations. Particular attention
should be given to [PSR-1 (Basic Coding Standard)][psr-1] and
[PSR-12 (Coding Style Guide)][psr-12].

#### Naming

- Use `camelCase` for functions and methods
- Use `UpperCamelCase` for Class names
- Use `CAPITALS_WITH_UNDERSCORES` for constants.

### Laravel

The [Laravel Best Practice][laravel-best] guide expands on the PSR standards for
naming and coding, with useful tips and guidance for producing quality code, 
advice on tooling, and other great standard ways of working.

### Further Reading

- [Laravel Best Practices][laravel-best]
- [S.O.L.I.D. Principles][solid]

[laravel]: https://laravel.com/
[psr-1]: https://www.php-fig.org/psr/psr-1/
[psr-12]: https://www.php-fig.org/psr/psr-12/
[laravel-best]: https://github.com/alexeymezenin/laravel-best-practices
[solid]: https://medium.com/@dhkelmendi/solid-principles-made-easy-67b1246bcdf
