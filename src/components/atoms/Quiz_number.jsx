import done_quiz from "../../assets/done_quiz.svg";
const Quiz_number = ({ children, status }) => {
    return (
        <div className={`grid relative size-11.5 border-[1.1px] rounded ${status === "progress" ? "bg-tertiary-100 border-tertiary" : "border-other-border"}`}>
            {status === "done" ? (
                <img
                    src={done_quiz}
                    alt={children}
                    className="justify-self-end absolute"
                />
            ) : (
                ""
            )}
            <p className="font-bold leading-[140%] tracking-[0.2px] text-dark-primary text-center self-center">
                {children}
            </p>
        </div>
    );
};

export default Quiz_number;
