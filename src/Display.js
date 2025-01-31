function Display(values){
    // const {n,roll,gender,obj}=values
    const {n,roll,obj,gender}=values
    const {empname,city}=obj
    return(
        <>
        <h3>im coming from datas.js {n} {roll} {gender}</h3>
        <h2>{empname},{city}</h2>
        <h2>this is from Display</h2>
        <h4>im the sec line</h4>
        </>
    )
}
export default Display