# **App Name**: OS Update Simulator

## Core Features:

- OS and Version Selection: Allow the user to select an operating system and version from a predefined list.
- Configuration Panel: Provide a configuration panel to set the update duration (in seconds) and an optional custom update message.
- Fullscreen Simulation: Trigger a full-screen simulation of an operating system update screen based on the chosen configurations, and exit when escape key is pressed.
- Deterministic Progress: Ensure the update progress is time-based and always reaches 100% at the configured duration.
- Themed UI: Apply different visual themes to simulate various OS/version combinations with appropriate update messages and centered layouts.
- Simulation Disclaimer: Display a clear and visible "SIMULATION / DEMO ONLY" watermark during the simulation.

## Style Guidelines:

- Primary color: Dark blue (#003366) to convey a sense of system integrity and seriousness.
- Background color: Very dark gray (#222222) for a modern, screen-focused aesthetic.
- Accent color: Cyan (#00FFFF) for interactive elements and progress indication; brighter, contrasting against the dark primary.
- Body and headline font: 'Inter', a grotesque-style sans-serif, offering a modern and neutral aesthetic suitable for UI elements and status messages.
- Note: currently only Google Fonts are supported.
- Ensure the layout is centered and adapts well to different screen sizes when in fullscreen mode.
- Use smooth animations for the progress bar and spinner to provide a realistic update feel.