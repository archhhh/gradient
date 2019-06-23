import React, {Component} from "react";
import Banner from "./Banner";
import NewsLanding from "./NewsLanding";
import AboutUsLanding from "./AboutUsLanding";


class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: [
                {
                    header: "Волк не волк",
                    description: "Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке",
                    thumbnail: "volk.jpg",
                },
                {
                    header: "Волк не волк",
                    description: "Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке",
                    thumbnail: "volk.jpg",
                },
                {
                    header: "Волк не волк",
                    description: "Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке",
                    thumbnail: "volk.jpg",
                },
                {
                    header: "Волк не волк",
                    description: "Не выступай в цирке Не выступай в цирке Не выступай в цирке Не выступай в цирке",
                    thumbnail: "volk.jpg",
                },
            ],
        };
    }
    render(){
        return(
            <div className="landing">
                <Banner language={this.props.language} locale={this.props.locale}/>
                <NewsLanding news={this.state.news} language={this.props.language} locale={this.props.locale}/>
                <AboutUsLanding language={this.props.language} locale={this.props.locale}/>
            </div>
        );
    }

};


export default Landing;