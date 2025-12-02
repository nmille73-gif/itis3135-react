export default function StudentIntroduction({data, displayName, displayMascot, displayImage, displayPersonalStatement, displayBackgrounds, displayClasses, displayExtraInformation, displayQuote, displayLinks}) {
    return <article>
        <h3>

            {
                displayName &&
                `${data.name.first} ${" "}
                ${data.name.middleInitial ? data.name.middleInitial + ". " : ""} ${" "}
                ${data.name.preferred ? '"' + data.name.preferred + '"': ""} ${" "}
                ${data.name.last} ${" "}`
            }
             {
                displayName && displayMascot &&
                `${data.divider} ${" "}`
            }
            {
                displayMascot &&
                `${data.mascot} ${" "}`
            }
        </h3>
        { 
        displayImage ? (<figure>
            <img src={`https://dvonb.xyz${data.media.src}`} style={{ width: '30%' }} alt={data.media.caption} />
            <figcaption>{data.media.caption}</figcaption>
        </figure>) : ""
        
        }
        {
            displayPersonalStatement &&
            <p className="personal-statement">{data.personalStatement} </p>
        }
        <ul>
        {
            displayBackgrounds &&
            <>
            <li><strong>Personal Background:</strong> {data.backgrounds.personal}</li>
            <li><strong>Professional Background:</strong> {data.backgrounds.professional}</li>
            <li><strong>Academic Background:</strong> {data.backgrounds.academic}</li>
            </>
            
        }
        
    <li><strong>Primary Computer:</strong> I use an {data.platform.device}, {data.platform.os}, laptop, primarily at my apartment.</li>
    {
        displayClasses &&
        <li><strong>Courses I'm Taking & Why:</strong>
        <ol>
            {data.courses.map((course, courseIndex) => (
                <li key={courseIndex}>
                    <strong>{course.code} {course.name}:</strong> {course.reason}
                </li>
            ))}
        </ol>
        </li>
        }
    {
        displayExtraInformation && (
        <>
        {data.funFact && <li><strong>Funny/Interesting Item to Remember Me by:</strong> {data.funFact}</li>}
        {data.additional && <li><strong>Something Additional to Share: </strong>{data.additional}</li>}
        </>
        )
    }
        </ul>
        {
            displayQuote &&
            <>
             <p>"{data.quote.text}"</p> 
             <p>-{data.quote.author}</p>
             </>
        }
        {
            displayLinks &&
            <p>
            <a href={data.links.charlotte} target="_blank" rel="noopener noreferrer">Charlotte</a> {data.divider}{" "}
            <a href={data.links.github} target="_blank" rel="noopener noreferrer">GitHub</a> {data.divider}{" "}
            <a href={data.links.githubio} target="_blank" rel="noopener noreferrer">GitHub.io</a> {data.divider}{" "}
            <a href={data.links.itis3135} target="_blank" rel="noopener noreferrer">ITIS 3135</a> {data.divider}{" "}
            <a href={data.links.freecodecamp} target="_blank" rel="noopener noreferrer">freeCodeCamp</a> {data.divider}{" "}
            <a href={data.links.codecademy} target="_blank" rel="noopener noreferrer">Codecademy</a> {data.divider}{" "}
            <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        }
        
<hr/>
       </article> 
}