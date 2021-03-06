import React, { Component } from "react";
import FieldsBanner from "./FieldsBanner";
import FieldsList from "./FieldsList";
import Header from "../Header";
import axios from "axios";


class Fields extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            searchValue: "",
            fields: [
            ],
        };
    }
    componentDidMount = () => {
        this.setState({
            isLoading: true,
        });
        axios.get(`http://67.205.173.77:8000/api/fields`)
        .then((resp) => {
            console.log(resp.data);
            this.setState({
                isLoading: false,
                fields: resp.data.map((item) => {
                    return {
                        img: item.img_thumbnail,
                        name: {
                            RU: item.title_ru,
                            EN: item.title
                        },
                        description: {
                            RU: item.description_ru,
                            EN: item.description
                        },
                        url: item.id                 
                    };
                })
            });
        }).catch((error) => {
            alert(`Something went wrong. ${error}`);
            this.setState({ isLoading: false });
        });
    }
    changeSearchValue = (e) => {
        this.setState({
            searchValue: e.target.value,
        });
    };
    render(){
        return (
            <div className="fields">
                { this.state.isLoading && <div className="loading"><div className="spin"></div></div> }
                {/* <Header language={this.props.language} locale={this.props.locale} localeChange={this.props.localeChange}/>*/}
                <FieldsBanner language={this.props.language} locale={this.props.locale}/>
                <FieldsList 
                    fields = {this.state.fields} 
                    changeSearchValue = {this.changeSearchValue} 
                    searchValue = {this.state.searchValue}
                    language={this.props.language} 
                    locale={this.props.locale}
                />
            </div>
        );
    }
}; 

export default Fields;