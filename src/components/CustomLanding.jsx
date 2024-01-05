import React from 'react';
import ContactButton from './ContactButton';

export default function CustomLanding({ title, description, highlightWords }) {
  const titleArray = title.split(/(\s+)/);
  return (
    <div>
      <h1 className='largeh1'>
        {title}
        {/* {titleArray.map((word, index) => (
           <span key={index} className={highlightWords.includes(word) ? 'highlighted' : ''} style={{ color: highlightWords.includes(word) ? highlightWords[word] : 'inherit' }}>
           {word}
         </span>
        ))} */}
      </h1>
      <p className="largep">
        {description}
      </p>
      <ContactButton style={{ display: "block" }} />
    </div>
  );
}