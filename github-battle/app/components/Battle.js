var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

function PlayerPreview (props) {
   return (
      <div>
         <div className="column">
            <img
               className='avatar'
               src={props.avatar}
               alt={'Avatar for ' + props.username}
             />
             <h2 className="username"> @{props.username}</h2>
             <button
                className="reset"
                onClick={props.onReset.bind(null, props.id)}
               >
                  Reset
             </button>
         </div>
      </div>
   )
}

PlayerPreview.propTypes = {
   avatar: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   username: PropTypes.string.isRequired,
   onReset: PropTypes.func.isRequired

}

class PlayerInput extends React.Component { /* iskvieciama klase, is PlayerOne arba Player two ID
   ir tik tuomet, kai pagrindineje (tevineje) klaseje nera priskirta joks naujas state */
   constructor(props) {
      super(props); /*cia perdave id prop, label ir prop funkcija onSubmit, o joje
       */
      this.state = {
         username: ""
      }
      this.handleChange = this.handleChange.bind(this);
      this.childSubmit = this.childSubmit.bind(this);
   }

   handleChange(event) {
      var value = event.target.value;

      this.setState(function(){
         return  {
            username: value
         }
      })
   }

   childSubmit(event) {//siunciam event, kad gautume submito propercius
      event.preventDefault();//is event metodo sustabdome nukelima i kita puslapi
      this.props.onSubmit(
         this.props.id, /*per props is Battle elemento nusiunteme, is kurio rendinto
         elemento atejo uzklausa, ten mes nusiunteme id per props, playerOne arba playerTwo*/
         this.state.username
      )
   }

   render(){
      return (
         //forma yra geras dalykas, nes submit is kart zino, kad savo
         //formos lauke dirba
         <form className='column' onSubmit={this.childSubmit}>
            <label className='header' htmlFor="username">
               {this.props.label}
            </label>
            <input
               id="username"
               placeholder='github username'
               type='text'
               autoComplete='off'
               value={this.state.username}
               onChange={this.handleChange}
             />
             <button
                className='button'
                type='submit'
                disabled={!this.state.username}
                >
                Submit
             </button>
         </form>
      );
   }
}

PlayerInput.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   onSubmit: PropTypes.func.isRequired
}



class Battle extends React.Component { //kai tik uzsikrauna battle, pats pirmas
   constructor(props) {          //dalykas kuri paleidzia yra sita klase
      super(props);
         this.state = {    //kai tik pasileidzia sita klase yra nustatoma sitas
            playerOneName: '', //defaultinis steitas
            playerTwoName: '', //playerOne ir Player Two nepriskirti, todel pagal tai
            playerOneImage: null, //nerodys nei vieno playerio nei imigo pradzioje
            playerTwoImage: null
         }
         this.handleSubmit = this.handleSubmit.bind(this); //iskarto nustatoma galimybe keisti state
         this.handleReset = this.handleReset.bind(this); //lygiai tokiu pat budu nustatoma galimybe resetint
   }                                                      //i defaultini varianta



   handleSubmit(id, username){ //pagal id zinosime ar keiciam state PL1 ar PL2
      this.setState(function(){
         var newState = {};
         newState[id + 'Name'] = username;
         newState[id + 'Image'] = 'https://github.com/' + username +'.png?size=200';
         return newState;//kadangi mes iskvieciame setState metoda todel
         //galime tiesiog grazinti nauja objekta ir ji pritaikys this state
         //svarbu kad galutinem variante sutaptu naujo objekto properties ir
         //pacio stato
      });
   }

   handleReset(id) {
      this.setState(function(){
         var newState = {};
         newState[id + 'Name'] = '';
         newState[id + 'Image'] = null;
         return newState;
      });
   }

   render(){
      //cia susikuriame kintamuosius, kad juos galetume tikrinti
      //ar prie ju jau yra pridetas koks parametras naujas
      //ar nera, jie sioje vietoje atliks boolean pareigas

      var playerOneName = this.state.playerOneName;
      var playerTwoName = this.state.playerTwoName;
      var playerOneImage = this.state.playerOneImage;
      var playerTwoImage = this.state.playerTwoImage;
      var match = this.props.match; //cia surandam root patha dabartinio elemento
                                    //sioj vietoj tai bus /batle
      return (
         <div>
            <div className="row">
               {!playerOneName && //vykdoma jeigu nepriskirta jokia playerOne state reiskme
               <PlayerInput       // kvieciamas komponentas, jeigu nera jokio state pries tai
                  id="playerOne" /*butina nurodyti koks yra id, kad zinotu su kuo
                  siuo metu yra dirbama, kadangi yra tik du galimi priesininkai
                  tai bus tik playerOne ir playerTwo */
                  label="Player One" /*kad zinotu clientas kieno ivestis, reik nusiusti butinai kurie komponentai
                  siuo netu yra rendinami, gi PlayerInput funkcija yra tik viena, todel jeigu butu tarkim
                  4 iviesties laukeliai, tai kiekviena karta tiesiog i ta pacia funkcija siustume per prop, kuri
                  komponenta reikia rendinti*/
                  onSubmit={this.handleSubmit} //siunciame funkcija per props, kadangi handleSubmit turi 2 reikalingus
                  //parametrus, todel grazinsime, id ir username, kuri suzinosime per per vaikinius elementus PlayerInput
                  //kadangi siunciame funkcija, tikimes kad returnins su nauja funkcija su atsakymais
               />}
               {playerOneImage !== null &&
                  <PlayerPreview
                     avatar={playerOneImage}
                     username={playerOneName}
                     onReset={this.handleReset}
                     id='playerOne'
                  />
               }
               {!playerTwoName &&
               <PlayerInput
                  id="playerTwo"
                  label="Player Two"
                  onSubmit={this.handleSubmit}
               />}
               {playerTwoImage !== null &&
                  <PlayerPreview
                     avatar={playerTwoImage}
                     username={playerTwoName}
                     onReset={this.handleReset}
                     id='playerTwo'
                  />
               }
            </div>
            {playerOneImage && playerTwoImage &&
               <Link
                  className="button"
                  to={{
                     pathname: match.url + '/results',
                     search: `?playerOneName=`+ playerOneName + '&playerTwoName='
                     +playerTwoName
                  }}>
                  Battle
               </Link>
            }
         </div>
      )
   }
}

module.exports = Battle;
