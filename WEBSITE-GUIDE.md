# Website Guide — LUC Neuroscience Mentorship Program

## Quick workflow
1. Download or edit the website files.
2. Upload changed files to the GitHub repository.
3. Click **Commit changes**.
4. Vercel deploys the new version when the repository is connected.

## Pages
- `index.html` — homepage
- `board.html` — 2026–27 executive board
- `mission.html` — club mission
- `resources.html` — courses, undergraduate research, and resume/career resources
- `events.html` — LNM + NeuroSociety events
- `event-recaps.html` — event recap stories, photos, and slideshow embeds
- `forum.html` — Ask a Question Google Form
- `apply.html` — mentor/mentee Google Form

## Site-wide files
- `styles.css` — all colors, layout, typography, mobile rules
- `script.js` — mobile menu and small interactions
- `lnmp-logo.png` — club logo
- `board-*.jpg` — board portraits
- `community-group-2026.jpg` — group photo

## Google Forms
The Ask a Question and Get Involved pages use embedded Google Forms. Form responses are stored by Google Forms and can be linked to Google Sheets by the form owner.

## Updating resources
Open `resources.html` and add/edit a resource-card. Keep official Loyola links under the appropriate category:
- Courses
- Undergraduate Research
- Resume & Career Development

## Updating events
Open `events.html` and update the LNM or NeuroSociety event cards. Keep Instagram links under their respective event sections.
- **mentee-mc-neuro-plan.numbers** — downloadable Molecular & Cellular Neuroscience course-planning file linked in the Resources → Courses section.

## Event recaps workflow
1. Create a separate recap page or add a new recap entry; do not overwrite older recaps.
2. Add the new recap link to the Event Recaps index/navigation as needed.
3. Compress and include event photos; write useful alt text.
4. Embed the slideshow using its Google Slides `/embed` URL. Ensure viewing permissions allow the intended audience.
5. Share a GitHub/Vercel preview with the president and wait for approval before merging to the production branch.


## October 2026 photo updates
- `events.html` places the Mentor-Mentee Social photo under the “LNM × NeuroSociety” community section, not below “Our upcoming program events.”
- On `index.html`, the three homepage team-preview cards use event recap photos (`event-1-mentor-mentee-social-01.jpg`, `-02.jpg`, and `-04.jpg`). The full individual board portraits on `board.html` have not been changed.
- `lnmp-logo.png` is the cropped/aligned circular club logo used throughout the site.
