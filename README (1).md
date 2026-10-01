# Matt's Hub

A phone-first personal hub: capture an idea in under 10 seconds, keep lists, see your one active project, and jump to your dashboards. Installs on Android like an app, works offline, and only your Google account can read the data.

Live at: `https://batmantech123.github.io/hub/`

## Setup (about 45 minutes, once)

### 1. Put the app on GitHub Pages (10 min)

1. Sign in to GitHub. Click **+ > New repository**. Name it `hub`. Leave it **Public** (the code holds no personal data; your data lives in Firebase). Click **Create repository**.
2. Click **uploading an existing file**. Drag in everything from this folder: `index.html`, `config.js`, `sw.js`, `manifest.webmanifest`, `firestore.rules`, `README.md` and the `icons` folder. Click **Commit changes**.
3. Go to **Settings > Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
4. After about a minute, `https://batmantech123.github.io/hub/` opens in **demo mode** (yellow banner). That proves the site works.

Do not upload `hub-starter.json` here. It is imported later from your phone or PC.

### 2. Create the Firebase project (10 min)

1. Go to `console.firebase.google.com` and sign in with the Google account you will use on your phone.
2. **Create a project** named `matt-hub`. Turn off Google Analytics (not needed). Wait for it to finish.
3. **Build > Authentication > Get started > Sign-in method > Google**. Turn it on, pick your email as the support email, **Save**.
4. Still in Authentication: **Settings > Authorized domains > Add domain**: `batmantech123.github.io`.
5. **Build > Firestore Database > Create database**. Choose **Start in production mode** and the location `us-east1` (closest to Georgia). This locks everything until step 6.

### 3. Connect the app to Firebase (5 min)

1. In Firebase: gear icon > **Project settings > General > Your apps**, click the **</>** (Web) icon. Nickname `hub`. Do not tick Firebase Hosting. **Register app**.
2. Copy the six values inside `firebaseConfig` (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId).
3. On GitHub, open `config.js` in your `hub` repo, click the pencil (edit), replace each `PASTE_...` value, and **Commit changes**.

These values are safe to be public. They identify your project; the rules in step 6 are what protect the data.

### 4. Sign in once (2 min)

Open `https://batmantech123.github.io/hub/` and tap **Sign in with Google**. The hub opens to Settings with a message saying your data is locked. That is expected. Copy the **User ID** shown there.

### 5. Lock the data to your account (3 min)

1. In Firebase: **Firestore Database > Rules**.
2. Paste the contents of `firestore.rules`, replace `PASTE_YOUR_UID` with your User ID, and click **Publish**.
3. Reload the hub. The lock message disappears and you can save items.

### 6. Install on the Galaxy S22 (2 min)

1. Open the hub in **Chrome** on the phone and sign in.
2. Tap the **⋮** menu > **Add to home screen** (or **Install app**) > **Install**.
3. Optional: long-press the icon and drag it to your main home screen or dock.

It now opens full screen like an app, and works offline: changes sync when you reconnect.

### 7. Load your starter data (1 min)

In the hub: **Settings (gear) > Import file** and pick `hub-starter.json` (send it to your phone or do this on your PC). It adds your 18 project cards and 2 dated reminders to the Projects list and sets the Now card.

### Optional hardening (5 min)

In Google Cloud Console > **APIs & Services > Credentials**, open the auto-created browser API key and under *Application restrictions* choose **Websites**, adding `https://batmantech123.github.io/*`. Firebase still works; other sites cannot use your key.

## Using it

| Type this | Result |
| --- | --- |
| `Ask about the workshop pricing` | Ideas Inbox |
| `Turntable belt #buy` | To Buy |
| `Thinking in Bets #read` | Reading |
| `Stats homework ch 3 #school !fri` | School, due Friday |
| `Check RAV4 listing #car !10/12` | Car search, due Oct 12 |
| `Pricing page idea @income` | Inbox, tagged to the income project |

Other date shortcuts: `!today`, `!tom`, `!mon` to `!sun`, `!10/21`, `!2026-10-21`. Inside a list, untagged items go to that list.

**Wrap up** on the Now card updates your active project and next action. Tap the circle to mark an item done; tap **⋯** to edit, move, set a date or delete.

## Upkeep

- Monthly (first Sunday review): **Settings > Export backup**, and empty the Ideas Inbox into lists or projects.
- Firebase's free Spark plan has no inactivity pause; personal use stays far inside its free limits.
- To change Quick links, edit `LINKS` in `config.js`.

## Privacy rules

No account numbers, balances, ID numbers or FNF information in the hub. Link to the Thesis dashboard instead.
