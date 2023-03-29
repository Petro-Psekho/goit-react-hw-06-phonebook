import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

import {
  ListItem,
  DeleteContactItem,
  ContactItem,
} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem key={id}>
      <ContactItem>
        {name}: {number}
      </ContactItem>

      <DeleteContactItem onClick={() => onDelete(id)}>
        <MdDeleteForever size={20} color={'lightCoral'} />
      </DeleteContactItem>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
