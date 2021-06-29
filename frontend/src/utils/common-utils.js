/**
 * Returns the preview of an article.
 *
 * @param articleBody The body of the given article
 *
 * @return The preview, 10% of the article body followed by '...'
 */
export function getPreview(articleBody, previewPercent = 0.1) {
  return (
    articleBody.substring(0, Math.round(articleBody.length * previewPercent)) +
    "..."
  );
}
