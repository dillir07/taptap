import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import '../public/w3.css';

let tileCount = 0;

class TileData {
  id;
  matched;
  emoji;
  mask;

  constructor(id, emoji, mask) {
    this.id = id;
    this.matched = false;
    this.emoji = emoji;
    this.mask = mask;
    this.isOpen = false;
  }
}

const getRandomNumber = (min, max) => Math.floor((Math.random() * max) + min);

function Tile(props) {
  // console.log("rendering tile");

  // console.log(props);
  return (
    <button id={props.tile.id} onClick={(e) => props.onClick(e)} className={props.tile.matched ? "item" : "item"}>{(props.tile.isOpen) ? props.tile.mask : props.tile.emoji}</button>
  );
}

class Board extends React.Component {

  constructor(props) {
    console.log("rendering body");
    super(props);
  }

  render() {

    return (
      <div className={"container"}>
        {this.props.tiles.map((tile, index) => { return <Tile key={index} tile={tile} onClick={(x) => this.props.onClick(x)}></Tile> })}
      </div>
    );

  };


}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "taptap by Dilli",
      click1TileId: -1,
      click2TileId: -1,
      clickCounter: 0,
      matchCounter: 0,
      tiles: [],
      timerHandle: undefined,
      maxTileNumber: 2,
    }
  }

  // calculateTileCount() {
  //   console.log("calulating tile count");
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;

  //   let rows = 5;

  //   if (height > 900) {
  //     console.log(height, "desktop h");
  //     rows = 12;
  //   }
  //   else if (height > 801 && height <= 899) {
  //     console.log(height, "tablets h");
  //     rows = 10;
  //   }
  //   else if (height > 641 && height <= 800) {
  //     console.log(height, "ipad h");
  //     rows = 8;
  //   }
  //   else if (height > 481 && height <= 640) {
  //     console.log(height, "phone h");
  //     rows = 8;
  //   }
  //   else if (height > 320 && height <= 480) {
  //     console.log(height, "phone h");
  //     rows = 6;
  //   }
  //   else {
  //     console.log(height, "unknown phone h")
  //     rows = 5;
  //   }


  //   if (width > 1025) {
  //     console.log(width, "desktop w");
  //     tileCount = 15 * rows;
  //   }
  //   else if (width > 801 && width <= 1024) {
  //     console.log(width, "tablets w");
  //     tileCount = 12 * rows;
  //   }
  //   else if (width > 641 && width <= 800) {
  //     console.log(width, "ipad w");
  //     tileCount = 10 * rows;
  //   }
  //   else if (width > 320 && width <= 640) {
  //     console.log(width, "phone w");
  //     tileCount = 5 * rows;
  //   }
  //   else {
  //     console.log(width, "unknown phone w")
  //     tileCount = 5 * rows;
  //   }
  //   console.log("new tile count", tileCount);
  //   return tileCount % 2 === 0 ? tileCount : tileCount + 1;
  // }

  /**
   * builds tile data and adds to state
   */
  buildTileData() {

    let length = this.state.maxTileNumber;
    let singleSetLength = Math.floor(length / 2);

    // debugger;
    const tiles = [];
    const mask = "😜";
    const clown = "🤡";
    const baseEmojis = `
    🔥,🙈,❤️,🐶,🦊,🦁,🦚,🦩,💣,🎈,💎,☎️,🗿,🍉,🍋,🍎,🥭,🍕,🍟,🎂,🐬,
    🦋,🌷,🍁,🌞,🌈,🏝️,⚽,🎭,😍,🤠,👻,👸,🧙,🧞,🦄,🍫,🍭,💐,🌊,
    🧙‍♀️,🧚‍♀️,🧞‍♀️,🐘,🐰,🐻,🐨,🐧,🕊️,🦢,🦜,🐢,🦈,🐝,🐞,🌊,☃️,🌜,🍀,🦀,🌻,
    💌,🧭,⌛,⛱️,🧨,🎀,🎁,🪁,🧸,🔋,🔑,🔒,🔫,🧲,🛒,🧛‍♀️,👩‍🍳,🤗,👽,🥺
    `.split(",");
    let emojis1 = [];
    let emojis2 = [];
    let randomStart = Math.floor(Math.random() * baseEmojis.length);
    emojis1 = ((baseEmojis.length - randomStart) >= singleSetLength) ? baseEmojis.slice(randomStart) : baseEmojis.slice(randomStart - singleSetLength);
    emojis1 = emojis1.slice(0, singleSetLength);
    emojis2 = emojis1.slice(); // take a copy

    for (var index = 0; index < length; index++) {
      let randomNumberToPop = emojis1.length !== 0 ? getRandomNumber(0, emojis1.length) : getRandomNumber(0, emojis2.length);
      let emojiToPlace = emojis1.length !== 0 ? emojis1[randomNumberToPop] : emojis2[randomNumberToPop];
      // since we can't pop element at index, we are splicing element at index
      emojis1.length !== 0 ? emojis1.splice(randomNumberToPop, 1) : emojis2.splice(randomNumberToPop, 1);
      tiles.push(new TileData(index, emojiToPlace === undefined ? clown : emojiToPlace, mask));
    }

    // console.log("");
    this.setState({ tiles: tiles }, () => console.log("tiles are built by builder"));
  }

  /**
   * Matches current tile and previous open tile
   * @param {*} tileId - current open time id
   * @param {*} clickEventId - click counter till now
   */
  matchTiles(tileId, clickEventId) {
    console.log("made copy of tiles");
    var updatedTiles = this.state.tiles.slice();
    updatedTiles[tileId].isOpen = true;


    console.log("matchig tiles", this.state.click1TileId, this.state.click2TileId);
    if (this.state.click1TileId !== -1 && this.state.click2TileId !== -1) {
      if (this.state.tiles[this.state.click1TileId].emoji === this.state.tiles[this.state.click2TileId].emoji) {
        updatedTiles[this.state.click1TileId].matched = true;
        updatedTiles[this.state.click2TileId].matched = true;
        console.log("tile matched");
        this.setState({ click1TileId: -1, click2TileId: -1, matchCounter: this.state.matchCounter + 1 }, () => {
          console.log("checking match", this.state.matchCounter, Math.floor(this.state.maxTileNumber / 2), this.state.timerHandle);
          if (this.state.matchCounter === Math.floor(this.state.maxTileNumber / 2)) {
            console.log("match stopped;", this.state.matchCounter, Math.floor(this.state.maxTileNumber / 2), this.state.timerHandle);
            console.log("clearning interval", this.state.timerHandle);
            document.getElementById("result").innerHTML = `<span>🎉🎉🎉Congratulations🎉🎉🎉<br>👏You've completed👏</span>
            <br><button id="btnReplay" onclick="window.location.reload()">Replay</button>`;
            window.clearInterval(this.state.timerHandle);
          }
        });
      }
      else {
        console.log("tile not matched");
        updatedTiles[this.state.click1TileId].matched = false;
        updatedTiles[this.state.click2TileId].matched = false;


        // this.setState({ click1TileId: -1}, ()=> console.log("click1 tile closed"));
        if (this.state.clickCounter % 2 === 1) {
          this.setState({ click2TileId: -1 }, () => console.log("click1 tile closed"));
          updatedTiles[this.state.click2TileId].isOpen = false;

        } else {
          updatedTiles[this.state.click1TileId].isOpen = false;
          this.setState({ click1TileId: -1 }, () => console.log("click1 tile closed"));
        }
      }
    } else {
      console.log("tile match cancelled");
    }
    this.setState({ tiles: updatedTiles }, () => {
      console.log("tiles updated for click event id", clickEventId);
      console.log("##################################################");
    });
  }

  /**
   * 
   * @param {HTMLID} elmentId - HTML Id of the element to be used as counter/timer
   */
  initTimer(elmentId) {
    const el = document.getElementById(elmentId);
    // console.log("int ", el);
    let timerHandle = window.setInterval(function () {
      el.innerText = el.innerText === "" ? 0 : parseInt(el.innerText) + 1;
      // console.log("timer inc", el.innerText);
    }, 1000);
    this.setState({ timerHandle: timerHandle }, () => console.log("timer handle is set", timerHandle, this.state.timerHandle));
  }

  handleClick(event) {
    const tileId = event.target.id;

    if (this.state.tiles[tileId].isOpen) {
      console.warn("click on invalid tile");
      return;
    }

    this.setState({ clickCounter: this.state.clickCounter + 1 }, () => {
      if (this.state.clickCounter === 1) {
        this.initTimer("timer");
        console.log("timer started");
      }
      console.log("******************************************************");
      console.log("for click id", this.state.clickCounter, this.state.clickCounter % 2, this.state.clickCounter % 2 === 0);

      if (this.state.clickCounter % 2 === 1) {
        console.log("seting click1 tile id");
        this.setState({ click1TileId: tileId }, () => {
          console.log("click1tileid set");
          this.matchTiles(tileId, this.state.clickCounter)
        });
      } else {
        console.log("seting click2 tile id");
        this.setState({ click2TileId: tileId }, () => {
          console.log("click2tileid set");
          this.matchTiles(tileId, this.state.clickCounter)
        });
      }

    });

  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      console.log("window resize");
      this.buildTileData();
    });
    window.addEventListener('load', () => {
      console.log("window resize");
      this.buildTileData();
    });

  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      console.log("window resize");
      this.buildTileData();
    });
    window.addEventListener('load', () => {
      console.log("window resize");
      this.buildTileData();
    });
  }

  render() {
    return (
      <div>
        <header id="header">Find matches</header>
        <Board className={"center-me"} tiles={this.state.tiles} onClick={(x) => this.handleClick(x)} ></Board>
        <div id="info-container">
          <p id="clicks-container"> Clicks: <span id="clicks">{this.state.clickCounter}</span></p>
          <p id="matches-container"> Matches: <span id="matches">{this.state.matchCounter}</span></p>
          <p id="timer-container">Timer: <span id="timer">0</span></p>
          <p id="result-container"><span id="result"></span></p>
        </div>
      </div>
    );
  }
}

export default App;
