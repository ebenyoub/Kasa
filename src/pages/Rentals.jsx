import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../utils/context";
import Slider from "../components/Slider";
import styled from "styled-components"
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";

const StyledLoader = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Rentals = () => {
    const { id } = useParams();
    // console.log(`Rental => rendering (${id})`);
    const { datas } = useContext(DataContext);
    const rental = datas && datas.find(data => data.id === id);

    if (!rental) {
        return <StyledLoader>Loading...</StyledLoader>;
    }

    const hostName = rental.host.name.split(" ");

    const tagList = rental.tags.map((tag, index) => <Tag key={index} tagName={tag} />);

    return (
        <main className="rental">
            <Slider rental={rental} />
            <div className="rental__info">
                <div className="rental__info__title">
                    <h1>{rental.title}</h1>
                    <p>{rental.location}</p>
                    <div className="tagList">
                        {tagList}
                    </div>
                </div>
                <div className="rental__info__user">
                    <div className="rental__info__profile">
                        <div className="rental__info__profil--name">
                            <p>{hostName[0]}</p>
                            <p>{hostName[1]}</p>
                        </div>
                        <img src={rental.host.picture} alt={rental.host.name + " portrait"} />
                    </div>
                    <div className="rental__info__rating">
                        <Rating rating={rental.rating} />
                    </div>
                </div>
            </div>
            <div className="rental__dropdown">
                <Dropdown key="0" width="50" data={rental.description} id={id} title={"Description"} />
                <Dropdown key="1" width="50" data={rental.equipments} id={"ul"+id} title={"Equipements"} ul={true} />
            </div>
        </main>
    );
};

export default Rentals;
