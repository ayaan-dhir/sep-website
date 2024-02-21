import React, { useState, useEffect } from 'react';
import styles from './Typing.module.css';

function TypingEffect({ message, color = 'black', size = '16px' }) {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < message.length) {
        const timer = setTimeout(() => {
          setText(text + message.charAt(index));
          setIndex(index + 1);
        }, 150);
        return () => clearTimeout(timer);
      }
    }, [index, text, message]);
  
    return (
      <div className={styles.typingContainer}> {/* Use the container class here */}
        <span style={{ color, fontSize: size }}>{text}</span>
        <span className={styles.cursor} style={{ backgroundColor: color }}></span>
      </div>
    );
  }
  
  export default TypingEffect;