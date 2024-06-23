import VideoCard from "./VideoCard"

const VIDEOS=[
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"160M"
    },
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"120M"
    },
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"500M"
    },
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"150M"
    },
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",

        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"100M"
    },
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"100M"
    },
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"80M"
    },
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"30M"
    },
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"40M"
    },
    {
        title: "Bharateeyudu 2 - Souraa Lyric Video | Kamal Haasan",
        thumbnail: "/video1.jpg",
        channel:"/image.png",
        description: "Mix Song of 2023 with dance and singing it in full stream",
        viewCount: "1.3k",
        timestamp: "4 hours ago",
        views:"100M"
    }
]

export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=><div>
            <VideoCard
            title={video.title}
            thumbnail={video.thumbnail}
            timestamp={video.timestamp}
            author={video.author}
            views={video.views}
            channel={video.channel}></VideoCard>
        </div>
            
            )}
    </div>
}