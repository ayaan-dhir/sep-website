import React, { useState, useEffect } from 'react';
import styles from './Typing.module.css';

function TypingEffect({ messages, color = 'black', size = '16px', cursorSize = '24px' }) {
    const [text, setText] = useState('');
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
  
    useEffect(() => {
      if (messageIndex >= messages.length) {
        setText('');
        setMessageIndex(0);
        setCharIndex(0);
        return;
      }
  
      if (charIndex < messages[messageIndex].length) {
        setTimeout(() => {
          setText(prevText => prevText + messages[messageIndex].charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, 120); // Typing speed
      } else {
        let timeout = setTimeout(() => {
          setText('');
          setMessageIndex(messageIndex + 1);
          setCharIndex(0);
        }, 2000); // Delay before next message
  
        return () => clearTimeout(timeout);
      }
    }, [messages, charIndex, messageIndex]);
  
    return (
      <div className={styles.typingContainer}>
        <span style={{ color, fontSize: size }}>{text}</span>
        {/* Apply the cursorSize prop to the cursor's style */}
        <span className={styles.cursor} style={{ backgroundColor: color, height: cursorSize, width: '2px' }}></span>
      </div>
    );
  }
  
  export default TypingEffect;