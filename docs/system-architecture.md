# Portfolio system architecture

[Project brief](../project_details.md) · [GitHub repository](https://github.com/aakrsn/portfolio.git)

## Product scope

Publish a responsive portfolio that helps recruiters, hiring managers, and freelance clients assess Ajay Krishna’s fit and make contact. The first release is one page with an introduction, experience, selected project evidence, skills, and contact links. Use the résumé to cover the full range of experience and skills approved for publication. Keep the portfolio readable on mobile and desktop in both the light and dark white, orange, and black palettes. The UI specification lives in `docs/frontend-design.md`.

## Runtime architecture

Deploy one Python FastAPI application over HTTPS. FastAPI sends the finished HTML through `FileResponse` and serves styles, scripts, and public media through a dedicated `StaticFiles` mount. The page and its assets share an origin. The portfolio content lives in semantic HTML and is available when JavaScript is off. A small browser script handles the theme switch. [FastAPI file responses](https://fastapi.tiangolo.com/advanced/custom-response/#fileresponse) · [FastAPI static files](https://fastapi.tiangolo.com/tutorial/static-files/)

The file-based design fits a single read-only portfolio and keeps edits in Git. Revisit server templates if multiple pages need shared content or layouts. An API, database, or separately deployed frontend would require an architecture decision tied to a new feature.

| Public path | Response and ownership |
| --- | --- |
| `/` | `GET` returns `frontend/index.html` as HTML. Navigation uses `#experience`, `#projects`, `#skills`, and `#contact`. |
| `/static/{path}` | FastAPI mounts `frontend/static/` for CSS, JavaScript, and approved media. |
| `/resume.pdf` | Optional `GET` route serves an approved `frontend/resume.pdf` as a PDF attachment. Add the route and the download link together when the file is approved. |

`backend/main.py` owns routing, content types, and file delivery. Resolve frontend paths from the backend module’s location so requests work independently of the process working directory. Disable FastAPI’s generated API documentation endpoints. `frontend/` owns the page structure, copy, styles, and browser behavior. Preview the UI from the repository root with `python -m http.server 8001 --directory frontend`. Verify the HTTP routes and response headers against the integrated FastAPI app before release.

CSS follows the visitor’s `prefers-color-scheme` setting by default. A keyboard-operable theme button switches the theme immediately and stores the visitor’s choice in browser `localStorage` when available. Page content and links remain usable if JavaScript or storage is unavailable. [CSS color preference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-color-scheme) · [Browser local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

The Document QA workflow uses three native radio controls and CSS to show the selected step. The highlight moves after a selection and switches instantly with reduced motion enabled. The interaction works without JavaScript or server requests.

## Résumé and publication boundary

Keep the locally supplied `ajaykrishna_resume.docx` outside Git and the deploy artifact. If it remains beside the project brief during implementation, add `/ajaykrishna_resume.docx` to the project’s `.gitignore` before staging. Use it to draft accurate, owner-approved public HTML. Publish only approved contact channels and project links. If a downloadable résumé is wanted, export a reviewed PDF, check its content and metadata for private information, and commit that public derivative at `frontend/resume.pdf`. Deploy the application from the project repository so the deployment can be built without the DOCX. [GitHub documentation on ignoring files](https://docs.github.com/en/get-started/git-basics/ignoring-files)

## Repository folder structure

```text
portfolio/
├── .gitignore
├── README.md
├── project_details.md
├── backend/
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── resume.pdf                 # optional, after publication approval
│   └── static/
│       ├── styles.css
│       ├── theme.js
│       └── images/                # add when public images are available
└── docs/
    ├── system-architecture.md
    ├── frontend-design.md
    └── design/                    # review mockups when supplied
```

The repository root contains the application, project brief, and design documents. The source résumé stays in the owner's local review folder.

## Feature and release workflow

1. **Research.** Check the requirements, current content, and existing behavior for the feature.
2. **Literature review.** Consult primary documentation and applicable web standards for unfamiliar implementation decisions.
3. **Planning.** Record the acceptance criteria, files, and route or component changes. Update this architecture before implementing a new feature, and update the UI specification when the feature changes the interface. Obtain approval before adding dependencies or making multi-file architectural changes.
4. **Execution.** Develop the backend and frontend independently within their folders, integrate through the route contract, and verify the resulting feature. Run the repository’s test suite, type checker, and linter when configured. Commit and push each verified feature to the project repository.

Launch the integrated app from the repository root with an ASGI server using the `backend.main:app` entry point. Use the hosting service’s configured port and public HTTPS URL. Hosting provider and custom domain selection remain release decisions. [FastAPI deployment guide](https://fastapi.tiangolo.com/deployment/manually/)

## Acceptance checks

- On the public HTTPS URL, `/` returns readable HTML and each linked stylesheet, script, image, and navigation anchor resolves. The document title and description identify the portfolio and its purpose.
- At mobile and desktop widths, the page remains readable with no horizontal overflow. Navigation and the theme switch work with a keyboard, focus is visible, and text and controls meet WCAG 2.2 AA contrast criteria in both themes. [WCAG text contrast](https://www.w3.org/TR/WCAG22/#contrast-minimum) · [WCAG non-text contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast)
- Light and dark system defaults, manual switching, and the saved choice after reload behave as designed. With JavaScript off, portfolio content, section navigation, and contact links remain usable.
- The published experience and skills match the owner-approved source facts, and project and contact links are current. If the approved PDF ships, `/resume.pdf` downloads it. Requests for the source DOCX and project documentation return `404`.
