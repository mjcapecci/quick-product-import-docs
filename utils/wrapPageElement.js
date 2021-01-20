import React, { useEffect } from 'react';

const hideGithub = () => {
  const linksHtml = document.getElementsByTagName('a');
  const linksHtmlArr = [...linksHtml];
  linksHtmlArr.forEach((a) => {
    if (a.innerText === 'Edit this page on GitHub') {
      a.style.display = 'none';
    }
  });
};

const HiddenGithubContainer = ({ children }) => {
  useEffect(() => {
    hideGithub();
  }, [children]);

  return <div>{children}</div>;
};

export function wrapPageElement({ element }) {
  return <HiddenGithubContainer>{element}</HiddenGithubContainer>;
}
