//hooks
import React from 'react';

//features
import { handleSubmit } from '../Features/handleSubmit';

//interfaces
import { IPropsHeader } from '../Interfaces/interfaces';

//styles
import { ButtonSubmit } from '../assets/styles/App/ButtonSubmit';
import { Form } from '../assets/styles/App/Form';
import { Input } from '../assets/styles/App/Input';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({
    handleInputChange,
    inputValue,
    setInputValue,
    setIsInputEmpty,
    setTasks,
    dateOption,
    date,
    priorityOption,
    flagOption,
    isInputEmpty,
}: IPropsHeader) => {
    return (
        <Form
            onSubmit={(e) =>
                handleSubmit(
                    e,
                    inputValue,
                    setInputValue,
                    setIsInputEmpty,
                    setTasks,
                    dateOption,
                    date,
                    priorityOption,
                    flagOption
                )
            }
        >
            <Input
                onChange={handleInputChange}
                value={inputValue}
                placeholder={
                    isInputEmpty === true
                        ? 'Task cannot be empty, write here...'
                        : 'New task write here ....'
                }
                className={isInputEmpty === true ? 'warning' : undefined}
            />
            <ButtonSubmit type="submit">
                <FontAwesomeIcon icon={faArrowDown} />
            </ButtonSubmit>
        </Form>
    );
};

export default Header;
