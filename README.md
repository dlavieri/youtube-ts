# API Endpoint information

### Video Categories
method: GET
URL: https://www.googleapis.com/youtube/v3/videoCategories
params: {
    part: 'snippet',
    id: string (comma-separated list of video category ids),
    regionCode: 'US',
}
### Most Popular Videos
method: GET
URL: https://www.googleapis.com/youtube/v3/videos
params: {
    part: 'snippet,statistics,contentDetails',
    chart: 'mostPopular',
    maxResults: number,
    regionCode: 'US',
    pageToken: string,
    fields: 'nextPageToken,prevPageToken,items(contentDetails/duration,id,snippet(channelId,channelTitle,publishedAt,thumbnails/medium,title),statistics/viewCount),pageInfo(totalResults),items/snippet/description',
    videoCategoryId: string
}

### Video Details
method: GET
URL: https://www.googleapis.com/youtube/v3/videos
params: {
    part: 'snippet',
    id: string,
    fields: 'kind,items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,thumbnails/medium,title),statistics)',
}

### Channels
method: GET
URL: https://www.googleapis.com/youtube/v3/channels
params: {
    part: 'snippet',
    id: string,
    fields: 'kind,items(id,snippet(description,thumbnails/medium,title),statistics/subscriberCount)',
}

### Comment Thread
method: GET
URL: https://www.googleapis.com/youtube/v3/commentThreads
params: {
    part: 'id,snippet',
    pageToken: string,
    videoId: string,
}

### Search
method: GET
URL: https://www.googleapis.com/youtube/v3/search
params: {
    part: 'id,snippet',
    q: query,
    type: 'video',
    pageToken: string,
    maxResults: number,
}

### Related Videos
method: GET
URL: https://www.googleapis.com/youtube/v3/search
params: {
    part: 'snippet',
    type: 'video',
    maxResults: number,
    relatedToVideoId: string
}