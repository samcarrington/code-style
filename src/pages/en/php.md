---
title: PHP
description: Guidance for working with PHP at AnalogFolk
position: 5
category: PHP
layout: ../../layouts/MainLayout.astro
---

## PHP

PHP is a server side scripting language used to generate dynamic pages.
In general we prefer the use of [Laravel][laravel] as an MVC framework for PHP projects.

### Syntax

Unless otherwise specified, follow the guidelines in the PHP Standards 
Recommendations. Particular attention should be given to 
[PSR-1 (Basic Coding Standard)][psr-1] and
[PSR-12 (Coding Style Guide)][psr-12].

Some frameworks have adopted variations to the standards set by the PSRs, these
are covered in brief below. But the key requirement is for a project to be 
internally consistent. If possible, the use of automation and tooling to enforce
standards should be implemented. The standard way to achieve this with PHP is to 
use CodeSniffer, and rule-sets for this tool are available to cover the PSR rules 
and variations.

#### Naming

- Use `camelCase` for functions and methods
- Use `UpperCamelCase` for Class names
- Use `CAPITALS_WITH_UNDERSCORES` for constants.

### Laravel

The [Laravel Best Practice][laravel-best] guide expands on the PSR standards for
naming and coding, with useful tips and guidance for producing quality code, 
advice on tooling, and other great standard ways of working.

### WordPress

The [Official WordPress Coding Standards][wp-php] diverge somewhat from the
PSR guidance. If you're coding in WordPress it may be necessary to
employ [codesniffer][code-sniffer] and adopt the standards defined in the developer
guide.

- Use [tabs not spaces](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/#indentation) 😥
- Some variations with [spaces](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/#space-usage)
  and [braces](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/#brace-style)

### Further Reading

- [Laravel Best Practices][laravel-best]
- [S.O.L.I.D. Principles][solid]
- [Wordpress VIP Install Codesniffer][vip-cs]

[laravel]: https://laravel.com/
[psr-1]: https://www.php-fig.org/psr/psr-1/
[psr-12]: https://www.php-fig.org/psr/psr-12/
[wp-php]: https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/
[code-sniffer]: https://github.com/squizlabs/PHP_CodeSniffer#installation
[laravel-best]: https://github.com/alexeymezenin/laravel-best-practices
[solid]: https://medium.com/@dhkelmendi/solid-principles-made-easy-67b1246bcdf
[vip-cs]: https://docs.wpvip.com/how-tos/php_codesniffer/
