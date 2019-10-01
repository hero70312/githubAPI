import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ImageAvatar from './Components/imageAvatar';

import './App.css';


class Project extends Component {

    render() {
        const {title, description, url, language} = this.props;

        return (
            <div className="project">
                {
                    !title? <div/>:<div  className="project-content">
                        <a href={url} target="_blank" className="title">{`${title}`}</a>
                        <p className="des">{`${description}`}</p>
                        <p className="lan"><span className="dot"/>{`${language}`}</p>
                    </div>
                }
            </div>
        );
    }
}


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            repo: {}
        };
    };

    async componentDidMount() {

        // window.onscroll =()=>{
        //     const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
        //     if (this.state.currentScrollHeight != newScrollHeight){
        //         this.setState({currentScrollHeight: newScrollHeight})
        //     }
        // }

        window.onscroll =()=>{
            this.setState({currentScrollHeight: window.scrollY})
        };

        let data = await fetch('https://api.github.com/users/hero70312/repos').then(response => response.json());

        console.log(data);

        data = data.map((project) => {
            return {
                title: project.name,
                url: project.html_url,
                description: project.description,
                language: project.language
            }
        });

        let emptyObj = {
            title: "",
            url: "",
            description: ""
        };

        // while(data.length % 4 !== 0)
        // {
        //     data.push(emptyObj);
        // }

        this.setState({repo: data});
    };

    render() {

        const opacity = Math.min(50 / this.state.currentScrollHeight  , 1)

        const {repo} = this.state;

        return (
            <div className="App">
                <div style={{opacity}} id="parallax" className="parallax"/>
                <div style={{display:'flex', flexDirection:'row'}} >
                    <div  style={{flex:1, backgroundColor:'#F5F5F5',padding:25}}>
                        <ImageAvatar style={{margin:5}}/>
                        <Typography align="center" variant="h5" component="h5">
                            I'm Darren
                        </Typography>
                        <Typography align="center" variant="h5" component="h5">
                            Front-end Engineer
                        </Typography>
                    </div>
                    <div className="panel">
                        {
                            repo.length && repo.map((v) => {
                                return <Project title={v.title} url={v.url} description={v.description} language={v.language}/>
                            })
                        }
                    </div>
                </div>

                {/*<Button variant="contained" color="primary">*/}
                    {/*你好，世界*/}
                {/*</Button>*/}
            </div>
        );
    };

}

export default App;
