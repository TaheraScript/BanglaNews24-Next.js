import Image from "next/image";
import Link from "next/link";

interface INewsCard{
    id : string,
    title:string,
    description:string,
    category:string,
    imageAlt:string,
    imageUrl:string
}
const NewsCard = ({news} :{news:INewsCard}) => {
    return (
       <Link href={`/news/${news.id}`}>
       <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image
            src={news.imageUrl}
            height={400}
            width={400}
            alt={news.imageAlt}
          />
        </figure>
        <div className="card-body items-center text-center">
          <p className="text-red-700 font-semibold">{news.category}</p>
          <h2 className="card-title">{news.title}</h2>
          <p>{news.description}</p>
        </div>
      </div></Link>
    );
};

export default NewsCard;