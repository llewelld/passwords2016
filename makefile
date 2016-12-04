all: passwords2016.pdf main.pdf passwords2016small.pdf

#main.aux: main.tex main.bib
main.aux: main.tex
	pdflatex main.tex

main.bbl: main.aux
	bibtex main.aux

#main.pdf: main.tex main.bbl
main.pdf: main.tex
	pdflatex main.tex
	pdflatex main.tex

passwords2016.pdf: main.pdf
	cp main.pdf passwords2016.pdf

passwords2016small.pdf: passwords2016.pdf
	gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=passwords2016small.pdf passwords2016.pdf

clean:
	rm *.blg *.log *.pdf *.bbl *.aux *.out *.wiki *.snm *.nav *.toc *.vrb

