import { baseUrl } from 'app/sitemap'
import { getBlogPosts } from 'app/blog/utils'

export async function GET() {
      const allBlogs = getBlogPosts()

      const itemsXml = allBlogs
            .filter((post) => post.metadata.publishedAt && post.metadata.title) // Only include posts with required fields
            .sort((a, b) => {
                  const dateA = new Date(a.metadata.publishedAt as string)
                  const dateB = new Date(b.metadata.publishedAt as string)
                  if (dateA > dateB) {
                        return -1
                  }
                  return 1
            })
            .map(
                  (post) =>
                        `<item>
          <title>${post.metadata.title as string}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${new Date(
                              post.metadata.publishedAt as string
                        ).toUTCString()}</pubDate>
        </item>`
            )
            .join('\n')

      const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

      return new Response(rssFeed, {
            headers: {
                  'Content-Type': 'text/xml',
            },
      })
}
