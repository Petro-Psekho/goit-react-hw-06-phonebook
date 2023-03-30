import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addContact } from 'redux/contactsSlice';
import { getContactsItems } from 'redux/contactsSlice';

import {
  ErrMessage,
  FormWrap,
  FormInput,
  InputName,
  SubmitBtn,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContactsItems);
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    reset,
  } = useForm({
    defaultValuers: {
      name: '',
      number: '',
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const formSubmitData = data => {
    const currentName = contactsItems.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (currentName)
      // return alert(currentName.name + ' is already in contacts.');
      // return toast.loading('Waiting...');
      return toast.error(`${data.name} is already in contacts`);

    dispatch(addContact(data));
    toast.success(`${data.name} added to your phonebook`);
  };

  return (
    <FormWrap onSubmit={handleSubmit(formSubmitData)}>
      <InputName>Name</InputName>
      <FormInput
        autoComplete="off"
        {...register('name', {
          required: 'name is a required field',
          minLength: { value: 3, message: 'min lenght is 3' },
          pattern: {
            value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            message:
              'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan.',
          },
        })}
        placeholder="Enter Name"
      />

      <ErrMessage>{errors.name?.message}</ErrMessage>

      <InputName>Number</InputName>
      <FormInput
        autoComplete="off"
        {...register('number', {
          required: 'number is a required field',
          pattern: {
            value:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
          },
        })}
        placeholder="Enter Number"
      />
      <ErrMessage>{errors.number?.message}</ErrMessage>

      {errors.exampleRequired && <p>This field is required</p>}

      <SubmitBtn type="submit">Add Contact</SubmitBtn>
    </FormWrap>
  );
};
