import "../index.css";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar" />
      <p>+91 {props.tel}</p>
      <p>Email : {props.email} </p>
    </div>
  );
}

export default Card;
