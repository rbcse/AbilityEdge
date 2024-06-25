import '../../styles/homecss/cta.css';
function CtaBox(props){
    return <div className="box">
        <h1>{props.heading1}</h1>
        <h2>{props.heading2}</h2>
        <p>{props.para}</p>
        <a href={props.link}>{props.btn}</a>
    </div>
}
export default CtaBox;