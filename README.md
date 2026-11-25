# Ajay Krishna Anugu · AI/ML Engineering Portfolio

A single-page portfolio built with FastAPI, HTML, CSS, and JavaScript. It opens with selected work, including a Document QA case study.

## Run locally

From the repository root, create a virtual environment and start FastAPI.

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r backend/requirements.txt
.venv/bin/python -m uvicorn backend.main:app --reload
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). The page uses a locally available DIN Condensed face when present and serves the bundled Barlow Condensed fallback from the same origin.

The [project brief](project_details.md), [system architecture](docs/system-architecture.md), and [frontend design](docs/frontend-design.md) record the approved scope and the release checks.
