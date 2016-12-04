# Passwords 2016 Presentation
**Cracking PwdHash: A Bruteforce Attack on Client-side Password Hashing**

To be presented at [Passwords 2016](https://passwords2016.rub.de/program.html).

Bochum, Germany, 5-7 December 2016.

You'll need LaTeX, pdflatex, beamer and make to build the presentation PDF.

When editing, the main text goes in `main.tex`. Bibliography items in `main.bib`. Images (PDF, PNG, JPEG) go in the `figures` folder.

To build the document:
```
make
```

This essentially performs the following.

```
pdflatex main
bibtex main
pdflatex main
pdflatex main
```

This should build a PDF file main.pdf of the presentation.

You can use `make clean` to remove temporary build files.

To turn on/off generation of the notes pages, change the flag in the ``documentclass`` declaration at the top of `main.tex` so it matches one of the following.

```
\documentclass[handout, notes=hide]{beamer}
\documentclass[handout, notes=show]{beamer}
```
