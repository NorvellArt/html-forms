import './checkbox.styles.scss'

const Checkbox = (props) => {

    
    return(
        <div className='checkbox'>
            <input type="checkbox" onChange={props.func} checked={props.value?'checked':''} />
        </div>
    )

}

export default Checkbox;