function Footer(props) {
  return (
    <div className="footer">
      <div className="columns">
        <ul className="footer-col">
          {props.firstColFooter.map((help, index) => (
            <li key={index} className="style">
              <a href={help.link}>{help.text}</a>
            </li>
          ))}
        </ul>
        <ul className="footer-col">
          {props.secondColFooter.map((help, index) => (
            <li key={index} className="style">
              <a href={help.link}>{help.text}</a>
            </li>
          ))}
        </ul>
        <ul className="footer-col">
          {props.thirdColFooter.map((help, index) => (
            <li key={index} className="style">
              <a href={help.link}>{help.text}</a>
            </li>
          ))}
        </ul>
        <ul className="footer-col">
          {props.fourthColFooter.map((help, index) => (
            <li key={index} className="style">
              <a href={help.link}>{help.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
