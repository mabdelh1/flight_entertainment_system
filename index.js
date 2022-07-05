class App extends React.Component{
    constructor(props){
        super(props);
        this.handleCost = this.handleCost.bind(this);
        
        this.state = {page: 'Home', cost: 0};
    }

    handleCost(cost){
        this.setState({cost:cost});
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
                        <button className="button-solid" onClick={() => {this.setState({page: 'Phone'})}}><i className="fa-solid fa-phone fa-6x"></i> <br></br> Phone</button> &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Games'})}}><i className="fa-solid fa-gamepad fa-6x"></i> <br></br> Games</button> &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Flight Info'})}}><i className="fa-solid fa-plane fa-6x"></i> <br></br> Flight Info</button> &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Purchases'})}}><i className="fa-solid fa-credit-card fa-6x"></i> <br></br> Purchases</button> &nbsp;
                        <button className="button-solid" onClick={() => {this.setState({page: 'Dining'})}}><i className="fa-solid fa-utensils fa-6x"></i> <br></br> Dining</button> 
                        &nbsp; &nbsp; &nbsp;
                    </div>
                    <div id="action">
                        <button id="element3" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Emergency'})
                        }}>Declare
                            Emergency
                        </button>
                        <button id="element4" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Assistance'})
                        }}>Call Attendant
                        </button>
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
                <div id="action">
                        <button id="element3" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Emergency'})
                        }}>Declare
                            Emergency
                        </button>
                        <button id="element4" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Assistance'})
                        }}>Call Attendant
                        </button>
                    </div>
                </div>
            );
        }
        else if (this.state.page === 'Phone'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">PHONES PAGE RENDERED</h1>

                    <div id="action">
                        <button id="element3" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Emergency'})
                        }}>Declare
                            Emergency
                        </button>
                        <button id="element4" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Assistance'})
                        }}>Call Attendant
                        </button>
                    </div>
                </div>
            );
        }
        else if (this.state.page === 'Games'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">GAMES</h1> <br></br>
                    <iframe width="720" height="405" src="https://codepen.io/timrijkse/full/XjLGKv/" ></iframe>

                    <div id="action">
                        <button id="element3" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Emergency'})
                        }}>Declare
                            Emergency
                        </button>
                        <button id="element4" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Assistance'})
                        }}>Call Attendant
                        </button>
                    </div>

                </div>
            );
        }
        else if (this.state.page === 'Flight Info'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">FLIGHT INFO PAGE RENDERED</h1>

                    <div id="action">
                        <button id="element3" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Emergency'})
                        }}>Declare
                            Emergency
                        </button>
                        <button id="element4" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Assistance'})
                        }}>Call Attendant
                        </button>
                    </div>

                </div>
            );
        }
        else if (this.state.page === 'Purchases'){
            return(
                <div className="text-center">
                    <button id="element5" className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <h1 id="element6">PURCHASES PAGE RENDERED</h1>

                    <div id="action">
                        <button id="element3" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Emergency'})
                        }}>Declare
                            Emergency
                        </button>
                        <button id="element4" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Assistance'})
                        }}>Call Attendant
                        </button>
                    </div>
                </div>
            );
        }
        else if (this.state.page === 'Dining'){
            return(
                //no longer centered
                <div>
                    <button className="button-white" onClick={() => {this.setState({page: 'Home'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <br></br>
                    
                <Spinner cost={this.state.cost} updateCost={this.handleCost}/>
                <button className="btn btn-success " onClick={() => {this.setState({page: 'Ordered'})}}> SUBMIT</button> 

                    <div id="action">
                        <button id="element3" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Emergency'})
                        }}>Declare
                            Emergency
                        </button>
                        <button id="element4" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Assistance'})
                        }}>Call Attendant
                        </button>
                    </div>

                </div>
                
            );
            
        }
        else if (this.state.page === 'Emergency') {
            return (
                <div id="emergency">
                    <h1 className="emergency">EMERGENCY DECLARED</h1>
                    <br/>
                    <h2>The crew has been alerted, and help is on the way.</h2>
                    <br/>
                    <button className="btn btn-warning" id="button-emergency" onClick={() => {
                        this.setState({page: 'Home'})
                    }}><h4>CANCEL</h4></button>
                </div>
            );
        } else if (this.state.page === 'Assistance') {
            return (
                <div className="text-center">
                    <h1>We received your request!</h1>
                    <br/>
                    <h3>A flight attendant is on their way to assist you now.</h3>
                    <br/>
                    <button className="assist" onClick={() => {
                        this.setState({page: 'Home'})
                    }}><h4>CANCEL</h4></button>
                </div>
            );
        }
        else if (this.state.page === 'Ordered') {
            return (
                <div className="text-center">
                    <h1>Thank you for ordering!</h1>
                    <br/>
                    <h3>Your Meal will be delivered shortly.</h3>
                    <br/>
                    <button className="assist" onClick={() => {
                        this.setState({page: 'Home'})
                    }}><h4>Back to Home</h4></button>
                </div>
            );
        
    }

}
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
