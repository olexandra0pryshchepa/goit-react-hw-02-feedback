export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <ul>
                {options.map(option => {
                    return (
                        <li key={option}>
                            <button onClick={() => onLeaveFeedback(option)}>
                                {option}
                            </button>
                       </li>
                   );
               })}
            </ul>
        </div>
    )
};