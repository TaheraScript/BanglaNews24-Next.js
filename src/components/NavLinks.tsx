import Link from "next/link";
interface INavs {
       slug: string,
       title: string,
       topicId: string | null,
       url: string,
       scrapable: boolean 
}
const NavLinks = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json()
    const navs:INavs[]= data.data
    const filteredNavs = navs.filter(n => n.scrapable=== true)
    return (
        <div className="flex gap-5 justify-center m-4">
            <Link className=" text-red-600" href={'/'}>হোম</Link>
            {
                filteredNavs .map((n,i)=> <Link key={i} href={`/category/${n.slug}`}>{n.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;