import fs from 'fs';
import pdf from 'pdf-parse';

async function extract() {
    try {
        const homeBuffer = fs.readFileSync('Documents/VESCO SCIENCE — HOME PAGE_compressed.pdf');
        const homeData = await pdf(homeBuffer);
        fs.writeFileSync('home_pdf.txt', homeData.text);
        
        const aboutBuffer = fs.readFileSync('Documents/ABOUT VESCO SCIENCE_compressed.pdf');
        const aboutData = await pdf(aboutBuffer);
        fs.writeFileSync('about_pdf.txt', aboutData.text);
        
        console.log("Extraction complete");
    } catch (e) {
        console.error(e);
    }
}

extract();
