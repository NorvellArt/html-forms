import './html-page.styles.scss'
 


const HtmlPage = (props)=> {

    const html = <span>{`
    <form>
        dfsadsad
    </form>
    `}</span>

    return(
        <div className='html-page'>
            <div className='html-container'>
                {html}
            </div>
        </div>
    )

}

export default HtmlPage;