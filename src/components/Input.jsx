export default function Input({title, ...props}){
    return <div>
            <label  >{title}</label>
            <input type="number" {...props} />
            </div>
}