export interface ProductConfig {
  id: string;
  label: string;
  description?: string;
  link: string;
  platforms: {
    latest: string[];
    [version: string]: string[];
  };
}

const products: ProductConfig[] = [
  {
    id: 'conversational-ai',
    label: 'Conversational AI',
    description: 'Build real-time voice AI agents',
    link: 'conversational-ai/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'convo-ai-device-kit',
    label: 'Convo AI Device Kit R1',
    description: 'A turnkey solution for adding voice AI to any device',
    link: 'convo-ai-device-kit/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'open-ai-integration',
    label: 'OpenAI Realtime API',
    link: 'open-ai-integration/overview/product-overview',
    platforms: { latest: ['python'] },
  },
  {
    id: 'voice-calling',
    label: 'Voice Calling',
    description: 'Embed real-time voice chat into any app',
    link: 'voice-calling/overview/product-overview',
    platforms: {
      latest: ['android', 'ios', 'macos', 'web', 'windows', 'electron', 'flutter', 'react-native', 'python', 'react-js', 'unity', 'unreal', 'blueprint'],
      '3.x': ['android', 'ios', 'macos', 'windows-cpp', 'windows-csharp', 'unity', 'flutter', 'react-native', 'electron', 'cocos-creator', 'cocos-2d-x'],
    },
  },
  {
    id: 'video-calling',
    label: 'Video Calling',
    description: 'Embed real-time video calling anywhere',
    link: 'video-calling/overview/product-overview',
    platforms: {
      latest: ['android', 'ios', 'macos', 'web', 'windows', 'electron', 'flutter', 'react-native', 'react-js', 'unity', 'unreal', 'blueprint'],
      '3.x': ['android', 'ios', 'macos', 'windows-cpp', 'windows-csharp', 'unity', 'flutter', 'react-native', 'electron', 'cocos-creator', 'cocos-2d-x'],
    },
  },
  {
    id: 'interactive-live-streaming',
    label: 'Interactive Live Streaming',
    description: 'Ultra-low latency live streaming',
    link: 'interactive-live-streaming/overview/product-overview',
    platforms: {
      latest: ['android', 'ios', 'macos', 'web', 'windows', 'electron', 'flutter', 'react-native', 'react-js', 'unity', 'unreal', 'blueprint'],
      '3.x': ['android', 'ios', 'macos', 'windows-cpp', 'windows-csharp', 'unity', 'flutter', 'react-native', 'electron', 'cocos-creator', 'cocos-2d-x'],
    },
  },
  {
    id: 'broadcast-streaming',
    label: 'Broadcast Streaming',
    description: 'Live stream to large global audiences',
    link: 'broadcast-streaming/overview/product-overview',
    platforms: {
      latest: ['android', 'ios', 'macos', 'web', 'windows', 'electron', 'flutter', 'react-native', 'react-js', 'unity', 'unreal', 'blueprint'],
    },
  },
  {
    id: 'agora-chat',
    label: 'Chat',
    description: 'Create customized messaging experiences',
    link: 'agora-chat/overview/product-overview',
    platforms: {
      latest: ['android', 'ios', 'web', 'windows', 'unity', 'flutter', 'react-native'],
    },
  },
  {
    id: 'signaling',
    label: 'Signaling',
    description: 'Synchronize metadata in real time',
    link: 'signaling/overview/product-overview',
    platforms: {
      latest: ['android', 'ios', 'macos', 'web', 'windows', 'flutter', 'react-native', 'linux-cpp', 'unity'],
      '1.x': ['android', 'ios', 'web', 'macos', 'windows', 'linux-cpp', 'linux-java', 'unity'],
    },
  },
  {
    id: 'interactive-whiteboard',
    label: 'Interactive Whiteboard',
    description: 'Custom real-time digital whiteboard',
    link: 'interactive-whiteboard/overview/product-overview',
    platforms: { latest: ['android', 'ios', 'web'] },
  },
  {
    id: 'iot',
    label: 'IoT SDK',
    description: 'Real-time engagement for smart devices',
    link: 'iot/overview/product-overview',
    platforms: { latest: ['android', 'linux-c'] },
  },
  {
    id: 'agora-analytics',
    label: 'Analytics',
    description: 'Track quality, performance, and usage',
    link: 'agora-analytics/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'cloud-recording',
    label: 'Cloud Recording',
    description: 'Record voice or video calls to the cloud',
    link: 'cloud-recording/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'cloud-transcoding',
    label: 'Cloud Transcoding',
    description: 'Transcode real-time audio and video streams',
    link: 'cloud-transcoding/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'on-premise-recording',
    label: 'On-Premise Recording',
    description: 'Record voice or video calls to your local server',
    link: 'on-premise-recording/overview/product-overview',
    platforms: {
      latest: ['linux-cpp', 'linux-java'],
      '3.x': ['linux-cpp', 'linux-java'],
    },
  },
  {
    id: 'server-gateway',
    label: 'Server Gateway',
    description: 'Transmit Video SDK streams via a Linux server',
    link: 'server-gateway/overview/product-overview',
    platforms: { latest: ['linux-cpp', 'linux-java', 'python', 'go'] },
  },
  {
    id: 'media-gateway',
    label: 'Media Gateway',
    description: 'Stream directly with RTMP/SRT protocol to Agora RTC channels',
    link: 'media-gateway/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'flexible-classroom',
    label: 'Flexible Classroom',
    description: 'Build scalable online classrooms of any size',
    link: 'flexible-classroom/overview/product-overview',
    platforms: { latest: ['android', 'ios', 'web', 'electron'] },
  },
  {
    id: 'media-push',
    label: 'Media Push',
    description: 'Push stream to CDN to reach a larger audience',
    link: 'media-push/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'media-pull',
    label: 'Media Pull',
    description: 'Add an external stream to a live-broadcast',
    link: 'media-pull/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'real-time-stt',
    label: 'Real-Time Speech-To-Text',
    description: 'Transcribe a media stream into text in real time',
    link: 'real-time-stt/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'ten-framework',
    label: 'TEN Framework',
    description: 'A powerful framework for building a wide range of applications',
    link: 'ten-framework/overview/product-overview',
    platforms: { latest: [] },
  },
  {
    id: 'ten-agent',
    label: 'TEN Agent',
    description: 'A conversational AI agent powered by the TEN Framework',
    link: 'ten-agent/overview/product-overview',
    platforms: { latest: [] },
  },
];

// Helper to get a product by id
export function getProduct(id: string): ProductConfig | undefined {
  return products.find(p => p.id === id);
}

// Helper to get default platform for a product
export function getDefaultPlatform(productId: string): string {
  const product = getProduct(productId);
  return product?.platforms?.latest?.[0] ?? "android";
}

// Helper to get all platform ids
export const KNOWN_PRODUCTS = products.map(p => p.id);

export default products;