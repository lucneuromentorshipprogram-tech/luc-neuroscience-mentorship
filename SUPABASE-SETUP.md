# LUC Neuroscience Mentorship — Question Storage

This version stores every submitted forum question in a Supabase Postgres database.
The public website can **insert** questions, but public visitors cannot read them.
Authorized e-board users can sign in to `dashboard.html` and review/export the submissions.

## 1. Create the database
Create a Supabase project at https://supabase.com/.

For this website setup, the `forum_questions` table was created in Supabase Table Editor and RLS is enabled. The public INSERT policy named **Public can submit questions** is also configured for `anon`.

The intended schema creates:
- `forum_questions` — the quantitative + qualitative submissions
- `club_admins` — the e-board user IDs allowed to read submissions

Row Level Security (RLS) is enabled. The public can submit, while only authorized authenticated users can read.

## 2. Connect the website
`supabase-config.js` in this package is already filled with the club project URL and publishable key you provided.

Do **not** replace it with a secret/service-role key. Supabase documents the publishable key as safe for browser use when Row Level Security is enabled and policies limit access.

## 3. Set up e-board dashboard access
In Supabase go to **Authentication → Users** and create the e-board accounts that should be allowed to review submissions.

For each approved e-board account, copy its Auth UUID and run:

```sql
insert into public.club_admins (user_id)
values ('PASTE-USER-UUID-HERE');
```

Do this only for people who should have access to the club's question data.

## 4. Test the complete flow
1. Open `forum.html` on the public website.
2. Submit a test question.
3. Confirm the row appears in Supabase → Table Editor → `forum_questions`.
4. Open `dashboard.html`.
5. Sign in with an authorized e-board account.
6. Confirm the question appears in the dashboard.
7. Test **Export CSV**.

## 5. What the club will be able to analyze
The stored fields support both quantitative and qualitative program evaluation:

- number of questions over time
- topic/category frequency
- mentor vs. mentee vs. prospective member volume
- class-year patterns
- semester patterns
- follow-up requests
- full free-text question responses

The dashboard provides counts and a CSV export for deeper analysis in Excel or Google Sheets.

## 6. Privacy + research note
Do not ask students to submit clinical information, passwords, financial information, or other sensitive personal data through this form.

The form includes an internal-evaluation consent checkbox. If the club later wants to treat these submissions as formal human-subjects research, publish them, or share identifiable responses outside the program, check Loyola's applicable research-approval/privacy requirements before doing so.
