import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetailPage = async({params}:{params :Promise<{newsid : string}> }) => {
    const{newsid} = await params

const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsid}`)
const data = await res.json()
const news = data.data
   if(!news){
    notFound()
   }
    
    return (
        <div>
            <h1>{news.title}</h1>
            <Image src={news.imageUrl} height={400} width={400} alt={news.imageAlt}></Image>
       <p>{news.text}</p>
        </div>
    );
};

export default NewsDetailPage;
//({params}: {params: Promise<{ categoryid: string }>}) 