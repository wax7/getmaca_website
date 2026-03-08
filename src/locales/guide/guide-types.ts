// Types for guide translations
export interface GuideSection {
  sectionLabel: string; // "Section X"
  title: string;
  content: string[]; // paragraphs / descriptions in order
  subheadings: string[];
  listItems: string[][]; // grouped list items per subheading
  tableHeaders?: string[][];
  tableRows?: string[][][];
  callouts?: string[];
}

export interface GuideTranslation {
  // Page-level
  pageTitle: string;
  pageSubtitle: string;
  versionLabel: string;
  tocTitle: string;
  // Section titles (for TOC sidebar)
  sectionTitles: string[];
  // Section labels "Section 1", "Section 2", etc.
  sectionLabel: string;
  // Sections content
  s1: GuideS1;
  s2: GuideS2;
  s3: GuideS3;
  s4: GuideS4;
  s5: GuideS5;
  s6: GuideS6;
  s7: GuideS7;
  s8: GuideS8;
  s9: GuideS9;
  s10: GuideS10;
  s11: GuideS11;
  s12: GuideS12;
  s13: GuideS13;
  s14: GuideS14;
  s15: GuideS15;
  s16: GuideS16;
}

// Section 1: Getting Started
export interface GuideS1 {
  title: string;
  intro: string;
  firstLaunchTitle: string;
  firstLaunchIntro: string;
  firstLaunchSteps: [string, string][]; // [bold, description]
  firstLaunchCallout: string;
  launchAtLoginTitle: string;
  launchAtLoginText: string;
}

// Section 2: Menu Bar Icon
export interface GuideS2 {
  title: string;
  intro: string;
  iconStylesTitle: string;
  iconStyles: [string, string][]; // [title, description]
  levelMeterTitle: string;
  levelMeterIntro: string;
  levelMeterDetails: [string, string][]; // [bold, description]
  additionalTitle: string;
  additionalItems: [string, string][];
}

// Section 3: Main Popup Window
export interface GuideS3 {
  title: string;
  intro: string;
  masterVolumeTitle: string;
  masterVolumeIntro: string;
  masterVolumeItems: [string, string][];
  searchSortTitle: string;
  searchSortItems: [string, string][];
  profilePickerTitle: string;
  profilePickerText: string;
  appListTitle: string;
  appListIntro: string;
  appListItems: string[];
  systemProcessesTitle: string;
  systemProcessesText: string;
  secondaryDevicesTitle: string;
  secondaryDevicesText: string;
  footerTitle: string;
  footerItems: [string, string][];
}

// Section 4: Per-App Volume Control
export interface GuideS4 {
  title: string;
  intro: string;
  tableHeaders: string[];
  tableRows: [string, string][];
  howItWorksTitle: string;
  howItWorksText: string;
  freeTierCallout: string;
}

// Section 5: Per-App Audio Routing
export interface GuideS5 {
  title: string;
  intro: string;
  devicePickerTitle: string;
  devicePickerItems: [string, string][];
  callout: string;
}

// Section 6: Per-App Equalizer
export interface GuideS6 {
  title: string;
  intro: string;
  controlsTitle: string;
  tableHeaders: string[];
  tableRows: [string, string][];
  customProfilesTitle: string;
  customProfilesText: string;
  eqSettingsTitle: string;
  eqSettingsText: string;
}

// Section 7: Focus Mode
export interface GuideS7 {
  title: string;
  intro: string;
  activateItems: string[];
  activeText: string;
  callout: string;
}

// Section 8: Audio Normalizer
export interface GuideS8 {
  title: string;
  intro: string;
  activateText: string;
  indicatorItems: string[];
}

// Section 9: Profiles
export interface GuideS9 {
  title: string;
  intro: string;
  creatingTitle: string;
  creatingSteps: string[];
  activatingTitle: string;
  activatingItems: string[];
  autoSaveTitle: string;
  autoSaveText: string;
  editingTitle: string;
  editingIntro: string;
  editingItems: string[];
  limitsCallout: string;
}

// Section 10: Secondary Devices
export interface GuideS10 {
  title: string;
  intro: string;
  rowIntro: string;
  rowItems: string[];
  callout: string;
}

// Section 11: Keyboard Shortcuts
export interface GuideS11 {
  title: string;
  intro: string;
  defaultTitle: string;
  tableHeaders: string[];
  tableRows: [string, string, string][];
  customizingTitle: string;
  customizingText: string;
}

// Section 12: Siri & Shortcuts
export interface GuideS12 {
  title: string;
  intro: string;
  tableHeaders: string[];
  tableRows: [string, string, string][];
}

// Section 13: Settings
export interface GuideS13 {
  title: string;
  intro: string;
  generalTitle: string;
  generalHeaders: string[];
  generalRows: [string, string][];
  appVisibilityTitle: string;
  appVisibilityIntro: string;
  appVisibilityItems: string[];
  appVisibilityCallout: string;
  deviceVisibilityTitle: string;
  deviceVisibilityIntro: string;
  deviceVisibilityItems: string[];
  systemTitle: string;
  systemHeaders: string[];
  systemRows: [string, string][];
  aboutTitle: string;
  aboutItems: string[];
}

// Section 14: Audio Health Monitor
export interface GuideS14 {
  title: string;
  intro: string;
  checkItems: [string, string][];
  repairText: string;
  cleanupTitle: string;
  cleanupText: string;
}

// Section 15: Free vs Pro
export interface GuideS15 {
  title: string;
  tableHeaders: string[];
  tableRows: [string, string, string][];
  upgradeText: string;
}

// Section 16: Troubleshooting
export interface GuideS16 {
  title: string;
  intro: string;
  buttonText: string;
  topicsIntro: string;
  topics: string[];
}
