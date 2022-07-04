class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {page : 'Home'};
    }
    render(){
        if(this.state.page === 'Home'){
            return(
                <div>
                    <div>
                        <h1 id="element1">Enjoy your flight!</h1>
                        <div id="element2"><time>7/1/2022 11:34 PM</time></div>
                    </div>
                    <div id="categories">
                        &nbsp; &nbsp; &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Movies'})}}><i className="fa-solid fa-video fa-6x"></i> <br></br>Movies</button> &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Phone'})}}><i className="fa-solid fa-phone fa-6x"></i> <br></br> Phones</button> &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Games'})}}><i className="fa-solid fa-gamepad fa-6x"></i> <br></br> Games</button> &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Flight Info'})}}><i className="fa-solid fa-plane fa-6x"></i> <br></br> Flight Info</button> &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Purchases'})}}><i className="fa-solid fa-credit-card fa-6x"></i> <br></br> Purchases</button> &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Dining'})}}><i className="fa-solid fa-utensils fa-6x"></i> <br></br> Dining</button> 
                        &nbsp; &nbsp; &nbsp;
                    </div>
                    <div id="action">
                        <button onClick={() => {this.setState({page: 'Emergancy'})}} id="element3" type="button" className="btn btn-light btn-md btn-block">Declare Emergency</button>
                        <button id="element4" type="button" className="btn btn-light btn-md btn-block">Call Attendant</button>
                    </div>
                </div>
            );
        }
        else if (this.state.page === 'Movies'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">MOVIES</h1> <br></br>
                    <iframe width="720" height="405" src="https://www.youtube.com/embed/videoseries?list=PLxZNVDf39dNT_B3XrHzrOGoA-KQ675d4a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            );
        }
        else if (this.state.page === 'Phone'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">PHONES PAGE RENDERED</h1>
                </div>
            );
        }
        else if (this.state.page === 'Games'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">GAMES</h1> <br></br>
                    <iframe width="720" height="405" src="https://codepen.io/timrijkse/full/XjLGKv/" ></iframe>
                </div>
            );
        }
        else if (this.state.page === 'Flight Info'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">FLIGHT INFO PAGE RENDERED</h1>
                </div>
            );
        }
        else if (this.state.page === 'Purchases'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">PURCHASES PAGE RENDERED</h1>
                </div>
            );
        }
        else if (this.state.page === 'Dining'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">DINING PAGE RENDERED</h1>
                </div>
            );
        }
        else if (this.state.page === 'Emergancy'){
            return(
                <div>
                    <div><h1 id="element7">Emergency Declared!</h1></div>
                    <div className="blink-bg">
                    </div>
                    <div id="cancel">
                    <button id="element8" type="button" class="btn btn-warning btn-lg btn-block" onClick={() => {this.setState({page: 'Home'})}}>Cancel</button>
                    </div>
                </div>
            );
        }
    }

}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);