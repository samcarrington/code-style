## Introduction

This guide should be used to assist members of the team at Analogfolk
London in writing good quality applications. This is intended as a
brief checklist and set of baseline standards for the team to follow. It
should be shared with development partners as the set of standards to
follow in all work on behalf of Analogfolk. Adherence to standards should be
monitored and enforced by Technical Leads.

### General Principles

- Don't prematurely optimise; keep it readable, well commented and understandable
- All code in any project should look like one person typed it
- Enforce the agreed upon styles through automation, code review and pull request
- Never mix spaces and tabs for indentation.
- An [EditorConfig][editorconfig] should be added to any project to maintain conventions
- Use configuration files committed to the project repository to set up rules for 
  [eslint][eslint-config] and/or [prettier][prettier-config]

Generally use and enforce the standards outlined here. If your project varies in
style at all from this document, agree that up front, document the standard, and
enforce the standard you're using by adding tooling to your project. Overall, it
is important to be internally consistent and predictable.

[editorconfig]: https://editorconfig.org/
[eslint-config]: https://eslint.org/docs/user-guide/configuring/
[prettier-config]: https://prettier.io/docs/en/configuration.html
