function NameLocation({name, city }) {
    return (
        <div className="name-city">
            <p className="name-social">{name}</p>
            <p className="city-social">{city}</p>
        </div>
    );
}

export default NameLocation;