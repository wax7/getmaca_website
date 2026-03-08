Master Audio Control App -- Per-App Volume, Routing, and EQ for macOS

Version 1.0.671

---

## Table of Contents

1. [Getting Started](#1-getting-started)
2. [Menu Bar Icon](#2-menu-bar-icon)
3. [Main Popup Window](#3-main-popup-window)
4. [Per-App Volume Control](#4-per-app-volume-control)
5. [Per-App Audio Routing](#5-per-app-audio-routing)
6. [Per-App Equalizer](#6-per-app-equalizer)
7. [Focus Mode](#7-focus-mode)
8. [Audio Normalizer](#8-audio-normalizer)
9. [Profiles](#9-profiles)
10. [Secondary Devices](#10-secondary-devices)
11. [Keyboard Shortcuts](#11-keyboard-shortcuts)
12. [Siri and Shortcuts App](#12-siri-and-shortcuts-app)
13. [Settings](#13-settings)
14. [Audio Health Monitor](#14-audio-health-monitor)
15. [Free vs Pro](#15-free-vs-pro)
16. [Troubleshooting](#16-troubleshooting)

---

## 1. Getting Started

MACA is a menu bar app. After installation, a small icon appears in the macOS menu bar (top-right area of your screen). Click it to open the main popup window.

### First Launch

On first launch, a setup wizard guides you through:

1. **Welcome** -- Overview of permissions MACA needs.
2. **Audio Permission** -- MACA uses Core Audio Taps to control per-app audio. A button opens System Settings so you can grant access if prompted.
3. **Notifications** -- Optional. Enables alerts when audio issues are detected or automatically repaired.
4. **Finish** -- Summary of your choices. You can go back and change any step.

You can reopen this wizard later from Settings > General > "Show welcome screen again".

### Launch at Login

To start MACA automatically when you log in, enable "Launch at Login" in Settings > General.

---

## 2. Menu Bar Icon

MACA lives in the menu bar. You can choose between four icon styles in Settings > General:

### Icon Styles

- **Speaker** -- Standard speaker symbol. When audio is playing and animation is enabled, the speaker alternates between one and two sound waves.
- **Equalizer** -- Vertical slider bars. Alternates between vertical and horizontal orientation when animated.
- **Waveform** -- ECG-style waveform. Alternates between filled and outlined when animated.
- **Level Meter** -- Real-time stereo level meter showing audio output from all active apps. Two vertical bars (left and right channel) with a color gradient from green (quiet) through yellow (moderate) to red (loud). A subtle "M" logo is visible behind the bars.

### Level Meter Details

The level meter updates 10 times per second and displays the combined audio level of all apps currently controlled by MACA.

- **Clipping detection**: When audio peaks above 98% on either channel, that bar flashes fully red for 200 milliseconds.
- **Energy optimization**: The meter pauses automatically when the display is asleep and resets cleanly on wake, preventing visual glitches after standby.

### Additional Icon Behaviors

- **Animation** -- When enabled in Settings > General, the icon animates while any app is playing audio. Does not apply to the Level Meter style (it is always animated by nature).
- **Auto-Hide** -- When enabled, the menu bar icon hides after 5 minutes of no audio activity. It reappears instantly when any app starts playing audio. Using the keyboard shortcut to open MACA keeps the icon visible for at least 2 minutes.

---

## 3. Main Popup Window

Click the menu bar icon to open the main popup. It contains the following sections from top to bottom:

### Master Volume

A horizontal slider at the top controls the system master volume (0-100%). The current percentage is displayed next to the slider. To the left and right of the slider:

- **Mute All** -- Mutes every app at once. Press again to unmute.
- **Focus Mode** -- Mutes all apps except communication apps (see Section 7).
- **Normalizer** -- Automatically balances audio levels across apps (Pro feature, see Section 8).

### Search and Sort

- **Search field** -- Type to filter the app list by name. When searching, recently used apps that are not currently active also appear with a "Launch" button.
- **Sort order** -- Choose between Alphabetical (A-Z) and Recent Activity (most recently active apps first).

### Profile Picker

A dropdown menu at the top lets you activate, deactivate, or manage saved audio profiles (see Section 9). In the free tier, this shows an upgrade prompt.

### App List

Shows all apps currently producing audio. Each app has its own row with volume controls (see Section 4). A green dot on the app icon indicates the app is currently playing audio. A red speaker-slash badge indicates the app is muted.

### System Processes

Below the app list, a collapsible section labeled "System Services" shows system-level audio processes such as phone calls, notifications, and screen sharing. This section is hidden by default and can be enabled in Settings > General.

### Secondary Devices

A collapsible section showing volume controls for all connected output devices other than the default device (see Section 10).

### Footer

- **Default Output Device** -- A dropdown menu to change the system-wide default audio output. Devices are grouped into Local, Bluetooth, and AirPlay sections. "More Outputs" opens macOS Sound Settings.
- **Settings** (gear icon) -- Opens the Settings window.
- **Quit** (power icon) -- Shows a confirmation dialog, then quits MACA. All audio taps and virtual devices are cleaned up on exit.

---

## 4. Per-App Volume Control

Each app in the list shows:

| Control | Description |
|---------|-------------|
| App icon | The application icon (can be hidden in Settings > General). |
| App name | Truncated if too long; hover to see the full name in a tooltip. |
| Speaker button | Click to mute or unmute this specific app. |
| Volume slider | Drag to adjust volume from 0% to 100%. |
| Volume percentage | Shown next to the slider (can be hidden in Settings > General). |
| EQ button | Opens the equalizer window for this app (see Section 6). Turns blue when EQ is active. |
| Output device button | Opens a device picker to route this app to a specific output (see Section 5). Turns blue when a custom device is set. |

### How It Works

MACA uses Apple Core Audio Taps to intercept each app's audio stream. Volume is applied in real time using digital signal processing. All audio channels pass through unmodified -- only the gain is adjusted.

### Free Tier Limit

In the free tier, you can control up to 3 apps. Additional apps appear with a lock icon and an "Unlock" button that shows Pro benefits.

---

## 5. Per-App Audio Routing

Click the speaker/device icon on any app row to open the output device picker. This lets you send an individual app's audio to a different output device than the system default.

### Device Picker

- **Use System Default** -- Routes this app through the default output. This is the default behavior.
- **Available Devices** -- Lists all connected output devices: built-in speakers, USB audio interfaces, HDMI outputs, Bluetooth headphones, and more.
- **Bluetooth Section** -- Shows paired Bluetooth audio devices separately.

When a profile is active, a "Save device to [profile name]" button appears at the bottom of the picker. Clicking it stores the device assignment in the active profile.

---

## 6. Per-App Equalizer

Click the EQ button on any app row to open a separate EQ window for that app.

### EQ Window Controls

| Control | Description |
|---------|-------------|
| Enable/Disable toggle | Switch at the top to activate or deactivate the equalizer for this app. |
| 10-band sliders | Vertical sliders for: 31 Hz, 62 Hz, 125 Hz, 250 Hz, 500 Hz, 1 kHz, 2 kHz, 4 kHz, 8 kHz, 16 kHz. Each band adjusts from -12 dB to +12 dB. |
| Color scheme | 6 options: Spectrum (rainbow), Neon (blue/green), Classic (VU meter amber/green), Monochrome (gray), Fire (red/orange), Ocean (blue/teal). |
| Preset picker | Dropdown with 26 built-in presets plus your custom profiles. |
| Copy EQ | Copies the current EQ settings to the clipboard. |
| Paste EQ | Applies EQ settings from the clipboard. |
| Reset | Returns all bands to 0 dB (flat). |
| Save to Profile | When a profile is active, saves the current EQ to that profile. Shows an indicator if there are unsaved changes. |
| Done | Closes the EQ window. |

### Custom EQ Profiles

You can also create custom EQ profiles in Settings > Equalizer (Pro). Custom profiles appear at the top of the preset picker in every EQ window. You can rename, edit, and delete custom profiles from Settings.

### EQ in Settings

Settings > Equalizer shows an overview of all custom EQ profiles and all apps with configured EQ settings. From there you can open any app's EQ window, reset an app's EQ, or manage your custom profiles.

---

## 7. Focus Mode

Focus Mode mutes all audio except communication apps. Activate it by:

- Clicking the phone icon in the master controls area of the main popup.
- Using the keyboard shortcut (default: Option+Command+F).

When active, the phone icon turns green. Press again or use the shortcut to deactivate.

Communication apps (calls, FaceTime, etc.) continue playing at their current volume while everything else is silenced.

---

## 8. Audio Normalizer

The Normalizer automatically balances audio levels across all apps so no single app is significantly louder or quieter than others.

Activate it by clicking the normalizer toggle in the master controls area. When the normalizer is actively adjusting levels by more than 0.5 dB, a small gain indicator appears next to the toggle. The indicator is colored orange when boosting (positive dB) and cyan when cutting (negative dB).

This is a Pro feature. In the free tier, clicking the normalizer shows an upgrade prompt.

---

## 9. Profiles

Profiles save a snapshot of your audio configuration -- per-app volume, mute state, output device assignment, and EQ settings -- so you can switch between setups with one click.

### Creating a Profile

1. Open Settings > Profiles.
2. Click the "+" button.
3. Enter a name and choose an icon from the grid (10 icons available).
4. Optionally enable "Capture current state" to save all running apps' current settings into the new profile.

Alternatively, use the "Save Current State" button to create a profile from the current state of all apps.

### Activating a Profile

- From the profile picker dropdown in the main popup.
- From Settings > Profiles by hovering over a profile and clicking the checkmark, or double-clicking.
- Via the Shortcuts app: "Load Profile" action.

When a profile is active, its name appears in the profile picker and changes you make (volume, device, EQ) can be auto-saved back to it.

### Auto-Save

Each profile has an Auto-Save toggle. When enabled, any volume, mute, device, or EQ changes you make while the profile is active are automatically saved back to the profile.

### Editing a Profile

In Settings > Profiles, select a profile and click the edit button (or double-click). The detail view shows:

- Icon picker (dropdown menu with SF Symbols).
- Name field.
- List of all apps in the profile, each with: icon, name, mute toggle, volume slider with percentage, output device picker, EQ preset picker, and remove button.
- "Add App" button to include additional apps from running or history.

### Limits

- **Free tier**: 1 profile maximum.
- **Pro**: Unlimited profiles.

---

## 10. Secondary Devices

The Secondary Devices section at the bottom of the main popup shows volume controls for all connected output devices other than the current default device.

Each device row includes:

- Device icon (based on transport type: built-in, USB, Bluetooth, HDMI, etc.).
- Device name.
- Volume slider.
- Mute button.
- Info button (opens a popover with device details).

You can control which devices appear here in Settings > Device Visibility by toggling individual devices on or off.

---

## 11. Keyboard Shortcuts

MACA supports global keyboard shortcuts that work from any app. Configure them in Settings > Shortcuts.

### Default Shortcuts

| Action | Default Shortcut | Notes |
|--------|-----------------|-------|
| Toggle Menu | Option+Command+M | Opens or closes the main popup. |
| Mute All | Option+Command+0 | Mutes or unmutes all apps. |
| Focus Mode | Option+Command+F | Toggles Focus Mode. |


### Customizing Shortcuts

Click the recorder field next to any shortcut to assign a new key combination. Press your desired shortcut, then click elsewhere to confirm. Use the "Reset to Defaults" button (with confirmation) to restore all shortcuts to their original values.

---


### Shortcuts App Actions

Open the Shortcuts app, create a new shortcut, and search for "MACA" to find these actions:

| Action | Parameters | Description |
|--------|-----------|-------------|
| Toggle Focus Mode | None | Toggles Focus Mode on or off. |
| List Audio Apps | None | Returns a list of all apps currently producing audio. |
| Mute All Apps | On/Off | Mutes or unmutes all apps. |
| Mute App | App name | Mutes or unmutes a specific app by name. |
| Set App Volume | App name, Volume (0-100) | Sets a specific app's volume. |
| Load Profile | Profile name | Activates a saved audio profile. |
| Get App Volume | App name | Returns the current volume and mute status of an app. |

---

## 13. Settings

Open Settings from the gear icon in the main popup footer, or by right-clicking the menu bar icon.

### General

| Setting | Description |
|---------|-------------|
| Launch at Login | Start MACA automatically when you log in to macOS. |
| Show What's New after updates | When enabled, a splash screen appears after each app update showing new features. Disable to skip this. The same option is available as a checkbox on the What's New screen itself. |
| Slider Style | Choose between Classic and Glass visual style for sliders. |
| Show App Icons | Show or hide application icons in the app list. |
| Show Volume Percentage | Show or hide the numeric percentage next to volume sliders. |
| Animate Menu Bar Icon | Enable icon animation when audio is playing (applies to Speaker, Equalizer, and Waveform styles). |
| Auto-Hide Menu Bar Icon | Hide the menu bar icon after 5 minutes of no audio. It reappears when audio starts or when you use the keyboard shortcut. |
| Menu Bar Icon Style | Choose Speaker, Equalizer, Waveform, or Level Meter. |
| Popup Height | Set how many apps are visible at once: Dynamic (auto), 4, 6, 8, or 10. |
| Show System Processes | Show system-level audio processes (calls, notifications, screen sharing) in the app list. |
| Language | Override the display language. Choose from English, German, French, Spanish, Italian, Japanese, Korean, Chinese Simplified, or Chinese Traditional. Changes apply immediately without restarting. |
| Show welcome screen again | Reopens the first-launch setup wizard. |

### App Visibility

Control which apps appear in the main popup.

- Toggle visibility for individual apps (eye icon).
- Search by app name or bundle identifier.
- Filter to show hidden apps only.
- "Show All Apps" resets all apps to visible.
- "Clear History" removes the record of previously seen apps.

Hidden apps still have their audio processed if they had active taps, but they do not appear in the list.

### Device Visibility

Control which output devices appear in the Secondary Devices section.

- Toggle visibility for individual devices (eye icon).
- Search by device name.
- Filter to show hidden devices only.
- Each device shows its transport type (Built-in, USB, Bluetooth, HDMI, Virtual, etc.) and unique identifier.
- "Show All Devices" resets all to visible.
- "Clear History" removes the record of previously seen devices.

### Shortcuts

Configure global keyboard shortcuts. See Section 11 for details.

### Profiles

Create and manage audio profiles. See Section 9 for details.

### Equalizer

Manage custom EQ profiles and view per-app EQ configurations. See Section 6 for details.

- **Custom EQ Profiles** section: Create new profiles, edit (opens EQ editor), rename, or delete.
- **Per-App EQ Overview**: Lists all apps with configured EQ. Open the EQ window or reset the EQ from here.

### System

Monitor MACA's audio health and background diagnostics.

| Item | Description |
|------|-------------|
| Health Status | Green (healthy), yellow (warnings), or red (issues detected). Shows the timestamp of the last check. |
| Controller Statistics | Count of healthy controllers, controllers with issues, and total active controllers. |
| Competing Apps | Lists any detected apps that may conflict with MACA's audio processing, with severity level and description. |
| Repair History | Log of automatic repairs MACA has performed (e.g., removing orphaned devices). "Clear History" removes the log. |
| Run Health Check | Manually trigger an audio health check. |
| Notify on Audio Repairs | Get a macOS notification when MACA automatically repairs an audio issue. Default: off. |
| Notify on Competing Apps | Get a macOS notification when a potentially conflicting audio app is detected. Default: on. |

### About

- MACA version and build number.
- Pro or Free tier badge.
- For Pro users: a thank-you message. For Free users: an "Upgrade to Pro" button.
- Links to the MACA website, support email, App Store page, and version history.

---

## 14. Audio Health Monitor

MACA runs an automatic health check every 30 seconds in the background. It looks for:

- **Orphaned aggregate devices** from previous crashes or abnormal terminations.
- **Orphaned audio taps** that are no longer connected to a running app.
- **Competing apps** that may interfere with MACA (e.g., other apps using the same audio APIs).

When an issue is found, MACA attempts to repair it automatically. You can review repairs in Settings > System > Repair History.

### Cleanup on Quit

When you quit MACA (or if the process is terminated by SIGTERM, SIGINT, or SIGQUIT), all audio taps and aggregate devices are destroyed to leave your system in a clean state.

---

## 15. Free vs Pro

| Feature | Free | Pro |
|---------|------|-----|
| Per-app volume and mute | Up to 3 apps | Unlimited apps |
| Per-app audio routing | Up to 3 apps | Unlimited apps |
| Per-app equalizer | Upgrade prompt | Full 10-band EQ |
| Audio normalizer | Not available | Available |
| Profiles | 1 profile | Unlimited profiles |
| Keyboard shortcuts | Toggle Menu, Mute All, Focus Mode | All shortcuts (including future additions) |
| Menu bar icon styles | All 4 styles | All 4 styles |
| Focus Mode | Available | Available |
| Siri and Shortcuts | Available | Available |

To upgrade, click the "Upgrade to Pro" button in Settings > About, or click the lock icon on any Pro-restricted feature. The purchase is handled through the App Store and can be restored on any device signed in with the same Apple ID.