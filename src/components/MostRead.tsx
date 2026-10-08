import Link from "next/link";

interface IMostRead {
  id: string;
  title: string;
}
const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostReadNews: IMostRead[] = data.data;

  return (
    <div className="card  bg-base-100 border border-gray-300 p-3">
      <h1 className="text-red-800 font-bold">সর্বাধিক পঠিত</h1>
      <ol className="list-decimal list-inside te">
        {mostReadNews.map((n) => (
          <li className="marker:text-red-700 marker:font-bold mb-2" key={n.id}>
            <Link href={`/news/${n.id}`}>{n.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MostRead;
