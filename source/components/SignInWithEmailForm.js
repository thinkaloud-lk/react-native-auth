/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import
{
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import useForm from 'react-hook-form';
import { useNavigation } from 'react-navigation-hooks';
import { useAuth } from '../hooks/useAuth'
import { emailRegEx } from '../utils/constants';

const styles = StyleSheet.create({
  text_input: {
    width: '100%',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    borderRadius: 10,
    zIndex: 2,
  },
  button_text: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  error_text: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  field_error_text: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
});

const SignInWithEmailForm = () => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const {
    register,
    setValue,
    errors,
    handleSubmit,
  } = useForm();

  const auth = useAuth();

  return (
    <View>
      <TextInput
        style={{ ...styles.text_input, borderBottomColor: errors.email ? 'red' : '#80cbc4' }}
        placeholder="EMAIL"
        keyboardType="email-address"
        autoCompleteType="email"
        ref={register({ name: 'email' }, { required: true, pattern: emailRegEx })}
        onChangeText={(text) => setValue('email', text, true)}
      />
      <Text style={styles.field_error_text}>
        {
          errors.email && errors.email.type === 'required' && 'Email is Required'
        }
        {
            errors.email && errors.email.type === 'pattern' && 'Email is not valid'
      }
      </Text>
      <TextInput
        style={{ ...styles.text_input, borderBottomColor: errors.password ? 'red' : '#80cbc4' }}
        placeholder="PASSWORD"
        secureTextEntry
        autoCompleteType="password"
        ref={register({ name: 'password' }, { required: true })}
        onChangeText={(text) => setValue('password', text, true)}
      />
      <Text style={styles.field_error_text}>
        {
            errors.password && errors.password.type === 'required' && 'Password is Required'
          }
      </Text>
      {
        formError ? (
          <Text style={styles.error_text}>
            {formError}
          </Text>
        )
          : null
      }
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(({ email, password }) => auth.signin(email, password))}
      >
        <ActivityIndicator animatingcolor="white" animating={loading} />
        <Text style={styles.button_text}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  )
} 

export default SignInWithEmailForm;
