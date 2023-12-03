export const TextField = ({lbl, inputref, val})=>{
    if(val){
        inputref.current.val = val;
    }
    console.log('TextField ', val);
    const placeHolder = `Type ${lbl}`;
        return (<div>
            <label>{lbl}</label>
            <input ref={inputref} className="form-control" type="text" placeholder={placeHolder}/>
        </div>) 
}