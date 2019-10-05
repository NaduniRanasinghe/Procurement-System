package com.csse.procurementws.serviceImpl;
import java.io.FileOutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import com.csse.procurementws.model.*;
import com.itextpdf.text.BadElementException;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

public class ReturnItemReport {
        String fileName = getCurrentDate() + "_" + getCurrentTime() + ".pdf";
        String FILE = "C:/Users/" + System.getProperty("user.name") + "/Documents/" + fileName;

        private static Font catFont = new Font(Font.FontFamily.TIMES_ROMAN, 18,
                Font.BOLD);
        private static Font redFont = new Font(Font.FontFamily.TIMES_ROMAN, 12,
                Font.NORMAL, BaseColor.RED);
        private static Font subFont = new Font(Font.FontFamily.TIMES_ROMAN, 16,
                Font.BOLD);
        private static Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 12,
                Font.BOLD);

        /*-------------------Generate Current Date -----------------*/
        public static String getCurrentDate() {
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date date = new Date();
            String newDate = dateFormat.format(date);

            return newDate;
        }

        /*-------------------Generate Current Time -----------------*/
        public static String getCurrentTime() {

            Calendar cal = Calendar.getInstance();
            SimpleDateFormat sdf = new SimpleDateFormat("HH-mm-ss");
            return (sdf.format(cal.getTime()));

        }
        
        public void generateReport(){

        }
        
        public void generateLowStockLevelPdf(List<ReturnedGoods> returnedGoods){
            try {

                Document document = new Document();
                PdfWriter.getInstance(document, new FileOutputStream(FILE));
                document.open();
                addMetaData(document);
                addTitlePage(document);
                createTable(document,returnedGoods);
                document.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        
        
        private  void addMetaData(Document document) {

            document.addTitle("Low Stock Level Report");

        } 
        
        private static void addTitlePage(Document document)
            throws DocumentException {
            Paragraph preface = new Paragraph();
            // We add one empty line
            addEmptyLine(preface, 1);
            // Lets write a big header
            preface.add(new Paragraph("Return Items Report", catFont));

            addEmptyLine(preface, 1);
            // Will create: Report generated by: _name, _date
            preface.add(new Paragraph(
                    "Report generated by: " + System.getProperty("user.name") + ", " + new Date(), //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$
                    smallBold));
            addEmptyLine(preface, 2);
            document.add(preface);
            
            
        }
        
        
        private static void createTable(Document subCatPart,List<ReturnedGoods> returnedGoods) throws BadElementException {
            PdfPTable table = new PdfPTable(4);
            
            PdfPCell c1 = new PdfPCell(new Phrase("Item ID"));
            c1.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(c1);
            
            c1 = new PdfPCell(new Phrase("Date "));
            c1.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(c1);

            c1 = new PdfPCell(new Phrase("Item Name"));
            c1.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(c1);
            
            c1 = new PdfPCell(new Phrase("Supplier Name"));
            c1.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(c1);
            
            table.setHeaderRows(1);
            
            for (ReturnedGoods s: returnedGoods) {
                table.addCell(s.getRetItemName());
                table.addCell(s.getRetDate());
                table.addCell(s.getSupplier());
                
            }
            try {
                subCatPart.add(table);
            } catch (DocumentException e) {
                e.printStackTrace();
            }
        }
        
        private static void addEmptyLine(Paragraph paragraph, int number) {
            for (int i = 0; i < number; i++) {
                paragraph.add(new Paragraph(" "));
            }
        }


}
