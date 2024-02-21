import React, { useState, useEffect } from 'react';

function TypingEffect({ messages, color, size, cursorSize }) {

  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;

    if (isDeleting) {
      // If deleting, remove characters
      if (currentMessage.length > 0) {
        typingTimeout = setTimeout(() => {
          setCurrentMessage(currentMessage.slice(0, -1));
        }, 100); // Speed of deleting
      } else {
        setIsDeleting(false);
        setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }
    } else {
      // If typing, add characters
      if (currentMessage.length < messages[messageIndex].length) {
        typingTimeout = setTimeout(() => {
          setCurrentMessage(messages[messageIndex].substring(0, currentMessage.length + 1));
        }, 200); // Speed of typing
      } else {
        // Once finished, start deleting after some time
        typingTimeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Time before deleting
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [messages, currentMessage, isDeleting, messageIndex]);

  return (
    <div style={{ color, fontSize: size, fontFamily: '"Satoshi-Black", sans-serif' }}>
      {currentMessage}
      <span style={{ display: 'inline-block', width: cursorSize, height: cursorSize, backgroundColor: color }}></span>
    </div>
  );
}

export default TypingEffect;
