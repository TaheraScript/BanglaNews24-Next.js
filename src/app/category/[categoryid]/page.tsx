import NewsCard from "@/components/NewsCard";
import { notFound } from "next/navigation";

interface ICategory{
     id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

const CategoryNews = async ({params}: {params: Promise<{ categoryid: string }>}) => {
    const {categoryid} = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`)
    const data = await res.json()
    const categoryData:ICategory[] = data.data
    if(!categoryData){
        notFound()
       }
    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-red-800 mb-5 p-3">{data.title}</h1>
            <div className="grid grid-cols-3 gap-10">
                {
                    categoryData.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;