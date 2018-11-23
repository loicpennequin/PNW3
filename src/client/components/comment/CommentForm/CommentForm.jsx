import React, { useState } from 'react';
import { subscribe } from 'react-contextual';
import { Form, Text } from 'informed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import onOutsideClick from './../../UI/onOutsideClick/onOutsideClick.js';
import Avatar from './../../UI/Avatar/Avatar.jsx';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import css from './CommentForm.sass';

const CommentForm = ({ onSubmit, currentUser }) => {
    const [showemojis, setShowemojis] = useState(false);

    const toggleEmojis = () => {
        setShowemojis(!showemojis);
    };

    return (
        <div className={css.wrapper}>
            <Avatar size="sm" user={currentUser} />
            <Form
                onSubmit={formState => onSubmit(formState)}
                className={css.form}
            >
                {({ formState, formApi }) => {
                    const EmojiPicker = onOutsideClick(() => (
                        <div className={css['emoji-picker']}>
                            <Picker
                                emoji=""
                                include={['people']}
                                onSelect={emoji =>
                                    formApi.setValue(
                                        'body',
                                        (formApi.getValue('body') || '') +
                                            emoji.native
                                    )
                                }
                            />
                        </div>
                    ));
                    return (
                        <>
                            <div className={css.input_wrapper}>
                                <Text
                                    field="body"
                                    className={css.input}
                                    placeholder="your comment"
                                />
                                <button
                                    type="button"
                                    className={css['action-button']}
                                    onClick={toggleEmojis}
                                >
                                    <FontAwesomeIcon
                                        icon={['far', 'smile']}
                                        fixedWidth
                                    />
                                </button>
                                {showemojis && (
                                    <EmojiPicker
                                        onClickOutside={toggleEmojis}
                                    />
                                )}
                            </div>
                        </>
                    );
                }}
            </Form>
        </div>
    );
};

function mapStoreToProps(store) {
    return {
        currentUser: store.currentUser
    };
}

export default subscribe(mapStoreToProps)(CommentForm);
