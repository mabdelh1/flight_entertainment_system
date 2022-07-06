class App extends React.Component{
    constructor(props){
        super(props);
        this.handleCost = this.handleCost.bind(this);
        
        this.state = {page: 'Home', cost: 0, db: {}};
        
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
                    <iframe width="720" height="405" src="https://watch.plex.tv/?plex_utm=1&utm_source=Plex&utm_medium=marketing-site&utm_campaign=Free%20Movies%20%7C%20Watch%20Free%20With%20Plex&origin=marketing" title="Movie Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                    <iframe width="720" height="405" src="https://www.addictinggames.com/" ></iframe>

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
                    <FlightInfo/>
                    <div id="action">
                        <button id="element3" type="button" className="btn btn-light btn-md btn-block" onClick={() => {
                            this.setState({page: 'Emergency'})}}>Declare Emergency </button>
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
                <button className="btn btn-success " onClick={() => {this.setState({page: 'Payment'})}}> SUBMIT</button> 

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
        else if (this.state.page === 'Payment') {
            return(
            <div>
                <button className="button-white" onClick={() => {this.setState({page: 'Dining'})}}><i className="fa-solid fa-circle-chevron-left fa-3x"></i></button>
                    <br></br>
            <form class="credit-card">
            <div class="form-header">
              <h4 class="title">Credit card detail</h4>
            </div>
           
            <div class="form-body">
              
              <input type="text" class="card-number" placeholder="Card Number"></input>
           
              
              <div class="date-field">
                <div class="month">
                  <select name="Month">
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                </div>
                <div class="year">
                  <select name="Year">
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
              </div>
           
              
              <div class="card-verification">
                <div class="cvv-input">
                  <input type="text" placeholder="CVV"></input>
                </div>
                <div class="cvv-details">
                  <p>3 digits usually found <br></br> on the back</p>
                </div>
              </div>
           
              
              <button type="submit" class="proceed-btn" onClick={() => {this.setState({page: 'Method'})}}><a href="#">Proceed</a></button>
              <button type="submit" class="loyalty-btn" onClick={() => {this.setState({page: 'Method'})}}><a href="#">Pay With Loyalty Points</a></button>
              You have <span color="blue"> 1400 </span> loyalty points
            </div>
          </form>

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

    else if (this.state.page === 'Method') {
        return(
            <div className="text-center">

                    <h1>Choose How You Would</h1>
                    <h1> Like to Recieve Your Receipt</h1>
                    <br/>
                    <input type="radio" id="element1" name="option1" value="email"></input>SMS
                    <br/>
                    <input type="radio" id="element1" name="option1" value="SMS"></input> E-mail
                    <br></br>
                    <br></br>
                    <button className="assist" onClick={() => {
                        this.setState({page: 'Ordered'})
                    }}><h4>Confirm</h4></button>
                    
                </div>
        );
    }

        
      

}
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
