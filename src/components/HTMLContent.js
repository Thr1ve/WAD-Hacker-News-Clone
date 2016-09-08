import React from 'react';

// NOTE: We are relying on HN API to provide safe markup for now. It's trustworthy in
// my opinion, but I'd still rather not be doing this. Is there a simple way to avoid?

// // https://github.com/cure53/DOMPurify
// // worth it?

// import DOMPurify from 'dompurify';

// const createMarkup = html => ({ __html: DOMPurify(html) });
const createMarkup = html => ({ __html: html });

const HTMLContent = ({ html }) =>
  <div className="content" dangerouslySetInnerHTML={createMarkup(html)} />

export default HTMLContent;
