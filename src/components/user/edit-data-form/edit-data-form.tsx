import { useState, useRef, SyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'

//import styles from './edit-data-form.module.css'
import { editUserDataRequest } from '../../../utils/burger-api'
import { AUTH_SIGN_IN } from '../../../services/actions/auth'

export const EditDataForm = () => {
    // @ts-ignore
    const user = useSelector(store => store.auth.user);
    const dispatch = useDispatch();
    const [editFormState, setEditFormState] = useState({
        name: user.name,
        email: user.email,
        password: ''
    });
    const [editInputState, setEditInputState] = useState({
        name: true,
        email: true,
        password: true
    });
    const [editResult, setEditResult] = useState<boolean | string>(false);
    const nameInputRef = useRef<HTMLInputElement | null>(null);
    const emailInputRef = useRef<HTMLInputElement | null>(null);
    const passwordInputRef = useRef<HTMLInputElement | null>(null);

    const resetEditedValues = (e: SyntheticEvent) => {
        e.preventDefault();
        setEditFormState({
            name: user.name,
            email: user.email,
            password: ''
        })
    }
    
    const editUserData = async (e: SyntheticEvent) => {
        e.preventDefault();
        setEditResult(false);
        editUserDataRequest(editFormState)
        .then(data => {
            if (data.success) {
                setEditResult('Данные успешно измененны!');
                setEditFormState({
                    name: data.user.name,
                    email: data.user.email,
                    password: ''
                });
                dispatch({
                    type: AUTH_SIGN_IN,
                    payload: data.user
                })
            } else {
                setEditResult(data.message);
            }
        }).catch(err => setEditResult(err.message));
    }

  return (
    <form onSubmit={editUserData} className={`pt-30`}>
        <div className='mb-6'>
            <Input
                type='text'
                placeholder='Имя'
                value={editFormState.name}
                onChange={e => setEditFormState({
                    ...editFormState,
                    name: e.target.value
                })}
                ref={nameInputRef}
                name='userName'
                error={false}
                errorText='Error!'
                size='default'
                icon={editInputState.name ? 'EditIcon' : undefined}
                onIconClick={(e) => {
                    setEditInputState({
                        ...editInputState,
                        name: !editInputState.name
                    })
                    setTimeout(() => {
                        nameInputRef.current?.focus();
                    },50);
                }}
                disabled={editInputState.name}
                onBlur={() => setEditInputState({
                    ...editInputState,
                    name: true
                })}
            />
        </div>
        <div className='mb-6'>
            <Input
                type='email'
                placeholder='E-mail'
                value={editFormState.email}
                onChange={e => setEditFormState({
                    ...editFormState,
                    email: e.target.value
                })}
                ref={emailInputRef}
                name='userEmail'
                error={false}
                errorText='Error!'
                size='default'
                icon={editInputState.email ? 'EditIcon' : undefined}
                onIconClick={()=>{
                    setEditInputState({
                        ...editInputState,
                        email: !editInputState.email
                    })
                    setTimeout(() => {
                        emailInputRef.current?.focus();
                    },50);
                }}
                disabled={editInputState.email}
                onBlur={() => setEditInputState({
                    ...editInputState,
                    email: true
                })}
            />
        </div>
        <div className='mb-6'>
            <Input
                type={'password'}
                placeholder='Password'
                value={editFormState.password}
                onChange={e => setEditFormState({
                    ...editFormState,
                    password: e.target.value
                })}
                ref={passwordInputRef}
                name='userPassword'
                error={false}
                errorText='Error!'
                size='default'
                icon={editInputState.password ? 'EditIcon' : undefined}
                onIconClick={()=>{
                    setEditInputState({
                        ...editInputState,
                        password: !editInputState.password
                    })
                    setTimeout(() => {
                        passwordInputRef.current?.focus();
                    },50);
                }}
                disabled={editInputState.password}
                onBlur={() => setEditInputState({
                    ...editInputState,
                    password: true
                })}
            />
        </div>
        {(editFormState.name !== user.name ||
         editFormState.email !== user.email ||
         editFormState.password !== ''
         ? (<div>
            <Button htmlType="reset" type="secondary" onClick={resetEditedValues}>Отмена</Button>
            <Button htmlType="submit">Сохранить</Button>
         </div>)
         : (<></>)
        )}
        {
            (editResult) && (
                <div className='text text_type_main-default text_color_inactive mt-4'>{ editResult }</div>
            )
        }
    </form>
  )
}
