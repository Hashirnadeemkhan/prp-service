/**
 * Renders a Schema.org JSON-LD block as a <script> tag.
 * Safe to render from Server Components; the object is serialised at
 * build/render time so no client JS is shipped.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
