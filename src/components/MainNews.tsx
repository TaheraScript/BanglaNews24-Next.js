import Image from "next/image";
import Link from "next/link";

interface INews{
    imageUrl : string,
    category : string,
    description : string
    title :string,
    id : string,
    imageAlt: string

}

const MainNews = ({ news }: { news: INews[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <div className="flex gap-2 items-stretch">
      {/* Left: main story */}
      <Link href={`/news/${firstNews.id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            height={400}
            width={400}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body items-center text-center">
          <p className="text-red-700 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>
      </Link>

      {/* Right: other stories */}
      <div className="flex flex-col gap-2 flex-1">
        {otherNews.slice(0, 4).map((on) => (
          <Link href={`/news/${on.id}`}
            key={on.id}
            className="card bg-base-100 border border-gray-300 p-5 flex-1 justify-center"
          >
            <p className="text-red-700 font-semibold">{on.category}</p>
            <p>{on.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
