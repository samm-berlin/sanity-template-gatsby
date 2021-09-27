import React, { useState, useEffect } from 'react';
import Spinner from 'part:@sanity/components/loading/spinner';
import { AiOutlineFullscreen as FullscreenIcon } from 'react-icons/ai';
import styles from './styles.css';

export default ({
  document: { displayed },
  options: { resolveUrl, forceSlug = true },
}) => {
  // we set url via state to allow for async resolve URL funtions
  const [url, setUrl] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasLoadingElapsed, setLoadingElapsed] = useState(false);

  const hasValidSlug =
    !forceSlug ||
    (displayed.slug &&
      displayed.slug.current &&
      displayed.slug.current.trim() !== '');

  useEffect(() => {
    const getUrl = async () => {
      const previewUrl = await resolveUrl(displayed);

      setUrl(previewUrl);
    };

    if (hasValidSlug) {
      getUrl();
    }
  }, [displayed.slug]);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingElapsed(true), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!displayed) {
    return (
      <div className={styles.componentWrapper}>
        <p>There is no document to preview</p>
      </div>
    );
  }

  if (!resolveUrl) {
    return (
      <div className={styles.componentWrapper}>
        <p>Please provide a resolveUrl function as an option</p>
      </div>
    );
  }

  if (!hasValidSlug) {
    return (
      <div className={styles.componentWrapper}>
        <p>Please set a valid slug to enable preview</p>
      </div>
    );
  }

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        {isLoading && (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        )}

        {isLoading && hasLoadingElapsed && (
          <p className={styles.loadingMessage}>
            <strong>Starting up the preview server</strong>
            <br />
            Please reload in a few minutes
          </p>
        )}

        {!isLoading && url && (
          <a
            className={styles.fullscreen}
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            <FullscreenIcon />
          </a>
        )}

        {url && (
          <iframe
            title="Preview"
            src={url}
            frameBorder="0"
            onLoad={() => setLoading(false)}
          />
        )}
      </div>
    </div>
  );
};
