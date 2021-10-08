import './html-button.styles.scss'

const HtmlButton = (props) => {

    return(
        <div className='html-button-container'>
            <button className='html-button' onClick={props.func}>View HTML markup</button>
        </div>
    )

}

export default HtmlButton;