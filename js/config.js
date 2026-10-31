/* ==========================================================================
   HAMZIFY WEBSITE — SETTINGS
   This is the ONLY file you need to edit to update the website.
   Change a value between the quotes, save, and upload the file again.
   ========================================================================== */
window.HAMZIFY_CONFIG = {

  /* ---- APP DOWNLOAD ---------------------------------------------------- */
  // Direct link to the APK file. Leave "" (empty) to show "Download coming soon".
  APK_DOWNLOAD_URL: "https://hamzify-download.sites.tab.bot/Hamzify.apk",
  APP_VERSION: "1.3.3",                 // e.g. "1.3.0"
  APK_FILE_SIZE: "5.3 MB",              // e.g. "6.1 MB"
  LAST_UPDATED: "31 October 2026",      // e.g. "15 November 2026"
  MINIMUM_ANDROID_VERSION: "Android 5.1 or newer", // e.g. "Android 6.0 or newer"

  /* ---- WEBSITE ADDRESS -------------------------------------------------- */
  // Used by the Share button. Change it when you move to your own domain.
  SITE_URL: "https://hamzaafzal1306-sys.github.io/",

  /* ---- CONTACT ---------------------------------------------------------- */
  // Your public contact email. While empty, the site shows "[contact email]".
  CONTACT_EMAIL: "hamzaafzal1306@gmail.com",

  /* ---- FEATURES (cards in the "Features" section) ---------------------- */
  // icon: one of  profile | people | photo | reels | stories | chat | explore | bell | shield | moon
  // Add, remove or reorder items freely.
  FEATURES: [
    { icon: "profile", title: "User Profiles",
      text: "Your own profile with photo, bio and links, plus a grid of all your posts and reels." },
    { icon: "people",  title: "Social Connections",
      text: "Follow friends and creators, see your followers, and keep your account private if you like." },
    { icon: "photo",   title: "Photo Sharing",
      text: "Post single photos or carousels with crop, filters, captions, #hashtags and @mentions." },
    { icon: "reels",   title: "Reels",
      text: "Record or upload short videos, add music, and scroll a full-screen reels feed." },
    { icon: "stories", title: "Stories",
      text: "Share moments that disappear after 24 hours, with stickers, polls and highlights." },
    { icon: "chat",    title: "Messages",
      text: "Private and group chats with photos, videos, voice messages and reactions." },
    { icon: "explore", title: "Explore & Search",
      text: "Discover new posts and reels, and search for people and hashtags." },
    { icon: "bell",    title: "Notifications",
      text: "Know when someone likes, comments, follows you or sends you a message." },
    { icon: "shield",  title: "Safety & Control",
      text: "Block, mute, restrict or report, hide like counts, and delete your account any time." }
  ],

  /* ---- SCREENSHOTS (App Preview gallery) -------------------------------- */
  // Put new images in assets/screens/ and list them here (first one = hero phone).
  // "webp" is optional; "src" (jpg or png) is the fallback every browser can show.
  // Delete all items to show clean empty frames instead.
  SCREENSHOTS: [
    { src: "assets/screens/feed.jpg",     webp: "assets/screens/feed.webp",     title: "Home feed",
      alt: "Hamzify home feed with stories at the top and a photo post" },
    { src: "assets/screens/reels.jpg",    webp: "assets/screens/reels.webp",    title: "Reels",
      alt: "Hamzify full-screen reels player with like and comment buttons" },
    { src: "assets/screens/story.jpg",    webp: "assets/screens/story.webp",    title: "Stories",
      alt: "A Hamzify story shown full screen" },
    { src: "assets/screens/profile.jpg",  webp: "assets/screens/profile.webp",  title: "Profile",
      alt: "A Hamzify profile with bio, follower counts and a grid of posts" },
    { src: "assets/screens/messages.jpg", webp: "assets/screens/messages.webp", title: "Messages",
      alt: "A Hamzify private chat with message bubbles and reactions" },
    { src: "assets/screens/explore.jpg",  webp: "assets/screens/explore.webp",  title: "Explore",
      alt: "The Hamzify explore page with a search bar and a grid of posts" }
  ],

  /* ---- ABOUT ------------------------------------------------------------ */
  ABOUT_TEXT: "Hamzify is a social application designed to bring people together through digital interactions and content sharing. Our goal is to provide users with a simple, accessible, and enjoyable social experience.",

  /* ---- FAQ -------------------------------------------------------------- */
  // {contact} is replaced with your CONTACT_EMAIL (or "[contact email]" while empty).
  FAQ: [
    { q: "What is Hamzify?",
      a: "Hamzify is a social app for Android. You can share photos, reels and stories, follow friends, and chat with them in private or group messages." },
    { q: "How can I download Hamzify?",
      a: "Tap the \u201cDownload for Android\u201d button on this website. The APK file downloads straight to your phone. Hamzify is not on Google Play or other app stores yet." },
    { q: "How do I install the APK?",
      a: "Open the downloaded file (Hamzify.apk) from your notifications or the Downloads folder. If Android asks for permission to install apps from that source, allow it only if you trust the file, then tap Install. See the installation steps above for details." },
    { q: "Is Hamzify available for iPhone?",
      a: "No. Hamzify is available for Android only for now." },
    { q: "How can I contact the Hamzify team?",
      a: "Email us at {contact}." },
    { q: "Where can I find the latest version?",
      a: "Always on this website. The Download section shows the current version number and the date it was last updated." }
  ]
};
