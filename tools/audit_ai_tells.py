#!/usr/bin/env python3
"""Isovertic voice audit for field notes MD/MDX bodies.

Flags em dashes, en dashes, unicode ellipses, and banned AI-tell phrases.
Exits 0 when clean (or only documented exempt citation hits). Exits 1 on real finds.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

DASHES = re.compile(r"[\u2014\u2013]")
ELLIPSIS = re.compile(r"\u2026")
BANNED = [
    (re.compile(r"\bdelve\b", re.I), "delve"),
    (re.compile(r"\bjourney\b", re.I), "journey"),
    (re.compile(r"\blandscape\b", re.I), "landscape"),
    (re.compile(r"\bcrucial\b", re.I), "crucial"),
    (re.compile(r"\bpivotal\b", re.I), "pivotal"),
    (re.compile(r"ever-evolving", re.I), "ever-evolving"),
    (re.compile(r"in today's landscape", re.I), "in today's landscape"),
    (re.compile(r"when it comes to", re.I), "when it comes to"),
    (re.compile(r"at the end of the day", re.I), "at the end of the day"),
    (re.compile(r"it's worth noting", re.I), "it's worth noting"),
]

# Documented exemptions: source product names inside markdown link anchors.
EXEMPT_LINE = re.compile(
    r"B2B Buying Journey|Marketing Technology Landscape",
    re.I,
)


def audit_file(path: Path) -> list[str]:
    hits: list[str] = []
    text = path.read_text(encoding="utf8")
    # Ignore YAML frontmatter for phrase checks; still scan body for dashes.
    body = text
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            body = text[end + 4 :]
    for i, line in enumerate(body.splitlines(), start=1):
        if EXEMPT_LINE.search(line):
            continue
        if DASHES.search(line):
            hits.append(f"{path}:{i}  em or en dash")
        if ELLIPSIS.search(line):
            hits.append(f"{path}:{i}  unicode ellipsis")
        for cre, label in BANNED:
            if cre.search(line):
                hits.append(f"{path}:{i}  banned: {label}")
    return hits


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print("Usage: audit_ai_tells.py <file.md> [file.md ...]", file=sys.stderr)
        return 2
    all_hits: list[str] = []
    for arg in argv[1:]:
        all_hits.extend(audit_file(Path(arg)))
    if all_hits:
        for h in all_hits:
            print(h)
        print(f"\nVoice audit failed: {len(all_hits)} hit(s).", file=sys.stderr)
        return 1
    print("Voice audit clean.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
