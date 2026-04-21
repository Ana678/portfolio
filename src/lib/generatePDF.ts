import { jsPDF } from "jspdf";
import { translations, Language } from "@/i18n/translations";

const COLOR = {
    cream: [249, 249, 247] as [number, number, number],
    graphite: [51, 51, 51] as [number, number, number],
    sage: [107, 142, 119] as [number, number, number],
    sageLight: [200, 215, 205] as [number, number, number],
    terracotta: [204, 153, 141] as [number, number, number],
    terracottaLight: [240, 220, 213] as [number, number, number],
    muted: [115, 115, 110] as [number, number, number],
    border: [225, 224, 218] as [number, number, number],
    white: [255, 255, 255] as [number, number, number],
};

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 18;
const CONTENT_W = PAGE_W - MARGIN * 2;

type Translation = typeof translations.pt;

const setFill = (doc: jsPDF, c: [number, number, number]) => doc.setFillColor(c[0], c[1], c[2]);
const setText = (doc: jsPDF, c: [number, number, number]) => doc.setTextColor(c[0], c[1], c[2]);
const setDraw = (doc: jsPDF, c: [number, number, number]) => doc.setDrawColor(c[0], c[1], c[2]);

const labels: Record<Language, {
    cover: { eyebrow: string; role: string; year: string };
    toc: { title: string; items: string[] };
    about: string;
    journey: string;
    hardSkills: string;
    //softSkills: string;
    projects: string;
    problem: string;
    solution: string;
    results: string;
    technologies: string;
    contact: string;
    footer: string;
}> = {
    pt: {
        cover: { eyebrow: "Portfólio Profissional", role: "Engenheira de Software & UX Designer", year: new Date().getFullYear().toString() },
        toc: { title: "Sumário", items: ["Sobre", "Trajetória", "Hard Skills", "Projetos", "Contato"] },
        about: "Sobre Mim",
        journey: "Trajetória",
        hardSkills: "Hard Skills",
        //softSkills: "Soft Skills",
        projects: "Projetos Selecionados",
        problem: "Problema",
        solution: "Solução",
        results: "Resultados",
        technologies: "Tecnologias",
        contact: "Vamos Conversar",
        footer: "Ana Carolina · Portfólio",
    },
    en: {
        cover: { eyebrow: "Professional Portfolio", role: "Software Engineer & UX Designer", year: new Date().getFullYear().toString() },
        toc: { title: "Table of Contents", items: ["About", "Journey", "Hard Skills", "Projects", "Contact"] },
        about: "About Me",
        journey: "Journey",
        hardSkills: "Hard Skills",
        //softSkills: "Soft Skills",
        projects: "Selected Projects",
        problem: "Problem",
        solution: "Solution",
        results: "Results",
        technologies: "Technologies",
        contact: "Let's Talk",
        footer: "Ana Carolina · Portfolio",
    },
};

const drawFooter = (doc: jsPDF, pageNum: number, label: string) => {
    setDraw(doc, COLOR.border);
    doc.setLineWidth(0.2);
    doc.line(MARGIN, PAGE_H - 14, PAGE_W - MARGIN, PAGE_H - 14);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setText(doc, COLOR.muted);
    doc.text(label, MARGIN, PAGE_H - 9);
    doc.text(String(pageNum).padStart(2, "0"), PAGE_W - MARGIN, PAGE_H - 9, { align: "right" });
};

const newPage = (doc: jsPDF, pageNum: number, label: string) => {
    doc.addPage();
    setFill(doc, COLOR.cream);
    doc.rect(0, 0, PAGE_W, PAGE_H, "F");
    drawFooter(doc, pageNum, label);
};

const sectionHeader = (doc: jsPDF, eyebrow: string, title: string, y: number): number => {

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setText(doc, COLOR.sage);
    doc.text(eyebrow.toUpperCase(), MARGIN, y);

    doc.setFont("times", "normal");
    doc.setFontSize(28);
    setText(doc, COLOR.graphite);
    doc.text(title, MARGIN, y + 11);

    setDraw(doc, COLOR.terracotta);
    doc.setLineWidth(0.8);
    doc.line(MARGIN, y + 15, MARGIN + 18, y + 15);

    return y + 26;
};

const wrapText = (
    doc: jsPDF,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
): number => {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + lines.length * lineHeight;
};

const ensureSpace = (
    doc: jsPDF,
    y: number,
    needed: number,
    pageNum: number,
    footerLabel: string
): { y: number; pageNum: number } => {
    if (y + needed > PAGE_H - 22) {
        const next = pageNum + 1;
        newPage(doc, next, footerLabel);
        return { y: MARGIN + 6, pageNum: next };
    }
    return { y, pageNum };
};

