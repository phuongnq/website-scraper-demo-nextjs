import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Theme from '../components/Theme';

import indexStyle from '../styles/index.scss';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            url: '',
        };

        this.doSubmitUrl = this.doSubmitUrl.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
    }
    handleChangeUrl(e) {
        this.setState({ url: e.target.value });
    }
    doSubmitUrl() {
        const data = { url: this.state.url }
        const url = '/scrape_url';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
        .then((response) => response.blob())
        .then((blob) => {
            const link=document.createElement('a');
            link.href=window.URL.createObjectURL(blob);
            link.text=`${this.state.url}.zip`;
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.appendChild(link);
        })
        .catch(error => console.error('Error:', error));
    }
    render() {
        return (
            <Theme>
                <style dangerouslySetInnerHTML={{ __html: indexStyle }} />

                <span className="heading">Web Scraber Demo Application</span>
                <span className="text">with NextJS.</span>

                <div className="img-container">
                    <img alt="" src="/icons/github.png" />
                </div>

                <span className="text">
                    <a href="https://github.com/phuongnq/website-scraper-demo-nextjs">
                    Github
                    </a>
                </span>
                <br />
                <form action='#'>
                <div className='field'>
                    <input placeholder='Sample: https://google.com/' value={this.state.url} onChange={this.handleChangeUrl}></input>
                    <label>Input URL</label>
                </div>
                <div className='field form-actions'>
                    <button type='submit' onClick={this.doSubmitUrl}>Submit</button>
                </div>
                </form>
                <div id="downloadLink">
                </div>
                <style jsx>{`
                    .btn {
                        display: flex;
                        justify-content: center;
                    }`
                }
                </style>
            </Theme>
        );
    }
}

export default Index;
