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
                    this.props.updateCost(answers[i +1]);
                   
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
                            <br></br>
                    </p>
                </div>
            
                
            <div id="costElement">
               ${this.props.cost}
            </div>
                
        </div>
        );
    }
  }