const drawCover = (doc: jsPDF, t: Translation, lang: Language) => {
    const L = labels[lang];

    setFill(doc, COLOR.cream);
    doc.rect(0, 0, PAGE_W, PAGE_H, "F");

    setFill(doc, COLOR.sage);
    doc.rect(0, 0, PAGE_W, 8, "F");

    setFill(doc, COLOR.terracotta);
    doc.rect(PAGE_W - 12, 0, 12, PAGE_H, "F");

    setFill(doc, COLOR.sageLight);
    doc.circle(PAGE_W - 35, 60, 22, "F");
    setFill(doc, COLOR.terracottaLight);
    doc.circle(PAGE_W - 22, 90, 12, "F");

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    setText(doc, COLOR.sage);
    doc.text(L.cover.eyebrow.toUpperCase(), MARGIN, 50, { charSpace: 0.6 });

    doc.setFont("times", "italic");
    doc.setFontSize(56);
    setText(doc, COLOR.graphite);
    doc.text("Ana", MARGIN, 95);
    doc.setFont("times", "normal");
    doc.text("Carolina", MARGIN, 125);

    setDraw(doc, COLOR.terracotta);
    doc.setLineWidth(1.2);
    doc.line(MARGIN, 138, MARGIN + 40, 138);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(13);
    setText(doc, COLOR.muted);
    wrapText(doc, L.cover.role, MARGIN, 152, 130, 6);

    doc.setFont("times", "italic");
    doc.setFontSize(12);
    setText(doc, COLOR.graphite);
    wrapText(doc, t.hero.title, MARGIN, 180, 140, 6.5);

    setDraw(doc, COLOR.border);
    doc.setLineWidth(0.3);
    doc.line(MARGIN, PAGE_H - 35, PAGE_W - MARGIN - 14, PAGE_H - 35);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setText(doc, COLOR.muted);
    doc.text(L.cover.year, MARGIN, PAGE_H - 25);
    doc.text("PORTFOLIO · 01", PAGE_W - MARGIN - 14, PAGE_H - 25, { align: "right" });
};

const drawTOC = (doc: jsPDF, lang: Language, footerLabel: string, pageNum: number) => {
    newPage(doc, pageNum, footerLabel);
    const L = labels[lang];
    let y = sectionHeader(doc, L.cover.eyebrow, L.toc.title, MARGIN + 12);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    L.toc.items.forEach((item, i) => {
        setText(doc, COLOR.graphite);
        doc.text(`${String(i + 1).padStart(2, "0")}`, MARGIN, y);
        setText(doc, COLOR.graphite);
        doc.setFont("times", "normal");
        doc.setFontSize(14);
        doc.text(item, MARGIN + 14, y);
        setDraw(doc, COLOR.border);
        doc.setLineWidth(0.2);
        doc.line(MARGIN + 14 + doc.getTextWidth(item) + 4, y - 1, PAGE_W - MARGIN - 10, y - 1);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        setText(doc, COLOR.muted);
        doc.text(String(i + 3).padStart(2, "0"), PAGE_W - MARGIN, y, { align: "right" });
        y += 13;
    });
};

