function Socials({urls}) {
    const socialsArr = Object.entries(urls);

    return (
        <ul className="socials-list">
            {
                socialsArr.map(([key, value]) => {
                    {console.log(`${key} ${value}`)}
                    return <a key={key} href={value} className="socials-link"><li className="socials-list-item">{key}</li></a>
                })
            }
        </ul>
    );
}

export default Socials;