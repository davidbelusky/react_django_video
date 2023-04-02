import re


def _camelcase_to_underscore(word: str) -> str:
    _first_cap_re = re.compile("(.)([A-Z][a-z]+)")
    _all_cap_re = re.compile("([a-z0-9])([A-Z])")

    s1 = _first_cap_re.sub(r"\1_\2", word)
    return _all_cap_re.sub(r"\1_\2", s1).lower()


def convert_data_camelcase_to_underscore(data: list) -> list:
    """Convert data keys from camelcase to underscore, ex. shortName -> short_name, so it will match with
    django model fields"""
    new_data = []
    for item in data:
        new_item = {}
        for key, value in item.items():
            new_item[_camelcase_to_underscore(key)] = value
        new_data.append(new_item)

    return new_data


#
# daat = [
#   {
#     "name": "Big Buck Bunny: the Dark Truths of a Video Dev Cartoon (DASH)",
#     "shortName": "",
#     "iconUri": "https://storage.googleapis.com/shaka-asset-icons/dark_truth.png",
#     "manifestUri": "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths/dash.mpd",
#     "source": "DEMO_SHAKA",
#     "focus": False,
#     "disabled": False,
#     "extraText": [],
#     "certificateUri": None,
#     "description": None,
#     "isFeatured": False,
#     "drm": [
#       "DEMO_CLEAR"
#     ],
#     "features": [
#       "DEMO_DASH",
#       "DEMO_HIGH_DEFINITION",
#       "DEMO_MP4",
#       "DEMO_OFFLINE",
#       "DEMO_VOD",
#       "DEMO_WEBM"
#     ],
#     "licenseServers": {
#     },
#     "licenseRequestHeaders": {
#     },
#     "requestFilter": None,
#     "responseFilter": None,
#     "clearKeys": {
#     },
#     "extraConfig": None,
#     "adTagUri": None,
#     "imaVideoId": None,
#     "imaAssetKey": None,
#     "imaContentSrcId": None,
#     "mimeType": None,
#     "mediaPlaylistFullMimeType": None,
#     "storedProgress": 1,
#     "storedContent": None
#   },
#   {
#     "name": "Big Buck Bunny: the Dark Truths of a Video Dev Cartoon (HLS)",
#     "shortName": "Big Buck Bunny: the Dark Truths",
#     "iconUri": "https://storage.googleapis.com/shaka-asset-icons/dark_truth.png",
#     "manifestUri": "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8",
#     "source": "DEMO_SHAKA",
#     "focus": False,
#     "disabled": False,
#     "extraText": [],
#     "certificateUri": None,
#     "description": "A serious documentary about a problem plaguing video developers.",
#     "isFeatured": True,
#     "drm": [
#       "DEMO_CLEAR"
#     ],
#     "features": [
#       "DEMO_HIGH_DEFINITION",
#       "DEMO_HLS",
#       "DEMO_MP4",
#       "DEMO_OFFLINE",
#       "DEMO_VOD"
#     ],
#     "licenseServers": {
#     },
#     "licenseRequestHeaders": {
#     },
#     "requestFilter": None,
#     "responseFilter": None,
#     "clearKeys": {
#     },
#     "extraConfig": None,
#     "adTagUri": None,
#     "imaVideoId": None,
#     "imaAssetKey": None,
#     "imaContentSrcId": None,
#     "mimeType": None,
#     "mediaPlaylistFullMimeType": None,
#     "storedProgress": 1,
#     "storedContent": {
#       "offlineUri": "offline:manifest/idb/v3/2",
#       "originalManifestUri": "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8",
#       "duration": 372.333,
#       "size": 46198111,
#       "expiration": None,
#       "tracks": [
#         {
#           "id": 10,
#           "active": False,
#           "type": "variant",
#           "bandwidth": 0,
#           "language": "en",
#           "label": "stream_0",
#           "kind": None,
#           "width": 834,
#           "height": 480,
#           "frameRate": None,
#           "pixelAspectRatio": None,
#           "hdr": None,
#           "mimeType": "video/mp4",
#           "audioMimeType": "audio/mp4",
#           "videoMimeType": "video/mp4",
#           "codecs": "avc1.4d401f, mp4a.40.2",
#           "audioCodec": "mp4a.40.2",
#           "videoCodec": "avc1.4d401f",
#           "primary": True,
#           "roles": [],
#           "audioRoles": [],
#           "forced": False,
#           "videoId": 9,
#           "audioId": 1,
#           "channelsCount": None,
#           "audioSamplingRate": None,
#           "spatialAudio": False,
#           "tilesLayout": None,
#           "audioBandwidth": None,
#           "videoBandwidth": None,
#           "originalVideoId": None,
#           "originalAudioId": "stream_0",
#           "originalTextId": None,
#           "originalImageId": None
#         }
#       ],
#       "appMetadata": {
#         "identifier": "Big Buck Bunny: the Dark Truths of a Video Dev Cartoon (HLS)",
#         "downloaded": "2019-07-09T08:36:48.768Z"
#       },
#       "isIncomplete": False
#     }
#   }]
# print(convert_data_camelcase_to_underscore(daat))