const drawAboutJourney = (doc: jsPDF, t: Translation, lang: Language, footerLabel: string, startPage: number): number => {
    const L = labels[lang];
    let pageNum = startPage;
    newPage(doc, pageNum, footerLabel);

    let y = sectionHeader(doc, L.cover.eyebrow, L.about, MARGIN + 12);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    setText(doc, COLOR.graphite);
    y = wrapText(doc, t.about.intro, MARGIN, y, CONTENT_W, 5.5) + 8;

    doc.setFont("times", "italic");
    doc.setFontSize(16);
    setText(doc, COLOR.sage);
    doc.text(L.journey, MARGIN, y);
    y += 8;

    t.about.timeline.forEach((item) => {
        const block = 22;
        const space = ensureSpace(doc, y, block, pageNum, footerLabel);
        y = space.y;
        pageNum = space.pageNum;

        setFill(doc, COLOR.sageLight);
        doc.roundedRect(MARGIN, y - 4, 38, 6.5, 1.5, 1.5, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        setText(doc, COLOR.graphite);
        doc.text(item.year.toUpperCase(), MARGIN + 2, y);

        doc.setFont("times", "normal");
        doc.setFontSize(13);
        setText(doc, COLOR.graphite);
        doc.text(item.title, MARGIN + 44, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        setText(doc, COLOR.terracotta);
        doc.text(item.institution, MARGIN + 44, y + 5);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        setText(doc, COLOR.muted);
        const descY = wrapText(doc, item.description, MARGIN + 44, y + 11, CONTENT_W - 44, 4.8);
        y = descY + 6;
    });

    return pageNum;
};

const drawHardSkills = (doc: jsPDF, t: Translation, lang: Language, footerLabel: string, startPage: number): number => {
    const L = labels[lang];
    let pageNum = startPage + 1;
    newPage(doc, pageNum, footerLabel);
    let y = sectionHeader(doc, L.cover.eyebrow, L.hardSkills, MARGIN + 12);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    setText(doc, COLOR.muted);
    y = wrapText(doc, t.bento.tech.subtitle, MARGIN, y, CONTENT_W, 5) + 6;

    t.bento.tech.categories.forEach((cat) => {
        const headerH = 16;
        const skillsH = Math.ceil(cat.skills.length / 3) * 10 + 4;
        const space = ensureSpace(doc, y, headerH + skillsH + 8, pageNum, footerLabel);
        y = space.y;
        pageNum = space.pageNum;

        doc.setFont("times", "italic");
        doc.setFontSize(15);
        setText(doc, COLOR.sage);
        doc.text(cat.name, MARGIN, y);

        setDraw(doc, COLOR.terracotta);
        doc.setLineWidth(0.6);
        doc.line(MARGIN, y + 1.5, MARGIN + 8, y + 1.5);
        y += 6;

        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        setText(doc, COLOR.muted);
        y = wrapText(doc, cat.description, MARGIN, y, CONTENT_W, 4.5) + 4;

        const chipsPerRow = 3;
        const chipW = (CONTENT_W - 6) / chipsPerRow;
        cat.skills.forEach((skill, idx) => {
            const col = idx % chipsPerRow;
            const row = Math.floor(idx / chipsPerRow);
            const x = MARGIN + col * (chipW + 3);
            const cy = y + row * 9;

            setFill(doc, COLOR.sageLight);
            doc.roundedRect(x, cy - 4.5, chipW, 7, 2, 2, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8.5);
            setText(doc, COLOR.graphite);
            doc.text(skill.name, x + chipW / 2, cy, { align: "center" });
        });
        y += Math.ceil(cat.skills.length / chipsPerRow) * 9 + 6;
    });

    return pageNum;
};

/*const drawSoftSkills = (doc: jsPDF, t: Translation, lang: Language, footerLabel: string, startPage: number): number => {
  const L = labels[lang];
  let pageNum = startPage + 1;
  newPage(doc, pageNum, footerLabel);
  let y = sectionHeader(doc, L.cover.eyebrow, L.softSkills, MARGIN + 12);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  setText(doc, COLOR.muted);
  y = wrapText(doc, t.softSkills.subtitle, MARGIN, y, CONTENT_W, 5) + 6;

  const colW = (CONTENT_W - 6) / 2;
  t.softSkills.skills.forEach((skill, idx) => {
    const col = idx % 2;
    const x = MARGIN + col * (colW + 6);
    const blockH = 24;

    if (col === 0) {
      const space = ensureSpace(doc, y, blockH + 4, pageNum, footerLabel);
      y = space.y;
      pageNum = space.pageNum;
    }

    setFill(doc, COLOR.white);
    setDraw(doc, COLOR.border);
    doc.setLineWidth(0.2);
    doc.roundedRect(x, y - 4, colW, blockH, 2, 2, "FD");

    setFill(doc, COLOR.terracotta);
    doc.rect(x, y - 4, 1.5, blockH, "F");

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    setText(doc, COLOR.graphite);
    doc.text(skill.name, x + 5, y + 2);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    setText(doc, COLOR.muted);
    wrapText(doc, skill.description, x + 5, y + 8, colW - 8, 4);

    if (col === 1) {
      y += blockH + 4;
    }
  });

  if (t.softSkills.skills.length % 2 !== 0) y += 28;
  return pageNum;
};*/

const drawProjects = (doc: jsPDF, t: Translation, lang: Language, footerLabel: string, startPage: number): number => {
    const L = labels[lang];
    let pageNum = startPage + 1;
    newPage(doc, pageNum, footerLabel);
    let y = sectionHeader(doc, L.cover.eyebrow, L.projects, MARGIN + 12);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    setText(doc, COLOR.muted);
    y = wrapText(doc, t.portfolio.subtitle, MARGIN, y, CONTENT_W, 5) + 8;

    t.portfolio.projects.forEach((project, idx) => {

        const estH = 90;
        const space = ensureSpace(doc, y, estH, pageNum, footerLabel);
        y = space.y;
        pageNum = space.pageNum;


        doc.setFont("times", "italic");
        doc.setFontSize(36);
        setText(doc, COLOR.sageLight);
        doc.text(String(idx + 1).padStart(2, "0"), MARGIN, y + 4);


        doc.setFont("times", "normal");
        doc.setFontSize(18);
        setText(doc, COLOR.graphite);
        doc.text(project.title, MARGIN + 22, y);


        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        setText(doc, COLOR.muted);
        let cy = wrapText(doc, project.description, MARGIN + 22, y + 6, CONTENT_W - 22, 5);


        let tagX = MARGIN + 22;
        cy += 2;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        project.tags.forEach((tag) => {
            const tw = doc.getTextWidth(tag) + 6;
            setFill(doc, COLOR.terracottaLight);
            doc.roundedRect(tagX, cy - 3, tw, 5.5, 1.5, 1.5, "F");
            setText(doc, COLOR.graphite);
            doc.text(tag, tagX + 3, cy + 0.5);
            tagX += tw + 2;
        });
        y = cy + 8;


        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        setText(doc, COLOR.sage);
        doc.text(L.problem.toUpperCase(), MARGIN, y);
        y += 4;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        setText(doc, COLOR.graphite);
        y = wrapText(doc, project.problem, MARGIN, y, CONTENT_W, 4.7) + 5;

        const sp = ensureSpace(doc, y, 30, pageNum, footerLabel);
        y = sp.y; pageNum = sp.pageNum;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        setText(doc, COLOR.sage);
        doc.text(L.solution.toUpperCase(), MARGIN, y);
        y += 4;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        setText(doc, COLOR.graphite);
        y = wrapText(doc, project.solution, MARGIN, y, CONTENT_W, 4.7) + 5;


        const rp = ensureSpace(doc, y, 8 + project.results.length * 5, pageNum, footerLabel);
        y = rp.y; pageNum = rp.pageNum;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        setText(doc, COLOR.sage);
        doc.text(L.results.toUpperCase(), MARGIN, y);
        y += 4;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        setText(doc, COLOR.graphite);
        project.results.forEach((r) => {
            const rs = ensureSpace(doc, y, 6, pageNum, footerLabel);
            y = rs.y; pageNum = rs.pageNum;
            setFill(doc, COLOR.terracotta);
            doc.circle(MARGIN + 1.5, y - 1.2, 0.9, "F");
            y = wrapText(doc, r, MARGIN + 5, y, CONTENT_W - 5, 4.7);
        });

        y += 6;
        setDraw(doc, COLOR.border);
        doc.setLineWidth(0.2);
        doc.line(MARGIN, y, PAGE_W - MARGIN, y);
        y += 8;
    });

    return pageNum;
};


const drawContact = (doc: jsPDF, t: Translation, lang: Language, footerLabel: string, startPage: number) => {
    const L = labels[lang];
    const pageNum = startPage + 1;
    newPage(doc, pageNum, footerLabel);
    let y = sectionHeader(doc, L.cover.eyebrow, L.contact, MARGIN + 12);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    setText(doc, COLOR.graphite);
    y = wrapText(doc, t.contact.subtitle, MARGIN, y, CONTENT_W, 5.5) + 12;

    const contacts = [
        { label: t.contact.email, value: "anaaraujo.dev@gmail.com" },
        { label: t.contact.whatsapp, value: "+55 (84) 99842-2170" },
        { label: "LinkedIn", value: "linkedin.com/in/ana678" },
        { label: "GitHub", value: "github.com/Ana678" },
    ];

    contacts.forEach((c) => {
        setDraw(doc, COLOR.border);
        doc.setLineWidth(0.2);
        doc.line(MARGIN, y + 8, PAGE_W - MARGIN, y + 8);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        setText(doc, COLOR.sage);
        doc.text(c.label.toUpperCase(), MARGIN, y);

        doc.setFont("times", "normal");
        doc.setFontSize(13);
        setText(doc, COLOR.graphite);
        doc.text(c.value, PAGE_W - MARGIN, y, { align: "right" });

        y += 14;
    });

    y = PAGE_H - 60;
    doc.setFont("times", "italic");
    doc.setFontSize(16);
    setText(doc, COLOR.sage);
    doc.text("— obrigada pela leitura —", PAGE_W / 2, y, { align: "center" });
};

export const generatePortfolioPDF = (lang: Language) => {
    const t = translations[lang];
    const L = labels[lang];
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const footer = L.footer;

    drawCover(doc, t, lang);

    drawTOC(doc, lang, footer, 2);

    let lastPage = drawAboutJourney(doc, t, lang, footer, 3);

    lastPage = drawHardSkills(doc, t, lang, footer, lastPage);

    //lastPage = drawSoftSkills(doc, t, lang, footer, lastPage);

    lastPage = drawProjects(doc, t, lang, footer, lastPage);

    drawContact(doc, t, lang, footer, lastPage);

    doc.save(`Ana_Carolina.pdf`);
};
