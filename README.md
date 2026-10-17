# LUC Neuroscience Mentorship Program Website

Static HTML website for the LUC Neuroscience Mentorship Program at Loyola University Chicago.

## What is included
- Home, Executive Board, Mission, Resources, Events, Event Recaps, Ask a Question, and Get Involved pages.
- Club logo (`lnmp-logo.png`) used in the header/footer and Resources page.
- Google Form embedded for mentor/mentee sign-up.
- Google Form embedded for the Ask a Question page.
- E-board photos and LUC email links.
- Event Recaps page with five event photos and an embedded Google Slides presentation.
- LNM and NeuroSociety event information and Instagram links.
- Resources page organized into Courses, Undergraduate Research, and Resume & Career Development.

## Editing
The main page files are HTML. Site-wide visual styling is in `styles.css`; mobile navigation is in `script.js`.

For small text/link changes, GitHub's browser editor can be used. For larger changes, replace the relevant files in the repository and commit them. If GitHub is connected to Vercel, a commit to the production branch triggers a new deployment.

## Google Forms
Responses for both forms are stored in Google Forms. The form owner can review the Responses tab and optionally connect a form to Google Sheets for analysis.

## Images
- `lnmp-logo.png` — club logo
- `board-*.jpg` — executive board portraits
- `community-group-2026.jpg` — group photo

## Event recap updates
The `event-recaps.html` page contains the first Mentor-Mentee Social recap. Its photos are `event-1-mentor-mentee-social-01.jpg` through `event-1-mentor-mentee-social-05.jpg`. Keep the photos in the order shown. Before publishing any event recap, share a preview with the club president and wait for approval.

The Google Slides embed requires the presentation to be shared with the intended viewers. If it prompts visitors to request access, update the presentation sharing settings in Google Slides.


## October 2026 photo and logo updates
- The cropped, aligned club logo is stored in `lnmp-logo.png` and is used in the header/footer and favicon.
- The Events page no longer shows the Mentor-Mentee Social photo under “Our upcoming program events.” The same photo now appears under “LNM × NeuroSociety.”
- The homepage's three team-preview cards now display photos from the Mentor-Mentee Social recap. Full individual portraits on `board.html` remain unchanged.
