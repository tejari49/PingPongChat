# PingPongChat

A modern, feature-rich secret messenger app with turn-based messaging.

## Features

### 💬 Core Chat Features
- **Turn-based messaging**: Ping-pong style conversation flow
- **Real-time updates**: Instant message delivery via Firebase
- **Self-destructing media**: Images and voice messages disappear after viewing/listening

### 😊 New Features

#### 1. Emoji Picker
- Quick access to emoji selection in chat input
- Large selection of emojis organized in a grid
- Easy insertion into messages
- Mobile-friendly interface

#### 2. Voice Messages (Sprachnachrichten)
- Record and send audio messages
- Visual recording indicator with pulse animation
- Automatic permission handling for microphone access
- One-time listen for received voice messages (self-destruct)

#### 3. Message Reactions (Reaktionen)
- Add emoji reactions to any message
- Quick reactions: ❤️ 😂 🔥 😮 👻
- Custom emoji input option
- Persistent reaction storage

#### 4. Chat Backgrounds (Chat-Hintergründe)
- Multiple background themes:
  - Standard (paper texture)
  - Gradient (purple)
  - Ocean (blue gradient)
  - Sunset (pink/red gradient)
  - Forest (dark teal gradient)
- Settings persist across sessions

#### 5. Typing Indicator (Typing-Indikator)
- Real-time "... tippt gerade" indicator
- Shows when chat partner is typing
- Animated dots for visual feedback
- Automatic timeout after 3 seconds

#### 6. Push Notifications (Push-Benachrichtigungen)
- Browser push notifications for new messages
- Works when app is not visible or closed
- Permission request flow with clear UI
- "Kalender Aktuell" notification banner
- Service worker integration for background notifications

#### 7. Edit/Delete Messages (Nachricht bearbeiten/löschen)
- Long-press (mobile) or click-hold (desktop) on your own messages
- Edit message text with visual "edited" indicator
- Delete messages permanently
- Clean UI with action buttons

#### 8. Read Status (Gelesen-Status)
- Delivery and read receipts
- WhatsApp-style checkmarks:
  - Single gray check: Sent
  - Single check: Delivered (zugestellt)
  - Double blue check: Read (gelesen)
- Automatic read tracking when viewing chat

#### 9. Message Search (Nachrichtensuche)
- Search through chat history
- Real-time search with highlighting
- Toggle search bar from chat header
- Case-insensitive search

#### 10. Profile Pictures (Profilbilder)
- Upload custom profile avatars
- Display in chat header and friend list
- Image resizing and optimization
- Firebase Storage integration

### 🎨 Additional Features
- **Dark/Light themes**: Toggle between paper and dark mode
- **Custom fonts**: Choose from handwriting, elegant, or large fonts
- **Responsive design**: Works on mobile and desktop
- **Safe area support**: iOS notch/home indicator handling
- **Offline resilience**: Graceful error handling

## Setup Instructions

### Basic Setup
1. Open `PingPong.html` in a modern web browser
2. Register a new account or log in
3. Share your friend code with others
4. Add friends using their codes
5. Start chatting!

### Push Notifications Setup
Push notifications work automatically in most modern browsers:

1. Go to Settings (⚙️ icon)
2. Click "Push-Benachrichtigungen aktivieren"
3. Allow notifications when prompted by your browser
4. You'll see the "Kalender Aktuell" banner confirming activation

**Browser Support:**
- Chrome/Edge: Full support
- Firefox: Full support
- Safari (iOS/macOS): Requires iOS 16.4+ or macOS 13+

**Troubleshooting:**
- If notifications don't work, check browser permissions in settings
- Service worker requires HTTPS in production (works on localhost for testing)
- Some browsers block notifications in incognito/private mode

### Media Permissions

#### Microphone (Voice Messages)
- Permission requested when first using voice message feature
- Click the microphone icon 🎤 to start recording
- Click again to stop and send
- If denied, you'll see an error message

#### Camera (Photo Sharing)
- Permission requested when accessing camera
- Use the camera icon 📷 to take/select photos
- Images are automatically resized for optimal performance

**Permission Reset:**
If you accidentally denied permissions:
1. Click the lock/info icon in your browser's address bar
2. Find microphone/camera permissions
3. Change to "Allow" and reload the page

### Storage & Privacy
- **Firebase Firestore**: Stores messages, user profiles, and chat state
- **Firebase Storage**: Stores profile avatars
- **LocalStorage**: Saves UI preferences (theme, font, background)
- **Self-destructing content**: Images and voice messages auto-delete after viewing

### Development
The app is a single HTML file with embedded JavaScript and CSS. To modify:

1. Edit `PingPong.html` for UI and logic changes
2. Edit `sw.js` for push notification behavior
3. Firebase configuration is included in the HTML file

### Browser Requirements
- Modern browser with ES6+ support
- JavaScript enabled
- LocalStorage enabled
- Optional: Notification API support
- Optional: MediaDevices API for voice/camera

## Security Notes
- Messages use Firebase security rules (configure in Firebase Console)
- Self-destructing media for enhanced privacy
- Turn-based messaging prevents message flooding
- No message history export (privacy by design)

## License
Open source - feel free to use and modify!
