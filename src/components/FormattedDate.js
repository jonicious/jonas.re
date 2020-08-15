import PropTypes from 'prop-types';

export const FormattedDate = ({ date }) => {
    return new Intl.DateTimeFormat('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);
};

FormattedDate.propTypes = {
    date: PropTypes.object
};
