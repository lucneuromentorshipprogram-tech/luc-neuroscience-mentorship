# LUC Neuroscience Mentorship Website Guide

## Quick update workflow

1. Make a change in GitHub or have the board request an updated file package.
2. Commit the changed files to the GitHub repository.
3. Vercel will automatically deploy the new commit when the repository is connected.

## Common files

- `index.html` — homepage
- `board.html` — 2026–27 executive board
- `mission.html` — mission and program information
- `resources.html` — student resources
- `events.html` — LNM + NeuroSociety events
- `apply.html` — Google Form mentor/mentee signup
- `forum.html` + `forum.js` — public question forum
- `dashboard.html` + `dashboard.js` — private e-board question dashboard
- `styles.css` — site-wide design and responsive layout
- `script.js` — navigation/interactions
- `supabase-config.js` — Supabase project connection values (never use a service-role secret here)
- `supabase-schema.sql` — forum database setup

## Images

The new board/group photos are local files in the repository:
- `board-mariam.jpg`
- `board-emily.jpg`
- `board-sam.jpg`
- `board-jessica.jpg`
- `board-juliana.jpg`
- `community-group-2026.jpg`

## Mentor/mentee signup

The Get Involved page embeds the club Google Form:
https://docs.google.com/forms/d/e/1FAIpQLSfnaRwgaPENH6YKGJUto24ax4iVQiDOvYFS5JkKKqjaYeIzmw/viewform

## Question forum

The public forum is at `forum.html`. It is designed to save submissions to Supabase after the project is connected. The private dashboard is at `dashboard.html`.

Never put a Supabase `service_role` key in the website. Use the browser-safe publishable/anon key with Row Level Security configured.


### Executive board emails
Board member email addresses are listed in `board.html` directly below each member's favorite neurotransmitter. To update an address, change both the visible email and the `mailto:` link for that member.


## Social links
- LNM Instagram: https://www.instagram.com/lucneuromentorship/
- NeuroSociety Instagram: https://www.instagram.com/neurosocietyluc/
