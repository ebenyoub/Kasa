import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"


const StyledDropdown = styled.div`
    max-width: ${props => props.$width}%;
`

const Dropdown = ({ width, data, id, ul, title }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleKey = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            toggleDropdown()
        }
    }

    return (
        <StyledDropdown className="dropdown" $width={width} tabIndex={0} onKeyDown={handleKey}>
            <input
                type="checkbox"
                name="dropdown"
                id={id}
                checked={isOpen}
                onChange={toggleDropdown}
            />
            <label htmlFor={id}>
                {title}
            </label>
            <div className="dropdown-content">
                {ul ? (
                    <ul tabIndex={-1}>
                        {data.map((item, index) => (
                            <li key={`${id}_${index}`}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{data}</p>
                )}
            </div>
        </StyledDropdown>
    );
};

Dropdown.propTypes = {
    width: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    id: PropTypes.string.isRequired,
    ul: PropTypes.bool,
    title: PropTypes.string.isRequired
}

export default Dropdown