
# Chatbot FAQ Assistant

## Purpose & Capabilities

This project is a chatbot page designed to answer frequently asked questions from users of a website. It provides a user-friendly and aesthetically pleasing interface for users to interact with a chatbot and get answers to their questions.

## Style, Design, and Features

### 1. Wireframe & Layout

*   **Main Container**: The chat interface occupies the full browser window.
*   **Header (Top Bar):**
    *   **Left:** Circular profile picture for the bot, the bot's name ("FAQ Assistant"), and a green "Online" status indicator.
    *   **Right:** Icons for *Minimize* and *More Options* (three dots).
*   **Body (Chat Area):**
    *   A spacious area for messages with ample padding.
    *   **Bot Messages:** Appear on the left, with a light gray or white background and a sharp bottom-left corner.
    *   **User Messages:** Appear on the right, with a primary color (deep blue) background, white text, and a sharp bottom-right corner.
    *   **Timestamps:** Displayed subtly below each message bubble.
*   **Footer (Input Area):**
    *   **Suggestion Chips:** Floating buttons above the input bar for quick actions (`Reset Password`, etc.).
    *   **Text Input:** A rounded input field.
    *   **Icons:** A paperclip icon for attachments on the left and a side-arrow icon for sending on the right.

### 2. UI & Visual Design

*   **Color Palette:**
    *   **User Messages:** Deep Blue (`#2563EB`) background with white text.
    *   **Bot Messages:** Light Gray (`#F3F4F6`) background with dark gray text.
    *   **Background:** A very light gray (`#F9FAFB`) to make the chat container pop.
*   **Typography:**
    *   **Font:** Sans Serif (Inter, system default).
    *   **Message Text Size:** 14px for readability.
*   **Effects:**
    *   **Depth:** A soft drop shadow on message bubbles.
    *   **Focus:** The input bar's border will be highlighted when active.

### 3. UX & Interactivity

| Feature             | Description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| **Typing Indicator**  | An animated three-dot ellipsis shows when the bot is preparing a response.                              |
| **Welcome Message**   | An "Ice Breaker" message greets the user to guide their first interaction.                              |
| **Auto-Scrolling**    | The chat view automatically scrolls to the newest message.                                              |
| **Input Feedback**    | The input field gets a blue ring when focused.                                                          |
| **Enter to Send**     | Users can press the Enter key to send their message.                                                    |
| **Component Structure**| Code is organized into modular components: `ChatHeader`, `ChatMessages`, `SuggestionButtons`, `ChatInput`.|
| **API Integration**   | The chatbot will connect to the `/api/chat` endpoint.                                                   |


## Current Plan

*   **Phase 1: Initial UI (Complete)**
    *   Scaffolded the basic UI components for the chatbot.
*   **Phase 2: UI/UX Refinement (In Progress)**
    *   Relocate the chatbot to the main page (`/`).
    *   Restructure components into `app/components/chatbot/`.
    *   Implement the improved wireframe, visual design, and UX features as detailed above.
    *   **Make chat full-screen and update send icon.**
*   **Phase 3: Implement Chat Logic**
    *   Manage chat state, including messages and typing indicators.
    *   Handle user input from both text and suggestion buttons.
*   **Phase 4: API Integration**
    *   Create the `/api/chat` route and connect the frontend to it.

