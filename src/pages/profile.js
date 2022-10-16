import { useState, useRef } from 'react'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './css/profile.module.css'
import { useSelector } from 'react-redux'

export const ProfilePage = () => {
    const user = useSelector(store => store.auth.user);
    const [userNameValue, setUserNameValue] = useState(user.name);
    const [userEmailValue, setUserEmailValue] = useState(user.email);
    const [userPasswordValue, setUserPasswordValue] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [editInputState, setEditInputState] = useState({
        nameField: true,
        emailField: true,
        passwordField: true
    });
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);


  return (
    <main className={`${styles.main} pt-30`}>
        <div>
            <h3>test</h3>
        </div>
        <div className={`${styles.fieldsWrapper}`}>
            <form>
                <div className='mb-6'>
                    <Input
                        type='text'
                        placeholder='Имя'
                        value={userNameValue}
                        onChange={e => setUserNameValue(e.target.value)}
                        ref={nameInputRef}
                        name='userName'
                        error={false}
                        errorText='Error!'
                        size='default'
                        icon={'EditIcon'}
                        onIconClick={(e) => {
                            setEditInputState({
                                ...editInputState,
                                nameField: !editInputState.nameField
                            })
                        }}
                        disabled={editInputState.nameField}
                        onBlur={() => setEditInputState({
                            ...editInputState,
                            nameField: true
                        })}
                    />
                </div>
                <div className='mb-6'>
                    <Input
                        type='email'
                        placeholder='E-mail'
                        value={userEmailValue}
                        onChange={e => setUserEmailValue(e.target.value)}
                        ref={emailInputRef}
                        name='userEmail'
                        error={false}
                        errorText='Error!'
                        size='default'
                        icon={'EditIcon'}
                        onIconClick={()=>setEditInputState({
                            ...editInputState,
                            emailField: !editInputState.emailField
                        })}
                        disabled={editInputState.emailField}
                        onBlur={() => setEditInputState({
                            ...editInputState,
                            emailField: true
                        })}
                    />
                </div>
                <div className='mb-6'>
                    <Input
                        type={'password'}
                        placeholder='Password'
                        value={userPasswordValue}
                        onChange={e => setUserPasswordValue(e.target.value)}
                        ref={passwordInputRef}
                        name='userPassword'
                        error={false}
                        errorText='Error!'
                        size='default'
                        icon={'EditIcon'}
                        onIconClick={()=>setEditInputState({
                            ...editInputState,
                            passwordField: !editInputState.passwordField
                        })}
                        disabled={editInputState.passwordField}
                        onBlur={() => setEditInputState({
                            ...editInputState,
                            passwordField: true
                        })}
                    />
                </div>
            </form>
        </div>
    </main>
  )
}
