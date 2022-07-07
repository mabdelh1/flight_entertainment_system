class Spinner extends React.Component{
    constructor(props) {
        super(props);
        
      }

gradeQuiz= ()=>{
    var answers ={1:14.50, 2:11.75, 3:8.25, 4:10.00 ,5:12.00 };//JSON JavaScript Object Notation
    
    var form=document.getElementById("Meals");
    var questionList = form.querySelectorAll("p.question");
    for(var i=0;i<questionList.length;i++){
        var radioList = questionList[i].getElementsByTagName("input");
        for(var j=0;j<radioList.length;j++){
            if (radioList[j].checked == true ) {
                    this.props.updateCost(answers[j+1]);
                   
                   
                }
        }
    }
}


    render() {
        
        return (   
            <div>
                <div id="Meals">
                <h1>Meal Options</h1>
                <p class="question">
                    <input type="radio" onClick={this.gradeQuiz} name="option1" value="Carne"></input> Carne Asada...............<b>$14.50</b>
                                <div><ul>
                                    <li>sides: White Rice, Black Beans</li>
                                    </ul></div>
                                <img src="Carne-Asada.jpg" alt="carne asada" width="100" height="50"></img>
                            <br></br>
                    <input type="radio" onClick={this.gradeQuiz} name="option1" value="Chicken"></input>Grilled Chicken................<b>$11.75</b>
                                <div><ul>
                                    <li>sides: White Rice, Asparagus</li>
                                    </ul></div>
                                <img src="Chicken.jpg" alt="chicken" width="100" height="50"></img>
                            <br></br>    
                    <input type="radio" onClick={this.gradeQuiz} name="option1" value="Salad"></input> Caesar Salad...................<b>$8.25</b>
                                <div><ul>
                                    <li>sides: Ranch Dressing</li>
                                    </ul></div>
                                <img src="Caesar.jpg" alt="caesar" width="100" height="50"></img>
                            <br></br>   
                    <input type="radio" onClick={this.gradeQuiz} name="option1" value="Tofu"></input> Pan fried Sesame Tofu..........<b>$10.00</b>
                                <div><ul>
                                    <li>sides: Brown Rice, Broccoli</li>
                                    </ul></div>
                                <img src="Tofu.jpg" alt="Hamburger" width="100" height="50"></img>
                            <br></br>
                    <input type="radio" onClick={this.gradeQuiz} name="option1" value="Burger"></input>Hamburger......................<b>$12.00</b>
                                <div><ul>
                                    <li>sides: French Fries </li>
                                    </ul></div>
                                <img src="Hamburger.jpg" alt="hamburger" width="100" height="50"></img>
                    
                   
                            
                    <div id="costElement">
                        ${this.props.cost}
                    </div>
                    </p>
                </div>
              
        </div>
        );
    }
  }

  class FlightInfo extends React.Component{
    constructor(props) {
        super(props);
        
      }
      
    render() {
        
        return (   
            <div>
                <h1>Flight Info</h1>
                <body>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                    
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Origin</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Airlines</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Destination</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Flight Number</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Distance(in miles)</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Time Left</a>
                        </li>
                    </ul>
                    </div>  
                </nav>
                </body>
                
                <body>
                <nav class="nav navbar-expand-sm">
                  
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">BWI </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">UMBC Air</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">LAX Airlines</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Flight No.A437</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">2662 Miles Left</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">5 Hrs 13 mins</a>
                        </li>
                    </ul>
                    </div>  
                </nav>
                </body>
                
                <br></br>
                <br></br>
            </div>
            
        );
    }
  }
class Phone extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let add = e.target.value;
        let prev = this.props.num.toString();
        if (add == "del" || add == undefined) {
            let newNum = prev.slice(0, -1);
            this.props.updateNum(newNum);
        } else {
            let newNum = prev + add;
            this.props.updateNum(newNum);
        }
    }
    
    render() {
        return (
            <div>

                <h1 id="number123" className="phone" value={this.props.num}
                    onChange={this.handleChange}>{this.props.num}</h1>
                <div id="phone">
                    <button type="button" className="phone" id="digit-button" value="1"
                            onClick={this.handleChange}>1
                    </button>
                    <button type="button" className="phone" id="digit-button" value="2"
                            onClick={this.handleChange}>2
                    </button>
                    <button type="button" className="phone" id="digit-button" value="3"
                            onClick={this.handleChange}>3
                    </button>
                    <button type="button" className="phone" id="digit-button" value="4"
                            onClick={this.handleChange}>4
                    </button>
                    <button type="button" className="phone" id="digit-button" value="5"
                            onClick={this.handleChange}>5
                    </button>
                    <button type="button" className="phone" id="digit-button" value="6"
                            onClick={this.handleChange}>6
                    </button>
                    <button type="button" className="phone" id="digit-button" value="7"
                            onClick={this.handleChange}>7
                    </button>
                    <button type="button" className="phone" id="digit-button" value="8"
                            onClick={this.handleChange}>8
                    </button>
                    <button type="button" className="phone" id="digit-button" value="9"
                            onClick={this.handleChange}>9
                    </button>
                    <button type="button" className="phone" id="digit-button" value="*"
                            onClick={this.handleChange}>*
                    </button>
                    <button type="button" className="phone" id="digit-button" value="0"
                            onClick={this.handleChange}>0
                    </button>
                    <button type="button" className="phone" id="digit-button" value="#"
                            onClick={this.handleChange}>#
                    </button>

                    <button type="button" className="phone" id="backspace-button" value="del"
                            onClick={this.handleChange}><i
                        className="fa-solid fa-circle-chevron-left fa-3x"></i></button>

                </div>
            </div>
        );
    }
}

class Purchases extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="receipt">
            <h1 className="receipt">Purchase History</h1>
            <ul>
                <li><b>Invoice 1</b><br/>Transaction Date: 7/1/22 <br/>Category: Dining <br/>Amount: $12.00 <br/>Item(s): Hamburger<br/>Payment Method: Loyalty Points<br/></li>
                <hr style={{marginRight: 30}}/>
                <li><b>Invoice 2</b><br/>Transaction Date: 7/1/22 <br/>Category: Phone <br/>Amount: $12.00 <br/>Call Length: 24 min.<br/>Payment Method: Credit Card<br/></li>
            </ul>
                <hr/>
                <h3 className="receipt">How would you like to receive your list of purchases?</h3>
                <br/>
                <br/>
                <input type="checkbox" value="SMS" className="select-btn"/>SMS
                <br/>
                <input type="checkbox" value="Email" className="select-btn"/>Email
                <br/>

            </div>
        );
    }
}

  
