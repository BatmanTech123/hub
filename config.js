// Matt's Hub configuration.
// 1) Paste your Firebase web config below (Firebase console > Project settings > Your apps > SDK setup and configuration > Config).
//    These values identify your project; they are not secrets. Your Firestore rules are what keep the data private.
// 2) Edit LINKS to change the Quick links row.
// While apiKey still starts with "PASTE", the hub runs in demo mode and keeps data only on this device.

export const FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

export const LINKS = [
  { label: "Thesis dashboard", url: "https://batmantech123.github.io/thesis-dashboard/" },
  { label: "Thesis doc", url: "https://claude.ai/code/artifact/e474abe8-800a-4775-82a9-5ea9b6e0d6b4" },
  { label: "Project Board", url: "https://claude.ai/artifact/8yrvv7q9AMjuEydAdPpjX7" },
  { label: "Income Plans", url: "https://claude.ai/code/artifact/5b9b35bf-0023-426e-9456-b959fc5259e5" },
  { label: "Hedge Lab", url: "https://claude.ai/artifact/W1hB8BYPFx52XNPqC3AMou" },
  { label: "Red-Day explainer", url: "https://claude.ai/artifact/ARaSo8Z4DfDouvcpMc5h9R" }
];
