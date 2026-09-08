#!/usr/bin/env python3
"""
Isovertic AI-tells audit.

Usage:
    python3 audit_ai_tells.py <file.md> [<file.md> ...]

Flags:
    - Em-dashes and en-dashes in prose
    - Unicode ellipsis (…)
    - The full banned-phrase list from references/ai-tells.md

Ignores URL slugs, code blocks, and inline code.
Exit code 0 if all files clean, 1 if any file has hits.
"""
import re
import sys
from pathlib import Path

# Punctuation bans
PUNCT_PATTERNS = [
    (r'—', 'EM-DASH (banned in prose)'),
    (r'–', 'EN-DASH (banned in prose; check numeric ranges)'),
    (r'…', 'UNICODE ELLIPSIS (use three periods)'),
]

# Word/phrase bans — case-insensitive, word-boundary matched
PHRASE_PATTERNS = [
    # Top ten offenders
    (r'\bdelv(e|ing|ed)\b', 'delve'),
    (r'\btapestry\b', 'tapestry'),
    (r'\brealm\b', 'realm'),
    (r"\blandscape\b(?! (photo|painting|architect|mode))", 'landscape (metaphorical)'),
    (r'\bever-(evolving|changing|growing)\b', 'ever-evolving'),
    (r"\bin today'?s (world|landscape|market|environment|economy|climate)\b", "in today's [world/landscape]"),
    (r'\bwhen it comes to\b', 'when it comes to'),
    (r'\bat the end of the day\b', 'at the end of the day'),
    (r"\bit'?s (worth|important) (to )?(noting|note|remember|understand|recognize)\b", "it's worth noting / important to note"),
    (r'\bcrucial\b', 'crucial'),
    (r'\bpivotal\b', 'pivotal'),
    (r'\bmyriad\b', 'myriad'),
    (r'\bplethora\b', 'plethora'),
    # Next fifteen
    (r'\bharness(ing|ed)?\b(?! (racing|the horse))', 'harness (verb)'),
    (r'\bleverag(e|ing|ed|es)\b', 'leverage (use "use")'),
    (r'\brobust\b', 'robust'),
    (r'\bseamless(ly)?\b', 'seamless'),
    (r'\bcutting-edge\b', 'cutting-edge'),
    (r'\bstate-of-the-art\b', 'state-of-the-art'),
    (r'\bworld-class\b', 'world-class'),
    (r'\btop-notch\b', 'top-notch'),
    (r'\bbest-in-class\b', 'best-in-class'),
    (r'\bgame-chang(er|ing|ers)\b', 'game-changer'),
    (r'\brevolutioniz(e|ing|ed|es)\b', 'revolutionize'),
    (r'\brevolutionary\b', 'revolutionary'),
    (r'\bunlock(ing|ed|s)?\b', 'unlock (verb)'),
    (r'\bempower(ing|ed|ment|s)?\b', 'empower'),
    (r'\belevat(e|ing|ed|es)\b', 'elevate'),
    (r'\btransformative\b', 'transformative'),
    (r'\btransformational\b', 'transformational'),
    (r'\bholistic(ally)?\b', 'holistic'),
    (r'\bsynerg(y|ies|istic)\b', 'synergy'),
    (r'\bfoster(ing|ed|s)?\b', 'foster (verb)'),
    (r'\bcultivat(e|ing|ed|es)\b', 'cultivate'),
    (r'\bembark (on|upon)\b', 'embark on'),
    # Tell-transitions
    (r'\bmoreover\b', 'moreover'),
    (r'\bfurthermore\b', 'furthermore'),
    (r'^additionally,', 'additionally (as sentence opener)'),
    (r'^nonetheless,', 'nonetheless (as sentence opener)'),
    (r'\bindeed,\b', 'indeed (standalone emphasis)'),
    (r'\bin conclusion\b', 'in conclusion'),
    (r'\bin essence\b', 'in essence'),
    (r'^in practice,', 'in practice, (as sentence opener)'),
    (r'\bfirst and foremost\b', 'first and foremost'),
    (r'\blast but not least\b', 'last but not least'),
    (r'^that said,', 'that said (as sentence opener)'),
    (r'\bcase in point\b', 'case in point'),
    # Tell-openers
    (r"\blet'?s (dive|explore|walk|unpack|take a look)\b", "let's dive / explore / walk / unpack"),
    (r'\bdive (deep )?into\b', 'dive into'),
    (r'\bdeep dive\b', 'deep dive'),
    (r'\bat its core\b', 'at its core'),
    (r'\bat the heart of\b', 'at the heart of'),
    (r'\bshed light on\b', 'shed light on'),
    (r'\bpaves? the way\b', 'paves the way'),
    (r'\bin light of\b', 'in light of'),
    (r'\bthe fact that\b', 'the fact that (usually cuttable)'),
    (r'\bnot only .{1,50} but also\b', 'not only... but also'),
    (r'\ba wealth of\b', 'a wealth of'),
    (r'\btestament to\b', 'testament to'),
    (r'\bmeticulous(ly)?\b', 'meticulous'),
    (r'\bjourney\b', 'journey (marketing sense; check for URL false-positive)'),
    (r'\bhonestly,\b', 'honestly (as intensifier)'),
    (r'\bfrankly,\b', 'frankly (as intensifier)'),
]

CODE_FENCE = re.compile(r'^```')
URL_RE = re.compile(r'https?://\S+|\]\([^)]+\)')


def strip_code_and_urls(line: str) -> str:
    """Remove inline code and URLs so we don't flag words inside them."""
    line = URL_RE.sub('', line)
    line = re.sub(r'`[^`]*`', '', line)
    return line


def audit_file(path: Path) -> list:
    hits = []
    in_code_block = False
    with path.open() as f:
        lines = f.readlines()
    for i, raw_line in enumerate(lines, 1):
        if CODE_FENCE.match(raw_line):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        line = strip_code_and_urls(raw_line)
        for pattern, label in PUNCT_PATTERNS:
            for m in re.finditer(pattern, line):
                hits.append((i, label, raw_line.rstrip()[:180]))
        for pattern, label in PHRASE_PATTERNS:
            for m in re.finditer(pattern, line, re.IGNORECASE | re.MULTILINE):
                hits.append((i, label, raw_line.rstrip()[:180]))
    return hits


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    all_clean = True
    for arg in sys.argv[1:]:
        path = Path(arg)
        if not path.exists():
            print(f"[MISSING] {arg}")
            all_clean = False
            continue
        hits = audit_file(path)
        if not hits:
            print(f"[CLEAN] {path}")
        else:
            all_clean = False
            print(f"\n[HITS] {path}  ({len(hits)} findings)")
            grouped = {}
            for lineno, label, text in hits:
                grouped.setdefault(label, []).append((lineno, text))
            for label, occs in grouped.items():
                print(f"  [{label}] x{len(occs)}")
                for lineno, text in occs[:5]:
                    print(f"    line {lineno}: {text}")
                if len(occs) > 5:
                    print(f"    ... and {len(occs) - 5} more")
    print("\n" + "=" * 60)
    print("ALL CLEAN" if all_clean else "HITS REMAIN — fix before shipping")
    sys.exit(0 if all_clean else 1)


if __name__ == '__main__':
    main()
