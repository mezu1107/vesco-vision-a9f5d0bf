import PyPDF2

def extract_text(pdf_path, output_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
    with open(output_path, 'w', encoding='utf-8') as out:
        out.write(text)

extract_text('Documents/VESCO SCIENCE — HOME PAGE_compressed.pdf', 'home_pdf.txt')
extract_text('Documents/ABOUT VESCO SCIENCE_compressed.pdf', 'about_pdf.txt')
print("Extraction successful")
