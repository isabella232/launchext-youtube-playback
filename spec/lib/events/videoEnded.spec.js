/**
 * Copyright 2021 Yuhui. All rights reserved.
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

var proxyquire = require('proxyquire').noCallThru();
var eventState = 'video ended';

describe('"' + eventState + '" event delegate', function() {
  it(
    'sends the trigger to the youtubeIframeApi helper module once only',
    function() {
      var getYoutubeIframeApiSpyObj = require('../../specHelpers/getYoutubeIframeApiSpyObj');
      var youtubeIframeApiSpyObj = getYoutubeIframeApiSpyObj();

      var eventDelegate = proxyquire('../../../src/lib/events/videoEnded', {
        '../helpers/youtubeIframeApi': youtubeIframeApiSpyObj,
      });
      var settings = {};
      var trigger = function() {};

      eventDelegate(settings, trigger);
      var result = youtubeIframeApiSpyObj.registerEventTrigger;
      expect(result).toHaveBeenCalledTimes(1);
      expect(result).toHaveBeenCalledWith(eventState, settings, trigger);
    }
  );
});
