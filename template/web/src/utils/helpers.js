import { Link } from 'gatsby';

/**
 * Always return array
 */
export const forceArray = possibleArray =>
  Array.isArray(possibleArray) ? possibleArray : [possibleArray];

/**
 * GraphQL Edges->Node Helper
 */
 export const mapEdgesToNodes = data => {
  if (!data.edges) return [];

  return data.edges.map(edge => edge.node);
};

/**
 * Stores Sorting Helper
 */
 export const sortNodesByAlphabeticalOrder = nodes => {
  return nodes.sort((a, b) => {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;  
  });
};


/**
 * GraphQL Helper for data that has a single edge (e.g. site settings)
 */
export const mapToSingleObject = data => {
  const nodes = mapEdgesToNodes(data);

  return nodes[0] || {};
};

/**
 * Takes Portable Text from Sanity and turns it into plain text
 * (e.g. for meta descriptions)
 * separates paragraphs by linebreaks or spaces
 */
export const portableToPlainText = (blocks = [], withLinebreaks = false) =>
  blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }

      return block.children.map(child => child.text).join('');
    })
    .join(withLinebreaks ? '\n\n' : ' ');

/**
 * Debounce
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 */
export const debounce = (func, wait = 200, immediate = false) => {
  let timeout;

  return () => {
    const context = this;
    // eslint-disable-next-line no-undef
    const args = arguments;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

/**
 * Verify email addresses
 * https://tylermcginnis.com/validate-email-address-javascript/
 */
export const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/**
 * createLinkOrAnchorProps
 * Add appropriate props based on whether the incoming data is for a Link or <a>
 */
export const createLinkOrAnchorProps = ({
  to,
  link,
  url,
  href,
  targetBlank = false,
  ...props
}) => {
  const linkProps = {
    target: targetBlank ? '_blank' : undefined,
    rel: href ? 'noopener noreferrer' : undefined,
    ...props,
  };

  if (url || href) {
    return {
      ...linkProps,
      as: 'a',
      href: href || url,
    };
  }

  if (to || link?.path) {
    if (targetBlank) {
      return {
        ...linkProps,
        as: 'a',
        href: to || link.path,
      };
    }

    return {
      ...linkProps,
      as: Link,
      to: to || link.path,
    };
  }

  return {
    as: 'button',
    ...linkProps,
  };
};
