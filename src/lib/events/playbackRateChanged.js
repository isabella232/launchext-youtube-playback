/**
 * Copyright 2020 Yuhui. All rights reserved.
 *
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.gnu.org/licenses/gpl-3.0.html
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var youtubeIframeApi = require('../helpers/youtubeIframeApi');

/**
 * YouTube Playback Rate Changed event.
 * This event fires whenever the video playback rate changes.
 *
 * @param {Object} settings The event settings object.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function(settings, trigger) {
  youtubeIframeApi.registerEventTrigger(
    youtubeIframeApi.playbackRateChanged,
    settings,
    trigger
  );
};
