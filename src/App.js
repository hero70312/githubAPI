import React, {Component} from 'react';
import './App.css';


class Project extends Component {
    render() {
        const {title, description, url} = this.props;

        return (
            <div className="project">
                {
                    !title? <div/>:<div  className="project-content">
                        <a href={url} className="title">{`${title}`}</a>
                        <p>{`${description}`}</p>
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
    }

    async componentDidMount() {

        let data = await fetch('https://api.github.com/users/hero70312/repos').then(response => response.json());

        data = data.map((project) => {
            return {
                title: project.name,
                url: project.html_url,
                description: project.description
            }
        });

        let emptyObj = {
            title: "",
            url: "",
            description: ""
        };

        while(data.length % 4 !== 0)
        {
            data.push(emptyObj);
        }

        this.setState({
            repo: data,
        });
    }

    render() {

        const {repo} = this.state;

        return (
            <div className="App">
                <div className="parallax"/>

                <div className="panel">
                    {
                        repo.length && repo.map((v) => {
                            return <Project title={v.title} url={v.url} description={v.description}/>
                        })
                    }
                </div>
            </div>
        );
    }

}

export default App;
