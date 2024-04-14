import PropTypes from "prop-types"

const Tag = ({ tagName }) => {
    return (
        <div className='tag'>
            {tagName}
        </div>
    );
}

Tag.propTypes = {
    tagName: PropTypes.string.isRequired
}

export default Tag;
