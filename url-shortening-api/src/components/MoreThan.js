import morethanImage from '../images/illustration-working.svg'

const MoreThan = () => {
    return ( 
        <div className="morethan">
            <article>
                <h2>More than just shorter links</h2>
                <p>
                Build your brand’s recognition and get detailed insights on how your links are performing.
                </p>
                <button>Get Started</button>
            </article>
            <img src={morethanImage} alt='morethan-img'></img>
        </div>
     );
}
 
export default MoreThan;