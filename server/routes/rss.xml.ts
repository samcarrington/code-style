import { serverQueryContent} from '#content/server';
import RSS from 'rss';

export default defineEventHandler(async (event) => {
  const siteRoot = 'https://code.gwawr.uk';

  const feed = new RSS({
    title: 'Gwawr Code Style',
    site_url: siteRoot,
    feed_url: `${siteRoot}/rss.xml`
  })

  const docs = await serverQueryContent(event).sort({ date: -1}).where({ _partial: false}).find();
  const pages = docs; //.filter((doc)) => doc?._path?.includes('/blog');

  for (const doc of pages) {
    feed.item({
      title: doc.title ?? '-',
      url: `${siteRoot}${doc._path}`,
      date: doc.date,
      description: doc.description,
    })
  }

  const feedString = feed.xml({indent: true});
  event.node.res.setHeader('content-type', 'text/xml');
  event.node.res.end(feedString);
})
