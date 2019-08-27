

class SingleTweet extends React.Component {

    render () {
        return (
            <ul>
                <li>{this.props.tweetList.user.name}</li>
                <li>{this.props.tweetList.text}</li>
            </ul>
        );
    }
}

class AllTweets extends React.Component {

    render() {
        let tweetsLoop = this.props.tweetList.map( (item, index)  => {

                            return <SingleTweet tweetList = {item}></SingleTweet>;
                        });
            return (

                <div>
                    {tweetsLoop}
                </div>
            );
    }
}



ReactDOM.render(
    <div>
        <AllTweets tweetList = {tweets}/>
    </div>,
    document.getElementById('root')
);