import React from 'react';

//styles
import { AdditionalContainer } from '../assets/styles/App/AdditionalContainer';
import { CircleOptions } from '../assets/styles/App/CircleOptions';
import { DateContainer } from '../assets/styles/App/DateContainer';
import { OptionContainer } from '../assets/styles/App/OptionContainer';
import { OptionsContainer } from '../assets/styles/App/OptionsContainer';
import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//interfaces
import { IPropOptions } from '../Interfaces/interfaces';

const Options = ({
    moreOptionsActive,
    setMoreOptionsActive,
    dateOption,
    setDateOption,
    setDate,
    date,
    priorityOption,
    setPriorityOption,
    flagOption,
    setFlagOption,
}: IPropOptions) => {
    return (
        <AdditionalContainer
            className={moreOptionsActive ? 'active' : undefined}
        >
            <button
                onClick={() => {
                    setMoreOptionsActive((prevState) => !prevState);
                }}
            >
                More options <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <OptionsContainer>
                <DateContainer className={dateOption ? 'active' : undefined}>
                    <div>
                        Date:
                        <CircleOptions
                            style={
                                dateOption
                                    ? { backgroundColor: '#4ade80' }
                                    : undefined
                            }
                            onClick={() => {
                                setDateOption((prevState) => !prevState);
                                if (dateOption === false) {
                                    setDate(
                                        new Date().toLocaleDateString('en-CA')
                                    );
                                }
                            }}
                        >
                            {dateOption && <FontAwesomeIcon icon={faCheck} />}
                        </CircleOptions>
                    </div>
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        type="date"
                    />
                </DateContainer>
                <OptionContainer>
                    <label htmlFor="priority">Priority:</label>
                    <select
                        value={priorityOption}
                        onChange={(e) => {
                            setPriorityOption(e.target.value);
                        }}
                        id="priority"
                    >
                        <option value="">None</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </OptionContainer>
                <OptionContainer>
                    Flag:
                    <CircleOptions
                        style={
                            flagOption
                                ? { backgroundColor: '#4ade80' }
                                : undefined
                        }
                        onClick={() => setFlagOption((prevState) => !prevState)}
                    >
                        {flagOption && <FontAwesomeIcon icon={faCheck} />}
                    </CircleOptions>
                </OptionContainer>
            </OptionsContainer>
        </AdditionalContainer>
    );
};

export default Options;
