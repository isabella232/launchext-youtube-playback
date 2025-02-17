2.0.1 (released 28 September 2021)
----------------------------------

- Rewrote triggering logic to reduce the browser's memory usage.
- Updated views' styles to use [Adobe Coral 4.5.0](https://opensource.adobe.com/coral-spectrum/documentation/).

2.0.0 (rejected by Adobe)
-------------------------

1.5.1 (released 19 March 2021)
------------------------------

- Fixed enabling video playback tracking.

1.5.0 (released 30 January 2021)
--------------------------------

- Added "Video Milestone" event type to track video playback at fixed thresholds.
- Added "Video Milestone" data element type to retrieve the video milestone with the "Video Milestone" event type.
- Updated "Video Playing" event type to track specific events for video started, video resumed, and video replayed events.
- Added "Video ID" and "Video Title" data element types.
- Improved enabling video playback tracking when there is a network delay / timeout.
- Added donation-related links in all views' footers.
- Added unit tests.

1.4.0 (released 16 December 2020)
---------------------------------

- Added data element types to retrieve video playback data using Adobe Launch's familiar interface, instead of via the clunky `event` code.
- Allows YouTube IFrame elements to be prepared properly when the web page's URL includes a port in the host.
- Fixed "Playback Quality Changed" and "Playback Rate Changed" events.
- Added support-related links in all views' footers.

1.3.1 (released 4 November 2020)
--------------------------------

- Fixed instructions in extension configuration view.

1.3.0 (released 3 November 2020)
--------------------------------

- Improved playback tracking on slow network connections.
- Allows YouTube IFrame API script to be loaded with a Rule action. With this ability, loading the script when preparing the YouTube IFrame elements is optional.
- Hide legacy extension configuration settings if they are not being used.
- Bug fixes for Internet Explorer.

1.2.0 (released 29 September 2020)
----------------------------------

- Allows YouTube IFrame elements to be prepared with a Rule action. With this ability, the settings in the extension configuration are deprecated.

1.1.1 (released 29 July 2020)
-----------------------------

- Hide CSS selector when choosing "any player" in extension configuration.

1.1.0 (released 24 July 2020)
-----------------------------

- Prepares YouTube IFrame elements at Window Loaded by default. This ensures that the browser loads all of the page's content, including the YouTube players, before enabling the YouTube IFrame API.

1.0.1 (released 22 July 2020)
-----------------------------

- Fixed issues found with `eslint`.
- Documented `event.state` in each Event's view.

1.0.0 (released 11 July 2020)
-----------------------------

- Prepares YouTube IFrame elements with the required `enablejsapi` and `origin` parameters.
- Detects player and playback events, including Player Ready, Playing, Paused, Ended, etc.
- Set a selector in the extension configuration to limit which YouTube players to track.
