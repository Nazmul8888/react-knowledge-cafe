

const Blog = ({blog}) => {

    const{title,cover, author,author_img,posted_date,reding_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                       <h3 className="tex-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reding_time} main red</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>

            {
                hashtags.map((hash,idx) =><span key={idx}><a href="">#{hash}</a></span>)
            }
        </div>
    );
};

export default Blog;