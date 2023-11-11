
export default function newsCardd (
    {
        name,
        hair_color,
        eye_color,
        birth_year,
        gender,
    }
) {

    return(
        <>
        
<ul>
    <li>name: {name}</li>
    <li>hair_color: {hair_color} </li>
    <li>eye_color: {eye_color} </li>
    <li>birth_year: {birth_year} </li>
    <li>gender: {gender} </li> 
</ul>
        </>
    );
}






