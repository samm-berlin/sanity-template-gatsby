/**
 * Clamp a value betwenn min and max
 */
export const getSharingUrl = (permalink, type) => {
  if (type === 'email') {
    return `mailto:?&subject=&body=${permalink}`;
  }

  if (type === 'facebook') {
    return `https://www.facebook.com/sharer/sharer.php?u=${permalink}`;
  }

  if (type === 'twitter') {
    return `https://twitter.com/home?status=${permalink}`;
  }

  if (type === 'pinterest') {
    return `https://www.pinterest.de/pin/create/link/?url=${permalink}`;
  }

  if (type === 'whatsapp') {
    return `https://wa.me/?text=${encodeURI(permalink)}`;
  }

  if (type === 'linkedin') {
    return `https://www.linkedin.com/shareArticle?mini=true&url=${permalink}&title=&summary=&source=`;
  }

  if (type === 'xing') {
    return `https://www.xing.com/spi/shares/new?url=${permalink}`;
  }

  return null;
};
