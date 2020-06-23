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
    <button id={props.tile.id} onClick={(e) => props.onClick(e)} className={props.tile.matched ? "item" : "item"}>{(props.tile.isOpen) ? props.tile.emoji : props.tile.mask}</button>
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
      timerHanlde: undefined,
      maxTileNumber: 5,
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

  buildTileData() {

    let length = this.state.maxTileNumber;

    const tiles = [];
    const mask = "😜";
    const clown = "🤡";
    const baseEmojis = `
    🔥,🙈,❤️,🐶,🦊,🦁,🦚,🦩,💣,🎈,💎,☎️,🗿,🍉,🍋,🍎,🥭,🍕,🍟,🎂,🐬,
    🦋,🌷,🍁,🌞,🌈,🏝️,⚽,🎭,😍,🤠,👻,👸,🧙,🧞,🦄,🍫,🍭,💐,🌊,
    🧙‍♀️,🧚‍♀️,🧞‍♀️,🐘,🐰,🐻,🐨,🐧,🕊️,🦢,🦜,🐢,🦈,🐝,🐞,🌊,☃️,🌜,🍀,🦀,🌻,
    💌,🧭,⌛,⛱️,🧨,🎀,🎁,🪁,🧸,🔋,🔑,🔒,🔫,🧲,🛒,🧛‍♀️,👩‍🍳,🤗,👽,🥺
    `.split(",");
    const emojis1 = baseEmojis.splice(0, length / 2);
    const emojis2 = emojis1.slice();

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
          if (this.state.matchCounter === Math.floor(this.state.matchCounter / 2)) {
            console.log(" all match timer stopped");
            window.clearInterval(this.state.timerHanlde);
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

  initTimer(elmentId) {
    const el = document.getElementById(elmentId);
    // console.log("int ", el);
    let timerHandle = window.setInterval(function () {
      el.innerText = el.innerText === "" ? 0 : parseInt(el.innerText) + 1;
      // console.log("timer inc", el.innerText);
    }, 1000);
    this.setState({ timerHandle: timerHandle }, () => console.log("timer handle is set"));
  }

  handleClick(event) {
    const tileId = event.target.id;

    if (this.state.tiles[tileId].isOpen) {
      console.warn("click on invalid tile");
      return;
    }

    this.setState({ clickCounter: this.state.clickCounter + 1 }, () => {
      if (this.state.clickCounter === 1) {
        this.initTimer("timer-container");
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
        <header id="header">Taptap</header>
        <Board className={"center-me"} tiles={this.state.tiles} onClick={(x) => this.handleClick(x)} ></Board>
        <p id="clicks-container">clicks: {this.state.clickCounter}</p>
        <p id="matches-container">matches: {this.state.matchCounter}</p>
        <p id="timer">Timer: <span id="timer-container"></span></p>
      </div>
    );
  }
}

export default App;
