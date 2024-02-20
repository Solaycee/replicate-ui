import "./App.css";
import Header from "./Header";
import Filterbar from "./Filterbar";
import Homepage from "./Homepage";
import Collection from "./Collection";
import FooterLV from "./FooterLV";
import Footer from "./Footer";

function Items(volt) {
  const voltCollection = [
    {
      image: (
        <img
          src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-ring--Q9Q35A_PM2_Front%20view.png?wid=490&hei=490"
          alt="LV Volt One Ring"
          className="img-fluid voltItemImage"
        />
      ),
      text: "LV Volt One ring",
      stock: 0,
      exclusive: "yes",
    },
    {
      image: (
        <img
          src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-earrings--Q06088_PM2_Front%20view.png?wid=490&hei=490"
          alt="LV Volt One Earrings"
          className="img-fluid voltItemImage"
        />
      ),
      text: "LV Volt One Earrings",
      stock: 0,
      exclusive: "no",
    },
    {
      image: (
        <img
          src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-pendant--Q93923_PM2_Front%20view.png?wid=490&hei=490"
          alt="LV Volt One Pendant"
          className="img-fluid voltItemImage"
        />
      ),
      text: "LV Volt One Pendant",
      stock: 4,
      exclusive: "yes",
    },
    {
      image: (
        <img
          src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-stud--Q06485_PM2_Front%20view.png?wid=490&hei=490"
          alt="LV Volt One Stud"
          className="img-fluid voltItemImage"
        />
      ),
      text: "LV Volt One Stud",
      stock: 2,
      exclusive: "yes",
    },
    {
      image: (
        <img
          src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-stud--Q06484_PM2_Front%20view.png?wid=490&hei=490"
          alt="LV Volt One Stud"
          className="img-fluid voltItemImage"
        />
      ),
      text: "LV Volt One Stud",
      stock: 8,
      exclusive: "no",
    },
    {
      image: (
        <img
          src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-brooch--Q97206_PM2_Front%20view.png?wid=490&hei=490"
          alt="LV Volt One Brooch"
          className="img-fluid voltItemImage"
        />
      ),
      text: "LV Volt One Brooch",
      stock: 4,
      exclusive: "yes",
    },
    {
      image: (
        <img
          src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-upside-down-play-large-bracelet--Q05849_PM2_Front%20view.png?wid=490&hei=490"
          alt="LV Volt Upside Down Play Large Bracket"
          className="img-fluid voltItemImage"
        />
      ),
      text: "LV Volt Upside Down Play Large Bracket",
      stock: 3,
      exclusive: "no",
    },
    {
      image: (
        <img
          src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-upside-down-play-large-bracelet--Q05858_PM2_Front%20view.png?wid=490&hei=490"
          alt="LV Volt Upside Down Play Large Bracket"
          className="img-fluid voltItemImage"
        />
      ),
      text: "LV Volt Upside Down Play Large Bracket",
      stock: 0,
      exclusive: "yes",
    },
  ];
  return <Collection voltCollection={voltCollection} />;
}

function MyFooter() {
  const firstColFooter = [
    { text: <span className="paralumiit">HELP</span>, link: "/" },
    {
      text: (
        <span>
          You can <span className="line">call</span> or{" "}
          <span className="line">email us</span>
        </span>
      ),
      link: "/",
    },
    { text: "FAQ's", link: "/" },
    { text: "Product Care", link: "/" },
    { text: "Stores", link: "/" },
  ];

  const secondColFooter = [
    { text: <span className="paralumiit">SERVICES</span>, link: "/" },
    { text: "Repairs", link: "/" },
    { text: "Personalization", link: "/" },
    { text: "Art of Gifting", link: "/" },
    { text: "Download our Apps", link: "/" },
  ];

  const thirdColFooter = [
    {
      text: <span className="paralumiit">ABOUT LOUIS VUITTON</span>,
      link: "/",
    },
    { text: "Fashion Shows", link: "/" },
    { text: "Arts & Culture", link: "/" },
    { text: "La Maison", link: "/" },
    { text: "Sustainability", link: "/" },
    { text: "Latest News", link: "/" },
    { text: "Careers", link: "/" },
    { text: "Foundation Louis Vuitton", link: "/" },
  ];

  const fourthColFooter = [
    { text: <span className="paralumiit">CONNECT</span>, link: "/" },
    {
      text: (
        <span>
          <span className="line">Sign</span> up for first access to latest
          collections, campaigns and videos.
        </span>
      ),
      link: "/",
    },
    { text: "Follow Us", link: "/" },
  ];

  return (
    <div>
      <Footer
        firstColFooter={firstColFooter}
        secondColFooter={secondColFooter}
        thirdColFooter={thirdColFooter}
        fourthColFooter={fourthColFooter}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Filterbar />
      <Homepage />
      <Items />
      <MyFooter />
      <FooterLV />
    </div>
  );
}

export default App;
