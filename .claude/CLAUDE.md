# CLAUDE.md

Behavioral guidelines for working in this repo. Part A is generic and reusable across projects. Part B is project-specific and should be rewritten per project.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

---

# Part A: General Guidelines

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them. Don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.
- Read the relevant existing code before writing new code. Check Part B for conventions first.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- No new dependencies without asking. Prefer the standard library and what's already installed.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code or bugs, mention them. Don't fix them unasked.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## 5. Verify Before Claiming Done

- Run the type checker, linter, and relevant tests (commands in Part B) before saying a task is complete.
- If you couldn't run something, say so explicitly. Never imply verification that didn't happen.
- Report failures honestly, including ones you couldn't resolve.

## 6. Contracts Across Boundaries

When a change crosses a boundary (API ↔ client, DB ↔ model, module ↔ module):
- Change both sides in the same task, or flag the mismatch.
- Keep a single source of truth for shapes; don't hand-duplicate types that drift.
- Breaking changes to a public contract need to be called out, not slipped in.

## 7. Safety

- Never commit secrets, tokens, or `.env` files. Use environment variables.
- Don't run destructive commands (dropping data, `rm -rf`, force-push, rewriting history) without explicit confirmation.
- Don't disable tests, type checks, or lint rules to make something pass.

## 8. Communication

- Keep summaries short: what changed, why, how it was verified, anything left open.
- Commits: small and focused, imperative mood ("Add assignment filter"), one logical change each.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---
# Part B: Project-Specific

Project context, my working rules, current status and the decisions log live in @BRIEF.md. The "My rules" section there overrides Part A where they conflict (in particular, don't write or suggest tests as part of Goal-Driven Execution until I start a test pass).
