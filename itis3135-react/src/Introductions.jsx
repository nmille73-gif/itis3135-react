import {useEffect, useState} from "react";
import StudentIntroduction from './StudentIntroduction';
import "./index.css";
export default function Introductions () {
    const [introductions, setIntroductions] = useState(null);
    const [error, setError] = useState(null);
    const [nameSearch, setNameSearch] = useState("");
    const [displayName, setDisplayName] = useState(true);
    const [displayMascot, setDisplayMascot] = useState(true);
    const [displayImage, setDisplayImage] = useState(true);
    const [displayPersonalStatement, setDisplayPersonalStatement] = useState(true);
    const [displayBackgrounds, setDisplayBackgrounds] = useState(true);
    const [displayClasses, setDisplayClasses] = useState(true);
    const [displayExtraInformation, setDisplayExtraInformation] = useState(true);
    const [displayQuote, setDisplayQuote] = useState(true);
    const [displayLinks, setDisplayLinks] = useState(true);
    const [displaySlideshow, setDisplaySlideshow] = useState(false);
    const [indexOfSlideshow, setIndexOfSlideshow] = useState(0);
    useEffect( () => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
        .then((response) => {
            if(!response.ok) {
                throw new Error("Network response was not ok");
            } 
            return response.json();
        })
        .then((data) => setIntroductions(data))
        .catch((error) => setError(error.message));
    }, []);

    if (error) return <p>Error: {error}</p>;
    if (!introductions) return <p>Loading...</p>;

    const filteredIntroductionData = introductions.filter((data) => {
        if (nameSearch === "") return true;
        const fullName = `${data.name.first} ${data.name.middleInitial}. "${data.name.preferred}" ${data.name.last}`;
        return fullName.toLowerCase().includes(nameSearch.toLowerCase());
    });

    if (error) return <p>Error: {error}</p>;
    if (!introductions) return <p>Loading...</p>;

    return <>
    <label>
    Search For Student:&nbsp;&nbsp;
        <input type="text" onChange={(event) => setNameSearch(event.target.value)}></input>
        &nbsp;&nbsp; Name Search: &nbsp;&nbsp; <strong>{nameSearch}</strong>
    </label>
    <section>
        <h3>Show Items:</h3>
        <label>
            Name:&nbsp;&nbsp;
            <input type="checkbox" checked={displayName} onClick={() => setDisplayName(!displayName)}/>
        </label>
        <br></br>
        <label>
            Mascot:&nbsp;&nbsp;
            <input type="checkbox" checked={displayMascot} onClick={() => setDisplayMascot(!displayMascot)}/>
        </label>
        <br></br>
        <label>
            Image: 
            <input type="checkbox" checked={displayImage} onClick={() => setDisplayImage(!displayImage)} ></input>
        </label>
        <br></br>
        <label>
            Personal Statement: 
            <input type="checkbox" checked={displayPersonalStatement} onClick={() => setDisplayPersonalStatement(!displayPersonalStatement)} ></input>
        </label>
        <br></br>
        <label>
            Backgrounds: 
            <input type="checkbox" checked={displayBackgrounds} onClick={() => setDisplayBackgrounds(!displayBackgrounds)} ></input>
        </label>
        <br></br>
        <label>
            Classes: 
            <input type="checkbox" checked={displayClasses} onClick={() => setDisplayClasses(!displayClasses)} ></input>
        </label>
        <br></br>
        <label>
            Extra Information: 
            <input type="checkbox" checked={displayExtraInformation} onClick={() => setDisplayExtraInformation(!displayExtraInformation)} ></input>
        </label>
        <br></br>
        <label>
            Quote: 
            <input type="checkbox" checked={displayQuote} onClick={() => setDisplayQuote(!displayQuote)} ></input>
        </label>
        <br></br>
        <label>
            Links: 
            <input type="checkbox" checked={displayLinks} onClick={() => setDisplayLinks(!displayLinks)} ></input>
        </label>
        <br></br>
        <button onClick = {() => setDisplaySlideshow(!displaySlideshow)}>
            {displaySlideshow ? "View All" : "View Slideshow"}
        </button>
    </section>

    {displaySlideshow ?
    <>
    <button onClick = {() => indexOfSlideshow + 1 >= introductions.length ? setIndexOfSlideshow(0) : setIndexOfSlideshow(indexOfSlideshow + 1)}>
        Next
    </button>
    <button onClick = {() => indexOfSlideshow - 1 < 0 ? setIndexOfSlideshow(introductions.length - 1) : setIndexOfSlideshow(indexOfSlideshow - 1)}>
        Previous
    </button>
     <StudentIntroduction 
     data={introductions[indexOfSlideshow]} 
     displayImage={displayImage} 
     displayName={displayName} 
     displayMascot={displayMascot}
     displayPersonalStatement={displayPersonalStatement}
     displayBackgrounds={displayBackgrounds}
     displayClasses={displayClasses}
     displayExtraInformation={displayExtraInformation}
     displayQuote={displayQuote}
     displayLinks={displayLinks}/>
    </>

    :

    filteredIntroductionData.map((data,index) => 
        <StudentIntroduction key={index} data={data} 
    displayName={displayName} 
    displayMascot={displayMascot} 
    displayImage={displayImage}
    displayPersonalStatement={displayPersonalStatement}
     displayBackgrounds={displayBackgrounds}
     displayClasses={displayClasses}
     displayExtraInformation={displayExtraInformation}
     displayQuote={displayQuote}
     displayLinks={displayLinks}
    ></StudentIntroduction>
    )
}
    </>
}