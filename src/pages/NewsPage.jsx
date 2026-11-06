import news from '../data/news.json'; // Data is bundled at build time — no API calls.
import SectionHeader from '../components/SectionHeader.jsx';
import NewsCard from '../components/NewsCard.jsx';

export default function NewsPage() {
  return (
    <section>
      <SectionHeader title="Latest News" subtitle="What's happening in our group" />
      <div className="grid grid--news">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
