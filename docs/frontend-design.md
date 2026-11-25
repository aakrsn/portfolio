# Portfolio frontend design

[Open the revised mockups](design/portfolio-mockups-v4.pdf) · [Project brief](../project_details.md) · [System architecture](system-architecture.md)

The mockups show the earlier approved layout at 1280px and 390px. The current header, section titles, and divider treatment are specified below. The copy draws on the supplied résumé and the owner’s publication decisions below.

## Research and literature review

Recruiters need to find the role, employment history, and technical breadth. Hiring managers need to distinguish Ajay’s contributions from the employer’s work. Freelance prospects need to see the problems Ajay has worked on and find a direct way to make contact. The supplied résumé gives the strongest contribution details for document question answering and annotation quality automation. It also provides three additional Centific projects and one education entry.

### Portfolio examples

- Brittany Chiang gives selected projects a short description, a screenshot where one is available, and a way to explore the work. Give the best project room for an example readers can inspect, and keep the employment chronology separate. [Brittany Chiang’s projects](https://brittanychiang.com/#projects)
- Julia Evans describes technical projects by what someone can do with them and points readers to usable examples. Use the annotator’s question as the entry point for Document QA. [Julia Evans’s projects](https://jvns.ca/projects/)
- Simon Willison’s Datasette project site explains who the tool serves and gives readers something to try. Use a fictional question, answer, and source passage to make the retrieval idea tangible. [Datasette](https://datasette.io/)

### Earlier layout references

- Brittany Chiang pairs her name and specialty with a one-sentence introduction and separates employer roles from projects. Her experience entries pair specific contributions with the relevant stack. Use that distinction for Centific and keep the full skills inventory in its own section. [Brittany Chiang](https://brittanychiang.com/)
- Cassidy Williams puts her role directly beneath her name and gives recent projects short descriptions in plain language. Use that direct introduction and describe each project in terms of the workflow it supported. [Cassidy Williams](https://cassidoo.co/)
- Shawn Wang describes what he does in one line and gives selected work a clear place separate from his longer archive. Give document QA the clearest starting point and keep the other Centific projects easy to scan on the same page. [Shawn Wang](https://swyx.io/)
- Josh W. Comeau pairs technical titles with concrete synopses that tell readers what each item covers. Give each project a brief description of the problem and contribution. [Josh W. Comeau](https://www.joshwcomeau.com/)

### Typeface selection

**DIN Condensed Bold** has tall, straight-sided letterforms that give the name the proportions of the supplied reference. The mockups use the installed typeface for the name, experience summary, and section headings. Confirm licensed web delivery during implementation. If a fallback is needed, preview its widths and wrapping against the mockups. [DIN Condensed and licensing](https://fonts.adobe.com/fonts/din-condensed) · [Barlow type project](https://github.com/jpt/barlow)

**Verdana** is the body and interface face in the mockups. It offers generous spacing and clearly differentiated characters in dates, technical terms and contact labels. Atkinson Hyperlegible Next is also designed for distinct letterforms. Verdana gives the design a readable wide face alongside the narrow headline using a font available in the local environment. Use Verdana with a system sans-serif fallback. [Microsoft’s Verdana notes](https://learn.microsoft.com/en-us/typography/font-list/verdana) · [Braille Institute’s Atkinson Hyperlegible family](https://www.brailleinstitute.org/freefont/)

Use landmarks, logically nested headings, and a skip link to make the same section structure navigable by keyboard, screen reader, and sight. Target WCAG 2.2 AA, including text and control contrast, reflow, visible and unobscured focus, keyboard operation, and target size. Use the WAI button pattern for the theme control. [WAI page structure](https://www.w3.org/WAI/tutorials/page-structure/) · [WCAG 2.2](https://www.w3.org/TR/WCAG22/) · [WAI button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

## Composition

Use the reference for the tall headline proportions. Set Ajay’s name in deep orange on two lines directly on the white or black page background. Place the experience summary, one-sentence introduction, and project link beside the name on desktop and below it on mobile.

```text
Desktop
[AI/ML Engineer]              [Work  Experience  Skills  Contact] [Dark mode]
AJAY KRISHNA                   2+ years of experience
ANUGU                          Intro and View projects
What I’ve built                Document QA case study with an inspectable example
                              Four other Centific projects
Experience                    Role, dates and deployment scope
Skills                        Short summary, technical skills disclosure, education
Let’s talk                    Email, LinkedIn and Phone

Mobile
[AI/ML Engineer] [Dark mode]
[Work  Experience  Skills  Contact]
AJAY KRISHNA
ANUGU
2+ years of experience
Intro and View projects
What I’ve built → Experience → Skills → Let’s talk
```

## Page hierarchy and copy

### Header and introduction

The header home link reads **AI/ML Engineer** and links to the top of the page at `/`. Header links read **Work**, **Experience**, **Skills**, and **Contact** and use the approved section anchors in that order. **Work** leads to `#projects`. The theme button reads **Dark mode** and uses an unboxed label with a compact state indicator.

- **Name and experience** — Ajay Krishna Anugu · 2+ years of experience. Visually uppercase the name while keeping its natural capitalization in the document text.
- **Introduction** — I build AI systems that help teams find answers in documents, check data quality, and protect personal information.
- **Action** — **View projects** goes to `#projects`.

### What I’ve built · `#projects`

Lead with Document QA. Identify Centific as the employer for all five entries, and keep the four other projects as short contribution summaries.

- **The problem** — Annotators needed to find specific task requirements in client-provided documents.
- **What I built** — I built a retrieval-augmented question-answering system that finds relevant passages and uses them to answer annotators’ questions.
- **Tools** — LangChain, FAISS, Gradio.
- **Fictional example** — The question is “What should I do if an image is too blurry to label?” The answer is “Flag the image for review and leave its label blank.” The **Source passage** disclosure shows the relevant excerpt from a fictional annotation guide. Label it as fictional beside the question and answer.

| Project | Contribution |
| --- | --- |
| **Data quality automation** | Built services for multilingual near-duplicate detection, semantic similarity, PII-related checks, word counts, and checks for AI-generated content in annotation workflows. |
| **Guideline Intelligence** | Contributed to a system that evaluates annotation outputs against client-provided task rules and guidelines. |
| **Safe AI model evaluation and red-teaming** | Contributed to testing model behaviour across safety categories and building backend services for internal platform integration. |
| **Data anonymisation** | Contributed to a completed pipeline to detect and mask or remove personally identifiable information from data used in AI and reinforcement learning workflows. |

### Experience · `#experience`

**Associate AI Engineer · Centific**

**August 2024 – November 2026**

Built Python and FastAPI services for human-in-the-loop annotation and AI research. Deployed those services with Docker and CI/CD on Azure and integrated them with PostgreSQL and SQL Server.

### Skills and education · `#skills`

Show the summary “Applied AI, Python APIs, and Azure deployments.” Group the full inventory under **View technical skills**, a native disclosure. Keep project-specific tools such as FAISS in the relevant project. Keep education visible beneath the skills.

| Skill group | Copy |
| --- | --- |
| Languages | Python, SQL, JavaScript |
| AI and machine learning | PyTorch, TensorFlow, scikit-learn, OpenCV, spaCy, NLTK, NumPy, Pandas |
| Generative and agentic AI | OpenAI, Hugging Face, LangChain, LangGraph, prompt engineering, RAG, embeddings |
| Backend and APIs | FastAPI, REST APIs, Streamlit, Gradio |
| Cloud and engineering | Microsoft Azure, Docker, CI/CD, Git, MLflow |
| Databases | PostgreSQL, Microsoft SQL Server |
| Data and visualization | Matplotlib, Seaborn, Tableau |

**Bachelor of Technology · CMR Institute of Technology**

December 2020 – May 2024 · 8.02 CGPA

### Contact · `#contact`

Use the heading **Let’s talk** and the line “Open to full-time roles and freelance AI projects.” Use the approved email, LinkedIn profile, and phone number from the résumé. Use **Email** as the primary contact action, with **LinkedIn** and **Phone** as secondary actions. Keep the links in the regular tab order and let them wrap on narrow screens. If the public PDF is included, add **Download résumé (PDF)** through `/resume.pdf`. The mockups show the three approved action labels and omit the contact values.

## Layout and visual system

| Element | Specification |
| --- | --- |
| Content width | 1120px maximum. Use 20px mobile gutters and at least 32px from 768px. |
| Desktop, 1024px and up | Use one header row. Give the name about 64% of the content width and put the intro alongside it. Place the Document QA story and example side by side. Use a shorter title column and a wider detail column for experience, other project summaries, education, and contact. Use three columns inside the technical skills disclosure. |
| Tablet, 768–1023px | Stack the name and introduction, use two skill columns, and allow the header to wrap. |
| Mobile, below 768px | Use one column. Keep the home link and theme switch in the first header row, and the navigation links below it. Allow navigation, steps, metadata and actions to wrap at 320px. |
| Spacing | Separate sections and project entries with whitespace and type hierarchy. Set the section spacing unit to 76px on desktop and 48px on mobile. Align the name to the page content margin. |
| Display | DIN Condensed Bold. Name 140px at 1280px, 68px at 390px, and 62px at 320px. Use a line-height of about 0.85 and allow additional lines with larger user settings. Use 72px desktop and 52px mobile for section headings, 46px desktop and 42px mobile for the experience summary, and 48px desktop and 41px mobile for the featured project. |
| Reading and controls | Verdana regular for body at 17px with 27–28px line-height. Use 16px for skill lists, 19–21px bold for project and role labels, and at least 14px for navigation, controls, stacks, and dates. Specify sizes with rem, and keep long reading blocks to about 66–75 characters. |
| Components | Use square action buttons. Let the example label and spacing distinguish the fictional example. Group each project heading with its description. |

### Theme colors and contrast

| Role | Light theme | Dark theme |
| --- | --- | --- |
| Page background | Pure white `#FFFFFF` | Pure black `#000000` |
| Page text and control outlines | Pure black `#000000` | Pure white `#FFFFFF` |
| Name text, primary action fills, and accents | Deep orange `#CC4C00` | Deep orange `#CC4C00` |
| Text on orange | Pure white `#FFFFFF` | Pure white `#FFFFFF` |

The three colors above are the complete design palette. Use solid fills and maintain the same orange in both themes. Contrast ratios from the WCAG relative luminance formula are **21:1** for black and white, **4.56:1** for orange and white, and **4.60:1** for orange and black. Each pair meets WCAG AA for normal text and the 3:1 threshold for control boundaries. Use a 2px focus outline in the current page text color with a 3px offset. Underline inline links and use an underline on action hover so the interaction does not depend on a new color. [WCAG minimum contrast](https://www.w3.org/TR/WCAG22/#contrast-minimum) · [WCAG non-text contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast)

### Motion

Open the source passage with a native disclosure. The passage appears immediately, and its orange marker draws down once over 180ms. The mockup shows the expanded state. Use CSS and honor `prefers-reduced-motion` so the marker appears immediately when reduced motion is enabled. Keep the rest of the page still during scrolling. The source example and skills disclosure work with JavaScript off. [W3C guidance on animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)

## Interaction and accessibility review

- First visit follows the system color preference. The **Dark mode** toggle keeps its label in both themes and exposes its state through `aria-pressed`. Enter and Space activate it. Focus stays on the button and the page stays at its current scroll position.
- A manual choice takes precedence over the system preference and persists on reload when browser storage is available. With storage unavailable, switching works for the current page. With JavaScript unavailable, the page follows the system theme and the toggle is hidden.
- Use a top-of-page **Skip to content** link visible on focus, landmarks for header, navigation and main, one H1 for the name, H2s for sections, and H3s for their subsections. Keep visual and tab order aligned. Native links support Enter and deep linking to all published section destinations.
- Make header links and buttons at least 44px tall and wide where applicable. Keep the header in normal document flow so it cannot cover a destination heading or a focused control. Use native anchor navigation without animated scrolling. Keep interactive shapes and focus distinguishable in forced colors.
- Review the implemented page at 320 CSS px, at 200% text zoom, and at an equivalent 400% reflow zoom. Verify both themes, wrap, keyboard order, skip link, all approved destinations, and theme state announcements with a screen reader. Check behavior with JavaScript disabled and storage blocked.

## Publication decisions

- The owner confirmed that the data anonymisation work is complete.
- The owner approved publishing the project descriptions, contact information, and other résumé details. The design uses the supplied Centific dates and attributes the work to Centific.
- A reviewed PDF remains an optional deliverable. The contact links use the details from the supplied résumé.
