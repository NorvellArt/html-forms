import './checkbox.styles.scss'

const Checkbox = (props) => {

    return(
        <div className='checkbox'>
            <input type="checkbox" onChange={props.func}/>
        </div>
    )

}

export default Checkbox;