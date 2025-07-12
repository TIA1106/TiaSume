import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

export async function generateScreenshotPDF(elementId, fileName = "resume") {
  const node = document.getElementById(elementId);
  if (!node) return alert("Resume preview not found");

  const dataUrl = await domtoimage.toPng(node);

  const pdf = new jsPDF("p", "mm", "a4");
  const imgProps = pdf.getImageProperties(dataUrl);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(`${fileName}.pdf`);
}
