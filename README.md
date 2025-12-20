# Imageboard Plugin for SocialGata

A SocialGata plugin that provides access to various imageboards including 4chan, lainchan, leftypol, endchan, and 2ch.

## Features

- Browse multiple imageboard instances
- View boards and threads
- Read thread comments with images and videos
- Support for greentext and post links
- Configurable CORS proxy

## Supported Imageboards

| Instance | Description |
|----------|-------------|
| 4chan | The most popular English-language imageboard |
| lainchan | Cyberpunk and technology imageboard |
| leftypol | Leftist political imageboard |
| endchan | Free speech imageboard |
| 2ch.hk | Russian imageboard |

## Installation

### From URL (Recommended)

Install the plugin in SocialGata by providing the manifest URL:
```
https://cdn.jsdelivr.net/gh/InfoGata/imageboard-socialgata@latest/manifest.json
```

### Manual Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. In SocialGata, add the plugin from the `dist/` folder

## Configuration

The plugin uses a CORS proxy to fetch imageboard content. You can configure a custom proxy in the plugin options if the default one is unavailable.

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Output

- `dist/index.js` - Main plugin script

## Plugin API Methods

| Method | Description |
|--------|-------------|
| `onGetFeed` | Get threads from a board |
| `onGetCommunity` | Get threads from a specific board |
| `onGetCommunities` | Get list of available boards |
| `onGetComments` | Get thread comments/replies |
| `onGetInstances` | Get list of supported imageboards |
| `onGetPlatformType` | Returns "imageboard" |

## License

MIT
