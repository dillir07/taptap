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
      name: "dilli",
      click1TileId: -1,
      click2TileId: -1,
      clickCounter: 0,
      maxTileCount: 40,
      tiles: [],
    }
  }

  calculateTileCount() {
    console.log("calulating tile count");
    const width = window.innerWidth;

    if (width > 1025) tileCount = 15 * 8;
    else if (width > 801 && width < 1024) tileCount = 12 * 7;
    else if (width > 641 && width < 800) tileCount = 10 * 6;
    else if (width > 640) tileCount = 5 * 6;
    else tileCount = 20;
    console.log("new tile count", tileCount);
    return tileCount % 2 === 0? tileCount : tileCount + 1;
  }

  buildTileData() {
    let length = this.calculateTileCount();
    console.log("build tile data", length);
    const tiles = [];
    const mask = "😜";
    const baseEmojis = `
    🔥,🙈,❤️,🐶,🦊,🦁,🦚,🦩,💣,🎈,💎,☎️,🗿,🍉,🍋,🍎,🥭,🍕,🍟,🎂,🐬,
    🦋,🌷,🍁,🌞,🌈,🏝️,⚽,🎭,😍,🤠,🤡,👻,👸,🧙,🧞,🦄,🍫,🍭,💐,🌊,
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
      tiles.push(new TileData(index, emojiToPlace, mask));
    }

    // console.log("");
    this.setState({ tiles: tiles }, () => console.log("tiles are built by builder"));
  }

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
        this.setState({ click1TileId: -1, click2TileId: -1 }, () => console.log("matched tiles closed"));
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

  handleClick(event) {
    const tileId = event.target.id;

    if (this.state.tiles[tileId].isOpen) {
      console.warn("click on invalid tile");
      return;
    }

    this.setState({ clickCounter: this.state.clickCounter + 1 }, () => {

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
    window.addEventListener('load',() => {
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
        {/* <header>click Counter: {this.state.clickCounter}</header>
        <header>click1TileId: {this.state.click1TileId}</header>
        <header>click2TileId: {this.state.click2TileId}</header>
        <header>is open for Clickcount: {this.state.clickCounter % 2 === 0 ? "No" : "Yes"}</header> */}
        <Board className={"center-me"} tiles={this.state.tiles} onClick={(x) => this.handleClick(x)} ></Board>
      </div>
    );
  }
}

export default App;
