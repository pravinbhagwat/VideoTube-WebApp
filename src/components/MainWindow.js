
const MainWindow = ({searchData}) => {

    return (
        <div className="video-list">
            {
                searchData.map((video, index) => {
                    return (
                        <div key={index}>
                            <iframe 
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                title={video.snippet.title}
                                allowFullScreen
                                width="400px"
                                height="300px"
                            />
                            {/* <h3>{video.snippet.title}</h3> */}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default MainWindow;